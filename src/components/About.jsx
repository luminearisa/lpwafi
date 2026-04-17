import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Helper untuk data array
  const missionList = Array.isArray(t('about.content.mission')) ? t('about.content.mission') : [];
  const featuresList = Array.isArray(t('about.features_list')) ? t('about.features_list') : [];

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-[#f4f8f9]"
    >
      {/* --- ELEGANT ISLAMIC GEOMETRIC PATTERN BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="luxury-islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g stroke="#29A6B6" strokeWidth="0.5" fill="none" opacity="0.07">
                {/* 8-Pointed Star (Khatam) */}
                <path d="M40,10 L45,35 L70,40 L45,45 L40,70 L35,45 L10,40 L35,35 Z" />
                {/* Connecting Squares */}
                <rect x="25" y="25" width="30" height="30" strokeWidth="0.3" transform="rotate(45 40 40)" />
                <rect x="25" y="25" width="30" height="30" strokeWidth="0.3" />
                {/* Connecting Lines */}
                <line x1="0" y1="40" x2="10" y2="40" strokeWidth="0.3" />
                <line x1="70" y1="40" x2="80" y2="40" strokeWidth="0.3" />
                <line x1="40" y1="0" x2="40" y2="10" strokeWidth="0.3" />
                <line x1="40" y1="70" x2="40" y2="80" strokeWidth="0.3" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#luxury-islamic-pattern)" />
        </svg>

        {/* Soft fade gradients di atas dan bawah agar pattern menyatu halus dengan section lain */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f8f9] via-transparent to-[#f4f8f9] opacity-90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 bg-white px-4 py-2 border border-[#349B48]/10 shadow-sm">
            {t('about.header.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
            {t('about.header.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('about.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- VISION & MISSION: Editorial Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">

          {/* Vision Card */}
          <div className="group bg-white p-12 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(41,166,182,0.05)] hover:shadow-[0_30px_60px_rgba(41,166,182,0.12)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f0f9fa] flex items-center justify-center mb-10 border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-eye text-[#29A6B6] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('about.vision_title')}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
              {t('about.content.vision')}
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-12 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(52,155,72,0.05)] hover:shadow-[0_30px_60px_rgba(52,155,72,0.12)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f2fbf4] flex items-center justify-center mb-10 border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-bullseye text-[#349B48] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              {t('about.mission_title')}
            </h3>
            <ul className="space-y-5">
              {missionList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 shrink-0 bg-[#f2fbf4] border border-[#349B48]/30 flex items-center justify-center mt-1 me-5">
                    <i className="fas fa-check text-[#349B48] text-[10px]"></i>
                  </div>
                  <span className="text-gray-600 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- FEATURES GRID: High-End Magazine Style --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
            >
              {/* Image Frame - Grayscale to Color on Hover */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100 p-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/eeeeee/999999?text=${encodeURIComponent(feature.title)}`;
                  }}
                />
                <div className="absolute inset-0 border border-white/20 pointer-events-none mix-blend-overlay m-2"></div>
              </div>

              {/* Content Box */}
              <div className="p-10 md:p-12 flex-grow flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <h5 className="text-[10px] font-bold text-[#29A6B6] uppercase tracking-[0.2em] mb-6">
                  {feature.subtitle}
                </h5>
                <p className="text-gray-500 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- ACCREDITATION BANNER: Bold Brand Colors --- */}
        <div className="relative bg-[#29A6B6] shadow-2xl overflow-hidden">

          {/* Subtle Geometric Lines in Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 px-8 py-16 md:p-20 text-center">

            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider">
                {t('about.accreditation.title')}
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto font-light leading-relaxed text-lg">
                {t('about.accreditation.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

              {/* SMP */}
              <div className="bg-white/10 backdrop-blur-md p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  <i className="fas fa-medal text-2xl text-[#349B48]"></i>
                </div>
                <h4 className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-3">
                  {t('about.accreditation.smp')}
                </h4>
                <p className="text-white/80 font-light text-sm">
                  {t('about.accreditation.label')} <span className="font-bold text-white text-lg ms-1">{t('about.accreditation.val_smp')}</span>
                </p>
              </div>

              {/* SMA */}
              <div className="bg-white/10 backdrop-blur-md p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  <i className="fas fa-trophy text-2xl text-[#349B48]"></i>
                </div>
                <h4 className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-3">
                  {t('about.accreditation.sma')}
                </h4>
                <p className="text-white/80 font-light text-sm">
                  {t('about.accreditation.label')} <span className="font-bold text-white text-lg ms-1">{t('about.accreditation.val_sma')}</span>
                </p>
              </div>

              {/* Muadalah */}
              <div className="bg-white/10 backdrop-blur-md p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                  <i className="fas fa-university text-2xl text-[#349B48]"></i>
                </div>
                <h4 className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-3">
                  {t('about.accreditation.muadalah')}
                </h4>
                <p className="font-bold text-white text-lg tracking-wide mt-2">
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