import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { educationData, achievementsData } from '../data/education';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const bisExp = experienceData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[88vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Ankesh Singh — Resume Preview</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Header section */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Ankesh Singh</h2>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">AI & Full-Stack Developer</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                ankeshsingh051@gmail.com · IIIT Agartala (CGPA: 8.52) · github.com/ankesh15 · linkedin.com/in/ankesh-singh-3b8b8728a
              </p>
            </div>

            <a
              href="/Ankesh-Singh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 shrink-0 self-start sm:self-auto"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
              Work Experience
            </h3>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{bisExp.company}</h4>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{bisExp.role}</p>
                </div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md font-mono self-start sm:self-auto">
                  {bisExp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300 pt-1">
                {bisExp.points.map((pt, i) => (
                  <li key={i} className="leading-relaxed">{pt}</li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <strong>Tech:</strong> {bisExp.tech.join(', ')}
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Education</h3>
            <div className="space-y-2">
              {educationData.map((edu) => (
                <div key={edu.id} className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{edu.institution}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{edu.degree}</p>
                    </div>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded font-mono shrink-0">
                      {edu.period} · {edu.cgpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Technical Skills</h3>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-xs leading-relaxed space-y-1.5">
              <p><strong>AI & ML:</strong> RAG, LangGraph, Google Gemini, FastEmbed, Embeddings, Vector Search</p>
              <p><strong>Languages:</strong> C++, C, JavaScript, Python</p>
              <p><strong>Backend & APIs:</strong> FastAPI, Node.js, Express.js, REST APIs, Socket.io</p>
              <p><strong>Databases:</strong> PostgreSQL, pgvector, MongoDB, MySQL, Mongoose</p>
              <p><strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, Vite</p>
              <p><strong>Cloud & DevOps:</strong> Docker, Railway, Vercel, GitHub Actions, Linux</p>
              <p><strong>Tools:</strong> Git, GitHub, Postman, VS Code</p>
              <p><strong>Core CS:</strong> Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks</p>
            </div>
          </div>

          {/* Verified Projects */}
          <div>
            <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Verified Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectsData.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs">{p.title}</h4>
                    <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">{p.type}</span>
                  </div>
                  <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">{p.tagline}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-3 mt-1">{p.description}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-2 truncate">
                    Tech: {p.tech.slice(0, 5).join(', ')}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Competitive Achievements</h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {achievementsData.map((a) => (
                <li key={a.id} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                  <span><strong>{a.title}:</strong> {a.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close Preview
          </button>

          <a
            href="/Ankesh-Singh-Resume.pdf"
            download="Ankesh-Singh-Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};
