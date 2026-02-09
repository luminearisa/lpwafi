import React from 'react';
import { useLanguage } from '../LanguageContext';

const DakwahSosial = ({ data }) => {
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

  // Helper untuk list
  const missionList = Array.isArray(t('dakwah.mission.list')) ? t('dakwah.mission.list') : [];
  const goalsList = Array.isArray(t('dakwah.study.goals_list')) ? t('dakwah.study.goals_list') : [];

  return (
    <section 
      id="dakwah-sosial" 
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
            <linearGradient id="dakwahPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary.blue}/>
              <stop offset="50%" stopColor={colors.primary.purple}/>
              <stop offset="100%" stopColor={colors.primary.indigo}/>
            </linearGradient>
          </defs>
          <pattern id="dakwahPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Main Islamic star motif */}
            <g transform="translate(20, 20)" stroke={colors.primary.blue} strokeWidth="0.1" fill="none" opacity="0.3">
              <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z"/>
              <path d="M0,-6 L6,0 L0,6 L-6,0 Z"/>
              <circle cx="0" cy="0" r="0.5" fill={colors.primary.blue} opacity="0.4"/>
            </g>
            
            {/* Connecting lines */}
            <g stroke={colors.primary.purple} strokeWidth="0.05" opacity="0.2">
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dakwahPattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full mr-4"
              style={{ background: colors.primary.blue }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.primary.blue }}
            >
              { t('dakwah.header.badge') }
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.primary.blue }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            { t('dakwah.header.title') }
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            { t('dakwah.header.desc') }
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  { t('dakwah.intro.text') }
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
                    { t('dakwah.vision.title') }
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.gold.primary }}
                  ></div>
                </div>
              </div>
              <div 
                className="p-6 rounded-2xl border-l-4"
                style={{ 
                  backgroundColor: `${colors.gold.primary}10`,
                  borderColor: colors.gold.primary
                }}
              >
                <p className="text-gray-700 leading-relaxed font-medium text-lg">
                  { t('dakwah.vision.desc') }
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
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`,
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
                      backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                    }}
                  >
                    { t('dakwah.mission.title') }
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
              </div>
              <ul className="space-y-4">
                {missionList.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover:scale-110 transition-transform"
                      style={{ background: colors.accent.lightBlue }}
                    >
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Internal Dakwah Section */}
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
                    background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-mosque text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                    }}
                  >
                    { t('dakwah.internal.title') }
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                <p>
                  {/* Translate teks bercampur bold */}
                  { t('dakwah.internal.desc_part1') } <strong>{ t('dakwah.internal.desc_highlight') }</strong> { t('dakwah.internal.desc_part2') }
                </p>
              </div>

              {/* Penguatan Ilmu Agama */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{ t('dakwah.internal.knowledge.title') }</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.primary.blue}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">{ t('dakwah.internal.knowledge.card1_title') }</h4>
                    <p className="text-gray-700 leading-relaxed">
                      { t('dakwah.internal.knowledge.card1_desc') }
                    </p>
                  </div>
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.primary.purple}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">{ t('dakwah.internal.knowledge.card2_title') }</h4>
                    <p className="text-gray-700 leading-relaxed">
                      { t('dakwah.internal.knowledge.card2_desc') }
                    </p>
                  </div>
                </div>
              </div>

              {/* Penanaman Akhlak */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{ t('dakwah.internal.ethics.title') }</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.secondary.emerald}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">{ t('dakwah.internal.ethics.card1_title') }</h4>
                    <p className="text-gray-700 leading-relaxed">
                      { t('dakwah.internal.ethics.card1_desc') }
                    </p>
                  </div>
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.secondary.cyan}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">{ t('dakwah.internal.ethics.card2_title') }</h4>
                    <p className="text-gray-700 leading-relaxed">
                      { t('dakwah.internal.ethics.card2_desc') }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kajian Al Wafi Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
          }}
        >
          {/* Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="kajianPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <path d="M0,-15 L4,-4 L15,0 L4,4 L0,15 L-4,4 L-15,0 L-4,-4 Z"/>
                    <circle cx="0" cy="0" r="6" stroke="white" strokeWidth="0.2" opacity="0.3"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.4"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#kajianPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-book-open mr-2"></i>
                { t('dakwah.study.badge') }
              </div>
              <h2 className="text-4xl font-bold mb-4">{ t('dakwah.study.title') }</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <p className="text-lg leading-relaxed opacity-95">
                  {/* Translate text dengan banyak buku tebal */}
                  { t('dakwah.study.desc_part1') } <strong>{ t('dakwah.study.book1') }</strong>, <strong>{ t('dakwah.study.book2') }</strong>, <strong>{ t('dakwah.study.book3') }</strong> { t('dakwah.study.book3_author') }, { t('dakwah.study.conjunction') } <strong>{ t('dakwah.study.book4') }</strong>. 
                </p>
                <div className="mt-6 space-y-4">
                  <h4 className="font-bold text-xl mb-4">{ t('dakwah.study.goals_title') }</h4>
                  <ul className="space-y-3">
                    {goalsList.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DakwahSosial;