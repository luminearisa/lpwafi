import React from 'react';
import { useLanguage } from '../LanguageContext';

const UPZ = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Ambil data program dari JSON
  const rawPrograms = Array.isArray(t('upz.programs.list')) ? t('upz.programs.list') : [];

  // Icon statis untuk program
  const staticProgramIcons = [
    "fas fa-hands-helping",
    "fas fa-graduation-cap",
    "fas fa-mosque",
    "fas fa-heart",
    "fas fa-users",
    "fas fa-chart-line"
  ];

  const pilarPrograms = rawPrograms.map((item, index) => ({
    ...item,
    icon: staticProgramIcons[index % staticProgramIcons.length],
    isTeal: index % 2 === 0 // Berselang-seling warna
  }));

  // Helper untuk list misi
  const missionList = Array.isArray(t('upz.mission.list')) ? t('upz.mission.list') : [];

  return (
    <section
      id="upz"
      className="pt-40 pb-32 relative overflow-hidden bg-[#fcfdfd]"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="upz-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#349B48" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#upz-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 border border-[#349B48]/20 px-4 py-2 bg-[#f2fbf4]/50 shadow-sm">
            {t('upz.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            {t('upz.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('upz.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- HISTORY SECTION --- */}
        <div className="mb-24">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="flex items-start mb-12">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#f2fbf4] border border-[#349B48]/20">
                <i className="fas fa-history text-[#349B48] text-xl"></i>
              </div>
              <div className="ms-6 mt-2">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
                  {t('upz.history.title')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  <strong className="text-gray-900 font-bold">{t('upz.history.p1_part1')}</strong> {t('upz.history.p1_part2')}
                </p>
                <p>
                  {t('upz.history.p2')}
                </p>
              </div>
              <div className="relative">
                {/* Image Frame - Editorial Style */}
                <div className="relative bg-gray-50 border border-gray-100 p-3 shadow-xl">
                  <img
                    src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                    alt="Gedung UPZ Al Wafi"
                    className="w-full h-80 object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=UPZ+Al+Wafi";
                    }}
                  />
                  <div className="absolute inset-4 border border-white/40 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PILAR PROGRAM GRID --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight uppercase mb-6">
              {t('upz.programs.title')}
            </h2>
            <p className="text-gray-500 font-light leading-relaxed max-w-3xl mx-auto text-lg">
              {t('upz.programs.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilarPrograms.map((program, index) => {
              const themeColor = program.isTeal ? brandTeal : brandGreen;
              const themeBg = program.isTeal ? '#f0f9fa' : '#f2fbf4';

              return (
                <div
                  key={index}
                  className="group bg-white p-10 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center border border-gray-200 mb-8 transition-colors duration-500 group-hover:border-transparent"
                    style={{ backgroundColor: 'white' }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center transition-colors duration-500"
                      style={{ backgroundColor: themeBg }}
                    >
                      <i
                        className={`${program.icon} text-2xl group-hover:scale-110 transition-transform duration-500`}
                        style={{ color: themeColor }}
                      ></i>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4 tracking-wide">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    {program.description}
                  </p>

                  {/* Subtle bottom indicator */}
                  <div
                    className="h-0.5 w-0 group-hover:w-16 mt-8 transition-all duration-700 ease-out"
                    style={{ backgroundColor: themeColor }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- VISION & MISSION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">

          {/* Vision Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f0f9fa] flex items-center justify-center mb-8 border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-eye text-[#29A6B6] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('upz.vision.title')}
            </h3>
            <div className="p-8 border border-gray-100 bg-gray-50 mt-8 border-s-4 border-s-[#29A6B6]">
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {t('upz.vision.desc')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f2fbf4] flex items-center justify-center mb-8 border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-bullseye text-[#349B48] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              {t('upz.mission.title')}
            </h3>
            <ul className="space-y-6">
              {missionList.map((item, index) => (
                <li key={index} className="flex items-start group/list border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-6 h-6 shrink-0 bg-white border border-gray-200 flex items-center justify-center me-5 group-hover/list:bg-[#349B48] group-hover/list:border-[#349B48] transition-colors duration-500">
                    <i className="fas fa-check text-gray-300 group-hover/list:text-white text-[10px]"></i>
                  </div>
                  <span className="text-gray-600 font-light leading-relaxed text-lg pt-0.5 group-hover/list:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- CTA SECTION: Brand Anchor Block --- */}
        <div className="relative bg-[#349B48] shadow-[0_30px_60px_rgba(52,155,72,0.2)] overflow-hidden text-center">

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 px-8 py-20 md:p-24 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-[9px] uppercase tracking-[0.2em] font-bold text-white mb-6">
              <i className="fas fa-hand-holding-heart me-2"></i>
              {t('upz.cta.badge')}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
              {t('upz.cta.title')}
            </h2>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              {t('upz.cta.desc')}
            </p>

            {/* Optional Button placeholder (If you want to add a donation link later)
            <div className="mt-12">
               <button className="px-10 py-4 bg-white text-[#349B48] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#f2fbf4] shadow-xl hover:-translate-y-1 border border-white">
                 Salurkan Zakat
               </button>
            </div>
            */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default UPZ;