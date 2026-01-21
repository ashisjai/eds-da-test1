# AT&T Business Website Migration Plan
## Migration to AEM Edge Delivery Services

---

## Executive Summary

This document outlines a comprehensive migration plan for **www.business.att.com** to AEM Edge Delivery Services. The AT&T Business website is a large enterprise B2B site with approximately **100+ pages** across multiple content types including products, portfolios, industry solutions, customer stories, and support content.

---

## Site Structure Overview

### Primary Navigation Categories
| Category | URL Pattern | Description |
|----------|-------------|-------------|
| Products | `/products/*.html` | Individual product/service pages |
| Portfolios | `/portfolios/*.html` | Solution category landing pages |
| Industries | `/industries/*.html` | Vertical market pages |
| Categories | `/categories/*.html` | Product grouping pages |
| Learn | `/learn/*.html` | Content hub (articles, stories, reports) |
| Support | `/support/*.html` | Customer support pages |
| Explore | `/explore/*.html` | Campaign/landing pages |
| About | `/about/*.html` | Company information |
| Offers | `/offers.html` | Deals and promotions |
| Bundles | `/bundles.html` | Service bundles |

---

## Page Inventory by Type

### 1. Homepage (1 page)
- **URL:** `/` (index.html)
- **Purpose:** Main entry point with promotional content, product highlights, and navigation
- **Complexity:** High (multiple carousels, hero sections, form)

### 2. Product Pages (~40+ pages)
Individual product/service detail pages with specifications and CTAs.

| Product | URL |
|---------|-----|
| Wireless Plans | `/products/wireless-plans.html` |
| AT&T Dynamic Defense | `/products/att-dynamic-defense.html` |
| Business Fiber Internet | `/products/business-fiber-internet.html` |
| Office@Hand | `/products/office-at-hand.html` |
| IP Toll-Free | `/products/ip-toll-free.html` |
| SIP Trunking | `/products/sip-trunking.html` |
| Cloud Voice for Microsoft Teams | `/products/att-cloud-voice-for-microsoft-teams.html` |
| Mobile 5G | `/products/mobile-5g.html` |
| AT&T Private Cellular Networks | `/products/att-private-cellular-networks.html` |
| Colocation | `/products/colocation.html` |
| CDN | `/products/cdn.html` |
| NetBond | `/products/netbond.html` |
| AT&T Managed Cloud Connect | `/products/att-managed-cloud-connect.html` |
| Cloud Connections On-Demand | `/products/cloud-connections-on-demand.html` |
| AT&T Cell Booster Pro | `/products/att-cell-booster-pro.html` |
| Enhanced Push-to-Talk | `/products/enhanced-push-to-talk.html` |
| AT&T International Day Pass | `/products/att-international-day-pass-for-business.html` |
| Business Passport | `/products/att-business-passport.html` |
| AT&T Phone for Business | `/products/att-phone-for-business.html` |
| Wireless Internet | `/products/wireless-internet.html` |
| AT&T Smart Label | `/products/att-smart-label.html` |
| PowerFleet GPS Tracker | `/products/powerfleet.html` |
| AT&T ActiveArmor | `/products/att-activearmor.html` |
| BYOD | `/products/bring-your-own-device-byod.html` |
| Device Management Program | `/products/device-management-program.html` |
| Business Trade-in | `/products/business-device-trade-in.html` |
| Business Protect | `/products/business-protect.html` |
| Protect Advantage for Business | `/products/protect-advantage-for-business.html` |
| ... and more | |

### 3. Portfolio Pages (~10 pages)
Solution category landing pages grouping related products.

| Portfolio | URL |
|-----------|-----|
| Mobility/Wireless | `/portfolios/mobility.html` |
| Business Internet | `/portfolios/business-internet.html` |
| 5G for Business | `/portfolios/5G-for-business.html` |
| Cybersecurity | `/portfolios/cybersecurity.html` |
| Internet of Things | `/portfolios/internet-of-things.html` |
| Voice & Collaboration | `/portfolios/collaboration.html` |
| Cloud | `/portfolios/cloud.html` |
| Networking | `/portfolios/networking.html` |
| Consulting Services | `/portfolios/att-consulting-and-professional-services.html` |

### 4. Industry Pages (~12 pages)
Vertical market solutions.

| Industry | URL |
|----------|-----|
| Healthcare | `/industries/healthcare.html` |
| Financial Services | `/industries/finance.html` |
| Hospitality | `/industries/hospitality.html` |
| Manufacturing | `/industries/manufacturing.html` |
| Retail | `/industries/retail.html` |
| Transportation | `/industries/transportation.html` |
| Public Sector | `/industries/public-sector.html` |
| Wholesale | `/industries/wholesale.html` |
| Small Business | `/industries/smallbusiness.html` |
| Partner Solutions | `/industries/partner-solutions.html` |
| AT&T Global Business | `/industries/att-global-business.html` |
| Worldwide | `/industries/worldwide.html` |

### 5. Category Pages (~15+ pages)
Product grouping/filter pages.

| Category | URL |
|----------|-----|
| International Add-ons | `/categories/international-add-ons.html` |
| Mobile Workforce Tools | `/categories/mobile-workforce-tools.html` |
| Mobile Business Solutions | `/categories/mobile-business-solutions.html` |
| Mobile Remote Access | `/categories/mobile-remote-access.html` |
| Mobility Professional Services | `/categories/mobility-professional-services.html` |
| In-building Wireless | `/categories/inbuilding-wireless.html` |
| IoT Platforms | `/categories/iot-platforms.html` |
| Vehicle Solutions | `/categories/vehicle-solutions.html` |
| Asset Management | `/categories/asset-management.html` |
| IoT Professional Services | `/categories/iot-professional-services.html` |
| Smart Cities | `/categories/smart-cities.html` |
| AT&T On-Premise Edge | `/categories/att-on-premise-edge.html` |
| Next Generation 9-1-1 | `/categories/next-generation-9-1-1.html` |
| Device Management Services | `/categories/device-management-services.html` |

### 6. Learn/Content Hub (~50+ pages)
Articles, customer stories, research reports, and thought leadership.

| Content Type | URL Pattern | Estimated Count |
|--------------|-------------|-----------------|
| Customer Stories | `/learn/customer-stories/*.html` | ~25+ |
| Research Reports | `/learn/research-reports.html` | ~5 |
| Tech Advice | `/learn/tech-advice.html` | ~10+ |
| Top Voices | `/learn/top-voices.html` | ~5+ |
| Articles | `/learn/articles/*.html` | ~10+ |

### 7. Support Pages (~5 pages)
| Page | URL |
|------|-----|
| Contact | `/support/contact.html` |
| Premier Support | `/support/premier.html` |
| Business Center Support | `/support/business-center.html` |

### 8. Promotional/Landing Pages (~10+ pages)
| Page | URL |
|------|-----|
| Offers | `/offers.html` |
| Bundles | `/bundles.html` |
| Small Business | `/small-business.html` |
| 30-Day Risk Free | `/explore/30-day-risk-free.html` |
| Referral Program | `/explore/referral.html` |
| Switch Carrier | `/explore/cell-phone-switch-carrier.html` |
| Business Guarantee | `/about/business-guarantee.html` |
| Why AT&T Business | `/about/why-att-business.html` |
| Business Continuity | `/about/business-continuity.html` |

---

## Block Inventory with Variations

### Screenshot Reference Directory
All block screenshots are stored in `/workspace/block-screenshots/` with naming convention: `block-{name}-{variant}-{page}.png`

---

### 1. Navigation Blocks

#### 1.1 Quick Links Carousel
Horizontal scrollable navigation pills with icons for quick access to key sections.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Homepage** | 6 pill links with icons (Phones, BYOD, Deals, etc.) | `/` | `block-quick-links-carousel-homepage.png` |
| **Product Page** | Context-specific links related to product category | `/products/wireless-plans.html` | Same component, different links |

**Key Features:**
- Horizontally scrollable on mobile
- Each pill has icon + text label
- Links to key conversion pages

---

### 2. Hero Blocks

#### 2.1 Promo Banner Carousel
Narrow promotional banner at top of page with rotating messages.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Standard** | Single promo message with "Learn more" CTA | `/` | `block-promo-banner-carousel-homepage.png` |
| **Risk-Free** | 30-day guarantee messaging | `/products/wireless-plans.html` | Same component |

#### 2.2 Hero with Offer Cards
Large hero section with product/offer card carousel overlay.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Homepage Hero** | Blue gradient background, "Explore AT&T Business" heading, 4+ offer cards carousel | `/` | `block-hero-offer-cards-homepage.png` |

**Key Features:**
- Dark blue gradient background
- Large heading with subtext
- Card carousel with pricing, terms, CTAs
- Cards show strikethrough pricing, monthly rates

#### 2.3 Video Hero Banner
Hero section with embedded/playable video and text overlay.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Product Video Hero** | Video thumbnail with "Fast. Secure. Reliable." messaging | `/` | `block-video-hero-banner-homepage.png` |
| **Article Video Hero** | Full-width hero with video play button, company logo overlay | `/learn/customer-stories/portx.html` | `block-hero-article-video-story.png` |

#### 2.4 Product Hero with Savings Badge
Product page hero with promotional savings callout.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Savings Hero** | "More lines, bigger savings" badge, "Save $15/mo." headline | `/products/wireless-plans.html` | `block-hero-product-savings-wireless.png` |

**Key Features:**
- Green "More lines, bigger savings" badge
- Large savings headline
- Expandable terms/conditions
- "View plans" CTA button

#### 2.5 Industry Hero
Minimal hero for industry vertical pages with breadcrumb navigation.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Industry Standard** | Breadcrumb + "Solutions for [Industry]" heading + phone CTA | `/industries/healthcare.html` | `block-hero-industry-healthcare.png` |

---

### 3. Card & Carousel Blocks

#### 3.1 Pricing Cards Carousel
Plan comparison cards with pricing, features, and CTAs.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Wireless Plans** | 4 plan cards (Turbo, Premium, Advanced, Standard) with tiered pricing | `/products/wireless-plans.html` | `block-pricing-cards-carousel-wireless.png` |

**Key Features:**
- "New!" badge for featured plans
- Strikethrough original pricing
- Per-line/per-month pricing
- Feature checklist with icons
- Expandable savings callout
- "Select plan" CTA buttons
- Carousel navigation dots

#### 3.2 Product Cards Carousel
Product/service showcase cards in horizontal carousel.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Homepage Products** | Service cards (Turbo, Switch Assist, International) | `/` | `block-product-cards-carousel-homepage.png` |
| **Premium Benefits** | "Explore premium benefits" section | `/products/wireless-plans.html` | Similar layout |

#### 3.3 Industry Cards Carousel
Industry vertical solution cards.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Homepage Industries** | Cards for Healthcare, Finance, etc. with icons | `/` | `block-industry-cards-carousel-homepage.png` |

#### 3.4 Offer Cards (Deals)
Promotional offer cards with pricing and terms.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Deal Cards** | "All customers" / "New customers" badges, savings headline, terms | `/products/wireless-plans.html` | Part of page |

#### 3.5 Solution Link Cards
Cards with icons linking to solution categories.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Industry Solutions** | Icon + title + description cards for Mobility, Cybersecurity, etc. | `/industries/healthcare.html` | `block-solution-cards-industry.png` |

#### 3.6 Story Cards with Overlay
Customer story cards with image background and text overlay.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Industry Stories** | Image background, logo, story title overlay | `/industries/healthcare.html` | `block-story-cards-overlay-industry.png` |

#### 3.7 Insights/Resource Cards
Resource and article cards.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Industry Insights** | "Insights & resources" cards with thumbnails | `/industries/healthcare.html` | `block-insights-cards-industry.png` |

---

### 4. Feature Blocks

#### 4.1 Feature Cards Grid
Multi-column feature highlight cards.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **4-Column Homepage** | "Why work with AT&T" - 4 cards with icons and descriptions | `/` | `block-feature-cards-grid-homepage.png` |
| **4-Column Product** | "All AT&T Business wireless plans include" features | `/products/wireless-plans.html` | `block-features-grid-wireless.png` |

**Key Features:**
- 2-4 column responsive grid
- Icon or image per card
- Heading + description text
- Optional footnote/disclaimer

#### 4.2 Guarantee Checklist Block
AT&T Guarantee messaging with checkmark list.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Homepage Guarantee** | "AT&T Guarantee" heading, 3 checkmark items, disclaimer | `/` | `block-guarantee-checklist-homepage.png` |
| **Product Guarantee** | "Deals you want backed by AT&T Guarantee" variant | `/products/wireless-plans.html` | Similar layout |

---

### 5. Content Blocks

#### 5.1 Image + Text Split
Side-by-side image and text content.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Industry Split** | Image left, text + CTA right | `/industries/healthcare.html` | `block-image-text-split-industry.png` |

#### 5.2 Highlights/Stats Block
Key statistics or highlights display.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Customer Story Stats** | 3-column Challenge/Results/Solution with numbers | `/learn/customer-stories/portx.html` | `block-highlights-stats-story.png` |

**Key Features:**
- Large stat numbers (e.g., "$50B+", "100+")
- Category labels
- Supporting description text

#### 5.3 About Section with Download
Company/product information with downloadable resource.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Customer Story About** | Company logo, description, "Download PDF" link | `/learn/customer-stories/portx.html` | `block-about-download-story.png` |

#### 5.4 Anchor Navigation Pills
In-page jump link navigation.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Industry Nav** | Horizontal pills for page sections | `/industries/healthcare.html` | `block-anchor-nav-industry.png` |

#### 5.5 FAQ Accordion
Expandable FAQ sections.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Product FAQ** | "Frequently asked questions" with expand/collapse | `/products/wireless-plans.html` | `block-faq-accordion-wireless.png` |

**Key Features:**
- "Expand all" button
- Clickable question headers
- Animated expand/collapse
- "View more" link for additional FAQs

#### 5.6 Link List Block
Multi-column categorized link lists.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Homepage Links** | "Looking for more?" 4-column link categories | `/` | `block-link-list-homepage.png` |

---

### 6. Form Blocks

#### 6.1 Lead Form (RAI - Request a Call)
Lead generation form with validation.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Homepage Form** | "Talk to an AT&T Business expert" with 6 fields | `/` | `block-lead-form-rai-homepage.png` |
| **Industry Form** | Similar form with industry-specific context | `/industries/healthcare.html` | `block-lead-form-industry.png` |

**Fields:**
- First name (required)
- Last name (required)
- Email address (required)
- Phone (required)
- Company name (required)
- Add comment (optional)
- Newsletter opt-in checkbox

---

### 7. CTA & Contact Blocks

#### 7.1 Contact CTA Banner
Full-width call-to-action banner with phone number.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Industry CTA** | Blue background, "Connect with an AT&T rep" heading, phone number | `/industries/healthcare.html` | `block-contact-cta-industry.png` |

#### 7.2 Support Contact Block
Multi-column contact information with phone numbers.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **Product Support** | 3-column: Wireless support, Internet support, Video library | `/products/wireless-plans.html` | `block-support-contact-wireless.png` |

**Key Features:**
- Business hours display
- Click-to-call phone links
- Support category headings

---

### 8. Trust & Social Proof Blocks

#### 8.1 Award Badge
Industry award displays.

| Variation | Description | Example Page | Screenshot |
|-----------|-------------|--------------|------------|
| **J.D. Power Badge** | "#1 in Customer Satisfaction" with link to award info | `/products/wireless-plans.html` | `block-award-badge-wireless.png` |

---

### Block Priority Summary

| Priority | Block Type | Count | Notes |
|----------|------------|-------|-------|
| **Critical** | Hero, Pricing Cards, Lead Form, Header/Footer | 6 | Must have for launch |
| **High** | Card Carousels, Feature Grids, FAQ, Link Lists | 10 | Core content blocks |
| **Medium** | Stats, Image+Text, Anchor Nav, Award Badges | 8 | Supporting content |
| **Low** | Promo Banners, Disclaimers | 4 | Nice to have |

---

### Screenshot Inventory

| Screenshot File | Block Type | Source Page |
|-----------------|------------|-------------|
| `block-quick-links-carousel-homepage.png` | Quick Links | Homepage |
| `block-promo-banner-carousel-homepage.png` | Promo Banner | Homepage |
| `block-hero-offer-cards-homepage.png` | Hero with Cards | Homepage |
| `block-video-hero-banner-homepage.png` | Video Hero | Homepage |
| `block-feature-cards-grid-homepage.png` | Feature Grid | Homepage |
| `block-product-cards-carousel-homepage.png` | Product Cards | Homepage |
| `block-industry-cards-carousel-homepage.png` | Industry Cards | Homepage |
| `block-guarantee-checklist-homepage.png` | Guarantee Block | Homepage |
| `block-lead-form-rai-homepage.png` | Lead Form | Homepage |
| `block-link-list-homepage.png` | Link List | Homepage |
| `block-hero-product-savings-wireless.png` | Product Hero | Wireless Plans |
| `block-pricing-cards-carousel-wireless.png` | Pricing Cards | Wireless Plans |
| `block-features-grid-wireless.png` | Features Grid | Wireless Plans |
| `block-faq-accordion-wireless.png` | FAQ Accordion | Wireless Plans |
| `block-award-badge-wireless.png` | Award Badge | Wireless Plans |
| `block-support-contact-wireless.png` | Support Contact | Wireless Plans |
| `block-hero-industry-healthcare.png` | Industry Hero | Healthcare |
| `block-anchor-nav-industry.png` | Anchor Nav | Healthcare |
| `block-solution-cards-industry.png` | Solution Cards | Healthcare |
| `block-image-text-split-industry.png` | Image+Text | Healthcare |
| `block-story-cards-overlay-industry.png` | Story Cards | Healthcare |
| `block-insights-cards-industry.png` | Insights Cards | Healthcare |
| `block-contact-cta-industry.png` | Contact CTA | Healthcare |
| `block-lead-form-industry.png` | Lead Form | Healthcare |
| `block-hero-article-video-story.png` | Article Hero | Customer Story |
| `block-highlights-stats-story.png` | Stats Block | Customer Story |
| `block-about-download-story.png` | About Section | Customer Story |

---

## Migration Strategy

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Establish core infrastructure and global components

1. **Project Setup**
   - Initialize AEM Edge Delivery project
   - Configure build pipeline and deployment
   - Set up content authoring in Google Docs/SharePoint

2. **Global Components**
   - Header block with navigation
   - Footer block
   - Base CSS variables (colors, typography, spacing)
   - Design system foundation

3. **Pilot Page**
   - Migrate one simple product page as proof of concept
   - Validate block authoring workflow

### Phase 2: Core Blocks (Weeks 3-5)
**Goal:** Build reusable block library

| Week | Blocks |
|------|--------|
| Week 3 | Hero Banner, Hero Carousel, Card Carousel, Feature Cards |
| Week 4 | Pricing Cards, Offer Cards, Lead Form (RAI), Accordion/FAQ |
| Week 5 | Link List, Quote Block, Video Block, Image+Text, Tab Panel |

### Phase 3: Page Templates (Weeks 6-8)
**Goal:** Create and migrate primary page types

| Week | Page Types | Count |
|------|------------|-------|
| Week 6 | Homepage, 5 Product pages | 6 |
| Week 7 | Portfolio pages, Industry pages | 15 |
| Week 8 | Offers page, Bundles page, Category pages | 10 |

### Phase 4: Content Migration (Weeks 9-12)
**Goal:** Full content migration

| Week | Content | Count |
|------|---------|-------|
| Week 9-10 | Remaining Product pages | 30+ |
| Week 11 | Customer Stories, Articles | 30+ |
| Week 12 | Support pages, remaining content | 10+ |

### Phase 5: QA & Launch (Weeks 13-14)
**Goal:** Testing, optimization, and go-live

1. **Quality Assurance**
   - Cross-browser testing
   - Mobile responsiveness validation
   - Accessibility audit (WCAG 2.1 AA)
   - Performance optimization (Core Web Vitals)

2. **Content Validation**
   - Link checking
   - Image optimization
   - SEO metadata verification

3. **Go-Live**
   - DNS cutover
   - Redirect mapping
   - Monitoring setup

---

## Page Type Priority Matrix

| Priority | Page Type | Count | Justification |
|----------|-----------|-------|---------------|
| P1 - Critical | Homepage | 1 | Primary entry point |
| P1 - Critical | Offers | 1 | Revenue driver |
| P1 - Critical | Wireless Plans | 1 | Top converting page |
| P2 - High | Product Pages (top 10) | 10 | High traffic products |
| P2 - High | Portfolio Pages | 10 | Category navigation |
| P3 - Medium | Industry Pages | 12 | Vertical targeting |
| P3 - Medium | Remaining Products | 30+ | Full catalog |
| P4 - Lower | Customer Stories | 25+ | Supporting content |
| P4 - Lower | Articles/Learn | 20+ | SEO content |
| P5 - Lowest | Support/About | 10 | Low change frequency |

---

## Technical Recommendations

### 1. Design System
- Extract AT&T brand colors, typography, and spacing from existing site
- Create CSS custom properties for consistent theming
- Build component library with documented variants

### 2. Form Integration
- Lead form (RAI) requires backend integration
- Implement form validation matching current behavior
- Consider progressive enhancement for accessibility

### 3. Carousel/Slider Implementation
- Use touch-friendly, accessible carousel library
- Implement lazy loading for off-screen slides
- Ensure keyboard navigation support

### 4. Content Modeling
- Structure content for reusability across pages
- Use fragments for shared content (legal disclaimers, CTAs)
- Plan for multi-language support if needed

### 5. Performance Targets
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### 6. SEO Considerations
- Maintain URL structure or create redirect mapping
- Preserve meta titles, descriptions, and structured data
- Implement canonical URLs for similar pages

---

## Estimated Page Counts Summary

| Category | Estimated Pages |
|----------|-----------------|
| Homepage | 1 |
| Products | 40+ |
| Portfolios | 10 |
| Industries | 12 |
| Categories | 15+ |
| Learn/Content | 50+ |
| Support | 5 |
| Promotional | 10+ |
| **Total** | **~145+ pages** |

---

## Next Steps

1. **Stakeholder Review** - Review and approve migration plan
2. **Content Audit** - Detailed inventory of all pages and assets
3. **Design Extraction** - Document design tokens and component specs
4. **Environment Setup** - Initialize AEM Edge Delivery project
5. **Pilot Migration** - Begin with Phase 1 foundation work

---

*Generated for AT&T Business website migration to AEM Edge Delivery Services*
