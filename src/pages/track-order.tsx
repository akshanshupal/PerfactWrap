import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { Typography, Input, Button, Card, CardBody } from '@material-tailwind/react';

// Mock order data for demonstration
const mockOrders: Record<string, {
  id: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  date: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  shipping: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  tracking?: {
    carrier: string;
    number: string;
    estimatedDelivery: string;
  };
  timeline: {
    status: string;
    date: string;
    completed: boolean;
  }[];
}> = {
  'PW-DEMO123-ABCD': {
    id: 'PW-DEMO123-ABCD',
    status: 'shipped',
    date: '2024-12-20',
    items: [
      { name: 'Premium Gift Box - Large', quantity: 2, price: 24.99 },
      { name: 'Silk Ribbon Set', quantity: 1, price: 12.99 },
    ],
    total: 62.97,
    shipping: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
    },
    tracking: {
      carrier: 'FedEx',
      number: '1234567890',
      estimatedDelivery: 'Dec 25, 2024',
    },
    timeline: [
      { status: 'Order Placed', date: 'Dec 20, 2024 10:30 AM', completed: true },
      { status: 'Payment Confirmed', date: 'Dec 20, 2024 10:35 AM', completed: true },
      { status: 'Processing', date: 'Dec 20, 2024 02:00 PM', completed: true },
      { status: 'Shipped', date: 'Dec 21, 2024 09:00 AM', completed: true },
      { status: 'Out for Delivery', date: 'Expected Dec 25, 2024', completed: false },
      { status: 'Delivered', date: 'Pending', completed: false },
    ],
  },
};

const statusColors = {
  pending: 'bg-yellow-500',
  confirmed: 'bg-blue-500',
  processing: 'bg-violet-500',
  shipped: 'bg-sky-500',
  delivered: 'bg-green-500',
};

