'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="/images/about-bg.jpg"
        bgImageAlt="About background"
        strength={200}
        className="min-h-screen"
      >
        <div className="relative py-20 bg-white/80">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
              <p className="text-xl text-gray-600">Get to know more about my journey and expertise</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
                  <p className="text-gray-600 mb-6">
                  Hi, I am Ankesh Singh, a second-year BTech Computer Science student with a deep interest in software development and competitive programming. My journey began with a curiosity to understand how websites and applications work, which soon turned into a passion for building them.

I started learning web development with HTML, CSS, and JavaScript, and gradually moved into frameworks like React to build modern, responsive user interfaces. Alongside web development, I have explored data structures and algorithms extensively, with  questions solving on LeetCode and regular participation in contests on Codeforces and CodeChef to enhance my problem-solving skills.

I have built projects ranging from GitHub profile finders to to-do apps and full-fledged responsive portfolio websites and many more. I am currently exploring full-stack development, and I aim to build scalable applications using technologies like React, Node.js, and MongoDB.,next.js,express.js . I’ve also begun contributing to open-source to understand real-world codebases and collaboration.


Apart from coding, I enjoy playing football and cricket, and occasionally team up for custom matches in BGMI. These experiences teach me teamwork and strategic thinking—skills that I carry into my development work as well.

Every day, I strive to become a better developer by learning, building, and sharing. I am always open to new opportunities, challenges, and collaborations that help me grow as a person and a professional.
                  </p>
                  <p className="text-gray-600">
                    My journey in web development started with a curiosity for creating things on the internet,
                    which has evolved into a professional career focused on building innovative and user-friendly web applications.
                  </p>
                </div>

                {/* Skills Section */}
                <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800">Frontend</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• React.js</li>
                        <li>• Next.js</li>
                        <li>• Tailwind CSS</li>
                        <li>• TypeScript</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800">Backend</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Node.js</li>
                        <li>• Express.js</li>
                        <li>• MongoDB</li>
                        <li>• REST APIs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Experience Section
                <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-gray-800">Senior Web Developer</h3>
                      <p className="text-gray-600">2020 - Present</p>
                      <p className="text-gray-600 mt-2">
                        Leading development of enterprise web applications and mentoring junior developers.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-gray-800">Web Developer</h3>
                      <p className="text-gray-600">2018 - 2020</p>
                      <p className="text-gray-600 mt-2">
                        Developed and maintained multiple client websites and web applications.
                      </p>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </Parallax>
    </main>
  );
} 