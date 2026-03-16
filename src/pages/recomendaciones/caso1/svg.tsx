export const SemillaIcon = ({ className = "w-24 h-24 text-emerald-800" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Profundidad para semilla">
      {/* línea de suelo */}
      <line x1="8" y1="30" x2="56" y2="30" />
      {/* semilla bajo el suelo */}
      <ellipse cx="32" cy="38" rx="4" ry="3" />
      {/* indicador de profundidad (desde suelo a semilla) */}
      <path d="M48 30 V 38" />
      <path d="M46 32 L50 30" /><path d="M46 36 L50 38" />
    </svg>
);

export const PlantinIcon = ({ className = "w-24 h-24 text-emerald-800" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Profundidad para plantín">
      {/* línea de suelo */}
      <line x1="8" y1="30" x2="56" y2="30" />
      {/* cepellón al ras del suelo */}
      <rect x="28" y="30" width="8" height="6" rx="2" />
      {/* tallo y hojas */}
      <path d="M32 30 V 20" />
      <path d="M32 23 C28 21 26 18 26 15 C28 16 31 17 32 19" />
      <path d="M32 22 C36 20 38 17 38 14 C36 15 33 16 32 18" />
      {/* raíces cortas saliendo del cepellón */}
      <path d="M32 36 C30 38 29 39 28 40" />
      <path d="M32 36 C34 38 35 39 36 40" />
    </svg>
);

export const PlantaJovenIcon = ({ className = "w-24 h-24 text-emerald-800" }) => (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Profundidad para planta joven">
      {/* suelo con alcorque (cuenco) */}
      <path d="M10 30 Q32 26 54 30" />
      {/* tronco y copa */}
      <path d="M32 30 V 18" />
      <circle cx="32" cy="14" r="6" />
      {/* raíces más desarrolladas */}
      <path d="M32 30 C29 34 26 36 24 38" />
      <path d="M32 30 C35 34 38 36 40 38" />
      <path d="M32 31 C30 33 30 35 29 36" />
    </svg>
  );
  