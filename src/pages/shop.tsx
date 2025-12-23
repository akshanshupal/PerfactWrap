import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import {
  Typography,
  Button,
  Select,
  Option,
  Checkbox,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Chip,
} from "@material-tailwind/react";
import { products, categories } from '@/data/products';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [openAccordion, setOpenAccordion] = useState<number>(1);
  const [showFilters, setShowFilters] = useState(false);

  const handleOpenAccordion = (value: number) => {
    setOpenAccordion(openAccordion === value ? 0 : value);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory);
    }
    
    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = result.filter(p => p.new).concat(result.filter(p => !p.new));
        break;
      default:
        result = result.filter(p => p.featured).concat(result.filter(p => !p.featured));
    }
    
    return result;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <Layout 
      title="Shop - Perfect Wrap"
      description="Browse our complete collection of premium gift packaging supplies."
    >
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/shopbanner/1920/600"
            alt="Gift packaging collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-rose-900/80 to-coral-900/90" />
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-rose-400 blur-3xl opacity-30 animate-float" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-violet-400 blur-3xl opacity-20 animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gold-400 blur-3xl opacity-20 animate-float-fast" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-1/4 w-4 h-4 bg-white rounded-full animate-bounce-gentle opacity-60" />
          <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-rose-300 rounded-full animate-bounce-gentle animation-delay-200 opacity-50" />
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-gold-300 rounded-full animate-bounce-gentle animation-delay-400 opacity-40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="animate-fade-in-down">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
              <span className="text-xl">🎁</span>
              <span className="font-accent text-sm text-white tracking-wide">Premium Gift Packaging</span>
            </span>
          </div>
          
          <Typography 
            variant="h1" 
            className="font-display text-4xl md:text-6xl text-white mb-6 animate-fade-in-up"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Shop Our{' '}
            <span className="bg-gradient-to-r from-rose-300 via-gold-300 to-coral-300 bg-clip-text text-transparent">
              Collection
            </span>
          </Typography>
          
          <Typography 
            className="font-body text-lg md:text-xl text-rose-100 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            ✨ Explore our curated selection of premium gift packaging, designed to make every present unforgettable.
          </Typography>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">📦</span>
              <span className="font-accent text-sm text-white">{products.length}+ Products</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">🚚</span>
              <span className="font-accent text-sm text-white">Free Shipping $50+</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">🌿</span>
              <span className="font-accent text-sm text-white">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-gradient-to-r from-rose-50 via-violet-50 to-sky-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <Chip
              value="✨ All Products"
              onClick={() => setSelectedCategory('all')}
              className={`cursor-pointer font-accent tracking-wide transition-all duration-300 hover:scale-105 ${
                selectedCategory === 'all' 
                  ? 'bg-gradient-to-r from-rose-500 to-coral-500 text-white shadow-lg shadow-rose-500/30' 
                  : 'bg-white text-gray-700 border border-rose-200 hover:border-rose-400 hover:shadow-md'
              }`}
            />
            {categories.map((category) => (
              <Chip
                key={category.slug}
                value={category.name}
                onClick={() => setSelectedCategory(category.slug)}
                className={`cursor-pointer font-accent tracking-wide transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.slug 
                    ? 'bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-lg shadow-violet-500/30' 
                    : 'bg-white text-gray-700 border border-violet-200 hover:border-violet-400 hover:shadow-md'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="sticky top-24 space-y-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-rose-100">
                <div className="flex items-center justify-between mb-6">
                  <Typography 
                    variant="h5" 
                    className="font-display bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    🎯 Filters
                  </Typography>
                  <Button 
                    variant="text" 
                    size="sm"
                    className="text-rose-500 hover:text-rose-600 font-accent p-0"
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 100]);
                    }}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Clear All
                  </Button>
                </div>

                <Accordion 
                  open={openAccordion === 1}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <AccordionHeader 
                    onClick={() => handleOpenAccordion(1)}
                    className="text-sm font-accent text-gray-800 border-b-0 py-3 hover:text-rose-500 transition-colors"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    📁 Categories
                  </AccordionHeader>
                  <AccordionBody className="pt-0">
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Checkbox
                          key={category.slug}
                          label={
                            <div className="flex items-center justify-between w-full">
                              <span className="font-body text-gray-700">{category.name}</span>
                              <span className="text-xs text-gray-400">({category.count})</span>
                            </div>
                          }
                          checked={selectedCategory === category.slug}
                          onChange={() => setSelectedCategory(
                            selectedCategory === category.slug ? 'all' : category.slug
                          )}
                          className="checked:bg-rose-500 checked:border-rose-500"
                          containerProps={{ className: "-ml-2" }}
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        />
                      ))}
                    </div>
                  </AccordionBody>
                </Accordion>

                <Accordion 
                  open={openAccordion === 2}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <AccordionHeader 
                    onClick={() => handleOpenAccordion(2)}
                    className="text-sm font-accent text-gray-800 border-b-0 py-3 hover:text-violet-500 transition-colors"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    💰 Price Range
                  </AccordionHeader>
                  <AccordionBody className="pt-0">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <Input
                          type="number"
                          label="Min"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="!border-rose-200 focus:!border-rose-500"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        />
                        <Input
                          type="number"
                          label="Max"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="!border-rose-200 focus:!border-rose-500"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        />
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { label: 'Under $15', range: [0, 15] },
                          { label: '$15 - $25', range: [15, 25] },
                          { label: '$25 - $40', range: [25, 40] },
                          { label: '$40+', range: [40, 100] },
                        ].map((option) => (
                          <Chip
                            key={option.label}
                            value={option.label}
                            onClick={() => setPriceRange(option.range as [number, number])}
                            className="cursor-pointer text-xs bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-100 transition-colors"
                          />
                        ))}
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>

                <Accordion 
                  open={openAccordion === 3}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <AccordionHeader 
                    onClick={() => handleOpenAccordion(3)}
                    className="text-sm font-accent text-gray-800 border-b-0 py-3 hover:text-sky-500 transition-colors"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    ✅ Availability
                  </AccordionHeader>
                  <AccordionBody className="pt-0">
                    <div className="space-y-2">
                      <Checkbox
                        label={<span className="font-body text-gray-700">In Stock</span>}
                        defaultChecked
                        className="checked:bg-teal-500 checked:border-teal-500"
                        containerProps={{ className: "-ml-2" }}
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      />
                      <Checkbox
                        label={<span className="font-body text-gray-700">Include Pre-Order</span>}
                        className="checked:bg-teal-500 checked:border-teal-500"
                        containerProps={{ className: "-ml-2" }}
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      />
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-rose-100">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outlined"
                    size="sm"
                    className="lg:hidden border-rose-300 text-rose-600 hover:bg-rose-50"
                    onClick={() => setShowFilters(!showFilters)}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    🎯 Filters
                  </Button>
                  <Typography 
                    className="font-body text-gray-600"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Showing <span className="font-semibold bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">{filteredProducts.length}</span> products
                  </Typography>
                </div>
                
                <div className="w-full sm:w-48">
                  <Select 
                    label="Sort By"
                    value={sortBy}
                    onChange={(val) => setSortBy(val || 'featured')}
                    className="!border-rose-200"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <Option value="featured">✨ Featured</Option>
                    <Option value="newest">🆕 Newest</Option>
                    <Option value="price-low">💰 Price: Low to High</Option>
                    <Option value="price-high">💎 Price: High to Low</Option>
                    <Option value="rating">⭐ Top Rated</Option>
                  </Select>
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div 
                      key={product.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 animate-fade-in">
                  <div className="text-8xl mb-6">🎁</div>
                  <Typography 
                    variant="h5" 
                    className="font-display bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent mb-2"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    No products found
                  </Typography>
                  <Typography 
                    className="font-body text-gray-600 mb-6"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Try adjusting your filters to find what you are looking for.
                  </Typography>
                  <Button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 100]);
                    }}
                    className="bg-gradient-to-r from-rose-500 to-coral-500 hover:from-rose-600 hover:to-coral-600 font-accent shadow-lg shadow-rose-500/30"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    ✨ Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShopPage;

