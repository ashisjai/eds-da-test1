const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const screenshotDir = '/workspace/firstnet-screenshots';

async function createFirstNetInventoryExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'FirstNet Migration';
  workbook.created = new Date();

  // Sheet 1: Executive Summary
  const ws1 = workbook.addWorksheet('Executive Summary');
  ws1.columns = [{ width: 35 }, { width: 50 }];
  ws1.addRow(['FirstNet Website Migration Plan']);
  ws1.getRow(1).font = { bold: true, size: 16, color: { argb: 'FF0057B8' } };
  ws1.addRow(['Migration to AEM Edge Delivery Services']);
  ws1.addRow([]);
  ws1.addRow(['Total Pages:', '700+ (per sitemap)']);
  ws1.addRow(['Website:', 'www.firstnet.com']);
  ws1.addRow(['Project Type:', 'Public Safety Network Site Migration']);
  ws1.addRow(['Block Variations Documented:', '78']);
  ws1.addRow([]);
  ws1.addRow(['Content Types:']);
  ws1.addRow(['Devices, Rate Plans, Coverage, Industry Solutions, Community, Support, Apps']);
  ws1.addRow([]);
  ws1.addRow([]);
  const disclaimerRow1 = ws1.addRow(['DISCLAIMER:']);
  disclaimerRow1.font = { bold: true, color: { argb: 'FFCC0000' } };
  ws1.addRow(['This block inventory was compiled through automated crawling and manual review of www.firstnet.com.']);
  ws1.addRow(['Block variations represent patterns observed at the time of analysis and may not capture all edge cases,']);
  ws1.addRow(['dynamic content states, or pages behind authentication. Actual implementation may require additional']);
  ws1.addRow(['blocks or variations not documented here. Screenshots are point-in-time captures and page content']);
  ws1.addRow(['may have changed since collection. This document is intended for planning purposes only.']);

  // Sheet 2: Site Structure
  const ws2 = workbook.addWorksheet('Site Structure');
  ws2.columns = [{ width: 18 }, { width: 35 }, { width: 45 }];
  ws2.addRow(['Category', 'URL Pattern', 'Description']);
  ws2.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws2.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const siteData = [
    ['Homepage', '/', 'Main entry point'],
    ['Power of FirstNet', '/power-of-firstnet.html', 'Mission and history'],
    ['Coverage', '/coverage.html', 'Network coverage and map'],
    ['Rate Plans', '/plans.html', 'Individual and agency plans'],
    ['Devices', '/devices/*.html', 'Phones, tablets, watches, accessories'],
    ['Apps', '/apps.html', 'Application ecosystem'],
    ['Industry Solutions', '/industry-solutions.html', 'Industry landing page'],
    ['Industry Detail', '/industry-solutions/*.html', 'Law enforcement, Fire, EMS, Healthcare'],
    ['Community', '/community.html', 'News, blogs, case studies'],
    ['News', '/community/news/*.html', 'News articles'],
    ['Blogs', '/community/blogs/*.html', 'Blog posts'],
    ['Help', '/help.html', 'Help center'],
    ['FAQ', '/faq.html', 'Frequently asked questions'],
    ['Contact', '/contact-us.html', 'Contact information'],
    ['Sign Up', '/sign-up.html', 'Registration flow'],
    ['Offers', '/offers/*.html', 'Current promotions'],
    ['404 Error', '/404', 'Page not found']
  ];
  siteData.forEach(row => ws2.addRow(row));

  // Sheet 3: Block Inventory with Screenshots
  const ws3 = workbook.addWorksheet('Block Inventory');
  ws3.columns = [
    { width: 25 },  // Block Type
    { width: 20 },  // Variation
    { width: 35 },  // Description
    { width: 40 },  // Page URL
    { width: 50 }   // Screenshot
  ];

  ws3.addRow(['Block Type', 'Variation', 'Description', 'Page URL', 'Screenshot']);
  ws3.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws3.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  // Complete block data
  const blockData = [
    // Global Components
    { type: 'Header Navigation', variation: 'Global', desc: 'Logo, hamburger menu, sign up, login', page: 'All pages', screenshot: 'firstnet-homepage-full.png' },
    { type: 'Footer', variation: 'Global', desc: 'Logo, sitemap, support links, social, legal', page: 'All pages', screenshot: 'firstnet-homepage-full.png' },
    { type: 'Email Subscription Form', variation: 'Global', desc: 'Blue background with email input + category dropdown', page: 'All pages', screenshot: 'firstnet-homepage-full.png' },

    // Homepage Blocks
    { type: 'Quick Links Carousel', variation: 'Homepage', desc: '8 icon pill links horizontal carousel', page: '/', screenshot: 'firstnet-homepage-full.png' },
    { type: 'Hero Section', variation: 'Homepage', desc: 'Mission-critical messaging with background image', page: '/', screenshot: 'firstnet-homepage-full.png' },
    { type: 'Offer Cards Carousel', variation: 'Homepage', desc: '3 device/plan offer cards with images', page: '/', screenshot: 'firstnet-homepage-full.png' },
    { type: 'Why FirstNet Section', variation: 'Homepage', desc: '3-column value props with heading', page: '/', screenshot: 'firstnet-homepage-full.png' },
    { type: 'News Cards', variation: 'Homepage', desc: '3 article preview cards with images', page: '/', screenshot: 'firstnet-homepage-full.png' },
    { type: 'Contact CTA Banner', variation: 'Homepage', desc: 'Dark background "Connect with specialist"', page: '/', screenshot: 'firstnet-homepage-full.png' },

    // Plans Page Blocks
    { type: 'Page Hero', variation: 'Plans', desc: 'Breadcrumb + heading + description', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Anchor Navigation', variation: 'Plans', desc: 'Horizontal jump links to sections', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Individual Plan Section', variation: 'Plans', desc: 'Tabbed content with plan details', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Rate Plan Features', variation: 'Plans', desc: '4-column features with icons', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Promo Banner', variation: 'Plans', desc: '$300 reward card offer banner', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Agency Pricing Cards', variation: 'Plans', desc: 'Tabbed 3-column pricing cards', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'International Plans Cards', variation: 'Plans', desc: '3 international plan comparison cards', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'PDF Download Links', variation: 'Plans', desc: 'Arrow links to PDF documents', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Legal Disclaimers', variation: 'Plans', desc: 'Expandable legal text section', page: '/plans.html', screenshot: 'firstnet-plans-full.png' },

    // Coverage Page Blocks
    { type: 'Hero with CTA', variation: 'Coverage', desc: 'Purpose-built messaging with Get started CTA', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },
    { type: 'Interactive Map', variation: 'Coverage', desc: 'Embedded Leaflet coverage map with layers', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },
    { type: 'Coverage Benefits', variation: 'Coverage', desc: '3-column Band 14, 5G, Investment features', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },
    { type: 'Connectivity Ecosystem', variation: 'Coverage', desc: '3 image+text cards (In-building, In-field, In-vehicle)', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },
    { type: 'Satellite Innovation', variation: 'Coverage', desc: 'Text block about satellite connectivity', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },
    { type: 'Response Operations Group', variation: 'Coverage', desc: 'Blue background promo section', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },
    { type: 'Customer Stories Carousel', variation: 'Coverage', desc: '5 story cards with overlay text', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },
    { type: 'Get Started Cards', variation: 'Coverage', desc: '2-column Agencies vs Individuals cards', page: '/coverage.html', screenshot: 'firstnet-coverage-full.png' },

    // Devices Page Blocks
    { type: 'Hero with Offer Banner', variation: 'Devices', desc: 'Expandable offer banner + hero', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Compatibility Link', variation: 'Devices', desc: 'Arrow link to check device compatibility', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Quick Links Inline', variation: 'Devices', desc: 'Horizontal text quick links', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Catalog Overview', variation: 'Devices', desc: 'Heading + description text block', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Product Cards Grid', variation: 'Phones', desc: '3 phone product cards with images', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Product Cards Grid', variation: 'Tablets', desc: '3 tablet product cards with images', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Product Cards Grid', variation: 'Watches', desc: '3 smartwatch product cards', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Product Cards Grid', variation: 'Connected Devices', desc: '3 router/IoT device cards', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Product Cards Grid', variation: 'Accessories', desc: '3 accessory product cards', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'Product Cards Grid', variation: 'Enhancements', desc: '3 coverage enhancement device cards', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },
    { type: 'FAQ Accordion', variation: 'Devices', desc: 'Expandable device FAQ questions', page: '/devices.html', screenshot: 'firstnet-devices-full.png' },

    // Community Page Blocks
    { type: 'Hero Simple', variation: 'Community', desc: 'Breadcrumb + heading + eligibility CTA', page: '/community.html', screenshot: 'firstnet-community-full.png' },
    { type: 'Featured Case Study', variation: 'Community', desc: 'Full-width text block with read more', page: '/community.html', screenshot: 'firstnet-community-full.png' },
    { type: 'Case Studies Carousel', variation: 'Community', desc: '12 overlay cards carousel', page: '/community.html', screenshot: 'firstnet-community-full.png' },
    { type: 'Health Wellness Promo', variation: 'Community', desc: 'Blue background resource promo', page: '/community.html', screenshot: 'firstnet-community-full.png' },
    { type: 'News Articles List', variation: 'Community', desc: 'Date + title + description list', page: '/community.html', screenshot: 'firstnet-community-full.png' },
    { type: 'Blogs/Videos Tabs', variation: 'Community', desc: 'Tabbed content for blogs and videos', page: '/community.html', screenshot: 'firstnet-community-full.png' },

    // Industry Solutions Page
    { type: 'Promo Banner Top', variation: 'Industry', desc: 'FirstNet and Family promotional banner', page: '/industry-solutions.html', screenshot: 'firstnet-industry-solutions-full.png' },
    { type: 'Industry Category Cards', variation: 'Industry', desc: '8 industry category cards in 2 rows', page: '/industry-solutions.html', screenshot: 'firstnet-industry-solutions-full.png' },

    // Help Page Blocks
    { type: 'Hero with Login', variation: 'Help', desc: 'Login to manage account CTA', page: '/help.html', screenshot: 'firstnet-help-full.png' },
    { type: 'Popular Topics Grid', variation: 'Help', desc: '6 icon topic cards', page: '/help.html', screenshot: 'firstnet-help-full.png' },
    { type: 'Eligibility Accordion', variation: 'Help', desc: 'Expandable eligibility help sections', page: '/help.html', screenshot: 'firstnet-help-full.png' },
    { type: 'Refer-A-Friend Promo', variation: 'Help', desc: 'Reward card promotional block', page: '/help.html', screenshot: 'firstnet-help-full.png' },
    { type: 'Device Help Accordion', variation: 'Help', desc: 'NumberSync, eSIM, FirstNet Ready tabs', page: '/help.html', screenshot: 'firstnet-help-full.png' },
    { type: 'Product Guides Accordion', variation: 'Help', desc: 'Cell Booster, Deployables, MegaRange guides', page: '/help.html', screenshot: 'firstnet-help-full.png' },

    // FAQ Page Blocks
    { type: 'Help Links Cards', variation: 'FAQ', desc: '3 action cards (Login, Eligibility, Support)', page: '/faq.html', screenshot: 'firstnet-faq-full.png' },
    { type: 'Quick Links Tabbed', variation: 'FAQ', desc: 'Tabbed support articles with image', page: '/faq.html', screenshot: 'firstnet-faq-full.png' },
    { type: 'FAQ Accordion', variation: 'Troubleshooting', desc: 'Expandable troubleshooting FAQs', page: '/faq.html', screenshot: 'firstnet-faq-full.png' },
    { type: 'Migration CTA', variation: 'FAQ', desc: 'FirstNet and Family migration promo', page: '/faq.html', screenshot: 'firstnet-faq-full.png' },
    { type: 'FAQ Accordion', variation: 'Plans/Offers', desc: 'Expandable plan and offer FAQs', page: '/faq.html', screenshot: 'firstnet-faq-full.png' },
    { type: 'Products Cards Row', variation: 'FAQ', desc: '4 product category cards', page: '/faq.html', screenshot: 'firstnet-faq-full.png' },

    // Device Detail Page
    { type: 'Device Hero', variation: 'Detail', desc: 'Product image + feature bullet list', page: '/devices/phones/iphone-17-pro.html', screenshot: 'firstnet-device-detail-full.png' },
    { type: 'Shop Now CTA', variation: 'Detail', desc: 'Primary shop button', page: '/devices/phones/iphone-17-pro.html', screenshot: 'firstnet-device-detail-full.png' },
    { type: 'Legal Footnotes', variation: 'Detail', desc: 'Detailed product disclaimers', page: '/devices/phones/iphone-17-pro.html', screenshot: 'firstnet-device-detail-full.png' },

    // Apps Page Blocks
    { type: 'App Hero Carousel', variation: 'Apps', desc: '5-slide carousel with app features and CTAs', page: '/apps.html', screenshot: 'firstnet-apps-full.png' },
    { type: 'App Catalog Features', variation: 'Apps', desc: 'Image + text section about app library', page: '/apps.html', screenshot: 'firstnet-apps-full.png' },
    { type: 'App Uses Carousel', variation: 'Apps', desc: '6 overlay cards for app use cases', page: '/apps.html', screenshot: 'firstnet-apps-full.png' },
    { type: 'Featured Apps Carousel', variation: 'Apps', desc: '9 app cards with descriptions and CTAs', page: '/apps.html', screenshot: 'firstnet-apps-full.png' },
    { type: 'FirstNet Central Section', variation: 'Apps', desc: 'Image + text block about network control', page: '/apps.html', screenshot: 'firstnet-apps-full.png' },
    { type: 'Developer Program Section', variation: 'Apps', desc: 'Text + CTA for app developers', page: '/apps.html', screenshot: 'firstnet-apps-full.png' },
    { type: 'Download CTA Banner', variation: 'Apps', desc: 'Blue background with PDF download button', page: '/apps.html', screenshot: 'firstnet-apps-full.png' },

    // Contact Page Blocks
    { type: 'Contact Hero', variation: 'Contact', desc: 'Simple heading "Reach out to our experts"', page: '/contact-us.html', screenshot: 'firstnet-contact-full.png' },
    { type: 'Contact Cards Grid', variation: 'Contact', desc: '4 icon cards for contact options', page: '/contact-us.html', screenshot: 'firstnet-contact-full.png' },

    // Power of FirstNet Page Blocks
    { type: 'Page Hero with CTA', variation: 'Power', desc: 'Full-width hero with eligibility CTA', page: '/power-of-firstnet.html', screenshot: 'firstnet-power-full.png' },
    { type: 'History Text Section', variation: 'Power', desc: 'Long-form text about FirstNet origins', page: '/power-of-firstnet.html', screenshot: 'firstnet-power-full.png' },
    { type: 'Contact Specialist CTA', variation: 'Power', desc: 'Blue button to contact specialist', page: '/power-of-firstnet.html', screenshot: 'firstnet-power-full.png' },
    { type: 'Video Feature Block', variation: 'Power', desc: 'Image + text with Watch Now button', page: '/power-of-firstnet.html', screenshot: 'firstnet-power-full.png' },
    { type: 'Story Cards Carousel', variation: 'Power', desc: '6 overlay cards with video/explore links', page: '/power-of-firstnet.html', screenshot: 'firstnet-power-full.png' },

    // 404 Error Page Blocks
    { type: 'Error Page Content', variation: '404', desc: '"Page not found" messaging with tips', page: '/404', screenshot: 'firstnet-404-full.png' },
    { type: 'Recommended Pages List', variation: '404', desc: 'List of suggested page links', page: '/404', screenshot: 'firstnet-404-full.png' },

    // News Article Page Blocks
    { type: 'Article Header', variation: 'News', desc: 'Title + subtitle headline block', page: '/community/news/*.html', screenshot: 'firstnet-news-article-full.png' },
    { type: 'Article Date', variation: 'News', desc: 'Publication date display', page: '/community/news/*.html', screenshot: 'firstnet-news-article-full.png' },
    { type: 'Article Hero Image', variation: 'News', desc: 'Full-width featured image', page: '/community/news/*.html', screenshot: 'firstnet-news-article-full.png' },
    { type: 'Article Body Content', variation: 'News', desc: 'Rich text with headings, lists, links', page: '/community/news/*.html', screenshot: 'firstnet-news-article-full.png' },

    // Law Enforcement (Industry Detail) Page Blocks
    { type: 'Industry Hero Carousel', variation: 'Law Enforcement', desc: '2-slide hero with messaging', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Anchor Navigation', variation: 'Law Enforcement', desc: 'Horizontal jump links for sections', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Why FirstNet Section', variation: 'Law Enforcement', desc: '2-column text block about benefits', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Appreciation Section', variation: 'Law Enforcement', desc: 'Thank you message with video CTA', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Customer Quote Block', variation: 'Law Enforcement', desc: 'Blue banner with quote and attribution', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Features Carousel', variation: 'Law Enforcement', desc: '3-card carousel (Modernized, Ready, Secure)', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Customer Stories Carousel', variation: 'Law Enforcement', desc: '9 video/PDF story cards', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Get Started Cards', variation: 'Law Enforcement', desc: '2-column Agencies vs Individuals cards', page: '/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },

    // Offers Page Blocks
    { type: 'Offer Hero', variation: 'FirstNet & Family', desc: 'Discount headline with plan pricing', page: '/offers/firstnet-and-family.html', screenshot: 'firstnet-offers-full.png' },
    { type: 'Benefits Grid', variation: 'FirstNet & Family', desc: '4 icon cards showing plan benefits', page: '/offers/firstnet-and-family.html', screenshot: 'firstnet-offers-full.png' },
    { type: 'Legal Disclaimers Expanded', variation: 'FirstNet & Family', desc: 'Full legal terms in text blocks', page: '/offers/firstnet-and-family.html', screenshot: 'firstnet-offers-full.png' },
    { type: 'Tabbed Plan Comparison', variation: 'FirstNet & Family', desc: 'FirstNet vs Family plan cards with tabs', page: '/offers/firstnet-and-family.html', screenshot: 'firstnet-offers-full.png' },
    { type: 'Device Offer Cards', variation: 'FirstNet & Family', desc: '3 product cards with pricing/CTAs', page: '/offers/firstnet-and-family.html', screenshot: 'firstnet-offers-full.png' },
    { type: 'FAQ Accordion', variation: 'FirstNet & Family', desc: 'Expandable offer FAQs', page: '/offers/firstnet-and-family.html', screenshot: 'firstnet-offers-full.png' },
    { type: 'Get Started Cards', variation: 'FirstNet & Family', desc: 'New vs Existing customer cards', page: '/offers/firstnet-and-family.html', screenshot: 'firstnet-offers-full.png' }
  ];

  let currentRow = 2;
  for (const block of blockData) {
    const row = ws3.addRow([block.type, block.variation, block.desc, block.page, '']);
    row.height = 120;

    const imgPath = path.join(screenshotDir, block.screenshot);
    if (fs.existsSync(imgPath)) {
      const imageId = workbook.addImage({
        filename: imgPath,
        extension: 'png'
      });
      ws3.addImage(imageId, {
        tl: { col: 4, row: currentRow - 1 },
        ext: { width: 350, height: 110 }
      });
    }
    currentRow++;
  }

  // Sheet 4: Block Reuse Summary
  const ws4 = workbook.addWorksheet('Block Reuse Summary');
  ws4.columns = [{ width: 25 }, { width: 12 }, { width: 60 }];
  ws4.addRow(['Block Type', 'Page Count', 'Page URLs']);
  ws4.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws4.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const reuseData = [
    ['Header Navigation', 'All', 'Global component on all pages'],
    ['Footer', 'All', 'Global component on all pages'],
    ['Email Subscription Form', 'All', 'Global component on all pages'],
    ['Page Hero (Breadcrumb)', '10+', '/plans.html, /coverage.html, /devices.html, /community.html, /help.html, /faq.html, /industry-solutions.html'],
    ['Anchor Navigation', '5+', '/plans.html, /coverage.html, /community.html, /faq.html'],
    ['FAQ Accordion', '4+', '/devices.html, /help.html, /faq.html'],
    ['Product Cards Grid', '6', '/devices.html (phones, tablets, watches, connected, accessories, enhancements)'],
    ['Promo Banner', '3+', '/, /plans.html, /help.html'],
    ['Contact CTA Banner', '3+', '/, /plans.html, /coverage.html'],
    ['Get Started Cards', '2+', '/coverage.html, /community.html'],
    ['Tabbed Content', '4+', '/plans.html, /community.html, /faq.html'],
    ['Case Studies Carousel', '2', '/community.html, /coverage.html'],
    ['News Cards', '2', '/, /community.html'],
    ['Interactive Map', '1', '/coverage.html'],
    ['Device Hero', '50+', 'All device detail pages']
  ];
  reuseData.forEach(row => {
    const dataRow = ws4.addRow(row);
    dataRow.getCell(3).alignment = { wrapText: true };
  });

  // Sheet 5: Page Distribution
  const ws5 = workbook.addWorksheet('Page Distribution');
  ws5.columns = [{ width: 22 }, { width: 15 }, { width: 15 }];
  ws5.addRow(['Page Type', '% of Total', 'Est. Count']);
  ws5.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws5.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const distData = [
    ['Devices (Phones)', '25%', '~175'],
    ['Devices (Tablets/Other)', '15%', '~105'],
    ['Community/News', '20%', '~140'],
    ['Help/Support', '15%', '~105'],
    ['Industry Solutions', '10%', '~70'],
    ['Apps', '8%', '~56'],
    ['Core Pages', '7%', '~49'],
    ['', '', ''],
    ['TOTAL', '100%', '~700']
  ];
  distData.forEach(row => ws5.addRow(row));
  ws5.getRow(10).font = { bold: true };

  await workbook.xlsx.writeFile('/workspace/firstnet-migration-plan.xlsx');
  console.log('Created: firstnet-migration-plan.xlsx with 78 block variations');
}

createFirstNetInventoryExcel().catch(console.error);
