import React from 'react';
import { useLanguage } from '../LanguageContext';

const SDTQ = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Data Teaching Concepts
  const rawTeachingConcepts = Array.isArray(t('sdtq.teaching.concepts')) ? t('sdtq.teaching.concepts') : [];

  // Data Tahfidz
  const rawTahfidzPrograms = Array.isArray(t('sdtq.tahfidz.programs')) ? t('sdtq.tahfidz.programs') : [];
  const tahfidzStaticData = [
    { icon: "fas fa-microphone" },
    { icon: "fas fa-users" },
    { icon: "fas fa-certificate" },
    { icon: "fas fa-calendar-alt" },
    { icon: "fas fa-campground" }
  ];

  const tahfidzPrograms = rawTahfidzPrograms.map((item, index) => ({
    ...item,
    ...tahfidzStaticData[index % tahfidzStaticData.length]
  }));

  return (
    <section
      id="sdtq"
      className="pt-40 pb-32 relative overflow-hidden bg-[#f4f8f9]"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sdtq-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#349B48" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sdtq-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 border border-[#349B48]/20 px-4 py-2 bg-[#f2fbf4]/50 shadow-sm">
            {t('sdtq.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            {t('sdtq.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('sdtq.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- INTRODUCTION SECTION --- */}
        <div className="mb-24">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  {t('sdtq.intro.p1')}
                </p>
                <p>
                  {t('sdtq.intro.p2')}
                </p>
              </div>
              <div className="relative">
                {/* Image Frame - Editorial Style */}
                <div className="relative bg-gray-50 border border-gray-100 p-3 shadow-xl">
                  <img
                    src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                    alt="Gedung SDTQ Al Wafi"
                    className="w-full h-80 object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=SDTQ+Al+Wafi";
                    }}
                  />
                  <div className="absolute inset-4 border border-white/40 pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- EXCELLENCE BADGE --- */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-6 py-3 border border-[#29A6B6]/30 bg-white text-[#29A6B6] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <i className="fas fa-star me-3"></i>
            {t('sdtq.excellence.badge')}
            <i className="fas fa-star ms-3"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mt-6 tracking-tight">
            {t('sdtq.excellence.title')}
          </h2>
        </div>

        {/* --- TEACHING CONCEPTS --- */}
        <div className="mb-32">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500">
            <div className="text-center mb-16">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#29A6B6] mb-4">
                {t('sdtq.teaching.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {t('sdtq.teaching.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rawTeachingConcepts.map((concept, index) => {
                // Alternating colors
                const isTeal = index % 2 === 0;
                const themeColor = isTeal ? brandTeal : brandGreen;

                return (
                  <div
                    key={index}
                    className="group bg-white p-8 border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col hover:-translate-y-1"
                  >
                    <div className="mb-6 pb-6 border-b border-gray-100 relative">
                      <div className="absolute top-0 end-0 text-5xl font-extrabold opacity-5 text-gray-900 pointer-events-none">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3
                        className="font-bold text-xl tracking-wide relative z-10"
                        style={{ color: themeColor }}
                      >
                        {concept.title}
                      </h3>
                    </div>

                    <div className="space-y-6 flex-grow">
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                          {t('sdtq.teaching.labels.approach')}
                        </span>
                        <p className="text-gray-700 leading-relaxed font-light text-sm">{concept.approach}</p>
                      </div>

                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                          {t('sdtq.teaching.labels.activities')}
                        </span>
                        <p className="text-gray-700 leading-relaxed font-light text-sm">{concept.activities}</p>
                      </div>

                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                          {t('sdtq.teaching.labels.goals')}
                        </span>
                        <p className="text-gray-700 leading-relaxed font-light text-sm">{concept.goals}</p>
                      </div>
                    </div>

                    {/* Animated bottom line */}
                    <div
                      className="h-0.5 w-0 group-hover:w-full mt-8 transition-all duration-700 ease-out"
                      style={{ backgroundColor: themeColor }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- TAHFIDZ PROGRAM: Brand Anchor Block --- */}
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
                <i className="fas fa-book-open me-2"></i>
                {t('sdtq.tahfidz.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
                {t('sdtq.tahfidz.title')}
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                {t('sdtq.tahfidz.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {tahfidzPrograms.map((program, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center mb-6 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/10 border border-white/20 text-white group-hover:bg-white group-hover:text-[#349B48] transition-colors duration-300">
                      <i className={`${program.icon} text-lg`}></i>
                    </div>
                    <h3 className="font-bold text-lg ms-4 uppercase tracking-wide text-white leading-tight">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/80 font-light leading-relaxed flex-grow">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SDTQ;