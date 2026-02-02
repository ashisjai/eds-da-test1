# AbbVie.com Migration Plan
## Adobe Edge Delivery Services (EDS) Migration

**Source:** https://www.abbvie.com/
**Target Platform:** Adobe Edge Delivery Services (EDS)
**Authoring:** Universal Editor with AEM as Content Source
**Document Version:** 1.0
**Date:** February 2026

---

## Executive Summary

This document outlines the comprehensive migration plan for AbbVie.com to Adobe Edge Delivery Services using **Universal Editor with AEM as the content source**. This architecture combines the performance benefits of EDS delivery with enterprise-grade content management in AEM, providing visual WYSIWYG authoring while maintaining existing content governance workflows.

The migration scope includes approximately **80-100 unique pages** across 5 main content sections, with complex interactive components including product catalogs (150+ products), drug pipeline data visualization, story/article content hub, and rich media integration.

### Architecture Approach

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Content Source** | AEM Content Repository | Enterprise content storage, governance, workflows |
| **Authoring** | Universal Editor | Visual WYSIWYG editing experience |
| **Delivery** | Edge Delivery Services | High-performance CDN delivery, Core Web Vitals |
| **Code Repository** | GitHub | Block code, styles, scripts |

**Key Benefits of UE + AEM Architecture:**
- Preserves existing AEM content governance and permissions
- Visual editing with real-time preview
- Sub-second page loads via EDS global CDN
- Lighthouse scores > 90 with minimal effort
- Seamless integration with existing AEM workflows

### Key Metrics
| Metric | Value |
|--------|-------|
| **Total Estimated Pages** | 80-100 |
| **Product Entries** | 150+ |
| **Pipeline Compounds** | 90+ |
| **Content Stories** | 50+ (estimated) |
| **Custom Blocks Required** | 35 |
| **Estimated Duration** | 18 weeks |
| **Total Project Hours** | 2,920 hours |
| **Team Size** | 7-9 FTEs |
| **Estimated Cost** | $560,000 (with contingency) |

---

## 1. Site Structure Analysis

### 1.1 Information Architecture

```
abbvie.com/
├── Homepage (1)
├── Who We Are/ (7 pages)
│   ├── Our Principles
│   ├── Operating with Integrity
│   ├── Key Facts
│   ├── Our Leaders
│   ├── Policies & Disclosures
│   ├── Our Stories (Content Hub - 50+ articles)
│   └── Pre-Approval Access Policy
├── Science/ (9 pages)
│   ├── Areas of Focus
│   ├── Areas of Innovation
│   ├── Pipeline (Complex data table)
│   ├── Our People
│   ├── Research Publications
│   ├── Partner with Us
│   ├── Clinical Trials
│   ├── R&D Sites
│   └── Independent Educational Grants
├── Patients/ (4 pages)
│   ├── Patient Support
│   ├── Patient Assistance
│   ├── Product Quality & Safety
│   └── Products (150+ product accordions)
├── Join Us/ (9 pages)
│   ├── Opportunities (6 sub-pages)
│   ├── Life at AbbVie
│   └── Benefits
├── Sustainability/ (10 pages)
│   ├── AbbVie Foundation (3 sub-pages)
│   ├── Disaster Relief
│   ├── ESG (3 sub-pages)
│   └── Philanthropy (2 sub-pages)
└── Utility Pages (8+)
    ├── Contact Center
    ├── Accessibility Statement
    ├── Site Map
    ├── Terms of Use
    ├── Privacy Notice
    └── Latest Earnings
```

### 1.2 Page Template Classification

| Template Type | Count | Complexity | Examples |
|--------------|-------|------------|----------|
| **Homepage** | 1 | High | Rich media, carousels, video |
| **Section Landing** | 5 | Medium-High | Who We Are, Science, Patients, Join Us, Sustainability |
| **Content Hub** | 2 | High | Our Stories, Pipeline |
| **Article/Story** | 50+ | Medium | Individual story pages |
| **Product Listing** | 1 | High | Products page with 150+ accordions |
| **Standard Content** | 30+ | Low-Medium | Policies, support pages |
| **Leader Profile** | 10+ | Medium | Executive bios |
| **Data Table** | 1 | High | Pipeline with filtering |
| **Utility** | 8 | Low | Contact, Terms, Privacy |

