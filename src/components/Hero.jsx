import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const heroImages = Array.from({ length: 12 }, (_, i) => `/images_hero/hero-${i + 1}.jpg`);

const Hero = ({ data }) => {
  const { t } = useLanguage();
  const [bgIndex, setBgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  // Inject Futuristic Fonts
  useEffect(() => {
    const linkId = 'futuristic-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Carousel + Progress Bar
  useEffect(() => {
    const duration = 5000;
    const step = 50;
    const increment = (step / duration) * 100;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + increment;
      });
    }, step);

    const imageInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
      setProgress(0);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#fafbfd]"
      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    >
      {/* ============ BACKGROUND CAROUSEL ============ */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              idx === bgIndex ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Hero ${idx + 1}`}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/75 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white z-10"></div>

        {/* Futuristic Grid Pattern */}
        <div
          className="absolute inset-0 z-10 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(${primary}10 1px, transparent 1px), linear-gradient(90deg, ${primary}10 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
          }}
        ></div>

        {/* Animated Radial Glow - Primary */}
        <div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] z-10 opacity-20 animate-pulse"
          style={{ background: primary }}
        ></div>

        {/* Animated Radial Glow - Accent */}
        <div
          className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full blur-[100px] z-10 opacity-15 animate-pulse"
          style={{ background: accent, animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ============ LEFT CONTENT ============ */}
          <div className="space-y-8 lg:pe-6">

            {/* Futuristic Badge */}
            <div className="inline-flex items-center group">
              <div
                className="flex items-center px-4 py-2 backdrop-blur-xl border shadow-sm relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  borderColor: `${primary}20`,
                  borderRadius: '2px'
                }}
              >
                {/* Animated shimmer */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}15, transparent)` }}
                ></div>

                {/* Live indicator */}
                <div className="relative flex items-center">
                  <span
                    className="absolute w-2 h-2 rounded-full animate-ping"
                    style={{ background: accent, opacity: 0.6 }}
                  ></span>
                  <span
                    className="relative w-1.5 h-1.5 rounded-full me-3"
                    style={{ background: accent }}
                  ></span>
                </div>

                <span
                  className="text-[9px] uppercase tracking-[0.3em] font-semibold relative"
                  style={{ color: primary }}
                >
                  {t('hero.badge')}
                </span>
              </div>

              {/* Horizontal tech line */}
              <div
                className="h-px flex-1 ms-4 max-w-[120px] hidden sm:block"
                style={{
                  background: `linear-gradient(90deg, ${primary}40, transparent)`
                }}
              ></div>
            </div>

            {/* Main Title */}
            <div className="space-y-5">
              <h1
                className="text-[2.75rem] sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              >
                <span className="block text-gray-900">
                  {t('header.brand.title')}
                </span>
                <span
                  className="block mt-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`
                  }}
                >
                  {t('header.brand.subtitle')}
                </span>
              </h1>

              {/* Divider with accent */}
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-16" style={{ background: primary }}></div>
                <div className="h-[2px] w-6" style={{ background: accent }}></div>
              </div>

              <p
                className="text-[15px] md:text-base text-gray-600 max-w-xl leading-[1.75] tracking-wide font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('hero.desc.part1')}
                <span
                  className="font-semibold px-1 mx-0.5 rounded-sm"
                  style={{
                    color: primary,
                    background: `${accent}20`
                  }}
                >
                  {t('hero.desc.highlight')}
                </span>
                {t('hero.desc.part2')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary CTA */}
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                  boxShadow: `0 10px 30px -5px ${primary}50`,
                  borderRadius: '2px'
                }}
              >
                {/* Shimmer */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
                ></span>

                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-60"
                      style={{ borderColor: accent }}></span>
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-60"
                      style={{ borderColor: accent }}></span>

                <span className="relative flex items-center">
                  {t('hero.cta.register')}
                  <i className="fas fa-arrow-right ms-3 text-[10px] group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#about"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] bg-white/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 border"
                style={{
                  color: primary,
                  borderColor: `${primary}30`,
                  borderRadius: '2px'
                }}
              >
                <span className="flex items-center">
                  <span
                    className="w-1 h-1 rounded-full me-3"
                    style={{ background: accent }}
                  ></span>
                  {t('hero.cta.learn')}
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-500"
                  style={{ background: primary }}
                ></span>
              </a>
            </div>

            {/* Futuristic Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 relative">
              {/* Top border with gradient */}
              <div
                className="absolute top-0 left-0 w-full h-[1px]"
                style={{
                  background: `linear-gradient(90deg, ${primary}, ${secondary} 50%, transparent 100%)`
                }}
              ></div>

              {[
                { value: '1100', suffix: '+', label: t('hero.stats.alumni') },
                { value: '150', suffix: '+', label: t('hero.stats.teachers') },
                { value: 'A', suffix: '+', label: t('hero.stats.accreditation') }
              ].map((stat, i) => (
                <div key={i} className="pt-5 group">
                  <div
                    className="text-[2rem] lg:text-[2.5rem] font-bold mb-2 leading-none tracking-tight"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: primary
                    }}
                  >
                    {stat.value}
                    <span style={{ color: accent }}>{stat.suffix}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-px w-4 transition-all duration-300 group-hover:w-8"
                      style={{ background: accent }}
                    ></div>
                    <div
                      className="text-[9px] uppercase tracking-[0.25em] font-medium text-gray-500"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============ RIGHT CONTENT ============ */}
          <div className="relative mt-12 lg:mt-0 hidden md:block">
            <div className="relative">
              {/* Decorative elements behind */}
              <div
                className="absolute -top-6 -right-6 w-full h-full border-2 z-0"
                style={{
                  borderColor: `${primary}15`,
                  borderRadius: '4px'
                }}
              ></div>
              <div
                className="absolute -top-3 -right-3 w-full h-full border z-0"
                style={{
                  borderColor: `${accent}30`,
                  borderRadius: '4px'
                }}
              ></div>

              {/* Main Image Frame */}
              <div
                className="relative z-10 p-2 bg-white border shadow-2xl"
                style={{
                  borderColor: `${primary}10`,
                  boxShadow: `0 30px 60px -20px ${primary}25, 0 20px 40px -10px ${secondary}15`,
                  borderRadius: '4px'
                }}
              >
                {/* Top tech bar */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b"
                     style={{ borderColor: `${primary}10` }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
                  <span
                    className="text-[8px] uppercase tracking-[0.3em] font-mono text-gray-400"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    CAMPUS.01 / LIVE
                  </span>
                </div>

                <div className="relative overflow-hidden" style={{ borderRadius: '2px' }}>
                  <img
                    src={data?.images?.hero || "/placeholder-building.jpg"}
                    alt="Al Wafi Islamic Boarding School"
                    className="w-full h-[420px] lg:h-[520px] object-cover transition-all duration-[2000ms] hover:scale-[1.03]"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x800/0048A0/ffffff?text=Al+Wafi+Campus";
                    }}
                  />

                  {/* Tech overlay scan lines */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,72,160,0.15) 0px, rgba(0,72,160,0.15) 1px, transparent 1px, transparent 4px)'
                    }}
                  ></div>

                  {/* Bottom gradient with data */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <div
                          className="text-[9px] uppercase tracking-[0.3em] text-white/60 mb-1 font-mono"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          // ESTABLISHED
                        </div>
                        <div className="text-white text-sm font-semibold">
                          Al Wafi Islamic Boarding School
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-2 px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20"
                        style={{ borderRadius: '2px' }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: accent }}
                        ></div>
                        <span
                          className="text-[9px] uppercase tracking-widest text-white font-mono"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner HUD */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    {[1,2,3].map(i => (
                      <div
                        key={i}
                        className="h-px bg-white/60"
                        style={{ width: `${20 + i * 5}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card 1 — UIM (Primary accent) */}
              <div
                className="absolute -bottom-6 -start-6 lg:-start-10 backdrop-blur-xl p-4 max-w-[240px] z-20 border transition-all duration-500 hover:-translate-y-1 group"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  borderColor: `${primary}20`,
                  boxShadow: `0 20px 40px -10px ${primary}30`,
                  borderRadius: '4px'
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 flex-shrink-0 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:rotate-6"
                    style={{
                      background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                      borderRadius: '3px'
                    }}
                  >
                    <i className="fas fa-certificate text-white text-sm relative z-10"></i>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-bold text-gray-900 text-[11px] uppercase tracking-wider mb-1 leading-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {t('hero.cards.uim_title')}
                    </div>
                    <div
                      className="text-[10px] text-gray-500 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t('hero.cards.uim_sub')}
                    </div>
                  </div>
                </div>
                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${primary}, transparent)` }}
                ></div>
              </div>

              {/* Floating Card 2 — Campus (Accent amber) */}
              <div
                className="absolute -top-6 -end-6 lg:-end-10 backdrop-blur-xl p-4 max-w-[240px] z-20 border transition-all duration-500 hover:-translate-y-1 group"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  borderColor: `${accent}30`,
                  boxShadow: `0 20px 40px -10px ${accent}30`,
                  borderRadius: '4px'
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 flex-shrink-0 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:rotate-6"
                    style={{
                      background: accent,
                      borderRadius: '3px'
                    }}
                  >
                    <i className="fas fa-map-marker-alt text-white text-sm relative z-10"></i>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-bold text-gray-900 text-[11px] uppercase tracking-wider mb-1 leading-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {t('hero.cards.campus_title')}
                    </div>
                    <div
                      className="text-[10px] text-gray-500 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t('hero.cards.campus_sub')}
                    </div>
                  </div>
                </div>
                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                ></div>
              </div>

              {/* Corner tech indicator */}
              <div
                className="absolute -bottom-4 -right-4 px-2 py-1 text-[8px] font-mono uppercase tracking-widest z-30 border"
                style={{
                  background: primary,
                  color: 'white',
                  borderColor: primary,
                  borderRadius: '2px',
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                <i className="fas fa-signal me-1 text-[8px]" style={{ color: accent }}></i>
                {String(bgIndex + 1).padStart(2, '0')}/{String(heroImages.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* ============ CAROUSEL PROGRESS INDICATOR ============ */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2 backdrop-blur-xl border z-30"
             style={{
               background: 'rgba(255,255,255,0.8)',
               borderColor: `${primary}15`,
               borderRadius: '2px'
             }}>
          <span
            className="text-[9px] uppercase tracking-[0.25em] font-medium text-gray-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Slide
          </span>
          <div className="flex gap-1">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setBgIndex(idx);
                  setProgress(0);
                }}
                className="relative h-1 transition-all duration-500 overflow-hidden"
                style={{
                  width: idx === bgIndex ? '32px' : '12px',
                  background: idx === bgIndex ? `${primary}20` : `${primary}15`,
                  borderRadius: '2px'
                }}
                aria-label={`Slide ${idx + 1}`}
              >
                {idx === bgIndex && (
                  <div
                    className="absolute inset-0 transition-all duration-100 ease-linear"
                    style={{
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, ${primary}, ${accent})`,
                      borderRadius: '2px'
                    }}
                  ></div>
                )}
              </button>
            ))}
          </div>
          <span
            className="text-[9px] font-mono font-semibold"
            style={{ color: primary, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {String(bgIndex + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;