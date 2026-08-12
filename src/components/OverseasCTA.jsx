import React from 'react';
import { Link } from 'react-router-dom';

const OverseasCTA = () => {
  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  return (
    <section
      className="py-24 md:py-36 relative overflow-hidden"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: '#050810'
      }}
    >
      {/* ============ BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Background Image */}
        <img
          src="/images_overseas/umroh-study-overseas-2.jpg"
          alt="Umroh Study Overseas"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-110"
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(5,8,16,0.95) 0%, rgba(5,8,16,0.85) 40%, rgba(0,72,160,0.6) 100%)`
          }}
        ></div>

        {/* Circuit Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)'
          }}
        ></div>

        {/* Radial glows */}
        <div
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{ background: secondary }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: accent }}
        ></div>

        {/* Islamic geometric pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="overseas-geo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g stroke={accent} strokeWidth="0.5" fill="none">
                <path d="M60,10 L70,50 L110,60 L70,70 L60,110 L50,70 L10,60 L50,50 Z" />
                <circle cx="60" cy="60" r="25" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#overseas-geo)" />
        </svg>
      </div>

      {/* Top HUD Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-10 py-3 backdrop-blur-xl border-b"
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
            OVERSEAS.CTA / MODULE.06
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
            ENROLLMENT.OPEN
          </span>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-16 left-6 md:left-10 w-6 h-6 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute top-16 right-6 md:right-10 w-6 h-6 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-6 left-6 md:left-10 w-6 h-6 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-6 right-6 md:right-10 w-6 h-6 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

      {/* Decorative plane icon */}
      <i
        className="fas fa-plane-departure absolute -right-8 -bottom-8 text-[240px] md:text-[320px] transform -rotate-12 opacity-[0.03] pointer-events-none"
        style={{ color: accent }}
      ></i>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* ============ LEFT CONTENT ============ */}
          <div className="lg:col-span-3 max-w-3xl">
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
                    [PREMIUM] PROGRAM UNGGULAN AL WAFI
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
                <div className="w-3 h-3 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
              </div>
            </div>

            {/* Arabic calligraphy */}
            <div
              className="text-2xl md:text-3xl text-white/80 mb-3"
              style={{
                fontFamily: "'Amiri', serif",
                textShadow: `0 0 30px ${accent}40`
              }}
              dir="rtl"
            >
              مكة المكرمة • المدينة المنورة
            </div>

            {/* Main Title */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block">Umroh Study</span>
              <span
                className="block mt-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${accent} 0%, #FDE047 50%, ${accent} 100%)`
                }}
              >
                Overseas
              </span>
            </h2>

            {/* Tech divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-16" style={{ background: primary }}></div>
              <div className="h-[2px] w-8" style={{ background: accent }}></div>
              <div className="w-2 h-2 rotate-45" style={{ background: accent }}></div>
              <div className="h-[2px] w-8" style={{ background: accent }}></div>
              <div className="h-[2px] w-16" style={{ background: primary }}></div>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Melaksanakan ibadah umroh sembari menimba ilmu di kampus-kampus terkemuka di Timur Tengah. Sebuah pengalaman komprehensif yang secara khusus memadukan perjalanan spiritual mendalam dengan pengayaan akademik bertaraf internasional di Makkah dan Madinah.
            </p>

            {/* Features mini list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: 'fas fa-kaaba', label: 'Umroh' },
                { icon: 'fas fa-university', label: 'UIM Madinah' },
                { icon: 'fas fa-graduation-cap', label: 'Wisuda' }
              ].map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-3 py-2.5 backdrop-blur-sm border"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: `${primary}30`,
                    borderRadius: '2px'
                  }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center"
                    style={{
                      background: `${accent}15`,
                      borderRadius: '2px'
                    }}
                  >
                    <i
                      className={`${feat.icon} text-[10px]`}
                      style={{ color: accent }}
                    ></i>
                  </div>
                  <span
                    className="text-[10px] uppercase tracking-widest text-white/80 font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <Link
                to="/program-overseas"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                  boxShadow: `0 15px 40px -5px ${primary}60`,
                  borderRadius: '2px'
                }}
              >
                {/* Shimmer effect */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)' }}
                ></span>

                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-80"
                      style={{ borderColor: accent }}></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-80"
                      style={{ borderColor: accent }}></span>

                <span className="relative flex items-center gap-3">
                  <i className="fas fa-compass text-sm" style={{ color: accent }}></i>
                  <span>Eksplorasi Program</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform duration-300"
                     style={{ color: accent }}></i>
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/quran"
                className="group relative inline-flex items-center justify-center px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 border"
                style={{
                  borderColor: `${primary}40`,
                  borderRadius: '2px'
                }}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: accent }}
                  ></span>
                  Lihat Detail
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-500"
                  style={{ background: accent }}
                ></span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t"
                 style={{ borderColor: `${primary}20` }}>
              {[
                { value: '2018', label: 'BERDIRI' },
                { value: '67+', label: 'EKSPEDISI' },
                { value: '1000+', label: 'ALUMNI' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="text-xl font-bold"
                    style={{
                      color: accent,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[9px] uppercase tracking-widest text-white/50 font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.label}
                  </span>
                  {i < 2 && (
                    <div className="w-px h-4 bg-white/10 ml-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ============ RIGHT CONTENT — HUD PANEL ============ */}
          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="relative">
              {/* Stacked decorative frames */}
              <div
                className="absolute -top-5 -right-5 w-full h-full border-2 z-0"
                style={{
                  borderColor: `${accent}20`,
                  borderRadius: '4px'
                }}
              ></div>
              <div
                className="absolute -top-2.5 -right-2.5 w-full h-full border z-0"
                style={{
                  borderColor: `${primary}40`,
                  borderRadius: '4px'
                }}
              ></div>

              {/* Main HUD Panel */}
              <div
                className="relative z-10 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,72,160,0.2) 0%, rgba(30,64,175,0.15) 100%)',
                  border: `1px solid ${primary}40`,
                  borderRadius: '4px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `0 30px 60px -15px ${primary}40`
                }}
              >
                {/* Top tech bar */}
                <div
                  className="flex items-center justify-between px-4 py-2.5 border-b"
                  style={{
                    background: `linear-gradient(90deg, ${primary}50, ${secondary}40)`,
                    borderColor: `${primary}30`
                  }}
                >
                  <div className="flex items-center gap-2">
                    <i
                      className="fas fa-plane-departure text-[11px]"
                      style={{ color: accent }}
                    ></i>
                    <span
                      className="text-[9px] uppercase tracking-[0.3em] text-white font-medium"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      OVERSEAS / STATUS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: accent }}
                    ></span>
                    <span
                      className="text-[8px] uppercase tracking-widest text-white/80"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      ACTIVE
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Destination info */}
                  <div className="mb-6 pb-5 border-b"
                       style={{ borderColor: `${primary}25` }}>
                    <div
                      className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      // DESTINATION
                    </div>
                    <div
                      className="text-2xl text-white font-bold mb-1"
                      style={{ fontFamily: "'Amiri', serif" }}
                      dir="rtl"
                    >
                      الحرمين الشريفين
                    </div>
                    <div
                      className="text-white/70 text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Dua Tanah Suci
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { value: '14', label: 'HARI', icon: 'fa-calendar' },
                      { value: '2', label: 'KOTA', icon: 'fa-city' },
                      { value: '114', label: 'SURAH', icon: 'fa-book-quran' },
                      { value: 'A+', label: 'GRADE', icon: 'fa-star' }
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="p-3 backdrop-blur-sm border"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          borderColor: `${primary}25`,
                          borderRadius: '2px'
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <i
                            className={`${stat.icon} text-[10px]`}
                            style={{ color: accent }}
                          ></i>
                          <span
                            className="text-[8px] uppercase tracking-widest text-white/50"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {stat.label}
                          </span>
                        </div>
                        <div
                          className="text-2xl font-bold"
                          style={{
                            color: accent,
                            fontFamily: "'JetBrains Mono', monospace"
                          }}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {[
                      { icon: 'fa-check-circle', text: 'Visa & Akomodasi Terjamin' },
                      { icon: 'fa-check-circle', text: 'Dauroh Bahasa Arab UIM' },
                      { icon: 'fa-check-circle', text: 'Wisuda Resmi & Sertifikat' },
                      { icon: 'fa-check-circle', text: 'Pembimbing Berpengalaman' }
                    ].map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-white/80 text-[11px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <i
                          className={`fas ${feat.icon} text-[9px]`}
                          style={{ color: accent }}
                        ></i>
                        <span>{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom action */}
                  <Link
                    to="/program-overseas"
                    className="group flex items-center justify-between w-full px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white border transition-all duration-300 hover:bg-white/5"
                    style={{
                      background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                      borderColor: primary,
                      borderRadius: '2px'
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <i className="fas fa-rocket text-[10px]" style={{ color: accent }}></i>
                      DAFTAR SEKARANG
                    </span>
                    <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"
                       style={{ color: accent }}></i>
                  </Link>
                </div>

                {/* Bottom tech footer */}
                <div
                  className="flex items-center justify-between px-4 py-2.5 border-t"
                  style={{
                    background: 'rgba(0,72,160,0.2)',
                    borderColor: `${primary}30`
                  }}
                >
                  <span
                    className="text-[8px] uppercase tracking-widest text-white/50"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    // EST.2018
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                    <span
                      className="text-[8px] uppercase tracking-widest text-white/60"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      CERTIFIED
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating accent indicator */}
              <div
                className="absolute -top-3 -right-3 px-2 py-1 text-[8px] font-mono uppercase tracking-widest z-30 border"
                style={{
                  background: accent,
                  color: '#050810',
                  borderColor: accent,
                  borderRadius: '2px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700
                }}
              >
                <i className="fas fa-star me-1 text-[8px]"></i>
                LIMITED.SLOT
              </div>

              {/* Corner HUD */}
              <div
                className="absolute -bottom-4 -left-4 px-2 py-1 text-[8px] font-mono uppercase tracking-widest z-30 border"
                style={{
                  background: primary,
                  color: 'white',
                  borderColor: primary,
                  borderRadius: '2px',
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                <i className="fas fa-signal me-1 text-[8px]" style={{ color: accent }}></i>
                LIVE.SLOT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverseasCTA;