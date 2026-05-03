'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { personalInfo, stats } from '../data/portfolio';

export default function HeroSection() {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);
  const titles = ['Full Stack Developer'];
  const phaseRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const type = () => {
      const currentTitle = titles[phaseRef.current % titles.length];
      if (!deletingRef.current) {
        if (charRef.current < currentTitle.length) {
          setText(currentTitle.slice(0, charRef.current + 1));
          charRef.current++;
          setTimeout(type, 80);
        } else {
          setTimeout(() => { deletingRef.current = true; type(); }, 2000);
        }
      } else {
        if (charRef.current > 0) {
          setText(currentTitle.slice(0, charRef.current - 1));
          charRef.current--;
          setTimeout(type, 40);
        } else {
          deletingRef.current = false;
          phaseRef.current++;
          setPhase(phaseRef.current);
          setTimeout(type, 300);
        }
      }
    };
    setTimeout(type, 500);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="grid-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 72 }}>
      {/* Background Orbs */}
      <div style={{
        position: 'absolute', top: '10%', right: '10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} className="orb-1" />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} className="orb-2" />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,114,182,0.04) 0%, transparent 60%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'center' }} className="hero-grid">

          {/* Left Content */}
          <div>
            {/* Status badge */}
            {personalInfo.availableForWork && (
              <div className="status-available" style={{ marginBottom: 24, width: 'fit-content' }}>
                <span className="status-dot" />
                Available for opportunities
              </div>
            )}

            {/* Greeting */}
            <div style={{ color: 'var(--accent-secondary)', fontFamily: 'Fira Code, monospace', fontSize: '1rem', marginBottom: 16, opacity: 0.9 }}>
              👋 Hey there, I&apos;m
            </div>

            {/* Name */}
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.03em' }}>
              <span style={{ color: 'var(--text-primary)' }}>{personalInfo.fullName}</span>
            </h1>

            {/* Typing */}
            <div style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 700, marginBottom: 24, minHeight: '2.4rem' }}>
              <span className="gradient-text">{text}</span>
              <span style={{ color: 'var(--accent-primary)', animation: 'blink 1s step-end infinite' }}>|</span>
            </div>

            {/* Bio */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 600, marginBottom: 40 }}>
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
              <button onClick={() => scrollToSection('projects')} className="btn-primary" id="hero-view-work-btn">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-outline" id="hero-contact-btn">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </button>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="hero-avatar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
            <div className="animate-float" style={{ position: 'relative' }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: -8,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6c63ff, #22d3ee, #f472b6, #6c63ff)',
                animation: 'rotate 4s linear infinite',
                opacity: 0.6,
              }} />
              <div style={{
                position: 'absolute', inset: -4,
                borderRadius: '50%',
                background: 'var(--bg-primary)',
              }} />
              {/* Avatar */}
              <div style={{
                width: 280, height: 280, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(108,99,255,0.3) 0%, rgba(34,211,238,0.2) 50%, rgba(244,114,182,0.2) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
                border: '2px solid rgba(108,99,255,0.2)',
                overflow: 'hidden',
              }}>
                <Image
                  src="/me.png"
                  alt="Darshan Belani"
                  width={280}
                  height={280}
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'Laravel', color: '#FF2D20', top: '10%', right: '-30%' },
                { label: 'React', color: '#61DAFB', bottom: '20%', right: '-35%' },
                { label: 'Node.js', color: '#68A063', top: '30%', left: '-40%' },
                { label: 'Next.js', color: '#a78bfa', bottom: '10%', left: '-30%' },
              ].map((badge, i) => (
                <div key={badge.label} style={{
                  position: 'absolute',
                  [badge.top ? 'top' : 'bottom']: badge.top || badge.bottom,
                  [badge.right ? 'right' : 'left']: badge.right || badge.left,
                  background: 'rgba(19,19,31,0.95)',
                  border: `1px solid ${badge.color}40`,
                  borderRadius: 10,
                  padding: '6px 14px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: badge.color,
                  whiteSpace: 'nowrap',
                  boxShadow: `0 4px 20px ${badge.color}20`,
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 64 }} className="stats-grid">
          {stats.map((stat, i) => (
            <div key={stat.label} className="glass-card" style={{ padding: '24px', textAlign: 'center', animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: '2rem', marginBottom: 4 }}>{stat.icon}</div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: var(--accent-primary);
          opacity: 0.4;
          animation: pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.7); opacity: 0.8; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
