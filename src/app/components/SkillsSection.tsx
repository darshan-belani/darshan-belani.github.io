'use client';

import { skills } from '../data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function SkillsSection() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ padding: '50px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag">⚡ Tech Stack</div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">My toolkit for building modern, scalable applications</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="skills-grid">

          {/* Frontend */}
          <div className="glass-card" style={{ padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))',
                border: '1px solid rgba(34,211,238,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}>🎨</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Frontend</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>React & Next.js ecosystem</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', fontWeight: 500 }}>
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontFamily: 'Fira Code, monospace', fontWeight: 600 }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{
                      width: animated ? `${skill.level}%` : '0%',
                      background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-cyan))',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-card" style={{ padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(108,99,255,0.05))',
                border: '1px solid rgba(108,99,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}>⚙️</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Backend</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Laravel & Node.js APIs</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', fontWeight: 500 }}>
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontFamily: 'Fira Code, monospace', fontWeight: 600 }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{
                      width: animated ? `${skill.level}%` : '0%',
                      background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glass-card" style={{ padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(244,114,182,0.2), rgba(244,114,182,0.05))',
                border: '1px solid rgba(244,114,182,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}>🛠️</div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>Tools & Platforms</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Dev tools & services</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {skills.tools.map((tool) => (
                <div key={tool.name} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: 12, padding: '10px 16px',
                  fontSize: '0.88rem', fontWeight: 500,
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(108,99,255,0.1)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(108,99,255,0.3)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <span>{tool.icon}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
