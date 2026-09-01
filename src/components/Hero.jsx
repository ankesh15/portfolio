import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons';

export const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

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
              I’m a Computer Science student at IIIT Agartala focused on full-stack development, AI, and problem solving. I enjoy building practical web applications, exploring AI-powered solutions, and working with technologies across the frontend, backend, and data layer. I also regularly challenge myself with C++ and Data Structures & Algorithms.
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

            {/* Mobile Profile Photo Placement (between Buttons and Social Links) */}
            <div className="block lg:hidden my-6">
              <ProfilePhotoFrame className="w-48 h-48 sm:w-56 sm:h-56 mx-auto" />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2 lg:pt-4 text-slate-500 dark:text-slate-400">
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
                href="https://www.linkedin.com/in/ankesh-singh-3b8b8728a/"
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

          {/* Right Column Profile Photo Column (Desktop lg+) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <ProfilePhotoFrame className="w-72 h-72 xl:w-80 xl:h-80" />
          </div>

        </div>
      </div>
    </section>
  );
};

// Circular Profile Photo Component
const ProfilePhotoFrame = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={`relative group shrink-0 ${className}`}
    >
      {/* Outer subtle accent ring */}
      <div className="w-full h-full p-2 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-indigo-500/15 dark:from-indigo-500/25 dark:via-purple-500/15 dark:to-indigo-500/25 border border-indigo-200/60 dark:border-indigo-800/40 shadow-xl shadow-indigo-500/5 dark:shadow-indigo-950/20">
        {/* Inner photo container */}
        <div className="w-full h-full rounded-full overflow-hidden aspect-square border-2 border-white dark:border-slate-800 shadow-md">
          <img
            src="/profile.jpg"
            alt="Ankesh Singh"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </motion.div>
  );
};

