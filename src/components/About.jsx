import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cpu, Award, Layers } from 'lucide-react';
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
              I am a Computer Science & Engineering undergraduate at Indian Institute of Information Technology Agartala (IIIT Agartala) with an 8.52 CGPA.
            </p>

            <p>
              My primary focus lies in building scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), engineering secure RESTful APIs, and developing AI-assisted tools.
            </p>

            <p>
              I actively practice Data Structures & Algorithms using C++, having solved over 715+ problems on LeetCode and qualifying for Round 2 of Meta Hacker Cup 2024. I also contribute to open-source software through programs like GirlScript Summer of Code (GSSoC).
            </p>

            {/* Core Interest Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Full-Stack Dev</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">MERN Stack, React & Node</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Backend & APIs</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">REST APIs, Socket.io, JWT</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">DSA & Algorithms</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">715+ LeetCode, Meta Hacker Cup</p>
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
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
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
