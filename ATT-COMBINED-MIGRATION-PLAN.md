# AT&T Business & FirstNet - Combined EDS Migration Plan

## Executive Summary

This document outlines the comprehensive migration plan for migrating both **AT&T Business (business.att.com)** and **FirstNet (firstnet.com)** websites to AEM Edge Delivery Services (EDS) with Universal Editor (UE).

### Combined Metrics

| Metric | AT&T Business | FirstNet | Combined | With Synergies |
|--------|---------------|----------|----------|----------------|
| **Total Pages** | ~700 | ~1,187 | **~1,887** | ~1,887 |
| **Page Templates** | 12 | 12 | 24 | **18** (shared) |
| **Unique Blocks** | 25+ | 17+ | 42+ | **30** (shared) |
| **Base Effort (hrs)** | 2,616-3,240 | 3,264-3,984 | 5,880-7,224 | **5,200-6,400** |
| **Duration** | 14-18 weeks | 22-26 weeks | 36-44 weeks | **28-34 weeks** |
| **Team Size** | 5-7 | 6-8 | 11-15 | **8-10** |
| **Cost Estimate** | $326K-$435K | $416K-$558K | $742K-$993K | **$650K-$870K** |

### Synergy Savings
- **Effort Savings:** ~680-824 hours (12% reduction)
- **Duration Savings:** 8-10 weeks (parallel execution)
- **Cost Savings:** ~$92K-$123K

---

## Site Overview

### AT&T Business (business.att.com)

| Category | Page Count |
|----------|------------|
| Homepage | 1 |
| Portfolio Pages | 9 |
| Product Pages | 75+ |
| Category Pages | 25+ |
| Industry Pages | 15+ |
| Industry Solutions | 10+ |
| Business Solutions | 5 |
| Learn - Tech Advice | 100+ |
| Learn - Customer Stories | 50+ |
| Learn - Research Reports | 30+ |
| Learn - Top Voices | 20+ |
| Support Pages | 10+ |
| About/Resources | 10+ |
| Offers/Deals | 5+ |
| Small Business | 20+ |
| Regional/Areas | 50+ |
| Partner Solutions | 60+ |
| Explore Pages | 10+ |
| **TOTAL** | **~700** |

### FirstNet (firstnet.com)

| Category | Page Count |
|----------|------------|
| Homepage & Main Pages | 5 |
| Power of FirstNet | 10 |
| Coverage | 11 |
| Rate Plans | 4 |
| Devices - Phones | 198 |
| Devices - Tablets | 88 |
| Devices - Smart Devices | 21 |
| Devices - Connected Devices | 39 |
| Devices - Accessories | 25 |
| Industry Solutions | 90+ |
| Apps | 18 |
| Community - News | 180+ |
| Community - Videos/Events | 50+ |
| Community - Case Studies | 4+ |
| Mission Critical | 15+ |
| Support/Help | 60+ |
| Offers & Sign-Up | 30+ |
| Resources/Legal | 25+ |
| Campaigns | 50+ |
| **TOTAL** | **~1,187** |

---

## Combined Page Inventory

### Priority Distribution

| Priority | AT&T Business | FirstNet | Combined |
|----------|---------------|----------|----------|
| **P0** (Must Have) | ~100 | ~220 | **~320** |
| **P1** (Should Have) | ~300 | ~450 | **~750** |
| **P2** (Nice to Have) | ~300 | ~520 | **~820** |
| **TOTAL** | **~700** | **~1,187** | **~1,887** |

### Page Type Comparison

| Page Type | AT&T Business | FirstNet | Notes |
|-----------|---------------|----------|-------|
| Homepage | 1 | 5 | Different layouts |
| Product/Device Pages | 75+ | 371 | FirstNet device-heavy |
| Industry/Solution Pages | 30+ | 90+ | Similar structure |
| Article/Content Pages | 200+ | 280+ | Can share templates |
| Support Pages | 10+ | 60+ | FirstNet more comprehensive |
| Offer Pages | 5+ | 30+ | Similar structure |
| Regional/Campaign | 110+ | 50+ | AT&T Business more regional |

---

## Shared Components & Synergies

### Block Reusability Analysis

| Block | AT&T Business | FirstNet | Reuse % | Savings |
|-------|---------------|----------|---------|---------|
| header | Yes | Yes (simpler) | 60% | 22 hrs |
| footer | Yes | Yes | 70% | 25 hrs |
| hero | 5 variants | 4 variants | 75% | 48 hrs |
| cards | 8 variants | 8 variants | 80% | 96 hrs |
| carousel | 4 variants | 2 variants | 70% | 40 hrs |
| tabs | 2 variants | 3 variants | 80% | 29 hrs |
| accordion | 2 variants | 2 variants | 90% | 29 hrs |
| promo-banner | 3 variants | - | 0% | 0 hrs |
| form | 3 variants | 4 variants | 65% | 52 hrs |
| cta-banner | 3 variants | 3 variants | 85% | 37 hrs |
| link-list | 2 variants | - | 0% | 0 hrs |
| table | 3 variants | 4 variants | 75% | 36 hrs |
| video | 2 variants | 2 variants | 90% | 29 hrs |
| breadcrumb | 1 variant | 1 variant | 100% | 16 hrs |
| columns | 3 variants | 3 variants | 100% | 24 hrs |
| icon-nav | - | 2 variants | 0% | 0 hrs |
| device-gallery | - | 2 variants | 0% | 0 hrs |
| value-props | - | 2 variants | 50% | 20 hrs |
| **TOTAL BLOCK SAVINGS** | | | | **~503 hrs** |

### Template Reusability

| Template | AT&T Business | FirstNet | Shared |
|----------|---------------|----------|--------|
| homepage | Yes | Yes | No (different) |
| product/device | Yes | Yes | Partial (60%) |
| category/industry | Yes | Yes | Yes (80%) |
| article | Yes | Yes | Yes (90%) |
| support | Yes | Yes | Yes (85%) |
| offers | Yes | Yes | Yes (75%) |
| landing | Yes | Yes | Yes (70%) |
| regional/campaign | Yes | Yes | Partial (50%) |

**Template Savings:** ~120 hours

### Integration Reusability

| Integration | AT&T Business | FirstNet | Shared |
|-------------|---------------|----------|--------|
| Adobe Analytics | Yes | Yes | Yes (90%) |
| Adobe Target | Yes | Yes | Yes (90%) |
| Marketo/Eloqua | Yes | Yes | Yes (80%) |
| Chat Widget | Yes | Yes | Yes (100%) |
| Fastly CDN | Yes | Yes | Yes (100%) |
| CI/CD Pipeline | Yes | Yes | Yes (100%) |

**Integration Savings:** ~80 hours

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

| Phase | Hours | Savings |
|-------|-------|---------|
| Foundation & Shared Infrastructure | 320 | 192 |
| Core Blocks (Shared) | 908 | 536 |
| Site-Specific Blocks | 420 | 156 |
| Template Development | 524 | 356 |
| Integrations | 420 | 232 |
| Content Migration | 1,283 | -23 (more efficient) |
| Testing & Launch | 520 | 116 |
| **TOTAL** | **4,395** | **1,565** |

**With 20% contingency: 5,274 hours**

### Savings Summary

| Metric | Sequential | Combined | Savings |
|--------|------------|----------|---------|
| Total Hours | 5,960 | 4,395 | **1,565 hrs (26%)** |
| With Contingency | 7,152 | 5,274 | **1,878 hrs** |
| Duration | 36-44 weeks | 28-34 weeks | **8-10 weeks** |
| Team Size | 11-15 FTEs | 8-10 FTEs | **3-5 FTEs** |

---

## Combined Timeline

```
Week:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34
       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
P1:    ████████████                                                                                            Foundation (3-4 wks)
P2:            ████████████████████████████                                                                    Core Blocks (6-7 wks)
P3:                        ████████████████                                                                    Site-Specific (3-4 wks)
P4:                                ████████████████████                                                        Templates (4-5 wks)
P5:                                        ████████████████████                                                Integrations (4-5 wks)
P6-ATT:                                            ████████████████████████████████                            AT&T Migration (8 wks)
P6-FN:                                                    ████████████████████████████████████                 FirstNet Migration (10 wks)
P7:                                                                            ████████████████████            Testing/Launch (4-5 wks)
       |______Shared Foundation______|___ATT Wave 1___|___FN Wave 1___|__Wave 2__|__Wave 3__|_Launch_|
```

### Milestone Schedule

| Milestone | Week | Description |
|-----------|------|-------------|
| Project Kickoff | 1 | Team onboarding, environment setup |
| Foundation Complete | 4 | Shared infrastructure ready |
| Core Blocks Complete | 11 | All shared blocks functional |
| Site-Specific Blocks | 15 | All blocks ready for both sites |
| Templates Complete | 20 | All page templates ready |
| Integrations Complete | 24 | All third-party integrations |
| AT&T Business P0 Launch | 26 | AT&T Business core pages live |
| FirstNet P0 Launch | 28 | FirstNet core pages live |
| Full Migration Complete | 32 | All pages migrated |
| Final Launch | 34 | Both sites fully launched |

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

### Combined Cost Breakdown

| Resource Type | Hours | Rate Range | Cost Range |
|---------------|-------|------------|------------|
| Program Manager | 400 | $150-175/hr | $60,000-70,000 |
| Tech Lead | 680 | $150-200/hr | $102,000-136,000 |
| Senior Developer | 2,200 | $125-175/hr | $275,000-385,000 |
| UE Specialist | 400 | $125-150/hr | $50,000-60,000 |
| Content Lead | 320 | $100-125/hr | $32,000-40,000 |
| Content Specialist | 600 | $75-100/hr | $45,000-60,000 |
| QA Lead | 400 | $125-150/hr | $50,000-60,000 |
| QA Engineer | 320 | $100-125/hr | $32,000-40,000 |
| DevOps | 180 | $125-150/hr | $22,500-27,000 |
| **TOTAL** | **5,500** | | **$668,500-878,000** |

