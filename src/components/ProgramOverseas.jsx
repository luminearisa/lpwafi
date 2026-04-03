import React from 'react';
import { useLanguage } from '../LanguageContext';

const ProgramOverseas = ({ data }) => {
  const { t } = useLanguage();

  // Get color scheme from data or use defaults
  const colors = data?.colorScheme || {
    primary: { blue: "#1e3a8a", purple: "#7c3aed", indigo: "#4338ca" },
    secondary: { emerald: "#059669", cyan: "#0891b2", teal: "#0d9488" },
    accent: { lightBlue: "#3b82f6", lightPurple: "#9333ea", lightIndigo: "#6366f1" },
    gold: { primary: "#f59e0b", light: "#fbbf24", dark: "#d97706" }
  };

  const opacity = data?.colorScheme?.opacity || {
    aboutPattern: 15,
    aboutCard: 95,
    aboutIcon: 80
  };

  // ngambil data dari json
  const missionPoints = Array.isArray(t('overseas_program.mission.list')) ? t('overseas_program.mission.list') : [];
  const malaysiaActivities = Array.isArray(t('overseas_program.cards.malaysia.activities')) ? t('overseas_program.cards.malaysia.activities') : [];

  return (
    <section 
      id="program-overseas" 
      className="pt-40 pb-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about || 
                   `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Authentic Islamic Geometric Pattern - Global Theme */}
      <div className="absolute inset-0" style={{ opacity: opacity.aboutPattern / 100 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="overseasPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.accent.lightBlue}/>
              <stop offset="50%" stopColor={colors.primary.indigo}/>
              <stop offset="100%" stopColor={colors.secondary.cyan}/>
            </linearGradient>
          </defs>
          <pattern id="overseasPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Global/overseas motif */}
            <g transform="translate(30, 30)" stroke={colors.accent.lightBlue} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* Globe/world shape */}
              <circle cx="0" cy="0" r="12"/>
              <ellipse cx="0" cy="0" rx="12" ry="6"/>
              <ellipse cx="0" cy="0" rx="6" ry="12"/>
              {/* Continents representation */}
              <path d="M-8,-4 Q-6,-6 -4,-4 Q-2,-2 0,-4 Q2,-6 4,-4 Q6,-2 8,-4" opacity="0.5"/>
              <path d="M-8,4 Q-6,2 -4,4 Q-2,6 0,4 Q2,2 4,4 Q6,6 8,4" opacity="0.5"/>
            </g>
            
            {/* Connection lines - international network */}
            <g stroke={colors.primary.indigo} strokeWidth="0.05" opacity="0.2">
              <line x1="15" y1="30" x2="45" y2="30"/>
              <line x1="30" y1="15" x2="30" y2="45"/>
              <line x1="20" y1="20" x2="40" y2="40"/>
              <line x1="40" y1="20" x2="20" y2="40"/>
            </g>
            
            {/* Corner elements - destinations */}
            <g transform="translate(15, 15)" stroke={colors.secondary.cyan} strokeWidth="0.05" fill="none" opacity="0.2">
              <circle cx="0" cy="0" r="2"/>
              <circle cx="0" cy="0" r="1" fill={colors.secondary.cyan} opacity="0.3"/>
            </g>
            <g transform="translate(45, 45)" stroke={colors.secondary.cyan} strokeWidth="0.05" fill="none" opacity="0.2">
              <circle cx="0" cy="0" r="2"/>
              <circle cx="0" cy="0" r="1" fill={colors.secondary.cyan} opacity="0.3"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#overseasPattern)"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.accent.lightBlue}20, ${colors.primary.indigo}20)` 
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 rotate-45 blur-lg"
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary.cyan}15, ${colors.accent.lightPurple}15)` 
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/3 w-12 h-12 rounded-full blur-lg"
          style={{ 
            background: `linear-gradient(135deg, ${colors.gold.primary}20, ${colors.primary.purple}20)` 
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full mr-4"
              style={{ background: colors.accent.lightBlue }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.accent.lightBlue }}
            >
              { t('overseas_program.header.badge') }
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.accent.lightBlue }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.primary.indigo} 50%, ${colors.secondary.cyan} 100%)`
            }}
          >
            { t('overseas_program.header.title') }
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            { t('overseas_program.header.desc') }
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.primary.indigo} 50%, ${colors.secondary.cyan} 100%)`
            }}
          ></div>
        </div>

        {/* Vision Section */}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div 
                      className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.gold.primary} 0%, ${colors.gold.light} 100%)`,
                        opacity: opacity.aboutIcon / 100
                      }}
                    >
                      <i className="fas fa-eye text-white text-2xl"></i>
                      <div 
                        className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                        style={{ background: colors.gold.primary }}
                      ></div>
                    </div>
                    <div className="ml-4">
                      <h2 
                        className="text-3xl font-bold bg-clip-text text-transparent"
                        style={{ 
                          backgroundImage: `linear-gradient(90deg, ${colors.gold.primary} 0%, ${colors.gold.light} 100%)`
                        }}
                      >
                        { t('overseas_program.vision.title') }
                      </h2>
                      <div 
                        className="w-12 h-0.5 mt-1 rounded-full"
                        style={{ background: colors.gold.primary }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    { t('overseas_program.vision.desc') }
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
            </div>
          </div>
        </div>

        {/* Mission Section */}
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
              <div className="flex items-center mb-8">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.primary.indigo} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-bullseye text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.primary.indigo} 100%)`
                    }}
                  >
                    { t('overseas_program.mission.title') }
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
              </div>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover:scale-110 transition-transform"
                      style={{ background: colors.accent.lightBlue }}
                    >
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Program Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* UIM & Umrah Program */}
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${colors.secondary.emerald}15 0%, ${colors.secondary.teal}15 100%)`
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.teal} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-kaaba text-white text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h3 
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.teal} 100%)`
                    }}
                  >
                    { t('overseas_program.cards.uim.title') }
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                { t('overseas_program.cards.uim.desc') }
              </p>
              <div 
                className="p-4 rounded-2xl border-l-4"
                style={{ 
                  backgroundColor: `${colors.secondary.emerald}10`,
                  borderColor: colors.secondary.emerald
                }}
              >
                <p className="text-gray-700 text-sm">
                  { t('overseas_program.cards.uim.highlight') }
                </p>
              </div>
            </div>
          </div>

          {/* Malaysia Program */}
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${colors.accent.lightBlue}15 0%, ${colors.primary.indigo}15 100%)`
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.primary.indigo} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-globe-asia text-white text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h3 
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.primary.indigo} 100%)`
                    }}
                  >
                    { t('overseas_program.cards.malaysia.title') }
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                { t('overseas_program.cards.malaysia.desc') }
              </p>
              <div 
                className="space-y-2"
              >
                {malaysiaActivities.map((activity, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ background: colors.accent.lightBlue }}
                    ></div>
                    <span className="text-gray-700 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden text-center"
          style={{
            background: `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.primary.indigo} 50%, ${colors.secondary.cyan} 100%)`
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="ctaPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <g transform="translate(20, 20)" stroke="white" strokeWidth="0.3" fill="none">
                    <circle cx="0" cy="0" r="8"/>
                    <circle cx="0" cy="0" r="4"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.5"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
              <i className="fas fa-plane mr-2"></i>
              { t('overseas_program.cta.badge') }
            </div>
            <h2 className="text-4xl font-bold mb-4">{ t('overseas_program.cta.title') }</h2>
            <p className="text-xl opacity-90 mb-8">
              { t('overseas_program.cta.desc') }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm opacity-80">{ t('overseas_program.cta.stats.countries') }</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-80">{ t('overseas_program.cta.stats.partners') }</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm opacity-80">{ t('overseas_program.cta.stats.alumni') }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverseas;