import React from 'react';
import Layout from '@/components/Layout';
import {
  Typography,
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
} from "@material-tailwind/react";

const ContactPage: React.FC = () => {
  return (
    <Layout 
      title="Contact Us - Perfect Wrap"
      description="Get in touch with the Perfect Wrap team. We're here to help!"
    >
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/contactmail/1920/800"
            alt="Contact us background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-rose-900/85 to-coral-900/90" />
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-violet-400 blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-rose-400 blur-3xl opacity-20 animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-coral-400 blur-3xl opacity-15 animate-float-fast" />
          <div className="absolute top-10 right-1/3 w-48 h-48 rounded-full bg-gold-400 blur-3xl opacity-10 animate-float" />
          
          {/* Decorative particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce-gentle opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-violet-300 rounded-full animate-bounce-gentle animation-delay-200 opacity-50" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-rose-300 rounded-full animate-bounce-gentle animation-delay-400 opacity-70" />
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-coral-300 rounded-full animate-bounce-gentle animation-delay-300 opacity-50" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gold-300 rounded-full animate-bounce-gentle animation-delay-500 opacity-60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="animate-fade-in-down">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
              <span className="text-xl">💌</span>
              <span className="font-accent text-sm text-white tracking-wide">We&#39;d Love to Hear From You</span>
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
            Get in{' '}
            <span className="bg-gradient-to-r from-violet-300 via-rose-300 to-coral-300 bg-clip-text text-transparent">
              Touch
            </span>
          </Typography>
          
          <Typography 
            className="font-body text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up animation-delay-200"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            💌 Have a question, suggestion, or just want to say hello? We&#39;d love to hear from you!
          </Typography>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">⚡</span>
              <span className="font-accent text-sm text-white">Quick Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">💖</span>
              <span className="font-accent text-sm text-white">Friendly Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xl">🎁</span>
              <span className="font-accent text-sm text-white">Gift Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-gradient-to-br from-rose-50 via-violet-50 to-sky-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-20">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
                title: 'Email Us',
                info: 'hello@perfectwrap.com',
                subInfo: 'We reply within 24 hours'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                ),
                title: 'Call Us',
                info: '+1 (555) 123-4567',
                subInfo: 'Mon-Fri 9am-6pm PST'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
                title: 'Visit Us',
                info: '123 Wrapping Way',
                subInfo: 'Portland, OR 97201'
              },
            ].map((contact, index) => (
              <Card 
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
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
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${
                    index === 0 ? 'bg-gradient-to-br from-rose-400 to-rose-600' :
                    index === 1 ? 'bg-gradient-to-br from-violet-400 to-violet-600' :
                    'bg-gradient-to-br from-sky-400 to-sky-600'
                  }`}>
                    {contact.icon}
                  </div>
                  <Typography 
                    variant="h5" 
                    className={`font-display mb-2 ${
                      index === 0 ? 'bg-gradient-to-r from-rose-500 to-coral-500' :
                      index === 1 ? 'bg-gradient-to-r from-violet-500 to-sky-500' :
                      'bg-gradient-to-r from-sky-500 to-teal-500'
                    } bg-clip-text text-transparent`}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    {contact.title}
                  </Typography>
                  <Typography 
                    className="font-accent text-gray-700 mb-1"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    {contact.info}
                  </Typography>
                  <Typography 
                    className="font-body text-sm text-gray-500"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    {contact.subInfo}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="animate-fade-in-left">
              <Typography 
                variant="h2" 
                className="font-display text-3xl mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-rose-500 bg-clip-text text-transparent">
                  📝 Send Us a Message
                </span>
              </Typography>
              <Typography 
                className="font-body text-gray-600 mb-8"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Fill out the form below and we&#39;ll get back to you as soon as possible.
              </Typography>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    className="!border-violet-200 focus:!border-violet-500"
                    labelProps={{ className: "font-accent" }}
                    crossOrigin=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  />
                  <Input
                    label="Last Name"
                    className="!border-violet-200 focus:!border-violet-500"
                    labelProps={{ className: "font-accent" }}
                    crossOrigin=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  />
                </div>
                <Input
                  type="email"
                  label="Email Address"
                  className="!border-violet-200 focus:!border-violet-500"
                  labelProps={{ className: "font-accent" }}
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                />
                <Input
                  label="Subject"
                  className="!border-violet-200 focus:!border-violet-500"
                  labelProps={{ className: "font-accent" }}
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                />
                <Textarea
                  label="Your Message"
                  rows={6}
                  className="!border-violet-200 focus:!border-violet-500"
                  labelProps={{ className: "font-accent" }}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                />
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-500 to-rose-500 hover:from-violet-600 hover:to-rose-600 font-accent tracking-widest w-full md:w-auto px-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  ✨ Send Message
                </Button>
              </form>
            </div>

            {/* FAQ */}
            <div className="animate-fade-in-right">
              <Typography 
                variant="h2" 
                className="font-display text-3xl mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <span className="bg-gradient-to-r from-rose-500 via-coral-500 to-gold-500 bg-clip-text text-transparent">
                  ❓ Frequently Asked Questions
                </span>
              </Typography>
              <Typography 
                className="font-body text-gray-600 mb-8"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Quick answers to common questions.
              </Typography>

              <div className="space-y-6">
                {[
                  {
                    q: '📦 What are your shipping options?',
                    a: 'We offer Standard (5-7 days), Express (2-3 days), and Next Day delivery. Free shipping on orders over $50!'
                  },
                  {
                    q: '↩️ Can I return items if I\'m not satisfied?',
                    a: 'Absolutely! We offer a 30-day return policy for all unused items in original packaging. Contact us to initiate a return.'
                  },
                  {
                    q: '🏷️ Do you offer wholesale pricing?',
                    a: 'Yes! We offer special pricing for bulk orders. Please email wholesale@perfectwrap.com for more information.'
                  },
                  {
                    q: '🌿 Are your products eco-friendly?',
                    a: '80% of our products use recycled or sustainable materials. Look for our "Eco" badge on product pages.'
                  },
                  {
                    q: '🎨 Can I customize orders for events?',
                    a: 'Yes! We offer custom printing and branding for corporate events, weddings, and special occasions. Contact us for details.'
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b border-violet-100 pb-6 hover:bg-violet-50/50 rounded-lg p-4 -mx-4 transition-colors duration-300">
                    <Typography 
                      variant="h6" 
                      className="font-accent text-gray-800 mb-2"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      {faq.q}
                    </Typography>
                    <Typography 
                      className="font-body text-gray-600"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      {faq.a}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gradient-to-br from-violet-100 via-rose-100 to-coral-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-200 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-50" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fade-in-up">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex items-center justify-center shadow-xl animate-float">
              <span className="text-4xl">📍</span>
            </div>
            <Typography 
              variant="h4" 
              className="font-display mb-2"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <span className="bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
                Visit Our Store
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
              🏠 123 Wrapping Way, Portland, OR 97201
            </Typography>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

