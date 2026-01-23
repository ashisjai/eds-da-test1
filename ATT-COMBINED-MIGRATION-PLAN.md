# AT&T Business & FirstNet - Combined EDS Migration Plan

## Executive Summary

This document outlines the comprehensive migration plan for migrating both **AT&T Business (business.att.com)** and **FirstNet (firstnet.com)** websites to AEM Edge Delivery Services (EDS) with Universal Editor (UE).

### Combined Metrics

| Metric | AT&T Business | FirstNet | Combined | With Synergies |
|--------|---------------|----------|----------|----------------|
| **Total Pages** | ~749 | ~700 | **~1,449** | ~1,449 |
| **Page Templates** | 12 | 10 | 22 | **14** (shared) |
| **Unique Blocks** | 68 (consolidated) | 58 (consolidated) | 126 | **96** (after reuse) |
| **Block Variations** | 117 original | 106 original | 223 original | consolidated |
| **Shared Blocks** | - | - | - | **30** (built once) |
| **Base Effort (hrs)** | 2,755 | 3,205 | 5,960 | **4,392** |
| **With 20% Contingency** | 3,306 | 3,846 | 7,152 | **5,270** |
| **Duration** | 14-18 weeks | 22-26 weeks | 36-44 weeks | **30-36 weeks** |
| **Team Size** | 5-7 | 6-8 | 11-15 | **8-10** |
| **Cost Estimate** | $326K-$435K | $416K-$558K | $930K-$1.18M | **$673K-$882K** |

### Synergy Savings
- **Effort Savings:** ~1,568 hours (26% reduction)
- **Duration Savings:** 6-8 weeks (parallel execution)
- **Cost Savings:** ~$257K-$298K (26% reduction)

---

## Site Overview

### AT&T Business (business.att.com)

| Category | Page Count |
|----------|------------|
| Homepage | 1 |
| Portfolio Pages | 9 |
| Product Pages | ~150 |
| Category Pages | ~75 |
| Industry Pages | ~14 |
| Business Solutions | ~10 |
| Learn - Content/Articles | ~300 |
| Learn - Customer Stories | ~112 |
| Support Pages | ~60 |
| Offers/Deals | ~37 |
| Regional/Areas | ~15 |
| Core Navigation | ~15 |
| **TOTAL** | **~749** |

### FirstNet (firstnet.com)

| Category | Page Count |
|----------|------------|
| Homepage & Main Pages | 5 |
| Power of FirstNet | 10 |
| Coverage | 11 |
| Rate Plans | 4 |
| Devices - Phones | ~175 |
| Devices - Tablets/Other | ~105 |
| Industry Solutions | ~70 |
| Apps | ~56 |
| Community - News/Blogs | ~140 |
| Mission Critical | 15 |
| Support/Help | ~105 |
| Core Pages | ~49 |
| **TOTAL** | **~700** |

---

## Combined Page Inventory

### Priority Distribution

| Priority | AT&T Business | FirstNet | Combined |
|----------|---------------|----------|----------|
| **P0** (Must Have) | ~100 | ~150 | **~250** |
| **P1** (Should Have) | ~350 | ~300 | **~650** |
| **P2** (Nice to Have) | ~299 | ~250 | **~549** |
| **TOTAL** | **~749** | **~700** | **~1,449** |

### Page Type Comparison

| Page Type | AT&T Business | FirstNet | Notes |
|-----------|---------------|----------|-------|
| Homepage | 1 | 5 | Different layouts |
| Product/Device Pages | ~150 | ~280 | FirstNet device-heavy |
| Industry/Solution Pages | ~24 | ~70 | Similar structure |
| Article/Content Pages | ~412 | ~140 | AT&T content-heavy |
| Support Pages | ~60 | ~105 | FirstNet more comprehensive |
| Offer Pages | ~37 | ~30 | Similar structure |
| Core/Landing Pages | ~65 | ~70 | Similar structure |

---

## Shared Components & Synergies

### Block Reusability Analysis

**Consolidated Block Counts:**
- AT&T Business: **68 consolidated blocks** (from 117 original variations)
- FirstNet: **58 consolidated blocks** (from 106 original variations)
- **Combined Total:** 126 blocks
- **Truly Shared (built once):** 30 blocks
- **Effective Unique Blocks:** 96 blocks (66 AT&T-only/unique + 30 shared)

| Block Category | AT&T Business | FirstNet | Shared Blocks | Reuse % | Hours Saved |
|----------------|---------------|----------|---------------|---------|-------------|
| Header/Navigation | 2 blocks | 3 blocks | 2 (Quick Links, Anchor Nav) | 80% | 32 hrs |
| Footer | 1 block | 1 block | 1 (Footer) | 85% | 24 hrs |
| Hero Blocks | 7 variants | 6 variants | 1 (Base Hero Component) | 65% | 48 hrs |
| Card Carousels | 4 blocks | 4 blocks | 3 (Offer, Product, Story Cards) | 75% | 72 hrs |
| Feature/Value Props | 2 blocks | 3 blocks | 2 (Feature Grid, Value Props) | 70% | 40 hrs |
| Form Blocks | 4 blocks | 3 blocks | 2 (Email Sub, Form Base) | 55% | 36 hrs |
| FAQ/Accordion | 3 blocks | 2 blocks | 1 (Accordion Base) | 90% | 32 hrs |
| CTA/Promo Banners | 5 blocks | 4 blocks | 3 (Promo, Contact CTA, Banner) | 80% | 56 hrs |
| Table/Comparison | 3 blocks | 3 blocks | 2 (Comparison, Data Table) | 70% | 40 hrs |
| Article/Content | 8 blocks | 3 blocks | 2 (Article Card, Content Block) | 55% | 36 hrs |
| Support Blocks | 6 blocks | 4 blocks | 2 (Support Grid, Contact Cards) | 65% | 40 hrs |
| Video Blocks | 2 blocks | 1 block | 1 (Video Embed) | 85% | 24 hrs |
| Industry/Solution | 3 blocks | 4 blocks | 2 (Solution Cards, Image+Text) | 55% | 32 hrs |
| Customer Story | 3 blocks | 2 blocks | 2 (Stats Block, Story Card) | 75% | 28 hrs |
| Offer-Specific | 4 blocks | 3 blocks | 2 (Offer Cards, Pricing Pattern) | 65% | 32 hrs |
| Link/Navigation | 4 blocks | 2 blocks | 1 (Link List) | 60% | 16 hrs |
| Miscellaneous | 7 blocks | 10 blocks | 1 (Error Page) | 40% | 12 hrs |
| **TOTALS** | **68 blocks** | **58 blocks** | **30 shared** | **~67% avg** | **~600 hrs** |

**Site-Specific Blocks (No Reuse):**
- **AT&T Business Only (~38 blocks):** RAI Lead Form, Check Availability, Article Tags/Share/Quote, Guided Courses, Business Center CTA, International Calling, Award Badges, etc.
- **FirstNet Only (~28 blocks):** Interactive Map, Device Gallery/Detail, Eligibility Forms, App Carousel/Features, Why FirstNet Section, FirstNet Promise, History Text, etc.

### Template Reusability

| Template | AT&T Business | FirstNet | Shared | Hours Saved |
|----------|---------------|----------|--------|-------------|
| homepage | Yes | Yes | No (different layouts) | 0 hrs |
| product/device | Yes | Yes | Partial (60% shared) | 24 hrs |
| category/industry | Yes | Yes | Yes (80% shared) | 32 hrs |
| article | Yes | Yes | Yes (90% shared) | 28 hrs |
| support | Yes | Yes | Yes (85% shared) | 24 hrs |
| offers | Yes | Yes | Yes (75% shared) | 20 hrs |
| landing | Yes | Yes | Yes (70% shared) | 16 hrs |
| regional/campaign | Yes | Yes | Partial (50% shared) | 12 hrs |

**Template Savings:** ~156 hours

### Integration Reusability

| Integration | AT&T Business | FirstNet | Shared | Hours Saved |
|-------------|---------------|----------|--------|-------------|
| Adobe Analytics | Yes | Yes | Yes (90% shared) | 40 hrs |
| Adobe Target | Yes | Yes | Yes (90% shared) | 40 hrs |
| Marketo/Eloqua | Yes | Yes | Yes (80% shared) | 32 hrs |
| Chat Widget | Yes | Yes | Yes (100% shared) | 24 hrs |
| Fastly CDN | Yes | Yes | Yes (100% shared) | 28 hrs |
| CI/CD Pipeline | Yes | Yes | Yes (100% shared) | 20 hrs |

**Integration Savings:** ~184 hours

---

## Combined Phase Breakdown

### Phase 1: Foundation & Shared Infrastructure
**Duration: 3-4 weeks | Effort: 320-400 hours**

