import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {FaMailBulk, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); 
    setStatus('sending');

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_s6ibxcg',         
        'template_fj315h4',         
        form.current,
        'fmdCnpD399a5d7HJn'        
      )
      .then(() => {
        setStatus('success');
        setMessage('Message sent successfully! I will get back to you soon.');
        form.current?.reset();
      })
      .catch(() => {
        setStatus('error');
        setMessage('Something went wrong. Please try again or email me directly.');
      })
      .finally(() => {
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="highlight">Touch</span>
        </motion.h2>

        <p className="section-subtitle">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>

        <div className="contact-grid">
          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell me about your idea or just say hello..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              {status === 'sending' && <span className="loader"></span>}
            </button>

            {status !== 'idle' && (
              <motion.p
                className={`status-message ${status}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {message}
              </motion.p>
            )}
          </motion.form>

          {/* Quick contact info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Reach Out Directly</h3>
            <p>
              <strong>Email:</strong> khanalmridul30@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +977 9863921188
            </p>
            <p>
              <strong>Location:</strong> Kathmandu, Nepal
            </p>

            <div className="social-links">
              <a href="https://github.com/Mridulkhanal" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mridul-khanal-686028304/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/khanal.mridul/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/mrdula.khanala/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="mailto:khanalmridul30@gmail.com"><FaMailBulk /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;