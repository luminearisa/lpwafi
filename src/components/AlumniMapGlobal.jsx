import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
  Graticule
} from 'react-simple-maps';

const geoUrl = '/features.json';

const countryData = [
  { name: "Turki", coords: [35.2433, 38.9637], flag: "🇹", dx: -30, dy: -30 },
  { name: "Rusia", coords: [105.3188, 61.5240], flag: "🇷🇺", dx: 0, dy: -40 },
  { name: "Arab Saudi", coords: [45.0792, 23.8859], flag: "🇸🇦", dx: -30, dy: 30 },
  { name: "Yordania", coords: [36.2384, 31.2400], flag: "🇯🇴", dx: -20, dy: -20 },
  { name: "Malaysia", coords: [101.9758, 4.2105], flag: "🇲🇾", dx: 30, dy: 30 },
  { name: "Singapura", coords: [103.8198, 1.3521], flag: "🇸🇬", dx: 20, dy: 50 },
  { name: "Mesir", coords: [30.8025, 26.8206], flag: "🇪🇬", dx: -30, dy: -10 },
  { name: "Qatar", coords: [51.1839, 25.3548], flag: "🇶🇦", dx: 30, dy: 10 }
];

const AlumniMapGlobal = () => {
  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const [hovered, setHovered] = useState(null);

  // Inject Futuristic Fonts
  useEffect(() => {
    const linkId = 'map-futuristic-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        minHeight: '600px',
        background: '#050810',
        fontFamily: "'Space Grotesk', 'Inter', sans-serif"
      }}
    >
      {/* ============ BACKGROUND LAYERS ============ */}
      {/* Circuit grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,72,160,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,72,160,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Radial glows */}
      <div
        className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: primary }}
      ></div>
      <div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: secondary }}
      ></div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,8,16,0.8) 100%)'
        }}
      ></div>

      {/* Radar scan sweep */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="map-scan-sweep"></div>
      </div>

      {/* ============ TOP HUD BAR ============ */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-3 backdrop-blur-xl border-b"
        style={{
          background: 'rgba(0,72,160,0.25)',
          borderColor: `${primary}40`
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          </div>
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/80 font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ALUMNI.NETWORK / GLOBAL.TRACKING
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: accent }}
          ></span>
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/80"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            SATELLITE.LINK
          </span>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-14 left-4 w-6 h-6 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute top-14 right-4 w-6 h-6 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

      {/* ============ LIVE READOUT (TOP RIGHT) ============ */}
      <div
        className="absolute top-16 right-4 z-30 px-4 py-2.5 backdrop-blur-xl border hidden md:block"
        style={{
          background: 'rgba(5,8,16,0.7)',
          borderColor: `${primary}40`,
          borderRadius: '2px',
          minWidth: '220px'
        }}
      >
        <div
          className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // TARGET.LOCK
        </div>
        {hovered ? (
          <div className="flex items-center gap-2">
            <span className="text-base">{hovered.flag}</span>
            <div>
              <div
                className="text-[11px] font-bold text-white uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {hovered.name}
              </div>
              <div
                className="text-[9px]"
                style={{ color: accent, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {hovered.coords[1].toFixed(4)}°N, {hovered.coords[0].toFixed(4)}°E
              </div>
            </div>
          </div>
        ) : (
          <div
            className="text-[10px] uppercase tracking-widest text-white/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            HOVER.NODE // FOR.DATA
          </div>
        )}
      </div>

      {/* ============ THE MAP ============ */}
      <div className="absolute inset-0 pt-12 pb-2">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 150,
            center: [50, 20]
          }}
          width={1000}
          height={600}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ZoomableGroup zoom={1.5} maxZoom={5} center={[50, 25]}>
            {/* Graticule — radar lat/lon lines */}
            <Graticule
              stroke={secondary}
              strokeWidth={0.4}
              strokeOpacity={0.25}
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
                        cursor: "pointer",
                        transition: "fill 300ms"
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Annotations — Futuristic glass tags */}
            {countryData.map((dst, i) => (
              <Annotation
                key={i}
                subject={dst.coords}
                dx={dst.dx}
                dy={dst.dy}
                connectorProps={{
                  stroke: accent,
                  strokeWidth: 1,
                  strokeLinecap: "round",
                  strokeDasharray: "2 3",
                  strokeOpacity: 0.7
                }}
              >
                <g transform="translate(-55, -17)">
                  {/* Glass panel */}
                  <rect
                    x="0" y="0" width="110" height="34"
                    fill="rgba(5,8,16,0.88)"
                    stroke={primary}
                    strokeWidth="1"
                    rx="2"
                  />
                  {/* Accent left bar */}
                  <rect x="0" y="0" width="3" height="34" fill={accent} />
                  {/* Corner ticks */}
                  <rect x="106" y="0" width="4" height="1" fill={accent} />
                  <rect x="109" y="0" width="1" height="4" fill={accent} />
                  {/* Flag */}
                  <text x="10" y="22" fontSize="14px">{dst.flag}</text>
                  {/* Name */}
                  <text
                    x="32" y="15"
                    fill="#ffffff"
                    fontSize="9px"
                    fontWeight="bold"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {dst.name.toUpperCase()}
                  </text>
                  {/* Status */}
                  <text
                    x="32" y="27"
                    fill={accent}
                    fontSize="7px"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    NODE.ACTIVE
                  </text>
                </g>
              </Annotation>
            ))}

            {/* Markers — pulsing radar nodes */}
            {countryData.map((dst, i) => (
              <Marker key={`marker-${i}`} coordinates={dst.coords}>
                <g
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHovered(dst)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Pulse rings */}
                  <circle
                    r="4"
                    fill="none"
                    stroke={accent}
                    strokeWidth="1"
                    className="alumni-pulse"
                  />
                  <circle
                    r="4"
                    fill="none"
                    stroke={accent}
                    strokeWidth="1"
                    className="alumni-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                  {/* Core dot */}
                  <circle
                    r="3.5"
                    fill={accent}
                    stroke="#050810"
                    strokeWidth="1.5"
                  />
                  {/* Crosshair */}
                  <line x1="-8" y1="0" x2="-5" y2="0" stroke={accent} strokeWidth="1" />
                  <line x1="5" y1="0" x2="8" y2="0" stroke={accent} strokeWidth="1" />
                  <line x1="0" y1="-8" x2="0" y2="-5" stroke={accent} strokeWidth="1" />
                  <line x1="0" y1="5" x2="0" y2="8" stroke={accent} strokeWidth="1" />
                  {/* Invisible hover area */}
                  <circle r="12" fill="transparent" />
                </g>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* ============ BOTTOM LEFT — STATS PANEL ============ */}
      <div
        className="absolute bottom-5 left-5 z-30 flex items-center gap-4 px-5 py-3 backdrop-blur-xl border"
        style={{
          background: 'rgba(5,8,16,0.7)',
          borderColor: `${primary}40`,
          borderRadius: '2px'
        }}
      >
        <div>
          <div
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-0.5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            NODES.ACTIVE
          </div>
          <div
            className="text-2xl font-bold leading-none"
            style={{
              color: accent,
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            {String(countryData.length).padStart(2, '0')}
          </div>
        </div>
        <div className="w-px h-8 bg-white/10"></div>
        <div>
          <div
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-0.5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            NETWORK
          </div>
          <div
            className="text-sm font-bold text-white uppercase leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Global
          </div>
        </div>
        <div className="w-px h-8 bg-white/10"></div>
        <div>
          <div
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-0.5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            STATUS
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accent }}
            ></span>
            <span
              className="text-[10px] font-bold text-white uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              LIVE
            </span>
          </div>
        </div>
      </div>

      {/* ============ BOTTOM RIGHT — CONTROLS HINT ============ */}
      <div
        className="absolute bottom-5 right-5 z-30 px-4 py-2 backdrop-blur-xl border hidden md:block"
        style={{
          background: 'rgba(5,8,16,0.7)',
          borderColor: `${primary}40`,
          borderRadius: '2px'
        }}
      >
        <span
          className="text-[8px] uppercase tracking-[0.2em] text-white/60"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          [SCROLL] ZOOM // [DRAG] PAN
        </span>
      </div>

      {/* ============ ANIMATIONS ============ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes alumniPulse {
          0% { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(4); opacity: 0; }
        }
        .alumni-pulse {
          animation: alumniPulse 2s ease-out infinite;
          transform-origin: center;
          transform-box: fill-box;
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
          background: linear-gradient(90deg, transparent, rgba(251,191,36,0.07), rgba(0,72,160,0.08), transparent);
          animation: mapScanSweep 9s linear infinite;
          pointer-events: none;
        }
      `}} />
    </div>
  );
};

export default AlumniMapGlobal;