import React from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ currentLang }) {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="about-grid">
          
          {/* Left Column - Image & Clinical Research Showcase */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '0.8rem', overflow: 'hidden' }}>
              <img 
                src="/research_lab.jpg" 
                alt="Aarogyam Homoeopathic Research Laboratory" 
                style={{ width: '100%', borderRadius: '12px', height: '420px', objectFit: 'cover' }}
              />
            </div>

            {/* Heritage Badge Overlay */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '-25px',
              right: '-25px',
              padding: '1.5rem',
              maxWidth: '280px',
              borderLeft: '4px solid var(--accent-gold)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <Award size={24} style={{ color: 'var(--accent-gold)' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Founded in 1964</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                60 Years of continuous medical innovation and trusted healing legacy in Patna.
              </p>
            </div>
          </div>

          {/* Right Column - Brand Story & Doctor Philosophy */}
          <div>
            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              <p className="subtitle">
                {currentLang === 'EN' ? 'About Aarogyam Hospital' : 'आरोग्यम हॉस्पिटल के बारे में'}
              </p>
              <h2>
                {currentLang === 'EN' ? (
                  <>Scientific <span className="gradient-text">Homoeopathy</span> Built on 60 Years of Trust</>
                ) : (
                  <>60 वर्षों के विश्वास और वैज्ञानिक <span className="gradient-text">होम्योपैथी</span> की मिसाल</>
                )}
              </h2>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              {currentLang === 'EN' ? (
                <>
                  Founded in 1964, <strong>Aarogyam Homoeopathic Hospital & Research Centre</strong> stands as a premier institution in Patna dedicated to classical, high-potency Hahnemannian medicine. Under the leadership of <strong>Dr. P. Kumar</strong> (25+ years experience), we specialize in eradicating chronic ailments without invasive surgical procedures or chemical dependency.
                </>
              ) : (
                <>
                  1964 में संस्थापित <strong>आरोग्यम होम्योपैथिक हॉस्पिटल एंड रिसर्च सेंटर</strong> पटना का अग्रणी होम्योपैथिक चिकित्सा संस्थान है। <strong>डॉ. पी. कुमार</strong> (25+ वर्ष अनुभव) के निर्देशन में यहाँ गंभीर एवं असाध्य रोगों का जड़ से इलाज बिना ऑपरेशन किया जाता है।
                </>
              )}
            </p>

            {/* Core Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem', marginBottom: '2rem' }}>
              {[
                {
                  title: currentLang === 'EN' ? 'Non-Invasive Surgery' : 'बिना चीर-फाड़ इलाज',
                  desc: currentLang === 'EN' ? 'Dissolving stones & cysts naturally' : 'पथरी व सिस्ट का प्राकृतिक समाधान'
                },
                {
                  title: currentLang === 'EN' ? 'Deep Miasmatic Cure' : 'जड़ से रोग निवारण',
                  desc: currentLang === 'EN' ? 'Targeting root cause, not suppression' : 'बीमारी के मूल कारण पर वार'
                },
                {
                  title: currentLang === 'EN' ? 'Zero Side-Effects' : 'साइड-इफेक्ट रहित',
                  desc: currentLang === 'EN' ? '100% safe bio-potentized remedies' : '100% सुरक्षित प्राकृतिक औषधियां'
                },
                {
                  title: currentLang === 'EN' ? 'Global Tele-Clinic' : 'ग्लोबल ऑनलाइन क्लीनिक',
                  desc: currentLang === 'EN' ? 'Consultations across 18+ countries' : 'देश-विदेश में दवा की सीधी होम डिलीवरी'
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--primary-bg)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: '8px',
              padding: '1rem 1.2rem'
            }}>
              <p style={{ fontSize: '0.92rem', color: 'var(--primary-deep)', fontWeight: 600, italic: true }}>
                "Our single mission is to restore full health gently and permanently according to Dr. Samuel Hahnemann's classical principles."
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 700, marginTop: '0.4rem', textAlign: 'right' }}>
                — Dr. P. Kumar, Chief Medical Officer
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
