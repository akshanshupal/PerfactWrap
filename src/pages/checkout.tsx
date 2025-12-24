import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import {
  Typography,
  Button,
  Input,
  Checkbox,
  Radio,
  Card,
  CardBody,
  Stepper,
  Step,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { products } from '@/data/products';

// Generate unique order ID
const generateOrderId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `PW-${timestamp}-${randomStr}`;
};

// WhatsApp number for receiving orders (replace with your actual number)
const WHATSAPP_NUMBER = '919876543210'; // Format: country code + number without +

const CheckoutPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentScreenshot, setPaymentScreenshot] = useState<string | null>(null);
  const [screenshotFileName, setScreenshotFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Customer details (in real app, these would come from form inputs)
  const [customerDetails] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Apt 4B',
    city: 'Portland',
    state: 'OR',
    zip: '97201'
  });

  // Dummy cart data
  const cartItems = [
    { product: products[0], quantity: 2, color: 'Burgundy', size: 'Medium (6x6x3)' },
    { product: products[2], quantity: 1, color: 'Blush Pink', size: '1 inch width' },
    { product: products[7], quantity: 1, color: 'Classic Red', size: 'One Size' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shippingCost = shippingMethod === 'express' ? 12.99 : shippingMethod === 'nextday' ? 24.99 : (subtotal > 50 ? 0 : 5.99);
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  // Handle Place Order button click
  const handlePlaceOrder = () => {
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);
    setShowPaymentModal(true);
  };

  // Handle Payment Gateway selection - show card form
  const handlePaymentGateway = () => {
    setShowPaymentModal(false);
    setShowCardModal(true);
  };

  // Process card payment
  const handleCardPayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowCardModal(false);
      setShowConfirmationModal(true);
      sendOrderConfirmation('gateway');
    }, 2000);
  };

  // Handle WhatsApp payment selection
  const handleWhatsAppPayment = () => {
    setShowPaymentModal(false);
    setShowQRModal(true);
  };

  // Handle Payment Done - Show screenshot upload modal
  const handlePaymentDone = () => {
    setShowQRModal(false);
    setShowScreenshotModal(true);
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshotFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentScreenshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Complete Order with Screenshot
  const handleCompleteOrder = async () => {
    setIsProcessing(true);

    // Prepare order data for API (future implementation)
    const orderData = {
      orderId,
      customerDetails,
      cartItems: cartItems.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
        price: item.product.price,
        total: item.product.price * item.quantity
      })),
      shippingMethod,
      subtotal,
      shippingCost,
      tax,
      total,
      paymentMethod: 'whatsapp',
      paymentScreenshot, // Base64 encoded image
      createdAt: new Date().toISOString()
    };

    // Simulate API call - In future, this will save to database
    console.log('Order Data to be saved:', orderData);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setShowScreenshotModal(false);
    setShowConfirmationModal(true);
    sendOrderConfirmation('whatsapp');
  };

  // Send order confirmation via WhatsApp
  const sendOrderConfirmation = (paymentMethod: string) => {
    const orderDetails = cartItems.map(item => 
      `• ${item.product.name} x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}`
    ).join('%0A');

    const message = `🎁 *NEW ORDER RECEIVED!*%0A%0A` +
      `📦 *Order ID:* ${orderId}%0A%0A` +
      `👤 *Customer Details:*%0A` +
      `Name: ${customerDetails.firstName} ${customerDetails.lastName}%0A` +
      `Email: ${customerDetails.email}%0A` +
      `Phone: ${customerDetails.phone}%0A` +
      `Address: ${customerDetails.address}, ${customerDetails.city}, ${customerDetails.state} ${customerDetails.zip}%0A%0A` +
      `🛒 *Order Items:*%0A${orderDetails}%0A%0A` +
      `💰 *Order Total:* $${total.toFixed(2)}%0A` +
      `📦 *Shipping:* ${shippingMethod === 'express' ? 'Express (2-3 days)' : shippingMethod === 'nextday' ? 'Next Day' : 'Standard (5-7 days)'}%0A` +
      `💳 *Payment Method:* ${paymentMethod === 'whatsapp' ? 'WhatsApp Pay' : 'Payment Gateway'}%0A%0A` +
      `✅ Payment Confirmed!`;

    // Open WhatsApp with order details (for store owner)
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }
  };

  // Generate QR code URL using a free QR code API
  const getQRCodeUrl = () => {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=I%20am%20paying%20for%20Order%20${orderId}%20-%20$${total.toFixed(2)}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(whatsappLink)}`;
  };

  return (
    <Layout 
      title="Checkout - Perfect Wrap"
      description="Complete your purchase securely."
    >
      {/* Progress Header */}
      <section className="py-8 bg-gradient-to-r from-violet-700 to-sky-700">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="w-full py-4">
            <Stepper
              activeStep={activeStep}
              className="text-white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <Step 
                onClick={() => setActiveStep(0)}
                className="cursor-pointer"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                1
              </Step>
              <Step 
                onClick={() => setActiveStep(1)}
                className="cursor-pointer"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                2
              </Step>
            </Stepper>
            <div className="flex justify-between mt-4 px-8">
              <span className={`font-accent text-xs ${activeStep >= 0 ? 'text-violet-200' : 'text-gray-500'}`}>Shipping</span>
              <span className={`font-accent text-xs ${activeStep >= 1 ? 'text-violet-200' : 'text-gray-500'}`}>Review & Pay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 bg-gradient-to-br from-violet-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              {/* Shipping Information */}
              {activeStep === 0 && (
                <Card 
                  className="border-0 shadow-xl bg-white/90 backdrop-blur-sm"
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
                    <Typography 
                      variant="h4" 
                      className="font-display mb-6"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
                        📦 Shipping Information
                      </span>
                    </Typography>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="First Name"
                          defaultValue="John"
                          className="!border-violet-200 focus:!border-violet-500"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        />
                        <Input
                          label="Last Name"
                          defaultValue="Doe"
                          className="!border-violet-200 focus:!border-violet-500"
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
                        defaultValue="john.doe@example.com"
                        className="!border-violet-200 focus:!border-violet-500"
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      />
                      <Input
                        type="tel"
                        label="Phone Number (WhatsApp)"
                        defaultValue="+1 (555) 123-4567"
                        className="!border-violet-200 focus:!border-violet-500"
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      />
                      <Input
                        label="Address"
                        defaultValue="123 Main Street"
                        className="!border-violet-200 focus:!border-violet-500"
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      />
                      <Input
                        label="Apartment, suite, etc. (optional)"
                        defaultValue="Apt 4B"
                        className="!border-violet-200 focus:!border-violet-500"
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      />
                      <div className="grid md:grid-cols-3 gap-6">
                        <Input
                          label="City"
                          defaultValue="Portland"
                          className="!border-violet-200 focus:!border-violet-500"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        />
                        <Input
                          label="State"
                          defaultValue="OR"
                          className="!border-violet-200 focus:!border-violet-500"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        />
                        <Input
                          label="ZIP Code"
                          defaultValue="97201"
                          className="!border-violet-200 focus:!border-violet-500"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        />
                      </div>

                      <div className="border-t border-violet-100 pt-6 mt-6">
                        <Typography 
                          variant="h5" 
                          className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent mb-4"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        >
                          🚚 Shipping Method
                        </Typography>
                        <div className="space-y-3">
                          {[
                            { id: 'standard', label: 'Standard Shipping', time: '5-7 business days', price: subtotal > 50 ? 'FREE' : '$5.99' },
                            { id: 'express', label: 'Express Shipping', time: '2-3 business days', price: '$12.99' },
                            { id: 'nextday', label: 'Next Day Delivery', time: '1 business day', price: '$24.99' },
                          ].map((method) => (
                            <label
                              key={method.id}
                              className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                                shippingMethod === method.id 
                                  ? 'border-violet-500 bg-violet-50 shadow-md' 
                                  : 'border-violet-200 hover:border-violet-300 hover:bg-violet-50/50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Radio
                                  name="shipping"
                                  checked={shippingMethod === method.id}
                                  onChange={() => setShippingMethod(method.id)}
                                  className="checked:border-violet-600 checked:before:bg-violet-600"
                                  crossOrigin=""
                                  onPointerEnterCapture={() => {}}
                                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                                />
                                <div>
                                  <Typography 
                                    className="font-accent text-gray-800"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                                  >
                                    {method.label}
                                  </Typography>
                                  <Typography 
                                    className="font-body text-sm text-gray-500"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                                  >
                                    {method.time}
                                  </Typography>
                                </div>
                              </div>
                              <Typography 
                                className={`font-accent ${method.price === 'FREE' ? 'text-green-600' : 'text-gray-800'}`}
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                              >
                                {method.price}
                              </Typography>
                            </label>
                          ))}
                        </div>
                      </div>
                    </form>

                    <div className="flex justify-between mt-8 pt-6 border-t border-violet-100">
                      <Link href="/cart">
                        <Button 
                          variant="text" 
                          className="font-accent text-violet-600"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        >
                          ← Back to Cart
                        </Button>
                      </Link>
                      <Button 
                        onClick={() => setActiveStep(1)}
                        className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 shadow-lg font-accent tracking-wider"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        Review Order →
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              )}

              {/* Review Order */}
              {activeStep === 1 && (
                <Card 
                  className="border-0 shadow-xl bg-white/90 backdrop-blur-sm"
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
                    <Typography 
                      variant="h4" 
                      className="font-display mb-6"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
                        📋 Review Your Order
                      </span>
                    </Typography>

                    <div className="space-y-6">
                      {/* Shipping Address */}
                      <div className="p-4 bg-gradient-to-r from-violet-50 to-sky-50 rounded-lg border border-violet-100">
                        <div className="flex justify-between items-start mb-2">
                          <Typography 
                            variant="h6" 
                            className="font-accent text-violet-700"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                          >
                            📍 Shipping Address
                          </Typography>
                          <Button 
                            variant="text" 
                            size="sm"
                            onClick={() => setActiveStep(0)}
                            className="font-accent text-violet-600 p-0"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                          >
                            Edit
                          </Button>
                        </div>
                        <Typography 
                          className="font-body text-gray-600"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        >
                          {customerDetails.firstName} {customerDetails.lastName}<br />
                          {customerDetails.address}<br />
                          {customerDetails.city}, {customerDetails.state} {customerDetails.zip}<br />
                          {customerDetails.phone}
                        </Typography>
                      </div>

                      {/* Payment Info Notice */}
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">💳</span>
                          <div>
                            <Typography 
                              variant="h6" 
                              className="font-accent text-green-700"
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                            >
                              Payment Method
                            </Typography>
                            <Typography 
                              className="font-body text-sm text-gray-600"
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                            >
                              You&apos;ll choose your payment method after clicking &quot;Place Order&quot;
                            </Typography>
                          </div>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div>
                        <Typography 
                          variant="h6" 
                          className="font-accent text-violet-700 mb-4"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        >
                          🛒 Order Items
                        </Typography>
                        <div className="space-y-4">
                          {cartItems.map((item, index) => (
                            <div key={index} className="flex gap-4 p-4 bg-white border border-violet-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={item.product.images[0]}
                                  alt={item.product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <Typography 
                                  className="font-display text-gray-800"
                                  placeholder=""
                                  onPointerEnterCapture={() => {}}
                                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                                >
                                  {item.product.name}
                                </Typography>
                                <Typography 
                                  className="font-body text-sm text-gray-500"
                                  placeholder=""
                                  onPointerEnterCapture={() => {}}
                                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                                >
                                  Qty: {item.quantity} | {item.color} | {item.size}
                                </Typography>
                              </div>
                              <Typography 
                                className="font-accent text-violet-700"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                              >
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-8 pt-6 border-t border-violet-100">
                      <Button 
                        variant="text" 
                        onClick={() => setActiveStep(0)}
                        className="font-accent text-violet-600"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        ← Back
                      </Button>
                      <Button 
                        size="lg"
                        onClick={handlePlaceOrder}
                        className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 shadow-lg font-accent tracking-wider animate-pulse"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        ✨ Place Order - ${total.toFixed(2)}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card 
                className="sticky top-24 border border-violet-100 shadow-xl bg-white/90 backdrop-blur-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                <CardBody 
                  className="p-6"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  <Typography 
                    variant="h5" 
                    className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent mb-6"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    🧾 Order Summary
                  </Typography>

                  <div className="space-y-4 mb-6">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-violet-600 to-sky-600 rounded-full flex items-center justify-center text-white text-xs">
                            {item.quantity}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Typography 
                            className="font-accent text-sm text-gray-800 truncate"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                          >
                            {item.product.name}
                          </Typography>
                          <Typography 
                            className="font-body text-xs text-gray-500"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                          >
                            {item.color}
                          </Typography>
                        </div>
                        <Typography 
                          className="font-accent text-sm text-gray-800"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        >
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-violet-100 pt-4">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className={shippingCost === 0 ? 'text-green-600' : 'text-gray-800'}>
                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-800">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4 pt-4 border-t border-violet-100">
                    <Typography 
                      variant="h6" 
                      className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      Total
                    </Typography>
                    <Typography 
                      variant="h6" 
                      className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      ${total.toFixed(2)}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options Modal */}
      <Dialog 
        open={showPaymentModal} 
        handler={() => setShowPaymentModal(false)}
        className="bg-white rounded-2xl"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
      >
        <DialogHeader 
          className="flex flex-col items-center pt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <span className="text-4xl mb-2">💳</span>
          <Typography 
            variant="h4" 
            className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Choose Payment Method
          </Typography>
          <Typography 
            className="font-body text-gray-500 text-sm mt-1"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Order ID: {orderId}
          </Typography>
        </DialogHeader>
        <DialogBody 
          className="px-8 pb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <div className="space-y-4">
            {/* Payment Gateway Option */}
            <button
              onClick={handlePaymentGateway}
              className="w-full p-6 bg-gradient-to-r from-violet-50 to-sky-50 rounded-xl border-2 border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-sky-600 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  💳
                </div>
                <div className="text-left flex-1">
                  <Typography 
                    variant="h5" 
                    className="font-display text-gray-800"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    Payment Gateway
                  </Typography>
                  <Typography 
                    className="font-body text-sm text-gray-500"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    Pay securely with Credit/Debit Card, UPI, Net Banking
                  </Typography>
                </div>
                <span className="text-violet-600 text-2xl">→</span>
              </div>
            </button>

            {/* WhatsApp Payment Option */}
            <button
              onClick={handleWhatsAppPayment}
              className="w-full p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-center gap-5">
                <div className="w-20 h-20 bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-green-500/40 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                  <svg viewBox="0 0 48 48" className="w-12 h-12 relative z-10 drop-shadow-lg">
                    <defs>
                      <linearGradient id="whatsappGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#f0f0f0" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#whatsappGradient)" d="M24.001 4.003c-11.025 0-19.997 8.972-19.997 19.997 0 3.527.922 6.965 2.672 9.992l-2.833 10.351 10.613-2.784c2.9 1.582 6.167 2.417 9.545 2.417 11.024 0 19.996-8.972 19.996-19.997S35.025 4.003 24.001 4.003zm0 36.493c-3.07 0-6.078-.824-8.697-2.386l-.623-.37-6.461 1.694 1.724-6.299-.405-.644c-1.717-2.732-2.622-5.893-2.622-9.144 0-9.139 7.436-16.575 16.576-16.575 4.428 0 8.591 1.726 11.717 4.859 3.127 3.133 4.849 7.299 4.846 11.732-.003 9.14-7.439 16.576-16.579 16.576l.024-.003z"/>
                    <path fill="url(#whatsappGradient)" d="M34.947 28.879c-.575-.288-3.403-1.679-3.932-1.871-.529-.192-.914-.288-1.299.288-.385.575-1.492 1.871-1.829 2.256-.337.385-.674.433-1.249.144-.575-.288-2.429-.895-4.627-2.855-1.711-1.525-2.865-3.409-3.202-3.984-.337-.575-.036-.886.253-1.173.26-.258.575-.673.863-1.01.288-.337.385-.577.577-.961.192-.385.096-.721-.048-1.01-.144-.288-1.299-3.129-1.779-4.284-.468-1.125-.943-1.01-1.299-1.01l-1.106-.021c-.385 0-1.01.144-1.539.721-.529.577-2.021 1.975-2.021 4.815 0 2.841 2.069 5.586 2.357 5.972.288.385 4.071 6.215 9.861 8.717 1.379.596 2.455.951 3.293 1.217 1.383.439 2.642.377 3.637.229 1.109-.165 3.403-1.39 3.883-2.734.481-1.343.481-2.494.337-2.734-.144-.24-.529-.384-1.104-.673z"/>
                  </svg>
                </div>
                
                <div className="text-left flex-1">
                  <Typography 
                    variant="h5" 
                    className="font-display text-gray-800 group-hover:text-green-700 transition-colors"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    Pay via WhatsApp
                  </Typography>
                  <Typography 
                    className="font-body text-sm text-gray-500"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    Scan QR code and pay directly via WhatsApp
                  </Typography>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-accent">Popular</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-accent">Instant</span>
                  </div>
                </div>
                <span className="text-green-600 text-3xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </button>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2">
              <span className="text-xl">💰</span>
              <Typography 
                className="font-accent text-yellow-800"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Total Amount: <span className="font-bold">${total.toFixed(2)}</span>
              </Typography>
            </div>
          </div>
        </DialogBody>
        <DialogFooter 
          className="justify-center pb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <Button 
            variant="text"
            onClick={() => setShowPaymentModal(false)}
            className="font-accent text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Cancel
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Card Payment Modal */}
      <Dialog 
        open={showCardModal} 
        handler={() => !isProcessing && setShowCardModal(false)}
        className="bg-white rounded-2xl max-w-lg"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
      >
        <DialogHeader 
          className="flex flex-col items-center pt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-sky-600 rounded-full flex items-center justify-center mb-3">
            <span className="text-3xl">💳</span>
          </div>
          <Typography 
            variant="h4" 
            className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Enter Card Details
          </Typography>
          <Typography 
            className="font-body text-gray-500 text-sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Order ID: {orderId}
          </Typography>
        </DialogHeader>
        <DialogBody 
          className="px-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <form className="space-y-5">
            <Input
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              className="!border-violet-200 focus:!border-violet-500"
              icon={<span className="text-lg">💳</span>}
              crossOrigin=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            />
            <Input
              label="Cardholder Name"
              placeholder="John Doe"
              className="!border-violet-200 focus:!border-violet-500"
              crossOrigin=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Expiry Date"
                placeholder="MM/YY"
                className="!border-violet-200 focus:!border-violet-500"
                crossOrigin=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              />
              <Input
                label="CVV"
                placeholder="123"
                type="password"
                className="!border-violet-200 focus:!border-violet-500"
                icon={<span className="text-lg">🔒</span>}
                crossOrigin=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              />
            </div>

            <Checkbox
              label={
                <Typography 
                  className="font-body text-gray-600 text-sm"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Save card for future purchases
                </Typography>
              }
              className="checked:bg-violet-600 checked:border-violet-600"
              crossOrigin=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            />

            <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-lg border border-violet-100">
              <span className="text-xl">🔒</span>
              <Typography 
                className="font-body text-xs text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Your payment is secured with 256-bit SSL encryption.
              </Typography>
            </div>
          </form>

          <div className="mt-6 p-4 bg-gradient-to-r from-violet-50 to-sky-50 rounded-lg border border-violet-200">
            <div className="flex justify-between items-center">
              <Typography 
                className="font-accent text-gray-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Amount to Pay:
              </Typography>
              <Typography 
                variant="h5" 
                className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                ${total.toFixed(2)}
              </Typography>
            </div>
          </div>
        </DialogBody>
        <DialogFooter 
          className="flex flex-col gap-3 px-8 pb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <Button 
            fullWidth
            onClick={handleCardPayment}
            disabled={isProcessing}
            className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 font-accent tracking-wider disabled:opacity-70"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Payment...
              </span>
            ) : (
              `✨ Pay $${total.toFixed(2)}`
            )}
          </Button>
          <Button 
            variant="text"
            fullWidth
            onClick={() => {
              setShowCardModal(false);
              setShowPaymentModal(true);
            }}
            disabled={isProcessing}
            className="font-accent text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            ← Choose different payment method
          </Button>
        </DialogFooter>
      </Dialog>

      {/* WhatsApp QR Code Modal */}
      <Dialog 
        open={showQRModal} 
        handler={() => setShowQRModal(false)}
        className="bg-white rounded-2xl"
        size="lg"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
      >
        {/* Header */}
        <DialogHeader 
          className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full blur-md opacity-50" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] rounded-full flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 48 48" className="w-7 h-7 drop-shadow">
                  <defs>
                    <linearGradient id="whatsappModalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#e8e8e8" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#whatsappModalGradient)" d="M24.001 4.003c-11.025 0-19.997 8.972-19.997 19.997 0 3.527.922 6.965 2.672 9.992l-2.833 10.351 10.613-2.784c2.9 1.582 6.167 2.417 9.545 2.417 11.024 0 19.996-8.972 19.996-19.997S35.025 4.003 24.001 4.003zm0 36.493c-3.07 0-6.078-.824-8.697-2.386l-.623-.37-6.461 1.694 1.724-6.299-.405-.644c-1.717-2.732-2.622-5.893-2.622-9.144 0-9.139 7.436-16.575 16.576-16.575 4.428 0 8.591 1.726 11.717 4.859 3.127 3.133 4.849 7.299 4.846 11.732-.003 9.14-7.439 16.576-16.579 16.576l.024-.003z"/>
                  <path fill="url(#whatsappModalGradient)" d="M34.947 28.879c-.575-.288-3.403-1.679-3.932-1.871-.529-.192-.914-.288-1.299.288-.385.575-1.492 1.871-1.829 2.256-.337.385-.674.433-1.249.144-.575-.288-2.429-.895-4.627-2.855-1.711-1.525-2.865-3.409-3.202-3.984-.337-.575-.036-.886.253-1.173.26-.258.575-.673.863-1.01.288-.337.385-.577.577-.961.192-.385.096-.721-.048-1.01-.144-.288-1.299-3.129-1.779-4.284-.468-1.125-.943-1.01-1.299-1.01l-1.106-.021c-.385 0-1.01.144-1.539.721-.529.577-2.021 1.975-2.021 4.815 0 2.841 2.069 5.586 2.357 5.972.288.385 4.071 6.215 9.861 8.717 1.379.596 2.455.951 3.293 1.217 1.383.439 2.642.377 3.637.229 1.109-.165 3.403-1.39 3.883-2.734.481-1.343.481-2.494.337-2.734-.144-.24-.529-.384-1.104-.673z"/>
                </svg>
              </div>
            </div>
            <div>
              <Typography 
                variant="h5" 
                className="font-display bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Scan to Pay via WhatsApp
              </Typography>
              <Typography 
                className="font-body text-gray-500 text-xs"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Order ID: {orderId}
              </Typography>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
            <Typography 
              className="font-display text-green-700 font-bold"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              ${total.toFixed(2)}
            </Typography>
          </div>
        </DialogHeader>

        {/* Body - Two Column Layout */}
        <DialogBody 
          className="p-6"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <div className="flex gap-6">
            {/* Left Side - QR Code */}
            <div className="flex-shrink-0">
              <div className="bg-white p-3 rounded-2xl shadow-xl border-4 border-green-500">
                <img 
                  src={getQRCodeUrl()} 
                  alt="Payment QR Code"
                  className="w-52 h-52"
                />
              </div>
              <div className="text-center mt-3">
                <Typography 
                  className="font-body text-gray-500 text-xs"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Scan with phone camera
                </Typography>
              </div>
            </div>

            {/* Right Side - Instructions */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
                <Typography 
                  className="font-accent text-green-800 text-sm mb-3 flex items-center gap-2"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  <span className="text-lg">📱</span> How to pay:
                </Typography>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <Typography 
                      className="font-body text-sm text-gray-700"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      Scan the QR code with your phone camera
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <Typography 
                      className="font-body text-sm text-gray-700"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      Complete the payment via WhatsApp
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <Typography 
                      className="font-body text-sm text-gray-700"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      Take a screenshot of payment confirmation
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <Typography 
                      className="font-body text-sm text-gray-700"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                    >
                      Click &quot;Payment Done&quot; &amp; upload screenshot
                    </Typography>
                  </li>
                </ol>
              </div>

              {/* Info Box */}
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200 flex items-center gap-2">
                <span className="text-lg">💡</span>
                <Typography 
                  className="font-body text-xs text-yellow-800"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Keep your payment screenshot ready for verification
                </Typography>
              </div>
            </div>
          </div>
        </DialogBody>

        {/* Footer - Buttons */}
        <DialogFooter 
          className="flex gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <Button 
            variant="outlined"
            onClick={() => {
              setShowQRModal(false);
              setShowPaymentModal(true);
            }}
            className="font-accent text-gray-600 border-gray-300"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            ← Back
          </Button>
          <Button 
            onClick={handlePaymentDone}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 font-accent tracking-wider"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            ✅ Payment Done - Upload Screenshot
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Payment Screenshot Upload Modal */}
      <Dialog 
        open={showScreenshotModal} 
        handler={() => !isProcessing && setShowScreenshotModal(false)}
        className="bg-white rounded-2xl max-w-md"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
      >
        <DialogHeader 
          className="flex flex-col items-center pt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-sky-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-4xl">📸</span>
          </div>
          <Typography 
            variant="h4" 
            className="font-display bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Upload Payment Proof
          </Typography>
          <Typography 
            className="font-body text-gray-500 text-sm text-center mt-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Please upload a screenshot of your payment confirmation
          </Typography>
        </DialogHeader>
        <DialogBody 
          className="px-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Upload Area */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
              paymentScreenshot 
                ? 'border-green-400 bg-green-50' 
                : 'border-violet-300 hover:border-violet-500 hover:bg-violet-50'
            }`}
          >
            {paymentScreenshot ? (
              <div className="space-y-3">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <img 
                    src={paymentScreenshot} 
                    alt="Payment screenshot"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <span>✅</span>
                  <Typography 
                    className="font-accent text-sm"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    {screenshotFileName}
                  </Typography>
                </div>
                <Typography 
                  className="font-body text-xs text-gray-500"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Click to change image
                </Typography>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto bg-violet-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📤</span>
                </div>
                <Typography 
                  className="font-accent text-violet-700"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Click to upload screenshot
                </Typography>
                <Typography 
                  className="font-body text-xs text-gray-500"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Supports: JPG, PNG, WEBP (Max 5MB)
                </Typography>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="mt-6 p-4 bg-gradient-to-r from-violet-50 to-sky-50 rounded-lg border border-violet-200">
            <Typography 
              className="font-accent text-sm text-violet-700 mb-2"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              Order Summary
            </Typography>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Order ID:</span>
                <span className="font-accent text-violet-700">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Amount Paid:</span>
                <span className="font-accent text-green-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Info Notice */}
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-2">
              <span className="text-lg">💡</span>
              <Typography 
                className="font-body text-xs text-yellow-800"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Your order details, shipping info, and payment proof will be saved securely. You&apos;ll receive a confirmation via WhatsApp and email.
              </Typography>
            </div>
          </div>
        </DialogBody>
        <DialogFooter 
          className="flex flex-col gap-3 px-8 pb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <Button 
            fullWidth
            onClick={handleCompleteOrder}
            disabled={isProcessing || !paymentScreenshot}
            className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 font-accent tracking-wider disabled:opacity-50"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Order...
              </span>
            ) : (
              '✅ Complete Order'
            )}
          </Button>
          <Button 
            variant="text"
            fullWidth
            onClick={() => {
              setShowScreenshotModal(false);
              setShowQRModal(true);
              setPaymentScreenshot(null);
              setScreenshotFileName('');
            }}
            disabled={isProcessing}
            className="font-accent text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            ← Back to QR Code
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Order Confirmation Modal */}
      <Dialog 
        open={showConfirmationModal} 
        handler={() => {}}
        className="bg-white rounded-2xl"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
      >
        <DialogHeader 
          className="flex flex-col items-center pt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 animate-bounce shadow-lg">
            <span className="text-4xl">✅</span>
          </div>
          <Typography 
            variant="h3" 
            className="font-display text-green-600"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Order Confirmed!
          </Typography>
        </DialogHeader>
        <DialogBody 
          className="text-center px-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <div className="bg-gradient-to-r from-violet-50 to-sky-50 rounded-xl p-6 mb-6">
            <Typography 
              className="font-body text-gray-600 mb-2"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              Your Order ID
            </Typography>
            <Typography 
              variant="h4" 
              className="font-display text-violet-700"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              {orderId}
            </Typography>
            <Typography 
              className="font-body text-xs text-gray-500 mt-2"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              Save this ID to track your order
            </Typography>
          </div>

          <Typography 
            className="font-body text-gray-600 mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            🎉 Thank you for your order! We&apos;ve sent a confirmation message with your order details via WhatsApp.
          </Typography>

          <div className="space-y-3 text-left bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Order saved successfully
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Payment proof uploaded
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Confirmation sent to {customerDetails.email}
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                WhatsApp notification sent to {customerDetails.phone}
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Estimated delivery: {shippingMethod === 'nextday' ? 'Tomorrow' : shippingMethod === 'express' ? '2-3 business days' : '5-7 business days'}
              </Typography>
            </div>
          </div>

          {/* Track Order Info */}
          <div className="mt-4 p-4 bg-violet-50 rounded-lg border border-violet-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl">📦</span>
              <Typography 
                className="font-accent text-violet-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Track Your Order
              </Typography>
            </div>
            <Typography 
              className="font-body text-xs text-gray-600"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              Use your Order ID <span className="font-accent text-violet-700">{orderId}</span> to track your order status anytime.
            </Typography>
          </div>
        </DialogBody>
        <DialogFooter 
          className="flex flex-col gap-3 px-8 pb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
        >
          <Link href="/track-order" className="w-full">
            <Button 
              fullWidth
              className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 font-accent tracking-wider"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              📦 Track Your Order
            </Button>
          </Link>
          <Link href="/shop" className="w-full">
            <Button 
              variant="outlined"
              fullWidth
              className="border-violet-300 text-violet-600 font-accent"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              🛍️ Continue Shopping
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </Layout>
  );
};

export default CheckoutPage;
