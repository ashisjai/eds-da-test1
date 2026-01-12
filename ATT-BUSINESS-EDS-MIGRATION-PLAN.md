# AT&T Business Website Migration to AEM Edge Delivery Services (EDS) with Universal Editor

## Executive Summary

This document outlines a comprehensive plan for migrating the AT&T Business website (https://www.business.att.com/) to Adobe Experience Manager Edge Delivery Services (EDS) with Universal Editor (UE) support. The migration involves analyzing the existing site structure, identifying reusable components, and creating a phased implementation approach.

---

## 1. Site Analysis

### 1.1 Site Structure Overview

The AT&T Business website is organized into the following primary sections:

| Section | URL Pattern | Description |
|---------|-------------|-------------|
| Homepage | `/` | Main landing page with hero, product highlights, deals |
| Portfolios | `/portfolios/*.html` | Product category pages (mobility, internet, cloud, etc.) |
| Products | `/products/*.html` | Individual product detail pages |
| Industries | `/industries/*.html` | Vertical-specific solution pages |
| Small Business | `/small-business.html` | SMB-focused landing page |
| Customer Stories | `/learn/customer-stories.html` | Case studies and testimonials |
| Blog/Learn | `/learn/*.html` | Articles, insights, research |
| Support | `/support.html` | Help and support resources |
| Offers | `/offers.html` | Current deals and promotions |

### 1.2 Page Types Identified

1. **Homepage** - Complex layout with multiple sections, carousels, and CTAs
2. **Portfolio Pages** - Category-level product listings with feature grids
3. **Product Detail Pages** - Individual product info, pricing, features, FAQs
4. **Industry Pages** - Vertical-focused content with solutions and case studies
5. **Landing Pages** - Campaign/segment specific (small business, etc.)
6. **Article/Blog Pages** - Content-focused with related articles
7. **Listing Pages** - Customer stories, offers with filtering
8. **Support Pages** - Help documentation and resources

---

## 2. Component/Block Inventory

### 2.1 Global Components

| Component | Description | Priority |
|-----------|-------------|----------|
| **Header/Navigation** | Top nav with search, mega menu, Personal/Business toggle | P0 |
| **Footer** | Multi-column footer with social links, legal links | P0 |
| **Cookie Banner** | GDPR/privacy consent banner | P0 |
| **Breadcrumb** | Navigation breadcrumbs on inner pages | P1 |

### 2.2 Hero Blocks

| Block Name | Variants | Description |
|------------|----------|-------------|
| **hero** | `default`, `video`, `split` | Main hero banner with heading, text, CTAs |
| **hero-tabbed** | - | Hero with tabbed content sections (Homepage products) |
| **hero-promo** | - | Promotional banner with offer details |
| **hero-industry** | - | Industry page hero with anchor navigation |

### 2.3 Content Blocks

| Block Name | Variants | Description |
|------------|----------|-------------|
| **cards** | `default`, `icon`, `image`, `pricing` | Multi-card layouts |
| **carousel** | `cards`, `products`, `testimonials`, `deals` | Sliding content carousels |
| **columns** | `2-col`, `3-col`, `4-col` | Multi-column layouts |
| **tabs** | `horizontal`, `vertical` | Tabbed content containers |
| **accordion** | `faq`, `features` | Collapsible content sections |
| **feature-grid** | - | Grid of features with icons |
| **pricing-table** | `comparison`, `plans` | Product pricing comparisons |
| **stats** | - | Statistics/metrics display |
| **quote** | `testimonial`, `award` | Customer quotes and accolades |

### 2.4 Media Blocks

| Block Name | Variants | Description |
|------------|----------|-------------|
| **video** | `inline`, `modal`, `background` | Video embed and players |
| **image** | `full-width`, `captioned` | Image display |
| **image-text** | `left`, `right` | Image with adjacent text |
| **gallery** | - | Image gallery/lightbox |

### 2.5 Interactive Blocks

| Block Name | Variants | Description |
|------------|----------|-------------|
| **form** | `contact`, `rai`, `newsletter` | Lead generation forms |
| **cta-banner** | `primary`, `secondary` | Call-to-action banners |
| **product-selector** | - | Interactive product selection |
| **search** | - | Site search functionality |
| **filter** | - | Content filtering (customer stories) |

### 2.6 Navigation Blocks

| Block Name | Variants | Description |
|------------|----------|-------------|
| **anchor-nav** | - | In-page anchor navigation |
| **link-list** | `horizontal`, `vertical` | Lists of related links |
| **pagination** | - | Page navigation for listings |

### 2.7 Promotional Blocks

| Block Name | Variants | Description |
|------------|----------|-------------|
| **promo-banner** | `sticky`, `inline` | Promotional announcements |
| **deal-card** | - | Special offer cards with pricing |
| **badge** | `new`, `sale`, `featured` | Content badges/labels |

---

## 3. Design System Analysis

### 3.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#0057B8` | AT&T Blue - Primary brand color |
| `--color-secondary` | `#009FDB` | Light Blue - Secondary accent |
| `--color-accent` | `#FF7200` | Orange - CTAs and highlights |
| `--color-dark` | `#1A1A1A` | Dark backgrounds |
| `--color-gray-900` | `#333333` | Text primary |
| `--color-gray-600` | `#666666` | Text secondary |
| `--color-gray-300` | `#CCCCCC` | Borders |
| `--color-gray-100` | `#F5F5F5` | Light backgrounds |
| `--color-white` | `#FFFFFF` | White |
| `--color-success` | `#00A651` | Success states |
| `--color-error` | `#D32F2F` | Error states |

### 3.2 Typography

| Token | Value | Usage |
|-------|-------|-------|
| `--font-family-primary` | `ATT Aleck Sans, Helvetica, Arial, sans-serif` | Primary font |
| `--font-family-secondary` | `ATT Aleck Slab, Georgia, serif` | Headings accent |
| `--font-size-xxl` | `48px` | Hero headings |
| `--font-size-xl` | `36px` | Section headings |
| `--font-size-lg` | `24px` | Subheadings |
| `--font-size-md` | `18px` | Lead text |
| `--font-size-base` | `16px` | Body text |
| `--font-size-sm` | `14px` | Small text |
| `--font-size-xs` | `12px` | Legal/fine print |

### 3.3 Spacing Scale

| Token | Value |
|-------|-------|
| `--spacing-xs` | `4px` |
| `--spacing-sm` | `8px` |
| `--spacing-md` | `16px` |
| `--spacing-lg` | `24px` |
| `--spacing-xl` | `32px` |
| `--spacing-xxl` | `48px` |
| `--spacing-section` | `64px` |

### 3.4 Breakpoints

| Token | Value | Description |
|-------|-------|-------------|
| `--breakpoint-mobile` | `375px` | Mobile devices |
| `--breakpoint-tablet` | `768px` | Tablet devices |
| `--breakpoint-desktop` | `1024px` | Desktop |
| `--breakpoint-wide` | `1280px` | Wide desktop |
| `--breakpoint-max` | `1440px` | Max content width |

---

## 4. Page Templates

### 4.1 Template Structure

```
Template Hierarchy:
├── base-template (common header/footer)
│   ├── homepage-template
│   ├── portfolio-template
│   ├── product-template
│   ├── industry-template
│   ├── landing-template
│   ├── article-template
│   ├── listing-template
│   └── support-template
```

### 4.2 Template Details

#### Homepage Template
- Hero section (tabbed product selector)
- Featured products carousel
- Value proposition cards
- Awards/recognition section
- Customer stories carousel
- Lead generation form
- Related links section

#### Portfolio Template
- Hero with category intro
- Product cards carousel
- Services grid (icon + text)
- Guarantee banner
- Industry recognition
- Contact form

#### Product Template
- Product hero with CTA
- Feature highlights
- Pricing/plans comparison table
- How it works section
- Case study highlight
- Benefits carousel
- FAQ accordion
- Contact form

#### Industry Template
- Hero with anchor navigation
- Solution cards
- Case studies section
- Insights/resources
- Contact section

---

## 5. Universal Editor (UE) Configuration

### 5.1 Component Models

Each block requires a component model definition for UE authoring:

```json
{
  "id": "hero",
  "fields": [
    { "name": "eyebrow", "type": "text", "label": "Eyebrow Text" },
    { "name": "heading", "type": "text", "label": "Heading" },
    { "name": "description", "type": "richtext", "label": "Description" },
    { "name": "primaryCta", "type": "link", "label": "Primary CTA" },
    { "name": "secondaryCta", "type": "link", "label": "Secondary CTA" },
    { "name": "backgroundImage", "type": "image", "label": "Background Image" },
    { "name": "variant", "type": "select", "options": ["default", "video", "split"] }
  ]
}
```

### 5.2 Content Fragments

For reusable content, define fragment models:
- **Product Fragment** - Name, description, price, features, CTA
- **Offer Fragment** - Title, description, terms, expiry, CTA
- **Testimonial Fragment** - Quote, author, company, image
- **Award Fragment** - Name, year, organization, image

### 5.3 Component Filters

Define which blocks can be placed in specific sections:
- Hero section: hero, hero-tabbed, hero-promo
- Content section: All content blocks
- Sidebar: form, link-list, promo-banner

---

## 6. Migration Phases

### Phase 1: Foundation (Weeks 1-4)

**Deliverables:**
- [ ] EDS project setup and configuration
- [ ] Global styles (CSS custom properties)
- [ ] Header/navigation block
- [ ] Footer block
- [ ] Base page template
- [ ] Cookie consent integration

**Pages:**
- Homepage (basic structure)
- 404 page

### Phase 2: Core Blocks (Weeks 5-8)

**Deliverables:**
- [ ] Hero block (all variants)
- [ ] Cards block (all variants)
- [ ] Columns block
- [ ] Carousel block
- [ ] Image-text block
- [ ] CTA banner block

**Pages:**
- Homepage (complete)
- 2-3 Portfolio pages

### Phase 3: Advanced Blocks (Weeks 9-12)

**Deliverables:**
- [ ] Tabs block
- [ ] Accordion/FAQ block
- [ ] Pricing table block
- [ ] Form block (RAI form)
- [ ] Video block
- [ ] Stats block

**Pages:**
- Product detail pages (5-10)
- Industry pages (2-3)

### Phase 4: Templates & Listings (Weeks 13-16)

**Deliverables:**
- [ ] Article template
- [ ] Listing template with filters
- [ ] Search functionality
- [ ] Pagination
- [ ] Customer stories listing

**Pages:**
- Customer stories section
- Blog/Learn section
- Offers page

### Phase 5: Polish & Launch (Weeks 17-20)

**Deliverables:**
- [ ] Performance optimization
- [ ] Accessibility audit and fixes
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] A/B testing setup
- [ ] Content migration automation