| Task | Hours | Notes |
|------|-------|-------|
| Shared EDS project setup | 32 | Monorepo or multi-site |
| GitHub/SharePoint integration | 24 | Shared infrastructure |
| AEM Universal Editor setup | 48 | Single UE instance |
| Shared design tokens | 48 | Brand-specific overrides |
| Global styles framework | 40 | Theming support |
| Shared header component | 40 | Brand variants |
| Shared footer component | 32 | Brand variants |
| Navigation structure (both) | 32 | Separate navs |
| CI/CD pipeline | 24 | Shared deployment |
| **Phase 1 Total** | **320** | |

### Phase 2: Core Blocks Development (Shared)
**Duration: 6-7 weeks | Effort: 800-950 hours**

| Task | Hours | Notes |
|------|-------|-------|
| Hero block (all variants) | 96 | 9 total variants |
| Cards block (all variants) | 160 | 16 total variants |
| Carousel block | 80 | 6 variants |
| Tabs block | 48 | 5 variants |
| Accordion block | 36 | 4 variants |
| Form block | 100 | 7 variants |
| CTA-banner block | 48 | 6 variants |
| Table block | 60 | 7 variants |
| Video block | 36 | 4 variants |
| Breadcrumb block | 16 | Shared |
| Columns block | 20 | Shared |
| Fragment support | 24 | Shared |
| UE component models | 80 | Both sites |
| Block documentation | 40 | Combined docs |
| QA & testing | 64 | Both sites |
| **Phase 2 Total** | **908** | |

### Phase 3: Site-Specific Blocks
**Duration: 3-4 weeks | Effort: 360-440 hours**

#### AT&T Business Specific
| Task | Hours |
|------|-------|
| Promo-banner block | 48 |
| Link-list block | 32 |
| Search-results block | 52 |
| RAI form integration | 40 |
| AT&T-specific UE config | 32 |
| **AT&T Subtotal** | **204** |

#### FirstNet Specific
| Task | Hours |
|------|-------|
| Icon-nav block | 36 |
| Device-gallery block | 60 |
| Value-props block | 40 |
| Eligibility form | 48 |
| FirstNet-specific UE config | 32 |
| **FirstNet Subtotal** | **216** |

**Phase 3 Total: 420 hours**

### Phase 4: Template Development
**Duration: 4-5 weeks | Effort: 520-640 hours**

#### Shared Templates
| Template | Hours | Sites |
|----------|-------|-------|
| Article template | 32 | Both |
| Support template | 28 | Both |
| Category/Industry template | 36 | Both |
| Offers template | 32 | Both |
| Landing template | 32 | Both |
| **Shared Subtotal** | **160** |

#### AT&T Business Templates
| Template | Hours |
|----------|-------|
| Homepage | 40 |
| Portfolio | 28 |
| Product | 36 |
| Regional | 20 |
| Partner | 20 |
| **AT&T Subtotal** | **144** |

#### FirstNet Templates
| Template | Hours |
|----------|-------|
| Homepage | 40 |
| Device | 56 |
| Plans | 32 |
| Feature/Mission Critical | 32 |
| Coverage | 28 |
| Sign-up | 32 |
| **FirstNet Subtotal** | **220** |

**Phase 4 Total: 524 hours**

### Phase 5: Integrations
**Duration: 4-5 weeks | Effort: 440-540 hours**

#### Shared Integrations
| Integration | Hours | Notes |
|-------------|-------|-------|
| Adobe Analytics | 48 | Both sites |
| Adobe Target | 48 | Both sites |
| Marketo/Eloqua forms | 48 | Both sites |
| Chat widget | 28 | Both sites |
| Fastly CDN | 32 | Both sites |
| Performance optimization | 40 | Both sites |
| **Shared Subtotal** | **244** |

#### AT&T Business Specific
| Integration | Hours |
|-------------|-------|
| ChiliPiper calendar | 28 |
| Search (Coveo/Algolia) | 44 |
| **AT&T Subtotal** | **72** |

#### FirstNet Specific
| Integration | Hours |
|-------------|-------|
| Eligibility API | 48 |
| LocalControl/SSO | 56 |
| **FirstNet Subtotal** | **104** |

**Phase 5 Total: 420 hours**

### Phase 6: Content Migration
**Duration: 8-10 weeks | Effort: 1,100-1,400 hours**

#### Import Script Development
| Task | Hours |
|------|-------|
| Shared import framework | 80 |
| AT&T Business parsers | 60 |
| FirstNet device parsers | 80 |
| **Script Subtotal** | **220** |

