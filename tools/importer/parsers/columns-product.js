/* global WebImporter */

/**
 * Parser for columns-product block
 *
 * Source: https://www.rinvoq.com/
 * Base Block: columns
 *
 * Block Structure:
 * - Single row with 2 columns
 * - Each column contains product image
 *
 * Source HTML Pattern:
 * - Product images displayed side-by-side
 * - Images: RINVOQ bottle and oral solution
 * - Alt text contains "RINVOQ" or "upadacitinib"
 *
 * Generated: 2025-12-19
 */

export default function parse(element, { document }) {
  // Find product images
  const images = element.querySelectorAll('img[alt*="RINVOQ"], img[alt*="upadacitinib"]') ||
                 element.querySelectorAll('.image-text-v2 img') ||
                 element.querySelectorAll('img');

  // Filter to get product images only (not icons or decorative)
  const productImages = Array.from(images).filter(img => {
    const alt = img.getAttribute('alt') || '';
    const src = img.getAttribute('src') || '';
    return (alt.toLowerCase().includes('rinvoq') ||
            alt.toLowerCase().includes('upadacitinib') ||
            src.includes('rinvoq-bottle') ||
            src.includes('oral-solution'));
  });

  // Build cells - one row with multiple columns
  const row = [];

  productImages.forEach(img => {
    const column = document.createElement('div');
    column.appendChild(img.cloneNode(true));
    row.push(column);
  });

  // If we found images, create the block
  if (row.length > 0) {
    const cells = [row];

    // Create block using WebImporter
    const block = WebImporter.Blocks.createBlock(document, {
      name: 'Columns-Product',
      cells
    });

    // Replace element with block
    element.replaceWith(block);
  }
}
