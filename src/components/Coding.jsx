import React from 'react';
import { motion } from 'framer-motion';
import { codingData } from '../data/coding';
import { Code, Trophy, Award, ExternalLink, CheckCircle, Terminal, Sparkles } from 'lucide-react';

const iconMap = {
  Code: Code,
  Trophy: Trophy,
  Award: Award
};

export const Coding = () => {
  return (
    <section id="coding" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Problem Solving</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Competitive Programming & DSA
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* DSA Overview Statement */}
        <div className="mb-10 p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className="text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                {codingData.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {codingData.topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meta Hacker Cup Feature Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white border border-indigo-500/30 shadow-xl text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured CP Achievement</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">Meta Hacker Cup 2024 — Round 2 Qualifier</h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Qualified for Round 2 in Meta's flagship annual global programming competition, competing against software engineers and algorithmic programmers worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <span className="text-[11px] text-indigo-200 block font-medium">Round 1 Rank</span>
                <span className="text-xl font-bold font-mono text-white">2,521st</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <span className="text-[11px] text-indigo-200 block font-medium">Global Round 2 Rank</span>
                <span className="text-xl font-bold font-mono text-amber-300">3,636th</span>
              </div>
              <a
                href="https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/855493433378513"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-xs font-semibold text-white transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Platform Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {codingData.platforms.map((platform, idx) => {
            const IconComponent = iconMap[platform.icon] || Code;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        {platform.name}
                      </h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                      {platform.badge}
                    </span>
                  </div>

                  <div className="space-y-2 my-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">{platform.metricLabel}</span>
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                        {platform.rating}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Solved / Milestone</span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-mono">
                        {platform.solved}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Profile Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {codingData.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm"
            >
              <span>{social.label}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
