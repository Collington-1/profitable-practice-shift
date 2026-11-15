import React from 'react';

interface DeliverablesProps {
  onEnrolClick?: () => void;
}

export const Deliverables: React.FC<DeliverablesProps> = ({ onEnrolClick }) => {
  const handleEnrol = () => {
    if (onEnrolClick) {
      onEnrolClick();
    } else {
      const el = document.querySelector('#investment');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="deliverables" 
      className="py-20 lg:py-28 bg-[#0A0A0A] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient background studio glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-[#BDA047]/[0.028] blur-[160px] pointer-events-none" />

      <div className="max-w-6xl wide:max-w-wide mx-auto px-4 sm:px-6 lg:px-8 wide:px-16 relative z-10 w-full">
        
        {/* Section Header: Structured Flex Column with Generous Vertical Gap */}
        <div className="text-center max-w-4xl wide:max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] wide:text-[4.5rem] font-bold tracking-tight flex flex-col items-center gap-3 sm:gap-4">
            <span className="text-white leading-none">
              The Complete
            </span>
            <span className="text-white leading-none">
              Implementation Suite.
            </span>
          </h2>
        </div>

        {/* 5-Column Asymmetrical Mosaic (Faithful Recreation of EduChild Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 wide:gap-8 items-center max-w-5xl wide:max-w-7xl mx-auto">
          
          {/* ================= COLUMN 1 (Stacked Cards: Total ~390px) ================= */}
          <div className="flex flex-col gap-5 h-full justify-between lg:col-span-1">
            {/* Top Tile: Arched Photo Card */}
            <div className="relative rounded-[28px] overflow-hidden shadow-xl border border-white/10 hover:border-[#BDA047]/40 hover:-translate-y-1 transition-all duration-300 h-[215px] wide:h-[250px] bg-[#141414] group">
              <img 
                src="/assets/dr-amy-speaking.jpg" 
                alt="Clinical Mastery" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/practice-interior.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-sm wide:text-base font-semibold text-white tracking-tight leading-snug">
                  Clinical Craft Meets Commercial Clarity
                </p>
              </div>
            </div>

            {/* Bottom Tile: Metric Card */}
            <div className="rounded-[24px] p-5 wide:p-6 bg-[#141414] text-white border border-white/10 hover:border-[#BDA047]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl h-[155px] wide:h-[180px] flex flex-col justify-center text-left">
              <span className="text-3xl wide:text-4xl font-bold text-[#BDA047] tracking-tight">
                8 Weeks
              </span>
              <p className="text-xs wide:text-sm text-stone-300 font-light mt-1.5 leading-relaxed">
                Live structured coaching & case reviews with Dr Amy Traore-Shumbusho
              </p>
            </div>
          </div>

          {/* ================= COLUMN 2 (Tall Slender Card: ~440px) ================= */}
          <div className="relative rounded-t-[44px] rounded-b-[28px] overflow-hidden shadow-2xl border border-white/10 hover:border-[#BDA047]/40 hover:-translate-y-1.5 transition-all duration-300 h-[380px] sm:h-[440px] wide:h-[490px] bg-[#141414] flex flex-col justify-end p-5 wide:p-6 text-left group lg:col-span-1">
            <img 
              src="/assets/IMG_1075.JPG.jpeg" 
              alt="Practice Interior" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/practice-interior.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="text-3xl wide:text-4xl font-bold text-white tracking-tight">
                100%
              </span>
              <h3 className="text-base wide:text-lg font-bold text-white mt-1 tracking-tight">
                Clinical Independence
              </h3>
              <p className="text-xs wide:text-sm text-stone-300 font-light mt-1 leading-relaxed">
                Capture the true economic value of your dentistry without adding chairs.
              </p>
            </div>
          </div>

          {/* ================= COLUMN 3 (Center Shorter Accent Card: ~360px) ================= */}
          {/* On tablet portrait (sm: to lg:), spans 2 columns centered */}
          <div className="sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none w-full rounded-[30px] p-6 wide:p-7 bg-[#181611] border border-[#BDA047]/35 hover:border-[#BDA047]/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#BDA047]/15 transition-all duration-300 flex flex-col justify-between h-[340px] sm:h-[360px] wide:h-[410px] text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#BDA047]/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full bg-[#BDA047]/15 border border-[#BDA047]/30 text-[#BDA047] text-[10px] wide:text-xs font-bold uppercase tracking-wider inline-block">
                Core System
              </span>

              <h3 className="text-lg sm:text-xl wide:text-2xl font-bold text-white leading-snug tracking-tight mt-3">
                The Dental Value Leak Audit™
              </h3>

              <p className="text-xs wide:text-sm text-stone-300 leading-relaxed font-light mt-2">
                Pinpoint precisely where revenue drains between examination, presentation, and treatment start.
              </p>
            </div>

            <button
              onClick={handleEnrol}
              className="relative z-10 w-full py-2.5 px-4 rounded-full bg-[#BDA047] hover:bg-[#A98E3A] text-stone-950 font-bold text-xs wide:text-sm tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              Enrol Now
            </button>
          </div>

          {/* ================= COLUMN 4 (Tall Slender Card: ~440px) ================= */}
          <div className="relative rounded-t-[44px] rounded-b-[28px] overflow-hidden shadow-2xl border border-white/10 hover:border-[#BDA047]/40 hover:-translate-y-1.5 transition-all duration-300 h-[380px] sm:h-[440px] wide:h-[490px] bg-[#141414] flex flex-col justify-end p-5 wide:p-6 text-left group lg:col-span-1">
            <img 
              src="/assets/practice-clinic.jpg" 
              alt="Practice Clinic" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/IMG_0201.JPG.jpg.jpeg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="text-3xl wide:text-4xl font-bold text-[#BDA047] tracking-tight">
                5-Question
              </span>
              <h3 className="text-base wide:text-lg font-bold text-white mt-1 tracking-tight">
                Treatment Dialogue
              </h3>
              <p className="text-xs wide:text-sm text-stone-300 font-light mt-1 leading-relaxed">
                Facilitate patient-centered clinical decisions with ethical confidence so worthy plans start.
              </p>
            </div>
          </div>

          {/* ================= COLUMN 5 (Stacked Cards: Total ~390px) ================= */}
          <div className="flex flex-col gap-5 h-full justify-between lg:col-span-1">
            {/* Top Tile: Statement Card with Graphic Swirl */}
            <div className="rounded-[28px] p-5 wide:p-6 bg-[#141414] text-white border border-white/10 hover:border-[#BDA047]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl h-[215px] wide:h-[250px] flex flex-col justify-between text-left relative overflow-hidden">
              <div>
                <p className="text-[10px] wide:text-xs uppercase tracking-[0.22em] font-semibold text-[#BDA047]">
                  Systems · Margins
                </p>
                <h3 className="text-lg wide:text-xl font-bold text-white leading-tight mt-1.5 tracking-tight">
                  Protected Chair-Time
                </h3>
                <p className="text-xs wide:text-sm text-stone-400 font-light mt-1">
                  High-value block scheduling
                </p>
              </div>

              {/* Graphic Decorative Swirl (Matching Reference) */}
              <div className="flex items-center justify-start text-[#BDA047]">
                <svg className="w-20 h-8 text-[#BDA047]/60" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 25 C 25 5, 45 35, 65 15 C 80 0, 95 30, 95 20" />
                </svg>
              </div>
            </div>

            {/* Bottom Tile: Photo Card */}
            <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-white/10 hover:border-[#BDA047]/40 hover:-translate-y-1 transition-all duration-300 h-[155px] wide:h-[180px] bg-[#141414] group">
              <img 
                src="/assets/632313048_18531807367071192_8972057038438131893_n.jpg" 
                alt="Acceptance-to-Start Tracking" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/practice-clinic.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-xs wide:text-sm font-semibold text-white tracking-tight leading-snug">
                  Acceptance-to-Start Tracking Dashboard
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
