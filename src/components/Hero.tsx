import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onEnrolClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnrolClick }) => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const pos = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 text-white overflow-hidden"
    >
      {/* Studio Lighting Gradient Background matching Carlos Dental Studio Reference */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rich dark base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#111111] to-[#0A0A0A]" />

        {/* Diagonal Studio Sheen / Angled Light Ray across top right quadrant behind circle */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-[65vw] h-full pointer-events-none"
          style={{
            background: 'linear-gradient(130deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 42%, transparent 70%)',
          }}
        />

        {/* Subtle radial ambient glows for photographic depth */}
        <div className="absolute top-1/4 right-[8%] w-[520px] h-[520px] rounded-full bg-white/[0.03] blur-[130px]" />
        <div className="absolute -top-24 left-[10%] w-[450px] h-[450px] rounded-full bg-white/[0.015] blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-brand-gold/[0.025] blur-[100px]" />
      </div>

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 wide:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 wide:gap-20 items-center max-w-[1600px] wide:max-w-wide mx-auto w-full">
          
          {/* Left Column: Bold, Simple, Smart Headline & Buttons */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6 wide:space-y-8">

            {/* Main Headline - Bold, commanding Poppins (No extra kicker above it) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[4rem] wide:text-[5.25rem] font-bold text-white leading-[1.08] tracking-tight">
              Your diary is full. <br />
              <span className="text-stone-300 font-light">Is your practice as </span>
              <span className="text-brand-gold italic font-normal">profitable </span>
              <span className="text-stone-300 font-light">as it should be?</span>
            </h1>

            {/* Simple & Smart Subtitle */}
            <p className="text-lg sm:text-2xl wide:text-3xl text-stone-200 font-light tracking-wide leading-relaxed">
              8-Week Profitability Coaching for Dental Clinic owners. <br />
              Launches <span className="text-brand-gold font-medium">Dec 2026</span>
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 wide:gap-6">
              <button
                onClick={onEnrolClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 wide:px-10 wide:py-5 rounded-full text-sm wide:text-base uppercase tracking-wider font-semibold text-brand-black bg-brand-gold hover:bg-brand-gold-light transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Enroll now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#methodology')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 wide:px-9 wide:py-5 rounded-full text-sm wide:text-base uppercase tracking-wider font-medium text-stone-200 hover:text-white bg-transparent border border-white/20 hover:border-brand-gold hover:bg-white/5 transition-all active:scale-95"
              >
                <span>The 5 Shifts</span>
                <ChevronDown className="w-4 h-4 text-brand-gold" />
              </button>
            </div>

          </div>

          {/* Right Column: Circular Portrait (Dr Amy.jpg.jpeg) + Structured Name Underneath */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center mt-6 lg:mt-0">
            
            {/* Circular Image Container with Smooth Luxury Floating Animation */}
            <div className="relative w-60 h-60 xs:w-68 xs:h-68 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[430px] xl:h-[430px] wide:w-[560px] wide:h-[560px] animate-float">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 scale-105 pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-brand-gold/40 scale-[1.03] pointer-events-none animate-pulse-glow" />
              
              {/* Image Circle with Dr Amy.jpg.jpeg showing bold and clear */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-gold/50 shadow-2xl bg-[#141414] relative">
                <img
                  src="/assets/dr-amy-hero.jpg"
                  alt="Dr Amy Traore-Shumbusho"
                  className="w-full h-full object-cover object-[center_18%] scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('Dr Amy.jpg.jpeg')) {
                      target.src = '/assets/Dr Amy.jpg.jpeg';
                    }
                  }}
                />
              </div>
            </div>

            {/* Nicely Structured Name & Title directly under the image */}
            <div className="mt-5 sm:mt-6 text-center lg:text-right w-full lg:max-w-[420px] wide:max-w-[560px] pr-0 lg:pr-2">
              <h3 className="text-xl sm:text-2xl wide:text-3xl font-bold text-white tracking-tight">
                Dr Amy Traore-Shumbusho
              </h3>
              <p className="text-sm sm:text-base wide:text-lg text-brand-gold font-medium mt-1 tracking-wide">
                Founder, Smile360 Dental Specialists
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
