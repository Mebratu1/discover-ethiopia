# 🇪🇹 Discover Ethiopia

> **Land of Origins, Culture, and Natural Wonders**

A premium, cinematic tourism website for Ethiopia — built with React, Vite, and Tailwind CSS.

---

## ✨ Features

- 🎬 **Cinematic Hero** — Fullscreen video background with animated title and gold stats strip
- 🗺️ **Interactive Map** — Clickable SVG Ethiopia map with 4 travel circuits (North, South, Afar, Tigray)
- 🏔️ **Destinations Grid** — 8 iconic destinations with category filters and hover effects
- 🖼️ **Gallery** — Masonry photo grid with lightbox viewer and category filtering
- 📖 **Travel Guide** — Best time, visa info, transport options, and 3 expandable itineraries (7/10/14 days)
- 📬 **Contact Form** — Full trip inquiry form with interest selector
- 📱 **Mobile-first** — Fully responsive with animated mobile navigation

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧱 Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool |
| [Tailwind CSS 3](https://tailwindcss.com) | Styling |
| [Lucide React](https://lucide.dev) | Icons |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky glass navbar with mobile menu
│   ├── Hero.jsx           # Cinematic fullscreen hero
│   ├── Introduction.jsx   # Storytelling + culture facts
│   ├── Destinations.jsx   # Filtered destination grid
│   ├── DestinationCard.jsx
│   ├── InteractiveMap.jsx # SVG map with route selection
│   ├── Gallery.jsx        # Masonry gallery + lightbox
│   ├── TravelGuide.jsx    # Visa, transport, itineraries
│   ├── CTASection.jsx     # Email signup CTA
│   ├── Contact.jsx        # Trip inquiry form
│   └── Footer.jsx
├── data/
│   └── destinations.js    # All destination, gallery & itinerary data
├── hooks/
│   └── useScrollReveal.js # Intersection Observer scroll animations
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🌍 Deployment

Deploy instantly by dragging the `dist/` folder (after `npm run build`) to:
- [Netlify Drop](https://app.netlify.com/drop)
- [Vercel](https://vercel.com)
- Any static hosting provider

---

## 📄 License

© 2026 Discover Ethiopia. All rights reserved.
