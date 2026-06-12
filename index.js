import { useEffect, useRef, useState, useCallback } from 'react'

/* ── Scroll Reveal ── */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

/* ── Typing Effect ── */
export function useTyping(phrases, speed = 80, deleteSpeed = 45, pauseMs = 1800) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = phrases[phraseIndex]
    let timer

    if (!deleting) {
      if (charIndex < word.length) {
        timer = setTimeout(() => setCharIndex(i => i + 1), speed)
      } else {
        timer = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(i => i - 1), deleteSpeed)
      } else {
        setDeleting(false)
        setPhraseIndex(i => (i + 1) % phrases.length)
      }
    }

    setText(word.slice(0, charIndex))
    return () => clearTimeout(timer)
  }, [charIndex, deleting, phraseIndex, phrases, speed, deleteSpeed, pauseMs])

  return text
}

/* ── Live Clock ── */
export function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      const n = new Date()
      const pad = v => String(v).padStart(2, '0')
      setTime(`${pad(n.getHours())}:${pad(n.getMinutes())}:${pad(n.getSeconds())}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

/* ── Custom Cursor ── */
export function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const ringPos = useRef({ x: 0, y: 0 })
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      }
    }
    window.addEventListener('mousemove', move)

    let rafId
    const animRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x - 18) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y - 18) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafId = requestAnimationFrame(animRing)
    }
    animRing()

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const addHover = useCallback(() => ringRef.current?.classList.add('hovered'), [])
  const removeHover = useCallback(() => ringRef.current?.classList.remove('hovered'), [])

  return { cursorRef, ringRef, addHover, removeHover }
}

/* ── Counter animation ── */
export function useCounter(target, active, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = null
    const step = ts => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return value
}