**Pages:**
- All remaining pages
- Redirects and URL mapping

---

## 7. Technical Considerations

### 7.1 Third-Party Integrations

| Integration | Purpose | Priority |
|-------------|---------|----------|
| Adobe Analytics | Site analytics | P0 |
| Adobe Target | Personalization | P1 |
| ChiliPiper | Scheduling | P1 |
| Marketo/Eloqua | Lead capture | P0 |
| Salesforce | CRM integration | P1 |
| Live Chat | Customer support | P2 |

### 7.2 Performance Requirements

- Lighthouse Performance Score: > 90
- Core Web Vitals: All "Good"
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### 7.3 SEO Considerations

- Preserve existing URL structure where possible
- Implement 301 redirects for URL changes
- Maintain meta tags and structured data
- XML sitemap generation
- robots.txt configuration

### 7.4 Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios
- Focus states for interactive elements

---

## 8. Content Migration Strategy

### 8.1 Automated Migration

Use EDS import tools for:
- Page structure extraction
- Image asset download
- Metadata preservation
- Link mapping

### 8.2 Manual Review

Content requiring manual attention:
- Complex interactive components
- Form configurations
- Video embeds
- Dynamic pricing data
- Legal/compliance content

### 8.3 Asset Management

- Organize images by section/page
- Optimize images for web (WebP format)
- Implement responsive images
- Set up DAM integration if applicable

