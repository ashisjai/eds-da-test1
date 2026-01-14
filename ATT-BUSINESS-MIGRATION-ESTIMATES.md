# AT&T Business Website - EDS Migration Plan with Estimates

## Executive Summary

This document outlines the comprehensive migration plan for migrating **https://www.business.att.com/** to AEM Edge Delivery Services (EDS) with Universal Editor (UE).

| Metric | Value |
|--------|-------|
| **Total Pages** | ~600-700 |
| **Page Templates** | 12 |
| **Unique Blocks** | 25+ |
| **Estimated Total Effort** | 2,400-2,900 person-hours |
| **Recommended Team Size** | 5-7 resources |
| **Estimated Duration** | 14-18 weeks |

---

## Site Analysis Summary

### Page Inventory by Type

| Page Type | Count | Template | Priority | Wave |
|-----------|-------|----------|----------|------|
| Homepage | 1 | `homepage` | P0 | 1 |
| Portfolio Pages | 9 | `portfolio` | P0 | 1 |
| Product Pages | 75+ | `product` | P0/P1 | 1-2 |
| Category Pages | 25+ | `category` | P1 | 2 |
| Industry Pages | 15+ | `industry` | P1 | 2 |
| Industry Solutions | 10+ | `industry-solution` | P1 | 2 |
| Business Solutions | 5 | `solution` | P1 | 2 |
| Learn - Tech Advice | 100+ | `article` | P1 | 2 |
| Learn - Customer Stories | 50+ | `story` | P1 | 2 |
| Learn - Research Reports | 30+ | `report` | P2 | 3 |
| Learn - Top Voices | 20+ | `article` | P2 | 3 |
| Support Pages | 10+ | `support` | P1 | 2 |
| About/Resources | 10+ | `landing` | P1 | 2 |
| Offers/Deals | 5+ | `offers` | P0 | 1 |
| Small Business | 20+ | `landing` | P1 | 2 |
| Explore Pages | 10+ | `landing` | P1 | 2 |
| Regional/Area Pages | 50+ | `regional` | P2 | 3 |
| Partner Solutions | 60+ | `partner` | P2 | 3 |
| Utility Pages | 5+ | `basic` | P2 | 3 |
| **TOTAL** | **~600-700** | | | |

### Priority Summary

| Priority | Page Count | Description |
|----------|------------|-------------|
| **P0** | ~100 | Must have for launch (homepage, portfolios, key products, offers) |
| **P1** | ~300 | Should have (industries, categories, articles, support) |
| **P2** | ~250 | Nice to have (regional, partners, older content) |

### Block Inventory

| Block | Variants | Complexity | Priority |
|-------|----------|------------|----------|
| header | 1 | High | P0 |
| footer | 1 | High | P0 |
| hero | 5 (default, split, video, tabbed, minimal) | High | P0 |
| cards | 8 (product, pricing, icon, image, story, stats, value-prop, team) | High | P0 |
| carousel | 4 (deals, solutions, devices, stories) | High | P0 |
| tabs | 2 (horizontal, vertical) | Medium | P0 |
| accordion | 2 (faq, expandable) | Medium | P1 |
| promo-banner | 3 (product, campaign, award) | Medium | P0 |
| form | 3 (rai, contact, newsletter) | High | P0 |
| cta-banner | 3 (guarantee, simple, image) | Medium | P0 |
| link-list | 2 (grid, columns) | Low | P1 |
| table | 3 (pricing, comparison, data) | Medium | P1 |
| video | 2 (inline, modal) | Medium | P1 |
| quote | 2 (testimonial, pullquote) | Low | P1 |
| stats | 2 (kpi, counter) | Low | P2 |
| icon-grid | 2 (features, services) | Medium | P1 |
| breadcrumb | 1 | Low | P0 |
| search-results | 1 | High | P1 |
| related-content | 2 (articles, products) | Medium | P2 |
| social-share | 1 | Low | P2 |
| image-gallery | 1 | Medium | P2 |
| embed | 3 (youtube, twitter, other) | Low | P2 |
| columns | 3 (2-col, 3-col, 4-col) | Low | P0 |
| fragment | N/A | Low | P0 |
| section-metadata | N/A | Low | P0 |

