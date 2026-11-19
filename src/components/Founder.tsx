import React from 'react';
import { Eye, Flag } from 'lucide-react';

interface FounderProps {
  onEnrolClick?: () => void;
}

export const Founder: React.FC<FounderProps> = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0A0A0A] text-white relative">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 wide:px-24">
        
        {/* 3-Column Dark Luxury Panel (Carlos Reference Recreation) */}
        <div className="bg-[#141414] max-w-[1600px] wide:max-w-wide mx-auto rounded-3xl border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 wide:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 wide:gap-14 items-center">
            
            {/* Column 1 (Left on desktop, Left on tablet): Editorial Story */}
            <div className="md:col-span-7 lg:col-span-5 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl wide:text-5xl font-bold text-white tracking-tight leading-tight">
                About the Founder
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base wide:text-lg text-stone-300 leading-relaxed font-light">
                <p>
                  Founded by <strong className="text-white font-semibold">Dr Amy Traore-Shumbusho</strong>, 
                  specialist in orthodontics and prosthodontics and Founder of 
                  <strong className="text-white font-semibold"> Smile360 Dental Specialists</strong>.
                </p>

                <p>
                  Her discovery: <em>Dental school teaches clinicians to diagnose, treatment-plan, and treat. 
                  Practice ownership demands systems, people, costs, productivity, and profitability.</em>
                </p>

                <p className="text-stone-300">
                  The <strong className="text-white font-normal">Profitable Practice Shift</strong> provides the frameworks to capture the 
                  true economic value of your clinical craft without adding clinical days or pressuring patients.
                </p>
              </div>
            </div>

            {/* Column 2 (Center on desktop, Right on tablet): High Impact Founder Portrait */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm wide:max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-stone-900">
                <img 
                  src="/assets/IMG_0201.JPG.jpg.jpeg" 
                  alt="Dr Amy Traore-Shumbusho" 
                  className="w-full h-80 sm:h-96 wide:h-[460px] object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('practice-clinic.jpg')) {
                      target.src = '/assets/practice-clinic.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-base wide:text-lg font-bold text-white">
                    Dr Amy Traore-Shumbusho
                  </p>
                  <p className="text-xs wide:text-sm text-[#BDA047] font-medium">
                    Founder, Smile360 Dental Specialists
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 (Right on desktop, 2-col bottom band on tablet): Vision & Mission */}
            <div className="md:col-span-12 lg:col-span-3 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:space-y-6 md:gap-8">
                
                {/* Vision Card */}
                <div className="space-y-2.5 bg-white/[0.02] md:bg-white/[0.03] lg:bg-transparent p-4 md:p-5 lg:p-0 rounded-2xl border border-white/5 lg:border-none">
                  <div className="flex items-center gap-3 text-[#BDA047]">
                    <div className="w-10 h-10 wide:w-12 wide:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Eye className="w-5 h-5 wide:w-6 wide:h-6" />
                    </div>
                    <h3 className="text-lg wide:text-xl font-bold text-white">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm wide:text-base text-stone-300 leading-relaxed font-light pl-1">
                    To empower established clinicians with commercial clarity and systems to build highly profitable, sustainable dental enterprises.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="space-y-2.5 bg-white/[0.02] md:bg-white/[0.03] lg:bg-transparent p-4 md:p-5 lg:p-0 rounded-2xl border border-white/5 lg:border-none">
                  <div className="flex items-center gap-3 text-[#BDA047]">
                    <div className="w-10 h-10 wide:w-12 wide:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Flag className="w-5 h-5 wide:w-6 wide:h-6" />
                    </div>
                    <h3 className="text-lg wide:text-xl font-bold text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-sm wide:text-base text-stone-300 leading-relaxed font-light pl-1">
                    To eliminate the Busy-Practice Profitability Gap while preserving the highest clinical standards and ethical patient care.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
