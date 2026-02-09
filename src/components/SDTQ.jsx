import React from 'react';
import { useLanguage } from '../LanguageContext';

const SDTQ = ({ data }) => {
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

  // ngambil data dari "data.json"
  // ngambil dari JSON, tapi warna nya tetep
  const rawTeachingConcepts = Array.isArray(t('sdtq.teaching.concepts')) ? t('sdtq.teaching.concepts') : [];
  const teachingColors = [
    colors.secondary.emerald,
    colors.primary.blue,
    colors.accent.lightBlue,
    colors.primary.purple,
    colors.gold.primary
  ];

  const teachingConcepts = rawTeachingConcepts.map((item, index) => ({
    ...item,
    color: teachingColors[index % teachingColors.length]
  }));

  // 4. config Data Tahfidz (Text dari JSON + Ikon/Warna Statis)
  const rawTahfidzPrograms = Array.isArray(t('sdtq.tahfidz.programs')) ? t('sdtq.tahfidz.programs') : [];
  const tahfidzStaticData = [
    { icon: "fas fa-microphone", color: colors.secondary.emerald },
    { icon: "fas fa-users", color: colors.primary.blue },
    { icon: "fas fa-certificate", color: colors.accent.lightBlue },
    { icon: "fas fa-calendar-alt", color: colors.primary.purple },
    { icon: "fas fa-campground", color: colors.gold.primary }
  ];

  const tahfidzPrograms = rawTahfidzPrograms.map((item, index) => ({
    ...item,
    ...tahfidzStaticData[index % tahfidzStaticData.length]
  }));

  return (
    <section 
      id="sdtq" 
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
            <linearGradient id="sdtqPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.secondary.emerald}/>
              <stop offset="50%" stopColor={colors.primary.blue}/>
              <stop offset="100%" stopColor={colors.gold.primary}/>
            </linearGradient>
          </defs>
          <pattern id="sdtqPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Islamic book and knowledge pattern */}
            <g transform="translate(20, 20)" stroke={colors.secondary.emerald} strokeWidth="0.1" fill="none" opacity="0.3">
              <rect x="-8" y="-6" width="16" height="12" rx="1" stroke={colors.secondary.emerald} strokeWidth="0.08"/>
              <line x1="-6" y1="-3" x2="6" y2="-3" stroke={colors.secondary.emerald} strokeWidth="0.06"/>
              <line x1="-6" y1="0" x2="6" y2="0" stroke={colors.secondary.emerald} strokeWidth="0.06"/>
              <line x1="-6" y1="3" x2="6" y2="3" stroke={colors.secondary.emerald} strokeWidth="0.06"/>
              <circle cx="0" cy="0" r="0.5" fill={colors.secondary.emerald} opacity="0.4"/>
            </g>
            
            {/* Connecting lines */}
            <g stroke={colors.primary.blue} strokeWidth="0.05" opacity="0.2">
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#sdtqPattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full mr-4"
              style={{ background: colors.secondary.emerald }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.secondary.emerald }}
            >
              {/* Translate Badge */}
              { t('sdtq.header.badge') }
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.secondary.emerald }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 50%, ${colors.gold.primary} 100%)`
            }}
          >
            {/* Translate Title */}
            { t('sdtq.header.title') }
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {/* Translate Desc */}
            { t('sdtq.header.desc') }
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 50%, ${colors.gold.primary} 100%)`
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    { t('sdtq.intro.p1') }
                  </p>
                  <p>
                    { t('sdtq.intro.p2') }
                  </p>
                </div>
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                      alt="Gedung SDTQ Al Wafi"
                      className="w-full h-64 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/e2e8f0/64748b?text=SDTQ+Al+Wafi";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Excellence Program Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-semibold mb-6">
              <i className="fas fa-star mr-2" style={{ color: colors.gold.primary }}></i>
              {/* Translate Excellence Badge */}
              { t('sdtq.excellence.badge') }
            </div>
            <h2 
              className="text-3xl font-bold bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 100%)`
              }}
            >
              {/* Translate Excellence Title */}
              { t('sdtq.excellence.title') }
            </h2>
          </div>
        </div>

        {/* Teaching Concepts Section */}
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
                  <i className="fas fa-lightbulb mr-2" style={{ color: colors.primary.blue }}></i>
                  {/* Translate Teaching Badge */}
                  { t('sdtq.teaching.badge') }
                </div>
                <h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                  }}
                >
                  {/* Translate Teaching Title */}
                  { t('sdtq.teaching.title') }
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachingConcepts.map((concept, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:-translate-y-2"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? `${concept.color}05` : 'rgba(255,255,255,0.9)' 
                    }}
                  >
                    <div className="mb-4">
                      <h3 
                        className="font-bold text-lg mb-4"
                        style={{ color: concept.color }}
                      >
                        {concept.title}
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          {/* Translate Labels */}
                          <span className="font-semibold text-gray-800">{ t('sdtq.teaching.labels.approach') }</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{concept.approach}</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-800">{ t('sdtq.teaching.labels.activities') }</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{concept.activities}</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-800">{ t('sdtq.teaching.labels.goals') }</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{concept.goals}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tahfidz Program Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 50%, ${colors.gold.primary} 100%)`
          }}
        >
          {/* Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="tahfidzPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <rect x="-12" y="-8" width="24" height="16" rx="2" stroke="white" strokeWidth="0.2"/>
                    <line x1="-8" y="-4" x2="8" y2="-4" stroke="white" strokeWidth="0.15"/>
                    <line x1="-8" y="0" x2="8" y2="0" stroke="white" strokeWidth="0.15"/>
                    <line x1="-8" y="4" x2="8" y2="4" stroke="white" strokeWidth="0.15"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.3"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tahfidzPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-book-open mr-2"></i>
                {/* Translate Tahfidz Badge */}
                { t('sdtq.tahfidz.badge') }
              </div>
              <h2 className="text-4xl font-bold mb-6">{ t('sdtq.tahfidz.title') }</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
                { t('sdtq.tahfidz.desc') }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tahfidzPrograms.map((program, index) => (
                <div 
                  key={index}
                  className="group bg-white/15 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/25 transition-all duration-300 border border-white/20"
                >
                  <div className="text-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <i 
                        className={`${program.icon} text-2xl text-white`}
                      ></i>
                    </div>
                    <h3 className="font-bold text-lg mb-3">{program.title}</h3>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDTQ;