# FirstNet Website - EDS Migration Plan with Estimates

## Executive Summary

This document outlines the comprehensive migration plan for migrating **https://www.firstnet.com/** to AEM Edge Delivery Services (EDS) with Universal Editor (UE).

| Metric | Value |
|--------|-------|
| **Total Pages** | ~1,187 |
| **Page Templates** | 12 |
| **Unique Blocks** | 17+ |
| **Estimated Total Effort** | 3,200-3,900 person-hours |
| **Recommended Team Size** | 6-8 resources |
| **Estimated Duration** | 22-26 weeks |

---

## Site Analysis Summary

### Page Inventory by Type

| Page Type | Count | Template | Priority | Wave |
|-----------|-------|----------|----------|------|
| Homepage & Main Pages | 5 | `homepage` | P0 | 1 |
| Power of FirstNet | 10 | `feature` | P0 | 1 |
| Coverage | 11 | `coverage` | P0/P1 | 1 |
| Rate Plans | 4 | `plans` | P0 | 1 |
| Phones | 198 | `device` | P0/P1/P2 | 1-3 |
| Tablets | 88 | `device` | P1 | 2 |
| Smart Devices | 21 | `device` | P1 | 2 |
| Connected Devices | 39 | `device` | P1 | 2 |
| Accessories | 25 | `accessory` | P2 | 3 |
| Industry Solutions - IoT | 52+ | `solution` | P1 | 2 |
| Industry Solutions - Verticals | 38+ | `industry` | P0/P1 | 1-2 |
| Apps | 18 | `app` | P0/P1 | 1-2 |
| Community - News | 180+ | `article` | P2 | 3 |
| Community - Videos/Events | 50+ | `media` | P2 | 3 |
| Community - Case Studies | 4+ | `story` | P1 | 2 |
| Mission Critical | 15+ | `feature` | P0 | 1 |
| Support/Help | 60+ | `support` | P1 | 2 |
| Offers & Sign-Up | 30+ | `offers` | P0 | 1 |
| Resources/Legal | 25+ | `basic` | P2 | 3 |
| Campaigns | 50+ | `campaign` | P2 | 3 |
| **TOTAL** | **~1,187** | | | |

### Priority Summary

| Priority | Page Count | Description |
|----------|------------|-------------|
| **P0** | ~220 | Must have for launch (homepage, plans, flagship devices, offers, sign-up, mission critical) |
| **P1** | ~450 | Should have (remaining devices, IoT, apps, support, blogs, case studies) |
| **P2** | ~520 | Nice to have (news, accessories, campaigns, legal, older devices) |

### Block Inventory

| Block | Variants | Complexity | Priority |
|-------|----------|------------|----------|
| header | 1 | Medium | P0 |
| footer | 1 | Medium | P0 |
| icon-nav | 2 (carousel, default) | Medium | P0 |
| hero | 4 (default, image-right, video, split) | High | P0 |
| cards | 8 (offer, news, device, feature, story, pricing, spec, comparison) | High | P0 |
| value-props | 2 (dark-bg, icon-list) | Medium | P0 |
| section-heading | 2 (default, centered) | Low | P1 |
| cta-banner | 3 (contact, simple, full-width) | Medium | P0 |
| form | 4 (newsletter, contact, eligibility, signup) | High | P0 |
| cta-link | 2 (arrow, animated) | Low | P2 |
| tabs | 3 (horizontal, vertical, device-specs) | Medium | P1 |
| accordion | 2 (faq, expandable) | Medium | P1 |
| table | 4 (pricing, comparison, specs, data) | Medium | P1 |
| breadcrumb | 1 | Low | P0 |
| columns | 3 (2-col, 3-col, 4-col) | Low | P0 |
| device-gallery | 2 (carousel, grid) | High | P0 |
| video | 2 (inline, modal) | Medium | P1 |
| fragment | N/A | Low | P0 |
| section-metadata | N/A | Low | P0 |

---

## Phase Breakdown with Estimates

### Phase 1: Foundation & Setup
**Duration: 2-3 weeks | Effort: 240-300 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| EDS project setup & configuration | 24 | 1 Dev |
| GitHub/SharePoint integration | 16 | 1 Dev |
| AEM setup with Universal Editor | 40 | 1 Dev |
| Design token extraction & CSS variables | 36 | 1 Dev |
| Global styles (typography, colors, spacing) | 32 | 1 Dev |
| Header block development | 28 | 1 Dev |
| Icon-nav block development | 28 | 1 Dev |
| Footer block development | 24 | 1 Dev |
| Navigation structure setup | 20 | 1 Dev |
| Development environment & CI/CD | 16 | 1 DevOps |
| **Phase 1 Total** | **264** | |

