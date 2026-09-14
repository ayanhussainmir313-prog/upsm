import React from 'react';
import { MapPin, GraduationCap, LockKeyhole, Phone, Sparkles } from 'lucide-react';

interface TopBarProps {
  onOpenAdmin: () => void;
  onOpenAdmission: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenAdmin, onOpenAdmission }) => {
  return (
    <div
      id="top-info-bar"
      className="bg-[#07132B] text-slate-200 text-xs py-2 px-4 border-b border-slate-800/80 z-50 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-slate-300">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-medium tracking-wide">Minapin, Gilgit-Baltistan</span>
          </div>

          <span className="hidden sm:inline-block text-slate-700">|</span>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-fuchsia-500/20 px-3 py-1.5 shadow-[0_0_18px_rgba(34,211,238,0.15)] ring-1 ring-white/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)]" />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-100 to-fuchsia-200 bg-clip-text text-transparent font-bold uppercase tracking-[0.18em] text-[9px] sm:text-[10px]">
              Ayan Hussain Mir
            </span>
          </div>

          <button
            onClick={onOpenAdmission}
            className="group flex items-center gap-1.5 hover:text-white transition-colors text-left"
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-slate-200">
              Admissions Open for <span className="text-amber-300 font-semibold">Session 2026</span>
            </span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1 text-slate-400">
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>Minapin Nagar Valley</span>
          </div>

          <button
            id="admin-portal-button"
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 px-2.5 py-1 rounded transition-all border border-slate-700/60 shadow-sm"
          >
            <LockKeyhole className="w-3 h-3 text-cyan-400" />
            <span>Admin Portal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
