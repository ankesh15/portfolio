import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Server, Code2 } from 'lucide-react';
import { educationData } from '../data/education';

export const About = () => {
  const currentEdu = educationData[0]; // IIIT Agartala

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Background</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-5 text-left text-slate-600 dark:text-slate-300 leading-relaxed text-base"
          >
            <p className="text-lg text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
              I'm a B.Tech Computer Science and Engineering student at the Indian Institute of Information Technology Agartala, passionate about building AI-powered products, full-stack applications, and solving algorithmic problems.
            </p>

            <p>
              My current focus is AI engineering, particularly Retrieval-Augmented Generation (RAG), LLM applications, embeddings, vector search, and backend systems. Alongside AI, I build full-stack applications using React, Node.js, Express, FastAPI, MongoDB, PostgreSQL, and modern cloud platforms.
            </p>

            <p>
              I also actively practice Data Structures & Algorithms and competitive programming using C++.
            </p>

            {/* Core Interest Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">AI Engineering</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">RAG, LangGraph & Vector Search</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Full-Stack Systems</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">React, FastAPI, Node & Postgres</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">DSA & Algorithms</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">C++, 715+ LeetCode, Meta Cup</p>
              </div>
            </div>
          </motion.div>

          {/* Education Summary Card Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Education</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Computer Science</h3>
                </div>
              </div>

              <div className="space-y-3 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                    {currentEdu.institution}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {currentEdu.degree}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                    Duration: <strong className="text-indigo-600 dark:text-indigo-400">{currentEdu.period}</strong>
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                    CGPA: {currentEdu.cgpa}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-xs text-slate-400 font-medium block mb-2">Core Coursework:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentEdu.highlights.map((item) => (
                      <span key={item} className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
