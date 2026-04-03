import React from 'react';
import { useLanguage } from '../LanguageContext';

const Alumni = ({ data }) => {
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

  // Separate domestic and international universities
  const domesticUniversities = data?.universities?.filter(uni =>
    ['Institut Teknologi Bandung', 'Institut Pertanian Bogor', 'Institut Teknologi Sepuluh Nopember',
      'Universitas Padjadjaran', 'Universitas Andalas', 'Binus University', 'Telkom University', 'Universitas Trisakti'].includes(uni.name)
  ) || [];

  const internationalUniversities = data?.universities?.filter(uni =>
    ['Universitas Malaysia', 'Universiti Teknologi Malaysia', 'Multimedia University', 'International Islamic University Malaysia'].includes(uni.name)
  ) || [];

  // helper buat ambil list dari vocab/*.json
  const achievementList = Array.isArray(t('alumni.success.list')) ? t('alumni.success.list') : [];

  const getStatColor = (index) => {
    const statColors = [
      { primary: colors.secondary.emerald, secondary: colors.secondary.cyan },
      { primary: colors.accent.lightBlue, secondary: colors.accent.lightPurple },
      { primary: colors.primary.purple, secondary: colors.primary.indigo },
      { primary: colors.gold.primary, secondary: colors.gold.light }
    ];
    return statColors[index % statColors.length];
  };

  return (
    <section
      id="alumni"
      className="py-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about ||
          `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Authentic Islamic Geometric Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity.aboutPattern / 100 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="alumniPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.secondary.emerald} />
              <stop offset="50%" stopColor={colors.secondary.cyan} />
              <stop offset="100%" stopColor={colors.secondary.teal} />
            </linearGradient>
          </defs>
          <pattern id="alumniPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Main Islamic star motif - very subtle */}
            <g transform="translate(20, 20)" stroke={colors.secondary.emerald} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* 8-pointed star (Khatam) */}
              <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z" />
              {/* Inner diamond */}
              <path d="M0,-6 L6,0 L0,6 L-6,0 Z" />
              {/* Center dot */}
              <circle cx="0" cy="0" r="0.5" fill={colors.secondary.emerald} opacity="0.4" />
            </g>

            {/* Connecting geometric lines - very thin */}
            <g stroke={colors.secondary.cyan} strokeWidth="0.05" opacity="0.2">
              {/* Horizontal connectors */}
              <line x1="32" y1="20" x2="40" y2="20" />
              <line x1="0" y1="20" x2="8" y2="20" />
              {/* Vertical connectors */}
              <line x1="20" y1="0" x2="20" y2="8" />
              <line x1="20" y1="32" x2="20" y2="40" />
              {/* Diagonal small elements - tiny */}
              <circle cx="10" cy="10" r="0.2" fill={colors.secondary.teal} opacity="0.2" />
              <circle cx="30" cy="30" r="0.2" fill={colors.secondary.teal} opacity="0.2" />
              <circle cx="10" cy="30" r="0.2" fill={colors.secondary.teal} opacity="0.2" />
              <circle cx="30" cy="10" r="0.2" fill={colors.secondary.teal} opacity="0.2" />
            </g>

            {/* Corner ornaments - barely visible */}
            <g transform="translate(10, 10)" stroke={colors.secondary.emerald} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z" />
            </g>
            <g transform="translate(30, 30)" stroke={colors.secondary.emerald} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z" />
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#alumniPattern)" />
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl"
          style={{
            background: `linear-gradient(135deg, ${colors.secondary.emerald}20, ${colors.secondary.cyan}20)`
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 rotate-45 blur-lg"
          style={{
            background: `linear-gradient(135deg, ${colors.accent.lightBlue}15, ${colors.accent.lightPurple}15)`
          }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-12 h-12 rounded-full blur-lg"
          style={{
            background: `linear-gradient(135deg, ${colors.secondary.teal}20, ${colors.secondary.emerald}20)`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
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
              {/* label badge */}
              {t('alumni.header.badge')}
            </span>
            <div
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.secondary.emerald }}
            ></div>
          </div>
          <h2
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 50%, ${colors.secondary.teal} 100%)`
            }}
          >
            {/* label title */}
            {t('alumni.header.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {/* label deskripsi */}
            {t('alumni.header.desc')}
          </p>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 50%, ${colors.secondary.teal} 100%)`
            }}
          ></div>
        </div>

        {/* Statistics - Modern Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: 'fa-user-graduate', number: '1100+', label: t('alumni.stats.global'), index: 0 },
            { icon: 'fa-university', number: '50+', label: t('alumni.stats.university'), index: 1 },
            { icon: 'fa-globe', number: '15+', label: t('alumni.stats.country'), index: 2 },
            { icon: 'fa-trophy', number: '95%', label: t('alumni.stats.acceptance'), index: 3 }
          ].map((stat) => {
            const statColor = getStatColor(stat.index);
            return (
              <div
                key={stat.index}
                className="group relative p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm text-center"
                style={{
                  background: data?.colorScheme?.gradient?.aboutCard ||
                    `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                  opacity: opacity.aboutCard / 100
                }}
              >
                <div className="relative z-10">
                  <div
                    className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-16 h-16 flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${statColor.primary} 0%, ${statColor.secondary} 100%)`,
                      opacity: opacity.aboutIcon / 100
                    }}
                  >
                    <i className={`fas ${stat.icon} text-white text-xl`}></i>
                    <div
                      className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{ background: statColor.primary }}
                    ></div>
                  </div>
                  <h3
                    className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${statColor.primary} 0%, ${statColor.secondary} 100%)`
                    }}
                  >
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                  <div
                    className="w-12 h-1 mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${statColor.primary} 0%, ${statColor.secondary} 100%)`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* University Logos - Professional Layout */}
        <div className="mb-20">
          {/* Domestic Universities */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3
                className="text-3xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                }}
              >
                {/* label domestic title */}
                {t('alumni.domestic.title')}
              </h3>
              <p className="text-lg text-gray-600">
                {/* label domsetic deskripisi */}
                {t('alumni.domestic.desc')}
              </p>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                }}
              ></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {domesticUniversities.map((university, index) => (
                <div
                  key={index}
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
                        src={university.logo}
                        alt={university.name}
                        className="w-full h-16 object-contain"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/100x60/f3f4f6/6b7280?text=${encodeURIComponent(university.name.split(' ')[0])}`;
                        }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-700 leading-tight">{university.name}</p>
                    <div
                      className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                      style={{ background: colors.primary.blue }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Universities */}
          <div>
            <div className="text-center mb-12">
              <h3
                className="text-3xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                }}
              >
                {/* label perguruan tinggi internasional title */}
                {t('alumni.international.title')}
              </h3>
              <p className="text-lg text-gray-600">
                {/* label perguruan tinggi internasional deskripsi */}
                {t('alumni.international.desc')}
              </p>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                }}
              ></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {internationalUniversities.map((university, index) => (
                <div
                  key={index}
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
                        src={university.logo}
                        alt={university.name}
                        className="w-full h-16 object-contain"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/100x60/f3f4f6/6b7280?text=${encodeURIComponent(university.name.split(' ')[0])}`;
                        }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-700 leading-tight">{university.name}</p>
                    <div
                      className="w-8 h-0.5 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"
                      style={{ background: colors.accent.lightBlue }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Story - Premium Section */}
        <div
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 50%, ${colors.secondary.teal} 100%)`
          }}
        >
          {/* Authentic Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="successPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  {/* Islamic star pattern in white */}
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <path d="M0,-15 L4,-4 L15,0 L4,4 L0,15 L-4,4 L-15,0 L-4,-4 Z" />
                    <circle cx="0" cy="0" r="6" stroke="white" strokeWidth="0.2" opacity="0.3" />
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.4" />
                  </g>
                  {/* Corner decorative elements */}
                  <circle cx="12" cy="12" r="1" fill="white" opacity="0.2" />
                  <circle cx="38" cy="38" r="1" fill="white" opacity="0.2" />
                  <circle cx="12" cy="38" r="1" fill="white" opacity="0.2" />
                  <circle cx="38" cy="12" r="1" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#successPattern)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-4">
                  <i className="fas fa-star mr-2"></i>
                  {/* label alumni suskses badge */}
                  {t('alumni.success.badge')}
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  {/* label alumni sukses title */}
                  {t('alumni.success.title')}
                </h3>
                <p className="text-xl opacity-90 leading-relaxed mb-8">
                  {/* label alumni suskes deskripsi */}
                  {t('alumni.success.desc')}
                </p>
              </div>

              <div className="space-y-6">
                {/* loop achievement dari vocab/*.json */}
                {achievementList.map((achievement, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-white/20 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover:scale-110 transition-transform border border-white/30">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-lg opacity-90 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                <img
                  src={data?.images?.alumni || "/placeholder-alumni.jpg"}
                  alt="Sebaran Alumni"
                  className="w-full h-80 object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/500x300/059669/ffffff?text=Sebaran+Alumni+Global";
                  }}
                />
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                    }}
                  >
                    95%
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">
                    {/* label rating */}
                    {t('alumni.success.rate_label')}
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

export default Alumni;
