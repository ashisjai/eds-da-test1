# business.att.com - Functional Architecture

## B2B Digital Experience Platform | 749+ Pages | 68 Components

---

## Overview

This document describes the functional architecture of business.att.com, AT&T's B2B digital experience platform built on Adobe Edge Delivery Services with Universal Editor and AEM Cloud Service.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                              USER TOUCHPOINTS                                            │
│   Enterprise Buyers │ SMB Owners │ IT Decision Makers │ Sales Partners │ Customers      │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                         DIGITAL EXPERIENCE FUNCTIONS                                     │
│  Product Discovery │ Content │ Industry Solutions │ Search │ Offers │ Personalization  │
│  Lead Generation │ Support │ Live Engagement │ Feedback │ Media │ Social Sharing       │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                            │
                    ┌───────────────────────┴───────────────────────┐
                    ▼                                               ▼
┌───────────────────────────────────────┐   ┌───────────────────────────────────────────┐
│     CONTENT MANAGEMENT FUNCTIONS      │   │    ANALYTICS & OPTIMIZATION FUNCTIONS     │
│  Authoring │ Workflow │ Asset Mgmt    │   │  Web Analytics │ Experimentation │ B2B    │
└───────────────────────────────────────┘   └───────────────────────────────────────────┘
                                            │
        ┌───────────────────────────────────┼───────────────────────────────────┐
        ▼                                   ▼                                   ▼
┌─────────────────────┐   ┌─────────────────────────────┐   ┌─────────────────────────┐
│ MARKETING AUTOMATION│   │    COMMERCE FUNCTIONS       │   │ COMPLIANCE & GOVERNANCE │
│ Lead Mgmt │ Email   │   │ Product Info │ Quoting     │   │ Privacy │ Accessibility  │
└─────────────────────┘   └─────────────────────────────┘   └─────────────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                        TECHNICAL ENABLEMENT FUNCTIONS                                    │
│  Edge Delivery │ Block Components │ CDN │ Performance │ Tag Mgmt │ SEO │ Security      │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. User Touchpoints

### Target Audiences

| User Segment | Description | Primary Goals |
|--------------|-------------|---------------|
| **Enterprise Buyers** | Large business decision makers | RFP research, procurement, vendor evaluation |
| **SMB Owners** | Small/medium business owners | Self-service purchasing, quick solutions |
| **IT Decision Makers** | Technical evaluators | Technical specs, solution architecture, integration |
| **Sales Partners** | Channel partners, resellers | Partner enablement, sales tools, collateral |
| **Existing Customers** | Current AT&T business customers | Account management, support, upgrades |
| **Researchers** | Industry analysts, content consumers | Reports, case studies, market intelligence |

---

## 2. Digital Experience Functions

### 2.1 Product Discovery
| Function | Description | Content Volume |
|----------|-------------|----------------|
| **Portfolio Browsing** | Navigate 9 solution categories | 9 portfolio pages |
| **Product Catalog** | Browse product offerings | ~150 product pages |
| **Solution Finder** | Guided product selection | Interactive tool |
| **Comparison Tools** | Side-by-side product comparison | Comparison tables |

### 2.2 Content Consumption
| Function | Description | Content Volume |
|----------|-------------|----------------|
| **Customer Stories** | Case studies and success stories | 112 stories |
| **Tech Advice** | Educational articles and guides | ~200 articles |
| **Research Reports** | Industry reports and whitepapers | ~50 reports |
| **Video Content** | Product demos and testimonials | Video library |

### 2.3 Industry Solutions
| Function | Description | Content Volume |
|----------|-------------|----------------|
| **Industry Verticals** | Vertical-specific solutions | 14 industries |
| **Use Case Showcases** | Real-world application examples | Per industry |
| **Vertical Content** | Industry-tailored messaging | Customized pages |
| **Industry Expertise** | Thought leadership content | Expert insights |

### 2.4 Search & Navigation
| Function | Technology | Description |
|----------|------------|-------------|
| **Site Search** | CLUDO | Full-text search across all content |
| **Mega Menu** | Custom block | Multi-level navigation structure |
| **Breadcrumbs** | Auto-generated | Hierarchical path display |
| **Quick Links** | Footer block | Common destination shortcuts |

