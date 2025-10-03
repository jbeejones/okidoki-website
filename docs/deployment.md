---
keywords: [
  "okidoki deployment",
  "deploy documentation site",
  "github pages deployment",
  "netlify docs deployment",
  "vercel documentation hosting",
  "static site hosting",
  "documentation hosting guide",
  "docs deployment tutorial",
  "github actions okidoki",
  "documentation publishing"
]
---

# Deployment

OkiDoki generates static files in the `dist/` folder that can be deployed anywhere. Here are the most popular deployment options:

## GitHub Pages

Deploy directly from your GitHub repository:

### 1. Create a GitHub Actions workflow (recommended):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install OkiDoki
        run: npm install -g okidoki
        
      - name: Generate site
        run: okidoki generate
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 2. Enable Pages in repository settings:
- Go to Settings → Pages
- Source: "GitHub Actions"
- Your site will be available at `https://username.github.io/repository-name`

### 3. Configure URLs for GitHub Pages:

Add these URL settings to your `okidoki.yaml`:

```yaml
site:
  title: "My Documentation"
  description: "Documentation for my project"
  baseUrl: "/repository-name/"  # Required for GitHub Pages subdirectories
  url: "https://username.github.io"  # Github domain
```

**Settings explained:**
- `baseUrl`: Required for sites hosted at `username.github.io/repository-name` (not custom domains)
- `url`: Full domain URL used for generating absolute URLs in sitemap.xml and metadata

**Example:**
- Repository: `john/my-awesome-docs`
- GitHub Pages URL: `https://john.github.io/my-awesome-docs`
- Required settings:
  ```yaml
  site:
    baseUrl: "/my-awesome-docs/"
    url: "https://john.github.io/my-awesome-docs"
  ```

**For custom domains:** If using a custom domain (e.g., `docs.example.com`), set:
```yaml
site:
  baseUrl: "/"
  url: "https://docs.example.com"
```

## Netlify

Deploy with automatic builds from Git or manual drag-and-drop:

### Option 1: Git Integration (Recommended)
1. Connect your GitHub/GitLab repository to Netlify
2. **Build settings**:
   - Build command: `npm install -g okidoki && okidoki generate`
   - Publish directory: `dist`
3. **Environment variables** (if needed):
   - `NODE_VERSION`: `18` (or your preferred version)

### Option 2: Manual Deploy
```bash
# Generate your site
okidoki generate

# Install Netlify CLI
npm install -g netlify-cli

# Deploy (first time)
netlify deploy --dir=dist --prod
```

## Vercel

Deploy with Git integration or Vercel CLI:

### Option 1: Git Integration (Recommended)
1. Import your repository at [vercel.com/new](https://vercel.com/new)
2. **Build settings** (usually auto-detected):
   - Framework Preset: Other
   - Build Command: `npm install -g okidoki && okidoki generate`
   - Output Directory: `dist`

### Option 2: Vercel CLI
```bash
# Generate your site
okidoki generate

# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Other Options

**Traditional Web Hosting**: Upload the `dist/` folder contents via FTP/SFTP to your web server's public directory.

**Amazon S3 + CloudFront**: Perfect for high-traffic sites requiring global CDN distribution.

**Firebase Hosting**: Google's hosting solution with easy CLI deployment.

All these platforms support custom domains and HTTPS out of the box. Your documentation will be fast and globally distributed! 🚀 