**Deliverables:**
- Functional EDS project with UE
- Design system tokens (CSS variables)
- Header/Footer/Icon-nav blocks
- Navigation structure
- CI/CD pipeline

---

### Phase 2: Core Blocks Development
**Duration: 5-6 weeks | Effort: 640-760 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Hero block (all variants) | 72 | 1 Dev |
| Cards block (all variants) | 120 | 1 Dev |
| Value-props block | 40 | 1 Dev |
| CTA-banner block | 36 | 1 Dev |
| Form block (all variants) | 80 | 1 Dev |
| Section-heading block | 16 | 1 Dev |
| Tabs block | 40 | 1 Dev |
| Accordion block | 28 | 1 Dev |
| Table block (all variants) | 48 | 1 Dev |
| Device-gallery block | 56 | 1 Dev |
| Breadcrumb block | 16 | 1 Dev |
| Columns block | 16 | 1 Dev |
| Fragment support | 20 | 1 Dev |
| UE component models & definitions | 56 | 1 Dev |
| UE component filters | 20 | 1 Dev |
| Block documentation | 28 | 1 Tech Writer |
| QA & testing | 48 | 1 QA |
| **Phase 2 Total** | **740** | |

**Deliverables:**
- All P0 blocks functional
- UE authoring configured
- Component documentation
- QA test cases

---

### Phase 3: Template Development
**Duration: 3-4 weeks | Effort: 360-440 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Homepage template | 40 | 1 Dev |
| Device template (phones, tablets, watches) | 56 | 1 Dev |
| Plans template | 32 | 1 Dev |
| Feature template (Power of FirstNet, Mission Critical) | 32 | 1 Dev |
| Coverage template | 28 | 1 Dev |
| Industry/Solution template | 32 | 1 Dev |
| Article template (news, blogs) | 28 | 1 Dev |
| Support template | 24 | 1 Dev |
| Offers template | 28 | 1 Dev |
| Sign-up template | 32 | 1 Dev |
| Campaign template | 20 | 1 Dev |
| Accessory template | 16 | 1 Dev |
| Template documentation | 20 | 1 Tech Writer |
| UE template configuration | 36 | 1 Dev |
| QA & testing | 40 | 1 QA |
| **Phase 3 Total** | **464** | |

**Deliverables:**
- All 12 page templates
- UE template authoring
- Template documentation

---

### Phase 4: Secondary Blocks & Features
**Duration: 2-3 weeks | Effort: 240-300 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| CTA-link block | 12 | 1 Dev |
| Video block | 28 | 1 Dev |
| Quote block | 16 | 1 Dev |
| Stats block | 20 | 1 Dev |
| Image-gallery block | 24 | 1 Dev |
| Embed block | 16 | 1 Dev |
| Coverage map integration | 40 | 1 Dev |
| Device comparison feature | 36 | 1 Dev |
| Device filter/search | 32 | 1 Dev |
| UE enhancements | 20 | 1 Dev |
| QA & testing | 28 | 1 QA |
| **Phase 4 Total** | **272** | |

**Deliverables:**
- All P1/P2 blocks
- Complete block library
- Device comparison tool
- Enhanced UE experience

---

### Phase 5: Integrations
**Duration: 3-4 weeks | Effort: 340-420 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Adobe Analytics integration | 40 | 1 Dev |
| Adobe Target integration | 40 | 1 Dev |
| Eligibility check integration | 48 | 1 Dev |
| Newsletter/Marketo integration | 36 | 1 Dev |
| LocalControl (account management) integration | 48 | 1 Dev |
| AT&T SSO integration | 32 | 1 Dev |
| Chat widget integration | 24 | 1 Dev |
| Feedback widget integration | 16 | 1 Dev |
| CDN configuration (Fastly) | 24 | 1 DevOps |
| Performance optimization | 28 | 1 Dev |
| QA & testing | 32 | 1 QA |
| **Phase 5 Total** | **368** | |

**Deliverables:**
- All third-party integrations
- Analytics tracking
- Account management integration
- SSO functionality

---

