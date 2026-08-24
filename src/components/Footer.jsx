import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './UI/SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0b0f19] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Brand Info */}
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
              Ankesh Singh
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full-Stack Developer · IIIT Agartala
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a
              href="https://github.com/ankesh15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/ankeshsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:singhankesh672@gmail.com"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top & Copyright */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>© 2026 Ankesh Singh</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-400 transition-colors"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
