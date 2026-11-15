import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PROGRAMME_DATA } from '../data/programme';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Programme & Format', 'Time & Fit', 'Enrolment & Investment'];

  const filteredFaqs = activeCategory === 'All' 
    ? PROGRAMME_DATA.faqs 
    : PROGRAMME_DATA.faqs.filter(f => f.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-[#0E0E0E] text-white border-t border-white/10 relative">
      <div className="max-w-4xl wide:max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 wide:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl wide:max-w-3xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] wide:text-[3.75rem] font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Category Tabs (Recreated from Image 4 top navigation tabs) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 lg:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 sm:px-5 wide:px-6 py-2 sm:py-2.5 wide:py-3 rounded-full text-[11px] sm:text-xs wide:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-gold text-brand-black shadow-md'
                  : 'bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen 
                    ? 'bg-[#141414] border-brand-gold/40 shadow-lg' 
                    : 'bg-[#111111] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-gold">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-300 leading-relaxed font-light border-t border-white/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
