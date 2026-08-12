import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  Graticule
} from 'react-simple-maps';

const geoUrl = '/features.json';

const locationData = {
  "Islamic University of Madinah": { coords: [39.6111, 24.4686], dx: -90, dy: -60, region: 'Saudi Arabia' },
  "Taibah University": { coords: [39.6111, 24.4686], dx: -130, dy: -20, region: 'Saudi Arabia' },
  "Prince Sattam bin Abdulaziz University": { coords: [47.3346, 24.1553], dx: 60, dy: -60, region: 'Saudi Arabia' },
  "Qassim University": { coords: [43.9740, 26.3259], dx: 20, dy: -80, region: 'Saudi Arabia' },
  "King Saud University": { coords: [46.7386, 24.7743], dx: 80, dy: -20, region: 'Saudi Arabia' },
  "King Abdulaziz University": { coords: [39.1979, 21.4858], dx: -90, dy: 40, region: 'Saudi Arabia' },
  "Princess Nourah bint Abdulrahman University": { coords: [46.7386, 24.7743], dx: 110, dy: 20, region: 'Saudi Arabia' },
  "Universitas Malaysia": { coords: [101.6869, 3.1390], dx: -50, dy: -50, region: 'Malaysia' },
  "Universiti Teknologi Malaysia": { coords: [103.7414, 1.4927], dx: 40, dy: -40, region: 'Malaysia' },
  "Multimedia University": { coords: [101.6869, 3.1390], dx: -70, dy: -20, region: 'Malaysia' },
  "International Islamic University Malaysia": { coords: [101.6869, 3.1390], dx: -30, dy: -80, region: 'Malaysia' },
  "Institut Teknologi Bandung": { coords: [107.6098, -6.9147], dx: 30, dy: 60, region: 'Indonesia' },
  "Universitas Padjadjaran": { coords: [107.6098, -6.9147], dx: 70, dy: 80, region: 'Indonesia' },
  "Institut Pertanian Bogor": { coords: [106.7972, -6.5971], dx: -20, dy: 70, region: 'Indonesia' },
  "Institut Teknologi Sepuluh Nopember": { coords: [112.7521, -7.2504], dx: 80, dy: 40, region: 'Indonesia' },
  "Universitas Andalas": { coords: [100.3692, -0.9492], dx: -80, dy: 20, region: 'Indonesia' },
  "Binus University": { coords: [106.8456, -6.2088], dx: 0, dy: 90, region: 'Indonesia' },
  "Telkom University": { coords: [107.6098, -6.9147], dx: -60, dy: 100, region: 'Indonesia' },
  "Universitas Trisakti": { coords: [106.8456, -6.2088], dx: -90, dy: 60, region: 'Indonesia' },
  "Al-Azhar University": { coords: [31.2357, 30.0444], dx: -60, dy: -60, region: 'Egypt' },
  "Asia Pacific University": { coords: [101.6869, 3.1390], dx: 60, dy: 10, region: 'Malaysia' }
};

// Region config for color coding
const regionConfig = {
  'Saudi Arabia': { color: '#FBBF24', flag: '🇸🇦', code: 'KSA' },
  'Malaysia': { color: '#0048A0', flag: '🇲🇾', code: 'MY' },
  'Indonesia': { color: '#1E40AF', flag: '🇮🇩', code: 'ID' },
  'Egypt': { color: '#ec4899', flag: '🇪🇬', code: 'EG' }
};

