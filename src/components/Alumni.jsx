import React from 'react';
import { useLanguage } from '../LanguageContext';
import AlumniMap from './AlumniMap';
import AlumniMap2026 from './AlumniMap2026';

const Alumni = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Separate domestic and international universities
  const domesticUniversities = data?.universities?.filter(uni =>
    ['Institut Teknologi Bandung', 'Institut Pertanian Bogor', 'Institut Teknologi Sepuluh Nopember',
      'Universitas Padjadjaran', 'Universitas Andalas', 'Binus University', 'Telkom University', 'Universitas Trisakti'].includes(uni.name)
  ) || [];

  const internationalUniversities = data?.universities?.filter(uni =>
    ['Universitas Malaysia', 'Universiti Teknologi Malaysia', 'Multimedia University', 'International Islamic University Malaysia', 'Islamic University of Madinah', 'Taibah University', 'Prince Sattam bin Abdulaziz University', 'Qassim University', 'King Saud University', 'King Abdulaziz University', 'Princess Nourah bint Abdulrahman University', 'Al-Azhar University', 'Asia Pacific University'].includes(uni.name)
  ) || [];

  // helper buat ambil list
  const achievementList = Array.isArray(t('alumni.success.list')) ? t('alumni.success.list') : [];

  return (
    <section
      id="alumni"
      className="py-32 relative overflow-hidden bg-[#f4f8f9]"
    >
      {/* --- SUBTLE DOT GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #29A6B6 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      {/* Top and Bottom Fade Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f4f8f9] to-transparent z-0"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f4f8f9] to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 bg-white px-4 py-2 border border-[#349B48]/10 shadow-sm">
            {t('alumni.header.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
            {t('alumni.header.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('alumni.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- STATISTICS: Minimalist Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-32 border-b border-gray-200 pb-20">
          {[
            { icon: 'fa-user-graduate', number: '1100+', label: t('alumni.stats.global'), color: brandTeal },
            { icon: 'fa-university', number: '50+', label: t('alumni.stats.university'), color: brandGreen },
            { icon: 'fa-globe', number: '15+', label: t('alumni.stats.country'), color: brandTeal },
            { icon: 'fa-trophy', number: '95%', label: t('alumni.stats.acceptance'), color: brandGreen }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div
                className="w-12 h-12 mb-6 flex items-center justify-center bg-white border border-gray-100 shadow-sm group-hover:-translate-y-2 transition-transform duration-500"
              >
                <i className={`fas ${stat.icon} text-lg`} style={{ color: stat.color }}></i>
              </div>
              <h3
                className="text-4xl lg:text-5xl font-light mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </h3>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- ALUMNI MAP --- */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-gray-200 pb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Peta Sebaran Alumni
              </h3>
              <p className="text-sm text-gray-500 font-light">
                Jaringan luas alumni yang melanjutkan studi ke berbagai penjuru dunia
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <AlumniMap universities={[...domesticUniversities, ...internationalUniversities]} />
          </div>
        </div>

        {/* --- UNIVERSITY LOGOS: Professional Agency Layout --- */}
        <div className="mb-32">

          {/* Domestic Universities */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('alumni.domestic.title')}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {t('alumni.domestic.desc')}
                </p>
              </div>
              <div className="w-12 h-1 bg-[#29A6B6] mt-6 md:mt-0"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1">
              {domesticUniversities.map((university, index) => (
                <div
                  key={index}
                  className="bg-white p-8 border border-gray-100 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="h-16 w-full flex items-center justify-center mb-6">
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="max-h-full max-w-full object-contain grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/150x80/ffffff/666666?text=${encodeURIComponent(university.name.split(' ')[0])}`;
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest text-center">
                    {university.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* International Universities */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('alumni.international.title')}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {t('alumni.international.desc')}
                </p>
              </div>
              <div className="w-12 h-1 bg-[#349B48] mt-6 md:mt-0"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1">
              {internationalUniversities.map((university, index) => (
                <div
                  key={index}
                  className="bg-white p-8 border border-gray-100 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="h-16 w-full flex items-center justify-center mb-6">
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="max-h-full max-w-full object-contain grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/150x80/ffffff/666666?text=${encodeURIComponent(university.name.split(' ')[0])}`;
                      }}
                    />
                  </div>
                  <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest text-center">
                    {university.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- 2026 ALUMNI DATA MAP --- */}
        <AlumniMap2026 />

        {/* --- SUCCESS STORY: High Contrast Premium Banner --- */}
        <div className="bg-[#0f1718] border border-[#29A6B6]/20 shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row">

          {/* Left Content (Text) */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">

            {/* Subtle Brand Watermark */}
            <div className="absolute top-0 end-0 p-8 opacity-[0.03] pointer-events-none">
              <i className="fas fa-quote-right text-9xl text-white"></i>
            </div>

            <div className="relative z-10 text-white">
              <div className="inline-flex items-center px-4 py-2 border border-[#349B48]/30 bg-[#349B48]/10 text-[9px] uppercase tracking-[0.2em] font-bold text-[#349B48] mb-8">
                <i className="fas fa-star me-2"></i>
                {t('alumni.success.badge')}
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                {t('alumni.success.title')}
              </h3>

              <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
                {t('alumni.success.desc')}
              </p>

              <div className="space-y-6 border-t border-white/10 pt-8">
                {achievementList.map((achievement, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-5 h-5 shrink-0 bg-[#349B48] flex items-center justify-center mt-1 me-5">
                      <i className="fas fa-check text-white text-[10px]"></i>
                    </div>
                    <span className="text-gray-300 leading-relaxed font-light">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content (Image & Floating Badge) */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-gray-900 border-l border-white/5">
            <img
              src={data?.images?.alumni || "/placeholder-alumni.jpg"}
              alt="Sebaran Alumni"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x800/111111/333333?text=Sebaran+Alumni+Global";
              }}
            />

            {/* Floating Editorial Badge */}
            <div className="absolute -top-6 -start-6 md:top-10 md:-start-10 bg-white p-6 shadow-2xl border border-gray-100 flex flex-col items-center">
              <div className="text-4xl font-light text-[#29A6B6] mb-1">
                95<span className="font-bold">%</span>
              </div>
              <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest text-center">
                {t('alumni.success.rate_label')}
              </div>
              <div className="w-full h-0.5 bg-[#349B48] mt-4"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Alumni;