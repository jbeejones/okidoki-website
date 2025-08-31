---
handlebars: true
---

# Markdown Examples

This page demonstrates various markdown formatting and documentation patterns you can use in your OkiDoki documentation.

## Headers

```markdown
# H1 - Main Title
## H2 - Section Title  
### H3 - Subsection
#### H4 - Sub-subsection
##### H5 - Minor Heading
###### H6 - Smallest Heading
```

**Result:**

# H1 - Main Title
## H2 - Section Title  
### H3 - Subsection
#### H4 - Sub-subsection
##### H5 - Minor Heading
###### H6 - Smallest Heading

## Text Formatting

```markdown
**Bold text** or __bold text__
*Italic text* or _italic text_
***Bold and italic*** or ___bold and italic___
~~Strikethrough text~~
`Inline code`
```

**Result:**
**Bold text**, *italic text*, ***bold and italic***, ~~strikethrough text~~, `inline code`

## Lists

### Unordered Lists
```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

**Result:**
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered Lists
```markdown
1. First step
2. Second step
   1. Nested step
   2. Another nested step
3. Third step
```

**Result:**
1. First step
2. Second step
   1. Nested step
   2. Another nested step
3. Third step

## Links and Images

```markdown
[Link text](https://example.com)

[Internal link](reference.md)

[Link with title](https://example.com "Example Website")

![Alt text](okidokilogo.svg)
```

**Result:**

[Link text](https://example.com)

[Internal link](reference.md)

[Link with title](https://example.com "Example Website")

![Alt text](okidokilogo.svg)

## Code Blocks

### JavaScript Example
````markdown
```javascript
function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}

// Usage
const cartItems = [
  { name: "Book", price: 12.99, quantity: 2 },
  { name: "Pen", price: 1.50, quantity: 5 }
];

console.log(`Total: $${calculateTotal(cartItems)}`);
```
````

**Result:**

```javascript
function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}

// Usage
const cartItems = [
  { name: "Book", price: 12.99, quantity: 2 },
  { name: "Pen", price: 1.50, quantity: 5 }
];

console.log(`Total: $${calculateTotal(cartItems)}`);
```

### Python Example  
````markdown
```python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib_seq = [0, 1]
    for i in range(2, n):
        fib_seq.append(fib_seq[i-1] + fib_seq[i-2])
    
    return fib_seq

# Generate first 10 Fibonacci numbers
print(fibonacci(10))
```
````

### YAML Configuration
````markdown
```yaml
site:
  title: "My API Documentation"
  description: "Complete API reference and guides"
  theme:
    light: "fantasy"
    dark: "forest"
  
globals:
  version: "2.1.0"
  api_base: "https://api.example.com/v1"
  
search:
  enabled: true
  placeholder: "Search API docs..."
```
````

### Shell Commands
````markdown
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build

# Run tests
npm test
```
````

## Tables

```markdown
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET    | `/users` | List all users | Yes |
| POST   | `/users` | Create new user | Yes |
| GET    | `/users/{id}` | Get user by ID | Yes |
| PUT    | `/users/{id}` | Update user | Yes |
| DELETE | `/users/{id}` | Delete user | Yes |
```

**Result:**
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET    | `/users` | List all users | Yes |
| POST   | `/users` | Create new user | Yes |
| GET    | `/users/{id}` | Get user by ID | Yes |
| PUT    | `/users/{id}` | Update user | Yes |
| DELETE | `/users/{id}` | Delete user | Yes |

## Blockquotes

```markdown
> This is a blockquote. It can be used for highlighting important information,
> quotes, or notes.

> **Tip:** You can also use blockquotes for tips and warnings.
```

**Result:**
> This is a blockquote. It can be used for highlighting important information,
> quotes, or notes.

> **Tip:** You can also use blockquotes for tips and warnings.

## Horizontal Rules

```markdown
---

***

___
```
**Result:**

---

## Global Variables

Use variables defined in your `okidoki.yaml`:

```yaml
# Okidoki Configuration
site:
  title: "My Docs"
  description: "Docs generated with Okidoki"
  theme:
    light: "fantasy"
    dark: "forest"

version: "1.0.1"
api_url: "https://api.example.com"
support_email: "support@example.com"
author: "**John Doe**"
author_url: "https://example.com"
author_image: "https://example.com/avatar.png"
author_bio: "John Doe is a good man"
author_twitter: "https://twitter.com/johndoe"
author_linkedin: "https://linkedin.com/in/johndoe"
```
Reference them in your markdown file:

```markdown
Current version: \{{version}}

API endpoint: \{{{api_url}}}

Support email: \{{{support_email}}}
```
:::tip
Use triple curly brackets to encode stuff `\{{{encoded_content}}}`.
:::

**Result**

Current version: {{version}}

API endpoint: {{{api_url}}}

Support email: {{{support_email}}}

## Important Messages & Callouts

OkiDoki provides **two ways** to create important message callouts for your documentation:

### 1. Markdown Admonitions

Use the `:::type` syntax for markdown-native callouts:

````markdown
:::info
This is an **informational** callout. Use it for neutral information.
:::

:::tip
This is a **tip** callout. Great for helpful suggestions and best practices.
:::

:::warning  
This is a **warning** callout. Use it to highlight potential issues.
:::

:::danger
This is a **danger** callout. Use it for critical warnings and errors.
:::

:::success
This is a **success** callout. Use it for positive confirmations.
:::

:::neutral
This is a **neutral** callout. Use it for information without emotional context.
:::
````

**Result:**
:::info
This is an **informational** callout. Use it for neutral information.
:::

:::tip
This is a **tip** callout. Great for helpful suggestions and best practices.
:::

:::warning  
This is a **warning** callout. Use it to highlight potential issues.
:::

:::danger
This is a **danger** callout. Use it for critical warnings and errors.
:::

:::success
This is a **success** callout. Use it for positive confirmations.
:::

:::neutral
This is a **neutral** callout. Use it for information without emotional context.
:::

### 2. Handlebars Alert Helper

Use the `\{{#alert}}` helper for dynamic alert content:

