# AT&T Business Website - EDS Migration Plan with Estimates

## Executive Summary

This document outlines the comprehensive migration plan for migrating **https://www.business.att.com/** to AEM Edge Delivery Services (EDS) with Universal Editor (UE).

| Metric | Value |
|--------|-------|
| **Total Pages** | ~1,000+ |
| **Page Templates** | 10 |
| **Unique Blocks** | 25+ |
| **Estimated Total Effort** | 2,800-3,400 person-hours |
| **Recommended Team Size** | 6-8 resources |
| **Estimated Duration** | 16-20 weeks |

---

## Site Analysis Summary

### Page Inventory by Type

| Page Type | Count | Template | Priority |
|-----------|-------|----------|----------|
| Homepage | 1 | `homepage` | P0 |
| Portfolio Pages | 10 | `portfolio` | P0 |
| Product Pages | 150+ | `product` | P0 |
| Industry Pages | 30 | `industry` | P1 |
| Category Pages | 30 | `category` | P1 |
| Learn - Tech Advice | 100+ | `article` | P1 |
| Learn - Customer Stories | 100+ | `story` | P1 |
| Learn - Research Reports | 50+ | `report` | P2 |
| Learn - Top Voices | 30+ | `article` | P2 |
| Support Pages | 50+ | `support` | P1 |
| Offers/Deals | 20+ | `offers` | P0 |
| Small Business | 50+ | `landing` | P1 |
| Legal/Admin | 30+ | `basic` | P2 |
| Regional Pages | 50+ | `regional` | P2 |

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
**Duration: 2-3 weeks | Effort: 200-280 hours**

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
**Duration: 4-5 weeks | Effort: 600-720 hours**

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
| UE component models & definitions | 80 | 1 Dev |
| UE component filters | 24 | 1 Dev |
| Block documentation | 40 | 1 Tech Writer |
| QA & testing | 60 | 1 QA |
| **Phase 2 Total** | **748** | |

**Deliverables:**
- All P0 blocks functional
- UE authoring configured
- Component documentation
- QA test cases

---

### Phase 3: Template Development
**Duration: 3-4 weeks | Effort: 400-480 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Homepage template | 40 | 1 Dev |
| Portfolio template | 32 | 1 Dev |
| Product template | 40 | 1 Dev |
| Industry template | 32 | 1 Dev |
| Category template | 24 | 1 Dev |
| Article template | 32 | 1 Dev |
| Customer story template | 24 | 1 Dev |
| Support template | 24 | 1 Dev |
| Offers template | 32 | 1 Dev |
| Landing page template | 32 | 1 Dev |
| Template documentation | 24 | 1 Tech Writer |
| UE template configuration | 40 | 1 Dev |
| QA & testing | 48 | 1 QA |
| **Phase 3 Total** | **424** | |

**Deliverables:**
- All page templates
- UE template authoring
- Template documentation

---

### Phase 4: Secondary Blocks & Features
**Duration: 2-3 weeks | Effort: 280-360 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Accordion block | 24 | 1 Dev |
| Table block (pricing, comparison) | 40 | 1 Dev |
| Video block | 32 | 1 Dev |
| Quote block | 16 | 1 Dev |
| Stats block | 24 | 1 Dev |
| Icon-grid block | 24 | 1 Dev |
| Search results block | 48 | 1 Dev |
| Related content block | 24 | 1 Dev |
| Social share block | 16 | 1 Dev |
| Image gallery block | 24 | 1 Dev |
| Embed block | 16 | 1 Dev |
| UE enhancements | 24 | 1 Dev |
| QA & testing | 40 | 1 QA |
| **Phase 4 Total** | **352** | |

**Deliverables:**
- All P1/P2 blocks
- Complete block library
- Enhanced UE experience

---

### Phase 5: Integrations
**Duration: 2-3 weeks | Effort: 280-360 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Adobe Analytics integration | 40 | 1 Dev |
| Adobe Target integration | 40 | 1 Dev |
| Marketo/Eloqua form integration | 48 | 1 Dev |
| ChiliPiper calendar integration | 32 | 1 Dev |
| Chat widget integration | 24 | 1 Dev |
| Search integration (Coveo/Algolia) | 48 | 1 Dev |
| CDN configuration (Fastly) | 24 | 1 DevOps |
| Performance optimization | 32 | 1 Dev |
| QA & testing | 32 | 1 QA |
| **Phase 5 Total** | **320** | |

**Deliverables:**
- All third-party integrations
- Analytics tracking
- Personalization setup
- Search functionality

---

### Phase 6: Content Migration
**Duration: 3-4 weeks | Effort: 480-600 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Import script development | 80 | 1 Dev |
| Homepage migration | 16 | 1 Content |
| Portfolio pages (10) | 40 | 1 Content |
| Product pages (150) - automated | 80 | 1 Dev + 1 Content |
| Industry pages (30) | 48 | 1 Content |
| Category pages (30) | 48 | 1 Content |
| Learn pages (300+) - automated | 80 | 1 Dev + 1 Content |
| Support pages (50) | 40 | 1 Content |
| Offers pages (20) | 24 | 1 Content |
| Image/asset migration | 40 | 1 Content |
| Content QA & validation | 80 | 1 QA + 1 Content |
| Redirects mapping | 24 | 1 Dev |
| **Phase 6 Total** | **600** | |

