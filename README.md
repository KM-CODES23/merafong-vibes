# Merafong Vibes

A modern, responsive marketing website for a music streaming brand called Merafong Streams. This project is built with React, Vite, TypeScript, Tailwind CSS, and shadcn-style UI components.

It presents the product as a premium streaming platform with a hero section, music discovery features, pricing plans, testimonials, and app download calls to action.

## Live Demo

- Website: https://merafong-streams.base44.app
- Repository: https://github.com/KM-CODES23/merafong-vibes

## Overview

Merafong Vibes is a sleek landing page designed to showcase a music streaming experience. The website highlights:

- unlimited music streaming
- curated playlists and smart recommendations
- offline listening and downloads
- artist and fan engagement features
- pricing plans for different user types
- app download and sign-up calls to action

The site is built to feel premium and mobile-friendly, with motion effects, dark theme styling, and glassmorphism-inspired UI cards.

## Website Sections

The homepage includes the following sections:

- Hero section with headline and CTAs
- Live Music Embed or preview area
- Feature highlights
- How-it-works section
- Customer testimonials
- Pricing plans
- App download section
- Footer with links and social media icons

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- React Router
- Lucide React

## Project Structure

```bash
merafong-vibes/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── LiveEmbed.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── Download.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── components.json
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── README.md
└── ...
```

## Features

### Product Showcase
- Strong visual branding for a music streaming service
- Premium dark theme with green accent colors
- Interactive animated UI elements

### User Experience
- Responsive design for mobile, tablet, and desktop
- Clear call-to-action buttons for listening and downloading
- Smooth transitions and scroll-based motion effects

### Business/Marketing Features
- Value proposition and feature list
- Pricing cards with plan comparison
- User testimonials to build trust
- Download and QR-code CTA for app installation

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm or bun

### Install dependencies

```bash
npm install
```

or

```bash
bun install
```

### Run locally

```bash
npm run dev
```

The app should open in the browser on a local Vite development server, usually at:

```bash
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start the development server
npm run build    # build the production app
npm run preview  # preview the production build
npm run lint     # run ESLint checks
```

## Styling and Design System

The project uses a custom design system defined in `src/index.css`, including:

- dark background theme
- green primary branding
- card and glass styling
- smooth transitions and glow effects

This helps maintain a consistent premium look across all sections of the site.

## Notes

This repository is focused on the frontend marketing website rather than a backend service or database. It is designed as a polished product landing page for a streaming app concept.

## Contribution

If you want to improve the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Open a pull request

## License

This project is currently unlicensed unless otherwise specified. If you plan to publish or share it publicly, adding a license is recommended.

## Contact

For questions or collaboration, contact the repository owner or visit the project page on GitHub.
