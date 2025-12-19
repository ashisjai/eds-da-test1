/* global WebImporter */

/**
 * Parser for cards-condition block
 *
 * Source: https://www.rinvoq.com/
 * Base Block: cards
 *
 * Block Structure:
 * - Multiple rows, each row represents one condition card
 * - Each row: single column with condition name and severity
 *
 * Source HTML Pattern:
 * - Container: .homepage-cta-flex-box.conditions
 * - Each card: .abbv-flex-item containing link with condition info
 * - Severity level: First span with font-10px class
 * - Condition name: Second span with font-15px class
 * - Additional info: Third span with medical notation
 *
 * Generated: 2025-12-19
 */

export default function parse(element, { document }) {
  // Find all condition card items
  const cardItems = element.querySelectorAll('.abbv-flex-item:has(a.homepage-indication-selector-cta)');

  if (cardItems.length === 0) {
    // Fallback: try alternative selector patterns
    cardItems = element.querySelectorAll('.homepage-indication-selector-cta') ||
                element.querySelectorAll('a[href*="/"]');
  }

  // Extract content from each card
  const cells = [];

  cardItems.forEach(item => {
    const link = item.querySelector('a') || item;

    // Extract severity/level (e.g., "Moderate to Severe", "Active")
    const severity = link.querySelector('.font-10px, .abv-custom-txtcolor-grey') ||
                     link.querySelector('span:first-child');

    // Extract condition name (e.g., "Eczema", "Rheumatoid Arthritis")
    const conditionName = link.querySelector('.font-15px, .font-neueHaasGrotesk') ||
                          link.querySelector('span:nth-child(2)') ||
                          link.querySelector('strong, b');

    // Extract additional info (e.g., "(Atopic Dermatitis)*")
    const additionalInfo = link.querySelector('.font-10px.font-line-height-14px') ||
                           link.querySelector('span:last-child');

    // Build cell content
    const cellContent = document.createElement('div');

    if (severity && severity.textContent.trim()) {
      const severityText = document.createElement('span');
      severityText.textContent = severity.textContent.trim();
      cellContent.appendChild(severityText);
      cellContent.appendChild(document.createElement('br'));
    }

    if (conditionName && conditionName.textContent.trim()) {
      const nameText = document.createElement('strong');
      nameText.textContent = conditionName.textContent.trim();
      cellContent.appendChild(nameText);
    }

    if (additionalInfo && additionalInfo.textContent.trim() &&
        additionalInfo !== severity && additionalInfo !== conditionName) {
      cellContent.appendChild(document.createElement('br'));
      const infoText = document.createElement('span');
      infoText.textContent = additionalInfo.textContent.trim();
      cellContent.appendChild(infoText);
    }

    // Only add non-empty cells
    if (cellContent.textContent.trim()) {
      cells.push([cellContent]);
    }
  });

  // Create block using WebImporter
  const block = WebImporter.Blocks.createBlock(document, {
    name: 'Cards-Condition',
    cells
  });

  // Replace element with block
  element.replaceWith(block);
}
