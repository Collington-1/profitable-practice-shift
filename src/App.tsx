import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Methodology } from './components/Methodology';
import { Founder } from './components/Founder';
import { Journey } from './components/Journey';
import { Deliverables } from './components/Deliverables';
import { Investment } from './components/Investment';
import { FAQ } from './components/FAQ';
import { Closeout } from './components/Closeout';
import { EnrolmentModal } from './components/EnrolmentModal';
import { PricingPlan } from './data/programme';

export function App() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleEnrolClick = () => {
    const el = document.querySelector('#investment');
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col font-body selection:bg-brand-gold selection:text-brand-black overflow-x-hidden w-full">
      {/* Top Sticky Navigation */}
      <Navbar onEnrolClick={handleEnrolClick} />

      {/* Main Single-Page Sections */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* 01 — Hero / Above the Fold */}
        <Hero onEnrolClick={handleEnrolClick} />

        {/* 02 — The Problem: The Busy-Practice Profitability Gap™ */}
        <Problem />

        {/* 03 — The Methodology: The Profitable Practice Shift™ */}
        <Methodology onEnrolClick={handleEnrolClick} />

        {/* 04 — Founder / About Dr Amy */}
        <Founder onEnrolClick={handleEnrolClick} />

        {/* 05 — The Programme: The Profitable Practice Accelerator™ */}
        <Journey onEnrolClick={handleEnrolClick} />

        {/* 06 — What Participants Receive */}
        <Deliverables onEnrolClick={handleEnrolClick} />

        {/* 07 — Investment / Enrolment Options */}
        <Investment onSelectPlan={handleSelectPlan} />

        {/* 09 — FAQ: Interactive Tabs & Accordion */}
        <FAQ />

        {/* 10 — Final Close-Out / Enrolment CTA */}
        <Closeout onEnrolClick={handleEnrolClick} />
      </main>

      {/* Stripe-Ready Enrolment Modal */}
      <EnrolmentModal plan={selectedPlan} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