**Deliverables:**
- All content migrated
- Assets transferred
- Redirect mapping
- Content validation

---

### Phase 7: Testing & Launch
**Duration: 2-3 weeks | Effort: 240-320 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Cross-browser testing | 40 | 1 QA |
| Mobile/responsive testing | 40 | 1 QA |
| Accessibility testing (WCAG 2.1) | 48 | 1 QA |
| Performance testing (Lighthouse) | 32 | 1 QA |
| SEO validation | 32 | 1 SEO |
| UAT support | 40 | 1 Dev + 1 QA |
| Bug fixes & refinements | 60 | 2 Dev |
| DNS cutover planning | 16 | 1 DevOps |
| Go-live execution | 16 | Team |
| Post-launch monitoring | 24 | 1 DevOps |
| **Phase 7 Total** | **348** | |

**Deliverables:**
- Test reports
- Bug fixes
- Go-live checklist
- Monitoring setup

---

## Total Effort Summary

| Phase | Hours (Low) | Hours (High) |
|-------|-------------|--------------|
| Phase 1: Foundation | 200 | 280 |
| Phase 2: Core Blocks | 600 | 720 |
| Phase 3: Templates | 400 | 480 |
| Phase 4: Secondary Blocks | 280 | 360 |
| Phase 5: Integrations | 280 | 360 |
| Phase 6: Content Migration | 480 | 600 |
| Phase 7: Testing & Launch | 240 | 320 |
| **TOTAL** | **2,480** | **3,120** |

**With 20% contingency: 2,976 - 3,744 hours**

---

## Resource Requirements

### Recommended Team Composition

| Role | Count | Phases |
|------|-------|--------|
| Tech Lead / Architect | 1 | All |
| EDS/Frontend Developer | 3 | 1-5, 7 |
| UE Configuration Specialist | 1 | 2-4 |
| Content Migration Specialist | 2 | 6 |
| QA Engineer | 1 | All |
| DevOps Engineer | 1 | 1, 5, 7 |
| Technical Writer | 0.5 | 2-4 |

**Total: 6-8 FTEs**

### Skill Requirements

- **EDS Development**: HTML, CSS, JavaScript, Franklin/Helix
- **Universal Editor**: AEM UE configuration, component models
- **Integration**: Adobe Analytics, Target, Marketo, REST APIs
- **DevOps**: GitHub Actions, Fastly CDN, DNS management
- **Content**: Markdown, SharePoint/Google Docs authoring

---

## Timeline (Gantt Overview)

```
Week:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
P1:    ████████                                                      Foundation
P2:          ████████████████████                                    Core Blocks
P3:                      ████████████████                            Templates
P4:                                  ████████████                    Secondary
P5:                                        ████████████              Integrations
P6:                                              ████████████████    Migration
P7:                                                          ████████ Testing/Launch
```

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Content complexity underestimated | High | Medium | Detailed content audit, phased migration |
| Third-party integration delays | Medium | High | Early POC, parallel development |
| Performance targets not met | Medium | High | Early Lighthouse testing, CDN optimization |
| UE configuration complexity | Medium | Medium | Experienced UE specialist, early training |
| Stakeholder approval delays | Medium | High | Clear governance, staged reviews |
| Scope creep | High | High | Change control process, fixed scope phases |

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
| table | 3 | 12 | 28 | 12 | 52 |
| video | 2 | 8 | 20 | 8 | 36 |
| quote | 2 | 8 | 12 | 8 | 28 |
| stats | 2 | 8 | 16 | 8 | 32 |
| icon-grid | 2 | 8 | 16 | 8 | 32 |
| breadcrumb | 1 | 4 | 12 | 4 | 20 |
| search-results | 1 | 12 | 32 | 12 | 56 |
| related-content | 2 | 8 | 16 | 8 | 32 |
| social-share | 1 | 4 | 12 | 4 | 20 |
| image-gallery | 1 | 8 | 20 | 8 | 36 |
| embed | 3 | 8 | 12 | 8 | 28 |
| columns | 3 | 8 | 12 | 8 | 28 |

---

## Appendix B: Page Migration Estimates

| Page Type | Count | Hours/Page | Automated | Total Hours |
|-----------|-------|------------|-----------|-------------|
| Homepage | 1 | 16 | No | 16 |
| Portfolio | 10 | 4 | Partial | 40 |
| Product | 150 | 0.5 | Yes | 75 |
| Industry | 30 | 2 | Partial | 60 |
| Category | 30 | 1.5 | Partial | 45 |
| Article | 200 | 0.25 | Yes | 50 |
| Customer Story | 100 | 0.5 | Yes | 50 |
| Research Report | 50 | 1 | Partial | 50 |
| Support | 50 | 1 | Partial | 50 |
| Offers | 20 | 2 | No | 40 |
| Regional | 50 | 0.5 | Yes | 25 |
| Other | 100+ | 0.5 | Yes | 50 |

---

*Document Version: 1.0*
*Created: January 2026*
*Last Updated: January 2026*
