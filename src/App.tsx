import { motion } from 'framer-motion';
import { useState } from 'react';
import MatrixRain from './components/MatrixRain';
import './index.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaCertificate, FaCode, FaBrain, FaMailBulk, FaArrowRight, FaArrowDown, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; 

function App() {
  const taglineText = "I Build Interactive Web Experiences";
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <MatrixRain />

      <nav className="fixed-nav">
  <div className="nav-container">
    <div className="nav-logo">
      <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="logo-link" 
          >
            <img
              src="/logo.ico" 
              alt="Mridul Logo"
              className="logo-img" 
            />
          </a>
    </div>

    <div className="nav-links desktop-links">
      <a href="#home" className="nav-item">Home</a>
      <a href="#about" className="nav-item">About</a>
      <a href="#skills" className="nav-item">Skills</a>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#certifications" className="nav-item">Certifications</a>
      <a href="#contact" className="nav-item">Contact</a>
    </div>

    <div className="nav-resume">
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
        Resume <FaArrowDown />
      </a>
    </div>

    <button 
      className="mobile-toggle" 
      onClick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  {/* Mobile menu dropdown */}
  <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
    <a href="#home"    onClick={() => setIsOpen(false)}>Home</a>
    <a href="#about"   onClick={() => setIsOpen(false)}>About</a>
    <a href="#skills"  onClick={() => setIsOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
    <a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a>
    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
      Resume
    </a>
  </div>
</nav>

      <div id="home" className="hero-anchor"></div>
      <div className="hero-container">
        {/* Animated icons above name */}
        <motion.div
          className="hero-icons"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="icon"><FaCode style={{ color: '#00ff41' }} /></span>
          <span className="icon"><FaCertificate style={{ color: '#ffd500' }}/></span>
          <span className="icon"><FaBrain style={{ color: '#00ff41' }}/></span>
        </motion.div>

        {/* Glowing Gradient Name */}
        <h1 className="hero-name">
          Mridul Khanal
        </h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Web Developer & Tech Enthusiast
        </motion.p>

        {/* Typing Tagline with cursor */}
        <motion.div
          className="typing-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <p className="typing-text">
            {taglineText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
            <span className="cursor">|</span>
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="hero-bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          Enthusiastic tech learner passionate about web development, who enjoys building real-world projects and improving skills with every new challenge.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.6 }}
        >
          <div className="hero-cta">
  <button 
    className="cta-primary"
    onClick={() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    View My Work <FaArrowRight />
  </button>
  <button 
    className="cta-secondary"
    onClick={() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Get In Touch <FaMailBulk />
  </button>
</div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <a href="https://github.com/Mridulkhanal" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mridul-khanal-686028304/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/khanal.mridul/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/mrdula.khanala/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="mailto:khanalmridul30@gmail.com"><FaMailBulk /></a>
        </motion.div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;