import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero = ({ data }) => {

  const { t } = useLanguage();

  // Extract colors from data
  const colors = data?.colorScheme || {
    primary: { blue: '#1e3a8a', purple: '#7c3aed', indigo: '#4338ca' },
    secondary: { emerald: '#10b981', cyan: '#0891b2', teal: '#0d9488' },
    accent: { lightBlue: '#60a5fa', lightPurple: '#a78bfa', lightIndigo: '#818cf8' },
    gold: { primary: '#f59e0b', light: '#fbbf24', dark: '#d97706' }
  };

  // Extract opacity settings from data
  const opacity = data?.colorScheme?.opacity || {
    heroPattern: 15,
    heroOverlay: 70,
    carouselImage: 50,
    floatingElements: { element1: 20, element2: 18, element3: 16, element4: 14 },
    patternStroke: 0.5,
    patternFill: 0.08,
    patternDots: 0.2,
    animatedDots: 0.15
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.hero ||
          `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
      }}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Carousel Images */}
          {data?.images?.carousel?.length > 0 ? (
            data.images.carousel.map((image, index) => (
              <div key={index} className="absolute inset-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover animate-fadeInOut"
                  style={{
                    animationDelay: image.delay,
                    animationDuration: '32s',
                    opacity: 0,
                    maxOpacity: opacity.carouselImage / 100
                  }}
                />
              </div>
            ))
          ) : (
            // Fallback single image if carousel data not available
            <div className="absolute inset-0">
              <img
                src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                alt="Gedung Al Wafi"
                className="w-full h-full object-cover"
                style={{ opacity: opacity.carouselImage / 100 }}
              />
            </div>
          )}
        </div>

        {/* Overlay Gradient to maintain current style */}
        <div
          className="absolute inset-0"
          style={{
            background: data?.colorScheme?.gradient?.heroOverlay ||
              `linear-gradient(135deg, ${colors.primary.blue}${opacity.heroOverlay.toString(16).padStart(2, '0')} 0%, ${colors.primary.purple}${opacity.heroOverlay.toString(16).padStart(2, '0')} 50%, ${colors.primary.indigo}${opacity.heroOverlay.toString(16).padStart(2, '0')} 100%)`
          }}
        ></div>
      </div>

      {/* Islamic Geometric Patterns */}
      <div className="absolute inset-0 z-10">
        {/* Futuristic Pattern - Static Modern Design */}
        <div className="absolute inset-0" style={{ opacity: opacity.heroPattern / 100 }}>
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="futuristicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
                <stop offset="50%" stopColor="rgba(147,51,234,0.9)" />
                <stop offset="100%" stopColor="rgba(99,102,241,0.8)" />
              </linearGradient>
              <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </radialGradient>
            </defs>

            {/* Geometric Grid Network */}
            <g stroke="rgba(59,130,246,0.6)" strokeWidth="0.3" fill="none">
              {/* Horizontal lines */}
              <line x1="0" y1="20" x2="100" y2="20" />
              <line x1="0" y1="40" x2="100" y2="40" />
              <line x1="0" y1="60" x2="100" y2="60" />
              <line x1="0" y1="80" x2="100" y2="80" />

              {/* Vertical lines */}
              <line x1="20" y1="0" x2="20" y2="100" />
              <line x1="40" y1="0" x2="40" y2="100" />
              <line x1="60" y1="0" x2="60" y2="100" />
              <line x1="80" y1="0" x2="80" y2="100" />
            </g>

            {/* Circuit Board Pattern */}
            <g stroke="rgba(147,51,234,0.7)" strokeWidth="0.4" fill="none">
              <path d="M10,10 L30,10 L30,30 L50,30 L50,10 L70,10 L70,30 L90,30" />
              <path d="M10,50 L20,50 L20,70 L40,70 L40,50 L60,50 L60,70 L90,70" />
              <path d="M15,15 L15,25 L35,25 L35,35 L55,35 L55,25 L75,25 L75,35" />
            </g>

            {/* Hexagonal Tech Nodes */}
            <g fill="rgba(59,130,246,0.4)" stroke="rgba(59,130,246,0.8)" strokeWidth="0.3">
              <polygon points="20,15 25,12 30,15 30,21 25,24 20,21" />
              <polygon points="50,35 55,32 60,35 60,41 55,44 50,41" />
              <polygon points="70,55 75,52 80,55 80,61 75,64 70,61" />
              <polygon points="30,75 35,72 40,75 40,81 35,84 30,81" />
            </g>

            {/* Digital Dots Matrix */}
            <g fill="rgba(99,102,241,0.8)">
              <circle cx="15" cy="25" r="1.2" />
              <circle cx="35" cy="15" r="1.0" />
              <circle cx="55" cy="45" r="1.2" />
              <circle cx="75" cy="35" r="1.0" />
              <circle cx="25" cy="65" r="1.2" />
              <circle cx="45" cy="75" r="1.0" />
              <circle cx="65" cy="25" r="1.2" />
              <circle cx="85" cy="65" r="1.0" />
            </g>

            {/* Tech Corner Elements */}
            <g stroke="rgba(147,51,234,0.8)" strokeWidth="0.4" fill="none">
              <path d="M5,5 L15,5 L15,15 M5,5 L5,15" />
              <path d="M85,5 L95,5 L95,15 M95,5 L95,15" />
              <path d="M5,85 L15,85 L15,95 M5,85 L5,95" />
              <path d="M85,85 L95,85 L95,95 M95,85 L95,95" />
            </g>

            {/* Data Flow Lines */}
            <g stroke="url(#futuristicGradient)" strokeWidth="0.5" fill="none" strokeDasharray="3,2">
              <path d="M0,30 Q25,35 50,30 T100,30" />
              <path d="M0,70 Q25,65 50,70 T100,70" />
            </g>

            {/* Glowing Accent Points */}
            <g fill="url(#glowGradient)">
              <circle cx="40" cy="20" r="2" opacity="0.8" />
              <circle cx="60" cy="60" r="2" opacity="0.8" />
              <circle cx="20" cy="80" r="2" opacity="0.8" />
              <circle cx="80" cy="40" r="2" opacity="0.8" />
            </g>

            {/* Triangular Tech Accents */}
            <g fill="rgba(59,130,246,0.6)" stroke="rgba(59,130,246,0.9)" strokeWidth="0.3">
              <polygon points="45,5 50,12 40,12" />
              <polygon points="75,85 80,92 70,92" />
              <polygon points="5,45 12,50 5,55" />
              <polygon points="95,25 95,35 88,30" />
            </g>
          </svg>
        </div>

        {/* Very Subtle Floating Elements */}
        <div className="absolute top-32 left-20 text-white" style={{ opacity: opacity.floatingElements.element1 / 100 }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g transform="translate(12, 12)">
              <path d="M0,-8 L4,-4 L8,0 L4,4 L0,8 L-4,4 L-8,0 L-4,-4 Z"
                fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.5" />
              <animateTransform attributeName="transform" type="rotate"
                values="0 12 12;360 12 12" dur="40s" repeatCount="indefinite" />
            </g>
          </svg>
        </div>

        <div className="absolute top-48 right-24 text-white" style={{ opacity: opacity.floatingElements.element2 / 100, animationDelay: '5s' }}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <g transform="translate(10, 10)">
              <path d="M0,-6 L2,-2 L6,0 L2,2 L0,6 L-2,2 L-6,0 L-2,-2 Z"
                fill="currentColor" opacity="0.6" />
              <animateTransform attributeName="transform" type="rotate"
                values="0 10 10;-360 10 10" dur="50s" repeatCount="indefinite" />
            </g>
          </svg>
        </div>

        <div className="absolute bottom-40 left-28 text-white" style={{ opacity: opacity.floatingElements.element3 / 100, animationDelay: '10s' }}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <g transform="translate(9, 9)">
              <circle cx="0" cy="0" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.7" />
              <animateTransform attributeName="transform" type="rotate"
                values="0 9 9;360 9 9" dur="60s" repeatCount="indefinite" />
            </g>
          </svg>
        </div>

        <div className="absolute bottom-20 right-36 text-white" style={{ opacity: opacity.floatingElements.element4 / 100, animationDelay: '15s' }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <g transform="translate(8, 8)">
              <path d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z"
                fill="none" stroke="currentColor" strokeWidth="0.6" />
              <animateTransform attributeName="transform" type="rotate"
                values="0 8 8;-360 8 8" dur="35s" repeatCount="indefinite" />
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">

          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm text-white/90 font-semibold shadow-lg">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <i className="fas fa-mosque mr-2 text-emerald-300"></i>
              {/* === bagian label badge === */}
              {t('hero.badge')}
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                <span className="block drop-shadow-lg">
                  {/* bagian Hero Headline */}
                  {t('hero.title')}
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/85 font-light max-w-2xl leading-relaxed">
                {/* hero description */}
                {t('hero.desc.part1')}
                <span className="text-emerald-400 font-semibold"> {t('hero.desc.highlight')}</span>,
                {t('hero.desc.part2')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center text-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'} 0%, ${colors.gold?.light || '#fbbf24'} 50%, ${colors.gold?.dark || '#d97706'} 100%)`
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold?.dark || '#d97706'} 0%, ${colors.gold?.primary || '#f59e0b'} 50%, ${colors.gold?.light || '#fbbf24'} 100%)`;
                  e.target.style.transform = 'translateY(-4px) scale(1.02)';
                  e.target.style.boxShadow = `0 25px 50px -12px ${colors.gold?.primary || '#f59e0b'}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'} 0%, ${colors.gold?.light || '#fbbf24'} 50%, ${colors.gold?.dark || '#d97706'} 100%)`;
                  e.target.style.transform = 'translateY(-4px) scale(1)';
                  e.target.style.boxShadow = '';
                }}
              >
                <i className="fas fa-user-plus mr-3 group-hover:scale-110 transition-transform"></i>
                {/* tombol daftar */}
                <span>{t('hero.cta.register')}</span>
              </a>

              <a
                href="#about"
                className="group px-8 py-4 backdrop-blur-xl border text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center text-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'}20 0%, ${colors.gold?.light || '#fbbf24'}15 50%, ${colors.gold?.dark || '#d97706'}20 100%)`,
                  borderColor: `${colors.gold?.light || '#fbbf24'}50`
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'}30 0%, ${colors.gold?.light || '#fbbf24'}25 50%, ${colors.gold?.dark || '#d97706'}30 100%)`;
                  e.target.style.borderColor = `${colors.gold?.light || '#fbbf24'}80`;
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'}20 0%, ${colors.gold?.light || '#fbbf24'}15 50%, ${colors.gold?.dark || '#d97706'}20 100%)`;
                  e.target.style.borderColor = `${colors.gold?.light || '#fbbf24'}50`;
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <i className="fas fa-info-circle mr-3 group-hover:scale-110 transition-transform"></i>
                {/* tombol info lebih lanjut */}
                <span>{t('hero.cta.learn')}</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">1100+</div>
                <div className="text-sm text-white/70 font-medium">{t('hero.stats.alumni')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-white/70 font-medium">{t('hero.stats.teachers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">A</div>
                <div className="text-sm text-white/70 font-medium">{t('hero.stats.accreditation')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Image Display */}
          <div className="relative lg:pl-8">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4">
                <div
                  className="w-full h-full rounded-3xl blur-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary.blue}33 0%, ${colors.primary.purple}33 100%)`
                  }}
                ></div>
              </div>

              {/* Image */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl">
                <img
                  src={data?.images?.hero || "/placeholder-building.jpg"}
                  alt="Al Wafi Islamic Boarding School"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400/1e293b/ffffff?text=Al+Wafi+Campus";
                  }}
                />
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-2xl max-w-xs">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.emerald}dd 100%)`
                    }}
                  >
                    <i className="fas fa-certificate text-white text-lg"></i>
                  </div>
                  <div>
                    {/* card translate 1 */}
                    <div className="font-bold text-gray-900 text-base">{t('hero.cards.uim_title')}</div>
                    <div className="text-sm text-gray-600">{t('hero.cards.uim_sub')}</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-2xl max-w-xs">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.blue}dd 100%)`
                    }}
                  >
                    <i className="fas fa-map-marker-alt text-white text-lg"></i>
                  </div>
                  <div>
                    {/* card translate 2 */}
                    <div className="font-bold text-gray-900 text-base">{t('hero.cards.campus_title')}</div>
                    <div className="text-sm text-gray-600">{t('hero.cards.campus_sub')}</div>
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

export default Hero;