### Phase 6: Content Migration
**Duration: 5-6 weeks | Effort: 620-760 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Import script development | 100 | 1 Dev |
| **Wave 1 - P0 Pages (~220 pages)** | | |
| Homepage & Main pages (5) | 20 | 1 Content |
| Power of FirstNet (10) | 20 | 1 Content |
| Coverage (key pages) (6) | 12 | 1 Content |
| Rate Plans (4) | 8 | 1 Content |
| Top Phones (flagship + rugged) (60) | 30 | Automated |
| Industry Verticals (15) | 23 | 1 Content |
| Mission Critical (10) | 15 | 1 Content |
| Offers & Sign-Up (15) | 23 | 1 Content |
| Key Apps (5) | 8 | 1 Content |
| **Wave 2 - P1 Pages (~450 pages)** | | |
| Remaining Phones (138) | 35 | Automated |
| Tablets (88) | 22 | Automated |
| Smart Devices (21) | 5 | Automated |
| Connected Devices (39) | 10 | Automated |
| IoT Solutions (52) | 26 | 1 Content |
| Remaining Apps (13) | 10 | 1 Content |
| Community - Blogs/Case Studies (60) | 15 | Automated |
| Support (60) | 30 | 1 Content |
| Remaining Coverage (5) | 8 | 1 Content |
| **Wave 3 - P2 Pages (~520 pages)** | | |
| Accessories (25) | 6 | Automated |
| Community - News (180) | 45 | Automated |
| Community - Videos/Events (50) | 13 | Automated |
| Campaigns (50) | 13 | Automated |
| Legal/Resources (25) | 13 | 1 Content |
| Remaining pages (190) | 48 | Automated |
| Image/asset migration | 48 | 1 Content |
| Content QA & validation | 72 | 1 QA + 1 Content |
| Redirects mapping (1,200+ URLs) | 48 | 1 Dev |
| **Phase 6 Total** | **745** | |

**Deliverables:**
- All ~1,187 pages migrated
- Assets transferred
- 1,200+ redirect mappings
- Content validation complete

---

### Phase 7: Testing & Launch
**Duration: 3 weeks | Effort: 280-340 hours**

| Task | Hours | Resources |
|------|-------|-----------|
| Cross-browser testing | 36 | 1 QA |
| Mobile/responsive testing | 40 | 1 QA |
| Accessibility testing (WCAG 2.1) | 48 | 1 QA |
| Performance testing (Lighthouse) | 32 | 1 QA |
| SEO validation | 28 | 1 SEO |
| Security testing | 28 | 1 QA |
| UAT support | 36 | 1 Dev + 1 QA |
| Bug fixes & refinements | 56 | 2 Dev |
| DNS cutover planning | 12 | 1 DevOps |
| Go-live execution | 12 | Team |
| Post-launch monitoring | 24 | 1 DevOps |
| **Phase 7 Total** | **352** | |

**Deliverables:**
- Test reports
- Bug fixes
- Go-live checklist
- Monitoring setup

---

## Total Effort Summary

| Phase | Hours (Low) | Hours (High) |
|-------|-------------|--------------|
| Phase 1: Foundation | 240 | 300 |
| Phase 2: Core Blocks | 640 | 760 |
| Phase 3: Templates | 360 | 440 |
| Phase 4: Secondary Blocks | 240 | 300 |
| Phase 5: Integrations | 340 | 420 |
| Phase 6: Content Migration | 620 | 760 |
| Phase 7: Testing & Launch | 280 | 340 |
| **TOTAL** | **2,720** | **3,320** |

**With 20% contingency: 3,264 - 3,984 hours**

---

## Migration Waves Detail

### Wave 1 (P0) - Weeks 1-10
**~220 pages | Core Experience**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Homepage & Main Pages | 5 | 20 hrs |
| Power of FirstNet | 10 | 20 hrs |
| Coverage (key pages) | 6 | 12 hrs |
| Rate Plans | 4 | 8 hrs |
| Top Phones (flagship + rugged) | 60 | 30 hrs |
| Industry Verticals | 15 | 23 hrs |
| Mission Critical | 10 | 15 hrs |
| Offers & Sign-Up | 15 | 23 hrs |
| Key Apps | 5 | 8 hrs |
| **Wave 1 Total** | **~130** | **159 hrs** |

### Wave 2 (P1) - Weeks 11-18
**~450 pages | Extended Content**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Remaining Phones | 138 | 35 hrs |
| Tablets | 88 | 22 hrs |
| Smart Devices | 21 | 5 hrs |
| Connected Devices | 39 | 10 hrs |
| IoT Solutions | 52 | 26 hrs |
| Remaining Apps | 13 | 10 hrs |
| Community - Blogs/Case Studies | 60 | 15 hrs |
| Support | 60 | 30 hrs |
| Remaining Coverage | 5 | 8 hrs |
| **Wave 2 Total** | **~476** | **161 hrs** |

### Wave 3 (P2) - Weeks 19-26
**~520 pages | Supplementary Content**

