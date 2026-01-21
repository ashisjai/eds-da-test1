const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePdf(htmlFile, pdfFile) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Read HTML content (already has base64 images embedded)
  const htmlContent = fs.readFileSync(htmlFile, 'utf8');

  // Set the content
  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Generate PDF with landscape for better screenshot viewing
  await page.pdf({
    path: pdfFile,
    format: 'A4',
    landscape: true,
    margin: { top: '15mm', right: '10mm', bottom: '15mm', left: '10mm' },
    printBackground: true
  });

  await browser.close();
  console.log(`PDF generated: ${pdfFile}`);
}

// Generate both PDFs from embedded HTML files
async function main() {
  await generatePdf(
    '/workspace/att-business-migration-plan-embedded.html',
    '/workspace/att-business-migration-plan.pdf'
  );
  await generatePdf(
    '/workspace/att-business-detailed-inventory-embedded.html',
    '/workspace/att-business-detailed-inventory.pdf'
  );
}

main().catch(console.error);
