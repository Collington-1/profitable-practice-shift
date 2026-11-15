import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DeliverablesProps {
  onEnrolClick?: () => void;
}

interface SuiteCard {
  number: string;
  title: string;
  description: string;
  image: string;
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

  // The 7 Complete Implementation Suite Cards with distinct authentic imagery
  const suiteCards: SuiteCard[] = [
    {
      number: "01",
      title: "Eight Weeks of Expert Guidance",
      description: "Work directly with Dr Amy through structured group coaching, practical guidance and implementation support.",
      image: "/assets/dr-amy-speaking.jpg",
    },
    {
      number: "02",
      title: "Practice Economics Scorecard™",
      description: "Understand how your practice is performing financially and identify where improvements are needed.",
      image: "/assets/practice-interior.jpg",
    },
    {
      number: "03",
      title: "Dental Value Leak Audit™",
      description: "Identify where potential revenue and value are being lost between patient examination, treatment presentation and treatment start.",
      image: "/assets/practice-clinic.jpg",
    },
    {
      number: "04",
      title: "Comprehensive Treatment Planning",
      description: "Access practical resources to help you plan appropriate, complete treatment around your patients' needs.",
      image: "/assets/PHOTO1.png",
    },
    {
      number: "05",
      title: "Patient Value Communication Tools",
      description: "Learn to explain treatment options, benefits, risks and costs so patients can make informed decisions.",
      image: "/assets/624191141_18527195116071192_460617171848460215_n.jpg",
    },
    {
      number: "06",
      title: "Acceptance-to-Start Tracking",
      description: "Track patients who accept treatment plans and follow their progress towards starting treatment.",
      image: "/assets/632313048_18531807367071192_8972057038438131893_n.jpg",
    },
    {
      number: "07",
      title: "Clinical Capacity & 90-Day Improvement Plan",
      description: "Make better use of your clinical time and leave with a practical plan for continuing improvements.",
      image: "/assets/dr-amy-about.jpg",
    },
  ];

  return (
    <section 
      id="deliverables" 
      className="py-20 lg:py-28 bg-[#0A0A0A] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient background studio glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-[#BDA047]/[0.028] blur-[160px] pointer-events-none" />

      <div className="max-w-6xl wide:max-w-wide mx-auto px-4 sm:px-6 lg:px-8 wide:px-16 relative z-10 w-full">
        
        {/* Section Header: Structured Flex Column with Generous Vertical Gap */}
        <div className="text-center max-w-4xl wide:max-w-5xl mx-auto mb-14 sm:mb-18 lg:mb-20 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] wide:text-[4.5rem] font-bold tracking-tight flex flex-col items-center gap-3 sm:gap-4">
            <span className="text-white leading-none">
              The Complete
            </span>
            <span className="text-white leading-none">
              Implementation Suite.
            </span>
          </h2>
        </div>

        {/* 7 Replicated Photo Cards Grid: Consistent, Clean, and Perfectly Aligned across all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 wide:gap-8 items-stretch max-w-6xl wide:max-w-7xl mx-auto">
          {suiteCards.map((item) => {
            return (
              <div
                key={item.number}
                className="relative rounded-[28px] overflow-hidden shadow-xl border border-white/10 hover:border-[#BDA047]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#BDA047]/10 transition-all duration-300 h-[270px] xs:h-[290px] sm:h-[310px] lg:h-[330px] wide:h-[400px] bg-[#141414] group flex flex-col justify-end p-5 sm:p-6 text-left w-full"
              >
                {/* Background Photo with Smooth Hover Zoom */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('practice-interior.jpg')) {
                      target.src = '/assets/practice-interior.jpg';
                    }
                  }}
                />

                {/* Dark Gradient Overlay for Maximum Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

                {/* Card Content (Overlaid cleanly at the bottom without CARD numbering badge) */}
                <div className="relative z-10 space-y-1.5">
                  <h3 className="text-lg sm:text-xl wide:text-2xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm wide:text-base text-stone-300 font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={handleEnrol}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs wide:text-sm uppercase tracking-widest font-bold text-stone-950 bg-[#BDA047] hover:bg-[#A98E3A] transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Enrol in Cohort</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