| Page Type | Count | Effort |
|-----------|-------|--------|
| Accessories | 25 | 6 hrs |
| Community - News | 180 | 45 hrs |
| Community - Videos/Events | 50 | 13 hrs |
| Campaigns | 50 | 13 hrs |
| Legal/Resources | 25 | 13 hrs |
| Remaining pages | 190 | 48 hrs |
| **Wave 3 Total** | **~520** | **138 hrs** |

---

## Resource Requirements

### Recommended Team Composition

| Role | Count | Phases | Utilization |
|------|-------|--------|-------------|
| Tech Lead / Architect | 1 | All | 100% |
| EDS/Frontend Developer | 3 | 1-5, 7 | 100% |
| UE Configuration Specialist | 1 | 2-4 | 75% |
| Content Migration Specialist | 1-2 | 6 | 100% |
| QA Engineer | 1 | All | 75% |
| DevOps Engineer | 0.5 | 1, 5, 7 | 50% |

**Total: 6-8 FTEs**

### Skill Requirements

- **EDS Development**: HTML, CSS, JavaScript, Franklin/Helix
- **Universal Editor**: AEM UE configuration, component models
- **Integration**: Adobe Analytics, Target, AT&T SSO, REST APIs
- **DevOps**: GitHub Actions, Fastly CDN, DNS management
- **Content**: Markdown, SharePoint/Google Docs authoring

---

## Timeline (Gantt Overview)

