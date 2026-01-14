# FirstNet Website - EDS Migration Plan with Estimates

## Executive Summary

This document outlines the comprehensive migration plan for migrating **https://www.firstnet.com/** to AEM Edge Delivery Services (EDS) with Universal Editor (UE).

| Metric | Value |
|--------|-------|
| **Total Pages** | ~1,044 |
| **Page Templates** | 10 |
| **Unique Blocks** | 15+ |
| **Estimated Total Effort** | 2,800-3,400 person-hours |
| **Recommended Team Size** | 5-7 resources |
| **Estimated Duration** | 18-24 weeks |

---

## Site Analysis Summary

### Page Inventory by Type

| Page Type | Count | Template | Priority | Wave |
|-----------|-------|----------|----------|------|
| Homepage | 1 | `homepage` | P0 | 1 |
| Power of FirstNet | 8 | `feature` | P0 | 1 |
| Coverage | 12+ | `coverage` | P0 | 1 |
| Rate Plans | 4 | `plans` | P0 | 1 |
| Phones | 161+ | `device` | P0/P1 | 1-2 |
| Tablets | 68+ | `device` | P1 | 2 |
| Accessories | 26+ | `accessory` | P2 | 3 |
| Smart Devices | 24+ | `device` | P1 | 2 |
| Connected Devices | 43+ | `device` | P1 | 2 |
| Industry Solutions - IoT | 52+ | `solution` | P1 | 2 |
| Industry Solutions - Verticals | 11+ | `industry` | P0 | 1 |
| Apps | 15+ | `app` | P1 | 2 |
| Community - Blogs | 70+ | `article` | P1 | 2 |
| Community - News | 150+ | `article` | P2 | 3 |
| Community - Case Studies | 4+ | `story` | P1 | 2 |
| Mission Critical | 4 | `feature` | P0 | 1 |
| Support/Help | 40+ | `support` | P1 | 2 |
| Offers | 6+ | `offers` | P0 | 1 |
| Sign-Up | 5+ | `signup` | P0 | 1 |
| Resources/Legal | 15+ | `basic` | P2 | 3 |
| Campaigns | 50+ | `campaign` | P2 | 3 |
| **TOTAL** | **~1,044** | | | |

### Priority Summary

| Priority | Page Count | Description |
|----------|------------|-------------|
| **P0** | ~200 | Must have for launch (homepage, plans, key devices, offers, sign-up, industry verticals) |
| **P1** | ~400 | Should have (tablets, IoT, apps, support, blogs, case studies) |
| **P2** | ~450 | Nice to have (news, accessories, campaigns, legal) |

### Block Inventory

| Block | Variants | Complexity | Priority |
|-------|----------|------------|----------|
| header | 1 | Medium | P0 |
| footer | 1 | Medium | P0 |
| icon-nav | 2 (carousel, default) | Medium | P0 |
| hero | 3 (default, image-right, video) | High | P0 |
| cards | 6 (offer, news, device, feature, story, pricing) | High | P0 |
| value-props | 2 (dark-bg, icon-list) | Medium | P0 |
| section-heading | 2 (default, centered) | Low | P1 |
| cta-banner | 3 (contact, simple, full-width) | Medium | P0 |
| form | 3 (newsletter, contact, eligibility) | High | P0 |
| cta-link | 2 (arrow, animated) | Low | P2 |
| tabs | 2 (horizontal, vertical) | Medium | P1 |
| accordion | 2 (faq, expandable) | Medium | P1 |
| table | 3 (pricing, comparison, specs) | Medium | P1 |
| breadcrumb | 1 | Low | P0 |
| columns | 3 (2-col, 3-col, 4-col) | Low | P0 |
| fragment | N/A | Low | P0 |
| section-metadata | N/A | Low | P0 |

---

## Phase Breakdown with Estimates

### Phase 1: Foundation & Setup
**Duration: 2-3 weeks | Effort: 220-280 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| EDS project setup & configuration | 24 | 1 Dev |
| GitHub/SharePoint integration | 16 | 1 Dev |
| AEM setup with Universal Editor | 40 | 1 Dev |
| Design token extraction & CSS variables | 32 | 1 Dev |
| Global styles (typography, colors, spacing) | 28 | 1 Dev |
| Header block development | 28 | 1 Dev |
| Icon-nav block development | 24 | 1 Dev |
| Footer block development | 24 | 1 Dev |
| Navigation structure setup | 20 | 1 Dev |
| Development environment & CI/CD | 16 | 1 DevOps |
| **Phase 1 Total** | **252** | |

**Deliverables:**
- Functional EDS project with UE
- Design system tokens (CSS variables)
- Header/Footer/Icon-nav blocks
- Navigation structure
- CI/CD pipeline

---

### Phase 2: Core Blocks Development
**Duration: 4-5 weeks | Effort: 520-620 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Hero block (all variants) | 64 | 1 Dev |
| Cards block (all variants) | 96 | 1 Dev |
| Value-props block | 40 | 1 Dev |
| CTA-banner block | 32 | 1 Dev |
| Form block (newsletter, contact) | 64 | 1 Dev |
| Section-heading block | 16 | 1 Dev |
| Tabs block | 32 | 1 Dev |
| Accordion block | 24 | 1 Dev |
| Table block (pricing, specs) | 36 | 1 Dev |
| Breadcrumb block | 16 | 1 Dev |
| Columns block | 16 | 1 Dev |
| Fragment support | 20 | 1 Dev |
| UE component models & definitions | 48 | 1 Dev |
| UE component filters | 16 | 1 Dev |
| Block documentation | 24 | 1 Tech Writer |
| QA & testing | 40 | 1 QA |
| **Phase 2 Total** | **584** | |

**Deliverables:**
- All P0 blocks functional
- UE authoring configured
- Component documentation
- QA test cases

---

### Phase 3: Template Development
**Duration: 2-3 weeks | Effort: 280-360 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Homepage template | 36 | 1 Dev |
| Device template (phones, tablets, etc.) | 40 | 1 Dev |
| Plans template | 28 | 1 Dev |
| Feature template (Power of FirstNet, Mission Critical) | 28 | 1 Dev |
| Coverage template | 24 | 1 Dev |
| Industry/Solution template | 28 | 1 Dev |
| Article template (blogs, news) | 24 | 1 Dev |
| Support template | 20 | 1 Dev |
| Offers template | 24 | 1 Dev |
| Sign-up template | 24 | 1 Dev |
| Template documentation | 16 | 1 Tech Writer |
| UE template configuration | 28 | 1 Dev |
| QA & testing | 32 | 1 QA |
| **Phase 3 Total** | **352** | |

**Deliverables:**
- All 10 page templates
- UE template authoring
- Template documentation

---

### Phase 4: Secondary Blocks & Features
**Duration: 2 weeks | Effort: 200-260 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| CTA-link block | 12 | 1 Dev |
| Video block | 24 | 1 Dev |
| Quote block | 16 | 1 Dev |
| Stats block | 20 | 1 Dev |
| Image-gallery block | 20 | 1 Dev |
| Embed block | 12 | 1 Dev |
| Coverage map integration | 32 | 1 Dev |
| Device comparison feature | 28 | 1 Dev |
| UE enhancements | 16 | 1 Dev |
| QA & testing | 24 | 1 QA |
| **Phase 4 Total** | **204** | |

**Deliverables:**
- All P1/P2 blocks
- Complete block library
- Enhanced UE experience

---

### Phase 5: Integrations
**Duration: 2-3 weeks | Effort: 280-340 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Adobe Analytics integration | 36 | 1 Dev |
| Adobe Target integration | 36 | 1 Dev |
| Eligibility check integration | 40 | 1 Dev |
| Newsletter/Marketo integration | 32 | 1 Dev |
| LocalControl (account management) integration | 40 | 1 Dev |
| Chat widget integration | 20 | 1 Dev |
| Feedback widget integration | 12 | 1 Dev |
| CDN configuration (Fastly) | 20 | 1 DevOps |
| Performance optimization | 24 | 1 Dev |
| QA & testing | 28 | 1 QA |
| **Phase 5 Total** | **288** | |

**Deliverables:**
- All third-party integrations
- Analytics tracking
- Account management integration
- Search functionality

---

### Phase 6: Content Migration
**Duration: 4-5 weeks | Effort: 500-620 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Import script development | 80 | 1 Dev |
| **Wave 1 - P0 Pages (~200 pages)** | | |
| Homepage migration | 16 | 1 Content |
| Power of FirstNet pages (8) | 16 | 1 Content |
| Coverage pages (12) | 18 | 1 Content |
| Rate Plans pages (4) | 8 | 1 Content |
| Phone pages (50 priority) - automated | 25 | Automated |
| Industry vertical pages (11) | 17 | 1 Content |
| Mission Critical pages (4) | 8 | 1 Content |
| Offers pages (6) | 12 | 1 Content |
| Sign-up pages (5) | 10 | 1 Content |
| **Wave 2 - P1 Pages (~400 pages)** | | |
| Remaining phone pages (111) - automated | 28 | Automated |
| Tablet pages (68) - automated | 17 | Automated |
| Smart device pages (24) - automated | 6 | Automated |
| Connected device pages (43) - automated | 11 | Automated |
| IoT solution pages (52) | 26 | 1 Content |
| App pages (15) | 12 | 1 Content |
| Blog articles (70) - automated | 18 | Automated |
| Case studies (4) | 8 | 1 Content |
| Support pages (40) | 30 | 1 Content |
| **Wave 3 - P2 Pages (~450 pages)** | | |
| Accessory pages (26) - automated | 7 | Automated |
| News articles (150) - automated | 38 | Automated |
| Campaign pages (50) - automated | 13 | Automated |
| Legal pages (15) | 12 | 1 Content |
| Remaining pages (200+) - automated | 50 | Automated |
| Image/asset migration | 40 | 1 Content |
| Content QA & validation | 60 | 1 QA + 1 Content |
| Redirects mapping (1,000+ URLs) | 40 | 1 Dev |
| **Phase 6 Total** | **616** | |

**Deliverables:**
- All ~1,044 pages migrated
- Assets transferred
- 1,000+ redirect mappings
- Content validation complete

---

### Phase 7: Testing & Launch
**Duration: 2-3 weeks | Effort: 240-300 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Cross-browser testing | 32 | 1 QA |
| Mobile/responsive testing | 36 | 1 QA |
| Accessibility testing (WCAG 2.1) | 40 | 1 QA |
| Performance testing (Lighthouse) | 28 | 1 QA |
| SEO validation | 24 | 1 SEO |
| Security testing | 24 | 1 QA |
| UAT support | 32 | 1 Dev + 1 QA |
| Bug fixes & refinements | 48 | 2 Dev |
| DNS cutover planning | 12 | 1 DevOps |
| Go-live execution | 12 | Team |
| Post-launch monitoring | 20 | 1 DevOps |
| **Phase 7 Total** | **308** | |

**Deliverables:**
- Test reports
- Bug fixes
- Go-live checklist
- Monitoring setup

---

## Total Effort Summary

| Phase | Hours (Low) | Hours (High) |
|-------|-------------|--------------|
| Phase 1: Foundation | 220 | 280 |
| Phase 2: Core Blocks | 520 | 620 |
| Phase 3: Templates | 280 | 360 |
| Phase 4: Secondary Blocks | 200 | 260 |
| Phase 5: Integrations | 280 | 340 |
| Phase 6: Content Migration | 500 | 620 |
| Phase 7: Testing & Launch | 240 | 300 |
| **TOTAL** | **2,240** | **2,780** |

**With 20% contingency: 2,688 - 3,336 hours**

---

## Migration Waves Detail

### Wave 1 (P0) - Weeks 1-10
**~200 pages | Core Experience**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Homepage | 1 | 16 hrs |
| Power of FirstNet | 8 | 16 hrs |
| Coverage | 12 | 18 hrs |
| Rate Plans | 4 | 8 hrs |
| Key Phones (flagship + rugged) | 50 | 25 hrs |
| Industry Verticals | 11 | 17 hrs |
| Mission Critical | 4 | 8 hrs |
| Offers | 6 | 12 hrs |
| Sign-Up | 5 | 10 hrs |
| **Wave 1 Total** | **~101** | **130 hrs** |

### Wave 2 (P1) - Weeks 11-18
**~400 pages | Extended Content**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Remaining Phones | 111 | 28 hrs |
| Tablets | 68 | 17 hrs |
| Smart Devices | 24 | 6 hrs |
| Connected Devices | 43 | 11 hrs |
| IoT Solutions | 52 | 26 hrs |
| Apps | 15 | 12 hrs |
| Blogs | 70 | 18 hrs |
| Case Studies | 4 | 8 hrs |
| Support | 40 | 30 hrs |
| **Wave 2 Total** | **~427** | **156 hrs** |

### Wave 3 (P2) - Weeks 19-24
**~450 pages | Supplementary Content**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Accessories | 26 | 7 hrs |
| News Articles | 150 | 38 hrs |
| Campaigns | 50 | 13 hrs |
| Legal/Resources | 15 | 12 hrs |
| Other Pages | 200+ | 50 hrs |
| **Wave 3 Total** | **~441** | **120 hrs** |

---

## Resource Requirements

### Recommended Team Composition

| Role | Count | Phases | Utilization |
|------|-------|--------|-------------|
| Tech Lead / Architect | 1 | All | 100% |
| EDS/Frontend Developer | 2-3 | 1-5, 7 | 100% |
| UE Configuration Specialist | 1 | 2-4 | 75% |
| Content Migration Specialist | 1-2 | 6 | 100% |
| QA Engineer | 1 | All | 75% |
| DevOps Engineer | 0.5 | 1, 5, 7 | 50% |

**Total: 5-7 FTEs**

### Skill Requirements

- **EDS Development**: HTML, CSS, JavaScript, Franklin/Helix
- **Universal Editor**: AEM UE configuration, component models
- **Integration**: Adobe Analytics, Target, REST APIs
- **DevOps**: GitHub Actions, Fastly CDN, DNS management
- **Content**: Markdown, SharePoint/Google Docs authoring

---

## Timeline (Gantt Overview)

```
Week:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
P1:    ██████                                                                     Foundation (2-3 wks)
P2:        ██████████████████                                                     Core Blocks (4-5 wks)
P3:                  ████████████                                                 Templates (2-3 wks)
P4:                        ████████                                               Secondary (2 wks)
P5:                            ████████████                                       Integrations (2-3 wks)
P6:                                  ████████████████████                         Migration (4-5 wks)
P7:                                                    ████████████               Testing/Launch (2-3 wks)
       |_______Wave 1_______|________Wave 2________|____Wave 3____|
```

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Device page complexity underestimated | Medium | Medium | Automated import scripts, phased migration |
| Third-party integration delays | Medium | High | Early POC, parallel development |
| Performance targets not met | Medium | High | Early Lighthouse testing, CDN optimization |
| UE configuration complexity | Medium | Medium | Experienced UE specialist, early training |
| Stakeholder approval delays | Medium | High | Clear governance, staged reviews |
| Scope creep | Medium | High | Change control process, fixed scope phases |
| AT&T backend dependencies | High | Medium | Early integration testing, fallback options |

---

## Success Criteria

| Metric | Target |
|--------|--------|
| Lighthouse Performance Score | > 90 |
| Lighthouse Accessibility Score | > 95 |
| Page Load Time (LCP) | < 2.5s |
| Content migration accuracy | > 99% |
| Zero critical bugs at launch | Yes |
| Author training completion | 100% |

---

## Assumptions

1. Access to current FirstNet CMS and content APIs
2. Design assets available (brand guidelines)
3. Stakeholder availability for UAT
4. No major site redesign (migration-only scope)
5. Third-party API documentation available
6. Dedicated author training resources
7. DNS/domain control available for cutover
8. ~50% of device pages can be automated via import scripts

---

## Dependencies

1. **Adobe Experience Cloud** - Analytics, Target licenses
2. **AT&T LocalControl** - Account management system access
3. **Newsletter Provider** - Marketo/Eloqua configuration
4. **CDN** - Fastly configuration access
5. **Source CMS** - Read access for content extraction
6. **FirstNet.gov** - External link validation

---

## Synergies with AT&T Business Migration

Since AT&T Business and FirstNet are both being migrated to EDS, there are significant synergies:

### Shared Components
| Component | Reuse Potential | Effort Savings |
|-----------|-----------------|----------------|
| Header/Footer base | 60% | 20 hrs |
| Cards component | 80% | 40 hrs |
| Form component | 70% | 30 hrs |
| CTA Banner | 90% | 15 hrs |
| Design tokens | 50% | 20 hrs |
| CI/CD pipeline | 100% | 16 hrs |
| **Total Savings** | | **~141 hrs** |

