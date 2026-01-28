# AT&T Business - Edge Delivery Services Architecture
## Universal Editor with AEM as Content Source

---

## High-Level Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                    AT&T BUSINESS EDS ARCHITECTURE (UE + AEM)                             │
└─────────────────────────────────────────────────────────────────────────────────────────┘

                                    ┌─────────────────┐
                                    │   CONTENT       │
                                    │   AUTHORS       │
                                    │   (Marketing)   │
                                    └────────┬────────┘
                                             │
                                             ▼
                    ┌────────────────────────────────────────────────┐
                    │              UNIVERSAL EDITOR                   │
                    │         experience.adobe.com/aem/editor         │
                    │                                                 │
                    │   ┌─────────────┐  ┌─────────────┐  ┌────────┐ │
                    │   │  Component  │  │   Content   │  │Preview │ │
                    │   │   Library   │  │   Palette   │  │ Panel  │ │
                    │   └─────────────┘  └─────────────┘  └────────┘ │
                    └────────────────────────┬───────────────────────┘
                                             │
                                             │ AEM Content API
                                             ▼
                    ┌────────────────────────────────────────────────┐
                    │           AEM AS A CLOUD SERVICE                │
                    │              (Content Source)                   │
                    │                                                 │
                    │   ┌─────────────────────────────────────────┐  │
                    │   │           CONTENT REPOSITORY             │  │
                    │   │                                         │  │
                    │   │  /content/att-business/                 │  │
                    │   │  ├── /en/                               │  │
                    │   │  │   ├── index                          │  │
                    │   │  │   ├── /products/                     │  │
                    │   │  │   ├── /portfolios/                   │  │
                    │   │   │   ├── /learn/                        │  │
                    │   │  │   └── /support/                      │  │
                    │   │  └── /es/ (future)                      │  │
                    │   └─────────────────────────────────────────┘  │
                    │                                                 │
                    │   ┌─────────────────────────────────────────┐  │
                    │   │              AEM ASSETS (DAM)            │  │
                    │   │                                         │  │
                    │   │  /content/dam/att-business/             │  │
                    │   │  ├── /images/                           │  │
                    │   │  ├── /videos/                           │  │
                    │   │  ├── /documents/                        │  │
                    │   │  └── /icons/                            │  │
                    │   └─────────────────────────────────────────┘  │
                    └────────────────────────┬───────────────────────┘
                                             │
                                             │ Content Sync
                                             ▼
                              ┌─────────────────────────┐
                              │      GITHUB REPO        │
                              │  ashisjai/eds-da-test1  │
                              │                         │
                              │  ├── blocks/  (68)      │
                              │  ├── styles/            │
                              │  ├── scripts/           │
                              │  └── component-*.json   │
                              └───────────┬─────────────┘
                                          │
                          ┌───────────────┼───────────────┐
                          │               │               │
                          ▼               ▼               ▼
               ┌─────────────────┐ ┌─────────────┐ ┌─────────────────┐
               │   AEM.PAGE      │ │  AEM.LIVE   │ │   FASTLY CDN    │
               │   (Preview)     │ │ (Staging)   │ │   (Production)  │
               │                 │ │             │ │                 │
               │ main--att--     │ │ Staging     │ │ business.att.com│
               │ aem.page        │ │ Environment │ │                 │
               └────────┬────────┘ └──────┬──────┘ └────────┬────────┘
                        └─────────────────┼─────────────────┘
                                          ▼
                              ┌─────────────────────────┐
                              │       END USERS         │
                              │    business.att.com     │
                              └─────────────────────────┘
```

---

## Detailed AEM + Universal Editor Architecture

### 1. Content Authoring Layer

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           CONTENT AUTHORING LAYER                                        │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │                        UNIVERSAL EDITOR (UE)                                       │ │
│  │                   experience.adobe.com/aem/editor                                  │ │
│  │                                                                                    │ │
│  │   ┌────────────────────────────────────────────────────────────────────────────┐  │ │
│  │   │                         EDITING INTERFACE                                   │  │ │
│  │   │                                                                            │  │ │
│  │   │  ┌──────────────┐  ┌──────────────────┐  ┌──────────────┐  ┌───────────┐  │  │ │
│  │   │  │  Component   │  │   Properties     │  │   Preview    │  │  Publish  │  │  │ │
│  │   │  │   Library    │  │   Inspector      │  │    Panel     │  │  Actions  │  │  │ │
│  │   │  │              │  │                  │  │              │  │           │  │  │ │
│  │   │  │ ┌──────────┐ │  │ • Title          │  │ ┌──────────┐ │  │ • Preview │  │  │ │
│  │   │  │ │  Hero    │ │  │ • Description    │  │ │ Desktop  │ │  │ • Publish │  │  │ │
│  │   │  │ │  Cards   │ │  │ • Image          │  │ │ Tablet   │ │  │ • Schedule│  │  │ │
│  │   │  │ │  Carousel│ │  │ • CTA Link       │  │ │ Mobile   │ │  │ • Revert  │  │  │ │
│  │   │  │ │  Tabs    │ │  │ • Background     │  │ └──────────┘ │  │           │  │  │ │
│  │   │  │ │  Form    │ │  │ • Styling        │  │              │  │           │  │  │ │
│  │   │  │ │  Table   │ │  │                  │  │              │  │           │  │  │ │
│  │   │  │ └──────────┘ │  │                  │  │              │  │           │  │  │ │
│  │   │  └──────────────┘  └──────────────────┘  └──────────────┘  └───────────┘  │  │ │
│  │   └────────────────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                                    │ │
│  │   ┌────────────────────────────────────────────────────────────────────────────┐  │ │
│  │   │                      COMPONENT DEFINITIONS                                  │  │ │
│  │   │                                                                            │  │ │
│  │   │   component-definition.json                                                │  │ │
│  │   │   ├── groups: [hero, cards, content, media, forms, navigation]            │  │ │
│  │   │   ├── components:                                                          │  │ │
│  │   │   │   ├── hero: { fields: [title, subtitle, image, cta, background] }     │  │ │
│  │   │   │   ├── cards: { fields: [items[], layout, columns, style] }            │  │ │
│  │   │   │   ├── carousel: { fields: [slides[], autoplay, duration] }            │  │ │
│  │   │   │   ├── form: { fields: [action, method, fields[], validation] }        │  │ │
│  │   │   │   └── ... (68 total components)                                       │  │ │
│  │   │   └── filters: { page-templates, allowed-components }                      │  │ │
│  │   │                                                                            │  │ │
│  │   │   component-models.json                                                    │  │ │
│  │   │   ├── models:                                                              │  │ │
│  │   │   │   ├── hero-model: { title: text, image: reference, cta: object }      │  │ │
│  │   │   │   ├── cards-model: { items: multifield, layout: select }              │  │ │
│  │   │   │   └── ... (field definitions for all components)                      │  │ │
│  │   └────────────────────────────────────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                             │                                           │
│                                             │ IMS Authentication                        │
│                                             │ Content API (CRUD)                        │
│                                             ▼                                           │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │                      AEM AS A CLOUD SERVICE                                        │ │
│  │                                                                                    │ │
│  │   ┌──────────────────────────────┐    ┌──────────────────────────────┐           │ │
│  │   │     AUTHOR ENVIRONMENT       │    │    PUBLISH ENVIRONMENT       │           │ │
│  │   │                              │    │                              │           │ │
│  │   │  • Content creation          │    │  • Content delivery          │           │ │
│  │   │  • Workflow management       │───▶│  • CDN integration           │           │ │
│  │   │  • Preview                   │    │  • Cache management          │           │ │
│  │   │  • Version control           │    │  • Replication               │           │ │
│  │   │                              │    │                              │           │ │
│  │   └──────────────────────────────┘    └──────────────────────────────┘           │ │
│  │                                                                                    │ │
│  │   ┌────────────────────────────────────────────────────────────────────────────┐  │ │
│  │   │                        CONTENT STRUCTURE                                    │  │ │
│  │   │                                                                            │  │ │
│  │   │   /content/att-business/                                                   │  │ │
│  │   │   │                                                                        │  │ │
│  │   │   ├── /en/                           # English content                     │  │ │
│  │   │   │   ├── index                      # Homepage                            │  │ │
│  │   │   │   ├── /portfolios/               # Portfolio pages (9)                 │  │ │
│  │   │   │   │   ├── mobility               # Wireless services                   │  │ │
│  │   │   │   │   ├── business-internet      # Internet services                   │  │ │
│  │   │   │   │   ├── cybersecurity          # Security solutions                  │  │ │
│  │   │   │   │   └── ...                                                          │  │ │
│  │   │   │   ├── /products/                 # Product pages (~150)                │  │ │
│  │   │   │   │   ├── att-business-fiber                                           │  │ │
│  │   │   │   │   ├── wireless-plans                                               │  │ │
│  │   │   │   │   └── ...                                                          │  │ │
│  │   │   │   ├── /learn/                    # Content hub (~400)                  │  │ │
│  │   │   │   │   ├── /customer-stories/     # Case studies (112)                  │  │ │
│  │   │   │   │   ├── /tech-advice/          # Articles                            │  │ │
│  │   │   │   │   └── /research-reports/     # Reports                             │  │ │
│  │   │   │   ├── /industries/               # Industry pages (14)                 │  │ │
│  │   │   │   ├── /support/                  # Support pages (60)                  │  │ │
│  │   │   │   └── /offers/                   # Offer pages (37)                    │  │ │
│  │   │   │                                                                        │  │ │
│  │   │   └── /es/ (future)                  # Spanish content                     │  │ │
│  │   │                                                                            │  │ │
│  │   └────────────────────────────────────────────────────────────────────────────┘  │ │
│  │                                                                                    │ │
│  │   ┌────────────────────────────────────────────────────────────────────────────┐  │ │
│  │   │                        AEM ASSETS (DAM)                                     │  │ │
│  │   │                                                                            │  │ │
│  │   │   /content/dam/att-business/                                               │  │ │
│  │   │   │                                                                        │  │ │
│  │   │   ├── /images/                       # Image assets                        │  │ │
│  │   │   │   ├── /heroes/                   # Hero background images              │  │ │
│  │   │   │   ├── /products/                 # Product images                      │  │ │
│  │   │   │   ├── /team/                     # Team/author photos                  │  │ │
│  │   │   │   └── /icons/                    # UI icons                            │  │ │
│  │   │   │                                                                        │  │ │
│  │   │   ├── /videos/                       # Video assets                        │  │ │
│  │   │   │   ├── /product-demos/                                                  │  │ │
│  │   │   │   └── /testimonials/                                                   │  │ │
│  │   │   │                                                                        │  │ │
│  │   │   └── /documents/                    # PDF/downloadables                   │  │ │
│  │   │       ├── /datasheets/                                                     │  │ │
│  │   │       └── /whitepapers/                                                    │  │ │
│  │   │                                                                            │  │ │
│  │   │   ASSET FEATURES:                                                          │  │ │
│  │   │   • Smart Crop (AI-powered)                                                │  │ │
│  │   │   • Dynamic Media delivery                                                 │  │ │
│  │   │   • Renditions (web, mobile, thumbnail)                                    │  │ │
│  │   │   • Metadata management                                                    │  │ │
│  │   │   • Asset versioning                                                       │  │ │
│  │   │                                                                            │  │ │
│  │   └────────────────────────────────────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. Code Repository Structure (EDS + UE)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    GITHUB REPOSITORY (EDS + UE)                              │
│                     ashisjai/eds-da-test1                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   att-business/                                                             │
│   │                                                                         │
│   ├── blocks/                              # 68 Block Components            │
│   │   ├── hero/                                                             │
│   │   │   ├── hero.js                      # Block decoration logic        │
│   │   │   └── hero.css                     # Block styling                 │
│   │   ├── cards/                                                            │
│   │   ├── carousel/                                                         │
│   │   ├── accordion/                                                        │
│   │   ├── tabs/                                                             │
│   │   ├── form/                                                             │
│   │   ├── rai-form/                        # AT&T-specific                  │
│   │   └── ... (58 more blocks)                                              │
│   │                                                                         │
│   ├── styles/                              # Global Styles                  │
│   │   ├── styles.css                       # Main stylesheet               │
│   │   ├── fonts.css                        # AT&T Aleck Sans               │
│   │   └── tokens.css                       # Design tokens                 │
│   │                                                                         │
│   ├── scripts/                             # Core Scripts                   │
│   │   ├── scripts.js                       # Main scripts                  │
│   │   ├── aem.js                           # AEM utilities                 │
│   │   └── delayed.js                       # Lazy-loaded scripts           │
│   │                                                                         │
│   │   ╔═══════════════════════════════════════════════════════════════╗    │
│   │   ║              UNIVERSAL EDITOR CONFIGURATION                    ║    │
│   │   ╚═══════════════════════════════════════════════════════════════╝    │
│   │                                                                         │
│   ├── component-definition.json            # UE Component Definitions      │
│   │   {                                                                     │
│   │     "groups": [                                                         │
│   │       { "title": "Hero", "id": "hero" },                               │
│   │       { "title": "Cards", "id": "cards" },                             │
│   │       { "title": "Content", "id": "content" }                          │
│   │     ],                                                                  │
│   │     "components": [                                                     │
│   │       { "title": "Hero", "id": "hero", "plugins": {...} },             │
│   │       { "title": "Cards", "id": "cards", "plugins": {...} }            │
│   │     ]                                                                   │
│   │   }                                                                     │
│   │                                                                         │
│   ├── component-models.json                # UE Component Models           │
│   │   {                                                                     │
│   │     "models": [                                                         │
│   │       {                                                                 │
│   │         "id": "hero",                                                   │
│   │         "fields": [                                                     │
│   │           { "component": "text", "name": "title" },                    │
│   │           { "component": "reference", "name": "image" },               │
│   │           { "component": "aem-content", "name": "cta" }                │
│   │         ]                                                               │
│   │       }                                                                 │
│   │     ]                                                                   │
│   │   }                                                                     │
│   │                                                                         │
│   ├── component-filters.json               # UE Component Filters          │
│   │   {                                                                     │
│   │     "filters": [                                                        │
│   │       { "id": "homepage", "components": ["hero", "cards", "carousel"] },│
│   │       { "id": "product", "components": ["hero", "tabs", "comparison"] } │
│   │     ]                                                                   │
│   │   }                                                                     │
│   │                                                                         │
│   ├── tools/                               # Development Tools              │
│   │   └── sidekick/                                                         │
│   │       └── library.json                 # Block library config          │
│   │                                                                         │
│   ├── head.html                            # Custom head elements          │
│   ├── fstab.yaml                           # AEM Content Source mapping    │
│   │   mountpoints:                                                          │
│   │     /:                                                                  │
│   │       url: https://author-xxxxx.adobeaemcloud.com/content/att-business │
│   │       type: markup                                                      │
│   │                                                                         │
│   └── paths.json                           # URL path mappings              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3. Data Flow Architecture (AEM + UE)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                      DATA FLOW ARCHITECTURE (AEM + UE)                                   │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  AUTHORING FLOW                                                                         │
│  ═════════════                                                                          │
│                                                                                         │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐              │
│  │  Author  │───▶│  Universal   │───▶│    AEM       │───▶│   Content    │              │
│  │ (Browser)│    │   Editor     │    │  Author      │    │   Published  │              │
│  └──────────┘    └──────────────┘    └──────────────┘    └──────────────┘              │
│       │                │                    │                    │                      │
│       │                │                    │                    │                      │
│       │          IMS Auth            JCR Storage          Replication                  │
│       │          GraphQL API         Version Control      to Publish                   │
│       │                                    │                    │                      │
│       │                                    ▼                    ▼                      │
│       │                           ┌──────────────┐    ┌──────────────┐                 │
│       │                           │    AEM       │    │   AEM        │                 │
│       │                           │  Workflows   │    │  Publish     │                 │
│       │                           │              │    │              │                 │
│       │                           │ • Approval   │    │ • Content    │                 │
│       │                           │ • Review     │    │   Delivery   │                 │
│       │                           │ • Scheduling │    │ • API        │                 │
│       │                           └──────────────┘    └──────────────┘                 │
│       │                                                      │                         │
│       │                                                      │ Content Sync            │
│       │                                                      ▼                         │
│       │                                            ┌──────────────────┐                │
│       │                                            │   HELIX PIPELINE │                │
│       │                                            │                  │                │
│       │                                            │  • Fetch content │                │
│       │                                            │  • Apply blocks  │                │
│       │                                            │  • Generate HTML │                │
│       │                                            │  • Optimize      │                │
│       │                                            └────────┬─────────┘                │
│       │                                                     │                          │
│       │              ┌──────────────────────────────────────┼──────────────┐           │
│       │              │                                      │              │           │
│       │              ▼                                      ▼              ▼           │
│       │    ┌──────────────────┐              ┌──────────────────┐ ┌─────────────┐     │
│       │    │    AEM.PAGE      │              │    AEM.LIVE      │ │   FASTLY    │     │
│       │    │    (Preview)     │              │    (Staging)     │ │    CDN      │     │
│       │    │                  │              │                  │ │             │     │
│       │    │  main--att--     │              │  Live content    │ │ Production  │     │
│       │    │  aem.page        │              │  staging         │ │ delivery    │     │
│       │    └────────┬─────────┘              └────────┬─────────┘ └──────┬──────┘     │
│       │             │                                 │                  │            │
│       │             └─────────────────────────────────┼──────────────────┘            │
│       │                                               │                               │
│       └───────────────────────────────────────────────┼───────────────────────────────│
│                                                       │                               │
│                                                       ▼                               │
│  DELIVERY FLOW                                 ┌─────────────┐                        │
│  ═════════════                                 │  END USER   │                        │
│                                                │   Request   │                        │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐ └──────┬──────┘                        │
│  │   User   │───▶│  Fastly  │───▶│   Edge   │        │                               │
│  │ Request  │    │   CDN    │    │  Cache   │        │                               │
│  └──────────┘    └──────────┘    └──────────┘        │                               │
│                                       │              │                               │
│                        Cache Miss ────┘              │                               │
│                                       │              │                               │
│                                       ▼              │                               │
│                              ┌──────────────┐        │                               │
│                              │ Helix Origin │        │                               │
│                              │              │        │                               │
│                              │ • Fetch AEM  │        │                               │
│                              │ • Decorate   │        │                               │
│                              │ • Return HTML│        │                               │
│                              └──────────────┘        │                               │
│                                       │              │                               │
│                                       └──────────────┘                               │
│                                               │                                      │
│                                               ▼                                      │
│                              ┌──────────────────────────────────┐                    │
│                              │      CLIENT-SIDE RENDERING       │                    │
│                              │                                  │                    │
│                              │  1. HTML skeleton (< 100ms)      │                    │
│                              │  2. CSS loads                    │                    │
│                              │  3. JS decorates blocks          │                    │
│                              │  4. Lazy load images             │                    │
│                              │  5. Delayed third-party          │                    │
│                              └──────────────────────────────────┘                    │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### 4. AEM + EDS Integration Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                        AEM + EDS INTEGRATION ARCHITECTURE                                │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│                              ┌────────────────────────────┐                             │
│                              │      ADOBE EXPERIENCE      │                             │
│                              │          CLOUD             │                             │
│                              └────────────────────────────┘                             │
│                                           │                                             │
│              ┌────────────────────────────┼────────────────────────────┐                │
│              │                            │                            │                │
│              ▼                            ▼                            ▼                │
│   ┌────────────────────┐     ┌────────────────────┐     ┌────────────────────┐         │
│   │   ADOBE IMS        │     │   AEM AS A CLOUD   │     │  UNIVERSAL EDITOR  │         │
│   │                    │     │      SERVICE       │     │                    │         │
│   │  • Authentication  │     │                    │     │  • Visual editing  │         │
│   │  • Authorization   │◀───▶│  • Author env      │◀───▶│  • Live preview    │         │
│   │  • SSO             │     │  • Publish env     │     │  • Component lib   │         │
│   │  • Token mgmt      │     │  • Assets (DAM)    │     │  • Properties      │         │
│   │                    │     │  • Workflows       │     │                    │         │
│   └────────────────────┘     └─────────┬──────────┘     └────────────────────┘         │
│                                        │                                                │
│                                        │ Content API                                    │
│                                        ▼                                                │
│                         ┌──────────────────────────────┐                               │
│                         │     CONTENT SYNC LAYER       │                               │
│                         │                              │                               │
│                         │  • Markup API (HTML)         │                               │
│                         │  • JSON API (structured)     │                               │
│                         │  • Asset delivery API        │                               │
│                         │  • Cache invalidation        │                               │
│                         └──────────────┬───────────────┘                               │
│                                        │                                                │
│              ┌─────────────────────────┼─────────────────────────┐                      │
│              │                         │                         │                      │
│              ▼                         ▼                         ▼                      │
│   ┌────────────────────┐   ┌────────────────────┐   ┌────────────────────┐             │
│   │    GITHUB REPO     │   │   HELIX PIPELINE   │   │    FASTLY CDN      │             │
│   │                    │   │                    │   │                    │             │
│   │  • Block code      │   │  • Content fetch   │   │  • Edge caching    │             │
│   │  • Styles          │   │  • HTML generation │   │  • Global delivery │             │
│   │  • Scripts         │──▶│  • Block decorate  │──▶│  • SSL/TLS         │             │
│   │  • Component defs  │   │  • Optimization    │   │  • DDoS protection │             │
│   │                    │   │                    │   │                    │             │
│   └────────────────────┘   └────────────────────┘   └────────────────────┘             │
│                                                                 │                      │
│                                                                 ▼                      │
│                                                      ┌────────────────────┐            │
│                                                      │   BUSINESS.ATT.COM │            │
│                                                      │                    │            │
│                                                      │   • 749 pages      │            │
│                                                      │   • 68 blocks      │            │
│                                                      │   • < 2.5s LCP     │            │
│                                                      └────────────────────┘            │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### 5. Block Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BLOCK ARCHITECTURE                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   BLOCK CATEGORIES (68 Total)                                               │
│   ═══════════════════════════                                               │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  NAVIGATION (2)        │  HERO (7)              │  CARDS (4)        │   │
│   │  ├── header            │  ├── hero-full         │  ├── cards        │   │
│   │  ├── footer            │  ├── hero-split        │  ├── cards-offer  │   │
│   │  └── quick-links       │  ├── hero-video        │  ├── cards-story  │   │
│   │                        │  ├── hero-animated     │  └── cards-product│   │
│   │                        │  ├── hero-carousel     │                   │   │
│   │                        │  ├── hero-minimal      │                   │   │
│   │                        │  └── hero-industry     │                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  CONTENT (8)           │  INTERACTIVE (7)       │  FORMS (4)        │   │
│   │  ├── columns           │  ├── carousel          │  ├── form         │   │
│   │  ├── article           │  ├── tabs              │  ├── rai-form     │   │
│   │  ├── quote             │  ├── accordion         │  ├── email-signup │   │
│   │  ├── stats             │  ├── modal             │  └── contact-form │   │
│   │  ├── testimonial       │  ├── tooltip           │                   │   │
│   │  ├── author            │  ├── mega-menu         │                   │   │
│   │  ├── tags              │  └── search            │                   │   │
│   │  └── share             │                        │                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  MEDIA (3)             │  CTA/PROMO (5)         │  TABLES (3)       │   │
│   │  ├── video             │  ├── cta-banner        │  ├── table        │   │
│   │  ├── image-gallery     │  ├── promo             │  ├── comparison   │   │
│   │  └── embed             │  ├── alert             │  └── pricing      │   │
│   │                        │  ├── announcement      │                   │   │
│   │                        │  └── sticky-cta        │                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  SUPPORT (6)           │  INDUSTRY (3)          │  OFFERS (4)       │   │
│   │  ├── support-grid      │  ├── solution-cards    │  ├── offer-card   │   │
│   │  ├── contact-card      │  ├── industry-hero     │  ├── deal-banner  │   │
│   │  ├── faq               │  └── use-case          │  ├── promo-tile   │   │
│   │  ├── chat-widget       │                        │  └── bundle       │   │
│   │  ├── help-topic        │                        │                   │   │
│   │  └── resource-links    │                        │                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6. Delivery & CDN Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      DELIVERY & CDN ARCHITECTURE                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                         ORIGIN LAYER                                 │   │
│   │                                                                      │   │
│   │    ┌──────────────────┐         ┌──────────────────┐                │   │
│   │    │   AEM PUBLISH    │         │   GITHUB REPO    │                │   │
│   │    │                  │         │                  │                │   │
│   │    │  • Content API   │         │  • Block code    │                │   │
│   │    │  • Asset API     │         │  • Styles/CSS    │                │   │
│   │    │  • Markup API    │         │  • Scripts/JS    │                │   │
│   │    └────────┬─────────┘         └────────┬─────────┘                │   │
│   │             │                            │                          │   │
│   │             └────────────┬───────────────┘                          │   │
│   │                          │                                          │   │
│   │                          ▼                                          │   │
│   │               ┌──────────────────────┐                              │   │
│   │               │   HELIX PIPELINE     │                              │   │
│   │               │                      │                              │   │
│   │               │  • Fetch AEM content │                              │   │
│   │               │  • Apply blocks      │                              │   │
│   │               │  • Generate HTML     │                              │   │
│   │               │  • Inject styles     │                              │   │
│   │               │  • Optimize assets   │                              │   │
│   │               └──────────┬───────────┘                              │   │
│   │                          │                                          │   │
│   └──────────────────────────┼──────────────────────────────────────────┘   │
│                              │                                              │
│   ┌──────────────────────────┼──────────────────────────────────────────┐   │
│   │                          ▼          CDN LAYER                        │   │
│   │               ┌──────────────────────┐                              │   │
│   │               │     FASTLY CDN       │                              │   │
│   │               │                      │                              │   │
│   │               │  • Edge caching      │                              │   │
│   │               │  • SSL termination   │                              │   │
│   │               │  • WAF protection    │                              │   │
│   │               │  • DDoS mitigation   │                              │   │
│   │               │  • Geographic routing│                              │   │
│   │               └──────────┬───────────┘                              │   │
│   │                          │                                          │   │
│   │         ┌────────────────┼────────────────┐                         │   │
│   │         │                │                │                         │   │
│   │         ▼                ▼                ▼                         │   │
│   │   ┌───────────┐   ┌───────────┐   ┌───────────┐                    │   │
│   │   │  Americas │   │   EMEA    │   │   APAC    │                    │   │
│   │   │  POPs     │   │   POPs    │   │   POPs    │                    │   │
│   │   │           │   │           │   │           │                    │   │
│   │   │ US, CA,   │   │ UK, DE,   │   │ JP, AU,   │                    │   │
│   │   │ MX, BR    │   │ FR, NL    │   │ SG, IN    │                    │   │
│   │   └───────────┘   └───────────┘   └───────────┘                    │   │
│   │                                                                      │   │
│   └──────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              ▼                                              │
│                   ┌──────────────────────┐                                  │
│                   │      END USERS       │                                  │
│                   │   business.att.com   │                                  │
│                   │                      │                                  │
│                   │  PERFORMANCE:        │                                  │
│                   │  • LCP < 2.5s        │                                  │
│                   │  • FID < 100ms       │                                  │
│                   │  • CLS < 0.1         │                                  │
│                   │  • Lighthouse > 90   │                                  │
│                   └──────────────────────┘                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7. Integration Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       INTEGRATION ARCHITECTURE                               │
├──────────────────���──────────────────────────────────────────────────────────┤
│                                                                             │
│                          ┌───────────────────┐                              │
│                          │   AT&T BUSINESS   │                              │
│                          │   EDS + AEM       │                              │
│                          └─────────┬─────────┘                              │
│                                    │                                        │
│      ┌─────────────────────────────┼─────────────────────────────┐         │
│      │                             │                             │         │
│      ▼                             ▼                             ▼         │
│ ┌─────────────┐           ┌─────────────────┐           ┌─────────────┐   │
│ │  ANALYTICS  │           │   MARKETING     │           │   COMMERCE  │   │
│ │             │           │   AUTOMATION    │           │             │   │
│ │ ┌─────────┐ │           │ ┌─────────────┐ │           │ ┌─────────┐ │   │
│ │ │ Adobe   │ │           │ │   Marketo   │ │           │ │ Product │ │   │
│ │ │Analytics│ │           │ │   /Eloqua   │ │           │ │ Catalog │ │   │
│ │ └─────────┘ │           │ └─────────────┘ │           │ └─────────┘ │   │
│ │ ┌─────────┐ │           │ ┌─────────────┐ │           │ ┌─────────┐ │   │
│ │ │ Adobe   │ │           │ │   Chili     │ │           │ │ Pricing │ │   │
│ │ │ Target  │ │           │ │   Piper     │ │           │ │   API   │ │   │
│ │ └─────────┘ │           │ └─────────────┘ │           │ └─────────┘ │   │
│ └─────────────┘           └─────────────────┘           └─────────────┘   │
│                                                                             │
│      ┌─────────────────────────────┼─────────────────────────────┐         │
│      │                             │                             │         │
│      ▼                             ▼                             ▼         │
│ ┌─────────────┐           ┌─────────────────┐           ┌─────────────┐   │
│ │   SEARCH    │           │    SUPPORT      │           │    MEDIA    │   │
│ │             │           │                 │           │             │   │
│ │ ┌─────────┐ │           │ ┌─────────────┐ │           │ ┌─────────┐ │   │
│ │ │ Algolia │ │           │ │Live Chat    │ │           │ │AEM Assets│ │   │
│ │ │ Search  │ │           │ │Widget       │ │           │ │ (DAM)   │ │   │
│ │ └─────────┘ │           │ └─────────────┘ │           │ └─────────┘ │   │
│ │ ┌─────────┐ │           │ ┌─────────────┐ │           │ ┌─────────┐ │   │
│ │ │AEM Search│ │           │ │ Contact     │ │           │ │ Dynamic │ │   │
│ │ │ Index   │ │           │ │ Center API  │ │           │ │ Media   │ │   │
│ │ └─────────┘ │           │ └─────────────┘ │           │ └─────────┘ │   │
│ └─────────────┘           └─────────────────┘           └─────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8. Security Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SECURITY ARCHITECTURE                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      ADOBE IMS (Identity)                            │   │
│   │                                                                      │   │
│   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│   │   │   SSO        │  │   OAuth 2.0  │  │   JWT        │              │   │
│   │   │   Login      │  │   Tokens     │  │   Auth       │              │   │
│   │   └──────────────┘  └──────────────┘  └──────────────┘              │   │
│   │                                                                      │   │
│   │   ROLE-BASED ACCESS (RBAC):                                         │   │
│   │   • Admin - Full AEM + UE access                                    │   │
│   │   • Author - Content editing in UE                                  │   │
│   │   • Reviewer - Preview only access                                  │   │
│   │   • Developer - Code repo + preview                                 │   │
│   │                                                                      │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                        EDGE SECURITY                                 │   │
│   │                                                                      │   │
│   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│   │   │   Fastly     │  │    WAF       │  │   DDoS       │              │   │
│   │   │   Shield     │  │  Protection  │  │ Mitigation   │              │   │
│   │   └──────────────┘  └──────────────┘  └──────────────┘              │   │
│   │                                                                      │   │
│   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│   │   │   SSL/TLS    │  │    Bot       │  │   Rate       │              │   │
│   │   │   (HTTPS)    │  │  Management  │  │  Limiting    │              │   │
│   │   └──────────────┘  └──────────────┘  └──────────────┘              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     APPLICATION SECURITY                             │   │
│   │                                                                      │   │
│   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│   │   │    CSP       │  │   CORS       │  │  Input       │              │   │
│   │   │  Headers     │  │  Policy      │  │ Validation   │              │   │
│   │   └──────────────┘  └──────────────┘  └──────────────┘              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                       PRIVACY & COMPLIANCE                           │   │
│   │                                                                      │   │
│   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │   │
│   │   │  OneTrust    │  │    GDPR      │  │    CCPA      │              │   │
│   │   │   Consent    │  │  Compliance  │  │  Compliance  │              │   │
│   │   └──────────────┘  └──────────────┘  └──────────────┘              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Environment URLs

| Environment | URL | Purpose |
|-------------|-----|---------|
| **AEM Author** | `https://author-pXXXX-eYYYY.adobeaemcloud.com` | Content authoring |
| **AEM Publish** | `https://publish-pXXXX-eYYYY.adobeaemcloud.com` | Content delivery API |
| **Universal Editor** | `https://experience.adobe.com/aem/editor` | Visual authoring |
| **Preview** | `https://main--att-business--ashisjai.aem.page` | Development preview |
| **Live** | `https://main--att-business--ashisjai.aem.live` | Staging/UAT |
| **Production** | `https://business.att.com` | Live site (Fastly CDN) |

---

## Key Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Content Source** | AEM as a Cloud Service | Enterprise CMS, workflow support, DAM integration |
| **Authoring** | Universal Editor | Visual editing, real-time preview, component library |
| **CDN** | Fastly (custom) | Existing AT&T infrastructure, global edge |
| **Asset Management** | AEM Assets (DAM) | Smart crop, renditions, metadata |
| **Analytics** | Adobe Analytics | Existing AT&T stack, deep integration |
| **Personalization** | Adobe Target | AEM integration, A/B testing |
| **Authentication** | Adobe IMS | SSO, enterprise identity |

---

## Configuration Files

### fstab.yaml (AEM Content Source)
```yaml
mountpoints:
  /:
    url: https://author-pXXXX-eYYYY.adobeaemcloud.com/content/att-business/en
    type: markup
```

### component-definition.json (UE Components)
```json
{
  "groups": [
    { "title": "Hero", "id": "hero", "components": ["hero", "hero-split", "hero-video"] },
    { "title": "Cards", "id": "cards", "components": ["cards", "cards-offer", "cards-story"] },
    { "title": "Content", "id": "content", "components": ["columns", "accordion", "tabs"] }
  ]
}
```

---

*Document Version: 2.0 (UE + AEM)*
*Updated: January 2026*
*Architecture: Universal Editor with AEM as Content Source*
