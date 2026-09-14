import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Work Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Experience & Internships
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/40 hover:shadow-md transition-all text-left relative overflow-hidden"
            >
              {/* Subtle Ambient Glow Accent */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-bl-full pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Header: Company, Role & Meta */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs text-slate-400 font-medium mr-1">Technologies:</span>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
