import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StartupScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // animate progress bar
    const start = performance.now()
    const duration = 1900
    const frame = ts => {
      const p = Math.min((ts - start) / duration, 1)
      setProgress(Math.round(p * 100))
      if (p < 1) requestAnimationFrame(frame)
      else {
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 700)
        }, 300)
      }
    }
    requestAnimationFrame(frame)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="startup"
          className="startup-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* BMW Roundel */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10"
          >
            <div
              style={{
                width: 90, height: 90,
                borderRadius: '50%',
                border: '2.5px solid rgba(255,255,255,0.8)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                overflow: 'hidden',
              }}
            >
              <div style={{ background: '#fff' }} />
              <div style={{ background: '#0066B1' }} />
              <div style={{ background: '#0066B1' }} />
              <div style={{ background: '#fff' }} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 11,
              letterSpacing: 6,
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 48,
              textTransform: 'uppercase',
            }}
          >
            Initializing Portfolio
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ width: 220, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 1, overflow: 'hidden' }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #0066B1, #E10600)',
                transition: 'width 0.05s linear',
                borderRadius: 1,
              }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 12,
              color: 'rgba(255,255,255,0.25)',
              marginTop: 16,
              letterSpacing: 2,
            }}
          >
            {progress}%
          </motion.div>

          {/* M stripe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: 3, marginTop: 48 }}
          >
            <div style={{ width: 6, height: 20, background: '#1C6BBA' }} />
            <div style={{ width: 6, height: 20, background: '#B21E23' }} />
            <div style={{ width: 6, height: 20, background: '#5C5C5C' }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