#### AT&T Business Migration
| Wave | Pages | Hours |
|------|-------|-------|
| Wave 1 (P0) | ~100 | 84 |
| Wave 2 (P1) | ~300 | 177 |
| Wave 3 (P2) | ~300 | 64 |
| Asset migration | - | 32 |
| Redirects (700+) | - | 32 |
| QA validation | - | 48 |
| **AT&T Subtotal** | **~700** | **437** |

#### FirstNet Migration
| Wave | Pages | Hours |
|------|-------|-------|
| Wave 1 (P0) | ~220 | 159 |
| Wave 2 (P1) | ~450 | 161 |
| Wave 3 (P2) | ~520 | 138 |
| Asset migration | - | 48 |
| Redirects (1,200+) | - | 48 |
| QA validation | - | 72 |
| **FirstNet Subtotal** | **~1,187** | **626** |

**Phase 6 Total: 1,283 hours**

### Phase 7: Testing & Launch
**Duration: 4-5 weeks | Effort: 480-580 hours**

| Task | Hours | Notes |
|------|-------|-------|
| Cross-browser testing | 56 | Both sites |
| Mobile/responsive testing | 64 | Both sites |
| Accessibility (WCAG 2.1) | 72 | Both sites |
| Performance (Lighthouse) | 48 | Both sites |
| SEO validation | 40 | Both sites |
| Security testing | 40 | Both sites |
| UAT support | 56 | Both sites |
| Bug fixes & refinements | 80 | Both sites |
| DNS cutover planning | 16 | Both sites |
| Go-live execution | 16 | Staged rollout |
| Post-launch monitoring | 32 | Both sites |
| **Phase 7 Total** | **520** |

---

## Total Effort Summary

### Without Synergies (Sequential)

| Phase | AT&T Business | FirstNet | Total |
|-------|---------------|----------|-------|
| Foundation | 248 | 264 | 512 |
| Core Blocks | 704 | 740 | 1,444 |
| Templates | 416 | 464 | 880 |
| Secondary Blocks | 304 | 272 | 576 |
| Integrations | 284 | 368 | 652 |
| Content Migration | 515 | 745 | 1,260 |
| Testing & Launch | 284 | 352 | 636 |
| **TOTAL** | **2,755** | **3,205** | **5,960** |

### With Synergies (Combined)

| Phase | Hours | Savings | Savings Source |
|-------|-------|---------|----------------|
| Foundation & Shared Infrastructure | 320 | 192 | Shared repo, CI/CD, design tokens |
| Core Blocks (30 Shared) | 600 | 844 | Build shared blocks once (~600 hrs saved) |
| Site-Specific Blocks (66 unique) | 760 | -184 | ATT: 38 blocks, FN: 28 blocks |
| Template Development | 524 | 356 | 8 shared templates (~156 hrs) |
| Integrations | 468 | 184 | Analytics, CDN, chat shared |
| Content Migration | 1,200 | 60 | Shared import framework |
| Testing & Launch | 520 | 116 | Shared test infrastructure |
| **TOTAL** | **4,392** | **1,568** | |

**With 20% contingency: 5,270 hours**

### Synergy Breakdown

| Category | Hours Saved | Details |
|----------|-------------|---------|
| Shared Blocks (30 blocks) | ~600 hrs | Hero, Carousels, Forms, FAQ, CTAs, Tables, etc. |
| Shared Templates (8 templates) | ~156 hrs | Article, Support, Category, Offers, Landing, etc. |
| Shared Integrations | ~184 hrs | Analytics, Target, CDN, CI/CD |
| Shared Infrastructure | ~192 hrs | Design tokens, repo setup, staging |
| **Total Synergy Savings** | **~1,132 hrs** | |

### Savings Summary

| Metric | Sequential | Combined | Savings |
|--------|------------|----------|---------|
| Total Hours | 5,960 | 4,392 | **1,568 hrs (26%)** |
| With Contingency | 7,152 | 5,270 | **1,882 hrs** |
| Duration | 36-44 weeks | 30-36 weeks | **6-8 weeks** |
| Team Size | 11-15 FTEs | 8-10 FTEs | **3-5 FTEs** |

---

## Combined Timeline

