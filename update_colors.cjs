const fs = require('fs');
const path = require('path');

const files = [
    'src/components/Header.jsx',
    'src/components/Header1.jsx',
    'src/components/Footer.jsx',
    'src/components/Card.jsx',
    'src/components/Card1.jsx',
    'src/components/Login.jsx',
    'src/components/QuoteForm.jsx',
    'src/components/DemoForm.jsx',
    'src/components/CardAbout.jsx',
    'src/components/CheckboxTree.jsx',
    'src/components/FeatureCard.jsx',
    'src/components/FeaturesGrid.jsx',
    'src/pages/HomePage.jsx',
    'src/pages/AboutUsPage.jsx',
    'src/pages/ContactPage.jsx',
    'src/pages/FeaturesPage.jsx',
    'src/pages/Pricing.jsx',
    'src/pages/VideoPage.jsx',
    'src/pages/ReferenceWebsite.jsx',
    'src/data/featuresData.js',
    'src/data/featuresGridData.js',
    'src/data/aboutus.jsx',
    'src/data/options.js',
    'src/data/video.js'
];

const colorMap = {
    'blue': 'pink',
    'sky': 'pink',
    'cyan': 'pink',
    'indigo': 'rose',
    'violet': 'fuchsia',
    'purple': 'fuchsia',
    'fuchsia': 'fuchsia',
    'pink': 'pink',
    'rose': 'rose',
    'green': 'rose',
    'emerald': 'rose',
    'teal': 'rose',
    'lime': 'pink',
    'yellow': 'pink',
    'amber': 'rose',
    'orange': 'fuchsia',
    'red': 'rose'
};

const prefixes = ['bg', 'text', 'border', 'ring', 'from', 'to', 'via', 'shadow', 'outline', 'fill', 'stroke', 'decoration'];

files.forEach(file => {
    const filePath = path.resolve(file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;

        Object.entries(colorMap).forEach(([oldColor, newColor]) => {
            if (oldColor === newColor) return; // Skip if same

            prefixes.forEach(prefix => {
                // Handle optional modifiers like hover:, dark:, focus:, etc.
                // We use a regex that matches the prefix and color, possibly preceded by modifiers.
                const regex = new RegExp(`([\\s"':\\-])(${prefix})-${oldColor}-`, 'g');
                newContent = newContent.replace(regex, `$1$2-${newColor}-`);
                
                const regexNoShade = new RegExp(`([\\s"':\\-])(${prefix})-${oldColor}([\\s"':])`, 'g');
                newContent = newContent.replace(regexNoShade, `$1$2-${newColor}$3`);
            });

            // Standalone color names in strings
            const standaloneRegex = new RegExp(`(['"])${oldColor}(['"])`, 'g');
            newContent = newContent.replace(standaloneRegex, `$1${newColor}$2`);
        });
        
        // Hex code replacements
        newContent = newContent.replace(/#3b82f6/gi, '#ec4899'); // blue-500
        newContent = newContent.replace(/#2563eb/gi, '#db2777'); // blue-600
        newContent = newContent.replace(/#1d4ed8/gi, '#be185d'); // blue-700
        newContent = newContent.replace(/#60a5fa/gi, '#f472b6'); // blue-400
        newContent = newContent.replace(/#6366f1/gi, '#f43f5e'); // indigo-500
        newContent = newContent.replace(/#4f46e5/gi, '#e11d48'); // indigo-600
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`No changes for ${file}`);
        }
    }
});
