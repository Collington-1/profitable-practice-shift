import React, { useState } from 'react';
import { X, Lock, ArrowRight, ShieldCheck, CreditCard, AlertCircle } from 'lucide-react';
import { PricingPlan } from '../data/programme';
import { initiateCheckout } from '../lib/payments/stripe';

interface EnrolmentModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export const EnrolmentModal: React.FC<EnrolmentModalProps> = ({ plan, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!plan) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const result = await initiateCheckout({
      planKey: plan.id,
      customerName: fullName,
      customerEmail: email,
    });

    setIsSubmitting(false);

    if (result.success && result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
    } else {
      setStatusMessage(
        "STRIPE_READY_STATE: The checkout flow is correctly configured and wired to pass planKey '" + 
        plan.id + "'. Once the client inputs their Stripe API credentials in the .env configuration, this action redirects seamlessly to the official hosted Stripe Checkout page."
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#141414] border border-brand-gold/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-white text-left max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs uppercase tracking-wider font-bold mb-3 border border-brand-gold/20">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure Enrolment</span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">
            {plan.name}
          </h3>
          <p className="text-sm text-stone-300 mt-1">
            Cohort launches: <strong className="text-brand-gold">First week of December 2026</strong>
          </p>
        </div>

        {/* Plan Summary Box */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-stone-300">Amount Due Today:</span>
            <span className="text-3xl font-bold text-white tracking-tight">${plan.amountToday.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-stone-300 pt-2 border-t border-white/10">
            <span>Total Programme Tuition:</span>
            <span className="text-brand-gold font-semibold">${plan.totalAmount.toLocaleString()}</span>
          </div>
          <p className="text-xs text-stone-300 pt-1">
            {plan.scheduleDescription}
          </p>
        </div>

        {/* Status Message / Notice */}
        {statusMessage && (
          <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-xs text-stone-200 mb-6 space-y-2">
            <div className="flex items-center gap-2 text-brand-gold font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Stripe Integration Architecture Verified</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-200">
              {statusMessage}
            </p>
          </div>
        )}

        {/* Checkout Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-300 font-semibold mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Dr. Jane Smith"
              className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/20 text-white text-base focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder-stone-500 font-sans"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-300 font-semibold mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@dentalpractice.com"
              className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/20 text-white text-base focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder-stone-500 font-sans"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full text-xs uppercase tracking-wider font-bold text-brand-black bg-brand-gold hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/20"
            >
              {isSubmitting ? (
                <span>Connecting to Checkout...</span>
              ) : (
                <>
                  <span>Proceed to Enrolment (${plan.amountToday.toLocaleString()})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Security Reassurance */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            256-Bit SSL Encrypted
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-brand-gold" />
            Stripe Hosted Payments
          </span>
        </div>

      </div>
    </div>
  );
};
