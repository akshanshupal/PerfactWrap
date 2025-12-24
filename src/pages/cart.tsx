import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import {
  Typography,
  Button,
  IconButton,
  Input,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { products } from '@/data/products';

interface CartItem {
  product: typeof products[0];
  quantity: number;
  color: string;
  size: string;
}

const CartPage: React.FC = () => {
  // Dummy cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 2, color: 'Burgundy', size: 'Medium (6x6x3)' },
    { product: products[2], quantity: 1, color: 'Blush Pink', size: '1 inch width' },
    { product: products[7], quantity: 1, color: 'Classic Red', size: 'One Size' },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(index);
      return;
    }
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
  };

  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <Layout 
      title="Shopping Cart - Perfect Wrap"
      description="Review your cart and proceed to checkout."
    >
      {/* Hero */}
      <section className="py-12 bg-champagne-50 border-b border-champagne-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Typography 
            variant="h1" 
            className="font-display text-4xl text-forest-900 mb-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Your Cart
          </Typography>
          <Typography 
            className="font-body text-gray-600"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </Typography>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <Card 
                    key={index}
                    className="border border-champagne-100 shadow-sm"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <CardBody 
                      className="p-6"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <Link href={`/product/${item.product.slug}`}>
                          <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-champagne-50 flex-shrink-0">
                            <Image
                              src={item.product.images[0]}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <Typography 
                                variant="small" 
                                className="font-accent text-xs text-champagne-600 uppercase tracking-widest mb-1"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                              >
                                {item.product.category}
                              </Typography>
                              <Link href={`/product/${item.product.slug}`}>
                                <Typography 
                                  variant="h5" 
                                  className="font-display text-forest-900 hover:text-champagne-700 transition-colors"
                                  placeholder=""
                                  onPointerEnterCapture={() => {}}
                                  onPointerLeaveCapture={() => {}}
                                >
                                  {item.product.name}
                                </Typography>
                              </Link>
                              <Typography 
                                className="font-body text-sm text-gray-500 mt-1"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                              >
                                Color: {item.color} | Size: {item.size}
                              </Typography>
                            </div>
                            <IconButton
                              variant="text"
                              size="sm"
                              onClick={() => removeItem(index)}
                              className="text-gray-400 hover:text-blush-500"
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </IconButton>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            {/* Quantity */}
                            <div className="flex items-center border border-gray-200 rounded-lg">
                              <IconButton
                                variant="text"
                                size="sm"
                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                className="text-forest-700"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                              </IconButton>
                              <span className="w-10 text-center font-accent">{item.quantity}</span>
                              <IconButton
                                variant="text"
                                size="sm"
                                onClick={() => updateQuantity(index, item.quantity + 1)}
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

                            {/* Price */}
                            <Typography 
                              variant="h5" 
                              className="font-display text-forest-800"
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                            >
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}

                {/* Continue Shopping */}
                <Link href="/shop" className="inline-flex items-center gap-2 font-accent text-champagne-700 hover:text-champagne-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card 
                  className="sticky top-24 border border-champagne-100 shadow-lg"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <CardBody 
                    className="p-8"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <Typography 
                      variant="h4" 
                      className="font-display text-forest-900 mb-6"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Order Summary
                    </Typography>

                    {/* Promo Code */}
                    <div className="mb-6">
                      <div className="flex gap-2">
                        <Input
                          label="Promo Code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="!border-champagne-200"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        />
                        <Button
                          variant="outlined"
                          className="border-forest-600 text-forest-600 flex-shrink-0"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4 border-b border-champagne-100 pb-6 mb-6">
                      <div className="flex justify-between font-body">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="text-forest-800">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-body">
                        <span className="text-gray-600">Shipping</span>
                        <span className="text-forest-800">
                          {shipping === 0 ? (
                            <span className="text-forest-600">FREE</span>
                          ) : (
                            `$${shipping.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between font-body">
                        <span className="text-gray-600">Tax</span>
                        <span className="text-forest-800">${tax.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex justify-between mb-6">
                      <Typography 
                        variant="h5" 
                        className="font-display text-forest-900"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Total
                      </Typography>
                      <Typography 
                        variant="h5" 
                        className="font-display text-forest-900"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        ${total.toFixed(2)}
                      </Typography>
                    </div>

                    {shipping === 0 && (
                      <div className="bg-forest-50 border border-forest-100 rounded-lg p-3 mb-6 text-center">
                        <Typography 
                          className="font-accent text-sm text-forest-700"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          🎉 You've unlocked FREE shipping!
                        </Typography>
                      </div>
                    )}

                    {shipping > 0 && (
                      <div className="bg-champagne-50 border border-champagne-100 rounded-lg p-3 mb-6 text-center">
                        <Typography 
                          className="font-accent text-sm text-champagne-700"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                        </Typography>
                      </div>
                    )}

                    <Link href="/checkout">
                      <Button 
                        size="lg" 
                        fullWidth
                        className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 shadow-lg font-accent tracking-widest"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        ✨ Proceed to Checkout
                      </Button>
                    </Link>

                    <div className="mt-6 flex items-center justify-center gap-4 text-gray-400">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 9.76c0-.68-.16-1.33-.44-1.91l-4.22-9.14c-.38-.82-1.2-1.35-2.12-1.35H8.78c-.92 0-1.74.53-2.12 1.35L2.44 7.85c-.28.58-.44 1.23-.44 1.91 0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5z"/>
                      </svg>
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
                      </svg>
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          ) : (
            // Empty Cart
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🛒</div>
              <Typography 
                variant="h3" 
                className="font-display text-forest-900 mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Your Cart is Empty
              </Typography>
              <Typography 
                className="font-body text-gray-600 mb-8 max-w-md mx-auto"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Looks like you haven't added anything to your cart yet. Explore our collection and find the perfect gift packaging!
              </Typography>
              <Link href="/shop">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 shadow-lg font-accent tracking-widest"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  🛍️ Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;

