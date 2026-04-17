import React from 'react';
import { useLanguage } from '../LanguageContext';

const Programs = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Helper untuk mengambil list program dari translation
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

  return (
    <section
      id="programs"
      className="py-32 relative overflow-hidden bg-white"
    >
      {/* --- SUBTLE ARCHITECTURAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="editorial-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#000000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#editorial-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#29A6B6] mb-6">
            {t('programs.header.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
            {t('programs.header.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('programs.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#349B48] mx-auto mt-10"></div>
        </div>

        {/* --- PROGRAMS GRID: High-End Minimalist Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {programsList.map((program, index) => {
            // Bergantian warna antara Teal dan Green untuk setiap kartu
            const isTeal = index % 2 === 0;
            const themeColor = isTeal ? brandTeal : brandGreen;
            const themeBg = isTeal ? '#f0f9fa' : '#f2fbf4';

            return (
              <div
                key={program.id}
                className="group bg-white border border-gray-100 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Icon Box */}
                <div className="mb-8">
                  <div
                    className="w-16 h-16 flex items-center justify-center border border-gray-100 group-hover:border-transparent transition-colors duration-500"
                    style={{ backgroundColor: 'white' }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center transition-colors duration-500"
                      style={{ backgroundColor: themeBg }}
                    >
                      <i
                        className={`fas ${getIcon(program.id)} text-2xl group-hover:scale-110 transition-transform duration-500`}
                        style={{ color: themeColor }}
                      ></i>
                    </div>
                  </div>
                </div>

                {/* Program Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                  {program.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-sm font-light flex-grow mb-8">
                  {program.description}
                </p>

                {/* Variants / Tags (Minimalist Outlines) */}
                {program.variants && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {program.variants.map((variant, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200 group-hover:text-gray-900 transition-colors duration-300"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                )}

                {/* Subtle bottom indicator */}
                <div
                  className="h-0.5 w-0 group-hover:w-full mt-8 transition-all duration-700 ease-out"
                  style={{ backgroundColor: themeColor }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* --- SPECIAL PROGRAM HIGHLIGHT: Split Screen Editorial --- */}
        <div className="mb-32 shadow-[0_30px_60px_rgba(0,0,0,0.08)] bg-white border border-gray-100 flex flex-col lg:flex-row">

          {/* Left Content (Text) */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden bg-[#0a0a0a]">
            {/* Subtle background element inside dark block */}
            <div className="absolute top-0 end-0 p-8 opacity-5">
              <i className="fas fa-globe text-9xl text-white"></i>
            </div>

            <div className="relative z-10 text-white">
              <div className="inline-flex items-center px-4 py-2 border border-white/20 bg-white/5 text-[9px] uppercase tracking-[0.2em] font-medium mb-8">
                <i className="fas fa-star text-[#29A6B6] me-2"></i>
                {t('programs.overseas.badge')}
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {t('programs.overseas.title')}
              </h3>

              <p className="text-lg text-[#29A6B6] font-medium mb-6 uppercase tracking-widest text-[11px]">
                {t('programs.overseas.subtitle')}
              </p>

              <p className="text-gray-400 font-light leading-relaxed mb-12">
                {t('programs.overseas.desc')}
              </p>

              {/* Minimalist Feature Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div className="group">
                  <i className="fas fa-mosque text-[#349B48] text-xl mb-3 group-hover:-translate-y-1 transition-transform"></i>
                  <div className="text-[10px] text-gray-300 uppercase tracking-widest font-medium">
                    {t('programs.overseas.features.uim')}
                  </div>
                </div>
                <div className="group">
                  <i className="fas fa-kaaba text-[#349B48] text-xl mb-3 group-hover:-translate-y-1 transition-transform"></i>
                  <div className="text-[10px] text-gray-300 uppercase tracking-widest font-medium">
                    {t('programs.overseas.features.umrah')}
                  </div>
                </div>
                <div className="group">
                  <i className="fas fa-users text-[#349B48] text-xl mb-3 group-hover:-translate-y-1 transition-transform"></i>
                  <div className="text-[10px] text-gray-300 uppercase tracking-widest font-medium">
                    {t('programs.overseas.features.guide')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-gray-100">
            <img
              src={data?.images?.uim || "/placeholder-uim.jpg"}
              alt="Study Overseas UIM"
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x800/eeeeee/999999?text=Study+Overseas+UIM";
              }}
            />
            {/* High-end border overlay on image */}
            <div className="absolute inset-4 border border-white/30 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>

        {/* --- METHOD HIGHLIGHT: Minimalist Text Focused Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-20">

          {/* Method 1 */}
          <div className="group flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-8 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-brain text-[#29A6B6] text-2xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
              {t('programs.methods.active.title')}
            </h4>
            <p className="text-gray-500 font-light leading-relaxed">
              {t('programs.methods.active.desc')}
            </p>
          </div>

          {/* Method 2 */}
          <div className="group flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-8 flex items-center justify-center bg-[#f2fbf4] border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-heart text-[#349B48] text-2xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
              {t('programs.methods.islamic.title')}
            </h4>
            <p className="text-gray-500 font-light leading-relaxed">
              {t('programs.methods.islamic.desc')}
            </p>
          </div>

          {/* Method 3 */}
          <div className="group flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-8 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-globe text-[#29A6B6] text-2xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
              {t('programs.methods.global.title')}
            </h4>
            <p className="text-gray-500 font-light leading-relaxed">
              {t('programs.methods.global.desc')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Programs;