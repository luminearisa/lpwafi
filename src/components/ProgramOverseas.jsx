import React from 'react';
import { useLanguage } from '../LanguageContext';

const ProgramOverseas = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // ngambil data dari json
  const missionPoints = Array.isArray(t('overseas_program.mission.list')) ? t('overseas_program.mission.list') : [];
  const malaysiaActivities = Array.isArray(t('overseas_program.cards.malaysia.activities')) ? t('overseas_program.cards.malaysia.activities') : [];

  return (
    <section
      id="program-overseas"
      className="pt-40 pb-32 relative overflow-hidden bg-[#fcfdfd]"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND (Global Theme) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="overseas-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Grid Lines */}
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#29A6B6" strokeWidth="0.5" />
              {/* Subtle intersection dots */}
              <circle cx="100" cy="100" r="1.5" fill="#29A6B6" />
              <circle cx="0" cy="100" r="1.5" fill="#29A6B6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#overseas-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#29A6B6] mb-6 border border-[#29A6B6]/20 px-4 py-2 bg-[#f0f9fa]/50 shadow-sm">
            {t('overseas_program.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            {t('overseas_program.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('overseas_program.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#349B48] mx-auto mt-10"></div>
        </div>

        {/* --- VISION SECTION (Editorial Image & Text) --- */}
        <div className="mb-24">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20">
                    <i className="fas fa-eye text-[#29A6B6] text-xl"></i>
                  </div>
                  <div className="ms-6 mt-2">
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
                      {t('overseas_program.vision.title')}
                    </h2>
                  </div>
                </div>
                <p className="text-gray-600 font-light leading-relaxed text-lg">
                  {t('overseas_program.vision.desc')}
                </p>
              </div>
              <div className="relative">
                {/* Image Frame - Editorial Style */}
                <div className="relative bg-gray-50 border border-gray-100 p-3 shadow-xl">
                  <img
                    src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                    alt="Gedung Al Wafi"
                    className="w-full h-72 object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700"
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

        {/* --- MISSION SECTION --- */}
        <div className="mb-24">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="flex items-start mb-12">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#f2fbf4] border border-[#349B48]/20">
                <i className="fas fa-bullseye text-[#349B48] text-xl"></i>
              </div>
              <div className="ms-6 mt-2">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
                  {t('overseas_program.mission.title')}
                </h2>
              </div>
            </div>
            <ul className="space-y-6">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start group border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-8 h-8 shrink-0 bg-white border border-gray-200 flex items-center justify-center me-6 group-hover:bg-[#349B48] group-hover:border-[#349B48] transition-colors duration-500">
                    <span className="text-gray-400 group-hover:text-white text-xs font-bold font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-gray-600 font-light leading-relaxed text-lg pt-1 group-hover:text-gray-900 transition-colors duration-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- DESTINATION CARDS SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">

          {/* UIM & Umrah Program */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f0f9fa] flex items-center justify-center mb-8 border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-kaaba text-[#29A6B6] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('overseas_program.cards.uim.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
              {t('overseas_program.cards.uim.desc')}
            </p>
            <div className="p-6 border-s-4 border-[#29A6B6] bg-[#f0f9fa]">
              <p className="font-medium text-gray-800">
                {t('overseas_program.cards.uim.highlight')}
              </p>
            </div>
          </div>

          {/* Malaysia Program */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f2fbf4] flex items-center justify-center mb-8 border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-globe-asia text-[#349B48] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('overseas_program.cards.malaysia.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
              {t('overseas_program.cards.malaysia.desc')}
            </p>
            <div className="space-y-4 pt-6 border-t border-gray-100">
              {malaysiaActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#349B48] mt-2.5 me-4"></div>
                  <span className="text-gray-600 font-light leading-relaxed">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- CALL TO ACTION: Brand Anchor Block --- */}
        <div className="relative bg-[#29A6B6] shadow-[0_30px_60px_rgba(41,166,182,0.2)] overflow-hidden">

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 px-8 py-20 md:p-24 text-white text-center">

            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-[9px] uppercase tracking-[0.2em] font-bold text-white mb-8">
              <i className="fas fa-plane me-2"></i>
              {t('overseas_program.cta.badge')}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
              {t('overseas_program.cta.title')}
            </h2>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-16">
              {t('overseas_program.cta.desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 max-w-4xl mx-auto border-t border-white/20 pt-16">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-light mb-4">2<span className="font-bold text-[#349B48]">+</span></div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/80">{t('overseas_program.cta.stats.countries')}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-light mb-4">10<span className="font-bold text-[#349B48]">+</span></div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/80">{t('overseas_program.cta.stats.partners')}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-light mb-4">100<span className="font-bold text-[#349B48]">+</span></div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-white/80">{t('overseas_program.cta.stats.alumni')}</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramOverseas;