import React from 'react';
import { MapPin, Phone, MessageCircle, Heart, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBooking, currentLang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#071510', color: '#e2e8f0', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '2px solid var(--primary-deep)' }}>
      <div className="container">
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Column 1: Brand & Legacy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <img 
                src="/cropped-Aarogyam-Homoeopathic.jpeg" 
                alt="Aarogyam Logo" 
                style={{ width: '45px', height: '45px', borderRadius: '10px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://aarogyamhomeopathic.com/wp-content/uploads/2023/10/cropped-Aarogyam-Homoeopathic.jpeg';
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.2px' }}>
                  AAROGYAM
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
                  Homoeopathic Hospital (Since 1964)
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Leading homeopathic hospital in Patna under the guidance of Dr. P. Kumar (25+ years experience). Dedicated to scientific, non-surgical classical homeopathy.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className="badge-heritage" style={{ fontSize: '0.72rem' }}>
                Heritage Since 1964
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About Dr. P. Kumar</a></li>
              <li><a href="#treatments" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Clinical Specialties</a></li>
              <li><a href="#symptom-triage" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Symptom Checker</a></li>
              <li><a href="#testimonials" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Patient Testimonials</a></li>
              <li><a href="#faq" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
              <li><a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact & Location</a></li>
            </ul>
          </div>

          {/* Column 3: Specialized Remedies */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Core Specialties
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <li>• Kidney & Gallbladder Stones (Non-Surgical)</li>
              <li>• Coeliac & Wheat/Gluten Allergy</li>
              <li>• Plaque Psoriasis & Eczema</li>
              <li>• Rheumatoid & Osteoarthritis</li>
              <li>• Asthma & Allergic Rhinitis</li>
              <li>• IBS, GERD & Fatty Liver</li>
              <li>• Ovarian Cysts & Fibroids</li>
            </ul>
          </div>

          {/* Column 4: Contact & Helpline */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Hospital Helpline
            </h4>
            
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.6rem' }}>
              Patna Railway Colony Near RBS hospital Digha, Patna, Bihar
            </p>

            <h3 style={{ fontSize: '1.25rem', color: '#10b981', fontWeight: 800, marginBottom: '0.8rem' }}>
              +91 94529 94529
            </h3>

            <a
              href="https://wa.me/919452994529"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem', width: '100%', marginBottom: '0.8rem' }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct Desk</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-gold"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem', width: '100%' }}
            >
              <span>Book Consultation Slot</span>
            </button>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          borderRadius: '8px',
          padding: '1rem 1.2rem',
          fontSize: '0.78rem',
          color: '#64748b',
          lineHeight: 1.5,
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <strong>Medical Disclaimer:</strong> Aarogyam Homoeopathic Hospital & Research Centre provides classical homeopathic medical care based on individual case evaluation by Dr. P. Kumar. Clinical outcomes may vary per patient case history. Information presented on this website is for educational and healthcare awareness purposes.
        </div>

        {/* Bottom Bar & Copyright */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#94a3b8'
        }}>
          <p>© {new Date().getFullYear()} Aarogyam Homoeopathic Hospital & Research Centre (Since 1964). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: '#ffffff',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.8rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
