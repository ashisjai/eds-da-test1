# AT&T Business Migration Plan
## Adobe Edge Delivery Services (EDS) Migration

**Source:** https://www.business.att.com/
**Target Platform:** Adobe Edge Delivery Services (EDS)
**Authoring:** Universal Editor with AEM as Content Source
**Document Version:** 1.0
**Date:** February 2026

---

## Executive Summary

This document outlines the comprehensive migration plan for business.att.com to Adobe Edge Delivery Services using **Universal Editor with AEM as the content source**. This architecture combines the performance benefits of EDS delivery with enterprise-grade content management in AEM, providing visual WYSIWYG authoring while maintaining existing content governance workflows.

The migration scope includes approximately **200+ pages** across 7 product portfolios, 12 industry verticals, and supporting content sections. The site features complex interactive components including pricing configurators, product comparisons, lead generation forms, and integration with AT&T's enterprise systems.

### Architecture Approach

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Content Source** | AEM Content Repository | Enterprise content storage, governance, workflows |
| **Authoring** | Universal Editor | Visual WYSIWYG editing experience |
| **Delivery** | Edge Delivery Services | High-performance CDN delivery, Core Web Vitals |
| **Code Repository** | GitHub | Block code, styles, scripts |
| **Edge Functions** | Edge Workers | API proxies, dynamic content, personalization |

**Key Benefits of UE + AEM Architecture:**
- Preserves existing AEM content governance and permissions
- Visual editing with real-time preview
- Sub-second page loads via EDS global CDN
- Lighthouse scores > 90 with minimal effort
- Seamless integration with existing AT&T AEM workflows
- Edge workers for dynamic functionality (pricing, APIs)

### Key Metrics

| Metric | Manual Approach | With EC/AEMCoder |
|--------|-----------------|------------------|
| **Total Estimated Pages** | 200+ | 200+ |
| **Product Portfolios** | 7 | 7 |
| **Industry Verticals** | 12 | 12 |
| **Individual Products** | 50+ | 50+ |
| **Custom Blocks Required** | 45 | 45 |
| **Estimated Duration** | 24 weeks | 20-21 weeks |
| **Total Project Hours** | 4,800 hours | 4,120 hours |
| **Team Size** | 10-12 FTEs | 9-11 FTEs |
| **Estimated Cost** | $920,000 | $790,000 |
| **Savings with EC/AEMCoder** | - | ~$130,000 (14%) |

> **Note:** EC/AEMCoder automates initial block generation, reducing development effort by ~40% for block-related tasks. See Section 12 for detailed comparison.

---

## 1. Site Structure Analysis

### 1.1 Information Architecture

```
business.att.com/
├── Homepage (1)
├── Products/ (7 portfolios, 50+ products)
│   ├── Cloud Connectivity/
│   │   ├── Colocation
│   │   ├── Content Delivery Network
│   │   ├── AT&T NetBond for Cloud
│   │   ├── AT&T Managed Cloud Connect
│   │   └── Cloud Connections On-Demand
│   ├── 5G for Business/
│   │   ├── Mobile 5G
│   │   ├── AT&T On-Premise Edge
│   │   └── AT&T Private Cellular Networks
│   ├── Business Internet/
│   │   ├── AT&T Business Fiber
│   │   ├── AT&T Dedicated Internet
│   │   ├── Internet Air (Fixed Wireless)
│   │   └── DSL/IPBB
│   ├── Cybersecurity/
│   │   ├── AT&T Dynamic Defense
│   │   ├── Managed Security Services
│   │   └── Threat Intelligence
│   ├── Internet of Things/
│   │   ├── IoT Platforms
│   │   ├── Vehicle Solutions
│   │   ├── Asset Management
│   │   ├── IoT Professional Services
│   │   └── Smart Cities
│   ├── Voice & Collaboration/
│   │   ├── AT&T Office@Hand
│   │   ├── AT&T IP Toll-Free
│   │   ├── Business SIP Trunking
│   │   ├── Cloud Voice with Microsoft Teams
│   │   └── Next Generation 9-1-1
│   └── Wireless/Mobility/
│       ├── Business Unlimited Plans
│       ├── International Add-ons
│       ├── Field Management
│       ├── Mobile Business Solutions
│       ├── Enhanced Push-to-Talk
│       └── BYOD Solutions
├── Industries/ (12 verticals)
│   ├── Small Business
│   ├── Financial Services
│   ├── Healthcare
│   ├── Hospitality
│   ├── Manufacturing
│   ├── Public Sector
│   ├── Retail
│   ├── Transportation
│   ├── Wholesale
│   ├── AT&T Global Business
│   ├── Partner Solutions
│   └── FirstNet (Public Safety)
├── Insights/ (Content Hub)
│   ├── Customer Stories
│   ├── Research Reports
│   ├── Tech Advice (Blog)
│   └── Top Voices
├── Support/
│   ├── Contact Us
│   ├── Premier Support
│   └── Business Center Support
├── Offers & Deals
├── Bundles
└── Utility Pages
    ├── Sitemap
    ├── Terms of Use
    ├── Privacy Center
    ├── Accessibility
    └── Legal Notices
```

### 1.2 Page Template Classification

| Template Type | Count | Complexity | Examples |
|--------------|-------|------------|----------|
| **Homepage** | 1 | Very High | Hero carousel, product tabs, CTAs, forms |
| **Portfolio Landing** | 7 | High | Cloud, 5G, Internet, Security, IoT, Voice, Wireless |
| **Product Detail** | 50+ | Medium-High | Individual product pages with specs, pricing |
| **Industry Landing** | 12 | Medium-High | Vertical-specific solutions |
| **Industry Solution** | 20+ | Medium | Sub-pages for industry features |
| **Article/Story** | 30+ | Medium | Customer stories, blog posts |
| **Research Report** | 10+ | Medium | Downloadable content with forms |
| **Support/Contact** | 5 | Medium | Forms, contact info, FAQs |
| **Offers/Deals** | 5+ | High | Dynamic pricing, promotions |
| **Utility** | 10 | Low | Legal, sitemap, accessibility |

---

## 2. Migration Steps & Activities

### Phase 0: Pre-Migration (Weeks 1-2)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 0a | **Site audit & inventory** | Content Strategist | 40 | Complete page inventory, asset list |
| 0b | **Performance baseline** | Tech Lead | 24 | Current Core Web Vitals report |
| 0c | **SEO audit** | SEO Specialist | 32 | Rankings, meta data, structured data |
| 0d | **Stakeholder alignment & kickoff** | PM | 24 | RACI matrix, kickoff deck, timeline |
| 0e | **Technical discovery** | Tech Lead | 40 | API inventory, integration mapping |
| | **Phase 0 Total** | | **160** | |

### Phase 1: Foundation (Weeks 3-6)

| Step | Activity | Owner | Manual Hrs | EC/AEMCoder Hrs | Deliverables |
|------|----------|-------|------------|-----------------|--------------|
| 1 | **Run EC/AEMcoder for initial migration** | Dev Team | 80 | 40 | Initial blocks, markdown, page structure |
| 2 | **Update blocks, functionality, CSS** | Dev Team | 160 | 80 | Production-ready block code |
| 2a | **Extract design system tokens** | Dev Team | 80 | 60 | styles.css, CSS custom properties |
| 2b | **Typography & font setup** | Dev Team | 24 | 24 | fonts.css, AT&T brand fonts |
| 2c | **Core navigation blocks** | Dev Team | 80 | 80 | header/, footer/, mega-menu |
| | **Phase 1 Total** | | **424** | **284** | |

### Phase 2: Content Modeling (Weeks 7-8)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 3 | **Create component-model.json** | Tech Lead | 60 | JCR package structure for AEM importer |
| 3a | **Create component-definitions.json** | Tech Lead | 60 | Universal Editor field definitions |
| 3b | **Define content fragment models** | Content Strategist | 40 | CF models for products, stories |
| 3c | **Update transformations** | Dev Team | 40 | Import script transformations |
| | **Phase 2 Total** | | **200** | |

### Phase 3: Block Development (Weeks 9-14)

| Step | Activity | Owner | Manual Hrs | EC/AEMCoder Hrs | Deliverables |
|------|----------|-------|------------|-----------------|--------------|
| 4a | **Hero blocks (6 variants)** | Dev Team | 120 | 72 | hero-video, hero-carousel, hero-split, etc. |
| 4b | **Card blocks (10 variants)** | Dev Team | 200 | 100 | cards-product, cards-feature, cards-pricing, etc. |
| 4c | **Interactive blocks** | Dev Team | 280 | 168 | tabs, accordion, carousel, modal, search |
| 4d | **Form blocks** | Dev Team | 120 | 72 | lead-form, contact-form, newsletter |
| 4e | **Content blocks** | Dev Team | 160 | 80 | columns, quote, table, embed, download |
| 4f | **Product-specific blocks** | Dev Team | 200 | 108 | pricing-table, comparison, spec-sheet |
| | **Phase 3 Total** | | **1,080** | **600** | |

> **Note:** EC/AEMCoder estimates assume AI-generated block scaffolding with manual refinement for brand compliance, accessibility, and complex interactions.

### Phase 4: Page Review & Asset Migration (Weeks 15-16)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 4 | **Review each page, re-author assets** | Content Team | 200 | Validated content in AEM DAM |
| 4a | **Create URL redirect mapping** | Content Strategist | 40 | 301 redirect spreadsheet |
| 4b | **DAM asset migration** | Content Team | 80 | Assets with metadata in AEM |
| 4c | **Image optimization** | Dev Team | 40 | WebP conversion, lazy loading |
| | **Phase 4 Total** | | **360** | |

### Phase 5: Edge Workers & APIs (Weeks 17-18)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 5 | **Move servlets/APIs to Edge workers** | Dev Team | 160 | Edge worker functions |
| 5a | **Pricing API integration** | Dev Team | 60 | Dynamic pricing endpoints |
| 5b | **Lead form submission handling** | Dev Team | 40 | Form backend integration |
| 5c | **Search functionality** | Dev Team | 80 | Site search implementation |
| | **Phase 5 Total** | | **340** | |

### Phase 6: AEM Migration (Weeks 19-20)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 6 | **Migrate custom functionality to AEMaaCS** | Dev Team | 120 | Reports, scheduled jobs |
| 7 | **Migrate meta-schema, taxonomy, workflows** | Tech Lead | 80 | AEM configurations |
| 7a | **User/group migration** | Admin | 40 | Permissions in AEMaaCS |
| 7b | **Workflow configuration** | Tech Lead | 40 | Approval workflows |
| | **Phase 6 Total** | | **280** | |

### Phase 7: Integrations (Weeks 21-22)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 8a | **Analytics/tracking setup** | Dev Team | 60 | Adobe Launch configuration |
| 8b | **Third-party scripts** | Dev Team | 40 | Chat, pixels, consent banner |
| 8c | **Search indexing configuration** | Dev Team | 40 | Sitemap, robots.txt |
| 8d | **Social meta tags** | Dev Team | 20 | OG tags, Twitter cards |
| | **Phase 7 Total** | | **160** | |

### Phase 8: Validation & Testing (Weeks 23-24)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 8 | **Validate all functionalities** | QA Team | 160 | Functional test reports |
| 9 | **Accessibility audit (WCAG 2.1 AA)** | QA Team | 80 | Accessibility report, fixes |
| 10 | **Performance/load testing** | QA Team | 60 | Performance test results |
| 11 | **SEO validation** | SEO Specialist | 40 | Redirect testing, sitemap validation |
| 12 | **Security review** | Security Team | 40 | Security headers, CSP audit |
| | **Phase 8 Total** | | **380** | |

### Phase 9: Launch (Week 24+)

| Step | Activity | Owner | Hours | Deliverables |
|------|----------|-------|-------|--------------|
| 13 | **UAT & stakeholder sign-off** | PM | 80 | Sign-off documentation |
| 14 | **DNS cutover & rollback plan** | Tech Lead | 40 | Production deployment |
| 15 | **Author training on Universal Editor** | Training Lead | 60 | Training materials, sessions |
| 16 | **Hypercare & monitoring setup** | DevOps | 80 | Monitoring dashboards, alerts |
| | **Phase 9 Total** | | **260** | |

---

## 3. Complete Step Summary

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              AT&T BUSINESS EDS MIGRATION - 18 STEP PLAN                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PRE-MIGRATION (160 hrs)                                                    │
│  ─────────────────────────────────────────────────────────────────────────  │
│  0a. Site audit & inventory                                                 │
│  0b. Performance/SEO baseline                                               │
│  0c. SEO audit (rankings, meta data, structured data)                       │
│  0d. Stakeholder alignment & kickoff                                        │
│  0e. Technical discovery (API inventory)                                    │
│                                                                             │
│  MIGRATION EXECUTION (2,344 hrs)                                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│  1.  Run EC/AEMcoder for business.att.com initial migration                 │
│  2.  Update blocks, add functionality, fix CSS                              │
│  2a. Extract design system tokens                                           │
│  2b. Typography & font setup                                                │
│  2c. Core navigation blocks (header, footer, mega-menu)                     │
│  3.  Create component-model.json for JCR package                            │
│  3a. Create component-definitions.json for Universal Editor                 │
│  3b. Define content fragment models                                         │
│  3c. Update import transformations                                          │
│  4.  Review each page, re-author assets in DAM                              │
│  4a. Create URL redirect mapping                                            │
│  4b. DAM asset migration with metadata                                      │
│  4c. Image optimization (WebP, lazy loading)                                │
│  5.  Move existing servlets/APIs to Edge workers                            │
│  5a. Pricing API integration                                                │
│  5b. Lead form submission handling                                          │
│  5c. Search functionality implementation                                    │
│  6.  Migrate custom functionality (reports, jobs) to AEMaaCS                │
│  7.  Migrate meta-schema, taxonomy, workflows, users to AEMaaCS             │
│  7a. User/group permissions migration                                       │
│  7b. Workflow configuration                                                 │
│                                                                             │
│  INTEGRATIONS (160 hrs)                                                     │
│  ─────────────────────────────────────────────────────────────────────────  │
│  8a. Analytics/tracking setup (Adobe Launch)                                │
│  8b. Third-party scripts (chat, pixels, consent)                            │
│  8c. Search indexing configuration                                          │
│  8d. Social meta tags (OG, Twitter cards)                                   │
│                                                                             │
│  VALIDATION & LAUNCH (640 hrs)                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│  8.  Validate all existing functionalities work as-is                       │
│  9.  Accessibility audit & fixes (WCAG 2.1 AA)                              │
│  10. Performance/load testing                                               │
│  11. SEO validation (redirects, sitemap, robots.txt)                        │
│  12. Security review (headers, CSP)                                         │
│  13. UAT & stakeholder sign-off                                             │
│  14. DNS cutover (with rollback plan)                                       │
│  15. Author training on Universal Editor                                    │
│  16. Hypercare & post-launch monitoring                                     │
│                                                                             │
│  MANUAL TOTAL: 3,644 base hours + contingency = 4,800 hours                 │
│  EC/AEMCODER TOTAL: 2,964 base hours + contingency = 4,120 hours            │
│                                                                             │
│  ═══════════════════════════════════════════════════════════════════════    │
│  APPROACH COMPARISON:                                                       │
│  ───────────────────────────────────────────────────────────────────────    │
│  Manual:      24 weeks | 4,800 hours | $920,000                             │
│  EC/AEMCoder: 20 weeks | 4,120 hours | $790,000                             │
│  SAVINGS:     4 weeks  |   680 hours | $130,000 (14%)                       │
│  ═══════════════════════════════════════════════════════════════════════    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Block Requirements

### 4.1 Required EDS Blocks (45 Total)

#### Navigation Blocks (4)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `header` | Very High | Mega menu, search, account login, Personal/Business toggle |
| `footer` | High | Multi-column, social links, legal links |
| `breadcrumb` | Low | Standard hierarchy |
| `mobile-nav` | High | Mobile menu with nested items |

#### Hero Blocks (6)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `hero-video` | High | Background video with overlay text, CTAs |
| `hero-carousel` | High | Multiple slides with auto-rotation |
| `hero-tabs` | High | Tabbed content (Mobile, Internet, Voice, etc.) |
| `hero-split` | Medium | Two-column layout |
| `hero-minimal` | Low | Text-only section header |
| `hero-promo` | Medium | Promotional banner with pricing |

#### Card Blocks (10)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `cards-product` | Medium | Product tiles with pricing |
| `cards-feature` | Medium | Icon/image with text |
| `cards-pricing` | High | Pricing comparison cards |
| `cards-industry` | Medium | Industry solution cards |
| `cards-story` | Medium | Customer story previews |
| `cards-stat` | Medium | Large numbers with descriptions |
| `cards-cta` | Low | Simple call-to-action cards |
| `cards-icon` | Medium | Icon-based feature cards |
| `cards-testimonial` | Medium | Customer quotes |
| `cards-link` | Low | Quick link lists |

