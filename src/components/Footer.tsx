import React from 'react';
import { MapPin, Phone, Mail, Shield, Heart } from 'lucide-react';
import { NAV_LINKS } from '../data';

interface FooterProps {
  onOpenApply: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply, onOpenAdmin }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#050E20] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: School Identity & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 bg-white p-1 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/uswa-logo.png"
                  alt="Uswa Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white tracking-tight">
                  Uswa Public School Minapin
                </h3>
                <p className="text-xs text-blue-300 font-medium">
                  Under Uswa Education System (UES) • Minapin
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Building knowledge, character, and confidence in Nagar Valley. Affiliated with the USWA Education System operating 50–60 campuses across Gilgit-Baltistan.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenApply}
                className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Admissions 2026
              </button>
              <button
                onClick={onOpenAdmin}
                className="text-xs text-slate-400 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
              >
                Staff Portal
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block text-slate-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location & Accreditation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-4">
              Location
            </h4>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Minapin, Gilgit-Baltistan, Pakistan</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Academic Board Affiliation</span>
              </div>
              <p>FBISE (Federal Board of Intermediate &amp; Secondary Education) Curriculum &amp; Examinations.</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Uswa Public School Minapin. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Uswa Education System Gilgit-Baltistan</span>
            <span>•</span>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-blue-400 hover:text-blue-300"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        <div className="mt-3 pt-2 text-center text-xs font-bold tracking-wide bg-gradient-to-r from-amber-300 via-pink-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.35)]">
          Made by Ayan Mir
        </div>
      </div>
    </footer>
  );
};
