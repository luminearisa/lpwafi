import React from 'react';
import { useLanguage } from '../LanguageContext';

const Programs = ({ data }) => {
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

  // Helper untuk mengambil list program dari translation
  // Jika belum ada/error, fallback ke array kosong agar tidak crash
  const programsList = Array.isArray(t('programs.list')) ? t('programs.list') : [];

  const getIcon = (programId) => {
    const icons = {
      sdtq: 'fa-child',
      smp: 'fa-graduation-cap',
      sma: 'fa-user-graduate',
      overseas: 'fa-globe'
    };
    return icons[programId] || 'fa-book';
  };

  const getProgramColor = (index) => {
    const programColors = [
      { primary: colors.secondary.emerald, secondary: colors.secondary.cyan },
      { primary: colors.accent.lightBlue, secondary: colors.accent.lightPurple },
      { primary: colors.primary.purple, secondary: colors.primary.indigo },
      { primary: colors.gold.primary, secondary: colors.gold.light }
    ];
    return programColors[index % programColors.length];
  };

  return (
    <section
      id="programs"
      className="py-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about ||
          `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Circuit Tech Pattern seperti gambar - halus */}
      <div className="absolute inset-0" style={{ opacity: 4 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <pattern id="programPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Circuit lines dan nodes */}
            <g stroke={colors.primary.blue} strokeWidth="0.08" fill="none" opacity="0.25">
              {/* Horizontal circuit lines */}
              <line x1="0" y1="10" x2="15" y2="10" />
              <line x1="25" y1="10" x2="40" y2="10" />
              <line x1="0" y1="30" x2="10" y2="30" />
              <line x1="20" y1="30" x2="40" y2="30" />

              {/* Vertical circuit lines */}
              <line x1="10" y1="0" x2="10" y2="15" />
              <line x1="10" y1="25" x2="10" y2="40" />
              <line x1="30" y1="0" x2="30" y2="10" />
              <line x1="30" y1="20" x2="30" y2="40" />

              {/* Diagonal connections */}
              <line x1="15" y1="10" x2="20" y2="15" />
              <line x1="20" y1="25" x2="25" y2="30" />
            </g>

            {/* Circuit nodes/dots */}
            <g fill={colors.primary.blue} opacity="0.3">
              <circle cx="10" cy="10" r="0.6" />
              <circle cx="30" cy="10" r="0.6" />
              <circle cx="10" cy="30" r="0.6" />
              <circle cx="30" cy="30" r="0.6" />
            </g>

            {/* Secondary circuit pattern */}
            <g stroke={colors.primary.purple} strokeWidth="0.06" fill="none" opacity="0.2">
              {/* L-shaped circuits */}
              <path d="M5,5 L5,15 L15,15" />
              <path d="M25,25 L35,25 L35,35" />
              <path d="M35,5 L35,15 L25,15" />
              <path d="M15,25 L5,25 L5,35" />
            </g>

            {/* Small connector nodes */}
            <g fill={colors.primary.purple} opacity="0.2">
              <circle cx="5" cy="5" r="0.3" />
              <circle cx="35" cy="35" r="0.3" />
              <circle cx="35" cy="5" r="0.3" />
              <circle cx="5" cy="35" r="0.3" />
              <circle cx="15" cy="15" r="0.3" />
              <circle cx="25" cy="25" r="0.3" />
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#programPattern)" />
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
              style={{ background: colors.primary.blue }}
            ></div>
            <span
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.primary.blue }}
            >
              {/* label badge */}
              {t('programs.header.badge')}
            </span>
            <div
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.primary.blue }}
            ></div>
          </div>
          <h2
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            {/* program title */}
            {t('programs.header.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {/* program deskripsi */}
            {t('programs.header.desc')}
          </p>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          ></div>
        </div>

        {/* Programs Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* program list diambil dari vocab/*.json (data.json cuma fallback) */}
          {programsList.map((program, index) => {
            const programColor = getProgramColor(index);
            return (
              <div
                key={program.id}
                className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
                style={{
                  background: data?.colorScheme?.gradient?.aboutCard ||
                    `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                  opacity: opacity.aboutCard / 100
                }}
              >
                {/* Circuit Card Pattern - halus */}
                <div className="absolute inset-0 opacity-3 rounded-3xl overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    {/* Mini circuit pattern */}
                    <g stroke={programColor.primary} strokeWidth="0.06" fill="none" opacity="0.2">
                      {/* Corner circuit lines */}
                      <path d="M15,15 L25,15 L25,25" />
                      <path d="M95,95 L105,95 L105,105" />
                      <path d="M105,15 L95,15 L95,25" />
                      <path d="M25,95 L15,95 L15,105" />
                    </g>
                    {/* Circuit nodes */}
                    <g fill={programColor.primary} opacity="0.25">
                      <circle cx="15" cy="15" r="1" />
                      <circle cx="105" cy="105" r="1" />
                      <circle cx="105" cy="15" r="0.7" />
                      <circle cx="15" cy="105" r="0.7" />
                    </g>
                    {/* Connecting lines */}
                    <g stroke={programColor.secondary} strokeWidth="0.04" opacity="0.15">
                      <line x1="25" y1="15" x2="95" y2="15" />
                      <line x1="15" y1="25" x2="15" y2="95" />
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className="relative p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${programColor.primary} 0%, ${programColor.secondary} 100%)`,
                        opacity: opacity.aboutIcon / 100
                      }}
                    >
                      <i className={`fas ${getIcon(program.id)} text-white text-3xl`}></i>
                      {/* Icon glow effect */}
                      <div
                        className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                        style={{ background: programColor.primary }}
                      ></div>
                    </div>
                  </div>

                  {/* Program Name */}
                  <h3
                    className="text-xl font-bold mb-4 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${programColor.primary} 0%, ${programColor.secondary} 100%)`
                    }}
                  >
                    {program.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {program.description}
                  </p>

                  {/* Variants */}
                  {program.variants && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {program.variants.map((variant, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{
                            background: `linear-gradient(90deg, ${programColor.primary}80 0%, ${programColor.secondary}80 100%)`
                          }}
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Program accent line */}
                  <div
                    className="w-16 h-1 mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${programColor.primary} 0%, ${programColor.secondary} 100%)`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Program Highlight - Study Overseas */}
        <div
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden mb-20"
          style={{
            background: `linear-gradient(135deg, ${colors.gold.primary} 0%, ${colors.gold.light} 50%, ${colors.gold.dark} 100%)`
          }}
        >
          {/* Circuit Tech Pattern for Overseas - halus */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <pattern id="overseasPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                {/* Circuit pattern in white */}
                <g stroke="white" strokeWidth="0.1" fill="none" opacity="0.3">
                  {/* Main circuit lines */}
                  <line x1="0" y1="12" x2="18" y2="12" />
                  <line x1="32" y1="12" x2="50" y2="12" />
                  <line x1="0" y1="38" x2="12" y2="38" />
                  <line x1="24" y1="38" x2="50" y2="38" />
                  <line x1="12" y1="0" x2="12" y2="18" />
                  <line x1="12" y1="32" x2="12" y2="50" />
                  <line x1="38" y1="0" x2="38" y2="12" />
                  <line x1="38" y1="24" x2="38" y2="50" />

                  {/* L-shaped connectors */}
                  <path d="M18,12 L24,12 L24,18" />
                  <path d="M24,32 L32,32 L32,38" />
                </g>
                {/* Circuit nodes */}
                <g fill="white" opacity="0.3">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="38" cy="38" r="1" />
                  <circle cx="38" cy="12" r="0.7" />
                  <circle cx="12" cy="38" r="0.7" />
                  <circle cx="24" cy="24" r="0.5" />
                </g>
              </pattern>
              <rect width="100%" height="100%" fill="url(#overseasPattern)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-4">
                  <i className="fas fa-star mr-2"></i>
                  {/* label badge overseas */}
                  {t('programs.overseas.badge')}
                </div>
                <h3 className="text-4xl font-bold mb-4">
                  {/* label title overseas */}
                  {t('programs.overseas.title')}
                </h3>
                <p className="text-xl opacity-90 mb-6">
                  {/* label subtitle overseas */}
                  {t('programs.overseas.subtitle')}
                </p>
                <p className="text-lg opacity-80 leading-relaxed">
                  {/* label deskripsi overseas */}
                  {t('programs.overseas.desc')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/15 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center">
                  <i className="fas fa-mosque text-2xl mb-2"></i>
                  <div className="text-sm font-semibold">
                    {/* overseas features label uim */}
                    {t('programs.overseas.features.uim')}
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center">
                  <i className="fas fa-kaaba text-2xl mb-2"></i>
                  <div className="text-sm font-semibold">
                    {/* overseas features label umrah */}
                    {t('programs.overseas.features.umrah')}
                  </div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center">
                  <i className="fas fa-users text-2xl mb-2"></i>
                  <div className="text-sm font-semibold">
                    {/* overseas features label guide */}
                    {t('programs.overseas.features.guide')}
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                <img
                  src={data?.images?.uim || "/placeholder-uim.jpg"}
                  alt="Study Overseas UIM"
                  className="w-full h-80 object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Study+Overseas+UIM";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Method Highlight - Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm text-center"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard ||
                `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div
                className="relative p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-20 h-20 flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`,
                  opacity: opacity.aboutIcon / 100
                }}
              >
                <i className="fas fa-brain text-white text-2xl"></i>
                <div
                  className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{ background: colors.accent.lightBlue }}
                ></div>
              </div>
              <h4
                className="text-xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                }}
              >
                {/* method 1 title */}
                {t('programs.methods.active.title')}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {/* method 1 deskripsi */}
                {t('programs.methods.active.desc')}
              </p>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                }}
              ></div>
            </div>
          </div>

          <div
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm text-center"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard ||
                `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div
                className="relative p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-20 h-20 flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`,
                  opacity: opacity.aboutIcon / 100
                }}
              >
                <i className="fas fa-heart text-white text-2xl"></i>
                <div
                  className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{ background: colors.secondary.emerald }}
                ></div>
              </div>
              <h4
                className="text-xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                }}
              >
                {/* method 2 title */}
                {t('programs.methods.islamic.title')}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {/* method 2 deskrips */}
                {t('programs.methods.islamic.desc')}
              </p>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                }}
              ></div>
            </div>
          </div>

          <div
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm text-center"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard ||
                `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div
                className="relative p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-20 h-20 flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary.purple} 0%, ${colors.primary.indigo} 100%)`,
                  opacity: opacity.aboutIcon / 100
                }}
              >
                <i className="fas fa-globe text-white text-2xl"></i>
                <div
                  className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{ background: colors.primary.purple }}
                ></div>
              </div>
              <h4
                className="text-xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${colors.primary.purple} 0%, ${colors.primary.indigo} 100%)`
                }}
              >
                {/* method 3 title */}
                {t('programs.methods.global.title')}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {/* method 3 deskripsi */}
                {t('programs.methods.global.desc')}
              </p>
              <div
                className="w-16 h-1 mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary.purple} 0%, ${colors.primary.indigo} 100%)`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