#### Interactive Blocks (10)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `accordion` | Medium | FAQ, product details |
| `tabs` | Medium | Content organization |
| `carousel` | High | Image/content slider |
| `modal` | Medium | Popup dialogs, offer details |
| `video` | Medium | Inline video player |
| `video-modal` | High | Lightbox video player |
| `search` | High | Site search with filtering |
| `filter` | High | Product filtering |
| `pricing-calculator` | Very High | Dynamic pricing tool |
| `comparison-table` | High | Product comparison |

#### Content Blocks (8)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `columns` | Low | Multi-column layouts |
| `quote` | Low | Testimonials, pull quotes |
| `table` | Medium | Data tables |
| `embed` | Medium | External content (YouTube, maps) |
| `download` | Low | PDF/document links |
| `cta-banner` | Medium | Full-width call-to-action |
| `divider` | Low | Section separators |
| `icon-list` | Medium | Feature lists with icons |

#### Form Blocks (4)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `lead-form` | High | Sales contact form (RAI form) |
| `contact-form` | Medium | General inquiry |
| `newsletter` | Medium | Email signup |
| `search-input` | Medium | Search box |

#### AT&T-Specific Blocks (3)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `guarantee-banner` | Medium | AT&T Guarantee messaging |
| `offer-card` | High | Dynamic promotional offers |
| `jd-power-badge` | Low | Award/certification badges |

### 4.2 Block Summary

| Category | Block Count | Avg Complexity |
|----------|-------------|----------------|
| Navigation | 4 | High |
| Hero | 6 | Medium-High |
| Cards | 10 | Medium |
| Interactive | 10 | High |
| Content | 8 | Low-Medium |
| Forms | 4 | Medium-High |
| AT&T-Specific | 3 | Medium |
| **Total** | **45** | **Medium-High** |

---

## 5. Technical Requirements

### 5.1 Design System

#### Typography
| Font | Usage | Source |
|------|-------|--------|
| AT&T Aleck Sans | Headlines, display | Custom (AT&T brand) |
| AT&T Aleck Slab | Accent text | Custom (AT&T brand) |
| System fonts | Body text | System stack fallback |

#### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| AT&T Blue | `#009FDB` | Primary brand, links |
| AT&T Dark Blue | `#0568AE` | Headers, CTAs |
| AT&T Black | `#000000` | Body text |
| AT&T Gray | `#5A5A5A` | Secondary text |
| White | `#FFFFFF` | Backgrounds |
| Light Gray | `#F2F2F2` | Secondary backgrounds |

### 5.2 Integrations Required

| Integration | Priority | Complexity | Notes |
|-------------|----------|------------|-------|
| Adobe Analytics/Launch | Critical | Medium | Tag management, conversion tracking |
| ChiliPiper (Concierge) | High | Medium | Lead routing, scheduling |
| OneTrust | High | Medium | Cookie consent, GDPR/CCPA |
| Site Search | High | High | Algolia or similar |
| Lead Form Backend | Critical | High | CRM integration |
| AT&T Business Center | Medium | High | Account management links |
| Premier Support | Medium | Medium | Customer portal integration |
| Chat Widget | Medium | Low | Customer support chat |

### 5.3 Edge Workers Required

| Worker | Purpose | Complexity |
|--------|---------|------------|
| `pricing-api` | Dynamic pricing calculation | High |
| `lead-routing` | Form submission handling | Medium |
| `search-proxy` | Search API proxy | Medium |
| `offer-personalization` | Dynamic offers based on segment | High |
| `analytics-proxy` | Server-side analytics | Low |

### 5.4 Performance Targets

| Metric | Target | Current Benchmark |
|--------|--------|-------------------|
| LCP | < 2.5s | TBD |
| FID/INP | < 100ms | TBD |
| CLS | < 0.1 | TBD |
| Lighthouse Score | > 90 | TBD |
| Page Weight | < 1.5MB | TBD |
| Time to Interactive | < 3s | TBD |

---

## 6. Timeline & Phases

### 6.1 Gantt Chart

```
AT&T BUSINESS EDS MIGRATION - PROJECT GANTT CHART (24 Weeks)
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

                        PHASE 0    PHASE 1      PHASE 2   PHASE 3          PHASE 4-6      PHASE 7-9
                        Pre-Mig    Foundation   Modeling  Block Dev        Migration      Validation
WEEK                1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
                    │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
───────────────────────────────────────────────────────────────────────────────────────────────────────────
PHASE 0: PRE-MIGRATION (160 hrs)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Site Audit              ████
Performance Baseline    ████
SEO Audit                  ████
Stakeholder Kickoff        ████

───────────────────────────────────────────────────────────────────────────────────────────────────────────
PHASE 1: FOUNDATION (424 hrs)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
EC/AEMcoder Migration          ████████
Block Updates & CSS                ████████████
Design System Extraction               ████████
Navigation Blocks                          ████████

───────────────────────────────────────────────────────────────────────────────────────────────────────────
PHASE 2: CONTENT MODELING (200 hrs)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
component-model.json                           ████████
component-definitions.json                         ████████
Content Fragment Models                                ████

───────────────────────────────────────────────────────────────────────────────────────────────────────────
PHASE 3: BLOCK DEVELOPMENT (1,080 hrs)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Hero Blocks (6)                                        ████████
Card Blocks (10)                                           ████████████
Interactive Blocks (10)                                            ████████████
Form Blocks (4)                                                            ████████
Product Blocks (6)                                                             ████████

───────────────────────────────────────────────────────────────────────────────────────────────────────────
PHASE 4-6: PAGE REVIEW & MIGRATION (980 hrs)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Page Review & Assets                                                               ████████
Edge Workers & APIs                                                                    ████████
AEM Migration                                                                              ████████

───────────────────────────────────────────────────────────────────────────────────────────────────────────
PHASE 7-9: INTEGRATIONS & LAUNCH (800 hrs)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Integrations Setup                                                                             ████████
Validation & Testing                                                                               ████████
UAT & Go-Live                                                                                          ████

───────────────────────────────────────────────────────────────────────────────────────────────────────────
MILESTONES          ▼        ▼        ▼           ▼              ▼           ▼        ▼        ▼
                    │        │        │           │              │           │        │        │
                 Kickoff  Design   Models     Blocks 50%    All Blocks   Content  UAT    GO-LIVE
                 Done    System    Done       Complete       Done        100%     OK
                 W2      W6       W8          W12           W14         W20      W23    W24

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
LEGEND: ████ = Active Work Period    ▼ = Milestone
        Total: 4,800 Hours | 24 Weeks | 10-12 FTEs | ~$920K
═══════════════════════════════════════════════════════════════════════════════════════════════════════════
```

