'use client';

import Image from "next/image";
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Link from 'next/link';

const name = "ANKESH SINGH";

const letterAnimation = {
  initial: { y: 400 },
  animate: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-16">
      {/* Hero Section with Parallax */}
      <div className="relative bg-white">
        <Parallax
          blur={0}
          bgImage="/images/about-bg.jpg"
          bgImageAlt="Hero background"
          strength={300}
          className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)]"
          bgClassName="!bg-white"
        >
          <div className="relative min-h-full flex items-center justify-center bg-white/30 py-16 md:py-8">
            <div className="container mx-auto px-4 py-8 md:py-0">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                {/* Profile Image - Shown first on mobile */}
                <motion.div 
                  className="flex-1 flex justify-center order-first md:order-last"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Your Name"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Left side - Name and Title */}
                <motion.div 
                  className="flex-1 text-left bg-white/70 p-4 md:p-8 rounded-lg shadow-xl w-full order-last md:order-first"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="h-[100px] md:h-[120px] overflow-hidden">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-gray-900 drop-shadow-lg">
                      {name.split("").map((letter, index) => (
                        <motion.span
                          key={index}
                          custom={index}
                          variants={letterAnimation}
                          initial="initial"
                          animate="animate"
                          className="inline-block"
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                      ))}
                    </h1>
                  </div>
                  <motion.p 
                    className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-700 drop-shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    I&apos;m Ankesh Singh, a BTech Computer Science student passionate about software and web development. I enjoy building dynamic web applications, solving algorithmic problems, and constantly learning new technologies. I&apos;m also active on platforms like LeetCode and Codeforces to sharpen my problem-solving skills. Currently, I&apos;m exploring full-stack development and contributing to open-source projects.
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                  >
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors shadow-lg"
                    >
                      Contact Me
                    </Link>
                    <Link
                      href="/portfolio"
                      className="bg-white/90 hover:bg-white text-gray-900 px-8 py-3 rounded-full transition-colors shadow-lg"
                    >
                      View Work
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
               { name: 'Languages', skills: ['JavaScript', 'Python', 'C++','C','Go'] }
              ,{ name: 'Frontend', skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
              { name: 'Backend', skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'] },
              { name: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman','Docker','Kubernetes'] },
              { name: 'Other', skills: ['Responsive Design', 'UI/UX', 'Testing', 'Deployment'] },
             
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore More</h2>
            <p className="text-xl text-gray-600">Discover more about my work and experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about" className="group">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About Me</h3>
                <p className="text-gray-600">Learn more about my journey and expertise</p>
              </motion.div>
            </Link>

            <Link href="/portfolio" className="group">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">My Work</h3>
                <p className="text-gray-600">Explore my latest projects and achievements</p>
              </motion.div>
            </Link>

            <Link href="/contact" className="group">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">Get in touch for collaborations and opportunities</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
