import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

const QuranCTA = () => {
  const { t } = useLanguage();

  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  // Inject Arabic + Futuristic fonts
  React.useEffect(() => {
    const linkId = 'quran-futuristic-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: '#050810',
        fontFamily: "'Space Grotesk', 'Inter', sans-serif"
      }}
    >
      {/* ============ FUTURISTIC BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,72,160,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,72,160,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
          }}
        ></div>

        {/* Radial Glows */}
        <div
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 animate-pulse"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 animate-pulse"
          style={{ background: secondary, animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10"
          style={{ background: accent }}
        ></div>

        {/* Diagonal scan lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 8px)'
          }}
        ></div>

        {/* Islamic geometric pattern (subtle) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <g stroke={accent} strokeWidth="0.5" fill="none">
                <path d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z" />
                <circle cx="50" cy="50" r="20" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-geo)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============ MAIN CARD ============ */}
        <div
          className="relative overflow-hidden border"
          style={{
            background: 'linear-gradient(135deg, rgba(0,72,160,0.08) 0%, rgba(30,64,175,0.05) 50%, rgba(5,8,16,0.95) 100%)',
            borderColor: `${primary}30`,
            borderRadius: '4px',
            boxShadow: `0 30px 80px -20px ${primary}40, inset 0 0 0 1px rgba(255,255,255,0.03)`
          }}
        >
          {/* Large decorative Quran icon */}
          <i
            className="fas fa-book-quran absolute -right-8 -bottom-8 text-[220px] md:text-[280px] transform -rotate-12 opacity-[0.03] pointer-events-none"
            style={{ color: accent }}
          ></i>

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

          {/* Top HUD Bar */}
          <div
            className="flex items-center justify-between px-6 py-3 border-b backdrop-blur-xl"
            style={{ borderColor: `${primary}30`, background: 'rgba(0,72,160,0.15)' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
              </div>
              <span
                className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                QURAN.DIGITAL / V2.0
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: accent }}
              ></span>
              <span
                className="text-[9px] uppercase tracking-widest text-white/70"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ONLINE
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* ============ LEFT CONTENT ============ */}
              <div className="flex-1 max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center mb-6 group">
                  <div className="flex items-center">
                    <div className="w-3 h-3 border-l-2 border-t-2" style={{ borderColor: accent }}></div>
                    <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
                  </div>

                  <div
                    className="px-4 py-2 backdrop-blur-xl border relative overflow-hidden"
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
                        className="text-[9px] font-bold uppercase tracking-[0.3em]"
                        style={{
                          color: accent,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        [NEW.MODULE] FITUR BARU
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
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="block text-white">
                    {t('quran.title') || 'Al-Quran Digital'}
                  </span>
                  <span
                    className="block mt-3 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${accent} 50%, ${accent} 100%)`,
                      fontSize: '0.7em'
                    }}
                  >
                    Spiritual Experience
                  </span>
                </h2>

                {/* Tech divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-16" style={{ background: primary }}></div>
                  <div className="h-[2px] w-6" style={{ background: accent }}></div>
                  <div className="w-2 h-2 rotate-45" style={{ background: accent }}></div>
                </div>

                {/* Description */}
                <p
                  className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Nikmati kemudahan membaca Al-Quran, mendengarkan murottal dari berbagai Qori pilihan, dan memahami terjemahan dalam berbagai bahasa. Didesain khusus untuk memberikan pengalaman spiritual terbaik di mana saja.
                </p>

                {/* Features mini list */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: 'fas fa-book-open', label: '114 Surah' },
                    { icon: 'fas fa-headphones', label: 'Murottal' },
                    { icon: 'fas fa-language', label: 'Multi Bahasa' }
                  ].map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 px-3 py-2 backdrop-blur-sm border"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        borderColor: `${primary}20`,
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

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/quran"
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
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.25), transparent)' }}
                    ></span>

                    {/* Corner accents */}
                    <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-80"
                          style={{ borderColor: accent }}></span>
                    <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-80"
                          style={{ borderColor: accent }}></span>

                    <span className="relative flex items-center gap-3">
                      <i className="fas fa-book-open text-sm" style={{ color: accent }}></i>
                      <span>Mulai Membaca</span>
                      <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform duration-300"
                         style={{ color: accent }}></i>
                    </span>
                  </Link>

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
                      Pelajari Lebih
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
                    { value: '6236', label: 'Ayat' },
                    { value: '114', label: 'Surah' },
                    { value: '30', label: 'Juz' }
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

              {/* ============ RIGHT CONTENT — QURAN PREVIEW ============ */}
              <div className="hidden lg:block w-[380px] relative">
                <div className="relative">
                  {/* Decorative stacked frames */}
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

                  {/* Main Preview Card */}
                  <div
                    className="relative z-10 overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #0a0f1c 0%, #0f1629 100%)',
                      border: `1px solid ${primary}30`,
                      borderRadius: '4px',
                      boxShadow: `0 30px 60px -15px ${primary}40`
                    }}
                  >
                    {/* Top tech bar */}
                    <div
                      className="flex items-center justify-between px-4 py-2.5 border-b"
                      style={{
                        background: `linear-gradient(90deg, ${primary}40, ${secondary}30)`,
                        borderColor: `${primary}30`
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <i
                          className="fas fa-book-quran text-[11px]"
                          style={{ color: accent }}
                        ></i>
                        <span
                          className="text-[9px] uppercase tracking-[0.3em] text-white font-medium"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          SURAH / 001
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: accent }}
                        ></span>
                        <span
                          className="text-[8px] uppercase tracking-widest text-white/70"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          LIVE.READ
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Surah header */}
                      <div className="flex items-center justify-between mb-5 pb-4 border-b"
                           style={{ borderColor: `${primary}20` }}>
                        <div>
                          <span
                            className="block text-[9px] uppercase tracking-[0.25em] text-white/50 mb-1"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            // AL-FATIHAH
                          </span>
                          <span
                            className="block text-white font-semibold text-sm"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            Pembukaan
                          </span>
                        </div>
                        <div
                          className="px-3 py-1.5 backdrop-blur-sm border"
                          style={{
                            background: `${accent}15`,
                            borderColor: `${accent}40`,
                            borderRadius: '2px'
                          }}
                        >
                          <span
                            className="text-base font-bold"
                            style={{
                              color: accent,
                              fontFamily: "'Amiri', 'Scheherazade New', serif"
                            }}
                          >
                            ١
                          </span>
                        </div>
                      </div>

                      {/* Bismillah */}
                      <div
                        className="text-center mb-6 py-4"
                        dir="rtl"
                        style={{
                          fontFamily: "'Amiri', 'Scheherazade New', serif",
                          fontSize: '2rem',
                          lineHeight: 2.2,
                          color: 'white',
                          textShadow: `0 0 20px ${primary}40`
                        }}
                      >
                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                      </div>

                      {/* Decorative divider */}
                      <div className="flex items-center justify-center gap-2 mb-5">
                        <div className="h-px w-12" style={{ background: `${accent}40` }}></div>
                        <div className="w-1.5 h-1.5 rotate-45" style={{ background: accent }}></div>
                        <div className="h-px w-12" style={{ background: `${accent}40` }}></div>
                      </div>

                      {/* Translation */}
                      <div
                        className="text-center text-sm text-gray-400 leading-relaxed font-light mb-5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
                      </div>

                      {/* Ayat info */}
                      <div className="flex items-center justify-between pt-4 border-t"
                           style={{ borderColor: `${primary}20` }}>
                        <div className="flex items-center gap-2">
                          <i
                            className="fas fa-map-marker-alt text-[10px]"
                            style={{ color: accent }}
                          ></i>
                          <span
                            className="text-[9px] uppercase tracking-widest text-white/50"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            MAKKIYAH
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[9px] uppercase tracking-widest text-white/50"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            7 AYAT
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom action bar */}
                    <div
                      className="flex items-center justify-around px-4 py-3 border-t"
                      style={{
                        background: 'rgba(0,72,160,0.1)',
                        borderColor: `${primary}30`
                      }}
                    >
                      {[
                        { icon: 'fas fa-play', label: 'Play' },
                        { icon: 'fas fa-bookmark', label: 'Save' },
                        { icon: 'fas fa-share-alt', label: 'Share' }
                      ].map((action, i) => (
                        <button
                          key={i}
                          className="flex flex-col items-center gap-1 group"
                        >
                          <i
                            className={`${action.icon} text-[11px] text-white/60 group-hover:text-[${accent}] transition-colors`}
                            style={{ color: 'rgba(255,255,255,0.6)' }}
                          ></i>
                          <span
                            className="text-[8px] uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {action.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Floating accent indicator */}
                  <div
                    className="absolute -top-3 -right-3 px-2 py-1 text-[8px] font-mono uppercase tracking-widest z-30 border"
                    style={{
                      background: accent,
                      color: '#0a0f1c',
                      borderColor: accent,
                      borderRadius: '2px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700
                    }}
                  >
                    <i className="fas fa-star me-1 text-[8px]"></i>
                    PREMIUM
                  </div>

                  {/* Corner HUD indicator */}
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
                    HD.AUDIO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranCTA;