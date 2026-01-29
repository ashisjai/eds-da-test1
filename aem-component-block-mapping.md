# AEM Components → EDS Blocks Mapping

## business.att.com | 68 Block Components

---

## Overview

This document maps traditional AEM components to their Edge Delivery Services (EDS) block equivalents for the business.att.com migration. EDS uses a simplified content model with table-based authoring and client-side block decoration.

### Key Differences

| Aspect | AEM Components | EDS Blocks |
|--------|---------------|------------|
| **Architecture** | Server-side rendering (HTL + Sling Models) | Client-side decoration (Vanilla JS) |
| **Content Model** | JCR nodes with dialog-defined properties | Table-based markdown/HTML |
| **Styling** | SCSS/LESS with clientlibs | Plain CSS with design tokens |
| **Authoring** | Touch UI dialogs | Universal Editor / Document Authoring |
| **Variations** | Style System + policies | Block variants (block-name-variant) |

---

## 1. Navigation Components

### AEM Components
| Component | Path | Description |
|-----------|------|-------------|
| **Header Component** | `com.att.business/header` | Sling Model + HTL, site header |
| **Footer Component** | `com.att.business/footer` | Sling Model + HTL, site footer |
| **Navigation Component** | `wcm/core/navigation` | Multi-level menu generation |

### EDS Blocks
| Block | Path | Description |
|-------|------|-------------|
| **header** | `/blocks/header/` | header.js + header.css |
| **footer** | `/blocks/footer/` | footer.js + footer.css |
| **mega-menu** | `/blocks/mega-menu/` | Multi-tier navigation with flyouts |

### Mapping
```
Header Component      →  header
Footer Component      →  footer
Navigation Component  →  mega-menu
```

---

## 2. Hero Components

### AEM Components
| Component | Path | Description |
|-----------|------|-------------|
| **Teaser Component** | `wcm/core/teaser` | Title, Description, Image, CTA, Background options, Style System variants |
| **Experience Fragment** | `cq/experience-fragments` | Reusable hero patterns, Master + variations, Live Copy support |

### EDS Blocks (1:N Mapping)
| Block | Description | Use Case |
|-------|-------------|----------|
| **hero** | Standard full-width hero | Default hero layout |
| **hero-split** | 50/50 layout | Text + image side by side |
| **hero-video** | Video background | Engaging video heroes |
| **hero-carousel** | Rotating heroes | Multiple messages |
| **hero-animated** | Motion effects | Dynamic entrance |
| **hero-minimal** | Simple text hero | Text-focused pages |
| **hero-industry** | Vertical-specific | Industry landing pages |

### Mapping
```
Teaser Component          ⇢  hero, hero-split, hero-video, hero-carousel
Experience Fragment       ⇢  hero-animated, hero-minimal, hero-industry
(Style System variants)   ⇢  (Block variants)
```

---

## 3. Card Components

### AEM Components
| Component | Path | Description |
|-----------|------|-------------|
| **Card / List Component** | `wcm/core/list` + card styling | Dynamic or static items, Grid layout |
| **Content Fragment List** | `dam/cfm/components/list` | Query-based content, Structured data |

### EDS Blocks
| Block | Description | Use Case |
|-------|-------------|----------|
| **cards** | Standard cards | General card layouts |
| **cards-offer** | Promotional cards | Pricing, deals display |
| **cards-story** | Case study cards | Customer stories |
| **cards-product** | Product cards | Product feature highlights |

### Mapping
```
Card / List Component     →  cards, cards-offer
Content Fragment List     →  cards-story, cards-product
```

---

## 4. Interactive Components

### AEM Components
| Component | Path | Description |
|-----------|------|-------------|
| **Tabs Component** | `wcm/core/tabs` | Container component, Nested content |
| **Accordion** | `wcm/core/accordion` | Expandable panels, FAQ support |
| **Carousel** | `wcm/core/carousel` | Sliding content, Auto-play option |

### EDS Blocks
| Block | Description | Implementation |
|-------|-------------|----------------|
| **tabs** | Tab navigation | Table-based content, tabs.js |
| **accordion** | Collapsible sections | Details/Summary HTML, accordion.js |
| **carousel** | Content slider | CSS scroll-snap, carousel.js |
| **modal** | Dialog overlay | Trigger + content, modal.js |

### Mapping
```
Tabs Component   →  tabs
Accordion        →  accordion
Carousel         →  carousel
(Dialog)         →  modal
```

---

## 5. Form Components

### AEM Components
| Component | Path | Description |
|-----------|------|-------------|
| **AEM Forms (Adaptive)** | `fd/af/components/form` | Complex validation, Multi-step wizard |
| **Form Container** | `wcm/core/form/container` | Basic form wrapper, Action handlers |

### EDS Blocks
| Block | Description | Integration |
|-------|-------------|-------------|
| **form** | Standard forms | form.js, basic validation |
| **rai-form** | Request a Call | AT&T-specific lead capture |
| **email-signup** | Newsletter form | Eloqua integration |
| **contact-form** | Contact us | Lead capture, CRM sync |

### Mapping
```
AEM Forms (Adaptive)  ⇢  rai-form (simplified)
Form Container        →  form, email-signup, contact-form
```

**Note:** Complex AEM Forms features (multi-step, conditional logic) require custom EDS block implementation.

