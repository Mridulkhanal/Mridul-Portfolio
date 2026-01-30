import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaPython, FaServer, FaGitAlt, FaCodeBranch, FaGithub, FaGitlab, FaNodeJs, FaPhp, FaFigma
} from 'react-icons/fa';

const skills = {
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
    { name: 'TypeScript', icon: <span style={{fontWeight: 'bold'}}>TS</span>, color: '#3178c6' }, // text fallback
  ],
  backend: [
    { name: 'PHP', icon: <FaPhp />, color: '#777bb4' },
    { name: 'MySQL', icon: <FaServer />, color: '#777bb4' },
    { name: 'Python', icon: <FaPython />, color: '#3776ab' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Django', icon: <FaPython />, color: '#092e20' },
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#f05032' },
    { name: 'GitLab', icon: <FaGitlab />, color: '#fc6d26' },
    { name: 'API Integration', icon: <FaCodeBranch />, color: '#00d4ff' },
    { name: 'Figma', icon: <FaFigma />, color: '#00ff41' },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools'>('frontend');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentSkills = skills[activeTab];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Tech <span className="highlight">Arsenal</span>
        </motion.h2>

        <p className="section-subtitle">
          Technologies I wield to craft exceptional digital experiences
        </p>

        {/* Tab Buttons */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            className={`tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button
            className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools & Others
          </button>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 35px rgba(0, 255, 65, 0.4)' }}
            >
              <div className="skill-icon" style={{ color: skill.color || '#00ff41' }}>
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

