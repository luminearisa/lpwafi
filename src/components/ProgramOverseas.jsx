import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const overseasImages = Array.from({ length: 67 }, (_, i) => `/images_overseas/umroh-study-overseas-${i + 1}.jpg`);

const ProgramOverseas = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % overseasImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7F6] font-sans selection:bg-[#29A6B6]/20 pb-32">
      
      {/* Premium Hero Section */}
      <div className="relative w-full h-[80vh] min-h-[600px] bg-gray-900 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <img 
            src={overseasImages[bgIndex]} 
            alt="Umroh Study Overseas Al Wafi" 
            className="w-full h-full object-cover opacity-50 scale-105 hover:scale-100 transition-all duration-[2000ms] ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-[#F4F7F6]"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto mt-20">
          <div className="inline-flex items-center px-5 py-2 bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-8 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#29A6B6] mr-3 animate-pulse"></span>
            Program Unggulan Internasional
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl mb-8">
            UMROH STUDY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29A6B6] to-[#349B48]">OVERSEAS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10">
            Perjalanan spiritual mendalam yang dipadukan secara eksklusif dengan pengayaan akademik bertaraf global di Makkah dan Madinah.
          </p>
        </div>
      </div>

      {/* Bento Grid Content Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        
        {/* Top Feature Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 bg-white rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pendidikan & Spiritual Terintegrasi</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              Melaksanakan ibadah umroh sembari menimba ilmu di kampus-kampus terkemuka di Timur Tengah kini menjadi sebuah pengalaman komprehensif. Program ini memadukan perjalanan spiritual mendalam dengan pengayaan akademik bertaraf internasional di dua kota suci.
            </p>
          </div>
          <div className="bg-[#29A6B6] rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_rgba(41,166,182,0.3)] text-white flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700">
              <i className="fas fa-globe text-9xl"></i>
            </div>
            <h3 className="text-6xl font-black mb-2">2018</h3>
            <p className="text-white/80 font-bold tracking-widest uppercase text-xs">Konsisten Sejak Tahun</p>
            <div className="mt-8">
              <p className="text-white/90 font-light leading-relaxed">
                Telah terbukti menjembatani para peserta untuk merasakan langsung ekosistem pendidikan di Timur Tengah.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-[#f0f9fa] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#29A6B6] transition-colors duration-300">
              <i className="fas fa-graduation-cap text-2xl text-[#29A6B6] group-hover:text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Aspek Akademik</h3>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              Peserta terlibat aktif menjadi pelajar melalui program Dauroh Bahasa Arab intensif di Learning Arabic Universitas Islam Madinah (UIM) yang ditutup dengan prosesi wisuda formal.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-[#f2fbf4] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#349B48] transition-colors duration-300">
              <i className="fas fa-kaaba text-2xl text-[#349B48] group-hover:text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Aspek Spiritual</h3>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              Pelaksanaan umroh, ibadah harian di Masjidil Haram, dan rutinitas Halaqah Al-Qur'an di Masjid Nabawi secara terstruktur dan terbimbing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
              <i className="fas fa-landmark text-2xl text-gray-700 group-hover:text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Eksplorasi Historis</h3>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              Napak tilas sejarah peradaban Islam ke Museum Wahyu, Museum Al Quran, Kota Thaif, Masjid Quba, hingga keajaiban arkeologi di Al Ula.
            </p>
          </div>

        </div>

        {/* Premium Agenda Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Rangkaian Perjalanan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#29A6B6] to-[#349B48] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Makkah Card */}
            <div className="group bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#29A6B6]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="inline-block px-4 py-1.5 bg-[#f0f9fa] text-[#29A6B6] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Fase Pertama
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8">Kota Makkah</h3>
              
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#29A6B6] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#29A6B6]/30">
                    <i className="fas fa-pray"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ibadah Inti Umroh</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Salat Jumat di Masjidil Haram dilanjutkan dengan ibadah inti Umroh pada hari kedatangan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-[#29A6B6] flex items-center justify-center shrink-0 shadow-sm">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Eksplorasi Edukasi</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Tour Kota Makkah, kunjungan ke Museum Wahyu, dan perjalanan menelusuri sejarah Kota Thaif.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-[#29A6B6] flex items-center justify-center shrink-0 shadow-sm">
                    <i className="fas fa-university"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Kunjungan Akademik</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Study Tour eksklusif ke Universitas Umm Al-Qura sebagai pengenalan ekosistem kampus Arab Saudi.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Madinah Card */}
            <div className="group bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#349B48]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="inline-block px-4 py-1.5 bg-[#f2fbf4] text-[#349B48] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Fase Kedua
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-8">Kota Madinah</h3>
              
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#349B48] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#349B48]/30">
                    <i className="fas fa-language"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dauroh Akademik</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Dauroh Bahasa Arab intensif di Learning Arabic UIM dan Halaqah Al-Qur'an di Masjid Nabawi.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-[#349B48] flex items-center justify-center shrink-0 shadow-sm">
                    <i className="fas fa-mosque"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ziarah & Spiritual</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Ziarah Baqi, Saqifah Bani Saidah, Quba Safari Night, dan jadwal khusus Raudhah.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-[#349B48] flex items-center justify-center shrink-0 shadow-sm">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Prosesi Kelulusan</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Diakhiri dengan Wisuda Dauroh Bahasa Arab yang megah dan Study Tour ke Universitas Taiba.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Gallery Masonry */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Potret Perjalanan</h2>
              <p className="text-gray-500 mt-2">Momen berharga selama Umroh Study Overseas</p>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="mt-6 md:mt-0 px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-[#29A6B6] transition-colors shadow-lg">
              Daftar Sekarang <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group h-[400px]">
              <img src="/images_overseas/umroh-study-overseas-5.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="rounded-3xl overflow-hidden group h-[190px]">
              <img src="/images_overseas/umroh-study-overseas-6.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
            </div>
            <div className="rounded-3xl overflow-hidden group h-[190px]">
              <img src="/images_overseas/umroh-study-overseas-7.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
            </div>
            <div className="rounded-3xl overflow-hidden group h-[190px]">
              <img src="/images_overseas/umroh-study-overseas-8.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
            </div>
            <div className="rounded-3xl overflow-hidden group h-[190px]">
              <img src="/images_overseas/umroh-study-overseas-9.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Scroll Strip */}
      <div className="mt-10 overflow-hidden bg-gray-900 py-10 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
            <div key={num} className="w-72 h-56 mx-3 rounded-2xl overflow-hidden shrink-0 group border border-white/10">
              <img 
                src={`/images_overseas/umroh-study-overseas-${num}.jpg`} 
                alt={`Kegiatan ${num}`} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {[12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
            <div key={`dup-${num}`} className="w-72 h-56 mx-3 rounded-2xl overflow-hidden shrink-0 group border border-white/10">
              <img 
                src={`/images_overseas/umroh-study-overseas-${num}.jpg`} 
                alt={`Kegiatan ${num}`} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </div>
  );
};

export default ProgramOverseas;