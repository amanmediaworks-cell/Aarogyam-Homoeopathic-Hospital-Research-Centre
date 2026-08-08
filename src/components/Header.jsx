import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Menu, X, Sun, Moon, Sparkles, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenBooking, isDarkMode, setIsDarkMode, currentLang, setCurrentLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: currentLang === 'EN' ? 'Home' : 'मुख्य पृष्ठ', href: '#home' },
    { name: currentLang === 'EN' ? 'About Us' : 'हमारे बारे में', href: '#about' },
    { name: currentLang === 'EN' ? 'Specialties' : 'इलाज व विशेषज्ञता', href: '#treatments' },
    { name: currentLang === 'EN' ? 'Symptom Triage' : 'लक्षण जाँच सहायक', href: '#symptom-triage' },
    { name: currentLang === 'EN' ? 'Patient Stories' : 'मरीजों के अनुभव', href: '#testimonials' },
    { name: currentLang === 'EN' ? 'FAQs' : 'सामान्य प्रश्न', href: '#faq' },
    { name: currentLang === 'EN' ? 'Contact' : 'संपर्क', href: '#contact' },
  ];

  return (
    <header className="header-wrapper" style={{ position: 'sticky', top: 0, zIndex: 1000, transition: 'all 0.3s ease' }}>
      {/* Top Emergency & Info Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #064e3b 0%, #059669 100%)',
        color: '#ffffff',
        padding: '0.45rem 0',
        fontSize: '0.85rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
              <MapPin size={14} style={{ color: '#f59e0b' }} />
              <span>Patna Railway Colony, Near RBS Hospital, Digha, Patna</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }} className="hide-on-mobile">
              <Clock size={14} style={{ color: '#10b981' }} />
              <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <a 
              href="tel:+919452994529" 
              style={{ color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
            >
              <Phone size={14} style={{ color: '#38bdf8' }} />
              <span>+91 94529 94529</span>
            </a>

            <a 
              href="https://wa.me/919452994529?text=Hello%20Aarogyam%20Hospital,%20I%20want%20to%20book%20a%20consultation%20with%20Dr.%20P.%20Kumar" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#25d366', background: 'rgba(255, 255, 255, 0.15)', padding: '0.15rem 0.6rem', borderRadius: '20px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>

            {/* Language Switcher */}
            <button 
              onClick={() => setCurrentLang(currentLang === 'EN' ? 'HI' : 'EN')}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                border: 'none',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 700
              }}
              title="Switch Language"
            >
              {currentLang === 'EN' ? '🇮🇳 हिंदी' : '🇬🇧 EN'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Navbar */}
      <nav style={{
        background: isScrolled ? 'var(--glass-bg)' : 'var(--bg-card)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        padding: '0.75rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo & Brand Identity */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(5, 150, 105, 0.25)',
              border: '2px solid var(--primary)',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/cropped-Aarogyam-Homoeopathic.jpeg" 
                alt="Aarogyam Homoeopathic Hospital Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://aarogyamhomeopathic.com/wp-content/uploads/2023/10/cropped-Aarogyam-Homoeopathic.jpeg';
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '-0.3px',
                  color: 'var(--text-main)',
                  lineHeight: 1.1
                }}>
                  AAROGYAM
                </span>
                <span className="badge-heritage" style={{ fontSize: '0.68rem', padding: '0.1rem 0.45rem' }}>
                  Since 1964
                </span>
              </div>
              <p style={{ fontSize: '0.76rem', color: 'var(--primary-deep)', fontWeight: 600, letterSpacing: '0.2px' }}>
                Homoeopathic Hospital & Research Centre
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hide-on-tablet" style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                background: 'var(--bg-alt)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={18} style={{ color: '#f59e0b' }} /> : <Moon size={18} style={{ color: '#475569' }} />}
            </button>

            {/* Book Consultation Button */}
            <button 
              className="btn-primary pulse-button"
              onClick={onOpenBooking}
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
            >
              <Sparkles size={16} />
              <span>{currentLang === 'EN' ? 'Book Consultation' : 'परामर्श बुक करें'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="show-on-tablet"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer',
                padding: '0.4rem',
                display: 'none'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            padding: '1.2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.4rem 0',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