````markdown
\{{#alert}}
Default neutral alert using Handlebars helper
\{{/alert}}

\{{#alert "info"}}
Information alert with Handlebars syntax
\{{/alert}}

\{{#alert "warning"}}
Warning alert using the Handlebars helper
\{{/alert}}

\{{#alert "success"}}
Success message with Handlebars helper
\{{/alert}}
````

**Result:**
{{#alert}}
Default neutral alert using Handlebars helper
{{/alert}}

{{#alert "info"}}
Information alert with Handlebars syntax
{{/alert}}

{{#alert "warning"}}
Warning alert using the Handlebars helper
{{/alert}}

{{#alert "success"}}
Success message with Handlebars helper
{{/alert}}

### Available Alert States

- **info** - Blue, for general information
- **tip** - Light blue, for helpful advice  
- **warning** - Orange/yellow, for important warnings
- **danger** - Red, for critical alerts
- **success** - Green, for positive messages
- **neutral** - Gray, for neutral information without sentiment

### When to Use Each Approach

- **Markdown Admonitions** (`:::info`) - Perfect for static content and markdown-first workflows
- **Handlebars Alert Helper** (`\{{#alert}}`) - Great when you need dynamic content or integration with variables

### Complex Example with Code

````markdown
:::danger
❌ **Error**: Critical code detected!
```javascript
console.log('Be careful with this');
process.exit(1);
```

Please check your [code file](index.js) and ensure that your code is sanitized.
:::
````

**Result:**
:::danger
❌ **Error**: Critical code detected!
```javascript
console.log('Be careful with this');
process.exit(1);
```

Please check your [code file](index.js) and ensure that your code is sanitized.
:::

## Badges

Here are some examples of the new badge functionality:

### Basic Badges
````markdown
:::badge
Default Badge
:::
````

**Result:**
:::badge
Default Badge
:::

### Colored Badges  
````markdown
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
````

**Result:**
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


### Badges in Text
````markdown
You can use badges inline like this :::badge-success Status: Active ::: within your text content.
````

**Result:**
You can use badges inline like this :::badge-success Status: Active ::: within your text content.

### Practical Examples

#### API Documentation
````markdown
## Get User :::badge-primary GET :::
## Create User :::badge-success POST :::
## Update User :::badge-warning PUT :::
## Delete User :::badge-error DELETE :::
````

**Result:**
## Get User :::badge-primary GET :::
## Create User :::badge-success POST :::
## Update User :::badge-warning PUT :::
## Delete User :::badge-error DELETE :::

#### Version and Status Indicators
````markdown
# My Project :::badge-info v2.1.0 ::: :::badge-success Stable :::

Features:
- Authentication :::badge-success ✅ Complete :::
- Dashboard :::badge-warning 🚧 In Progress :::
- Analytics :::badge-outline 📋 Planned :::
- Mobile App :::badge-error ❌ Deprecated :::
````

**Result:**
# My Project :::badge-info v2.1.0 ::: :::badge-success Stable :::

Features:
- Authentication :::badge-success ✅ Complete :::
- Dashboard :::badge-warning 🚧 In Progress :::
- Analytics :::badge-outline 📋 Planned :::
- Mobile App :::badge-error ❌ Deprecated :::

## HTML in Markdown

You can also use HTML for more complex formatting:

```html
<div style="background: #f0f0f0; padding: 20px; border-radius: 8px;">
  <h4>Custom HTML Block</h4>
  <p>Sometimes you need more control over the formatting.</p>
  <ul>
    <li><strong>Bold item</strong></li>
    <li><em>Italic item</em></li>
  </ul>
</div>
```
**Result:**
<div style="background: #f0f0f0; padding: 20px; border-radius: 8px;">
  <h4>Custom HTML Block</h4>
  <p>Sometimes you need more control over the formatting.</p>
  <ul>
    <li><strong>Bold item</strong></li>
    <li><em>Italic item</em></li>
  </ul>
</div>


# Tabs Demo

This page demonstrates both the old Handlebars tabs syntax and the new markdown tabs syntax.

## New Markdown Tabs Syntax

You can now use pure markdown syntax for tabs:

<div>
<pre>
&#58;&#58;&#58;tabs
&#58;&#58;&#58;tab JavaScript
```javascript
const message = "Hello from JavaScript!";
console.log(message);
// more code here
```
&#58;&#58;&#58;
&#58;&#58;&#58;tab Python
```python
def main():
# more code here
```
&#58;&#58;&#58;
&#58;&#58;&#58;
</pre>
</div>

**Result:**

:::tabs
:::tab JavaScript
```javascript
const message = "Hello from JavaScript!";
console.log(message);

// Fetch data from API
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data));
```
:::
:::tab Python
```python
def main():
    message = "Hello from Python!"
    print(message)

    # Fetch data from API
    import requests
    try:
        response = requests.get('/api/users')
        data = response.json()
        print(data)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
```
:::
:::tab cURL
```bash
# Get users from API
curl -X GET \
  'https://api.example.com/users' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer your-token'
```
:::
:::


## Another Example with Mixed Content

:::tabs
:::tab Overview
Here's some regular markdown content in a tab.

- Feature A: Does something cool
- Feature B: Does something else
- Feature C: Does something amazing

> **Note**: This tab contains mixed content - not just code!
:::
:::tab TypeScript
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  async getUser(id: number): Promise<User> {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
  }
}
```
:::
:::tab Configuration
```yaml
# config.yml
api:
  baseUrl: "https://api.example.com"
  timeout: 30000
  retries: 3

features:
  enableCache: true
  enableLogging: true
  enableMetrics: false
```
:::
:::

## Tabs with Handlebars Syntax

````
\{{#tabs}}
  \{{#tab title="JavaScript"}}
    ```js
    const oldWay = "This still works!";
    console.log(oldWay);
    ```
  \{{/tab}}
  \{{#tab title="Python"}}
    ```python
    old_way = "This still works!"
    print(old_way)
    ```
  \{{/tab}}
\{{/tabs}}
````

**Result:**

{{#tabs}}
  {{#tab title="JavaScript"}}
    ```js
    const oldWay = "This still works!";
    console.log(oldWay);
    ```
  {{/tab}}
  {{#tab title="Python"}}
    ```python
    old_way = "This still works!"
    print(old_way)
    ```
  {{/tab}}
{{/tabs}}

## Best Practices

1. **Use descriptive headers** - Make it easy to scan and navigate
2. **Include code examples** - Show, don't just tell
3. **Add context** - Explain when and why to use something
4. **Keep it updated** - Outdated documentation is worse than no documentation
5. **Link related content** - Help users discover relevant information



This comprehensive example should give you a solid foundation for creating rich, well-formatted documentation with OkiDoki! 