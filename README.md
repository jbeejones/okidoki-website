# OkiDoki Landing Page

A clean, developer-focused landing page for OkiDoki built with proper production Tailwind CSS compilation.

## 🛠️ Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Building CSS

#### Development (with watch mode)
```bash
npm run build-css
```
This watches for changes and rebuilds CSS automatically.

#### Production (minified)
```bash
npm run build-css-prod
```
This creates a minified CSS file for production use.

## 📁 Project Structure

```
├── assets/
│   ├── index.html          # Landing page
│   └── styles.css          # Generated CSS (don't edit directly)
├── src/
│   └── input.css           # Source CSS with Tailwind directives
├── docs/
│   └── images/             # Logo and image assets
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

- **Tailwind Config**: Edit `tailwind.config.js` to customize themes and add plugins
- **Custom Styles**: Add custom CSS to `src/input.css` 
- **Content**: Tailwind scans `./assets/**/*.html` for class usage

## 🚀 Production Build

For production deployment:

1. Run production build:
```bash
npm run build-css-prod
```

2. Deploy the `assets/` folder with the compiled `styles.css`

## ✨ Features

- ✅ **Hybrid CSS approach** - compiled utilities + DaisyUI CDN
- ✅ **No development warnings** - uses compiled Tailwind CSS
- ✅ **DaisyUI components** - buttons, cards, navbar via CDN
- ✅ **OS theme detection** with manual override
- ✅ **Responsive design** with mobile-first approach
- ✅ **Syntax highlighting** for code blocks
- ✅ **Optimized performance** - only 7.2KB custom CSS

## 🔧 Development Notes

**Hybrid CSS Strategy:**
- **`styles.css`** (7.2KB): Compiled Tailwind utilities + custom styles
- **DaisyUI CDN**: Component styles (btn, navbar, card, etc.)

The CSS is compiled from `src/input.css` which includes:
- Tailwind base and utilities
- Custom styles for code blocks and syntax highlighting
- Optimized for only the classes used in the HTML

After any changes to styles or HTML classes, rebuild the CSS with `npm run build-css-prod`. 