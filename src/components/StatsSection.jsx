import React from 'react';
import { hospitalStats } from '../data/testimonials';
import { Award, Users, Activity, CheckCircle } from 'lucide-react';

export default function StatsSection({ currentLang }) {
  const icons = [Award, Activity, Users, CheckCircle];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
      color: '#ffffff',
      padding: '3rem 0',
      boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {hospitalStats.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(245, 158, 11, 0.2)',
                  color: '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem auto'
                }}>
                  <IconComponent size={28} />
                </div>
                
                <h3 style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.3rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {stat.value}{stat.suffix}
                </h3>
                
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#10b981', marginBottom: '0.2rem' }}>
                  {stat.label}
                </h4>
                
                <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