### 6.2 Phase Overview

```
Phase 0: Pre-Migration (Weeks 1-2) ────────────── 160 hours
├── Site audit & inventory (40 hrs)
├── Performance baseline (24 hrs)
├── SEO audit (32 hrs)
├── Stakeholder kickoff (24 hrs)
└── Technical discovery (40 hrs)

Phase 1: Foundation (Weeks 3-6) ───────────────── 424 hours
├── EC/AEMcoder initial migration (80 hrs)
├── Block updates & CSS (160 hrs)
├── Design system extraction (80 hrs)
├── Typography setup (24 hrs)
└── Core navigation blocks (80 hrs)

Phase 2: Content Modeling (Weeks 7-8) ─────────── 200 hours
├── component-model.json (60 hrs)
├── component-definitions.json (60 hrs)
├── Content fragment models (40 hrs)
└── Import transformations (40 hrs)

Phase 3: Block Development (Weeks 9-14) ──────── 1,080 hours
├── Hero blocks - 6 variants (120 hrs)
├── Card blocks - 10 variants (200 hrs)
├── Interactive blocks - 10 (280 hrs)
├── Form blocks - 4 (120 hrs)
├── Content blocks - 8 (160 hrs)
└── Product-specific blocks - 6 (200 hrs)

Phase 4: Page Review & Assets (Weeks 15-16) ───── 360 hours
├── Page review & re-authoring (200 hrs)
├── URL redirect mapping (40 hrs)
├── DAM asset migration (80 hrs)
└── Image optimization (40 hrs)

Phase 5: Edge Workers & APIs (Weeks 17-18) ────── 340 hours
├── Servlet/API migration (160 hrs)
├── Pricing API integration (60 hrs)
├── Lead form handling (40 hrs)
└── Search functionality (80 hrs)

Phase 6: AEM Migration (Weeks 19-20) ──────────── 280 hours
├── Custom functionality migration (120 hrs)
├── Meta-schema & taxonomy (80 hrs)
├── User/group migration (40 hrs)
└── Workflow configuration (40 hrs)

Phase 7: Integrations (Weeks 21-22) ───────────── 160 hours
├── Analytics/tracking setup (60 hrs)
├── Third-party scripts (40 hrs)
├── Search indexing (40 hrs)
└── Social meta tags (20 hrs)

Phase 8-9: Validation & Launch (Weeks 23-24) ──── 640 hours
├── Functional validation (160 hrs)
├── Accessibility audit (80 hrs)
├── Performance testing (60 hrs)
├── SEO validation (40 hrs)
├── Security review (40 hrs)
├── UAT & sign-off (80 hrs)
├── DNS cutover (40 hrs)
├── Author training (60 hrs)
└── Hypercare & monitoring (80 hrs)

TOTAL PROJECT HOURS: 3,644 base + contingency = 4,800 hours
```

---

## 7. Resource Requirements

### 7.1 Team Structure

| Role | Count | Responsibilities |
|------|-------|------------------|
| **Project Manager** | 1 | Timeline, coordination, stakeholder management |
| **Technical Lead** | 1 | Architecture, code review, technical decisions |
| **Senior EDS Developer** | 2 | Core blocks, complex components, edge workers |
| **Mid EDS Developer** | 2 | Standard blocks, templates, CSS |
| **Junior EDS Developer** | 1 | Support, simple blocks, testing |
| **Content Strategist** | 1 | Content mapping, IA, CF models |
| **Content Author** | 2 | Content migration, DAM management |
| **QA Engineer** | 1 | Testing, validation, accessibility |
| **SEO Specialist** | 0.5 | SEO audit, redirect validation |
| **DevOps/Admin** | 0.5 | AEM admin, monitoring setup |
| **Total** | **10-12** | |

### 7.2 Hours by Role per Phase

