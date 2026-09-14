import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, CheckCircle2, Shield, Calendar } from 'lucide-react';

interface AdmissionsCtaProps {
  onOpenApply: () => void;
}

export const AdmissionsCta: React.FC<AdmissionsCtaProps> = ({ onOpenApply }) => {
  return (
    <section id="admissions" className="py-20 lg:py-24 bg-[#07132B] relative overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Session Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 shadow-xs"
        >
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>Academic Year 2026 • Registration Live</span>
        </motion.div>

        {/* Big Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto"
        >
          Give Your Child a Stronger Future
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl text-blue-200 font-medium"
        >
          Admissions are open for <span className="text-amber-300 font-bold">Session 2026</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Join a learning community dedicated to moral values, student confidence, qualified guidance, and proven academic success in Nagar Valley.
        </motion.p>

        {/* Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Nursery to SSC (Class 10)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Merit-Based Guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>Affordable Fee Structure</span>
          </div>
        </motion.div>

        {/* Apply Now Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10"
        >
          <button
            id="admissions-apply-now-btn"
            onClick={onOpenApply}
            className="group inline-flex items-center justify-center gap-3 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white text-lg font-bold px-9 py-4 rounded-full shadow-xl shadow-blue-900/50 hover:shadow-blue-600/40 transition-all duration-200 active:scale-[0.98] cursor-pointer border border-blue-400/40"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
