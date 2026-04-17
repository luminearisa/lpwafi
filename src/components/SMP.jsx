import React from 'react';
import { useLanguage } from '../LanguageContext';

const SMP = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // ambil data list dari json
  const characteristics = Array.isArray(t('smp.characteristics.list')) ? t('smp.characteristics.list') : [];
  const missionPoints = Array.isArray(t('smp.mission.list')) ? t('smp.mission.list') : [];

  return (
    <section
      id="smp"
      className="pt-40 pb-32 relative overflow-hidden bg-[#f4f8f9]"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smp-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#29A6B6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smp-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#29A6B6] mb-6 border border-[#29A6B6]/20 px-4 py-2 bg-[#f0f9fa]/50 shadow-sm">
            {t('smp.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            {t('smp.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('smp.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#349B48] mx-auto mt-10"></div>
        </div>

        {/* --- CHARACTERISTICS SECTION --- */}
        <div className="mb-24">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="flex items-start mb-12">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20">
                <i className="fas fa-users text-[#29A6B6] text-xl"></i>
              </div>
              <div className="ms-6 mt-2">
                <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                  {t('smp.characteristics.badge')}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
                  {t('smp.characteristics.title')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  {t('smp.characteristics.intro.p1')}
                </p>
                <p>
                  {t('smp.characteristics.intro.p2')}
                </p>
                <p className="pt-4">
                  {t('smp.characteristics.intro.p3_part1')} <strong className="text-gray-900">{t('smp.characteristics.intro.p3_bold')}</strong> {t('smp.characteristics.intro.p3_part2')}
                </p>
              </div>
              <div className="relative">
                {/* Image Frame - Editorial Style */}
                <div className="relative bg-gray-50 border border-gray-100 p-3 shadow-xl">
                  <img
                    src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_sma.webp"
                    alt="Gedung SMP Al Wafi"
                    className="w-full h-80 object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=SMP+Al+Wafi";
                    }}
                  />
                  <div className="absolute inset-4 border border-white/40 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            </div>

            {/* Character Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              {characteristics.map((char, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 border border-gray-100 hover:border-[#29A6B6]/30 hover:shadow-md transition-all duration-300 flex items-start"
                >
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#f0f9fa] group-hover:bg-[#29A6B6] transition-colors duration-300 border border-[#29A6B6]/20">
                    <i className="fas fa-check text-[#29A6B6] group-hover:text-white text-xs"></i>
                  </div>
                  <span className="text-gray-600 font-light leading-relaxed ms-4 pt-1 group-hover:text-gray-900 transition-colors">
                    {char}
                  </span>
                </div>
              ))}
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
              {t('smp.vision.badge')}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('smp.vision.title')}
            </h3>
            <div className="p-8 border border-gray-100 bg-gray-50 mt-8 border-s-4 border-s-[#29A6B6]">
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {t('smp.vision.desc')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f2fbf4] flex items-center justify-center mb-8 border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-bullseye text-[#349B48] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#349B48] mb-2">
              {t('smp.mission.badge')}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              {t('smp.mission.title')}
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

        {/* --- CURRICULUM SECTION: Brand Anchor Block --- */}
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
                <i className="fas fa-graduation-cap me-2"></i>
                {t('smp.curriculum.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight uppercase">
                {t('smp.curriculum.title')}
              </h2>
              <div className="max-w-4xl mx-auto p-8 border border-white/20 bg-white/5">
                <p className="text-lg md:text-xl font-light leading-relaxed text-white/90">
                  {t('smp.curriculum.desc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">

              {/* Feature 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20 hover:bg-white/15 transition-colors duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 border border-white/20 mb-8 text-white">
                  <i className="fas fa-book text-2xl"></i>
                </div>
                <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-white">
                  {t('smp.curriculum.features.optimal.title')}
                </h4>
                <p className="text-sm font-light text-white/80 leading-relaxed">
                  {t('smp.curriculum.features.optimal.desc')}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20 hover:bg-white/15 transition-colors duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 border border-white/20 mb-8 text-white">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-white">
                  {t('smp.curriculum.features.flexible.title')}
                </h4>
                <p className="text-sm font-light text-white/80 leading-relaxed">
                  {t('smp.curriculum.features.flexible.desc')}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20 hover:bg-white/15 transition-colors duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 border border-white/20 mb-8 text-white">
                  <i className="fas fa-target text-2xl"></i>
                </div>
                <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-white">
                  {t('smp.curriculum.features.needs.title')}
                </h4>
                <p className="text-sm font-light text-white/80 leading-relaxed">
                  {t('smp.curriculum.features.needs.desc')}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SMP;