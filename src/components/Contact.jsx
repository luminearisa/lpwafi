import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = ({ data }) => {
  const { t } = useLanguage();

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  // Inject Futuristic Fonts
  useEffect(() => {
    const linkId = 'contact-futuristic-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  const campusList = Array.isArray(t('contact.campuses')) ? t('contact.campuses') : [];

  const contactMethods = [
    {
      icon: 'fa-envelope',
      title: t('contact.methods.email'),
      info: 'info@al-wafi.sch.id',
      href: 'mailto:info@al-wafi.sch.id',
      num: '01',
      color: primary
    },
    {
      icon: 'fab fa-whatsapp',
      title: t('contact.methods.whatsapp'),
      info: '+62 811 9391 444',
      href: 'https://wa.me/628119391444',
      num: '02',
      color: secondary
    },
    {
      icon: 'fa-globe',
      title: t('contact.methods.website'),
      info: 'al-wafi.sch.id',
      href: 'https://al-wafi.sch.id',
      num: '03',
      color: primary
    }
  ];

  const socials = [
    {
      icon: 'fab fa-instagram',
      url: `https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`,
      brandColor: '#E4405F',
      name: 'Instagram',
      handle: '@alwafiwibs'
    },
    {
      icon: 'fab fa-youtube',
      url: 'https://youtube.com/@pesantrenwibs',
      brandColor: '#FF0000',
      name: 'YouTube',
      handle: '@pesantrenwibs'
    },
    {
      icon: 'fab fa-facebook-f',
      url: `https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}`,
      brandColor: '#1877F2',
      name: 'Facebook',
      handle: 'alwafiwibs'
    },
    {
      icon: 'fab fa-tiktok',
      url: '#',
      brandColor: '#000000',
      name: 'TikTok',
      handle: '@alwafi'
    }
  ];

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: '#fafbfd'
      }}
    >
      {/* ============ BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Dot matrix */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${primary}20 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}
        ></div>

        {/* Circuit grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(${primary}20 1px, transparent 1px), linear-gradient(90deg, ${primary}20 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)'
          }}
        ></div>

        {/* Radial glows */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10"
          style={{ background: secondary }}
        ></div>

        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fafbfd] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fafbfd] to-transparent"></div>
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
                  [SYS.04] {t('contact.header.badge')}
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
              <div className="w-3 h-3 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
            </div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.1] text-gray-900"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t('contact.header.title')}
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
            {t('contact.header.desc')}
          </p>
        </div>

        {/* ============ REGISTRATION CTA BANNER ============ */}
        <div
          className="relative overflow-hidden mb-32 flex flex-col"
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

          {/* Diagonal scan lines */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 8px)'
            }}
          ></div>

          {/* Radial glows */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-[120px] opacity-30"
            style={{ background: accent }}
          ></div>
          <div
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-[140px] opacity-20"
            style={{ background: '#fff' }}
          ></div>

          {/* Decorative large icon */}
          <i
            className="fas fa-graduation-cap absolute -right-8 -bottom-8 text-[240px] md:text-[320px] opacity-[0.05] transform -rotate-12 pointer-events-none"
            style={{ color: accent }}
          ></i>

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

          {/* Top HUD bar */}
          <div
            className="flex items-center justify-between px-5 md:px-8 py-3 border-b z-20"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
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
                REGISTRATION.CTA / {data?.yearInfo?.academicYear || '2026/2027'}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
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

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 text-center w-full">
            <div className="mb-10">
              {/* Badge */}
              <div className="inline-flex items-center mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 border-l-2 border-t-2" style={{ borderColor: accent }}></div>
                  <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
                </div>

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
                    className="text-[9px] font-bold uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t('contact.cta.badge')}
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
                  <div className="w-3 h-3 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t('contact.cta.title_start')}
                <span
                  className="mx-2 md:mx-3 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${accent} 0%, #FDE047 50%, ${accent} 100%)`
                  }}
                >
                  {data?.yearInfo?.academicYear}
                </span>
                {t('contact.cta.title_end')}
              </h3>

              <p
                className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('contact.cta.desc')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  background: accent,
                  color: '#050810',
                  boxShadow: `0 15px 40px -5px ${accent}60`,
                  borderRadius: '2px'
                }}
              >
                {/* Shimmer */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
                ></span>

                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-80"
                      style={{ borderColor: primary }}></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-80"
                      style={{ borderColor: primary }}></span>

                <span className="relative flex items-center gap-3">
                  <span>{t('contact.cta.btn_online')}</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href={data?.contact?.registration?.psbUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 border"
                style={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  borderRadius: '2px'
                }}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: accent }}
                  ></span>
                  <i className="fas fa-info-circle text-[10px]" style={{ color: accent }}></i>
                  <span>{t('contact.cta.btn_info')}</span>
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-500"
                  style={{ background: accent }}
                ></span>
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 pt-6 border-t"
                 style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              {[
                { value: '1100+', label: 'ALUMNI' },
                { value: '50+', label: 'UNIV' },
                { value: '15+', label: 'NEGARA' },
                { value: '95%', label: 'RATE' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-lg md:text-xl font-bold leading-none mb-1"
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

        {/* ============ CAMPUS LOCATIONS ============ */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [MODULE.LOCATIONS]
              </span>
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Lokasi <span style={{ color: primary }}>Kampus</span>
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12" style={{ background: primary }}></div>
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: accent }}></div>
              <div className="h-px w-12" style={{ background: primary }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campusList.map((campus, index) => {
              const themeColor = index % 2 === 0 ? primary : secondary;
              return (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl p-8 md:p-10 border transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
                  style={{
                    borderColor: `${themeColor}15`,
                    boxShadow: `0 15px 40px -10px ${themeColor}15`,
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

                  {/* Header with icon */}
                  <div className="flex items-start mb-6">
                    <div className="relative">
                      {/* Glow */}
                      <div
                        className="absolute inset-0 rounded-lg blur-xl opacity-20 group-hover:opacity-50 transition-opacity"
                        style={{ background: themeColor }}
                      ></div>
                      <div
                        className="relative w-14 h-14 flex items-center justify-center rounded-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                        style={{
                          background: `${themeColor}10`,
                          border: `1px solid ${themeColor}30`
                        }}
                      >
                        <i
                          className="fas fa-map-marker-alt text-xl"
                          style={{ color: themeColor }}
                        ></i>
                      </div>
                      {/* Accent dot */}
                      <div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                        style={{ background: accent }}
                      ></div>
                    </div>

                    <div className="ms-5 flex-1 min-w-0">
                      <div
                        className="text-[8px] uppercase tracking-[0.25em] mb-1"
                        style={{
                          color: `${themeColor}80`,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        CAMPUS.{String(index + 1).padStart(2, '0')}
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-[#0048A0] transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {campus.name}
                      </h3>
                    </div>
                  </div>

                  {/* Accent divider */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-px w-10" style={{ background: themeColor }}></div>
                    <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                  </div>

                  {/* Address */}
                  <p
                    className="text-gray-500 leading-relaxed font-light mb-8 flex-grow"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {campus.address}
                  </p>

                  {/* CTA Link */}
                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-auto w-fit group/link"
                  >
                    <div
                      className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all duration-300 border"
                      style={{
                        color: themeColor,
                        background: `${themeColor}08`,
                        borderColor: `${themeColor}30`,
                        borderRadius: '2px',
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <i className="fas fa-map-marked-alt text-[9px]" style={{ color: accent }}></i>
                        GOOGLE MAPS
                        <i className="fas fa-external-link-alt text-[8px] group-hover/link:translate-x-1 transition-transform duration-300"></i>
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============ CONTACT METHODS ============ */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: `${primary}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: primary,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [MODULE.CHANNELS]
              </span>
              <div className="h-px w-8" style={{ background: `${primary}60` }}></div>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Saluran <span style={{ color: primary }}>Komunikasi</span>
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12" style={{ background: primary }}></div>
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: accent }}></div>
              <div className="h-px w-12" style={{ background: primary }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group relative bg-white/80 backdrop-blur-xl p-8 border flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{
                  borderColor: `${contact.color}15`,
                  boxShadow: `0 10px 30px -5px ${contact.color}10`,
                  borderRadius: '4px'
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-l-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: contact.color }}></div>
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-r-2 border-t-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: contact.color }}></div>
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-l-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: contact.color }}></div>
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-r-2 border-b-2 opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: contact.color }}></div>

                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                  style={{ background: `linear-gradient(90deg, ${contact.color}, ${accent})` }}
                ></div>

                {/* Section number */}
                <div
                  className="absolute top-3 right-5 text-[9px] font-mono opacity-40 group-hover:opacity-80 transition-opacity"
                  style={{
                    color: contact.color,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  // {contact.num}
                </div>

                {/* Icon with rotating dashed ring */}
                <div className="relative w-20 h-20 mb-6">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 group-hover:opacity-80 group-hover:rotate-180 transition-all duration-1000"
                    style={{ borderColor: contact.color }}
                  ></div>
                  <div
                    className="absolute inset-2 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"
                    style={{ background: contact.color }}
                  ></div>
                  <div
                    className="relative w-full h-full flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${contact.color}10`,
                      border: `1px solid ${contact.color}30`
                    }}
                  >
                    <i
                      className={`${contact.icon} text-2xl transition-all duration-500`}
                      style={{ color: contact.color }}
                    ></i>
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
                    style={{ background: accent }}
                  ></div>
                </div>

                <h4
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900 mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {contact.title}
                </h4>

                {/* Accent divider */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px w-6" style={{ background: contact.color }}></div>
                  <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                  <div className="h-px w-6" style={{ background: contact.color }}></div>
                </div>

                <p
                  className="text-sm text-gray-600 font-light group-hover:text-[#0048A0] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {contact.info}
                </p>

                {/* Bottom tech footer */}
                <div
                  className="mt-5 pt-3 border-t flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: `${contact.color}15` }}
                >
                  <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                  <span
                    className="text-[8px] uppercase tracking-widest"
                    style={{
                      color: `${contact.color}80`,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    CHANNEL.{contact.num}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ============ GOOGLE MAPS ============ */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [MODULE.NAVIGATION]
              </span>
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
            </div>
            <h3
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t('contact.locations.title')}
            </h3>
            <p
              className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('contact.locations.desc')}
            </p>
          </div>

          {/* Map wrapper with HUD frame */}
          <div
            className="relative overflow-hidden border"
            style={{
              borderColor: `${primary}20`,
              borderRadius: '4px',
              boxShadow: `0 30px 60px -15px ${primary}25`
            }}
          >
            {/* Top HUD bar */}
            <div
              className="flex items-center justify-between px-5 py-2.5 border-b backdrop-blur-xl z-20"
              style={{
                background: `linear-gradient(90deg, ${primary}, ${secondary})`,
                borderColor: `${primary}30`
              }}
            >
              <div className="flex items-center gap-2">
                <i
                  className="fas fa-location-crosshairs text-[11px]"
                  style={{ color: accent }}
                ></i>
                <span
                  className="text-[9px] uppercase tracking-[0.3em] text-white font-medium"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  LOCATION.COORDINATES
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
                  LIVE.MAP
                </span>
              </div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-14 left-3 w-5 h-5 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute top-14 right-3 w-5 h-5 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7467744291234!2d106.79166661234567!3d-6.5823456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c8b123456789%3A0x987654321abcdef0!2sJl.%20Raya%20Arco%2C%20Ragamukti%2C%20Citayam%2C%20Tajurhalang%2C%20Bogor%2C%20West%20Java%2016320!5e0!3m2!1sen!2sid!4v1692345678901!5m2!1sen!2sid"
              width="100%"
              height="500"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Wafi Islamic Boarding School - Kampus A"
              className="w-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            ></iframe>

            {/* Floating Info Panel */}
            <div className="absolute top-16 start-4 md:start-8 z-30 max-w-sm">
              <div
                className="p-5 backdrop-blur-xl border overflow-hidden relative"
                style={{
                  background: 'rgba(5,8,16,0.85)',
                  borderColor: `${primary}40`,
                  borderRadius: '4px',
                  boxShadow: `0 20px 50px -10px rgba(0,72,160,0.5)`
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-l border-t" style={{ borderColor: accent }}></div>
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-r border-t" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-l border-b" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-r border-b" style={{ borderColor: accent }}></div>

                <div className="flex items-start gap-3">
                  {/* Icon with glow */}
                  <div className="relative shrink-0">
                    <div
                      className="absolute inset-0 rounded-lg blur-lg opacity-40"
                      style={{ background: accent }}
                    ></div>
                    <div
                      className="relative w-10 h-10 flex items-center justify-center rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`
                      }}
                    >
                      <i className="fas fa-map-marker-alt text-white text-sm"></i>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      // DESTINATION
                    </div>
                    <h4
                      className="font-bold text-white text-sm leading-tight mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Al Wafi Islamic Boarding School
                    </h4>
                    <p
                      className="text-white/70 text-xs font-light leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t('contact.locations.map_hint')}
                    </p>

                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-[9px] font-bold uppercase tracking-widest group/link"
                      style={{
                        color: accent,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      NAVIGATE
                      <i className="fas fa-arrow-right text-[8px] group-hover/link:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinates tag bottom right */}
            <div
              className="absolute bottom-4 right-4 z-30 px-3 py-1.5 backdrop-blur-xl border hidden md:block"
              style={{
                background: 'rgba(5,8,16,0.85)',
                borderColor: `${primary}40`,
                borderRadius: '2px'
              }}
            >
              <div
                className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                // GPS
              </div>
              <div
                className="text-[11px] font-mono text-white"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span style={{ color: accent }}>6.5823°</span> S, <span style={{ color: accent }}>106.7917°</span> E
              </div>
            </div>
          </div>
        </div>

        {/* ============ SOCIAL MEDIA ============ */}
        <div
          className="pt-16 border-t"
          style={{ borderColor: `${primary}15` }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [MODULE.SOCIAL]
              </span>
              <div className="h-px w-8" style={{ background: `${accent}60` }}></div>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t('contact.social.title')}
            </h3>
            <p
              className="text-gray-500 font-light text-sm max-w-xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('contact.social.desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/80 backdrop-blur-xl border p-5 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{
                  borderColor: `${primary}15`,
                  borderRadius: '4px'
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b opacity-40 group-hover:opacity-100 transition-opacity" style={{ borderColor: primary }}></div>

                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${social.brandColor}10, ${social.brandColor}05)`
                  }}
                ></div>

                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-700 ease-out"
                  style={{ background: social.brandColor }}
                ></div>

                {/* Number */}
                <div
                  className="absolute top-2 right-4 text-[8px] font-mono opacity-40 group-hover:opacity-70 transition-opacity"
                  style={{
                    color: primary,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  // {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon with brand color ring */}
                <div className="relative mb-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `${social.brandColor}10`,
                      borderColor: `${social.brandColor}40`
                    }}
                  >
                    <i
                      className={`${social.icon} text-xl transition-colors duration-300`}
                      style={{ color: '#64748b' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = social.brandColor; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
                    ></i>
                  </div>
                  {/* Accent dot */}
                  <div
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white animate-pulse"
                    style={{ background: accent }}
                  ></div>
                </div>

                <h4
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {social.name}
                </h4>

                <p
                  className="text-[9px] text-gray-500 font-light"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {social.handle}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-3 h-px w-0 group-hover:w-8 transition-all duration-500"
                  style={{ background: social.brandColor }}
                ></div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;