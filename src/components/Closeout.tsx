import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

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
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 wide:px-24 text-center relative z-10">
        
        <div className="max-w-4xl xl:max-w-5xl wide:max-w-6xl mx-auto">
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
          <div className="flex justify-center mb-10 sm:mb-12">
            <button
              onClick={scrollToInvestment}
              className="inline-flex items-center justify-center gap-2 px-8 wide:px-10 py-4 wide:py-5 rounded-full text-xs wide:text-sm uppercase tracking-widest font-bold text-stone-950 bg-[#BDA047] hover:bg-[#A98E3A] transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Support & Direct Helpline for any enquiries/issues */}
          <div className="mb-12 wide:mb-16 flex flex-col items-center justify-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#BDA047]/50 transition-all duration-300 shadow-xl group">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                <div className="w-7 h-7 rounded-full bg-[#BDA047]/15 flex items-center justify-center text-[#BDA047]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Have questions or need assistance? Call our direct helpline:</span>
              </div>
              <a
                href="tel:0916999011"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#BDA047] hover:text-[#D6BA62] transition-colors tracking-wide underline underline-offset-4 decoration-[#BDA047]/40 hover:decoration-[#BDA047]"
              >
                <span>0916 999 011</span>
              </a>
            </div>
          </div>
        </div>

        {/* Discreet Legal & Copyright */}
        <div className="pt-6 border-t border-white/10 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} The Profitable Practice Shift &amp; The Profitable Practice Accelerator. 
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