| Role | Ph 0 | Ph 1 | Ph 2 | Ph 3 | Ph 4-6 | Ph 7-9 | Total |
|------|------|------|------|------|--------|--------|-------|
| Project Manager | 24 | 40 | 20 | 60 | 60 | 80 | **284** |
| Technical Lead | 64 | 80 | 100 | 120 | 120 | 80 | **564** |
| Sr. EDS Dev 1 | 0 | 120 | 40 | 320 | 200 | 80 | **760** |
| Sr. EDS Dev 2 | 0 | 100 | 40 | 280 | 200 | 80 | **700** |
| Mid EDS Dev 1 | 0 | 80 | 0 | 200 | 160 | 80 | **520** |
| Mid EDS Dev 2 | 0 | 40 | 0 | 160 | 120 | 60 | **380** |
| Jr. EDS Dev | 0 | 24 | 0 | 80 | 80 | 60 | **244** |
| Content Strategist | 40 | 20 | 80 | 40 | 80 | 40 | **300** |
| Content Author 1 | 0 | 0 | 0 | 0 | 240 | 60 | **300** |
| Content Author 2 | 0 | 0 | 0 | 0 | 160 | 40 | **200** |
| QA Engineer | 0 | 0 | 0 | 0 | 80 | 280 | **360** |
| SEO Specialist | 32 | 0 | 0 | 0 | 0 | 40 | **72** |
| DevOps/Admin | 0 | 0 | 0 | 0 | 60 | 60 | **120** |
| **Phase Totals** | **160** | **504** | **280** | **1,260** | **1,560** | **1,040** | **4,804** |

---

## 8. Cost Estimation

### 8.1 Labor Costs - By Role

| Role | Rate/Hr | Hours | Total | Notes |
|------|---------|-------|-------|-------|
| Project Manager | $150 | 284 | $42,600 | Planning, coordination |
| Technical Lead | $200 | 564 | $112,800 | Architecture, decisions |
| Sr. EDS Developer 1 | $185 | 760 | $140,600 | Core blocks, edge workers |
| Sr. EDS Developer 2 | $185 | 700 | $129,500 | Complex components |
| Mid EDS Developer 1 | $165 | 520 | $85,800 | Standard blocks |
| Mid EDS Developer 2 | $165 | 380 | $62,700 | Templates, CSS |
| Jr. EDS Developer | $140 | 244 | $34,160 | Support, testing |
| Content Strategist | $135 | 300 | $40,500 | IA, content models |
| Content Author 1 | $95 | 300 | $28,500 | Primary migration |
| Content Author 2 | $95 | 200 | $19,000 | Secondary support |
| QA Engineer | $130 | 360 | $46,800 | Testing, a11y |
| SEO Specialist | $140 | 72 | $10,080 | SEO validation |
| DevOps/Admin | $160 | 120 | $19,200 | Admin, monitoring |
| **Subtotal Labor** | | **4,804** | **$772,240** | |

### 8.2 Labor Costs - By Phase

| Phase | Hours | Labor Cost | % of Total |
|-------|-------|------------|------------|
| Phase 0: Pre-Migration | 160 | $26,000 | 3% |
| Phase 1: Foundation | 504 | $84,000 | 11% |
| Phase 2: Content Modeling | 280 | $50,000 | 6% |
| Phase 3: Block Development | 1,260 | $218,000 | 28% |
| Phase 4-6: Migration | 1,560 | $248,000 | 32% |
| Phase 7-9: Validation/Launch | 1,040 | $146,240 | 19% |
| **Total** | **4,804** | **$772,240** | 100% |

### 8.3 Additional Costs

| Item | Cost | Frequency | Annual Cost | Notes |
|------|------|-----------|-------------|-------|
| Adobe EDS Licensing | TBD | Annual | TBD | Per Adobe agreement |
| AEM Cloud Service | TBD | Annual | TBD | Per Adobe agreement |
| Search Service (Algolia) | $1,200/mo | Monthly | $14,400 | Enterprise search |
| Edge Worker Compute | $500/mo | Monthly | $6,000 | Cloudflare/similar |
| Image CDN | $300/mo | Monthly | $3,600 | Image optimization |
| Monitoring Tools | $400/mo | Monthly | $4,800 | Datadog/New Relic |
| **Subtotal Additional** | | | **$28,800** | First year |

### 8.4 Contingency & Risk Buffer

| Contingency Type | Base Amount | % | Buffer Amount |
|------------------|-------------|---|---------------|
| Scope contingency | $772,240 | 10% | $77,224 |
| Technical risk buffer | $218,000 | 15% | $32,700 |
| Integration risk | $50,000 | 20% | $10,000 |
| **Total Contingency** | | | **$119,924** |

### 8.5 Total Cost Summary

| Category | Amount |
|----------|--------|
| Labor (4,804 hours) | $772,240 |
| Additional Costs (Year 1) | $28,800 |
| Contingency (~15%) | $119,924 |
| **Project Total** | **$920,964** |

#### Cost Range Scenarios

| Scenario | Hours | Cost | Notes |
|----------|-------|------|-------|
| **Optimistic** | 4,000 | $750,000 | No major issues, experienced team |
| **Expected** | 4,800 | $920,000 | Planned estimate with contingency |
| **Conservative** | 5,800 | $1,100,000 | Complex issues, scope additions |

---

## 9. Risk Assessment

### 9.1 Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Complex mega-menu navigation | High | High | Technical spike early, fallback options |
| Pricing API integration | Medium | High | Early API documentation, mock services |
| Content approval delays | High | High | Phased reviews, dedicated reviewers |
| AT&T brand compliance | Medium | High | Early brand team engagement |
| Edge worker complexity | Medium | High | Prototype critical workers first |
| Third-party script conflicts | Medium | Medium | Staged integration, testing |
| SEO ranking impact | Medium | High | Comprehensive redirect strategy |
| Performance with dynamic content | Medium | Medium | Caching strategy, edge optimization |

### 9.2 Key Assumptions

- AT&T provides timely content approvals
- Access to existing AEM instance for content extraction
- API documentation available for backend services
- AT&T brand fonts licensed for EDS use
- ChiliPiper/OneTrust integrations continue as-is
- No major redesign required (visual refresh acceptable)
- Legal/compliance review integrated into timeline

