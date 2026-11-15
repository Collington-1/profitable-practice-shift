import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CloseoutProps {
  onEnrolClick?: () => void;
}

export const Closeout: React.FC<CloseoutProps> = ({ onEnrolClick }) => {
  const scrollToInvestment = () => {
    if (onEnrolClick) {
      onEnrolClick();
      return;
    }
    const el = document.querySelector('#investment');
    if (el) {
      const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080808] text-white pt-16 lg:pt-24 pb-12 lg:pb-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl wide:max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 wide:px-16 text-center relative z-10">
        
        {/* Main Signature Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl wide:text-6xl font-bold text-white mb-4 wide:mb-6 tracking-tight leading-tight">
          Your Next Practice Shift <br />
          <span className="text-[#BDA047] italic font-normal">Starts Here.</span>
        </h2>

        <p className="text-base sm:text-lg wide:text-xl text-stone-300 max-w-lg wide:max-w-2xl mx-auto font-light leading-relaxed mb-8 wide:mb-10">
          The clinical competence is already there. Give yourself and your team the commercial systems 
          to capture the true value of your craft.
        </p>

        {/* Single CTA Button with title "Enroll Now" */}
        <div className="flex justify-center mb-12 wide:mb-16">
          <button
            onClick={scrollToInvestment}
            className="inline-flex items-center justify-center gap-2 px-8 wide:px-10 py-4 wide:py-5 rounded-full text-xs wide:text-sm uppercase tracking-widest font-bold text-stone-950 bg-[#BDA047] hover:bg-[#A98E3A] transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Discreet Legal & Copyright */}
        <div className="pt-6 border-t border-white/10 text-xs text-stone-400 space-y-1.5">
          <p>
            © {new Date().getFullYear()} The Profitable Practice Shift™ &amp; The Profitable Practice Accelerator™. 
            All rights reserved.
          </p>
          <p className="text-stone-500 font-light">
            Educational implementation programme for dental professionals. Results depend on practice context and execution consistency.
          </p>
        </div>

      </div>
    </footer>
  );
};
