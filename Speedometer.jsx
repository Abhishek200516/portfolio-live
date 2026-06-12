import { useEffect, useState } from 'react'

const RINGS = [
  { id: 'python',  color: '#0066B1', label: 'PYTHON',  pct: 95, r: 148, total: 929.9 },
  { id: 'aiml',   color: '#00aaff', label: 'AI/ML',   pct: 90, r: 130, total: 816.8 },
  { id: 'iot',    color: '#E10600', label: 'IoT',     pct: 88, r: 112, total: 703.7 },
  { id: 'dsa',    color: 'rgba(255,255,255,0.65)', label: 'DSA', pct: 85, r: 95, total: 596.9 },
]

export default function Speedometer({ active }) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (active) setTimeout(() => setAnimated(true), 200)
  }, [active])

  return (
    <svg viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        <filter id="glow-sp">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="bg-sp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#111111"/>
          <stop offset="100%" stopColor="#000000"/>
        </radialGradient>
      </defs>

      {/* Background circle */}
      <circle cx="190" cy="190" r="178" fill="url(#bg-sp)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

      {/* M-stripe arcs top */}
      <path d="M 102 45 A 158 158 0 0 1 278 45" fill="none" stroke="#1C6BBA" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 82 62 A 158 158 0 0 1 298 62" fill="none" stroke="#B21E23" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>

      {/* Tick marks */}
      {Array.from({ length: 9 }, (_, i) => {
        const angle = -150 + i * 37.5
        const rad = (angle * Math.PI) / 180
        const x1 = 190 + Math.cos(rad) * 165
        const y1 = 190 + Math.sin(rad) * 165
        const x2 = 190 + Math.cos(rad) * (i % 2 === 0 ? 153 : 158)
        const y2 = 190 + Math.sin(rad) * (i % 2 === 0 ? 153 : 158)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      })}

      {/* Rings */}
      {RINGS.map((ring, i) => (
        <g key={ring.id}>
          {/* Track */}
          <circle
            cx="190" cy="190" r={ring.r}
            fill="none"
            stroke={ring.color}
            strokeWidth={i === 0 ? 12 : i === 1 ? 10 : i === 2 ? 9 : 8}
            strokeOpacity="0.1"
          />
          {/* Fill */}
          <circle
            cx="190" cy="190" r={ring.r}
            fill="none"
            stroke={ring.color}
            strokeWidth={i === 0 ? 12 : i === 1 ? 10 : i === 2 ? 9 : 8}
            strokeLinecap="round"
            filter="url(#glow-sp)"
            transform="rotate(-90 190 190)"
            strokeDasharray={ring.total}
            strokeDashoffset={animated ? ring.total * (1 - ring.pct / 100) : ring.total}
            style={{ transition: `stroke-dashoffset 1.5s cubic-bezier(0.25,0.46,0.45,0.94) ${0.4 + i * 0.28}s` }}
          />
        </g>
      ))}

      {/* Labels panel */}
      {RINGS.map((ring, i) => (
        <g key={`label-${ring.id}`}>
          <text x="226" y={60 + i * 20} fill={ring.color} fontFamily="Orbitron,monospace" fontSize="9" letterSpacing="1">{ring.label}</text>
          <text x="286" y={60 + i * 20} fill={ring.color} fontFamily="Orbitron,monospace" fontSize="9">{ring.pct}%</text>
        </g>
      ))}

      {/* Center text */}
      <text x="190" y="182" fill="white" fontFamily="Orbitron,monospace" fontSize="11" textAnchor="middle" letterSpacing="3" opacity="0.35">SKILL</text>
      <text x="190" y="202" fill="white" fontFamily="Orbitron,monospace" fontSize="11" textAnchor="middle" letterSpacing="3" opacity="0.35">INDEX</text>

      {/* Center dot */}
      <circle cx="190" cy="190" r="8" fill="#0066B1" opacity="0.4"/>
      <circle cx="190" cy="190" r="4" fill="#0066B1"/>

      {/* M badge bottom */}
      <rect x="168" y="312" width="44" height="22" fill="rgba(0,0,0,0.7)" rx="2"/>
      <rect x="168" y="312" width="15" height="22" fill="#1C6BBA" rx="2"/>
      <rect x="183" y="312" width="14" height="22" fill="#B21E23"/>
      <rect x="197" y="312" width="15" height="22" fill="#1C6BBA" rx="2"/>
      <text x="190" y="327" fill="#fff" fontFamily="Orbitron,monospace" fontSize="9" textAnchor="middle" fontWeight="700" letterSpacing="2">M</text>
    </svg>
  )
}