const statusLabels = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  processing: 'Processing',
  shipped: 'Shipped',
  delivered: 'Delivered',
};

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<typeof mockOrders[string] | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!orderId.trim()) {
      setError('Please enter an order ID');
      return;
    }

    setIsSearching(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const foundOrder = mockOrders[orderId.toUpperCase()];
    if (foundOrder) {
      setOrder(foundOrder);
      setError('');
    } else {
      setOrder(null);
      setError('Order not found. Please check your order ID and try again.');
    }

    setIsSearching(false);
  };

  return (
    <Layout>
      <Head>
        <title>Track Order - Perfect Wrap</title>
        <meta name="description" content="Track your Perfect Wrap order" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-sky-500 to-emerald-500" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] text-6xl animate-bounce" style={{ animationDuration: '3s' }}>📦</div>
          <div className="absolute top-40 right-[15%] text-5xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>🚚</div>
          <div className="absolute bottom-20 left-[20%] text-4xl animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }}>✨</div>
          <div className="absolute bottom-40 right-[25%] text-5xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }}>🎁</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <Typography
              variant="h1"
              className="font-display text-4xl md:text-6xl mb-4 drop-shadow-lg"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Track Your Order
            </Typography>
            <Typography
              className="font-body text-xl text-white/90 max-w-2xl mx-auto"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Enter your order ID to see real-time updates on your perfect packaging
            </Typography>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <Card
            className="max-w-2xl mx-auto shadow-2xl border-0"
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
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    label="Order ID"
                    placeholder="e.g., PW-DEMO123-ABCD"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="!text-lg"
                    icon={<span className="text-xl">🔍</span>}
                    crossOrigin=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 font-accent tracking-wider px-8 h-[42px]"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {isSearching ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Searching...
                    </span>
                  ) : (
                    'Track Order'
                  )}
                </Button>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <span className="text-2xl">❌</span>
                  <Typography
                    className="font-body text-red-700"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {error}
                  </Typography>
                </div>
              )}

              <div className="mt-4 text-center">
                <Typography
                  className="font-body text-gray-500 text-sm"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  💡 Try demo order ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-violet-600">PW-DEMO123-ABCD</span>
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Order Details Section */}
      {order && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Order Status Card */}
              <Card
                className="overflow-hidden"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <div className={`${statusColors[order.status]} p-6 text-white`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <Typography
                        className="font-body text-white/80 text-sm mb-1"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Order Status
                      </Typography>
                      <Typography
                        variant="h3"
                        className="font-display"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {statusLabels[order.status]}
                      </Typography>
                    </div>
                    <div className="text-right">
                      <Typography
                        className="font-body text-white/80 text-sm mb-1"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Order ID
                      </Typography>
                      <Typography
                        variant="h5"
                        className="font-mono"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        {order.id}
                      </Typography>
                    </div>
                  </div>
                </div>

                <CardBody
                  className="p-6"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {/* Timeline */}
                  <div className="mb-8">
                    <Typography
                      variant="h5"
                      className="font-display text-gray-800 mb-6 flex items-center gap-2"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      <span>📍</span> Order Timeline
                    </Typography>

                    <div className="relative">
                      {order.timeline.map((item, index) => (
                        <div key={index} className="flex gap-4 mb-6 last:mb-0">
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              item.completed 
                                ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white' 
                                : 'bg-gray-200 text-gray-400'
                            }`}>
                              {item.completed ? '✓' : (index + 1)}
                            </div>
                            {index < order.timeline.length - 1 && (
                              <div className={`w-0.5 h-12 ${
                                item.completed ? 'bg-gradient-to-b from-green-400 to-emerald-500' : 'bg-gray-200'
                              }`} />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <Typography
                              className={`font-accent ${item.completed ? 'text-gray-800' : 'text-gray-400'}`}
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                            >
                              {item.status}
                            </Typography>
                            <Typography
                              className={`font-body text-sm ${item.completed ? 'text-gray-500' : 'text-gray-400'}`}
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                            >
                              {item.date}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking Info */}
                  {order.tracking && (
                    <div className="p-4 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-xl border border-sky-200 mb-6">
                      <Typography
                        className="font-accent text-sky-700 mb-3 flex items-center gap-2"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        <span>🚚</span> Shipping Information
                      </Typography>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Typography
                            className="font-body text-xs text-gray-500 mb-1"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            Carrier
                          </Typography>
                          <Typography
                            className="font-accent text-gray-800"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            {order.tracking.carrier}
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            className="font-body text-xs text-gray-500 mb-1"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            Tracking Number
                          </Typography>
                          <Typography
                            className="font-mono text-sky-600"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            {order.tracking.number}
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            className="font-body text-xs text-gray-500 mb-1"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            Estimated Delivery
                          </Typography>
                          <Typography
                            className="font-accent text-emerald-600"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            {order.tracking.estimatedDelivery}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Order Items & Shipping */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Order Items */}
                    <div className="p-4 bg-violet-50 rounded-xl border border-violet-200">
                      <Typography
                        className="font-accent text-violet-700 mb-3 flex items-center gap-2"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        <span>🎁</span> Order Items
                      </Typography>
                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <Typography
                                className="font-body text-gray-800"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                className="font-body text-xs text-gray-500"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                              >
                                Qty: {item.quantity}
                              </Typography>
                            </div>
                            <Typography
                              className="font-accent text-violet-700"
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                            >
                              ${(item.price * item.quantity).toFixed(2)}
                            </Typography>
                          </div>
                        ))}
                        <div className="pt-3 border-t border-violet-200 flex justify-between items-center">
                          <Typography
                            className="font-accent text-gray-800"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            Total
                          </Typography>
                          <Typography
                            variant="h5"
                            className="font-display text-violet-700"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                          >
                            ${order.total.toFixed(2)}
                          </Typography>
                        </div>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <Typography
                        className="font-accent text-emerald-700 mb-3 flex items-center gap-2"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        <span>📬</span> Shipping Address
                      </Typography>
                      <div className="space-y-1">
                        <Typography
                          className="font-body font-semibold text-gray-800"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          {order.shipping.name}
                        </Typography>
                        <Typography
                          className="font-body text-gray-600"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          {order.shipping.address}
                        </Typography>
                        <Typography
                          className="font-body text-gray-600"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          {order.shipping.city}, {order.shipping.state} {order.shipping.zip}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Help Section */}
              <Card
                className="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200"
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
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <span className="text-4xl">💬</span>
                    <div className="flex-1 text-center md:text-left">
                      <Typography
                        variant="h6"
                        className="font-display text-gray-800"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Need Help with Your Order?
                      </Typography>
                      <Typography
                        className="font-body text-gray-600"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      >
                        Our support team is here to assist you with any questions
                      </Typography>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 font-accent"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Contact Support
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {!order && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-violet-50">
          <div className="container mx-auto px-4">
            <Typography
              variant="h3"
              className="font-display text-center mb-12 bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Frequently Asked Questions
            </Typography>

            <div className="max-w-3xl mx-auto grid gap-6">
              {[
                {
                  q: 'Where can I find my order ID?',
                  a: 'Your order ID is included in the confirmation email sent after your purchase. It starts with "PW-" followed by a unique code.',
                  icon: '📧',
                },
                {
                  q: 'How long does shipping take?',
                  a: 'Standard shipping takes 5-7 business days. Express shipping is 2-3 business days. You\'ll receive tracking information once your order ships.',
                  icon: '🚚',
                },
                {
                  q: 'Can I change my shipping address?',
                  a: 'You can modify your shipping address within 2 hours of placing your order. Please contact our support team immediately for changes.',
                  icon: '📍',
                },
                {
                  q: 'What if my package is delayed?',
                  a: 'If your package is delayed beyond the estimated delivery date, please contact our support team with your order ID for assistance.',
                  icon: '⏰',
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
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
                    <div className="flex gap-4">
                      <span className="text-3xl">{faq.icon}</span>
                      <div>
                        <Typography
                          variant="h6"
                          className="font-display text-gray-800 mb-2"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          {faq.q}
                        </Typography>
                        <Typography
                          className="font-body text-gray-600"
                          placeholder=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                        >
                          {faq.a}
                        </Typography>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

