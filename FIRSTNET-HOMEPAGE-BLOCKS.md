# FirstNet Homepage - Block Identification

## Overview

This document identifies all UI blocks/components found on the FirstNet homepage (https://www.firstnet.com/) for migration to AEM Edge Delivery Services.

---

## Block Inventory

### 1. Header Block
**Screenshot:** `firstnet-homepage-01-header-hero.png`

| Property | Value |
|----------|-------|
| Block Name | `header` |
| Priority | P0 |
| Variants | `default` |

**Features:**
- FirstNet logo with "Built with AT&T" tagline
- Dropdown navigation toggle
- Sign up button (primary CTA)
- Log in link (secondary)
- Sticky behavior on scroll

**Content Model:**
- Logo (image)
- Sign up link (link)
- Login link (link)
- Navigation items (from /nav)

---

### 2. Icon Navigation Bar Block
**Screenshot:** `firstnet-homepage-01-header-hero.png`

| Property | Value |
|----------|-------|
| Block Name | `icon-nav` or `quick-links` |
| Priority | P0 |
| Variants | `carousel`, `default` |

**Features:**
- Horizontal scrolling icon navigation
- 8 quick access items with icons
- Mobile-friendly carousel

**Navigation Items:**
1. Rate plans - Phone icon
2. Phones & devices - Device icon
3. Offers - Dollar sign icon
4. Pay bill online - Bill icon
5. Coverage map - Map icon
6. Check eligibility - Checkmark icon
7. Mission-critical - Building icon
8. FirstNet Refer-A-Friend - People icon

**Content Model:**
- Icon (image/svg)
- Label (text)
- Link (link)

---

### 3. Hero Block
**Screenshot:** `firstnet-homepage-01-header-hero.png`

| Property | Value |
|----------|-------|
| Block Name | `hero` |
| Priority | P0 |
| Variants | `default`, `image-right` |

**Features:**
- Eyebrow text ("MISSION-CRITICAL COMMUNICATIONS")
- Main heading ("America's first responder network")
- Description text with statistics (2.99 million square miles)
- CTA button ("Check eligibility")
- Background image (first responder on phone)

**Content Model:**
- Eyebrow (text)
- Heading (text)
- Description (richtext)
- CTA button (link)
- Background Image (image)

---

### 4. Section Heading Block
**Screenshot:** `firstnet-homepage-02-offers.png`

| Property | Value |
|----------|-------|
| Block Name | `section-heading` |
| Priority | P1 |
| Variants | `default`, `centered` |

**Features:**
- Main heading ("Discounts for first responders")
- Subheading ("Switch to FirstNet and take advantage of special offers available")
- Centered text alignment

**Content Model:**
- Heading (text)
- Subheading (text)

---

### 5. Offer Cards Block
**Screenshot:** `firstnet-homepage-02-offers.png`, `firstnet-homepage-03-offers-cards.png`, `firstnet-homepage-04-why-firstnet.png`

| Property | Value |
|----------|-------|
| Block Name | `cards` |
| Priority | P0 |
| Variants | `offer`, `promo`, `split-image` |

**Features:**
- Card with product image
- Eyebrow/Tag text ("LEARN HOW TO GET AN ELIGIBLE")
- Main headline ("Apple Watch SE 3 and iPad for $0.99/mo. each")
- Conditional text ("When you buy with eligible iPhone 17 series")
- Legal disclaimer (expandable)
- CTA button ("Shop now")

**Offer Cards Identified:**
1. **Apple Watch + iPad Deal** - Device bundle image, pricing details, Shop now CTA
2. **Contract Buyout** - First responder image, "GET UP TO $800/line", Shop now CTA
3. **FirstNet & Family** - Family image, "Families save 25% on AT&T lines", Learn more CTA

**Content Model per Card:**
- Image (image)
- Eyebrow/Tag (text)
- Headline (text)
- Sub-headline (text)
- Legal text (richtext, expandable)
- CTA button (link)

---

### 6. Value Props Block (Why FirstNet)
**Screenshot:** `firstnet-homepage-05-why-section.png`, `firstnet-homepage-06-value-props.png`

| Property | Value |
|----------|-------|
| Block Name | `value-props` or `feature-list` |
| Priority | P0 |
| Variants | `dark-bg`, `icon-list` |

**Features:**
- Dark background section
- Section heading ("Why FirstNet for 5G public safety")
- Section subheading ("Built from the ground up to support emergency services")
- 3 value proposition items with icons
- "Learn more" CTA at bottom
- Legal footnote

**Value Props:**
1. **Enough capacity for every first responder** - Shield icon
   - "FirstNet supports you with a dedicated lane exclusive to public safety when you need it"
2. **The largest network for public safety** - Map/USA icon
   - "FirstNet gives first responders First Priority, speed, low latency, reliability and 5G connectivity"
3. **Unprecedented accountability** - Government building icon
   - "Built in a public-private partnership with the federal government"

**Content Model:**
- Section Heading (text)
- Section Subheading (text)
- Value Prop Items:
  - Icon (image/svg)
  - Title (text)
  - Description (text)
- CTA link (link)
- Legal footnote (text)

---

### 7. News/Article Cards Block
**Screenshot:** `firstnet-homepage-07-news.png`, `firstnet-homepage-08-news-cards.png`, `firstnet-homepage-09-contact-newsletter.png`

| Property | Value |
|----------|-------|
| Block Name | `cards` |
| Priority | P1 |
| Variants | `news`, `article`, `story` |

**Features:**
- Section heading ("Latest news from public safety's network")
- 3 article cards in a row
- Each card has image, category tag, title, description, CTA

**News Cards Identified:**
1. **FirstNet Fusion** - Tag: "PRODUCT LAUNCH"
   - "FirstNet Fusion will combine critical communications capabilities..."
2. **Stress relief for emergency physicians** - Tag: "HEALTH AND WELLNESS"
   - "This Mental Health Awareness Month, Ryan Fields-Spack shares strategies..."
3. **Town of Duck keeps residents safe** - Tag: "LAW ENFORCEMENT"
   - "The Duck Police Department relies on FirstNet for priority, secure communications..."

**Content Model per Card:**
- Image (image)
- Category tag (text)
- Title (text)
- Description (text)
- CTA link (link)

---

### 8. Explore CTA Block
**Screenshot:** `firstnet-homepage-09-contact-newsletter.png`

| Property | Value |
|----------|-------|
| Block Name | `cta-link` |
| Priority | P2 |
| Variants | `arrow`, `animated` |

**Features:**
- Link text ("Explore more from the FirstNet community")
- Animated arrow icon
- Full-width clickable area

**Content Model:**
- Link text (text)
- Link URL (link)
- Icon (optional)

---

### 9. Contact CTA Banner Block
**Screenshot:** `firstnet-homepage-10-cta-newsletter.png`

| Property | Value |
|----------|-------|
| Block Name | `cta-banner` |
| Priority | P0 |
| Variants | `contact`, `simple` |

**Features:**
- Light gray background
- Heading ("Connect with a FirstNet specialist")
- CTA button ("Contact us")

**Content Model:**
- Heading (text)
- CTA button (link)

---

### 10. Newsletter Signup Block
**Screenshot:** `firstnet-homepage-10-cta-newsletter.png`

| Property | Value |
|----------|-------|
| Block Name | `form` |
| Priority | P1 |
| Variants | `newsletter`, `inline` |

**Features:**
- Dark blue background
- Section heading ("LEARN ABOUT AMERICA'S PUBLIC SAFETY NETWORK")
- Subheading ("Get connected")
- Privacy consent text
- Email input field
- Category dropdown (Law Enforcement, Fire, EMS, Emergency Communications, Other Public Safety)
- Submit button

**Content Model:**
- Heading (text)
- Subheading (text)
- Privacy text (richtext)
- Form fields:
  - Email (text input)
  - Category (dropdown)
- Submit button text (text)

---

### 11. Footer Block
**Screenshot:** `firstnet-homepage-11-footer.png`, `firstnet-homepage-12-footer-legal.png`

| Property | Value |
|----------|-------|
| Block Name | `footer` |
| Priority | P0 |
| Variants | `default` |

**Features:**
- FirstNet logo with "Built with AT&T"
- Sitemap links column
- Support links column
- Social media links (Facebook, LinkedIn, X, YouTube)
- Legal links row
- Copyright text

**Sitemap Links:**
- Power of FirstNet
- Coverage
- Rate Plans
- Devices & Accessories
- Industry Solutions
- Application Ecosystem
- Community

**Support Links:**
- FAQ
- Help
- Contact Us

**Social Links:**
- Facebook
- LinkedIn
- X (Twitter)
- YouTube

**Legal Links:**
- Privacy Notice
- Terms & Conditions
- Accessibility
- Your Privacy Choices
- Health Privacy Notice
- Cyber Security
- FirstNet.gov

**Content Model:**
- Logo (image)
- Sitemap links (list of links)
- Support links (list of links)
- Social links (list of links with icons)
- Legal links (list of links)
- Copyright text (text)

---

### 12. Feedback Widget
**Observed in:** All screenshots

| Property | Value |
|----------|-------|
| Block Name | `feedback-widget` |
| Priority | P2 |
| Type | Third-party integration |

**Features:**
- Floating button on right side
- "Feedback" label
- Opens feedback form overlay

---

## Block Summary Table

| # | Block Name | Priority | Variants | Screenshot |
|---|------------|----------|----------|------------|
| 1 | header | P0 | default | homepage-01 |
| 2 | icon-nav | P0 | carousel | homepage-01 |
| 3 | hero | P0 | default, image-right | homepage-01 |
| 4 | section-heading | P1 | default, centered | homepage-02 |
| 5 | cards (offers) | P0 | offer, promo, split-image | homepage-02, 03, 04 |
| 6 | value-props | P0 | dark-bg, icon-list | homepage-05, 06 |
| 7 | cards (news) | P1 | news, article, story | homepage-07, 08, 09 |
| 8 | cta-link | P2 | arrow, animated | homepage-09 |
| 9 | cta-banner | P0 | contact, simple | homepage-10 |
| 10 | form | P1 | newsletter, inline | homepage-10 |
| 11 | footer | P0 | default | homepage-11, 12 |
| 12 | feedback-widget | P2 | third-party | all |

---

## Unique Block Count

| Priority | Count |
|----------|-------|
| P0 | 6 |
| P1 | 4 |
| P2 | 2 |
| **Total** | **12** |

---

## Block Comparison: FirstNet vs AT&T Business

| Block Type | FirstNet | AT&T Business | Notes |
|------------|----------|---------------|-------|
| Header | Simpler, dropdown nav | Full mega-menu | Different complexity |
| Hero | Single CTA, badge style | Multi-CTA, tabbed | Similar structure |
| Icon Nav | Horizontal scroll | Not present | FirstNet-specific |
| Cards | Offer, News variants | Product, Pricing, Value-prop | Overlap possible |
| Value Props | Dark background, icons | 4-column grid | Similar pattern |
| Carousel | Not on homepage | Deals, Solutions | AT&T has more |
| CTA Banner | Simple contact | Guarantee, checklist | AT&T more complex |
| Form | Newsletter signup | RAI full contact | Different scope |
| Footer | Simple 3-column | Multi-section accordion | AT&T more complex |

---

## Reusability Assessment

Several blocks can be shared between FirstNet and AT&T Business sites:

### Highly Reusable
- `cards` - Core card component with variants
- `cta-banner` - Call-to-action banners
- `section-heading` - Section headings
- `footer` - Footer structure (different content)

### Needs Customization
- `hero` - Different layouts/features per site
- `header` - Different navigation complexity
- `form` - Different form fields/integrations

### Site-Specific
- `icon-nav` - FirstNet-specific quick links
- `value-props` - Different styling per brand

---

## Screenshots Location

All screenshots are saved in: `/workspace/screenshots/firstnet/`

| File | Section |
|------|---------|
| firstnet-homepage-01-header-hero.png | Header + Icon Nav + Hero |
| firstnet-homepage-02-offers.png | Offers section heading + cards |
| firstnet-homepage-03-offers-cards.png | Offer card details |
| firstnet-homepage-04-why-firstnet.png | FirstNet & Family card |
| firstnet-homepage-05-why-section.png | Why FirstNet heading |
| firstnet-homepage-06-value-props.png | Value props with icons |
| firstnet-homepage-07-news.png | News section heading |
| firstnet-homepage-08-news-cards.png | News card details |
| firstnet-homepage-09-contact-newsletter.png | Case study card |
| firstnet-homepage-10-cta-newsletter.png | Contact CTA + Newsletter |
| firstnet-homepage-11-footer.png | Footer navigation |
| firstnet-homepage-12-footer-legal.png | Footer legal links |

---

*Document Generated: January 2026*
*Source: https://www.firstnet.com/*
