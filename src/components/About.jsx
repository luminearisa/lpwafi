import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = ({ data }) => {
  const { t } = useLanguage();

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const missionList = Array.isArray(t('about.content.mission')) ? t('about.content.mission') : [];
  const featuresList = Array.isArray(t('about.features_list')) ? t('about.features_list') : [];

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-[#fafbfd]"
      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    >
      {/* ============ FUTURISTIC BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Hex/Circuit Pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(${primary}15 1px, transparent 1px), linear-gradient(90deg, ${primary}15 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)'
          }}
        ></div>

        {/* Dot Matrix Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${secondary}30 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Radial Glows */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10"
          style={{ background: accent }}
        ></div>

        {/* Diagonal scan lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 10px)'
          }}
        ></div>

        {/* Fade gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafbfd] via-transparent to-[#fafbfd] opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============ EDITORIAL HEADER — HUD STYLE ============ */}
        <div className="text-center mb-24">
          {/* HUD Badge */}
          <div className="inline-flex items-center justify-center mb-8 group">
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
                <span
                  className="relative flex items-center"
                >
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
                  [SYS.01] {t('about.header.badge')}
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
              <div className="w-3 h-3 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
            </div>
          </div>

          {/* Title with gradient */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="block text-gray-900">{t('about.header.title')}</span>
          </h2>

          {/* Decorative tech divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, transparent, ${primary})` }}></div>
            <div className="w-2 h-2 rotate-45" style={{ background: accent }}></div>
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, ${primary}, transparent)` }}></div>
          </div>

          <p
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t('about.header.desc')}
          </p>

          {/* YouTube Video — HUD Frame */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div
              className="relative aspect-video w-full overflow-hidden border group"
              style={{
                borderColor: `${primary}20`,
                borderRadius: '4px',
                boxShadow: `0 30px 80px -20px ${primary}25`
              }}
            >
              {/* Top tech bar */}
              <div
                className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2 backdrop-blur-xl border-b"
                style={{
                  background: 'rgba(0,72,160,0.85)',
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
                    className="text-[9px] uppercase tracking-[0.3em] text-white font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    CAMPUS.TOUR / 4K
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: accent }}
                  ></span>
                  <span
                    className="text-[9px] uppercase tracking-widest text-white"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    LIVE
                  </span>
                </div>
              </div>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fyApB6EqMvA"
                title="YouTube video player"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

              {/* Corner brackets */}
              <div className="absolute top-8 left-2 w-4 h-4 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
              <div className="absolute top-8 right-2 w-4 h-4 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            </div>
          </div>
        </div>

        {/* ============ VISION & MISSION — TECH CARDS ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">

          {/* Vision Card */}
          <div
            className="group relative bg-white/80 backdrop-blur-xl p-10 md:p-14 border transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            style={{
              borderColor: `${primary}15`,
              boxShadow: `0 20px 50px -10px ${primary}15`,
              borderRadius: '4px'
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 opacity-40" style={{ borderColor: primary }}></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 opacity-40" style={{ borderColor: primary }}></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 opacity-40" style={{ borderColor: primary }}></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 opacity-40" style={{ borderColor: primary }}></div>

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
              style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}
            ></div>

            {/* Section number */}
            <div
              className="absolute top-4 right-6 text-[10px] font-mono opacity-40 group-hover:opacity-80 transition-opacity"
              style={{
                color: primary,
                fontFamily: "'JetBrains Mono', monospace"
              }}
            >
              // 01
            </div>

            {/* Icon with rotating ring */}
            <div className="relative w-16 h-16 mb-8">
              <div
                className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"
                style={{ background: primary, filter: 'blur(10px)' }}
              ></div>
              <div
                className="relative w-16 h-16 flex items-center justify-center rounded-lg transition-all duration-500 group-hover:rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                  boxShadow: `0 10px 25px -5px ${primary}50`
                }}
              >
                <i className="fas fa-eye text-white text-xl"></i>
              </div>
              {/* Accent dot */}
              <div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                style={{ background: accent }}
              ></div>
            </div>

            <h3
              className="text-2xl md:text-[1.75rem] font-bold mb-6 uppercase tracking-wider"
              style={{
                color: primary,
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              {t('about.vision_title')}
            </h3>

            <div className="h-px w-12 mb-6" style={{ background: accent }}></div>

            <p
              className="text-gray-600 leading-[1.85] text-base md:text-[1.05rem] font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('about.content.vision')}
            </p>

            {/* Bottom tech label */}
            <div
              className="mt-8 flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest"
              style={{ color: `${primary}80`, fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-4 h-px" style={{ background: primary }}></span>
              VISION.DECLARATION
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="group relative bg-white/80 backdrop-blur-xl p-10 md:p-14 border transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            style={{
              borderColor: `${secondary}15`,
              boxShadow: `0 20px 50px -10px ${secondary}15`,
              borderRadius: '4px'
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 opacity-40" style={{ borderColor: secondary }}></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 opacity-40" style={{ borderColor: secondary }}></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 opacity-40" style={{ borderColor: secondary }}></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 opacity-40" style={{ borderColor: secondary }}></div>

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
              style={{ background: `linear-gradient(90deg, ${secondary}, ${accent})` }}
            ></div>

            {/* Section number */}
            <div
              className="absolute top-4 right-6 text-[10px] font-mono opacity-40 group-hover:opacity-80 transition-opacity"
              style={{
                color: secondary,
                fontFamily: "'JetBrains Mono', monospace"
              }}
            >
              // 02
            </div>

            {/* Icon */}
            <div className="relative w-16 h-16 mb-8">
              <div
                className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"
                style={{ background: secondary, filter: 'blur(10px)' }}
              ></div>
              <div
                className="relative w-16 h-16 flex items-center justify-center rounded-lg transition-all duration-500 group-hover:-rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${secondary} 0%, ${primary} 100%)`,
                  boxShadow: `0 10px 25px -5px ${secondary}50`
                }}
              >
                <i className="fas fa-bullseye text-white text-xl"></i>
              </div>
              <div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                style={{ background: accent, animationDelay: '0.5s' }}
              ></div>
            </div>

            <h3
              className="text-2xl md:text-[1.75rem] font-bold mb-8 uppercase tracking-wider"
              style={{
                color: secondary,
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              {t('about.mission_title')}
            </h3>

            <ul className="space-y-4">
              {missionList.map((item, index) => (
                <li key={index} className="flex items-start group/item">
                  <div className="flex items-center gap-3 shrink-0 mt-1 me-4">
                    <div
                      className="w-7 h-7 flex items-center justify-center relative"
                      style={{
                        background: `${accent}15`,
                        borderRadius: '2px'
                      }}
                    >
                      <span
                        className="text-[9px] font-bold"
                        style={{
                          color: accent,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="w-4 h-px" style={{ background: `${accent}60` }}></div>
                  </div>
                  <span
                    className="text-gray-600 leading-[1.75] font-light group-hover/item:text-gray-900 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest"
              style={{ color: `${secondary}80`, fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-4 h-px" style={{ background: secondary }}></span>
              MISSION.PROTOCOL
            </div>
          </div>
        </div>

        {/* ============ NATIVE TEACHERS — HUD GRID ============ */}
        {featuresList[0] && (() => {
          const native = featuresList[0];
          const teachers = Array.isArray(t('about.native_speakers')) ? t('about.native_speakers') : [];
          return (
            <div className="mb-32">
              {/* Header */}
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
                    [MODULE.03]
                  </span>
                  <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {native.title}
                </h3>

                <p
                  className="text-gray-500 text-lg max-w-2xl mx-auto font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {native.description}
                </p>

                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="h-px w-12" style={{ background: primary }}></div>
                  <div className="w-1.5 h-1.5 rotate-45" style={{ background: accent }}></div>
                  <div className="h-px w-12" style={{ background: primary }}></div>
                </div>
              </div>

              {/* Teacher Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                {teachers.map((teacher, i) => (
                  <div
                    key={i}
                    className="group relative bg-white/70 backdrop-blur-sm border p-4 md:p-5 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                    style={{
                      borderColor: `${primary}15`,
                      borderRadius: '4px',
                      boxShadow: `0 10px 30px -5px ${primary}10`
                    }}
                  >
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}
                    ></div>

                    {/* Corner brackets */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-l border-t opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: accent }}></div>
                    <div className="absolute top-2 right-2 w-2 h-2 border-r border-t opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: accent }}></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: accent }}></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: accent }}></div>

                    {/* Number label */}
                    <div
                      className="absolute top-2 right-3 text-[8px] font-mono opacity-30"
                      style={{
                        color: primary,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4">
                      {/* Rotating ring */}
                      <div
                        className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 group-hover:opacity-80 group-hover:rotate-180 transition-all duration-1000"
                        style={{ borderColor: primary }}
                      ></div>
                      <div
                        className="absolute inset-1 rounded-full overflow-hidden border-2 border-white group-hover:border-[#0048A0] transition-colors duration-500"
                        style={{ boxShadow: `0 8px 20px -5px ${primary}30` }}
                      >
                        <img
                          src={`/natives/${encodeURIComponent(teacher.photo)}`}
                          alt={teacher.name}
                          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${['syaikh abdul qosim.jpeg', 'syaikh magdi yahya ahmed - madinah.jpeg', 'syaikh mujahid.jpeg'].includes(teacher.photo) ? 'object-top' : ''}`}
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/200/${primary.replace('#', '')}/ffffff?text=${encodeURIComponent(teacher.name)}`;
                          }}
                        />
                      </div>
                      {/* Accent dot */}
                      <div
                        className="absolute bottom-0 right-1 w-2.5 h-2.5 rounded-full border-2 border-white"
                        style={{ background: accent }}
                      ></div>
                    </div>

                    <h4
                      className="font-bold text-gray-900 text-[11px] md:text-xs uppercase tracking-wider leading-tight group-hover:text-[#0048A0] transition-colors duration-300"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {teacher.name}
                    </h4>

                    {/* Bottom accent line */}
                    <div
                      className="mt-3 mx-auto h-px w-0 group-hover:w-10 transition-all duration-500"
                      style={{ background: accent }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* ============ FASILITAS CTA — BANIN & BANAT ============ */}
        <div className="mb-32 mt-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: `${primary}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: primary,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [MODULE.04]
              </span>
              <div className="h-px w-8" style={{ background: `${primary}60` }}></div>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t('about.fasilitas_cta.title')}
            </h3>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-12" style={{ background: primary }}></div>
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: accent }}></div>
              <div className="h-px w-12" style={{ background: primary }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Fasilitas Banin Card */}
            <a
              href="/fasilitas-banin"
              className="group relative overflow-hidden bg-white border transition-all duration-500 flex flex-col hover:-translate-y-1"
              style={{
                borderColor: `${primary}15`,
                borderRadius: '4px',
                boxShadow: `0 15px 40px -10px ${primary}15`
              }}
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src="/fasilitas_banin/West View AL Wafi.jpg"
                  alt="Fasilitas Banin"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Tech overlay */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,72,160,0.1) 0px, rgba(0,72,160,0.1) 1px, transparent 1px, transparent 4px)'
                  }}
                ></div>

                {/* Top gradient with HUD */}
                <div
                  className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2.5 backdrop-blur-xl"
                  style={{ background: 'rgba(0,72,160,0.85)' }}
                >
                  <div className="flex items-center gap-2">
                    <i className="fas fa-male text-white text-[10px]"></i>
                    <span
                      className="text-[9px] uppercase tracking-[0.25em] font-bold text-white"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      BANIN.01
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
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Corner brackets */}
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
              </div>

              <div className="p-7 flex-grow flex flex-col justify-between">
                <div>
                  <h4
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0048A0] transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('about.fasilitas_cta.banin.title')}
                  </h4>
                  <p
                    className="text-gray-500 text-sm leading-relaxed font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t('about.fasilitas_cta.banin.desc')}
                  </p>
                </div>

                <div
                  className="flex items-center mt-6 text-[10px] font-bold uppercase tracking-[0.25em] group-hover:gap-4 gap-2 transition-all duration-300"
                  style={{ color: primary }}
                >
                  <span>{t('about.fasilitas_cta.see_more')}</span>
                  <div className="flex items-center gap-1">
                    <div className="h-px w-0 group-hover:w-6 transition-all duration-500" style={{ background: accent }}></div>
                    <i className="fas fa-arrow-right text-[9px] group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>

              {/* Bottom progress bar */}
              <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
                <div
                  className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}
                ></div>
              </div>
            </a>

            {/* Fasilitas Banat Card */}
            <a
              href="/fasilitas-banat"
              className="group relative overflow-hidden bg-white border transition-all duration-500 flex flex-col hover:-translate-y-1"
              style={{
                borderColor: `${secondary}15`,
                borderRadius: '4px',
                boxShadow: `0 15px 40px -10px ${secondary}15`
              }}
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src="/fasilitas_banin/Kamar.png"
                  alt="Fasilitas Banat"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] grayscale-[20%] group-hover:grayscale-0"
                />

                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(30,64,175,0.1) 0px, rgba(30,64,175,0.1) 1px, transparent 1px, transparent 4px)'
                  }}
                ></div>

                <div
                  className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2.5 backdrop-blur-xl"
                  style={{ background: 'rgba(30,64,175,0.85)' }}
                >
                  <div className="flex items-center gap-2">
                    <i className="fas fa-female text-white text-[10px]"></i>
                    <span
                      className="text-[9px] uppercase tracking-[0.25em] font-bold text-white"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      BANAT.02
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
                      ACTIVE
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
              </div>

              <div className="p-7 flex-grow flex flex-col justify-between">
                <div>
                  <h4
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E40AF] transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t('about.fasilitas_cta.banat.title')}
                  </h4>
                  <p
                    className="text-gray-500 text-sm leading-relaxed font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t('about.fasilitas_cta.banat.desc')}
                  </p>
                </div>

                <div
                  className="flex items-center mt-6 text-[10px] font-bold uppercase tracking-[0.25em] group-hover:gap-4 gap-2 transition-all duration-300"
                  style={{ color: secondary }}
                >
                  <span>{t('about.fasilitas_cta.see_more')}</span>
                  <div className="flex items-center gap-1">
                    <div className="h-px w-0 group-hover:w-6 transition-all duration-500" style={{ background: accent }}></div>
                    <i className="fas fa-arrow-right text-[9px] group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>

              <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
                <div
                  className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: `linear-gradient(90deg, ${secondary}, ${accent})` }}
                ></div>
              </div>
            </a>
          </div>
        </div>

        {/* ============ ALUMNI FEATURE CARD ============ */}
        {featuresList[1] && (() => {
          const alumni = featuresList[1];
          return (
            <div
              onClick={() => document.getElementById('alumni')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-white border transition-all duration-500 flex flex-col md:flex-row cursor-pointer mb-32 overflow-hidden hover:-translate-y-1"
              style={{
                borderColor: `${primary}15`,
                borderRadius: '4px',
                boxShadow: `0 20px 50px -10px ${primary}20`
              }}
            >
              {/* Image side */}
              <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden bg-gray-100">
                <img
                  src={alumni.image}
                  alt={alumni.title}
                  className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms]"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/${primary.replace('#', '')}/ffffff?text=${encodeURIComponent(alumni.title)}`;
                  }}
                />

                {/* Tech scan lines */}
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,72,160,0.15) 0px, rgba(0,72,160,0.15) 1px, transparent 1px, transparent 4px)'
                  }}
                ></div>

                {/* Top bar */}
                <div
                  className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2 backdrop-blur-xl"
                  style={{ background: 'rgba(0,72,160,0.85)' }}
                >
                  <div className="flex items-center gap-2">
                    <i className="fas fa-graduation-cap text-white text-[10px]"></i>
                    <span
                      className="text-[9px] uppercase tracking-[0.25em] font-bold text-white"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      ALUMNI.NETWORK
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
                      LIVE.DATA
                    </span>
                  </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-10 left-3 w-5 h-5 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
                <div className="absolute top-10 right-3 w-5 h-5 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
              </div>

              {/* Content side */}
              <div className="p-10 md:p-12 flex-grow flex flex-col justify-center md:w-1/2 relative">
                {/* Decorative */}
                <div
                  className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full transition-all duration-700"
                  style={{ background: `linear-gradient(180deg, ${primary}, ${accent})` }}
                ></div>

                <div
                  className="text-[9px] font-bold uppercase tracking-[0.3em] mb-3"
                  style={{
                    color: accent,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  [MODULE.05] // {alumni.subtitle}
                </div>

                <h4
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {alumni.title}
                </h4>

                <div className="h-px w-12 mb-5" style={{ background: accent }}></div>

                <p
                  className="text-gray-500 leading-relaxed font-light mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {alumni.description}
                </p>

                <div
                  className="flex items-center text-[10px] font-bold uppercase tracking-[0.25em] group-hover:gap-4 gap-2 transition-all duration-300"
                  style={{ color: primary }}
                >
                  <span>Explore Network</span>
                  <div className="flex items-center gap-1">
                    <div className="h-px w-0 group-hover:w-6 transition-all duration-500" style={{ background: accent }}></div>
                    <i className="fas fa-arrow-right text-[9px] group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ============ ACCREDITATION BANNER — FUTURISTIC STATS ============ */}
        <div
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
            borderRadius: '4px',
            boxShadow: `0 30px 80px -20px ${primary}50`
          }}
        >
          {/* Circuit pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          ></div>

          {/* Radial glows */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-30"
            style={{ background: accent }}
          ></div>
          <div
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: '#fff' }}
          ></div>

          {/* Diagonal scan lines */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 8px)'
            }}
          ></div>

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 opacity-60" style={{ borderColor: accent }}></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 opacity-60" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 opacity-60" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 opacity-60" style={{ borderColor: accent }}></div>

          <div className="relative z-10 px-8 py-16 md:p-20 text-center">

            <div className="mb-16">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-white/40"></div>
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/80"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  [SYS.CERTIFIED]
                </span>
                <div className="h-px w-10 bg-white/40"></div>
              </div>

              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-5 uppercase tracking-wide"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t('about.accreditation.title')}
              </h3>

              <p
                className="text-white/70 max-w-2xl mx-auto font-light leading-relaxed text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('about.accreditation.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

              {[
                { icon: 'fas fa-star', title: t('about.accreditation.sdtq'), label: t('about.accreditation.label'), value: t('about.accreditation.val_sdtq'), type: 'grade' },
                { icon: 'fas fa-medal', title: t('about.accreditation.smp'), label: t('about.accreditation.label'), value: t('about.accreditation.val_smp'), type: 'grade' },
                { icon: 'fas fa-trophy', title: t('about.accreditation.sma'), label: t('about.accreditation.label'), value: t('about.accreditation.val_sma'), type: 'grade' },
                { icon: 'fas fa-university', title: t('about.accreditation.muadalah'), label: null, value: t('about.accreditation.val_muadalah'), type: 'special' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative backdrop-blur-xl p-8 border transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '4px'
                  }}
                >
                  {/* Hover gradient fill */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(251,191,36,0.15), transparent)`
                    }}
                  ></div>

                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/40"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-white/40"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/40"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/40"></div>

                  {/* Number label */}
                  <div
                    className="absolute top-3 right-4 text-[9px] font-mono text-white/40"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon with glow */}
                  <div className="relative w-16 h-16 mx-auto mb-5">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity"
                      style={{ background: accent }}
                    ></div>
                    <div
                      className="relative w-16 h-16 bg-white flex items-center justify-center rounded-lg group-hover:-translate-y-1 transition-all duration-500"
                      style={{ boxShadow: `0 10px 30px -5px rgba(0,0,0,0.3)` }}
                    >
                      <i
                        className={`${item.icon} text-2xl`}
                        style={{ color: primary }}
                      ></i>
                    </div>
                  </div>

                  <h4
                    className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h4>

                  {item.type === 'grade' ? (
                    <p className="text-white/80 font-light text-sm">
                      {item.label}
                      <span
                        className="font-bold text-2xl ms-2 inline-block"
                        style={{
                          color: accent,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {item.value}
                      </span>
                    </p>
                  ) : (
                    <p
                      className="font-bold text-xl tracking-wide mt-2"
                      style={{
                        color: accent,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      {item.value}
                    </p>
                  )}

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-12 transition-all duration-500"
                    style={{ background: accent }}
                  ></div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;