
const fs = require('fs');
const path = 'C:\\Users\\bhara\\OneDrive\\Desktop\\landing_page\\src\\pages\\AboutUsPage.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace corrupted em-dash sequences
// Commonly UTF-8 '—' (E2 80 94) misinterpreted as Latin-1
content = content.replace(/\u00e2\u0080\u0094/g, '—');
content = content.replace(/â€”/g, '—');

// Also fix & in JSX (optional but safer)
content = content.replace(/& Growth/g, '&amp; Growth');

fs.writeFileSync(path, content);
console.log('Final encoding and entity cleanup done');
