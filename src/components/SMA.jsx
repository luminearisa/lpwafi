import React from 'react';
import { useLanguage } from '../LanguageContext';

const SMA = ({ data }) => {
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

  // ambil data list dari json
  const missionPoints = Array.isArray(t('sma.mission.list')) ? t('sma.mission.list') : [];
  
  // config keunggulan (text nya dari json + ikon/warna statis)
  const rawExcellenceTitles = Array.isArray(t('sma.excellence.list')) ? t('sma.excellence.list') : [];
  
  const excellenceStaticData = [
    { icon: "fas fa-medal", color: colors.gold.primary },
    { icon: "fas fa-leaf", color: colors.secondary.emerald },
    { icon: "fas fa-heart", color: colors.primary.purple },
    { icon: "fas fa-running", color: colors.accent.lightBlue },
    { icon: "fas fa-globe", color: colors.secondary.cyan },
    { icon: "fas fa-chart-line", color: colors.primary.blue },
    { icon: "fas fa-chalkboard-teacher", color: colors.accent.lightPurple },
    { icon: "fas fa-language", color: colors.secondary.teal },
    { icon: "fas fa-university", color: colors.primary.indigo }
  ];

  const excellencePoints = rawExcellenceTitles.map((title, index) => ({
    title: title,
    // fallback index kalo kepanjangan dari array statis
    ...excellenceStaticData[index % excellenceStaticData.length]
  }));

  return (
    <section 
      id="sma" 
      className="pt-40 pb-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about || 
                   `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Islamic Geometric Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity.aboutPattern / 100 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="smaPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary.purple}/>
              <stop offset="50%" stopColor={colors.accent.lightPurple}/>
              <stop offset="100%" stopColor={colors.primary.indigo}/>
            </linearGradient>
          </defs>
          <pattern id="smaPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Islamic star pattern for senior high school */}
            <g transform="translate(20, 20)" stroke={colors.primary.purple} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* 12-pointed star representing excellence and completeness */}
              <path d="M0,-12 L2,-8 L6,-10 L4,-6 L8,-6 L6,-2 L10,-4 L8,0 L10,4 L6,2 L8,6 L4,6 L6,10 L2,8 L0,12 L-2,8 L-6,10 L-4,6 L-8,6 L-6,2 L-10,4 L-8,0 L-10,-4 L-6,-2 L-8,-6 L-4,-6 L-6,-10 L-2,-8 Z"/>
              {/* Inner circle */}
              <circle cx="0" cy="0" r="4" stroke={colors.primary.purple} strokeWidth="0.08" opacity="0.4"/>
              {/* Center dot */}
              <circle cx="0" cy="0" r="1" fill={colors.primary.purple} opacity="0.5"/>
            </g>
            
            {/* Connecting lines */}
            <g stroke={colors.accent.lightPurple} strokeWidth="0.05" opacity="0.2">
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#smaPattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full mr-4"
              style={{ background: colors.primary.purple }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.primary.purple }}
            >
              {/* Translate Badge */}
              { t('sma.header.badge') }
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.primary.purple }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.primary.purple} 0%, ${colors.accent.lightPurple} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            {/* Translate Title */}
            { t('sma.header.title') }
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {/* Translate Desc */}
            { t('sma.header.desc') }
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.primary.purple} 0%, ${colors.accent.lightPurple} 50%, ${colors.primary.indigo} 100%)`
            }}
          ></div>
        </div>

        {/* Profile Section */}
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
                    background: `linear-gradient(135deg, ${colors.primary.purple} 0%, ${colors.accent.lightPurple} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-graduation-cap text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.primary.purple }}
                  ></div>
                </div>
                <div className="ml-4">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-sm font-semibold mb-2">
                    <i className="fas fa-school mr-2" style={{ color: colors.primary.purple }}></i>
                    {/* Translate Profile Badge */}
                    { t('sma.profile.badge') }
                  </div>
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.primary.purple} 0%, ${colors.accent.lightPurple} 100%)`
                    }}
                  >
                    {/* Translate Profile Title */}
                    { t('sma.profile.title') }
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-2 rounded-full"
                    style={{ background: colors.primary.purple }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    { t('sma.profile.p1') }
                  </p>
                  <p>
                    { t('sma.profile.p2') }
                  </p>
                </div>
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_sma.webp"
                      alt="Gedung SMA Al Wafi"
                      className="w-full h-64 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/e2e8f0/64748b?text=SMA+Al+Wafi";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-sm font-semibold mb-6">
                  <i className="fas fa-eye mr-2" style={{ color: colors.secondary.emerald }}></i>
                  {/* Translate Vision Badge */}
                  { t('sma.vision.badge') }
                </div>
                <h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.teal} 100%)`
                  }}
                >
                  {/* Translate Vision Title */}
                  { t('sma.vision.title') }
                </h2>
              </div>
              
              <div 
                className="p-8 rounded-2xl border-l-4 text-center"
                style={{ 
                  backgroundColor: `${colors.secondary.emerald}10`,
                  borderColor: colors.secondary.emerald
                }}
              >
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  { t('sma.vision.desc') }
                </p>
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
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold mb-6">
                  <i className="fas fa-bullseye mr-2" style={{ color: colors.accent.lightBlue }}></i>
                  {/* Translate Mission Badge */}
                  { t('sma.mission.badge') }
                </div>
                <h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                  }}
                >
                  {/* Translate Mission Title */}
                  { t('sma.mission.title') }
                </h2>
              </div>

              <div className="space-y-4">
                {missionPoints.map((mission, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-200 hover:-translate-y-1 flex items-start"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform flex-shrink-0"
                      style={{ background: colors.accent.lightBlue }}
                    >
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Excellence Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.primary.purple} 0%, ${colors.accent.lightPurple} 50%, ${colors.primary.indigo} 100%)`
          }}
        >
          {/* Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="excellencePattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    {/* Excellence star pattern */}
                    <path d="M0,-15 L3,-6 L12,-6 L6,0 L9,9 L0,6 L-9,9 L-6,0 L-12,-6 L-3,-6 Z"/>
                    <circle cx="0" cy="0" r="8" stroke="white" strokeWidth="0.2" opacity="0.3"/>
                    <circle cx="0" cy="0" r="3" fill="white" opacity="0.4"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#excellencePattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-trophy mr-2"></i>
                {/* Translate Excellence Badge */}
                { t('sma.excellence.badge') }
              </div>
              <h2 className="text-4xl font-bold mb-6">{ t('sma.excellence.title') }</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
                { t('sma.excellence.desc') }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {excellencePoints.map((point, index) => (
                <div 
                  key={index}
                  className="group bg-white/15 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/25 transition-all duration-300 border border-white/20 hover:-translate-y-2"
                >
                  <div className="text-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <i 
                        className={`${point.icon} text-2xl text-white`}
                      ></i>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed text-center">
                    {point.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-medal text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">{ t('sma.excellence.summary.accreditation.title') }</h4>
                <p className="text-sm opacity-90">{ t('sma.excellence.summary.accreditation.desc') }</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">{ t('sma.excellence.summary.overseas.title') }</h4>
                <p className="text-sm opacity-90">{ t('sma.excellence.summary.overseas.desc') }</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-university text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">{ t('sma.excellence.summary.bekal.title') }</h4>
                <p className="text-sm opacity-90">{ t('sma.excellence.summary.bekal.desc') }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMA;