# Dulce Origen — Maternity & Motherhood Website

A modern, elegant web application for maternity, birth, and postpartum services. Built with Vite, React, and TypeScript.

## Tech Stack

- **Vite** — build tool and dev server
- **React 18** — UI library
- **TypeScript** — type safety
- **React Router DOM** — client-side routing
- **CSS Modules** — component-scoped styles (no external CSS framework)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or copy the project files, then install dependencies
npm install

# Install React Router (required)
npm install react-router-dom
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── main.tsx                  # App entry point
├── App.tsx                   # Router setup and layout shell
│
├── styles/
│   └── globals.css           # CSS variables, resets, utility classes, animations
│
├── components/
│   ├── Navbar.tsx            # Fixed navigation bar with scroll effect and mobile menu
│   ├── Navbar.css
│   ├── Footer.tsx            # Site footer with links and contact info
│   └── Footer.css
│
└── pages/
    ├── Home.tsx              # Landing page
    ├── Home.css
    ├── Servicios.tsx         # Services catalog grouped by stage
    ├── Servicios.css
    ├── Maternidad.tsx        # Maternity & parenting guide + resources
    ├── Maternidad.css
    ├── Contacto.tsx          # Contact form with validation and success state
    └── Contacto.css
```

---

## Pages

### `/` — Home
Hero section with animated background orbs and floating stat badges, service highlights grid, about section, testimonials, and a final call to action.

### `/servicios` — Services
Full service catalog organized into three groups: **Pregnancy**, **Birth**, and **Postpartum**. Each card shows a description, duration, and indicative price.

### `/maternidad` — Maternity & Parenting
A content-rich guide covering four key stages: the fourth trimester, breastfeeding, attachment parenting, and maternal wellbeing. Includes a resources section and an inspirational quote banner.

### `/contacto` — Contact
A two-column layout with contact details on the left and a form on the right. Fields include name, email, phone, current stage (dropdown), and message. Features a loading state on submit and an animated success screen.

---

## Design System

All design tokens are defined as CSS custom properties in `globals.css`:

```css
--cream, --warm-white          /* backgrounds */
--blush, --rose, --rose-dark   /* primary accent (terracotta pink) */
--sage, --sage-light, --sage-dark /* secondary accent (sage green) */
--sand                         /* borders and dividers */
--text-dark, --text-mid, --text-light /* typography scale */
```

**Typography:**
- Display / headings: `Cormorant Garamond` (Google Fonts) — elegant serif
- Body / UI: `DM Sans` (Google Fonts) — clean and readable

**Reusable utility classes:** `.btn-primary`, `.btn-outline`, `.section-tag`, `.animate-fadeup`, `.animate-fadein`

---

## Customization

### Replacing placeholder images
All image areas use styled `div` placeholders with emoji labels. Replace them with real `<img>` tags or a CSS `background-image`:

```tsx
// Before (placeholder)
<div className="hero__image-placeholder">...</div>

// After (real image)
<img src="/images/hero.jpg" alt="Mother and baby" className="hero__image" />
```

### Updating content
Page content (service descriptions, testimonials, tips, etc.) is defined as plain arrays at the top of each page file, making it easy to edit without touching the JSX.

### Connecting the contact form
The form currently simulates a submission with a 1.5s delay. To wire it to a real backend or email service, replace the `handleSubmit` function in `Contacto.tsx`:

```ts
const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault()
  setStatus('sending')
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })
  setStatus('success')
}
```

---

## Deployment

The project produces a standard static build (`dist/`) that can be deployed to any static host:

- **Vercel** — `vercel deploy`
- **Netlify** — drag and drop the `dist/` folder
- **GitHub Pages** — use the `gh-pages` package

> If deploying to a subdirectory, set the `base` option in `vite.config.ts`:
> ```ts
> export default defineConfig({ base: '/your-subdirectory/' })
> ```

---

## License

This project is provided as a starting template. Replace branding, content, and contact details before publishing.
