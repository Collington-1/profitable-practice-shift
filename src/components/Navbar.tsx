import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onEnrolClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnrolClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'The Shifts', href: '#methodology' },
    { label: 'About Dr Amy', href: '#about' },
    { label: '8-Week Journey', href: '#journey' },
    { label: 'Investment', href: '#investment' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const pos = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl wide:max-w-wide mx-auto px-5 sm:px-6 lg:px-8 wide:px-16">
        <div className="flex items-center justify-between">

          {/* Logo & Identity */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 sm:gap-3.5 group shrink-0"
          >
            <img
              src="/assets/dr-amy-logo-white.png"
              alt="Dr Amy Logo"
              className="h-9 sm:h-10 wide:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm wide:text-base font-semibold tracking-wide text-white font-sans leading-tight">
                The Profitable Practice
              </span>
              <span className="text-[10px] sm:text-xs wide:text-sm text-brand-gold tracking-[0.2em] uppercase font-medium">
                Accelerator™
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (1024px and up) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 wide:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs xl:text-sm wide:text-base uppercase tracking-wider text-stone-300 hover:text-white font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* CTA Button (Visible from 640px and up) */}
            <div className="hidden sm:flex items-center">
              <button
                onClick={onEnrolClick}
                className="inline-flex items-center gap-2 px-5 sm:px-6 wide:px-8 py-2.5 wide:py-3 rounded-full text-xs wide:text-sm uppercase tracking-wider font-semibold text-brand-black bg-brand-gold hover:bg-brand-gold-light transition-all shadow-md hover:shadow-brand-gold/20 hover:scale-105 shrink-0"
              >
                <span>Enrol Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Mobile / Tablet Toggle (Visible below lg / 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-200 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer (below lg / 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-stone-200 hover:text-brand-gold py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onEnrolClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-brand-black bg-brand-gold hover:bg-brand-gold-light transition-all shadow-md"
          >
            <span>Enrol Now — Cohort Dec 2026</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