---

## 9. Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Complex interactive components | High | Medium | Prioritize core features, progressive enhancement |
| Third-party integration delays | Medium | Medium | Early integration testing, fallback options |
| Content volume underestimated | Medium | High | Automated migration tools, phased rollout |
| Design system complexity | Medium | Medium | Establish design tokens early, component library |
| SEO ranking impact | High | Low | Preserve URLs, implement redirects, monitor rankings |

---

## 10. Success Metrics

### 10.1 Technical Metrics
- Page load time improvement: > 30%
- Lighthouse score: > 90 all categories
- Zero critical accessibility issues
- 100% URL redirect coverage

### 10.2 Business Metrics
- Form submission rate maintained/improved
- Bounce rate reduction: > 10%
- Session duration maintained
- Conversion rate maintained/improved

---

## 11. Team & Resources

### Recommended Team Structure

| Role | Count | Responsibilities |
|------|-------|------------------|
| Technical Lead | 1 | Architecture, code review |
| Frontend Developers | 2-3 | Block development, styling |
| Content Authors | 2 | Content migration, UE authoring |
| QA Engineer | 1 | Testing, accessibility |
| Project Manager | 1 | Coordination, timeline |

---

## 12. Next Steps

1. **Immediate Actions:**
   - Set up EDS project repository
   - Configure development environment
   - Begin header/footer block development
   - Extract and document design tokens

2. **Week 1 Goals:**
   - Complete project scaffolding
   - Implement global styles
   - Create first hero block prototype
   - Begin content inventory

3. **Stakeholder Alignment:**
   - Review and approve this plan
   - Confirm timeline and resources
   - Establish communication cadence
   - Define approval process for blocks

---

## Appendix A: URL Mapping Sample

| Source URL | Target URL | Notes |
|------------|------------|-------|
| `/` | `/` | Homepage |
| `/portfolios/mobility.html` | `/portfolios/mobility` | Remove .html |
| `/products/att-dynamic-defense.html` | `/products/att-dynamic-defense` | Remove .html |
| `/industries/healthcare.html` | `/industries/healthcare` | Remove .html |
| `/learn/customer-stories.html` | `/learn/customer-stories` | Remove .html |

## Appendix B: Block Priority Matrix

```
Priority 0 (Must Have):
├── header
├── footer
├── hero
├── cards
├── columns
├── form
└── cta-banner

Priority 1 (Should Have):
├── carousel
├── tabs
├── accordion
├── pricing-table
├── image-text
└── video

Priority 2 (Nice to Have):
├── stats
├── quote
├── gallery
├── filter
└── search
```

---

*Document Version: 1.0*
*Last Updated: January 2026*
*Prepared for: AT&T Business EDS Migration Project*