const AlumniMap = ({ universities = [] }) => {
  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const [hoveredUni, setHoveredUni] = useState(null);
  const [activeRegion, setActiveRegion] = useState('ALL');

  // Inject Futuristic Fonts
  useEffect(() => {
    const linkId = 'alumni-map-partner-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Filter universities with known coords
  const allMapData = universities
    .filter(u => locationData[u.name])
    .map(u => ({
      ...u,
      ...locationData[u.name]
    }));

  const mapData = activeRegion === 'ALL'
    ? allMapData
    : allMapData.filter(u => u.region === activeRegion);

  // Region counts
  const regionCounts = allMapData.reduce((acc, u) => {
    acc[u.region] = (acc[u.region] || 0) + 1;
    return acc;
  }, {});

  const splitName = (name, max = 18) => {
    if (!name) return ['Unknown', ''];
    if (name.length <= max) return [name, ''];
    const cut = name.lastIndexOf(' ', max);
    if (cut > 0) return [name.substring(0, cut), name.substring(cut + 1)];
    return [name.substring(0, max), name.substring(max, max * 2)];
  };

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        minHeight: '640px',
        background: '#050810',
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        borderRadius: '4px',
        boxShadow: `0 30px 80px -20px ${primary}50`
      }}
    >
      {/* ============ BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit Grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(${primary}40 1px, transparent 1px), linear-gradient(90deg, ${primary}40 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Radial glows */}
        <div
          className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-[140px] opacity-20"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[140px] opacity-15"
          style={{ background: secondary }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10"
          style={{ background: accent }}
        ></div>

        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)'
          }}
        ></div>

        {/* Scan sweep */}
        <div className="map-scan-sweep"></div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

      {/* ============ TOP HUD BAR ============ */}
      <div
        className="relative z-20 flex items-center justify-between px-5 py-3 backdrop-blur-xl border-b"
        style={{
          background: `linear-gradient(90deg, ${primary}40, ${secondary}30)`,
          borderColor: `${primary}50`
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          </div>
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/90 font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            PARTNER.NETWORK / UNIVERSITIES
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: accent }}
          ></span>
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/90 hidden sm:inline"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            GLOBAL.MAP
          </span>
        </div>
      </div>

      {/* ============ HEADER ============ */}
      <div
        className="relative z-10 p-6 md:p-8 border-b"
        style={{ borderColor: `${primary}20` }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [MODULE.PARTNER]
              </span>
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
            </div>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Jejaring <span style={{ color: accent }}>Universitas</span> Partner
            </h3>
            <p
              className="text-sm text-white/60 font-light max-w-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Peta sebaran universitas-universitas unggulan yang menerima alumni Al Wafi dari seluruh dunia.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-3">
            <div
              className="relative backdrop-blur-sm border px-4 py-3 min-w-[90px] overflow-hidden group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: `${primary}30`,
                borderRadius: '2px'
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${accent}10, transparent)`
                }}
              ></div>
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r" style={{ borderColor: accent }}></div>
              <div
                className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                UNIVERSITAS
              </div>
              <div
                className="text-2xl font-bold leading-none"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                {String(allMapData.length).padStart(2, '0')}
              </div>
            </div>

            <div
              className="relative backdrop-blur-sm border px-4 py-3 min-w-[90px] overflow-hidden group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: `${primary}30`,
                borderRadius: '2px'
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${accent}10, transparent)`
                }}
              ></div>
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r" style={{ borderColor: accent }}></div>
              <div
                className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                NEGARA
              </div>
              <div
                className="text-2xl font-bold leading-none"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                {String(Object.keys(regionCounts).length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Region Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 font-bold mr-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            FILTER.REGION
          </span>

          <button
            onClick={() => setActiveRegion('ALL')}
            className="relative px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all duration-300"
            style={{
              background: activeRegion === 'ALL' ? `linear-gradient(135deg, ${primary}, ${secondary})` : 'rgba(255,255,255,0.03)',
              color: activeRegion === 'ALL' ? 'white' : 'rgba(255,255,255,0.6)',
              border: `1px solid ${activeRegion === 'ALL' ? primary : `${primary}30`}`,
              borderRadius: '2px',
              fontFamily: "'JetBrains Mono', monospace",
              boxShadow: activeRegion === 'ALL' ? `0 6px 20px -5px ${primary}60` : 'none'
            }}
          >
            {activeRegion === 'ALL' && (
              <span className="absolute inset-0 overflow-hidden" style={{ borderRadius: '2px' }}>
                <span className="alumni-sweep" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)',
                  animation: 'alumniSweep 2s linear infinite'
                }}></span>
              </span>
            )}
            <span className="relative flex items-center gap-1.5">
              ALL
              <span style={{ color: accent }}>{allMapData.length}</span>
            </span>
          </button>

          {Object.entries(regionConfig).map(([region, config]) => {
            const count = regionCounts[region] || 0;
            const isActive = activeRegion === region;
            return (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className="relative px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  background: isActive ? config.color : 'rgba(255,255,255,0.03)',
                  color: isActive
                    ? (region === 'Saudi Arabia' ? '#050810' : 'white')
                    : 'rgba(255,255,255,0.6)',
                  border: `1px solid ${isActive ? config.color : `${primary}30`}`,
                  borderRadius: '2px',
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span>{config.flag}</span>
                  <span>{config.code}</span>
                  <span style={{ opacity: 0.7 }}>{count}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============ MAP ============ */}
      <div className="relative" style={{ width: "100%", height: "520px" }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 250,
            center: [75, 10]
          }}
          width={1000}
          height={600}
          style={{
            width: "100%",
            height: "100%",
            background: '#050810'
          }}
        >
          {/* Radar Graticule */}
          <Graticule
            stroke={secondary}
            strokeWidth={0.3}
            strokeOpacity={0.3}
          />

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#0c1a33"
                  stroke={secondary}
                  strokeWidth={0.4}
                  strokeOpacity={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: "#16305e",
                      outline: "none",
                      cursor: "default",
                      transition: "fill 300ms"
                    },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Annotations with Logo Cards */}
          {mapData.map((dst, i) => {
            const isHovered = hoveredUni === dst.name;
            const regionColor = regionConfig[dst.region]?.color || primary;
            const [line1, line2] = splitName(dst.name);

            return (
              <Annotation
                key={i}
                subject={dst.coords}
                dx={dst.dx}
                dy={dst.dy}
                connectorProps={{
                  stroke: isHovered ? regionColor : accent,
                  strokeWidth: isHovered ? 1.5 : 1,
                  strokeLinecap: "round",
                  strokeDasharray: isHovered ? "0" : "2 3",
                  strokeOpacity: isHovered ? 1 : 0.6
                }}
              >
                <g
                  transform="translate(-60, -18)"
                  onMouseEnter={() => setHoveredUni(dst.name)}
                  onMouseLeave={() => setHoveredUni(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Outer glow on hover */}
                  {isHovered && (
                    <rect
                      x="-2" y="-2" width="124" height="40"
                      fill="none"
                      stroke={regionColor}
                      strokeWidth="1"
                      strokeOpacity="0.5"
                      rx="3"
                      className="annotation-glow"
                    />
                  )}

                  {/* Card background */}
                  <rect
                    x="0" y="0" width="120" height="36"
                    fill={isHovered ? 'rgba(5,8,16,0.95)' : 'rgba(5,8,16,0.85)'}
                    stroke={regionColor}
                    strokeWidth={isHovered ? 1.2 : 0.8}
                    strokeOpacity={isHovered ? 1 : 0.5}
                    rx="2"
                    style={{ transition: 'all 300ms ease' }}
                  />

                  {/* Accent left bar */}
                  <rect
                    x="0" y="0" width="3" height="36"
                    fill={regionColor}
                    rx="2"
                  />

                  {/* Corner ticks */}
                  <rect x="116" y="0" width="4" height="1" fill={regionColor} />
                  <rect x="119" y="0" width="1" height="4" fill={regionColor} />
                  <rect x="119" y="32" width="1" height="4" fill={regionColor} />
                  <rect x="116" y="35" width="4" height="1" fill={regionColor} />

                  {/* Logo circle background */}
                  <circle cx="16" cy="18" r="12" fill="rgba(255,255,255,0.1)" stroke={regionColor} strokeWidth="0.5" />

                  {/* Logo image */}
                  <image
                    href={dst.logo}
                    x="7"
                    y="9"
                    width="18"
                    height="18"
                    preserveAspectRatio="xMidYMid meet"
                  />

                  {/* Name line 1 */}
                  <text
                    x="34"
                    y={line2 ? "14" : "19"}
                    fill="#ffffff"
                    fontSize="7.5px"
                    fontWeight="bold"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {line1}
                  </text>

                  {/* Name line 2 */}
                  {line2 && (
                    <text
                      x="34"
                      y="24"
                      fill="rgba(255,255,255,0.7)"
                      fontSize="7px"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {line2.length > 20 ? line2.substring(0, 20) + '...' : line2}
                    </text>
                  )}

                  {/* Region badge */}
                  <rect
                    x="34"
                    y={line2 ? "27" : "23"}
                    width="4"
                    height="4"
                    fill={regionColor}
                    rx="1"
                  />
                  <text
                    x="41"
                    y={line2 ? "31" : "27"}
                    fill={regionColor}
                    fontSize="5px"
                    fontWeight="bold"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {regionConfig[dst.region]?.code || 'GLOBAL'}
                  </text>
                </g>
              </Annotation>
            );
          })}

          {/* Markers - pulsing dots */}
          {mapData.map((dst, i) => {
            const isHovered = hoveredUni === dst.name;
            const regionColor = regionConfig[dst.region]?.color || primary;

            return (
              <Marker
                key={`marker-${i}`}
                coordinates={dst.coords}
                onMouseEnter={() => setHoveredUni(dst.name)}
                onMouseLeave={() => setHoveredUni(null)}
              >
                <g style={{ cursor: 'pointer' }}>
                  {/* Pulse rings */}
                  <circle
                    r={isHovered ? "5" : "3"}
                    fill="none"
                    stroke={regionColor}
                    strokeWidth="1"
                    className="alumni-pulse-ring"
                    style={{ opacity: isHovered ? 0.9 : 0.4 }}
                  />
                  <circle
                    r={isHovered ? "5" : "3"}
                    fill="none"
                    stroke={regionColor}
                    strokeWidth="1"
                    className="alumni-pulse-ring"
                    style={{
                      animationDelay: '1s',
                      opacity: isHovered ? 0.9 : 0.4
                    }}
                  />

                  {/* Core dot */}
                  <circle
                    r={isHovered ? "4" : "3"}
                    fill={regionColor}
                    stroke="#050810"
                    strokeWidth="1.5"
                    style={{
                      transition: 'r 300ms ease',
                      filter: isHovered ? `drop-shadow(0 0 8px ${regionColor})` : 'none'
                    }}
                  />

                  {/* Crosshair ticks */}
                  {isHovered && (
                    <g>
                      <line x1="-8" y1="0" x2="-5" y2="0" stroke={regionColor} strokeWidth="1" />
                      <line x1="5" y1="0" x2="8" y2="0" stroke={regionColor} strokeWidth="1" />
                      <line x1="0" y1="-8" x2="0" y2="-5" stroke={regionColor} strokeWidth="1" />
                      <line x1="0" y1="5" x2="0" y2="8" stroke={regionColor} strokeWidth="1" />
                    </g>
                  )}

                  {/* Invisible hover area */}
                  <circle r="10" fill="transparent" />
                </g>
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Active node indicator (bottom left) */}
        <div
          className="absolute bottom-3 left-3 z-20 px-4 py-2 backdrop-blur-xl border"
          style={{
            background: 'rgba(5,8,16,0.85)',
            borderColor: `${primary}40`,
            borderRadius: '2px',
            minWidth: '220px'
          }}
        >
          <div
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // ACTIVE.NODE
          </div>
          {hoveredUni ? (
            <div>
              <div
                className="text-[11px] font-bold text-white truncate mb-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {hoveredUni}
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{
                    background: regionConfig[allMapData.find(u => u.name === hoveredUni)?.region]?.color || accent
                  }}
                ></span>
                <span
                  className="text-[9px] uppercase tracking-widest text-white/60"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {allMapData.find(u => u.name === hoveredUni)?.region || 'GLOBAL'}
                </span>
              </div>
            </div>
          ) : (
            <div
              className="text-[10px] uppercase tracking-widest text-white/60"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              HOVER.ANY.NODE
            </div>
          )}
        </div>

        {/* Map mode hint (bottom right) */}
        <div
          className="absolute bottom-3 right-3 z-20 px-3 py-1.5 backdrop-blur-xl border hidden md:block"
          style={{
            background: 'rgba(5,8,16,0.8)',
            borderColor: `${primary}40`,
            borderRadius: '2px'
          }}
        >
          <span
            className="text-[8px] uppercase tracking-widest text-white/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            STATIC.VIEW // {mapData.length} NODES
          </span>
        </div>
      </div>

      {/* ============ LEGEND FOOTER ============ */}
      <div
        className="relative z-10 flex flex-wrap items-center gap-3 md:gap-5 px-5 py-3 border-t backdrop-blur-xl"
        style={{
          background: 'rgba(0,72,160,0.1)',
          borderColor: `${primary}30`
        }}
      >
        <span
          className="text-[8px] uppercase tracking-[0.25em] text-white/50 font-bold"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          REGION.LEGEND
        </span>

        {Object.entries(regionConfig).map(([region, config]) => (
          <div key={region} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-sm"
              style={{ background: config.color }}
            ></div>
            <span
              className="text-[9px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {region.toUpperCase()}
            </span>
          </div>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <span
            className="w-1 h-1 rounded-full animate-pulse"
            style={{ background: accent }}
          ></span>
          <span
            className="text-[8px] uppercase tracking-widest text-white/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            PARTNERSHIP.ACTIVE
          </span>
        </div>
      </div>

      {/* ============ ANIMATIONS ============ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes alumniPulse {
          0% { r: 3; opacity: 0.9; }
          100% { r: 18; opacity: 0; }
        }
        .alumni-pulse-ring {
          animation: alumniPulse 2s ease-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes alumniSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes mapScanSweep {
          0% { left: -15%; }
          100% { left: 115%; }
        }
        .map-scan-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 140px;
          background: linear-gradient(90deg, transparent, rgba(251,191,36,0.05), rgba(0,72,160,0.07), transparent);
          animation: mapScanSweep 10s linear infinite;
          pointer-events: none;
        }
        @keyframes annotationGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .annotation-glow {
          animation: annotationGlow 1.5s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default AlumniMap;