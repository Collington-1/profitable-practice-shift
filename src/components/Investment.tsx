import React from 'react';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import { PROGRAMME_DATA, PricingPlan } from '../data/programme';

interface InvestmentProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Investment: React.FC<InvestmentProps> = ({ onSelectPlan }) => {
  return (
    <section id="investment" className="py-16 lg:py-24 bg-[#0A0A0A] text-white relative">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 wide:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl wide:max-w-4xl mx-auto mb-12 lg:mb-16">
          <p className="text-xs wide:text-sm uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
            Investment &amp; Enrolment
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl wide:text-6xl font-bold tracking-tight text-white mb-3 leading-tight">
            Same Programme. <br />
            <span className="text-brand-gold italic font-normal">Choose How You Invest.</span>
          </h2>

          <p className="text-base sm:text-lg wide:text-xl text-stone-300 font-light leading-relaxed">
            Standard tuition: <strong className="text-white font-medium">$3,000</strong>. 
            All three options grant complete access to the 8-week implementation cohort.
          </p>

          <div className="mt-2.5 flex items-center justify-center gap-2 text-sm wide:text-base text-brand-gold font-medium">
            <Calendar className="w-4 h-4" />
            <span>Cohort Begins: {PROGRAMME_DATA.meta.cohortStartDate}</span>
          </div>
        </div>

        {/* 3-Column Pricing Cards (Faithful Recreation of Image 4 Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 wide:gap-12 items-stretch max-w-[1500px] wide:max-w-wide mx-auto w-full">
          {PROGRAMME_DATA.pricingPlans.map((plan) => {
            const isFeatured = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 md:p-5 lg:p-9 wide:p-12 flex flex-col justify-between transition-all duration-300 relative border ${
                  isFeatured
                    ? 'bg-[#181818] border-brand-gold shadow-2xl md:-translate-y-2 z-10 ring-1 ring-brand-gold/30 hover:-translate-y-3.5 hover:shadow-brand-gold/20'
                    : 'bg-[#121212] border-white/10 hover:border-brand-gold/40 hover:bg-[#151515] hover:-translate-y-2 hover:shadow-xl'
                }`}
              >
                {/* Featured Badge - Centered Without Animations */}
                {plan.badge && (
                  <div className="absolute -top-3.5 inset-x-0 flex justify-center pointer-events-none">
                    <span className="px-4 py-1 rounded-full bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="border-b border-white/10 pb-5 mb-5 text-left">
                    <h3 className="text-lg sm:text-xl wide:text-2xl font-bold text-white mb-1 tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 font-light">
                      {plan.scheduleDescription}
                    </p>

                    {/* Price Display */}
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl wide:text-6xl font-bold text-white tracking-tight">
                        ${plan.amountToday.toLocaleString()}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                        today
                      </span>
                    </div>

                    <div className="mt-1.5 text-xs sm:text-sm text-brand-gold font-medium">
                      {plan.savingsText}
                    </div>
                  </div>

                  {/* Core Inclusions List */}
                  <div className="space-y-3 mb-6 text-left">
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">
                      Included In Your Seat:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200 font-light">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>Full 8-week Accelerator access</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>Weekly live coaching with Dr Amy</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>Scorecard &amp; Value Leak Audit</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>5-Question Patient Dialogue guides</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>Custom 90-Day Practice Plan</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Enrol Action Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 sm:py-4 px-5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-brand-gold hover:bg-brand-gold-light text-brand-black shadow-lg hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    <span>Enrol Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-2">
                    Stripe-ready secure enrolment
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
