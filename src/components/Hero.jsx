import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Award, Code2, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons';

export const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Information Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
              <span>B.Tech CSE @ IIIT Agartala</span>
              <span className="text-slate-400">·</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 inline text-indigo-500" /> India</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                ANKESH SINGH
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              I build full-stack web applications and developer-focused tools using modern JavaScript technologies, while solving algorithmic problems with C++ and Data Structures & Algorithms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Ankesh-Singh-Resume.pdf"
                download="Ankesh-Singh-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Connect:</span>
              
              <a
                href="https://github.com/ankesh15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/ankeshsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:singhankesh672@gmail.com"
                className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="Email Ankesh"
              >
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column Professional Highlights Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none"></div>

              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Key Highlights</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Computer Science & Engineering</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
                  CGPA: 8.52
                </span>
              </div>

              {/* Verified Metrics Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs font-semibold">LeetCode</span>
                  </div>
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white font-mono">715+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Peak Rating: 1792+</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold">Meta Hacker Cup</span>
                  </div>
                  <div className="text-lg font-extrabold text-slate-900 dark:text-white font-mono">Round 2</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">2024 Qualifier</div>
                </div>
              </div>

              {/* Core Skill Pills */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Primary Competencies</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'C++', 'Data Structures', 'REST APIs', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Resume Link Footnote */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Verified Credentials
                </span>
                <button
                  onClick={onOpenResume}
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  Quick Resume View
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
