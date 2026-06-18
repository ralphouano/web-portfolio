import React, { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle, AlertCircle, Phone, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', botcheck: false });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Rate Limiter Check (3 minutes)
    const lastSubmitStr = localStorage.getItem('last_contact_submit');
    if (lastSubmitStr) {
      const lastSubmitTime = parseInt(lastSubmitStr, 10);
      const timeSinceLastSubmit = Date.now() - lastSubmitTime;
      const cooldownMs = 3 * 60 * 1000;

      if (timeSinceLastSubmit < cooldownMs) {
        const remainingMinutes = Math.ceil((cooldownMs - timeSinceLastSubmit) / 60000);
        alert(`Please wait ${remainingMinutes} minute(s) before sending another message to prevent spam.`);
        setStatus('idle');
        return;
      }
    }

    // Retrieve Web3Forms access key from environment or fallback to a placeholder
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

    if (!accessKey) {
      console.warn("VITE_WEB3FORMS_ACCESS_KEY is not configured. Falling back to submission test simulation.");
      // If no key is set, we simulate a successful request after a short delay for demonstration,
      // but log a warning so they know they need a real key.
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', botcheck: false });
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          botcheck: formData.botcheck,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        localStorage.setItem('last_contact_submit', Date.now().toString());
        setFormData({ name: '', email: '', subject: '', message: '', botcheck: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Web3Forms submit error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="contact-sec" id="contact">
      <div className="container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Curious if this contact form actually works? Go ahead, send a test message! (I actually reply too.) Or we can talk about application design, API integration, and potential workspace contracts.
          </p>
        </ScrollReveal>

        <ScrollReveal className="contact-grid" delayClass="reveal-delay-2">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <a href="mailto:ouano.ralphjohnson@gmail.com" className="contact-value-link">
                  ouano.ralphjohnson@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <a href="tel:+639241147543" className="contact-value-link">
                  (+63) 924-114-7543
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon-box">
                <Users size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Social Profiles</span>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                  <a href="https://github.com/ralphouano" target="_blank" rel="noopener noreferrer" className="contact-value-link" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ralph-johnson-ouano-7b17b3415" target="_blank" rel="noopener noreferrer" className="contact-value-link" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://www.facebook.com/rjaywano" target="_blank" rel="noopener noreferrer" className="contact-value-link" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Web3Forms Honeypot Anti-Spam Field */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                checked={formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
              />
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'submitting'}
                  required
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === 'submitting'}
                  required
                />
                <label htmlFor="email" className="form-label">Your Email</label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  id="subject"
                  placeholder=" "
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={status === 'submitting'}
                  required
                />
                <label htmlFor="subject" className="form-label">Subject</label>
              </div>

              <div className="form-group">
                <textarea
                  className="form-input form-textarea"
                  id="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === 'submitting'}
                  required
                />
                <label htmlFor="message" className="form-label">Message Details</label>
              </div>

              <div className="contact-action-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: 'fit-content' }}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      Sending...
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Custom feedback message alerts */}
            {status === 'success' && (
              <div className="contact-status-card success">
                <CheckCircle size={18} />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="contact-status-card error">
                <AlertCircle size={18} />
                <span>Failed to send your message. Please check your network or try emailing directly.</span>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
