import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card 
      className="group overflow-hidden border border-rose-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <CardHeader 
        floated={false} 
        shadow={false}
        className="relative m-0 rounded-none overflow-hidden"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Link href={`/product/${product.slug}`}>
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-rose-50 to-violet-50">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.new && (
            <Chip 
              value="✨ New" 
              size="sm"
              className="bg-gradient-to-r from-violet-500 to-sky-500 text-white font-accent text-xs px-3 shadow-lg"
            />
          )}
          {product.bestseller && (
            <Chip 
              value="🔥 Bestseller" 
              size="sm"
              className="bg-gradient-to-r from-rose-500 to-coral-500 text-white font-accent text-xs px-3 shadow-lg"
            />
          )}
          {product.originalPrice && (
            <Chip 
              value="💰 Sale" 
              size="sm"
              className="bg-gradient-to-r from-gold-500 to-coral-500 text-white font-accent text-xs px-3 shadow-lg"
            />
          )}
        </div>

        {/* Wishlist button */}
        <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-rose-500 hover:text-white text-rose-500 shadow-lg transform translate-y-2 group-hover:translate-y-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>

        {/* Quick Add Button - appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            fullWidth
            className="bg-gradient-to-r from-rose-500 to-coral-500 hover:from-rose-600 hover:to-coral-600 font-accent tracking-wider text-sm shadow-lg"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            🛒 Quick Add
          </Button>
        </div>
      </CardHeader>
      
      <CardBody 
        className="p-4"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography 
          variant="small" 
          className="font-accent text-xs bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent uppercase tracking-widest mb-1"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {product.category}
        </Typography>
        <Link href={`/product/${product.slug}`}>
          <Typography 
            variant="h6" 
            className="font-display text-gray-800 hover:text-rose-500 transition-colors mb-2 line-clamp-1"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {product.name}
          </Typography>
        </Link>
        <Typography 
          className="font-body text-gray-600 text-sm line-clamp-2 mb-3"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {product.shortDescription}
        </Typography>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Typography 
              className="font-accent font-bold text-lg bg-gradient-to-r from-rose-500 to-coral-500 bg-clip-text text-transparent"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              ${product.price.toFixed(2)}
            </Typography>
            {product.originalPrice && (
              <Typography 
                className="font-accent text-sm text-gray-400 line-through"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                ${product.originalPrice.toFixed(2)}
              </Typography>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1 bg-gold-50 px-2 py-1 rounded-full">
            <span className="text-sm">⭐</span>
            <span className="text-xs font-accent text-gold-700 font-medium">{product.rating}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