```
Week:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
       |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
P1:    ██████                                                                           Foundation (2-3 wks)
P2:        ████████████████████                                                         Core Blocks (5-6 wks)
P3:                    ████████████████                                                 Templates (3-4 wks)
P4:                            ████████████                                             Secondary (2-3 wks)
P5:                                ████████████████                                     Integrations (3-4 wks)
P6:                                        ████████████████████████                     Migration (5-6 wks)
P7:                                                          ████████████               Testing/Launch (3 wks)
       |________Wave 1________|__________Wave 2__________|______Wave 3______|
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
| Large device catalog management | Medium | Medium | Automated import, bulk update tools |

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
| Device pages fully functional | 100% |

---

## Assumptions

1. Access to current FirstNet CMS and content APIs
2. Design assets available (brand guidelines)
3. Stakeholder availability for UAT
4. No major site redesign (migration-only scope)
5. Third-party API documentation available
6. Dedicated author training resources
7. DNS/domain control available for cutover
8. ~60% of device pages can be automated via import scripts
9. AT&T SSO/LocalControl APIs are documented and accessible

---

## Dependencies

1. **Adobe Experience Cloud** - Analytics, Target licenses
2. **AT&T LocalControl** - Account management system access
3. **AT&T SSO** - Single sign-on integration
4. **Newsletter Provider** - Marketo/Eloqua configuration
5. **CDN** - Fastly configuration access
6. **Source CMS** - Read access for content extraction
7. **FirstNet.gov** - External link validation
8. **Eligibility API** - Organization verification system

---

## Synergies with AT&T Business Migration

Since AT&T Business and FirstNet are both being migrated to EDS, there are significant synergies:

### Shared Components
| Component | Reuse Potential | Effort Savings |
|-----------|-----------------|----------------|
| Header/Footer base | 50% | 25 hrs |
| Cards component | 75% | 45 hrs |
| Form component | 65% | 35 hrs |
| CTA Banner | 85% | 18 hrs |
| Design tokens | 40% | 15 hrs |
| CI/CD pipeline | 100% | 16 hrs |
| Analytics integration | 80% | 20 hrs |
| **Total Savings** | | **~174 hrs** |

### Separate Components
- Icon navigation (FirstNet-specific)
- Device templates (FirstNet-specific catalog with 371 devices)
- Eligibility check (FirstNet-specific flow)
- Mission Critical blocks (FirstNet-specific)

---

## Appendix A: Block Development Estimates

| Block | Variants | Design | Develop | Test | Total Hours |
|-------|----------|--------|---------|------|-------------|
| header | 1 | 8 | 20 | 8 | 36 |
| footer | 1 | 8 | 20 | 8 | 36 |
| icon-nav | 2 | 8 | 20 | 8 | 36 |
| hero | 4 | 12 | 44 | 16 | 72 |
| cards | 8 | 24 | 72 | 24 | 120 |
| value-props | 2 | 8 | 24 | 8 | 40 |
| section-heading | 2 | 4 | 8 | 4 | 16 |
| cta-banner | 3 | 8 | 20 | 8 | 36 |
| form | 4 | 16 | 48 | 16 | 80 |
| tabs | 3 | 10 | 24 | 10 | 44 |
| accordion | 2 | 8 | 16 | 8 | 32 |
| table | 4 | 12 | 28 | 12 | 52 |
| device-gallery | 2 | 12 | 36 | 12 | 60 |
| breadcrumb | 1 | 4 | 8 | 4 | 16 |
| columns | 3 | 8 | 12 | 4 | 24 |
| cta-link | 2 | 4 | 8 | 4 | 16 |
| video | 2 | 8 | 16 | 8 | 32 |
| **TOTAL** | | | | | **748** |

---

## Appendix B: Page Migration Estimates (Updated)

| Page Type | Count | Hours/Page | Automated | Total Hours |
|-----------|-------|------------|-----------|-------------|
| Homepage & Main | 5 | 4 | No | 20 |
| Power of FirstNet | 10 | 2 | Partial | 20 |
| Coverage | 11 | 1.5 | Partial | 17 |
| Rate Plans | 4 | 2 | No | 8 |
| Phones (P0) | 60 | 0.5 | Yes | 30 |
| Phones (P1/P2) | 138 | 0.25 | Yes | 35 |
| Tablets | 88 | 0.25 | Yes | 22 |
| Smart Devices | 21 | 0.25 | Yes | 5 |
| Connected Devices | 39 | 0.25 | Yes | 10 |
| Accessories | 25 | 0.25 | Yes | 6 |
| Industry Verticals | 38 | 0.6 | Partial | 23 |
| IoT Solutions | 52 | 0.5 | Partial | 26 |
| Apps | 18 | 1 | Partial | 18 |
| Community - News | 180 | 0.25 | Yes | 45 |
| Community - Videos/Events | 50 | 0.25 | Yes | 13 |
| Community - Case Studies | 4 | 2 | No | 8 |
| Mission Critical | 15 | 1 | Partial | 15 |
| Support | 60 | 0.5 | Partial | 30 |
| Offers & Sign-Up | 30 | 0.75 | Partial | 23 |
| Legal/Resources | 25 | 0.5 | Partial | 13 |
| Campaigns | 50 | 0.25 | Yes | 13 |
| Other | 164 | 0.3 | Yes | 49 |
| **TOTAL** | **~1,187** | | | **489** |

*Note: Additional 256 hours for import script development, QA validation, asset migration, and redirect mapping*

---

## Appendix C: Cost Estimation

| Resource Type | Hours | Rate Range | Cost Range |
|---------------|-------|------------|------------|
| Tech Lead | 520 | $150-200/hr | $78,000-104,000 |
| Senior Developer | 1,650 | $125-175/hr | $206,250-288,750 |
| UE Specialist | 320 | $125-150/hr | $40,000-48,000 |
| Content Specialist | 500 | $75-100/hr | $37,500-50,000 |
| QA Engineer | 380 | $100-125/hr | $38,000-47,500 |
| DevOps | 130 | $125-150/hr | $16,250-19,500 |
| **TOTAL** | **3,500** | | **$416,000-557,750** |

*Note: Rates are estimates and may vary by region and vendor*

---

## Appendix D: Device Page Breakdown

| Device Category | Count | Brand Distribution |
|-----------------|-------|-------------------|
| **Phones** | **198** | |
| - Apple iPhone | 35 | 18% |
| - Samsung Galaxy | 50 | 25% |
| - Google Pixel | 15 | 8% |
| - Motorola | 25 | 13% |
| - Rugged (Kyocera, Sonim, CAT, Zebra) | 40 | 20% |
| - Other (TCL, Nokia, OnePlus) | 33 | 17% |
| **Tablets** | **88** | |
| - Apple iPad | 20 | 23% |
| - Samsung Galaxy Tab | 25 | 28% |
| - Rugged (Dell, Zebra, Panasonic, Getac) | 43 | 49% |
| **Smart Devices** | **21** | |
| - Apple Watch | 8 | 38% |
| - Samsung Galaxy Watch | 8 | 38% |
| - Google Pixel Watch | 5 | 24% |
| **Connected Devices** | **39** | |
| - Hotspots/Routers | 15 | 38% |
| - Body Cameras | 8 | 21% |
| - Fleet/Tracking | 10 | 26% |
| - Other | 6 | 15% |
| **Accessories** | **25** | |
| - Signal Boosters | 5 | 20% |
| - Cases/Mounts | 10 | 40% |
| - Chargers/Batteries | 10 | 40% |
| **TOTAL DEVICES** | **371** | |

---

*Document Version: 2.0*
*Total Pages: ~1,187*
*Total Devices: 371*
*Total Effort: 3,264-3,984 hours (with contingency)*
*Created: January 2026*
*Last Updated: January 2026*
