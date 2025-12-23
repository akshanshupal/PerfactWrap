import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Perfect Wrap - Premium Gift Packaging',
  description = 'Discover our exquisite collection of gift packaging supplies. From luxurious boxes to artisan wrapping papers, make every gift unforgettable.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-champagne-50 via-white to-champagne-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