---

## 2. Content Volume Estimation

### 2.1 Page Count by Section

| Section | Static Pages | Dynamic/Generated | Total |
|---------|-------------|-------------------|-------|
| Homepage | 1 | 0 | 1 |
| Who We Are | 7 | 50+ stories | 57+ |
| Science | 9 | 0 | 9 |
| Patients | 4 | 0 | 4 |
| Join Us | 9 | 0 | 9 |
| Sustainability | 10 | 0 | 10 |
| Utility | 8 | 0 | 8 |
| **Total** | **48** | **50+** | **98+** |

### 2.2 Content Elements Inventory

| Element Type | Estimated Count |
|--------------|----------------|
| Hero sections | 40+ |
| Card components | 200+ |
| Video embeds | 30+ |
| Forms | 5-10 |
| Data tables | 2-3 |
| Accordions | 150+ (products) |
| Carousels | 15+ |
| Images | 500+ |
| PDFs/Documents | 50+ |

---

## 3. Block Requirements

### 3.1 Required EDS Blocks

#### Navigation Blocks (3)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `header` | High | Mega menu, search, language selector |
| `footer` | Medium | Multi-column, social links |
| `breadcrumb` | Low | Standard hierarchy |

#### Hero Blocks (5)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `hero-video` | High | Background video with overlay text |
| `hero-image` | Medium | Standard hero with CTA |
| `hero-carousel` | High | Multiple slides |
| `hero-split` | Medium | Two-column layout |
| `hero-minimal` | Low | Text-only section header |

#### Card Blocks (8)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `cards` | Medium | Standard grid cards |
| `cards-story` | Medium | Article preview with image, date, category |
| `cards-stats` | Medium | Large numbers with descriptions |
| `cards-feature` | Medium | Icon/image with text |
| `cards-cta` | Low | Simple call-to-action cards |
| `cards-news` | Medium | Press release listings |
| `cards-team` | Medium | Leader/team member profiles |
| `cards-link` | Low | Quick link lists |

#### Interactive Blocks (8)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `accordion` | Medium | Product listings with expandable content |
| `tabs` | Medium | Content organization |
| `carousel` | High | Image/content slider |
| `video` | Medium | Inline video player |
| `video-modal` | High | Lightbox video player |
| `search` | High | Site search with filtering |
| `filter` | High | Pipeline/content filtering |
| `modal` | Medium | Popup dialogs |

#### Content Blocks (8)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `columns` | Low | Multi-column layouts |
| `quote` | Low | Testimonials, pull quotes |
| `table` | Medium | Data tables |
| `pipeline-table` | High | Interactive drug pipeline |
| `embed` | Medium | External content |
| `download` | Low | PDF/document links |
| `cta-banner` | Medium | Full-width call-to-action |
| `divider` | Low | Section separators |

#### Form Blocks (3)
| Block Name | Complexity | Notes |
|------------|------------|-------|
| `form` | High | Contact forms |
| `newsletter` | Medium | Email signup |
| `search-input` | Medium | Search box |

### 3.2 Block Summary

| Category | Block Count | Avg Complexity |
|----------|-------------|----------------|
| Navigation | 3 | Medium |
| Hero | 5 | Medium-High |
| Cards | 8 | Medium |
| Interactive | 8 | High |
| Content | 8 | Medium |
| Forms | 3 | Medium-High |
| **Total** | **35** | Medium-High |

---

## 4. Technical Requirements

### 4.1 Design System

#### Typography
| Font | Usage | Source |
|------|-------|--------|
| F37 Lineca | Headlines, display | Custom (licensing required) |
| Roboto | Body text | Google Fonts |

#### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| AbbVie Blue | `#071D49` | Primary brand |
| Light Blue | `#0071CE` | Accent, links |
| White | `#FFFFFF` | Backgrounds |
| Gray | `#F5F5F5` | Secondary backgrounds |
| Dark Gray | `#333333` | Body text |

### 4.2 Integrations Required

| Integration | Priority | Complexity |
|-------------|----------|------------|
| Adobe Analytics | High | Medium |
| Video hosting (existing) | High | Low |
| Search (Algolia/similar) | Medium | High |
| News feed API | Medium | Medium |
| Careers redirect | Low | Low |
| Investor site links | Low | Low |

