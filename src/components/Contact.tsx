import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMailBulk, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // New: validation states
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [touched, setTouched] = useState<{ name: boolean; email: boolean }>({
    name: false,
    email: false,
  });

  // Validation functions
  const validateName = (value: string): string | undefined => {
    if (!value.trim()) return 'Name is required';
    if (value.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name can only contain letters, spaces, hyphens, or apostrophes';
    return undefined;
  };

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) return 'Email is required';
    
    // Modern, practical regex (allows most real emails, rejects obvious junk)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return undefined;
  };

  // Validate on blur (when user leaves field)
  const handleBlur = (field: 'name' | 'email', value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = field === 'name' ? validateName(value) : validateEmail(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Validate on every change (real-time feedback)
  const handleChange = (field: 'name' | 'email', value: string) => {
    if (touched[field]) {
      const error = field === 'name' ? validateName(value) : validateEmail(value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation before submit
    const nameValue = (form.current?.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const emailValue = (form.current?.elements.namedItem('email') as HTMLInputElement)?.value || '';

    const nameError = validateName(nameValue);
    const emailError = validateEmail(emailValue);

    setErrors({ name: nameError, email: emailError });
    setTouched({ name: true, email: true });

    if (nameError || emailError) {
      // Don't submit if errors exist
      return;
    }

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
        // Reset validation state after success
        setErrors({});
        setTouched({ name: false, email: false });
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
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={(e) => handleBlur('name', e.target.value)}
              />
              {touched.name && errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={(e) => handleBlur('email', e.target.value)}
              />
              {touched.email && errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
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

          {/* Quick contact info (unchanged) */}
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