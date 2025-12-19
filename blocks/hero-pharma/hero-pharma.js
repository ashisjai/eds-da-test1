export default function decorate(block) {
  const content = block.querySelector('div');
  if (content) {
    // Wrap text content for better positioning
    const textWrapper = document.createElement('div');
    textWrapper.className = 'hero-pharma-content';

    // Move all non-picture elements to the text wrapper
    const children = [...content.children];
    children.forEach((child) => {
      if (!child.querySelector('picture')) {
        textWrapper.appendChild(child);
      }
    });

    if (textWrapper.children.length > 0) {
      content.appendChild(textWrapper);
    }
  }
}
