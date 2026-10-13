# Animated Footer Template

A modern, responsive footer component built with React, Tailwind CSS, and Framer Motion. Designed with subtle entrance animations, interactive social links, a global presence section, and an oversized gradient brand watermark.

**[Live Demo](https://animated-footer-template-qjsfwx9kp.vercel.app/)** · **[GitHub Repository](https://github.com/Tooba-Saleem22/animated-footer-template)**

---

## Overview

Animated Footer Template is a reusable frontend component designed to bring a polished, modern finish to websites. It combines a structured navigation layout with motion effects, responsive styling, and customizable brand elements.

The project focuses on clean component organization, responsive behavior, and subtle interactions that enhance the experience without overwhelming the interface.

## Features

- **Responsive Layout** — Adapts to mobile, tablet, and desktop screen sizes.
- **Motion Effects** — Viewport-triggered entrance animations powered by Framer Motion.
- **Gradient Brand Watermark** — Oversized typography with a subtle gradient fade.
- **Social Media Integration** — Icon links with hover transitions and accessible labels.
- **Global Presence Section** — Country flags and location information in a responsive grid.
- **Configurable Content** — Customize branding, social links, locations, and navigation sections.
- **Reduced-Motion Support** — Respects the user's reduced-motion preference for animations.
- **Reusable Components** — Separates key footer elements into maintainable React components.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI development |
| Vite | Development server and production build tooling |
| Tailwind CSS | Responsive utility-first styling |
| Framer Motion | Declarative animations and viewport transitions |
| React Icons | Social media icon components |

## Getting Started

### Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tooba-Saleem22/animated-footer-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd animated-footer-template
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided in the terminal.

## Project Structure

```text
animated-footer-template/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

*Note: The structure above is illustrative. Refer to the repository for the actual file and directory names.*

## Customization

The footer's primary configuration is defined in `src/components/Footer.jsx`.

### Branding

Update `BRAND_NAME` to change the displayed brand name and watermark. Update `LOGO_URL` to reference your own logo asset.

### Social Links

Edit `SOCIAL_LINKS` to configure the social platforms, URLs, and icons. Replace placeholder `#` links before using the component on a production website.

### Navigation

Modify `FOOTER_COLUMNS` to define your own navigation headings and links.

### Global Presence

Update the `COUNTRIES` array with your preferred locations and address information.

### Styling and Animation

Adjust the Tailwind CSS classes to change the layout, typography, spacing, colors, and responsive behavior. Modify the Framer Motion properties to customize animation timing and transitions.

## Production Build

To generate an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

Vite generates the production output in the `dist/` directory by default.

## Deployment

The project is deployed on Vercel.

**Live application:** [animated-footer-template-qjsfwx9kp.vercel.app](https://animated-footer-template-qjsfwx9kp.vercel.app/)

To deploy your own version, import the repository into Vercel and use the default Vite build settings unless your project configuration requires otherwise.

## Potential Use Cases

This component can be adapted for:

- SaaS and startup websites
- Digital agencies and business websites
- Personal portfolios
- Product landing pages
- Creative and corporate websites

## Author

**Tooba Saleem**

- **Portfolio:** [toobasaleem.vercel.app](https://toobasaleem.vercel.app/)
- **GitHub:** [Tooba-Saleem22](https://github.com/Tooba-Saleem22)
- **LinkedIn:** [Tooba Saleem](https://www.linkedin.com/in/tooba-saleem-51491931a/)

---

If you find this project useful, consider giving the repository a star.

