import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    category: 'Web App',
    title: 'Kuhiro Weather App',
    description: 'Real-Time Global Weather Updates with Multi-Day Forecast and clean table layout. Responsive & Accessible Design.',
    tech: ['React.js', 'TypeScript', 'CSS', 'Django', 'REST API'],
    image: '/images/kuhiro.jpg', 
    codeLink: 'https://github.com/Mridulkhanal/kuhiro-weather-app',
    liveLink: '' 
  },
  {
    category: 'E-commerce',
    title: 'Online Nursery Plant Shopping System',
    description: 'User registration & login, Browse plants by category, Cart & checkout functionality.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/images/onlinenursery.jpg',
    codeLink: 'https://github.com/Mridulkhanal/online-nursery-plant-shopping-system',
    liveLink: ''
  },
  {
    category: 'Game',
    title: 'Word Scramble Game',
    description: 'Two game modes: Normal and Challenge. 100 unique words with hints for varied gameplay. Responsive progress bar and hint system.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/wordscramble.jpg',
    codeLink: 'https://github.com/Mridulkhanal/Word-Scramble-Game',
    liveLink: 'https://word-scramble-game-zeta.vercel.app/'
  },
  {
    category: 'Portfolio',
    title: 'Personal Portfolio',
    description: 'Created a personal portfolio website to showcase my skills, certifications, and projects. Tech Stack: React.js, HTML5, CSS3.',
    tech: ['React.js', 'HTML', 'CSS'],
    image: '/images/portfolio.jpg',
    codeLink: 'https://github.com/Mridulkhanal/my-portfolio',
    liveLink: 'https://my-portfolio-gamma-murex-95.vercel.app/'
  },
  {
    category: 'Web App',
    title: 'Alarm-clock-django',
    description: 'A simple multi-alarm clock web app using Django. Features include setting multiple alarms, deleting alarms, and a clean user interface.',
    tech: ['HTML','Python', 'Django'],
    image: '/images/alarm.jpg',
    codeLink: 'https://github.com/Mridulkhanal/alarm-clock-django',
    liveLink: ''
  },
  {
    category: 'Web App',
    title: 'Age Calculator',
    description: 'A simple and responsive web application that calculates a users age based on their date of birth. Built using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/agecalculator.jpg',
    codeLink: 'https://github.com/Mridulkhanal/age-calculator',
    liveLink: 'https://age-calculator-smoky-mu.vercel.app/'
  },
  {
    category: 'Portfolio',
    title: 'Mridul Portfolio',
    description: 'Advanced personal portfolio with dark theme and animations.',
    tech: ['React.js', 'Vite', 'CSS', 'JavaScript', 'HTML'],
    image: '/images/mridulportfolio.jpg',
    codeLink: 'https://github.com/Mridulkhanal/Mridul-Portfolio',
    liveLink: ''
  },
  {
    category: 'Web App',
    title: 'Currency Converter',
    description: 'A simple and user-friendly currency converter application that allows users to convert values between different currencies using real-time exchange rates.',
    tech: ['CSS', 'JavaScript', 'HTML'],
    image: '/images/Currency.jpg',
    codeLink: 'https://github.com/Mridulkhanal/currency-converter',
    liveLink: 'https://currency-converter-dusky-sigma-75.vercel.app/'
  },
];

const categories = ['All', 'Web App', 'E-commerce', 'Game', 'Portfolio'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'All' ? projectsData : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Featured <span className="highlight">Projects</span>
      </motion.h2>

      <p className="section-subtitle">
        Real-world projects that showcase creativity, problem-solving, and technical expertise.
      </p>

      {/* Tabs */}
      <div className="project-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 255, 65, 0.3)' }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <span className="category-badge" style={{ background: '#00d4ff30', color: '#00d4ff' }}>
              {project.category}
            </span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="tech-badges">
              {project.tech.map(t => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-code">
                <FaGithub /> 
              </a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-demo">
                  <FaExternalLinkAlt /> 
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;