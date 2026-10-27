import React, { useEffect, useState } from 'react';
import VisitorCounter from './VisitorCounter';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Inject Futuristic Fonts
  useEffect(() => {
    const linkId = 'footer-futuristic-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Tentang Kami', href: '#about', num: '01' },
    { label: 'Program', href: '#programs', num: '02' },
    { label: 'Alumni', href: '#alumni', num: '03' },
    { label: 'Kontak', href: '#contact', num: '04' },
    { label: 'Al-Quran Digital', href: '/quran', num: '05' },
    { label: 'Pendaftaran', href: data?.contact?.registration?.url || "#", external: true, num: '06', highlight: true }
  ];

  const programs = [
    { label: 'SDTQ', href: '/sdtq' },
    { label: 'SMP Islam', href: '/smp' },
    { label: 'SMA Islam', href: '/sma' },
    { label: 'Overseas', href: '/program-overseas' },
    { label: 'Fasilitas Banin', href: '/fasilitas-banin' },
    { label: 'Fasilitas Banat', href: '/fasilitas-banat' }
  ];

  const socials = [
    {
      icon: 'fab fa-instagram',
      url: `https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`,
      brandColor: '#E4405F',
      name: 'Instagram',
      handle: '@alwafiwiibs.official'
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
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/628119391444',
      brandColor: '#25D366',
      name: 'WhatsApp',
      handle: '+62 811 9391 444'
    }
  ];

  const campuses = [
    {
      code: 'CAMPUS.01',
      name: 'Kampus A (Banin)',
      address: data?.contact?.campuses?.[0]?.address || "Alamat Kampus A"
    },
    {
      code: 'CAMPUS.02',
      name: 'Kampus B (Banat)',
      address: data?.contact?.campuses?.[1]?.address || "Alamat Kampus B"
    }
  ];

  const contactChannels = [
    { icon: 'fa-envelope', label: 'EMAIL', value: 'info@al-wafi.sch.id', href: 'mailto:info@al-wafi.sch.id' },
    { icon: 'fa-phone', label: 'PHONE', value: '+62 811 9391 444', href: 'tel:+628119391444' },
    { icon: 'fa-globe', label: 'WEBSITE', value: 'al-wafi.sch.id', href: 'https://al-wafi.sch.id' }
  ];

  return (
    <footer
      className="relative overflow-hidden font-sans"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: '#050810'
      }}
    >
      {/* ============ BACKGROUND LAYERS ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(${primary}40 1px, transparent 1px), linear-gradient(90deg, ${primary}40 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Radial glows */}
        <div
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
          style={{ background: secondary }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: accent }}
        ></div>

        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)'
          }}
        ></div>

        {/* Large decorative mosque icon */}
        <i
          className="fas fa-mosque absolute -right-10 top-20 text-[280px] opacity-[0.02] transform -rotate-12 pointer-events-none"
          style={{ color: accent }}
        ></i>
      </div>

      {/* Corner brackets for entire footer */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>

      {/* ============ TOP HUD BAR ============ */}
      <div
        className="relative z-20 flex items-center justify-between px-5 md:px-8 py-3 backdrop-blur-xl border-b"
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
            AL-WAFI.IBS / FOOTER.SYSTEM
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: accent }}
          ></span>
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/90"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            SYSTEM.ONLINE
          </span>
        </div>
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

        {/* ============ BRAND + STATS ROW ============ */}
        <div className="mb-16 pb-12 border-b" style={{ borderColor: `${primary}20` }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Brand Info (7 columns) */}
            <div className="lg:col-span-7">
              <div className="flex items-start mb-6">
                {/* Logo container */}
                <div className="relative shrink-0">
                  <div
                    className="relative bg-white p-2.5 w-16 h-16 flex items-center justify-center group"
                    style={{
                      borderRadius: '4px',
                      boxShadow: `0 15px 40px -10px ${primary}40`
                    }}
                  >
                    {/* Accent corner tick */}
                    <div className="absolute -top-1 -right-1 w-2 h-2" style={{ background: accent }}></div>

                    <img
                      src={data?.images?.logo || "https://al-wafi.sch.id/src/images/logo/wafi-logo-data=normal.svg"}
                      alt="Al Wafi Logo"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Pulse dot */}
                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 animate-pulse flex items-center justify-center"
                    style={{
                      background: accent,
                      borderColor: '#050810'
                    }}
                  >
                    <i className="fas fa-mosque text-[6px]" style={{ color: '#050810' }}></i>
                  </div>
                </div>

                <div className="ms-5 flex flex-col justify-center pt-1">
                  <h3
                    className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase text-white leading-tight mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Al <span style={{ color: accent }}>Wafi</span>
                  </h3>
                  <p
                    className="text-[9px] uppercase tracking-[0.25em] font-bold"
                    style={{
                      color: primary,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    ISLAMIC BOARDING SCHOOL
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-px w-8" style={{ background: primary }}></div>
                    <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                    <div className="h-px w-8" style={{ background: primary }}></div>
                  </div>
                </div>
              </div>

              <p
                className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-light max-w-2xl mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {data?.school?.type || "Pesantren Sunnah"} dengan konsep <span style={{ color: accent }} className="font-medium">holistik, harmoni, dan exemplary</span>. Mendampingi santri berdasarkan nilai Al Quran dan Sunnah untuk bersaing di dunia internasional.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'SUNNAH', icon: 'fa-mosque' },
                  { label: 'HOLISTIC', icon: 'fa-brain' },
                  { label: 'GLOBAL', icon: 'fa-globe' },
                  { label: 'CERTIFIED', icon: 'fa-award' }
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 backdrop-blur-sm border"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderColor: `${primary}30`,
                      borderRadius: '2px'
                    }}
                  >
                    <i
                      className={`fas ${tag.icon} text-[8px]`}
                      style={{ color: accent }}
                    ></i>
                    <span
                      className="text-[9px] uppercase tracking-widest font-medium text-white/70"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Panel (5 columns) */}
            <div className="lg:col-span-5">
              <div
                className="relative backdrop-blur-xl border p-6 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: `${primary}30`,
                  borderRadius: '4px'
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t" style={{ borderColor: accent }}></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b" style={{ borderColor: accent }}></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b" style={{ borderColor: accent }}></div>

                {/* Top label */}
                <div
                  className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-4 flex items-center gap-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <div className="h-px w-4" style={{ background: accent }}></div>
                  // IMPACT.METRICS
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  {[
                    { value: '1100+', label: 'ALUMNI', num: '01' },
                    { value: '50+', label: 'UNIV.PARTNER', num: '02' },
                    { value: '15+', label: 'NEGARA', num: '03' },
                    { value: '95%', label: 'ACCEPTANCE', num: '04' }
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="relative p-3 border group hover:border-[#FBBF24] transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        borderColor: `${primary}20`,
                        borderRadius: '2px'
                      }}
                    >
                      <div
                        className="absolute top-1 right-2 text-[8px] font-mono opacity-40 group-hover:opacity-70 transition-opacity"
                        style={{
                          color: primary,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {stat.num}
                      </div>
                      <div
                        className="text-2xl font-bold leading-none mb-1"
                        style={{
                          color: accent,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-[8px] uppercase tracking-widest text-white/60"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom status */}
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: `${primary}20` }}
                >
                  <span
                    className="text-[8px] uppercase tracking-widest text-white/50"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    EST.2018
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
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============ MAIN GRID ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* --- QUICK LINKS (3 columns) --- */}
          <div className="lg:col-span-3">
            {/* Section header */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className="px-3 py-1 border backdrop-blur-sm"
                style={{
                  background: `${primary}15`,
                  borderColor: `${primary}40`,
                  borderRadius: '2px'
                }}
              >
                <span
                  className="text-[8px] font-bold uppercase tracking-[0.25em]"
                  style={{
                    color: primary,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  [MODULE.01]
                </span>
              </div>
            </div>

            <h4
              className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Tautan <span style={{ color: accent }}>Cepat</span>
              <div className="h-px w-6" style={{ background: accent }}></div>
            </h4>

            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all duration-300 hover:bg-white/[0.03] relative overflow-hidden"
                  >
                    {/* Accent line */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                      style={{ background: link.highlight ? accent : primary }}
                    ></div>

                    {/* Number */}
                    <span
                      className="text-[9px] font-mono opacity-40 group-hover:opacity-80 transition-opacity shrink-0 w-4"
                      style={{
                        color: primary,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      {link.num}
                    </span>

                    <span
                      className={`text-sm font-light transition-colors duration-300 ${link.highlight ? 'font-bold' : ''}`}
                      style={{
                        color: link.highlight ? accent : 'rgba(255,255,255,0.7)',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {link.label}
                    </span>

                    <i
                      className={`${link.highlight ? 'fas fa-arrow-right' : 'fas fa-chevron-right'} text-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto`}
                      style={{ color: link.highlight ? accent : primary }}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- PROGRAMS (3 columns) --- */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="px-3 py-1 border backdrop-blur-sm"
                style={{
                  background: `${secondary}15`,
                  borderColor: `${secondary}40`,
                  borderRadius: '2px'
                }}
              >
                <span
                  className="text-[8px] font-bold uppercase tracking-[0.25em]"
                  style={{
                    color: secondary,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  [MODULE.02]
                </span>
              </div>
            </div>

            <h4
              className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Program <span style={{ color: accent }}>Unggulan</span>
              <div className="h-px w-6" style={{ background: accent }}></div>
            </h4>

            <ul className="space-y-1">
              {programs.map((prog, index) => (
                <li key={index}>
                  <a
                    href={prog.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all duration-300 hover:bg-white/[0.03] relative overflow-hidden"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                      style={{ background: secondary }}
                    ></div>

                    <span
                      className="text-[9px] font-mono opacity-40 group-hover:opacity-80 transition-opacity shrink-0 w-4"
                      style={{
                        color: secondary,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span
                      className="text-sm font-light text-white/70 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {prog.label}
                    </span>

                    <i
                      className="fas fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto"
                      style={{ color: secondary }}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT (6 columns) --- */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="px-3 py-1 border backdrop-blur-sm"
                style={{
                  background: `${accent}15`,
                  borderColor: `${accent}40`,
                  borderRadius: '2px'
                }}
              >
                <span
                  className="text-[8px] font-bold uppercase tracking-[0.25em]"
                  style={{
                    color: accent,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  [MODULE.03]
                </span>
              </div>
            </div>

            <h4
              className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Informasi <span style={{ color: accent }}>Kontak</span>
              <div className="h-px w-6" style={{ background: accent }}></div>
            </h4>

            {/* Campuses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {campuses.map((campus, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-sm border p-4 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderColor: index === 0 ? `${primary}30` : `${secondary}30`,
                    borderRadius: '4px'
                  }}
                >
                  {/* Corner brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-l border-t" style={{ borderColor: index === 0 ? primary : secondary }}></div>
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-r border-t" style={{ borderColor: index === 0 ? primary : secondary }}></div>
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-l border-b" style={{ borderColor: index === 0 ? primary : secondary }}></div>
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-r border-b" style={{ borderColor: index === 0 ? primary : secondary }}></div>

                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${index === 0 ? primary : secondary}, ${accent})`
                    }}
                  ></div>

                  <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                      <div
                        className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `${index === 0 ? primary : secondary}20`,
                          border: `1px solid ${index === 0 ? primary : secondary}40`
                        }}
                      >
                        <i
                          className="fas fa-map-marker-alt text-[11px]"
                          style={{ color: index === 0 ? primary : secondary }}
                        ></i>
                      </div>
                      <div
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full border animate-pulse"
                        style={{
                          background: accent,
                          borderColor: '#050810'
                        }}
                      ></div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[8px] uppercase tracking-[0.25em] mb-1"
                        style={{
                          color: index === 0 ? primary : secondary,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {campus.code}
                      </div>
                      <p
                        className="text-[11px] font-bold text-white mb-1.5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {campus.name}
                      </p>
                      <p
                        className="text-[10px] text-white/60 font-light leading-relaxed line-clamp-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {campus.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact channels */}
            <div className="space-y-2">
              {contactChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-2.5 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderColor: `${primary}20`,
                    borderRadius: '2px'
                  }}
                >
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${primary}10, transparent)`
                    }}
                  ></div>

                  <div
                    className="relative w-7 h-7 flex items-center justify-center rounded-sm shrink-0"
                    style={{
                      background: `${accent}15`,
                      border: `1px solid ${accent}30`
                    }}
                  >
                    <i
                      className={`fas ${channel.icon} text-[9px]`}
                      style={{ color: accent }}
                    ></i>
                  </div>

                  <div className="relative flex-1 min-w-0">
                    <div
                      className="text-[8px] uppercase tracking-[0.25em] text-white/50"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {channel.label}
                    </div>
                    <div
                      className="text-[11px] font-medium text-white/90 group-hover:text-[#FBBF24] transition-colors truncate"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {channel.value}
                    </div>
                  </div>

                  <i
                    className="fas fa-arrow-right text-[9px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    style={{ color: accent }}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ============ SOCIAL MEDIA GRID ============ */}
        <div
          className="relative backdrop-blur-xl border p-6 mb-16 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: `${primary}30`,
            borderRadius: '4px'
          }}
        >
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: accent }}></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: accent }}></div>

          {/* Top HUD */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="h-px w-4" style={{ background: accent }}></div>
              <span
                className="text-[8px] uppercase tracking-[0.25em] text-white/50"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                // SOCIAL.NETWORK
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="w-1 h-1 rounded-full animate-pulse"
                style={{ background: accent }}
              ></span>
              <span
                className="text-[8px] uppercase tracking-widest text-white/60"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                CONNECT
              </span>
            </div>
          </div>

          <h4
            className="text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ikuti Perjalanan <span style={{ color: accent }}>Kami</span>
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-sm border p-4 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: `${primary}20`,
                  borderRadius: '4px'
                }}
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${social.brandColor}15, ${social.brandColor}05)`
                  }}
                ></div>

                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500"
                  style={{ background: social.brandColor }}
                ></div>

                {/* Number */}
                <div
                  className="absolute top-2 right-3 text-[8px] font-mono opacity-40 group-hover:opacity-70 transition-opacity"
                  style={{
                    color: primary,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon with brand color ring */}
                <div className="relative mb-2">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: `${social.brandColor}10`,
                      borderColor: `${social.brandColor}40`
                    }}
                  >
                    <i
                      className={`${social.icon} text-lg text-white/70 group-hover:text-white transition-colors duration-300`}
                    ></i>
                  </div>
                  <div
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 animate-pulse"
                    style={{
                      background: accent,
                      borderColor: '#050810'
                    }}
                  ></div>
                </div>

                <h5
                  className="text-[10px] font-bold uppercase tracking-widest text-white/90 mb-0.5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {social.name}
                </h5>

                <p
                  className="text-[9px] text-white/50 font-light"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {social.handle}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-2 h-px w-0 group-hover:w-8 transition-all duration-500"
                  style={{ background: social.brandColor }}
                ></div>
              </a>
            ))}
          </div>
        </div>

        {/* ============ NEWSLETTER / CTA STRIP ============ */}
        <div
          className="relative overflow-hidden p-8 md:p-10 mb-16"
          style={{
            background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
            borderRadius: '4px',
            boxShadow: `0 20px 60px -15px ${primary}50`
          }}
        >
          {/* Circuit pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: accent }}></div>
          <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: accent }}></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: accent }}
                ></span>
                <span
                  className="text-[9px] uppercase tracking-[0.25em] text-white/80 font-bold"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  [JOIN.NOW] PENDAFTARAN TERBUKA
                </span>
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Siap Bergabung Menjadi <span style={{ color: accent }}>Generasi Qur'ani?</span>
              </h3>
            </div>

            <a
              href={data?.contact?.registration?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#050810] overflow-hidden transition-all duration-500 hover:-translate-y-0.5 shrink-0"
              style={{
                background: accent,
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
                <i className="fas fa-paper-plane text-sm" style={{ color: primary }}></i>
                <span>Daftar Sekarang</span>
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </a>
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div
          className="border-t pt-8"
          style={{ borderColor: `${primary}20` }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

            {/* Left — Copyright */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-center md:text-left">
              <p
                className="text-white/60 text-[11px] font-light tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                © {currentYear} <span className="text-white font-medium">Al Wafi Islamic Boarding School</span>. All rights reserved.
              </p>
              <div className="hidden md:block w-px h-4 bg-white/10"></div>
              <VisitorCounter />
            </div>

            {/* Center — Tech info */}
            <div
              className="hidden lg:flex items-center gap-3 px-4 py-2 backdrop-blur-sm border"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderColor: `${primary}20`,
                borderRadius: '2px'
              }}
            >
              <i className="fas fa-code text-[9px]" style={{ color: accent }}></i>
              <span
                className="text-[9px] uppercase tracking-widest text-white/50"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                BUILT.WITH.REACT + TAILWIND
              </span>
            </div>

            {/* Right — Legal */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {[
                { label: 'Privacy', href: '#' },
                { label: 'Terms', href: '#' },
                { label: 'Cookies', href: '#' }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="group relative text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: accent }}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Signature line */}
          <div className="mt-6 pt-4 border-t flex items-center justify-center gap-2"
               style={{ borderColor: `${primary}10` }}>
            <div className="h-px w-8" style={{ background: primary }}></div>
            <div className="w-1 h-1 rotate-45" style={{ background: accent }}></div>
            <span
              className="text-[9px] uppercase tracking-[0.3em] text-white/40"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              End.Of.System
            </span>
            <div className="w-1 h-1 rotate-45" style={{ background: accent }}></div>
            <div className="h-px w-8" style={{ background: primary }}></div>
          </div>
        </div>
      </div>

      {/* ============ BACK TO TOP BUTTON ============ */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center backdrop-blur-xl border transition-all duration-500 group ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
          borderColor: primary,
          boxShadow: `0 15px 40px -5px ${primary}60`,
          borderRadius: '4px'
        }}
        aria-label="Back to top"
      >
        {/* Corner brackets */}
        <div className="absolute top-1 left-1 w-2 h-2 border-l border-t" style={{ borderColor: accent }}></div>
        <div className="absolute top-1 right-1 w-2 h-2 border-r border-t" style={{ borderColor: accent }}></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b" style={{ borderColor: accent }}></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b" style={{ borderColor: accent }}></div>

        <i
          className="fas fa-arrow-up text-white text-sm group-hover:-translate-y-0.5 transition-transform"
        ></i>
      </button>
    </footer>
  );
};

export default Footer;