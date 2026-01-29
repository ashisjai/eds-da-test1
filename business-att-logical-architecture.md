# business.att.com - Logical Architecture

## Edge Delivery Services | AEM Cloud | Universal Editor

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                              PRESENTATION LAYER                                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │ Client Devices  │  │ Web Experience  │  │  Performance    │  │ SEO/Accessibility│    │
│  │ Desktop/Mobile  │  │ HTML/CSS/JS     │  │  Core Web Vitals│  │ WCAG 2.1 AA     │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                               EDGE / CDN LAYER                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Fastly   │  │   WAF    │  │ SSL/TLS  │  │  Edge    │  │  Cache   │  │  Image   │   │
│  │   CDN    │  │ Security │  │  HTTPS   │  │ Compute  │  │ Strategy │  │ Optimize │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER (Edge Delivery Services)                          │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐             │
│  │   Helix Pipeline    │  │   Block Library     │  │  Scripts & Styles   │             │
│  │ Fetch → Generate →  │  │  68 Components      │  │  scripts.js         │             │
│  │ Decorate → Optimize │  │  Hero, Cards, Forms │  │  styles.css         │             │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘             │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          CONTENT MANAGEMENT LAYER                                        │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐             │
│  │  Universal Editor   │  │ AEM Cloud Service   │  │   AEM Assets (DAM)  │             │
│  │  WYSIWYG Editing    │  │ Content Repository  │  │  Images/Videos/Docs │             │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘             │
└─────────────────────────────────────────────────────────────────────────────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                             INTEGRATION LAYER                                            │
│  Analytics │ Target │ Launch │ CLUDO │ RAI Form │ Live Chat │ Salesforce │ OneTrust    │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Presentation Layer

### Client Devices
| Device | Browsers | Users |
|--------|----------|-------|
| **Desktop** | Chrome, Edge, Firefox, Safari | Enterprise users |
| **Mobile** | iOS Safari, Chrome Android | Field sales, SMB |
| **Tablet** | iPad, Surface | Hybrid users |

- **Total Pages**: 749+
- **Design**: Fully responsive
- **Target Audience**: B2B Customers, Enterprise, SMB

### Web Experience
| Component | Description |
|-----------|-------------|
| **Static HTML/CSS/JS** | Server-rendered, cacheable content |
| **Block Components** | 68 reusable UI components |
| **Lazy-Load Images** | Progressive loading for performance |
| **Third-Party Scripts** | Analytics, chat, forms (delayed load) |

### Performance (Core Web Vitals)
| Metric | Target | Description |
|--------|--------|-------------|
| **LCP** | < 2.5s | Largest Contentful Paint |
| **FID** | < 100ms | First Input Delay |
| **CLS** | < 0.1 | Cumulative Layout Shift |
| **Lighthouse** | > 90 | Overall performance score |

### SEO & Accessibility
- Semantic HTML5 structure
- Open Graph / Schema.org markup
- WCAG 2.1 AA compliance
- Sitemap.xml / Robots.txt
- Canonical URLs / Meta tags

---

## 2. Edge / CDN Layer

### Fastly CDN
| Feature | Details |
|---------|---------|
| **Edge Caching** | Global content distribution |
| **PoP Locations** | 40+ worldwide |
| **Regions** | Americas, EMEA, APAC |

### Security Components
| Component | Function |
|-----------|----------|
| **WAF** | Web Application Firewall |
| **DDoS Protection** | Distributed denial-of-service mitigation |
| **Bot Management** | Malicious bot detection and blocking |
| **SSL/TLS** | HTTPS termination, certificate management |

### Edge Compute
- URL redirects and rewrites
- A/B testing at edge
- Geolocation-based routing
- Request/response transformation

### Cache Strategy
| Content Type | Cache Policy |
|--------------|--------------|
| **HTML** | `s-maxage=600` (10 minutes) |
| **CSS/JS** | `immutable`, 1 year |
| **Images** | `immutable`, 1 year |
| **Fonts** | `immutable`, 1 year |

### Image Optimization
- WebP / AVIF automatic conversion
- Responsive srcset generation
- Quality optimization
- Lazy loading support

---

## 3. Application Layer (Edge Delivery Services)

