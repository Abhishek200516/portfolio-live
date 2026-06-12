import { motion } from 'framer-motion'
import { useTyping } from './index.js'
import Particles from './Particles'
import Speedometer from './Speedometer'

const PHRASES = ['Software Developer', 'AI/ML Engineer', 'IoT Innovator', 'ECE Undergraduate']

export default function Hero({ addHover, removeHover }) {
  const typed = useTyping(PHRASES, 80, 45, 1800)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 60px',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100%',
      }}
    >
      {/* Ambient gradients */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,102,177,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(225,6,0,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}/>
      <Particles />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
        width: '100%',
        maxWidth: 1400,
        margin: '0 auto',
        paddingTop: 80,
        position: 'relative',
        zIndex: 2,
      }}
        className="hero-inner"
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <div style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 11,
            letterSpacing: 5,
            color: '#0066B1',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span style={{ width: 24, height: 1, background: '#0066B1', display: 'inline-block' }}/>
            ECE UNDERGRADUATE · ASPIRING DEVELOPER
          </div>

          {/* Name */}
          <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, lineHeight: 1, marginBottom: 18 }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(40px, 7vw, 88px)',
              background: 'linear-gradient(135deg, #fff 60%, rgba(255,255,255,0.45))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>ABHISHEK</span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(20px, 3.5vw, 44px)',
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 500,
            }}>SINGH</span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(20px, 3.5vw, 44px)',
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 500,
            }}>THAKUR</span>
          </div>

          {/* Typing */}
          <div style={{ height: 40, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 16,
              color: '#0066B1',
              fontWeight: 600,
            }}>&gt;</span>
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 21,
              fontWeight: 600,
              color: '#fff',
              minWidth: 220,
            }}>{typed}</span>
            <span className="cursor-blink" />
          </div>

          {/* Description */}
          <p style={{
            color: 'rgba(255,255,255,0.48)',
            fontSize: 15,
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 460,
            fontFamily: 'Inter, sans-serif',
          }}>
            Building intelligent systems at the intersection of software, AI, and embedded technologies. Driven by performance, precision, and engineering excellence.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onMouseEnter={addHover}
              onMouseLeave={removeHover}
              onClick={() => alert('Resume download coming soon!')}
            >
              Download Resume
            </button>
            <button
              className="btn-secondary"
              onMouseEnter={addHover}
              onMouseLeave={removeHover}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT — Speedometer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          className="hero-speedo"
        >
          <div style={{ width: 380, height: 380, maxWidth: '100%' }}>
            <Speedometer active={true} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-speedo { display: none !important; }
          section#hero { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  )
}