### 2.5 Offers & Promotions
| Function | Description | Content Volume |
|----------|-------------|----------------|
| **Current Deals** | Active promotional offers | 37 offer pages |
| **Bundle Packages** | Combined product bundles | Multiple bundles |
| **Promotional Banners** | Site-wide promotions | Hero/banner blocks |
| **Limited-Time Offers** | Time-sensitive deals | Rotating offers |

### 2.6 Personalization
| Function | Technology | Description |
|----------|------------|-------------|
| **A/B Testing** | Adobe Target | Experience variations |
| **Segment Targeting** | Adobe Target | Audience-based content |
| **Recommendations** | Adobe Target | Personalized suggestions |
| **Dynamic Content** | Rules-based | Context-aware content |

### 2.7 Lead Generation
| Function | Technology | Description |
|----------|------------|-------------|
| **RAI Form** | Custom block | "Request a Call" lead capture |
| **Contact Forms** | Form block | General inquiries |
| **Email Signup** | Newsletter block | Marketing opt-in |
| **Gated Content** | Form + download | Content in exchange for info |
| **Quote Requests** | Custom form | Pricing inquiries |

### 2.8 Customer Support
| Function | Description | Content Volume |
|----------|-------------|----------------|
| **Support Hub** | Central support destination | 60 support pages |
| **FAQ Sections** | Common questions answered | Per product/topic |
| **Help Topics** | How-to guides | Knowledge base |
| **Contact Options** | Multiple contact methods | Phone, chat, email |
| **Resource Downloads** | Support documentation | PDFs, guides |

### 2.9 Live Engagement
| Function | Technology | Description |
|----------|------------|-------------|
| **Live Chat** | Chat widget | Real-time support |
| **Click-to-Call** | Phone integration | Direct calling |
| **Callback Scheduling** | Calendar integration | Scheduled calls |
| **Sales Rep Connect** | Lead routing | Direct to sales |
| **Virtual Consultation** | Video meeting | Remote consultations |

### 2.10 Feedback & Surveys
| Function | Technology | Description |
|----------|------------|-------------|
| **Surveys** | Foresee | Experience feedback |
| **NPS Collection** | Foresee | Net Promoter Score |
| **User Feedback** | Custom forms | General feedback |
| **Experience Ratings** | Rating component | Content ratings |
| **Content Helpfulness** | Thumbs up/down | Article feedback |

### 2.11 Media & Resources
| Function | Description | Storage |
|----------|-------------|---------|
| **Video Library** | Product demos, testimonials | AEM Assets |
| **Downloadable PDFs** | Datasheets, brochures | AEM Assets |
| **Datasheets** | Product specifications | Document library |
| **Whitepapers** | In-depth reports | Gated content |
| **Infographics** | Visual content | Image library |

### 2.12 Social Sharing
| Function | Description |
|----------|-------------|
| **Share Buttons** | Social media sharing |
| **Social Proof** | Social validation elements |
| **Reviews/Ratings** | Customer reviews |
| **Testimonials** | Customer quotes |
| **Case Study Links** | Success story promotion |

---

## 3. Content Management Functions

### 3.1 Authoring
| Function | Technology | Description |
|----------|------------|-------------|
| **WYSIWYG Editing** | Universal Editor | Visual content editing |
| **In-Context Editing** | Universal Editor | Edit on live preview |
| **Component Library** | 68 blocks | Drag-and-drop components |
| **Multi-Device Preview** | Universal Editor | Desktop/tablet/mobile |
| **Rich Text Editing** | Universal Editor | Formatted text content |
| **Image Selection** | AEM Assets | DAM integration |
| **Link Management** | Universal Editor | Internal/external links |

### 3.2 Workflow
| Function | Description | Process |
|----------|-------------|---------|
| **Content Creation** | Author creates content | Draft state |
| **Review & Approval** | Stakeholder review | Review state |
| **Legal Compliance** | Legal team check | Compliance gate |
| **Scheduled Publishing** | Time-based publish | Scheduled state |
| **Version Rollback** | Restore previous version | Emergency rollback |
| **Multi-Site Governance** | Cross-property rules | Governance policies |
| **Audit Trail** | Activity logging | Compliance tracking |

