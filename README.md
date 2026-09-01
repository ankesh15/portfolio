# Ankesh Singh — Personal Portfolio

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Personal portfolio website showcasing my skills, projects, competitive programming journey, achievements, and developer experience.

---

## Live Website

**Live Portfolio:** [https://portfolio-6y8h.vercel.app/](https://portfolio-6y8h.vercel.app/)

---

## About

I am **Ankesh Singh**, a Computer Science & Engineering undergraduate at **Indian Institute of Information Technology Agartala (IIIT Agartala)** maintaining an **8.52 CGPA**.

My technical expertise centers on **Full-Stack Development** (MERN stack), designing robust RESTful APIs, and building AI-assisted tools. In competitive programming, I regularly practice Data Structures & Algorithms using C++, having solved over **715+ problems on LeetCode** and qualifying for **Round 2 of Meta Hacker Cup 2024**.

---

## Portfolio Preview

![Portfolio Preview](./src/assets/hero.png)

---

## Features

- **Responsive Layout**: Fluid design optimized across mobile (375px+), tablet, and desktop displays.
- **Dark & Light Mode**: Theme toggling powered by React Context with `localStorage` state persistence.
- **Smooth Scrolling Navigation**: Section linkage for seamless in-page scrolling.
- **Hero Section**: Professional summary, social channels, and direct official PDF resume download.
- **About Section**: Education background, academic metrics, and core development focus areas.
- **Categorized Skills**: Technical stack grouped into Languages, Frontend, Backend, Databases, Tools, and CS Foundations.
- **Featured Projects**: Verified project showcases with GitHub repository links and active deployment links.
- **Competitive Programming & DSA**: Milestone cards featuring Meta Hacker Cup 2024, LeetCode, and CodeChef statistics.
- **Education & Achievements**: Academic history timeline alongside GSSoC and coding honors.
- **Contact Form & Direct Channels**: Client-side form validation and mailto draft generation.
- **Interactive Resume Modal**: In-browser resume overview with direct PDF download button.
- **Framer Motion Animations**: Micro-interactions and entry animations.
- **SEO & Open Graph Metadata**: Configured title, meta description, and social graph tags in `index.html`.

---

## Tech Stack

### Frontend
- **React.js** (v19)
- **Vite** (v8)
- **Tailwind CSS** (v4)

### UI & Animations
- **Framer Motion**
- **Lucide React** (Icons)

### Development & Tooling
- **JavaScript** (ES6+)
- **Git & GitHub**
- **Oxlint**

---

## Portfolio Sections

- **Hero**: Introduction, professional title, quick social links, call-to-action buttons, and PDF resume access.
- **About**: Education overview, CGPA, background summary, and engineering interests.
- **Skills**: Skill matrices categorized by domain.
- **Projects**: Curated full-stack, analytics, and AI applications sourced from active GitHub repositories.
- **Coding & DSA**: DSA problem-solving statistics and competitive contest highlights.
- **Achievements**: Recognized milestones including Meta Hacker Cup 2024 and GSSoC open-source contributions.
- **Education**: Detailed academic background (IIIT Agartala & Amrit Public School).
- **Contact**: Direct email address, verified social profiles, and interactive inquiry form.

---

## Featured Projects

### Food Distribution Platform
A MERN-stack platform connecting food donors (restaurants, caterers) with local NGOs to schedule surplus food pickups and reduce waste.
- **Key Features**: JWT authentication, role-based access control (Donor/NGO/Admin), REST APIs, Socket.io real-time claim tracking, Google Maps API geolocation search, Twilio SMS, and Nodemailer notifications.
- **Technologies**: MongoDB, Express.js, React.js, Node.js, Socket.io, JWT, Material UI, Google Maps API, Twilio, Nodemailer.
- **Repository**: [https://github.com/ankesh15/Food-Distribution-Platform](https://github.com/ankesh15/Food-Distribution-Platform)
- **Live Demo**: [https://food-distribution-platform.vercel.app](https://food-distribution-platform.vercel.app)

### CodersHub — Developer Analytics Platform
A full-stack developer analytics platform designed to aggregate, track, and visualize coding statistics across LeetCode, Codeforces, and GitHub in a single dashboard.
- **Key Features**: Developer handle profile aggregation, problem solve distribution charts, contest rating history tracking, and interactive dashboards.
- **Technologies**: React.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, Vite, Recharts, Axios.
- **Repository**: [https://github.com/ankesh15/CodersHub](https://github.com/ankesh15/CodersHub)

### Code Reviewer AI
An AI-powered Python code review application designed to analyze source code for bugs, style issues, and security vulnerabilities.
- **Key Features**: Automated Python code quality analysis, bug detection, and AI-powered refactoring suggestions.
- **Technologies**: Python, Streamlit, Google Generative AI.
- **Repository**: [https://github.com/ankesh15/Code-reviewer-ai](https://github.com/ankesh15/Code-reviewer-ai)

### Personal Developer Portfolio
Recruiter-focused personal portfolio website built to showcase projects, algorithmic problem-solving milestones, and academic background.
- **Technologies**: React.js, Vite, Tailwind CSS, Framer Motion.
- **Repository**: [https://github.com/ankesh15/portfolio](https://github.com/ankesh15/portfolio)
- **Live Demo**: [https://portfolio-6y8h.vercel.app/](https://portfolio-6y8h.vercel.app/)

---

## Coding Achievements

### LeetCode
- **715+** problems solved
- **1792+** peak contest rating

### CodeChef
- **1424+** peak contest rating
- **2-Star** Coder

### Meta Hacker Cup 2024
- **Advanced to Round 2**
- **2,521st** rank in Round 1
- **3,636th** global rank in Round 2

### Open Source
- **GirlScript Summer of Code (GSSoC)**: Contributed to open-source software repositories by resolving frontend issues, enhancing documentation, and submitting peer-reviewed pull requests.

---

## Education

**Indian Institute of Information Technology Agartala**  
B.Tech in Computer Science and Engineering  
*2023 – 2027*  
**CGPA: 8.52**

**Amrit Public School**  
Senior Secondary (XII)  
*2021 – 2022*  
**Percentage: 90.0%**

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ankesh15/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## Production Build

To compile the application for production deployment:

```bash
npm run build
```

This generates optimized static bundles inside the `dist/` directory.

---

## Project Structure

```text
portfolio/
├── public/
│   ├── Ankesh-Singh-Resume.pdf
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── UI/
│   │   │   └── SocialIcons.jsx
│   │   ├── About.jsx
│   │   ├── Coding.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeModal.jsx
│   │   └── Skills.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── coding.js
│   │   ├── education.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Deployment

The portfolio is deployed on **Vercel**:  
**Live URL**: [https://portfolio-6y8h.vercel.app/](https://portfolio-6y8h.vercel.app/)

---

## Contact

- **GitHub**: [https://github.com/ankesh15](https://github.com/ankesh15)
- **LinkedIn**: [https://www.linkedin.com/in/ankesh-singh-3b8b8728a/](https://www.linkedin.com/in/ankesh-singh-3b8b8728a/)
- **Email**: [singhankesh672@gmail.com](mailto:singhankesh672@gmail.com)
