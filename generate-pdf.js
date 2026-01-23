const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generatePDF(htmlFile, pdfFile, title) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Read the HTML file
  const htmlContent = fs.readFileSync(htmlFile, 'utf8');

  // Add some basic styling for PDF
  const styledHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 11px;
      line-height: 1.5;
      max-width: 100%;
      padding: 20px;
    }
    h1 { font-size: 24px; color: #0057B8; margin-top: 0; }
    h2 { font-size: 18px; color: #333; border-bottom: 2px solid #0057B8; padding-bottom: 5px; page-break-after: avoid; }
    h3 { font-size: 14px; color: #444; page-break-after: avoid; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 10px; page-break-inside: avoid; }
    th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; }
    th { background-color: #0057B8; color: white; }
    tr:nth-child(even) { background-color: #f9f9f9; }
    code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: monospace; }
    pre { background: #f4f4f4; padding: 10px; overflow-x: auto; font-size: 9px; white-space: pre-wrap; }
    ul, ol { margin: 5px 0; padding-left: 20px; }
    li { margin: 2px 0; }
    hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
    strong { color: #0057B8; }
    @page { margin: 15mm; }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>
  `;

  await page.setContent(styledHTML, { waitUntil: 'networkidle' });

  await page.pdf({
    path: pdfFile,
    format: 'A4',
    margin: { top: '15mm', bottom: '15mm', left: '10mm', right: '10mm' },
    printBackground: true
  });

  console.log(`Generated: ${pdfFile}`);
  await browser.close();
}

async function main() {
  // Generate PDF for combined migration plan
  await generatePDF(
    '/workspace/ATT-COMBINED-MIGRATION-PLAN.html',
    '/workspace/ATT-COMBINED-MIGRATION-PLAN.pdf',
    'AT&T Business & FirstNet - Combined EDS Migration Plan'
  );

  // Generate PDF for combined page inventory
  await generatePDF(
    '/workspace/ATT-COMBINED-PAGE-INVENTORY.html',
    '/workspace/ATT-COMBINED-PAGE-INVENTORY.pdf',
    'AT&T Business & FirstNet - Combined Page Inventory'
  );

  console.log('All PDFs generated successfully!');
}

main().catch(console.error);
