import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FaqSection({ currentLang }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-alt)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        <div className="section-header">
          <p className="subtitle">
            {currentLang === 'EN' ? 'Common Inquiries' : 'अक्सर पूछे जाने वाले सवाल'}
          </p>
          <h2>
            {currentLang === 'EN' ? (
              <>Frequently Asked <span className="gradient-text">Questions</span></>
            ) : (
              <>आपके <span className="gradient-text">प्रश्नों के जवाब</span></>
            )}
          </h2>
          <p className="description">
            {currentLang === 'EN' ? 
              'Everything you need to know about our treatments, clinic location, and online consultations.' : 
              'इलाज, क्लीनिक स्थान एवं अपॉइंटमेंट प्रक्रिया से जुड़ी संपूर्ण जानकारी।'}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.2rem 1.5rem',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <HelpCircle size={20} style={{ color: isOpen ? 'var(--primary)' : 'var(--text-light)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {faq.question}
                    </h3>
                  </div>
                  {isOpen ? <ChevronUp size={20} style={{ color: 'var(--primary)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-light)' }} />}
                </div>

                {isOpen && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
