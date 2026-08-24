import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Layout, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Sparkles: Sparkles
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Technical Stack</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${skill.highlight ? 'text-indigo-500' : 'text-slate-400'}`} />
                        <span>{skill.name}</span>
                        {skill.note && (
                          <span className="text-[10px] opacity-70 font-normal ml-0.5">({skill.note})</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
