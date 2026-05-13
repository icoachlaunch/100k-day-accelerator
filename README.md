# Members Portal Dashboard

A clean, customizable members portal for organizing guides, AI prompts, frameworks, and training resources.

## Structure

```
dashboard/
├── index.html      # Main page — all sections and cards
├── styles.css      # Full design system (colors, layout, cards, etc.)
└── README.md
```

## How to Customize

### 1. Branding
- Open `index.html` and replace **"Your Brand"** in the header with your name/logo
- Update the footer copyright text
- In `styles.css`, change `--accent: #4f46e5` to your brand color

### 2. Sections & Cards
Each card follows this pattern — just copy/paste and fill in your content:

```html
<div class="card" data-tags="keyword1 keyword2">
  <div class="card-label">Section Label</div>
  <h3 class="card-title">Card Title</h3>
  <p class="card-desc">Description text here.</p>
  <div class="card-links">
    <a href="your-link.html" class="link-btn">Guide</a>
    <a href="your-prompt.txt" class="link-btn">AI Prompt</a>
  </div>
</div>
```

### 3. Navigation Pills
Update the pill links in the `<nav class="pill-nav">` block to match your section IDs:

```html
<a href="#your-section-id" class="pill">Label</a>
```

### 4. Coming Soon Cards
Add `card--coming-soon` class and disable links:

```html
<div class="card card--coming-soon">
  <div class="card-label">Label <span class="badge-coming-soon">Coming Soon</span></div>
  ...
  <span class="link-btn link-btn--disabled">Guide</span>
</div>
```

## Deploying

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
Push to GitHub, then go to **Settings → Pages → Deploy from branch → main / root**.

### Netlify
Drag the `dashboard/` folder into [app.netlify.com/drop](https://app.netlify.com/drop).

## Search
The search bar filters cards live by title, description, label, and `data-tags`. Add relevant keywords to each card's `data-tags` attribute to improve search results.
