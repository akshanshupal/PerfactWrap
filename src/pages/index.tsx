import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { getFeaturedProducts, getBestsellers, categories } from '@/data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const bestsellers = getBestsellers();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-violet-50 to-sky-100 bg-gradient-animated">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-rose-300 to-coral-300 blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-violet-300 to-sky-300 blur-3xl opacity-40 animate-float-slow" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-gold-200 to-rose-200 blur-3xl opacity-30 animate-float-fast" />
          
          {/* Decorative Elements */}
          <div className="absolute top-40 right-1/4 w-4 h-4 bg-rose-400 rounded-full animate-bounce-gentle" />
          <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-violet-400 rounded-full animate-bounce-gentle animation-delay-300" />
          <div className="absolute top-1/3 left-20 w-3 h-3 bg-sky-400 rounded-full animate-bounce-gentle animation-delay-500" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-rose-200 rounded-full px-5 py-2 mb-6 animate-fade-in-down shadow-lg">
                <span className="w-2 h-2 bg-gradient-to-r from-rose-500 to-coral-500 rounded-full animate-pulse" />
                <span className="font-accent text-sm bg-gradient-to-r from-rose-600 to-coral-600 bg-clip-text text-transparent font-medium tracking-wide">
                  ✨ New Holiday Collection Available
                </span>
              </div>
              
              <Typography 
                variant="h1" 
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="text-gray-800">Where Every Gift</span>
                <span className="block bg-gradient-to-r from-rose-500 via-violet-500 to-sky-500 bg-clip-text text-transparent animate-gradient bg-gradient-animated">
                  Becomes Art
                </span>
              </Typography>
              
              <Typography 
                className="font-body text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-200"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Discover our exquisite collection of premium gift packaging. 
                From luxurious boxes to artisan wrapping papers, transform every present into a masterpiece.
              </Typography>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
                <Link href="/shop">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-rose-500 to-coral-500 hover:from-rose-600 hover:to-coral-600 font-accent tracking-widest px-8 shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 hover:-translate-y-1"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    🎁 Shop Collection
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    size="lg" 
                    variant="outlined" 
                    className="border-2 border-violet-400 text-violet-600 hover:bg-violet-50 font-accent tracking-widest px-8 transition-all duration-300 hover:-translate-y-1"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    Our Story
                  </Button>
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                <div className="text-center group cursor-pointer">
                  <Typography 
                    className="font-display text-3xl bg-gradient-to-r from-rose-500 to-coral-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    15K+
                  </Typography>
                  <span className="text-xs font-accent uppercase tracking-wider text-gray-500">Happy Customers</span>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-rose-300 to-transparent" />
                <div className="text-center group cursor-pointer">
                  <Typography 
                    className="font-display text-3xl bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    4.9★
                  </Typography>
                  <span className="text-xs font-accent uppercase tracking-wider text-gray-500">Average Rating</span>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-violet-300 to-transparent" />
                <div className="text-center group cursor-pointer">
                  <Typography 
                    className="font-display text-3xl bg-gradient-to-r from-teal-500 to-mint-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    100%
                  </Typography>
                  <span className="text-xs font-accent uppercase tracking-wider text-gray-500">Eco-Friendly</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative animate-fade-in-right">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 hover:scale-105 group">
                  <Image
                    src="https://picsum.photos/seed/hero1/600/600"
                    alt="Elegant gift packaging"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating accent image */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl overflow-hidden shadow-xl -rotate-6 hover:rotate-0 transition-all duration-500 animate-float-slow hover:scale-110">
                  <Image
                    src="https://picsum.photos/seed/hero2/200/200"
                    alt="Gift ribbon detail"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Discount Badge */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-rose-500 to-coral-500 rounded-2xl shadow-xl flex items-center justify-center rotate-12 hover:rotate-0 transition-all duration-500 animate-bounce-gentle hover:scale-110">
                  <div className="text-center text-white">
                    <span className="font-display text-3xl block">30%</span>
                    <span className="font-accent text-xs uppercase tracking-wider">Off</span>
                  </div>
                </div>

                {/* Decorative ring */}
                <div className="absolute -z-10 inset-0 border-4 border-dashed border-violet-200 rounded-3xl rotate-6 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-violet-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Typography 
              variant="h2" 
              className="font-display text-4xl md:text-5xl mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <span className="bg-gradient-to-r from-violet-600 via-rose-500 to-coral-500 bg-clip-text text-transparent">
                Shop by Category
              </span>
            </Typography>
            <Typography 
              className="font-body text-lg text-gray-600 max-w-2xl mx-auto"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              Find the perfect packaging for every occasion
            </Typography>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={category.slug} href={`/shop?category=${category.slug}`}>
                <Card 
                  className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-rose-900/30 to-transparent group-hover:from-rose-900/80 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                      <Typography 
                        variant="h6" 
                        className="font-display text-base group-hover:text-rose-200 transition-colors"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        {category.name}
                      </Typography>
                      <span className="font-accent text-xs text-rose-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.count} Products →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-rose-50 via-violet-50 to-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-30 animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-30 animate-float-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <div className="animate-fade-in-left">
              <Typography 
                variant="h2" 
                className="font-display text-4xl mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
                  Featured Collection
                </span>
              </Typography>
              <Typography 
                className="font-body text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                ✨ Handpicked favorites from our latest arrivals
              </Typography>
            </div>
            <Link href="/shop" className="animate-fade-in-right">
              <Button 
                variant="outlined" 
                className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 font-accent tracking-wider group"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                View All Products
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/banner1/1920/600"
            alt="Gift wrapping"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-rose-900/80 to-coral-900/90" />
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-60" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-rose-300 rounded-full animate-float-slow opacity-40" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold-300 rounded-full animate-float-fast opacity-50" />
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-white rounded-full animate-bounce-gentle opacity-30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Typography 
                variant="h2" 
                className="font-display text-4xl md:text-5xl text-white mb-6"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                The Art of
                <span className="block bg-gradient-to-r from-rose-300 via-gold-300 to-coral-300 bg-clip-text text-transparent">
                  Beautiful Gifting
                </span>
              </Typography>
              <Typography 
                className="font-body text-lg text-rose-100 mb-8 leading-relaxed"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                At Perfect Wrap, we believe presentation is just as important as the gift itself. 
                Our premium materials and timeless designs ensure your presents make a lasting impression 
                before they are even opened.
              </Typography>
              <Link href="/about">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-gold-400 to-coral-400 hover:from-gold-500 hover:to-coral-500 text-gray-900 font-accent tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  ✨ Discover Our Story
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎁', title: 'Premium Quality', desc: 'Carefully curated materials', color: 'from-rose-500/20 to-rose-500/5' },
                { icon: '🌿', title: 'Eco-Friendly', desc: 'Sustainable packaging', color: 'from-teal-500/20 to-teal-500/5' },
                { icon: '✨', title: 'Unique Designs', desc: 'Exclusive patterns', color: 'from-violet-500/20 to-violet-500/5' },
                { icon: '💝', title: 'Gift Ready', desc: 'Beautiful results', color: 'from-coral-500/20 to-coral-500/5' },
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  <CardBody 
                    className="text-center p-6"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    <span className="text-4xl mb-3 block animate-bounce-gentle">{feature.icon}</span>
                    <Typography 
                      variant="h6" 
                      className="text-white font-display mb-1"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      className="text-rose-200 text-sm font-body"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      {feature.desc}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-rose-100 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Typography 
              variant="h2" 
              className="font-display text-4xl md:text-5xl mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-rose-500 bg-clip-text text-transparent">
                Customer Favorites
              </span>
            </Typography>
            <Typography 
              className="font-body text-lg text-gray-600 max-w-2xl mx-auto"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              💖 Our most loved products, chosen by gift-givers like you
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.slice(0, 4).map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-violet-100 via-rose-50 to-sky-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-40 animate-float-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Typography 
              variant="h2" 
              className="font-display text-4xl md:text-5xl mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The quality of Perfect Wrap's products is unmatched. My gifts always look like they came from a high-end boutique!",
                author: "Sarah M.",
                role: "Loyal Customer",
                rating: 5,
                color: 'from-rose-500 to-coral-500'
              },
              {
                quote: "I love that they offer eco-friendly options without compromising on elegance. Sustainable and stunning!",
                author: "Michael R.",
                role: "Event Planner",
                rating: 5,
                color: 'from-violet-500 to-sky-500'
              },
              {
                quote: "The velvet ribbon collection is absolutely divine. Every package I wrap becomes a work of art.",
                author: "Emily C.",
                role: "Gift Shop Owner",
                rating: 5,
                color: 'from-teal-500 to-mint-500'
              },
            ].map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <CardBody 
                  className="p-8"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                  <Typography 
                    className="font-body text-gray-700 italic mb-6 leading-relaxed"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    &quot;{testimonial.quote}&quot;
                  </Typography>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center shadow-lg`}>
                      <span className="font-display text-lg text-white">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <Typography 
                        variant="h6" 
                        className="font-display text-gray-800"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        {testimonial.author}
                      </Typography>
                      <Typography 
                        className={`text-sm font-accent bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        {testimonial.role}
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Typography 
              variant="h2" 
              className="font-display text-4xl md:text-5xl mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <span className="bg-gradient-to-r from-rose-500 via-coral-500 to-gold-500 bg-clip-text text-transparent">
                #PerfectWrapMoments
              </span>
            </Typography>
            <Typography 
              className="font-body text-lg text-gray-600 max-w-2xl mx-auto"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              📸 Follow us on Instagram for inspiration and share your beautiful wraps
            </Typography>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <a 
                key={item} 
                href="#" 
                className={`group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={`https://picsum.photos/seed/insta${item}/300/300`}
                  alt={`Instagram post ${item}`}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 via-violet-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="text-4xl transform scale-0 group-hover:scale-100 transition-transform duration-300">💖</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
