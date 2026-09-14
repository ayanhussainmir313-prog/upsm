import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  GraduationCap,
  Award,
  HeartHandshake,
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { HERO_STATS } from '../data';

interface HeroProps {
  onOpenApply: () => void;
  onExplore: () => void;
}

const getStatIcon = (iconName: string) => {
  switch (iconName) {
    case 'Users':
      return <Users className="w-5 h-5 text-blue-400" />;
    case 'GraduationCap':
      return <GraduationCap className="w-5 h-5 text-amber-400" />;
    case 'Award':
      return <Award className="w-5 h-5 text-sky-400" />;
    case 'HeartHandshake':
      return <HeartHandshake className="w-5 h-5 text-blue-300" />;
    default:
      return <CheckCircle2 className="w-5 h-5 text-blue-400" />;
  }
};

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onExplore }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#07132B]"
    >
      {/* Background with the authentic school building photo provided by user */}
      <div className="absolute inset-0 z-0">
        <img
          src="/buildings.jpg"
          alt="Uswa Public School Minapin Campus Building, Nagar Valley"
          className="w-full h-full object-cover object-center lg:object-right filter brightness-[0.85] contrast-[1.05]"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />

        {/* Sophisticated Dark Navy Gradient Overlays:
            - Heavy opaque navy on the left for maximum text readability
            - Smooth fade to transparent across center and right to showcase the campus building
            - Subtle vertical vignette top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07132B]/90 via-[#07132B]/70 to-transparent/20 md:to-transparent/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07132B]/80 via-transparent to-[#07132B]/35" />
        {/* Subtle royal blue atmospheric glow behind the heading */}
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Top Tagline / Accreditation Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/40 border border-blue-300/25 text-blue-100 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Under Uswa Education System (UES) • Nagar, Gilgit-Baltistan</span>
          </motion.div>

          {/* Welcome Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-amber-300 font-medium text-lg sm:text-xl tracking-wider uppercase"
          >
            Welcome to
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mt-2 mb-4 drop-shadow-md"
          >
            Uswa Public School <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-sky-100 to-cyan-100">
              Minapin
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading font-semibold text-xl sm:text-2xl text-blue-100/90 tracking-normal mb-5 flex items-center gap-2.5"
          >
            <span className="w-8 h-0.5 bg-amber-400 rounded-full inline-block" />
            <span>Building Knowledge, Character &amp; Confidence</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal drop-shadow-xs"
          >
            Providing quality education, strong values, discipline and a positive learning environment for every student.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              id="hero-apply-admission-btn"
              onClick={onOpenApply}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-base font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer border border-blue-400/40"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-explore-school-btn"
              onClick={onExplore}
              className="group inline-flex items-center justify-center gap-2 bg-slate-900/60 hover:bg-slate-800/80 text-white text-base font-semibold px-6 py-3.5 rounded-full backdrop-blur-md border border-slate-600/60 hover:border-slate-400/80 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-blue-300 group-hover:rotate-45 transition-transform duration-300" />
              <span>Explore School</span>
            </button>
          </motion.div>

          {/* Key Session Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 flex items-center gap-3 text-xs text-slate-300"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Admissions in progress for Academic Session 2026 • Nursery to SSC</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Statistics Ribbon */}
      <div className="relative z-10 w-full bg-[#050E20]/90 backdrop-blur-md border-t border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex items-center gap-4 ${
                  idx > 0 ? 'pt-4 md:pt-0 md:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 shadow-inner">
                  {getStatIcon(stat.iconName)}
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-semibold text-blue-200 text-sm sm:text-base">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
