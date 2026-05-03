'use client';

import { personalInfo } from '../data/portfolio';

const contactCards = [
  {
    icon: '📧', label: 'Email', value: personalInfo.email,
    href: `mailto:${personalInfo.email}`, color: 'rgba(108,99,255,0.12)', borderColor: 'rgba(108,99,255,0.3)',
  },
  {
    icon: '📍', label: 'Location', value: personalInfo.location,
    href: '#', color: 'rgba(244,114,182,0.1)', borderColor: 'rgba(244,114,182,0.3)',
  },
  {
    icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/darshan-belani',
    href: personalInfo.linkedin, color: 'rgba(52,211,153,0.08)', borderColor: 'rgba(52,211,153,0.25)',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '20%', right: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-tag">📬 Get In Touch</div>
          <h2 className="section-title">Let&apos;s <span className="gradient-text">Work Together</span></h2>
          <p className="section-subtitle">Have a project in mind? I&apos;d love to hear from you. Let&apos;s build something great!</p>
        </div>

        {/* Two-column layout: Ready to Collaborate | Contact Details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="contact-grid">

          {/* Left — Ready to Collaborate */}
          <div className="glass-card" style={{ padding: 40, height: '100%' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>🤝</span>
              Ready to <span className="gradient-text" style={{ marginLeft: 6 }}>Collaborate!</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: 28 }}>
              I&apos;m always open to discussing new opportunities, interesting projects,
              or just a friendly chat about tech. Whether you need a scalable web app,
              a robust API, or a full-stack solution — I&apos;m here to help!
            </p>

            {personalInfo.availableForWork && (
              <div className="status-available" style={{ marginBottom: 32 }}>
                <span className="status-dot" />
                Currently available for freelance / full-time
              </div>
            )}

            {/* What I bring */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '⚡', text: '7+ years of hands-on Laravel & Node.js experience' },
                { icon: '🚀', text: 'Delivered 10+ production apps across multiple domains' },
                { icon: '🔧', text: 'End-to-end: API design, DB, admin panel, deployment' },
                { icon: '💬', text: 'Clear communication & fast turnaround' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.95rem',
                  }}>{item.icon}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, paddingTop: 5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem',
              }}>📋</span>
              Contact Details
            </h3>

            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 18,
                  background: card.color,
                  border: `1px solid ${card.borderColor}`,
                  borderRadius: 16, padding: '20px 24px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  cursor: card.href === '#' ? 'default' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (card.href !== '#') {
                    (e.currentTarget as HTMLElement).style.transform = 'translateX(8px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(108,99,255,0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(255,255,255,0.06)',
                  border: `1px solid ${card.borderColor}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem',
                }}>{card.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                    {card.label}
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {card.value}
                  </div>
                </div>
                {card.href !== '#' && (
                  <svg width="16" height="16" fill="none" stroke="var(--text-muted)" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
