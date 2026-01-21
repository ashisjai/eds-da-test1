const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePdf(htmlFile, pdfFile) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Read HTML content
  let htmlContent = fs.readFileSync(htmlFile, 'utf8');

  // Convert file:// URLs to base64 data URIs for images
  const screenshotDir = '/workspace/block-screenshots';
  const imgRegex = /src="file:\/\/([^"]+)"/g;
  let match;

  while ((match = imgRegex.exec(htmlContent)) !== null) {
    const imgPath = match[1];
    if (fs.existsSync(imgPath)) {
      const imgData = fs.readFileSync(imgPath);
      const base64 = imgData.toString('base64');
      const ext = path.extname(imgPath).slice(1);
      const dataUri = `data:image/${ext};base64,${base64}`;
      htmlContent = htmlContent.replace(`file://${imgPath}`, dataUri);
    }
  }

  // Set the content
  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Generate PDF
  await page.pdf({
    path: pdfFile,
    format: 'A4',
    margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
    printBackground: true
  });

  await browser.close();
  console.log(`PDF generated: ${pdfFile}`);
}

// Generate both PDFs
async function main() {
  await generatePdf(
    '/workspace/att-business-migration-plan.html',
    '/workspace/att-business-migration-plan.pdf'
  );
  await generatePdf(
    '/workspace/att-business-detailed-inventory.html',
    '/workspace/att-business-detailed-inventory.pdf'
  );
}

main().catch(console.error);
