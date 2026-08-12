import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import AlumniMapGlobal from './AlumniMapGlobal';
import AlumniMap2026 from './AlumniMap2026';

const Alumni = ({ data }) => {
  const { t } = useLanguage();

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const linkId = 'alumni-section-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Filter universities
  const domesticUniversities = data?.universities?.filter(uni =>
    ['Institut Teknologi Bandung', 'Institut Pertanian Bogor', 'Institut Teknologi Sepuluh Nopember',
      'Universitas Padjadjaran', 'Universitas Andalas', 'Binus University', 'Telkom University', 'Universitas Trisakti'].includes(uni.name)
  ) || [];

  const internationalUniversities = data?.universities?.filter(uni =>
    ['Universitas Malaysia', 'Universiti Teknologi Malaysia', 'Multimedia University', 'International Islamic University Malaysia', 'Islamic University of Madinah', 'Taibah University', 'Prince Sattam bin Abdulaziz University', 'Qassim University', 'King Saud University', 'King Abdulaziz University', 'Princess Nourah bint Abdulrahman University', 'Al-Azhar University', 'Asia Pacific University'].includes(uni.name)
  ) || [];

  const achievementList = Array.isArray(t('alumni.success.list')) ? t('alumni.success.list') : [];

  const stats = [
    { icon: 'fa-user-graduate', number: '1100', suffix: '+', label: t('alumni.stats.global'), color: primary, num: '01' },
    { icon: 'fa-university', number: '50', suffix: '+', label: t('alumni.stats.university'), color: secondary, num: '02' },
    { icon: 'fa-globe', number: '15', suffix: '+', label: t('alumni.stats.country'), color: primary, num: '03' },
    { icon: 'fa-trophy', number: '95', suffix: '%', label: t('alumni.stats.acceptance'), color: secondary, num: '04' }
  ];

  return (
    <section
      id="alumni"
      className="py-32 relative overflow-hidden"
      style={{
        background: '#fafbfd',
        fontFamily: "'Space Grotesk', 'Inter', sans-serif"
      }}
    >
      {/* ============ BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Dot matrix */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${secondary}20 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}
        ></div>

        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fafbfd] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fafbfd] to-transparent"></div>

        {/* Subtle radial glow */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
          style={{ background: primary }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============ EDITORIAL HEADER ============ */}
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
                background: 'rgba(255,255,255,0.7)',
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
                  [SYS.03] {t('alumni.header.badge')}
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
            {t('alumni.header.title')}
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
            {t('alumni.header.desc')}
          </p>
        </div>

        {/* ============ STATISTICS GRID ============ */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32 pb-20 border-b"
          style={{ borderColor: `${primary}15` }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl border p-6 md:p-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{
                borderColor: `${stat.color}20`,
                boxShadow: `0 10px 30px -5px ${stat.color}10`,
                borderRadius: '4px'
              }}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: stat.color }}></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: stat.color }}></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: stat.color }}></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: stat.color }}></div>

              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: `linear-gradient(90deg, ${stat.color}, ${accent})` }}
              ></div>

              {/* Section number */}
              <div
                className="absolute top-3 right-5 text-[9px] font-mono opacity-40 group-hover:opacity-80 transition-opacity"
                style={{
                  color: stat.color,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                // {stat.num}
              </div>

              {/* Icon */}
              <div className="relative w-14 h-14 mx-auto mb-5">
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"
                  style={{ background: stat.color }}
                ></div>
                <div
                  className="relative w-full h-full flex items-center justify-center rounded-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{
                    background: `${stat.color}10`,
                    border: `1px solid ${stat.color}30`
                  }}
                >
                  <i
                    className={`fas ${stat.icon} text-xl`}
                    style={{ color: stat.color }}
                  ></i>
                </div>
                {/* Accent dot */}
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                  style={{ background: accent }}
                ></div>
              </div>

              {/* Number */}
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <h3
                  className="text-4xl lg:text-5xl font-bold leading-none"
                  style={{
                    color: stat.color,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  {stat.number}
                </h3>
                <span
                  className="text-2xl font-bold"
                  style={{ color: accent }}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Accent divider */}
              <div className="flex items-center justify-center gap-1.5 mb-3">
                <div className="h-px w-6" style={{ background: stat.color }}></div>
                <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                <div className="h-px w-6" style={{ background: stat.color }}></div>
              </div>

              {/* Label */}
              <p
                className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stat.label}
              </p>

              {/* Bottom tech label */}
              <div
                className="mt-4 pt-3 border-t flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: `${stat.color}15` }}
              >
                <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                <span
                  className="text-[8px] uppercase tracking-widest"
                  style={{
                    color: `${stat.color}80`,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  STAT.{stat.num}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ============ GLOBAL MAP ============ */}
        <div className="mb-32">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b"
            style={{ borderColor: `${primary}15` }}
          >
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
                  [MODULE.MAP.01]
                </span>
                <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Peta Sebaran <span style={{ color: primary }}>Alumni</span>
              </h3>
              <p
                className="text-sm text-gray-500 font-light max-w-xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Jaringan luas alumni yang melanjutkan studi ke berbagai penjuru dunia.
              </p>
            </div>

            {/* Live indicator */}
            <div
              className="flex items-center gap-2 px-3 py-2 mt-4 md:mt-0 border backdrop-blur-sm"
              style={{
                background: `${accent}10`,
                borderColor: `${accent}30`,
                borderRadius: '2px'
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: accent }}
              ></span>
              <span
                className="text-[9px] uppercase tracking-[0.25em] font-bold"
                style={{
                  color: primary,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                GLOBAL.NETWORK
              </span>
            </div>
          </div>

          {/* Map wrapper with HUD frame */}
          <div
            className="relative overflow-hidden border"
            style={{
              borderColor: `${primary}20`,
              borderRadius: '4px',
              boxShadow: `0 20px 50px -15px ${primary}25`
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

            <AlumniMapGlobal />
          </div>
        </div>

        {/* ============ UNIVERSITY LOGOS ============ */}
        <div className="mb-32">

          {/* Domestic Universities */}
          <div className="mb-24">
            <div
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b"
              style={{ borderColor: `${primary}15` }}
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="h-px w-6" style={{ background: `${primary}60` }}></div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{
                      color: primary,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    [MODULE.PARTNER.01]
                  </span>
                  <div className="h-px w-6" style={{ background: `${primary}60` }}></div>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t('alumni.domestic.title')}
                </h3>
                <p
                  className="text-sm text-gray-500 font-light max-w-xl"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t('alumni.domestic.desc')}
                </p>
              </div>

              {/* Count badge */}
              <div
                className="flex items-center gap-2 px-3 py-2 mt-4 md:mt-0 border backdrop-blur-sm"
                style={{
                  background: `${primary}08`,
                  borderColor: `${primary}30`,
                  borderRadius: '2px'
                }}
              >
                <span
                  className="text-base font-bold"
                  style={{
                    color: accent,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  {String(domesticUniversities.length).padStart(2, '0')}
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.25em] font-bold"
                  style={{
                    color: primary,
                    fontFamily: "'JetBrains Mono', monospace" }}
                >
                  UNIV.LOKAL
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {domesticUniversities.map((university, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl border p-6 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{
                    borderColor: `${primary}15`,
                    borderRadius: '4px',
                    minHeight: '180px'
                  }}
                >
                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                    style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}
                  ></div>

                  {/* Corner ticks */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-l border-t opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-r border-t opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-l border-b opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-r border-b opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>

                  {/* Number */}
                  <div
                    className="absolute top-2 right-4 text-[8px] font-mono opacity-30 group-hover:opacity-70 transition-opacity"
                    style={{
                      color: primary,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Logo container */}
                  <div className="h-16 w-full flex items-center justify-center mb-4 relative">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                      style={{ background: primary }}
                    ></div>
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="relative max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/150x80/ffffff/${primary.replace('#', '')}?text=${encodeURIComponent(university.name.split(' ')[0])}`;
                      }}
                    />
                  </div>

                  {/* Accent divider */}
                  <div className="w-8 h-px mb-3" style={{ background: accent }}></div>

                  {/* Name */}
                  <p
                    className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.15em] text-center leading-tight group-hover:text-[#0048A0] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {university.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* International Universities */}
          <div>
            <div
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b"
              style={{ borderColor: `${secondary}15` }}
            >
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
                    [MODULE.PARTNER.02]
                  </span>
                  <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t('alumni.international.title')}
                </h3>
                <p
                  className="text-sm text-gray-500 font-light max-w-xl"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t('alumni.international.desc')}
                </p>
              </div>

              {/* Count badge */}
              <div
                className="flex items-center gap-2 px-3 py-2 mt-4 md:mt-0 border backdrop-blur-sm"
                style={{
                  background: `${accent}10`,
                  borderColor: `${accent}30`,
                  borderRadius: '2px'
                }}
              >
                <span
                  className="text-base font-bold"
                  style={{
                    color: accent,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  {String(internationalUniversities.length).padStart(2, '0')}
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.25em] font-bold"
                  style={{
                    color: primary,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  UNIV.GLOBAL
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {internationalUniversities.map((university, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl border p-6 flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{
                    borderColor: `${secondary}15`,
                    borderRadius: '4px',
                    minHeight: '180px'
                  }}
                >
                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                    style={{ background: `linear-gradient(90deg, ${secondary}, ${accent})` }}
                  ></div>

                  {/* Corner ticks */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-l border-t opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: secondary }}></div>
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-r border-t opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: secondary }}></div>
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-l border-b opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: secondary }}></div>
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-r border-b opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: secondary }}></div>

                  {/* Number */}
                  <div
                    className="absolute top-2 right-4 text-[8px] font-mono opacity-30 group-hover:opacity-70 transition-opacity"
                    style={{
                      color: secondary,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Logo container */}
                  <div className="h-16 w-full flex items-center justify-center mb-4 relative">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                      style={{ background: secondary }}
                    ></div>
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="relative max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/150x80/ffffff/${secondary.replace('#', '')}?text=${encodeURIComponent(university.name.split(' ')[0])}`;
                      }}
                    />
                  </div>

                  {/* Accent divider */}
                  <div className="w-8 h-px mb-3" style={{ background: accent }}></div>

                  {/* Name */}
                  <p
                    className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.15em] text-center leading-tight group-hover:text-[#1E40AF] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {university.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ 2026 ALUMNI DATA MAP ============ */}
        <AlumniMap2026 />

        {/* ============ SUCCESS STORY BANNER ============ */}
        <div
          className="relative overflow-hidden flex flex-col lg:flex-row"
          style={{
            background: '#050810',
            borderRadius: '4px',
            boxShadow: `0 30px 80px -20px ${primary}50`,
            minHeight: '500px'
          }}
        >
          {/* Left Content */}
          <div className="lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Background glows */}
            <div
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[120px] opacity-25"
              style={{ background: primary }}
            ></div>
            <div
              className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-15"
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

            {/* Scan lines */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 8px)'
              }}
            ></div>

            {/* Large decorative quote icon */}
            <i
              className="fas fa-quote-right absolute -right-8 -bottom-8 text-[220px] opacity-[0.03] transform -rotate-12 pointer-events-none"
              style={{ color: accent }}
            ></i>

            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

            <div className="relative z-10 text-white">
              {/* HUD Badge */}
              <div className="inline-flex items-center mb-8">
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
                    [SUCCESS.STORY] {t('alumni.success.badge')}
                  </span>
                </div>
              </div>

              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t('alumni.success.title')}
              </h3>

              {/* Tech divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-16" style={{ background: primary }}></div>
                <div className="h-[2px] w-6" style={{ background: accent }}></div>
              </div>

              <p
                className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('alumni.success.desc')}
              </p>

              {/* Achievements list */}
              <div
                className="space-y-4 border-t pt-8"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                {achievementList.map((achievement, index) => (
                  <div key={index} className="flex items-start group/ach">
                    {/* Numbered bullet */}
                    <div className="flex items-center gap-2 shrink-0 mt-0.5 me-4">
                      <div
                        className="w-8 h-8 flex items-center justify-center"
                        style={{
                          background: `${accent}15`,
                          border: `1px solid ${accent}40`,
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
                      <div className="w-3 h-px" style={{ background: `${accent}60` }}></div>
                    </div>
                    <span
                      className="text-gray-300 leading-relaxed font-light group-hover/ach:text-white transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content — Image with HUD overlay */}
          <div
            className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
            style={{ background: '#0a0f1c' }}
          >
            {/* Decorative stacked frames */}
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
              src={data?.images?.alumni || "/placeholder-alumni.jpg"}
              alt="Sebaran Alumni"
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms]"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/800x800/${primary.replace('#', '')}/ffffff?text=Alumni+Success+Story`;
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
                  className="fas fa-graduation-cap text-white text-[10px]"
                  style={{ color: accent }}
                ></i>
                <span
                  className="text-[9px] uppercase tracking-[0.25em] font-bold text-white"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  ALUMNI.ACHIEVEMENT
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
            <div className="absolute top-14 left-3 w-5 h-5 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute top-14 right-3 w-5 h-5 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

            {/* Floating Stats Card */}
            <div
              className="absolute top-20 md:top-10 md:-start-8 start-4 p-5 backdrop-blur-xl border z-30 group hover:-translate-y-1 transition-transform duration-500"
              style={{
                background: 'rgba(5,8,16,0.9)',
                borderColor: `${accent}40`,
                borderRadius: '4px',
                boxShadow: `0 20px 50px -10px ${primary}50`
              }}
            >
              {/* Corner brackets */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-l border-t" style={{ borderColor: accent }}></div>
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-r border-t" style={{ borderColor: accent }}></div>
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-l border-b" style={{ borderColor: accent }}></div>
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-r border-b" style={{ borderColor: accent }}></div>

              <div className="flex flex-col items-center">
                <div
                  className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  // ACCEPTANCE.RATE
                </div>
                <div className="flex items-baseline gap-0.5 mb-2">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      color: accent,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    95
                  </span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: accent }}
                  >
                    %
                  </span>
                </div>
                <div
                  className="text-[8px] uppercase tracking-widest text-white/70 font-medium text-center"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {t('alumni.success.rate_label')}
                </div>
                <div className="w-full h-[2px] mt-3" style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}></div>
              </div>
            </div>

            {/* Bottom stats overlay */}
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
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[8px] uppercase tracking-[0.25em] text-white/60"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    // COHORT.METRICS
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1 h-1 rounded-full animate-pulse"
                      style={{ background: accent }}
                    ></span>
                    <span
                      className="text-[8px] uppercase tracking-widest text-white/70"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      TRACKING
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '49', label: 'Students' },
                    { value: '70+', label: 'Acceptances' },
                    { value: '44', label: 'Universities' }
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="text-lg font-bold"
                        style={{
                          color: accent,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        className="text-[8px] uppercase tracking-widest text-white/60"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent badge */}
            <div
              className="absolute top-6 right-6 px-2.5 py-1 text-[8px] font-mono uppercase tracking-widest z-30 border"
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
              PROVEN.TRACK
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Alumni;