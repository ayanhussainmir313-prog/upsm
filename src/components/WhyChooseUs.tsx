import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Briefcase,
  CheckCircle2,
  Trophy,
  Star,
  Check,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data';

const getWhyIcon = (iconName: string) => {
  switch (iconName) {
    case 'Compass':
      return <Compass className="w-6 h-6 text-blue-700" />;
    case 'Briefcase':
      return <Briefcase className="w-6 h-6 text-blue-700" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="w-6 h-6 text-blue-700" />;
    case 'Trophy':
      return <Trophy className="w-6 h-6 text-blue-700" />;
    default:
      return <Star className="w-6 h-6 text-blue-700" />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-24 bg-slate-50/70 relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A192F] tracking-tight">
            Setting the Benchmark for Education in Minapin
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We blend rigorous academic preparation with moral integrity and lively extracurricular growth, giving every child the foundation to succeed.
          </p>
        </div>

        {/* 4 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-13 h-13 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  {getWhyIcon(item.iconName)}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#0A192F] mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Verified School Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
