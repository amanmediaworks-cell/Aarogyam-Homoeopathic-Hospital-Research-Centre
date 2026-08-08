import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import TreatmentExplorer from './components/TreatmentExplorer';
import SymptomTriage from './components/SymptomTriage';
import TestimonialSection from './components/TestimonialSection';
import FaqSection from './components/FaqSection';
import ContactMapSection from './components/ContactMapSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN'); // 'EN' or 'HI'
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const handleOpenBooking = (specialty = '') => {
    setSelectedSpecialty(specialty);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection onOpenBooking={handleOpenBooking} currentLang={currentLang} />
        <StatsSection currentLang={currentLang} />
        <AboutSection currentLang={currentLang} />
        <TreatmentExplorer onOpenBooking={handleOpenBooking} currentLang={currentLang} />
        <SymptomTriage onOpenBooking={handleOpenBooking} currentLang={currentLang} />
        <TestimonialSection currentLang={currentLang} />
        <FaqSection currentLang={currentLang} />
        <ContactMapSection onOpenBooking={handleOpenBooking} currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} currentLang={currentLang} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        prefilledSpecialty={selectedSpecialty}
        currentLang={currentLang}
      />

      {/* Floating Action Button (WhatsApp Direct Desk) */}
      <a
        href="https://wa.me/919452994529?text=Hello%20Aarogyam%20Hospital,%20I%20want%20to%20consult%20Dr.%20P.%20Kumar"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          transition: 'transform 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Chat on WhatsApp (+91 94529 94529)"
      >
        <MessageCircle size={32} />
      </a>

    </div>
  );
}
