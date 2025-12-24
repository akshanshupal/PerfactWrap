import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import {
  Typography,
  Button,
  Input,
  Checkbox,
  Card,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";

const SignInPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('email');
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Handle Google Sign In
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Simulate Google OAuth
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  // Handle Email Sign In
  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  // Handle Send OTP
  const handleSendOTP = () => {
    if (!phoneNumber || phoneNumber.length < 10) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setShowOTPModal(true);
      startCountdown();
    }, 1000);
  };

  // Start countdown for resend OTP
  const startCountdown = () => {
    setCountdown(30);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle OTP input change
  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle OTP verification
  const handleVerifyOTP = () => {
    const otp = otpValues.join('');
    if (otp.length !== 6) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowOTPModal(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  // Resend OTP
  const handleResendOTP = () => {
    if (countdown > 0) return;
    setOtpValues(['', '', '', '', '', '']);
    startCountdown();
  };

  return (
    <Layout 
      title="Sign In - Perfect Wrap"
      description="Sign in to your Perfect Wrap account"
    >
      {/* Hero Section */}
      <section className="min-h-screen py-16 bg-gradient-to-br from-violet-100 via-white to-sky-100 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-violet-300 blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sky-300 blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-rose-300 blur-3xl opacity-10" />
        
        <div className="relative max-w-md mx-auto px-4">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <Link href="/">
              <span className="text-5xl mb-4 block animate-bounce">🎁</span>
            </Link>
            <Typography 
              variant="h2" 
              className="font-display mb-2"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
                Welcome Back
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
              Sign in to continue to Perfect Wrap
            </Typography>
          </div>

          {/* Sign In Card */}
          <Card 
            className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm"
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
              {/* Google Sign In Button */}
              <Button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                fullWidth
                variant="outlined"
                className="flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all mb-6 py-3"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                {isLoading && activeTab === 'google' ? (
                  <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )}
                <span className="font-accent text-gray-700">Continue with Google</span>
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-body">or continue with</span>
                </div>
              </div>

              {/* Tabs for Email/Phone */}
              <Tabs value={activeTab} className="mb-6">
                <TabsHeader
                  className="bg-violet-50 p-1"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  <Tab 
                    value="email" 
                    onClick={() => setActiveTab('email')}
                    className={`font-accent text-sm ${activeTab === 'email' ? 'text-violet-700' : 'text-gray-600'}`}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    📧 Email
                  </Tab>
                  <Tab 
                    value="phone" 
                    onClick={() => setActiveTab('phone')}
                    className={`font-accent text-sm ${activeTab === 'phone' ? 'text-violet-700' : 'text-gray-600'}`}
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                  >
                    📱 Phone
                  </Tab>
                </TabsHeader>
                <TabsBody
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  {/* Email Tab */}
                  <TabPanel value="email" className="p-0 pt-6">
                    <form onSubmit={handleEmailSignIn} className="space-y-5">
                      <Input
                        type="email"
                        label="Email Address"
                        placeholder="you@example.com"
                        className="!border-violet-200 focus:!border-violet-500"
                        labelProps={{ className: "font-accent" }}
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      />
                      <Input
                        type="password"
                        label="Password"
                        placeholder="••••••••"
                        className="!border-violet-200 focus:!border-violet-500"
                        labelProps={{ className: "font-accent" }}
                        crossOrigin=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      />
                      
                      <div className="flex items-center justify-between">
                        <Checkbox
                          label={
                            <Typography 
                              className="font-body text-sm text-gray-600"
                              placeholder=""
                              onPointerEnterCapture={() => {}}
                              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                            >
                              Remember me
                            </Typography>
                          }
                          className="checked:bg-violet-600 checked:border-violet-600"
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        />
                        <Link href="#" className="font-accent text-sm text-violet-600 hover:text-violet-700">
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        fullWidth
                        disabled={isLoading}
                        className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 shadow-lg font-accent tracking-wider py-3"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Signing in...
                          </span>
                        ) : (
                          '✨ Sign In'
                        )}
                      </Button>
                    </form>
                  </TabPanel>

                  {/* Phone Tab */}
                  <TabPanel value="phone" className="p-0 pt-6">
                    <div className="space-y-5">
                      <div className="relative">
                        <Input
                          type="tel"
                          label="Phone Number"
                          placeholder="+91 98765 43210"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="!border-violet-200 focus:!border-violet-500"
                          labelProps={{ className: "font-accent" }}
                          crossOrigin=""
                          onPointerEnterCapture={() => {}}
                          onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                        />
                      </div>

                      <div className="p-4 bg-violet-50 rounded-lg border border-violet-100">
                        <div className="flex items-start gap-3">
                          <span className="text-xl">📱</span>
                          <Typography 
                            className="font-body text-sm text-gray-600"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                          >
                            We&apos;ll send a 6-digit OTP to your phone number for verification.
                          </Typography>
                        </div>
                      </div>

                      <Button
                        onClick={handleSendOTP}
                        fullWidth
                        disabled={isLoading || !phoneNumber || phoneNumber.length < 10}
                        className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 shadow-lg font-accent tracking-wider py-3 disabled:opacity-50"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending OTP...
                          </span>
                        ) : (
                          '📲 Send OTP'
                        )}
                      </Button>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>

              {/* Sign Up Link */}
              <div className="text-center mt-6 pt-6 border-t border-gray-100">
                <Typography 
                  className="font-body text-gray-600"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="font-accent text-violet-600 hover:text-violet-700">
                    Sign up
                  </Link>
                </Typography>
              </div>
            </CardBody>
          </Card>

          {/* Footer Links */}
          <div className="text-center mt-8">
            <Typography 
              className="font-body text-sm text-gray-500"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              By signing in, you agree to our{' '}
              <Link href="#" className="text-violet-600 hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link href="#" className="text-violet-600 hover:underline">Privacy Policy</Link>
            </Typography>
          </div>
        </div>
      </section>

      {/* OTP Verification Modal */}
      <Dialog 
        open={showOTPModal} 
        handler={() => setShowOTPModal(false)}
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
            <span className="text-4xl">📱</span>
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
            Verify OTP
          </Typography>
          <Typography 
            className="font-body text-gray-500 text-sm text-center mt-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            We&apos;ve sent a 6-digit code to<br />
            <span className="font-accent text-violet-600">{phoneNumber}</span>
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
          {/* OTP Input Boxes */}
          <div className="flex justify-center gap-3 mb-6">
            {otpValues.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !value && index > 0) {
                    const prevInput = document.getElementById(`otp-${index - 1}`);
                    prevInput?.focus();
                  }
                }}
                className="w-12 h-14 text-center text-2xl font-display border-2 border-violet-200 rounded-xl focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 transition-all"
              />
            ))}
          </div>

          {/* Resend OTP */}
          <div className="text-center">
            {countdown > 0 ? (
              <Typography 
                className="font-body text-sm text-gray-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
              >
                Resend OTP in <span className="font-accent text-violet-600">{countdown}s</span>
              </Typography>
            ) : (
              <button
                onClick={handleResendOTP}
                className="font-accent text-sm text-violet-600 hover:text-violet-700"
              >
                🔄 Resend OTP
              </button>
            )}
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
            onClick={handleVerifyOTP}
            disabled={isLoading || otpValues.join('').length !== 6}
            className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 font-accent tracking-wider disabled:opacity-50"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </span>
            ) : (
              '✅ Verify & Sign In'
            )}
          </Button>
          <Button 
            variant="text"
            fullWidth
            onClick={() => {
              setShowOTPModal(false);
              setOtpSent(false);
              setOtpValues(['', '', '', '', '', '']);
            }}
            className="font-accent text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            ← Change phone number
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Success Modal */}
      <Dialog 
        open={showSuccessModal} 
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
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 animate-bounce shadow-lg">
            <span className="text-5xl">✅</span>
          </div>
          <Typography 
            variant="h3" 
            className="font-display bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            Welcome!
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
          <Typography 
            className="font-body text-gray-600 mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
          >
            🎉 You have successfully signed in to your Perfect Wrap account!
          </Typography>

          <div className="bg-gradient-to-r from-violet-50 to-sky-50 rounded-xl p-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-sky-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <Typography 
                  className="font-accent text-gray-800"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  John Doe
                </Typography>
                <Typography 
                  className="font-body text-sm text-gray-500"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
                >
                  john.doe@example.com
                </Typography>
              </div>
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
          <Link href="/shop" className="w-full">
            <Button 
              fullWidth
              className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 font-accent tracking-wider"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
                onResize={() => {}}
                onResizeCapture={() => {}}
            >
              🛍️ Start Shopping
            </Button>
          </Link>
          <Link href="/" className="w-full">
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
              🏠 Go to Homepage
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </Layout>
  );
};

export default SignInPage;

