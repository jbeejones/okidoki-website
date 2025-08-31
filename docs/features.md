# Features

OkiDoki is an **open source** documentation generator designed for developers who want powerful documentation without complexity. Built by the community for the community, it's free forever with no vendor lock-in. Here are the top 6 features that make it essential:

## 1. Markdown First

Write in standard markdown - no proprietary formats or vendor lock-in:

```markdown
# Your Documentation
Just write **normal markdown** with `code blocks`, tables, and links.

- No learning curve
- Use any markdown editor
- Version control friendly
```

**Benefits:** Focus on content, not syntax. Your documentation remains portable and future-proof.

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

# {{title}} v{{globals.version}}
Built by {{author}} for {{globals.company}}
Updated: {{updated}}
```

**Benefits:** Keep documentation up-to-date automatically. Change once, update everywhere.

## 3. Tabs, Badges and Admonitions

Rich interactive components enhance your documentation with tabs, badges, and alerts - all using simple markdown-like syntax:

### Tabs

<div>
<pre>
&#58;&#58;&#58;tabs
&#58;&#58;&#58;tab JavaScript
```js
const api = new ApiClient('{{api_url}}');
console.log('Ready ...')
```
&#58;&#58;&#58;
&#58;&#58;&#58;tab Python
```python
api = ApiClient('{{api_url}}')
print('Ready ...')
```
&#58;&#58;&#58;
&#58;&#58;&#58;
</pre>
</div>

:::tabs
:::tab JavaScript
```js
const api = new ApiClient('{{api_url}}');
console.log('Ready ...')
```
:::
:::tab Python
```python
api = ApiClient('{{api_url}}')
print('Ready ...')
```
:::
:::

### Badges and Admonitions :::badge-primary cool ::: :::badge-success feature :::

#### Badges
```markdown
User API :::badge-primary GET ::: :::badge-success Stable :::
```

#### Admonitions & Alert Messages

OkiDoki provides **two ways** to create important message callouts:

##### 1. Markdown Admonitions
```markdown
:::tip
Pro tip: Use admonitions to highlight important information!
:::

:::info
General information for your users.
:::

:::warning
Important warning about potential issues.
:::

:::danger
Critical error or dangerous action warning.
:::

:::success
Positive confirmation or success message.
:::

:::neutral
Neutral information without specific sentiment.
:::
```

##### 2. Handlebars Alert Helper
```markdown
{{#alert}}
I am neutral with the Handlebars alert helper
{{/alert}}

{{#alert "info"}}
Information alert using Handlebars syntax
{{/alert}}

{{#alert "warning"}}
Warning alert with Handlebars helper
{{/alert}}
```

##### Available States
- **tip** - Light blue, for helpful advice
- **info** - Blue, for general information  
- **warning** - Orange/yellow, for important warnings
- **danger** - Red, for critical alerts
- **success** - Green, for positive messages
- **neutral** - Gray, for neutral information

:::tip
**Advice:** Don't overuse it!
:::

:::neutral
**New:** The neutral state provides a clean way to display information without emotional context.
:::

**Benefits:** Professional documentation with zero configuration. Choose between markdown syntax or Handlebars helpers based on your preference. Draw attention to important information with beautifully styled callouts.



## 4. 🌗 Auto Light/Dark Themes

Beautiful themes powered by [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/):

```yaml
site:
  theme:
    light: "fantasy"    # Light themes: light, cupcake, bumblebee, emerald, corporate, garden, lofi, pastel, fantasy, wireframe, cmyk, autumn, business, acid, lemonade, winter
    dark: "forest"      # Dark themes: dark, synthwave, retro, cyberpunk, valentine, halloween, forest, aqua, luxury, dracula, black, night, coffee, dim, nord, sunset
```
Screenshot of the light theme and dark theme is shown below:

![Day vs Night theme comparison](/img/themes.png)

**Benefits:** 
- Automatic OS theme detection
- Toggle between themes
- 32+ professional themes included
- Fully responsive design
- Based on [DaisyUI themes](https://v4.daisyui.com/docs/themes/)

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

---

## Why OkiDoki?

- **Fast**: Generate docs in under 1 second
- **Small**: ~50KB generated sites  
- **Simple**: Two config files, standard markdown
- **Powerful**: Variables, themes, search, components
- **SEO Ready**: Automatic sitemaps and optimized markup
- **Flexible**: Deploy anywhere static files work
- **Open Source**: Community-driven, transparent, and free forever

### 🔓 Open Source Benefits

OkiDoki is **100% open source**, which means:

- **No vendor lock-in**: Your content stays yours in standard markdown
- **Community-driven**: Features requested and built by real users
- **Transparent**: See exactly how your docs are generated
- **Extensible**: Contribute features, themes, and improvements
- **Free forever**: No licensing fees, usage limits, or hidden costs
- **Trustworthy**: Audit the code, report issues, fix bugs together

:::tip
**Community matters**: Open source ensures OkiDoki evolves with developer needs, not corporate agendas. Join the community and help shape the future of documentation!
:::

Get started in 30 seconds: `npm install -g okidoki && okidoki init` 🚀 