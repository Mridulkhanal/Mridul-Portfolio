import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaCode, FaRocket, FaHeart, FaLightbulb, FaBullseye, FaGraduationCap, FaTrophy, FaCertificate} from 'react-icons/fa'; 

// Your existing journeyCards array (unchanged)
const journeyCards = [
  {
    icon: <FaBrain size={40} />,
    title: 'Curious Learner',
    description:
      'Started my journey at Nepal Commerce Campus, diving deep into Information Management and web technologies.',
    color: '#00ff41',
  },
  {
    icon: <FaCode size={40} />,
    title: 'Building Projects',
    description:
      'From weather apps to e-commerce platforms, I learn by creating real-world solutions to actual problems.',
    color: '#00d4ff',
  },
  {
    icon: <FaRocket size={40} />,
    title: 'Always Growing',
    description:
      'Every project is a stepping stone. Every challenge is an opportunity to level up my skills.',
    color: '#00ff41',
  },
];

const drives = [
  { icon: <FaHeart />, title: 'Passion', desc: 'Love for code', color: '#ff4d6d' },
  { icon: <FaLightbulb />, title: 'Innovation', desc: 'Creative solutions', color: '#00d4ff' },
  { icon: <FaBullseye />, title: 'Focus', desc: 'Goal-oriented', color: '#00ff9d' },
  { icon: <FaGraduationCap />, title: 'Learning', desc: 'Always evolving', color: '#9d4edd' },
];

const stats = [
  { value: '4', label: 'PROJECTS BUILT', icon: <FaTrophy />, color: '#00ff41' },
  { value: '8+', label: 'TECHNOLOGIES', icon: <FaCode />, color: '#00d4ff' },
  { value: '2', label: 'CERTIFICATIONS', icon: <FaCertificate />, color: '#ffaa00' },
];

const education = [
  {
    degree: "Bachelor's in Information Management",
    institution: 'Nepal Commerce Campus (NCC)',
    location: 'Minbhawan, Kathmandu',
    period: '2022 – 2026',
    status: 'Completed',
    statusColor: '#00d4ff',
    note: '',
  },
  {
    degree: '+2 / High School Degree',
    institution: 'NASA International College',
    location: 'Tinkune, Kathmandu',
    period: '2019 – 2021',
    status: 'Completed',
    statusColor: '#00d4ff',
    note: 'CGPA: 3.12',
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About <span className="highlight">Me</span>
        </motion.h2>

        <motion.p
          className="bio-text"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I'm a passionate web developer based in Kathmandu, Nepal, currently pursuing my Bachelor's in Information Management at Nepal Commerce Campus.  
          <br /><br />
          What drives me is the <span className="highlight">endless curiosity</span> to learn new technologies and the excitement of turning ideas into interactive web experiences.  
          I believe in <span className="highlight">learning by building</span>. From weather apps to e-commerce platforms, each project teaches me something new about code, design, and problem-solving.
        </motion.p>

        {/* Your existing Journey Timeline Cards (unchanged) */}
        <div className="journey-timeline">
          {journeyCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="journey-card"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.3 }}
            >
              <div className="card-icon" style={{ color: card.color }}>
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Your existing Connecting Lines (unchanged) */}
        <div className="timeline-connector">
          <div className="line" />
          <div className="dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        <motion.div
          className="drives-wrapper"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0 }}
        >
          <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What <span className="highlight">Drives Me</span>
        </motion.h2>
          <div className="drives-grid">
            {drives.map((item, i) => (
              <motion.div
                key={item.title}
                className="drive-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + i * 0.2 }}
                whileHover={{ y: -10, boxShadow: `0 20px 40px ${item.color}50` }}
              >
                <div className="drive-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.6 + i * 0.2 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.0 }}
        >
          <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
         Edu<span className="highlight">cation</span>
        </motion.h2>
          <div className="education-cards">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="education-card"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2.2 + i * 0.3 }}
              >
                <div className="edu-header">
                  <h4>{edu.degree}</h4>
                  <span className="status-badge" style={{ backgroundColor: `${edu.statusColor}30`, color: edu.statusColor }}>
                    {edu.status}
                  </span>
                </div>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-location">{edu.location}</p>
                <p className="edu-period">{edu.period}</p>
                {edu.note && <p className="edu-note">{edu.note}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;