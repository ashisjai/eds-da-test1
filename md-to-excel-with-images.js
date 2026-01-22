const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const screenshotDir = '/workspace/block-screenshots';

async function createMigrationPlanExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'AT&T Business Migration';
  workbook.created = new Date();

  // Sheet 1: Executive Summary
  const ws1 = workbook.addWorksheet('Executive Summary');
  ws1.columns = [{ width: 35 }, { width: 50 }];
  ws1.addRow(['AT&T Business Website Migration Plan']);
  ws1.getRow(1).font = { bold: true, size: 16, color: { argb: 'FF009FDB' } };
  ws1.addRow(['Migration to AEM Edge Delivery Services']);
  ws1.addRow([]);
  ws1.addRow(['Total Pages:', '749 (per client sitemap/robots.txt)']);
  ws1.addRow(['Website:', 'www.business.att.com']);
  ws1.addRow(['Project Type:', 'Enterprise B2B Site Migration']);
  ws1.addRow(['Block Variations Documented:', '38']);
  ws1.addRow([]);
  ws1.addRow(['Content Types:']);
  ws1.addRow(['Products, Portfolios, Industry Solutions, Customer Stories, Support Content, Landing Pages']);

  // Sheet 2: Site Structure
  const ws2 = workbook.addWorksheet('Site Structure');
  ws2.columns = [{ width: 18 }, { width: 35 }, { width: 45 }];
  ws2.addRow(['Category', 'URL Pattern', 'Description']);
  ws2.getRow(1).font = { bold: true };
  ws2.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };
  ws2.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };

  const siteData = [
    ['Products', '/products/*.html', 'Individual product/service pages'],
    ['Portfolios', '/portfolios/*.html', 'Solution category landing pages'],
    ['Industries', '/industries/*.html', 'Vertical market pages'],
    ['Categories', '/categories/*.html', 'Product grouping pages'],
    ['Learn', '/learn/*.html', 'Content hub (articles, stories, reports)'],
    ['Support', '/support/*.html', 'Customer support pages'],
    ['Explore', '/explore/*.html', 'Campaign/landing pages'],
    ['About', '/about/*.html', 'Company information'],
    ['Offers', '/offers.html', 'Deals and promotions'],
    ['Bundles', '/bundles.html', 'Service bundles']
  ];
  siteData.forEach(row => ws2.addRow(row));

  // Sheet 3: Block Inventory with Screenshots - EXPANDED with all pages
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
  ws3.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  // Complete block data with ALL variations across pages
  const blockData = [
    // Navigation Blocks
    { type: 'Quick Links Carousel', variation: 'Homepage', desc: '6 pill links with icons', page: '/', screenshot: 'block-quick-links-carousel-homepage.png' },

    // Hero Blocks - Multiple pages
    { type: 'Promo Banner Carousel', variation: 'Homepage', desc: 'Single promo message with CTA', page: '/', screenshot: 'block-promo-banner-carousel-homepage.png' },
    { type: 'Hero with Offer Cards', variation: 'Homepage', desc: 'Blue gradient, 4+ offer cards carousel', page: '/', screenshot: 'block-hero-offer-cards-homepage.png' },
    { type: 'Video Hero Banner', variation: 'Homepage', desc: 'Video thumbnail with messaging', page: '/', screenshot: 'block-video-hero-banner-homepage.png' },
    { type: 'Product Hero', variation: 'Wireless Plans', desc: 'Savings badge, headline, terms', page: '/products/wireless-plans.html', screenshot: 'block-hero-product-savings-wireless.png' },
    { type: 'Product Hero', variation: 'Business Fiber', desc: 'Product hero with pricing CTA', page: '/products/business-fiber-internet.html', screenshot: 'block-hero-product-fiber.png' },
    { type: 'Industry Hero', variation: 'Healthcare', desc: 'Breadcrumb + heading + phone CTA', page: '/industries/healthcare.html', screenshot: 'block-hero-industry-healthcare.png' },
    { type: 'Portfolio Hero', variation: 'Mobility', desc: 'Solution overview with quick links', page: '/portfolios/mobility.html', screenshot: 'block-hero-portfolio-mobility.png' },
    { type: 'Article Video Hero', variation: 'Customer Story', desc: 'Full-width hero with video play', page: '/learn/customer-stories/portx.html', screenshot: 'block-hero-article-video-story.png' },

    // Pricing Cards - Multiple products
    { type: 'Pricing Cards Carousel', variation: 'Wireless Plans', desc: '4 plan cards with tiered pricing', page: '/products/wireless-plans.html', screenshot: 'block-pricing-cards-carousel-wireless.png' },
    { type: 'Pricing Cards Carousel', variation: 'Business Fiber', desc: '5 speed tier cards with pricing', page: '/products/business-fiber-internet.html', screenshot: 'block-pricing-cards-fiber.png' },

    // Feature Cards Grid - Multiple pages
    { type: 'Feature Cards Grid', variation: 'Homepage', desc: '"Why work with AT&T" - 4 cards', page: '/', screenshot: 'block-feature-cards-grid-homepage.png' },
    { type: 'Feature Cards Grid', variation: 'Wireless Plans', desc: '"All plans include" features', page: '/products/wireless-plans.html', screenshot: 'block-features-grid-wireless.png' },
    { type: 'Feature Cards Grid', variation: 'Business Fiber', desc: '"Why AT&T Business Fiber" features', page: '/products/business-fiber-internet.html', screenshot: 'block-features-grid-fiber.png' },

    // Product/Offer Cards - Multiple pages
    { type: 'Product Cards Carousel', variation: 'Homepage', desc: 'Service cards carousel', page: '/', screenshot: 'block-product-cards-carousel-homepage.png' },
    { type: 'Industry Cards Carousel', variation: 'Homepage', desc: 'Cards for Healthcare, Finance, etc.', page: '/', screenshot: 'block-industry-cards-carousel-homepage.png' },
    { type: 'Offer Cards Carousel', variation: 'Business Fiber', desc: 'Deal cards with offers', page: '/products/business-fiber-internet.html', screenshot: 'block-offer-cards-fiber.png' },
    { type: 'Offer Cards Carousel', variation: 'Mobility Portfolio', desc: 'Device deal cards', page: '/portfolios/mobility.html', screenshot: 'block-offer-cards-mobility.png' },

    // Guarantee Checklist - Multiple pages
    { type: 'Guarantee Checklist', variation: 'Homepage', desc: 'AT&T Guarantee with 3 checkmarks', page: '/', screenshot: 'block-guarantee-checklist-homepage.png' },
    { type: 'Guarantee Checklist', variation: 'Mobility Portfolio', desc: 'Deals backed by AT&T Guarantee', page: '/portfolios/mobility.html', screenshot: 'block-guarantee-mobility.png' },

    // FAQ Accordion - Multiple products
    { type: 'FAQ Accordion', variation: 'Wireless Plans', desc: 'Expandable FAQ sections', page: '/products/wireless-plans.html', screenshot: 'block-faq-accordion-wireless.png' },
    { type: 'FAQ Accordion', variation: 'Business Fiber', desc: 'Fiber-specific FAQs', page: '/products/business-fiber-internet.html', screenshot: 'block-faq-accordion-fiber.png' },

    // Lead Form (RAI) - Multiple pages
    { type: 'Lead Form (RAI)', variation: 'Homepage', desc: '"Talk to an AT&T Business expert"', page: '/', screenshot: 'block-lead-form-rai-homepage.png' },
    { type: 'Lead Form (RAI)', variation: 'Healthcare Industry', desc: 'Industry-specific context form', page: '/industries/healthcare.html', screenshot: 'block-lead-form-industry.png' },
    { type: 'Lead Form (RAI)', variation: 'Business Fiber', desc: 'Product-specific lead form', page: '/products/business-fiber-internet.html', screenshot: 'block-lead-form-fiber.png' },

    // Link List Block
    { type: 'Link List Block', variation: 'Homepage', desc: '"Looking for more?" 4-column links', page: '/', screenshot: 'block-link-list-homepage.png' },

    // Industry-specific blocks
    { type: 'Anchor Navigation', variation: 'Healthcare Industry', desc: 'Horizontal pills for page sections', page: '/industries/healthcare.html', screenshot: 'block-anchor-nav-industry.png' },
    { type: 'Solution Link Cards', variation: 'Healthcare Industry', desc: 'Icon + title + description cards', page: '/industries/healthcare.html', screenshot: 'block-solution-cards-industry.png' },
    { type: 'Image + Text Split', variation: 'Healthcare Industry', desc: 'Image left, text + CTA right', page: '/industries/healthcare.html', screenshot: 'block-image-text-split-industry.png' },
    { type: 'Story Cards Overlay', variation: 'Healthcare Industry', desc: 'Image background with text overlay', page: '/industries/healthcare.html', screenshot: 'block-story-cards-overlay-industry.png' },
    { type: 'Insights Cards', variation: 'Healthcare Industry', desc: 'Resource cards with thumbnails', page: '/industries/healthcare.html', screenshot: 'block-insights-cards-industry.png' },
    { type: 'Contact CTA Banner', variation: 'Healthcare Industry', desc: 'Blue background with phone number', page: '/industries/healthcare.html', screenshot: 'block-contact-cta-industry.png' },

    // Customer Story blocks
    { type: 'Highlights/Stats', variation: 'Customer Story', desc: '3-column Challenge/Results/Solution', page: '/learn/customer-stories/portx.html', screenshot: 'block-highlights-stats-story.png' },
    { type: 'About Section', variation: 'Customer Story', desc: 'Company logo, description, PDF', page: '/learn/customer-stories/portx.html', screenshot: 'block-about-download-story.png' },

    // Other blocks
    { type: 'Award Badge', variation: 'Wireless Plans', desc: '#1 in Customer Satisfaction', page: '/products/wireless-plans.html', screenshot: 'block-award-badge-wireless.png' },
    { type: 'Support Contact Block', variation: 'Wireless Plans', desc: '3-column contact info', page: '/products/wireless-plans.html', screenshot: 'block-support-contact-wireless.png' }
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
  ws4.columns = [{ width: 25 }, { width: 15 }, { width: 60 }];
  ws4.addRow(['Block Type', 'Page Count', 'Pages Used On']);
  ws4.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws4.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const reuseData = [
    ['Hero Blocks', '5', 'Homepage, Wireless Plans, Business Fiber, Healthcare, Mobility, Customer Stories'],
    ['Pricing Cards Carousel', '2', 'Wireless Plans, Business Fiber'],
    ['Feature Cards Grid', '3', 'Homepage, Wireless Plans, Business Fiber'],
    ['Offer Cards Carousel', '2', 'Business Fiber, Mobility Portfolio'],
    ['Guarantee Checklist', '2', 'Homepage, Mobility Portfolio'],
    ['FAQ Accordion', '2', 'Wireless Plans, Business Fiber'],
    ['Lead Form (RAI)', '3', 'Homepage, Healthcare Industry, Business Fiber'],
    ['Product Cards Carousel', '1', 'Homepage'],
    ['Industry Cards Carousel', '1', 'Homepage'],
    ['Link List Block', '1', 'Homepage'],
    ['Anchor Navigation', '1', 'Industry Pages'],
    ['Solution Link Cards', '1', 'Industry Pages'],
    ['Image + Text Split', '1', 'Industry Pages'],
    ['Story Cards Overlay', '1', 'Industry Pages'],
    ['Insights Cards', '1', 'Industry Pages'],
    ['Contact CTA Banner', '1', 'Industry Pages'],
    ['Highlights/Stats', '1', 'Customer Stories'],
    ['About Section', '1', 'Customer Stories'],
    ['Award Badge', '1', 'Product Pages'],
    ['Support Contact Block', '1', 'Product Pages']
  ];
  reuseData.forEach(row => ws4.addRow(row));

  // Sheet 5: Migration Phases
  const ws5 = workbook.addWorksheet('Migration Phases');
  ws5.columns = [{ width: 25 }, { width: 15 }, { width: 30 }, { width: 80 }];
  ws5.addRow(['Phase', 'Timeline', 'Goal', 'Tasks']);
  ws5.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws5.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const phaseData = [
    ['Phase 1: Foundation', 'Weeks 1-2', 'Establish core infrastructure', 'Project Setup, Global Components, Base CSS, Pilot Page'],
    ['Phase 2: Core Blocks', 'Weeks 3-5', 'Build reusable block library', 'Hero, Cards, Pricing, Lead Form, FAQ, Links, Video, Tabs'],
    ['Phase 3: Page Templates', 'Weeks 6-8', 'Create primary page types', 'Homepage, Products, Portfolios, Industries, Categories'],
    ['Phase 4: Content Migration', 'Weeks 9-12', 'Full content migration', 'Remaining Products, Customer Stories, Support pages'],
    ['Phase 5: QA & Launch', 'Weeks 13-14', 'Testing and go-live', 'Cross-browser, Mobile, Accessibility, Performance, Go-live']
  ];
  phaseData.forEach(row => ws5.addRow(row));

  // Sheet 6: Priority Matrix
  const ws6 = workbook.addWorksheet('Priority Matrix');
  ws6.columns = [{ width: 15 }, { width: 28 }, { width: 12 }, { width: 35 }];
  ws6.addRow(['Priority', 'Page Type', 'Count', 'Justification']);
  ws6.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws6.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const priorityData = [
    ['P1 - Critical', 'Homepage', '1', 'Primary entry point'],
    ['P1 - Critical', 'Offers', '1', 'Revenue driver'],
    ['P1 - Critical', 'Wireless Plans', '1', 'Top converting page'],
    ['P2 - High', 'Product Pages (top 10)', '10', 'High traffic products'],
    ['P2 - High', 'Portfolio Pages', '9', 'Category navigation'],
    ['P3 - Medium', 'Industry Pages', '14', 'Vertical targeting'],
    ['P3 - Medium', 'Category Pages', '18+', 'Product groupings'],
    ['P4 - Lower', 'Customer Stories', '27+', 'Supporting content'],
    ['P5 - Lowest', 'Support/Utility', '5', 'Low change frequency']
  ];
  priorityData.forEach(row => ws6.addRow(row));

  // Sheet 7: Page Distribution
  const ws7 = workbook.addWorksheet('Page Distribution');
  ws7.columns = [{ width: 22 }, { width: 15 }, { width: 15 }];
  ws7.addRow(['Page Type', '% of Total', 'Est. Count']);
  ws7.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws7.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const distData = [
    ['Content/Articles', '40%', '~300'],
    ['Product Pages', '20%', '~150'],
    ['Customer Stories', '15%', '~112'],
    ['Industry/Category', '10%', '~75'],
    ['Support/Help', '8%', '~60'],
    ['Landing/Promo', '5%', '~37'],
    ['Core Navigation', '2%', '~15'],
    ['', '', ''],
    ['TOTAL', '100%', '749']
  ];
  distData.forEach(row => ws7.addRow(row));
  ws7.getRow(10).font = { bold: true };

  await workbook.xlsx.writeFile('/workspace/att-business-migration-plan.xlsx');
  console.log('Created: att-business-migration-plan.xlsx with 36 block variations');
}

