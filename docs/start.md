---
keywords: [
  "okidoki quick start",
  "okidoki installation",
  "okidoki setup guide",
  "documentation generator tutorial",
  "markdown docs setup",
  "okidoki getting started",
  "npm install okidoki",
  "documentation site setup",
  "okidoki init tutorial",
  "beginner documentation guide"
]
---
# Quick Start Guide

Welcome to OkiDoki! 

Create beautiful documentation sites in seconds with this modern, open source documentation generator.

Ready to get started? Let's create your documentation site in under 30 seconds! 🚀

## Installation

Install OkiDoki globally using npm:

```bash
npm install -g okidoki
```

## Quick Setup

1. **Create a new documentation project:**
   ```bash
   mkdir mydocs && cd mydocs
   ```

2. **Initialize your project:**
   ```bash
   okidoki init
   ```
   This creates the basic structure with configuration files.

3. **Generate your documentation:**
   ```bash
   okidoki generate
   ```

4. **Serve your docs locally:**
   ```bash
   npx serve dist
   ```
   Your documentation will be available at `http://localhost:3000`

   You should see this page in your browser:
   <div style="border: 1px solid #ccc; padding: 10px;">
     <img src="/img/okidoki-startpage.jpeg" alt="okidoki start page">
   </div>


## Project Structure

After running `okidoki init`, you'll have:

```
mydocs/
├── docs/
│   ├── index.md        # Beautiful homepage
│   ├── start.md        # This getting started guide
│   ├── help.md         # Help and support page
│   └── test.md         # Sample content page
├── okidoki.yaml        # Main configuration
├── sidebars.yaml       # Navigation structure
└── dist/               # Generated site (after build)
```

## Basic Configuration

### okidoki.yaml
```yaml
site:
  title: "My Documentation"
  description: "Documentation for my project"
```

### sidebars.yaml
```yaml
menu:
  - title: Getting Started
    document: /start.md
  - title: API Reference
    document: /api.md
  - title: Examples
    document: /examples.md
```

## Writing Your First Page

Create a new markdown file `start.md` in the `docs/` directory:

```markdown
# My First Page

This is my first documentation page with **bold text** and `code`.

## Code Example

```javascript
function hello() {
  console.log("Hello, OkiDoki!");
}
```
The run the `okidoki generate` command again and refresh your browser to see the updated documentation site.


## Next Steps

- Check out the [Documentation Reference](/reference.md) for advanced features
- Browse [Examples](/markdown-examples.md) for inspiration  
- Visit the [Help](/help.md) section if you run into issues

## Key Features

- **Markdown First**: Write in standard markdown, no proprietary formats
- **Fast Search**: Full-text search across all documentation
- **Clean Themes**: Beautiful, responsive themes out of the box
- **Quick Build**: Generate docs in under 1 second
- **Small Footprint**: Generated sites are ~50KB 