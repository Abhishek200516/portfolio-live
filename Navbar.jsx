import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useClock } from './index.js'

const LINKS = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact']

export default function Navbar({ addHover, removeHover }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const clock = useClock()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    const el = document.getElementById(id.toLowerCase() === 'home' ? 'hero' : id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 60px' : '20px 60px',
          background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 3,
            background: 'linear-gradient(135deg, #0066B1, #00aaff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
          }}
          onMouseEnter={addHover}
          onMouseLeave={removeHover}
        >
          AST
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}
          className="hidden md:flex"
        >
          {LINKS.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                onMouseEnter={addHover}
                onMouseLeave={removeHover}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.color = '#fff')}
                onBlur={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                className="hover:text-white"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Clock */}
        <div style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 11,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <span>{clock}</span>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            className="md:hidden"
            aria-label="Menu"
          >
            <div style={{ width: 22, height: 1.5, background: '#fff', marginBottom: 5, transition: 'all 0.2s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: 22, height: 1.5, background: '#fff', marginBottom: 5,
              opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <div style={{ width: 22, height: 1.5, background: '#fff', transition: 'all 0.2s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'fixed', top: 60, left: 0, right: 0,
            background: 'rgba(10,10,10,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            zIndex: 999,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: 14, fontWeight: 600,
                letterSpacing: 3, textAlign: 'left',
                cursor: 'pointer', padding: 0,
                textTransform: 'uppercase',
              }}
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </>
  )
}
