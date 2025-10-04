---
title: Top Features
keywords: [
  "okidoki features",
  "documentation generator features",
  "markdown documentation tools",
  "static site generator features",
  "open source documentation",
  "documentation themes",
  "documentation search",
  "markdown variables",
  "documentation hosting options",
  "SEO documentation generator",
  "markdown-it-emoji",
  "markdown-it-mathjax3",
  "markdown-it-mermaid",
  "markdown-it-table-of-contents",
  "emoji support",
  "mathematical expressions",
  "mermaid diagrams",
  "automatic table of contents"
]
pagenav: true
---

# Top Features

OkiDoki is an **open source** documentation generator designed for developers who want powerful documentation without complexity. Built by the community for the community, it's free forever with no vendor lock-in. Here are the top 7 features that make it essential:

1. **Markdown First**: Write standard markdown with no proprietary formats
2. **Dynamic Variables**: Inject dynamic content with global and local variables
3. **Tabs, Badges and Alerts**: Rich interactive components for enhanced documentation
4. **Auto Light/Dark Themes**: Beautiful themes powered by Tailwind CSS and DaisyUI
5. **Full-Text Search**: Instant search across all documentation
6. **SEO Optimization**: Built-in features for better discoverability
7. **Host Anywhere**: Deploy anywhere static files are supported




## 1. Markdown First

Write in standard markdown - no proprietary formats or vendor lock-in:

````markdown
# Your Documentation
Just write **normal markdown** with `code blocks`, tables, and links.

- No learning curve
- Use any markdown editor
- Version control friendly
````

