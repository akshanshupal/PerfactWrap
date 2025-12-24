# Perfect Wrap - Premium Gift Packaging E-commerce

A beautiful e-commerce website for Perfect Wrap, a premium gift packaging brand built with Next.js (Page Router) and Material Tailwind.

![Perfect Wrap](https://picsum.photos/seed/perfectwrap/1200/600)

## Features

- 🎁 **Beautiful Home Page** - Hero section, featured products, categories, testimonials
- 🛍️ **Shop Page** - Product grid with filtering and sorting
- 📦 **Product Detail Page** - Full product info with image gallery, reviews, and related products
- 🛒 **Shopping Cart** - Add/remove items, quantity controls, promo codes
- 💳 **Checkout** - Multi-step checkout process with shipping and payment
- 📖 **About Page** - Company story, values, team
- 📞 **Contact Page** - Contact form and FAQ

## Tech Stack

- **Framework**: Next.js 14 (Page Router)
- **Styling**: Tailwind CSS
- **UI Components**: Material Tailwind
- **Language**: TypeScript
- **Images**: Picsum Photos (dummy images)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Layout.tsx       # Page layout wrapper
│   └── ProductCard.tsx  # Product card component
├── data/
│   └── products.ts      # Static product data
├── pages/               # Next.js pages (Page Router)
│   ├── _app.tsx         # App wrapper
│   ├── _document.tsx    # Document configuration
│   ├── index.tsx        # Home page
│   ├── shop.tsx         # Shop/products page
│   ├── about.tsx        # About page
│   ├── contact.tsx      # Contact page
│   ├── cart.tsx         # Shopping cart
│   ├── checkout.tsx     # Checkout process
│   └── product/
│       └── [slug].tsx   # Dynamic product detail page
└── styles/
    └── globals.css      # Global styles and Tailwind
```

## Color Palette

- **Champagne** - Primary gold/tan color (#cfa152)
- **Forest** - Deep green (#547654)
- **Blush** - Soft pink for accents (#e15d5d)
- **Ivory/Cream** - Background colors

## Fonts

- **Playfair Display** - Display/heading font
- **Cormorant Garamond** - Body text
- **Raleway** - Accent/UI text

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Customization

### Adding Products

Edit `src/data/products.ts` to add or modify products:

```typescript
{
  id: 1,
  name: "Product Name",
  slug: "product-name",
  price: 24.99,
  description: "Product description...",
  category: "Category Name",
  categorySlug: "category-slug",
  images: ["image-url-1", "image-url-2"],
  colors: ["Color 1", "Color 2"],
  sizes: ["Size 1", "Size 2"],
  rating: 4.8,
  reviews: 124,
  inStock: true,
  featured: true,
  bestseller: false,
  new: false
}
```

### Updating Colors

Modify `tailwind.config.js` to change the color palette.

## License

MIT License - Feel free to use for your projects!

---

Made with ❤️ for Perfect Wrap

