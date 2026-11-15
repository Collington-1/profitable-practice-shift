import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles
} from 'lucide-react';
import { PROGRAMME_DATA } from '../data/programme';

interface JourneyProps {
  onEnrolClick?: () => void;
}

export const Journey: React.FC<JourneyProps> = () => {
  // Active accordion tab index (0 to 4). Defaults to 0 (Stage 01: DIAGNOSE)
  const [activeTab, setActiveTab] = useState<number>(0);

  const stages = [
    {
      stageNumber: "01",
      weeks: "Weeks 1–2",
      title: "DIAGNOSE",
      subtitle: "Identify where value is being lost and establish the economic bottleneck.",
      image: "/assets/practice-interior.jpg",
      deliverables: [
        "Practice Economics Scorecard™ completion",
        "Dental Value Leak Audit™ run-through",
        "Clinical capacity & overhead cost mapping",
      ],
    },
    {
      stageNumber: "02",
      weeks: "Week 3",
      title: "ELEVATE",
      subtitle: "Plan appropriate comprehensive care rather than isolated single-tooth fixes.",
      image: "/assets/practice-clinic.jpg",
      deliverables: [
        "Comprehensive Examination Protocol template",
        "Case-scoping & risk-benefit documentation",
        "Patient-centered treatment presentation structure",
      ],
    },
    {
      stageNumber: "03",
      weeks: "Weeks 4–5",
      title: "COMMUNICATE",
      subtitle: "Make diagnosis, options and investment clear; present treatment value confidently.",
      image: "/assets/dr-amy-speaking.jpg",
      deliverables: [
        "The 5-Question Treatment Conversation Scripts & Guides",
        "Fee presentation & objection-navigation frameworks",
        "Visual treatment explainer tools",
      ],
    },
    {
      stageNumber: "04",
      weeks: "Week 6",
      title: "CONVERT",
      subtitle: "Strengthen the presentation-to-start process and patient decision pathway.",
      image: "/assets/632313048_18531807367071192_8972057038438131893_n.jpg",
      deliverables: [
        "Acceptance-to-Start Tracking Dashboard",
        "Front-of-house follow-up checklists & responsibilities",
        "Treatment coordinator alignment workflow",
      ],
    },
    {
      stageNumber: "05",
      weeks: "Weeks 7–8",
      title: "OPTIMIZE",
      subtitle: "Improve the economics of existing capacity and make better use of clinical time.",
      image: "/assets/dr-amy-about.jpg",
      deliverables: [
        "Practice Profitability Dashboard configuration",
        "90-Day Practice Improvement Implementation Plan",
        "Principal clinical time protection roadmap",
      ],
    },
  ];

  const toggleTab = (idx: number) => {
    setActiveTab(activeTab === idx ? -1 : idx);
  };

  return (
    <section 
      id="journey" 
      className="py-20 lg:py-28 bg-[#FAF7F2] text-[#141414] border-t border-stone-200 relative overflow-hidden"
    >
      <div className="max-w-7xl wide:max-w-wide mx-auto px-4 sm:px-6 lg:px-8 wide:px-16 relative z-10 w-full">
        
        {/* Main 2-Column Section (Exact Recreation of Image 1 Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 wide:gap-16 items-start mb-14">
          
          {/* Left Column: Heading & Large Showcase Image Card */}
          <div className="lg:col-span-5 space-y-5 lg:space-y-6 text-left">
            {/* Clean Moderately Bold Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] wide:text-[3.75rem] font-semibold text-stone-900 tracking-tight leading-tight">
              What We'll Build Together
            </h2>

            {/* Large Featured Image with Floating Badge (Matching Image 1) */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-stone-200 h-[320px] sm:h-[400px] lg:h-[430px] wide:h-[560px] group">
              <img 
                src="/assets/dr-amy-about.jpg" 
                alt="Dr Amy Traore-Shumbusho" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('PHOTO1.png')) {
                    target.src = '/assets/PHOTO1.png';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge at Bottom (Image 1 Style with Smooth Float Animation) */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-3.5 animate-float">
                <div className="w-10 h-10 rounded-full bg-[#BDA047]/15 text-[#BDA047] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm wide:text-base font-bold text-stone-900 tracking-wide">
                    5 Core Modules
                  </p>
                  <p className="text-xs wide:text-sm text-stone-600 font-light">
                    Practical · Actionable · Transformational
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Interactive Accordion Tabs (Image 1 Style) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5 pt-2 lg:pt-0">
            {stages.map((stage, idx) => {
              const isExpanded = activeTab === idx;

              return (
                <div
                  key={stage.stageNumber}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isExpanded 
                      ? 'bg-white border-[#BDA047]/50 shadow-xl ring-1 ring-[#BDA047]/20' 
                      : 'bg-white/70 border-stone-200/80 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  {/* Accordion Tab Header Button */}
                  <button
                    onClick={() => toggleTab(idx)}
                    aria-expanded={isExpanded}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none transition-colors gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      {/* Circular Stage Number */}
                      <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 transition-colors ${
                        isExpanded 
                          ? 'bg-stone-900 text-white' 
                          : 'bg-stone-200 text-stone-700'
                      }`}>
                        {stage.stageNumber}
                      </span>
                      
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 tracking-tight">
                            {stage.title}
                          </h3>
                          <span className="text-xs font-semibold text-[#BDA047] uppercase tracking-wider whitespace-nowrap">
                            · {stage.weeks}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-600 line-clamp-1 mt-0.5 font-light">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-stone-500">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-stone-800" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Accordion Body with Smooth Image & Content Transition */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-stone-100 bg-white transition-all duration-500 ease-out animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-center">
                        
                        {/* Thumbnail Image with Cool Transition Effect */}
                        <div className="sm:col-span-5 relative rounded-2xl overflow-hidden shadow-md border border-stone-200 h-36 sm:h-40 wide:h-48 bg-stone-100 group">
                          <img 
                            src={stage.image} 
                            alt={stage.title} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (!target.src.includes('practice-interior.jpg')) {
                                target.src = '/assets/practice-interior.jpg';
                              }
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[#BDA047] border border-white/10">
                            {stage.weeks}
                          </span>
                        </div>

                        {/* Deliverables Checklist (Image 1 Style) */}
                        <div className="sm:col-span-7 space-y-2 sm:space-y-2.5 text-left">
                          <p className="text-xs uppercase font-bold text-stone-900 tracking-wider">
                            In this module, you will build:
                          </p>
                          <div className="space-y-1.5 sm:space-y-2">
                            {stage.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                                <div className="w-4 h-4 rounded-full bg-[#BDA047]/15 text-[#BDA047] flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="leading-snug font-light">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