### Separate Components
- Icon navigation (FirstNet-specific)
- Device templates (FirstNet-specific catalog)
- Eligibility check (FirstNet-specific flow)

---

## Appendix A: Block Development Estimates

| Block | Variants | Design | Develop | Test | Total Hours |
|-------|----------|--------|---------|------|-------------|
| header | 1 | 8 | 20 | 8 | 36 |
| footer | 1 | 8 | 20 | 8 | 36 |
| icon-nav | 2 | 8 | 16 | 8 | 32 |
| hero | 3 | 12 | 40 | 12 | 64 |
| cards | 6 | 20 | 60 | 16 | 96 |
| value-props | 2 | 8 | 24 | 8 | 40 |
| section-heading | 2 | 4 | 8 | 4 | 16 |
| cta-banner | 3 | 8 | 20 | 8 | 36 |
| form | 3 | 12 | 40 | 12 | 64 |
| tabs | 2 | 8 | 20 | 8 | 36 |
| accordion | 2 | 8 | 16 | 8 | 32 |
| table | 3 | 12 | 24 | 8 | 44 |
| breadcrumb | 1 | 4 | 8 | 4 | 16 |
| columns | 3 | 8 | 12 | 4 | 24 |
| cta-link | 2 | 4 | 8 | 4 | 16 |
| video | 2 | 8 | 16 | 8 | 32 |
| **TOTAL** | | | | | **620** |

---

## Appendix B: Page Migration Estimates

| Page Type | Count | Hours/Page | Automated | Total Hours |
|-----------|-------|------------|-----------|-------------|
| Homepage | 1 | 16 | No | 16 |
| Power of FirstNet | 8 | 2 | Partial | 16 |
| Coverage | 12 | 1.5 | Partial | 18 |
| Rate Plans | 4 | 2 | No | 8 |
| Phones (P0) | 50 | 0.5 | Yes | 25 |
| Phones (P1) | 111 | 0.25 | Yes | 28 |
| Tablets | 68 | 0.25 | Yes | 17 |
| Smart Devices | 24 | 0.25 | Yes | 6 |
| Connected Devices | 43 | 0.25 | Yes | 11 |
| Industry Verticals | 11 | 1.5 | Partial | 17 |
| IoT Solutions | 52 | 0.5 | Partial | 26 |
| Apps | 15 | 0.8 | Partial | 12 |
| Mission Critical | 4 | 2 | No | 8 |
| Blogs | 70 | 0.25 | Yes | 18 |
| News | 150 | 0.25 | Yes | 38 |
| Case Studies | 4 | 2 | No | 8 |
| Support | 40 | 0.75 | Partial | 30 |
| Offers | 6 | 2 | No | 12 |
| Sign-Up | 5 | 2 | No | 10 |
| Accessories | 26 | 0.25 | Yes | 7 |
| Campaigns | 50 | 0.25 | Yes | 13 |
| Legal | 15 | 0.8 | Partial | 12 |
| Other | 200+ | 0.25 | Yes | 50 |
| **TOTAL** | **~1,044** | | | **406** |

*Note: Additional 210 hours for import script development, QA validation, and redirect mapping*

---

## Appendix C: Cost Estimation

| Resource Type | Hours | Rate Range | Cost Range |
|---------------|-------|------------|------------|
| Tech Lead | 450 | $150-200/hr | $67,500-90,000 |
| Senior Developer | 1,400 | $125-175/hr | $175,000-245,000 |
| UE Specialist | 280 | $125-150/hr | $35,000-42,000 |
| Content Specialist | 450 | $75-100/hr | $33,750-45,000 |
| QA Engineer | 320 | $100-125/hr | $32,000-40,000 |
| DevOps | 100 | $125-150/hr | $12,500-15,000 |
| **TOTAL** | **3,000** | | **$355,750-477,000** |

*Note: Rates are estimates and may vary by region and vendor*

---

*Document Version: 1.0*
*Total Pages: ~1,044*
*Total Effort: 2,688-3,336 hours (with contingency)*
*Created: January 2026*
*Last Updated: January 2026*
