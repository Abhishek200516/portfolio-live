import { motion } from 'framer-motion'
import { useScrollReveal, useCounter } from './index.js'

const TAGS = ['Python', 'Deep Learning', 'IoT', 'DSA', 'Antenna Design', 'MATLAB', 'ANSYS HFSS', 'ESP32']
const STATS = [
  { label: 'Projects', value: 3, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'Years Learning', value: 3, suffix: '+' },
]

function StatItem({ label, value, suffix, active }) {
  const count = useCounter(value, active)
  return (
    <div style={{
      textAlign: 'center',
      padding: '24px 16px',
      border: '1px solid rgba(255,255,255,0.07)',
      background: 'rgba(255,255,255,0.03)',
      position: 'relative',
      overflow: 'hidden',
    }}
      className="stat-hover"
    >
      <span style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 38,
        fontWeight: 800,
        background: 'linear-gradient(135deg, #0066B1, #00ccff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'block',
        marginBottom: 6,
        lineHeight: 1,
      }}>
        {count}{suffix}
      </span>
      <span style={{
        fontSize: 11,
        letterSpacing: 2,
        color: 'rgba(255,255,255,0.38)',
        textTransform: 'uppercase',
        fontFamily: 'Rajdhani, sans-serif',
        fontWeight: 600,
      }}>
        {label}
      </span>
    </div>
  )
}

export default function About({ addHover, removeHover }) {
  const [ref, visible] = useScrollReveal(0.15)

  return (
    <section id="about" style={{ padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div className="section-label">About</div>
      <h2 style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700,
        lineHeight: 1.1,
        marginBottom: 60,
      }}>
        THE ENGINEER<br />
        <span style={{ color: '#0066B1' }}>BEHIND THE CODE</span>
      </h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Card */}
        <div className="glass-card" style={{ padding: 40 }}>
          <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.9, fontSize: 15, marginBottom: 24 }}>
            Electronics and Communication Engineering undergraduate with hands-on experience building systems at the boundary of hardware and software. I design solutions that think — combining deep learning, signal processing, and embedded systems to solve real-world problems.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.9, fontSize: 15, marginBottom: 32 }}>
            Passionate about crafting intelligent systems where AI meets circuits. Whether it's training neural networks for medical diagnostics or designing 5G antennas for wearable devices, I engineer with precision and purpose.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {TAGS.map(tag => (
              <span
                key={tag}
                onMouseEnter={addHover}
                onMouseLeave={removeHover}
                style={{
                  padding: '6px 16px',
                  border: '1px solid rgba(0,102,177,0.3)',
                  color: '#0066B1',
                  fontSize: 12,
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 600,
                  letterSpacing: 1,
                  background: 'rgba(0,102,177,0.04)',
                  cursor: 'default',
                }}
              >{tag}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="stats-cols">
          {STATS.map(s => (
            <StatItem key={s.label} {...s} active={visible} />
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          section#about { padding: 70px 24px !important; }
          .stats-cols { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-cols { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
