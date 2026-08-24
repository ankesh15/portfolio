import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Check } from 'lucide-react';
import { GithubIcon } from './UI/SocialIcons';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden text-left"
    >
      {/* Top Accent Gradient Line */}
      <div className={`h-1.5 bg-gradient-to-r ${project.accent || 'from-indigo-500 to-purple-500'}`} />

      {/* Real Project Image Banner (if available) */}
      {project.image && (
        <div className="relative w-full h-48 sm:h-56 bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      )}

      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
        <div>
          {/* Category Pill & Index */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
              {project.type}
            </span>
            <span className="text-xs text-slate-400 font-mono">0{index + 1}</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1 mb-3">
            {project.tagline}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Verified Features</span>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {project.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {/* Tech Stack Badges */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-5">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-indigo-500" />
              <span>GitHub</span>
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
