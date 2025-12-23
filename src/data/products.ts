export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: string;
  categorySlug: string;
  images: string[];
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  bestseller: boolean;
  new: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Velvet Ribbon Gift Box",
    slug: "velvet-ribbon-gift-box",
    price: 24.99,
    originalPrice: 34.99,
    description: "Elevate your gift-giving with our luxurious Velvet Ribbon Gift Box. Crafted from premium materials, this box features a soft velvet exterior and a satin ribbon closure. Perfect for jewelry, small accessories, or any precious keepsake. The magnetic closure ensures your gift stays secure while adding an element of surprise.",
    shortDescription: "Premium velvet exterior with satin ribbon closure",
    category: "Gift Boxes",
    categorySlug: "gift-boxes",
    images: [
      "https://picsum.photos/seed/giftbox1/600/600",
      "https://picsum.photos/seed/giftbox1b/600/600",
      "https://picsum.photos/seed/giftbox1c/600/600"
    ],
    colors: ["Burgundy", "Navy", "Forest Green", "Champagne"],
    sizes: ["Small (4x4x2)", "Medium (6x6x3)", "Large (8x8x4)"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 2,
    name: "Artisan Kraft Paper Set",
    slug: "artisan-kraft-paper-set",
    price: 18.99,
    description: "Our Artisan Kraft Paper Set brings rustic elegance to every present. This eco-friendly option includes 12 sheets of premium kraft paper, twine, and dried flower embellishments. Perfect for those who appreciate sustainable luxury.",
    shortDescription: "Eco-friendly kraft paper with natural embellishments",
    category: "Wrapping Paper",
    categorySlug: "wrapping-paper",
    images: [
      "https://picsum.photos/seed/kraft1/600/600",
      "https://picsum.photos/seed/kraft1b/600/600",
      "https://picsum.photos/seed/kraft1c/600/600"
    ],
    colors: ["Natural Brown", "Sage Green", "Dusty Rose"],
    sizes: ["Standard (20x30)", "Large (30x40)"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 3,
    name: "Silk Ribbon Collection",
    slug: "silk-ribbon-collection",
    price: 32.99,
    description: "Indulge in the opulence of our Silk Ribbon Collection. This curated set features five premium silk ribbons in complementary colors. Each ribbon is double-sided and holds its shape beautifully for perfect bows every time.",
    shortDescription: "Five premium double-sided silk ribbons",
    category: "Ribbons & Bows",
    categorySlug: "ribbons-bows",
    images: [
      "https://picsum.photos/seed/ribbon1/600/600",
      "https://picsum.photos/seed/ribbon1b/600/600",
      "https://picsum.photos/seed/ribbon1c/600/600"
    ],
    colors: ["Blush Pink", "Ivory", "Gold", "Silver", "Rose Gold"],
    sizes: ["1 inch width", "2 inch width"],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    featured: true,
    bestseller: true,
    new: false
  },
  {
    id: 4,
    name: "Premium Gift Bag Bundle",
    slug: "premium-gift-bag-bundle",
    price: 28.99,
    originalPrice: 39.99,
    description: "Make gift-giving effortless with our Premium Gift Bag Bundle. This set includes 10 bags in assorted sizes, each featuring our signature embossed pattern. Complete with matching tissue paper and gift tags.",
    shortDescription: "10 embossed bags with tissue paper and tags",
    category: "Gift Bags",
    categorySlug: "gift-bags",
    images: [
      "https://picsum.photos/seed/bag1/600/600",
      "https://picsum.photos/seed/bag1b/600/600",
      "https://picsum.photos/seed/bag1c/600/600"
    ],
    colors: ["Classic Black", "Pearl White", "Champagne Gold"],
    sizes: ["Small", "Medium", "Large", "Extra Large"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 5,
    name: "Botanical Tissue Paper",
    slug: "botanical-tissue-paper",
    price: 12.99,
    description: "Add a touch of nature to your gifts with our Botanical Tissue Paper. Each sheet features delicate floral prints inspired by vintage botanical illustrations. Made from recycled materials.",
    shortDescription: "Vintage botanical prints on recycled tissue",
    category: "Tissue Paper",
    categorySlug: "tissue-paper",
    images: [
      "https://picsum.photos/seed/tissue1/600/600",
      "https://picsum.photos/seed/tissue1b/600/600",
      "https://picsum.photos/seed/tissue1c/600/600"
    ],
    colors: ["Garden Rose", "Eucalyptus", "Lavender Fields"],
    sizes: ["Standard (20x26)"],
    rating: 4.5,
    reviews: 78,
    inStock: true,
    featured: false,
    bestseller: false,
    new: true
  },
  {
    id: 6,
    name: "Luxury Hamper Basket",
    slug: "luxury-hamper-basket",
    price: 45.99,
    description: "Our Luxury Hamper Basket is perfect for creating stunning gift presentations. Hand-woven from natural willow, each basket includes a decorative liner, shredded paper filler, and clear cellophane wrap with coordinating bow.",
    shortDescription: "Hand-woven willow basket with complete styling kit",
    category: "Gift Boxes",
    categorySlug: "gift-boxes",
    images: [
      "https://picsum.photos/seed/hamper1/600/600",
      "https://picsum.photos/seed/hamper1b/600/600",
      "https://picsum.photos/seed/hamper1c/600/600"
    ],
    colors: ["Natural", "White Wash", "Grey Wash"],
    sizes: ["Small", "Medium", "Large"],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    featured: true,
    bestseller: false,
    new: false
  },
  {
    id: 7,
    name: "Metallic Foil Paper Roll",
    slug: "metallic-foil-paper-roll",
    price: 22.99,
    description: "Make your gifts shine with our Metallic Foil Paper Roll. This stunning paper features a high-gloss finish that catches the light beautifully. Includes 25 feet of premium foil paper on an easy-cut roll.",
    shortDescription: "High-gloss metallic finish, 25 feet per roll",
    category: "Wrapping Paper",
    categorySlug: "wrapping-paper",
    images: [
      "https://picsum.photos/seed/foil1/600/600",
      "https://picsum.photos/seed/foil1b/600/600",
      "https://picsum.photos/seed/foil1c/600/600"
    ],
    colors: ["Gold", "Silver", "Rose Gold", "Copper"],
    sizes: ["Standard Roll (25 ft)"],
    rating: 4.7,
    reviews: 112,
    inStock: true,
    featured: false,
    bestseller: true,
    new: false
  },
  {
    id: 8,
    name: "Wax Seal Kit",
    slug: "wax-seal-kit",
    price: 29.99,
    description: "Add an old-world charm to your packages with our Wax Seal Kit. This complete set includes a brass stamp, sealing wax in three colors, a melting spoon, and a tealight holder. Create professional-looking seals for gifts, invitations, and more.",
    shortDescription: "Complete kit with stamp, wax, and tools",
    category: "Accessories",
    categorySlug: "accessories",
    images: [
      "https://picsum.photos/seed/wax1/600/600",
      "https://picsum.photos/seed/wax1b/600/600",
      "https://picsum.photos/seed/wax1c/600/600"
    ],
    colors: ["Classic Red", "Champagne", "Forest Green"],
    sizes: ["One Size"],
    rating: 4.8,
    reviews: 94,
    inStock: true,
    featured: true,
    bestseller: false,
    new: true
  },
  {
    id: 9,
    name: "Satin Bow Pre-Made Set",
    slug: "satin-bow-pre-made-set",
    price: 15.99,
    description: "Save time without sacrificing elegance with our Satin Bow Pre-Made Set. Each bow is hand-tied by artisans and features a peel-and-stick backing for easy application. Set includes 12 bows in assorted sizes.",
    shortDescription: "12 hand-tied bows with peel-and-stick backing",
    category: "Ribbons & Bows",
    categorySlug: "ribbons-bows",
    images: [
      "https://picsum.photos/seed/bow1/600/600",
      "https://picsum.photos/seed/bow1b/600/600",
      "https://picsum.photos/seed/bow1c/600/600"
    ],
    colors: ["Red", "White", "Gold", "Silver"],
    sizes: ["2 inch", "3 inch", "4 inch"],
    rating: 4.4,
    reviews: 187,
    inStock: true,
    featured: false,
    bestseller: false,
    new: false
  },
  {
    id: 10,
    name: "Marble Print Gift Wrap",
    slug: "marble-print-gift-wrap",
    price: 19.99,
    description: "Sophistication meets style with our Marble Print Gift Wrap. Each sheet features a unique marbled pattern, ensuring no two gifts look alike. Premium weight paper holds creases perfectly.",
    shortDescription: "Unique marbled patterns on premium weight paper",
    category: "Wrapping Paper",
    categorySlug: "wrapping-paper",
    images: [
      "https://picsum.photos/seed/marble1/600/600",
      "https://picsum.photos/seed/marble1b/600/600",
      "https://picsum.photos/seed/marble1c/600/600"
    ],
    colors: ["White & Gold", "Black & Silver", "Blush & Rose Gold"],
    sizes: ["Standard (20x30)", "Large (30x40)"],
    rating: 4.6,
    reviews: 143,
    inStock: true,
    featured: true,
    bestseller: false,
    new: false
  },
  {
    id: 11,
    name: "Decorative Gift Tags Set",
    slug: "decorative-gift-tags-set",
    price: 9.99,
    description: "Complete your gift with our Decorative Gift Tags Set. This collection includes 24 premium tags in various designs, each with gold-foil accents and satin ribbon ties. Perfect for any occasion.",
    shortDescription: "24 premium tags with gold-foil accents",
    category: "Accessories",
    categorySlug: "accessories",
    images: [
      "https://picsum.photos/seed/tags1/600/600",
      "https://picsum.photos/seed/tags1b/600/600",
      "https://picsum.photos/seed/tags1c/600/600"
    ],
    colors: ["Assorted Classic", "Assorted Modern", "Assorted Botanical"],
    sizes: ["Standard"],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    featured: false,
    bestseller: false,
    new: false
  },
  {
    id: 12,
    name: "Wine Bottle Gift Box",
    slug: "wine-bottle-gift-box",
    price: 16.99,
    description: "Present wine in style with our Wine Bottle Gift Box. Features a magnetic closure, velvet interior, and ribbon handle. Fits standard wine and champagne bottles.",
    shortDescription: "Magnetic closure with velvet interior",
    category: "Gift Boxes",
    categorySlug: "gift-boxes",
    images: [
      "https://picsum.photos/seed/wine1/600/600",
      "https://picsum.photos/seed/wine1b/600/600",
      "https://picsum.photos/seed/wine1c/600/600"
    ],
    colors: ["Black", "Burgundy", "Navy"],
    sizes: ["Single Bottle", "Double Bottle"],
    rating: 4.7,
    reviews: 76,
    inStock: true,
    featured: false,
    bestseller: true,
    new: false
  }
];

export const categories = [
  {
    name: "Gift Boxes",
    slug: "gift-boxes",
    description: "Premium boxes for elegant presentations",
    image: "https://picsum.photos/seed/catbox/400/400",
    count: 3
  },
  {
    name: "Wrapping Paper",
    slug: "wrapping-paper",
    description: "Beautiful papers for every occasion",
    image: "https://picsum.photos/seed/catwrap/400/400",
    count: 3
  },
  {
    name: "Ribbons & Bows",
    slug: "ribbons-bows",
    description: "The perfect finishing touch",
    image: "https://picsum.photos/seed/catribbon/400/400",
    count: 2
  },
  {
    name: "Gift Bags",
    slug: "gift-bags",
    description: "Quick and stylish gift solutions",
    image: "https://picsum.photos/seed/catbag/400/400",
    count: 1
  },
  {
    name: "Tissue Paper",
    slug: "tissue-paper",
    description: "Soft cushioning with style",
    image: "https://picsum.photos/seed/cattissue/400/400",
    count: 1
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Tags, seals, and more",
    image: "https://picsum.photos/seed/catacc/400/400",
    count: 2
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getBestsellers = (): Product[] => {
  return products.filter(p => p.bestseller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.new);
};

