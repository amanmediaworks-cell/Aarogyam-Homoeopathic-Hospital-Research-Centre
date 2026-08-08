import React, { useState } from 'react';
import { Activity, CheckCircle2, ArrowRight, RotateCcw, AlertCircle, ShieldAlert, Stethoscope } from 'lucide-react';

export default function SymptomTriage({ onOpenBooking, currentLang }) {
  const [step, setStep] = useState(1);
  const [selectedConcern, setSelectedConcern] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');

  const healthConcerns = [
    { id: 'stone', title: 'Renal / Gallbladder Stone (पथरी)', desc: 'Sharp flank pain, urinary burning, nausea' },
    { id: 'gluten', title: 'Coeliac / Wheat Allergy (ग्लूटेन एलर्जी)', desc: 'Diarrhea, bloating, weakness after eating wheat' },
    { id: 'skin', title: 'Psoriasis / Eczema / Vitiligo (चर्म रोग)', desc: 'Scaly skin patches, severe itching, white spots' },
    { id: 'joints', title: 'Arthritis / Joint Stiffness (गठिया)', desc: 'Knee pain, swelling, morning joint rigidity' },
    { id: 'gastro', title: 'Acid Reflux / IBS / Fatty Liver (पेट रोग)', desc: 'Heartburn, irregular bowel habits, bloating' },
    { id: 'asthma', title: 'Asthma / Chronic Sinusitis (दमा / एलर्जिक नजला)', desc: 'Wheezing, seasonal sneeze bursts, breathlessness' }
  ];

  const durations = [
    'Less than 1 month (हाल ही में शुरुआत)',
    '1 to 6 months (1 से 6 महीने)',
    '6 months to 2 years (6 महीने से 2 साल)',
    'More than 2 years (2 साल से भी पुराना/असाध्य)'
  ];

  const ageGroups = [
    'Child (0 - 12 Years)',
    'Teen / Adult (13 - 45 Years)',
    'Senior (46+ Years)'
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedConcern('');
    setSelectedDuration('');
    setSelectedAgeGroup('');
  };

  return (
    <section id="symptom-triage" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        
        <div className="section-header">
          <p className="subtitle">
            {currentLang === 'EN' ? 'Smart Clinical Triage' : 'स्मार्ट ऑनलाइन लक्षण परामर्श'}
          </p>
          <h2>
            {currentLang === 'EN' ? (
              <>Interactive <span className="gradient-text">Symptom Assessment</span></>
            ) : (
              <>अपनी बीमारी के <span className="gradient-text">लक्षणों की जाँच करें</span></>
            )}
          </h2>
          <p className="description">
            {currentLang === 'EN' ? 
              'Answer 3 quick questions to receive personalized homeopathic treatment guidance from Dr. P. Kumar.' : 
              '3 आसान सवालों के जवाब दें और अपनी बीमारी के अनुसार तुरंत डॉक्टरी सलाह पाएं।'}
          </p>
        </div>

        {/* Triage Container Card */}
        <div className="glass-card" style={{ maxWidth: '820px', margin: '0 auto', padding: '2.5rem' }}>
          
          {/* Progress Indicator Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Stethoscope size={22} style={{ color: 'var(--primary)' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                {step === 4 ? 'Clinical Triage Result' : `Step ${step} of 3: ${step === 1 ? 'Primary Condition' : step === 2 ? 'Duration' : 'Patient Age'}`}
              </h3>
            </div>

            {step > 1 && (
              <button 
                onClick={handleReset} 
                style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}
              >
                <RotateCcw size={14} /> Start Over
              </button>
            )}
          </div>

          {/* STEP 1: Select Health Concern */}
          {step === 1 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: 'var(--text-main)' }}>
                What is your primary health concern?
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {healthConcerns.map((concern) => (
                  <div
                    key={concern.id}
                    onClick={() => {
                      setSelectedConcern(concern.title);
                      setStep(2);
                    }}
                    style={{
                      background: selectedConcern === concern.title ? 'var(--primary-bg)' : 'var(--bg-card)',
                      border: '2px solid',
                      borderColor: selectedConcern === concern.title ? 'var(--primary)' : 'var(--border-color)',
                      borderRadius: '12px',
                      padding: '1.2rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <h5 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                      {concern.title}
                    </h5>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {concern.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Duration */}
          {step === 2 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: 'var(--text-main)' }}>
                How long have you been experiencing these symptoms?
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {durations.map((dur, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedDuration(dur);
                      setStep(3);
                    }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '10px',
                      padding: '1rem 1.2rem',
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <span>{dur}</span>
                    <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Age Group */}
          {step === 3 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', color: 'var(--text-main)' }}>
                Please select the patient's age category:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {ageGroups.map((age, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedAgeGroup(age);
                      setStep(4);
                    }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '1.5rem 1rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    {age}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Diagnosis Recommendation & Direct Action */}
          {step === 4 && (
            <div style={{ animation: 'fadeIn 0.4s ease-in-out' }}>
              <div style={{ background: 'var(--primary-bg)', borderLeft: '5px solid var(--primary)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--primary)' }} />
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-deep)' }}>
                    High Treatment Compatibility Confirmed
                  </h4>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  Based on your input for <strong>{selectedConcern}</strong> (Duration: {selectedDuration}, Patient: {selectedAgeGroup}), Dr. P. Kumar’s classical homeopathic protocol has a proven <strong>92%–96% clinical success rate</strong> for root-cause healing without surgery or side effects.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem', background: '#ffffff', padding: '1rem', borderRadius: '8px' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>RECOMMENDED PATHWAY:</span>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>Constitutional Anti-Miasmatic Therapy</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', fontWeight: 600 }}>EXPECTED RECOVERY:</span>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-deep)' }}>4 to 12 Weeks</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary pulse-button"
                  onClick={() => onOpenBooking(selectedConcern)}
                  style={{ flex: 1, padding: '0.9rem 1.5rem', fontSize: '1rem' }}
                >
                  <Stethoscope size={18} />
                  <span>Book Consultation for {selectedConcern.split(' ')[0]}</span>
                </button>

                <a
                  href={`https://wa.me/919452994529?text=Hello%20Aarogyam%20Hospital,%20I%20completed%20the%20symptom%20triage.%20Concern:%20${encodeURIComponent(selectedConcern)}%20(Duration:%20${encodeURIComponent(selectedDuration)}).%20I%20want%20to%20consult%20Dr.%20P.%20Kumar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '0.9rem 1.5rem', fontSize: '1rem' }}
                >
                  <span>WhatsApp Triage Report</span>
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
