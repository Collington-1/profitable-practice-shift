import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  X, 
  Check, 
  Sparkles,
  Calendar,
  Layers,
  HelpCircle
} from 'lucide-react';
import { PROGRAMME_DATA } from '../data/programme';

interface MethodologyProps {
  onEnrolClick?: () => void;
}

interface ShiftCardItem {
  number: string;
  title: string;
  timeline: string;
  shortSummary: string;
  focus: string;
  image: string;
  clinicalReality: string;
  theShift: string;
  takeaways: string[];
  treatmentQuestions?: string[];
}

export const Methodology: React.FC<MethodologyProps> = ({ onEnrolClick }) => {
  // 5 Base Shifts with authentic assets
  const baseShifts: ShiftCardItem[] = [
    {
      number: "01",
      title: "DIAGNOSE",
      timeline: "Weeks 1–2",
      shortSummary: "Identify where value is being lost and establish the practice's economic bottleneck.",
      focus: "Baseline & Leak Audit",
      image: "/assets/practice-interior.jpg",
      clinicalReality: PROGRAMME_DATA.fiveShifts[0].clinicalReality,
      theShift: PROGRAMME_DATA.fiveShifts[0].theShift,
      takeaways: PROGRAMME_DATA.fiveShifts[0].takeaways,
    },
    {
      number: "02",
      title: "ELEVATE",
      timeline: "Week 3",
      shortSummary: "Plan appropriate comprehensive care rather than isolated single-tooth fixes.",
      focus: "Comprehensive Care",
      image: "/assets/practice-clinic.jpg",
      clinicalReality: PROGRAMME_DATA.fiveShifts[1].clinicalReality,
      theShift: PROGRAMME_DATA.fiveShifts[1].theShift,
      takeaways: PROGRAMME_DATA.fiveShifts[1].takeaways,
    },
    {
      number: "03",
      title: "COMMUNICATE",
      timeline: "Weeks 4–5",
      shortSummary: "Make diagnosis, options and investment clear; present treatment value confidently.",
      focus: "5-Question Framework",
      image: "/assets/PHOTO1.png",
      clinicalReality: PROGRAMME_DATA.fiveShifts[2].clinicalReality,
      theShift: PROGRAMME_DATA.fiveShifts[2].theShift,
      takeaways: PROGRAMME_DATA.fiveShifts[2].takeaways,
      treatmentQuestions: PROGRAMME_DATA.fiveShifts[2].treatmentQuestions,
    },
    {
      number: "04",
      title: "CONVERT",
      timeline: "Week 6",
      shortSummary: "Strengthen the presentation-to-start process and patient decision pathway.",
      focus: "Decision Pathways",
      image: "/assets/632313048_18531807367071192_8972057038438131893_n.jpg",
      clinicalReality: PROGRAMME_DATA.fiveShifts[3].clinicalReality,
      theShift: PROGRAMME_DATA.fiveShifts[3].theShift,
      takeaways: PROGRAMME_DATA.fiveShifts[3].takeaways,
    },
    {
      number: "05",
      title: "OPTIMIZE",
      timeline: "Weeks 7–8",
      shortSummary: "Improve the economics of existing capacity and make better use of clinical time.",
      focus: "Yield & Margins",
      image: "/assets/dr-amy-about.jpg",
      clinicalReality: PROGRAMME_DATA.fiveShifts[4].clinicalReality,
      theShift: PROGRAMME_DATA.fiveShifts[4].theShift,
      takeaways: PROGRAMME_DATA.fiveShifts[4].takeaways,
    },
  ];

  // Infinite repeating reel: 7 copies of 5 shifts = 35 items
  // Center is at index 17 (Shift 03: COMMUNICATE, because 17 % 5 = 2)
  const REPEAT_COUNT = 7;
  const extendedShifts = Array.from({ length: REPEAT_COUNT * baseShifts.length }, (_, i) => ({
    ...baseShifts[i % baseShifts.length],
    instanceKey: `${baseShifts[i % baseShifts.length].number}-${i}`,
    originalIndex: i % baseShifts.length,
  }));

  const [virtualIndex, setVirtualIndex] = useState<number>(17);
  const [selectedShift, setSelectedShift] = useState<ShiftCardItem | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Active base shift (0 to 4)
  const activeShiftIndex = ((virtualIndex % baseShifts.length) + baseShifts.length) % baseShifts.length;
  const currentActiveShift = baseShifts[activeShiftIndex];

  // Next / Prev handlers for infinite repetition
  const handleNext = useCallback(() => {
    setVirtualIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setVirtualIndex((prev) => prev - 1);
  }, []);

  // Continuous smooth auto-swipe every 3.8s (pauses on hover, touch, or when deep-dive modal is active)
  useEffect(() => {
    if (isPaused || selectedShift) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, selectedShift, handleNext]);

  // Jump to specific dot smoothly
  const handleDotClick = (dotIdx: number) => {
    const diff = dotIdx - activeShiftIndex;
    let shortest = diff;
    if (diff > 2) shortest -= 5;
    if (diff < -2) shortest += 5;
    setVirtualIndex((prev) => prev + shortest);
  };

  // Enrol button handler
  const handleEnrol = () => {
    if (onEnrolClick) {
      onEnrolClick();
    } else {
      const el = document.querySelector('#investment');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Keyboard arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedShift) {
        if (e.key === 'Escape') setSelectedShift(null);
        return;
      }
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, selectedShift]);

  // Silent normalization: if virtualIndex drifts too far towards buffer edges (below 10 or above 25),
  // reset it seamlessly to the middle cluster (15..19) so it loops infinitely forever
  useEffect(() => {
    if (virtualIndex < 10 || virtualIndex > 25) {
      const timer = setTimeout(() => {
        setVirtualIndex(((virtualIndex % 5) + 5) % 5 + 15);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [virtualIndex]);

  return (
    <section 
      id="methodology" 
      className="pt-10 sm:pt-14 lg:pt-16 pb-20 lg:pb-28 bg-[#FAF7F2] text-[#141414] relative overflow-hidden border-b border-stone-200"
    >
      {/* Soft warm luxury ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-[#BDA047]/[0.035] blur-[160px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 wide:px-24 relative z-10">
        
        {/* Section Header: Proper Spacing, No Badge, No Subtitle Clutter */}
        <div className="text-center max-w-4xl wide:max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] wide:text-[4.5rem] tracking-tight flex flex-col items-center gap-2 sm:gap-3 lg:gap-4">
            <span className="text-stone-900 font-bold leading-none">
              The 5 Core Shifts for a
            </span>
            <span className="font-light italic text-[#BDA047] leading-none">
              Profitable Practice.
            </span>
          </h2>
        </div>

        {/* 5-Card Infinite Repeating Perspective Carousel (Always Full, Seamless Infinite Loop) */}
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full overflow-hidden py-3 sm:py-6 px-2 sm:px-6 lg:px-8 flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] wide:min-h-[660px]"
          onTouchStart={(e) => {
            setIsPaused(true);
            handleTouchStart(e);
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => {
            setIsPaused(false);
            handleTouchEnd();
          }}
        >
          <div className="relative w-full max-w-[1600px] wide:max-w-wide mx-auto flex items-center justify-center h-[420px] sm:h-[480px] lg:h-[540px] wide:h-[620px]">
            {extendedShifts.map((shift, idx) => {
              // Distance relative to active virtualIndex
              const dist = idx - virtualIndex;
              const absDist = Math.abs(dist);

              // Only render the 5 active cards + 2 off-screen edge buffers (dist -3 to +3)
              // This keeps rendering lightweight while allowing cards to slide in and out seamlessly
              if (absDist > 3) return null;

              const isActive = dist === 0;

              // Stacking order: Center card is strictly on top (z-30)
              // Adjacent cards (z-25) sit underneath center, outer cards (z-20) sit underneath adjacent
              const zIndex = 30 - absDist * 5;

              // Scale & vertical elevation
              let scale = 1;
              let translateY = 0;
              let darkOverlayOpacity = 0;
              let opacity = 1;

              if (absDist === 0) {
                // Active Center Card
                scale = 1.05;
                translateY = -18;
                darkOverlayOpacity = 0;
                opacity = 1;
              } else if (absDist === 1) {
                // Left & Right Neighbor (Clearly peeks out on mobile and desktop)
                scale = 0.92;
                translateY = 0;
                darkOverlayOpacity = 0.28;
                opacity = 1;
              } else if (absDist === 2) {
                // Outer Left & Right (Always filled with fully visible rounded corners)
                scale = 0.82;
                translateY = 14;
                darkOverlayOpacity = 0.45;
                opacity = 1;
              } else {
                // Edge buffers (dist === 3 or -3): sliding in or out smoothly
                scale = 0.74;
                translateY = 22;
                darkOverlayOpacity = 0.70;
                opacity = 0; // fade at the extreme outer edges
              }

              return (
                <div
                  key={shift.instanceKey}
                  onClick={() => {
                    if (isActive) {
                      setSelectedShift(shift);
                    } else {
                      setVirtualIndex(idx);
                    }
                  }}
                  style={{
                    // Responsive horizontal displacement along the track
                    // clamp(112px, 13vw, 195px) guarantees cards behind show prominently on mobile screens
                    // without pushing outer cards out of the visible screen boundaries
                    transform: `translate3d(calc(${dist} * clamp(112px, 13vw, 195px)), ${translateY}px, 0) scale(${scale})`,
                    zIndex,
                    opacity,
                    // Frictionless luxury glide with GPU hardware acceleration
                    transition: 'transform 420ms cubic-bezier(0.2, 0.9, 0.3, 1), box-shadow 420ms ease, opacity 350ms ease',
                    willChange: 'transform',
                  }}
                  className={`absolute w-[220px] xs:w-[240px] sm:w-[275px] lg:w-[295px] xl:w-[305px] wide:w-[360px] h-[385px] xs:h-[405px] sm:h-[465px] lg:h-[495px] wide:h-[580px] rounded-[24px] sm:rounded-[28px] overflow-hidden cursor-pointer select-none group bg-[#161616] border border-white/20 ${
                    absDist >= 2 ? 'max-xs:opacity-0 max-xs:pointer-events-none' : ''
                  } ${
                    isActive 
                      ? 'shadow-2xl shadow-black/40 ring-2 ring-[#BDA047]' 
                      : 'shadow-xl shadow-black/25 hover:border-white/40'
                  }`}
                >
                  {/* Card Background Image (100% Solid & Opaque) */}
                  <img 
                    src={shift.image}
                    alt={`${shift.number} ${shift.title}`}
                    decoding="async"
                    className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('PHOTO1.png')) {
                        target.src = '/assets/PHOTO1.png';
                      }
                    }}
                  />

                  {/* Depth Dimmer Overlay: Darkens distant cards for realistic perspective lighting */}
                  <div 
                    className="absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none"
                    style={{ opacity: darkOverlayOpacity }}
                  />

                  {/* Gradient shadow overlay for bottom text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Frosted Glass Foundation (Sample Image Recreation - Solid Opaque Base) */}
                  <div className="absolute inset-x-2.5 sm:inset-x-3 bottom-2.5 sm:bottom-3 p-3.5 sm:p-5 rounded-[20px] sm:rounded-[22px] bg-stone-950/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl flex flex-col justify-between transition-all duration-300">
                    <div>
                      {/* Top Row: Shift Number & Title + Timeline Badge */}
                      <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                        <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white tracking-tight">
                          {shift.number} {shift.title}
                        </h3>
                        <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#BDA047]/20 border border-[#BDA047]/30 text-[#BDA047] text-[10px] sm:text-[11px] font-semibold shrink-0">
                          {shift.timeline}
                        </span>
                      </div>

                      {/* Short Description (Clean & Concise, Maintains Readable Size) */}
                      <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed mb-3 sm:mb-4 font-light">
                        {shift.shortSummary}
                      </p>
                    </div>

                    {/* Bottom Action Pill Button: "Enrol Now" */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnrol();
                      }}
                      className={`w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md ${
                        isActive 
                          ? 'bg-white text-stone-900 hover:bg-[#BDA047] hover:text-white' 
                          : 'bg-white/90 text-stone-900 hover:bg-white'
                      }`}
                    >
                      <span>Enrol Now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Navigation & Controls — Horizontal on All Screens */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Shift"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-stone-300 bg-white hover:border-[#BDA047] hover:bg-[#BDA047] hover:text-white text-stone-700 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Center Action Button: "Enrol Now" */}
          <button
            onClick={handleEnrol}
            className="px-5 sm:px-6 py-2.5 rounded-full bg-stone-900 hover:bg-[#BDA047] text-white font-semibold text-xs tracking-wide transition-all shadow-md flex items-center gap-2 active:scale-95 shrink-0"
          >
            <span>Enrol Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Shift"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-stone-300 bg-white hover:border-[#BDA047] hover:bg-[#BDA047] hover:text-white text-stone-700 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator Dots: Synchronized with Active Shift (0 to 4) */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {baseShifts.map((s, idx) => (
            <button
              key={s.number}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to Shift ${s.number}`}
              className={`transition-all duration-300 rounded-full ${
                activeShiftIndex === idx 
                  ? 'w-7 h-2 bg-[#BDA047]' 
                  : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Deep-Dive Shift Details Modal (Accessible by clicking active card) */}
      {selectedShift && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedShift(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedShift(null)}
              aria-label="Close Modal"
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-xl bg-[#BDA047] text-white font-bold text-sm flex items-center justify-center">
                {selectedShift.number}
              </span>
              <div>
                <span className="text-xs font-semibold text-[#BDA047] uppercase tracking-wider">
                  {selectedShift.timeline}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                  {selectedShift.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-stone-700 font-medium mb-6">
              {selectedShift.shortSummary}
            </p>

            <div className="space-y-6 border-t border-stone-100 pt-5">
              {/* Clinical Reality */}
              <div>
                <h4 className="text-xs uppercase font-bold text-stone-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#BDA047]" />
                  <span>The Clinical Reality</span>
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed font-light bg-stone-50 p-4 rounded-xl border border-stone-200/60">
                  {selectedShift.clinicalReality}
                </p>
              </div>

              {/* The Shift */}
              <div>
                <h4 className="text-xs uppercase font-bold text-stone-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#BDA047]" />
                  <span>The Profitable Practice Shift</span>
                </h4>
                <p className="text-sm sm:text-base text-stone-900 leading-relaxed font-normal bg-[#FAF7F2] p-4 rounded-xl border border-[#BDA047]/30">
                  {selectedShift.theShift}
                </p>
              </div>

              {/* Actionable Takeaways */}
              <div>
                <h4 className="text-xs uppercase font-bold text-stone-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#BDA047]" />
                  <span>Key Deliverables & Actionable Systems</span>
                </h4>
                <div className="space-y-2">
                  {selectedShift.takeaways.map((item, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-sm text-stone-800">
                      <div className="w-5 h-5 rounded-full bg-[#BDA047]/15 text-[#BDA047] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Treatment Framework for Shift 3 */}
              {selectedShift.treatmentQuestions && (
                <div className="p-4 sm:p-5 rounded-xl bg-stone-900 text-white">
                  <h4 className="text-xs uppercase font-bold text-[#BDA047] tracking-wider mb-3 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>The 5-Question Clinical Treatment Framework</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-stone-200">
                    {selectedShift.treatmentQuestions.map((q, qIdx) => (
                      <li key={qIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BDA047] shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedShift(null);
                  handleEnrol();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#BDA047] hover:bg-[#A98E3A] text-white font-semibold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Enrol Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedShift(null)}
                className="text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
