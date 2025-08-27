---
title: Documentation Reference
---

# Documentation Reference

Complete reference for OkiDoki documentation generator.

## Commands

### `okidoki init`
Initialize a new documentation project in the current directory.

**Usage:**
```bash
okidoki init
```

**What it creates:**
- `okidoki.yaml` - Main configuration file
- `sidebars.yaml` - Navigation structure
- `docs/` directory with sample content
- `docs/index.md` - Homepage content

### `okidoki generate`
Generate the static documentation site.

**Usage:**
```bash
okidoki generate
```

**Output:**
- Creates `dist/` directory with generated HTML files
- Copies assets and applies themes
- Generates search index
- Build time: < 1 second

**Development tip:** For automatic rebuilding during development, use:
```bash
npx nodemon -w ./docs -w okidoki.yaml -w sidebars.yaml -e md,png,jpg,jpeg,gif,svg,webp,yaml,yml --exec "okidoki generate && npx serve dist"
```

## Configuration Files

### okidoki.yaml

Main configuration file for your documentation site.

#### Site Configuration
```yaml
site:
  title: "Site Title"           # Appears in browser title and header
  description: "Site Description"  # Meta description for SEO
  logo: "path/to/logo.png"      # Optional: Custom logo
  favicon: "path/to/favicon.ico" # Optional: Custom favicon
  url: "https://docs.example.com" # Optional: Base URL for absolute links
```

#### Theme Configuration
```yaml
site:
  theme:
    light: "fantasy"    # Light theme name
    dark: "forest"      # Dark theme name
```

**Available Themes:**
- Light themes: `fantasy`, `corporate`, `emerald`, `garden`, `lofi`, `pastel`, `cmyk`
- Dark themes: `forest`, `aqua`, `luxury`, `dracula`, `synthwave`, `halloween`, `coffee`

#### Global Variables
```yaml
globals:
  version: "1.0.0"
  api_url: "https://api.example.com"
  support_email: "support@example.com"
```

Use in markdown with `{{globals.version}}`, `{{{globals.api_url}}}`, etc.

#### Search Configuration
```yaml
search:
  enabled: true        # Enable/disable search (default: true)
  maxResults: 10       # Maximum number of search results (default: 10)
  minSearchLength: 2   # Minimum characters to trigger search (default: 2)
  placeholder: "Search documentation..." # Search input placeholder
```

#### Build Configuration
```yaml
build:
  outputDir: "dist"    # Output directory (default: "dist")
  clean: true          # Clean output directory before build (default: true)
  minify: true         # Minify HTML, CSS, and JS files (default: true)
```

### sidebars.yaml

Defines the navigation structure for your documentation.

#### Basic Structure
```yaml
menu:
  - title: "Page Title"
    document: "/path/to/page.md"
  - title: "External Link"
    url: "https://external.com"
  - title: "Section"
    items:
      - title: "Nested Page"
        document: "/nested/page.md"
```

#### Menu Item Properties
- `title` - Display name in navigation
- `document` - Path to markdown file (relative to docs/)
- `url` - External URL (alternative to document)
- `items` - Array of nested menu items
- `badge` - Optional badge configuration object

#### Badge Configuration

Add badges to menu items to highlight important sections or indicate status:

```yaml
menu:
  - title: "✨ Features"
    document: "/features.md"
    badge:
      variant: "info"
      text: "new"
  
  - title: "API Reference"
    document: "/api.md"
    badge:
      variant: "warning"
      text: "beta"
  
  - title: "Changelog"
    document: "/changelog.md"
    badge:
      variant: "success"
      text: "updated"
```

**Badge Properties:**
- `variant` - Badge style: `"info"`, `"success"`, `"warning"`, `"error"`, or `"neutral"`
- `text` - Badge text content (keep it short)

#### Advanced Example
```yaml
menu:
  - title: "Getting Started"
    document: "/start.md"
    badge:
      variant: "info"
      text: "start here"
  
  - title: "API Reference"
    items:
      - title: "Authentication"
        document: "/api/auth.md"
      - title: "Users"
        document: "/api/users.md"
        badge:
          variant: "warning"
          text: "beta"
      - title: "Posts"
        document: "/api/posts.md"
  
  - title: "External Resources"
    items:
      - title: "GitHub"
        url: "https://github.com/example/repo"
      - title: "API Status"
        url: "https://status.example.com"
```

#### Page Layout Configuration

You can customize individual page layouts by adding configuration options to menu items:

```yaml
menu:
  - title: "Landing Page"
    document: "/landing.md"
    hideMenu: true           # Hide navigation sidebar
    hideBreadcrumbs: true    # Hide breadcrumb navigation
    hideFooter: true         # Hide page footer
    fullWidth: true          # Use full page width (no sidebar padding)
  
  - title: "Regular Page"
    document: "/normal.md"
    # Uses default layout with all elements visible
```

**Page Layout Properties:**
- `hideMenu: true` - Removes the navigation sidebar for a clean layout
- `hideBreadcrumbs: true` - Hides breadcrumb navigation at the top of the page
- `hideFooter: true` - Removes the footer section from the page
- `fullWidth: true` - Expands content to use the full page width (useful with hidden sidebar)

