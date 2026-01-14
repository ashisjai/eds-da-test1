# Block Variant Matching Analysis

## Phase 2: Smart Matching Results

### Block 1: hero-pharma (Section 1)
**Current Context:**
- colorScheme: light
- density: minimal
- purpose: pharma
- imagePattern: large
- structure: "Relief branding + product name + heading"

**Existing Variant: hero-pharma**
- colorScheme: light ✅
- density: minimal ✅
- purpose: pharma ✅
- imagePattern: large ✅
- structure: "branded graphic + heading" ✅

**Similarity Score: 100%** (Perfect match!)

**Decision: ♻️ REUSE hero-pharma**

---

### Block 2: columns (Section 2, Sequence 2) - Benefits
**Current Context:**
- colorScheme: light
- density: wide
- purpose: benefits
- imagePattern: noimg
- structure: "3 columns with heading + text each"

**Check existing columns-product:**
- colorScheme: light ✅
- density: wide ✅
- purpose: product ❌ (different purpose)
- imagePattern: large ❌ (has images vs none)
- structure: "2 columns with product images" ❌ (different structure)

**Similarity Score: 40%** (Below 70% threshold)

**Decision: 🆕 CREATE columns-benefits**
- 3-column layout for benefits (Fast Relief, Skin Clearance, Long-term Results)
- Text-only columns
- Specific to condition page benefits pattern

---

### Block 3: columns (Section 5, Sequence 2) - Patient Story
**Current Context:**
- colorScheme: light
- density: wide
- purpose: testimonial
- imagePattern: large
- structure: "2 columns: text + patient image"

**Check existing columns-product:**
- colorScheme: light ✅
- density: wide ✅
- purpose: product ❌ (different purpose)
- imagePattern: large ✅
- structure: "2 columns with product images" ⚠️ (similar but different content)

**Similarity Score: 60%** (Below 70% threshold)

**Decision: 🆕 CREATE columns-patient-story**
- 2-column layout for patient testimonials
- Text content + patient photo with yellow brushstroke styling
- Will recur across condition pages

---

### Block 4: columns (Section 6) - Quiz
**Current Context:**
- colorScheme: yellow
- density: wide
- purpose: quiz
- imagePattern: large
- structure: "2 columns: quiz form + lifestyle image"

**Check existing columns-product:**
- colorScheme: light ❌ (different - yellow section)
- density: wide ✅
- purpose: product ❌ (different purpose)
- imagePattern: large ✅
- structure: "2 columns with product images" ❌ (quiz vs images)

**Similarity Score: 40%** (Below 70% threshold)

**Decision: 🆕 CREATE columns-quiz**
- 2-column layout for interactive quiz CTA
- Quiz form + lifestyle image
- Yellow section background styling

---

### Block 5: embed (Section 4) - Poll
**No custom variants exist for embed**

**Decision: ✅ USE STANDARD embed block**
- Standard embed block is appropriate
- No variant needed for simple poll widget

---

## Summary

**Reuse Decisions:**
- ♻️ hero-pharma (100% match)

**New Variants Needed:**
- 🆕 columns-benefits (3-column benefits pattern)
- 🆕 columns-patient-story (2-column testimonial pattern)
- 🆕 columns-quiz (2-column quiz CTA pattern)

**Standard Blocks:**
- ✅ embed (no variant needed)

**Total:** 1 reused, 3 new variants to create, 1 standard block
