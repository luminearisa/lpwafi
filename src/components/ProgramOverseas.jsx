import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const overseasImages = Array.from({ length: 67 }, (_, i) => `/images_overseas/umroh-study-overseas-${i + 1}.jpg`);

const ProgramOverseas = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  useEffect(() => {
    window.scrollTo(0, 0);

    // Inject fonts
    const linkId = 'overseas-futuristic-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }

    const duration = 4000;
    const step = 50;
    const increment = (step / duration) * 100;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + increment;
      });
    }, step);

    const imageInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % overseasImages.length);
      setProgress(0);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div
      className="min-h-screen pb-32"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: '#fafbfd'
      }}
    >

      {/* ============ HERO SECTION — IMMERSIVE HUD ============ */}
      <div className="relative w-full h-screen min-h-[700px] overflow-hidden" style={{ background: '#050810' }}>

        {/* Dynamic Background Carousel */}
        <div className="absolute inset-0 z-0">
          {overseasImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                idx === bgIndex ? 'opacity-50' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt="Umroh Study Overseas"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          ))}

          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(5,8,16,0.7) 0%, rgba(5,8,16,0.3) 50%, rgba(250,251,253,1) 100%)`
            }}
          ></div>

          {/* Circuit grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          ></div>

          {/* Radial glows */}
          <div
            className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 animate-pulse"
            style={{ background: primary }}
          ></div>
          <div
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 animate-pulse"
            style={{ background: accent, animationDelay: '1s' }}
          ></div>

          {/* Scan lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)'
            }}
          ></div>
        </div>

        {/* Top HUD Bar */}
        <div
          className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-xl border-b"
          style={{
            background: 'rgba(0,72,160,0.3)',
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
              OVERSEAS.PROGRAM / V3.0
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
              LIVE.FEED
            </span>
          </div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-24 left-6 md:left-10 w-8 h-8 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
        <div className="absolute top-24 right-6 md:right-10 w-8 h-8 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
        <div className="absolute bottom-48 left-6 md:left-10 w-8 h-8 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
        <div className="absolute bottom-48 right-6 md:right-10 w-8 h-8 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <div className="max-w-5xl mx-auto pt-16">
            {/* Badge */}
            <div className="inline-flex items-center mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 border-l-2 border-t-2" style={{ borderColor: accent }}></div>
                <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
              </div>

              <div
                className="px-5 py-2.5 backdrop-blur-xl border relative overflow-hidden"
                style={{
                  background: `${accent}15`,
                  borderColor: `${accent}40`,
                  borderRadius: '2px'
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex items-center">
                    <span
                      className="absolute w-2 h-2 rounded-full animate-ping"
                      style={{ background: accent, opacity: 0.5 }}
                    ></span>
                    <span
                      className="relative w-1.5 h-1.5 rounded-full"
                      style={{ background: accent }}
                    ></span>
                  </span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    [PREMIUM.MODULE] UNGGULAN INTERNASIONAL
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
                <div className="w-3 h-3 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
              </div>
            </div>

            {/* Arabic Calligraphy */}
            <div
              className="text-3xl md:text-4xl text-white/90 mb-4"
              style={{
                fontFamily: "'Amiri', serif",
                textShadow: `0 0 30px ${primary}60`
              }}
              dir="rtl"
            >
              مكة المكرمة • المدينة المنورة
            </div>

            {/* Main Title */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block">UMROH STUDY</span>
              <span
                className="block mt-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${accent} 0%, #FDE047 50%, ${accent} 100%)`
                }}
              >
                OVERSEAS
              </span>
            </h1>

            {/* Tech divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[2px] w-16" style={{ background: primary }}></div>
              <div className="h-[2px] w-8" style={{ background: accent }}></div>
              <div className="w-3 h-3 rotate-45" style={{ background: accent }}></div>
              <div className="h-[2px] w-8" style={{ background: accent }}></div>
              <div className="h-[2px] w-16" style={{ background: primary }}></div>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 px-6 py-5 backdrop-blur-md border"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: 'rgba(5,8,16,0.4)',
                borderColor: `${primary}30`,
                borderRadius: '4px'
              }}
            >
              Perjalanan spiritual mendalam yang dipadukan secara eksklusif dengan pengayaan akademik bertaraf global di Makkah dan Madinah.
            </p>

            {/* Stats HUD Panel */}
            <div
              className="inline-flex flex-wrap justify-center gap-6 md:gap-10 px-8 py-4 backdrop-blur-xl border"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: `${primary}30`,
                borderRadius: '4px'
              }}
            >
              {[
                { value: '2018', label: 'BERDIRI' },
                { value: '67+', label: 'EKSPEDISI' },
                { value: '1000+', label: 'ALUMNI' },
                { value: 'A+', label: 'KUALITAS' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold leading-none mb-1"
                    style={{
                      color: accent,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-white/60 font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Progress Indicator */}
        <div
          className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2 backdrop-blur-xl border z-30"
          style={{
            background: 'rgba(5,8,16,0.6)',
            borderColor: `${primary}30`,
            borderRadius: '2px'
          }}
        >
          <span
            className="text-[9px] uppercase tracking-[0.25em] font-medium text-white/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            FEED
          </span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  setBgIndex(idx * 11);
                  setProgress(0);
                }}
                className="relative h-1 transition-all duration-500 overflow-hidden"
                style={{
                  width: (Math.floor(bgIndex / 11) % 6) === idx ? '28px' : '10px',
                  background: (Math.floor(bgIndex / 11) % 6) === idx ? `${accent}30` : 'rgba(255,255,255,0.2)',
                  borderRadius: '2px'
                }}
                aria-label={`Feed ${idx + 1}`}
              >
                {(Math.floor(bgIndex / 11) % 6) === idx && (
                  <div
                    className="absolute inset-0 transition-all duration-100 ease-linear"
                    style={{
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, ${accent}, ${primary})`,
                      borderRadius: '2px'
                    }}
                  ></div>
                )}
              </button>
            ))}
          </div>
          <span
            className="text-[9px] font-mono font-semibold text-white"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: accent }}
          >
            {String(bgIndex + 1).padStart(2, '0')}/{String(overseasImages.length).padStart(2, '0')}
          </span>
        </div>

        {/* Side coordinate HUD */}
        <div
          className="absolute bottom-28 left-6 md:left-10 px-3 py-1.5 backdrop-blur-xl border z-30 hidden md:block"
          style={{
            background: 'rgba(5,8,16,0.6)',
            borderColor: `${primary}30`,
            borderRadius: '2px'
          }}
        >
          <div
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // COORDINATES
          </div>
          <div
            className="text-[11px] font-mono text-white"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span style={{ color: accent }}>21.3891°</span> N, <span style={{ color: accent }}>39.8579°</span> E
          </div>
        </div>

        <div
          className="absolute bottom-28 right-6 md:right-10 px-3 py-1.5 backdrop-blur-xl border z-30 hidden md:block"
          style={{
            background: 'rgba(5,8,16,0.6)',
            borderColor: `${primary}30`,
            borderRadius: '2px'
          }}
        >
          <div
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // STATUS
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accent }}
            ></span>
            <span
              className="text-[11px] font-mono text-white uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              ENROLLMENT.OPEN
            </span>
          </div>
        </div>
      </div>

      {/* ============ BENTO GRID CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-24 relative z-20">

        {/* Top Feature Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          {/* Main Content Card */}
          <div
            className="md:col-span-2 relative bg-white/90 backdrop-blur-xl p-8 md:p-12 border transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            style={{
              borderColor: `${primary}15`,
              boxShadow: `0 20px 60px -15px ${primary}25`,
              borderRadius: '4px'
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 opacity-40" style={{ borderColor: primary }}></div>
            <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 opacity-40" style={{ borderColor: primary }}></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 opacity-40" style={{ borderColor: primary }}></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 opacity-40" style={{ borderColor: primary }}></div>

            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 w-full h-[2px]"
              style={{ background: `linear-gradient(90deg, ${primary}, ${accent}, transparent)` }}
            ></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: `${accent}20`, borderRadius: '2px' }}>
                <i className="fas fa-star text-[10px]" style={{ color: accent }}></i>
              </div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{ color: primary, fontFamily: "'JetBrains Mono', monospace" }}
              >
                [CORE.MODULE] // TERINTEGRASI
              </span>
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pendidikan & Spiritual<br />
              <span style={{ color: primary }}>Terintegrasi Penuh</span>
            </h2>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-12" style={{ background: primary }}></div>
              <div className="h-[2px] w-6" style={{ background: accent }}></div>
            </div>

            <p
              className="text-gray-600 leading-relaxed text-base md:text-lg font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Melaksanakan ibadah umroh sembari menimba ilmu di kampus-kampus terkemuka di Timur Tengah kini menjadi sebuah pengalaman komprehensif. Program ini memadukan perjalanan spiritual mendalam dengan pengayaan akademik bertaraf internasional di dua kota suci.
            </p>

            {/* Bottom tech footer */}
            <div
              className="mt-8 pt-5 border-t flex items-center justify-between"
              style={{ borderColor: `${primary}15` }}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-[10px]" style={{ color: accent }}></i>
                <span
                  className="text-[9px] uppercase tracking-widest font-medium text-gray-500"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  CERTIFIED.UMROH.ACADEMIC
                </span>
              </div>
              <span
                className="text-[9px] uppercase tracking-widest"
                style={{ color: `${primary}80`, fontFamily: "'JetBrains Mono', monospace" }}
              >
                // 01
              </span>
            </div>
          </div>

          {/* Stats Card - Accent */}
          <div
            className="relative overflow-hidden p-8 md:p-10 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
              boxShadow: `0 20px 60px -15px ${primary}50`,
              borderRadius: '4px'
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 opacity-60" style={{ borderColor: accent }}></div>
            <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 opacity-60" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 opacity-60" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 opacity-60" style={{ borderColor: accent }}></div>

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            ></div>

            {/* Large decorative icon */}
            <i
              className="fas fa-globe absolute -right-8 -bottom-8 text-[180px] opacity-[0.08] transform -rotate-12 pointer-events-none group-hover:rotate-0 transition-transform duration-[2000ms]"
              style={{ color: accent }}
            ></i>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: accent }}
                ></span>
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/80"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  [ESTABLISHED]
                </span>
              </div>

              <div
                className="text-6xl md:text-7xl font-bold text-white mb-2 leading-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                2018
              </div>
              <div
                className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-medium"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                KONSISTEN SEJAK TAHUN
              </div>
            </div>

            <p
              className="relative z-10 text-white/90 font-light leading-relaxed text-sm mt-6 pt-6 border-t"
              style={{
                fontFamily: "'Inter', sans-serif",
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              Telah terbukti menjembatani para peserta untuk merasakan langsung ekosistem pendidikan di Timur Tengah.
            </p>
          </div>
        </div>

        {/* ============ 3 PILLARS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            {
              icon: 'fa-graduation-cap',
              title: 'Aspek Akademik',
              desc: 'Peserta terlibat aktif menjadi pelajar melalui program Dauroh Bahasa Arab intensif di Learning Arabic Universitas Islam Madinah (UIM) yang ditutup dengan prosesi wisuda formal.',
              color: primary,
              num: '01'
            },
            {
              icon: 'fa-kaaba',
              title: 'Aspek Spiritual',
              desc: 'Pelaksanaan umroh, ibadah harian di Masjidil Haram, dan rutinitas Halaqah Al-Qur\'an di Masjid Nabawi secara terstruktur dan terbimbing.',
              color: secondary,
              num: '02'
            },
            {
              icon: 'fa-landmark',
              title: 'Eksplorasi Historis',
              desc: 'Napak tilas sejarah peradaban Islam ke Museum Wahyu, Museum Al Quran, Kota Thaif, Masjid Quba, hingga keajaiban arkeologi di Al Ula.',
              color: primary,
              num: '03'
            }
          ].map((pillar, i) => (
            <div
              key={i}
              className="group relative bg-white/90 backdrop-blur-xl border p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
              style={{
                borderColor: `${pillar.color}15`,
                boxShadow: `0 15px 40px -10px ${pillar.color}15`,
                borderRadius: '4px'
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: pillar.color }}></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: pillar.color }}></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: pillar.color }}></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: pillar.color }}></div>

              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: `linear-gradient(90deg, ${pillar.color}, ${accent})` }}
              ></div>

              {/* Section number */}
              <div
                className="absolute top-4 right-6 text-[10px] font-mono opacity-40 group-hover:opacity-80 transition-opacity"
                style={{
                  color: pillar.color,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                // {pillar.num}
              </div>

              {/* Icon with rotating dashed ring */}
              <div className="relative w-20 h-20 mb-6">
                {/* Dashed rotating ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 group-hover:opacity-80 group-hover:rotate-180 transition-all duration-1000"
                  style={{ borderColor: pillar.color }}
                ></div>

                {/* Glow */}
                <div
                  className="absolute inset-2 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"
                  style={{ background: pillar.color }}
                ></div>

                {/* Icon container */}
                <div
                  className="relative w-full h-full flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${pillar.color}10`,
                    border: `1px solid ${pillar.color}30`
                  }}
                >
                  <i
                    className={`fas ${pillar.icon} text-2xl transition-all duration-500`}
                    style={{ color: pillar.color }}
                  ></i>
                </div>

                {/* Accent dot */}
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                  style={{ background: accent }}
                ></div>
              </div>

              <h3
                className="text-xl font-bold text-gray-900 mb-3 tracking-wide group-hover:text-[#0048A0] transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {pillar.title}
              </h3>

              <div className="h-px w-10 mb-4" style={{ background: accent }}></div>

              <p
                className="text-gray-500 font-light leading-relaxed text-sm flex-grow"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {pillar.desc}
              </p>

              {/* Bottom tech footer */}
              <div
                className="flex items-center justify-between mt-6 pt-4 border-t"
                style={{ borderColor: `${pillar.color}15` }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                  <span
                    className="text-[8px] uppercase tracking-widest font-medium"
                    style={{
                      color: `${pillar.color}80`,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    PILLAR.{pillar.num}
                  </span>
                </div>
                <div className="flex items-center gap-1 group-hover:gap-2 transition-all">
                  <div className="h-px w-0 group-hover:w-4 transition-all duration-500" style={{ background: accent }}></div>
                  <i
                    className="fas fa-arrow-right text-[8px] group-hover:translate-x-1 transition-transform"
                    style={{ color: pillar.color }}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============ PREMIUM AGENDA — TIMELINE ============ */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [ITINERARY.SYS]
              </span>
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Rangkaian Perjalanan
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-16" style={{ background: primary }}></div>
              <div className="w-2 h-2 rotate-45" style={{ background: accent }}></div>
              <div className="h-[2px] w-16" style={{ background: primary }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Makkah Card */}
            <div
              className="group relative bg-white/90 backdrop-blur-xl p-8 md:p-10 border overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                borderColor: `${primary}20`,
                boxShadow: `0 20px 50px -10px ${primary}20`,
                borderRadius: '4px'
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 opacity-40" style={{ borderColor: primary }}></div>
              <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 opacity-40" style={{ borderColor: primary }}></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 opacity-40" style={{ borderColor: primary }}></div>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 opacity-40" style={{ borderColor: primary }}></div>

              {/* Radial glow */}
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-10 pointer-events-none"
                style={{ background: primary }}
              ></div>

              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 w-full h-[2px]"
                style={{ background: `linear-gradient(90deg, ${primary}, ${accent}, transparent)` }}
              ></div>

              {/* Phase badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm border mb-6"
                style={{
                  background: `${primary}10`,
                  borderColor: `${primary}30`,
                  borderRadius: '2px'
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: accent }}
                ></span>
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: primary, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  PHASE.01 // FASE PERTAMA
                </span>
              </div>

              {/* Arabic + Title */}
              <div
                className="text-2xl mb-2 text-right"
                style={{
                  fontFamily: "'Amiri', serif",
                  color: `${primary}60`
                }}
                dir="rtl"
              >
                مكة المكرمة
              </div>

              <h3
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Kota <span style={{ color: primary }}>Makkah</span>
              </h3>

              {/* Timeline Items */}
              <ul className="space-y-6 relative z-10">
                {[
                  { icon: 'fa-pray', title: 'Ibadah Inti Umroh', desc: 'Salat Jumat di Masjidil Haram dilanjutkan dengan ibadah inti Umroh pada hari kedatangan.', active: true },
                  { icon: 'fa-map-marked-alt', title: 'Eksplorasi Edukasi', desc: 'Tour Kota Makkah, kunjungan ke Museum Wahyu, dan perjalanan menelusuri sejarah Kota Thaif.', active: false },
                  { icon: 'fa-university', title: 'Kunjungan Akademik', desc: 'Study Tour eksklusif ke Universitas Umm Al-Qura sebagai pengenalan ekosistem kampus Arab Saudi.', active: false }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group/item relative">
                    {/* Vertical timeline connector */}
                    {idx < 2 && (
                      <div
                        className="absolute left-[18px] top-12 w-[2px] h-[calc(100%-8px)]"
                        style={{ background: `linear-gradient(180deg, ${primary}40, transparent)` }}
                      ></div>
                    )}

                    <div
                      className="relative w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-500 group-hover/item:scale-110 group-hover/item:-translate-y-0.5 z-10"
                      style={{
                        background: item.active
                          ? `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`
                          : 'white',
                        border: item.active ? 'none' : `1px solid ${primary}30`,
                        borderRadius: '4px',
                        boxShadow: item.active ? `0 10px 25px -5px ${primary}50` : `0 4px 12px -2px ${primary}15`
                      }}
                    >
                      <i
                        className={`fas ${item.icon} text-sm`}
                        style={{ color: item.active ? 'white' : primary }}
                      ></i>
                      {item.active && (
                        <div
                          className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                          style={{ background: accent }}
                        ></div>
                      )}
                    </div>

                    <div className="ml-5 flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[9px] font-mono opacity-60"
                          style={{ color: primary, fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-grow" style={{ background: `${primary}15` }}></div>
                      </div>
                      <h4
                        className="text-base md:text-lg font-bold text-gray-900 mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-gray-500 font-light leading-relaxed text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Madinah Card */}
            <div
              className="group relative bg-white/90 backdrop-blur-xl p-8 md:p-10 border overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                borderColor: `${secondary}20`,
                boxShadow: `0 20px 50px -10px ${secondary}20`,
                borderRadius: '4px'
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 opacity-40" style={{ borderColor: secondary }}></div>
              <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 opacity-40" style={{ borderColor: secondary }}></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 opacity-40" style={{ borderColor: secondary }}></div>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 opacity-40" style={{ borderColor: secondary }}></div>

              {/* Radial glow */}
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-10 pointer-events-none"
                style={{ background: secondary }}
              ></div>

              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 w-full h-[2px]"
                style={{ background: `linear-gradient(90deg, ${secondary}, ${accent}, transparent)` }}
              ></div>

              {/* Phase badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm border mb-6"
                style={{
                  background: `${secondary}10`,
                  borderColor: `${secondary}30`,
                  borderRadius: '2px'
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: accent }}
                ></span>
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: secondary, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  PHASE.02 // FASE KEDUA
                </span>
              </div>

              {/* Arabic + Title */}
              <div
                className="text-2xl mb-2 text-right"
                style={{
                  fontFamily: "'Amiri', serif",
                  color: `${secondary}60`
                }}
                dir="rtl"
              >
                المدينة المنورة
              </div>

              <h3
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Kota <span style={{ color: secondary }}>Madinah</span>
              </h3>

              {/* Timeline Items */}
              <ul className="space-y-6 relative z-10">
                {[
                  { icon: 'fa-language', title: 'Dauroh Akademik', desc: 'Dauroh Bahasa Arab intensif di Learning Arabic UIM dan Halaqah Al-Qur\'an di Masjid Nabawi.', active: true },
                  { icon: 'fa-mosque', title: 'Ziarah & Spiritual', desc: 'Ziarah Baqi, Saqifah Bani Saidah, Quba Safari Night, dan jadwal khusus Raudhah.', active: false },
                  { icon: 'fa-user-graduate', title: 'Prosesi Kelulusan', desc: 'Diakhiri dengan Wisuda Dauroh Bahasa Arab yang megah dan Study Tour ke Universitas Taiba.', active: false }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group/item relative">
                    {idx < 2 && (
                      <div
                        className="absolute left-[18px] top-12 w-[2px] h-[calc(100%-8px)]"
                        style={{ background: `linear-gradient(180deg, ${secondary}40, transparent)` }}
                      ></div>
                    )}

                    <div
                      className="relative w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-500 group-hover/item:scale-110 group-hover/item:-translate-y-0.5 z-10"
                      style={{
                        background: item.active
                          ? `linear-gradient(135deg, ${secondary} 0%, ${primary} 100%)`
                          : 'white',
                        border: item.active ? 'none' : `1px solid ${secondary}30`,
                        borderRadius: '4px',
                        boxShadow: item.active ? `0 10px 25px -5px ${secondary}50` : `0 4px 12px -2px ${secondary}15`
                      }}
                    >
                      <i
                        className={`fas ${item.icon} text-sm`}
                        style={{ color: item.active ? 'white' : secondary }}
                      ></i>
                      {item.active && (
                        <div
                          className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                          style={{ background: accent }}
                        ></div>
                      )}
                    </div>

                    <div className="ml-5 flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[9px] font-mono opacity-60"
                          style={{ color: secondary, fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-grow" style={{ background: `${secondary}15` }}></div>
                      </div>
                      <h4
                        className="text-base md:text-lg font-bold text-gray-900 mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-gray-500 font-light leading-relaxed text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============ GALLERY MASONRY ============ */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.3em]"
                  style={{
                    color: accent,
                    fontFamily: "'JetBrains Mono', monospace" }}
                >
                  [GALLERY.SYS]
                </span>
                <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Potret Perjalanan
              </h2>
              <p
                className="text-gray-500 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Momen berharga selama Umroh Study Overseas
              </p>
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                boxShadow: `0 10px 30px -5px ${primary}40`,
                borderRadius: '2px'
              }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)' }}
              ></span>
              <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-80" style={{ borderColor: accent }}></span>
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-80" style={{ borderColor: accent }}></span>
              <span className="relative flex items-center gap-2">
                Daftar Sekarang
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 5, span: 'col-span-2 row-span-2', h: 'h-[400px]', label: 'FEATURED' },
              { src: 6, span: '', h: 'h-[192px]', label: 'DOC.02' },
              { src: 7, span: '', h: 'h-[192px]', label: 'DOC.03' },
              { src: 8, span: '', h: 'h-[192px]', label: 'DOC.04' },
              { src: 9, span: '', h: 'h-[192px]', label: 'DOC.05' }
            ].map((img, idx) => (
              <div
                key={idx}
                className={`${img.span} ${img.h} rounded overflow-hidden relative group cursor-pointer`}
                style={{ borderRadius: '4px' }}
              >
                <img
                  src={`/images_overseas/umroh-study-overseas-${img.src}.jpg`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                  alt={`Gallery ${img.src}`}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x600/${primary.replace('#', '')}/ffffff?text=Overseas+${img.src}`;
                  }}
                />

                {/* Tech scan lines */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,72,160,0.15) 0px, rgba(0,72,160,0.15) 1px, transparent 1px, transparent 4px)'
                  }}
                ></div>

                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: accent }}></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: accent }}></div>

                {/* Top tech label */}
                <div
                  className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-2 backdrop-blur-xl translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500"
                  style={{ background: 'rgba(0,72,160,0.85)' }}
                >
                  <span
                    className="text-[8px] uppercase tracking-[0.25em] text-white font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    IMG.{String(img.src).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: accent }}></span>
                    <span
                      className="text-[8px] uppercase tracking-widest text-white font-mono"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {img.label}
                    </span>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Bottom caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div
                    className="text-[9px] uppercase tracking-[0.25em] text-white/60 mb-1 font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    // MOMENT
                  </div>
                  <div
                    className="text-white text-sm font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Overseas Journey
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ============ INFINITE SCROLL — TECH MARQUEE ============ */}
      <div
        className="mt-10 overflow-hidden py-12 relative"
        style={{
          background: 'linear-gradient(135deg, #050810 0%, #0a0f1c 100%)'
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Top HUD bar */}
        <div
          className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-3 backdrop-blur-xl border-b"
          style={{
            background: 'rgba(0,72,160,0.3)',
            borderColor: `${primary}40`
          }}
        >
          <div className="flex items-center gap-3">
            <i className="fas fa-photo-film text-[10px]" style={{ color: accent }}></i>
            <span
              className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/80 font-medium"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              [ARCHIVE.STREAM] / LIVE.MEMORIES
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accent }}
            ></span>
            <span
              className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              STREAMING
            </span>
          </div>
        </div>

        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 w-40 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #050810, transparent)' }}
        ></div>
        <div
          className="absolute inset-y-0 right-0 w-40 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #050810, transparent)' }}
        ></div>

        <div className="flex w-max animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused] pt-14 px-4">
          {[...Array(2)].flatMap(() =>
            [12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((num, idx) => (
              <div
                key={`${num}-${idx}-${Math.random()}`}
                className="w-72 h-56 mx-3 shrink-0 group relative overflow-hidden"
                style={{
                  border: `1px solid ${primary}30`,
                  borderRadius: '4px',
                  boxShadow: `0 10px 30px -10px ${primary}30`
                }}
              >
                <img
                  src={`/images_overseas/umroh-study-overseas-${num}.jpg`}
                  alt={`Archive ${num}`}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/${primary.replace('#', '')}/ffffff?text=Archive+${num}`;
                  }}
                />

                {/* Scan lines */}
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,72,160,0.15) 0px, rgba(0,72,160,0.15) 1px, transparent 1px, transparent 4px)'
                  }}
                ></div>

                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t z-20" style={{ borderColor: accent }}></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t z-20" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b z-20" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b z-20" style={{ borderColor: accent }}></div>

                {/* Frame counter */}
                <div
                  className="absolute top-2 right-8 px-2 py-0.5 backdrop-blur-md z-20"
                  style={{
                    background: 'rgba(0,72,160,0.8)',
                    borderRadius: '2px'
                  }}
                >
                  <span
                    className="text-[8px] font-mono text-white font-bold"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    FR.{String(num).padStart(3, '0')}
                  </span>
                </div>

                {/* Bottom caption */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 backdrop-blur-md z-20"
                  style={{ background: 'rgba(0,72,160,0.7)' }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[8px] uppercase tracking-widest text-white/70 font-mono"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      // OVERSEAS
                    </span>
                    <span
                      className="w-1 h-1 rounded-full animate-pulse"
                      style={{ background: accent }}
                    ></span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </div>
  );
};

export default ProgramOverseas;