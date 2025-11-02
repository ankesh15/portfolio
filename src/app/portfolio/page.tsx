// 'use client';

// import { motion } from 'framer-motion';
// import { Parallax } from 'react-parallax';
// import Image from 'next/image';
// import { useState } from 'react';

// const projects = [
//   {
//     id: 1,
//     title: '',
//     description: '',
//     image: '/images/project1.jpg',
//     category: 'web',
//     technologies: ['', '', ''],
//     link: '#'
//   },
//   {
//     id: 2,
//     title: 'Food Distribution Platform',
//     description: 'A web platform to connect food donors, distribution centers, and communities to reduce waste and improve access to food. Features donation management, pickup scheduling, and reporting dashboards.',
//     image: '/images/project2.jpg',
//     category: 'web',
//     technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
//     link: '/portfolio/food-distribution'
//   },
//   {
//     id: 3,
//     title: 'coming soon3',
//     description: '',
//     image: '/images/project3.jpg',
//     category: 'web',
//     technologies: ['', '', ''],
//     link: '#'
//   }
// ];

// const categories = ['all', 'web', 'mobile', 'design'];

// export default function Portfolio() {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const filteredProjects = selectedCategory === 'all'
//     ? projects
//     : projects.filter(project => project.category === selectedCategory);

//   return (
//     <main className="min-h-screen bg-white">
//       <Parallax
//         blur={0}
//         bgImage="/images/portfolio-bg.jpg"
//         bgImageAlt="Portfolio background"
//         strength={250}
//         className="min-h-screen"
//       >
//         <div className="relative py-20 bg-white/80">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-16"
//             >
//               <h1 className="text-5xl font-bold text-gray-900 mb-4">My Portfolio</h1>
//               <p className="text-xl text-gray-600">Explore my latest projects and work</p>
//             </motion.div>

//             {/* Category Filter */}
//             <div className="flex justify-center gap-4 mb-12">
//               {categories.map((category) => (
//                 <motion.button
//                   key={category}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white/90 text-gray-700 hover:bg-gray-100'
//                     }`}
//                 >
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Projects Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl"
//                 >
//                   <div className="relative h-48">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
//                       <h3 className="text-xl font-bold text-white">{project.title}</h3>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <p className="text-gray-600 mb-4">{project.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.technologies.map((tech, index) => (
//                         <span
//                           key={index}
//                           className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <a
//                       href={project.link}
//                       className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
//                     >
//                       View Project
//                       <svg
//                         className="w-4 h-4 ml-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M14 5l7 7m0 0l-7 7m7-7H3"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Parallax>
//     </main>
//   );
// } 
'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Food Distribution Platform',
    description:
      'A full-stack platform connecting food donors, recipients, and admins — enabling donation management, pickup scheduling, and live dashboards to reduce food waste.',
    image: '/images/project1.jpg',
    category: 'web',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    link: '/portfolio/food-distribution',
  },
  {
    id: 2,
    title: 'Advanced E-commerce Website',
    description:
      'A modern MERN stack e-commerce platform featuring AI-powered virtual try-ons, secure authentication, product management, and a sleek responsive UI.',
    image: '/images/project2.jpg',
    category: 'web',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    link: '/portfolio/advanced-ecommerce',
  }
  ,
  {
    id: 3,
    title: 'Coming Soon 2',
    description:
      'Another upcoming full-stack project currently in development.',
    image: '/images/project3.jpg',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: '#',
  },
];

const categories = ['all', 'web', 'mobile', 'design'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <Parallax
        blur={0}
        bgImage="/images/portfolio-bg.jpg"
        bgImageAlt="Portfolio background"
        strength={250}
        className="min-h-screen"
      >
        <div className="relative py-20 bg-white/85 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                My Portfolio
              </h1>
              <p className="text-lg text-gray-600">
                Explore my latest web development projects and innovations.
              </p>
            </motion.div>

            {/* Category Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/90 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative w-full h-56 md:h-60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Parallax>
    </main>
  );
}
