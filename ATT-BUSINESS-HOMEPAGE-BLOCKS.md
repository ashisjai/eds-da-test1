# AT&T Business Homepage - Block Identification

## Overview

This document identifies all UI blocks/components found on the AT&T Business homepage (https://www.business.att.com/) for migration to AEM Edge Delivery Services.

---

## Block Inventory

### 1. Header Block
**Screenshot:** `block-01-header-hero.png`

| Property | Value |
|----------|-------|
| Block Name | `header` |
| Priority | P0 |
| Variants | `default` |

**Features:**
- Utility navigation (Personal/Business toggle)
- AT&T Business logo
- Search box with placeholder "Let's find what you need..."
- Hamburger menu (mobile)
- Sticky behavior on scroll

**Content Model:**
- Logo (image)
- Search placeholder text
- Navigation items (from /nav)

---

### 2. Hero Block
**Screenshot:** `block-01-header-hero.png`

| Property | Value |
|----------|-------|
| Block Name | `hero` |
| Priority | P0 |
| Variants | `default`, `split` |

**Features:**
- Eyebrow text ("AT&T Business")
- Main heading ("Give your team an edge")
- Description text
- Background image (split layout with business professionals)

**Content Model:**
- Eyebrow (text)
- Heading (text)
- Description (richtext)
- Background Image (image)

---

### 3. Product Tabs Block
**Screenshot:** `block-02-product-tabs.png`, `block-03-product-cards.png`

| Property | Value |
|----------|-------|
| Block Name | `hero-tabbed` or `product-tabs` |
| Priority | P0 |
| Variants | `default` |

**Features:**
- Section heading ("Fast, reliable, and secure")
- Section description
- Tabbed/carousel product cards (6 categories)
- Each tab contains a product card

**Product Categories:**
1. **Mobile** - $20/mo starting price
2. **Internet** - $30/mo starting price
3. **Voice** - $15/mo starting price
4. **Security** - Custom pricing
5. **Network** - Custom pricing
6. **Specialty** - Custom pricing

**Content Model per Card:**
- Category image (image)
- Title (text)
- Description (richtext)
- Price (pricing component)
- Legal text (small text)
- CTA button (link)

---

### 4. Promotional Banner Block
**Screenshot:** `block-06-promo-banner.png`, `block-07-awards.png`

| Property | Value |
|----------|-------|
| Block Name | `promo-banner` |
| Priority | P1 |
| Variants | `product`, `campaign` |

**Features:**
- Eyebrow text ("AT&T Dynamic Defense®")
- Heading ("Get peace of mind with around-the-clock protection")
- Description text
- Legal disclaimer
- Primary CTA ("Learn more")
- Secondary CTA ("See Craig's solutions")
- Background image

**Content Model:**
- Eyebrow (text)
- Heading (text)
- Description (richtext)
- Legal text (text)
- Primary CTA (link)
- Secondary CTA (link)
- Background Image (image)

---

### 5. Awards Banner Block
**Screenshot:** `block-07-awards.png`

| Property | Value |
|----------|-------|
| Block Name | `awards-banner` or `carousel` |
| Priority | P2 |
| Variants | `awards` |

**Features:**
- J.D. Power award recognition
- Award description text
- Legal disclaimer with link
- Carousel dots for multiple awards

**Content Model:**
- Award headline (text)
- Award description (richtext)
- Legal link (link)

---

### 6. Value Props Cards Block
**Screenshot:** `block-08-value-props.png`, `block-09-value-props-more.png`

| Property | Value |
|----------|-------|
| Block Name | `cards` |
| Priority | P0 |
| Variants | `icon`, `value-props` |

**Features:**
- Section heading ("Why work with AT&T Business?")
- Section subheading
- 4 value proposition cards in grid

**Cards Identified:**
1. **The AT&T Guarantee** - Badge icon, description, legal text, CTA
2. **Reliability of fiber and 5G** - 5G icon, description, CTA
3. **Security that starts at the network** - Globe/security icon, description, CTA
4. **Experts who know business** - Expert icon, description, CTA

**Content Model per Card:**
- Icon (image/svg)
- Title (text)
- Description (richtext)
- Legal text (optional)
- CTA link (link)

---

### 7. Deals Carousel Block
**Screenshot:** `block-10-deals-carousel.png`, `block-11-deals-more.png`, `block-12-solutions-carousel.png`

| Property | Value |
|----------|-------|
| Block Name | `carousel` |
| Priority | P1 |
| Variants | `deals`, `offers` |

**Features:**
- Section heading ("Great deals and the latest tech for your business")
- Horizontal scrolling deal cards
- Each card has unique styling based on offer type

**Deal Cards Identified:**
1. **iPhone 17 Pro for $0** - "All customers" badge, dark background
2. **Wireless plans $20/mo** - "Online only" badge
3. **Business internet $30/mo** - "New & existing customers" badge

**Content Model per Card:**
- Badge/Tag (text)
- Heading (text)
- Description (richtext)
- Legal text (text)
- CTA button (link)
- Background image (image)

---

### 8. Solutions Carousel Block
**Screenshot:** `block-13-solutions.png`, `block-14-solutions-cards.png`

| Property | Value |
|----------|-------|
| Block Name | `carousel` |
| Priority | P1 |
| Variants | `solutions`, `sectors` |

**Features:**
- Section heading ("Solutions for every kind of business")
- Section description
- Carousel with pagination dots
- Image cards with icons

**Solution Cards Identified:**
1. **Small business** - Store icon
2. **FirstNet®, built with AT&T** - FirstNet badge
3. **Public sector** - Government icon
4. **Industry solutions** - Factory icon

**Content Model per Card:**
- Icon (image/svg)
- Image (image)
- Title (text)
- Description (text)
- Link (link)

---

### 9. Guarantee CTA Block
**Screenshot:** `block-15-guarantee.png`, `block-16-guarantee-list.png`

| Property | Value |
|----------|-------|
| Block Name | `cta-banner` |
| Priority | P0 |
| Variants | `guarantee`, `checklist` |

**Features:**
- Dark background with image
- Heading with trademark ("Get backed by the AT&T Guarantee℠")
- Description text
- Checklist with icons:
  - ✓ Connectivity you depend on
  - ✓ Deals you want
  - ✓ Prompt, friendly service you deserve
- Dual CTAs ("Shop deals", "Learn more")

**Content Model:**
- Heading (text)
- Description (richtext)
- Checklist items (list)
- Primary CTA (link)
- Secondary CTA (link)
- Background image (image)

---

### 10. Success Stories Block
**Screenshot:** `block-17-success-stories.png`

| Property | Value |
|----------|-------|
| Block Name | `hero` or `cta-banner` |
| Priority | P1 |
| Variants | `testimonial`, `stories` |

**Features:**
- Full-width background image
- Heading ("Success stories from our customers")
- CTA button ("Read more")

**Content Model:**
- Heading (text)
- CTA link (link)
- Background image (image)

---

### 11. Contact Form Block (RAI Form)
**Screenshot:** `block-18-contact-form.png`, `block-19-form-more.png`

| Property | Value |
|----------|-------|
| Block Name | `form` |
| Priority | P0 |
| Variants | `rai`, `contact` |

**Features:**
- Section heading ("Talk to an AT&T Business sales expert")
- Phone number link
- Description text
- Business hours note
- Form fields:
  - First name (required)
  - Last name (required)
  - Email address (required)
  - Phone (required)
  - Company name (required)
  - Add comment (textarea)
  - Newsletter opt-in checkbox
- Submit button
- Privacy link

**Content Model:**
- Heading (text)
- Phone number (link)
- Description (richtext)
- Business hours (text)
- Form ID (for Marketo/Eloqua integration)
- Privacy link (link)

---

### 12. Link List Block
**Screenshot:** `block-20-link-list.png`

| Property | Value |
|----------|-------|
| Block Name | `link-list` |
| Priority | P1 |
| Variants | `grid`, `columns` |

**Features:**
- Section heading ("Looking for more?")
- 4-column grid of categorized links
- Links organized by topic

**Link Categories:**
- Column 1: Wireless & mobility links
- Column 2: Network & internet links
- Column 3: Cloud & security links
- Column 4: Consulting & industry links

**Content Model:**
- Heading (text)
- Link columns (list of links)

---

### 13. Footer Block
**Screenshot:** `block-21-footer.png`, `block-22-footer-legal.png`

| Property | Value |
|----------|-------|
| Block Name | `footer` |
| Priority | P0 |
| Variants | `default` |

**Features:**
- AT&T Business logo
- Social media icons (Facebook, LinkedIn, YouTube, X, Instagram)
- Expandable navigation sections (accordion style)
- Quick links row
- Legal links row
- Copyright text

**Navigation Sections:**
- Business Internet
- Business wireless & mobility
- Collaboration solutions
- Networking services
- IoT solutions
- 5G business internet
- Cloud services
- Cybersecurity
- Support
- Business blog & resources
- Sectors
- Partners

**Legal Links:**
- Terms of use
- Your privacy center
- Accessibility
- Your Privacy Choices
- Health Privacy Notice
- Cyber Security

**Content Model:**
- Logo (image)
- Social links (list of links with icons)
- Navigation sections (accordion items)
- Quick links (list of links)
- Legal links (list of links)
- Copyright text (text)

---

### 14. Chat Widget
**Observed in:** All screenshots

| Property | Value |
|----------|-------|
| Block Name | `chat-widget` |
| Priority | P2 |
| Type | Third-party integration |

**Features:**
- Floating chat button
- "Chat" label
- Positioned bottom-right

---

## Block Summary Table

| # | Block Name | Priority | Variants | Screenshot |
|---|------------|----------|----------|------------|
| 1 | header | P0 | default | block-01 |
| 2 | hero | P0 | default, split | block-01 |
| 3 | product-tabs | P0 | default | block-02, block-03 |
| 4 | cards (product) | P0 | pricing | block-03, block-04, block-05 |
| 5 | promo-banner | P1 | product | block-06, block-07 |
| 6 | carousel (awards) | P2 | awards | block-07 |
| 7 | cards (value-props) | P0 | icon | block-08, block-09 |
| 8 | carousel (deals) | P1 | deals | block-10, block-11, block-12 |
| 9 | carousel (solutions) | P1 | solutions | block-13, block-14 |
| 10 | cta-banner | P0 | guarantee | block-15, block-16 |
| 11 | hero (stories) | P1 | stories | block-17 |
| 12 | form | P0 | rai | block-18, block-19 |
| 13 | link-list | P1 | grid | block-20 |
| 14 | footer | P0 | default | block-21, block-22 |

---

## Priority Legend

- **P0** - Must have for launch (core functionality)
- **P1** - Should have (important features)
- **P2** - Nice to have (enhancements)

---

## Screenshots Location

All screenshots are saved in: `/tmp/playwright/`

| File | Section |
|------|---------|
| block-01-header-hero.png | Header + Hero |
| block-02-product-tabs.png | Product section heading |
| block-03-product-cards.png | Mobile + Internet cards |
| block-04-more-products.png | Voice + Security cards |
| block-05-network-specialty.png | Network + Specialty cards |
| block-06-promo-banner.png | Dynamic Defense promo |
| block-07-awards.png | J.D. Power awards |
| block-08-value-props.png | Why work with AT&T |
| block-09-value-props-more.png | Security + Experts cards |
| block-10-deals-carousel.png | Deals heading + iPhone |
| block-11-deals-more.png | Wireless plans deal |
| block-12-solutions-carousel.png | Internet deal |
| block-13-solutions.png | Solutions heading |
| block-14-solutions-cards.png | Small business + FirstNet |
| block-15-guarantee.png | AT&T Guarantee |
| block-16-guarantee-list.png | Guarantee checklist |
| block-17-success-stories.png | Success stories |
| block-18-contact-form.png | RAI form header |
| block-19-form-more.png | RAI form fields |
| block-20-link-list.png | Looking for more |
| block-21-footer.png | Footer navigation |
| block-22-footer-legal.png | Footer legal |

---

*Document Generated: January 2026*
*Source: https://www.business.att.com/*