### 4.3 Performance Targets

| Metric | Target | Current Benchmark |
|--------|--------|-------------------|
| LCP | < 2.5s | TBD |
| FID | < 100ms | TBD |
| CLS | < 0.1 | TBD |
| Lighthouse Score | > 90 | TBD |
| Page Weight | < 1MB | TBD |

---

## 5. Resource Requirements

### 5.1 Team Structure

| Role | Count | Responsibilities |
|------|-------|------------------|
| **Project Manager** | 1 | Timeline, coordination, stakeholder management |
| **Technical Lead** | 1 | Architecture, code review, technical decisions |
| **EDS Developer** | 2-3 | Block development, JavaScript, CSS |
| **Content Strategist** | 1 | Content mapping, information architecture |
| **Content Author** | 1-2 | Content migration, markdown authoring |
| **QA Engineer** | 1 | Testing, validation, accessibility |
| **Total** | **7-9** | |

### 5.2 Skills Required

| Skill | Level | Team Members |
|-------|-------|--------------|
| Adobe Edge Delivery Services | Expert | Tech Lead, Developers |
| JavaScript/CSS | Advanced | Developers |
| AEM/Universal Editor | Intermediate | All |
| Content authoring | Intermediate | Content team |
| Accessibility (WCAG) | Advanced | QA, Developers |
| Git/GitHub | Intermediate | All |

### 5.3 External Dependencies

| Dependency | Owner | Risk Level |
|------------|-------|------------|
| Font licensing (F37 Lineca) | AbbVie | Medium |
| Video hosting access | AbbVie | Low |
| Analytics configuration | AbbVie | Medium |
| Domain/DNS changes | AbbVie IT | High |
| Content approvals | AbbVie Marketing | High |
| Legal/Compliance review | AbbVie Legal | High |

---

## 6. Timeline & Phases

### 6.1 Gantt Chart

```
ABBVIE.COM EDS MIGRATION - PROJECT GANTT CHART (18 Weeks)
═══════════════════════════════════════════════════════════════════════════════════════════

                              PHASE 1          PHASE 2              PHASE 3        PHASE 4
                            Foundation       Development         Content Migr.    Launch
WEEK                    1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
                        │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
─────────────────────────────────────────────────────────────────────────────────────────────
PHASE 1: FOUNDATION (480 hrs)
─────────────────────────────────────────────────────────────────────────────────────────────
Environment Setup       ████
Design System              ████
Core Blocks (Nav/Hero)        ████████
Homepage Migration               ████

─────────────────────────────────────────────────────────────────────────────────────────────
PHASE 2: DEVELOPMENT (960 hrs)
─────────────────────────────────────────────────────────────────────────────────────────────
Card Blocks (8)                     ████████
Interactive Blocks (8)                    ████████
Content Blocks (8)                              ████████
Form Blocks (3)                                    ████
Templates (8)                                      ████

─────────────────────────────────────────────────────────────────────────────────────────────
PHASE 3: CONTENT MIGRATION (840 hrs)
─────────────────────────────────────────────────────────────────────────────────────────────
Landing Pages (6)                                        ████████
Story Migration (50+)                                          ████████
Products Page                                                        ████
Pipeline Page                                                        ████

─────────────────────────────────────────────────────────────────────────────────────────────
PHASE 4: TESTING & LAUNCH (640 hrs)
─────────────────────────────────────────────────────────────────────────────────────────────
Integration Testing                                                        ████
Accessibility Audit                                                           ████
UAT & Fixes                                                                      ████
Go-Live                                                                             ████

─────────────────────────────────────────────────────────────────────────────────────────────
MILESTONES                ▼     ▼           ▼                 ▼        ▼     ▼        ▼
                          │     │           │                 │        │     │        │
                       Design  Core      All Blocks       Content   100%  UAT    GO-LIVE
                       System  Blocks    Complete         50%       Done  OK
                       Done    Done      (Week 10)        (Wk 12)   W14   W17     W18

═══════════════════════════════════════════════════════════════════════════════════════════
LEGEND: ████ = Active Work Period    ▼ = Milestone
        Total: 2,920 Hours | 18 Weeks | 7-9 FTEs | ~$560K
═══════════════════════════════════════════════════════════════════════════════════════════
```

### 6.2 Phase Overview

