import React from 'react';
import { useLanguage } from '../LanguageContext';

const Programs = ({ data }) => {
  const { t } = useLanguage();

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const programsList = Array.isArray(t('programs.list')) ? t('programs.list') : [];

  const getIcon = (programId) => {
    const icons = {
      sdtq: 'fa-child',
      smp: 'fa-graduation-cap',
      sma: 'fa-user-graduate',
      overseas: 'fa-globe'
    };
    return icons[programId] || 'fa-book';
  };

  return (
    <section
      id="programs"
      className="py-32 relative overflow-hidden bg-[#fafbfd]"
      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    >
      {/* ============ FUTURISTIC BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit Grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `linear-gradient(${primary}12 1px, transparent 1px), linear-gradient(90deg, ${primary}12 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)'
          }}
        ></div>

        {/* Dot Matrix */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${secondary}25 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Radial Glows */}
        <div
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10"
          style={{ background: accent }}
        ></div>

        {/* Diagonal scan lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 10px)'
          }}
        ></div>

        {/* Fade edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafbfd] via-transparent to-[#fafbfd] opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============ EDITORIAL HEADER — HUD STYLE ============ */}
        <div className="text-center mb-24">
          {/* HUD Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex items-center">
              <div className="w-3 h-3 border-l-2 border-t-2" style={{ borderColor: accent }}></div>
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
            </div>

            <div
              className="px-5 py-2.5 backdrop-blur-xl border relative"
              style={{
                background: 'rgba(255,255,255,0.6)',
                borderColor: `${primary}25`,
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
                  className="text-[9px] font-bold uppercase tracking-[0.3em]"
                  style={{
                    color: primary,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  [SYS.02] {t('programs.header.badge')}
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
              <div className="w-3 h-3 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.1] text-gray-900"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t('programs.header.title')}
          </h2>

          {/* Tech divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, transparent, ${primary})` }}></div>
            <div className="w-2 h-2 rotate-45" style={{ background: accent }}></div>
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, ${primary}, transparent)` }}></div>
          </div>

          <p
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t('programs.header.desc')}
          </p>
        </div>

        {/* ============ PROGRAMS GRID — TECH CARDS ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {programsList.map((program, index) => {
            const isPrimary = index % 2 === 0;
            const themeColor = isPrimary ? primary : secondary;
            const themeBg = isPrimary ? `${primary}10` : `${secondary}10`;

            return (
              <div
                key={program.id}
                className="group relative bg-white/80 backdrop-blur-xl border p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
                style={{
                  borderColor: `${themeColor}20`,
                  boxShadow: `0 10px 30px -5px ${themeColor}15`,
                  borderRadius: '4px'
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: themeColor }}></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: themeColor }}></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: themeColor }}></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: themeColor }}></div>

                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                  style={{ background: `linear-gradient(90deg, ${themeColor}, ${accent})` }}
                ></div>

                {/* Section number */}
                <div
                  className="absolute top-4 right-6 text-[10px] font-mono opacity-40 group-hover:opacity-80 transition-opacity"
                  style={{
                    color: themeColor,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  // {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon with rotating ring */}
                <div className="relative w-16 h-16 mb-8">
                  <div
                    className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"
                    style={{ background: themeColor, filter: 'blur(10px)' }}
                  ></div>
                  <div
                    className="relative w-16 h-16 flex items-center justify-center rounded-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-105"
                    style={{
                      background: themeBg,
                      border: `1px solid ${themeColor}30`
                    }}
                  >
                    <i
                      className={`fas ${getIcon(program.id)} text-2xl transition-all duration-500 group-hover:scale-110`}
                      style={{ color: themeColor }}
                    ></i>
                  </div>
                  {/* Accent dot */}
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                    style={{ background: accent }}
                  ></div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-gray-900 mb-3 tracking-wide group-hover:text-[#0048A0] transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {program.name}
                </h3>

                {/* Accent line */}
                <div className="h-px w-10 mb-4" style={{ background: accent }}></div>

                {/* Description */}
                <p
                  className="text-gray-500 leading-relaxed text-[13px] font-light flex-grow mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {program.description}
                </p>

                {/* Variants / Tags */}
                {program.variants && (
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {program.variants.map((variant, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest border transition-all duration-300"
                        style={{
                          color: themeColor,
                          borderColor: `${themeColor}30`,
                          background: `${themeColor}08`,
                          borderRadius: '2px',
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech footer */}
                <div className="flex items-center justify-between pt-4 border-t"
                     style={{ borderColor: `${themeColor}15` }}>
                  <span
                    className="text-[8px] uppercase tracking-widest font-medium"
                    style={{
                      color: `${themeColor}80`,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    PROGRAM.ID
                  </span>
                  <div className="flex items-center gap-1 group-hover:gap-2 transition-all">
                    <div className="h-px w-0 group-hover:w-4 transition-all duration-500" style={{ background: accent }}></div>
                    <i
                      className="fas fa-arrow-right text-[8px] group-hover:translate-x-1 transition-transform"
                      style={{ color: themeColor }}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============ SPECIAL PROGRAM HIGHLIGHT — OVERSEAS ============ */}
        <div
          className="mb-32 flex flex-col lg:flex-row overflow-hidden relative"
          style={{
            borderRadius: '4px',
            boxShadow: `0 30px 80px -20px ${primary}25`
          }}
        >
          {/* Left Content (Text) - Dark HUD Panel */}
          <div
            className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #050810 0%, #0a0f1c 100%)',
              minHeight: '500px'
            }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-30"
              style={{ background: primary }}
            ></div>
            <div
              className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-[100px] opacity-20"
              style={{ background: secondary }}
            ></div>

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            ></div>

            {/* Diagonal scan lines */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 8px)'
              }}
            ></div>

            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

            {/* Large decorative icon */}
            <i
              className="fas fa-globe absolute -right-8 -bottom-8 text-[220px] opacity-[0.03] transform -rotate-12 pointer-events-none"
              style={{ color: accent }}
            ></i>

            <div className="relative z-10 text-white">
              {/* HUD Badge */}
              <div className="inline-flex items-center mb-6">
                <div
                  className="px-4 py-2 backdrop-blur-xl border flex items-center gap-2.5"
                  style={{
                    background: `${accent}15`,
                    borderColor: `${accent}40`,
                    borderRadius: '2px'
                  }}
                >
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
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{
                      color: accent,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    [FEATURED] {t('programs.overseas.badge')}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t('programs.overseas.title')}
              </h3>

              {/* Subtitle with accent */}
              <p
                className="text-sm uppercase tracking-[0.3em] mb-6 font-semibold"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                {t('programs.overseas.subtitle')}
              </p>

              {/* Tech divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-16" style={{ background: primary }}></div>
                <div className="h-[2px] w-6" style={{ background: accent }}></div>
              </div>

              <p
                className="text-gray-400 font-light leading-relaxed mb-10 text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('programs.overseas.desc')}
              </p>

              {/* Feature Icons */}
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t pt-8"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                {[
                  { icon: 'fa-mosque', label: t('programs.overseas.features.uim') },
                  { icon: 'fa-kaaba', label: t('programs.overseas.features.umrah') },
                  { icon: 'fa-users', label: t('programs.overseas.features.guide') }
                ].map((feature, i) => (
                  <div key={i} className="group/feat">
                    <div className="relative w-12 h-12 mb-3">
                      <div
                        className="absolute inset-0 rounded-full blur-lg opacity-40 group-hover/feat:opacity-70 transition-opacity"
                        style={{ background: accent }}
                      ></div>
                      <div
                        className="relative w-12 h-12 flex items-center justify-center rounded-lg group-hover/feat:-translate-y-1 transition-all duration-300"
                        style={{
                          background: `${accent}15`,
                          border: `1px solid ${accent}40`
                        }}
                      >
                        <i
                          className={`fas ${feature.icon} text-base`}
                          style={{ color: accent }}
                        ></i>
                      </div>
                    </div>
                    <div
                      className="text-[9px] text-gray-300 uppercase tracking-widest font-semibold leading-relaxed"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content (Image) - HUD Frame */}
          <div
            className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
            style={{ background: '#0a0f1c' }}
          >
            {/* Stacked decorative frames */}
            <div
              className="absolute inset-0 border-2 z-0 m-4"
              style={{
                borderColor: `${accent}15`,
                borderRadius: '4px'
              }}
            ></div>
            <div
              className="absolute inset-0 border z-0 m-2"
              style={{
                borderColor: `${primary}30`,
                borderRadius: '4px'
              }}
            ></div>

            <img
              src={data?.images?.uim || "/placeholder-uim.jpg"}
              alt="Study Overseas UIM"
              className="absolute inset-0 w-full h-full object-cover grayscale-[25%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms]"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/800x800/${primary.replace('#', '')}/ffffff?text=Study+Overseas+UIM`;
              }}
            />

            {/* Tech scan lines */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,72,160,0.15) 0px, rgba(0,72,160,0.15) 1px, transparent 1px, transparent 4px)'
              }}
            ></div>

            {/* Top HUD bar */}
            <div
              className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2.5 backdrop-blur-xl"
              style={{ background: 'rgba(0,72,160,0.85)' }}
            >
              <div className="flex items-center gap-2">
                <i
                  className="fas fa-plane-departure text-white text-[10px]"
                  style={{ color: accent }}
                ></i>
                <span
                  className="text-[9px] uppercase tracking-[0.25em] font-bold text-white"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  OVERSEAS.PROGRAM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: accent }}
                ></span>
                <span
                  className="text-[8px] uppercase tracking-widest text-white"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  LIVE
                </span>
              </div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-14 left-3 w-5 h-5 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute top-14 right-3 w-5 h-5 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

            {/* Bottom data overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 z-20 p-5"
            >
              <div
                className="backdrop-blur-xl p-4 border"
                style={{
                  background: 'rgba(0,72,160,0.6)',
                  borderColor: `${primary}40`,
                  borderRadius: '4px'
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-[8px] uppercase tracking-[0.25em] text-white/60 mb-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      // DESTINATION
                    </div>
                    <div
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      University of Madinah
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm border"
                    style={{
                      background: `${accent}20`,
                      borderColor: `${accent}40`,
                      borderRadius: '2px'
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: accent }}
                    ></span>
                    <span
                      className="text-[9px] uppercase tracking-widest text-white font-bold"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      UIM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============ METHOD HIGHLIGHT — HUD GRID ============ */}
        <div
          className="pt-20 border-t"
          style={{ borderColor: `${primary}15` }}
        >
          {/* Section header */}
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
                [METHOD.PROTOCOL]
              </span>
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pendekatan Terintegrasi
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12" style={{ background: primary }}></div>
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: accent }}></div>
              <div className="h-px w-12" style={{ background: primary }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-brain',
                title: t('programs.methods.active.title'),
                desc: t('programs.methods.active.desc'),
                color: primary,
                num: '01'
              },
              {
                icon: 'fa-heart',
                title: t('programs.methods.islamic.title'),
                desc: t('programs.methods.islamic.desc'),
                color: secondary,
                num: '02'
              },
              {
                icon: 'fa-globe',
                title: t('programs.methods.global.title'),
                desc: t('programs.methods.global.desc'),
                color: primary,
                num: '03'
              }
            ].map((method, i) => (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-xl border p-8 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{
                  borderColor: `${method.color}15`,
                  boxShadow: `0 10px 30px -5px ${method.color}10`,
                  borderRadius: '4px'
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 opacity-30 group-hover:opacity-100 transition-opacity" style={{ borderColor: method.color }}></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 opacity-30 group-hover:opacity-100 transition-opacity" style={{ borderColor: method.color }}></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 opacity-30 group-hover:opacity-100 transition-opacity" style={{ borderColor: method.color }}></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 opacity-30 group-hover:opacity-100 transition-opacity" style={{ borderColor: method.color }}></div>

                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                  style={{ background: `linear-gradient(90deg, ${method.color}, ${accent})` }}
                ></div>

                {/* Section number */}
                <div
                  className="absolute top-4 right-6 text-[10px] font-mono opacity-40 group-hover:opacity-80 transition-opacity"
                  style={{
                    color: method.color,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  // {method.num}
                </div>

                {/* Icon with rotating dashed ring */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Dashed rotating ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 group-hover:opacity-80 group-hover:rotate-180 transition-all duration-1000"
                    style={{ borderColor: method.color }}
                  ></div>

                  {/* Glow */}
                  <div
                    className="absolute inset-2 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"
                    style={{ background: method.color }}
                  ></div>

                  {/* Icon container */}
                  <div
                    className="relative w-full h-full flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${method.color}10`,
                      border: `1px solid ${method.color}30`
                    }}
                  >
                    <i
                      className={`fas ${method.icon} text-2xl transition-all duration-500`}
                      style={{ color: method.color }}
                    ></i>
                  </div>

                  {/* Accent dot */}
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                    style={{ background: accent }}
                  ></div>
                </div>

                {/* Title */}
                <h4
                  className="text-xl font-bold text-gray-900 mb-4 tracking-wide group-hover:text-[#0048A0] transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {method.title}
                </h4>

                {/* Accent line */}
                <div className="h-px w-10 mx-auto mb-4" style={{ background: accent }}></div>

                {/* Description */}
                <p
                  className="text-gray-500 font-light leading-relaxed text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {method.desc}
                </p>

                {/* Bottom tech footer */}
                <div
                  className="flex items-center justify-center gap-2 mt-6 pt-4 border-t"
                  style={{ borderColor: `${method.color}15` }}
                >
                  <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                  <span
                    className="text-[8px] uppercase tracking-widest font-medium"
                    style={{
                      color: `${method.color}80`,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    METHOD.{method.num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;