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

  // Sheet 3: Block Inventory with Screenshots
  const ws3 = workbook.addWorksheet('Block Inventory');
  ws3.columns = [
    { width: 25 },  // Block Type
    { width: 20 },  // Variation
    { width: 40 },  // Description
    { width: 35 },  // Example Page
    { width: 50 }   // Screenshot (for embedded image)
  ];

  ws3.addRow(['Block Type', 'Variation', 'Description', 'Example Page', 'Screenshot']);
  ws3.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws3.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  // Block data with screenshots
  const blockData = [
    { type: 'Quick Links Carousel', variation: 'Homepage', desc: '6 pill links with icons', page: '/', screenshot: 'block-quick-links-carousel-homepage.png' },
    { type: 'Promo Banner Carousel', variation: 'Standard', desc: 'Single promo message with CTA', page: '/', screenshot: 'block-promo-banner-carousel-homepage.png' },
    { type: 'Hero with Offer Cards', variation: 'Homepage Hero', desc: 'Blue gradient, 4+ offer cards carousel', page: '/', screenshot: 'block-hero-offer-cards-homepage.png' },
    { type: 'Video Hero Banner', variation: 'Product Video', desc: 'Video thumbnail with messaging', page: '/', screenshot: 'block-video-hero-banner-homepage.png' },
    { type: 'Feature Cards Grid', variation: '4-Column Homepage', desc: '"Why work with AT&T" - 4 cards', page: '/', screenshot: 'block-feature-cards-grid-homepage.png' },
    { type: 'Product Cards Carousel', variation: 'Homepage Products', desc: 'Service cards carousel', page: '/', screenshot: 'block-product-cards-carousel-homepage.png' },
    { type: 'Industry Cards Carousel', variation: 'Homepage Industries', desc: 'Cards for Healthcare, Finance, etc.', page: '/', screenshot: 'block-industry-cards-carousel-homepage.png' },
    { type: 'Guarantee Checklist', variation: 'Homepage Guarantee', desc: 'AT&T Guarantee with 3 checkmarks', page: '/', screenshot: 'block-guarantee-checklist-homepage.png' },
    { type: 'Lead Form (RAI)', variation: 'Homepage Form', desc: '"Talk to an AT&T Business expert"', page: '/', screenshot: 'block-lead-form-rai-homepage.png' },
    { type: 'Link List Block', variation: 'Homepage Links', desc: '"Looking for more?" 4-column links', page: '/', screenshot: 'block-link-list-homepage.png' },
    { type: 'Product Hero', variation: 'Savings Hero', desc: 'Savings badge, headline, terms', page: '/products/wireless-plans.html', screenshot: 'block-hero-product-savings-wireless.png' },
    { type: 'Pricing Cards Carousel', variation: 'Wireless Plans', desc: '4 plan cards with tiered pricing', page: '/products/wireless-plans.html', screenshot: 'block-pricing-cards-carousel-wireless.png' },
    { type: 'Features Grid', variation: 'Product Features', desc: '"All plans include" features', page: '/products/wireless-plans.html', screenshot: 'block-features-grid-wireless.png' },
    { type: 'FAQ Accordion', variation: 'Product FAQ', desc: 'Expandable FAQ sections', page: '/products/wireless-plans.html', screenshot: 'block-faq-accordion-wireless.png' },
    { type: 'Award Badge', variation: 'J.D. Power Badge', desc: '#1 in Customer Satisfaction', page: '/products/wireless-plans.html', screenshot: 'block-award-badge-wireless.png' },
    { type: 'Support Contact Block', variation: 'Product Support', desc: '3-column contact info', page: '/products/wireless-plans.html', screenshot: 'block-support-contact-wireless.png' },
    { type: 'Industry Hero', variation: 'Industry Standard', desc: 'Breadcrumb + heading + phone CTA', page: '/industries/healthcare.html', screenshot: 'block-hero-industry-healthcare.png' },
    { type: 'Anchor Navigation', variation: 'Industry Nav', desc: 'Horizontal pills for page sections', page: '/industries/healthcare.html', screenshot: 'block-anchor-nav-industry.png' },
    { type: 'Solution Link Cards', variation: 'Industry Solutions', desc: 'Icon + title + description cards', page: '/industries/healthcare.html', screenshot: 'block-solution-cards-industry.png' },
    { type: 'Image + Text Split', variation: 'Industry Split', desc: 'Image left, text + CTA right', page: '/industries/healthcare.html', screenshot: 'block-image-text-split-industry.png' },
    { type: 'Story Cards Overlay', variation: 'Industry Stories', desc: 'Image background with text overlay', page: '/industries/healthcare.html', screenshot: 'block-story-cards-overlay-industry.png' },
    { type: 'Insights Cards', variation: 'Industry Insights', desc: 'Resource cards with thumbnails', page: '/industries/healthcare.html', screenshot: 'block-insights-cards-industry.png' },
    { type: 'Contact CTA Banner', variation: 'Industry CTA', desc: 'Blue background with phone number', page: '/industries/healthcare.html', screenshot: 'block-contact-cta-industry.png' },
    { type: 'Lead Form (RAI)', variation: 'Industry Form', desc: 'Industry-specific context form', page: '/industries/healthcare.html', screenshot: 'block-lead-form-industry.png' },
    { type: 'Article Video Hero', variation: 'Customer Story', desc: 'Full-width hero with video play', page: '/learn/customer-stories/portx.html', screenshot: 'block-hero-article-video-story.png' },
    { type: 'Highlights/Stats', variation: 'Customer Story Stats', desc: '3-column Challenge/Results/Solution', page: '/learn/customer-stories/portx.html', screenshot: 'block-highlights-stats-story.png' },
    { type: 'About Section', variation: 'Customer Story About', desc: 'Company logo, description, PDF', page: '/learn/customer-stories/portx.html', screenshot: 'block-about-download-story.png' }
  ];

  let currentRow = 2;
  for (const block of blockData) {
    const row = ws3.addRow([block.type, block.variation, block.desc, block.page, '']);

    // Set row height for image
    row.height = 120;

    // Add image if exists
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

  // Sheet 4: Migration Phases
  const ws4 = workbook.addWorksheet('Migration Phases');
  ws4.columns = [{ width: 25 }, { width: 15 }, { width: 30 }, { width: 80 }];
  ws4.addRow(['Phase', 'Timeline', 'Goal', 'Tasks']);
  ws4.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws4.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const phaseData = [
    ['Phase 1: Foundation', 'Weeks 1-2', 'Establish core infrastructure', 'Project Setup, Global Components, Base CSS, Pilot Page'],
    ['Phase 2: Core Blocks', 'Weeks 3-5', 'Build reusable block library', 'Hero, Cards, Pricing, Lead Form, FAQ, Links, Video, Tabs'],
    ['Phase 3: Page Templates', 'Weeks 6-8', 'Create primary page types', 'Homepage, Products, Portfolios, Industries, Categories'],
    ['Phase 4: Content Migration', 'Weeks 9-12', 'Full content migration', 'Remaining Products, Customer Stories, Support pages'],
    ['Phase 5: QA & Launch', 'Weeks 13-14', 'Testing and go-live', 'Cross-browser, Mobile, Accessibility, Performance, Go-live']
  ];
  phaseData.forEach(row => ws4.addRow(row));

  // Sheet 5: Priority Matrix
  const ws5 = workbook.addWorksheet('Priority Matrix');
  ws5.columns = [{ width: 15 }, { width: 28 }, { width: 12 }, { width: 35 }];
  ws5.addRow(['Priority', 'Page Type', 'Count', 'Justification']);
  ws5.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws5.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

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
  priorityData.forEach(row => ws5.addRow(row));

  // Sheet 6: Page Distribution
  const ws6 = workbook.addWorksheet('Page Distribution');
  ws6.columns = [{ width: 22 }, { width: 15 }, { width: 15 }];
  ws6.addRow(['Page Type', '% of Total', 'Est. Count']);
  ws6.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws6.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

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
  distData.forEach(row => ws6.addRow(row));
  ws6.getRow(10).font = { bold: true };

  // Save workbook
  await workbook.xlsx.writeFile('/workspace/att-business-migration-plan.xlsx');
  console.log('Created: att-business-migration-plan.xlsx with embedded screenshots');
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
  ws1.addRow(['Block Variations Documented:', '27']);
  ws1.addRow(['Screenshot References:', '27']);

  // Sheet 2: All Pages
  const ws2 = workbook.addWorksheet('All Pages');
  ws2.columns = [{ width: 15 }, { width: 30 }, { width: 55 }, { width: 15 }, { width: 10 }];
  ws2.addRow(['Category', 'Page Name', 'URL', 'Template', 'Priority']);
  ws2.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws2.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const pagesData = [
    ['Homepage', 'Homepage', '/', 'Homepage', 'P1'],
    ['Products', 'Wireless Plans', '/products/wireless-plans.html', 'Product', 'P1'],
    ['Products', 'Dynamic Defense', '/products/att-dynamic-defense.html', 'Product', 'P2'],
    ['Products', 'Business Fiber', '/products/business-fiber-internet.html', 'Product', 'P2'],
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

  // Sheet 4: Screenshots Gallery
  const ws4 = workbook.addWorksheet('Screenshots');
  ws4.columns = [{ width: 35 }, { width: 25 }, { width: 55 }];
  ws4.addRow(['Block Type', 'Source Page', 'Screenshot']);
  ws4.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws4.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const screenshotData = [
    { block: 'Quick Links Carousel', page: 'Homepage', file: 'block-quick-links-carousel-homepage.png' },
    { block: 'Promo Banner Carousel', page: 'Homepage', file: 'block-promo-banner-carousel-homepage.png' },
    { block: 'Hero with Offer Cards', page: 'Homepage', file: 'block-hero-offer-cards-homepage.png' },
    { block: 'Video Hero Banner', page: 'Homepage', file: 'block-video-hero-banner-homepage.png' },
    { block: 'Feature Cards Grid', page: 'Homepage', file: 'block-feature-cards-grid-homepage.png' },
    { block: 'Product Cards Carousel', page: 'Homepage', file: 'block-product-cards-carousel-homepage.png' },
    { block: 'Industry Cards Carousel', page: 'Homepage', file: 'block-industry-cards-carousel-homepage.png' },
    { block: 'Guarantee Checklist', page: 'Homepage', file: 'block-guarantee-checklist-homepage.png' },
    { block: 'Lead Form (RAI)', page: 'Homepage', file: 'block-lead-form-rai-homepage.png' },
    { block: 'Link List Block', page: 'Homepage', file: 'block-link-list-homepage.png' },
    { block: 'Product Hero Savings', page: 'Wireless Plans', file: 'block-hero-product-savings-wireless.png' },
    { block: 'Pricing Cards Carousel', page: 'Wireless Plans', file: 'block-pricing-cards-carousel-wireless.png' },
    { block: 'Features Grid', page: 'Wireless Plans', file: 'block-features-grid-wireless.png' },
    { block: 'FAQ Accordion', page: 'Wireless Plans', file: 'block-faq-accordion-wireless.png' },
    { block: 'Award Badge', page: 'Wireless Plans', file: 'block-award-badge-wireless.png' },
    { block: 'Support Contact', page: 'Wireless Plans', file: 'block-support-contact-wireless.png' },
    { block: 'Industry Hero', page: 'Healthcare', file: 'block-hero-industry-healthcare.png' },
    { block: 'Anchor Navigation', page: 'Healthcare', file: 'block-anchor-nav-industry.png' },
    { block: 'Solution Cards', page: 'Healthcare', file: 'block-solution-cards-industry.png' },
    { block: 'Image + Text Split', page: 'Healthcare', file: 'block-image-text-split-industry.png' },
    { block: 'Story Cards Overlay', page: 'Healthcare', file: 'block-story-cards-overlay-industry.png' },
    { block: 'Insights Cards', page: 'Healthcare', file: 'block-insights-cards-industry.png' },
    { block: 'Contact CTA Banner', page: 'Healthcare', file: 'block-contact-cta-industry.png' },
    { block: 'Lead Form Industry', page: 'Healthcare', file: 'block-lead-form-industry.png' },
    { block: 'Article Video Hero', page: 'Customer Story', file: 'block-hero-article-video-story.png' },
    { block: 'Highlights/Stats', page: 'Customer Story', file: 'block-highlights-stats-story.png' },
    { block: 'About Section', page: 'Customer Story', file: 'block-about-download-story.png' }
  ];

  let currentRow = 2;
  for (const item of screenshotData) {
    const row = ws4.addRow([item.block, item.page, '']);
    row.height = 120;

    const imgPath = path.join(screenshotDir, item.file);
    if (fs.existsSync(imgPath)) {
      const imageId = workbook.addImage({
        filename: imgPath,
        extension: 'png'
      });

      ws4.addImage(imageId, {
        tl: { col: 2, row: currentRow - 1 },
        ext: { width: 380, height: 110 }
      });
    }
    currentRow++;
  }

  await workbook.xlsx.writeFile('/workspace/att-business-detailed-inventory.xlsx');
  console.log('Created: att-business-detailed-inventory.xlsx with embedded screenshots');
}

async function main() {
  await createMigrationPlanExcel();
  await createDetailedInventoryExcel();
}

main().catch(console.error);
