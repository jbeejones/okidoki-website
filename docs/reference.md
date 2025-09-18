---
title: Documentation Reference
pagenav:
  levels: 4
keywords: [
  "okidoki reference",
  "okidoki commands",
  "okidoki configuration",
  "okidoki.yaml reference",
  "sidebars.yaml guide",
  "documentation configuration",
  "okidoki CLI reference",
  "handlebars helpers",
  "badge syntax",
  "alert syntax",
  "okidoki complete guide"
]
---

# Documentation Reference 

{{badge okidoki_version}}

Complete reference for OkiDoki documentation generator.

## Commands

### `okidoki init`
Initialize a new documentation project.

**Usage:**
```bash
okidoki init [options]
```

**CLI Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--output` | `-o` | Output directory | (current directory) |
| `--config` | `-c` | Path to create okidoki configuration file | `"okidoki.yaml"` |
| `--sidebars` | `-b` | Path to create sidebars configuration file | `"sidebars.yaml"` |
| `--dev` | `-d` | Create a package.json with development scripts | `false` |
| `--help` | | Show help information | |
| `--version` | | Show version number | |

**Examples:**
```bash
# Initialize in current directory
okidoki init

# Initialize in specific directory
okidoki init --output ./my-documentation

# Custom config file names
okidoki init -c ./config.yaml -b ./navigation.yaml

# Include development setup
okidoki init --dev
```

**What it creates:**
- `okidoki.yaml` - Main configuration file
- `sidebars.yaml` - Navigation structure
- `docs/` directory with sample content
- `docs/index.md` - Homepage content
- `package.json` - Development scripts (when using `--dev`)

### `okidoki generate`
Generate the static documentation site.

**Usage:**
```bash
okidoki generate [options]
```

**CLI Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--source` | `-s` | Source directory containing markdown files | `"docs"` |
| `--output` | `-o` | Output directory for generated files | `"dist"` |
| `--config` | `-c` | Path to okidoki configuration file | `"okidoki.yaml"` |
| `--sidebars` | `-b` | Path to sidebars configuration file | `"sidebars.yaml"` |
| `--verbose` | `-v` | Enable verbose logging | `false` |
| `--help` | | Show help information | |
| `--version` | | Show version number | |

**Examples:**
```bash
# Basic usage (uses defaults)
okidoki generate

# Custom directories
okidoki generate --source ./documentation --output ./website

# Custom config files  
okidoki generate -c ./config/okidoki.yaml -b ./config/nav.yaml

# Enable verbose logging
okidoki generate -v

# Combine options
okidoki generate -s ./docs -o ./public -v
```

**Output:**
- Creates `dist/` directory with generated HTML files
- Copies assets and applies themes
- Generates search index for full-text search
- Creates `sitemap.xml` for SEO and search engine indexing
- Build time: < 1 second

**Development tip:** For automatic rebuilding during development, use:
```bash
npx nodemon -w ./docs -w okidoki.yaml -w sidebars.yaml -e md,png,jpg,jpeg,gif,svg,webp,yaml,yml --exec "okidoki generate && npx serve dist"
```

### `okidoki openapi`
Convert OpenAPI specification to markdown documentation.

**Usage:**
```bash
okidoki openapi [options]
```

**CLI Options:**

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--input` | `-i` | Path to OpenAPI specification file (JSON or YAML) | (required) |
| `--output` | `-o` | Output markdown file path | (auto-generated) |
| `--title` | `-t` | Title for the generated documentation | (auto-generated) |
| `--description` | `-d` | Description for the generated documentation | (auto-generated) |
| `--docs` | | Target docs directory | `"docs"` |
| `--sidebars` | `-b` | Path to sidebars configuration file | `"sidebars.yaml"` |
| `--config` | `-c` | Path to okidoki configuration file | `"okidoki.yaml"` |
| `--help` | | Show help information | |
| `--version` | | Show version number | |

**Examples:**
```bash
# Convert OpenAPI spec to markdown
okidoki openapi -i api-spec.yaml

# Specify custom output file
okidoki openapi -i api-spec.json -o custom-api-docs.md

# Set custom title and description
okidoki openapi -i spec.yaml -t "My API Documentation" -d "Complete API reference"

