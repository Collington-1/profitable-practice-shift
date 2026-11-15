import React from 'react';

export const ValueBand: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-brand-ivory text-brand-ivory-text border-y border-brand-ivory-dark relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold-dark mb-4">
          The Practice Evolution
        </p>

        {/* Large Signature Statement */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-10 max-w-4xl mx-auto tracking-tight">
          "You've invested years in your clinical craft. <br />
          <span className="italic text-brand-gold-dark font-normal">What have you invested in the business around it?"</span>
        </blockquote>

        {/* 3 Horizontal Value Transformations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-300 text-left">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark">
              01 · Economic Visibility
            </span>
            <h4 className="text-lg font-bold text-stone-900">
              Know Your Hourly Margin
            </h4>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Replace gross revenue guesswork with exact visibility into clinical-time yield, direct delivery costs, and retained net profit.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark">
              02 · Intentional Capacity
            </span>
            <h4 className="text-lg font-bold text-stone-900">
              Protect Your Clinical Calendar
            </h4>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Transition from overcrowded, low-margin appointment fatigue to high-value block scheduling that liberates clinical time.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark">
              03 · Decision Alignment
            </span>
            <h4 className="text-lg font-bold text-stone-900">
              Confident Case Acceptance
            </h4>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Equip patients to understand comprehensive diagnosis and make informed commitments without feeling pressured.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
