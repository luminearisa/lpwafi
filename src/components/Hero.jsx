import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const heroImages = Array.from({ length: 12 }, (_, i) => `/images_hero/hero-${i + 1}.jpg`);

const Hero = ({ data }) => {
  const { t } = useLanguage();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#fcfdfd]"
    >
      {/* --- BACKGROUND CAROUSEL --- */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-white">
          <div className="absolute inset-0">
            <img
              src={heroImages[bgIndex]}
              alt="Gedung Al Wafi"
              className="w-full h-full object-cover opacity-40 transition-opacity duration-[1000ms] ease-in-out"
            />
          </div>
        </div>

        {/* Light Gradient Overlay - Memastikan teks tetap terbaca tanpa membuat gelap */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>

        {/* Subtle Grid Pattern Overlay untuk tekstur arsitektural */}
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(41, 166, 182, 0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">

          {/* --- LEFT CONTENT --- */}
          <div className="space-y-10 lg:pe-8">

            {/* Minimalist Badge - Bright Theme */}
            <div className="inline-flex items-center px-4 py-2 border border-[#29A6B6]/20 bg-white/60 backdrop-blur-md text-[9px] text-[#29A6B6] uppercase tracking-[0.2em] font-bold shadow-sm">
              <div className="w-1.5 h-1.5 bg-[#349B48] rounded-full me-3 animate-pulse"></div>
              {t('hero.badge')}
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                <span className="block drop-shadow-sm">
                  {t('header.brand.title')} <br /> 
                  <span className="text-gray-900">{t('header.brand.subtitle')}</span>
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 font-medium max-w-xl leading-relaxed tracking-wide">
                {t('hero.desc.part1')}
                <span className="text-[#29A6B6] font-bold"> {t('hero.desc.highlight')}</span>,
                {t('hero.desc.part2')}
              </p>
            </div>

            {/* Postmodern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-8 py-4 bg-[#29A6B6] text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#1f828f] shadow-[0_10px_30px_rgba(41,166,182,0.3)] hover:shadow-[0_15px_35px_rgba(41,166,182,0.4)] hover:-translate-y-1"
              >
                <span>{t('hero.cta.register')}</span>
                <i className="fas fa-arrow-right ms-4 transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>

              <a
                href="#about"
                className="group flex items-center justify-center px-8 py-4 bg-white text-[#349B48] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border border-[#349B48]/30 hover:border-[#349B48] hover:bg-[#f2fbf4] hover:-translate-y-1 shadow-sm"
              >
                <span>{t('hero.cta.learn')}</span>
              </a>
            </div>

            {/* Minimalist Stats - Light Theme */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200">
              <div>
                <div className="text-3xl lg:text-4xl font-light text-[#29A6B6] mb-1">1100<span className="text-[#349B48] font-bold">+</span></div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{t('hero.stats.alumni')}</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-[#29A6B6] mb-1">150<span className="text-[#349B48] font-bold">+</span></div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{t('hero.stats.teachers')}</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-light text-[#29A6B6] mb-1">A</div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{t('hero.stats.accreditation')}</div>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT: Editorial Style Image & Cards --- */}
          <div className="relative lg:ps-8 mt-12 lg:mt-0 hidden md:block">

            <div className="relative">
              {/* Image Frame - Clean White with soft luxury shadow */}
              <div className="relative bg-white p-3 border border-gray-100 shadow-[0_20px_50px_rgba(41,166,182,0.1)]">
                <img
                  src={data?.images?.hero || "/placeholder-building.jpg"}
                  alt="Al Wafi Islamic Boarding School"
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-all duration-700 hover:scale-[1.02]"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x800/eeeeee/aaaaaa?text=Al+Wafi+Campus";
                  }}
                />

                {/* Overlay Inner Border for luxury feel */}
                <div className="absolute inset-3 border border-white/40 pointer-events-none mix-blend-overlay"></div>
              </div>

              {/* Floating Info Card 1 - UIM (Teal Accent) */}
              <div className="absolute -bottom-6 -start-10 bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[260px] border border-gray-100 group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#f0f9fa] flex items-center justify-center border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
                    <i className="fas fa-certificate text-[#29A6B6] text-sm group-hover:text-white transition-colors duration-500"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">{t('hero.cards.uim_title')}</div>
                    <div className="text-[10px] text-gray-500 leading-relaxed">{t('hero.cards.uim_sub')}</div>
                  </div>
                </div>
              </div>

              {/* Floating Info Card 2 - Campus (Green Accent) */}
              <div className="absolute -top-6 -end-6 bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[260px] border border-gray-100 group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#f2fbf4] flex items-center justify-center border border-[#349B48]/20 group-hover:bg-[#349B48] transition-colors duration-500">
                    <i className="fas fa-map-marker-alt text-[#349B48] text-sm group-hover:text-white transition-colors duration-500"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">{t('hero.cards.campus_title')}</div>
                    <div className="text-[10px] text-gray-500 leading-relaxed">{t('hero.cards.campus_sub')}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;