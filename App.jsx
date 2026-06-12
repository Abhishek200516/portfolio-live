import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from './index.js'
import About from './About.jsx'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import StartupScreen from './StartupScreen.jsx'

const EDUCATION = [
  {
    title: 'Electronics and Communication Engineering',
    detail: 'Undergraduate study focused on embedded systems, communication, signal processing, and hardware design.',
  },
  {
    title: 'Programming and Problem Solving',
    detail: 'Continuous practice in DSA, Python, algorithms, and building practical software projects.',
  },
  {
    title: 'AI/ML and IoT Exploration',
    detail: 'Hands-on learning across computer vision, neural networks, Arduino, ESP32, and real-time systems.',
  },
]

const CERTIFICATIONS = [
  {
    title: 'AI/ML Foundations',
    detail: 'Core concepts in machine learning, deep learning, model evaluation, and computer vision workflows.',
  },
  {
    title: 'Embedded Systems',
    detail: 'Practical work with microcontrollers, sensors, prototyping, and real-time project development.',
  },
  {
    title: 'Web Development',
    detail: 'Modern frontend engineering with React, Vite, responsive design, and interactive UI patterns.',
  },
]

function Education() {
  return (
    <section id="education" style={{ padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div className="section-label">Education</div>
      <h2 style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700,
        lineHeight: 1.1,
        marginBottom: 60,
      }}>
        LEARNING<br />
        <span style={{ color: '#0066B1' }}>ARCHITECTURE</span>
      </h2>

      <div style={{ display: 'grid', gap: 22 }}>
        {EDUCATION.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="glass-card"
            style={{ padding: '28px 32px' }}
          >
            <div style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 11,
              letterSpacing: 3,
              color: '#0066B1',
              marginBottom: 12,
            }}>{String(index + 1).padStart(2, '0')}</div>
            <h3 style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 24,
              fontWeight: 700,
              color: '#fff',
              margin: '0 0 10px',
            }}>{item.title}</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8 }}>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" style={{ padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div className="section-label">Certifications</div>
      <h2 style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700,
        lineHeight: 1.1,
        marginBottom: 60,
      }}>
        VALIDATED<br />
        <span style={{ color: '#0066B1' }}>SKILL STACK</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {CERTIFICATIONS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="glass-card"
            style={{ padding: 30 }}
          >
            <div className="m-stripe" style={{ marginBottom: 28 }}>
              <span className="m-stripe-1" />
              <span className="m-stripe-2" />
              <span className="m-stripe-3" />
            </div>
            <h3 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 14,
              letterSpacing: 2,
              color: '#fff',
              margin: '0 0 16px',
            }}>{item.title}</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.62)', lineHeight: 1.8 }}>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section id="contact" style={{ padding: '100px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div className="section-label">Contact</div>
      <h2 style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700,
        lineHeight: 1.1,
        marginBottom: 60,
      }}>
        START THE<br />
        <span style={{ color: '#0066B1' }}>CONVERSATION</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card"
          style={{ padding: 40 }}
        >
          <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.9, fontSize: 16 }}>
            Available for internships, research collaborations, software projects, AI/ML prototypes, and IoT builds.
          </p>
          <div style={{ display: 'grid', gap: 16, marginTop: 32 }}>
            <a href="mailto:contact@example.com" style={{ color: '#00aaff', textDecoration: 'none', fontSize: 15 }}>contact@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" style={{ color: '#00aaff', textDecoration: 'none', fontSize: 15 }}>github.com</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{ color: '#00aaff', textDecoration: 'none', fontSize: 15 }}>linkedin.com</a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card"
          style={{ padding: 34, display: 'grid', gap: 18 }}
        >
          <input className="form-input" placeholder="Your name" required />
          <input className="form-input" type="email" placeholder="Your email" required />
          <textarea className="form-input" placeholder="Your message" rows={6} required />
          <button className="btn-submit" type="submit"><span>{submitted ? 'Message queued locally' : 'Send Message'}</span></button>
        </motion.form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ padding: '50px 60px 70px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="m-stripe" style={{ justifyContent: 'center', marginBottom: 18 }}>
        <span className="m-stripe-1" />
        <span className="m-stripe-2" />
        <span className="m-stripe-3" />
      </div>
      <div style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, letterSpacing: 3 }}>
        © 2026 ABHISHEK SINGH THAKUR · ENGINEERED WITH PRECISION
      </div>
    </footer>
  )
}

export default function App() {
  const [startupComplete, setStartupComplete] = useState(false)
  const { cursorRef, ringRef, addHover, removeHover } = useCursor()

  if (!startupComplete) {
    return <StartupScreen onComplete={() => setStartupComplete(true)} />
  }

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
      <div className="carbon-overlay" />
      <Navbar addHover={addHover} removeHover={removeHover} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Hero addHover={addHover} removeHover={removeHover} />
        <About addHover={addHover} removeHover={removeHover} />
        <Skills addHover={addHover} removeHover={removeHover} />
        <Projects addHover={addHover} removeHover={removeHover} />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </motion.main>
    </>
  )
}