# Custom docs directory and config files
okidoki openapi -i spec.yaml --docs documentation -c config.yaml -b nav.yaml
```

**What it does:**
- Parses OpenAPI 3.x specification files (JSON or YAML format)
- Generates structured markdown documentation with:
  - API overview and metadata
  - Endpoint documentation with methods, parameters, and responses
  - Schema definitions and examples
  - Authentication requirements
- Automatically integrates with your existing documentation structure
- Updates sidebars configuration to include the generated documentation

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
  baseUrl: "/docs/"             # Optional: base path for subdirectory hosting
```

**BaseUrl Configuration:**
- Use `baseUrl` when hosting your documentation under a subdirectory (e.g., `example.com/docs/`)
- **GitHub Pages:** Required when hosting at `username.github.io/repository-name` (use `baseUrl: "/repository-name/"`)
- Omit this field when hosting at the root domain (e.g., `docs.example.com`)
- Must start and end with `/` when used (e.g., `"/docs/"`, `"/my-repo/"`)
- Affects all internal links and asset paths

#### Theme Configuration
```yaml
site:
  theme:
    light: "fantasy"    # Light theme name
    dark: "forest"      # Dark theme name
```

**Available Themes:**

Based on [DaisyUI themes](https://v4.daisyui.com/docs/themes/), OkiDoki supports all 32+ themes:

**Light Themes:**
- `light`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `garden`, `lofi`, `pastel`, `fantasy`, `wireframe`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `winter`

**Dark Themes:**  
- `dark`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `forest`, `aqua`, `luxury`, `dracula`, `black`, `night`, `coffee`, `dim`, `nord`, `sunset`

**Popular Combinations:**
```yaml
# Modern & Clean
site:
  theme:
    light: "corporate"
    dark: "luxury"

# Playful & Colorful  
site:
  theme:
    light: "cupcake"
    dark: "synthwave"

# Developer Friendly
site:
  theme:
    light: "wireframe"
    dark: "dracula"
```

#### Global Variables
```yaml
globals:
  version: "1.0.0"
  api_url: "https://api.example.com"
  support_email: "support@example.com"
```

Use in markdown with `\{{globals.version}}`, `\{{globals.api_url}}`, etc.

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

footer:
  - title: "Links"
    items:
      - label: "Home"
        url: /index.md
      - label: "GitHub"
        url: "https://github.com/example/repo"
```

#### Menu Item Properties
- `title` - Display name in navigation
- `document` - Path to markdown file (relative to docs/)
- `url` - External URL (alternative to document)
- `items` - Array of nested menu items
- `badge` - Optional badge configuration object
- `exclude_from_search` - Boolean to exclude page content from search index (default: false)

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
- `variant` - Badge style: `"info"`, `"success"`, `"warning"`, `"error"`, or `"outline"`
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
  
  - title: "Legal"
    items:
      - title: "Terms of Service"
        document: "/legal/terms.md"
        exclude_from_search: true  # Don't include legal docs in search
      - title: "Privacy Policy"
        document: "/legal/privacy.md"
        exclude_from_search: true
  
  - title: "External Resources"
    items:
      - title: "GitHub"
        url: "https://github.com/example/repo"
      - title: "API Status"
        url: "https://status.example.com"
```

#### Search Configuration

Use `exclude_from_search: true` to exclude specific pages from the search index:

```yaml
menu:
  - title: "Important Documentation"
    document: "/docs.md"
    # This page will be searchable (default behavior)
  
  - title: "Legal Notice"
    document: "/legal.md"
    exclude_from_search: true
    # This page won't appear in search results
  
  - title: "Archive"
    items:
      - title: "Old Version 1.0"
        document: "/archive/v1.md"
        exclude_from_search: true  # Exclude deprecated content
      - title: "Current Version 2.0"
        document: "/archive/v2.md"
        # This will be included in search
```

**Common use cases for excluding from search:**
- Legal documents (terms, privacy policies)
- Deprecated or archived content
- Administrative pages
- Landing pages with minimal content
- Placeholder or template pages

#### Footer Configuration

Add footer links that appear at the bottom of all pages:

```yaml
footer:
  - title: "Resources"
    items:
      - label: "Quick Start"
        url: /start.md
      - label: "Documentation"
        url: reference.md
      - label: "Examples"
        url: markdown-examples.md
  - title: "Open Source"
    items:
      - label: "GitHub Repository"
        url: "https://github.com/jbeejones/okidoki"
      - label: "Report Issues"
        url: "https://github.com/jbeejones/okidoki/issues"
      - label: "Contribute"
        url: "https://github.com/jbeejones/okidoki/blob/main/CONTRIBUTING.md"
```

**Footer Properties:**
- `title` - Section header in footer
- `items` - Array of footer links
- `label` - Display text for the link
- `url` - Internal document path (relative to docs/) or external URL

**Footer Notes:**
- Footer links are organized in columns by section
- Internal links should start with `/` for root-relative paths
- External links should use full URLs with `https://`
- Footer appears on all pages unless `hideFooter: true` is set

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
Current version: \{{version}}
API endpoint: \{{{api_url}}}
Contact: \{{{support_email}}}
```
{{alert "Use 3 curly brackets to encode {{{variables}}}"}}

### Important Messages & Callouts

Create styled message callouts using Handlebars alert helpers:

```markdown
\{{alert "This is an info callout." "info"}}

\{{alert "This is a success callout." "success"}}

\{{alert "This is a warning callout." "warning"}}

\{{alert "This is a danger callout." "error"}}

\{{alert "This is a neutral callout."}}
```

#### For Complex Content

For alerts with markdown content, use the block syntax:

```markdown
\{{#alert}}
Default neutral alert with **markdown** support
\{{/alert}}

\{{#alert "info"}}
Information alert with [links](https://example.com) and `code`
\{{/alert}}
```

#### Available Alert Types

- **info** - Blue, for general information
- **success** - Green, for positive confirmations
- **warning** - Orange/yellow, for important warnings  
- **error** - Red, for critical alerts
- **blank** - Gray, for neutral information (default)

### Badges

Use Handlebars badge helpers for status indicators, versions, and metadata:

#### Basic Badge Syntax

```markdown
\{{badge "Default Badge"}}
```

#### Colored Badges

```markdown
\{{badge "Primary" "primary"}}
\{{badge "Secondary" "secondary"}}
\{{badge "Accent" "accent"}}
\{{badge "Info" "info"}}
\{{badge "Success" "success"}}
\{{badge "Warning" "warning"}}
\{{badge "Error" "error"}}
```

#### Inline Badges

```markdown
You can use badges inline like this \{{badge "Status: Active" "success"}} within your content.
```

#### Common Use Cases

- **Version indicators**: `\{{badge "v2.1.0" "info"}}`
- **Status badges**: `\{{badge "Stable" "success"}}`
- **API method badges**: `\{{badge "GET" "primary"}}`
- **Feature flags**: `\{{badge "Beta" "warning"}}`

#### Sidebar Badges

Sidebar badges are configured in `sidebars.yaml`:

```yaml
menu:
  - title: "Getting Started"
    document: /start.md
    badge:
      variant: "info"
      text: "new feature"
```

### YouTube Videos

Embed YouTube videos directly in your documentation using the built-in YouTube helper:


```markdown
\{{youtube "1XJ8bN7Cn9w"}}
```

#### Available Parameters

- **videoId** (required) - YouTube video ID from the URL
- **width** (optional) - Video player width (default: "560")
- **height** (optional) - Video player height (default: "315") 
- **start** (optional) - Start time in seconds (e.g., "61" for 1 minute 1 second)

#### Usage Tips

- Use `width="100%"` for responsive videos that fill their container
- Start parameter accepts numeric values in seconds
- Extract video ID from URLs: `https://www.youtube.com/watch?v=1XJ8bN7Cn9w` → `1XJ8bN7Cn9w`
- Perfect for tutorials, demonstrations, and product showcases

### Tables

```markdown
| Feature | Supported | Notes |
|---------|-----------|--------|
| Headers | ✅ | H1-H6 |
| Links | ✅ | Internal & external |
| Images | ✅ | Local & remote |
| Code | ✅ | Syntax highlighting |
```

**Result:** 👇

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

Generated files in `dist/` directory include HTML, CSS, JS, search index, and `sitemap.xml`. These static files can be deployed to:

- **Static Hosting**: Netlify, Vercel, GitHub Pages (see [deployment guide](deployment.md) for GitHub Pages baseUrl setup)
- **CDN**: CloudFlare, AWS S3 + CloudFront
- **Web Servers**: Apache, Nginx
- **Local**: Use `npx serve dist` for testing

## Version Information

- Current Version: {{okidoki_version}}
- Node.js: Requires Node 14+
- Browser Support: Modern browsers (Chrome, Firefox, Safari, Edge) 