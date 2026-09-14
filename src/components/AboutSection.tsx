import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpenCheck,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  School,
} from 'lucide-react';
import { ABOUT_CARDS } from '../data';

interface AboutSectionProps {
  onOpenApply: () => void;
}

const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookOpenCheck':
      return <BookOpenCheck className="w-6 h-6 text-blue-700" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-blue-700" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-blue-700" />;
    case 'UserCheck':
      return <UserCheck className="w-6 h-6 text-blue-700" />;
    default:
      return <School className="w-6 h-6 text-blue-700" />;
  }
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3 border border-blue-100"
          >
            <span>About Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A192F] tracking-tight"
          >
            Uswa Public School Minapin
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Dedicated to empowering young minds in the heart of Nagar Valley, Uswa Public School Minapin fosters an atmosphere where academic excellence, moral integrity, steadfast discipline, and student self-confidence thrive together. We provide comprehensive education grounded in enduring human values.
          </motion.p>
        </div>

        {/* Four Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {ABOUT_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors">
                      {getFeatureIcon(card.iconName)}
                    </span>
                  </div>
                  {card.tag && (
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/60">
                      {card.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#0A192F] mb-3 group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-blue-700 group-hover:gap-2 transition-all">
                <span>Core Pillar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Light-Blue Information Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 border border-blue-200/70 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                <span>Uswa Education System (UES)</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                Uswa Public School Minapin is part of the wider Uswa Education System, which operates approximately 50–60 institutes and campuses across Gilgit-Baltistan.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenApply}
            className="shrink-0 bg-white hover:bg-blue-600 hover:text-white text-[#1E40AF] font-bold text-sm px-5 py-2.5 rounded-xl border border-blue-200 hover:border-blue-600 transition-all duration-200 shadow-xs cursor-pointer"
          >
            Apply for Minapin Campus
          </button>
        </motion.div>
      </div>
    </section>
  );
};
