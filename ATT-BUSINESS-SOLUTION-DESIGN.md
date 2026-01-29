# AT&T Business - Solution Design Document
## AEM Edge Delivery Services with Universal Editor

**Document Version:** 1.0
**Created:** January 2026
**Status:** Draft

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Solution Architecture](#2-solution-architecture)
3. [EDS Project Structure](#3-eds-project-structure)
4. [Block Component Specifications](#4-block-component-specifications)
5. [Universal Editor Configuration](#5-universal-editor-configuration)
6. [Page Templates](#6-page-templates)
7. [Design System Implementation](#7-design-system-implementation)
8. [Third-Party Integrations](#8-third-party-integrations)
9. [Content Migration](#9-content-migration)
10. [SEO & URL Strategy](#10-seo--url-strategy)
11. [Testing & Quality Assurance](#11-testing--quality-assurance)
12. [Security & Compliance](#12-security--compliance)
13. [Performance Optimization](#13-performance-optimization)
14. [Monitoring & Operations](#14-monitoring--operations)
15. [Appendices](#15-appendices)

---

## 1. Executive Summary

### 1.1 Purpose

This Solution Design Document (SDD) provides the technical blueprint for migrating the AT&T Business website (www.business.att.com) to Adobe Experience Manager Edge Delivery Services (EDS) with Universal Editor (UE) support.

### 1.2 Scope

- Full website migration including 500+ pages
- 30+ reusable block components
- Universal Editor authoring integration
- Third-party system integrations
- Content migration automation

### 1.3 Goals

| Goal | Success Metric |
|------|----------------|
| Performance | Lighthouse score > 90 |
| Accessibility | WCAG 2.1 AA compliant |
| Author Experience | UE-enabled content editing |
| Time to Market | 20-week implementation |

---

## 2. Solution Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              END USERS                                       │
│                         (Desktop / Mobile / Tablet)                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           FASTLY CDN                                         │
│                    (Edge Caching, SSL Termination)                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    ▼                 ▼                 ▼
┌───────────────────────┐ ┌───────────────────┐ ┌───────────────────────────┐
│   EDS DELIVERY TIER   │ │  UNIVERSAL EDITOR │ │   THIRD-PARTY SERVICES    │
│                       │ │                   │ │                           │
│ • HTML Rendering      │ │ • Content Editing │ │ • Adobe Analytics         │
│ • CSS/JS Delivery     │ │ • Block Authoring │ │ • Adobe Target            │
│ • Image Optimization  │ │ • Preview Mode    │ │ • Marketo/Eloqua          │
│ • Markdown Processing │ │ • Publishing      │ │ • ChiliPiper              │
└───────────────────────┘ └───────────────────┘ │ • Salesforce              │
           │                       │            │ • Live Chat               │
           ▼                       ▼            └───────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CONTENT SOURCES                                      │
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────────────┐ │
│  │   SHAREPOINT    │  │     GITHUB      │  │      AEM ASSETS (DAM)       │ │
│  │                 │  │                 │  │                             │ │
│  │ • Page Content  │  │ • Block Code    │  │ • Images                    │ │
│  │ • Documents     │  │ • Styles        │  │ • Videos                    │ │
│  │ • Spreadsheets  │  │ • Scripts       │  │ • Documents                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Data Flow

```
Content Authoring Flow:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Author  │───▶│Universal │───▶│   AEM   │───▶│   EDS    │───▶│   CDN    │
│          │    │  Editor  │    │          │    │ Preview  │    │ Publish  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘

Code Deployment Flow:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│Developer │───▶│  GitHub  │───▶│  GitHub  │───▶│   EDS    │───▶│   CDN    │
│          │    │   PR     │    │ Actions  │    │  Build   │    │  Deploy  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
```

### 2.3 Environment Strategy

| Environment | Purpose | URL Pattern | Content Source |
|-------------|---------|-------------|----------------|
| Development | Developer testing | `dev--att-business--org.aem.page` | Dev SharePoint |
| Preview | Author preview | `preview--att-business--org.aem.page` | Main SharePoint |
| Live | Production | `www.business.att.com` | Main SharePoint |

### 2.4 Technology Stack

| Layer | Technology |
|-------|------------|
| CDN | Fastly |
| Rendering | EDS (Helix) |
| Content Storage | SharePoint / Google Drive |
| Code Repository | GitHub |
| Authoring | Universal Editor |
| Asset Management | AEM Assets / SharePoint |
| Analytics | Adobe Analytics |
| Personalization | Adobe Target |

---

## 3. EDS Project Structure

### 3.1 Repository Structure

```
att-business-eds/
├── .github/
│   └── workflows/
│       └── main.yaml              # CI/CD pipeline
├── blocks/
│   ├── header/
│   │   ├── header.js
│   │   ├── header.css
│   │   └── header.md              # Block documentation
│   ├── footer/
│   ├── hero/
│   ├── cards/
│   ├── carousel/
│   ├── columns/
│   ├── tabs/
│   ├── accordion/
│   ├── pricing-table/
│   ├── form/
│   ├── video/
│   ├── image-text/
│   ├── cta-banner/
│   ├── promo-banner/
│   ├── stats/
│   ├── quote/
│   ├── anchor-nav/
│   ├── link-list/
│   ├── breadcrumb/
│   └── ... (additional blocks)
├── icons/
│   ├── arrow-right.svg
│   ├── check.svg
│   ├── phone.svg
│   └── ... (additional icons)
├── scripts/
│   ├── aem.js                     # EDS core utilities
│   ├── scripts.js                 # Global scripts
│   ├── delayed.js                 # Lazy-loaded scripts
│   └── utils/
│       ├── analytics.js
│       ├── personalization.js
│       └── forms.js
├── styles/
│   ├── styles.css                 # Global styles
│   ├── tokens.css                 # Design tokens
│   ├── fonts.css                  # Font definitions
│   └── lazy-styles.css            # Below-fold styles
├── ue/
│   ├── component-definition.json
│   ├── component-models.json
│   └── component-filters.json
├── tools/
│   └── importer/
│       ├── import.js              # Import script
│       └── transformers/          # Content transformers
├── 404.html
├── fstab.yaml
├── head.html
├── helix-query.yaml
├── paths.json
├── robots.txt
└── README.md
```

### 3.2 Configuration Files

#### fstab.yaml
```yaml
mountpoints:
  /: https://org.sharepoint.com/:f:/s/att-business/content

folders:
  /drafts: /drafts
  /experiments: /experiments
```

#### head.html
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0057B8">

<!-- Preconnect to critical origins -->
<link rel="preconnect" href="https://fonts.att.com" crossorigin>
<link rel="preconnect" href="https://assets.adobedtm.com" crossorigin>

<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/ATTAleckSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/ATTAleckSans-Bold.woff2" as="font" type="font/woff2" crossorigin>

<!-- Favicon -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">

<!-- Adobe Launch (async) -->
<script src="https://assets.adobedtm.com/launch-att-business.min.js" async></script>
```

#### paths.json
```json
{
  "/**": {
    "allow": ["*"]
  },
  "/drafts/**": {
    "allow": ["authors"]
  },
  "/experiments/**": {
    "allow": ["marketers"]
  }
}
```

### 3.3 GitHub Actions Workflow

```yaml
# .github/workflows/main.yaml
name: AEM Code Sync

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test

  lighthouse:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          configPath: './lighthouserc.json'
          uploadArtifacts: true
```

---

## 4. Block Component Specifications

### 4.1 Block Development Standards

#### Naming Conventions
- Block folder: lowercase, hyphenated (e.g., `pricing-table`)
- CSS classes: BEM methodology (`block__element--modifier`)
- JavaScript: camelCase functions, PascalCase classes

#### File Structure per Block
```
block-name/
├── block-name.js       # Decoration logic
├── block-name.css      # Styles
└── block-name.md       # Documentation (optional)
```

#### Base Block Template
```javascript
// block-name.js
export default function decorate(block) {
  // 1. Extract content from block
  const rows = [...block.children];

  // 2. Transform/restructure DOM
  // 3. Add event listeners
  // 4. Initialize any JavaScript behavior
}
```

### 4.2 Core Block Specifications

---

#### 4.2.1 Header Block

**Purpose:** Global site navigation with mega menu

**HTML Structure:**
```html
<header class="header">
  <div class="header__utility-nav">
    <a href="/personal">Personal</a>
    <a href="/business" class="active">Business</a>
  </div>
  <div class="header__main">
    <a href="/" class="header__logo">
      <img src="/icons/att-logo.svg" alt="AT&T Business">
    </a>
    <nav class="header__nav">
      <ul class="header__menu">
        <li class="header__menu-item has-submenu">
          <button>Products</button>
          <div class="header__submenu">
            <!-- Mega menu content -->
          </div>
        </li>
        <!-- Additional menu items -->
      </ul>
    </nav>
    <div class="header__actions">
      <div class="header__search">
        <input type="search" placeholder="Search">
        <button type="submit">Search</button>
      </div>
      <button class="header__mobile-toggle">Menu</button>
    </div>
  </div>
</header>
```

**Content Model (Authoring):**
```
| Header |           |
|--------|-----------|
| Logo   | /logo.svg |
| Nav    | /nav      |
```

**CSS Variables:**
```css
.header {
  --header-height: 80px;
  --header-bg: var(--color-white);
  --header-border: var(--color-gray-200);
  --header-text: var(--color-gray-900);
}
```

**JavaScript Features:**
- Sticky behavior on scroll
- Mega menu hover/click toggle
- Mobile menu accordion
- Search overlay
- Keyboard navigation (a11y)

---

#### 4.2.2 Hero Block

**Purpose:** Primary page banner with headline, copy, and CTAs

**Variants:**
- `hero` (default) - Full-width with background image
- `hero (video)` - Background video
- `hero (split)` - 50/50 layout with image
- `hero (tabbed)` - Homepage tabbed product selector

**HTML Structure (Default):**
```html
<div class="hero">
  <div class="hero__background">
    <picture>
      <source media="(min-width: 768px)" srcset="hero-desktop.webp">
      <img src="hero-mobile.webp" alt="" loading="eager">
    </picture>
  </div>
  <div class="hero__content">
    <p class="hero__eyebrow">AT&T Business</p>
    <h1 class="hero__heading">Give your team an edge</h1>
    <p class="hero__description">Since 1876, we've helped businesses...</p>
    <div class="hero__actions">
      <a href="/contact" class="button button--primary">Get started</a>
      <a href="/learn" class="button button--secondary">Learn more</a>
    </div>
  </div>
</div>
```

**Content Model (Authoring):**
```
| Hero              |                    |
|-------------------|---------------------|
| Eyebrow           | AT&T Business       |
| Heading           | Give your team edge |
| Description       | Since 1876...       |
| Primary CTA       | [Get started](/contact) |
| Secondary CTA     | [Learn more](/learn)    |
| Background Image  | /images/hero.jpg    |
```

**CSS Specifications:**
```css
.hero {
  --hero-min-height: 500px;
  --hero-padding: var(--spacing-xxl);
  --hero-text-color: var(--color-white);
  --hero-overlay: rgba(0, 0, 0, 0.4);

  position: relative;
  min-height: var(--hero-min-height);
  display: flex;
  align-items: center;
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__background::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--hero-overlay);
}

.hero__content {
  max-width: 600px;
  padding: var(--hero-padding);
  color: var(--hero-text-color);
}

.hero__heading {
  font-size: var(--font-size-xxl);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

@media (max-width: 768px) {
  .hero {
    --hero-min-height: 400px;
  }
  .hero__heading {
    font-size: var(--font-size-xl);
  }
}
```

---

#### 4.2.3 Cards Block

**Purpose:** Display content in card grid layout

**Variants:**
- `cards` (default) - Image + title + description
- `cards (icon)` - Icon-based feature cards
- `cards (pricing)` - Pricing plan cards
- `cards (horizontal)` - Side-by-side layout

**HTML Structure:**
```html
<div class="cards">
  <ul class="cards__list">
    <li class="cards__item">
      <div class="cards__image">
        <img src="card-1.jpg" alt="">
      </div>
      <div class="cards__content">
        <h3 class="cards__title">Card Title</h3>
        <p class="cards__description">Card description text...</p>
        <a href="/link" class="cards__link">Learn more</a>
      </div>
    </li>
    <!-- Additional cards -->
  </ul>
</div>
```

**Content Model (Authoring):**
```
| Cards           |                    |
|-----------------|---------------------|
| Image           | /images/card-1.jpg  |
| Title           | Card Title          |
| Description     | Card description... |
| Link            | [Learn more](/link) |
```

**CSS Specifications:**
```css
.cards__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  list-style: none;
  padding: 0;
}

.cards__item {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cards__item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.cards__image img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}

.cards__content {
  padding: var(--spacing-lg);
}

/* Icon variant */
.cards.icon .cards__item {
  text-align: center;
  padding: var(--spacing-xl);
}

.cards.icon .cards__icon {
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-md);
}
```

---

#### 4.2.4 Carousel Block

**Purpose:** Sliding content display

**Variants:**
- `carousel` (default) - Generic content carousel
- `carousel (cards)` - Card-based slides
- `carousel (products)` - Product showcase
- `carousel (testimonials)` - Customer quotes

**HTML Structure:**
```html
<div class="carousel" data-autoplay="false" data-interval="5000">
  <div class="carousel__viewport">
    <ul class="carousel__track">
      <li class="carousel__slide">
        <!-- Slide content -->
      </li>
      <!-- Additional slides -->
    </ul>
  </div>
  <div class="carousel__controls">
    <button class="carousel__prev" aria-label="Previous slide">
      <span class="icon icon-arrow-left"></span>
    </button>
    <button class="carousel__next" aria-label="Next slide">
      <span class="icon icon-arrow-right"></span>
    </button>
  </div>
  <div class="carousel__pagination">
    <button class="carousel__dot active" aria-label="Go to slide 1"></button>
    <button class="carousel__dot" aria-label="Go to slide 2"></button>
    <!-- Additional dots -->
  </div>
</div>
```

**JavaScript Features:**
```javascript
export default function decorate(block) {
  const slides = [...block.children];
  const config = {
    autoplay: block.dataset.autoplay === 'true',
    interval: parseInt(block.dataset.interval, 10) || 5000,
    infinite: true,
  };

  // Build carousel structure
  const viewport = document.createElement('div');
  viewport.className = 'carousel__viewport';

  const track = document.createElement('ul');
  track.className = 'carousel__track';

  slides.forEach((slide, index) => {
    const li = document.createElement('li');
    li.className = 'carousel__slide';
    li.setAttribute('aria-hidden', index !== 0);
    li.innerHTML = slide.innerHTML;
    track.appendChild(li);
  });

  viewport.appendChild(track);
  block.innerHTML = '';
  block.appendChild(viewport);

  // Add controls
  addControls(block, slides.length);

  // Initialize behavior
  initCarousel(block, config);
}

function initCarousel(block, config) {
  let currentIndex = 0;
  const track = block.querySelector('.carousel__track');
  const slides = block.querySelectorAll('.carousel__slide');
  const dots = block.querySelectorAll('.carousel__dot');

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i !== index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Event listeners
  block.querySelector('.carousel__prev').addEventListener('click', () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  });

  block.querySelector('.carousel__next').addEventListener('click', () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  });

  // Autoplay
  if (config.autoplay) {
    setInterval(() => {
      const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      goToSlide(newIndex);
    }, config.interval);
  }

  // Touch/swipe support
  initTouchSupport(block, goToSlide, () => currentIndex, slides.length);
}
```

---

#### 4.2.5 Tabs Block

**Purpose:** Tabbed content organization

**HTML Structure:**
```html
<div class="tabs">
  <div class="tabs__list" role="tablist">
    <button class="tabs__tab active" role="tab" aria-selected="true"
            aria-controls="tab-panel-1" id="tab-1">Tab 1</button>
    <button class="tabs__tab" role="tab" aria-selected="false"
            aria-controls="tab-panel-2" id="tab-2">Tab 2</button>
  </div>
  <div class="tabs__panels">
    <div class="tabs__panel active" role="tabpanel" id="tab-panel-1"
         aria-labelledby="tab-1">
      <!-- Tab 1 content -->
    </div>
    <div class="tabs__panel" role="tabpanel" id="tab-panel-2"
         aria-labelledby="tab-2" hidden>
      <!-- Tab 2 content -->
    </div>
  </div>
</div>
```

**Content Model (Authoring):**
```
| Tabs    |                      |
|---------|----------------------|
| Tab 1   | Tab 1 content here   |
| Tab 2   | Tab 2 content here   |
| Tab 3   | Tab 3 content here   |
```

**Accessibility Requirements:**
- Arrow key navigation between tabs
- Home/End key support
- Proper ARIA attributes
- Focus management

---

#### 4.2.6 Accordion Block

**Purpose:** Collapsible content sections (FAQs)

**HTML Structure:**
```html
<div class="accordion">
  <div class="accordion__item">
    <h3 class="accordion__heading">
      <button class="accordion__trigger" aria-expanded="false"
              aria-controls="accordion-content-1">
        Question text here?
        <span class="accordion__icon"></span>
      </button>
    </h3>
    <div class="accordion__content" id="accordion-content-1" hidden>
      <div class="accordion__body">
        Answer content here...
      </div>
    </div>
  </div>
  <!-- Additional items -->
</div>
```

**CSS Specifications:**
```css
.accordion__item {
  border-bottom: 1px solid var(--color-gray-200);
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--spacing-lg) 0;
  background: none;
  border: none;
  font-size: var(--font-size-md);
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.accordion__icon {
  transition: transform 0.3s;
}

.accordion__trigger[aria-expanded="true"] .accordion__icon {
  transform: rotate(180deg);
}

.accordion__content {
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion__body {
  padding-bottom: var(--spacing-lg);
}
```

---

#### 4.2.7 Pricing Table Block

**Purpose:** Product/plan comparison

**HTML Structure:**
```html
<div class="pricing-table">
  <div class="pricing-table__header">
    <h2>Choose the plan that's right for your business</h2>
  </div>
  <div class="pricing-table__plans">
    <div class="pricing-table__plan">
      <div class="pricing-table__plan-header">
        <h3>Standard</h3>
        <div class="pricing-table__price">
          <span class="pricing-table__currency">$</span>
          <span class="pricing-table__amount">0</span>
          <span class="pricing-table__period">/mo.</span>
        </div>
      </div>
      <ul class="pricing-table__features">
        <li class="included">Feature 1</li>
        <li class="included">Feature 2</li>
        <li class="excluded">Feature 3</li>
      </ul>
      <div class="pricing-table__cta">
        <a href="/buy" class="button">Get started</a>
      </div>
    </div>
    <!-- Additional plans -->
  </div>
</div>
```

---

#### 4.2.8 Form Block

**Purpose:** Lead capture and contact forms

**Variants:**
- `form` (default) - Generic form
- `form (rai)` - Request Additional Information form
- `form (newsletter)` - Email subscription

**HTML Structure:**
```html
<div class="form" data-form-id="rai-form">
  <form class="form__container" action="/api/submit" method="POST">
    <div class="form__header">
      <h2>Talk to an AT&T Business sales expert</h2>
      <p>Fill out this form and we'll contact you directly.</p>
    </div>
    <div class="form__fields">
      <div class="form__field">
        <label for="first-name">First name *</label>
        <input type="text" id="first-name" name="firstName" required>
        <span class="form__error" role="alert"></span>
      </div>
      <div class="form__field">
        <label for="last-name">Last name *</label>
        <input type="text" id="last-name" name="lastName" required>
        <span class="form__error" role="alert"></span>
      </div>
      <div class="form__field">
        <label for="email">Email address *</label>
        <input type="email" id="email" name="email" required>
        <span class="form__error" role="alert"></span>
      </div>
      <div class="form__field">
        <label for="phone">Phone *</label>
        <input type="tel" id="phone" name="phone" required>
        <span class="form__error" role="alert"></span>
      </div>
      <div class="form__field">
        <label for="company">Company name *</label>
        <input type="text" id="company" name="company" required>
        <span class="form__error" role="alert"></span>
      </div>
      <div class="form__field form__field--full">
        <label for="comments">Add comment</label>
        <textarea id="comments" name="comments" rows="4"></textarea>
      </div>
      <div class="form__field form__field--checkbox">
        <input type="checkbox" id="opt-in" name="optIn">
        <label for="opt-in">Yes, please send me the latest news and offers</label>
      </div>
    </div>
    <div class="form__actions">
      <button type="submit" class="button button--primary">Submit</button>
    </div>
    <div class="form__footer">
      <p>We are committed to protecting your <a href="/privacy">privacy</a>.</p>
    </div>
  </form>
</div>
```

**JavaScript Features:**
- Client-side validation
- Error state handling
- Form submission to Marketo/Eloqua
- Success/error messaging
- Analytics tracking

---

### 4.3 Additional Blocks Summary

| Block | Description | Priority |
|-------|-------------|----------|
| `columns` | Multi-column layouts (2-4 cols) | P0 |
| `image-text` | Image with adjacent text | P0 |
| `cta-banner` | Call-to-action banner | P0 |
| `video` | Video embed with poster | P1 |
| `stats` | Statistics/metrics display | P1 |
| `quote` | Testimonial/pull quote | P1 |
| `anchor-nav` | In-page navigation | P1 |
| `breadcrumb` | Navigation breadcrumbs | P1 |
| `link-list` | Related links list | P1 |
| `promo-banner` | Promotional announcement | P1 |
| `filter` | Content filtering | P2 |
| `pagination` | Page navigation | P2 |
| `search` | Site search | P2 |
| `gallery` | Image gallery | P2 |

---

## 5. Universal Editor Configuration

### 5.1 Component Models

```json
// ue/component-models.json
{
  "groups": [
    {
      "title": "Hero Blocks",
      "id": "hero-blocks",
      "components": [
        {
          "title": "Hero",
          "id": "hero",
          "plugins": {
            "xwalk": {
              "page": {
                "resourceType": "core/franklin/components/block",
                "template": {
                  "name": "Hero",
                  "model": "hero"
                }
              }
            }
          }
        }
      ]
    },
    {
      "title": "Content Blocks",
      "id": "content-blocks",
      "components": [
        {
          "title": "Cards",
          "id": "cards",
          "plugins": {
            "xwalk": {
              "page": {
                "resourceType": "core/franklin/components/block",
                "template": {
                  "name": "Cards",
                  "model": "cards"
                }
              }
            }
          }
        },
        {
          "title": "Carousel",
          "id": "carousel",
          "plugins": {
            "xwalk": {
              "page": {
                "resourceType": "core/franklin/components/block",
                "template": {
                  "name": "Carousel",
                  "model": "carousel"
                }
              }
            }
          }
        }
      ]
    }
  ]
}
```

### 5.2 Component Definitions

```json
// ue/component-definition.json
{
  "title": "AT&T Business Components",
  "models": [
    {
      "id": "hero",
      "fields": [
        {
          "component": "text",
          "name": "eyebrow",
          "label": "Eyebrow Text",
          "valueType": "string"
        },
        {
          "component": "text",
          "name": "heading",
          "label": "Heading",
          "valueType": "string",
          "required": true
        },
        {
          "component": "richtext",
          "name": "description",
          "label": "Description",
          "valueType": "string"
        },
        {
          "component": "aem-content",
          "name": "primaryCta",
          "label": "Primary CTA",
          "valueType": "string"
        },
        {
          "component": "aem-content",
          "name": "secondaryCta",
          "label": "Secondary CTA",
          "valueType": "string"
        },
        {
          "component": "reference",
          "name": "backgroundImage",
          "label": "Background Image",
          "valueType": "string",
          "multi": false
        },
        {
          "component": "select",
          "name": "variant",
          "label": "Variant",
          "valueType": "string",
          "options": [
            { "name": "Default", "value": "default" },
            { "name": "Video Background", "value": "video" },
            { "name": "Split Layout", "value": "split" }
          ]
        }
      ]
    },
    {
      "id": "cards",
      "fields": [
        {
          "component": "multiselect",
          "name": "variant",
          "label": "Card Style",
          "valueType": "string",
          "options": [
            { "name": "Default", "value": "default" },
            { "name": "Icon Cards", "value": "icon" },
            { "name": "Pricing Cards", "value": "pricing" },
            { "name": "Horizontal", "value": "horizontal" }
          ]
        },
        {
          "component": "number",
          "name": "columns",
          "label": "Columns",
          "valueType": "number",
          "min": 2,
          "max": 4
        }
      ]
    },
    {
      "id": "card-item",
      "fields": [
        {
          "component": "reference",
          "name": "image",
          "label": "Image",
          "valueType": "string"
        },
        {
          "component": "text",
          "name": "title",
          "label": "Title",
          "valueType": "string",
          "required": true
        },
        {
          "component": "richtext",
          "name": "description",
          "label": "Description",
          "valueType": "string"
        },
        {
          "component": "aem-content",
          "name": "link",
          "label": "Link",
          "valueType": "string"
        }
      ]
    },
    {
      "id": "form",
      "fields": [
        {
          "component": "text",
          "name": "formId",
          "label": "Form ID",
          "valueType": "string",
          "required": true
        },
        {
          "component": "text",
          "name": "heading",
          "label": "Form Heading",
          "valueType": "string"
        },
        {
          "component": "text",
          "name": "description",
          "label": "Form Description",
          "valueType": "string"
        },
        {
          "component": "text",
          "name": "submitText",
          "label": "Submit Button Text",
          "valueType": "string"
        },
        {
          "component": "text",
          "name": "successMessage",
          "label": "Success Message",
          "valueType": "string"
        },
        {
          "component": "select",
          "name": "integration",
          "label": "Form Integration",
          "valueType": "string",
          "options": [
            { "name": "Marketo", "value": "marketo" },
            { "name": "Eloqua", "value": "eloqua" },
            { "name": "Salesforce", "value": "salesforce" }
          ]
        }
      ]
    }
  ]
}
```

### 5.3 Component Filters

```json
// ue/component-filters.json
{
  "definitionId": "att-business",
  "filters": [
    {
      "id": "hero-section",
      "components": [
        "hero",
        "hero-tabbed",
        "hero-promo"
      ]
    },
    {
      "id": "content-section",
      "components": [
        "cards",
        "carousel",
        "columns",
        "tabs",
        "accordion",
        "image-text",
        "video",
        "stats",
        "quote",
        "pricing-table"
      ]
    },
    {
      "id": "cta-section",
      "components": [
        "cta-banner",
        "form",
        "promo-banner"
      ]
    },
    {
      "id": "navigation",
      "components": [
        "anchor-nav",
        "breadcrumb",
        "link-list"
      ]
    }
  ]
}
```

---

## 6. Page Templates

### 6.1 Template Architecture

```
Base Template (all pages)
├── <head> (meta, styles, scripts)
├── <header> (global navigation)
├── <main>
│   ├── Section 1 (hero-section filter)
│   ├── Section 2-N (content-section filter)
│   └── Section N+1 (cta-section filter)
├── <footer> (global footer)
└── Modals/Overlays
```

### 6.2 Template Definitions

#### Homepage Template
```yaml
name: Homepage
path: /
sections:
  - type: hero
    filter: hero-section
    required: true
  - type: products
    filter: content-section
    blocks: [tabs, carousel]
  - type: value-props
    filter: content-section
    blocks: [cards, columns]
  - type: awards
    filter: content-section
    blocks: [carousel, stats]
  - type: customer-stories
    filter: content-section
    blocks: [carousel, cards]
  - type: cta
    filter: cta-section
    blocks: [form, cta-banner]
  - type: related-links
    filter: content-section
    blocks: [link-list]
metadata:
  template: homepage
  og:type: website
```

#### Product Template
```yaml
name: Product Detail
path: /products/*
sections:
  - type: hero
    filter: hero-section
    required: true
  - type: overview
    filter: content-section
    blocks: [columns, image-text]
  - type: features
    filter: content-section
    blocks: [tabs, cards, carousel]
  - type: pricing
    filter: content-section
    blocks: [pricing-table]
  - type: case-study
    filter: content-section
    blocks: [quote, image-text]
  - type: faq
    filter: content-section
    blocks: [accordion]
  - type: cta
    filter: cta-section
    blocks: [form, cta-banner]
metadata:
  template: product
  og:type: product
```

#### Industry Template
```yaml
name: Industry
path: /industries/*
sections:
  - type: hero
    filter: hero-section
    required: true
    blocks: [hero]
  - type: anchor-navigation
    filter: navigation
    blocks: [anchor-nav]
  - type: solutions
    filter: content-section
    blocks: [cards, columns]
  - type: case-studies
    filter: content-section
    blocks: [carousel, cards]
  - type: insights
    filter: content-section
    blocks: [cards]
  - type: cta
    filter: cta-section
    blocks: [form]
metadata:
  template: industry
  og:type: website
```

### 6.3 Section Metadata

Section metadata allows authors to style sections:

```
| Section Metadata |                |
|------------------|----------------|
| Style            | dark           |
| Background       | /images/bg.jpg |
| Spacing          | large          |
```

**Available Options:**
- `style`: `default`, `dark`, `light`, `brand`
- `background`: Image path or color
- `spacing`: `small`, `medium`, `large`, `none`
- `width`: `default`, `wide`, `full`

---

## 7. Design System Implementation

### 7.1 CSS Custom Properties (tokens.css)

```css
/* styles/tokens.css */

:root {
  /* ========================================
     COLOR TOKENS
     ======================================== */

  /* Brand Colors */
  --color-att-blue: #0057B8;
  --color-att-light-blue: #009FDB;
  --color-att-orange: #FF7200;

  /* Primary Palette */
  --color-primary: var(--color-att-blue);
  --color-primary-dark: #004494;
  --color-primary-light: #3378C6;

  /* Secondary Palette */
  --color-secondary: var(--color-att-light-blue);
  --color-secondary-dark: #0080B0;
  --color-secondary-light: #33B2E5;

  /* Accent */
  --color-accent: var(--color-att-orange);
  --color-accent-dark: #CC5B00;
  --color-accent-light: #FF8F33;

  /* Neutrals */
  --color-black: #000000;
  --color-gray-900: #1A1A1A;
  --color-gray-800: #333333;
  --color-gray-700: #4D4D4D;
  --color-gray-600: #666666;
  --color-gray-500: #808080;
  --color-gray-400: #999999;
  --color-gray-300: #B3B3B3;
  --color-gray-200: #CCCCCC;
  --color-gray-100: #E6E6E6;
  --color-gray-50: #F5F5F5;
  --color-white: #FFFFFF;

  /* Semantic Colors */
  --color-success: #00A651;
  --color-success-light: #E6F7ED;
  --color-warning: #FFC107;
  --color-warning-light: #FFF8E1;
  --color-error: #D32F2F;
  --color-error-light: #FFEBEE;
  --color-info: var(--color-att-light-blue);
  --color-info-light: #E1F5FE;

  /* Background Colors */
  --color-background: var(--color-white);
  --color-background-alt: var(--color-gray-50);
  --color-background-dark: var(--color-gray-900);

  /* Text Colors */
  --color-text: var(--color-gray-900);
  --color-text-secondary: var(--color-gray-600);
  --color-text-muted: var(--color-gray-500);
  --color-text-inverse: var(--color-white);
  --color-text-link: var(--color-primary);
  --color-text-link-hover: var(--color-primary-dark);

  /* Border Colors */
  --color-border: var(--color-gray-200);
  --color-border-dark: var(--color-gray-400);
  --color-border-focus: var(--color-primary);

  /* ========================================
     TYPOGRAPHY TOKENS
     ======================================== */

  /* Font Families */
  --font-family-primary: 'ATT Aleck Sans', -apple-system, BlinkMacSystemFont,
                         'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-family-secondary: 'ATT Aleck Slab', Georgia, 'Times New Roman', serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;

  /* Font Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-md: 1.125rem;   /* 18px */
  --font-size-lg: 1.25rem;    /* 20px */
  --font-size-xl: 1.5rem;     /* 24px */
  --font-size-2xl: 1.875rem;  /* 30px */
  --font-size-3xl: 2.25rem;   /* 36px */
  --font-size-4xl: 3rem;      /* 48px */
  --font-size-5xl: 3.75rem;   /* 60px */

  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;

  /* ========================================
     SPACING TOKENS
     ======================================== */

  --spacing-0: 0;
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
  --spacing-20: 5rem;     /* 80px */
  --spacing-24: 6rem;     /* 96px */

  /* Semantic Spacing */
  --spacing-xs: var(--spacing-1);
  --spacing-sm: var(--spacing-2);
  --spacing-md: var(--spacing-4);
  --spacing-lg: var(--spacing-6);
  --spacing-xl: var(--spacing-8);
  --spacing-2xl: var(--spacing-12);
  --spacing-section: var(--spacing-16);
  --spacing-section-lg: var(--spacing-24);

  /* ========================================
     LAYOUT TOKENS
     ======================================== */

  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
  --container-max: 1600px;

  /* Breakpoints (for reference in JS) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;

  /* Grid */
  --grid-columns: 12;
  --grid-gutter: var(--spacing-6);
  --grid-gutter-sm: var(--spacing-4);

  /* ========================================
     BORDER TOKENS
     ======================================== */

  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;

  --border-radius-none: 0;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  --border-radius-full: 9999px;

  /* ========================================
     SHADOW TOKENS
     ======================================== */

  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);

  /* ========================================
     TRANSITION TOKENS
     ======================================== */

  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;

  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* ========================================
     Z-INDEX TOKENS
     ======================================== */

  --z-index-dropdown: 100;
  --z-index-sticky: 200;
  --z-index-fixed: 300;
  --z-index-modal-backdrop: 400;
  --z-index-modal: 500;
  --z-index-popover: 600;
  --z-index-tooltip: 700;
}

/* ========================================
   DARK MODE OVERRIDES
   ======================================== */

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--color-gray-900);
    --color-background-alt: var(--color-gray-800);
    --color-text: var(--color-white);
    --color-text-secondary: var(--color-gray-300);
    --color-border: var(--color-gray-700);
  }
}

/* Manual dark mode class */
.dark {
  --color-background: var(--color-gray-900);
  --color-background-alt: var(--color-gray-800);
  --color-text: var(--color-white);
  --color-text-secondary: var(--color-gray-300);
  --color-border: var(--color-gray-700);
}
```

### 7.2 Global Styles (styles.css)

```css
/* styles/styles.css */

@import url('tokens.css');
@import url('fonts.css');

/* ========================================
   CSS RESET & BASE
   ======================================== */

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* ========================================
   TYPOGRAPHY
   ======================================== */

h1, .h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

h2, .h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

h3, .h3 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
}

h4, .h4 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
}

h5, .h5 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
}

h6, .h6 {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
}

p {
  margin-bottom: var(--spacing-4);
}

a {
  color: var(--color-text-link);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--duration-fast) var(--ease-out);
}

a:hover {
  color: var(--color-text-link-hover);
}

/* ========================================
   LAYOUT
   ======================================== */

main {
  min-height: 100vh;
}

main > .section {
  padding: var(--spacing-section) 0;
}

main > .section > div {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--spacing-6);
}

/* Section variants */
main > .section.dark {
  background-color: var(--color-gray-900);
  color: var(--color-white);
}

main > .section.light {
  background-color: var(--color-gray-50);
}

main > .section.brand {
  background-color: var(--color-primary);
  color: var(--color-white);
}

/* ========================================
   BUTTONS
   ======================================== */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  text-decoration: none;
  border: var(--border-width-medium) solid transparent;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.button--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.button--primary:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  color: var(--color-white);
}

.button--secondary {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.button--secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.button--accent {
  background-color: var(--color-accent);
  color: var(--color-white);
  border-color: var(--color-accent);
}

.button--accent:hover {
  background-color: var(--color-accent-dark);
  border-color: var(--color-accent-dark);
}

.button--large {
  padding: var(--spacing-4) var(--spacing-8);
  font-size: var(--font-size-md);
}

.button--small {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
}

/* ========================================
   UTILITIES
   ======================================== */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* ========================================
   RESPONSIVE TYPOGRAPHY
   ======================================== */

@media (max-width: 768px) {
  h1, .h1 {
    font-size: var(--font-size-3xl);
  }

  h2, .h2 {
    font-size: var(--font-size-2xl);
  }

  h3, .h3 {
    font-size: var(--font-size-xl);
  }

  main > .section {
    padding: var(--spacing-12) 0;
  }

  main > .section > div {
    padding: 0 var(--spacing-4);
  }
}
```

### 7.3 Font Loading (fonts.css)

```css
/* styles/fonts.css */

/* ATT Aleck Sans */
@font-face {
  font-family: 'ATT Aleck Sans';
  src: url('/fonts/ATTAleckSans-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'ATT Aleck Sans';
  src: url('/fonts/ATTAleckSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'ATT Aleck Sans';
  src: url('/fonts/ATTAleckSans-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'ATT Aleck Sans';
  src: url('/fonts/ATTAleckSans-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* ATT Aleck Slab (for headings accent) */
@font-face {
  font-family: 'ATT Aleck Slab';
  src: url('/fonts/ATTAleckSlab-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'ATT Aleck Slab';
  src: url('/fonts/ATTAleckSlab-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

---

## 8. Third-Party Integrations

### 8.1 Adobe Analytics

**Implementation Approach:** Adobe Launch (DTM)

```javascript
// scripts/utils/analytics.js

const ANALYTICS_CONFIG = {
  reportSuite: 'attbusiness-prod',
  trackingServer: 'metrics.att.com',
  visitorNamespace: 'attbusiness',
};

export function initAnalytics() {
  // Adobe Launch loaded via head.html
  window.digitalData = window.digitalData || {};

  // Set page data
  window.digitalData.page = {
    pageInfo: {
      pageName: document.title,
      pageURL: window.location.href,
      pageType: getPageType(),
      language: document.documentElement.lang || 'en',
    },
    category: {
      primaryCategory: getPrimaryCategory(),
      subCategory: getSubCategory(),
    },
  };
}

export function trackEvent(eventName, eventData = {}) {
  if (window._satellite) {
    window._satellite.track(eventName, eventData);
  }
}

export function trackPageView() {
  if (window._satellite) {
    window._satellite.track('page-view');
  }
}

export function trackClick(element, eventData = {}) {
  const data = {
    linkName: element.textContent?.trim() || 'unknown',
    linkURL: element.href || '',
    linkPosition: eventData.position || '',
    ...eventData,
  };
  trackEvent('link-click', data);
}

function getPageType() {
  const path = window.location.pathname;
  if (path === '/') return 'homepage';
  if (path.includes('/products/')) return 'product';
  if (path.includes('/portfolios/')) return 'portfolio';
  if (path.includes('/industries/')) return 'industry';
  if (path.includes('/learn/')) return 'article';
  return 'generic';
}

function getPrimaryCategory() {
  const path = window.location.pathname.split('/')[1];
  return path || 'home';
}

function getSubCategory() {
  const path = window.location.pathname.split('/')[2];
  return path || '';
}
```

### 8.2 Adobe Target (Personalization)

```javascript
// scripts/utils/personalization.js

export async function initPersonalization() {
  // Wait for Adobe Target to load
  if (!window.adobe?.target) {
    console.warn('Adobe Target not loaded');
    return;
  }

  try {
    const offers = await window.adobe.target.getOffers({
      request: {
        execute: {
          pageLoad: {},
        },
      },
    });

    await window.adobe.target.applyOffers({ response: offers });
  } catch (error) {
    console.error('Target personalization error:', error);
  }
}

export function trackTargetEvent(eventName, parameters = {}) {
  if (window.adobe?.target) {
    window.adobe.target.trackEvent({
      mbox: eventName,
      params: parameters,
    });
  }
}
```

### 8.3 Form Integration (Marketo)

```javascript
// scripts/utils/forms.js

const MARKETO_CONFIG = {
  baseUrl: '//app-ab12.marketo.com',
  munchkinId: '123-ABC-456',
};

export async function submitToMarketo(formData, formId) {
  const endpoint = `${MARKETO_CONFIG.baseUrl}/index.php/leadCapture/save2`;

  const payload = {
    formid: formId,
    munchkinId: MARKETO_CONFIG.munchkinId,
    formVid: formId,
    ...formData,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(payload),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    return { success: true };
  } catch (error) {
    console.error('Marketo submission error:', error);
    return { success: false, error: error.message };
  }
}

export function validateForm(form) {
  const errors = {};
  const fields = form.querySelectorAll('[required]');

  fields.forEach((field) => {
    if (!field.value.trim()) {
      errors[field.name] = 'This field is required';
    } else if (field.type === 'email' && !isValidEmail(field.value)) {
      errors[field.name] = 'Please enter a valid email address';
    } else if (field.type === 'tel' && !isValidPhone(field.value)) {
      errors[field.name] = 'Please enter a valid phone number';
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
}
```

### 8.4 ChiliPiper Integration

```javascript
// scripts/delayed.js (lazy loaded)

export function initChiliPiper() {
  const script = document.createElement('script');
  script.src = 'https://js.chilipiper.com/marketing.js';
  script.async = true;
  script.onload = () => {
    if (window.ChiliPiper) {
      window.ChiliPiper.submit('att-business', 'inbound-router', {
        title: 'Schedule a call',
        titleStyle: 'Roboto',
      });
    }
  };
  document.head.appendChild(script);
}
```

### 8.5 Integration Summary

| System | Purpose | Load Strategy | Priority |
|--------|---------|---------------|----------|
| Adobe Analytics | Page tracking | Async (head) | P0 |
| Adobe Target | Personalization | Async (head) | P1 |
| Marketo | Lead capture | On form load | P0 |
| ChiliPiper | Scheduling | Lazy (delayed.js) | P1 |
| Live Chat | Support | Lazy (delayed.js) | P2 |

---

## 9. Content Migration

### 9.1 Import Script Architecture

```javascript
// tools/importer/import.js

import {
  DOMUtils,
  Blocks,
  WebImporter,
} from '@adobe/helix-importer';

const createMetadata = (main, document) => {
  const meta = {};

  // Extract title
  const title = document.querySelector('title');
  if (title) meta.Title = title.textContent;

  // Extract meta tags
  const metaTags = document.querySelectorAll('meta');
  metaTags.forEach((tag) => {
    const name = tag.getAttribute('name') || tag.getAttribute('property');
    const content = tag.getAttribute('content');
    if (name && content) {
      meta[name] = content;
    }
  });

  // Extract OG data
  meta['og:title'] = document.querySelector('meta[property="og:title"]')?.content;
  meta['og:description'] = document.querySelector('meta[property="og:description"]')?.content;
  meta['og:image'] = document.querySelector('meta[property="og:image"]')?.content;

  const block = Blocks.getMetadataBlock(document, meta);
  main.append(block);

  return meta;
};

const transformers = {
  // Hero transformation
  hero: (element, document) => {
    const eyebrow = element.querySelector('.hero-eyebrow')?.textContent;
    const heading = element.querySelector('h1')?.textContent;
    const description = element.querySelector('.hero-description')?.textContent;
    const primaryCta = element.querySelector('.cta-primary');
    const secondaryCta = element.querySelector('.cta-secondary');
    const bgImage = element.querySelector('.hero-bg img');

    const cells = [
      ['Hero'],
      ['Eyebrow', eyebrow || ''],
      ['Heading', heading || ''],
      ['Description', description || ''],
      ['Primary CTA', primaryCta ? `[${primaryCta.textContent}](${primaryCta.href})` : ''],
      ['Secondary CTA', secondaryCta ? `[${secondaryCta.textContent}](${secondaryCta.href})` : ''],
      ['Background', bgImage ? bgImage.src : ''],
    ];

    return Blocks.createBlock(document, cells);
  },

  // Cards transformation
  cards: (element, document) => {
    const cards = element.querySelectorAll('.card');
    const rows = [['Cards']];

    cards.forEach((card) => {
      const image = card.querySelector('img');
      const title = card.querySelector('.card-title')?.textContent;
      const description = card.querySelector('.card-description')?.textContent;
      const link = card.querySelector('a');

      rows.push([
        image ? `![${image.alt}](${image.src})` : '',
        title || '',
        description || '',
        link ? `[${link.textContent}](${link.href})` : '',
      ]);
    });

    return Blocks.createBlock(document, rows);
  },

  // Add more transformers...
};

export default {
  transform: async ({ document, url }) => {
    const main = document.createElement('main');

    // Remove unwanted elements
    const unwanted = document.querySelectorAll(
      'header, footer, nav, script, style, noscript, .cookie-banner, .modal'
    );
    unwanted.forEach((el) => el.remove());

    // Get main content
    const content = document.querySelector('main') || document.body;

    // Transform sections
    const sections = content.querySelectorAll('[class*="section"]');
    sections.forEach((section) => {
      // Identify block type and transform
      if (section.classList.contains('hero-section')) {
        main.append(transformers.hero(section, document));
      } else if (section.classList.contains('cards-section')) {
        main.append(transformers.cards(section, document));
      }
      // ... handle other sections

      // Add section break
      main.append(document.createElement('hr'));
    });

    // Add metadata
    createMetadata(main, document);

    return [{
      element: main,
      path: new URL(url).pathname.replace('.html', ''),
    }];
  },

  generateDocumentPath: ({ url }) => {
    return new URL(url).pathname.replace('.html', '');
  },
};
```

### 9.2 Migration Workflow

```
1. URL Discovery
   └── Crawl sitemap.xml
   └── Identify all pages to migrate
   └── Categorize by template type

2. Asset Extraction
   └── Download all images
   └── Convert to WebP format
   └── Organize by page/section
   └── Update asset references

3. Content Transformation
   └── Run import script
   └── Transform HTML to blocks
   └── Generate markdown files
   └── Preserve metadata

4. Validation
   └── Check block structure
   └── Verify links
   └── Validate images
   └── Review metadata

5. Upload to SharePoint
   └── Create folder structure
   └── Upload markdown files
   └── Upload assets
   └── Set permissions

6. Preview & Review
   └── Check EDS preview
   └── Compare with source
   └── Fix issues
   └── Author approval

7. Publish
   └── Publish to live
   └── Verify CDN
   └── Monitor for issues
```

### 9.3 URL Mapping Rules

```javascript
// tools/importer/url-mapper.js

const URL_MAPPINGS = {
  // Remove .html extension
  pattern: /\.html$/,
  replacement: '',

  // Specific redirects
  redirects: {
    '/home.html': '/',
    '/index.html': '/',
    '/default.html': '/',
  },

  // Path transformations
  transforms: [
    { from: /^\/portfolios\//, to: '/solutions/' },
    { from: /^\/learn\/articles\//, to: '/insights/' },
  ],
};

export function mapUrl(sourceUrl) {
  let targetUrl = sourceUrl;

  // Apply redirects
  if (URL_MAPPINGS.redirects[targetUrl]) {
    return URL_MAPPINGS.redirects[targetUrl];
  }

  // Remove .html
  targetUrl = targetUrl.replace(URL_MAPPINGS.pattern, URL_MAPPINGS.replacement);

  // Apply transforms
  URL_MAPPINGS.transforms.forEach(({ from, to }) => {
    targetUrl = targetUrl.replace(from, to);
  });

  return targetUrl;
}
```

---

## 10. SEO & URL Strategy

### 10.1 URL Structure

| Pattern | Example | SEO Benefit |
|---------|---------|-------------|
| Clean URLs | `/products/dynamic-defense` | Better crawlability |
| Logical hierarchy | `/industries/healthcare/solutions` | Clear site structure |
| Descriptive slugs | `/learn/what-is-5g-for-business` | Keyword relevance |
| No parameters | Avoid `?id=123` | Cleaner indexing |

### 10.2 Redirect Strategy

```apache
# 301 Redirects (in paths.json or CDN rules)

# Remove .html extension
/products/att-dynamic-defense.html -> /products/att-dynamic-defense

# Legacy URL redirects
/portfolios/wireless.html -> /solutions/mobility
/business-internet.html -> /solutions/business-internet

# Category restructuring
/categories/* -> /solutions/*
```

### 10.3 Meta Tags

```html
<!-- Required meta tags per page -->
<title>{Page Title} | AT&T Business</title>
<meta name="description" content="{150-160 char description}">
<meta name="keywords" content="{relevant keywords}">

<!-- Open Graph -->
<meta property="og:title" content="{Page Title}">
<meta property="og:description" content="{Description}">
<meta property="og:image" content="{Image URL}">
<meta property="og:url" content="{Canonical URL}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="AT&T Business">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@ATTBusiness">
<meta name="twitter:title" content="{Title}">
<meta name="twitter:description" content="{Description}">
<meta name="twitter:image" content="{Image URL}">

<!-- Canonical -->
<link rel="canonical" href="{Canonical URL}">

<!-- Hreflang (if multilingual) -->
<link rel="alternate" hreflang="en-US" href="{URL}">
```

### 10.4 Structured Data

```json
// Organization schema (global)
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AT&T Business",
  "url": "https://www.business.att.com",
  "logo": "https://www.business.att.com/icons/att-logo.svg",
  "sameAs": [
    "https://www.facebook.com/ATTSmallBiz",
    "https://www.linkedin.com/company/attbusiness",
    "https://twitter.com/ATTBusiness"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-888-740-4027",
    "contactType": "sales"
  }
}

// Product schema (product pages)
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AT&T Dynamic Defense",
  "description": "Network security solution...",
  "brand": {
    "@type": "Brand",
    "name": "AT&T Business"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31"
  }
}

// FAQ schema (FAQ sections)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AT&T Dynamic Defense?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AT&T Dynamic Defense is..."
      }
    }
  ]
}
```

### 10.5 Sitemap Generation

```yaml
# helix-query.yaml
indexes:
  site:
    include:
      - '/**'
    exclude:
      - '/drafts/**'
      - '/experiments/**'
      - '/404'
    properties:
      title:
        select: head > title
        value: textContent(el)
      lastModified:
        select: none
        value: parseTimestamp(headers['last-modified'])
      image:
        select: head > meta[property="og:image"]
        value: attribute(el, 'content')
      description:
        select: head > meta[name="description"]
        value: attribute(el, 'content')
```

---

## 11. Testing & Quality Assurance

### 11.1 Testing Strategy

```
Testing Pyramid:
                    ┌──────────┐
                    │   E2E    │  (10%)
                   ┌┴──────────┴┐
                   │Integration │  (20%)
                  ┌┴────────────┴┐
                  │    Unit      │  (70%)
                  └──────────────┘
```

### 11.2 Unit Testing

```javascript
// blocks/hero/hero.test.js
import { expect, describe, it, beforeEach } from 'vitest';
import decorate from './hero.js';

describe('Hero Block', () => {
  let block;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="hero">
        <div>
          <div>AT&T Business</div>
        </div>
        <div>
          <div><h1>Test Heading</h1></div>
        </div>
        <div>
          <div><p>Test description</p></div>
        </div>
      </div>
    `;
    block = document.querySelector('.hero');
  });

  it('should create hero structure', () => {
    decorate(block);
    expect(block.querySelector('.hero__content')).toBeTruthy();
    expect(block.querySelector('.hero__heading')).toBeTruthy();
  });

  it('should set eyebrow text', () => {
    decorate(block);
    const eyebrow = block.querySelector('.hero__eyebrow');
    expect(eyebrow.textContent).toBe('AT&T Business');
  });

  it('should preserve heading', () => {
    decorate(block);
    const heading = block.querySelector('.hero__heading');
    expect(heading.textContent).toBe('Test Heading');
  });
});
```

### 11.3 Visual Regression Testing

```javascript
// tests/visual/hero.spec.js
import { test, expect } from '@playwright/test';

test.describe('Hero Block Visual Tests', () => {
  test('hero default variant', async ({ page }) => {
    await page.goto('/test-pages/hero-default');
    await expect(page.locator('.hero')).toHaveScreenshot('hero-default.png');
  });

  test('hero video variant', async ({ page }) => {
    await page.goto('/test-pages/hero-video');
    await expect(page.locator('.hero')).toHaveScreenshot('hero-video.png');
  });

  test('hero mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/test-pages/hero-default');
    await expect(page.locator('.hero')).toHaveScreenshot('hero-mobile.png');
  });
});
```

### 11.4 Accessibility Testing

```javascript
// tests/a11y/blocks.spec.js
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage should have no a11y violations', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('hero block should be accessible', async ({ page }) => {
    await page.goto('/test-pages/hero-default');

    const results = await new AxeBuilder({ page })
      .include('.hero')
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('form should have proper labels', async ({ page }) => {
    await page.goto('/contact');

    const results = await new AxeBuilder({ page })
      .include('.form')
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
```

### 11.5 Performance Testing

```javascript
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/products/att-dynamic-defense",
        "http://localhost:3000/small-business"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 1500 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 300 }]
      }
    }
  }
}
```

### 11.6 Test Matrix

| Browser | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Chrome | ✓ | ✓ | ✓ |
| Safari | ✓ | ✓ (iPad) | ✓ (iOS) |
| Firefox | ✓ | - | - |
| Edge | ✓ | - | - |

---

## 12. Security & Compliance

### 12.1 Content Security Policy

```html
<!-- head.html -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://assets.adobedtm.com https://js.chilipiper.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https: blob:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://*.adobedtm.com https://*.marketo.com https://metrics.att.com;
  frame-src 'self' https://www.youtube.com https://player.vimeo.com;
  frame-ancestors 'self';
  form-action 'self' https://*.marketo.com;
  base-uri 'self';
  object-src 'none';