These options are perfect for landing pages, special sections, or any pages where you want a cleaner, more focused layout.

#### Top Navigation Bar

You can add links to the top navigation bar using the `navbar` configuration:

```yaml
# Main sidebar menu
menu:
  - title: "Getting Started"
    document: "/start.md"
  # ... other menu items

# Top navigation bar items
navbar:
  - title: "GitHub"
    url: "https://github.com/okidoki-docs/okidoki"
  - title: "Help"
    document: "/help.md"
  - title: "API Status"
    url: "https://status.example.com"
    target: "_blank"  # Optional: open in new tab
```

**Navbar Item Properties:**
- `title` - Display text for the navigation link
- `document` - Path to internal markdown file (relative to docs/)
- `url` - External URL (alternative to document)
- `target` - Optional link target (e.g., `"_blank"` for new tab)

Navbar items appear in the top navigation bar and are perfect for external links, help sections, or important internal pages that need quick access.

## Markdown Features

### Standard Markdown
All standard markdown syntax is supported:

- **Headers** (H1-H6)
- **Bold** and *italic* text
- `Code spans` and code blocks
- [Links](reference.md) and Images ![images](https://m.media-amazon.com/images/I/4109Z8PEn8L.jpg)
- Lists (ordered and unordered)
- Tables
- Blockquotes

### Code Blocks with Syntax Highlighting

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

**Supported Languages:**
javascript, typescript, python, java, php, go, rust, c, cpp, html, css, yaml, json, bash, shell, sql, and many more.

### Global Variables

Use global variables defined in `okidoki.yaml`:

```markdown
Current version: {{version}}
API endpoint: {{{api_url}}}
Contact: {{{support_email}}}
```
:::tip
Use 3 curly brackets to `{{{encode_variable}}}`
:::

### Admonitions/Callouts

```markdown
:::info
This is an info callout.
:::

:::warning
This is a warning callout.
:::

:::danger
This is a danger callout.
:::

:::tip
This is a tip callout.
:::
```

### Badges

Badges are small visual indicators that can be used to show status, versions, categories, or other metadata.

#### Basic Badge Syntax

```markdown
:::badge
Default Badge
:::
```

#### Colored Badges

```markdown
:::badge-primary
Primary
:::

:::badge-secondary
Secondary
:::

:::badge-accent
Accent
:::

:::badge-info
Info
:::

:::badge-success
Success
:::

:::badge-warning
Warning
:::

:::badge-error
Error
:::
```


#### Inline Badges

You can use badges inline within text content:

```markdown
You can use badges inline like this :::badge-success Status: Active ::: within your text content.
```

#### Common Use Cases

- **Version indicators**: `:::badge-info v2.1.0 :::`
- **Status badges**: `:::badge-success Stable :::`
- **API method badges**: `:::badge-primary GET :::`
- **Feature flags**: `:::badge-warning Beta :::`
- **Categories**: `:::badge-secondary API :::`

#### Sidebar vs Content Badges

Content badges work in markdown files as shown above, while sidebar badges are configured in `sidebars.yaml` using a different format:

```yaml
# Content badges (in markdown files)
:::badge-info New Feature :::

# Sidebar badges (in sidebars.yaml)
menu:
  - title: "Getting Started"
    document: /start.md
    badge:
      variant: "info"
      text: "new feature"
```

Both approaches allow you to highlight important information, with sidebar badges appearing in navigation and content badges appearing inline in your documentation.

### Tables

| Feature | Supported | Notes |
|---------|-----------|--------|
| Headers | ✅ | H1-H6 |
| Links | ✅ | Internal & external |
| Images | ✅ | Local & remote |
| Code | ✅ | Syntax highlighting |

## File Organization

### Recommended Structure
```
docs/
├── index.md             # Homepage
├── start.md             # Getting started
├── api/                 # API documentation
│   ├── index.md
│   ├── auth.md
│   └── endpoints.md
├── guides/              # How-to guides
│   ├── deployment.md
│   └── configuration.md
├── reference/           # Reference material
│   └── cli.md
└── assets/              # Images, files
    └── images/
        └── screenshot.png
```

### File Naming Conventions
- Use lowercase with hyphens: `getting-started.md`
- Organize by topic in subdirectories
- Use `index.md` for section overviews

## Assets and Images

### Images
Place images in `docs/assets/images/` or any subdirectory:

```markdown
![Alt text](assets/images/screenshot.png)
![Logo](images/logo.png)
```

### Other Assets
- PDFs, downloads: `docs/assets/files/`
- Stylesheets: `docs/assets/css/`
- Scripts: `docs/assets/js/`

## Performance

- **Build Time**: < 1 second for most documentation sites
- **File Size**: Generated sites are typically ~50KB
- **Search**: Client-side search with instant results
- **Loading**: Optimized for fast page loads

## Deployment

Generated files in `dist/` directory are static HTML/CSS/JS and can be deployed to:

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: CloudFlare, AWS S3 + CloudFront
- **Web Servers**: Apache, Nginx
- **Local**: Use `npx serve dist` for testing

## Version Information

- Current Version: 1.0.1
- Node.js: Requires Node 14+
- Browser Support: Modern browsers (Chrome, Firefox, Safari, Edge) 