---

## 10. Success Criteria

### 10.1 Technical Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |
| Core Web Vitals (all) | Pass |
| Cross-browser compatibility | Chrome, Safari, Firefox, Edge |
| Mobile responsiveness | 100% pages |
| Page load time (LCP) | < 2.5s |

### 10.2 Business Success Metrics

| Metric | Target |
|--------|--------|
| Page load time improvement | > 40% |
| Content authoring time | < 50% of current |
| Time to publish | < 5 minutes |
| Uptime SLA | 99.9% |
| Lead form conversion | Maintain or improve |
| SEO rankings | No degradation |

---

## 11. Appendices

### Appendix A: Key URLs Inventory

| Section | URL Pattern | Est. Pages |
|---------|-------------|------------|
| Products | /products/*.html | 50+ |
| Portfolios | /portfolios/*.html | 7 |
| Industries | /industries/*.html | 12 |
| Categories | /categories/*.html | 20+ |
| Learn/Insights | /learn/*.html | 40+ |
| Support | /support/*.html | 5 |
| Offers | /offers*.html | 5+ |
| Other | Various | 60+ |
| **Total** | | **200+** |

### Appendix B: Integration Contacts

| System | Owner | Contact |
|--------|-------|---------|
| Adobe Analytics | AT&T Digital | TBD |
| ChiliPiper | Marketing Ops | TBD |
| OneTrust | Legal/Privacy | TBD |
| CRM/Lead System | Sales Ops | TBD |
| Business Center | IT | TBD |

### Appendix C: Content Fragment Models

To be developed during Phase 2.

---

---

## 12. Estimation Approaches: Manual vs EC/AEMCoder

This section compares traditional manual migration with the accelerated EC/AEMCoder approach. EC/AEMCoder uses AI-assisted tooling to automate initial block generation, content mapping, and markdown structure creation.

### 12.1 What EC/AEMCoder Automates

| Capability | Automated | Manual Effort Remaining |
|------------|-----------|-------------------------|
| **Block structure generation** | ✅ Yes | Review and refinement |
| **Initial HTML → Markdown conversion** | ✅ Yes | Content validation |
| **Block CSS scaffolding** | ✅ Yes | Brand refinement, responsive tuning |
| **Content mapping to blocks** | ✅ Yes | Edge case handling |
| **Basic JavaScript decoration** | ✅ Partial | Complex interactions, state management |
| **Image extraction & references** | ✅ Yes | DAM migration, optimization |

### 12.2 What Still Requires Manual Work

| Task | Why Manual | Effort Level |
|------|-----------|--------------|
| **CSS brand refinement** | AT&T brand compliance, pixel-perfect styling | High |
| **Complex JavaScript interactions** | Pricing calculators, dynamic filtering, animations | High |
| **Accessibility compliance** | WCAG 2.1 AA testing, ARIA attributes, keyboard nav | Medium |
| **component-model.json** | JCR package structure for AEM importer | Medium |
| **component-definitions.json** | Universal Editor field definitions | Medium |
| **Edge workers** | API proxies, form handling, personalization | High |
| **Integration testing** | Third-party scripts, analytics, CRM | Medium |
| **Content validation** | Business accuracy, legal review | High |
| **Performance optimization** | Core Web Vitals tuning, lazy loading | Medium |

### 12.3 Hours Comparison by Phase

| Phase | Manual Hours | EC/AEMCoder Hours | Savings | Notes |
|-------|-------------|-------------------|---------|-------|
| **Phase 0: Pre-Migration** | 160 | 160 | 0 | Same (planning, audits) |
| **Phase 1: Foundation** | 424 | 284 | 140 | Initial migration + block updates accelerated |
| **Phase 2: Content Modeling** | 200 | 180 | 20 | Slight assist on transformations |
| **Phase 3: Block Development** | 1,080 | 600 | 480 | Major acceleration (~45%) |
| **Phase 4: Assets** | 360 | 360 | 0 | Same (content review, DAM) |
| **Phase 5: Edge Workers** | 340 | 340 | 0 | Same (custom code required) |
| **Phase 6: AEM Migration** | 280 | 280 | 0 | Same (AEM configuration) |
| **Phase 7: Integrations** | 160 | 160 | 0 | Same (third-party scripts) |
| **Phase 8-9: Validation/Launch** | 640 | 600 | 40 | Fewer defects to fix |
| **Contingency** | 1,156 | 1,156 | 0 | Same % contingency |
| **TOTAL** | **4,800** | **4,120** | **680** | **~14% reduction** |

### 12.4 Block Development Comparison (Phase 3)

| Block Category | Manual (hrs) | EC/AEMCoder (hrs) | Reduction |
|----------------|-------------|-------------------|-----------|
| **Hero Blocks (6)** | 120 | 72 | 40% |
| **Card Blocks (10)** | 200 | 100 | 50% |
| **Interactive Blocks (10)** | 280 | 168 | 40% |
| **Form Blocks (4)** | 120 | 72 | 40% |
| **Content Blocks (8)** | 160 | 80 | 50% |
| **Product-specific (6)** | 200 | 108 | 46% |
| **TOTAL** | **1,080** | **600** | **~44%** |

### 12.5 Cost Comparison

| Category | Manual | EC/AEMCoder | Savings |
|----------|--------|-------------|---------|
| **Labor (base hours)** | $772,240 | $659,200 | $113,040 |
| **Additional Costs (Year 1)** | $28,800 | $28,800 | $0 |
| **Contingency (~15%)** | $119,924 | $102,960 | $16,964 |
| **PROJECT TOTAL** | **$920,964** | **$791,000** | **~$130,000** |

### 12.6 Timeline Comparison

```
MANUAL APPROACH (24 Weeks)
═══════════════════════════════════════════════════════════════
Week  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
Ph 0  ████
Ph 1      ████████████████
Ph 2                      ████████
Ph 3                              ████████████████████████
Ph 4-6                                                    ████████████
Ph 7-9                                                                ████████
                                                                            ▼
                                                                       GO-LIVE

EC/AEMCODER APPROACH (20-21 Weeks)
═══════════════════════════════════════════════════════════════
Week  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
Ph 0  ████
Ph 1      ████████████
Ph 2                  ██████
Ph 3                        ████████████████
Ph 4-6                                      ████████████
Ph 7-9                                                  ██████████
                                                                  ▼
                                                             GO-LIVE
═══════════════════════════════════════════════════════════════
TIMELINE SAVINGS: 3-4 Weeks
```

---

## 13. Key Insights

### 13.1 EC/AEMCoder Value Proposition

| Insight | Impact |
|---------|--------|
| **Greatest impact on repetitive tasks** | Card blocks, content blocks see 50% reduction |
| **Complex components still need expertise** | Pricing calculators, mega-menus require senior developers |
| **Quality of output varies** | Simple blocks: production-ready; Complex: 60-70% complete |
| **Consistency across blocks** | EC/AEMCoder maintains consistent patterns and CSS structure |
| **Faster iteration cycles** | Initial version in hours vs days enables more refinement time |

### 13.2 When to Choose Each Approach

| Choose Manual When | Choose EC/AEMCoder When |
|--------------------|------------------------|
| Small scope (< 20 pages) | Large scope (50+ pages) |
| Highly custom design | Standard EDS patterns |
| Complex interactive requirements | Content-heavy sites |
| Existing experienced EDS team | Team ramping up on EDS |
| Tight brand guidelines | Flexible brand implementation |

### 13.3 Hybrid Recommendation for AT&T Business

Given the AT&T Business site characteristics:
- **200+ pages** → EC/AEMCoder advantageous for scale
- **Complex interactive components** → Manual expertise required
- **Strong brand guidelines** → CSS refinement essential
- **Enterprise integrations** → Edge workers manual regardless

**Recommendation: EC/AEMCoder approach with senior developer oversight for complex blocks**

```
RECOMMENDED BLOCK APPROACH BY COMPLEXITY
═══════════════════════════════════════════════════════════════

EC/AEMCoder Primary (50% effort reduction)
├── cards-product, cards-feature, cards-industry
├── columns, quote, table, embed, download
├── hero-minimal, hero-split
├── cta-banner, divider, icon-list
└── breadcrumb, cards-link, cards-cta

EC/AEMCoder + Manual Refinement (30-40% reduction)
├── hero-video, hero-carousel, hero-tabs
├── cards-pricing, cards-testimonial, cards-stat
├── accordion, tabs, modal
├── lead-form, contact-form, newsletter
└── offer-card, guarantee-banner

Manual Development Primary (10-20% reduction)
├── header (mega-menu complexity)
├── footer (multi-column, legal links)
├── mobile-nav (nested interactions)
├── pricing-calculator (dynamic logic)
├── comparison-table (interactive features)
├── search, filter (complex UX)
└── video-modal (lightbox interactions)
═══════════════════════════════════════════════════════════════
```

---

## 14. Disclaimers & Assumptions

### 14.1 Estimate Disclaimers

> **⚠️ IMPORTANT DISCLAIMERS**
>
> 1. **Estimates are projections, not commitments.** Actual effort may vary ±20% based on discovered complexity, scope changes, and team velocity.
>
> 2. **EC/AEMCoder savings are based on typical outcomes.** Results depend on source site structure, content quality, and block complexity. Highly custom designs may see lower automation benefits.
>
> 3. **Timeline assumes no major scope changes.** Additions to scope, design revisions, or new integration requirements will extend timelines proportionally.
>
> 4. **Cost rates are illustrative.** Actual rates depend on staffing model (internal, SI partner, offshore blend) and regional variations.
>
> 5. **Contingency should not be eliminated.** The 15% contingency accounts for unknowns discovered during migration. Removing it increases project risk.

### 14.2 Technical Assumptions

| Assumption | Risk if Invalid | Mitigation |
|------------|-----------------|------------|
| Source AEM content is accessible | High - delays extraction | Early access validation |
| APIs have documentation | Medium - extends edge worker dev | Technical spike Week 3 |
| Brand fonts are web-licensed | Low - fallback to system fonts | Legal review Week 2 |
| No major redesign required | High - extends all phases | Stakeholder alignment |
| Third-party scripts compatible | Medium - integration issues | Staged testing |

### 14.3 EC/AEMCoder-Specific Assumptions

| Assumption | Impact if Wrong |
|------------|-----------------|
| Source HTML is semantic and well-structured | Lower automation quality, more manual fixes |
| Consistent page templates across site | Higher variance in block output |
| Standard CSS naming conventions | Additional CSS mapping required |
| Images accessible via public URLs | Manual asset handling needed |
| Content in English (primary) | Multi-language adds complexity |

### 14.4 Organizational Assumptions

| Assumption | Risk if Invalid |
|------------|-----------------|
| Content approvers available within 5 business days | Schedule delays |
| Single decision-maker for design/UX | Revision cycles |
| Legal review integrated into timeline | Launch delays |
| Training resources allocated | Adoption issues post-launch |
| Hypercare team identified | Post-launch support gaps |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | Migration Team | Initial document |
| 1.1 | Feb 2026 | Migration Team | Added EC/AEMCoder comparison, Key Insights, Disclaimers |

---

*This migration plan is a living document and will be updated as the project progresses.*