### 3.3 Asset Management
| Function | Technology | Description |
|----------|------------|-------------|
| **DAM** | AEM Assets | Digital asset repository |
| **Image Library** | AEM Assets | Organized image storage |
| **Video Hosting** | AEM Assets | Video management |
| **Document Repository** | AEM Assets | PDF/document storage |
| **Smart Crop** | AI-powered | Automatic image cropping |
| **Auto-Renditions** | AEM Assets | Size variations |
| **Metadata Tagging** | AEM Assets | Asset organization |

---

## 4. Analytics & Optimization Functions

### 4.1 Web Analytics
| Function | Technology | Description |
|----------|------------|-------------|
| **Page Analytics** | Adobe Analytics | Page views, sessions |
| **User Journeys** | Adobe Analytics | Path analysis |
| **Conversion Tracking** | Adobe Analytics | Goal completions |
| **Event Tracking** | Adobe Analytics | User interactions |
| **Custom Dimensions** | Adobe Analytics | Business-specific metrics |
| **Real-Time Dashboards** | Adobe Analytics | Live reporting |

### 4.2 Experimentation
| Function | Technology | Description |
|----------|------------|-------------|
| **A/B Testing** | Adobe Target | Two-variant tests |
| **Multivariate Tests** | Adobe Target | Multiple variable tests |
| **Experience Targeting** | Adobe Target | Rule-based targeting |
| **Auto-Personalization** | Adobe Target | AI-driven personalization |
| **Recommendations** | Adobe Target | Product/content suggestions |
| **Audience Segments** | Adobe Target | User groupings |

### 4.3 B2B Intelligence
| Function | Technology | Description |
|----------|------------|-------------|
| **ABM Analytics** | Demandbase | Account-based marketing |
| **Intent Data** | Bombora | Buying intent signals |
| **Session Analytics** | Quantum Metrics | Detailed session replay |
| **Account Identification** | Demandbase | Company recognition |
| **Firmographic Data** | Demandbase | Company attributes |
| **Buying Signals** | Bombora | Purchase indicators |
| **Lead Scoring** | Combined | Qualification scoring |

---

## 5. Marketing Automation Functions

### 5.1 Lead Management
| Function | Technology | Description |
|----------|------------|-------------|
| **CRM Sync** | Salesforce | Lead data synchronization |
| **Lead Routing** | Salesforce | Assignment rules |
| **Lead Scoring** | Salesforce + Eloqua | Qualification scoring |
| **Nurture Campaigns** | Eloqua | Automated nurturing |
| **Sales Notifications** | Salesforce | Alert triggers |

### 5.2 Email Marketing
| Function | Technology | Description |
|----------|------------|-------------|
| **Email Platform** | Oracle Eloqua | Campaign management |
| **Newsletter Signups** | Form integration | List building |
| **Drip Campaigns** | Eloqua | Automated sequences |
| **Triggered Emails** | Eloqua | Behavior-based sends |
| **Preference Center** | Eloqua | Subscription management |

---

## 6. Commerce Functions

### 6.1 Product Information
| Function | Description | Integration |
|----------|-------------|-------------|
| **Product Catalog** | Product data display | Product API |
| **Pricing Display** | Current pricing | Pricing API |
| **Plan Comparison** | Side-by-side plans | Comparison block |
| **Feature Matrices** | Feature breakdown | Table block |
| **Availability Check** | Stock/availability | Inventory API |

### 6.2 Quoting & Orders
| Function | Description | Integration |
|----------|-------------|-------------|
| **Quote Builder** | Configure quotes | Quote API |
| **Configuration Tools** | Product configuration | Config API |
| **Order Initiation** | Start order process | Order API |
| **Cart Handoff** | Transfer to commerce | Cart API |
| **Sales Handover** | Pass to sales team | CRM integration |

---

## 7. Compliance & Governance Functions

