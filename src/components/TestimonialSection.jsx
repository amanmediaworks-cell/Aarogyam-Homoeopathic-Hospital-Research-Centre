import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, Quote, CheckCircle2, User } from 'lucide-react';

export default function TestimonialSection({ currentLang }) {
  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <p className="subtitle">
            {currentLang === 'EN' ? 'Verified Patient Outcomes' : 'सच्चे मरीजों के अनुभव'}
          </p>
          <h2>
            {currentLang === 'EN' ? (
              <>Patient Success <span className="gradient-text">Recovery Stories</span></>
            ) : (
              <>आरोग्यम से <span className="gradient-text">रोगमुक्त हुए मरीज</span></>
            )}
          </h2>
          <p className="description">
            {currentLang === 'EN' ? 
              'Read real recovery journeys of patients who dissolved stones, cured allergies, and regained full health.' : 
              'जानिए कैसे हजारों मरीजों ने बिना ऑपरेशन और बिना साइड इफेक्ट के पाई नई जिंदगी।'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {testimonialsData.map(t => (
            <div key={t.id} className="glass-card" style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                {/* Quote Icon */}
                <Quote size={32} style={{ color: 'var(--primary)', opacity: 0.25, marginBottom: '0.8rem' }} />

                {/* Rating */}
                <div style={{ display: 'flex', color: '#f59e0b', marginBottom: '0.8rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" />
                  ))}
                </div>

                {/* Condition Badge */}
                <div style={{ marginBottom: '1rem' }}>
                  <span className="badge-mint" style={{ fontSize: '0.76rem', fontWeight: 700 }}>
                    <CheckCircle2 size={13} /> {t.condition}
                  </span>
                </div>

                {/* Quote */}
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Patient Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--primary-bg)',
                  color: 'var(--primary-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800
                }}>
                  {t.name.charAt(0)}
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{t.name}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{t.location} • {t.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