---

## Phase Breakdown with Estimates

### Phase 1: Foundation & Setup
**Duration: 2-3 weeks | Effort: 200-260 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| EDS project setup & configuration | 24 | 1 Dev |
| GitHub/SharePoint integration | 16 | 1 Dev |
| AEM setup with Universal Editor | 40 | 1 Dev |
| Design token extraction & CSS variables | 40 | 1 Dev |
| Global styles (typography, colors, spacing) | 32 | 1 Dev |
| Header block development | 32 | 1 Dev |
| Footer block development | 24 | 1 Dev |
| Navigation structure setup | 24 | 1 Dev |
| Development environment & CI/CD | 16 | 1 DevOps |
| **Phase 1 Total** | **248** | |

**Deliverables:**
- Functional EDS project with UE
- Design system tokens (CSS variables)
- Header/Footer blocks
- Navigation structure
- CI/CD pipeline

---

### Phase 2: Core Blocks Development
**Duration: 4-5 weeks | Effort: 580-680 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Hero block (all variants) | 80 | 1 Dev |
| Cards block (all variants) | 120 | 1 Dev |
| Carousel block (all variants) | 80 | 1 Dev |
| Tabs block | 32 | 1 Dev |
| Promo-banner block | 40 | 1 Dev |
| CTA-banner block | 32 | 1 Dev |
| Form block (RAI integration) | 80 | 1 Dev |
| Link-list block | 24 | 1 Dev |
| Columns block | 16 | 1 Dev |
| Breadcrumb block | 16 | 1 Dev |
| Fragment support | 24 | 1 Dev |
| UE component models & definitions | 60 | 1 Dev |
| UE component filters | 20 | 1 Dev |
| Block documentation | 32 | 1 Tech Writer |
| QA & testing | 48 | 1 QA |
| **Phase 2 Total** | **704** | |

**Deliverables:**
- All P0 blocks functional
- UE authoring configured
- Component documentation
- QA test cases

---

### Phase 3: Template Development
**Duration: 2-3 weeks | Effort: 320-400 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Homepage template | 40 | 1 Dev |
| Portfolio template | 28 | 1 Dev |
| Product template | 36 | 1 Dev |
| Industry template | 28 | 1 Dev |
| Category template | 24 | 1 Dev |
| Article template | 28 | 1 Dev |
| Customer story template | 24 | 1 Dev |
| Support template | 20 | 1 Dev |
| Offers template | 28 | 1 Dev |
| Landing page template | 28 | 1 Dev |
| Regional template | 20 | 1 Dev |
| Partner template | 20 | 1 Dev |
| Template documentation | 20 | 1 Tech Writer |
| UE template configuration | 32 | 1 Dev |
| QA & testing | 40 | 1 QA |
| **Phase 3 Total** | **416** | |

**Deliverables:**
- All 12 page templates
- UE template authoring
- Template documentation

---

### Phase 4: Secondary Blocks & Features
**Duration: 2 weeks | Effort: 240-300 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Accordion block | 24 | 1 Dev |
| Table block (pricing, comparison) | 36 | 1 Dev |
| Video block | 28 | 1 Dev |
| Quote block | 16 | 1 Dev |
| Stats block | 20 | 1 Dev |
| Icon-grid block | 24 | 1 Dev |
| Search results block | 40 | 1 Dev |
| Related content block | 20 | 1 Dev |
| Social share block | 12 | 1 Dev |
| Image gallery block | 20 | 1 Dev |
| Embed block | 12 | 1 Dev |
| UE enhancements | 20 | 1 Dev |
| QA & testing | 32 | 1 QA |
| **Phase 4 Total** | **304** | |

**Deliverables:**
- All P1/P2 blocks
- Complete block library
- Enhanced UE experience

---

### Phase 5: Integrations
**Duration: 2-3 weeks | Effort: 260-320 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Adobe Analytics integration | 36 | 1 Dev |
| Adobe Target integration | 36 | 1 Dev |
| Marketo/Eloqua form integration | 44 | 1 Dev |
| ChiliPiper calendar integration | 28 | 1 Dev |
| Chat widget integration | 20 | 1 Dev |
| Search integration (Coveo/Algolia) | 44 | 1 Dev |
| CDN configuration (Fastly) | 20 | 1 DevOps |
| Performance optimization | 28 | 1 Dev |
| QA & testing | 28 | 1 QA |
| **Phase 5 Total** | **284** | |

**Deliverables:**
- All third-party integrations
- Analytics tracking
- Personalization setup
- Search functionality

---

### Phase 6: Content Migration
**Duration: 3-4 weeks | Effort: 380-480 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Import script development | 60 | 1 Dev |
| **Wave 1 - P0 Pages (~100 pages)** | | |
| Homepage migration | 16 | 1 Content |
| Portfolio pages (9) | 27 | 1 Content |
| Product pages (50 priority) | 25 | 1 Dev + 1 Content |
| Offers pages (5) | 10 | 1 Content |
| **Wave 2 - P1 Pages (~300 pages)** | | |
| Remaining product pages (25) | 13 | Automated |
| Industry pages (15) | 23 | 1 Content |
| Category pages (25) | 25 | 1 Content |
| Article pages (100) - automated | 25 | Automated |
| Customer Stories (50) - automated | 25 | Automated |
| Support/About/Explore pages (30) | 23 | 1 Content |
| Small Business pages (20) | 15 | 1 Content |
| **Wave 3 - P2 Pages (~250 pages)** | | |
| Regional pages (50) - automated | 13 | Automated |
| Partner pages (60) - automated | 15 | Automated |
| Research/Top Voices (50) - automated | 13 | Automated |
| Other pages (90) - automated | 23 | Automated |
| Image/asset migration | 32 | 1 Content |
| Content QA & validation | 60 | 1 QA + 1 Content |
| Redirects mapping (600+ URLs) | 32 | 1 Dev |
| **Phase 6 Total** | **515** | |

**Deliverables:**
- All ~650 pages migrated
- Assets transferred
- 600+ redirect mappings
- Content validation complete

---

### Phase 7: Testing & Launch
**Duration: 2 weeks | Effort: 200-260 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Cross-browser testing | 32 | 1 QA |
| Mobile/responsive testing | 32 | 1 QA |
| Accessibility testing (WCAG 2.1) | 40 | 1 QA |
| Performance testing (Lighthouse) | 28 | 1 QA |
| SEO validation | 28 | 1 SEO |
| UAT support | 32 | 1 Dev + 1 QA |
| Bug fixes & refinements | 48 | 2 Dev |
| DNS cutover planning | 12 | 1 DevOps |
| Go-live execution | 12 | Team |
| Post-launch monitoring | 20 | 1 DevOps |
| **Phase 7 Total** | **284** | |

**Deliverables:**
- Test reports
- Bug fixes
- Go-live checklist
- Monitoring setup

---

## Total Effort Summary

| Phase | Hours (Low) | Hours (High) |
|-------|-------------|--------------|
| Phase 1: Foundation | 200 | 260 |
| Phase 2: Core Blocks | 580 | 680 |
| Phase 3: Templates | 320 | 400 |
| Phase 4: Secondary Blocks | 240 | 300 |
| Phase 5: Integrations | 260 | 320 |
| Phase 6: Content Migration | 380 | 480 |
| Phase 7: Testing & Launch | 200 | 260 |
| **TOTAL** | **2,180** | **2,700** |

**With 20% contingency: 2,616 - 3,240 hours**

---

## Migration Waves Detail

