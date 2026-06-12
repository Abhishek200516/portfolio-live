import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from './index.js'

const CATEGORIES = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', pct: 95 },
      { name: 'Data Structures', pct: 85 },
      { name: 'Algorithms', pct: 82 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Deep Learning', pct: 88 },
      { name: 'Image Classification', pct: 90 },
      { name: 'Computer Vision', pct: 85 },
    ],
  },
  {
    title: 'Hardware & Simulation',
    skills: [
      { name: 'MATLAB', pct: 80 },
      { name: 'ANSYS HFSS', pct: 78 },
      { name: 'ESP32 / IoT', pct: 88 },
      { name: 'Sentaurus TCAD', pct: 72 },
    ],
  },
]

function SkillBar({ name, pct, active }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (active) setTimeout(() => setWidth(pct), 100)
  }, [active, pct])

  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.82)', letterSpacing: 1 }}>{name}</span>
        <span style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, color: '#0066B1' }}>{pct}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

function SkillCategory({ title, skills, active, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: 30,
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s, border-color 0.3s',
      }}
      className="skill-cat"
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, #0066B1, transparent)',
      }}/>
      <div style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 11,
        letterSpacing: 3,
        color: '#0066B1',
        marginBottom: 24,
        textTransform: 'uppercase',
      }}>{title}</div>
      {skills.map(s => <SkillBar key={s.name} {...s} active={active} />)}
    </motion.div>
  )
}

export default function Skills({ addHover, removeHover }) {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section
      id="skills"
      style={{
        padding: '100px 60px',
        maxWidth: 1400,
        margin: '0 auto',
        background: 'linear-gradient(180deg, transparent, rgba(0,102,177,0.025), transparent)',
      }}
    >
      <div className="section-label">Skills</div>
      <h2 style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700,
        lineHeight: 1.1,
        marginBottom: 60,
      }}>
        INSTRUMENT<br />
        <span style={{ color: '#0066B1' }}>CLUSTER</span>
      </h2>

      <div
        ref={ref}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}
      >
        {CATEGORIES.map((cat, i) => (
          <SkillCategory key={cat.title} {...cat} active={visible} delay={i * 0.12} />
        ))}
      </div>

      <style>{`
        .skill-cat:hover {
          transform: translateY(-4px);
          border-color: rgba(0,102,177,0.38) !important;
        }
        @media (max-width: 900px) {
          section#skills { padding: 70px 24px !important; }
        }
      `}</style>
    </section>
  )
}
