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
  ws1.addRow(['Block Types Documented:', '68 (consolidated from 117 variations)']);
  ws1.addRow([]);
  ws1.addRow(['Content Types:']);
  ws1.addRow(['Products, Portfolios, Industry Solutions, Customer Stories, Support Content, Landing Pages']);
  ws1.addRow([]);
  ws1.addRow([]);
  const disclaimerRow1 = ws1.addRow(['DISCLAIMER:']);
  disclaimerRow1.font = { bold: true, color: { argb: 'FFCC0000' } };
  ws1.addRow(['This block inventory was compiled through automated crawling and manual review of www.business.att.com.']);
  ws1.addRow(['Block variations represent patterns observed at the time of analysis and may not capture all edge cases,']);
  ws1.addRow(['dynamic content states, or pages behind authentication. Actual implementation may require additional']);
  ws1.addRow(['blocks or variations not documented here. Screenshots are point-in-time captures and page content']);
  ws1.addRow(['may have changed since collection. This document is intended for planning purposes only.']);

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

  // Consolidated block data - similar variations grouped together
  const blockData = [
    // === GLOBAL/NAVIGATION BLOCKS ===
    { type: 'Quick Links Carousel', variation: 'Homepage', desc: 'Horizontal pill links with icons for quick navigation', page: '/', screenshot: 'block-quick-links-carousel-homepage.png' },
    { type: 'Anchor Navigation', variation: 'Multiple Pages', desc: 'Horizontal jump links for page sections (sticky, pills, tabs)', page: 'Industries, Offers, Contact, Knowledge Center', screenshot: 'block-anchor-nav-industry.png' },

    // === HERO BLOCKS (Consolidated) ===
    { type: 'Hero Block', variation: 'Homepage (Offer Cards)', desc: 'Blue gradient hero with 4+ offer cards carousel', page: '/', screenshot: 'block-hero-offer-cards-homepage.png' },
    { type: 'Hero Block', variation: 'Homepage (Video)', desc: 'Video thumbnail with messaging and CTA', page: '/', screenshot: 'block-video-hero-banner-homepage.png' },
    { type: 'Hero Block', variation: 'Product Pages', desc: 'Savings badge, headline, terms, pricing CTA', page: 'Products (Wireless, Fiber, Phone)', screenshot: 'block-hero-product-savings-wireless.png' },
    { type: 'Hero Block', variation: 'Portfolio/Industry', desc: 'Breadcrumb + heading + phone/quick links CTA', page: 'Portfolios, Industries', screenshot: 'block-hero-industry-healthcare.png' },
    { type: 'Hero Block', variation: 'Content Pages', desc: 'Full-width hero with video play or subscribe', page: 'Learn Hub, Customer Stories, Business Solutions', screenshot: 'block-blog-hero-banner.png' },
    { type: 'Hero Block', variation: 'Regional/Areas', desc: 'City-specific hero with location name', page: '/areas/*.html', screenshot: 'areas-page-full.png' },
    { type: 'Hero Block', variation: '404 Error', desc: 'Globe graphic with "oops" messaging', page: '/404.html', screenshot: '404-page-full.png' },

    // === PRICING & PLAN BLOCKS (Consolidated) ===
    { type: 'Pricing Cards Carousel', variation: 'Product Pages', desc: 'Tabbed/carousel pricing cards with tiered plans (3-5 cards)', page: 'Products (Wireless, Fiber, Phone)', screenshot: 'block-pricing-cards-carousel-wireless.png' },

    // === FEATURE/VALUE PROP BLOCKS (Consolidated) ===
    { type: 'Feature Cards Grid', variation: 'Multiple Pages', desc: 'Icon + text feature cards (3-4 columns)', page: 'Homepage, Products, Portfolios, Why AT&T', screenshot: 'block-feature-cards-grid-homepage.png' },
    { type: 'Value Props Grid', variation: 'Portfolio/Landing', desc: 'Speed, Reliability, Security value propositions', page: 'Business Internet, Areas, Explore', screenshot: 'block-value-props-internet.png' },

    // === CARD CAROUSEL BLOCKS (Consolidated) ===
    { type: 'Product/Service Cards Carousel', variation: 'Multiple Pages', desc: 'Service, industry, or product cards in carousel format', page: 'Homepage, Portfolios', screenshot: 'block-product-cards-carousel-homepage.png' },
    { type: 'Offer Cards Carousel', variation: 'Multiple Pages', desc: 'Deal/promotion cards with images and CTAs', page: 'Products, Portfolios, Offers', screenshot: 'block-offer-cards-fiber.png' },
    { type: 'Resource/Insights Cards', variation: 'Multiple Pages', desc: 'Article, video, or resource cards with thumbnails', page: 'Industries, Portfolios, Business Solutions', screenshot: 'block-insights-cards-industry.png' },
    { type: 'Story Cards Overlay', variation: 'Multiple Pages', desc: 'Image background with text overlay for case studies', page: 'Industries, Portfolios, Power of FirstNet', screenshot: 'block-story-cards-overlay-industry.png' },

    // === FORM BLOCKS ===
    { type: 'Lead Form (RAI)', variation: 'Multiple Pages', desc: '"Talk to an AT&T Business expert" contact form', page: 'Homepage, Industries, Products', screenshot: 'block-lead-form-rai-homepage.png' },
    { type: 'Check Availability Form', variation: 'Portfolio', desc: 'Address input with availability check button', page: '/portfolios/business-internet.html', screenshot: 'block-check-availability-internet.png' },
    { type: 'Email Subscription Form', variation: 'Multiple Pages', desc: 'Blue background newsletter signup', page: 'Learn Hub, Learn Articles', screenshot: 'block-email-subscription-form.png' },
    { type: 'Search Block', variation: '404/Support', desc: 'Search input for finding content', page: '404, Support', screenshot: '404-page-full.png' },

    // === FAQ & ACCORDION BLOCKS (Consolidated) ===
    { type: 'FAQ Accordion', variation: 'Multiple Pages', desc: 'Expandable FAQ sections with product/topic-specific content', page: 'Products, Support', screenshot: 'block-faq-accordion-wireless.png' },
    { type: 'Support Tabs Accordion', variation: 'Support', desc: 'Expandable topic sections for help content', page: '/support.html', screenshot: 'block-support-tabs-accordion.png' },
    { type: 'Features Collapsible List', variation: 'Products', desc: 'Expandable feature list with descriptions', page: 'Product detail pages', screenshot: 'phone-product-page-full.png' },

    // === CTA & PROMO BLOCKS (Consolidated) ===
    { type: 'Promo Banner', variation: 'Multiple Pages', desc: 'Single promo message with CTA (carousel or static)', page: 'Homepage, Offers', screenshot: 'block-promo-banner-carousel-homepage.png' },
    { type: 'Full-width Promo Banner', variation: 'Multiple Pages', desc: 'Large image banner with savings/action CTA', page: 'Offers, Partner Solutions', screenshot: 'block-fullwidth-promo-offers.png' },
    { type: 'Contact CTA Banner', variation: 'Multiple Pages', desc: 'Blue/dark background with phone number or specialist CTA', page: 'Industries, Why AT&T', screenshot: 'block-contact-cta-industry.png' },
    { type: 'Multi-Button CTA', variation: 'Portfolios', desc: '"Ready to get started?" with multiple action buttons', page: 'Business Internet Portfolio', screenshot: 'block-cta-multi-button-internet.png' },
    { type: 'Current Customer CTA', variation: 'Landing Pages', desc: '3-button CTA for existing customers', page: '/explore/*.html', screenshot: 'explore-page-full.png' },

    // === TRUST & AWARD BLOCKS (Consolidated) ===
    { type: 'Guarantee Checklist', variation: 'Multiple Pages', desc: 'AT&T Guarantee with checkmarks', page: 'Homepage, Portfolios', screenshot: 'block-guarantee-checklist-homepage.png' },
    { type: 'Award Badge', variation: 'Multiple Pages', desc: 'J.D. Power, Frost & Sullivan awards with badges', page: 'Products, Portfolios, Why AT&T', screenshot: 'block-award-badge-wireless.png' },
    { type: 'Customer Testimonials Carousel', variation: 'Why AT&T', desc: 'Quote cards with industry tags', page: '/about/why-att-business.html', screenshot: 'block-customer-testimonials-carousel.png' },

    // === TABLE/COMPARISON BLOCKS (Consolidated) ===
    { type: 'Comparison Table', variation: 'Multiple Pages', desc: 'Feature matrix comparing solutions or products', page: 'Business Internet, Category, Business Solutions', screenshot: 'block-comparison-table-internet.png' },
    { type: 'Benefits Table', variation: 'Category Pages', desc: 'Feature comparison table with checkmarks', page: '/categories/*.html', screenshot: 'block-benefits-table-category.png' },
    { type: 'Use Cases Table', variation: 'Business Solutions', desc: 'Problem/Benefits/Solution format', page: '/business-solutions/*.html', screenshot: 'block-use-cases-table.png' },

    // === CONTENT/ARTICLE BLOCKS ===
    { type: 'Featured Article Block', variation: 'Learn Hub', desc: 'Article preview with table of contents', page: '/learn.html', screenshot: 'block-featured-article.png' },
    { type: 'Latest Articles Grid', variation: 'Learn Hub', desc: '2-column article cards with load more', page: '/learn.html', screenshot: 'block-latest-articles-grid.png' },
    { type: 'Article Header with Byline', variation: 'Learn Articles', desc: 'Title, subtitle, author, date, read time', page: '/learn/tech-advice/*.html', screenshot: 'block-article-header-byline.png' },
    { type: 'Article Tags', variation: 'Learn Articles', desc: 'Category labels at article top', page: '/learn/tech-advice/*.html', screenshot: 'block-article-tags.png' },
    { type: 'Shareable Quote Block', variation: 'Learn Articles', desc: 'Pull quote with social share', page: '/learn/tech-advice/*.html', screenshot: 'block-shareable-quote.png' },
    { type: 'Social Share Block', variation: 'Learn Articles', desc: 'X, LinkedIn, Facebook, Mail buttons', page: '/learn/tech-advice/*.html', screenshot: 'block-social-share.png' },
    { type: 'More Stories Grid', variation: 'Learn Articles', desc: '3 related articles with images', page: '/learn/tech-advice/*.html', screenshot: 'block-more-stories-grid.png' },
    { type: 'Top Topics Carousel', variation: 'Learn Hub', desc: 'Horizontal scrolling topic cards', page: '/learn.html', screenshot: 'block-top-topics-carousel.png' },

    // === SUPPORT BLOCKS ===
    { type: 'Support Quick Actions Grid', variation: 'Support Pages', desc: 'Icon cards for common actions (chat, call, etc.)', page: 'Support, Contact', screenshot: 'block-support-quick-actions-grid.png' },
    { type: 'Support Portal Cards', variation: 'Support', desc: 'Linked cards to support portals', page: '/support.html', screenshot: 'block-support-portal-cards.png' },
    { type: 'Resource Cards (Blue)', variation: 'Support', desc: 'Video Library, Social, Training cards', page: '/support.html', screenshot: 'block-resource-cards-blue.png' },
    { type: 'Guided Courses Block', variation: 'Support', desc: 'Image + text with course links', page: '/support.html', screenshot: 'block-guided-courses.png' },
    { type: 'Contact Tables', variation: 'Contact', desc: 'Categorized phone numbers by service', page: '/support/contact.html', screenshot: 'contact-page-full.png' },
    { type: 'Support Contact Block', variation: 'Products', desc: '3-column contact info', page: 'Product pages', screenshot: 'block-support-contact-wireless.png' },

    // === INDUSTRY/SOLUTION BLOCKS ===
    { type: 'Solution Link Cards', variation: 'Industry Pages', desc: 'Icon + title + description cards for solutions', page: '/industries/*.html', screenshot: 'block-solution-cards-industry.png' },
    { type: 'Image + Text Split', variation: 'Multiple Pages', desc: 'Image left/right with text + CTA', page: 'Industries, Knowledge Center', screenshot: 'block-image-text-split-industry.png' },
    { type: 'Partner Cards Grid', variation: 'Partner Solutions', desc: 'Card grid with image backgrounds', page: '/industries/partner-solutions.html', screenshot: 'partner-solutions-full.png' },

    // === CUSTOMER STORY BLOCKS ===
    { type: 'Highlights/Stats Block', variation: 'Customer Stories', desc: '3-column Challenge/Results/Solution metrics', page: '/learn/customer-stories/*.html', screenshot: 'block-highlights-stats-story.png' },
    { type: 'About Section', variation: 'Customer Stories', desc: 'Company logo, description, PDF download', page: '/learn/customer-stories/*.html', screenshot: 'block-about-download-story.png' },
    { type: 'Case Study Stats Block', variation: 'Portfolios', desc: '3-column stats with metrics', page: '/portfolios/cybersecurity.html', screenshot: 'cybersecurity-portfolio-full.png' },

    // === VIDEO BLOCKS ===
    { type: 'Video Embed Block', variation: 'Portfolios', desc: 'Embedded video player with controls', page: 'Portfolios (5G, Cybersecurity)', screenshot: '5g-portfolio-full.png' },
    { type: 'Video Content Cards', variation: 'Portfolios', desc: 'Video thumbnail cards carousel', page: '/portfolios/cybersecurity.html', screenshot: 'cybersecurity-portfolio-full.png' },

    // === LINK/NAVIGATION BLOCKS ===
    { type: 'Link List Block', variation: 'Multiple Pages', desc: '"Looking for more?" multi-column links', page: 'Homepage, Portfolios', screenshot: 'block-link-list-homepage.png' },
    { type: 'Additional Resources Grid', variation: 'Why AT&T', desc: '4-column extensive links list', page: '/about/why-att-business.html', screenshot: 'block-additional-resources-grid.png' },
    { type: 'Helpful Links Cards', variation: '404', desc: 'Carousel of suggested pages', page: '/404.html', screenshot: '404-page-full.png' },
    { type: 'Solutions Sidebar', variation: 'Learn Articles', desc: 'Links to related solutions', page: '/learn/tech-advice/*.html', screenshot: 'block-solutions-sidebar.png' },

    // === OFFER-SPECIFIC BLOCKS ===
    { type: 'Featured Offers Cards', variation: 'Offers', desc: '2-up side-by-side offer cards', page: '/offers.html', screenshot: 'block-featured-offers-cards.png' },
    { type: 'Category Offers Carousel', variation: 'Offers', desc: 'Device, Wireless, Accessories, Internet, Bundles carousels', page: '/offers.html', screenshot: 'block-device-offers-carousel.png' },
    { type: 'Referral Program Block', variation: 'Offers', desc: 'Earn rewards checklist promo', page: '/offers.html', screenshot: 'block-referral-program-offers.png' },
    { type: 'Risk-Free Trial Block', variation: 'Multiple Pages', desc: '30-day risk-free cancellation/trial policy', page: 'Offers, Bundles', screenshot: 'block-risk-free-trial-offers.png' },

    // === MISCELLANEOUS BLOCKS ===
    { type: 'Complete Solution Promo', variation: 'Bundles', desc: 'Fiber + security + backup promo banner', page: '/bundles.html', screenshot: 'bundles-page-full.png' },
    { type: 'Related Products Cards', variation: 'Business Solutions', desc: 'Cards with View product links', page: '/business-solutions/*.html', screenshot: 'block-related-products-cards.png' },
    { type: 'International Calling Block', variation: 'Phone Product', desc: 'Benefits checklist for international service', page: '/products/att-phone-for-business.html', screenshot: 'phone-product-page-full.png' },
    { type: 'Contact Options 2-Column', variation: 'Why AT&T', desc: 'Call specialist vs Schedule cards', page: '/about/why-att-business.html', screenshot: 'block-contact-options-2column.png' },
    { type: 'Business Center CTA Card', variation: 'Business Solutions', desc: 'Single promo card with login link', page: '/business-solutions/*.html', screenshot: 'block-business-center-cta-card.png' },
    { type: 'Data-driven Insights Cards', variation: '5G Portfolio', desc: 'Stats cards with percentages/numbers', page: '/portfolios/5G-for-business.html', screenshot: '5g-portfolio-full.png' }
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

  // Sheet 4: Block Reuse Summary with URLs
  const ws4 = workbook.addWorksheet('Block Reuse Summary');
  ws4.columns = [{ width: 25 }, { width: 12 }, { width: 90 }];
  ws4.addRow(['Block Type', 'Page Count', 'Page URLs']);
  ws4.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws4.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const reuseData = [
    ['Hero Blocks', '6', '/, /products/wireless-plans.html, /products/business-fiber-internet.html, /industries/healthcare.html, /portfolios/mobility.html, /learn/customer-stories/portx.html'],
    ['Pricing Cards Carousel', '2', '/products/wireless-plans.html, /products/business-fiber-internet.html'],
    ['Feature Cards Grid', '3', '/, /products/wireless-plans.html, /products/business-fiber-internet.html'],
    ['Offer Cards Carousel', '2', '/products/business-fiber-internet.html, /portfolios/mobility.html'],
    ['Guarantee Checklist', '2', '/, /portfolios/mobility.html'],
    ['FAQ Accordion', '2', '/products/wireless-plans.html, /products/business-fiber-internet.html'],
    ['Lead Form (RAI)', '3', '/, /industries/healthcare.html, /products/business-fiber-internet.html'],
    ['Product Cards Carousel', '1', '/'],
    ['Industry Cards Carousel', '1', '/'],
    ['Link List Block', '1', '/'],
    ['Anchor Navigation', '1', '/industries/healthcare.html'],
    ['Solution Link Cards', '1', '/industries/healthcare.html'],
    ['Image + Text Split', '1', '/industries/healthcare.html'],
    ['Story Cards Overlay', '1', '/industries/healthcare.html'],
    ['Insights Cards', '1', '/industries/healthcare.html'],
    ['Contact CTA Banner', '1', '/industries/healthcare.html'],
    ['Highlights/Stats', '1', '/learn/customer-stories/portx.html'],
    ['About Section', '1', '/learn/customer-stories/portx.html'],
    ['Award Badge', '1', '/products/wireless-plans.html'],
    ['Support Contact Block', '1', '/products/wireless-plans.html'],
    ['Quick Links Carousel', '1', '/'],
    ['Promo Banner Carousel', '1', '/'],
    ['Video Hero Banner', '1', '/'],
    ['Check Availability Form', '1', '/portfolios/business-internet.html'],
    ['Value Props Grid', '1', '/portfolios/business-internet.html'],
    ['Products Carousel Cards', '1', '/portfolios/business-internet.html'],
    ['Comparison Table', '1', '/portfolios/business-internet.html'],
    ['Award Badge with Image', '1', '/portfolios/business-internet.html'],
    ['Multi-Button CTA', '1', '/portfolios/business-internet.html'],
    ['Promo Block with Image', '1', '/portfolios/business-internet.html'],
    ['Benefits Table', '1', '/categories/mobile-workforce-tools.html'],
    ['Product Comparison Table', '1', '/categories/mobile-workforce-tools.html'],
    ['Regional Hero', '1', '/areas/los-angeles.html'],
    ['Product Cards Grid', '1', '/areas/los-angeles.html'],
    ['Why Choose Us Grid', '1', '/areas/los-angeles.html'],
    ['Current Customer CTA', '1', '/explore/new-service.html'],
    ['Feature List Checkmarks', '1', '/explore/new-service.html'],
    ['Bundle Pricing Cards', '1', '/products/att-phone-for-business.html'],
    ['Features Collapsible List', '1', '/products/att-phone-for-business.html'],
    ['Related Product Promo', '1', '/products/att-phone-for-business.html'],
    ['International Calling Block', '1', '/products/att-phone-for-business.html'],
    ['Complete Solution Promo', '1', '/bundles.html'],
    ['Risk-Free Trial Block', '2', '/bundles.html, /offers.html'],
    ['Blog Hero Banner', '1', '/learn.html'],
    ['Featured Article Block', '1', '/learn.html'],
    ['Latest Articles Grid', '1', '/learn.html'],
    ['Blog Search & Filter', '1', '/learn.html'],
    ['Top Topics Carousel', '1', '/learn.html'],
    ['Email Subscription Form', '1', '/learn.html'],
    ['Support Quick Actions Grid', '1', '/support.html'],
    ['Support Tabs Accordion', '1', '/support.html'],
    ['Support Portal Cards', '1', '/support.html'],
    ['Resource Cards (Blue)', '1', '/support.html'],
    ['Guided Courses Block', '1', '/support.html'],
    ['Sticky Anchor Navigation', '1', '/offers.html'],
    ['Featured Offers Cards', '1', '/offers.html'],
    ['Full-width Promo Banner', '1', '/offers.html'],
    ['Device Offers Carousel', '1', '/offers.html'],
    ['Wireless Plan Offers Carousel', '1', '/offers.html'],
    ['Accessories Offers Carousel', '1', '/offers.html'],
    ['Internet Offers Carousel', '1', '/offers.html'],
    ['Bundles Offers Carousel', '1', '/offers.html'],
    ['Referral Program Block', '1', '/offers.html'],
    ['Collapsible SEO Content', '3', '/offers.html, /bundles.html, /products/att-phone-for-business.html'],
    ['Error Page Hero', '1', '/404.html'],
    ['Search Block', '1', '/404.html'],
    ['Helpful Links Cards', '1', '/404.html'],
    ['Award Recognition Block', '1', '/portfolios/cybersecurity.html'],
    ['Case Study Stats Block', '1', '/portfolios/cybersecurity.html'],
    ['Video Content Cards', '1', '/portfolios/cybersecurity.html'],
    ['Horizontal Jump Links', '1', '/support/contact.html'],
    ['Support Quick Actions Row', '1', '/support/contact.html'],
    ['Contact Tables', '1', '/support/contact.html'],
    ['Video Embed Block', '1', '/portfolios/5G-for-business.html'],
    ['Data-driven Insights Cards', '1', '/portfolios/5G-for-business.html'],
    ['Looking for More Links', '1', '/portfolios/5G-for-business.html']
  ];
  reuseData.forEach(row => {
    const dataRow = ws4.addRow(row);
    dataRow.getCell(3).alignment = { wrapText: true };
  });

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

  // Sheet 8: Effort Estimates
  const ws8 = workbook.addWorksheet('Effort Estimates');
  ws8.columns = [{ width: 30 }, { width: 15 }, { width: 18 }, { width: 45 }];
  ws8.addRow(['Component', 'Est. Days', 'Team Size', 'Notes']);
  ws8.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws8.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const effortData = [
    ['', '', '', ''],
    ['PHASE 1: FOUNDATION', '', '', ''],
    ['Project Setup & Boilerplate', '2-3', '1 Dev', 'AEM EDS repo, CI/CD, staging environment'],
    ['Design Token Extraction', '3-5', '1 Dev', 'Colors, typography, spacing from AT&T brand'],
    ['Global Header Block', '5-8', '1 Dev', 'Responsive nav, mega menu, search, mobile'],
    ['Global Footer Block', '3-5', '1 Dev', 'Multi-column layout, social links, legal'],
    ['Phase 1 Subtotal', '13-21', '', ''],
    ['', '', '', ''],
    ['PHASE 2: CORE BLOCKS', '', '', ''],
    ['Hero Blocks (6+ Variants)', '8-12', '1-2 Dev', 'Product, Portfolio, Industry, Video heroes'],
    ['Pricing Cards Carousel', '5-7', '1 Dev', 'Swiper/carousel, plan comparison layout'],
    ['Offer Cards Carousel', '4-6', '1 Dev', 'Device deals, promotion cards'],
    ['Feature Cards Grid', '3-5', '1 Dev', 'Icon + text feature blocks'],
    ['FAQ Accordion Block', '3-4', '1 Dev', 'Expandable sections, accessibility'],
    ['Lead Form (RAI)', '5-8', '1 Dev', 'Form validation, CRM integration'],
    ['Guarantee Checklist', '2-3', '1 Dev', 'Checkmark list with styling'],
    ['CTA Banner Blocks', '2-4', '1 Dev', 'Multiple color/layout variations'],
    ['Phase 2 Subtotal', '32-49', '', ''],
    ['', '', '', ''],
    ['PHASE 3: PAGE TEMPLATES', '', '', ''],
    ['Homepage Template', '5-7', '1 Dev', 'Complex multi-block layout'],
    ['Product Page Template', '4-6', '1 Dev', 'Pricing, features, FAQ sections'],
    ['Portfolio Page Template', '4-6', '1 Dev', 'Overview, product cards, CTAs'],
    ['Industry Page Template', '4-5', '1 Dev', 'Anchor nav, solution cards'],
    ['Customer Story Template', '3-4', '1 Dev', 'Video hero, stats, about section'],
    ['Support Page Template', '3-4', '1 Dev', 'Quick actions, accordions'],
    ['Phase 3 Subtotal', '23-32', '', ''],
    ['', '', '', ''],
    ['PHASE 4: CONTENT MIGRATION', '', '', ''],
    ['Import Script Development', '5-8', '1 Dev', 'Automated content extraction'],
    ['Product Pages Import', '4-6', '1 Dev', '~150 product pages'],
    ['Content/Articles Import', '5-8', '1 Dev', '~300 content pages'],
    ['Customer Stories Import', '3-5', '1 Dev', '~112 story pages'],
    ['Remaining Pages Import', '4-6', '1 Dev', '~175 misc pages'],
    ['Phase 4 Subtotal', '21-33', '', ''],
    ['', '', '', ''],
    ['PHASE 5: QA & LAUNCH', '', '', ''],
    ['Visual Regression Testing', '5-8', '1 QA', 'Cross-browser, responsive'],
    ['Performance Optimization', '3-5', '1 Dev', 'Core Web Vitals, LCP, CLS'],
    ['SEO Validation', '2-3', '1 Dev', 'Redirects, meta, structured data'],
    ['Accessibility Audit', '3-5', '1 Dev', 'WCAG compliance'],
    ['UAT & Bug Fixes', '5-8', '1 Dev + QA', 'Stakeholder review'],
    ['Go-Live & Monitoring', '2-3', '1 Dev', 'DNS, CDN, monitoring'],
    ['Phase 5 Subtotal', '20-32', '', ''],
    ['', '', '', ''],
    ['TOTAL ESTIMATE', '109-167 days', '', 'Range accounts for complexity and unknowns']
  ];
  effortData.forEach(row => {
    const dataRow = ws8.addRow(row);
    if (row[0].includes('PHASE') || row[0].includes('Subtotal') || row[0].includes('TOTAL')) {
      dataRow.font = { bold: true };
      if (row[0].includes('PHASE')) {
        dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8E8' } };
      }
    }
    dataRow.getCell(4).alignment = { wrapText: true };
  });

  // Sheet 9: Team Composition
  const ws9 = workbook.addWorksheet('Team Composition');
  ws9.columns = [{ width: 22 }, { width: 15 }, { width: 40 }, { width: 35 }, { width: 20 }];
  ws9.addRow(['Role', 'Headcount', 'Responsibilities', 'Required Skills', 'Allocation']);
  ws9.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws9.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const teamData = [
    ['', '', '', '', ''],
    ['CORE TEAM', '', '', '', ''],
    ['Tech Lead / Architect', '1', 'Architecture decisions, code reviews, technical guidance', 'AEM EDS expert, 5+ years web dev, system design', '100%'],
    ['Senior EDS Developer', '2', 'Block development, JavaScript decoration, complex components', 'AEM EDS, JavaScript, CSS, responsive design', '100%'],
    ['Mid-Level Developer', '1-2', 'Block implementation, content migration scripts, bug fixes', 'HTML, CSS, JavaScript, Git, 2+ years experience', '100%'],
    ['QA Engineer', '1', 'Test planning, visual regression, cross-browser testing', 'Test automation, Playwright/Cypress, WCAG', '100%'],
    ['', '', '', '', ''],
    ['EXTENDED TEAM', '', '', '', ''],
    ['UX/UI Designer', '1', 'Design token extraction, visual QA, style guide', 'Figma, CSS, design systems, AT&T brand', '50%'],
    ['Content Strategist', '1', 'Content audit, migration mapping, URL strategy', 'Content management, SEO, info architecture', '50%'],
    ['DevOps Engineer', '0.5', 'CI/CD pipeline, staging environments, CDN config', 'GitHub Actions, CloudFlare/Fastly, monitoring', '25%'],
    ['Project Manager', '1', 'Sprint planning, stakeholder reporting, coordination', 'Agile/Scrum, JIRA, technical PM experience', '100%'],
    ['', '', '', '', ''],
    ['CLIENT-SIDE RESOURCES', '', '', '', ''],
    ['Product Owner', '1', 'Requirements validation, acceptance criteria, decisions', 'Domain expertise, decision authority', '25%'],
    ['Content Authors', '2-3', 'Content review, UAT testing, migration validation', 'CMS experience, content ownership', '25%'],
    ['Brand/Legal Review', '1', 'Brand compliance, legal disclaimer review', 'AT&T brand guidelines, legal requirements', '10%'],
    ['', '', '', '', ''],
    ['TOTAL CORE TEAM', '5-6 FTE', '', '', ''],
    ['TOTAL EXTENDED', '4 FTE', '', '', ''],
    ['PEAK TEAM SIZE', '7-9', 'During Phases 2-3 and Phase 5', '', '']
  ];
  teamData.forEach(row => {
    const dataRow = ws9.addRow(row);
    dataRow.getCell(3).alignment = { wrapText: true };
    dataRow.getCell(4).alignment = { wrapText: true };
    if (row[0].includes('CORE TEAM') || row[0].includes('EXTENDED') || row[0].includes('CLIENT-SIDE') || row[0].includes('TOTAL') || row[0].includes('PEAK')) {
      dataRow.font = { bold: true };
      if (row[0].includes('TOTAL') || row[0].includes('PEAK')) {
        dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8E8' } };
      }
    }
  });

  // Sheet 10: Resource Allocation by Phase
  const ws10 = workbook.addWorksheet('Resource Allocation');
  ws10.columns = [{ width: 12 }, { width: 12 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 8 }, { width: 8 }, { width: 10 }, { width: 8 }, { width: 15 }];
  ws10.addRow(['Phase', 'Duration', 'Tech Lead', 'Sr Dev', 'Mid Dev', 'QA', 'UX', 'Content', 'PM', 'Total FTE']);
  ws10.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws10.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const allocationData = [
    ['Phase 1', '2-3 weeks', '1.0', '1.0', '0.5', '0.25', '1.0', '0.5', '1.0', '5.25'],
    ['Phase 2', '4-6 weeks', '1.0', '2.0', '1.0', '0.5', '0.5', '0.25', '1.0', '6.25'],
    ['Phase 3', '3-4 weeks', '0.5', '1.5', '1.5', '0.5', '0.25', '0.25', '1.0', '5.5'],
    ['Phase 4', '4-6 weeks', '0.5', '1.0', '1.5', '0.5', '0', '1.0', '1.0', '5.5'],
    ['Phase 5', '3-4 weeks', '1.0', '1.0', '1.0', '1.0', '0.5', '0.5', '1.0', '6.0'],
    ['', '', '', '', '', '', '', '', '', ''],
    ['AVERAGE', '16-23 wks', '0.8', '1.3', '1.1', '0.55', '0.45', '0.5', '1.0', '5.7']
  ];
  allocationData.forEach(row => {
    const dataRow = ws10.addRow(row);
    if (row[0] === 'AVERAGE') {
      dataRow.font = { bold: true };
      dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8E8' } };
    }
  });

  // Sheet 11: Cost Estimation
  const ws11 = workbook.addWorksheet('Cost Estimation');
  ws11.columns = [{ width: 30 }, { width: 15 }, { width: 15 }, { width: 15 }, { width: 35 }];
  ws11.addRow(['Cost Category', 'Low Estimate', 'High Estimate', 'Basis', 'Notes']);
  ws11.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws11.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const costData = [
    ['', '', '', '', ''],
    ['LABOR COSTS (Rate Assumptions)', '', '', '', ''],
    ['Tech Lead ($175/hr)', '$69,650', '$106,400', '398-608 hrs', 'Architecture, reviews, guidance'],
    ['Senior EDS Developer ($150/hr × 2)', '$208,000', '$320,000', '1387-2133 hrs', 'Complex block development'],
    ['Mid-Level Developer ($120/hr × 1.5)', '$125,280', '$192,000', '1044-1600 hrs', 'Block implementation, scripts'],
    ['QA Engineer ($110/hr)', '$38,500', '$59,400', '350-540 hrs', 'Testing, automation'],
    ['UX/UI Designer ($130/hr)', '$24,050', '$37,050', '185-285 hrs', '50% allocation'],
    ['Content Strategist ($100/hr)', '$20,000', '$30,800', '200-308 hrs', '50% allocation'],
    ['DevOps Engineer ($140/hr)', '$11,200', '$17,360', '80-124 hrs', '25% allocation'],
    ['Project Manager ($125/hr)', '$50,000', '$76,875', '400-615 hrs', 'Full-time coordination'],
    ['', '', '', '', ''],
    ['LABOR SUBTOTAL', '$546,680', '$839,885', '', 'Based on 109-167 day estimate'],
    ['', '', '', '', ''],
    ['INFRASTRUCTURE & TOOLS', '', '', '', ''],
    ['AEM EDS License', 'Included', 'Included', '', 'Typically included in AEM contract'],
    ['Staging/Preview Environments', '$1,500', '$4,000', '', 'CloudFlare/Fastly CDN'],
    ['CI/CD & DevOps Tools', '$1,000', '$2,500', '', 'GitHub Actions, monitoring'],
    ['Testing Tools', '$1,500', '$3,000', '', 'Playwright, BrowserStack, axe'],
    ['Design Tools', '$500', '$1,000', '', 'Figma team licenses'],
    ['', '', '', '', ''],
    ['INFRASTRUCTURE SUBTOTAL', '$4,500', '$10,500', '', ''],
    ['', '', '', '', ''],
    ['CONTINGENCY & RISK', '', '', '', ''],
    ['Technical Contingency (15%)', '$82,002', '$125,983', '', 'Unknown complexity, integrations'],
    ['Scope Contingency (10%)', '$54,668', '$83,989', '', 'Requirements changes'],
    ['', '', '', '', ''],
    ['CONTINGENCY SUBTOTAL', '$136,670', '$209,972', '', ''],
    ['', '', '', '', ''],
    ['GRAND TOTAL', '$687,850', '$1,060,357', '', 'Full project estimate'],
    ['', '', '', '', ''],
    ['COST PER PAGE (749 pages)', '$918', '$1,416', '', 'All-in cost per page migrated']
  ];
  costData.forEach(row => {
    const dataRow = ws11.addRow(row);
    dataRow.getCell(5).alignment = { wrapText: true };
    if (row[0].includes('LABOR COSTS') || row[0].includes('INFRASTRUCTURE &') || row[0].includes('CONTINGENCY &')) {
      dataRow.font = { bold: true };
      dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8E8' } };
    }
    if (row[0].includes('SUBTOTAL') || row[0].includes('GRAND TOTAL') || row[0].includes('COST PER PAGE')) {
      dataRow.font = { bold: true };
    }
    if (row[0].includes('GRAND TOTAL')) {
      dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };
      dataRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    }
  });

  // Sheet 12: Timeline Overview
  const ws12 = workbook.addWorksheet('Timeline Overview');
  ws12.columns = [{ width: 12 }, { width: 30 }, { width: 12 }, { width: 12 }, { width: 40 }];
  ws12.addRow(['Phase', 'Focus Area', 'Start Week', 'End Week', 'Key Milestones']);
  ws12.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws12.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const timelineData = [
    ['Phase 1', 'Foundation & Global Components', 'Week 1', 'Week 3', 'Repo setup, design tokens, header/footer blocks'],
    ['Phase 2', 'Core Blocks', 'Week 2', 'Week 7', 'Hero, Cards, Pricing, Lead Form blocks complete'],
    ['Phase 3', 'Page Templates', 'Week 6', 'Week 10', 'Homepage, Products, Portfolios live on staging'],
    ['Phase 4', 'Content Migration', 'Week 9', 'Week 15', '749 pages bulk imported and validated'],
    ['Phase 5', 'QA & Launch', 'Week 14', 'Week 18', 'UAT complete, go-live, monitoring active'],
    ['', '', '', '', ''],
    ['TOTAL', '', 'Week 1', 'Week 18', '4-5 months total duration (with parallel work)'],
    ['', '', '', '', ''],
    ['KEY DEPENDENCIES:', '', '', '', ''],
    ['', 'Phase 2 can overlap with Phase 1', '', '', 'Core blocks can start as foundation completes'],
    ['', 'Phase 4 requires Phases 1-3', '', '', 'All templates must be ready before bulk import'],
    ['', 'Phase 5 can overlap with Phase 4', '', '', 'QA begins with pilot pages during migration']
  ];
  timelineData.forEach(row => {
    const dataRow = ws12.addRow(row);
    dataRow.getCell(5).alignment = { wrapText: true };
    if (row[0] === 'TOTAL' || row[0] === 'KEY DEPENDENCIES:') {
      dataRow.font = { bold: true };
      if (row[0] === 'TOTAL') {
        dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8E8' } };
      }
    }
  });

  // Sheet 13: Assumptions & Constraints
  const ws13 = workbook.addWorksheet('Assumptions');
  ws13.columns = [{ width: 12 }, { width: 70 }];
  ws13.addRow(['Category', 'Assumption / Constraint']);
  ws13.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws13.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const assumptionsData = [
    ['', ''],
    ['SCOPE', ''],
    ['', 'Migration covers 749 pages as identified in sitemap analysis'],
    ['', 'Lead Form (RAI) integration with existing CRM/backend systems'],
    ['', 'Authentication/login flows redirect to existing AT&T portals'],
    ['', 'E-commerce/checkout flows redirect to existing shop infrastructure'],
    ['', 'No new features - visual and functional parity with current site'],
    ['', ''],
    ['TECHNICAL', ''],
    ['', 'AEM Edge Delivery Services infrastructure is available and licensed'],
    ['', 'Source content is accessible for automated extraction'],
    ['', 'No major CMS or backend changes during migration'],
    ['', 'Third-party integrations (analytics, chat) can be replicated'],
    ['', 'Mobile-responsive design patterns exist in current site'],
    ['', ''],
    ['RESOURCES', ''],
    ['', 'Dedicated team available for project duration'],
    ['', 'Client resources available for UAT and content review (25% allocation)'],
    ['', 'Product Owner available for timely decisions'],
    ['', 'No competing priorities that would reduce team allocation'],
    ['', ''],
    ['TIMELINE', ''],
    ['', 'Estimates assume no major scope changes after Phase 2'],
    ['', 'Holiday periods may extend calendar duration'],
    ['', 'Content freeze coordination with marketing team'],
    ['', 'Parallel workstreams possible with proper coordination'],
    ['', ''],
    ['BUDGET', ''],
    ['', 'Rates based on US market contractor/agency rates'],
    ['', 'Infrastructure costs assume cloud-based CDN (CloudFlare/Fastly)'],
    ['', 'No AEM license costs included (assumed existing contract)'],
    ['', '15-25% contingency recommended for unknown complexity']
  ];
  assumptionsData.forEach(row => {
    const dataRow = ws13.addRow(row);
    dataRow.getCell(2).alignment = { wrapText: true };
    if (row[0] && !row[1]) {
      dataRow.font = { bold: true };
      dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8E8' } };
    }
  });

  // Sheet 14: Risk Assessment
  const ws14 = workbook.addWorksheet('Risk Assessment');
  ws14.columns = [{ width: 30 }, { width: 12 }, { width: 12 }, { width: 45 }];
  ws14.addRow(['Risk', 'Likelihood', 'Impact', 'Mitigation']);
  ws14.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws14.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF009FDB' } };

  const riskData = [
    ['Lead Form (RAI) Integration', 'High', 'High', 'Identify CRM endpoints early, plan for API development'],
    ['Dynamic Content/Personalization', 'Medium', 'High', 'Identify personalized sections, plan for edge functions'],
    ['Third-party Scripts', 'Medium', 'Medium', 'Audit analytics, chat, tracking scripts early'],
    ['SEO Redirect Complexity', 'Medium', 'High', 'Build comprehensive redirect map, validate with SEO team'],
    ['Content Freeze Coordination', 'High', 'Medium', 'Plan migration window with content team'],
    ['Brand/Design Changes', 'Medium', 'Medium', 'Lock design tokens early, plan for updates'],
    ['Performance Targets', 'Low', 'Medium', 'EDS typically exceeds targets, monitor LCP for carousels'],
    ['Mega Menu Complexity', 'Medium', 'Medium', 'Plan for mobile/desktop menu variations early'],
    ['Form Validation Logic', 'Medium', 'Medium', 'Document current validation rules, replicate in JS'],
    ['AT&T Brand Compliance', 'Low', 'High', 'Engage brand team early, get approval checkpoints']
  ];
  riskData.forEach(row => {
    const dataRow = ws14.addRow(row);
    dataRow.getCell(4).alignment = { wrapText: true };
    if (row[1] === 'High') {
      dataRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF6B6B' } };
    } else if (row[1] === 'Medium') {
      dataRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFD93D' } };
    }
    if (row[2] === 'High') {
      dataRow.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF6B6B' } };
    } else if (row[2] === 'Medium') {
      dataRow.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFD93D' } };
    }
  });

  await workbook.xlsx.writeFile('/workspace/att-business-migration-plan.xlsx');
  console.log('Created: att-business-migration-plan.xlsx with 68 consolidated block variations and resource planning');
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
  ws1.addRow(['Block Types Documented:', '95']);
  ws1.addRow(['Block Variations (with pages):', '117']);
  ws1.addRow(['Screenshot References:', '71']);
  ws1.addRow([]);
  ws1.addRow([]);
  const disclaimerRow2 = ws1.addRow(['DISCLAIMER:']);
  disclaimerRow2.font = { bold: true, color: { argb: 'FFCC0000' } };
  ws1.addRow(['This block inventory was compiled through automated crawling and manual review of www.business.att.com.']);
  ws1.addRow(['Block variations represent patterns observed at the time of analysis and may not capture all edge cases,']);
  ws1.addRow(['dynamic content states, or pages behind authentication. Actual implementation may require additional']);
  ws1.addRow(['blocks or variations not documented here. Screenshots are point-in-time captures and page content']);
  ws1.addRow(['may have changed since collection. This document is intended for planning purposes only.']);

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
    { block: 'About Section', pageType: 'Customer Story', page: '/learn/customer-stories/portx.html', file: 'block-about-download-story.png' },
    // Business Internet Portfolio blocks (NEW)
    { block: 'Check Availability Form', pageType: 'Portfolio', page: '/portfolios/business-internet.html', file: 'block-check-availability-internet.png' },
    { block: 'Value Props Grid', pageType: 'Portfolio', page: '/portfolios/business-internet.html', file: 'block-value-props-internet.png' },
    { block: 'Products Carousel Cards', pageType: 'Portfolio', page: '/portfolios/business-internet.html', file: 'block-products-carousel-internet.png' },
    { block: 'Comparison Table', pageType: 'Portfolio', page: '/portfolios/business-internet.html', file: 'block-comparison-table-internet.png' },
    { block: 'Award Badge with Image', pageType: 'Portfolio', page: '/portfolios/business-internet.html', file: 'block-award-badge-jdpower-internet.png' },
    { block: 'Multi-Button CTA', pageType: 'Portfolio', page: '/portfolios/business-internet.html', file: 'block-cta-multi-button-internet.png' },
    { block: 'Promo Block with Image', pageType: 'Portfolio', page: '/portfolios/business-internet.html', file: 'block-promo-image-security-internet.png' },
    // Category Page blocks (NEW)
    { block: 'Benefits Table', pageType: 'Category', page: '/categories/mobile-workforce-tools.html', file: 'block-benefits-table-category.png' },
    { block: 'Product Comparison Table', pageType: 'Category', page: '/categories/mobile-workforce-tools.html', file: 'block-product-comparison-table-category.png' },
    // Areas/Regional Page blocks (NEW)
    { block: 'Regional Hero', pageType: 'Areas', page: '/areas/los-angeles.html', file: 'areas-page-full.png' },
    { block: 'Product Cards Grid', pageType: 'Areas', page: '/areas/los-angeles.html', file: 'areas-page-full.png' },
    { block: 'Why Choose Us Grid', pageType: 'Areas', page: '/areas/los-angeles.html', file: 'areas-page-full.png' },
    // Explore/Landing Page blocks (NEW)
    { block: 'Current Customer CTA', pageType: 'Explore', page: '/explore/new-service.html', file: 'explore-page-full.png' },
    { block: 'Feature List Checkmarks', pageType: 'Explore', page: '/explore/new-service.html', file: 'explore-page-full.png' },
    // 404 Page blocks (COMPREHENSIVE CRAWL)
    { block: 'Error Page Hero', pageType: '404 Page', page: '/404.html', file: '404-page-full.png' },
    { block: 'Search Block', pageType: '404 Page', page: '/404.html', file: '404-page-full.png' },
    { block: 'Helpful Links Cards', pageType: '404 Page', page: '/404.html', file: '404-page-full.png' },
    // Cybersecurity Portfolio blocks (COMPREHENSIVE CRAWL)
    { block: 'Award Recognition Block', pageType: 'Portfolio', page: '/portfolios/cybersecurity.html', file: 'cybersecurity-portfolio-full.png' },
    { block: 'Case Study Stats Block', pageType: 'Portfolio', page: '/portfolios/cybersecurity.html', file: 'cybersecurity-portfolio-full.png' },
    { block: 'Video Content Cards', pageType: 'Portfolio', page: '/portfolios/cybersecurity.html', file: 'cybersecurity-portfolio-full.png' },
    // Contact Page blocks (COMPREHENSIVE CRAWL)
    { block: 'Horizontal Jump Links', pageType: 'Contact', page: '/support/contact.html', file: 'contact-page-full.png' },
    { block: 'Support Quick Actions Row', pageType: 'Contact', page: '/support/contact.html', file: 'contact-page-full.png' },
    { block: 'Contact Tables', pageType: 'Contact', page: '/support/contact.html', file: 'contact-page-full.png' },
    // 5G Portfolio blocks (COMPREHENSIVE CRAWL)
    { block: 'Video Embed Block', pageType: 'Portfolio', page: '/portfolios/5G-for-business.html', file: '5g-portfolio-full.png' },
    { block: 'Data-driven Insights Cards', pageType: 'Portfolio', page: '/portfolios/5G-for-business.html', file: '5g-portfolio-full.png' },
    { block: 'Looking for More Links', pageType: 'Portfolio', page: '/portfolios/5G-for-business.html', file: '5g-portfolio-full.png' }
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
  console.log('Created: att-business-detailed-inventory.xlsx with 68 consolidated block variations');
}

async function main() {
  await createMigrationPlanExcel();
  await createDetailedInventoryExcel();
}

main().catch(console.error);