```
Phase 1: Foundation (Weeks 1-4) ─────────────────── 480 hours
├── Project setup & planning (80 hrs)
├── Design system extraction (120 hrs)
├── Core block development (200 hrs)
└── Homepage migration (80 hrs)

Phase 2: Core Development (Weeks 5-10) ──────────── 960 hours
├── Block development - Cards (160 hrs)
├── Block development - Interactive (280 hrs)
├── Block development - Content/Forms (200 hrs)
├── Template creation (160 hrs)
└── Section landing pages (160 hrs)

Phase 3: Content Migration (Weeks 11-14) ────────── 640 hours
├── Static page migration (200 hrs)
├── Story/article migration (160 hrs)
├── Product data migration (120 hrs)
└── Pipeline implementation (160 hrs)

Phase 4: Testing & Launch (Weeks 15-18) ─────────── 480 hours
├── Integration testing (120 hrs)
├── Performance optimization (80 hrs)
├── Accessibility audit & fixes (120 hrs)
├── UAT & stakeholder review (80 hrs)
└── Go-live preparation (80 hrs)

TOTAL PROJECT HOURS: 2,560 hours
```

### 6.3 Detailed Timeline by Week

| Phase | Week | Activities | Hours | Deliverables |
|-------|------|------------|-------|--------------|
| **Phase 1** | 1 | Project kickoff, environment setup, stakeholder alignment | 120 | GitHub repo, AEM setup, RACI matrix |
| | 2 | Design token extraction, typography setup, color system | 120 | styles.css, fonts.css, design tokens |
| | 3 | Header block, footer block, navigation structure | 120 | header/, footer/, nav.md |
| | 4 | Hero blocks (5 variants), homepage migration | 120 | hero-*, homepage.md |
| **Phase 2** | 5 | Card blocks (cards, cards-story, cards-stats, cards-feature) | 160 | 4 card block variants |
| | 6 | Card blocks (cards-cta, cards-news, cards-team, cards-link) | 160 | 4 card block variants |
| | 7 | Interactive blocks (accordion, tabs, carousel) | 160 | 3 interactive blocks |
| | 8 | Interactive blocks (video, video-modal, search, filter) | 160 | 4 interactive blocks |
| | 9 | Content blocks (columns, quote, table, pipeline-table) | 160 | 4 content blocks |
| | 10 | Content blocks (embed, download, cta-banner), forms, templates | 160 | 3 blocks + forms + templates |
| **Phase 3** | 11 | Section landing pages (Who We Are, Science, Patients) | 160 | 3 landing pages + sub-pages |
| | 12 | Section landing pages (Join Us, Sustainability, Utility) | 160 | 3 landing pages + sub-pages |
| | 13 | Story/article migration (25 stories), content hub setup | 160 | 25+ story pages |
| | 14 | Product page (150+ accordions), pipeline page, remaining stories | 160 | Products, Pipeline, 25+ stories |
| **Phase 4** | 15 | Integration testing, cross-browser testing, mobile testing | 120 | Test reports, bug fixes |
| | 16 | Accessibility audit (WCAG 2.1 AA), performance optimization | 120 | A11y report, LCP optimization |
| | 17 | UAT with stakeholders, content review, final fixes | 120 | UAT sign-off |
| | 18 | DNS cutover prep, go-live, post-launch monitoring | 120 | Production site live |

### 6.4 Hours by Role per Phase

| Role | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Total Hours |
|------|---------|---------|---------|---------|-------------|
| Project Manager | 60 | 80 | 60 | 80 | **280** |
| Technical Lead | 100 | 160 | 80 | 100 | **440** |
| EDS Developer 1 | 140 | 280 | 160 | 100 | **680** |
| EDS Developer 2 | 100 | 280 | 160 | 60 | **600** |
| EDS Developer 3 (50%) | 40 | 80 | 60 | 40 | **220** |
| Content Strategist | 40 | 40 | 40 | 20 | **140** |
| Content Author 1 | 0 | 40 | 160 | 40 | **240** |
| Content Author 2 (50%) | 0 | 0 | 120 | 0 | **120** |
| QA Engineer | 0 | 0 | 0 | 200 | **200** |
| **Phase Totals** | **480** | **960** | **840** | **640** | **2,920** |

### 6.5 Milestones