### Wave 1 (P0) - Weeks 1-8
**~100 pages | Core Experience**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Homepage | 1 | 16 hrs |
| Portfolios | 9 | 27 hrs |
| Key Products | 50 | 25 hrs |
| Offers/Bundles | 5 | 10 hrs |
| Business Guarantee | 1 | 3 hrs |
| Small Business Landing | 1 | 3 hrs |
| **Wave 1 Total** | **~67** | **84 hrs** |

### Wave 2 (P1) - Weeks 9-14
**~300 pages | Extended Content**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Remaining Products | 25 | 13 hrs |
| Categories | 25 | 25 hrs |
| Industries | 15 | 23 hrs |
| Industry Solutions | 10 | 15 hrs |
| Business Solutions | 5 | 8 hrs |
| Tech Advice Articles | 100 | 25 hrs |
| Customer Stories | 50 | 25 hrs |
| Support Pages | 10 | 10 hrs |
| About/Resources | 10 | 10 hrs |
| Small Business | 20 | 15 hrs |
| Explore Pages | 10 | 8 hrs |
| **Wave 2 Total** | **~280** | **177 hrs** |

### Wave 3 (P2) - Weeks 15-18
**~250 pages | Supplementary Content**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Regional/Area Pages | 50 | 13 hrs |
| Partner Solutions | 60 | 15 hrs |
| Research Reports | 30 | 8 hrs |
| Top Voices | 20 | 5 hrs |
| Other/Utility | 90 | 23 hrs |
| **Wave 3 Total** | **~250** | **64 hrs** |

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
- **Integration**: Adobe Analytics, Target, Marketo, REST APIs
- **DevOps**: GitHub Actions, Fastly CDN, DNS management
- **Content**: Markdown, SharePoint/Google Docs authoring

---

## Timeline (Gantt Overview)

```
Week:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
P1:    ██████                                                   Foundation (2-3 wks)
P2:        ██████████████████                                   Core Blocks (4-5 wks)
P3:                  ████████████                               Templates (2-3 wks)
P4:                        ████████                             Secondary (2 wks)
P5:                            ████████████                     Integrations (2-3 wks)
P6:                                  ████████████████           Migration (3-4 wks)
P7:                                              ████████       Testing/Launch (2 wks)
       |______Wave 1______|____Wave 2____|__Wave 3__|
```

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content complexity underestimated | Medium | Medium | Detailed content audit complete, phased migration |
| Third-party integration delays | Medium | High | Early POC, parallel development |
| Performance targets not met | Medium | High | Early Lighthouse testing, CDN optimization |
| UE configuration complexity | Medium | Medium | Experienced UE specialist, early training |
| Stakeholder approval delays | Medium | High | Clear governance, staged reviews |
| Scope creep | Medium | High | Change control process, fixed scope phases |

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

1. Access to current CMS and content APIs
2. Design assets available (brand guidelines, Figma/Sketch)
3. Stakeholder availability for UAT
4. No major site redesign (migration-only scope)
5. Third-party API documentation available
6. Dedicated author training resources
7. DNS/domain control available for cutover
8. ~40% of pages can be automated via import scripts

---

## Dependencies

1. **Adobe Experience Cloud** - Analytics, Target licenses
2. **Marketo/Eloqua** - Form submission endpoints
3. **ChiliPiper** - Scheduling widget credentials
4. **Search Provider** - Coveo/Algolia configuration
5. **CDN** - Fastly configuration access
6. **Source CMS** - Read access for content extraction

---

## Next Steps

1. **Discovery Phase** (2 weeks)
   - Complete discovery questionnaire
   - Detailed content audit
   - Integration inventory
   - Design system documentation

2. **Project Kickoff**
   - Team onboarding
   - Environment setup
   - Governance establishment

3. **Sprint 0**
   - Technical spikes
   - POC for critical integrations
   - Risk mitigation activities

---

## Appendix A: Block Development Estimates

