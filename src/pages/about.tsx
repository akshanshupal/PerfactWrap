import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";

const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Us - Perfect Wrap"
      description="Learn about Perfect Wrap's journey in creating beautiful gift packaging solutions."
    >
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/aboutstory/1920/800"
            alt="Gift wrapping artistry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/90 via-violet-900/85 to-sky-900/90" />
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-rose-400 blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-violet-400 blur-3xl opacity-20 animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold-400 blur-3xl opacity-15 animate-float-fast" />
          
          {/* Decorative particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce-gentle opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-rose-300 rounded-full animate-bounce-gentle animation-delay-200 opacity-50" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gold-300 rounded-full animate-bounce-gentle animation-delay-400 opacity-70" />
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-violet-300 rounded-full animate-bounce-gentle animation-delay-300 opacity-50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="animate-fade-in-down">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
              <span className="text-xl">💝</span>
              <span className="font-accent text-sm text-white tracking-wide">Our Story Since 2010</span>
            </span>
          </div>
          
          <Typography 
            variant="h1" 
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in-up"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Crafting Joy,{' '}
            <span className="bg-gradient-to-r from-rose-300 via-gold-300 to-coral-300 bg-clip-text text-transparent">
              One Wrap at a Time
            </span>
          </Typography>
          
          <Typography 
            className="font-body text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up animation-delay-200"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            ✨ Since 2010, Perfect Wrap has been dedicated to transforming the art of gift-giving 
            through exquisite packaging that speaks before the gift is even opened.
          </Typography>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">🎁</span>
              <span className="font-accent text-sm text-white">50K+ Gifts Wrapped</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">💖</span>
              <span className="font-accent text-sm text-white">15K+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">🌿</span>
              <span className="font-accent text-sm text-white">Eco-Friendly Mission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://picsum.photos/seed/founder/600/750"
                  alt="Our Story"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-rose-400 to-coral-400 rounded-2xl -z-10 animate-float-slow" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-violet-400 to-sky-400 rounded-xl -z-10 animate-float" />
            </div>
            <div className="animate-fade-in-right">
              <Typography 
                variant="small" 
                className="font-accent bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent uppercase tracking-widest mb-4 font-semibold"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                📖 Our Story
              </Typography>
              <Typography 
                variant="h2" 
                className="font-display text-4xl mb-6"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-sky-500 bg-clip-text text-transparent">
                  Born from a Love of Beautiful Details
                </span>
              </Typography>
              <div className="space-y-4 font-body text-gray-600 leading-relaxed">
                <p>
                  🎁 Perfect Wrap began in a small workshop in Portland, Oregon, where our founder, 
                  Emma Richardson, discovered that the most memorable gifts were not just about 
                  what was inside - they were about the entire experience.
                </p>
                <p>
                  ✨ After years of sourcing the world&#39;s finest papers, ribbons, and packaging 
                  materials, Emma realized that everyone deserved access to the same quality 
                  materials used by luxury boutiques and high-end gift shops.
                </p>
                <p>
                  💖 Today, Perfect Wrap has grown from that small workshop into a beloved brand, 
                  trusted by thousands of customers worldwide who share our belief that 
                  presentation is an art form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-violet-50 to-sky-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-30 animate-float-slow" />
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
                What We Stand For
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
              💫 Our values guide everything we do, from sourcing to shipping.
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <CardBody 
                className="p-10"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="text-6xl mb-6 block">🌿</span>
                <Typography 
                  variant="h4" 
                  className="font-display mb-4 bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Sustainability First
                </Typography>
                <Typography 
                  className="font-body text-gray-600 leading-relaxed"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  We are committed to eco-friendly practices. 80% of our products use recycled or sustainable materials.
                </Typography>
              </CardBody>
            </Card>

            <Card 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-200"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <CardBody 
                className="p-10"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="text-6xl mb-6 block">✨</span>
                <Typography 
                  variant="h4" 
                  className="font-display mb-4 bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Uncompromising Quality
                </Typography>
                <Typography 
                  className="font-body text-gray-600 leading-relaxed"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Every product is carefully inspected to meet our exacting standards. Beautiful and durable.
                </Typography>
              </CardBody>
            </Card>

            <Card 
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-400"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <CardBody 
                className="p-10"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="text-6xl mb-6 block">💝</span>
                <Typography 
                  variant="h4" 
                  className="font-display mb-4 bg-gradient-to-r from-coral-500 to-gold-500 bg-clip-text text-transparent"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Joy in Every Detail
                </Typography>
                <Typography 
                  className="font-body text-gray-600 leading-relaxed"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  From the texture of our papers to the sheen of our ribbons, we obsess over the details.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 via-violet-600 to-sky-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-white rounded-full blur-3xl opacity-10 animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 animate-float-slow" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <span className="text-3xl block mb-2">💖</span>
              <Typography 
                variant="h2" 
                className="font-display text-5xl text-white mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                15K+
              </Typography>
              <Typography 
                className="font-accent text-rose-100 uppercase tracking-wider text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Happy Customers
              </Typography>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <span className="text-3xl block mb-2">🎁</span>
              <Typography 
                variant="h2" 
                className="font-display text-5xl text-white mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                50K+
              </Typography>
              <Typography 
                className="font-accent text-violet-100 uppercase tracking-wider text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Gifts Wrapped
              </Typography>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <span className="text-3xl block mb-2">✨</span>
              <Typography 
                variant="h2" 
                className="font-display text-5xl text-white mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                200+
              </Typography>
              <Typography 
                className="font-accent text-sky-100 uppercase tracking-wider text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Products
              </Typography>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <span className="text-3xl block mb-2">🏆</span>
              <Typography 
                variant="h2" 
                className="font-display text-5xl text-white mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                14
              </Typography>
              <Typography 
                className="font-accent text-rose-100 uppercase tracking-wider text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Years of Excellence
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-40" />
        
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
              <span className="bg-gradient-to-r from-rose-500 via-violet-500 to-sky-500 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </Typography>
            <Typography 
              className="font-body text-lg text-gray-600"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              👥 The passionate people behind Perfect Wrap.
            </Typography>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-4 ring-rose-200 group-hover:ring-rose-400 transition-all duration-500">
                <Image
                  src="https://picsum.photos/seed/team1/300/300"
                  alt="Emma Richardson"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <Typography 
                variant="h5" 
                className="font-display bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Emma Richardson
              </Typography>
              <Typography 
                className="font-accent text-rose-500 text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Founder &amp; CEO
              </Typography>
            </div>
            <div className="text-center group animate-fade-in-up animation-delay-200">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-4 ring-violet-200 group-hover:ring-violet-400 transition-all duration-500">
                <Image
                  src="https://picsum.photos/seed/team2/300/300"
                  alt="James Chen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <Typography 
                variant="h5" 
                className="font-display bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                James Chen
              </Typography>
              <Typography 
                className="font-accent text-violet-500 text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Head of Design
              </Typography>
            </div>
            <div className="text-center group animate-fade-in-up animation-delay-400">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-4 ring-sky-200 group-hover:ring-sky-400 transition-all duration-500">
                <Image
                  src="https://picsum.photos/seed/team3/300/300"
                  alt="Sarah Williams"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <Typography 
                variant="h5" 
                className="font-display bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Sarah Williams
              </Typography>
              <Typography 
                className="font-accent text-sky-500 text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Operations Director
              </Typography>
            </div>
            <div className="text-center group animate-fade-in-up animation-delay-600">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl ring-4 ring-teal-200 group-hover:ring-teal-400 transition-all duration-500">
                <Image
                  src="https://picsum.photos/seed/team4/300/300"
                  alt="Michael Brooks"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <Typography 
                variant="h5" 
                className="font-display bg-gradient-to-r from-teal-500 to-mint-500 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Michael Brooks
              </Typography>
              <Typography 
                className="font-accent text-teal-500 text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Sustainability Lead
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-500 via-violet-500 to-sky-500 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl opacity-20 animate-float-slow" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <Typography 
            variant="h2" 
            className="font-display text-4xl md:text-5xl text-white mb-6"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            ✨ Ready to Transform Your Gifts?
          </Typography>
          <Typography 
            className="font-body text-lg text-rose-100 mb-8 max-w-2xl mx-auto"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Join thousands of gift-givers who have discovered the Perfect Wrap difference.
          </Typography>
          <Link href="/shop">
            <Button 
              size="lg" 
              className="bg-white text-violet-600 hover:bg-rose-50 font-accent tracking-widest px-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              🎁 Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