| Milestone | Target Week | Hours to Date | Dependencies | Exit Criteria |
|-----------|-------------|---------------|--------------|---------------|
| Environment Ready | Week 1 | 120 | AEM access, GitHub | Repo created, local dev working |
| Design System Complete | Week 2 | 240 | Font licensing | All tokens in CSS, typography ready |
| Core Blocks Complete | Week 4 | 480 | Design approval | Header, footer, 5 hero variants |
| All Blocks Complete | Week 10 | 1,440 | Dev capacity | 35 blocks tested and documented |
| Content Migration 50% | Week 12 | 1,760 | Content availability | Landing pages + 25 stories |
| Content Migration 100% | Week 14 | 2,080 | Content approval | All 100 pages migrated |
| UAT Sign-off | Week 17 | 2,320 | Stakeholder time | All critical issues resolved |
| Go-Live | Week 18 | 2,560 | DNS, legal approval | Production site live |

### 6.6 Critical Path

```
Week 1-2: Environment + Design System (CRITICAL - blocks dependencies)
    ↓
Week 3-4: Header/Footer + Hero (CRITICAL - all pages need these)
    ↓
Week 5-10: Block Development (parallel tracks possible)
    ↓
Week 11-14: Content Migration (depends on all blocks)
    ↓
Week 15-17: Testing + UAT (depends on content complete)
    ↓
Week 18: Go-Live (depends on UAT sign-off)
```

**Critical Path Items:**
1. Font licensing must be resolved by Week 1
2. Header/Footer blocks gate all page development
3. Pipeline-table block is highest complexity - start Week 7
4. Content approvals needed by Week 10 for migration
5. DNS changes must be scheduled 2 weeks before go-live

---

## 7. Cost Estimation

### 7.1 Labor Costs - Detailed Breakdown

#### By Role
| Role | Rate/Hr | Hours | Total | Notes |
|------|---------|-------|-------|-------|
| Project Manager | $150 | 280 | $42,000 | Planning, coordination, reporting |
| Technical Lead | $200 | 440 | $88,000 | Architecture, code review, decisions |
| EDS Developer 1 (Senior) | $185 | 680 | $125,800 | Core blocks, complex components |
| EDS Developer 2 (Mid) | $165 | 600 | $99,000 | Standard blocks, templates |
| EDS Developer 3 (Junior, 50%) | $140 | 220 | $30,800 | Support, simple blocks |
| Content Strategist | $135 | 140 | $18,900 | IA, content mapping |
| Content Author 1 | $95 | 240 | $22,800 | Primary content migration |
| Content Author 2 (50%) | $95 | 120 | $11,400 | Secondary migration support |
| QA Engineer | $130 | 200 | $26,000 | Testing, accessibility |
| **Subtotal Labor** | | **2,920** | **$464,700** | |

#### By Phase
| Phase | Hours | Labor Cost | % of Total |
|-------|-------|------------|------------|
| Phase 1: Foundation | 480 | $82,000 | 18% |
| Phase 2: Development | 960 | $168,000 | 36% |
| Phase 3: Content Migration | 840 | $122,000 | 26% |
| Phase 4: Testing & Launch | 640 | $92,700 | 20% |
| **Total** | **2,920** | **$464,700** | 100% |

#### By Activity Type
| Activity | Hours | Cost | Description |
|----------|-------|------|-------------|
| Project Management | 280 | $42,000 | Planning, status, coordination |
| Architecture & Design | 200 | $40,000 | System design, technical decisions |
| Block Development | 1,200 | $204,000 | 35 blocks (avg 34 hrs/block) |
| Template Development | 160 | $27,200 | 8 page templates |
| Content Migration | 520 | $49,400 | 100 pages (avg 5 hrs/page) |
| Integration Work | 160 | $27,200 | Analytics, search, APIs |
| Testing & QA | 320 | $48,000 | Functional, accessibility, UAT |
| Documentation | 80 | $12,800 | Technical docs, runbooks |
| **Total** | **2,920** | **$464,700** | |

### 7.2 Block Development Hours Detail

