const fs = require('fs');
const path = require('path');

// Simple markdown to HTML converter
function markdownToHtml(md) {
  let html = md;

  // Escape HTML
  html = html.replace(/&/g, '&amp;');
  html = html.replace(/</g, '&lt;');
  html = html.replace(/>/g, '&gt;');

  // Headers
  html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Blockquotes
  html = html.replace(/^&gt;\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');

  // Tables
  const tableRegex = /\|(.+)\|\n\|[-|\s]+\|\n((?:\|.+\|\n?)+)/g;
  html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
    const headers = headerRow.split('|').filter(h => h.trim());
    const rows = bodyRows.trim().split('\n');

    let table = '<table><thead><tr>';
    headers.forEach(h => table += `<th>${h.trim()}</th>`);
    table += '</tr></thead><tbody>';

    rows.forEach(row => {
      const cells = row.split('|').filter(c => c.trim() !== '');
      table += '<tr>';
      cells.forEach(c => table += `<td>${c.trim()}</td>`);
      table += '</tr>';
    });

    table += '</tbody></table>';
    return table;
  });

  // Lists (simple)
  html = html.replace(/^-\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

  // Numbered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');

  // Paragraphs
  html = html.replace(/^(?!<[houlibt]|$)(.+)$/gm, '<p>$1</p>');

  // Fix double paragraphs
  html = html.replace(/<\/p>\n<p>/g, '</p><p>');

  return html;
}

// Read markdown file
const mdFile = process.argv[2] || '/workspace/att-business-migration-plan.md';
const mdContent = fs.readFileSync(mdFile, 'utf8');

// Convert to HTML
const htmlBody = markdownToHtml(mdContent);

// Get screenshot directory
const screenshotDir = '/workspace/block-screenshots';
const screenshots = fs.readdirSync(screenshotDir).filter(f => f.endsWith('.png'));

// Create HTML document
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AT&T Business Migration Plan</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      line-height: 1.6;
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
      color: #333;
    }
    h1 { color: #009FDB; border-bottom: 2px solid #009FDB; padding-bottom: 10px; }
    h2 { color: #009FDB; margin-top: 30px; }
    h3 { color: #333; margin-top: 25px; }
    h4 { color: #555; }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 15px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }
    th { background-color: #009FDB; color: white; }
    tr:nth-child(even) { background-color: #f9f9f9; }
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    blockquote {
      border-left: 4px solid #009FDB;
      margin: 15px 0;
      padding: 10px 20px;
      background: #f9f9f9;
    }
    hr { border: none; border-top: 2px solid #eee; margin: 30px 0; }
    ul { margin: 10px 0; }
    li { margin: 5px 0; }
    .screenshot-gallery { margin: 30px 0; }
    .screenshot-item {
      margin: 20px 0;
      page-break-inside: avoid;
    }
    .screenshot-item img {
      max-width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .screenshot-caption {
      font-size: 12px;
      color: #666;
      margin-top: 5px;
    }
    @media print {
      body { max-width: none; }
      h1, h2 { page-break-after: avoid; }
      table { page-break-inside: avoid; }
      .screenshot-item { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
${htmlBody}

<h2>Block Screenshots Reference</h2>
<div class="screenshot-gallery">
${screenshots.map(s => `
  <div class="screenshot-item">
    <h4>${s.replace('.png', '').replace(/block-/g, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
    <img src="file://${screenshotDir}/${s}" alt="${s}">
    <p class="screenshot-caption">${s}</p>
  </div>
`).join('')}
</div>
</body>
</html>`;

// Write HTML file
const outputHtml = mdFile.replace('.md', '.html');
fs.writeFileSync(outputHtml, html);
console.log(`HTML generated: ${outputHtml}`);
