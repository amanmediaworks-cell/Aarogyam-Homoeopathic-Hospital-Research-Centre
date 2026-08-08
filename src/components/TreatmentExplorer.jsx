import React, { useState } from 'react';
import { treatmentsData, treatmentCategories } from '../data/treatments';
import { Search, ShieldCheck, Clock, Users, Activity, Check, ArrowRight } from 'lucide-react';

export default function TreatmentExplorer({ onOpenBooking, currentLang }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTreatments = treatmentsData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.symptoms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="treatments" className="section-padding" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <p className="subtitle">
            {currentLang === 'EN' ? 'Clinical Specialties & Remedies' : 'इलाज एवं रोग विशेषज्ञता'}
          </p>
          <h2>
            {currentLang === 'EN' ? (
              <>Specialized <span className="gradient-text">Homeopathic Treatments</span></>
            ) : (
              <>आरोग्यम के <span className="gradient-text">विशेषज्ञता पूर्ण उपचार</span></>
            )}
          </h2>
          <p className="description">
            {currentLang === 'EN' ? 
              'Explore our proven non-surgical remedies, chronic allergy solutions, and individualized healing protocols.' : 
              'बिना ऑपरेशन पथरी, एलर्जी, चर्म रोग और असाध्य बीमारियों का स्थायी होम्योपैथिक इलाज।'}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '540px'
          }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            <input 
              type="text"
              placeholder={currentLang === 'EN' ? 'Search disease (e.g. Kidney stone, Gluten, Psoriasis)...' : 'बीमारी का नाम खोजें (जैसे: पथरी, एलर्जी, सोरायसिस)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 2.8rem',
                borderRadius: '50px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                boxShadow: 'var(--shadow-sm)',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem'
          }}>
            {treatmentCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.6rem 1.3rem',
                  borderRadius: '50px',
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? 'var(--primary)' : 'var(--border-color)',
                  background: activeCategory === cat.id ? 'var(--primary)' : 'var(--bg-card)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-main)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat.id ? '0 4px 12px rgba(5, 150, 105, 0.3)' : 'none'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredTreatments.map(item => (
            <div key={item.id} className="glass-card" style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                {/* Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge-mint" style={{ fontSize: '0.75rem' }}>
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                    Success: {item.successRate}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--primary-deep)', fontWeight: 600, marginBottom: '1rem' }}>
                  {item.tagline}
                </p>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>

                {/* Key Symptoms Handled */}
                <div style={{ marginBottom: '1.5rem', background: 'var(--bg-alt)', padding: '0.85rem 1rem', borderRadius: '10px' }}>
                  <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.4rem' }}>
                    KEY SYMPTOMS TREATED:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '0.35rem' }}>
                    {item.symptoms.map((symptom, sIdx) => (
                      <li key={sIdx} style={{ fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Info & CTA */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)',
                  marginBottom: '1.2rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} style={{ color: 'var(--primary)' }} />
                    <span>Duration: {item.duration}</span>
                  </span>

                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Users size={14} style={{ color: 'var(--primary)' }} />
                    <span>Treated: {item.casesTreated}</span>
                  </span>
                </div>

                <button
                  className="btn-primary"
                  onClick={() => onOpenBooking(item.title)}
                  style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem 1rem' }}
                >
                  <span>{currentLang === 'EN' ? 'Book Specialty Consultation' : 'इस बीमारी हेतु परामर्श लें'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredTreatments.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            <h3>No treatments found matching "{searchQuery}"</h3>
            <p>Try searching for kidney stone, gluten, psoriasis, asthma, or contact us directly.</p>
          </div>
        )}

      </div>
    </section>
  );
}
