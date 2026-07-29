import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const FasilitasBanin = ({ data }) => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  const facilities = [
    {
      image: '/fasilitas_banin/West View AL Wafi.jpg',
      title: t('fasilitas_banin.items.west_view.title'),
      desc: t('fasilitas_banin.items.west_view.desc'),
      icon: 'fas fa-building',
      color: brandTeal,
    },
    {
      image: '/fasilitas_banin/Kamar.png',
      title: t('fasilitas_banin.items.kamar.title'),
      desc: t('fasilitas_banin.items.kamar.desc'),
      icon: 'fas fa-bed',
      color: brandGreen,
    },
    {
      image: '/fasilitas_banin/Ruang makan.png',
      title: t('fasilitas_banin.items.ruang_makan.title'),
      desc: t('fasilitas_banin.items.ruang_makan.desc'),
      icon: 'fas fa-utensils',
      color: brandTeal,
    },
    {
      image: '/fasilitas_banin/GP.png',
      title: t('fasilitas_banin.items.gp.title'),
      desc: t('fasilitas_banin.items.gp.desc'),
      icon: 'fas fa-mosque',
      color: brandGreen,
    },
    {
      image: '/fasilitas_banin/Mini soccer.png',
      title: t('fasilitas_banin.items.mini_soccer.title'),
      desc: t('fasilitas_banin.items.mini_soccer.desc'),
      icon: 'fas fa-futbol',
      color: brandTeal,
    },
    {
      image: '/fasilitas_banin/basket.jpg',
      title: t('fasilitas_banin.items.basket.title'),
      desc: t('fasilitas_banin.items.basket.desc'),
      icon: 'fas fa-basketball-ball',
      color: brandGreen,
    },
    {
      image: '/fasilitas_banin/_MG_3317.JPG.jpeg',
      title: t('fasilitas_banin.items.area_belajar.title'),
      desc: t('fasilitas_banin.items.area_belajar.desc'),
      icon: 'fas fa-book-open',
      color: brandTeal,
    },
  ];

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % facilities.length);
  };

  return (
    <section
      id="fasilitas-banin"
      className="pt-40 pb-32 relative overflow-hidden bg-[#f4f8f9]"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fb-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#29A6B6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fb-grid)" />
        </svg>
      </div>

      {/* Decorative accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${brandTeal} 0%, transparent 70%)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.04] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${brandGreen} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ---- EDITORIAL HEADER ---- */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border px-4 py-2 shadow-sm"
            style={{ color: brandTeal, borderColor: `${brandTeal}30`, background: `${brandTeal}08` }}
          >
            {t('fasilitas_banin.header.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            {t('fasilitas_banin.header.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            {t('fasilitas_banin.header.desc')}
          </p>
          <div className="w-16 h-1 mx-auto mt-8" style={{ backgroundColor: brandTeal }} />
        </div>

        {/* ---- STATS ROW ---- */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {[
            { num: '7+', label: t('fasilitas_banin.stats.fasilitas'), icon: 'fas fa-th-large' },
            { num: '2', label: t('fasilitas_banin.stats.kampus'), icon: 'fas fa-map-marker-alt' },
            { num: '100%', label: t('fasilitas_banin.stats.modern'), icon: 'fas fa-star' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 text-center group hover:shadow-[0_10px_40px_rgba(41,166,182,0.1)] transition-all duration-500"
            >
              <i
                className={`${stat.icon} text-2xl mb-3 block`}
                style={{ color: i % 2 === 0 ? brandTeal : brandGreen }}
              />
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ color: i % 2 === 0 ? brandTeal : brandGreen }}
              >
                {stat.num}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ---- GALLERY GRID ---- */}
        <div className="mb-24">
          {/* Featured first item - full width */}
          <div
            className="group relative overflow-hidden cursor-pointer mb-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500"
            onClick={() => openLightbox(0)}
          >
            <img
              src={facilities[0].image}
              alt={facilities[0].title}
              className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div
                className="inline-flex items-center px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white mb-2"
                style={{ backgroundColor: facilities[0].color }}
              >
                <i className={`${facilities[0].icon} me-2`} />
                {t('fasilitas_banin.featured')}
              </div>
              <h3 className="text-white text-xl font-bold">{facilities[0].title}</h3>
              <p className="text-white/80 text-sm font-light mt-1">{facilities[0].desc}</p>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fas fa-search-plus text-sm" />
            </div>
          </div>

          {/* Grid of remaining 6 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilities.slice(1).map((facility, index) => (
              <div
                key={index + 1}
                className="group relative overflow-hidden cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div
                    className="w-7 h-7 flex items-center justify-center text-white mb-2"
                    style={{ backgroundColor: facility.color }}
                  >
                    <i className={`${facility.icon} text-[10px]`} />
                  </div>
                  <h3 className="text-white text-sm font-bold leading-tight">{facility.title}</h3>
                </div>
                <div
                  className="absolute top-3 left-3 w-7 h-7 flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: facility.color }}
                >
                  {String(index + 2).padStart(2, '0')}
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand-alt text-[10px]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- FACILITY LIST CARDS ---- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border px-4 py-2"
              style={{ color: brandGreen, borderColor: `${brandGreen}30` }}
            >
              {t('fasilitas_banin.list_section.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {t('fasilitas_banin.list_section.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 p-8 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 shrink-0 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: facility.color }}
                  >
                    <i className={`${facility.icon} text-lg`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-2 tracking-wide">
                      {facility.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {facility.desc}
                    </p>
                  </div>
                </div>
                <div
                  className="h-0.5 w-0 group-hover:w-full mt-6 transition-all duration-700 ease-out"
                  style={{ backgroundColor: facility.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---- CTA BLOCK ---- */}
        <div
          className="relative overflow-hidden text-white p-12 md:p-16 text-center shadow-[0_30px_60px_rgba(41,166,182,0.2)]"
          style={{ backgroundColor: brandTeal }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M0,0 L200,100 M200,0 L0,100" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="50" y="20" width="100" height="60" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-[9px] uppercase tracking-[0.2em] font-bold text-white mb-6">
              <i className="fas fa-mosque me-2" />
              Al Wafi International Islamic Boarding School
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              {t('fasilitas_banin.cta.title')}
            </h2>
            <p className="text-white/80 text-lg font-light mb-8 max-w-xl mx-auto">
              {t('fasilitas_banin.cta.desc')}
            </p>
            <a
              href={data?.contact?.registration?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors duration-300"
              style={{ color: brandTeal }}
            >
              <span>{t('fasilitas_banin.cta.btn')}</span>
              <i className="fas fa-arrow-right ms-3 text-[10px]" />
            </a>
          </div>
        </div>

      </div>

      {/* ---- LIGHTBOX ---- */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors z-10"
            onClick={closeLightbox}
          >
            <i className="fas fa-times text-lg" />
          </button>
          <button
            className="absolute left-4 md:left-8 w-12 h-12 border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors z-10"
            onClick={prevImage}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <div className="max-w-5xl max-h-[80vh] mx-auto px-16 w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={facilities[activeIndex].image}
              alt={facilities[activeIndex].title}
              className="max-w-full max-h-[65vh] object-contain mx-auto block"
            />
            <div className="text-center mt-6">
              <div
                className="inline-flex items-center px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white mb-2"
                style={{ backgroundColor: facilities[activeIndex].color }}
              >
                <i className={`${facilities[activeIndex].icon} me-2`} />
                {String(activeIndex + 1).padStart(2, '0')} / {String(facilities.length).padStart(2, '0')}
              </div>
              <h3 className="text-white text-xl font-bold mt-2">{facilities[activeIndex].title}</h3>
              <p className="text-white/60 text-sm font-light mt-1">{facilities[activeIndex].desc}</p>
            </div>
          </div>
          <button
            className="absolute right-4 md:right-8 w-12 h-12 border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors z-10"
            onClick={nextImage}
          >
            <i className="fas fa-chevron-right" />
          </button>
          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
            {facilities.map((f, i) => (
              <div
                key={i}
                className={`w-12 h-12 shrink-0 cursor-pointer border-2 transition-all duration-200 ${i === activeIndex ? 'border-white scale-110' : 'border-white/20 opacity-50 hover:opacity-80'}`}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
              >
                <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FasilitasBanin;
