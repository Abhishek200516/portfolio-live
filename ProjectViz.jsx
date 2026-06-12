/* Project visualization SVGs */

export function EyeAIViz() {
  return (
    <svg viewBox="0 0 280 140" width="280" height="140" style={{ width: '100%', height: '100%' }}>
      <defs>
        <filter id="glow-p1">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="280" height="140" fill="#050e1a"/>
      {/* Input layer */}
      {[30, 70, 110].map((y, i) => (
        <circle key={i} cx="40" cy={y} r="5" fill="#0066B1" className="neural-node" style={{ animationDelay: `${i * 0.3}s` }}/>
      ))}
      {/* Hidden layer 1 */}
      {[20, 50, 80, 110].map((y, i) => (
        <circle key={i} cx="100" cy={y} r="5" fill="#00aaff" className="neural-node" style={{ animationDelay: `${0.1 + i * 0.25}s` }}/>
      ))}
      {/* Hidden layer 2 */}
      {[35, 70, 105].map((y, i) => (
        <circle key={i} cx="165" cy={y} r="5" fill="#0088ff" className="neural-node" style={{ animationDelay: `${0.2 + i * 0.3}s` }}/>
      ))}
      {/* Output */}
      <circle cx="230" cy="50" r="6" fill="#E10600" className="neural-node" style={{ animationDelay: '0.3s' }} filter="url(#glow-p1)"/>
      <circle cx="230" cy="90" r="6" fill="#00ff88" className="neural-node" style={{ animationDelay: '0.6s' }} filter="url(#glow-p1)"/>
      {/* Connections */}
      <g stroke="rgba(0,102,177,0.18)" strokeWidth="0.7" fill="none">
        {[30, 70, 110].map(y1 => [20, 50, 80, 110].map(y2 => (
          <line key={`${y1}-${y2}`} x1="45" y1={y1} x2="95" y2={y2}/>
        )))}
        {[20, 50, 80, 110].map(y1 => [35, 70, 105].map(y2 => (
          <line key={`${y1}-${y2}`} x1="105" y1={y1} x2="160" y2={y2}/>
        )))}
        {[35, 70, 105].map(y1 => [50, 90].map(y2 => (
          <line key={`${y1}-${y2}`} x1="170" y1={y1} x2="224" y2={y2}/>
        )))}
      </g>
      <text x="140" y="133" fill="rgba(0,102,177,0.4)" fontFamily="Orbitron,monospace" fontSize="8" textAnchor="middle" letterSpacing="2">CNN · RESNET50 · DEEP LEARNING</text>
    </svg>
  )
}

export function AntennaViz() {
  return (
    <svg viewBox="0 0 280 140" width="280" height="140" style={{ width: '100%', height: '100%' }}>
      <rect width="280" height="140" fill="#050e0a"/>
      {/* Main antenna */}
      <circle cx="140" cy="65" r="7" fill="#0066B1"/>
      {[18, 32, 48, 62].map((r, i) => (
        <circle key={i} cx="140" cy="65" r={r} fill="none" stroke="#0066B1"
          strokeWidth={1.5 - i * 0.2} strokeOpacity={0.7 - i * 0.12}
          className="antenna-wave"
          style={{ animationDelay: `${i * 0.55}s` }}/>
      ))}
      {/* Secondary antennas */}
      <circle cx="58" cy="65" r="5" fill="#E10600"/>
      {[14, 26].map((r, i) => (
        <circle key={i} cx="58" cy="65" r={r} fill="none" stroke="#E10600"
          strokeWidth={1 - i * 0.1} strokeOpacity={0.6 - i * 0.15}
          className="antenna-wave"
          style={{ animationDelay: `${0.3 + i * 0.55}s` }}/>
      ))}
      <circle cx="222" cy="65" r="5" fill="#E10600"/>
      {[14, 26].map((r, i) => (
        <circle key={i} cx="222" cy="65" r={r} fill="none" stroke="#E10600"
          strokeWidth={1 - i * 0.1} strokeOpacity={0.6 - i * 0.15}
          className="antenna-wave"
          style={{ animationDelay: `${0.6 + i * 0.55}s` }}/>
      ))}
      <text x="140" y="133" fill="rgba(0,102,177,0.4)" fontFamily="Orbitron,monospace" fontSize="8" textAnchor="middle" letterSpacing="2">MIMO · 5G · SUB-6GHz</text>
    </svg>
  )
}

export function VoltageViz() {
  return (
    <svg viewBox="0 0 280 140" width="280" height="140" style={{ width: '100%', height: '100%' }}>
      <rect width="280" height="140" fill="#0a080a"/>
      {/* Waveform background */}
      <path d="M 10 70 L 50 70 L 60 30 L 70 110 L 80 30 L 90 110 L 100 30 L 110 110 L 120 70 L 160 70 L 165 55 L 170 85 L 175 55 L 180 85 L 185 55 L 190 85 L 195 70 L 270 70"
        fill="none" stroke="rgba(0,102,177,0.12)" strokeWidth="2"/>
      {/* Animated waveform */}
      <path d="M 10 70 L 50 70 L 60 30 L 70 110 L 80 30 L 90 110 L 100 30 L 110 110 L 120 70 L 160 70 L 165 55 L 170 85 L 175 55 L 180 85 L 185 55 L 190 85 L 195 70 L 270 70"
        fill="none" stroke="#0066B1" strokeWidth="2"
        className="elec-path"/>
      {/* Arduino */}
      <rect x="115" y="52" width="50" height="30" rx="3" fill="rgba(0,102,177,0.12)" stroke="rgba(0,102,177,0.35)" strokeWidth="1"/>
      <circle cx="140" cy="67" r="9" fill="rgba(0,102,177,0.25)" stroke="#0066B1" strokeWidth="1"/>
      <text x="140" y="71.5" fill="#0066B1" fontFamily="Orbitron,monospace" fontSize="8" textAnchor="middle" fontWeight="700">A</text>
      {/* Alert */}
      <circle cx="246" cy="38" r="11" fill="rgba(225,6,0,0.12)" stroke="#E10600" strokeWidth="1"/>
      <text x="246" y="43" fill="#E10600" fontFamily="Orbitron,monospace" fontSize="10" textAnchor="middle" fontWeight="700">!</text>
      {/* OK */}
      <circle cx="34" cy="38" r="11" fill="rgba(0,200,0,0.08)" stroke="rgba(0,200,0,0.45)" strokeWidth="1"/>
      <text x="34" y="43" fill="rgba(0,200,0,0.8)" fontFamily="Orbitron,monospace" fontSize="9" textAnchor="middle">✓</text>
      <text x="140" y="133" fill="rgba(0,102,177,0.4)" fontFamily="Orbitron,monospace" fontSize="8" textAnchor="middle" letterSpacing="2">ARDUINO · RELAY · PROTECTION</text>
    </svg>
  )
}