### Cost Comparison

| Approach | Cost Range | Notes |
|----------|------------|-------|
| Sequential (separate projects) | $742K-$993K | Full teams for each |
| Combined (with synergies) | $668K-$878K | Shared resources |
| **Savings** | **$74K-$115K** | **10-12%** |

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

| Block | Variants | AT&T | FirstNet | Complexity |
|-------|----------|------|----------|------------|
| header | 2 | Yes | Yes | Medium |
| footer | 2 | Yes | Yes | Medium |
| hero | 9 | 5 | 4 | High |
| cards | 16 | 8 | 8 | High |
| carousel | 6 | 4 | 2 | High |
| tabs | 5 | 2 | 3 | Medium |
| accordion | 4 | 2 | 2 | Medium |
| promo-banner | 3 | 3 | - | Medium |
| form | 7 | 3 | 4 | High |
| cta-banner | 6 | 3 | 3 | Medium |
| link-list | 2 | 2 | - | Low |
| table | 7 | 3 | 4 | Medium |
| video | 4 | 2 | 2 | Medium |
| quote | 2 | 2 | - | Low |
| stats | 2 | 2 | - | Low |
| icon-grid | 2 | 2 | - | Medium |
| breadcrumb | 1 | 1 | 1 | Low |
| search-results | 1 | 1 | - | High |
| related-content | 2 | 2 | - | Medium |
| social-share | 1 | 1 | - | Low |
| image-gallery | 1 | 1 | - | Medium |
| embed | 3 | 3 | - | Low |
| columns | 3 | 3 | 3 | Low |
| icon-nav | 2 | - | 2 | Medium |
| device-gallery | 2 | - | 2 | High |
| value-props | 2 | - | 2 | Medium |
| section-heading | 2 | - | 2 | Low |
| cta-link | 2 | - | 2 | Low |
| **TOTAL** | **~90** | **~50** | **~40** | |

---

## Appendix B: Combined Page Inventory Summary

### AT&T Business Pages (~700)

| Category | P0 | P1 | P2 | Total |
|----------|----|----|-------|
| Homepage | 1 | - | - | 1 |
| Portfolios | 9 | - | - | 9 |
| Products | 50 | 25 | - | 75 |
| Categories | - | 25 | - | 25 |
| Industries | - | 25 | - | 25 |
| Articles | - | 100 | 100 | 200 |
| Support | - | 10 | - | 10 |
| Offers | 5 | - | - | 5 |
| Small Business | 1 | 19 | - | 20 |
| Regional | - | - | 50 | 50 |
| Partners | - | - | 60 | 60 |
| Other | 34 | 96 | 90 | 220 |
| **Total** | **~100** | **~300** | **~300** | **~700** |

### FirstNet Pages (~1,187)

| Category | P0 | P1 | P2 | Total |
|----------|----|----|-------|
| Homepage & Main | 5 | - | - | 5 |
| Power of FirstNet | 8 | 2 | - | 10 |
| Coverage | 6 | 5 | - | 11 |
| Plans | 4 | - | - | 4 |
| Phones | 60 | 70 | 68 | 198 |
| Tablets | 4 | 60 | 24 | 88 |
| Smart Devices | - | 15 | 6 | 21 |
| Connected Devices | 4 | 30 | 5 | 39 |
| Accessories | - | - | 25 | 25 |
| Industry Solutions | 15 | 75 | - | 90 |
| Apps | 5 | 13 | - | 18 |
| Community | 5 | 60 | 225 | 290 |
| Mission Critical | 10 | 5 | - | 15 |
| Support | 5 | 55 | - | 60 |
| Offers/Sign-Up | 15 | 15 | - | 30 |
| Legal/Campaigns | - | - | 75 | 75 |
| Other | 74 | 45 | 89 | 208 |
| **Total** | **~220** | **~450** | **~520** | **~1,187** |

### Combined Totals

| Priority | AT&T Business | FirstNet | Combined |
|----------|---------------|----------|----------|
| P0 | ~100 | ~220 | **~320** |
| P1 | ~300 | ~450 | **~750** |
| P2 | ~300 | ~520 | **~820** |
| **TOTAL** | **~700** | **~1,187** | **~1,887** |

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

*Document Version: 1.0*
*Combined Total Pages: ~1,887*
*Combined Total Effort: 5,274 hours (with contingency)*
*Combined Duration: 28-34 weeks*
*Created: January 2026*
*Last Updated: January 2026*