```
Week:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36
       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
P1:    ████████████                                                                                                Foundation (3-4 wks)
P2:            ████████████████████████████                                                                        Shared Blocks (6-7 wks)
P3:                        ████████████████████                                                                    Site-Specific (4-5 wks)
P4:                                ████████████████████                                                            Templates (4-5 wks)
P5:                                        ████████████████████                                                    Integrations (4-5 wks)
P6-ATT:                                            ████████████████████████████████                                AT&T Migration (8 wks)
P6-FN:                                                    ████████████████████████████████████████                 FirstNet Migration (10 wks)
P7:                                                                                ████████████████████            Testing/Launch (4-5 wks)
       |______Shared Foundation______|__Shared Blocks__|___Parallel Migration___|__QA & Launch___|
```

### Milestone Schedule

| Milestone | Week | Description |
|-----------|------|-------------|
| Project Kickoff | 1 | Team onboarding, environment setup |
| Foundation Complete | 4 | Shared infrastructure ready |
| Shared Blocks Complete | 11 | 30 shared blocks functional |
| Site-Specific Blocks | 16 | All 96 blocks ready for both sites |
| Templates Complete | 21 | All 14 page templates ready |
| Integrations Complete | 25 | All third-party integrations |
| AT&T Business P0 Launch | 28 | AT&T Business core pages live |
| FirstNet P0 Launch | 30 | FirstNet core pages live |
| Full Migration Complete | 34 | All 1,449 pages migrated |
| Final Launch | 36 | Both sites fully launched |

---

## Resource Requirements

### Combined Team Composition

| Role | Count | Phases | Allocation |
|------|-------|--------|------------|
| Program Manager | 1 | All | 100% |
| Tech Lead / Architect | 1 | All | 100% |
| EDS/Frontend Developer | 4 | 1-5, 7 | 100% |
| UE Configuration Specialist | 1 | 2-4 | 100% |
| Content Migration Lead | 1 | 6 | 100% |
| Content Migration Specialist | 2 | 6 | 100% |
| QA Lead | 1 | All | 100% |
| QA Engineer | 1 | All | 75% |
| DevOps Engineer | 1 | 1, 5, 7 | 50% |
| **TOTAL** | **14** | | |

**Effective FTEs: 8-10**

### Skill Matrix

| Skill | Required For | Team Members |
|-------|--------------|--------------|
| EDS/Franklin Development | Blocks, Templates | 4 Developers |
| Universal Editor | UE Configuration | 1 Specialist + Developers |
| Adobe Analytics/Target | Integrations | 1 Developer |
| AT&T APIs (SSO, LocalControl) | FirstNet Integrations | 1 Developer |
| Content Migration | Import Scripts | 1 Lead + 2 Specialists |
| QA/Testing | All Phases | 1 Lead + 1 Engineer |

---

## Cost Estimation

### Combined Cost Breakdown (With Synergies)

| Resource Type | Hours | Rate Range | Cost Range |
|---------------|-------|------------|------------|
| Program Manager | 350 | $150-175/hr | $52,500-61,250 |
| Tech Lead | 550 | $150-200/hr | $82,500-110,000 |
| Senior Developer (×3) | 1,800 | $125-175/hr | $225,000-315,000 |
| UE Specialist | 350 | $125-150/hr | $43,750-52,500 |
| Content Lead | 280 | $100-125/hr | $28,000-35,000 |
| Content Specialist (×2) | 500 | $75-100/hr | $37,500-50,000 |
| QA Lead | 350 | $125-150/hr | $43,750-52,500 |
| QA Engineer | 280 | $100-125/hr | $28,000-35,000 |
| DevOps | 160 | $125-150/hr | $20,000-24,000 |
| **BASE TOTAL** | **4,620** | | **$561,000-735,250** |
| Contingency (20%) | 924 | - | $112,200-147,050 |
| **GRAND TOTAL** | **5,544** | | **$673,200-882,300** |

### Cost Comparison

| Approach | Hours | Cost Range | Notes |
|----------|-------|------------|-------|
| Sequential (separate projects) | 7,152 | $930K-$1.18M | Full teams for each site |
| Combined (with synergies) | 5,270 | $673K-$882K | Shared resources |
| **Savings** | **1,882 hrs** | **$257K-$298K** | **~26% reduction** |

### Cost Per Page

| Metric | Sequential | Combined |
|--------|------------|----------|
| Total Pages | 1,449 | 1,449 |
| Cost per Page | $642-$814 | $465-$609 |
| Savings per Page | - | $177-$205 |

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Resource contention between sites | High | Medium | Clear sprint allocation, dedicated leads |
| Scope creep from stakeholders | Medium | High | Fixed scope phases, change control |
| Integration complexity | Medium | High | Early POCs, parallel development |
| Brand consistency challenges | Medium | Medium | Shared design system with overrides |
| Timeline slippage | Medium | High | Buffer in schedule, phased delivery |
| Content volume underestimated | Medium | Medium | Automated import, bulk tools |
| UE configuration complexity | Medium | Medium | Dedicated UE specialist |
| Third-party API delays | Medium | High | Fallback options, early testing |

---

## Success Criteria

| Metric | Target | AT&T Business | FirstNet |
|--------|--------|---------------|----------|
| Lighthouse Performance | > 90 | Yes | Yes |
| Lighthouse Accessibility | > 95 | Yes | Yes |
| Page Load Time (LCP) | < 2.5s | Yes | Yes |
| Content Migration Accuracy | > 99% | Yes | Yes |
| Zero Critical Bugs at Launch | Yes | Yes | Yes |
| Author Training Completion | 100% | Yes | Yes |
| Redirect Coverage | > 99.5% | Yes | Yes |

---

## Governance & Communication

### Steering Committee
- Monthly executive reviews
- Go/No-go decisions for launches
- Budget and scope approvals

### Project Cadence
- Daily standups (15 min)
- Weekly sprint reviews
- Bi-weekly stakeholder demos
- Monthly steering committee

### Decision Making
| Decision Type | Authority |
|---------------|-----------|
| Technical architecture | Tech Lead |
| Sprint priorities | Program Manager |
| Scope changes | Steering Committee |
| Launch approval | Steering Committee |

---

## Appendix A: Combined Block Inventory

### AT&T Business Blocks (68 Consolidated)

| Category | Block Type | Variations | Complexity |
|----------|-----------|------------|------------|
| **Global** | Quick Links Carousel | 1 | Medium |
| | Anchor Navigation | Multiple Pages | Medium |
| **Hero** | Hero Block | 7 (Homepage Offer Cards, Homepage Video, Product, Portfolio/Industry, Content, Regional, 404) | High |
| **Pricing** | Pricing Cards Carousel | Product Pages | High |
| **Features** | Feature Cards Grid | Multiple Pages | Medium |
| | Value Props Grid | Portfolio/Landing | Medium |
| **Carousels** | Product/Service Cards Carousel | Multiple Pages | High |
| | Offer Cards Carousel | Multiple Pages | High |
| | Resource/Insights Cards | Multiple Pages | Medium |
| | Story Cards Overlay | Multiple Pages | Medium |
| **Forms** | Lead Form (RAI) | Multiple Pages | High |
| | Check Availability Form | Portfolio | Medium |
| | Email Subscription Form | Multiple Pages | Medium |
| | Search Block | 404/Support | Medium |
| **FAQ** | FAQ Accordion | Multiple Pages | Medium |
| | Support Tabs Accordion | Support | Medium |
| | Features Collapsible List | Products | Medium |
| **CTA** | Promo Banner | Multiple Pages | Low |
| | Full-width Promo Banner | Multiple Pages | Medium |
| | Contact CTA Banner | Multiple Pages | Medium |
| | Multi-Button CTA | Portfolios | Low |
| | Current Customer CTA | Landing Pages | Low |
| **Trust** | Guarantee Checklist | Multiple Pages | Low |
| | Award Badge | Multiple Pages | Low |
| | Customer Testimonials Carousel | Why AT&T | Medium |
| **Tables** | Comparison Table | Multiple Pages | High |
| | Benefits Table | Category Pages | Medium |
| | Use Cases Table | Business Solutions | Medium |
| **Content** | Featured Article Block | Learn Hub | Medium |
| | Latest Articles Grid | Learn Hub | Medium |
| | Article Header with Byline | Learn Articles | Low |
| | Article Tags | Learn Articles | Low |
| | Shareable Quote Block | Learn Articles | Low |
| | Social Share Block | Learn Articles | Low |
| | More Stories Grid | Learn Articles | Medium |
| | Top Topics Carousel | Learn Hub | Medium |
| **Support** | Support Quick Actions Grid | Support Pages | Medium |
| | Support Portal Cards | Support | Medium |
| | Resource Cards (Blue) | Support | Medium |
| | Guided Courses Block | Support | Medium |
| | Contact Tables | Contact | Medium |
| | Support Contact Block | Products | Low |
| **Industry** | Solution Link Cards | Industry Pages | Medium |
| | Image + Text Split | Multiple Pages | Medium |
| | Partner Cards Grid | Partner Solutions | Medium |
| **Stories** | Highlights/Stats Block | Customer Stories | Medium |
| | About Section | Customer Stories | Medium |
| | Case Study Stats Block | Portfolios | Medium |
| **Video** | Video Embed Block | Portfolios | Medium |
| | Video Content Cards | Portfolios | Medium |
| **Links** | Link List Block | Multiple Pages | Low |
| | Additional Resources Grid | Why AT&T | Low |
| | Helpful Links Cards | 404 | Low |
| | Solutions Sidebar | Learn Articles | Low |
| **Offers** | Featured Offers Cards | Offers | Medium |
| | Category Offers Carousel | Offers | Medium |
| | Referral Program Block | Offers | Low |
| | Risk-Free Trial Block | Multiple Pages | Low |
| **Misc** | Complete Solution Promo | Bundles | Medium |
| | Related Products Cards | Business Solutions | Medium |
| | International Calling Block | Phone Product | Low |
| | Contact Options 2-Column | Why AT&T | Low |
| | Business Center CTA Card | Business Solutions | Low |
| | Data-driven Insights Cards | 5G Portfolio | Medium |

