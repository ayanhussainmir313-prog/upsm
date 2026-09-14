import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { NAV_LINKS } from '../data';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'why-us', 'gallery', 'admissions', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: School Brand & Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3.5 group text-left"
          id="school-brand-link"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 p-1 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-center group-hover:border-blue-500 transition-colors shadow-xs">
            <img
              src="/uswa-logo.png"
              alt="Uswa Public School Minapin Logo"
              className="w-full h-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-bold text-base sm:text-lg lg:text-xl text-[#0A192F] tracking-tight group-hover:text-blue-700 transition-colors leading-tight">
              Uswa Public School Minapin
            </span>
            <span className="text-xs sm:text-[13px] text-slate-500 font-medium tracking-normal mt-0.5">
              Under Uswa Education System (UES) • Minapin
            </span>
          </div>
        </a>

        {/* Right Side: Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const linkId = link.href.replace('#', '');
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                  isActive
                    ? 'text-blue-700 bg-blue-50/80'
                    : 'text-slate-600 hover:text-[#0A192F] hover:bg-slate-50'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-700 rounded-full" />
                )}
              </a>
            );
          })}

          <div className="ml-3 pl-3 border-l border-slate-200 flex items-center gap-3">
            <button
              id="header-apply-now-btn"
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenApply}
            className="sm:inline-flex hidden items-center justify-center text-xs font-semibold bg-[#1E40AF] text-white px-3.5 py-1.5 rounded-full"
          >
            Apply Now
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl text-center shadow-sm flex items-center justify-center gap-2"
              >
                <span>Apply for Admission (2026)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 py-1">
                <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                <span>Minapin Nagar Campus Helpdesk</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
