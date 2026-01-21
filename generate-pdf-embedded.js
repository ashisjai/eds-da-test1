const fs = require('fs');
const path = require('path');

// Convert image to base64 data URI
function imageToBase64(imagePath) {
  if (!fs.existsSync(imagePath)) {
    return null;
  }
  const imgData = fs.readFileSync(imagePath);
  const base64 = imgData.toString('base64');
  const ext = path.extname(imagePath).slice(1);
  return `data:image/${ext};base64,${base64}`;
}

// Simple markdown to HTML converter with embedded screenshots
function markdownToHtml(md, screenshotDir) {
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

  // Inline code - replace backtick references to screenshots with embedded images
  html = html.replace(/`(block-[^`]+\.png)`/g, (match, filename) => {
    const imgPath = path.join(screenshotDir, filename);
    const base64 = imageToBase64(imgPath);
    if (base64) {
      return `<div class="inline-screenshot"><code>${filename}</code><br><img src="${base64}" alt="${filename}"></div>`;
    }
    return `<code>${filename}</code>`;
  });

  // Regular inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Blockquotes
  html = html.replace(/^&gt;\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr>');

  // Tables with screenshot embedding
  const tableRegex = /\|(.+)\|\n\|[-|\s]+\|\n((?:\|.+\|\n?)+)/g;
  html = html.replace(tableRegex, (match, headerRow, bodyRows) => {
    const headers = headerRow.split('|').filter(h => h.trim());
    const rows = bodyRows.trim().split('\n');

    // Check if this is a screenshot table (has "Screenshot" column)
    const hasScreenshotCol = headers.some(h => h.trim().toLowerCase().includes('screenshot'));
    const screenshotColIndex = headers.findIndex(h => h.trim().toLowerCase().includes('screenshot'));

    let table = '<table><thead><tr>';
    headers.forEach((h, i) => {
      if (hasScreenshotCol && i === screenshotColIndex) {
        table += `<th style="width: 400px;">${h.trim()}</th>`;
      } else {
        table += `<th>${h.trim()}</th>`;
      }
    });
    table += '</tr></thead><tbody>';

    rows.forEach(row => {
      const cells = row.split('|').filter(c => c !== '');
      table += '<tr>';
      cells.forEach((c, i) => {
        let cellContent = c.trim();

        // If this is the screenshot column, embed the image
        if (hasScreenshotCol && i === screenshotColIndex && cellContent) {
          // Extract filename from backticks or plain text
          const filenameMatch = cellContent.match(/`?([^`]+\.png)`?/) || cellContent.match(/(block-[^\s]+\.png)/);
          if (filenameMatch) {
            const filename = filenameMatch[1];
            const imgPath = path.join(screenshotDir, filename);
            const base64 = imageToBase64(imgPath);
            if (base64) {
              cellContent = `<div class="screenshot-cell"><code>${filename}</code><br><img src="${base64}" alt="${filename}"></div>`;
            }
          }
        }
        table += `<td>${cellContent}</td>`;
      });
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
const screenshotDir = '/workspace/block-screenshots';

// Convert to HTML with embedded screenshots
const htmlBody = markdownToHtml(mdContent, screenshotDir);

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
      max-width: 1200px;
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
      font-size: 13px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
      vertical-align: top;
    }
    th { background-color: #009FDB; color: white; }
    tr:nth-child(even) { background-color: #f9f9f9; }
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
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

    /* Screenshot styling */
    .screenshot-cell img,
    .inline-screenshot img {
      max-width: 380px;
      max-height: 250px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 8px;
      display: block;
    }
    .screenshot-cell code,
    .inline-screenshot code {
      font-size: 10px;
      color: #666;
    }
    .inline-screenshot {
      margin: 10px 0;
      padding: 10px;
      background: #f9f9f9;
      border-radius: 4px;
    }

    @media print {
      body { max-width: none; }
      h1, h2 { page-break-after: avoid; }
      table { page-break-inside: avoid; }
      tr { page-break-inside: avoid; }
      .screenshot-cell, .inline-screenshot { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
${htmlBody}
</body>
</html>`;

// Write HTML file
const outputHtml = mdFile.replace('.md', '-embedded.html');
fs.writeFileSync(outputHtml, html);
console.log(`HTML generated: ${outputHtml}`);
