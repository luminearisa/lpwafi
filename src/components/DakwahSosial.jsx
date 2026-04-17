import React from 'react';
import { useLanguage } from '../LanguageContext';

const DakwahSosial = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Helper untuk list
  const missionList = Array.isArray(t('dakwah.mission.list')) ? t('dakwah.mission.list') : [];
  const goalsList = Array.isArray(t('dakwah.study.goals_list')) ? t('dakwah.study.goals_list') : [];

  return (
    <section
      id="dakwah-sosial"
      className="pt-40 pb-32 relative overflow-hidden bg-[#fcfdfd]"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dakwah-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#29A6B6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dakwah-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 border border-[#349B48]/20 px-4 py-2 bg-[#f2fbf4]/50 shadow-sm">
            {t('dakwah.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            {t('dakwah.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('dakwah.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- INTRODUCTION SECTION --- */}
        <div className="mb-24">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  {t('dakwah.intro.text')}
                </p>
              </div>
              <div className="relative">
                {/* Image Frame - Editorial Style */}
                <div className="relative bg-gray-50 border border-gray-100 p-3 shadow-xl">
                  <img
                    src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                    alt="Gedung Al Wafi"
                    className="w-full h-80 object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=Al+Wafi+Building";
                    }}
                  />
                  <div className="absolute inset-4 border border-white/40 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- VISION & MISSION GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

          {/* Vision Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f0f9fa] flex items-center justify-center mb-8 border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-eye text-[#29A6B6] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('dakwah.vision.title')}
            </h3>
            <div className="p-8 border border-gray-100 bg-gray-50 mt-8">
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {t('dakwah.vision.desc')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f2fbf4] flex items-center justify-center mb-8 border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-bullseye text-[#349B48] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              {t('dakwah.mission.title')}
            </h3>
            <ul className="space-y-6">
              {missionList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 shrink-0 bg-[#f2fbf4] border border-[#349B48]/30 flex items-center justify-center mt-1 me-5">
                    <i className="fas fa-check text-[#349B48] text-[10px]"></i>
                  </div>
                  <span className="text-gray-600 font-light leading-relaxed text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- INTERNAL DAKWAH SECTION --- */}
        <div className="mb-32">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="flex items-start mb-12">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20">
                <i className="fas fa-mosque text-[#29A6B6] text-xl"></i>
              </div>
              <div className="ms-6 mt-2">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
                  {t('dakwah.internal.title')}
                </h2>
              </div>
            </div>

            <div className="text-gray-600 font-light leading-relaxed text-lg mb-12 max-w-4xl">
              <p>
                {t('dakwah.internal.desc_part1')} <strong className="text-gray-900">{t('dakwah.internal.desc_highlight')}</strong> {t('dakwah.internal.desc_part2')}
              </p>
            </div>

            {/* Knowledge Sub-section */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                  {t('dakwah.internal.knowledge.title')}
                </h3>
                <div className="flex-grow border-t border-gray-200 ms-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-lg mb-4 text-[#29A6B6] uppercase tracking-wider">{t('dakwah.internal.knowledge.card1_title')}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t('dakwah.internal.knowledge.card1_desc')}
                  </p>
                </div>
                <div className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-lg mb-4 text-[#29A6B6] uppercase tracking-wider">{t('dakwah.internal.knowledge.card2_title')}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t('dakwah.internal.knowledge.card2_desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Ethics Sub-section */}
            <div>
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                  {t('dakwah.internal.ethics.title')}
                </h3>
                <div className="flex-grow border-t border-gray-200 ms-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-lg mb-4 text-[#349B48] uppercase tracking-wider">{t('dakwah.internal.ethics.card1_title')}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t('dakwah.internal.ethics.card1_desc')}
                  </p>
                </div>
                <div className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-lg mb-4 text-[#349B48] uppercase tracking-wider">{t('dakwah.internal.ethics.card2_title')}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {t('dakwah.internal.ethics.card2_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- KAJIAN AL WAFI SECTION: Brand Anchor Block --- */}
        <div className="relative bg-[#29A6B6] shadow-[0_30px_60px_rgba(41,166,182,0.2)] overflow-hidden">

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
                <i className="fas fa-book-open me-2"></i>
                {t('dakwah.study.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
                {t('dakwah.study.title')}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 p-10 md:p-14 hover:bg-white/10 transition-colors duration-300">
                <p className="text-lg md:text-xl leading-relaxed font-light text-white/90">
                  {t('dakwah.study.desc_part1')} <strong className="text-white font-semibold">{t('dakwah.study.book1')}</strong>, <strong className="text-white font-semibold">{t('dakwah.study.book2')}</strong>, <strong className="text-white font-semibold">{t('dakwah.study.book3')}</strong> {t('dakwah.study.book3_author')}, {t('dakwah.study.conjunction')} <strong className="text-white font-semibold">{t('dakwah.study.book4')}</strong>.
                </p>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-white/80">
                    {t('dakwah.study.goals_title')}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {goalsList.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 shrink-0 bg-white/10 border border-white/30 flex items-center justify-center mt-1 me-4">
                          <i className="fas fa-check text-white text-[8px]"></i>
                        </div>
                        <span className="font-light leading-relaxed text-white/90">{item}</span>
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