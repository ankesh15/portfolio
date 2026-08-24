import React from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export const Projects = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Curated Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-3"></div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md text-left">
            Full-stack web applications, developer analytics platforms, and AI tooling verified from active GitHub repositories.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Secondary Projects Section (e.g. Portfolio Website) */}
        {secondaryProjects.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={featuredProjects.length + index} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom GitHub Profile Callout Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Explore More Repositories</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">View source code, commits, and technical repositories on GitHub.</p>
            </div>
          </div>

          <a
            href="https://github.com/ankesh15"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors shrink-0 shadow-sm"
          >
            Visit github.com/ankesh15
          </a>
        </div>

      </div>
    </section>
  );
};
