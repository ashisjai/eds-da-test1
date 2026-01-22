const { chromium } = require('playwright');
const fs = require('fs');

async function generatePng() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewportSize({ width: 1400, height: 1000 });

  // Read HTML content
  const htmlContent = fs.readFileSync('/workspace/firstnet-future-state-architecture.html', 'utf8');

  // Set the content
  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Take screenshot
  await page.screenshot({
    path: '/workspace/firstnet-future-state-architecture.png',
    fullPage: true
  });

  await browser.close();
  console.log('PNG generated: /workspace/firstnet-future-state-architecture.png');
}

generatePng().catch(console.error);
