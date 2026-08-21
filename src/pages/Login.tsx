import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  KeyRound,
  UserCheck
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotInput, setForgotInput] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!identifier.trim()) {
      setErrorMessage('Please enter your registered email or 10-digit mobile number.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters in length.');
      return;
    }

    setIsLoading(true);

    // Simulate secure authentication check
    setTimeout(() => {
      setIsLoading(false);
      // Demo credentials validation
      if (
        identifier.toLowerCase().includes('seraj') ||
        identifier.toLowerCase().includes('admin') ||
        identifier === '7004493684' ||
        identifier.includes('@')
      ) {
        setSuccessMessage(`Welcome back! Authenticated successfully for Seraj Medical portal.`);
      } else {
        setErrorMessage('Invalid credentials or unregistered account. Please check your mobile/email.');
      }
    }, 1200);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotInput.trim()) {
      setForgotSubmitted(true);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-[#E0E0E0] transition-colors relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <SEOHead 
        title="Secure Login | Customer & Staff Portal"
        description="Secure login portal for Seraj Medical Hall customers, prescription tracking, and pharmacy staff."
        canonicalPath="/login"
      />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Logo and Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center justify-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/10 group-hover:scale-105 transition">
              <HeartPulse className="w-7 h-7" />
            </div>
            <div className="text-left">
              <span className="text-xl font-bold tracking-tight text-white block leading-none font-display">
                SERAJ <span className="text-[#D4AF37]">MEDICAL</span>
              </span>
              <span className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider font-mono">
                Jehanabad Portal
              </span>
            </div>
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white pt-2 font-display">
            Secure Portal Login
          </h1>
          <p className="text-xs sm:text-sm text-[#888888]">
            Access your prescription history, refill orders, and staff dispensary management.
          </p>
        </div>

        {/* Card Box */}
        <div className="bg-[#111111] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#222222] space-y-6">
          {/* Error Message Box */}
          {errorMessage && (
            <div className="p-3.5 bg-rose-950/40 border border-rose-800 rounded-2xl text-rose-300 text-xs flex items-center gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success Message Box */}
          {successMessage && (
            <div className="p-3.5 bg-[#161616] border border-[#D4AF37]/40 rounded-2xl text-[#D4AF37] text-xs flex items-center gap-2.5 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
            {/* Email / Mobile Field */}
            <div>
              <label 
                htmlFor="user-identifier"
                className="block text-xs font-bold text-[#AAAAAA] mb-1.5"
              >
                Email Address or Mobile Number <span className="text-[#D4AF37]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#666666]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="user-identifier"
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="e.g. 7004493684 or patient@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl border border-[#2A2A2A] bg-[#161616] text-white placeholder-[#555555] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition text-xs sm:text-sm"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password Field with Show/Hide */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label 
                  htmlFor="user-password"
                  className="block text-xs font-bold text-[#AAAAAA]"
                >
                  Password <span className="text-[#D4AF37]">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs font-semibold text-[#D4AF37] hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#666666]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="user-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="Enter your secret password"
                  className="w-full pl-10 pr-11 py-3 rounded-2xl border border-[#2A2A2A] bg-[#161616] text-white placeholder-[#555555] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition text-xs sm:text-sm"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#666666] hover:text-[#AAAAAA] cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37] border-[#2A2A2A] bg-[#161616]"
                />
                <span className="text-xs text-[#888888]">
                  Remember this device for 30 days
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#D4AF37]/20 transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Secure Login</span>
                </>
              )}
            </button>
          </form>

          {/* Security Banner */}
          <div className="pt-4 border-t border-[#1C1C1C] text-center">
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#888888]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>256-Bit SSL Encrypted Healthcare Session</span>
            </div>
          </div>
        </div>

        {/* Demo Helper / Notice */}
        <div className="text-center text-xs text-[#888888] space-y-1">
          <p>
            Need help accessing your patient account? Call our pharmacy helpline on{' '}
            <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-[#D4AF37] hover:underline font-mono">
              {SITE_CONFIG.phone}
            </a>.
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-md bg-[#111111] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#222222] text-[#E0E0E0]"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#282828] text-[#D4AF37] flex items-center justify-center font-bold">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight font-display text-white">Reset Account Password</h3>
                <p className="text-xs text-[#888888]">OTP verification for registered mobile/email</p>
              </div>
            </div>

            {forgotSubmitted ? (
              <div className="space-y-4 py-2">
                <div className="p-4 bg-[#161616] rounded-2xl border border-[#D4AF37]/40 text-center">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-white font-display">OTP Dispatched!</h4>
                  <p className="text-xs text-[#AAAAAA] mt-1">
                    A 6-digit password reset verification code has been sent to <strong className="text-white">{forgotInput}</strong>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowForgotModal(false);
                    setForgotSubmitted(false);
                    setForgotInput('');
                  }}
                  className="w-full py-3 bg-[#D4AF37] hover:bg-[#B8962D] text-black font-bold uppercase tracking-wider rounded-xl text-xs transition"
                >
                  Return to Login
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <p className="text-xs text-[#AAAAAA] leading-relaxed">
                  Enter your registered mobile number or email address associated with Seraj Medical Hall. We will send a secure verification code to reset your password.
                </p>

                <div>
                  <label className="block text-xs font-bold text-[#AAAAAA] mb-1">
                    Registered Mobile / Email
                  </label>
                  <input
                    type="text"
                    required
                    value={forgotInput}
                    onChange={(e) => setForgotInput(e.target.value)}
                    placeholder="e.g. 7004493684"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#2A2A2A] bg-[#161616] text-white text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] placeholder:text-[#555555]"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] border border-[#2A2A2A] text-[#888888] hover:text-white text-xs font-bold uppercase tracking-wider transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#B8962D] text-black text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-[#D4AF37]/20"
                  >
                    Send Reset OTP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
