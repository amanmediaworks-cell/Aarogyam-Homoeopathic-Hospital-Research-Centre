import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactMapSection({ onOpenBooking, currentLang }) {
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      window.open(`https://wa.me/919452994529?text=Hello%20Aarogyam%20Hospital,%20Inquiry%20from%20${encodeURIComponent(contactData.name)}%20(${contactData.phone}):%20${encodeURIComponent(contactData.message)}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        
        <div className="section-header">
          <p className="subtitle">
            {currentLang === 'EN' ? 'Visit or Get in Touch' : 'संपर्क व पता'}
          </p>
          <h2>
            {currentLang === 'EN' ? (
              <>Hospital Location & <span className="gradient-text">Helpline</span></>
            ) : (
              <>आरोग्यम हॉस्पिटल <span className="gradient-text">पता व हेल्पलाइन</span></>
            )}
          </h2>
          <p className="description">
            {currentLang === 'EN' ? 
              'Visit our hospital in Patna or contact us via WhatsApp for global online appointments.' : 
              'पटना स्थित हॉस्पिटल में पधारें या दूर बैठकर ऑनलाइन अपॉइंटमेंट लें।'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="contact-grid">
          
          {/* Left Column - Address Cards & Direct Contact Info */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                Aarogyam Homoeopathic Hospital
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Hospital Address</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Patna Railway Colony, Near RBS Hospital, Digha, Patna, Bihar - 800011
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Direct Phone / Helpline</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-deep)' }}>
                      +91 94529 94529
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.15)', color: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>WhatsApp Instant Booking</h4>
                    <a href="https://wa.me/919452994529" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: '#25d366', fontWeight: 700, textDecoration: 'none' }}>
                      Click to Chat on WhatsApp (+91 94529 94529)
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>OPD Consultation Hours</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Monday – Saturday: 10:00 AM – 7:00 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                <button onClick={onOpenBooking} className="btn-gold" style={{ width: '100%', padding: '0.85rem' }}>
                  <span>Book Consultation with Dr. P. Kumar</span>
                </button>
              </div>
            </div>

            {/* Google Map Embed Container */}
            <div className="glass-card" style={{ overflow: 'hidden', height: '240px' }}>
              <iframe
                title="Aarogyam Homoeopathic Hospital Patna Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5123456789!2d85.08!3d25.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM3JzA4LjQiTiA4NcKwMDQnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column - Quick Inquiry Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {!formSent ? (
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.8rem' }}>
                  Have a question about stone treatment or gluten allergy? Drop a message below for our medical team.
                </p>

                <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.4rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.4rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-main)',
                          color: 'var(--text-main)',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.4rem' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="anand@example.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-main)',
                          color: 'var(--text-main)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.4rem' }}>
                      Message / Disease Details *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Write your health inquiry here..."
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        outline: 'none',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '0.9rem', fontSize: '1rem' }}>
                    <Send size={18} />
                    <span>Send Message to WhatsApp Desk</span>
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  Message Received!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Redirecting your message to WhatsApp Helpline (+91 94529 94529)...
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
