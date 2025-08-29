# Help & Troubleshooting

Get help with common issues and questions about OkiDoki.

## Quick Solutions

### Installation Issues

**Problem:** `npm install -g okidoki` fails with permission errors
```bash
# Solution 1: Use sudo (not recommended)
sudo npm install -g okidoki

# Solution 2: Configure npm to use a different directory (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm install -g okidoki
```

**Problem:** "okidoki command not found" after installation
```bash
# Check if it's installed
npm list -g --depth=0 | grep okidoki

# If installed but not found, check your PATH
echo $PATH
which okidoki

# Add npm global bin to PATH
export PATH=$(npm config get prefix)/bin:$PATH
```

### Build Issues

**Problem:** `okidoki generate` fails with "file not found" error
- **Check:** Ensure you're in the project root directory
- **Check:** Verify `okidoki.yaml` and `sidebars.yaml` exist
- **Check:** Confirm `docs/` directory exists with markdown files

**Problem:** Generated site has broken links
- **Check:** Verify all links in `sidebars.yaml` point to existing files
- **Check:** Ensure file paths use forward slashes, even on Windows
- **Check:** Verify image paths are correct relative to `docs/` directory

**Problem:** Build is slow or hangs
- **Check:** Large image files in docs directory (compress them)
- **Check:** Too many files in docs directory (organize in subdirectories)
- **Solution:** Run `okidoki generate --verbose` (or `-v`) for detailed output

## CLI Reference

### Command: `okidoki init`

Initialize a new documentation project with the following options:

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--output` | `-o` | Output directory | (current directory) |
| `--config` | `-c` | Path to create okidoki configuration file | `"okidoki.yaml"` |
| `--sidebars` | `-b` | Path to create sidebars configuration file | `"sidebars.yaml"` |
| `--dev` | `-d` | Create a package.json with development scripts (nodemon, concurrently) | `false` |
| `--help` | | Show help information | |
| `--version` | | Show version number | |

#### Usage Examples

```bash
# Initialize in current directory
okidoki init

# Initialize in a specific directory
okidoki init --output ./my-docs

# Create with custom config file names
okidoki init --config ./config.yaml --sidebars ./navigation.yaml

# Include development setup with package.json
okidoki init --dev

# Initialize with all options
okidoki init -o ./documentation -c ./my-config.yaml -b ./my-sidebars.yaml -d
```

The `init` command creates:
- `okidoki.yaml` - Main configuration file
- `sidebars.yaml` - Navigation structure file  
- `docs/` directory with sample markdown files
- `package.json` with development scripts (when using `--dev`)

### Command: `okidoki generate`

Generate documentation from markdown files. This command automatically creates:
- Static HTML files for all markdown documents
- Search index for full-text search functionality
- `sitemap.xml` for SEO and search engine indexing
- Optimized CSS and JavaScript bundles

Options:

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--source` | `-s` | Source directory containing markdown files | `"docs"` |
| `--output` | `-o` | Output directory for generated files | (auto-generated) |
| `--config` | `-c` | Path to okidoki configuration file | `"okidoki.yaml"` |
| `--sidebars` | `-b` | Path to sidebars configuration file | `"sidebars.yaml"` |
| `--verbose` | `-v` | Enable verbose logging | `false` |
| `--help` | | Show help information | |
| `--version` | | Show version number | |

#### Usage Examples

```bash
# Basic usage (uses default settings)
okidoki generate

# Specify custom directories
okidoki generate --source ./documentation --output ./website

# Use custom configuration files
okidoki generate --config ./config/okidoki.yaml --sidebars ./config/nav.yaml

# Enable verbose logging for troubleshooting
okidoki generate -v

# Combine multiple options
okidoki generate -s ./docs -o ./public -c ./my-config.yaml -v
```

## Frequently Asked Questions

### General Questions

**Q: What file formats does OkiDoki support?**
A: OkiDoki primarily works with Markdown (.md) files. Images (PNG, JPG, GIF, SVG) and other assets are supported in the docs directory.

**Q: Can I use custom CSS or JavaScript?**
A: Currently, OkiDoki uses built-in themes. Custom styling options may be added in future versions.

**Q: How do I change the theme?**
A: Edit the `theme` section in your `okidoki.yaml` file:
```yaml
site:
  theme:
    light: "fantasy"  # or corporate, emerald, garden, lofi, pastel, cmyk
    dark: "forest"    # or aqua, luxury, dracula, synthwave, halloween, coffee
```

**Q: Can I have multiple documentation sites?**
A: Yes! Each site needs its own directory with separate `okidoki.yaml` and `sidebars.yaml` files.

**Q: How do I add a favicon?**
A: Add your favicon file to the docs directory and reference it in `okidoki.yaml`:
```yaml
site:
  favicon: "favicon.ico"
```

### Configuration Questions

**Q: How do I organize my documentation into sections?**
A: Use the hierarchical structure in `sidebars.yaml`:
```yaml
menu:
  - title: "Getting Started"
    items:
      - title: "Installation"
        document: "/install.md"
      - title: "Quick Start"
        document: "/quickstart.md"
```

**Q: Can I link to external websites?**
A: Yes! Use the `url` property instead of `document`:
```yaml
menu:
  - title: "GitHub Repository"
    url: "https://github.com/example/repo"
```

**Q: How do I use global variables?**
A: Define them in `okidoki.yaml` and use in markdown:
```yaml
globals:
  version: "1.0.0"
  api_url: "https://api.example.com"
```
Then in markdown: `Current version: {{globals.version}}`

### Content Questions

**Q: How do I add syntax highlighting to code blocks?**
A: Specify the language after the opening backticks:
````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

**Q: Can I include HTML in my markdown?**
A: Yes, standard HTML tags work within markdown files.

**Q: How do I create tables?**
A: Use standard markdown table syntax:
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

**Q: How do I add badges to my documentation?**
A: Use the new badge syntax with three colons:
```markdown
:::badge-primary
My Badge Text
:::

# Or inline: Some text :::badge-success Active ::: more text
```

## Common Error Messages

### "Invalid YAML syntax"
**Error:** Configuration file has syntax errors
**Solutions:**
1. Validate your YAML using an online YAML validator
2. Check for proper indentation (use spaces, not tabs)
3. Ensure all strings with special characters are quoted

### "Document not found"
**Error:** Referenced markdown file doesn't exist
**Solutions:**
1. Check the file path in `sidebars.yaml`
2. Verify the file exists in the docs directory
3. Check for typos in filename or path

### "Permission denied"
**Error:** Can't write to output directory
**Solutions:**
1. Check directory permissions: `ls -la dist/`
2. Try running with elevated permissions
3. Change output directory in `okidoki.yaml`

### "Theme not found"
**Error:** Specified theme doesn't exist
**Solutions:**
1. Check available themes in the [reference documentation](reference.md#theme-configuration)
2. Verify spelling in `okidoki.yaml`
3. Use default themes: `fantasy` (light) or `forest` (dark)

### Sidebar badges showing "undefined"
**Error:** Badge text in sidebars.yaml shows as "undefined" in navigation
**Cause:** Using incorrect badge format (string instead of object)
**Solution:** Use the correct badge object format:

```yaml
# ❌ Incorrect (shows "undefined")
menu:
  - title: "Features"
    document: /features.md
    badge: "new"

# ✅ Correct format
menu:
  - title: "Features"
    document: /features.md
    badge:
      variant: "info"
      text: "new"
```

Available badge variants: `info`, `success`, `warning`, `error`, `neutral`

### Badge syntax not working
**Error:** `:::badge-primary My Badge :::` displays as raw text instead of a styled badge
**Solutions:**
1. Ensure you're using the correct badge syntax with three colons
2. Check that badges are supported in your version of OkiDoki
3. Try using inline badges: `:::badge-success Status: Active ::: within text`
4. Verify the badge type exists (primary, secondary, accent, info, success, warning, error)

## Performance Issues

### Slow Build Times
**Symptoms:** `okidoki generate` takes more than a few seconds

**Solutions:**
1. **Optimize images:** Compress large images or use web-optimized formats
2. **Reduce file count:** Organize content into fewer, larger files
3. **Clean output:** Delete and regenerate the `dist/` directory
4. **Check system resources:** Ensure sufficient RAM and disk space

### Large Generated Sites
**Symptoms:** `dist/` directory is unexpectedly large

**Solutions:**
1. **Compress images:** Use tools like `imageoptim` or online compressors
2. **Remove unnecessary files:** Clean up docs directory of unused assets
3. **Check duplicates:** Ensure no duplicate images or files

## Getting Support

### Before Asking for Help

1. **Check this help page** - Many common issues are covered here
2. **Review the error message** - Often contains helpful information
3. **Try the verbose flag** - Run `okidoki generate --verbose` (or `-v`) for detailed output
4. **Check file permissions** - Ensure OkiDoki can read/write necessary files

### Reporting Issues

When reporting a problem, please include:

1. **OkiDoki version:** `okidoki --version`
2. **Operating system:** (Windows, macOS, Linux)
3. **Node.js version:** `node --version`
4. **Error message:** Full error text
5. **Configuration files:** Your `okidoki.yaml` and `sidebars.yaml`
6. **Steps to reproduce:** What you did when the error occurred

### Community Resources

- **Documentation:** [Reference Guide](reference.md)
- **Examples:** [Markdown Examples](markdown-examples.md)
- **Getting Started:** [Quick Start Guide](start.md)

## Debug Mode

Enable verbose logging to troubleshoot build issues:

```bash
# Enable debug output (long form)
okidoki generate --verbose

# Enable debug output (short form)  
okidoki generate -v

# Alternative: set environment variable
DEBUG=okidoki okidoki generate
```

This will show:
- File processing steps
- Theme loading information
- Search index generation
- Asset copying details

## Version Information

Current OkiDoki version: **1.0.1**

### What's New in 1.0.1
- Improved error messages
- Better theme compatibility
- Faster build performance
- Enhanced search functionality

### Compatibility
- **Node.js:** Requires version 14 or higher
- **Browsers:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Operating Systems:** Windows, macOS, Linux

## Reset and Clean Installation

If you're experiencing persistent issues, try a clean installation:

```bash
# Uninstall OkiDoki
npm uninstall -g okidoki

# Clear npm cache
npm cache clean --force

# Reinstall OkiDoki
npm install -g okidoki

# Verify installation
okidoki --version
```

For project-specific issues:

```bash
# Remove generated files
rm -rf dist/

# Regenerate documentation
okidoki generate
```

---

**Still need help?** Check the [Quick Start Guide](start.md) or review the complete [Documentation Reference](reference.md). 