{{badge "New" "info"}} Convert [OpenAPI](https://www.openapis.org/) specifications to markdown with `okidoki openapi -i spec.yaml` - automatically generates comprehensive API documentation in standard markdown format.

### Enhanced Markdown Support

OkiDoki includes powerful markdown plugins that extend standard markdown functionality:

- **:rocket: Emoji Support**: Use standard emoji shortcodes (`:rocket:`, `:heart:`, `:warning:`)
- **Mathematical Expressions**: Render LaTeX/TeX math with `$inline$` and `$$block$$` syntax
- **Mermaid Diagrams**: Create flowcharts, sequence diagrams, and more with simple syntax
- **Automatic TOC**: Generate table of contents with `[[toc]]` placeholder

**Benefits:** Focus on content, not syntax. Your documentation remains portable and future-proof while gaining powerful extensions.

## 2. Dynamic Variables

Inject dynamic content with global and local variables:

### Global Variables (`okidoki.yaml`)
```yaml
site:
  title: MyDocs
globals:
  version: "2.1.0"
  api_url: "https://api.example.com"
  company: "Acme Corp"
```

### Local Variables
```markdown
---
title: "API Guide"
author: "John Doe"
updated: "2024-01-15"
---

# \{{title}} v\{{globals.version}}
Built by \{{author}} for \{{globals.company}}
Updated: \{{updated}}
```

**Benefits:** Keep documentation up-to-date automatically. Change once, update everywhere.

## 3. Tabs, Badges and Alerts

Rich interactive components enhance your documentation with tabs, badges, and alerts - all using the simple [Handlebars](https://handlebarsjs.com/) syntax:

### Tabs

````handlebars
\{{#tabs}}
    \{{#tab title="JavaScript"}}
    ```js
    const api = new ApiClient('{{api_url}}');
    console.log('Ready ...')
    ```
    \{{/tab}}

    \{{#tab title="Python"}}
    ```python
    api = ApiClient('{{api_url}}')
    print('Ready ...')
    ```
    \{{/tab}}
\{{/tabs}}
````

{{#tabs}}
    {{#tab title="JavaScript"}}
    ```js
    const api = new ApiClient('{{api_url}}');
    console.log('Ready ...')
    ```
    {{/tab}}

    {{#tab title="Python"}}
    ```python
    api = ApiClient('{{api_url}}')
    print('Ready ...')
    ```
    {{/tab}}
{{/tabs}}

### Badges and Alert Messages {{badge "cool" "primary"}} {{badge "feature" "success"}}

#### Badges
```handlebars
User API \{{badge "GET" "primary"}} \{{badge "Stable" "success"}}
```

#### Alert Messages

Create important message callouts using Handlebars helpers:

```handlebars
\{{alert "Use alerts to highlight important information!" "warning"}}

\{{#alert type="info"}}
Advice: Don't overuse alerts!
\{{/alert}}
```

##### Available Alert Types
- **info** - Blue, for general information  
- **success** - Green, for positive messages
- **warning** - Orange/yellow, for important warnings
- **error** - Red, for critical alerts
- **blank** - Gray, for neutral information (default)

##### Available Badge Variants
- **primary**, **secondary**, **accent** - Brand colors
- **info**, **success**, **warning**, **error** - Status colors
- **outline** - Transparent with border

{{#alert type="info"}}
Advice: Don't overuse alerts!
{{/alert}}

{{alert "Important warning about potential issues." "warning"}}

**Benefits:** Professional documentation with clean, consistent styling using Handlebars helpers for maximum flexibility.



## 4. 🌗 Auto Light/Dark Themes

Beautiful themes powered by [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/):

```yaml
site:
  theme:
    light: "fantasy"    # All 35 themes: light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk
    dark: "forest"      # Choose any theme for light/dark mode - DaisyUI doesn't restrict themes to specific modes
```
Screenshot of the light theme and dark theme is shown below:

![Day vs Night theme comparison](/img/themes.png)

**Benefits:** 
- Automatic OS theme detection
- Toggle between themes
- 32+ professional themes included
- Fully responsive design
- Based on [DaisyUI themes](https://daisyui.com/docs/themes/#list-of-themes)

## 5. ⚡ Full-Text Search

Instant search across all documentation:

- **Client-side**: No server required
- **Instant results**: Search as you type
- **Smart ranking**: Most relevant results first
- **Keyboard shortcuts**: Quick navigation

```yaml
search:
  enabled: true
  placeholder: "Search documentation..."
```

**Benefits:** Users find answers fast. Works offline and scales to thousands of pages.

## 6. 🔍 SEO Optimization

Built-in SEO features for better discoverability:

- **Automatic sitemap.xml** - Generated with every build for search engine indexing
- **Meta descriptions** - Configure in `okidoki.yaml` for better search results  
- **Semantic HTML** - Clean, accessible markup for search engines
- **Fast loading** - Optimized performance improves search rankings
- **Subdirectory support** - Configure `baseUrl` for hosting under subdirectories (required for GitHub Pages)

```yaml
site:
  title: "My Documentation"
  description: "Complete API documentation and guides"  # Used in meta tags
  baseUrl: "/my-repo/"  # Required for GitHub Pages: username.github.io/my-repo/
```

**GitHub Pages Example:** With `baseUrl: "/my-repo/"`, your site works correctly at `username.github.io/my-repo/`.

**Benefits:** Better search engine visibility means more users find your documentation naturally.

## 7. 🌐 Host Anywhere

Deploy your documentation anywhere static files are supported - no server required:

- **Pure static HTML** - No runtime dependencies or server-side processing
- **Powered by Tailwind CSS** - Optimized, modern styling that loads instantly
- **Zero dependencies** - Everything needed is built into the generated files
- **Lightning fast** - Optimized assets and minimal payload for sub-second load times

# Deploy to any of these platforms:
- GitHub Pages
- Netlify  
- Vercel
- AWS S3
- Azure Static Web Apps
- Your own CDN/server

**Benefits:** Maximum flexibility and performance. Host on free platforms or enterprise infrastructure - your choice. No vendor lock-in for hosting either.

---


## Why OkiDoki?

- **Fast**: Generate docs in under 1 second
- **Small**: ~50KB generated sites  
- **Simple**: Two config files, standard markdown
- **Powerful**: Variables, themes, search, components
- **SEO Ready**: Automatic sitemaps and optimized markup
- **Host Anywhere**: Pure static HTML with zero dependencies
- **Open Source**: Community-driven, transparent, and free forever

### 🔓 Open Source Benefits

OkiDoki is **100% open source**, which means:

- **No vendor lock-in**: Your content stays yours in standard markdown
- **Community-driven**: Features requested and built by real users
- **Transparent**: See exactly how your docs are generated
- **Extensible**: Contribute features, themes, and improvements
- **Free forever**: No licensing fees, usage limits, or hidden costs
- **Trustworthy**: Audit the code, report issues, fix bugs together

{{#alert}}
**Community matters**: 
Open source ensures OkiDoki evolves with developer needs, not corporate agendas. 
Join the community and help shape the future of documentation!
{{/alert}}

Get started in 5 seconds 🚀: 

```bash
npx okidoki init && npx okidoki generate && npx serve dist
``` 