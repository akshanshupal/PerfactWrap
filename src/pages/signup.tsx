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
} from "@material-tailwind/react";

const SignUpPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  // Handle Google Sign Up
  const handleGoogleSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  // Handle Email Sign Up
  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  return (
    <Layout 
      title="Sign Up - Perfect Wrap"
      description="Create your Perfect Wrap account"
    >
      {/* Hero Section */}
      <section className="min-h-screen py-12 bg-gradient-to-br from-violet-100 via-white to-sky-100 relative overflow-hidden">
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
            >
              <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
                Create Account
              </span>
            </Typography>
            <Typography 
              className="font-body text-gray-600"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Join Perfect Wrap for exclusive offers
            </Typography>
          </div>

          {/* Sign Up Card */}
          <Card 
            className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm"
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
              {/* Google Sign Up Button */}
              <Button
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                fullWidth
                variant="outlined"
                className="flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all mb-6 py-3"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-accent text-gray-700">Sign up with Google</span>
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-body">or sign up with email</span>
                </div>
              </div>

              {/* Sign Up Form */}
              <form onSubmit={handleEmailSignUp} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="!border-violet-200 focus:!border-violet-500"
                    crossOrigin=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="!border-violet-200 focus:!border-violet-500"
                    crossOrigin=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  />
                </div>
                
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="!border-violet-200 focus:!border-violet-500"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />

                <Input
                  type="tel"
                  label="Phone Number (Optional)"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="!border-violet-200 focus:!border-violet-500"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />

                <Input
                  type="password"
                  label="Password"
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="!border-violet-200 focus:!border-violet-500"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />

                <Input
                  type="password"
                  label="Confirm Password"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="!border-violet-200 focus:!border-violet-500"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />

                {/* Password Requirements */}
                <div className="p-3 bg-violet-50 rounded-lg border border-violet-100">
                  <Typography 
                    className="font-accent text-xs text-violet-700 mb-2"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Password must contain:
                  </Typography>
                  <ul className="text-xs text-gray-600 space-y-1 font-body">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> At least 8 characters
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> One uppercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> One number
                    </li>
                  </ul>
                </div>
                
                <Checkbox
                  label={
                    <Typography 
                      className="font-body text-sm text-gray-600"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      I agree to the{' '}
                      <Link href="#" className="text-violet-600 hover:underline">Terms of Service</Link>
                      {' '}and{' '}
                      <Link href="#" className="text-violet-600 hover:underline">Privacy Policy</Link>
                    </Typography>
                  }
                  className="checked:bg-violet-600 checked:border-violet-600"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />

                <Checkbox
                  label={
                    <Typography 
                      className="font-body text-sm text-gray-600"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Send me exclusive offers and updates via email
                    </Typography>
                  }
                  defaultChecked
                  className="checked:bg-violet-600 checked:border-violet-600"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />

                <Button
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                  className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 shadow-lg font-accent tracking-wider py-3"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    '🎉 Create Account'
                  )}
                </Button>
              </form>

              {/* Sign In Link */}
              <div className="text-center mt-6 pt-6 border-t border-gray-100">
                <Typography 
                  className="font-body text-gray-600"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Already have an account?{' '}
                  <Link href="/signin" className="font-accent text-violet-600 hover:text-violet-700">
                    Sign in
                  </Link>
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog 
        open={showSuccessModal} 
        handler={() => {}}
        className="bg-white rounded-2xl"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <DialogHeader 
          className="flex flex-col items-center pt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 animate-bounce shadow-lg">
            <span className="text-5xl">🎉</span>
          </div>
          <Typography 
            variant="h3" 
            className="font-display bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Account Created!
          </Typography>
        </DialogHeader>
        <DialogBody 
          className="text-center px-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Typography 
            className="font-body text-gray-600 mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Welcome to Perfect Wrap! Your account has been successfully created.
          </Typography>

          <div className="bg-gradient-to-r from-violet-50 to-sky-50 rounded-xl p-6 text-left space-y-3">
            <div className="flex items-center gap-2 text-green-600">
              <span>✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Account verified
              </Typography>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <span>✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Welcome email sent
              </Typography>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <span>✓</span>
              <Typography 
                className="font-body text-sm text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                10% off coupon added to your account!
              </Typography>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">🎁</span>
              <Typography 
                className="font-accent text-yellow-800"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Use code <span className="font-bold">WELCOME10</span> for 10% off!
              </Typography>
            </div>
          </div>
        </DialogBody>
        <DialogFooter 
          className="flex flex-col gap-3 px-8 pb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Link href="/shop" className="w-full">
            <Button 
              fullWidth
              className="bg-gradient-to-r from-violet-600 to-sky-600 hover:from-violet-700 hover:to-sky-700 font-accent tracking-wider"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
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
            >
              🏠 Go to Homepage
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </Layout>
  );
};

export default SignUpPage;

