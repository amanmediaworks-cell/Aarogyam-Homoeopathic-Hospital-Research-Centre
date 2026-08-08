import React from 'react';
import { ShieldCheck, Award, Calendar, CheckCircle2, Star, ArrowRight, UserCheck, Stethoscope, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenBooking, currentLang }) {
  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0 5rem 0', background: 'linear-gradient(180deg, var(--primary-bg) 0%, var(--bg-main) 100%)' }}>
      
      {/* Background Ambient Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column - Headline & Brand Identity */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <span className="badge-heritage">
                <Award size={15} />
                {currentLang === 'EN' ? 'Established Since 1964' : 'स्थापना वर्ष 1964'}
              </span>
              <span className="badge-mint" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={15} style={{ color: 'var(--primary)' }} />
                {currentLang === 'EN' ? '25+ Yrs Doctor Expertise' : '25+ वर्षों का डॉक्टरी अनुभव'}
              </span>
            </div>

            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 800,
              letterSpacing: '-1px',
              color: 'var(--text-main)',
              marginBottom: '1.2rem',
              lineHeight: 1.15
            }}>
              {currentLang === 'EN' ? (
                <>
                  Pioneering <span className="gradient-text">Classical Homoeopathy</span> & Non-Surgical Care
                </>
              ) : (
                <>
                  बिना ऑपरेशन इलाज और <span className="gradient-text">क्लासिकल होम्योपैथी</span> का विश्वस्त केंद्र
                </>
              )}
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '620px',
              lineHeight: 1.65
            }}>
              {currentLang === 'EN' ? (
                <>
                  Led by <strong>Dr. P. Kumar</strong>, Aarogyam Homoeopathic Hospital & Research Centre brings 60+ years of clinical excellence in dissolving kidney/gallbladder stones, curing gluten allergies, and reversing chronic diseases naturally.
                </>
              ) : (
                <>
                  <strong>डॉ. पी. कुमार</strong> के कुशल नेतृत्व में, 1964 से संचालित आरोग्यम होम्योपैथिक हॉस्पिटल बिना सर्जरी पथरी गलने, एलर्जी एवं असाध्य रोगों के स्थायी समाधान का विश्वसनीय नाम है।
                </>
              )}
            </p>

            {/* Feature Highlights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {[
                { title: currentLang === 'EN' ? 'Non-Surgical Stone Dissolution' : 'बिना ऑपरेशन पथरी का इलाज', sub: '96% Success Rate' },
                { title: currentLang === 'EN' ? 'Coeliac & Gluten Allergy Cure' : 'गेहूं व ग्लूटेन एलर्जी का पक्का इलाज', sub: 'Immune Re-balancing' },
                { title: currentLang === 'EN' ? 'Hahnemannian Classical Science' : 'शुद्ध क्लासिकल होम्योपैथिक सिद्धांत', sub: 'Zero Side Effects' },
                { title: currentLang === 'EN' ? 'Worldwide Video Consultations' : 'देश-विदेश में ऑनलाइन वीडियो परामर्श', sub: 'Medicine Express Dispatch' }
              ].map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{feat.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{feat.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hero CTA Action Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <button className="btn-primary pulse-button" onClick={onOpenBooking} style={{ fontSize: '1.05rem', padding: '0.95rem 2.2rem' }}>
                <Calendar size={18} />
                <span>{currentLang === 'EN' ? 'Book Consultation Now' : 'अभी अपॉइंटमेंट बुक करें'}</span>
              </button>

              <a 
                href="#treatments" 
                className="btn-outline"
                style={{ fontSize: '1rem', padding: '0.9rem 1.8rem' }}
              >
                <span>{currentLang === 'EN' ? 'Explore Specialties' : 'उपचार की जानकारी'}</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Social Trust Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" />
                ))}
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  4.9/5 Rating (2,400+ Verified Patient Reviews)
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                  Trusted in Patna & across 18+ countries
                </p>
              </div>
            </div>

          </div>

          {/* Right Column - Luxury Doctor Feature & Quick Booking Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '1.8rem', position: 'relative', overflow: 'hidden' }}>
              
              {/* Doctor Header Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <img 
                  src="/dr_pkumar.jpg" 
                  alt="Dr. P. Kumar Senior Homeopath Doctor" 
                  style={{
                    width: '85px',
                    height: '85px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--primary)'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://aarogyamhomeopathic.com/wp-content/uploads/2024/06/samuel-New000-1000x440.jpg';
                  }}
                />
                <div>
                  <div className="badge-mint" style={{ marginBottom: '0.2rem', padding: '0.15rem 0.6rem', fontSize: '0.75rem' }}>
                    <Stethoscope size={13} /> Chief Medical Officer
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>DR. P. KUMAR</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--primary-deep)', fontWeight: 600 }}>
                    Senior Homeopath • 25+ Years Experience
                  </p>
                </div>
              </div>

              {/* Clinic Artwork Display */}
              <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '220px', marginBottom: '1.5rem' }}>
                <img 
                  src="/hero_banner.jpg" 
                  alt="Aarogyam Hospital Research Laboratory"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(6, 78, 59, 0.85) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem'
                }}>
                  <div style={{ color: '#ffffff' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase' }}>
                      Research & Clinical Center
                    </p>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                      Patna Hospital & Global Tele-Health Clinic
                    </h4>
                  </div>
                </div>
              </div>

              {/* Quick Contact & Address Widget */}
              <div style={{
                background: 'var(--bg-alt)',
                borderRadius: '12px',
                padding: '1rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>DIRECT APPOINTMENT HELPLINE</p>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-deep)', fontWeight: 800 }}>+91 94529 94529</h4>
                </div>
                
                <button 
                  onClick={onOpenBooking} 
                  className="btn-gold" 
                  style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
                >
                  <Sparkles size={14} />
                  <span>Book Now</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
