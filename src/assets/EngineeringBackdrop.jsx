export default function EngineeringBackdrop({ variant = "circuit" }) {
  if (variant === "infrastructure") {
    return (
      <svg className="scene-svg" viewBox="0 0 1600 900" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="rackGlow" x1="0" x2="1">
            <stop offset="0" stopColor="#151b25" />
            <stop offset="1" stopColor="#05070a" />
          </linearGradient>
          <radialGradient id="infraAura" cx="70%" cy="35%" r="50%">
            <stop offset="0" stopColor="#82d9ff" stopOpacity=".2" />
            <stop offset="1" stopColor="#82d9ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="#05070a" />
        <rect width="1600" height="900" fill="url(#infraAura)" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`translate(${80 + i * 132}, ${190 + (i % 2) * 18})`}>
            <rect x="0" y="0" width="92" height="560" rx="4" fill="url(#rackGlow)" stroke="#243143" strokeWidth="2" />
            {Array.from({ length: 18 }).map((__, j) => (
              <g key={j}>
                <rect x="12" y={18 + j * 29} width="68" height="18" rx="2" fill="#0d1219" stroke="#1e2c3b" />
                <circle cx="67" cy={27 + j * 29} r="2.2" fill={j % 4 === 0 ? "#8be9fd" : "#526577"} opacity=".9" />
              </g>
            ))}
          </g>
        ))}
        <path d="M0 750H1600" stroke="#203142" strokeWidth="2" />
        <path d="M350 900L760 510M1250 900L920 510" stroke="#35566d" strokeOpacity=".18" strokeWidth="2" />
      </svg>
    );
  }

  if (variant === "vision") {
    return (
      <svg className="scene-svg" viewBox="0 0 1600 900" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="visionGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0" stopColor="#53d4ff" stopOpacity=".18" />
            <stop offset="1" stopColor="#05070a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1600" height="900" fill="#05070a" />
        <rect width="1600" height="900" fill="url(#visionGlow)" />
        <g opacity=".55">
          {Array.from({ length: 17 }).map((_, i) => <path key={i} d={`M${100+i*92} 0V900`} stroke="#1a3445" />)}
          {Array.from({ length: 10 }).map((_, i) => <path key={i} d={`M0 ${80+i*84}H1600`} stroke="#1a3445" />)}
        </g>
        <g transform="translate(800 450)">
          <circle r="200" fill="none" stroke="#9ce9ff" strokeOpacity=".45" strokeWidth="2" />
          <circle r="120" fill="none" stroke="#9ce9ff" strokeOpacity=".65" />
          <circle r="38" fill="#9ce9ff" fillOpacity=".12" stroke="#9ce9ff" strokeWidth="2" />
          <path d="M-300 0H300M0-300V300" stroke="#9ce9ff" strokeOpacity=".35" />
          <rect x="-260" y="-170" width="180" height="110" fill="none" stroke="#63dbff" strokeWidth="3" />
          <rect x="85" y="70" width="220" height="135" fill="none" stroke="#63dbff" strokeWidth="3" />
          <path d="M-260 -190h46M-280 -170v46M305 50h-46M325 70v46" stroke="#a5edff" strokeWidth="3" />
        </g>
      </svg>
    );
  }

  return (
    <svg className="scene-svg" viewBox="0 0 1600 900" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="heroGlow" cx="72%" cy="42%" r="42%">
          <stop offset="0" stopColor="#62d8ff" stopOpacity=".2" />
          <stop offset=".6" stopColor="#117aa4" stopOpacity=".05" />
          <stop offset="1" stopColor="#05070a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="board" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#111923" />
          <stop offset="1" stopColor="#080c12" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="#05070a" />
      <rect width="1600" height="900" fill="url(#heroGlow)" />
      <g transform="translate(950 420) rotate(-12)">
        <rect x="-360" y="-220" width="720" height="440" rx="24" fill="url(#board)" stroke="#2b4355" strokeWidth="3" />
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i}>
            <path d={`M${-310 + i * 78} -180V-80H${-250 + i * 65}V40H${-300 + i * 72}V170`} fill="none" stroke="#32607a" strokeWidth="3" opacity=".65" />
            <circle cx={-310 + i * 78} cy="-180" r="7" fill="#83e6ff" opacity=".8" />
          </g>
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`translate(${-220 + i * 105}, ${-45 + (i % 2) * 88})`}>
            <rect x="0" y="0" width="70" height="52" rx="7" fill="#121f2a" stroke="#4a7188" />
            <path d="M8 14H60M8 26H48M8 38H55" stroke="#68a7c4" strokeOpacity=".5" />
          </g>
        ))}
        <circle cx="195" cy="-105" r="55" fill="#0a141c" stroke="#7de5ff" strokeOpacity=".8" strokeWidth="2" />
        <circle cx="195" cy="-105" r="18" fill="#7de5ff" fillOpacity=".2" />
      </g>
      <g opacity=".3">
        <path d="M0 780C330 650 520 710 760 620S1240 430 1600 560" fill="none" stroke="#4fa7cf" strokeWidth="2" />
        <path d="M0 815C300 700 530 770 800 660S1270 520 1600 620" fill="none" stroke="#4fa7cf" />
      </g>
    </svg>
  );
}
