
const fs = require('fs');
const path = 'C:\\Users\\bhara\\OneDrive\\Desktop\\landing_page\\src\\pages\\AboutUsPage.jsx';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
let line146 = lines[145]; // 0-indexed

// 1. Replace class= with className=
line146 = line146.replace(/class=/g, 'className=');

// 2. Convert string style="..." to object-based style={{...}}
line146 = line146.replace(/style="([^"]*)"/g, (match, p1) => {
    const styleObj = p1.split(';').reduce((acc, style) => {
        const [key, value] = style.split(':').map(s => s.trim());
        if (key && value) {
            let camelKey = key.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
            if (camelKey.startsWith('Webkit')) {
                // Keep Webkit capitalized
            } else if (camelKey.startsWith('ms')) {
                // ms is usually lowercase, but React uses ms
            } else {
                // Ensure first letter is lowercase (standard)
            }
            // Fix special cases if needed
            if (camelKey === 'WebkitFontSmoothing') camelKey = 'WebkitFontSmoothing';
            
            // Numeric values should be numbers if possible, but keeping them as strings is safer in JSX if they have units
            const val = isNaN(value) ? `'${value}'` : value;
            acc.push(`${camelKey}: ${val}`);
        }
        return acc;
    }, []);
    return `style={{ ${styleObj.join(', ')} }}`;
});

// 3. Convert hyphenated SVG attributes
const svgAttrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin'];
svgAttrs.forEach(attr => {
    const camelAttr = attr.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
    const regex = new RegExp(attr + '=', 'g');
    line146 = line146.replace(regex, camelAttr + '=');
});

// 4. Fix HTML entities and encoding
line146 = line146.replace(/&amp;/g, '&');
line146 = line146.replace(/â€”/g, '—');

lines[145] = line146;
fs.writeFileSync(path, lines.join('\n'));
console.log('Successfully updated line 146');
