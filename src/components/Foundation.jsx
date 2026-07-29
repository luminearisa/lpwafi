import React from 'react';
import { useLanguage } from '../LanguageContext';

const Foundation = ({ data }) => {
  const { t } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Helper untuk list data
  const goalsList = Array.isArray(t('foundation.history.goals')) ? t('foundation.history.goals') : [];
  const missionList = Array.isArray(t('foundation.mission.list')) ? t('foundation.mission.list') : [];
  const valuesList = Array.isArray(t('foundation.values.list')) ? t('foundation.values.list') : [];

  return (
    <section
      id="foundation"
      className="pt-40 pb-32 relative overflow-hidden bg-[#fcfdfd]"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="foundation-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#29A6B6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#foundation-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 border border-[#349B48]/20 px-4 py-2 bg-[#f2fbf4]/50 shadow-sm">
            {t('foundation.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            {t('foundation.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('foundation.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- INTRODUCTION SECTION --- */}
        <div className="mb-16">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="flex items-start mb-12">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20">
                <i className="fas fa-home text-[#29A6B6] text-xl"></i>
              </div>
              <div className="ms-6 mt-2">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight uppercase">
                  {t('foundation.intro.title')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p className="font-semibold text-gray-900">Assalamu'alaikum Wr Wb.</p>
                <p>{t('foundation.intro.p1')}</p>
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

            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg border-t border-gray-100 pt-10">
              <p>{t('foundation.intro.p2')}</p>
              <p>{t('foundation.intro.p3')}</p>
              <p>{t('foundation.intro.p4')}</p>
              <p>{t('foundation.intro.p5')}</p>
              <p className="font-semibold text-gray-900 pt-4">Wassalamu'alaikum Wr Wb.</p>
            </div>
          </div>
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
                  {t('foundation.history.title')}
                </h2>
              </div>
            </div>

            <div className="space-y-8 text-gray-600 font-light leading-relaxed text-lg">
              <p>{t('foundation.history.p1')}</p>

              {/* Highlight Block - Sharp Editorial */}
              <div className="p-8 border-s-4 border-[#29A6B6] bg-[#f0f9fa]">
                <p className="font-medium text-gray-900 text-xl leading-snug">
                  {t('foundation.history.highlight_part1')} <span className="text-[#29A6B6] font-bold">{t('foundation.history.highlight_date')}</span>.
                </p>
              </div>

              <p>
                {t('foundation.history.p3_part1')} <strong className="text-gray-900">Yayasan Al-Sudais Indonesia</strong> {t('foundation.history.p3_part2')} <strong className="text-gray-900">{t('foundation.history.p3_date')}</strong> {t('foundation.history.p3_part3')}
              </p>

              {/* Goals Box */}
              <div className="p-10 border border-gray-100 bg-gray-50 shadow-inner mt-8">
                <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">{t('foundation.history.goals_title')}</h4>
                <ol className="list-decimal list-inside space-y-4 marker:text-[#349B48] marker:font-bold">
                  {goalsList.map((goal, idx) => (
                    <li key={idx} className="ps-2">{goal}</li>
                  ))}
                </ol>
              </div>

              <p className="pt-4">
                {t('foundation.history.p4_part1')} <strong className="text-gray-900">SDTQ, SMP Al Wafi IBS, SMA Al Wafi IBS dan Sekolah Tinggi Ilmu Tarbiah Al Wafi</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* --- VISION & MISSION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Vision Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(41,166,182,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f0f9fa] flex items-center justify-center mb-8 border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
              <i className="fas fa-eye text-[#29A6B6] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider">
              {t('foundation.vision.title')}
            </h3>
            <div className="p-8 border border-gray-100 bg-gray-50 mt-8">
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {t('foundation.vision.desc')}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(52,155,72,0.08)] transition-all duration-500">
            <div className="w-14 h-14 bg-[#f2fbf4] flex items-center justify-center mb-8 border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
              <i className="fas fa-bullseye text-[#349B48] text-xl group-hover:text-white transition-colors duration-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
              {t('foundation.mission.title')}
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

        {/* --- STRUCTURE SECTION --- */}
        <div className="mb-32">
          <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-50 border border-gray-200 mb-6">
                <i className="fas fa-sitemap text-gray-900 text-xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
                {t('foundation.structure.title')}
              </h2>
              <div className="w-12 h-1 bg-gray-900 mt-6"></div>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Pembina Yayasan */}
              <div className="flex justify-center">
                <div className="w-full md:w-[620px] rounded-2xl border border-[#0f4f73]/20 shadow-lg overflow-hidden bg-white">
                  <div className="bg-[#0f4f73] text-white text-center py-3 px-6">
                    <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wide">Pembina Yayasan</h3>
                    <p className="text-sm md:text-base font-medium mt-1 text-white/90">Dr. Ali Saman Hasan, Lc., M.A., LL.B., LL.M.</p>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="h-8 flex justify-center">
                <div className="w-px h-full bg-[#0f4f73]/70"></div>
              </div>

              {/* Split connector line */}
              <div className="hidden md:block max-w-5xl mx-auto border-t-2 border-[#0f4f73]/70"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* Pengawas Yayasan */}
                <div className="rounded-2xl border border-[#0f4f73]/20 shadow-md overflow-hidden bg-white">
                  <div className="bg-[#006b7f] text-white py-3 px-6">
                    <h4 className="text-base md:text-lg font-extrabold uppercase tracking-wide text-center">Pengawas Yayasan</h4>
                  </div>
                  <div className="p-6 md:p-8 bg-[#f7fcff]">
                    <ol className="list-decimal list-inside text-gray-800 space-y-2 font-medium">
                      <li>Yusuf Baisa, Lc.</li>
                      <li>Zainal Abidin, Lc., M.A.</li>
                      <li>R. Moh. Taufik</li>
                    </ol>
                  </div>

                  <div className="h-8 flex justify-center">
                    <div className="w-px h-full bg-[#0f4f73]/60"></div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="bg-[#006b7f] text-white text-center py-3 px-4 rounded-xl font-extrabold uppercase tracking-wide text-sm md:text-base">
                      Satuan Pengawasan Internal
                    </div>
                  </div>
                </div>

                {/* Pengurus Yayasan */}
                <div className="rounded-2xl border border-[#0f4f73]/20 shadow-md overflow-hidden bg-white">
                  <div className="bg-[#0f4f73] text-white py-3 px-6">
                    <h4 className="text-base md:text-lg font-extrabold uppercase tracking-wide text-center">Pengurus Yayasan</h4>
                  </div>
                  <div className="p-4 md:p-6 bg-[#f7fcff]">
                    <div className="divide-y divide-[#0f4f73]/10 border border-[#0f4f73]/10 rounded-lg overflow-hidden">
                      {[
                        ["Ketua", "Dr. Marullah Marzuq, M.A., LL.M."],
                        ["Wakil Ketua", "Kartiko Adi Pramono, M.Pd."],
                        ["Sekretaris I", "Abdurahman, B.A., M.E."],
                        ["Sekretaris II", "Dedi Haryadi"],
                        ["Bendahara I", "Sahrul, Lc., M.E."],
                        ["Bendahara II", "Kiki Kusmayadi, M.Ak."]
                      ].map(([role, name], idx) => (
                        <div key={idx} className="grid grid-cols-12 bg-white">
                          <div className="col-span-4 md:col-span-3 px-4 py-3 font-bold text-[#0f4f73] text-sm md:text-base">
                            {role}
                          </div>
                          <div className="col-span-8 md:col-span-9 px-4 py-3 text-gray-900 font-medium text-sm md:text-base border-s border-[#0f4f73]/10">
                            {name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- VALUES SECTION: Brand Anchor Block --- */}
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
                <i className="fas fa-star me-2"></i>
                {t('foundation.values.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
                {t('foundation.values.title')}
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                {t('foundation.values.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {valuesList.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/10 border border-white/20 text-white font-bold text-xl group-hover:bg-white group-hover:text-[#29A6B6] transition-colors duration-300">
                      {value.letter}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 uppercase tracking-wide text-white">
                        {value.word}
                      </h4>
                      <p className="text-sm text-white/70 font-light leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;