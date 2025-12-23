import React, { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import {
  Typography,
  Button,
  Chip,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Rating,
  IconButton,
} from "@material-tailwind/react";
import { products, getProductBySlug, Product } from '@/data/products';

interface ProductPageProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ product, relatedProducts }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <Layout 
      title={`${product.name} - Perfect Wrap`}
      description={product.shortDescription}
    >
      {/* Breadcrumb */}
      <div className="bg-champagne-50 py-4 border-b border-champagne-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-accent">
            <Link href="/" className="text-gray-500 hover:text-forest-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-forest-700">Shop</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/shop?category=${product.categorySlug}`} className="text-gray-500 hover:text-forest-700">
              {product.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-forest-800">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-champagne-50">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.originalPrice && (
                  <Chip
                    value={`${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF`}
                    className="absolute top-4 left-4 bg-blush-500 text-white font-accent"
                  />
                )}
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-champagne-500 shadow-md' 
                        : 'border-transparent hover:border-champagne-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {product.new && (
                  <Chip value="New Arrival" size="sm" className="bg-forest-600 text-white font-accent" />
                )}
                {product.bestseller && (
                  <Chip value="Bestseller" size="sm" className="bg-champagne-600 text-white font-accent" />
                )}
              </div>

              <Typography 
                variant="small" 
                className="font-accent text-champagne-600 uppercase tracking-widest mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {product.category}
              </Typography>

              <Typography 
                variant="h1" 
                className="font-display text-3xl md:text-4xl text-forest-900 mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {product.name}
              </Typography>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  <Rating 
                    value={Math.round(product.rating)} 
                    readonly 
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  />
                </div>
                <span className="font-accent text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <Typography 
                  variant="h3" 
                  className="font-display text-forest-800"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  ${product.price.toFixed(2)}
                </Typography>
                {product.originalPrice && (
                  <Typography 
                    className="text-xl text-gray-400 line-through font-body"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    ${product.originalPrice.toFixed(2)}
                  </Typography>
                )}
              </div>

              <Typography 
                className="font-body text-gray-600 leading-relaxed mb-8"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {product.description}
              </Typography>

              {/* Color Selection */}
              <div className="mb-6">
                <Typography 
                  variant="h6" 
                  className="font-accent text-sm text-forest-800 mb-3"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Color: <span className="font-normal">{selectedColor}</span>
                </Typography>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border text-sm font-accent transition-all ${
                        selectedColor === color
                          ? 'border-forest-600 bg-forest-50 text-forest-800'
                          : 'border-gray-200 text-gray-600 hover:border-champagne-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <Typography 
                  variant="h6" 
                  className="font-accent text-sm text-forest-800 mb-3"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Size: <span className="font-normal">{selectedSize}</span>
                </Typography>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border text-sm font-accent transition-all ${
                        selectedSize === size
                          ? 'border-forest-600 bg-forest-800 text-white'
                          : 'border-gray-200 text-gray-600 hover:border-champagne-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <IconButton
                    variant="text"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-forest-700"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </IconButton>
                  <span className="w-12 text-center font-accent">{quantity}</span>
                  <IconButton
                    variant="text"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-forest-700"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </IconButton>
                </div>
                <Button
                  size="lg"
                  className="flex-1 bg-forest-800 hover:bg-forest-900 font-accent tracking-widest"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <IconButton
                  variant="outlined"
                  size="lg"
                  className="border-gray-300 text-gray-600"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </IconButton>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 p-6 bg-champagne-50 rounded-xl">
                {[
                  { icon: '🚚', text: 'Free shipping over $50' },
                  { icon: '↩️', text: '30-day easy returns' },
                  { icon: '🌿', text: 'Eco-friendly packaging' },
                  { icon: '✨', text: 'Premium quality' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="font-accent text-sm text-forest-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-champagne-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Tabs value="details">
            <TabsHeader
              className="bg-white rounded-xl p-2"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <Tab 
                value="details" 
                className="font-accent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Details
              </Tab>
              <Tab 
                value="shipping" 
                className="font-accent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Shipping
              </Tab>
              <Tab 
                value="reviews" 
                className="font-accent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Reviews ({product.reviews})
              </Tab>
            </TabsHeader>
            <TabsBody
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <TabPanel value="details" className="py-8">
                <div className="max-w-3xl">
                  <Typography 
                    className="font-body text-gray-700 leading-relaxed mb-6"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {product.description}
                  </Typography>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg">
                      <Typography 
                        variant="h6" 
                        className="font-accent text-forest-800 mb-2"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Available Colors
                      </Typography>
                      <Typography 
                        className="font-body text-gray-600"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {product.colors.join(', ')}
                      </Typography>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <Typography 
                        variant="h6" 
                        className="font-accent text-forest-800 mb-2"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Available Sizes
                      </Typography>
                      <Typography 
                        className="font-body text-gray-600"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {product.sizes.join(', ')}
                      </Typography>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="shipping" className="py-8">
                <div className="max-w-3xl space-y-6">
                  <div>
                    <Typography 
                      variant="h6" 
                      className="font-accent text-forest-800 mb-2"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Delivery Options
                    </Typography>
                    <ul className="font-body text-gray-600 space-y-2">
                      <li>• Standard Shipping (5-7 business days): $5.99</li>
                      <li>• Express Shipping (2-3 business days): $12.99</li>
                      <li>• Next Day Delivery: $24.99</li>
                      <li>• FREE shipping on orders over $50</li>
                    </ul>
                  </div>
                  <div>
                    <Typography 
                      variant="h6" 
                      className="font-accent text-forest-800 mb-2"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Returns Policy
                    </Typography>
                    <Typography 
                      className="font-body text-gray-600"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      We offer a 30-day return policy for all unused items in their original packaging. 
                      Simply contact our customer service team to initiate a return.
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="reviews" className="py-8">
                <div className="max-w-3xl space-y-6">
                  {[
                    { name: 'Jessica L.', date: '2 weeks ago', rating: 5, comment: 'Absolutely beautiful! The quality exceeded my expectations. Perfect for wrapping wedding gifts.' },
                    { name: 'David M.', date: '1 month ago', rating: 5, comment: 'Fast shipping and the product looks even better in person. Will definitely order again.' },
                    { name: 'Amanda K.', date: '1 month ago', rating: 4, comment: 'Great quality and lovely colors. Only wish there were more size options available.' },
                  ].map((review, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-champagne-200 flex items-center justify-center">
                            <span className="font-display text-forest-800">{review.name[0]}</span>
                          </div>
                          <div>
                            <Typography 
                              variant="h6" 
                              className="font-accent text-forest-800"
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                            >
                              {review.name}
                            </Typography>
                            <span className="text-xs text-gray-500 font-accent">{review.date}</span>
                          </div>
                        </div>
                        <Rating 
                          value={review.rating} 
                          readonly 
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        />
                      </div>
                      <Typography 
                        className="font-body text-gray-600"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {review.comment}
                      </Typography>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Typography 
            variant="h2" 
            className="section-title mb-8"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            You May Also Like
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = getProductBySlug(params?.slug as string);
  
  if (!product) {
    return { notFound: true };
  }

  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  // If not enough related products from same category, add others
  if (relatedProducts.length < 4) {
    const additionalProducts = products
      .filter(p => p.id !== product.id && !relatedProducts.find(rp => rp.id === p.id))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additionalProducts);
  }

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};

export default ProductPage;

