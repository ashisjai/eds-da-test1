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
  ws1.addRow(['Block Variations Documented:', '95']);
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
    ['Homepage', 'https://www.firstnet.com/', 'Main entry point'],
    ['Power of FirstNet', 'https://www.firstnet.com/power-of-firstnet.html', 'Mission and history'],
    ['Coverage', 'https://www.firstnet.com/coverage.html', 'Network coverage and map'],
    ['Rate Plans', 'https://www.firstnet.com/plans.html', 'Individual and agency plans'],
    ['Devices', 'https://www.firstnet.com/devices.html', 'Phones, tablets, watches, accessories'],
    ['Device Detail', 'https://www.firstnet.com/devices/phones/*.html', 'Individual product pages'],
    ['Apps', 'https://www.firstnet.com/apps.html', 'Application ecosystem'],
    ['Industry Solutions', 'https://www.firstnet.com/industry-solutions.html', 'Industry landing page'],
    ['Industry Detail', 'https://www.firstnet.com/industry-solutions/*.html', 'Law enforcement, Fire, EMS, Healthcare'],
    ['Community', 'https://www.firstnet.com/community.html', 'News, blogs, case studies'],
    ['News', 'https://www.firstnet.com/community/news/*.html', 'News articles'],
    ['Blogs', 'https://www.firstnet.com/community/blogs/*.html', 'Blog posts'],
    ['Help', 'https://www.firstnet.com/help.html', 'Help center'],
    ['FAQ', 'https://www.firstnet.com/faq.html', 'Frequently asked questions'],
    ['Contact', 'https://www.firstnet.com/contact-us.html', 'Contact information'],
    ['Sign Up', 'https://www.firstnet.com/sign-up.html', 'Registration flow'],
    ['Eligibility', 'https://www.firstnet.com/eligibility-verification.html', 'Eligibility verification'],
    ['Mission Critical', 'https://www.firstnet.com/mission-critical.html', 'Push-to-talk solutions'],
    ['Offers', 'https://www.firstnet.com/offers/*.html', 'Current promotions'],
    ['404 Error', 'https://www.firstnet.com/404', 'Page not found']
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

  // Complete block data with full URLs - Using block-specific screenshots where available
  const blockData = [
    // Global Components
    { type: 'Header Navigation', variation: 'Global', desc: 'Logo, hamburger menu, sign up, login', page: 'https://www.firstnet.com/ (all pages)', screenshot: 'blocks/homepage-header.png' },
    { type: 'Footer', variation: 'Global', desc: 'Logo, sitemap, support links, social, legal', page: 'https://www.firstnet.com/ (all pages)', screenshot: 'blocks/homepage-footer.png' },
    { type: 'Email Subscription Form', variation: 'Global', desc: 'Blue background with email input + category dropdown', page: 'https://www.firstnet.com/ (all pages)', screenshot: 'blocks/homepage-email-subscription.png' },

    // Homepage Blocks
    { type: 'Quick Links Carousel', variation: 'Homepage', desc: '8 icon pill links horizontal carousel', page: 'https://www.firstnet.com/', screenshot: 'blocks/homepage-quick-links.png' },
    { type: 'Hero Section', variation: 'Homepage', desc: 'Mission-critical messaging with background image', page: 'https://www.firstnet.com/', screenshot: 'blocks/homepage-hero.png' },
    { type: 'Offer Cards Carousel', variation: 'Homepage', desc: '3 device/plan offer cards with images', page: 'https://www.firstnet.com/', screenshot: 'blocks/homepage-offer-cards.png' },
    { type: 'Why FirstNet Section', variation: 'Homepage', desc: '3-column value props with heading', page: 'https://www.firstnet.com/', screenshot: 'blocks/homepage-why-firstnet.png' },
    { type: 'News Cards', variation: 'Homepage', desc: '3 article preview cards with images', page: 'https://www.firstnet.com/', screenshot: 'blocks/homepage-news-cards.png' },
    { type: 'Contact CTA Banner', variation: 'Homepage', desc: 'Dark background "Connect with specialist"', page: 'https://www.firstnet.com/', screenshot: 'blocks/homepage-contact-cta.png' },

    // Plans Page Blocks
    { type: 'Page Hero', variation: 'Plans', desc: 'Breadcrumb + heading + description', page: 'https://www.firstnet.com/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Anchor Navigation', variation: 'Plans', desc: 'Horizontal jump links to sections', page: 'https://www.firstnet.com/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Individual Plan Section', variation: 'Plans', desc: 'Tabbed content with plan details', page: 'https://www.firstnet.com/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Rate Plan Features', variation: 'Plans', desc: '4-column features with icons', page: 'https://www.firstnet.com/plans.html', screenshot: 'blocks/plans-rate-features.png' },
    { type: 'Promo Banner', variation: 'Plans', desc: '$300 reward card offer banner', page: 'https://www.firstnet.com/plans.html', screenshot: 'blocks/plans-promo-banner.png' },
    { type: 'Agency Pricing Cards', variation: 'Plans', desc: 'Tabbed 3-column pricing cards', page: 'https://www.firstnet.com/plans.html', screenshot: 'blocks/plans-agency-tabs.png' },
    { type: 'International Plans Cards', variation: 'Plans', desc: '3 international plan comparison cards', page: 'https://www.firstnet.com/plans.html', screenshot: 'blocks/plans-international-cards.png' },
    { type: 'PDF Download Links', variation: 'Plans', desc: 'Arrow links to PDF documents', page: 'https://www.firstnet.com/plans.html', screenshot: 'firstnet-plans-full.png' },
    { type: 'Legal Disclaimers', variation: 'Plans', desc: 'Expandable legal text section', page: 'https://www.firstnet.com/plans.html', screenshot: 'blocks/plans-legal-disclaimers.png' },

    // Coverage Page Blocks
    { type: 'Hero with CTA', variation: 'Coverage', desc: 'Purpose-built messaging with Get started CTA', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-hero.png' },
    { type: 'Interactive Map', variation: 'Coverage', desc: 'Embedded Leaflet coverage map with layers', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-map.png' },
    { type: 'Coverage Benefits', variation: 'Coverage', desc: '3-column Band 14, 5G, Investment features', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-benefits.png' },
    { type: 'Connectivity Ecosystem', variation: 'Coverage', desc: '3 image+text cards (In-building, In-field, In-vehicle)', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-connectivity-ecosystem.png' },
    { type: 'Satellite Innovation', variation: 'Coverage', desc: 'Text block about satellite connectivity', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-satellite-innovation.png' },
    { type: 'Response Operations Group', variation: 'Coverage', desc: 'Blue background promo section', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-response-ops.png' },
    { type: 'Customer Stories Carousel', variation: 'Coverage', desc: '5 story cards with overlay text', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-customer-stories.png' },
    { type: 'Get Started Cards', variation: 'Coverage', desc: '2-column Agencies vs Individuals cards', page: 'https://www.firstnet.com/coverage.html', screenshot: 'blocks/coverage-get-started-cards.png' },

    // Devices Page Blocks
    { type: 'Hero with Offer Banner', variation: 'Devices', desc: 'Expandable offer banner + hero', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-hero.png' },
    { type: 'Compatibility Link', variation: 'Devices', desc: 'Arrow link to check device compatibility', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-compatibility-link.png' },
    { type: 'Quick Links Inline', variation: 'Devices', desc: 'Horizontal text quick links', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-quick-links.png' },
    { type: 'Catalog Overview', variation: 'Devices', desc: 'Heading + description text block', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-hero.png' },
    { type: 'Product Cards Grid', variation: 'Phones', desc: '3 phone product cards with images', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-phones-grid.png' },
    { type: 'Product Cards Grid', variation: 'Tablets', desc: '3 tablet product cards with images', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-tablets-grid.png' },
    { type: 'Product Cards Grid', variation: 'Watches', desc: '3 smartwatch product cards', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-watches-grid.png' },
    { type: 'Product Cards Grid', variation: 'Connected Devices', desc: '3 router/IoT device cards', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-connected-grid.png' },
    { type: 'Product Cards Grid', variation: 'Accessories', desc: '3 accessory product cards', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-accessories-grid.png' },
    { type: 'Product Cards Grid', variation: 'Enhancements', desc: '3 coverage enhancement device cards', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-enhancements-grid.png' },
    { type: 'FAQ Accordion', variation: 'Devices', desc: 'Expandable device FAQ questions', page: 'https://www.firstnet.com/devices.html', screenshot: 'blocks/devices-faq-accordion.png' },

    // Community Page Blocks
    { type: 'Hero Simple', variation: 'Community', desc: 'Breadcrumb + heading + eligibility CTA', page: 'https://www.firstnet.com/community.html', screenshot: 'blocks/community-hero.png' },
    { type: 'Featured Case Study', variation: 'Community', desc: 'Full-width text block with read more', page: 'https://www.firstnet.com/community.html', screenshot: 'blocks/community-featured-case-study.png' },
    { type: 'Case Studies Carousel', variation: 'Community', desc: '12 overlay cards carousel', page: 'https://www.firstnet.com/community.html', screenshot: 'blocks/community-case-studies-carousel.png' },
    { type: 'Health Wellness Promo', variation: 'Community', desc: 'Blue background resource promo', page: 'https://www.firstnet.com/community.html', screenshot: 'blocks/community-health-wellness.png' },
    { type: 'News Articles List', variation: 'Community', desc: 'Date + title + description list', page: 'https://www.firstnet.com/community.html', screenshot: 'blocks/community-news-list.png' },
    { type: 'Blogs/Videos Tabs', variation: 'Community', desc: 'Tabbed content for blogs and videos', page: 'https://www.firstnet.com/community.html', screenshot: 'blocks/community-blogs-tabs.png' },

    // Industry Solutions Page
    { type: 'Promo Banner Top', variation: 'Industry', desc: 'FirstNet and Family promotional banner', page: 'https://www.firstnet.com/industry-solutions.html', screenshot: 'blocks/industry-promo-banner.png' },
    { type: 'Industry Hero', variation: 'Industry', desc: 'Industries heading with description and eligibility CTA', page: 'https://www.firstnet.com/industry-solutions.html', screenshot: 'blocks/industry-hero.png' },
    { type: 'Industry Category Cards', variation: 'Industry', desc: '8 industry category cards in 2 rows', page: 'https://www.firstnet.com/industry-solutions.html', screenshot: 'blocks/industry-cards-row1.png' },

    // Help Page Blocks
    { type: 'Hero with Login', variation: 'Help', desc: 'Login to manage account CTA', page: 'https://www.firstnet.com/help.html', screenshot: 'blocks/help-hero.png' },
    { type: 'Popular Topics Grid', variation: 'Help', desc: '6 icon topic cards', page: 'https://www.firstnet.com/help.html', screenshot: 'blocks/help-popular-topics.png' },
    { type: 'Eligibility Accordion', variation: 'Help', desc: 'Expandable eligibility help sections', page: 'https://www.firstnet.com/help.html', screenshot: 'blocks/help-eligibility-accordion.png' },
    { type: 'Refer-A-Friend Promo', variation: 'Help', desc: 'Reward card promotional block', page: 'https://www.firstnet.com/help.html', screenshot: 'blocks/help-refer-friend.png' },
    { type: 'Device Help Accordion', variation: 'Help', desc: 'NumberSync, eSIM, FirstNet Ready tabs', page: 'https://www.firstnet.com/help.html', screenshot: 'blocks/help-device-accordion.png' },
    { type: 'Product Guides Accordion', variation: 'Help', desc: 'Cell Booster, Deployables, MegaRange guides', page: 'https://www.firstnet.com/help.html', screenshot: 'blocks/help-product-guides.png' },

    // FAQ Page Blocks
    { type: 'Help Links Cards', variation: 'FAQ', desc: '3 action cards (Login, Eligibility, Support)', page: 'https://www.firstnet.com/faq.html', screenshot: 'blocks/faq-help-cards.png' },
    { type: 'Quick Links Tabbed', variation: 'FAQ', desc: 'Tabbed support articles with image', page: 'https://www.firstnet.com/faq.html', screenshot: 'blocks/faq-quick-links-tabbed.png' },
    { type: 'FAQ Accordion', variation: 'Troubleshooting', desc: 'Expandable troubleshooting FAQs', page: 'https://www.firstnet.com/faq.html', screenshot: 'blocks/faq-troubleshooting-accordion.png' },
    { type: 'Migration CTA', variation: 'FAQ', desc: 'FirstNet and Family migration promo', page: 'https://www.firstnet.com/faq.html', screenshot: 'blocks/faq-migration-cta.png' },
    { type: 'FAQ Accordion', variation: 'Plans/Offers', desc: 'Expandable plan and offer FAQs', page: 'https://www.firstnet.com/faq.html', screenshot: 'blocks/faq-plans-accordion.png' },
    { type: 'Products Cards Row', variation: 'FAQ', desc: '4 product category cards', page: 'https://www.firstnet.com/faq.html', screenshot: 'blocks/faq-products-cards.png' },

    // Device Detail Page
    { type: 'Device Hero', variation: 'Detail', desc: 'Product image + feature bullet list', page: 'https://www.firstnet.com/devices/phones/iphone-17-pro.html', screenshot: 'firstnet-device-detail-full.png' },
    { type: 'Shop Now CTA', variation: 'Detail', desc: 'Primary shop button', page: 'https://www.firstnet.com/devices/phones/iphone-17-pro.html', screenshot: 'firstnet-device-detail-full.png' },
    { type: 'Legal Footnotes', variation: 'Detail', desc: 'Detailed product disclaimers', page: 'https://www.firstnet.com/devices/phones/iphone-17-pro.html', screenshot: 'firstnet-device-detail-full.png' },

    // Apps Page Blocks
    { type: 'App Hero Carousel', variation: 'Apps', desc: '5-slide carousel with app features and CTAs', page: 'https://www.firstnet.com/apps.html', screenshot: 'blocks/apps-hero-carousel.png' },
    { type: 'App Catalog Features', variation: 'Apps', desc: 'Image + text section about app library', page: 'https://www.firstnet.com/apps.html', screenshot: 'blocks/apps-catalog-features.png' },
    { type: 'App Uses Carousel', variation: 'Apps', desc: '6 overlay cards for app use cases', page: 'https://www.firstnet.com/apps.html', screenshot: 'blocks/apps-uses-carousel.png' },
    { type: 'Featured Apps Carousel', variation: 'Apps', desc: '9 app cards with descriptions and CTAs', page: 'https://www.firstnet.com/apps.html', screenshot: 'blocks/apps-featured-carousel.png' },
    { type: 'FirstNet Central Section', variation: 'Apps', desc: 'Image + text block about network control', page: 'https://www.firstnet.com/apps.html', screenshot: 'blocks/apps-firstnet-central.png' },
    { type: 'Developer Program Section', variation: 'Apps', desc: 'Text + CTA for app developers', page: 'https://www.firstnet.com/apps.html', screenshot: 'blocks/apps-developer-program.png' },
    { type: 'Download CTA Banner', variation: 'Apps', desc: 'Blue background with PDF download button', page: 'https://www.firstnet.com/apps.html', screenshot: 'blocks/apps-download-cta.png' },

    // Contact Page Blocks
    { type: 'Contact Hero', variation: 'Contact', desc: 'Simple heading "Reach out to our experts"', page: 'https://www.firstnet.com/contact-us.html', screenshot: 'blocks/contact-hero.png' },
    { type: 'Contact Cards Grid', variation: 'Contact', desc: '4 icon cards for contact options', page: 'https://www.firstnet.com/contact-us.html', screenshot: 'blocks/contact-cards-grid.png' },

    // Power of FirstNet Page Blocks
    { type: 'Page Hero with CTA', variation: 'Power', desc: 'Full-width hero with eligibility CTA', page: 'https://www.firstnet.com/power-of-firstnet.html', screenshot: 'blocks/power-hero.png' },
    { type: 'History Text Section', variation: 'Power', desc: 'Long-form text about FirstNet origins', page: 'https://www.firstnet.com/power-of-firstnet.html', screenshot: 'blocks/power-history-text.png' },
    { type: 'Contact Specialist CTA', variation: 'Power', desc: 'Blue button to contact specialist', page: 'https://www.firstnet.com/power-of-firstnet.html', screenshot: 'blocks/power-hero.png' },
    { type: 'Video Feature Block', variation: 'Power', desc: 'Image + text with Watch Now button', page: 'https://www.firstnet.com/power-of-firstnet.html', screenshot: 'blocks/power-video-feature.png' },
    { type: 'Story Cards Carousel', variation: 'Power', desc: '6 overlay cards with video/explore links', page: 'https://www.firstnet.com/power-of-firstnet.html', screenshot: 'blocks/power-story-cards.png' },

    // 404 Error Page Blocks
    { type: 'Error Page Content', variation: '404', desc: '"Page not found" messaging with tips', page: 'https://www.firstnet.com/404', screenshot: 'firstnet-404-full.png' },
    { type: 'Recommended Pages List', variation: '404', desc: 'List of suggested page links', page: 'https://www.firstnet.com/404', screenshot: 'firstnet-404-full.png' },

    // News Article Page Blocks
    { type: 'Article Header', variation: 'News', desc: 'Title + subtitle headline block', page: 'https://www.firstnet.com/community/news/att-10-year-investment-transform-public-safety-broadband-network.html', screenshot: 'firstnet-news-article-full.png' },
    { type: 'Article Date', variation: 'News', desc: 'Publication date display', page: 'https://www.firstnet.com/community/news/att-10-year-investment-transform-public-safety-broadband-network.html', screenshot: 'firstnet-news-article-full.png' },
    { type: 'Article Hero Image', variation: 'News', desc: 'Full-width featured image', page: 'https://www.firstnet.com/community/news/att-10-year-investment-transform-public-safety-broadband-network.html', screenshot: 'firstnet-news-article-full.png' },
    { type: 'Article Body Content', variation: 'News', desc: 'Rich text with headings, lists, links', page: 'https://www.firstnet.com/community/news/att-10-year-investment-transform-public-safety-broadband-network.html', screenshot: 'firstnet-news-article-full.png' },

    // Law Enforcement (Industry Detail) Page Blocks
    { type: 'Industry Hero Carousel', variation: 'Law Enforcement', desc: '2-slide hero with messaging', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Anchor Navigation', variation: 'Law Enforcement', desc: 'Horizontal jump links for sections', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Why FirstNet Section', variation: 'Law Enforcement', desc: '2-column text block about benefits', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Appreciation Section', variation: 'Law Enforcement', desc: 'Thank you message with video CTA', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Customer Quote Block', variation: 'Law Enforcement', desc: 'Blue banner with quote and attribution', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Features Carousel', variation: 'Law Enforcement', desc: '3-card carousel (Modernized, Ready, Secure)', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Customer Stories Carousel', variation: 'Law Enforcement', desc: '9 video/PDF story cards', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },
    { type: 'Get Started Cards', variation: 'Law Enforcement', desc: '2-column Agencies vs Individuals cards', page: 'https://www.firstnet.com/industry-solutions/law-enforcement.html', screenshot: 'firstnet-law-enforcement-full.png' },

    // Offers Page Blocks
    { type: 'Offer Hero', variation: 'FirstNet & Family', desc: 'Discount headline with plan pricing', page: 'https://www.firstnet.com/offers/firstnet-and-family.html', screenshot: 'blocks/signup-offer-card.png' },
    { type: 'Benefits Grid', variation: 'FirstNet & Family', desc: '4 icon cards showing plan benefits', page: 'https://www.firstnet.com/offers/firstnet-and-family.html', screenshot: 'blocks/signup-benefits-row.png' },
    { type: 'Legal Disclaimers Expanded', variation: 'FirstNet & Family', desc: 'Full legal terms in text blocks', page: 'https://www.firstnet.com/offers/firstnet-and-family.html', screenshot: 'blocks/plans-legal-disclaimers.png' },
    { type: 'Tabbed Plan Comparison', variation: 'FirstNet & Family', desc: 'FirstNet vs Family plan cards with tabs', page: 'https://www.firstnet.com/offers/firstnet-and-family.html', screenshot: 'blocks/plans-agency-tabs.png' },
    { type: 'Device Offer Cards', variation: 'FirstNet & Family', desc: '3 product cards with pricing/CTAs', page: 'https://www.firstnet.com/offers/firstnet-and-family.html', screenshot: 'blocks/homepage-offer-cards.png' },
    { type: 'FAQ Accordion', variation: 'FirstNet & Family', desc: 'Expandable offer FAQs', page: 'https://www.firstnet.com/offers/firstnet-and-family.html', screenshot: 'blocks/signup-faq-accordion.png' },
    { type: 'Get Started Cards', variation: 'FirstNet & Family', desc: 'New vs Existing customer cards', page: 'https://www.firstnet.com/offers/firstnet-and-family.html', screenshot: 'blocks/signup-eligibility-cards.png' },

    // Sign Up Page Blocks
    { type: 'Sign Up Hero', variation: 'Sign Up', desc: 'Hero with eligibility messaging and CTA', page: 'https://www.firstnet.com/sign-up.html', screenshot: 'blocks/signup-hero.png' },
    { type: 'Anchor Navigation', variation: 'Sign Up', desc: 'Horizontal jump links for sections', page: 'https://www.firstnet.com/sign-up.html', screenshot: 'blocks/signup-hero.png' },
    { type: 'Eligibility Cards', variation: 'Sign Up', desc: '2-column Individual vs Agency signup cards', page: 'https://www.firstnet.com/sign-up.html', screenshot: 'blocks/signup-eligibility-cards.png' },
    { type: 'Featured Offer Card', variation: 'Sign Up', desc: 'Large offer card with image', page: 'https://www.firstnet.com/sign-up.html', screenshot: 'blocks/signup-offer-card.png' },
    { type: 'Benefits Row', variation: 'Sign Up', desc: '3 value prop icons with descriptions', page: 'https://www.firstnet.com/sign-up.html', screenshot: 'blocks/signup-benefits-row.png' },
    { type: 'FAQ Accordion', variation: 'Sign Up', desc: 'Expandable sign-up related FAQs', page: 'https://www.firstnet.com/sign-up.html', screenshot: 'blocks/signup-faq-accordion.png' },

    // Mission Critical Page Blocks
    { type: 'Mission Critical Hero', variation: 'Mission Critical', desc: 'Hero with PTT solutions messaging', page: 'https://www.firstnet.com/mission-critical.html', screenshot: 'blocks/mission-hero.png' },
    { type: 'Anchor Navigation', variation: 'Mission Critical', desc: 'Solutions, Resources, Get started links', page: 'https://www.firstnet.com/mission-critical.html', screenshot: 'blocks/mission-hero.png' },
    { type: 'Solutions Product Cards', variation: 'Mission Critical', desc: '2 product cards (Fusion, Rapid Response)', page: 'https://www.firstnet.com/mission-critical.html', screenshot: 'blocks/mission-solutions-cards.png' },
    { type: 'Case Study Feature', variation: 'Mission Critical', desc: 'Image + text case study highlight', page: 'https://www.firstnet.com/mission-critical.html', screenshot: 'blocks/mission-case-study.png' },
    { type: 'Secondary Case Study', variation: 'Mission Critical', desc: 'Text-only case study block', page: 'https://www.firstnet.com/mission-critical.html', screenshot: 'blocks/mission-case-study.png' },
    { type: 'Get Started Cards', variation: 'Mission Critical', desc: '2-column Agency signup cards', page: 'https://www.firstnet.com/mission-critical.html', screenshot: 'blocks/mission-get-started-cards.png' },

    // Eligibility Verification Page Blocks
    { type: 'Eligibility Hero', variation: 'Eligibility', desc: 'Hero with verify now CTA', page: 'https://www.firstnet.com/eligibility-verification.html', screenshot: 'blocks/eligibility-hero.png' },
    { type: 'Anchor Navigation', variation: 'Eligibility', desc: 'Documents, Impacts, FAQ links', page: 'https://www.firstnet.com/eligibility-verification.html', screenshot: 'blocks/eligibility-hero.png' },
    { type: 'Document Cards', variation: 'Eligibility', desc: '2 cards for verification scenarios', page: 'https://www.firstnet.com/eligibility-verification.html', screenshot: 'blocks/eligibility-document-cards.png' },
    { type: 'Warning Note', variation: 'Eligibility', desc: 'Important notice text block', page: 'https://www.firstnet.com/eligibility-verification.html', screenshot: 'blocks/eligibility-warning-note.png' },
    { type: 'Impacts Table', variation: 'Eligibility', desc: 'Complex table with eligibility impacts', page: 'https://www.firstnet.com/eligibility-verification.html', screenshot: 'blocks/eligibility-impacts-table.png' },
    { type: 'FAQ Accordion', variation: 'Eligibility', desc: 'Verification-related FAQs', page: 'https://www.firstnet.com/eligibility-verification.html', screenshot: 'blocks/eligibility-faq-accordion.png' },
    { type: 'Need Help Section', variation: 'Eligibility', desc: 'Contact customer service CTA', page: 'https://www.firstnet.com/eligibility-verification.html', screenshot: 'blocks/eligibility-need-help.png' }
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

  // Sheet 6: Migration Phases
  const ws6 = workbook.addWorksheet('Migration Phases');
  ws6.columns = [{ width: 12 }, { width: 30 }, { width: 50 }, { width: 20 }, { width: 15 }];
  ws6.addRow(['Phase', 'Focus Area', 'Deliverables', 'Dependencies', 'Complexity']);
  ws6.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws6.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const phaseData = [
    ['Phase 1', 'Foundation & Global Components', 'Header, Footer, Email Subscription, Global Styles, Design Tokens', 'None', 'Medium'],
    ['Phase 2', 'Core Page Templates', 'Homepage, Plans, Coverage - high traffic pages', 'Phase 1', 'High'],
    ['Phase 3', 'Product Catalog', 'Devices listing, Device detail template, Product cards', 'Phase 1', 'High'],
    ['Phase 4', 'Content Pages', 'Community, News articles, Blog posts, Case studies', 'Phase 1', 'Medium'],
    ['Phase 5', 'Support Infrastructure', 'Help center, FAQ, Contact, 404 page', 'Phase 1', 'Medium'],
    ['Phase 6', 'Industry Solutions', 'Industry landing, Industry detail pages (8 verticals)', 'Phase 2', 'Medium'],
    ['Phase 7', 'Conversion Flows', 'Sign Up, Eligibility, Offers pages', 'Phase 2', 'High'],
    ['Phase 8', 'Specialty Pages', 'Apps, Mission Critical, Power of FirstNet', 'Phase 1', 'Medium'],
    ['Phase 9', 'Content Migration', 'Bulk import of 700+ pages using templates', 'Phases 1-8', 'Low'],
    ['Phase 10', 'QA & Launch', 'Visual regression, Performance testing, SEO validation, Go-live', 'Phase 9', 'Medium']
  ];
  phaseData.forEach(row => {
    const dataRow = ws6.addRow(row);
    dataRow.getCell(3).alignment = { wrapText: true };
  });

  // Sheet 7: Effort Estimates
  const ws7 = workbook.addWorksheet('Effort Estimates');
  ws7.columns = [{ width: 30 }, { width: 15 }, { width: 18 }, { width: 45 }];
  ws7.addRow(['Component', 'Est. Days', 'Team Size', 'Notes']);
  ws7.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws7.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const effortData = [
    ['', '', '', ''],
    ['PHASE 1: FOUNDATION', '', '', ''],
    ['Project Setup & Boilerplate', '2-3', '1 Dev', 'AEM EDS repo, CI/CD, staging environment'],
    ['Design Token Extraction', '3-5', '1 Dev', 'Colors, typography, spacing from FirstNet brand'],
    ['Global Header Block', '5-8', '1 Dev', 'Responsive nav, hamburger menu, dropdowns'],
    ['Global Footer Block', '3-5', '1 Dev', 'Multi-column layout, social links'],
    ['Email Subscription Block', '2-3', '1 Dev', 'Form integration, validation'],
    ['Phase 1 Subtotal', '15-24', '', ''],
    ['', '', '', ''],
    ['PHASE 2: CORE PAGES', '', '', ''],
    ['Hero Block (Multiple Variants)', '5-7', '1 Dev', '6+ hero variations across site'],
    ['Offer Cards Carousel', '4-6', '1 Dev', 'Swiper/carousel, responsive cards'],
    ['Anchor Navigation Block', '2-3', '1 Dev', 'Sticky jump links, smooth scroll'],
    ['Pricing/Plan Cards Block', '5-7', '1 Dev', 'Tabbed interface, comparison layout'],
    ['FAQ Accordion Block', '3-4', '1 Dev', 'Expandable sections, multiple styles'],
    ['CTA Banner Blocks', '2-3', '1 Dev', 'Multiple color/layout variations'],
    ['Homepage Template', '3-5', '1 Dev', 'Page assembly and testing'],
    ['Plans Page Template', '3-5', '1 Dev', 'Complex layout with tabs'],
    ['Coverage Page Template', '3-5', '1 Dev', 'Map integration considerations'],
    ['Phase 2 Subtotal', '30-45', '', ''],
    ['', '', '', ''],
    ['PHASE 3: PRODUCT CATALOG', '', '', ''],
    ['Product Card Grid Block', '4-6', '1 Dev', '6 variations (phones, tablets, etc.)'],
    ['Device Detail Hero', '3-5', '1 Dev', 'Image gallery, feature list'],
    ['Product Filters (if needed)', '5-8', '1 Dev', 'Category filtering, search'],
    ['Devices Listing Template', '2-3', '1 Dev', 'Page with multiple grids'],
    ['Device Detail Template', '2-3', '1 Dev', 'Single product page'],
    ['Phase 3 Subtotal', '16-25', '', ''],
    ['', '', '', ''],
    ['PHASE 4: CONTENT PAGES', '', '', ''],
    ['Case Study Carousel', '3-5', '1 Dev', 'Overlay cards, video links'],
    ['News/Article List Block', '2-3', '1 Dev', 'Date, title, excerpt format'],
    ['Article Body Block', '2-3', '1 Dev', 'Rich text styling'],
    ['Blogs/Videos Tabs Block', '3-4', '1 Dev', 'Tabbed content interface'],
    ['Community Template', '2-3', '1 Dev', 'Page assembly'],
    ['News Article Template', '2-3', '1 Dev', 'Article page layout'],
    ['Phase 4 Subtotal', '14-21', '', ''],
    ['', '', '', ''],
    ['PHASE 5: SUPPORT', '', '', ''],
    ['Popular Topics Grid', '2-3', '1 Dev', 'Icon cards grid'],
    ['Help Accordion Variants', '2-3', '1 Dev', 'Multiple accordion styles'],
    ['Contact Cards Grid', '2-3', '1 Dev', '4-column icon cards'],
    ['404 Error Page', '1-2', '1 Dev', 'Simple error layout'],
    ['Help Template', '2-3', '1 Dev', 'Page assembly'],
    ['FAQ Template', '2-3', '1 Dev', 'Page assembly'],
    ['Phase 5 Subtotal', '11-17', '', ''],
    ['', '', '', ''],
    ['PHASE 6: INDUSTRY SOLUTIONS', '', '', ''],
    ['Industry Category Cards', '3-4', '1 Dev', '8-card grid layout'],
    ['Industry Hero Carousel', '3-4', '1 Dev', 'Multi-slide hero'],
    ['Customer Quote Block', '2-3', '1 Dev', 'Testimonial banner'],
    ['Industry Landing Template', '2-3', '1 Dev', 'Page assembly'],
    ['Industry Detail Template', '2-3', '1 Dev', 'Vertical-specific pages'],
    ['Phase 6 Subtotal', '12-17', '', ''],
    ['', '', '', ''],
    ['PHASE 7: CONVERSION FLOWS', '', '', ''],
    ['Eligibility Cards Block', '3-4', '1 Dev', 'CTA-focused cards'],
    ['Benefits Row Block', '2-3', '1 Dev', 'Icon + text value props'],
    ['Impacts Table Block', '3-5', '1 Dev', 'Complex data table'],
    ['Sign Up Template', '2-3', '1 Dev', 'Conversion-focused layout'],
    ['Eligibility Template', '2-3', '1 Dev', 'Page assembly'],
    ['Offers Template', '2-3', '1 Dev', 'Promotional layout'],
    ['Phase 7 Subtotal', '14-21', '', ''],
    ['', '', '', ''],
    ['PHASE 8: SPECIALTY', '', '', ''],
    ['App Catalog Carousel', '3-5', '1 Dev', 'App cards with CTAs'],
    ['Solutions Product Cards', '2-3', '1 Dev', '2-column feature cards'],
    ['Video Feature Block', '2-3', '1 Dev', 'Image + video CTA'],
    ['Story Cards Carousel', '3-4', '1 Dev', 'Overlay cards carousel'],
    ['Apps Template', '2-3', '1 Dev', 'Page assembly'],
    ['Mission Critical Template', '2-3', '1 Dev', 'Page assembly'],
    ['Phase 8 Subtotal', '14-21', '', ''],
    ['', '', '', ''],
    ['PHASE 9: CONTENT MIGRATION', '', '', ''],
    ['Import Script Development', '5-8', '1 Dev', 'Automated content extraction'],
    ['Device Pages Bulk Import', '3-5', '1 Dev', '~280 device pages'],
    ['News/Blog Bulk Import', '2-4', '1 Dev', '~140 articles'],
    ['Help/Support Bulk Import', '2-3', '1 Dev', '~105 pages'],
    ['Remaining Pages Import', '3-5', '1 Dev', '~175 misc pages'],
    ['Phase 9 Subtotal', '15-25', '', ''],
    ['', '', '', ''],
    ['PHASE 10: QA & LAUNCH', '', '', ''],
    ['Visual Regression Testing', '5-8', '1 QA', 'Cross-browser, responsive'],
    ['Performance Optimization', '3-5', '1 Dev', 'Core Web Vitals, LCP, CLS'],
    ['SEO Validation', '2-3', '1 Dev', 'Redirects, meta, structured data'],
    ['Accessibility Audit', '3-5', '1 Dev', 'WCAG compliance'],
    ['UAT & Bug Fixes', '5-8', '1 Dev + QA', 'Stakeholder review'],
    ['Go-Live & Monitoring', '2-3', '1 Dev', 'DNS, CDN, monitoring'],
    ['Phase 10 Subtotal', '20-32', '', ''],
    ['', '', '', ''],
    ['TOTAL ESTIMATE', '146-248 days', '', 'Range accounts for complexity and unknowns']
  ];
  effortData.forEach(row => {
    const dataRow = ws7.addRow(row);
    if (row[0].includes('PHASE') || row[0].includes('Subtotal') || row[0].includes('TOTAL')) {
      dataRow.font = { bold: true };
      if (row[0].includes('PHASE')) {
        dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8E8' } };
      }
    }
    dataRow.getCell(4).alignment = { wrapText: true };
  });

  // Sheet 8: Block Priority Matrix
  const ws8 = workbook.addWorksheet('Block Priority');
  ws8.columns = [{ width: 25 }, { width: 12 }, { width: 12 }, { width: 12 }, { width: 40 }];
  ws8.addRow(['Block Name', 'Priority', 'Reuse', 'Complexity', 'Rationale']);
  ws8.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws8.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const priorityData = [
    ['Header Navigation', 'P0 - Critical', 'All Pages', 'High', 'Global component, blocks all pages'],
    ['Footer', 'P0 - Critical', 'All Pages', 'Medium', 'Global component, blocks all pages'],
    ['Hero Section', 'P0 - Critical', 'High', 'Medium', '6+ variations, homepage first impression'],
    ['Product Cards Grid', 'P0 - Critical', 'High', 'Medium', '6 variations, 40% of site pages'],
    ['FAQ Accordion', 'P1 - High', 'High', 'Low', '4+ pages, reusable component'],
    ['Offer Cards Carousel', 'P1 - High', 'Medium', 'Medium', 'Homepage, conversion pages'],
    ['Anchor Navigation', 'P1 - High', 'Medium', 'Low', '5+ pages with sections'],
    ['CTA Banner', 'P1 - High', 'Medium', 'Low', 'Multiple pages, simple variations'],
    ['Case Studies Carousel', 'P1 - High', 'Medium', 'Medium', 'Community, industry pages'],
    ['Email Subscription', 'P1 - High', 'All Pages', 'Medium', 'Global, form integration'],
    ['Pricing Cards', 'P2 - Medium', 'Low', 'High', 'Plans page, complex tabs'],
    ['Interactive Map', 'P2 - Medium', 'Low', 'High', 'Coverage page only, Leaflet integration'],
    ['Industry Cards', 'P2 - Medium', 'Low', 'Medium', 'Industry solutions pages'],
    ['Article Body', 'P2 - Medium', 'Medium', 'Low', 'News/blog pages'],
    ['Video Feature', 'P2 - Medium', 'Low', 'Medium', 'Power, Apps pages'],
    ['Impacts Table', 'P3 - Low', 'Low', 'High', 'Eligibility page only'],
    ['Developer Program', 'P3 - Low', 'Low', 'Low', 'Apps page only'],
    ['404 Error Content', 'P3 - Low', 'Low', 'Low', 'Single page']
  ];
  priorityData.forEach(row => {
    const dataRow = ws8.addRow(row);
    dataRow.getCell(5).alignment = { wrapText: true };
    // Color code priority
    if (row[1].includes('P0')) {
      dataRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF6B6B' } };
    } else if (row[1].includes('P1')) {
      dataRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFD93D' } };
    } else if (row[1].includes('P2')) {
      dataRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF6BCB77' } };
    }
  });

  // Sheet 9: Template Strategy
  const ws9 = workbook.addWorksheet('Template Strategy');
  ws9.columns = [{ width: 25 }, { width: 15 }, { width: 50 }, { width: 20 }];
  ws9.addRow(['Template Name', 'Page Count', 'Blocks Used', 'Import Strategy']);
  ws9.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws9.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const templateData = [
    ['Device Detail', '~280', 'Device Hero, Shop CTA, Legal Footnotes', 'Bulk import - highest volume'],
    ['News Article', '~100', 'Article Header, Date, Hero Image, Body Content', 'Bulk import from CMS'],
    ['Blog Post', '~40', 'Article Header, Date, Body Content', 'Bulk import from CMS'],
    ['Industry Detail', '~8', 'Industry Hero, Anchor Nav, Features, Stories, Get Started', 'Manual - unique content'],
    ['Help Topic', '~50', 'Hero with Login, Topic Grid, Accordions', 'Semi-automated'],
    ['FAQ Category', '~30', 'Help Cards, Quick Links, FAQ Accordions', 'Semi-automated'],
    ['Offer Landing', '~25', 'Offer Hero, Benefits, Device Cards, FAQ', 'Manual - promotional'],
    ['Core Landing', '~15', 'Hero, Feature Cards, CTAs, Email Subscription', 'Manual - high visibility'],
    ['App Detail', '~50', 'App Hero, Catalog Features, CTAs', 'Bulk import'],
    ['Case Study', '~30', 'Article layout with embedded media', 'Semi-automated'],
    ['', '', '', ''],
    ['TOTAL', '~700', '', '']
  ];
  templateData.forEach(row => {
    const dataRow = ws9.addRow(row);
    dataRow.getCell(3).alignment = { wrapText: true };
    if (row[0] === 'TOTAL') {
      dataRow.font = { bold: true };
    }
  });

  // Sheet 10: Risk Assessment
  const ws10 = workbook.addWorksheet('Risk Assessment');
  ws10.columns = [{ width: 30 }, { width: 12 }, { width: 12 }, { width: 45 }];
  ws10.addRow(['Risk', 'Likelihood', 'Impact', 'Mitigation']);
  ws10.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
  ws10.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0057B8' } };

  const riskData = [
    ['Interactive Map Complexity', 'High', 'Medium', 'Consider iframe embed or simplified static map initially'],
    ['Dynamic Content/Personalization', 'Medium', 'High', 'Identify personalized sections early, plan for edge functions'],
    ['Form Integrations', 'Medium', 'Medium', 'Document current form backends, plan API integration'],
    ['Authentication Flows', 'Low', 'High', 'Login/account pages may need custom solution'],
    ['Third-party Scripts', 'Medium', 'Medium', 'Audit current analytics, chat, tracking scripts'],
    ['SEO Redirect Complexity', 'Medium', 'High', 'Build comprehensive redirect map early'],
    ['Content Freeze Coordination', 'High', 'Medium', 'Plan migration window with content team'],
    ['Brand/Design Changes', 'Medium', 'Medium', 'Lock design tokens early, plan for updates'],
    ['Device Catalog Updates', 'High', 'Low', 'Build flexible import scripts for ongoing updates'],
    ['Performance Targets', 'Low', 'Medium', 'EDS typically exceeds targets, monitor LCP for carousels']
  ];
  riskData.forEach(row => {
    const dataRow = ws10.addRow(row);
    dataRow.getCell(4).alignment = { wrapText: true };
    // Color code likelihood
    if (row[1] === 'High') {
      dataRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF6B6B' } };
    } else if (row[1] === 'Medium') {
      dataRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFD93D' } };
    }
    // Color code impact
    if (row[2] === 'High') {
      dataRow.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF6B6B' } };
    } else if (row[2] === 'Medium') {
      dataRow.getCell(3).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFD93D' } };
    }
  });

  await workbook.xlsx.writeFile('/workspace/firstnet-migration-plan.xlsx');
  console.log('Created: firstnet-migration-plan.xlsx with 96 block variations, migration phases, and effort estimates');
}

createFirstNetInventoryExcel().catch(console.error);
