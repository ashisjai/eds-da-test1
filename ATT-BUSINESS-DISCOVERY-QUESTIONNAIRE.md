# AT&T Business EDS Migration
## Discovery Questionnaire

**Project:** AT&T Business Website Migration to AEM Edge Delivery Services
**Document Version:** 1.0
**Date:** January 2026

---

## Table of Contents

1. [Project Overview & Goals](#1-project-overview--goals)
2. [Stakeholder Information](#2-stakeholder-information)
3. [Current State Assessment](#3-current-state-assessment)
4. [Content & Information Architecture](#4-content--information-architecture)
5. [Design & User Experience](#5-design--user-experience)
6. [Technical Requirements](#6-technical-requirements)
7. [Integrations & Third-Party Systems](#7-integrations--third-party-systems)
8. [Authoring & Workflow](#8-authoring--workflow)
9. [Performance & Scalability](#9-performance--scalability)
10. [Security & Compliance](#10-security--compliance)
11. [SEO & Analytics](#11-seo--analytics)
12. [Migration & Go-Live](#12-migration--go-live)
13. [Support & Maintenance](#13-support--maintenance)
14. [Appendix: Technical Inventory Forms](#appendix-technical-inventory-forms)

---

## Instructions for Completing This Questionnaire

- Please answer all questions as completely as possible
- If a question doesn't apply, mark it as "N/A" with a brief explanation
- For questions requiring documentation, please provide links or attach files
- Indicate confidence level where uncertain: High / Medium / Low
- Flag any questions requiring follow-up discussion with "DISCUSS"

---

## 1. Project Overview & Goals

### 1.1 Business Objectives

**Q1.1.1** What are the primary business objectives for this migration?
```
□ Improve website performance
□ Reduce operational costs
□ Enhance author experience
□ Improve time-to-market for content
□ Better personalization capabilities
□ Improve SEO rankings
□ Modernize technology stack
□ Other: _______________
```

**Q1.1.2** Please rank the top 3 objectives in order of priority:
| Priority | Objective |
|----------|-----------|
| 1 | |
| 2 | |
| 3 | |

**Q1.1.3** What specific business problems are you trying to solve?
```
Response:


```

**Q1.1.4** What does success look like for this project? Define measurable outcomes:
| Success Metric | Current State | Target State | Measurement Method |
|----------------|---------------|--------------|-------------------|
| Page Load Time | | | |
| Bounce Rate | | | |
| Conversion Rate | | | |
| Content Publish Time | | | |
| Author Satisfaction | | | |
| Other: | | | |

### 1.2 Project Scope

**Q1.2.1** What is the scope of this migration?
```
□ Full website migration
□ Partial migration (specific sections only)
□ Phased migration
□ Pilot/proof of concept first
```

**Q1.2.2** If partial/phased, which sections are included in scope?
| Section | In Scope | Phase | Priority |
|---------|----------|-------|----------|
| Homepage | □ Yes □ No | | |
| Product Pages | □ Yes □ No | | |
| Industry Pages | □ Yes □ No | | |
| Small Business | □ Yes □ No | | |
| Blog/Learn | □ Yes □ No | | |
| Support | □ Yes □ No | | |
| Customer Stories | □ Yes □ No | | |
| Other: | □ Yes □ No | | |

**Q1.2.3** What is explicitly OUT of scope?
```
Response:


```

### 1.3 Timeline & Constraints

**Q1.3.1** What is the target go-live date?
```
Date: _______________
□ Hard deadline (contractual/business critical)
□ Soft deadline (preferred but flexible)
```

**Q1.3.2** Are there any blackout periods when deployment cannot occur?
```
Response:


```

**Q1.3.3** Are there any dependencies on other projects or initiatives?
| Dependency | Project/Initiative | Impact | Timeline |
|------------|-------------------|--------|----------|
| | | | |
| | | | |

**Q1.3.4** What are the known constraints or limitations?
```
□ Budget constraints: _______________
□ Resource constraints: _______________
□ Technology constraints: _______________
□ Contractual constraints: _______________
□ Other: _______________
```

---

## 2. Stakeholder Information

### 2.1 Key Stakeholders

**Q2.1.1** Please identify key stakeholders and their roles:

| Name | Title | Department | Role in Project | Decision Authority |
|------|-------|------------|-----------------|-------------------|
| | | | □ Sponsor □ Owner □ Contributor □ Reviewer | □ Final □ Recommend □ Inform |
| | | | □ Sponsor □ Owner □ Contributor □ Reviewer | □ Final □ Recommend □ Inform |
| | | | □ Sponsor □ Owner □ Contributor □ Reviewer | □ Final □ Recommend □ Inform |
| | | | □ Sponsor □ Owner □ Contributor □ Reviewer | □ Final □ Recommend □ Inform |
| | | | □ Sponsor □ Owner □ Contributor □ Reviewer | □ Final □ Recommend □ Inform |

**Q2.1.2** Who is the executive sponsor for this project?
```
Name: _______________
Title: _______________
Contact: _______________
```

**Q2.1.3** Who has final approval authority for:
| Decision Area | Approver Name | Backup Approver |
|---------------|---------------|-----------------|
| Technical architecture | | |
| Design/UX | | |
| Content strategy | | |
| Go-live | | |
| Budget | | |

### 2.2 Team Structure

**Q2.2.1** What internal teams will be involved?
| Team | Responsibilities | Key Contact |
|------|------------------|-------------|
| IT/Development | | |
| Marketing | | |
| Content | | |
| Design/UX | | |
| SEO | | |
| Legal/Compliance | | |
| Analytics | | |
| Other: | | |

**Q2.2.2** What external partners/vendors are involved?
| Vendor | Services Provided | Contract End Date | Key Contact |
|--------|-------------------|-------------------|-------------|
| | | | |
| | | | |

### 2.3 Communication

**Q2.3.1** What is the preferred communication cadence?
```
□ Daily standups
□ Weekly status meetings
□ Bi-weekly reviews
□ Monthly steering committees
□ Other: _______________
```

**Q2.3.2** What tools are used for project communication?
```
□ Email
□ Slack/Teams
□ Jira/Azure DevOps
□ Confluence/SharePoint
□ Other: _______________
```

---

## 3. Current State Assessment

### 3.1 Current Platform

**Q3.1.1** What is the current CMS/platform?
```
Platform: _______________
Version: _______________
Hosting: □ On-premise □ Cloud (Provider: _______) □ Hybrid
```

**Q3.1.2** When was the current platform implemented?
```
Year: _______________
Last major upgrade: _______________
```

**Q3.1.3** What are the pain points with the current platform?
| Pain Point | Severity (1-5) | Impact | Frequency |
|------------|----------------|--------|-----------|
| | | | |
| | | | |
| | | | |

**Q3.1.4** What works well with the current platform that should be preserved?
```
Response:


```

### 3.2 Website Inventory

**Q3.2.1** How many pages exist on the current website?
```
Total pages: _______________
Published pages: _______________
Draft/unpublished: _______________
```

**Q3.2.2** How many unique page templates exist?
```
Number of templates: _______________
Please list them:
1.
2.
3.
4.
5.
```

**Q3.2.3** What content types exist on the site?
| Content Type | Approximate Count | Update Frequency | Owner |
|--------------|-------------------|------------------|-------|
| Product pages | | | |
| Landing pages | | | |
| Blog articles | | | |
| Case studies | | | |
| Press releases | | | |
| Support articles | | | |
| Forms | | | |
| Videos | | | |
| PDFs/Documents | | | |
| Other: | | | |

**Q3.2.4** How many digital assets (images, videos, documents) exist?
| Asset Type | Approximate Count | Storage Location | Total Size |
|------------|-------------------|------------------|------------|
| Images | | | |
| Videos | | | |
| PDFs | | | |
| Other documents | | | |

### 3.3 Traffic & Usage

**Q3.3.1** What is the average monthly traffic?
```
Monthly pageviews: _______________
Monthly unique visitors: _______________
Peak traffic periods: _______________
```

**Q3.3.2** What are the top 10 most visited pages?
| Rank | Page URL | Monthly Pageviews | % of Total |
|------|----------|-------------------|------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |

**Q3.3.3** What is the device breakdown?
```
Desktop: _____%
Mobile: _____%
Tablet: _____%
```

**Q3.3.4** What are the top traffic sources?
```
Organic Search: _____%
Direct: _____%
Paid Search: _____%
Social: _____%
Referral: _____%
Email: _____%
Other: _____%
```

---

## 4. Content & Information Architecture

### 4.1 Site Structure

**Q4.1.1** Please provide or describe the current site structure/hierarchy:
```
□ Sitemap document attached
□ URL: _______________

Top-level sections:
1.
2.
3.
4.
5.
```

**Q4.1.2** How deep is the site hierarchy (levels of navigation)?
```
Maximum depth: _______________ levels
Average depth: _______________ levels
```

**Q4.1.3** Will the site structure change with the migration?
```
□ No changes planned
□ Minor restructuring
□ Major restructuring
□ Complete redesign

If changes, please describe:


```

### 4.2 Navigation

**Q4.2.1** Describe the current navigation structure:
| Navigation Type | Exists | Keep/Change/Remove |
|-----------------|--------|-------------------|
| Main/Primary nav | □ Yes □ No | □ Keep □ Change □ Remove |
| Mega menu | □ Yes □ No | □ Keep □ Change □ Remove |
| Footer nav | □ Yes □ No | □ Keep □ Change □ Remove |
| Breadcrumbs | □ Yes □ No | □ Keep □ Change □ Remove |
| In-page/anchor nav | □ Yes □ No | □ Keep □ Change □ Remove |
| Search | □ Yes □ No | □ Keep □ Change □ Remove |
| Utility nav | □ Yes □ No | □ Keep □ Change □ Remove |

**Q4.2.2** How is navigation currently managed?
```
□ Hardcoded in templates
□ CMS-managed (editable by authors)
□ External system/API
□ Combination
```

**Q4.2.3** Are there any navigation requirements for the new site?
```
Response:


```

### 4.3 Content Governance

**Q4.3.1** Who is responsible for content creation and maintenance?
| Content Type | Content Owner | Review/Approval | Update Frequency |
|--------------|---------------|-----------------|------------------|
| Product content | | | |
| Marketing content | | | |
| Legal/compliance | | | |
| Support content | | | |
| Blog/news | | | |

**Q4.3.2** Is there a content style guide?
```
□ Yes - URL/location: _______________
□ No
□ In development
```

**Q4.3.3** What is the content review/approval process?
```
Response:


```

**Q4.3.4** What content will be migrated vs. created fresh?
```
□ All content migrated as-is
□ All content migrated with cleanup
□ Selective migration (criteria: _______________)
□ All new content
```

### 4.4 Taxonomy & Metadata

**Q4.4.1** What taxonomy/categorization exists?
| Taxonomy Type | Values/Categories | Used For |
|---------------|-------------------|----------|
| Product categories | | |
| Industry verticals | | |
| Content types | | |
| Tags/keywords | | |
| Audience segments | | |
| Other: | | |

**Q4.4.2** What metadata is captured for content?
| Metadata Field | Required | Used For |
|----------------|----------|----------|
| Title | □ Yes □ No | |
| Description | □ Yes □ No | |
| Keywords | □ Yes □ No | |
| Author | □ Yes □ No | |
| Publish date | □ Yes □ No | |
| Expiry date | □ Yes □ No | |
| Category | □ Yes □ No | |
| Tags | □ Yes □ No | |
| Other: | □ Yes □ No | |

---

## 5. Design & User Experience

### 5.1 Brand & Design System

**Q5.1.1** Is there an existing design system or style guide?
```
□ Yes - URL/location: _______________
□ Partial (describe: _______________)
□ No
```

**Q5.1.2** What are the primary brand colors?
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary | | |
| Secondary | | |
| Accent | | |
| Text | | |
| Background | | |

**Q5.1.3** What fonts are used?
| Font Name | Weight(s) | Usage | License |
|-----------|-----------|-------|---------|
| | | | □ Owned □ Licensed □ Free |
| | | | □ Owned □ Licensed □ Free |

**Q5.1.4** Will the visual design change with the migration?
```
□ No change (exact match required)
□ Minor refresh
□ Significant redesign
□ Complete rebrand
```

### 5.2 Components & Patterns

**Q5.2.1** Please identify all UI components/patterns used on the site:

**Heroes & Banners:**
| Component | Exists | Variations | Keep/Modify/Remove |
|-----------|--------|------------|-------------------|
| Hero banner | □ | | □ Keep □ Modify □ Remove |
| Promotional banner | □ | | □ Keep □ Modify □ Remove |
| Alert/notification bar | □ | | □ Keep □ Modify □ Remove |
| Video hero | □ | | □ Keep □ Modify □ Remove |

**Content Blocks:**
| Component | Exists | Variations | Keep/Modify/Remove |
|-----------|--------|------------|-------------------|
| Cards | □ | | □ Keep □ Modify □ Remove |
| Carousel/slider | □ | | □ Keep □ Modify □ Remove |
| Tabs | □ | | □ Keep □ Modify □ Remove |
| Accordion | □ | | □ Keep □ Modify □ Remove |
| Tables | □ | | □ Keep □ Modify □ Remove |
| Pricing tables | □ | | □ Keep □ Modify □ Remove |
| Feature grid | □ | | □ Keep □ Modify □ Remove |
| Testimonials | □ | | □ Keep □ Modify □ Remove |
| Statistics/counters | □ | | □ Keep □ Modify □ Remove |

**Media:**
| Component | Exists | Variations | Keep/Modify/Remove |
|-----------|--------|------------|-------------------|
| Image | □ | | □ Keep □ Modify □ Remove |
| Image gallery | □ | | □ Keep □ Modify □ Remove |
| Video embed | □ | | □ Keep □ Modify □ Remove |
| Video modal | □ | | □ Keep □ Modify □ Remove |

**Interactive:**
| Component | Exists | Variations | Keep/Modify/Remove |
|-----------|--------|------------|-------------------|
| Forms | □ | | □ Keep □ Modify □ Remove |
| Search | □ | | □ Keep □ Modify □ Remove |
| Filters | □ | | □ Keep □ Modify □ Remove |
| Calculators | □ | | □ Keep □ Modify □ Remove |
| Configurators | □ | | □ Keep □ Modify □ Remove |
| Maps | □ | | □ Keep □ Modify □ Remove |
| Chat widget | □ | | □ Keep □ Modify □ Remove |

**Navigation:**
| Component | Exists | Variations | Keep/Modify/Remove |
|-----------|--------|------------|-------------------|
| Breadcrumbs | □ | | □ Keep □ Modify □ Remove |
| Pagination | □ | | □ Keep □ Modify □ Remove |
| Anchor links | □ | | □ Keep □ Modify □ Remove |
| Back to top | □ | | □ Keep □ Modify □ Remove |

**Q5.2.2** Are there any new components required?
```
Response:


```

### 5.3 Responsive Design

**Q5.3.1** What are the current breakpoints?
| Breakpoint Name | Width | Notes |
|-----------------|-------|-------|
| Mobile | | |
| Tablet | | |
| Desktop | | |
| Large desktop | | |

**Q5.3.2** Are there any mobile-specific features or behaviors?
```
Response:


```

**Q5.3.3** Is there a mobile app that integrates with the website?
```
□ No
□ Yes - describe integration: _______________
```

### 5.4 Accessibility

**Q5.4.1** What is the target accessibility compliance level?
```
□ WCAG 2.0 Level A
□ WCAG 2.0 Level AA
□ WCAG 2.1 Level AA (recommended)
□ WCAG 2.1 Level AAA
□ Section 508
□ Other: _______________
```

**Q5.4.2** Has an accessibility audit been conducted on the current site?
```
□ Yes - date: _______________ findings: _______________
□ No
□ In progress
```

**Q5.4.3** Are there specific accessibility requirements?
```
□ Screen reader compatibility
□ Keyboard navigation
□ Color contrast requirements
□ Caption/transcript requirements
□ Other: _______________
```

---

## 6. Technical Requirements

### 6.1 Infrastructure

**Q6.1.1** What is the current hosting environment?
```
Provider: _______________
Type: □ Shared □ Dedicated □ Cloud □ Hybrid
Region(s): _______________
```

**Q6.1.2** What CDN is currently used?
```
□ None
□ Akamai
□ Cloudflare
□ Fastly
□ AWS CloudFront
□ Other: _______________
```

**Q6.1.3** What are the domain requirements?
| Domain | Purpose | SSL Required | Notes |
|--------|---------|--------------|-------|
| www.business.att.com | Production | □ Yes □ No | |
| | Staging | □ Yes □ No | |
| | Development | □ Yes □ No | |
| | Other | □ Yes □ No | |

**Q6.1.4** Are there any geographic/regional requirements?
```
□ Single region
□ Multi-region (specify: _______________)
□ Global CDN required
□ Data residency requirements: _______________
```

### 6.2 Browser & Device Support

**Q6.2.1** What browsers must be supported?
| Browser | Minimum Version | Priority |
|---------|-----------------|----------|
| Chrome | | □ P1 □ P2 □ P3 |
| Safari | | □ P1 □ P2 □ P3 |
| Firefox | | □ P1 □ P2 □ P3 |
| Edge | | □ P1 □ P2 □ P3 |
| Safari iOS | | □ P1 □ P2 □ P3 |
| Chrome Android | | □ P1 □ P2 □ P3 |
| Samsung Internet | | □ P1 □ P2 □ P3 |
| IE 11 | | □ P1 □ P2 □ P3 |

**Q6.2.2** What devices must be supported?
```
□ Desktop (Windows, Mac)
□ Tablets (iPad, Android)
□ Mobile phones (iOS, Android)
□ Other: _______________
```

### 6.3 Performance Requirements

**Q6.3.1** What are the performance targets?
| Metric | Target | Current Baseline |
|--------|--------|------------------|
| Page load time (LCP) | | |
| Time to Interactive (TTI) | | |
| First Input Delay (FID) | | |
| Cumulative Layout Shift (CLS) | | |
| Lighthouse Performance Score | | |
| Time to First Byte (TTFB) | | |

**Q6.3.2** Are there specific SLAs for uptime/availability?
```
Uptime requirement: _______________% (e.g., 99.9%)
Maximum planned downtime: _______________
Maintenance windows: _______________
```

**Q6.3.3** What is the expected traffic capacity?
```
Normal traffic: _______________ concurrent users
Peak traffic: _______________ concurrent users
Expected growth: _______________% annually
```

### 6.4 Development & Deployment

**Q6.4.1** What version control system is used?
```
□ GitHub
□ GitLab
□ Bitbucket
□ Azure DevOps
□ Other: _______________

Repository URL: _______________
```

**Q6.4.2** What CI/CD tools are used?
```
□ GitHub Actions
□ Jenkins
□ Azure Pipelines
□ CircleCI
□ Other: _______________
```

**Q6.4.3** What is the current deployment process?
```
Response:


```

**Q6.4.4** How many environments are required?
| Environment | Purpose | URL Pattern |
|-------------|---------|-------------|
| Development | | |
| QA/Testing | | |
| Staging/UAT | | |
| Production | | |

---

## 7. Integrations & Third-Party Systems

### 7.1 Analytics & Tracking

**Q7.1.1** What analytics platforms are used?
| Platform | Purpose | Implementation |
|----------|---------|----------------|
| Adobe Analytics | □ Yes □ No | □ Direct □ Tag Manager |
| Google Analytics | □ Yes □ No | □ Direct □ Tag Manager |
| Hotjar/FullStory | □ Yes □ No | □ Direct □ Tag Manager |
| Other: | □ Yes □ No | □ Direct □ Tag Manager |

**Q7.1.2** What tag management system is used?
```
□ Adobe Launch
□ Google Tag Manager
□ Tealium
□ None
□ Other: _______________
```

**Q7.1.3** What custom events/tracking exist?
| Event Name | Trigger | Data Captured |
|------------|---------|---------------|
| | | |
| | | |
| | | |

**Q7.1.4** Are there any data layer requirements?
```
□ Yes - documentation: _______________
□ No
```

### 7.2 Marketing Automation

**Q7.2.1** What marketing automation platform is used?
```
□ Marketo
□ Eloqua
□ HubSpot
□ Pardot
□ None
□ Other: _______________
```

**Q7.2.2** How are forms currently integrated?
```
□ Embedded forms
□ API submission
□ Redirect to external form
□ Other: _______________
```

**Q7.2.3** What form types exist?
| Form Type | Platform | Fields | Destination |
|-----------|----------|--------|-------------|
| Contact/RAI | | | |
| Newsletter signup | | | |
| Event registration | | | |
| Gated content | | | |
| Other: | | | |

### 7.3 Personalization & Testing

**Q7.3.1** What personalization platform is used?
```
□ Adobe Target
□ Optimizely
□ Google Optimize
□ None
□ Other: _______________
```

**Q7.3.2** What types of personalization are implemented?
```
□ Audience-based content
□ Geographic targeting
□ Behavioral targeting
□ A/B testing
□ Multivariate testing
□ Recommendations
□ Other: _______________
```

**Q7.3.3** How many active experiments/tests typically run?
```
Number: _______________
Average duration: _______________
```

### 7.4 CRM & Sales Systems

**Q7.4.1** What CRM system is used?
```
□ Salesforce
□ Microsoft Dynamics
□ HubSpot CRM
□ None
□ Other: _______________
```

**Q7.4.2** How does the website integrate with CRM?
```
□ Form submissions
□ Lead scoring
□ Chat transcripts
□ User activity tracking
□ No direct integration
□ Other: _______________
```

### 7.5 Other Integrations

**Q7.5.1** Please list all other third-party integrations:
| System/Service | Purpose | Integration Type | Priority |
|----------------|---------|------------------|----------|
| | | □ API □ Embed □ Tag | □ P1 □ P2 □ P3 |
| | | □ API □ Embed □ Tag | □ P1 □ P2 □ P3 |
| | | □ API □ Embed □ Tag | □ P1 □ P2 □ P3 |
| | | □ API □ Embed □ Tag | □ P1 □ P2 □ P3 |
| | | □ API □ Embed □ Tag | □ P1 □ P2 □ P3 |

**Q7.5.2** Are there any scheduled integration changes?
```
Response:


```

### 7.6 Live Chat & Support

**Q7.6.1** What chat/support systems are used?
```
□ LivePerson
□ Drift
□ Intercom
□ Zendesk Chat
□ None
□ Other: _______________
```

**Q7.6.2** Where does chat appear?
```
□ All pages
□ Specific pages (list: _______________)
□ Based on user behavior
□ Business hours only
```

### 7.7 Social Media

**Q7.7.1** What social integrations exist?
| Platform | Integration Type | Pages/Features |
|----------|------------------|----------------|
| Facebook | □ Share □ Feed □ Login | |
| Twitter/X | □ Share □ Feed □ Login | |
| LinkedIn | □ Share □ Feed □ Login | |
| YouTube | □ Embed □ Feed | |
| Instagram | □ Embed □ Feed | |

---

## 8. Authoring & Workflow

### 8.1 Content Authors

**Q8.1.1** How many content authors are there?
```
Total authors: _______________
Daily active authors: _______________
Occasional authors: _______________
```

**Q8.1.2** What are the author skill levels?
```
Technical (HTML/CSS): _____%
Intermediate: _____%
Basic (WYSIWYG only): _____%
```

**Q8.1.3** What authoring tools are authors familiar with?
```
□ Microsoft Word
□ Google Docs
□ SharePoint
□ Current CMS
□ Markdown
□ Other: _______________
```

### 8.2 Workflows

**Q8.2.1** What content workflows exist?
| Workflow | Steps | Approvers | SLA |
|----------|-------|-----------|-----|
| Standard publish | | | |
| Urgent publish | | | |
| Legal review | | | |
| Scheduled publish | | | |

**Q8.2.2** Are there multi-level approval requirements?
```
□ No - single approval
□ Yes - describe levels:


```

**Q8.2.3** What is the average time from draft to publish?
```
Standard content: _______________
Urgent content: _______________
Legal-reviewed content: _______________
```

### 8.3 Permissions & Access

**Q8.3.1** What permission levels are needed?
| Role | Permissions | Users |
|------|-------------|-------|
| Admin | Full access | |
| Publisher | Create, edit, publish | |
| Editor | Create, edit (no publish) | |
| Contributor | Create only | |
| Reviewer | Comment/approve only | |
| Viewer | Read only | |

**Q8.3.2** Are there content restrictions by section/region?
```
□ No - all authors can edit all content
□ Yes - describe restrictions:


```

### 8.4 Content Preview

**Q8.4.1** What preview capabilities are required?
```
□ Desktop preview
□ Mobile preview
□ Tablet preview
□ In-context editing
□ Side-by-side comparison
□ Scheduled content preview
□ Personalization preview
```

**Q8.4.2** Who needs preview access?
```
□ Authors only
□ Authors + stakeholders
□ Shareable preview links
```

---

## 9. Performance & Scalability

### 9.1 Current Performance

**Q9.1.1** What is the current site performance?
| Metric | Desktop | Mobile |
|--------|---------|--------|
| Lighthouse Performance | | |
| LCP (seconds) | | |
| FID (milliseconds) | | |
| CLS | | |
| Page size (MB) | | |

**Q9.1.2** What performance issues exist?
```
Response:


```

### 9.2 Caching Requirements

**Q9.2.1** What content can be cached?
| Content Type | Cache Duration | Invalidation Trigger |
|--------------|----------------|---------------------|
| Static pages | | |
| Dynamic content | | |
| Assets (images) | | |
| API responses | | |

**Q9.2.2** Are there any caching restrictions?
```
□ No caching for: _______________
□ Geographic variations
□ User-specific content
□ Other: _______________
```

### 9.3 Scalability

**Q9.3.1** What traffic spikes are expected?
| Event | Expected Increase | Duration |
|-------|-------------------|----------|
| Marketing campaigns | | |
| Product launches | | |
| Seasonal peaks | | |
| Media coverage | | |

**Q9.3.2** How should the system handle traffic spikes?
```
□ Auto-scaling
□ Manual scaling with notice
□ Queue/throttle requests
□ Static fallback pages
```

---

## 10. Security & Compliance

### 10.1 Security Requirements

**Q10.1.1** What security certifications/standards apply?
```
□ SOC 2 Type II
□ ISO 27001
□ PCI DSS
□ HIPAA
□ FedRAMP
□ Other: _______________
```

**Q10.1.2** What security features are required?
```
□ SSL/TLS (HTTPS)
□ WAF (Web Application Firewall)
□ DDoS protection
□ Bot protection
□ Rate limiting
□ IP whitelisting/blacklisting
□ Two-factor authentication (admin)
□ Other: _______________
```

**Q10.1.3** Are there data encryption requirements?
```
□ Encryption at rest
□ Encryption in transit
□ Specific encryption standards: _______________
```

### 10.2 Privacy & Compliance

**Q10.2.1** What privacy regulations apply?
```
□ GDPR (EU)
□ CCPA (California)
□ PIPEDA (Canada)
□ LGPD (Brazil)
□ Other: _______________
```

**Q10.2.2** What cookie consent mechanism is required?
```
□ Banner with accept/reject
□ Granular preference center
□ Opt-out only
□ Existing solution: _______________
```

**Q10.2.3** How is user data handled?
```
□ No PII collected on website
□ PII collected - types: _______________
□ Data retention policy: _______________
□ Data deletion process: _______________
```

### 10.3 Content Security

**Q10.3.1** Are there content security policies?
```
□ Content Security Policy (CSP)
□ CORS policies
□ X-Frame-Options
□ Other headers: _______________
```

**Q10.3.2** What domains/scripts should be allowed?
| Type | Allowed Domains |
|------|-----------------|
| Scripts | |
| Styles | |
| Images | |
| Fonts | |
| Media | |
| Frames | |

---

## 11. SEO & Analytics

### 11.1 SEO Requirements

**Q11.1.1** What is the current SEO performance?
```
Domain Authority: _______________
Total indexed pages: _______________
Top ranking keywords: _______________
Organic traffic share: _______________
```

**Q11.1.2** What SEO elements must be preserved?
```
□ URL structure
□ Page titles
□ Meta descriptions
□ H1 tags
□ Canonical URLs
□ Structured data
□ XML sitemap
□ Robots.txt
□ Hreflang tags
□ Internal linking structure
```

**Q11.1.3** Are there URL changes planned?
```
□ No - preserve all URLs
□ Yes - redirect strategy: _______________
```

**Q11.1.4** What structured data is currently implemented?
```
□ Organization
□ Product
□ Article
□ FAQ
□ Breadcrumb
□ LocalBusiness
□ Other: _______________
```

### 11.2 Analytics Requirements

**Q11.2.1** What reports are currently used?
| Report | Frequency | Stakeholders |
|--------|-----------|--------------|
| Traffic overview | | |
| Conversion funnel | | |
| Page performance | | |
| Campaign performance | | |
| Custom reports: | | |

**Q11.2.2** What KPIs are tracked?
| KPI | Current Value | Target | Measurement |
|-----|---------------|--------|-------------|
| Pageviews | | | |
| Sessions | | | |
| Bounce rate | | | |
| Time on site | | | |
| Conversions | | | |
| Form submissions | | | |
| Downloads | | | |
| Other: | | | |

**Q11.2.3** Are there any analytics requirements for the new site?
```
Response:


```

---

## 12. Migration & Go-Live

### 12.1 Content Migration

**Q12.1.1** How should content be migrated?
```
□ Automated migration (all content)
□ Automated with manual cleanup
□ Manual recreation
□ Selective migration
□ Combination approach
```

**Q12.1.2** What content should NOT be migrated?
```
□ Content older than: _______________
□ Low-traffic pages (threshold: _______________)
□ Archived content
□ Specific sections: _______________
```

**Q12.1.3** Who will validate migrated content?
| Content Type | Validator | Timeline |
|--------------|-----------|----------|
| | | |
| | | |

### 12.2 Redirects

**Q12.2.1** How many redirects are expected?
```
1:1 redirects: _______________
Pattern-based redirects: _______________
Existing redirects to preserve: _______________
```

**Q12.2.2** Who will provide/approve the redirect mapping?
```
Name: _______________
Timeline: _______________
```

### 12.3 Testing & UAT

**Q12.3.1** What testing is required before go-live?
| Test Type | Responsibility | Duration | Sign-off |
|-----------|---------------|----------|----------|
| Functional testing | | | |
| Visual regression | | | |
| Performance testing | | | |
| Accessibility testing | | | |
| SEO validation | | | |
| UAT | | | |
| Security testing | | | |

**Q12.3.2** Who are the UAT participants?
| Name | Department | Focus Area |
|------|------------|------------|
| | | |
| | | |

### 12.4 Go-Live Strategy

**Q12.4.1** What is the preferred go-live approach?
```
□ Big bang (all at once)
□ Phased by section
□ Parallel run (old + new)
□ Soft launch + hard launch
```

**Q12.4.2** What is the rollback plan if issues occur?
```
Response:


```

**Q12.4.3** What are the go-live criteria?
```
□ All P1 bugs resolved
□ Performance targets met
□ UAT sign-off received
□ Security scan passed
□ Redirects verified
□ Analytics validated
□ Other: _______________
```

### 12.5 Communication

**Q12.5.1** Who should be notified of the go-live?
| Stakeholder | Notification Timing | Method |
|-------------|---------------------|--------|
| | □ Before □ During □ After | □ Email □ Meeting |
| | □ Before □ During □ After | □ Email □ Meeting |

**Q12.5.2** Is there a planned announcement/press release?
```
□ No
□ Yes - date: _______________
```

---

## 13. Support & Maintenance

### 13.1 Post-Launch Support

**Q13.1.1** What support model is required?
```
□ 24/7 support
□ Business hours only (timezone: _______________)
□ On-call for emergencies
□ Self-service with documentation
```

**Q13.1.2** What are the support SLAs?
| Severity | Response Time | Resolution Time |
|----------|---------------|-----------------|
| Critical (site down) | | |
| High (major feature broken) | | |
| Medium (minor issue) | | |
| Low (enhancement) | | |

### 13.2 Ongoing Maintenance

**Q13.2.1** Who will handle ongoing maintenance?
```
□ Internal team
□ External vendor/agency
□ Hybrid model
□ TBD
```

**Q13.2.2** What ongoing activities are expected?
| Activity | Frequency | Responsibility |
|----------|-----------|----------------|
| Content updates | | |
| Security patches | | |
| Performance monitoring | | |
| Backup verification | | |
| Analytics review | | |

### 13.3 Training

**Q13.3.1** What training is required?
| Audience | Training Type | Duration | Timeline |
|----------|---------------|----------|----------|
| Authors | | | |
| Administrators | | | |
| Developers | | | |
| Stakeholders | | | |

**Q13.3.2** What training materials are needed?
```
□ User guides
□ Video tutorials
□ Quick reference cards
□ Live training sessions
□ Office hours/Q&A
□ Other: _______________
```

---

## Appendix: Technical Inventory Forms

### A1. Current Third-Party Scripts

Please list ALL third-party scripts currently loaded on the site:

| Script Name | URL/Source | Purpose | Load Location | Required |
|-------------|------------|---------|---------------|----------|
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |
| | | | □ Head □ Body □ Footer | □ Yes □ No |

### A2. API Inventory

Please list all APIs consumed by the website:

| API Name | Endpoint | Purpose | Auth Method | Rate Limits |
|----------|----------|---------|-------------|-------------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

### A3. Form Inventory

Please document all forms on the website:

| Form Name | URL | Fields | Submission Endpoint | Success Action |
|-----------|-----|--------|---------------------|----------------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

### A4. Environment Details

**Current Production Environment:**
```
Server OS: _______________
Web Server: _______________
CMS Version: _______________
Database: _______________
PHP/Node Version: _______________
CDN Provider: _______________
SSL Certificate Provider: _______________
DNS Provider: _______________
```

**Access Credentials Needed:**
```
□ CMS admin access
□ Hosting/server access
□ CDN dashboard access
□ DNS management access
□ Analytics access
□ Tag manager access
□ Marketing automation access
□ Repository access
```

### A5. Documentation Checklist

Please provide the following documentation if available:

| Document | Available | Location/Link | Notes |
|----------|-----------|---------------|-------|
| Site architecture diagram | □ Yes □ No | | |
| Design system/style guide | □ Yes □ No | | |
| Brand guidelines | □ Yes □ No | | |
| Content style guide | □ Yes □ No | | |
| SEO guidelines | □ Yes □ No | | |
| Analytics implementation spec | □ Yes □ No | | |
| API documentation | □ Yes □ No | | |
| Security requirements | □ Yes □ No | | |
| Previous audit reports | □ Yes □ No | | |
| User research/personas | □ Yes □ No | | |

---

## Questionnaire Completion

**Completed By:**
```
Name: _______________
Title: _______________
Email: _______________
Date: _______________
```

**Review Status:**
| Section | Reviewed By | Date | Status |
|---------|-------------|------|--------|
| 1. Project Overview | | | □ Complete □ Needs Info |
| 2. Stakeholders | | | □ Complete □ Needs Info |
| 3. Current State | | | □ Complete □ Needs Info |
| 4. Content & IA | | | □ Complete □ Needs Info |
| 5. Design & UX | | | □ Complete □ Needs Info |
| 6. Technical | | | □ Complete □ Needs Info |
| 7. Integrations | | | □ Complete □ Needs Info |
| 8. Authoring | | | □ Complete □ Needs Info |
| 9. Performance | | | □ Complete □ Needs Info |
| 10. Security | | | □ Complete □ Needs Info |
| 11. SEO & Analytics | | | □ Complete □ Needs Info |
| 12. Migration | | | □ Complete □ Needs Info |
| 13. Support | | | □ Complete □ Needs Info |

**Follow-up Items:**
| Item | Owner | Due Date | Status |
|------|-------|----------|--------|
| | | | |
| | | | |
| | | | |

---

*Document Version: 1.0*
*Template Created: January 2026*
