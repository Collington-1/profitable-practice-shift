import React, { useState } from 'react';
import { Stethoscope, MessageSquare, Clock, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Problem: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  // Exact client content from Slide 10 of SEAMLESS presentation
  const bottlenecks = [
    {
      title: "Clinical Value Gap",
      description: "We aren't consistently identifying or planning appropriate comprehensive care.",
      icon: <Stethoscope className="w-8 h-8 text-[#BDA047]" />,
      rotation: "lg:-rotate-6",
      elevation: "lg:translate-y-4",
    },
    {
      title: "Communication Gap",
      description: "Patients don't always understand the value and options in our plans.",
      icon: <MessageSquare className="w-8 h-8 text-[#BDA047]" />,
      rotation: "lg:-rotate-2",
      elevation: "lg:translate-y-0",
    },
    {
      title: "Patient Decision Gap",
      description: "Appropriate plans stall between presentation and treatment start.",
      icon: <Clock className="w-8 h-8 text-[#BDA047]" />,
      rotation: "lg:rotate-2",
      elevation: "lg:translate-y-0",
    },
    {
      title: "Economic Visibility Gap",
      description: "We generate revenue but don't clearly understand profitability or clinical-time economics.",
      icon: <TrendingUp className="w-8 h-8 text-[#BDA047]" />,
      rotation: "lg:rotate-6",
      elevation: "lg:translate-y-4",
    },
  ];

  return (
    <section 
      id="problem" 
      ref={ref}
      className="pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-[#0A0A0A] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#BDA047]/[0.025] blur-[140px]" />
      </div>

      <div className="max-w-7xl wide:max-w-wide mx-auto px-5 sm:px-6 lg:px-8 wide:px-16 relative z-10 w-full">
        
        {/* Section Header - Bold & Clean (Depict Reference Style) */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24 px-2 sm:px-4">
          <h2 className="tracking-tight flex flex-col items-center gap-2.5 sm:gap-3 lg:gap-4">
            <span className="text-white font-bold text-[1.65rem] xs:text-3xl sm:text-4xl lg:text-[3.25rem] wide:text-[4.5rem] leading-none">
              What's your biggest
            </span>
            <span className="text-[#BDA047] font-light italic text-[1.35rem] xs:text-[1.65rem] sm:text-4xl lg:text-[3.25rem] wide:text-[4.5rem] leading-none whitespace-nowrap pt-0.5 sm:pt-1">
              profitability bottleneck?
            </span>
          </h2>
        </div>

        {/* 4 Cards in Slant Form with Hover Straighten (Recreation of Depict Sample Image) */}
        <div className="relative pt-2 pb-8 lg:pb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 wide:gap-10 items-stretch max-w-6xl wide:max-w-wide mx-auto">
            {bottlenecks.map((item, idx) => {
              const isHovered = hoveredCard === idx;

              // When hovered, the card straightens (!rotate-0) and lifts up.
              // When not hovered, it retains its natural slant.
              const transformClasses = !isVisible
                ? 'translate-y-12 opacity-0 rotate-0'
                : isHovered
                  ? '!rotate-0 -translate-y-6 lg:-translate-y-8 scale-[1.05] z-30 bg-[#181818] border-[#BDA047] shadow-2xl shadow-[#BDA047]/20 ring-1 ring-[#BDA047]/40'
                  : `${item.rotation} ${item.elevation} bg-[#121212] border-white/10 hover:border-white/20 shadow-xl z-10`;

              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transitionDelay: !isHovered && isVisible ? `${idx * 100}ms` : '0ms',
                  }}
                  className={`relative rounded-3xl p-7 sm:p-8 wide:p-10 flex flex-col text-left transition-all duration-300 ease-out cursor-pointer border ${transformClasses}`}
                >
                  {/* Clean Icon at Top (Depict style, no letters A/B/C/D) */}
                  <div className="mb-7">
                    <div className="w-14 h-14 wide:w-16 wide:h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Title - Big, Bold, Clean (Depict style) */}
                  <h3 className="text-xl sm:text-2xl wide:text-3xl font-bold text-white mb-3 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Exact Client Content (Short, Punchy, Non-Wordy) */}
                  <p className="text-sm sm:text-base wide:text-lg text-stone-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
