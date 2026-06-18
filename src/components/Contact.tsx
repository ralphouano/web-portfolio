import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle, Phone } from 'lucide-react';
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
                <MapPin size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Location / Setup</span>
                <span className="contact-value" style={{ lineHeight: '1.4' }}>Open to work on-site, remote, and hybrid setup</span>
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
