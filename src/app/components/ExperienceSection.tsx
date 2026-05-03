'use client';

import { experiences } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '100px 24px', background: 'var(--bg-secondary)', position: 'relative' }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag">💼 Career Path</div>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">My professional journey building real-world applications</p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 5, top: 10, bottom: 10,
            width: 2,
            background: 'linear-gradient(to bottom, var(--accent-primary), rgba(108,99,255,0.1))',
          }} />

          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 40 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -37, top: 28,
                width: 16, height: 16, borderRadius: '50%',
                background: 'var(--accent-primary)',
                boxShadow: '0 0 0 4px rgba(108,99,255,0.2), 0 0 20px rgba(108,99,255,0.4)',
                zIndex: 1,
              }} />

              <div className="glass-card project-card" style={{ padding: 32, marginLeft: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{exp.role}</h3>
                      <span style={{
                        background: i === 0 ? 'rgba(52,211,153,0.1)' : 'rgba(108,99,255,0.1)',
                        border: `1px solid ${i === 0 ? 'rgba(52,211,153,0.3)' : 'rgba(108,99,255,0.2)'}`,
                        color: i === 0 ? 'var(--accent-green)' : 'var(--accent-secondary)',
                        padding: '2px 10px', borderRadius: 100, fontSize: '0.72rem', fontWeight: 600,
                      }}>
                        {exp.type}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(108,99,255,0.08)',
                    border: '1px solid rgba(108,99,255,0.15)',
                    borderRadius: 10,
                    padding: '6px 16px',
                    fontSize: '0.85rem',
                    color: 'var(--accent-secondary)',
                    fontFamily: 'Fira Code, monospace',
                    whiteSpace: 'nowrap',
                  }}>
                    📅 {exp.duration}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {exp.description.map((point, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: 3 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
