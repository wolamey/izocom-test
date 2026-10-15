interface ProductImageProps {
  type: string;
  className?: string;
}

export default function ProductImage({ type, className = '' }: ProductImageProps) {
  const colors: Record<string, { bg: string; accent: string; label: string }> = {
    'pipe-pe': { bg: '#E8F4FD', accent: '#2196F3', label: 'ППУ-ПЭ' },
    'pipe-oz': { bg: '#F0F0F0', accent: '#78909C', label: 'ППУ-ОЦ' },
    'fitting-elbow': { bg: '#FFF3E0', accent: '#FF9800', label: 'Отвод' },
    'fitting-tee': { bg: '#E8F5E9', accent: '#4CAF50', label: 'Тройник' },
    'odk-system': { bg: '#F3E5F5', accent: '#9C27B0', label: 'ОДК' },
    'mufta': { bg: '#FFF8E1', accent: '#FFC107', label: 'Муфта' },
  };

  const c = colors[type] || { bg: '#F5F5F5', accent: '#9E9E9E', label: 'Продукция' };

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <svg viewBox="0 0 400 300" className="w-full h-full" style={{ backgroundColor: c.bg }}>
        {/* Pipe shape */}
        {type.startsWith('pipe') && (
          <g>
            <rect x="40" y="100" width="320" height="60" rx="8" fill={c.accent} opacity="0.2" />
            <rect x="40" y="110" width="320" height="40" rx="6" fill={c.accent} opacity="0.4" />
            <rect x="40" y="120" width="320" height="20" rx="4" fill={c.accent} opacity="0.7" />
            {/* Insulation layer */}
            <rect x="30" y="85" width="340" height="90" rx="12" fill={c.accent} opacity="0.1" stroke={c.accent} strokeWidth="2" strokeDasharray="8 4" />
            {/* End caps */}
            <ellipse cx="40" cy="130" rx="8" ry="35" fill={c.accent} opacity="0.3" />
            <ellipse cx="360" cy="130" rx="8" ry="35" fill={c.accent} opacity="0.3" />
          </g>
        )}
        {/* Elbow */}
        {type === 'fitting-elbow' && (
          <g>
            <path d="M 80 200 L 80 120 Q 80 80 120 80 L 280 80" fill="none" stroke={c.accent} strokeWidth="30" strokeLinecap="round" opacity="0.3" />
            <path d="M 80 200 L 80 120 Q 80 80 120 80 L 280 80" fill="none" stroke={c.accent} strokeWidth="16" strokeLinecap="round" opacity="0.6" />
            <path d="M 80 200 L 80 120 Q 80 80 120 80 L 280 80" fill="none" stroke={c.accent} strokeWidth="2" strokeLinecap="round" opacity="0.8" strokeDasharray="6 3" />
          </g>
        )}
        {/* Tee */}
        {type === 'fitting-tee' && (
          <g>
            <rect x="60" y="120" width="280" height="30" rx="6" fill={c.accent} opacity="0.4" />
            <rect x="180" y="60" width="30" height="120" rx="6" fill={c.accent} opacity="0.4" />
            <rect x="60" y="128" width="280" height="14" rx="4" fill={c.accent} opacity="0.6" />
            <rect x="188" y="60" width="14" height="120" rx="4" fill={c.accent} opacity="0.6" />
          </g>
        )}
        {/* ODK */}
        {type === 'odk-system' && (
          <g>
            <rect x="100" y="100" width="200" height="100" rx="12" fill={c.accent} opacity="0.15" stroke={c.accent} strokeWidth="2" />
            <circle cx="150" cy="150" r="20" fill={c.accent} opacity="0.3" />
            <circle cx="200" cy="150" r="20" fill={c.accent} opacity="0.3" />
            <circle cx="250" cy="150" r="20" fill={c.accent} opacity="0.3" />
            <line x1="170" y1="150" x2="180" y2="150" stroke={c.accent} strokeWidth="2" />
            <line x1="220" y1="150" x2="230" y2="150" stroke={c.accent} strokeWidth="2" />
            <circle cx="150" cy="150" r="6" fill={c.accent} opacity="0.7" />
            <circle cx="200" cy="150" r="6" fill={c.accent} opacity="0.7" />
            <circle cx="250" cy="150" r="6" fill={c.accent} opacity="0.7" />
          </g>
        )}
        {/* Mufta */}
        {type === 'mufta' && (
          <g>
            <rect x="60" y="110" width="280" height="50" rx="25" fill={c.accent} opacity="0.2" />
            <rect x="100" y="120" width="200" height="30" rx="15" fill={c.accent} opacity="0.4" />
            <rect x="140" y="125" width="120" height="20" rx="10" fill={c.accent} opacity="0.6" />
            <ellipse cx="60" cy="135" rx="6" ry="20" fill={c.accent} opacity="0.3" />
            <ellipse cx="340" cy="135" rx="6" ry="20" fill={c.accent} opacity="0.3" />
          </g>
        )}
        {/* Label */}
        <text x="200" y="260" textAnchor="middle" fill={c.accent} fontSize="14" fontWeight="600" opacity="0.6">{c.label}</text>
      </svg>
    </div>
  );
}