| Block Category | Count | Avg Hrs/Block | Total Hours | Cost |
|----------------|-------|---------------|-------------|------|
| Navigation (header, footer, breadcrumb) | 3 | 50 | 150 | $27,000 |
| Hero variants | 5 | 30 | 150 | $27,000 |
| Card variants | 8 | 25 | 200 | $36,000 |
| Interactive (accordion, tabs, carousel, etc.) | 8 | 45 | 360 | $64,800 |
| Content blocks | 8 | 25 | 200 | $36,000 |
| Form blocks | 3 | 40 | 120 | $21,600 |
| **Total Blocks** | **35** | **34 avg** | **1,180** | **$212,400** |

*Note: Hours include development, styling, testing, and documentation per block*

### 7.3 Additional Costs

| Item | Cost | Frequency | Annual Cost | Notes |
|------|------|-----------|-------------|-------|
| Adobe EDS Licensing | TBD | Annual | TBD | Per Adobe enterprise agreement |
| Font Licensing (F37 Lineca) | $8,000 | One-time | $8,000 | Web font license for enterprise |
| Search Service (Algolia) | $600/mo | Monthly | $7,200 | If implementing site search |
| Image CDN (optional) | $200/mo | Monthly | $2,400 | If using external image optimization |
| SSL Certificate | Included | - | $0 | Included with EDS |
| **Subtotal Additional** | | | **$17,600** | First year |

### 7.4 Contingency & Risk Buffer

| Contingency Type | Base Amount | % | Buffer Amount |
|------------------|-------------|---|---------------|
| Scope contingency | $464,700 | 10% | $46,470 |
| Technical risk buffer | $212,400 | 15% | $31,860 |
| Schedule buffer | - | 2 weeks | Included in timeline |
| **Total Contingency** | | | **$78,330** |

### 7.5 Total Cost Summary

| Category | Amount |
|----------|--------|
| Labor (2,920 hours) | $464,700 |
| Additional Costs (Year 1) | $17,600 |
| Contingency (15%) | $78,330 |
| **Project Total** | **$560,630** |

#### Cost Range Scenarios
| Scenario | Hours | Cost | Notes |
|----------|-------|------|-------|
| **Optimistic** | 2,400 | $425,000 | No major issues, experienced team |
| **Expected** | 2,920 | $560,000 | Planned estimate with contingency |
| **Conservative** | 3,500 | $675,000 | Complex issues, scope additions |

*Note: Estimates based on blended agency rates. Internal team costs may vary significantly.*

---

## 8. Risk Assessment

### 8.1 Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content approval delays | High | High | Early stakeholder engagement, phased reviews |
| Complex interactive components | Medium | High | Technical spike early, fallback options |
| Font licensing issues | Medium | Medium | Identify alternatives early |
| Scope creep | High | Medium | Strict change control process |
| Resource availability | Medium | Medium | Cross-training, backup resources |
| Performance issues | Low | High | Early performance testing |
| Third-party integrations | Medium | Medium | Integration testing phase |
| Accessibility compliance | Medium | High | WCAG audits throughout |

### 8.2 Key Assumptions

1. AbbVie provides timely content approvals
2. Existing video hosting remains accessible
3. No major redesign required (visual refresh acceptable)
4. Analytics configuration provided by AbbVie
5. Legal/compliance review integrated into timeline
6. No internationalization required in initial scope

---

## 9. Success Criteria

### 9.1 Technical Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |
| Core Web Vitals (all) | Pass |
| Cross-browser compatibility | Chrome, Safari, Firefox, Edge |
| Mobile responsiveness | 100% pages |

### 9.2 Business Success Metrics

| Metric | Target |
|--------|--------|
| Page load time improvement | > 30% |
| Content authoring time | < 50% of current |
| Time to publish | < 5 minutes |
| Uptime SLA | 99.9% |

---

## 10. Appendices

### Appendix A: Current Site Technical Stack

- **Platform:** Adobe Experience Manager (AEM)
- **CDN:** Akamai (assumed)
- **Analytics:** Adobe Analytics
- **Video:** Custom/third-party hosting
- **Forms:** AEM Forms
- **Search:** Custom implementation

### Appendix B: Page URL Inventory

See attached spreadsheet for complete URL inventory.

### Appendix C: Block Component Specifications

Detailed specifications to be developed during Phase 1.

### Appendix D: Content Migration Mapping

Content-to-template mapping to be developed during discovery.

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Feb 2026 | Migration Team | Initial document |

---

*This migration plan is a living document and will be updated as the project progresses.*
