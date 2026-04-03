import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = ({ data }) => {
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

  // Helper buat data array kalo blom ke load, pakai array kosong
  const missionList = Array.isArray(t('about.content.mission')) ? t('about.content.mission') : [];
  const featuresList = Array.isArray(t('about.features_list')) ? t('about.features_list') : [];

  return (
    <section
      id="about"
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
            <linearGradient id="aboutPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.gold.primary} />
              <stop offset="100%" stopColor={colors.gold.light} />
            </linearGradient>
          </defs>
          <pattern id="aboutPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Main Islamic star motif - very subtle */}
            <g transform="translate(20, 20)" stroke={colors.gold.primary} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* 8-pointed star (Khatam) */}
              <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z" />
              {/* Inner diamond */}
              <path d="M0,-6 L6,0 L0,6 L-6,0 Z" />
              {/* Center dot */}
              <circle cx="0" cy="0" r="0.5" fill={colors.gold.primary} opacity="0.4" />
            </g>

            {/* Connecting geometric lines - very thin */}
            <g stroke={colors.gold.primary} strokeWidth="0.05" opacity="0.2">
              {/* Horizontal connectors */}
              <line x1="32" y1="20" x2="40" y2="20" />
              <line x1="0" y1="20" x2="8" y2="20" />
              {/* Vertical connectors */}
              <line x1="20" y1="0" x2="20" y2="8" />
              <line x1="20" y1="32" x2="20" y2="40" />
              {/* Diagonal small elements - tiny */}
              <circle cx="10" cy="10" r="0.2" fill={colors.gold.light} opacity="0.2" />
              <circle cx="30" cy="30" r="0.2" fill={colors.gold.light} opacity="0.2" />
              <circle cx="10" cy="30" r="0.2" fill={colors.gold.light} opacity="0.2" />
              <circle cx="30" cy="10" r="0.2" fill={colors.gold.light} opacity="0.2" />
            </g>

            {/* Corner ornaments - barely visible */}
            <g transform="translate(10, 10)" stroke={colors.gold.primary} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z" />
            </g>
            <g transform="translate(30, 30)" stroke={colors.gold.primary} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z" />
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" />
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
              {/* ini badge tentang kami */}
              {t('about.header.badge')}
            </span>
            <div
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.secondary.emerald }}
            ></div>
          </div>
          <h2
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            {/* ini heading al wafi iibs */}
            {t('about.header.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {/* ini deskripsi al wafi */}
            {t('about.header.desc')}
          </p>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 50%, ${colors.secondary.teal} 100%)`
            }}
          ></div>
        </div>

        {/* Vision & Mission - Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard ||
                `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            {/* Ornate Corner Islamic Patterns - Vision Card */}
            <div className="absolute inset-0 opacity-8 rounded-3xl overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                {/* Top Left Corner - Elaborate Islamic Star */}
                <g transform="translate(15, 15)" stroke={colors.gold.primary} fill="none" opacity="0.6">
                  {/* 8-pointed Islamic star */}
                  <path d="M-10,0 L-7,-7 L0,-10 L7,-7 L10,0 L7,7 L0,10 L-7,7 Z" strokeWidth="0.12" />
                  <path d="M-14,0 L-5,-5 L0,-14 L5,-5 L14,0 L5,5 L0,14 L-5,5 Z" strokeWidth="0.08" opacity="0.4" />
                  {/* Inner geometric details */}
                  <circle cx="0" cy="0" r="4" strokeWidth="0.06" opacity="0.3" />
                  <path d="M-4,0 L4,0 M0,-4 L0,4" strokeWidth="0.04" opacity="0.2" />
                  {/* Radiating lines */}
                  <g opacity="0.3">
                    <line x1="-6" y1="-6" x2="-3" y2="-3" strokeWidth="0.04" />
                    <line x1="6" y1="-6" x2="3" y2="-3" strokeWidth="0.04" />
                    <line x1="6" y1="6" x2="3" y2="3" strokeWidth="0.04" />
                    <line x1="-6" y1="6" x2="-3" y2="3" strokeWidth="0.04" />
                  </g>
                </g>

                {/* Top Right Corner - Islamic Rosette */}
                <g transform="translate(105, 15)" stroke={colors.gold.light} fill="none" opacity="0.5">
                  {/* Outer rosette petals */}
                  <g strokeWidth="0.1">
                    <path d="M0,-12 Q-6,-6 -12,0 Q-6,6 0,12 Q6,6 12,0 Q6,-6 0,-12" />
                    <path d="M-8.5,-8.5 Q0,-12 8.5,-8.5 Q12,0 8.5,8.5 Q0,12 -8.5,8.5 Q-12,0 -8.5,-8.5" />
                  </g>
                  {/* Inner details */}
                  <circle cx="0" cy="0" r="6" strokeWidth="0.06" opacity="0.4" />
                  <circle cx="0" cy="0" r="2" strokeWidth="0.04" opacity="0.3" />
                  {/* Central dot */}
                  <circle cx="0" cy="0" r="0.8" fill={colors.gold.light} opacity="0.4" />
                </g>

                {/* Bottom Right Corner - Geometric Flower */}
                <g transform="translate(105, 105)" stroke={colors.gold.dark} fill="none" opacity="0.5">
                  {/* 6-petaled flower */}
                  <g strokeWidth="0.1">
                    <path d="M0,-10 Q-5,-7 -8.7,-5 Q-5,0 -8.7,5 Q-5,7 0,10 Q5,7 8.7,5 Q5,0 8.7,-5 Q5,-7 0,-10" />
                  </g>
                  {/* Inner hexagon */}
                  <path d="M-5,0 L-2.5,-4.3 L2.5,-4.3 L5,0 L2.5,4.3 L-2.5,4.3 Z" strokeWidth="0.08" opacity="0.4" />
                  {/* Center ornament */}
                  <circle cx="0" cy="0" r="2" strokeWidth="0.06" opacity="0.3" />
                  <path d="M-1.5,0 L1.5,0 M0,-1.5 L0,1.5" strokeWidth="0.04" opacity="0.2" />
                </g>

                {/* Bottom Left Corner - Crescent and Star */}
                <g transform="translate(15, 105)" stroke={colors.gold.primary} opacity="0.5">
                  {/* Islamic star */}
                  <path d="M-6,-6 L0,-8 L6,-6 L8,0 L6,6 L0,8 L-6,6 L-8,0 Z"
                    fill="none" strokeWidth="0.1" />
                  {/* Crescent moon */}
                  <path d="M4,-4 A6,6 0 1,1 4,4 A4,4 0 1,0 4,-4"
                    fill={colors.gold.primary} opacity="0.3" stroke="none" />
                  {/* Decorative dots */}
                  <circle cx="-10" cy="0" r="0.5" fill={colors.gold.primary} opacity="0.3" />
                  <circle cx="0" cy="-10" r="0.5" fill={colors.gold.primary} opacity="0.3" />
                  <circle cx="10" cy="0" r="0.5" fill={colors.gold.primary} opacity="0.3" />
                  <circle cx="0" cy="10" r="0.5" fill={colors.gold.primary} opacity="0.3" />
                </g>

                {/* Connecting ornamental borders */}
                <g stroke={colors.gold.light} strokeWidth="0.06" fill="none" opacity="0.2">
                  {/* Top border ornament */}
                  <path d="M30,10 Q40,5 50,8 Q60,5 70,8 Q80,5 90,10" />
                  {/* Right border ornament */}
                  <path d="M110,30 Q115,40 112,50 Q115,60 112,70 Q115,80 110,90" />
                  {/* Bottom border ornament */}
                  <path d="M90,110 Q80,115 70,112 Q60,115 50,112 Q40,115 30,110" />
                  {/* Left border ornament */}
                  <path d="M10,90 Q5,80 8,70 Q5,60 8,50 Q5,40 10,30" />
                </g>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-eye text-white text-2xl"></i>
                  {/* Icon glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h3
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                    }}
                  >
                    {/* ini visi */}
                    {t('about.vision_title')}
                  </h3>
                  <div
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.content.vision')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard ||
                `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            {/* Distinct Corner Islamic Patterns - Mission Card */}
            <div className="absolute inset-0 opacity-8 rounded-3xl overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                {/* Top Left Corner - Islamic Arabesque */}
                <g transform="translate(15, 15)" stroke={colors.accent.lightBlue} fill="none" opacity="0.6">
                  {/* Arabesque curved pattern */}
                  <path d="M-12,0 Q-8,-8 0,-12 Q8,-8 12,0 Q8,8 0,12 Q-8,8 -12,0" strokeWidth="0.12" />
                  <path d="M-8,0 Q-5,-5 0,-8 Q5,-5 8,0 Q5,5 0,8 Q-5,5 -8,0" strokeWidth="0.08" opacity="0.5" />
                  {/* Inner spiral elements */}
                  <path d="M-4,-4 Q0,-6 4,-4 Q6,0 4,4 Q0,6 -4,4 Q-6,0 -4,-4" strokeWidth="0.06" opacity="0.4" />
                  {/* Central details */}
                  <circle cx="0" cy="0" r="1.5" strokeWidth="0.04" opacity="0.3" />
                  <path d="M-1,0 L1,0 M0,-1 L0,1" strokeWidth="0.03" opacity="0.2" />
                </g>

                {/* Top Right Corner - Geometric Mandala */}
                <g transform="translate(105, 15)" stroke={colors.accent.lightPurple} fill="none" opacity="0.5">
                  {/* Outer mandala ring */}
                  <circle cx="0" cy="0" r="10" strokeWidth="0.1" />
                  <circle cx="0" cy="0" r="6" strokeWidth="0.08" opacity="0.6" />
                  {/* 8-fold symmetry rays */}
                  <g strokeWidth="0.06" opacity="0.4">
                    <line x1="0" y1="-10" x2="0" y2="-6" />
                    <line x1="7" y1="-7" x2="4.2" y2="-4.2" />
                    <line x1="10" y1="0" x2="6" y2="0" />
                    <line x1="7" y1="7" x2="4.2" y2="4.2" />
                    <line x1="0" y1="10" x2="0" y2="6" />
                    <line x1="-7" y1="7" x2="-4.2" y2="4.2" />
                    <line x1="-10" y1="0" x2="-6" y2="0" />
                    <line x1="-7" y1="-7" x2="-4.2" y2="-4.2" />
                  </g>
                  {/* Central pattern */}
                  <path d="M-3,0 L0,-3 L3,0 L0,3 Z" strokeWidth="0.05" opacity="0.3" />
                </g>

                {/* Bottom Right Corner - Islamic Khatam */}
                <g transform="translate(105, 105)" stroke={colors.accent.lightIndigo} fill="none" opacity="0.5">
                  {/* Traditional Khatam pattern */}
                  <g strokeWidth="0.1">
                    <polygon points="-8,0 -5.7,-5.7 0,-8 5.7,-5.7 8,0 5.7,5.7 0,8 -5.7,5.7" />
                    <polygon points="-11,0 -7.8,-7.8 0,-11 7.8,-7.8 11,0 7.8,7.8 0,11 -7.8,7.8" />
                  </g>
                  {/* Inner geometric details */}
                  <path d="M-4,0 L0,-4 L4,0 L0,4 Z" strokeWidth="0.08" opacity="0.4" />
                  <circle cx="0" cy="0" r="2" strokeWidth="0.06" opacity="0.3" />
                  {/* Corner details */}
                  <g strokeWidth="0.04" opacity="0.2">
                    <line x1="-2" y1="-2" x2="2" y2="2" />
                    <line x1="2" y1="-2" x2="-2" y2="2" />
                  </g>
                </g>

                {/* Bottom Left Corner - Calligraphy Inspired */}
                <g transform="translate(15, 105)" stroke={colors.accent.lightBlue} opacity="0.5">
                  {/* Flowing calligraphic curves */}
                  <path d="M-10,-2 Q-5,-8 0,-2 Q5,-8 10,-2"
                    fill="none" strokeWidth="0.12" />
                  <path d="M-8,2 Q-2,8 4,2 Q8,6 12,2"
                    fill="none" strokeWidth="0.1" opacity="0.6" />
                  {/* Decorative dots and flourishes */}
                  <circle cx="-6" cy="-6" r="0.8" fill={colors.accent.lightBlue} opacity="0.4" />
                  <circle cx="6" cy="6" r="0.8" fill={colors.accent.lightBlue} opacity="0.4" />
                  <path d="M-4,0 Q0,4 4,0" fill="none" strokeWidth="0.06" opacity="0.3" />
                </g>

                {/* Elegant connecting ornaments */}
                <g stroke={colors.accent.lightPurple} strokeWidth="0.05" fill="none" opacity="0.25">
                  {/* Top connecting pattern */}
                  <path d="M25,8 Q35,3 45,6 Q55,3 65,6 Q75,3 85,6 Q95,8 105,8" />
                  {/* Right connecting pattern */}
                  <path d="M112,25 Q117,35 114,45 Q117,55 114,65 Q117,75 114,85 Q112,95 112,105" />
                  {/* Bottom connecting pattern */}
                  <path d="M95,112 Q85,117 75,114 Q65,117 55,114 Q45,117 35,114 Q25,112 15,112" />
                  {/* Left connecting pattern */}
                  <path d="M8,95 Q3,85 6,75 Q3,65 6,55 Q3,45 6,35 Q8,25 8,15" />
                </g>

                {/* Small decorative elements */}
                <g fill={colors.accent.lightBlue} opacity="0.2">
                  <circle cx="30" cy="30" r="0.5" />
                  <circle cx="90" cy="30" r="0.5" />
                  <circle cx="90" cy="90" r="0.5" />
                  <circle cx="30" cy="90" r="0.5" />
                  <circle cx="60" cy="15" r="0.3" />
                  <circle cx="105" cy="60" r="0.3" />
                  <circle cx="60" cy="105" r="0.3" />
                  <circle cx="15" cy="60" r="0.3" />
                </g>
              </svg>
            </div>

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
                  {/* Icon glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h3
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                    }}
                  >
                    {/* ini misi */}
                    {t('about.mission_title')}
                  </h3>
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

        {/* Features Section - Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* data translate untuk feature section diambil dari vovab (data.json cuma fallback) */}
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard ||
                  `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              {/* Feature Image */}
              <div className="relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x200/10b981/ffffff?text=${encodeURIComponent(feature.title)}`;
                  }}
                />
                {/* Image overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                  }}
                ></div>
              </div>

              {/* Feature Content */}
              <div className="p-8">
                <h4
                  className="text-xl font-bold mb-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                  }}
                >
                  {feature.title}
                </h4>
                <h5
                  className="text-lg font-semibold mb-4"
                  style={{ color: colors.secondary.emerald }}
                >
                  {feature.subtitle}
                </h5>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Feature accent line */}
                <div
                  className="w-16 h-1 mt-4 rounded-full group-hover:w-24 transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Section - Modern Style */}
        <div
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: data?.colorScheme?.gradient?.aboutFeature ||
              `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 50%, ${colors.secondary.teal} 100%)`
          }}
        >
          {/* Authentic Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="acreditationPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
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
              <rect width="100%" height="100%" fill="url(#acreditationPattern)" />
            </svg>
          </div>

          <div className="relative z-10 text-white text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {/* ini heading akreditasi */}
                {t('about.accreditation.title')}
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {/* ini deskripsi akreditasi */}
                {t('about.accreditation.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white/15 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/25 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-medal text-3xl"></i>
                </div>
                {/* ini label sama tag smp */}
                <h4 className="font-bold text-lg mb-2">{t('about.accreditation.smp')}</h4>
                <p className="opacity-90">
                  {/* data diambil dari vocab/*.json (data.json cuma fallback) */}
                  {t('about.accreditation.label')} {t('about.accreditation.val_smp')}
                </p>
              </div>

              <div className="group bg-white/15 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/25 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-trophy text-3xl"></i>
                </div>
                {/* ini label sama tag sma */}
                <h4 className="font-bold text-lg mb-2">{t('about.accreditation.sma')}</h4>
                <p className="opacity-90">
                  {/* data diambil dari vocab/*.json (data.json cuma fallback) */}
                  {t('about.accreditation.label')} {t('about.accreditation.val_sma')}
                </p>
              </div>

              <div className="group bg-white/15 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/25 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-university text-3xl"></i>
                </div>
                {/* ini label sama tag muadalah */}
                <h4 className="font-bold text-lg mb-2">{t('about.accreditation.muadalah')}</h4>
                <p className="opacity-90">
                  {/* data diambil dari vocab/*.json (data.json cuma fallback) */}
                  {t('about.accreditation.val_muadalah')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