### FirstNet Blocks (58 Consolidated)

| Category | Block Type | Variations | Complexity |
|----------|-----------|------------|------------|
| **Global** | Header Navigation | Global | High |
| | Footer | Global | Medium |
| | Email Subscription Form | Global | Medium |
| **Hero** | Hero Block | 6 (Homepage, Standard, Product, Industry, Conversion, Device Detail) | High |
| **Navigation** | Quick Links Carousel | Multiple Pages | Medium |
| | Anchor Navigation | Multiple Pages | Medium |
| **Products** | Product Cards Grid | Device Categories | High |
| | Product Cards by Brand | Brand Grouping | Medium |
| | Industry Category Cards | Industry | Medium |
| **Offers** | Offer Cards Carousel | Multiple Pages | High |
| | Pricing Cards | Plans | High |
| | Plan Comparison | Offers | Medium |
| **Features** | Value Props Section | Multiple Pages | Medium |
| | Benefits Grid/Row | Multiple Pages | Medium |
| | Connectivity Ecosystem | Coverage | Medium |
| **FAQ** | FAQ Accordion | Multiple Pages | Medium |
| | Help Accordion | Help Pages | Medium |
| **Stories** | Customer Stories Carousel | Multiple Pages | High |
| | Case Study Feature | Multiple Pages | Medium |
| **CTA** | Contact CTA Banner | Multiple Pages | Medium |
| | Promo Banner | Multiple Pages | Low |
| | Download CTA Banner | Apps | Low |
| **Conversion** | Get Started Cards | Multiple Pages | Medium |
| | Eligibility Cards | Conversion | Medium |
| **Content** | News/Article Cards | Multiple Pages | Medium |
| | Article Content Block | News Articles | Medium |
| | Blogs/Videos Tabs | Community | Medium |
| **Support** | Popular Topics Grid | Help | Medium |
| | Help Links Cards | FAQ | Low |
| | Contact Cards Grid | Contact | Medium |
| | Need Help Section | Eligibility | Low |
| **Apps** | App Carousel | Apps | High |
| | App Feature Section | Apps | Medium |
| | Developer Program Section | Apps | Low |
| **Industry** | Why FirstNet Section | Industry Detail | Medium |
| | Appreciation Section | Industry Detail | Medium |
| | Customer Quote Block | Industry Detail | Low |
| | Features Carousel | Industry Detail | Medium |
| **Tables** | Comparison Image | Why FirstNet | Low |
| | Impacts Table | Eligibility | High |
| | Document Cards | Eligibility | Medium |
| **Specialty** | Interactive Map | Coverage | High |
| | Video Feature Block | Power | Medium |
| | History Text Section | Power | Low |
| | Audience Cards | Why FirstNet | Medium |
| | FirstNet Promise | Why FirstNet | Medium |
| | Solutions Product Cards | Mission Critical | Medium |
| **Legal** | Legal Disclaimers | Multiple Pages | Low |
| | PDF Download Links | Plans | Low |
| | Shop Now CTA | Device Detail | Low |
| | Compatibility Link | Devices | Low |
| | Warning Note | Eligibility | Low |
| **Error** | Error Page Content | 404 | Low |
| | Recommended Pages List | 404 | Low |

### Combined Totals