### 7.1 Privacy
| Function | Technology | Compliance |
|----------|------------|------------|
| **Consent Management** | OneTrust | Cookie consent |
| **Cookie Management** | OneTrust | Cookie controls |
| **GDPR Compliance** | OneTrust | EU privacy |
| **CCPA Compliance** | OneTrust | CA privacy |
| **Privacy Policy** | Legal content | Policy pages |

### 7.2 Accessibility
| Standard | Requirement | Implementation |
|----------|-------------|----------------|
| **WCAG 2.1 AA** | W3C standard | Full compliance |
| **Screen Reader** | Assistive tech | ARIA labels |
| **Keyboard Navigation** | No mouse required | Tab order |
| **Alt Text** | Image descriptions | All images |
| **Color Contrast** | 4.5:1 minimum | Design tokens |

---

## 8. Technical Enablement Functions

### 8.1 Edge Delivery
| Function | Technology | Performance |
|----------|------------|-------------|
| **Helix Pipeline** | Adobe EDS | Content processing |
| **HTML Generation** | Server-side | Static HTML output |
| **Block Decoration** | Client-side JS | Component enhancement |
| **TTFB** | Edge delivery | Sub-second response |

### 8.2 Block Components
| Category | Count | Examples |
|----------|-------|----------|
| **Navigation** | 2 | header, footer |
| **Hero** | 7 | full, split, video, carousel |
| **Cards** | 4 | standard, offer, story, product |
| **Interactive** | 7 | tabs, accordion, carousel |
| **Forms** | 4 | rai-form, contact, email |
| **Content** | 8+ | columns, article, quote |
| **Total** | **68** | Full component library |

### 8.3 CDN & Caching
| Function | Technology | Configuration |
|----------|------------|---------------|
| **Global CDN** | Fastly | 40+ PoP locations |
| **Edge Caching** | Fastly | HTML: 10 min, Assets: 1 year |
| **Image Optimization** | Fastly | WebP/AVIF conversion |
| **SSL/TLS** | Fastly | HTTPS termination |

### 8.4 Performance
| Metric | Target | Current |
|--------|--------|---------|
| **LCP** | < 2.5s | Achieved |
| **FID** | < 100ms | Achieved |
| **CLS** | < 0.1 | Achieved |
| **Lighthouse** | > 90 | Achieved |

### 8.5 Tag Management
| Function | Technology | Description |
|----------|------------|-------------|
| **Tag Container** | Adobe Launch | Central tag management |
| **Third-Party Scripts** | Delayed loading | Performance optimization |
| **Event Triggers** | Launch rules | Conditional firing |

### 8.6 SEO
| Function | Implementation | Description |
|----------|----------------|-------------|
| **Semantic HTML** | HTML5 elements | Proper structure |
| **Schema.org** | JSON-LD markup | Rich snippets |
| **Meta Tags** | Dynamic generation | Title, description |
| **Sitemap** | Auto-generated | Search engine indexing |

### 8.7 Security
| Function | Technology | Protection |
|----------|------------|------------|
| **WAF** | Fastly | Application firewall |
| **SSL/TLS** | Fastly | Encryption |
| **DDoS Protection** | Fastly | Attack mitigation |
| **Bot Management** | Fastly | Bad bot blocking |

---

## Key Functional Metrics

| Metric | Value | Description |
|--------|-------|-------------|
| **Total Pages** | 749+ | Content pages |
| **Components** | 68 | Reusable blocks |
| **Portfolios** | 9 | Solution categories |
| **Products** | ~150 | Product pages |
| **Industries** | 14 | Vertical markets |
| **Case Studies** | 112 | Customer stories |
| **Support Pages** | 60 | Help content |
| **Offers** | 37 | Promotional pages |

---

## Content Distribution by Function

```
Product Discovery    ████████████████████  ~150 pages
Content/Learn        ████████████████████████████████████████  ~400 pages
Industry Solutions   ██████  14 pages
Support              ████████████  60 pages
Offers               ████████  37 pages
Portfolios           ████  9 pages
Other                ████████████████████  ~79 pages
                     ─────────────────────────────────────────
                     Total: 749+ pages
```

---

*Document Version: 1.0*
*Updated: January 2026*
*Platform: Edge Delivery Services + AEM Cloud + Universal Editor*
