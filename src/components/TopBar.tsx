import React from 'react';
import { MapPin, GraduationCap, LockKeyhole, Phone } from 'lucide-react';

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
        {/* Left Side Information */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-slate-300">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="font-medium tracking-wide">Minapin, Gilgit-Baltistan</span>
          </div>

          <span className="hidden sm:inline-block text-slate-700">|</span>

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

        {/* Right Side - Admin Portal */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1 text-slate-400">
            <Phone className="w-3 h-3 text-blue-400" />
            <span>Minapin Nagar Valley</span>
          </div>

          <button
            id="admin-portal-button"
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 px-2.5 py-1 rounded transition-all border border-slate-700/60 shadow-sm"
          >
            <LockKeyhole className="w-3 h-3 text-blue-400" />
            <span>Admin Portal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
