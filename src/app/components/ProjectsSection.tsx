'use client';

import { useState } from 'react';
import { projects } from '../data/portfolio';

const categories = ['All', 'Full Stack', 'Backend'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '50px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag">🚀 Portfolio</div>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Real-world applications I&apos;ve built with passion and precision</p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`projects-filter-${cat.toLowerCase().replace(' ', '-')}`}
              style={{
                padding: '8px 24px',
                borderRadius: 100,
                border: activeCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                background: activeCategory === cat ? 'rgba(108,99,255,0.15)' : 'transparent',
                color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="glass-card project-card"
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                padding: 0, overflow: 'hidden',
                transform: hoveredProject === i ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredProject === i ? '0 20px 60px rgba(108,99,255,0.2)' : 'none',
                borderColor: hoveredProject === i ? 'var(--border-hover)' : 'var(--border)',
              }}
            >
              {/* Card Header */}
              <div style={{
                padding: '28px 28px 20px',
                background: 'linear-gradient(135deg, rgba(108,99,255,0.05) 0%, transparent 100%)',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
              }}>


                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}>
                    {project.category === 'Backend' ? '⚡' : '🌐'}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.05rem' }}>{project.title}</h3>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{project.category}</span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {project.description}
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
                {Object.entries(project.stats).map(([key, val]) => (
                  <div key={key} style={{
                    flex: 1, padding: '12px 10px', textAlign: 'center',
                    borderRight: '1px solid var(--border)',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-primary)', lineHeight: 1.3 }}>{val}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.68rem', textTransform: 'capitalize', marginTop: 2 }}>{key}</div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div style={{ padding: '20px 28px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
