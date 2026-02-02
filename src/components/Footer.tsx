import {FaMailBulk, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
                          <a href="https://github.com/Mridulkhanal" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                      <a href="https://www.linkedin.com/in/mridul-khanal-686028304/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                      <a href="https://www.instagram.com/khanal.mridul/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                      <a href="https://www.facebook.com/mrdula.khanala/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                      <a href="mailto:khanalmridul30@gmail.com"><FaMailBulk /></a>
                        </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Mridul Khanal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;