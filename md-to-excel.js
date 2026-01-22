const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Parse markdown tables into array of objects
function parseMarkdownTable(tableText) {
  const lines = tableText.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split('|').filter(h => h.trim()).map(h => h.trim());
  const rows = [];

  for (let i = 2; i < lines.length; i++) {
    const cells = lines[i].split('|').filter(c => c !== '');
    if (cells.length > 0) {
      const row = {};
      headers.forEach((h, idx) => {
        row[h] = cells[idx] ? cells[idx].trim() : '';
      });
      rows.push(row);
    }
  }
  return rows;
}

// Extract all tables from markdown
function extractTables(markdown) {
  const tableRegex = /\|(.+)\|\n\|[-|\s:]+\|\n((?:\|.+\|\n?)+)/g;
  const tables = [];
  let match;

  while ((match = tableRegex.exec(markdown)) !== null) {
    tables.push(match[0]);
  }
  return tables;
}

// Create Migration Plan Excel
function createMigrationPlanExcel(mdContent) {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Executive Summary
  const summaryData = [
    ['AT&T Business Website Migration Plan'],
    ['Migration to AEM Edge Delivery Services'],
    [''],
    ['Total Pages:', '749 (per client sitemap/robots.txt)'],
    ['Website:', 'www.business.att.com'],
    ['Project Type:', 'Enterprise B2B Site Migration'],
    [''],
    ['Content Types:'],
    ['- Products', '- Portfolios', '- Industry Solutions'],
    ['- Customer Stories', '- Support Content', '- Landing Pages']
  ];
  const ws1 = XLSX.utils.aoa_to_sheet(summaryData);
  ws1['!cols'] = [{ wch: 30 }, { wch: 50 }];
  XLSX.utils.book_append_sheet(wb, ws1, 'Executive Summary');

  // Sheet 2: Site Structure - Primary Navigation
  const navData = [
    ['Category', 'URL Pattern', 'Description'],
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
  const ws2 = XLSX.utils.aoa_to_sheet(navData);
  ws2['!cols'] = [{ wch: 15 }, { wch: 35 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(wb, ws2, 'Site Structure');

  // Sheet 3: Page Inventory
  const pageData = [
    ['Page Type', 'URL', 'Count', 'Notes'],
    ['Homepage', '/', '1', 'Main entry point with promotional content'],
    ['', '', '', ''],
    ['-- Product Pages (~45+ pages) --', '', '', ''],
    ['Wireless Plans', '/products/wireless-plans.html', '', 'Product detail page'],
    ['AT&T Dynamic Defense', '/products/att-dynamic-defense.html', '', 'Product detail page'],
    ['Business Fiber Internet', '/products/business-fiber-internet.html', '', 'Product detail page'],
    ['Office@Hand', '/products/office-at-hand.html', '', 'Product detail page'],
    ['IP Toll-Free', '/products/ip-toll-free.html', '', 'Product detail page'],
    ['SIP Trunking', '/products/sip-trunking.html', '', 'Product detail page'],
    ['Cloud Voice for MS Teams', '/products/att-cloud-voice-for-microsoft-teams.html', '', 'Product detail page'],
    ['Mobile 5G', '/products/mobile-5g.html', '', 'Product detail page'],
    ['Private Cellular Networks', '/products/att-private-cellular-networks.html', '', 'Product detail page'],
    ['Colocation', '/products/colocation.html', '', 'Product detail page'],
    ['CDN', '/products/cdn.html', '', 'Product detail page'],
    ['NetBond', '/products/netbond.html', '', 'Product detail page'],
    ['', '', '', ''],
    ['-- Portfolio Pages (~9 pages) --', '', '', ''],
    ['Mobility/Wireless', '/portfolios/mobility.html', '', 'Solution category landing'],
    ['Business Internet', '/portfolios/business-internet.html', '', 'Solution category landing'],
    ['5G for Business', '/portfolios/5G-for-business.html', '', 'Solution category landing'],
    ['Cybersecurity', '/portfolios/cybersecurity.html', '', 'Solution category landing'],
    ['Internet of Things', '/portfolios/internet-of-things.html', '', 'Solution category landing'],
    ['Voice & Collaboration', '/portfolios/collaboration.html', '', 'Solution category landing'],
    ['Cloud', '/portfolios/cloud.html', '', 'Solution category landing'],
    ['Networking', '/portfolios/networking.html', '', 'Solution category landing'],
    ['Consulting Services', '/portfolios/att-consulting-and-professional-services.html', '', 'Solution category landing'],
    ['', '', '', ''],
    ['-- Industry Pages (~14 pages) --', '', '', ''],
    ['Healthcare', '/industries/healthcare.html', '', 'Vertical market page'],
    ['Financial Services', '/industries/finance.html', '', 'Vertical market page'],
    ['Hospitality', '/industries/hospitality.html', '', 'Vertical market page'],
    ['Manufacturing', '/industries/manufacturing.html', '', 'Vertical market page'],
    ['Retail', '/industries/retail.html', '', 'Vertical market page'],
    ['Transportation', '/industries/transportation.html', '', 'Vertical market page'],
    ['Public Sector', '/industries/public-sector.html', '', 'Vertical market page'],
    ['Wholesale', '/industries/wholesale.html', '', 'Vertical market page'],
    ['Small Business', '/industries/smallbusiness.html', '', 'Vertical market page'],
    ['Partner Solutions', '/industries/partner-solutions.html', '', 'Vertical market page'],
    ['', '', '', ''],
    ['-- Category Pages (~18+ pages) --', '', '', ''],
    ['International Add-ons', '/categories/international-add-ons.html', '', 'Product grouping'],
    ['Mobile Workforce Tools', '/categories/mobile-workforce-tools.html', '', 'Product grouping'],
    ['Mobile Business Solutions', '/categories/mobile-business-solutions.html', '', 'Product grouping'],
    ['IoT Platforms', '/categories/iot-platforms.html', '', 'Product grouping'],
    ['Vehicle Solutions', '/categories/vehicle-solutions.html', '', 'Product grouping'],
    ['Asset Management', '/categories/asset-management.html', '', 'Product grouping'],
    ['Smart Cities', '/categories/smart-cities.html', '', 'Product grouping'],
    ['', '', '', ''],
    ['-- Customer Stories (~27+ pages) --', '', '', ''],
    ['Customer Stories Listing', '/learn/customer-stories.html', '1', 'Listing page'],
    ['Individual Stories', '/learn/customer-stories/*.html', '27+', 'Case study articles']
  ];
  const ws3 = XLSX.utils.aoa_to_sheet(pageData);
  ws3['!cols'] = [{ wch: 30 }, { wch: 55 }, { wch: 8 }, { wch: 35 }];
  XLSX.utils.book_append_sheet(wb, ws3, 'Page Inventory');

  // Sheet 4: Block Inventory with Screenshots
  const blockData = [
    ['Block Type', 'Variation', 'Description', 'Example Page', 'Screenshot File'],
    ['', '', '', '', ''],
    ['-- Navigation Blocks --', '', '', '', ''],
    ['Quick Links Carousel', 'Homepage', '6 pill links with icons (Phones, BYOD, Deals)', '/', 'block-quick-links-carousel-homepage.png'],
    ['', '', '', '', ''],
    ['-- Hero Blocks --', '', '', '', ''],
    ['Promo Banner Carousel', 'Standard', 'Single promo message with "Learn more" CTA', '/', 'block-promo-banner-carousel-homepage.png'],
    ['Hero with Offer Cards', 'Homepage Hero', 'Blue gradient background, 4+ offer cards carousel', '/', 'block-hero-offer-cards-homepage.png'],
    ['Video Hero Banner', 'Product Video Hero', 'Video thumbnail with messaging', '/', 'block-video-hero-banner-homepage.png'],
    ['Video Hero Banner', 'Article Video Hero', 'Full-width hero with video play button', '/learn/customer-stories/portx.html', 'block-hero-article-video-story.png'],
    ['Product Hero', 'Savings Hero', 'Savings badge, headline, expandable terms', '/products/wireless-plans.html', 'block-hero-product-savings-wireless.png'],
    ['Industry Hero', 'Industry Standard', 'Breadcrumb + heading + phone CTA', '/industries/healthcare.html', 'block-hero-industry-healthcare.png'],
    ['', '', '', '', ''],
    ['-- Card & Carousel Blocks --', '', '', '', ''],
    ['Pricing Cards Carousel', 'Wireless Plans', '4 plan cards with tiered pricing', '/products/wireless-plans.html', 'block-pricing-cards-carousel-wireless.png'],
    ['Product Cards Carousel', 'Homepage Products', 'Service cards carousel', '/', 'block-product-cards-carousel-homepage.png'],
    ['Industry Cards Carousel', 'Homepage Industries', 'Cards for Healthcare, Finance, etc.', '/', 'block-industry-cards-carousel-homepage.png'],
    ['Solution Link Cards', 'Industry Solutions', 'Icon + title + description cards', '/industries/healthcare.html', 'block-solution-cards-industry.png'],
    ['Story Cards with Overlay', 'Industry Stories', 'Image background with text overlay', '/industries/healthcare.html', 'block-story-cards-overlay-industry.png'],
    ['Insights/Resource Cards', 'Industry Insights', 'Resource cards with thumbnails', '/industries/healthcare.html', 'block-insights-cards-industry.png'],
    ['', '', '', '', ''],
    ['-- Feature Blocks --', '', '', '', ''],
    ['Feature Cards Grid', '4-Column Homepage', '"Why work with AT&T" - 4 cards', '/', 'block-feature-cards-grid-homepage.png'],
    ['Feature Cards Grid', '4-Column Product', '"All plans include" features', '/products/wireless-plans.html', 'block-features-grid-wireless.png'],
    ['Guarantee Checklist', 'Homepage Guarantee', 'AT&T Guarantee with 3 checkmarks', '/', 'block-guarantee-checklist-homepage.png'],
    ['', '', '', '', ''],
    ['-- Content Blocks --', '', '', '', ''],
    ['Image + Text Split', 'Industry Split', 'Image left, text + CTA right', '/industries/healthcare.html', 'block-image-text-split-industry.png'],
    ['Highlights/Stats Block', 'Customer Story Stats', '3-column Challenge/Results/Solution', '/learn/customer-stories/portx.html', 'block-highlights-stats-story.png'],
    ['About Section', 'Customer Story About', 'Company logo, description, PDF download', '/learn/customer-stories/portx.html', 'block-about-download-story.png'],
    ['Anchor Navigation Pills', 'Industry Nav', 'Horizontal pills for page sections', '/industries/healthcare.html', 'block-anchor-nav-industry.png'],
    ['FAQ Accordion', 'Product FAQ', 'Expandable FAQ sections', '/products/wireless-plans.html', 'block-faq-accordion-wireless.png'],
    ['Link List Block', 'Homepage Links', '"Looking for more?" 4-column links', '/', 'block-link-list-homepage.png'],
    ['', '', '', '', ''],
    ['-- Form Blocks --', '', '', '', ''],
    ['Lead Form (RAI)', 'Homepage Form', '"Talk to an AT&T Business expert" 6 fields', '/', 'block-lead-form-rai-homepage.png'],
    ['Lead Form (RAI)', 'Industry Form', 'Industry-specific context form', '/industries/healthcare.html', 'block-lead-form-industry.png'],
    ['', '', '', '', ''],
    ['-- CTA & Contact Blocks --', '', '', '', ''],
    ['Contact CTA Banner', 'Industry CTA', 'Blue background with phone number', '/industries/healthcare.html', 'block-contact-cta-industry.png'],
    ['Support Contact Block', 'Product Support', '3-column: Wireless, Internet, Video', '/products/wireless-plans.html', 'block-support-contact-wireless.png'],
    ['', '', '', '', ''],
    ['-- Trust & Social Proof Blocks --', '', '', '', ''],
    ['Award Badge', 'J.D. Power Badge', '#1 in Customer Satisfaction', '/products/wireless-plans.html', 'block-award-badge-wireless.png']
  ];
  const ws4 = XLSX.utils.aoa_to_sheet(blockData);
  ws4['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 45 }, { wch: 40 }, { wch: 45 }];
  XLSX.utils.book_append_sheet(wb, ws4, 'Block Inventory');

  // Sheet 5: Screenshot Reference
  const screenshotData = [
    ['Screenshot File', 'Block Type', 'Source Page'],
    ['block-quick-links-carousel-homepage.png', 'Quick Links', 'Homepage'],
    ['block-promo-banner-carousel-homepage.png', 'Promo Banner', 'Homepage'],
    ['block-hero-offer-cards-homepage.png', 'Hero with Cards', 'Homepage'],
    ['block-video-hero-banner-homepage.png', 'Video Hero', 'Homepage'],
    ['block-feature-cards-grid-homepage.png', 'Feature Grid', 'Homepage'],
    ['block-product-cards-carousel-homepage.png', 'Product Cards', 'Homepage'],
    ['block-industry-cards-carousel-homepage.png', 'Industry Cards', 'Homepage'],
    ['block-guarantee-checklist-homepage.png', 'Guarantee Block', 'Homepage'],
    ['block-lead-form-rai-homepage.png', 'Lead Form', 'Homepage'],
    ['block-link-list-homepage.png', 'Link List', 'Homepage'],
    ['block-hero-product-savings-wireless.png', 'Product Hero', 'Wireless Plans'],
    ['block-pricing-cards-carousel-wireless.png', 'Pricing Cards', 'Wireless Plans'],
    ['block-features-grid-wireless.png', 'Features Grid', 'Wireless Plans'],
    ['block-faq-accordion-wireless.png', 'FAQ Accordion', 'Wireless Plans'],
    ['block-award-badge-wireless.png', 'Award Badge', 'Wireless Plans'],
    ['block-support-contact-wireless.png', 'Support Contact', 'Wireless Plans'],
    ['block-hero-industry-healthcare.png', 'Industry Hero', 'Healthcare'],
    ['block-anchor-nav-industry.png', 'Anchor Nav', 'Healthcare'],
    ['block-solution-cards-industry.png', 'Solution Cards', 'Healthcare'],
    ['block-image-text-split-industry.png', 'Image+Text', 'Healthcare'],
    ['block-story-cards-overlay-industry.png', 'Story Cards', 'Healthcare'],
    ['block-insights-cards-industry.png', 'Insights Cards', 'Healthcare'],
    ['block-contact-cta-industry.png', 'Contact CTA', 'Healthcare'],
    ['block-lead-form-industry.png', 'Lead Form', 'Healthcare'],
    ['block-hero-article-video-story.png', 'Article Hero', 'Customer Story'],
    ['block-highlights-stats-story.png', 'Stats Block', 'Customer Story'],
    ['block-about-download-story.png', 'About Section', 'Customer Story']
  ];
  const ws5 = XLSX.utils.aoa_to_sheet(screenshotData);
  ws5['!cols'] = [{ wch: 45 }, { wch: 20 }, { wch: 20 }];
  XLSX.utils.book_append_sheet(wb, ws5, 'Screenshots');

  // Sheet 6: Migration Phases
  const phaseData = [
    ['Phase', 'Timeline', 'Goal', 'Tasks'],
    ['Phase 1: Foundation', 'Weeks 1-2', 'Establish core infrastructure', 'Project Setup, Global Components (Header/Footer), Base CSS, Pilot Page'],
    ['Phase 2: Core Blocks', 'Weeks 3-5', 'Build reusable block library', 'Week 3: Hero, Card Carousel, Feature Cards | Week 4: Pricing, Offer Cards, Lead Form, FAQ | Week 5: Link List, Quote, Video, Image+Text, Tabs'],
    ['Phase 3: Page Templates', 'Weeks 6-8', 'Create primary page types', 'Week 6: Homepage + 5 Products | Week 7: Portfolios + Industries | Week 8: Offers, Bundles, Categories'],
    ['Phase 4: Content Migration', 'Weeks 9-12', 'Full content migration', 'Week 9-10: Remaining Products (30+) | Week 11: Customer Stories (30+) | Week 12: Support + remaining'],
    ['Phase 5: QA & Launch', 'Weeks 13-14', 'Testing and go-live', 'Cross-browser testing, Mobile validation, Accessibility audit, Performance optimization, Go-live']
  ];
  const ws6 = XLSX.utils.aoa_to_sheet(phaseData);
  ws6['!cols'] = [{ wch: 25 }, { wch: 15 }, { wch: 30 }, { wch: 80 }];
  XLSX.utils.book_append_sheet(wb, ws6, 'Migration Phases');

  // Sheet 7: Priority Matrix
  const priorityData = [
    ['Priority', 'Page Type', 'Count', 'Justification'],
    ['P1 - Critical', 'Homepage', '1', 'Primary entry point'],
    ['P1 - Critical', 'Offers', '1', 'Revenue driver'],
    ['P1 - Critical', 'Wireless Plans', '1', 'Top converting page'],
    ['P2 - High', 'Product Pages (top 10)', '10', 'High traffic products'],
    ['P2 - High', 'Portfolio Pages', '9', 'Category navigation'],
    ['P3 - Medium', 'Industry Pages', '14', 'Vertical targeting'],
    ['P3 - Medium', 'Industry Solutions', '6', 'Vertical sub-pages'],
    ['P3 - Medium', 'Remaining Products', '35+', 'Full catalog'],
    ['P3 - Medium', 'Category Pages', '18+', 'Product groupings'],
    ['P4 - Lower', 'Customer Stories', '27+', 'Supporting content'],
    ['P4 - Lower', 'Content Hub Listings', '4', 'SEO content'],
    ['P5 - Lowest', 'Support/Utility', '5', 'Low change frequency']
  ];
  const ws7 = XLSX.utils.aoa_to_sheet(priorityData);
  ws7['!cols'] = [{ wch: 15 }, { wch: 25 }, { wch: 10 }, { wch: 35 }];
  XLSX.utils.book_append_sheet(wb, ws7, 'Priority Matrix');

  // Sheet 8: Page Distribution
  const distData = [
    ['Page Type', '% of Total', 'Est. Count'],
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
  const ws8 = XLSX.utils.aoa_to_sheet(distData);
  ws8['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 15 }];
  XLSX.utils.book_append_sheet(wb, ws8, 'Page Distribution');

  // Sheet 9: Block Priority
  const blockPriorityData = [
    ['Priority', 'Block Type', 'Count', 'Notes'],
    ['Critical', 'Hero, Pricing Cards, Lead Form, Header/Footer', '6', 'Must have for launch'],
    ['High', 'Card Carousels, Feature Grids, FAQ, Link Lists', '10', 'Core content blocks'],
    ['Medium', 'Stats, Image+Text, Anchor Nav, Award Badges', '8', 'Supporting content'],
    ['Low', 'Promo Banners, Disclaimers', '4', 'Nice to have']
  ];
  const ws9 = XLSX.utils.aoa_to_sheet(blockPriorityData);
  ws9['!cols'] = [{ wch: 12 }, { wch: 50 }, { wch: 8 }, { wch: 25 }];
  XLSX.utils.book_append_sheet(wb, ws9, 'Block Priority');

  return wb;
}

// Create Detailed Inventory Excel
function createDetailedInventoryExcel() {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Summary
  const summaryData = [
    ['AT&T Business - Detailed Page & Asset Inventory'],
    [''],
    ['Total Pages (Client Provided):', '749'],
    ['Documented Page Templates:', '~150'],
    ['Block Variations Documented:', '27'],
    ['Screenshot References:', '27']
  ];
  const ws1 = XLSX.utils.aoa_to_sheet(summaryData);
  ws1['!cols'] = [{ wch: 35 }, { wch: 20 }];
  XLSX.utils.book_append_sheet(wb, ws1, 'Summary');

  // Sheet 2: All Pages by Category
  const pagesData = [
    ['Category', 'Page Name', 'URL', 'Template Type', 'Priority'],
    ['Homepage', 'Homepage', '/', 'Homepage', 'P1'],
    ['', '', '', '', ''],
    ['Products', 'Wireless Plans', '/products/wireless-plans.html', 'Product', 'P1'],
    ['Products', 'Dynamic Defense', '/products/att-dynamic-defense.html', 'Product', 'P2'],
    ['Products', 'Business Fiber Internet', '/products/business-fiber-internet.html', 'Product', 'P2'],
    ['Products', 'Office@Hand', '/products/office-at-hand.html', 'Product', 'P2'],
    ['Products', 'SIP Trunking', '/products/sip-trunking.html', 'Product', 'P3'],
    ['Products', 'Cloud Voice for MS Teams', '/products/att-cloud-voice-for-microsoft-teams.html', 'Product', 'P2'],
    ['Products', 'Mobile 5G', '/products/mobile-5g.html', 'Product', 'P2'],
    ['Products', 'Private Cellular Networks', '/products/att-private-cellular-networks.html', 'Product', 'P3'],
    ['Products', 'Colocation', '/products/colocation.html', 'Product', 'P3'],
    ['Products', 'CDN', '/products/cdn.html', 'Product', 'P3'],
    ['Products', 'NetBond', '/products/netbond.html', 'Product', 'P3'],
    ['Products', 'Cell Booster Pro', '/products/att-cell-booster-pro.html', 'Product', 'P3'],
    ['Products', 'Enhanced Push-to-Talk', '/products/enhanced-push-to-talk.html', 'Product', 'P3'],
    ['Products', 'Wireless Internet', '/products/wireless-internet.html', 'Product', 'P2'],
    ['', '', '', '', ''],
    ['Portfolios', 'Mobility/Wireless', '/portfolios/mobility.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Business Internet', '/portfolios/business-internet.html', 'Portfolio', 'P2'],
    ['Portfolios', '5G for Business', '/portfolios/5G-for-business.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Cybersecurity', '/portfolios/cybersecurity.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Internet of Things', '/portfolios/internet-of-things.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Voice & Collaboration', '/portfolios/collaboration.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Cloud', '/portfolios/cloud.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Networking', '/portfolios/networking.html', 'Portfolio', 'P2'],
    ['Portfolios', 'Consulting Services', '/portfolios/att-consulting-and-professional-services.html', 'Portfolio', 'P2'],
    ['', '', '', '', ''],
    ['Industries', 'Healthcare', '/industries/healthcare.html', 'Industry', 'P3'],
    ['Industries', 'Financial Services', '/industries/finance.html', 'Industry', 'P3'],
    ['Industries', 'Hospitality', '/industries/hospitality.html', 'Industry', 'P3'],
    ['Industries', 'Manufacturing', '/industries/manufacturing.html', 'Industry', 'P3'],
    ['Industries', 'Retail', '/industries/retail.html', 'Industry', 'P3'],
    ['Industries', 'Transportation', '/industries/transportation.html', 'Industry', 'P3'],
    ['Industries', 'Public Sector', '/industries/public-sector.html', 'Industry', 'P3'],
    ['Industries', 'Wholesale', '/industries/wholesale.html', 'Industry', 'P3'],
    ['Industries', 'Small Business', '/industries/smallbusiness.html', 'Industry', 'P3'],
    ['', '', '', '', ''],
    ['Promotional', 'Offers', '/offers.html', 'Landing', 'P1'],
    ['Promotional', 'Bundles', '/bundles.html', 'Landing', 'P2'],
    ['Promotional', '30-Day Risk Free', '/explore/30-day-risk-free.html', 'Landing', 'P3'],
    ['Promotional', 'Referral Program', '/explore/referral.html', 'Landing', 'P4'],
    ['', '', '', '', ''],
    ['Support', 'Contact', '/support/contact.html', 'Support', 'P4'],
    ['Support', 'Premier Support', '/support/premier.html', 'Support', 'P4'],
    ['Support', 'Business Center', '/support/business-center.html', 'Support', 'P4']
  ];
  const ws2 = XLSX.utils.aoa_to_sheet(pagesData);
  ws2['!cols'] = [{ wch: 15 }, { wch: 30 }, { wch: 55 }, { wch: 15 }, { wch: 10 }];
  XLSX.utils.book_append_sheet(wb, ws2, 'All Pages');

  // Sheet 3: Asset Inventory
  const assetData = [
    ['Asset Type', 'Format', 'Est. Count', 'Notes'],
    ['Images', 'JPG, PNG, WebP, SVG', '500+', 'Product images, icons, backgrounds'],
    ['Videos', 'MP4, YouTube embeds', '50+', 'Product demos, testimonials'],
    ['PDFs', 'PDF', '100+', 'Datasheets, case studies, reports'],
    ['Fonts', 'WOFF2, WOFF', '5-10', 'AT&T brand fonts'],
    ['Icons', 'SVG, Icon fonts', '100+', 'UI icons, feature icons'],
    ['', '', '', ''],
    ['External Integrations:', '', '', ''],
    ['Lead Form Backend', 'API', '-', 'RAI form submission'],
    ['Analytics', 'Adobe Analytics', '-', 'Page tracking'],
    ['Chat Widget', 'Third-party', '-', 'Live chat support'],
    ['Video Player', 'Brightcove/YouTube', '-', 'Video embeds'],
    ['Maps', 'Google Maps API', '-', 'Store locator (if any)']
  ];
  const ws3 = XLSX.utils.aoa_to_sheet(assetData);
  ws3['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(wb, ws3, 'Assets');

  // Sheet 4: Template Types
  const templateData = [
    ['Template Type', 'Page Count', 'Block Composition', 'Examples'],
    ['Homepage', '1', 'Hero + Cards + Features + Form + Links', '/'],
    ['Product Page', '45+', 'Hero + Pricing + Features + FAQ + Support', '/products/wireless-plans.html'],
    ['Portfolio Page', '9', 'Hero + Solution Cards + Stories + CTA', '/portfolios/mobility.html'],
    ['Industry Page', '14', 'Hero + Nav + Solutions + Split + Stories + Form', '/industries/healthcare.html'],
    ['Category Page', '18+', 'Hero + Product Grid + CTA', '/categories/iot-platforms.html'],
    ['Customer Story', '27+', 'Video Hero + Stats + Content + About', '/learn/customer-stories/portx.html'],
    ['Landing Page', '10+', 'Hero + Features + Form + CTA', '/offers.html'],
    ['Support Page', '3', 'Hero + Contact Info + FAQ', '/support/contact.html']
  ];
  const ws4 = XLSX.utils.aoa_to_sheet(templateData);
  ws4['!cols'] = [{ wch: 18 }, { wch: 12 }, { wch: 50 }, { wch: 40 }];
  XLSX.utils.book_append_sheet(wb, ws4, 'Template Types');

  return wb;
}

// Main execution
const migrationWb = createMigrationPlanExcel();
XLSX.writeFile(migrationWb, '/workspace/att-business-migration-plan.xlsx');
console.log('Created: att-business-migration-plan.xlsx');

const inventoryWb = createDetailedInventoryExcel();
XLSX.writeFile(inventoryWb, '/workspace/att-business-detailed-inventory.xlsx');
console.log('Created: att-business-detailed-inventory.xlsx');
