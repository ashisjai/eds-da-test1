/* global WebImporter */

/**
 * Parser for hero-pharma block
 *
 * Source: https://www.rinvoq.com/
 * Base Block: hero
 *
 * Block Structure:
 * - Single row with image, heading, and text content
 *
 * Source HTML Pattern:
 * - Container: .abbv-background-container.home-hero
 * - Relief image: img[alt="Relief"]
 * - Product name text: RINVOQ with once-daily pill
 * - Heading: h1 with "tame symptoms" messaging
 *
 * Generated: 2025-12-19
 */

export default function parse(element, { document }) {
  // Extract background image
  const bgImage = element.querySelector('.abbv-background-container-display img');

  // Extract relief branding image
  const reliefImage = element.querySelector('img[alt="Relief"]') ||
                      element.querySelector('.relief-image img') ||
                      element.querySelector('picture img');

  // Extract heading
  const heading = element.querySelector('h1') ||
                  element.querySelector('h2') ||
                  element.querySelector('[class*="hero"] h1, [class*="hero"] h2');

  // Extract product text (RINVOQ with once-daily pill)
  const productText = element.querySelector('.abbv-image-text-content-v2') ||
                      element.querySelector('[class*="image-text"]');

  // Build the cell content - single row with all content
  const cellContent = document.createElement('div');

  if (reliefImage) {
    cellContent.appendChild(reliefImage.cloneNode(true));
  }

  if (productText) {
    const textElements = productText.querySelectorAll('p');
    textElements.forEach(p => {
      cellContent.appendChild(p.cloneNode(true));
    });
  }

  if (heading) {
    cellContent.appendChild(heading.cloneNode(true));
  }

  // Create cells array - hero block is single column
  const cells = [
    [cellContent]
  ];

  // Create block using WebImporter
  const block = WebImporter.Blocks.createBlock(document, {
    name: 'Hero-Pharma',
    cells
  });

  // Replace element with block
  element.replaceWith(block);
}