---

## 6. Content Components

### AEM Components
| Component | Path | Description |
|-----------|------|-------------|
| **Text Component** | `wcm/core/text` | Rich text editing, Inline styles |
| **Image Component** | `wcm/core/image` | Smart crop, Lazy loading |
| **Container** | `wcm/core/container` | Layout container, Responsive grid |

### EDS Blocks
| Block | Description | Use Case |
|-------|-------------|----------|
| **columns** | Multi-column layout | Side-by-side content |
| **article** | Long-form content | Blog posts, articles |
| **quote** | Blockquote styling | Testimonials, callouts |
| **stats** | Key metrics display | Numbers, statistics |

### Mapping
```
Text Component   →  (Default content / article)
Image Component  →  (Default content / columns)
Container        →  columns
```

**Note:** Basic text and images in EDS are "default content" (not blocks) - they render without decoration.

---

## 7. Media Components

### AEM Components
| Component | Path | Description |
|-----------|------|-------------|
| **Video / Dynamic Media** | `dam/components/video` | Dynamic Media viewers |
| **Embed Component** | `wcm/core/embed` | YouTube, Vimeo, iframes |

### EDS Blocks
| Block | Description | Implementation |
|-------|-------------|----------------|
| **video** | HTML5 video player | video.js, native controls |
| **embed** | Third-party embeds | embed.js, iframe wrapper |
| **image-gallery** | Lightbox gallery | Multiple images, zoom |

### Mapping
```
Video / Dynamic Media  →  video
Embed Component        →  embed
(Image gallery)        →  image-gallery
```

---

## 8. Table & Data Components

### AEM Components
| Component | Description |
|-----------|-------------|
| **Table Component** | Custom table, Structured data |
| **Comparison Component** | Product comparison, Feature matrix |

### EDS Blocks
| Block | Description | Use Case |
|-------|-------------|----------|
| **table** | Native table styling | Data tables |
| **comparison** | Side-by-side compare | Product comparison |
| **pricing** | Pricing tables | Plan pricing display |

### Mapping
```
Table Component       →  table
Comparison Component  →  comparison, pricing
```

---

## Mapping Summary

### Component Count
| Source | Count |
|--------|-------|
| **AEM Core Components** | ~25 |
| **EDS Blocks** | 68 |
| **Mapping Type** | 1:N (expansion) |

### Key Principles

| Principle | Description |
|-----------|-------------|
| **1:N Mapping** | One AEM component often maps to multiple specialized EDS blocks |
| **Simplified Model** | Table-based authoring replaces complex dialogs |
| **Performance Focus** | Vanilla JS, minimal CSS, no framework overhead |
| **Variant Naming** | Block variants use `block-name-variant` pattern |

### Block Categories

| Category | AEM Components | EDS Blocks |
|----------|---------------|------------|
| Navigation | 3 | 3 |
| Hero | 2 | 7 |
| Cards | 2 | 4 |
| Interactive | 3 | 4 |
| Forms | 2 | 4 |
| Content | 3 | 4 |
| Media | 2 | 3 |
| Tables | 2 | 3 |
| **Other** | - | 36 |
| **Total** | ~19 | **68** |

---

## Complete Block Inventory

### All 68 EDS Blocks

```
Navigation (3)
├── header
├── footer
└── mega-menu

Hero (7)
├── hero
├── hero-split
├── hero-video
├── hero-carousel
├── hero-animated
├── hero-minimal
└── hero-industry

Cards (4)
├── cards
├── cards-offer
├── cards-story
└── cards-product

Interactive (7)
├── tabs
├── accordion
├── carousel
├── modal
├── tooltip
├── mega-menu
└── search

Forms (4)
├── form
├── rai-form
├── email-signup
└── contact-form

Content (8)
├── columns
├── article
├── quote
├── stats
├── testimonial
├── author
├── tags
└── share

Media (3)
├── video
├── embed
└── image-gallery

CTA/Promo (5)
├── cta-banner
├── promo
├── alert
├── announcement
└── sticky-cta

Tables (3)
├── table
├── comparison
└── pricing

Support (6)
├── support-grid
├── contact-card
├── faq
├── chat-widget
├── help-topic
└── resource-links

Industry (3)
├── solution-cards
├── industry-hero
└── use-case

Offers (4)
├── offer-card
├── deal-banner
├── promo-tile
└── bundle

Other (11)
├── quick-links
├── breadcrumb
├── social-share
├── related-content
├── anchor-nav
├── back-to-top
├── cookie-consent
├── search-results
├── pagination
├── filters
└── sort
```

---

## Migration Considerations

### What Changes
| Aspect | AEM | EDS |
|--------|-----|-----|
| **Dialogs** | Complex Touch UI dialogs | Simple table structure |
| **Variants** | Style System + Policies | Block name suffix |
| **JavaScript** | AEM clientlibs (jQuery often) | Vanilla JS modules |
| **CSS** | SCSS with clientlib categories | Plain CSS with custom properties |
| **Content Model** | JCR properties | Table cells / rows |

### What Stays Similar
- Component/Block concept
- Responsive behavior
- Semantic HTML output
- Accessibility requirements
- Design token usage

---

*Document Version: 1.0*
*Updated: January 2026*
*Platform: AEM as a Cloud Service → Edge Delivery Services*