| Metric | AT&T Business | FirstNet | Combined |
|--------|---------------|----------|----------|
| **Consolidated Blocks** | 68 | 58 | **126** |
| **Original Variations** | 117 | 106 | **223** |
| **Shared/Reusable** | ~45 | ~35 | **~75** (with synergies) |
| **Site-Specific** | ~23 | ~23 | **~46** |

---

## Appendix B: Combined Page Inventory Summary

### AT&T Business Pages (~749)

| Category | % of Total | Est. Count |
|----------|------------|------------|
| Content/Articles | 40% | ~300 |
| Product Pages | 20% | ~150 |
| Customer Stories | 15% | ~112 |
| Industry/Category | 10% | ~75 |
| Support/Help | 8% | ~60 |
| Landing/Promo | 5% | ~37 |
| Core Navigation | 2% | ~15 |
| **TOTAL** | **100%** | **~749** |

### FirstNet Pages (~700)

| Category | % of Total | Est. Count |
|----------|------------|------------|
| Devices (Phones) | 25% | ~175 |
| Devices (Tablets/Other) | 15% | ~105 |
| Community/News | 20% | ~140 |
| Help/Support | 15% | ~105 |
| Industry Solutions | 10% | ~70 |
| Apps | 8% | ~56 |
| Core Pages | 7% | ~49 |
| **TOTAL** | **100%** | **~700** |

### Combined Totals

| Priority | AT&T Business | FirstNet | Combined |
|----------|---------------|----------|----------|
| P0 (Must Have) | ~100 | ~150 | **~250** |
| P1 (Should Have) | ~350 | ~300 | **~650** |
| P2 (Nice to Have) | ~299 | ~250 | **~549** |
| **TOTAL** | **~749** | **~700** | **~1,449** |

---

## Appendix C: Detailed URL Lists

### AT&T Business - Key Pages

See [ATT-BUSINESS-PAGE-INVENTORY.md](./ATT-BUSINESS-PAGE-INVENTORY.md) for complete URL listing including:
- 9 Portfolio pages
- 75+ Product pages
- 25+ Category pages
- 200+ Article pages
- 50+ Regional pages
- 60+ Partner pages

### FirstNet - Key Pages

See [FIRSTNET-PAGE-INVENTORY.md](./FIRSTNET-PAGE-INVENTORY.md) for complete URL listing including:
- 198 Phone pages
- 88 Tablet pages
- 21 Smart Device pages
- 39 Connected Device pages
- 90+ Industry Solution pages
- 180+ News articles

---

## Appendix D: Integration Matrix

| Integration | AT&T Business | FirstNet | Shared Code |
|-------------|---------------|----------|-------------|
| Adobe Analytics | ✓ | ✓ | 90% |
| Adobe Target | ✓ | ✓ | 90% |
| Marketo Forms | ✓ | ✓ | 80% |
| Eloqua Forms | ✓ | ✓ | 80% |
| ChiliPiper | ✓ | - | 0% |
| Coveo/Algolia Search | ✓ | - | 0% |
| Chat Widget | ✓ | ✓ | 100% |
| Feedback Widget | - | ✓ | 0% |
| LocalControl | - | ✓ | 0% |
| AT&T SSO | - | ✓ | 0% |
| Eligibility API | - | ✓ | 0% |
| Fastly CDN | ✓ | ✓ | 100% |

---

## Next Steps

### Immediate Actions (Week 1-2)
1. Stakeholder alignment meeting
2. Team assembly and onboarding
3. Environment setup
4. Design system review
5. Integration API access requests

### Discovery Phase (Week 2-4)
1. Complete content audit
2. Integration POCs
3. UE configuration planning
4. Migration script prototypes
5. Risk mitigation planning

### Sprint 0 (Week 4-5)
1. Technical spikes
2. Architecture finalization
3. Shared component library setup
4. CI/CD pipeline configuration
5. First block prototypes

---

*Document Version: 2.2*
*Combined Total Pages: ~1,449*
*AT&T Business: 68 consolidated blocks (from 117 variations)*
*FirstNet: 58 consolidated blocks (from 106 variations)*
*Shared Blocks: 30 (built once for both sites)*
*Effective Unique Blocks: 96*
*Combined Base Effort: 4,392 hours*
*Combined Total Effort: 5,270 hours (with 20% contingency)*
*Synergy Savings: ~1,568 hours (26%)*
*Combined Duration: 30-36 weeks*
*Cost Estimate: $673K-$882K (with synergies)*
*Cost Savings: $257K-$298K vs sequential approach*
*Created: January 2026*
*Last Updated: January 2026*
