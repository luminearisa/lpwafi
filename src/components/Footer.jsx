import React from 'react';
import VisitorCounter from './VisitorCounter';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden font-sans border-t border-white/5">

      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* --- BRAND INFO (Takes up 5 columns on large screens) --- */}
          <div className="lg:col-span-5 pe-0 lg:pe-12">
            <div className="flex items-center mb-8">
              {/* Sharp Edge Logo Container */}
              <div className="bg-white p-2.5 w-14 h-14 flex items-center justify-center border border-gray-800">
                <img
                  src={data?.images?.logo || "https://al-wafi.sch.id/src/images/logo/wafi-logo-data=normal.svg"}
                  alt="Al Wafi Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ms-5 flex flex-col justify-center">
                <h3 className="text-xl font-bold tracking-[0.15em] uppercase text-white leading-tight">
                  Al Wafi
                </h3>
                <p className="text-[9px] text-[#29A6B6] uppercase tracking-[0.2em] font-bold mt-1">
                  Islamic Boarding School
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-light mb-10">
              {data?.school?.type || "Pesantren Sunnah"} dengan konsep holistik, harmoni, dan exemplary.
              Mendampingi santri berdasarkan nilai Al Quran dan Sunnah untuk bersaing di dunia internasional.
            </p>

            {/* Social Media - Monochromatic to Color on Hover */}
            <div className="flex space-x-4">
              {[
                {
                  icon: 'fab fa-instagram',
                  url: `https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`,
                  color: '#E4405F'
                },
                {
                  icon: 'fab fa-youtube',
                  url: 'https://youtube.com/@pesantrenwibs',
                  color: '#FF0000'
                },
                {
                  icon: 'fab fa-facebook-f',
                  url: `https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}`,
                  color: '#1877F2'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.borderColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* --- QUICK LINKS (Takes up 3 columns) --- */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 border-b border-white/10 pb-4 inline-block">
              Tautan Cepat
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Program', href: '#programs' },
                { label: 'Alumni', href: '#alumni' },
                { label: 'Kontak', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-sm text-gray-400 hover:text-[#29A6B6] transition-colors duration-300 font-light"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 ease-out text-[#29A6B6]">
                      <i className="fas fa-chevron-right text-[8px]"></i>
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={data?.contact?.registration?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#349B48] hover:text-white transition-colors duration-300"
                >
                  Pendaftaran <i className="fas fa-arrow-right ms-2 text-[10px]"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* --- CONTACT INFO (Takes up 4 columns) --- */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 border-b border-white/10 pb-4 inline-block">
              Kontak
            </h4>
            <div className="space-y-6">

              {/* Kampus A */}
              <div className="flex items-start group">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[#349B48] transition-colors duration-300 me-4">
                  <i className="fas fa-map-marker-alt text-[#349B48] text-sm"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Kampus A</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {data?.contact?.campuses?.[0]?.address || "Alamat Kampus A"}
                  </p>
                </div>
              </div>

              {/* Kampus B */}
              <div className="flex items-start group">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-[#349B48] transition-colors duration-300 me-4">
                  <i className="fas fa-map-marker-alt text-[#349B48] text-sm"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Kampus B</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {data?.contact?.campuses?.[1]?.address || "Alamat Kampus B"}
                  </p>
                </div>
              </div>

              {/* Email & Web */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex items-center group">
                  <i className="fas fa-envelope text-[#29A6B6] w-6 text-sm"></i>
                  <span className="text-gray-400 text-sm font-light group-hover:text-white transition-colors duration-300">
                    info@al-wafi.sch.id
                  </span>
                </div>
                <div className="flex items-center group">
                  <i className="fas fa-globe text-[#29A6B6] w-6 text-sm"></i>
                  <span className="text-gray-400 text-sm font-light group-hover:text-white transition-colors duration-300">
                    al-wafi.sch.id
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-500 text-[11px] font-light tracking-wide">
                © {currentYear} <span className="text-white font-medium">Al Wafi Islamic Boarding School</span>. All rights reserved.
              </p>
              <VisitorCounter />
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-white text-[11px] uppercase tracking-widest transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-[11px] uppercase tracking-widest transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;