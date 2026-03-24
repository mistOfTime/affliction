# Affliction Store — Fan-Made Template

> **DISCLAIMER:** This project is an **unofficial, non-commercial fan-made template** inspired by the visual style of [Affliction Clothing](https://www.afflictionclothing.com). It is built for **educational and portfolio purposes only**.

---

## Legal Notice

- This project is **not affiliated with, endorsed by, or connected to Affliction Clothing** in any way.
- All product names, brand names, and trademarks referenced belong to their respective owners.
- Product images displayed are sourced from Affliction's publicly accessible CDN and are used solely to demonstrate a realistic UI template. **No commercial use is intended.**
- This template does **not** process real payments, collect real user data, or sell any products.
- If you fork or reuse this template, **remove all Affliction branding, product names, and CDN images** before any public or commercial deployment.

---

## What This Is

A front-end e-commerce UI template built with:

- **Vue 3** (Composition API)
- **Vite**
- **Pinia** (cart state)
- **Vue Router**

Features include:

- Product collection with category filtering and search
- Product detail page with size selection
- Shopping cart with quantity management
- 2-step checkout flow (delivery → payment)
- Fully responsive navbar with mobile hamburger menu

---

## Getting Started

```bash
cd affliction-store
npm install
npm run dev
```

---

## Project Structure

```
src/
├── components/
│   ├── AppHeader.vue      # Sticky responsive navbar
│   └── ProductCard.vue    # Product grid card
├── views/
│   ├── Home.vue           # Hero + featured + categories
│   ├── Collection.vue     # Filterable product grid
│   ├── ProductDetail.vue  # Single product page
│   ├── CartView.vue       # Cart page
│   └── Checkout.vue       # 2-step checkout
├── stores/
│   └── cart.js            # Pinia cart store
├── data/
│   └── products.js        # Product data
└── router/
    └── index.js           # Vue Router config
```

---

## Usage & Redistribution

You are free to use this as a **personal learning project or portfolio piece** under the following conditions:

1. Do not deploy it publicly with Affliction branding intact.
2. Do not use it for any commercial purpose.
3. Replace all product images and brand references before any public release.
4. Credit this repo if you share a derivative.

---


