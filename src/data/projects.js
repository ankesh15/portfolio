export const projectsData = [
  {
    id: 'alex',
    title: 'ALEX',
    tagline: 'AI Knowledge & Research Assistant',
    description: 'A document-grounded AI knowledge and research assistant built around a RAG pipeline for asking questions over uploaded documents.',
    features: [
      'Engineered a document-grounded RAG pipeline using LangGraph, FastAPI, and Google Gemini with conditional retrieval and fallback handling when relevant context is unavailable.',
      'Implemented semantic document retrieval using FastEmbed with BAAI/bge-small-en-v1.5 embeddings and PostgreSQL with pgvector using cosine-distance search.',
      'Built document processing for PDF, DOCX, and TXT files with automated chunking, 384-dimensional embeddings, page-level metadata, and structured source citations.',
      'Built the frontend using React, Vite, and Tailwind CSS and deployed the application using Docker, Railway, and Vercel.'
    ],
    tech: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Google Gemini',
      'FastEmbed',
      'PostgreSQL',
      'pgvector',
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Docker',
      'Railway',
      'Vercel'
    ],
    github: 'https://github.com/ankesh15/ALEX',
    demo: 'https://frontend-theta-navy-jhig45orrm.vercel.app',
    featured: true,
    isPrimary: true,
    type: 'AI & RAG System',
    accent: 'from-indigo-500/30 via-purple-500/20 to-indigo-600/30'
  },
  {
    id: 'food-distribution',
    title: 'Food Distribution Platform',
    tagline: 'MERN Surplus Food Collection & Pickup Management',
    description: 'A full-stack MERN platform connecting food donors with NGOs and shelters to manage surplus-food donations, claims, and pickups.',
    features: [
      'Implemented JWT authentication with refresh tokens and RBAC across 3 roles: Donor, Recipient, and Admin.',
      'Designed and integrated 19 REST API endpoints using Node.js, Express.js, MongoDB, and Mongoose.',
      'Built real-time donation tracking using Socket.io with 4 workflow states: Available, Claimed, Picked-up, and Completed.',
      'Integrated Google Maps, Twilio SMS, and Nodemailer for location-based matching and automated notifications.',
      'Added security measures including input validation, rate limiting, Helmet, and CORS.'
    ],
    tech: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Socket.io',
      'JWT',
      'Mongoose',
      'Material-UI',
      'Google Maps API',
      'Twilio',
      'Nodemailer'
    ],
    github: 'https://github.com/ankesh15/Food-Distribution-Platform',
    demo: 'https://food-distribution-platform.vercel.app/',
    featured: true,
    isPrimary: false,
    type: 'Full-Stack MERN Platform',
    accent: 'from-blue-500/30 via-indigo-500/20 to-cyan-500/30'
  }
];