">
```

### 12.2 Security Headers

```yaml
# CDN/Edge configuration
headers:
  - pattern: /**
    values:
      X-Content-Type-Options: nosniff
      X-Frame-Options: SAMEORIGIN
      X-XSS-Protection: 1; mode=block
      Referrer-Policy: strict-origin-when-cross-origin
      Permissions-Policy: geolocation=(), microphone=(), camera=()
      Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### 12.3 Privacy Compliance

```javascript
// scripts/utils/consent.js

const CONSENT_COOKIE = 'att_consent';

export function getConsentStatus() {
  const consent = getCookie(CONSENT_COOKIE);
  return consent ? JSON.parse(consent) : null;
}

export function setConsent(preferences) {
  const consent = {
    analytics: preferences.analytics || false,
    marketing: preferences.marketing || false,
    personalization: preferences.personalization || false,
    timestamp: new Date().toISOString(),
  };

  setCookie(CONSENT_COOKIE, JSON.stringify(consent), 365);

  // Update third-party scripts based on consent
  if (consent.analytics) {
    enableAnalytics();
  }
  if (consent.marketing) {
    enableMarketing();
  }
  if (consent.personalization) {
    enablePersonalization();
  }

  return consent;
}

export function showConsentBanner() {
  const banner = document.createElement('div');
  banner.className = 'consent-banner';
  banner.innerHTML = `
    <div class="consent-banner__content">
      <p>We use cookies to enhance your experience...</p>
      <div class="consent-banner__actions">
        <button class="button button--secondary" data-action="manage">
          Manage preferences
        </button>
        <button class="button button--secondary" data-action="reject">
          Opt out
        </button>
        <button class="button button--primary" data-action="accept">
          Accept all
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  // Event handlers...
}
```

---

## 13. Performance Optimization

### 13.1 Loading Strategy

```javascript
// scripts/scripts.js

const LCP_BLOCKS = ['hero', 'hero-tabbed']; // Above-fold blocks
const DELAYED_BLOCKS = ['video', 'form', 'carousel']; // Below-fold blocks

async function loadBlock(block) {
  const blockName = block.dataset.blockName;

  try {
    const { default: decorate } = await import(`/blocks/${blockName}/${blockName}.js`);
    decorate(block);
    block.dataset.blockStatus = 'loaded';
  } catch (error) {
    console.error(`Failed to load block: ${blockName}`, error);
    block.dataset.blockStatus = 'error';
  }
}

async function loadBlocks() {
  const blocks = document.querySelectorAll('[data-block-name]');

  // Load LCP blocks immediately
  const lcpBlocks = [...blocks].filter((b) =>
    LCP_BLOCKS.includes(b.dataset.blockName)
  );
  await Promise.all(lcpBlocks.map(loadBlock));

  // Load remaining blocks
  const otherBlocks = [...blocks].filter((b) =>
    !LCP_BLOCKS.includes(b.dataset.blockName)
  );

  // Use intersection observer for lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadBlock(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });

  otherBlocks.forEach((block) => observer.observe(block));
}
```

### 13.2 Image Optimization

```javascript
// scripts/utils/images.js

export function optimizeImages(container) {
  const images = container.querySelectorAll('img');

  images.forEach((img) => {
    // Add loading attribute
    if (!img.closest('.hero')) {
      img.loading = 'lazy';
    }

    // Add decoding attribute
    img.decoding = 'async';

    // Create responsive srcset
    const src = img.src;
    if (src && !img.srcset) {
      img.srcset = createSrcSet(src);
      img.sizes = '(max-width: 768px) 100vw, 50vw';
    }

    // Add aspect ratio to prevent CLS
    if (img.width && img.height) {
      img.style.aspectRatio = `${img.width} / ${img.height}`;
    }
  });
}

function createSrcSet(src) {
  const widths = [320, 640, 960, 1280, 1920];
  return widths
    .map((w) => `${src}?width=${w}&format=webply 1.5 ${w}w`)
    .join(', ');
}
```

### 13.3 Critical CSS

```css
/* styles/critical.css - Inlined in head for LCP */

/* Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; }

/* Typography */
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
}

/* Header placeholder (prevent CLS) */
header {
  height: 80px;
  background: #fff;
}

/* Hero placeholder */
.hero {
  min-height: 500px;
  background: #f5f5f5;
}

/* Hide non-critical content until CSS loads */
.section:not(:first-of-type) {
  opacity: 0;
}
```

### 13.4 Performance Budgets

| Metric | Budget | Target |
|--------|--------|--------|
| Total Page Size | < 1.5 MB | 1.0 MB |
| JavaScript | < 200 KB | 150 KB |
| CSS | < 100 KB | 75 KB |
| Images (above fold) | < 200 KB | 150 KB |
| Web Fonts | < 100 KB | 80 KB |
| First Contentful Paint | < 1.5s | 1.0s |
| Largest Contentful Paint | < 2.5s | 2.0s |
| Cumulative Layout Shift | < 0.1 | 0.05 |
| Time to Interactive | < 3.5s | 3.0s |

---

## 14. Monitoring & Operations

### 14.1 Monitoring Setup

```javascript
// scripts/utils/monitoring.js

export function initRUM() {
  // Real User Monitoring
  if (window.PerformanceObserver) {
    // LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      sendMetric('lcp', lastEntry.startTime);
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // FID
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        sendMetric('fid', entry.processingStart - entry.startTime);
      });
    }).observe({ type: 'first-input', buffered: true });

    // CLS
    let clsValue = 0;
    new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      sendMetric('cls', clsValue);
    }).observe({ type: 'layout-shift', buffered: true });
  }
}

