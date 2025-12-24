import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Badge,
} from "@material-tailwind/react";

const Header: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <li>
        <Link href="/" className="flex items-center">
          <Typography
            as="span"
            variant="small"
            className="font-accent font-medium text-gray-700 hover:text-rose-500 transition-colors tracking-wide"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Home
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/shop" className="flex items-center">
          <Typography
            as="span"
            variant="small"
            className="font-accent font-medium text-gray-700 hover:text-rose-500 transition-colors tracking-wide"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Shop
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/about" className="flex items-center">
          <Typography
            as="span"
            variant="small"
            className="font-accent font-medium text-gray-700 hover:text-rose-500 transition-colors tracking-wide"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            About
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/contact" className="flex items-center">
          <Typography
            as="span"
            variant="small"
            className="font-accent font-medium text-gray-700 hover:text-rose-500 transition-colors tracking-wide"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Contact
          </Typography>
        </Link>
      </li>
      <li>
        <Link href="/track-order" className="flex items-center">
          <Typography
            as="span"
            variant="small"
            className="font-accent font-medium text-gray-700 hover:text-rose-500 transition-colors tracking-wide"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Track Order
          </Typography>
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar 
      className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-3 lg:px-8 lg:py-4 border-b border-rose-100 bg-white/90 backdrop-blur-md shadow-sm"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col items-center">
            <Typography
              as="span"
              className="font-display text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-rose-500 via-violet-500 to-sky-500 bg-clip-text text-transparent group-hover:from-violet-500 group-hover:via-rose-500 group-hover:to-coral-500 transition-all duration-500"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Perfect Wrap
            </Typography>
            <span className="text-[10px] font-accent tracking-[0.3em] bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent uppercase -mt-1">
              Gift Packaging
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-2">
            {/* Search Icon */}
            <IconButton 
              variant="text" 
              className="text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </IconButton>
            {/* User Icon - Sign In */}
            <Link href="/signin">
              <IconButton 
                variant="text" 
                className="hidden lg:inline-flex text-gray-600 hover:bg-violet-50 hover:text-violet-500 transition-colors"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </IconButton>
            </Link>
            {/* Cart Icon */}
            <Link href="/cart">
              <Badge 
                content="3" 
                className="bg-gradient-to-r from-rose-500 to-coral-500 text-white text-xs min-w-5 min-h-5 shadow-lg"
                placement="top-end"
              >
                <IconButton 
                  variant="text" 
                  className="text-gray-600 hover:bg-sky-50 hover:text-sky-500 transition-colors"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </IconButton>
              </Badge>
            </Link>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-gray-700 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto pt-4">
          {navList}
          <div className="flex flex-col gap-2 pb-2">
            <Link href="/signin" className="w-full">
              <Button 
                fullWidth 
                size="sm" 
                className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                👤 Sign In
              </Button>
            </Link>
            <Link href="/cart" className="w-full">
              <Button 
                fullWidth 
                variant="outlined" 
                size="sm" 
                className="border-rose-400 text-rose-500 hover:bg-rose-50"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                🛒 View Cart (3)
              </Button>
            </Link>
            <Link href="/track-order" className="w-full">
              <Button 
                fullWidth 
                variant="outlined" 
                size="sm" 
                className="border-sky-400 text-sky-600 hover:bg-sky-50"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                📦 Track Order
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