async function createDetailedInventoryExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'AT&T Business Migration';
  workbook.created = new Date();

  // Sheet 1: Summary
  const ws1 = workbook.addWorksheet('Summary');
  ws1.columns = [{ width: 40 }, { width: 20 }];
  ws1.addRow(['AT&T Business - Detailed Page & Asset Inventory']);
  ws1.getRow(1).font = { bold: true, size: 16, color: { argb: 'FF009FDB' } };
  ws1.addRow([]);
  ws1.addRow(['Total Pages (Client Provided):', '749']);
  ws1.addRow(['Documented Page Templates:', '~150']);
  ws1.addRow(['Block Types Documented:', '20']);
  ws1.addRow(['Block Variations (with pages):', '36']);
  ws1.addRow(['Screenshot References:', '38']);

  // Sheet 2: All Pages
  const ws2 = workbook.addWorksheet('All Pages');
  ws2.columns = [{ width: 15 }, { width: 30 }, { width: 55 }, { width: 15 }, { width: 10 }];
  ws2.addRow(['Category', 'Page Name', 'URL', 'Template', 'Priority']);
  ws2.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws2.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const pagesData = [
    ['Homepage', 'Homepage', '/', 'Homepage', 'P1'],
    ['Products', 'Wireless Plans', '/products/wireless-plans.html', 'Product', 'P1'],
    ['Products', 'Business Fiber Internet', '/products/business-fiber-internet.html', 'Product', 'P1'],
    ['Products', 'Dynamic Defense', '/products/att-dynamic-defense.html', 'Product', 'P2'],
    ['Products', 'Office@Hand', '/products/office-at-hand.html', 'Product', 'P2'],
    ['Products', 'Mobile 5G', '/products/mobile-5g.html', 'Product', 'P2'],
    ['Products', 'Cloud Voice MS Teams', '/products/att-cloud-voice-for-microsoft-teams.html', 'Product', 'P2'],
    ['Portfolios', 'Mobility', '/portfolios/mobility.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Business Internet', '/portfolios/business-internet.html', 'Portfolio', 'P2'],
    ['Portfolios', '5G for Business', '/portfolios/5G-for-business.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Cybersecurity', '/portfolios/cybersecurity.html', 'Portfolio', 'P2'],
    ['Portfolios', 'IoT', '/portfolios/internet-of-things.html', 'Portfolio', 'P2'],
    ['Industries', 'Healthcare', '/industries/healthcare.html', 'Industry', 'P3'],
    ['Industries', 'Financial Services', '/industries/finance.html', 'Industry', 'P3'],
    ['Industries', 'Manufacturing', '/industries/manufacturing.html', 'Industry', 'P3'],
    ['Industries', 'Retail', '/industries/retail.html', 'Industry', 'P3'],
    ['Promotional', 'Offers', '/offers.html', 'Landing', 'P1'],
    ['Promotional', 'Bundles', '/bundles.html', 'Landing', 'P2'],
    ['Support', 'Contact', '/support/contact.html', 'Support', 'P4']
  ];
  pagesData.forEach(row => ws2.addRow(row));

  // Sheet 3: Assets
  const ws3 = workbook.addWorksheet('Assets');
  ws3.columns = [{ width: 25 }, { width: 30 }, { width: 15 }, { width: 45 }];
  ws3.addRow(['Asset Type', 'Format', 'Est. Count', 'Notes']);
  ws3.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws3.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const assetData = [
    ['Images', 'JPG, PNG, WebP, SVG', '500+', 'Product images, icons, backgrounds'],
    ['Videos', 'MP4, YouTube embeds', '50+', 'Product demos, testimonials'],
    ['PDFs', 'PDF', '100+', 'Datasheets, case studies, reports'],
    ['Fonts', 'WOFF2, WOFF', '5-10', 'AT&T brand fonts'],
    ['Icons', 'SVG, Icon fonts', '100+', 'UI icons, feature icons']
  ];
  assetData.forEach(row => ws3.addRow(row));

  // Sheet 4: Screenshots Gallery with all variations
  const ws4 = workbook.addWorksheet('Screenshots');
  ws4.columns = [{ width: 30 }, { width: 20 }, { width: 40 }, { width: 55 }];
  ws4.addRow(['Block Type', 'Page Type', 'Page URL', 'Screenshot']);
  ws4.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws4.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const screenshotData = [
    { block: 'Quick Links Carousel', pageType: 'Homepage', page: '/', file: 'block-quick-links-carousel-homepage.png' },
    { block: 'Promo Banner Carousel', pageType: 'Homepage', page: '/', file: 'block-promo-banner-carousel-homepage.png' },
    { block: 'Hero with Offer Cards', pageType: 'Homepage', page: '/', file: 'block-hero-offer-cards-homepage.png' },
    { block: 'Video Hero Banner', pageType: 'Homepage', page: '/', file: 'block-video-hero-banner-homepage.png' },
    { block: 'Feature Cards Grid', pageType: 'Homepage', page: '/', file: 'block-feature-cards-grid-homepage.png' },
    { block: 'Product Cards Carousel', pageType: 'Homepage', page: '/', file: 'block-product-cards-carousel-homepage.png' },
    { block: 'Industry Cards Carousel', pageType: 'Homepage', page: '/', file: 'block-industry-cards-carousel-homepage.png' },
    { block: 'Guarantee Checklist', pageType: 'Homepage', page: '/', file: 'block-guarantee-checklist-homepage.png' },
    { block: 'Lead Form (RAI)', pageType: 'Homepage', page: '/', file: 'block-lead-form-rai-homepage.png' },
    { block: 'Link List Block', pageType: 'Homepage', page: '/', file: 'block-link-list-homepage.png' },
    { block: 'Product Hero Savings', pageType: 'Product', page: '/products/wireless-plans.html', file: 'block-hero-product-savings-wireless.png' },
    { block: 'Pricing Cards Carousel', pageType: 'Product', page: '/products/wireless-plans.html', file: 'block-pricing-cards-carousel-wireless.png' },
    { block: 'Features Grid', pageType: 'Product', page: '/products/wireless-plans.html', file: 'block-features-grid-wireless.png' },
    { block: 'FAQ Accordion', pageType: 'Product', page: '/products/wireless-plans.html', file: 'block-faq-accordion-wireless.png' },
    { block: 'Award Badge', pageType: 'Product', page: '/products/wireless-plans.html', file: 'block-award-badge-wireless.png' },
    { block: 'Support Contact', pageType: 'Product', page: '/products/wireless-plans.html', file: 'block-support-contact-wireless.png' },
    { block: 'Product Hero', pageType: 'Product', page: '/products/business-fiber-internet.html', file: 'block-hero-product-fiber.png' },
    { block: 'Pricing Cards Carousel', pageType: 'Product', page: '/products/business-fiber-internet.html', file: 'block-pricing-cards-fiber.png' },
    { block: 'Features Grid', pageType: 'Product', page: '/products/business-fiber-internet.html', file: 'block-features-grid-fiber.png' },
    { block: 'Offer Cards Carousel', pageType: 'Product', page: '/products/business-fiber-internet.html', file: 'block-offer-cards-fiber.png' },
    { block: 'FAQ Accordion', pageType: 'Product', page: '/products/business-fiber-internet.html', file: 'block-faq-accordion-fiber.png' },
    { block: 'Lead Form (RAI)', pageType: 'Product', page: '/products/business-fiber-internet.html', file: 'block-lead-form-fiber.png' },
    { block: 'Portfolio Hero', pageType: 'Portfolio', page: '/portfolios/mobility.html', file: 'block-hero-portfolio-mobility.png' },
    { block: 'Offer Cards Carousel', pageType: 'Portfolio', page: '/portfolios/mobility.html', file: 'block-offer-cards-mobility.png' },
    { block: 'Guarantee Checklist', pageType: 'Portfolio', page: '/portfolios/mobility.html', file: 'block-guarantee-mobility.png' },
    { block: 'Industry Hero', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-hero-industry-healthcare.png' },
    { block: 'Anchor Navigation', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-anchor-nav-industry.png' },
    { block: 'Solution Cards', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-solution-cards-industry.png' },
    { block: 'Image + Text Split', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-image-text-split-industry.png' },
    { block: 'Story Cards Overlay', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-story-cards-overlay-industry.png' },
    { block: 'Insights Cards', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-insights-cards-industry.png' },
    { block: 'Contact CTA Banner', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-contact-cta-industry.png' },
    { block: 'Lead Form (RAI)', pageType: 'Industry', page: '/industries/healthcare.html', file: 'block-lead-form-industry.png' },
    { block: 'Article Video Hero', pageType: 'Customer Story', page: '/learn/customer-stories/portx.html', file: 'block-hero-article-video-story.png' },
    { block: 'Highlights/Stats', pageType: 'Customer Story', page: '/learn/customer-stories/portx.html', file: 'block-highlights-stats-story.png' },
    { block: 'About Section', pageType: 'Customer Story', page: '/learn/customer-stories/portx.html', file: 'block-about-download-story.png' }
  ];

  let currentRow = 2;
  for (const item of screenshotData) {
    const row = ws4.addRow([item.block, item.pageType, item.page, '']);
    row.height = 120;

    const imgPath = path.join(screenshotDir, item.file);
    if (fs.existsSync(imgPath)) {
      const imageId = workbook.addImage({
        filename: imgPath,
        extension: 'png'
      });
      ws4.addImage(imageId, {
        tl: { col: 3, row: currentRow - 1 },
        ext: { width: 380, height: 110 }
      });
    }
    currentRow++;
  }

  await workbook.xlsx.writeFile('/workspace/att-business-detailed-inventory.xlsx');
  console.log('Created: att-business-detailed-inventory.xlsx with 36 screenshot variations');
}

async function main() {
  await createMigrationPlanExcel();
  await createDetailedInventoryExcel();
}

main().catch(console.error);