function sendMetric(name, value) {
  // Send to analytics endpoint
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/metrics', JSON.stringify({
      metric: name,
      value,
      page: window.location.pathname,
      timestamp: Date.now(),
    }));
  }
}
```

### 14.2 Error Tracking

```javascript
// scripts/utils/errors.js

export function initErrorTracking() {
  window.addEventListener('error', (event) => {
    logError({
      type: 'javascript',
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError({
      type: 'promise',
      message: event.reason?.message || String(event.reason),
      stack: event.reason?.stack,
    });
  });
}

function logError(error) {
  console.error('Error:', error);

  // Send to error tracking service
  fetch('/api/errors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...error,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {});
}
```

### 14.3 Health Checks

```yaml
# Health check endpoints
endpoints:
  - path: /health
    type: synthetic
    interval: 60s
    assertions:
      - status: 200
      - responseTime: < 500ms

  - path: /
    type: real-user
    metrics:
      - lcp < 2500
      - fid < 100
      - cls < 0.1
```

### 14.4 Runbook

| Issue | Detection | Resolution |
|-------|-----------|------------|
| High error rate | Error count > 100/min | Check deployment, rollback if needed |
| Slow LCP | LCP > 3s for 5 min | Check CDN, image optimization |
| CDN outage | 5xx errors spike | Failover to origin, contact Fastly |
| Form failures | Form submit errors > 10% | Check Marketo integration |
| Build failure | GitHub Action fails | Review PR, fix lint/test errors |

---

## 15. Appendices

### Appendix A: Block Reference Quick Guide

| Block | File | Variants | UE Model |
|-------|------|----------|----------|
| header | `/blocks/header/` | default | N/A (global) |
| footer | `/blocks/footer/` | default | N/A (global) |
| hero | `/blocks/hero/` | default, video, split, tabbed | hero |
| cards | `/blocks/cards/` | default, icon, pricing, horizontal | cards |
| carousel | `/blocks/carousel/` | default, cards, products, testimonials | carousel |
| tabs | `/blocks/tabs/` | horizontal, vertical | tabs |
| accordion | `/blocks/accordion/` | default, faq | accordion |
| pricing-table | `/blocks/pricing-table/` | default, comparison | pricing-table |
| form | `/blocks/form/` | default, rai, newsletter | form |
| columns | `/blocks/columns/` | 2-col, 3-col, 4-col | columns |
| image-text | `/blocks/image-text/` | left, right | image-text |
| video | `/blocks/video/` | inline, modal, background | video |

### Appendix B: Content Migration Checklist

- [ ] Sitemap crawled and URLs catalogued
- [ ] Page templates identified
- [ ] Import transformers written
- [ ] Test migration on sample pages
- [ ] Images downloaded and optimized
- [ ] Metadata mapped correctly
- [ ] Internal links updated
- [ ] External links validated
- [ ] Forms tested
- [ ] Analytics tracking verified
- [ ] SEO elements preserved
- [ ] Redirects configured
- [ ] Author review completed
- [ ] UAT sign-off obtained

### Appendix C: Environment URLs

| Environment | Content URL | Preview URL | Live URL |
|-------------|-------------|-------------|----------|
| Development | SharePoint (dev folder) | `dev--att-business--org.aem.page` | N/A |
| Stage | SharePoint (stage folder) | `stage--att-business--org.aem.page` | N/A |
| Production | SharePoint (main) | `preview--att-business--org.aem.live` | `www.business.att.com` |

### Appendix D: Glossary

| Term | Definition |
|------|------------|
| EDS | Edge Delivery Services - Adobe's serverless content delivery platform |
| UE | Universal Editor - Visual authoring tool for EDS |
| Block | Reusable component in EDS |
| Section | Container for blocks on a page |
| Decoration | JavaScript that transforms block markup |
| LCP | Largest Contentful Paint - Core Web Vital metric |
| CLS | Cumulative Layout Shift - Core Web Vital metric |
| FID | First Input Delay - Core Web Vital metric |

---

*Document Version: 1.0*
*Last Updated: January 2026*
*Author: Solution Architecture Team*
*Status: Draft - Pending Review*