| Block | Variants | Design | Develop | Test | Total Hours |
|-------|----------|--------|---------|------|-------------|
| header | 1 | 8 | 24 | 8 | 40 |
| footer | 1 | 8 | 20 | 8 | 36 |
| hero | 5 | 16 | 48 | 16 | 80 |
| cards | 8 | 24 | 72 | 24 | 120 |
| carousel | 4 | 16 | 48 | 16 | 80 |
| tabs | 2 | 8 | 20 | 8 | 36 |
| accordion | 2 | 8 | 16 | 8 | 32 |
| promo-banner | 3 | 12 | 24 | 12 | 48 |
| form | 3 | 16 | 48 | 16 | 80 |
| cta-banner | 3 | 12 | 20 | 12 | 44 |
| link-list | 2 | 8 | 16 | 8 | 32 |
| table | 3 | 12 | 24 | 12 | 48 |
| video | 2 | 8 | 16 | 8 | 32 |
| quote | 2 | 8 | 12 | 8 | 28 |
| stats | 2 | 8 | 12 | 8 | 28 |
| icon-grid | 2 | 8 | 16 | 8 | 32 |
| breadcrumb | 1 | 4 | 12 | 4 | 20 |
| search-results | 1 | 12 | 28 | 12 | 52 |
| related-content | 2 | 8 | 12 | 8 | 28 |
| social-share | 1 | 4 | 8 | 4 | 16 |
| image-gallery | 1 | 8 | 16 | 8 | 32 |
| embed | 3 | 8 | 8 | 8 | 24 |
| columns | 3 | 8 | 12 | 8 | 28 |
| **TOTAL** | | | | | **1,068** |

---

## Appendix B: Page Migration Estimates (Updated)

| Page Type | Count | Hours/Page | Automated | Total Hours |
|-----------|-------|------------|-----------|-------------|
| Homepage | 1 | 16 | No | 16 |
| Portfolio | 9 | 3 | Partial | 27 |
| Product (P0) | 50 | 0.5 | Yes | 25 |
| Product (P1) | 25 | 0.5 | Yes | 13 |
| Industry | 15 | 1.5 | Partial | 23 |
| Industry Solutions | 10 | 1.5 | Partial | 15 |
| Category | 25 | 1 | Partial | 25 |
| Business Solutions | 5 | 1.5 | Partial | 8 |
| Article (Tech Advice) | 100 | 0.25 | Yes | 25 |
| Customer Story | 50 | 0.5 | Yes | 25 |
| Research Report | 30 | 0.25 | Yes | 8 |
| Top Voices | 20 | 0.25 | Yes | 5 |
| Support | 10 | 1 | Partial | 10 |
| About/Resources | 10 | 1 | Partial | 10 |
| Offers | 5 | 2 | No | 10 |
| Small Business | 20 | 0.75 | Partial | 15 |
| Explore | 10 | 0.75 | Partial | 8 |
| Regional | 50 | 0.25 | Yes | 13 |
| Partner | 60 | 0.25 | Yes | 15 |
| Other/Utility | 95 | 0.25 | Yes | 24 |
| **TOTAL** | **~650** | | | **315** |

*Note: Additional 200 hours for import script development, QA validation, and redirect mapping*

---

## Appendix C: Cost Estimation (Optional)

| Resource Type | Hours | Rate Range | Cost Range |
|---------------|-------|------------|------------|
| Tech Lead | 400 | $150-200/hr | $60,000-80,000 |
| Senior Developer | 1,200 | $125-175/hr | $150,000-210,000 |
| UE Specialist | 300 | $125-150/hr | $37,500-45,000 |
| Content Specialist | 400 | $75-100/hr | $30,000-40,000 |
| QA Engineer | 300 | $100-125/hr | $30,000-37,500 |
| DevOps | 150 | $125-150/hr | $18,750-22,500 |
| **TOTAL** | **2,750** | | **$326,250-435,000** |

*Note: Rates are estimates and may vary by region and vendor*

---

*Document Version: 2.0*
*Total Pages: ~600-700*
*Total Effort: 2,616-3,240 hours (with contingency)*
*Created: January 2026*
*Last Updated: January 2026*
