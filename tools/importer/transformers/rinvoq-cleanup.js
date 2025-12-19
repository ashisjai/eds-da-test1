/* global WebImporter */

/**
 * Transformer for RINVOQ website cleanup
 * Purpose: Remove navigation, footer, modals, and AbbVie-specific widgets
 * Applies to: www.rinvoq.com (all pages)
 * Tested: https://www.rinvoq.com/
 * Generated: 2025-12-19
 *
 * SELECTORS EXTRACTED FROM:
 * - Captured DOM during migration workflow (migration-work/cleaned.html)
 * - Page structure analysis from page migration workflow
 */

const TransformHook = {
  beforeTransform: 'beforeTransform',
  afterTransform: 'afterTransform',
};

export default function transform(hookName, element) {
  if (hookName === TransformHook.beforeTransform) {
    // Remove header/navigation elements
    // EXTRACTED: Found .abbv-header-v2 in captured DOM
    WebImporter.DOMUtils.remove(element, [
      '.abbv-header-v2',
      '.header-v2',
      '.abbv-header-content-container',
    ]);

    // Remove footer
    // EXTRACTED: Found .abbv-footer in captured DOM
    WebImporter.DOMUtils.remove(element, [
      '.abbv-footer',
      '.global-footer',
    ]);

    // Remove modal dialogs
    // EXTRACTED: Found multiple .abbv-modal in captured DOM
    WebImporter.DOMUtils.remove(element, [
      '.abbv-modal',
      '.abbv-dimmer',
      '.modal',
    ]);

    // Remove back to top button
    // EXTRACTED: Found .abbv-back-to-top in captured DOM
    WebImporter.DOMUtils.remove(element, [
      '.abbv-back-to-top',
    ]);

    // Remove skip navigation link
    // EXTRACTED: Found .abbv-skip-to-main-content in captured DOM
    WebImporter.DOMUtils.remove(element, [
      '.abbv-skip-to-main-content',
    ]);

    // Remove eyebrow/utility bar at top
    // EXTRACTED: Found .abbv-rich-text.abbv-slimEyebrow in captured DOM
    WebImporter.DOMUtils.remove(element, [
      '.abbv-slimEyebrow',
    ]);
  }

  if (hookName === TransformHook.afterTransform) {
    // Remove standard elements
    WebImporter.DOMUtils.remove(element, [
      'source',
      'iframe',
      'link',
      'noscript',
    ]);

    // Clean up tracking attributes
    // EXTRACTED: Captured DOM showed data-track and similar attributes on elements
    const allElements = element.querySelectorAll('*');
    allElements.forEach((el) => {
      el.removeAttribute('data-track');
      el.removeAttribute('onclick');
      el.removeAttribute('data-analytics');
    });
  }
}
