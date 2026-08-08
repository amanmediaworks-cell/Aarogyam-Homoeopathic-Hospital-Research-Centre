import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, MapPin, Video, CheckCircle2, Send, MessageCircle } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, prefilledSpecialty, currentLang }) {
  const [consultationType, setConsultationType] = useState('clinic'); // 'clinic' or 'online'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: prefilledSpecialty || 'Kidney / Gallbladder Stone',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    city: '',
    symptoms: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSpecialty) {
      setFormData(prev => ({ ...prev, specialty: prefilledSpecialty }));
    }
  }, [prefilledSpecialty]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp Message
    const textMessage = `*NEW APPOINTMENT BOOKING - AAROGYAM HOSPITAL*
----------------------------------------
*Patient Name:* ${formData.name}
*Phone:* ${formData.phone}
*Consultation Mode:* ${consultationType === 'clinic' ? 'In-Clinic (Patna Hospital)' : 'Online Video Consultation'}
*Specialty/Disease:* ${formData.specialty}
*Preferred Date:* ${formData.date}
*Time Slot:* ${formData.timeSlot}
*City/State:* ${formData.city || 'Patna'}
*Notes/Symptoms:* ${formData.symptoms || 'None'}
----------------------------------------
Please confirm my appointment slot with Dr. P. Kumar.`;

    const whatsappUrl = `https://wa.me/919452994529?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '580px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem',
        position: 'relative',
        animation: 'modalSlideUp 0.3s ease-out',
        background: 'var(--bg-card)'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'var(--bg-alt)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge-heritage" style={{ fontSize: '0.75rem', marginBottom: '0.4rem' }}>
                Dr. P. Kumar Consultation
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Book Appointment
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Aarogyam Homoeopathic Hospital & Research Centre • +91 94529 94529
              </p>
            </div>

            {/* Consultation Mode Switcher */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.8rem',
              marginBottom: '1.5rem',
              background: 'var(--bg-alt)',
              padding: '0.4rem',
              borderRadius: '12px'
            }}>
              <button
                type="button"
                onClick={() => setConsultationType('clinic')}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: consultationType === 'clinic' ? 'var(--primary)' : 'transparent',
                  color: consultationType === 'clinic' ? '#ffffff' : 'var(--text-main)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <MapPin size={16} />
                <span>In-Clinic (Patna)</span>
              </button>

              <button
                type="button"
                onClick={() => setConsultationType('online')}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: consultationType === 'online' ? 'var(--primary)' : 'transparent',
                  color: consultationType === 'online' ? '#ffffff' : 'var(--text-main)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <Video size={16} />
                <span>Online Video Call</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
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
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-main)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Patna / Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
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
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                  Specialty / Disease *
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    outline: 'none'
                  }}
                >
                  <option value="Kidney / Gallbladder Stone">Kidney & Gallbladder Stones (Non-Surgical)</option>
                  <option value="Coeliac / Wheat Allergy">Coeliac / Gluten Allergy</option>
                  <option value="Arthritis / Joint Pain">Rheumatoid & Osteoarthritis</option>
                  <option value="Psoriasis / Eczema / Vitiligo">Psoriasis, Eczema & Skin Disorders</option>
                  <option value="Asthma / Respiratory Allergy">Asthma & Sinusitis</option>
                  <option value="IBS / Fatty Liver">IBS, GERD & Digestive Health</option>
                  <option value="Ovarian Cyst / Fibroid">Ovarian Cysts & Fibroids</option>
                  <option value="Pediatric Immunity">Pediatric Immunity & Growth</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-main)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-main)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                    <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                  Describe Symptoms (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us briefly about your symptoms..."
                  value={formData.symptoms}
                  onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem', fontSize: '1.05rem' }}
              >
                <Send size={18} />
                <span>Confirm & Send to WhatsApp (+91 94529 94529)</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Appointment Request Submitted!
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We are connecting you directly to Aarogyam Hospital’s WhatsApp helpline (+91 94529 94529) to confirm your slot with Dr. P. Kumar.
            </p>

            <button onClick={onClose} className="btn-outline" style={{ padding: '0.7rem 1.8rem' }}>
              Close Modal
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
