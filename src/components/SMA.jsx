import React from 'react';
import { useLanguage } from '../LanguageContext';

const SMA = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // ambil data list dari json
  const missionPoints = Array.isArray(t('sma.mission.list')) ? t('sma.mission.list') : [];

  // config keunggulan (text nya dari json + ikon/warna statis)
  const rawExcellenceTitles = Array.isArray(t('sma.excellence.list')) ? t('sma.excellence.list') : [];

  const excellenceStaticData = [
    { icon: "fas fa-medal" },
    { icon: "fas fa-leaf" },
    { icon: "fas fa-heart" },
    { icon: "fas fa-running" },
    { icon: "fas fa-globe" },
    { icon: "fas fa-chart-line" },
    { icon: "fas fa-chalkboard-teacher" },
    { icon: "fas fa-language" },
    { icon: "fas fa-university" }
  ];

  const excellencePoints = rawExcellenceTitles.map((title, index) => ({
    title: title,
    // fallback index kalo kepanjangan dari array statis
    ...excellenceStaticData[index % excellenceStaticData.length]
  }));

  return (
    <section
      id="sma"
      className="pt-40 pb-32 relative overflow-hidden bg-[#fcfdfd]"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sma-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#29A6B6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sma-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 border border-[#349B48]/20 px-4 py-2 bg-[#f2fbf4]/50 shadow-sm">
            {t('sma.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            {t('sma.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('sma.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- PROFILE SECTION --- */}
        <div className="mb-24">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="flex items-start mb-12">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20">
                <i className="fas fa-graduation-cap text-[#29A6B6] text-xl"></i>
              </div>
              <div className="ms-6 mt-2">
                <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                  {t('sma.profile.badge')}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
                  {t('sma.profile.title')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  {t('sma.profile.p1')}
                </p>
                <p>
                  {t('sma.profile.p2')}
                </p>
              </div>
              <div className="relative">
                {/* Image Frame - Editorial Style */}
                <div className="relative bg-gray-50 border border-gray-100 p-3 shadow-xl">
                  <img
                    src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_sma.webp"
                    alt="Gedung SMA Al Wafi"
                    className="w-full h-80 object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=SMA+Al+Wafi";
                    }}
                  />
                  <div className="absolute inset-4 border border-white/40 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- VISION & MISSION GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">

          {/* Vision Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f0f9fa] flex items-center justify-center mb-8 border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-eye text-[#29A6B6] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#29A6B6] mb-2">
              {t('sma.vision.badge')}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('sma.vision.title')}
            </h3>
            <div className="p-8 border border-gray-100 bg-gray-50 mt-8 border-s-4 border-s-[#29A6B6]">
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {t('sma.vision.desc')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f2fbf4] flex items-center justify-center mb-8 border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-bullseye text-[#349B48] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#349B48] mb-2">
              {t('sma.mission.badge')}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              {t('sma.mission.title')}
            </h3>
            <ul className="space-y-6">
              {missionPoints.map((mission, index) => (
                <li key={index} className="flex items-start group/list border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-8 h-8 shrink-0 bg-white border border-gray-200 flex items-center justify-center me-6 group-hover/list:bg-[#349B48] group-hover/list:border-[#349B48] transition-colors duration-500">
                    <span className="text-gray-400 group-hover/list:text-white text-xs font-bold font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-gray-600 font-light leading-relaxed text-lg pt-1 group-hover/list:text-gray-900 transition-colors duration-300">
                    {mission}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- EXCELLENCE SECTION: Brand Anchor Block --- */}
        <div className="relative bg-[#349B48] shadow-[0_30px_60px_rgba(52,155,72,0.2)] overflow-hidden">

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 px-8 py-20 md:p-24 text-white">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-[9px] uppercase tracking-[0.2em] font-bold text-white mb-6">
                <i className="fas fa-trophy me-2"></i>
                {t('sma.excellence.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
                {t('sma.excellence.title')}
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                {t('sma.excellence.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
              {excellencePoints.map((point, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-none flex items-center justify-center mb-6 bg-white/10 border border-white/20 text-white group-hover:bg-white group-hover:text-[#349B48] transition-colors duration-300">
                    <i className={`${point.icon} text-2xl`}></i>
                  </div>
                  <p className="text-sm uppercase tracking-wider font-bold text-white/90 leading-relaxed">
                    {point.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
              <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 mb-6 text-white">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h4 className="font-bold text-lg mb-3 uppercase tracking-wider text-white">{t('sma.excellence.summary.accreditation.title')}</h4>
                <p className="text-sm font-light text-white/80 leading-relaxed">{t('sma.excellence.summary.accreditation.desc')}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 mb-6 text-white">
                  <i className="fas fa-globe text-xl"></i>
                </div>
                <h4 className="font-bold text-lg mb-3 uppercase tracking-wider text-white">{t('sma.excellence.summary.overseas.title')}</h4>
                <p className="text-sm font-light text-white/80 leading-relaxed">{t('sma.excellence.summary.overseas.desc')}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 mb-6 text-white">
                  <i className="fas fa-university text-xl"></i>
                </div>
                <h4 className="font-bold text-lg mb-3 uppercase tracking-wider text-white">{t('sma.excellence.summary.bekal.title')}</h4>
                <p className="text-sm font-light text-white/80 leading-relaxed">{t('sma.excellence.summary.bekal.desc')}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SMA;