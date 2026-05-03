'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''} style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                style={{ objectFit: 'cover', display: 'block', width: '80%', height: '80%', marginBottom: '4px' }}
              />
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              {personalInfo.fullName}
            </span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: 8 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            style={{
              fontSize: '1.5rem', fontWeight: 700, color: activeSection === link.href.replace('#', '') ? 'var(--accent-primary)' : 'var(--text-secondary)',
              textDecoration: 'none', transition: 'color 0.2s ease',
              animationDelay: `${i * 0.05}s`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