### Helix Pipeline
```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Content Fetch│───▶│HTML Generate │───▶│Block Decorate│───▶│   Optimize   │
│              │    │              │    │              │    │              │
│ Fetch from   │    │ Transform to │    │ Apply block  │    │ Minify,      │
│ AEM/GitHub   │    │ HTML output  │    │ JavaScript   │    │ compress     │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

- **Content-first rendering**: Sub-second TTFB
- **Progressive enhancement**: Core content loads first
- **Block decoration**: Client-side enhancement

### Block Library (68 Components)

| Category | Count | Components |
|----------|-------|------------|
| **Navigation** | 2 | header, footer, mega-menu |
| **Hero** | 7 | hero-full, hero-split, hero-video, hero-carousel, hero-animated, hero-minimal, hero-industry |
| **Cards** | 4 | cards, cards-offer, cards-story, cards-product |
| **Interactive** | 7 | tabs, accordion, carousel, modal, tooltip, mega-menu, search |
| **Forms** | 4 | form, rai-form, email-signup, contact-form |
| **Content** | 8 | columns, article, quote, stats, testimonial, author, tags, share |
| **Media** | 3 | video, image-gallery, embed |
| **CTA/Promo** | 5 | cta-banner, promo, alert, announcement, sticky-cta |
| **Tables** | 3 | table, comparison, pricing |
| **Support** | 6 | support-grid, contact-card, faq, chat-widget, help-topic, resource-links |
| **Industry** | 3 | solution-cards, industry-hero, use-case |
| **Offers** | 4 | offer-card, deal-banner, promo-tile, bundle |

### Scripts & Styles
| File | Purpose |
|------|---------|
| `scripts.js` | Core application logic |
| `styles.css` | Global styles and design tokens |
| `delayed.js` | Lazy-loaded third-party scripts |
| `fonts.css` | AT&T Aleck Sans font definitions |

### Preview / Publish Environments
| Environment | URL | Purpose |
|-------------|-----|---------|
| **Preview** | `main--att-business--ashisjai.aem.page` | Development preview |
| **Staging** | `main--att-business--ashisjai.aem.live` | UAT / Staging |
| **Production** | `business.att.com` | Live site |

---

## 4. Content Management Layer

### Universal Editor
| Feature | Description |
|---------|-------------|
| **URL** | `experience.adobe.com/aem/editor` |
| **Editing** | WYSIWYG in-context editing |
| **Components** | 68 block component library |
| **Properties** | Visual properties inspector |
| **Preview** | Multi-device preview (Desktop, Tablet, Mobile) |

### AEM as a Cloud Service
| Feature | Description |
|---------|-------------|
| **Repository** | JCR (Java Content Repository) |
| **Workflows** | Content approval workflows |
| **Versioning** | Full version control |
| **Publishing** | Replication to publish tier |
| **URL** | `author-pXXXX-eYYYY.adobeaemcloud.com` |

### Content Structure
```
/content/att-business/
├── /en/
│   ├── index                      # Homepage
│   ├── /portfolios/               # Portfolio pages (9)
│   │   ├── mobility
│   │   ├── business-internet
│   │   └── cybersecurity
│   ├── /products/                 # Product pages (~150)
│   ├── /learn/                    # Content hub (~400)
│   │   ├── /customer-stories/     # Case studies (112)
│   │   ├── /tech-advice/
│   │   └── /research-reports/
│   ├── /industries/               # Industry pages (14)
│   ├── /support/                  # Support pages (60)
│   └── /offers/                   # Offer pages (37)
└── /es/ (future)                  # Spanish content
```

### AEM Assets (DAM)
| Feature | Description |
|---------|-------------|
| **Path** | `/content/dam/att-business/` |
| **Assets** | images/, videos/, documents/ |
| **Smart Crop** | AI-powered image cropping |
| **Dynamic Media** | On-the-fly image transformation |
| **Renditions** | Auto-generated sizes (web, mobile, thumbnail) |
| **Metadata** | Full metadata management |

---

## 5. Code Repository

### GitHub Repository
**Repository**: `ashisjai/eds-da-test1`

```
att-business/
├── blocks/                        # 68 component implementations
│   ├── hero/
│   │   ├── hero.js               # Block decoration logic
│   │   └── hero.css              # Block styling
│   ├── cards/
│   ├── carousel/
│   ├── accordion/
│   ├── tabs/
│   ├── form/
│   ├── rai-form/
│   └── ... (61 more blocks)
│
├── styles/                        # Global styles
│   ├── styles.css                # Main stylesheet
│   ├── fonts.css                 # AT&T Aleck Sans
│   └── tokens.css                # Design tokens
│
├── scripts/                       # Core scripts
│   ├── scripts.js                # Main scripts
│   ├── aem.js                    # AEM utilities
│   └── delayed.js                # Lazy-loaded scripts
│
├── component-definition.json      # UE component definitions
├── component-models.json          # UE field models
├── component-filters.json         # UE component filters
├── fstab.yaml                     # AEM content source mapping
├── head.html                      # Custom head elements
└── paths.json                     # URL path mappings
```

### Universal Editor Configuration Files

**component-definition.json**
```json
{
  "groups": [
    { "title": "Hero", "id": "hero" },
    { "title": "Cards", "id": "cards" },
    { "title": "Content", "id": "content" }
  ],
  "components": [
    { "title": "Hero", "id": "hero", "plugins": {...} },
    { "title": "Cards", "id": "cards", "plugins": {...} }
  ]
}
```

**fstab.yaml**
```yaml
mountpoints:
  /:
    url: https://author-pXXXX-eYYYY.adobeaemcloud.com/content/att-business/en
    type: markup
```

---

## 6. Integration Layer

### Adobe Experience Cloud
| Service | Purpose | Integration |
|---------|---------|-------------|
| **Adobe Analytics** | Web analytics | AppMeasurement, Launch |
| **Adobe Target** | A/B testing, personalization | at.js, Launch |
| **Adobe Launch** | Tag management | Container script |

### Third-Party Integrations
| Service | Purpose | Integration Method |
|---------|---------|-------------------|
| **CLUDO Search** | Site search | JavaScript SDK |
| **RAI Form** | Lead capture | REST API |
| **Live Chat** | Customer support | Widget embed |
| **Salesforce CRM** | Lead management | API integration |
| **OneTrust** | Consent management | JavaScript SDK |
| **Foresee** | Feedback surveys | JavaScript SDK |

### Marketing Integrations
| Service | Purpose |
|---------|---------|
| **Oracle Eloqua** | Email marketing |
| **Demandbase** | ABM analytics |
| **Bombora** | Intent data |
| **Quantum Metrics** | Digital analytics |

---

## 7. Security & Compliance

### Authentication & Authorization
| Component | Description |
|-----------|-------------|
| **Adobe IMS** | Single Sign-On (SSO) |
| **OAuth 2.0** | Token-based authentication |
| **JWT** | JSON Web Token validation |
| **RBAC** | Role-Based Access Control |

### Roles
| Role | Access |
|------|--------|
| **Admin** | Full AEM + UE access |
| **Author** | Content editing in UE |
| **Reviewer** | Preview only access |
| **Developer** | Code repo + preview |

### Edge Security
| Feature | Description |
|---------|-------------|
| **Fastly Shield** | Origin protection |
| **WAF** | Web Application Firewall |
| **DDoS Mitigation** | Attack protection |
| **Bot Management** | Bad bot blocking |
| **Rate Limiting** | Request throttling |

### Application Security
| Control | Implementation |
|---------|----------------|
| **CSP Headers** | Content Security Policy |
| **CORS Policy** | Cross-Origin Resource Sharing |
| **Input Validation** | Server-side validation |
| **XSS Protection** | Output encoding |

### Privacy & Compliance
| Standard | Status |
|----------|--------|
| **GDPR** | Compliant |
| **CCPA** | Compliant |
| **SOC 2 Type II** | Certified |
| **OneTrust** | Consent management active |

---

## Environment URLs

| Environment | URL | Purpose |
|-------------|-----|---------|
| **AEM Author** | `https://author-pXXXX-eYYYY.adobeaemcloud.com` | Content authoring |
| **AEM Publish** | `https://publish-pXXXX-eYYYY.adobeaemcloud.com` | Content delivery API |
| **Universal Editor** | `https://experience.adobe.com/aem/editor` | Visual authoring |
| **Preview** | `https://main--att-business--ashisjai.aem.page` | Development preview |
| **Live/Staging** | `https://main--att-business--ashisjai.aem.live` | UAT environment |
| **Production** | `https://business.att.com` | Live site (Fastly CDN) |

---

## Key Metrics

| Metric | Value |
|--------|-------|
| **Total Pages** | 749+ |
| **Block Components** | 68 |
| **LCP Target** | < 2.5s |
| **Lighthouse Score** | > 90 |
| **CDN PoPs** | 40+ globally |
| **Cache Hit Ratio** | > 95% |

---

*Document Version: 1.0*
*Updated: January 2026*
*Architecture: Edge Delivery Services with Universal Editor + AEM Cloud*
