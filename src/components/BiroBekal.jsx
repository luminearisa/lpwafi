import React from 'react';
import { useLanguage } from '../LanguageContext';

const BiroBekal = ({ data }) => {
  const { t } = useLanguage();

  // Get color scheme from data or use defaults
  const colors = data?.colorScheme || {
    primary: { blue: "#1e3a8a", purple: "#7c3aed", indigo: "#4338ca" },
    secondary: { emerald: "#059669", cyan: "#0891b2", teal: "#0d9488" },
    accent: { lightBlue: "#3b82f6", lightPurple: "#9333ea", lightIndigo: "#6366f1" },
    gold: { primary: "#f59e0b", light: "#fbbf24", dark: "#d97706" }
  };

  // Add rose colors for this component
  const extendedColors = {
    ...colors,
    rose: { primary: "#f43f5e", light: "#fb7185", dark: "#e11d48" }
  };

  const opacity = data?.colorScheme?.opacity || {
    aboutPattern: 15,
    aboutCard: 95,
    aboutIcon: 80
  };

  // konfig data global dari program (text dari json + ikon)
  const rawGlobalPrograms = Array.isArray(t('biro_bekal.global_program.list')) ? t('biro_bekal.global_program.list') : [];
  const globalIcons = [
    "fas fa-compass",
    "fas fa-book-open",
    "fas fa-university",
    "fas fa-file-alt",
    "fas fa-chart-line",
    "fas fa-handshake"
  ];

  const globalPrograms = rawGlobalPrograms.map((item, index) => ({
    ...item,
    icon: globalIcons[index % globalIcons.length]
  }));

  // 4. Ambil list poin dari JSON
  const mentoringPoints = Array.isArray(t('biro_bekal.pillars.mentoring.list')) ? t('biro_bekal.pillars.mentoring.list') : [];
  const scholarshipPoints = Array.isArray(t('biro_bekal.pillars.scholarship.list')) ? t('biro_bekal.pillars.scholarship.list') : [];
  const alumniPoints = Array.isArray(t('biro_bekal.pillars.alumni.list')) ? t('biro_bekal.pillars.alumni.list') : [];

  return (
    <section 
      id="biro-bekal" 
      className="pt-40 pb-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about || 
                   `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Authentic Islamic Geometric Pattern - Academic Theme */}
      <div className="absolute inset-0" style={{ opacity: opacity.aboutPattern / 100 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bekalPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={extendedColors.accent.lightBlue}/>
              <stop offset="50%" stopColor={extendedColors.primary.purple}/>
              <stop offset="100%" stopColor={extendedColors.secondary.teal}/>
            </linearGradient>
          </defs>
          <pattern id="bekalPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Educational motif - book and knowledge */}
            <g transform="translate(30, 30)" stroke={extendedColors.accent.lightBlue} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* Open book shape */}
              <path d="M-15,-8 Q-15,-12 -8,-12 L8,-12 Q15,-12 15,-8 L15,8 Q15,12 8,12 L-8,12 Q-15,12 -15,8 Z"/>
              {/* Book spine */}
              <line x1="0" y1="-12" x2="0" y2="12" strokeWidth="0.2"/>
              {/* Text lines */}
              <line x1="-10" y1="-6" x2="-2" y2="-6" strokeWidth="0.1" opacity="0.5"/>
              <line x1="-10" y1="-2" x2="-2" y2="-2" strokeWidth="0.1" opacity="0.5"/>
              <line x1="-10" y1="2" x2="-2" y2="2" strokeWidth="0.1" opacity="0.5"/>
              <line x1="2" y1="-6" x2="10" y2="-6" strokeWidth="0.1" opacity="0.5"/>
              <line x1="2" y1="-2" x2="10" y2="-2" strokeWidth="0.1" opacity="0.5"/>
              <line x1="2" y1="2" x2="10" y2="2" strokeWidth="0.1" opacity="0.5"/>
            </g>
            
            {/* Connection lines - academic network */}
            <g stroke={extendedColors.primary.purple} strokeWidth="0.05" opacity="0.2">
              <line x1="15" y1="30" x2="45" y2="30"/>
              <line x1="30" y1="15" x2="30" y2="45"/>
            </g>
            
            {/* Corner academic elements */}
            <g transform="translate(15, 15)" stroke={extendedColors.secondary.teal} strokeWidth="0.05" fill="none" opacity="0.2">
              <circle cx="0" cy="0" r="3"/>
              <circle cx="0" cy="0" r="1" fill={extendedColors.secondary.teal} opacity="0.3"/>
            </g>
            <g transform="translate(45, 45)" stroke={extendedColors.secondary.teal} strokeWidth="0.05" fill="none" opacity="0.2">
              <circle cx="0" cy="0" r="3"/>
              <circle cx="0" cy="0" r="1" fill={extendedColors.secondary.teal} opacity="0.3"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#bekalPattern)"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 start-10 w-20 h-20 rounded-full blur-xl"
          style={{ 
            background: `linear-gradient(135deg, ${extendedColors.accent.lightBlue}20, ${extendedColors.primary.purple}20)` 
          }}
        ></div>
        <div 
          className="absolute top-40 end-20 w-16 h-16 rotate-45 blur-lg"
          style={{ 
            background: `linear-gradient(135deg, ${extendedColors.secondary.teal}15, ${extendedColors.accent.lightPurple}15)` 
          }}
        ></div>
        <div 
          className="absolute bottom-32 start-1/3 w-12 h-12 rounded-full blur-lg"
          style={{ 
            background: `linear-gradient(135deg, ${extendedColors.gold.primary}20, ${extendedColors.rose.primary}20)` 
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full me-4"
              style={{ background: extendedColors.accent.lightBlue }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: extendedColors.accent.lightBlue }}
            >
              { t('biro_bekal.header.badge') }
            </span>
            <div 
              className="w-1 h-8 rounded-full ms-4"
              style={{ background: extendedColors.accent.lightBlue }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${extendedColors.accent.lightBlue} 0%, ${extendedColors.primary.purple} 50%, ${extendedColors.secondary.teal} 100%)`
            }}
          >
            { t('biro_bekal.header.title') }
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            { t('biro_bekal.header.desc') }
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${extendedColors.accent.lightBlue} 0%, ${extendedColors.primary.purple} 50%, ${extendedColors.secondary.teal} 100%)`
            }}
          ></div>
        </div>

        {/* Introduction Section */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${extendedColors.accent.lightBlue} 0%, ${extendedColors.primary.purple} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-graduation-cap text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: extendedColors.accent.lightBlue }}
                  ></div>
                </div>
                <div className="ms-4">
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${extendedColors.accent.lightBlue} 0%, ${extendedColors.primary.purple} 100%)`
                    }}
                  >
                    { t('biro_bekal.intro.title') }
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: extendedColors.accent.lightBlue }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    { t('biro_bekal.intro.p1') } <strong>{ t('biro_bekal.intro.school_name') }</strong>.
                  </p>
                  <p>
                    { t('biro_bekal.intro.p2') } <strong>{ t('biro_bekal.intro.school_name') }</strong> { t('biro_bekal.intro.p2_end') }
                  </p>
                </div>
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                      alt="Gedung Al Wafi"
                      className="w-full h-64 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/e2e8f0/64748b?text=Al+Wafi+Building";
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  { t('biro_bekal.intro.p3') } <strong>{ t('biro_bekal.intro.school_name') }</strong>{ t('biro_bekal.intro.p3_end') }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 me-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${extendedColors.gold.primary} 0%, ${extendedColors.gold.light} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-bullseye text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: extendedColors.gold.primary }}
                  ></div>
                </div>
                <h2 
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${extendedColors.gold.primary} 0%, ${extendedColors.gold.light} 100%)`
                  }}
                >
                  { t('biro_bekal.vision.title') }
                </h2>
              </div>
              
              <div 
                className="p-8 rounded-2xl border-s-4"
                style={{ 
                  backgroundColor: `${extendedColors.gold.primary}10`,
                  borderColor: extendedColors.gold.primary
                }}
              >
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  { t('biro_bekal.vision.desc') }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Mentoring */}
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${extendedColors.accent.lightBlue}15 0%, ${extendedColors.primary.blue}15 100%)`
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${extendedColors.accent.lightBlue} 0%, ${extendedColors.primary.blue} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
                </div>
                <div className="ms-4">
                  <h3 
                    className="text-xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${extendedColors.accent.lightBlue} 0%, ${extendedColors.primary.blue} 100%)`
                    }}
                  >
                    { t('biro_bekal.pillars.mentoring.title') }
                  </h3>
                </div>
              </div>
              <ul className="space-y-3">
                {mentoringPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 me-3 group-hover:scale-110 transition-transform"
                      style={{ background: extendedColors.accent.lightBlue }}
                    >
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scholarship */}
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${extendedColors.secondary.emerald}15 0%, ${extendedColors.secondary.teal}15 100%)`
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${extendedColors.secondary.emerald} 0%, ${extendedColors.secondary.teal} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-award text-white text-2xl"></i>
                </div>
                <div className="ms-4">
                  <h3 
                    className="text-xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${extendedColors.secondary.emerald} 0%, ${extendedColors.secondary.teal} 100%)`
                    }}
                  >
                    { t('biro_bekal.pillars.scholarship.title') }
                  </h3>
                </div>
              </div>
              <ul className="space-y-3">
                {scholarshipPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 me-3 group-hover:scale-110 transition-transform"
                      style={{ background: extendedColors.secondary.emerald }}
                    >
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Alumni */}
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${extendedColors.primary.purple}15 0%, ${extendedColors.accent.lightPurple}15 100%)`
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${extendedColors.primary.purple} 0%, ${extendedColors.accent.lightPurple} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <div className="ms-4">
                  <h3 
                    className="text-xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${extendedColors.primary.purple} 0%, ${extendedColors.accent.lightPurple} 100%)`
                    }}
                  >
                    { t('biro_bekal.pillars.alumni.title') }
                  </h3>
                </div>
              </div>
              <ul className="space-y-3">
                {alumniPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 me-3 group-hover:scale-110 transition-transform"
                      style={{ background: extendedColors.primary.purple }}
                    >
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Programs Section */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm mb-8"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 me-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${extendedColors.rose.primary} 0%, ${extendedColors.rose.light} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-globe text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: extendedColors.rose.primary }}
                  ></div>
                </div>
                <h2 
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${extendedColors.rose.primary} 0%, ${extendedColors.rose.light} 100%)`
                  }}
                >
                  { t('biro_bekal.global_program.title') }
                </h2>
              </div>
              <p className="text-gray-600 text-lg">
                { t('biro_bekal.global_program.desc') }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalPrograms.map((program, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
                style={{
                  background: data?.colorScheme?.gradient?.aboutCard || 
                             `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                  opacity: opacity.aboutCard / 100
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div 
                      className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${extendedColors.secondary.emerald} 0%, ${extendedColors.secondary.cyan} 100%)`,
                        opacity: opacity.aboutIcon / 100
                      }}
                    >
                      <i className={`${program.icon} text-white text-2xl`}></i>
                      <div 
                        className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                        style={{ background: extendedColors.secondary.emerald }}
                      ></div>
                    </div>
                    <div className="ms-4">
                      <h3 
                        className="text-lg font-bold bg-clip-text text-transparent capitalize"
                        style={{ 
                          backgroundImage: `linear-gradient(90deg, ${extendedColors.secondary.emerald} 0%, ${extendedColors.secondary.cyan} 100%)`
                        }}
                      >
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Partnership Logos */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm mb-8"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 me-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${extendedColors.secondary.emerald} 0%, ${extendedColors.secondary.cyan} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-handshake text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: extendedColors.secondary.emerald }}
                  ></div>
                </div>
                <h2 
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${extendedColors.secondary.emerald} 0%, ${extendedColors.secondary.cyan} 100%)`
                  }}
                >
                  { t('biro_bekal.partners.title') }
                </h2>
              </div>
              <p className="text-gray-600 text-lg">
                { t('biro_bekal.partners.desc') }
              </p>
            </div>
          </div>

          {/* Partnership Universities Logos - Bagian ini tetap statis/hardcoded karena hanya gambar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* UIN Syarif Hidayatullah Jakarta */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/7.png"
                    alt="UIN Syarif Hidayatullah Jakarta"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=UIN+Jakarta";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">UIN Syarif Hidayatullah Jakarta</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>

            {/* Institut Pertanian Bogor */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/7.png"
                    alt="Institut Pertanian Bogor"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=IPB";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">Institut Pertanian Bogor</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>

            {/* Universitas Kebangsaan Malaysia */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/3.png"
                    alt="Universitas Kebangsaan Malaysia"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=UKM";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">Universitas Kebangsaan Malaysia</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>

            {/* Institut Teknologi Bandung */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/15.png"
                    alt="Institut Teknologi Bandung"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=ITB";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">Institut Teknologi Bandung</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>

            {/* Universitas Padjadjaran */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/1.png"
                    alt="Universitas Padjadjaran"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=UNPAD";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">Universitas Padjadjaran</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>

            {/* Universiti Teknologi Malaysia */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/4.png"
                    alt="Universiti Teknologi Malaysia"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=UTM";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">Universiti Teknologi Malaysia</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>

            {/* International Islamic University Malaysia */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/6.png"
                    alt="International Islamic University Malaysia"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=IIUM";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">International Islamic University Malaysia</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>

            {/* Binus University */}
            <div 
              className="group relative p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              <div className="relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  <img
                    src="https://al-wafi.sch.id/src/images/logo_sebaran/11.png"
                    alt="Binus University"
                    className="w-full h-16 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/100x60/f3f4f6/6b7280?text=BINUS";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-700 leading-tight">Binus University</p>
                <div 
                  className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                  style={{ background: extendedColors.secondary.emerald }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Statistics Teaser */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden text-center"
          style={{
            background: `linear-gradient(135deg, ${extendedColors.accent.lightBlue} 0%, ${extendedColors.primary.purple} 50%, ${extendedColors.secondary.teal} 100%)`
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="alumniPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <g transform="translate(20, 20)" stroke="white" strokeWidth="0.3" fill="none">
                    <circle cx="0" cy="0" r="8"/>
                    <circle cx="0" cy="0" r="4"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.5"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#alumniPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
              <i className="fas fa-users me-2"></i>
              { t('biro_bekal.cta.badge') }
            </div>
            <h2 className="text-4xl font-bold mb-4">{ t('biro_bekal.cta.title') }</h2>
            <p className="text-xl opacity-90 mb-8">
              { t('biro_bekal.cta.desc') }
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm opacity-80">{ t('biro_bekal.cta.stats.total') }</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-80">{ t('biro_bekal.cta.stats.ptn') }</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-80">{ t('biro_bekal.cta.stats.overseas') }</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">{ t('biro_bekal.cta.stats.scholarship') }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiroBekal;