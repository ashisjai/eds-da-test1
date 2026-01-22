const { chromium } = require('playwright');
const fs = require('fs');

async function generatePng(htmlFile, pngFile, width = 1400) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewportSize({ width: width, height: 1000 });

  // Read HTML content
  const htmlContent = fs.readFileSync(htmlFile, 'utf8');

  // Set the content
  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Take screenshot
  await page.screenshot({
    path: pngFile,
    fullPage: true
  });

  await browser.close();
  console.log(`PNG generated: ${pngFile}`);
}

async function main() {
  // Generate FirstNet architecture
  await generatePng(
    '/workspace/firstnet-future-state-architecture.html',
    '/workspace/firstnet-future-state-architecture.png',
    1400
  );

  // Generate AT&T Business architecture
  await generatePng(
    '/workspace/att-business-eds-architecture.html',
    '/workspace/att-business-eds-architecture.png',
    1200
  );
}

main().catch(console.error);
