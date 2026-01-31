import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const certifications = [
  {
    title: 'Learn HTML and CSS from Beginning to Advanced',
    provider: 'Udemy',
    year: '2025',
    icon: <FaGraduationCap size={50} />,
    color: '#00ff41',
    description: 'Gained mastery over HTML and CSS, including responsive design techniques and animations.',
    keyPoints: [
      'HTML structure, tags, forms, semantics',
      'CSS selectors, box model, flexbox/grid, animations',
      'Responsive design (media queries, mobile-first)',
      'Best practices for modern, accessible websites',
    ],
    certificateLink: 'https://www.udemy.com/certificate/UC-9cf5f761-6737-442d-b498-0d6fcb0e0607/' 
  },
  {
    title: 'GIT, GitLab, GitHub Fundamentals for Software Developers',
    provider: 'MTF Institute of Management, Technology and Finance',
    year: '2025',
    icon: <FaCertificate size={50} />,
    color: '#00d4ff',
    description: 'Learned version control workflows, branching strategies, and collaborative development.',
    keyPoints: [
      'Git basics: init, commit, push, pull',
      'Branching & merging strategies',
      'GitHub/GitLab workflows (pull requests, issues, CI/CD basics)',
      'Collaborative development best practices',
    ],
    certificateLink: 'https://www.udemy.com/certificate/UC-5997f2b5-f674-49c6-9f3e-c2029fba7b86/'
  },
  {
    title: 'Python Django Full Stack Development: Build Modern Web Apps',
    provider: 'Sayman Creative Institute',
    year: '2025',
    icon: <FaGraduationCap size={50} />,
    color: '#00d4ff',
    description: 'Learned to build dynamic, responsive, and secure full-stack web applications with Django.',
    keyPoints: [
      'Python Fundamentals for Web Development',
      'Django Core Concepts',
      'User Authentication and Authorization',
      'Modern Web Development Workflows',
    ],
    certificateLink: 'https://www.udemy.com/certificate/UC-5e24eca1-ce33-4f86-94fb-2c2c7aee44c4/'
  },
  {
    title: 'Intermediate Python for Developers',
    provider: 'DataCamp',
    year: '2025',
    icon: <FaGraduationCap size={50} />,
    color: '#00d4ff',
    description: 'This course will delve deeper into Python\'s rich ecosystem, focusing on essential aspects such as built-in functions, modules, and packages.',
    keyPoints: [
      'The Python Ecosystem',
      'Working with functions',
      'Lambda functions and error-handling',
      'Effectively handling errors',
    ],
    certificateLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/667674e2e7fed819e25fc1930bc5496de35d116b'
  },
];

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="certifications-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Certifications & <span className="highlight">Training</span>
        </motion.h2>

        <p className="section-subtitle">
          Verified courses that strengthened my frontend and version control skills.
        </p>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="cert-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.3, duration: 0.7 }}
              whileHover={{ y: -10, boxShadow: `0 20px 40px ${cert.color}50` }}
            >
              <div className="cert-icon" style={{ color: cert.color }}>
                {cert.icon}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-provider">
                {cert.provider} • {cert.year}
              </p>
              <p className="cert-desc">{cert.description}</p>

              <ul className="cert-points">
                {cert.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                <FaCertificate /> View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;