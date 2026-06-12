import { motion } from 'framer-motion'
import { useScrollReveal } from './index.js'
import { EyeAIViz, AntennaViz, VoltageViz } from './ProjectViz'

const PROJECTS = [
  {
    num: 'PROJECT 01',
    badge: 'AI · MEDICAL',
    title: 'Deep Learning-Based Classification of Eye Diseases',
    features: ['CNN Models', 'ResNet50', 'Transfer Learning', 'Medical Imaging'],
    achievement: { value: '95.83%', label: 'Classification Accuracy' },
    Viz: EyeAIViz,
    accentColor: '#0066B1',
  },
  {
    num: 'PROJECT 02',
    badge: 'RF · 5G',
    title: 'MIMO Antenna System for Wearable 5G Applications',
    features: ['Sub-6 GHz', 'High Isolation', 'Radiation Pattern', 'Wearable Comms'],
    achievement: { value: 'ANSYS HFSS', label: 'Simulated & Validated' },
    Viz: AntennaViz,
    accentColor: '#0088ff',
  },
  {
    num: 'PROJECT 03',
    badge: 'IoT · SAFETY',
    title: 'AC Over/Under Voltage Detection using Arduino',
    features: ['Voltage Monitoring', 'Relay Protection', 'Appliance Safety', 'Arduino'],
    achievement: { value: 'Real-time', label: 'Detection & Auto-Protection' },
    Viz: VoltageViz,
    accentColor: '#E10600',
  },
]

function ProjectCard({ project, delay, addHover, removeHover }) {
  const { num, badge, title, features, achievement, Viz, accentColor } = project
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      className="project-card"
      onMouseEnter={addHover}
      onMouseLeave={removeHover}
    >
      {/* Visualization */}
      <div style={{
        width: '100%', height: 155,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.3)',
        position: 'relative', overflow: 'hidden',
      }}>
        <Viz />
        <div style={{
          position: 'absolute', top: 14, right: 14,
          padding: '4px 12px',
          background: `rgba(${accentColor === '#E10600' ? '225,6,0' : '0,102,177'},0.12)`,
          border: `1px solid ${accentColor}55`,
          fontFamily: 'Orbitron, monospace',
          fontSize: 10, letterSpacing: 2,
          color: accentColor,
        }}>{badge}</div>
      </div>

      {/* Body */}
      <div style={{ padding: '0 28px 28px' }}>
        <div style={{
          fontFamily: 'Orbitron, monospace', fontSize: 10,
          color: '#0066B1', letterSpacing: 3, marginBottom: 10,
          opacity: 0.65, paddingTop: 20,
        }}>{num}</div>
        <div style={{
          fontFamily: 'Rajdhani, sans-serif', fontSize: 19,
          fontWeight: 700, color: '#fff', lineHeight: 1.3,
          marginBottom: 16, letterSpacing: 0.5,
        }}>{title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {features.map(f => (
            <span key={f} style={{
              padding: '4px 12px',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: 11, color: 'rgba(255,255,255,0.45)',
              fontFamily: 'Rajdhani, sans-serif', fontWeight: 600,
              letterSpacing: 1,
              background: 'rgba(255,255,255,0.02)',
            }}>{f}</span>
          ))}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 16px',
          background: 'rgba(0,102,177,0.07)',
          borderLeft: '2px solid #0066B1',
        }}>
          <span style={{ fontFamily: 'Orbitron, monospace', fontSize: 15, fontWeight: 700, color: '#0066B1' }}>
            {achievement.value}
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: 'Rajdhani, sans-serif' }}>
            {achievement.label}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ addHover, removeHover }) {
  return (
    <section id="projects" style={{ padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div className="section-label">Projects</div>
      <h2 style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700, lineHeight: 1.1, marginBottom: 60,
      }}>
        PERFORMANCE<br />
        <span style={{ color: '#0066B1' }}>BUILDS</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 26 }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} delay={i * 0.12} addHover={addHover} removeHover={removeHover} />
        ))}
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,102,177,0.45) !important;
          box-shadow: 0 20px 60px rgba(0,102,177,0.13);
        }
        @media (max-width: 900px) {
          section#projects { padding: 70px 24px !important; }
        }
      `}</style>
    </section>
  )
}
