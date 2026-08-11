import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Header = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, setLanguage, language } = useLanguage();

  // Brand colors — Modern Palette
  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const handleNavigation = (item) => {
    if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        window.location.href = '/' + item.href;
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (item.type === 'external') {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
    setIsMenuOpen(false);
  };

  const handleDropdownEnter = (itemName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const menuItems = [
    { name: t('header.menu.home'), href: '/', icon: 'fas fa-home', type: 'link' },
    {
      name: t('header.menu.about.main'),
      href: '#about',
      icon: 'fas fa-info-circle',
      type: 'scroll',
      submenu: [
        { name: t('header.menu.about.yayasan'), href: '/yayasan', type: 'link' },
        { name: t('header.menu.about.dakwah'), href: '/dakwah-sosial', type: 'link' },
        { name: t('header.menu.about.upz'), href: '/upz', type: 'link' },
        { name: t('header.menu.about.profil'), href: '#about', type: 'scroll' },
        { name: t('header.menu.about.fasilitas_banin'), href: '/fasilitas-banin', type: 'link' },
        { name: t('header.menu.about.fasilitas_banat'), href: '/fasilitas-banat', type: 'link' }
      ]
    },
    {
      name: t('header.menu.program.main'),
      href: '#programs',
      icon: 'fas fa-graduation-cap',
      type: 'scroll',
      submenu: [
        { name: t('header.menu.program.sdtq'), href: '/sdtq', type: 'link' },
        { name: t('header.menu.program.smp'), href: '/smp', type: 'link' },
        { name: t('header.menu.program.sma'), href: '/sma', type: 'link' },
        { name: t('header.menu.program.overseas'), href: '/program-overseas', type: 'link' },
        { name: t('header.menu.program.lainnya'), href: '#programs', type: 'scroll' }
      ]
    },
    {
      name: "Islam",
      href: '/quran',
      icon: 'fas fa-book-quran',
      type: 'link',
      submenu: [
        { name: t('header.menu.quran'), href: '/quran', type: 'link' },
        { name: t('header.menu.hadith'), href: '/hadith', type: 'link' },
        { name: t('header.menu.kutub'), href: '/kutub', type: 'link' },
        { name: t('header.menu.wafi_ai'), href: 'https://chat.al-wafi.sch.id', type: 'external' }
      ]
    },
    { name: t('header.menu.alumni'), href: '#alumni', icon: 'fas fa-users', type: 'scroll' },
    { name: t('header.menu.bekal'), href: '/biro-bekal', icon: 'fas fa-briefcase', type: 'link' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
      if (!event.target.closest('.lang-dropdown-wrapper')) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
    };
  }, [dropdownTimeout]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full top-0 z-[100] flex flex-col font-sans">

      {/* ============ TOP BAR — Futuristic Glass ============ */}
      <div className="hidden lg:block relative z-[60] border-b border-white/10"
           style={{
             background: `linear-gradient(90deg, ${primary} 0%, ${secondary} 100%)`,
             boxShadow: '0 2px 20px rgba(0, 72, 160, 0.15)'
           }}>
        {/* Subtle animated grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 text-[10px] tracking-[0.25em] uppercase font-medium text-white/80">

            {/* Left: Info */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center group cursor-default">
                <div className="w-6 h-6 flex items-center justify-center me-2 rounded-sm"
                     style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <i className="fas fa-map-marker-alt text-white/70 group-hover:text-[#FBBF24] transition-colors duration-300 text-[10px]"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  {t('header.topbar.location')}
                </span>
              </div>
              <div className="flex items-center group cursor-default">
                <div className="w-6 h-6 flex items-center justify-center me-2 rounded-sm"
                     style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <i className="fas fa-envelope text-white/70 group-hover:text-[#FBBF24] transition-colors duration-300 text-[10px]"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  info@al-wafi.sch.id
                </span>
              </div>
            </div>

            {/* Right: Language & Socials */}
            <div className="flex items-center space-x-6 relative">
              {/* Language Switcher */}
              <div className="relative lang-dropdown-wrapper">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangOpen(!isLangOpen);
                  }}
                  className="flex items-center space-x-2 text-white/80 hover:text-[#FBBF24] transition-colors duration-300 cursor-pointer py-1 px-3 rounded-sm hover:bg-white/5"
                >
                  <i className="fas fa-globe text-[10px]"></i>
                  <span className="font-bold">{language === 'id' ? 'ID' : language === 'en' ? 'EN' : 'AR'}</span>
                  <i className={`fas fa-chevron-down text-[8px] transition-transform duration-500 ${isLangOpen ? 'rotate-180' : ''}`}></i>
                </button>

                <div className={`absolute top-full end-0 mt-3 w-32 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl transition-all duration-300 origin-top-right ${isLangOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  {[
                    { code: 'id', label: 'Bahasa' },
                    { code: 'en', label: 'English' },
                    { code: 'ar', label: 'العربية' }
                  ].map((lang, idx) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                      className={`w-full text-start px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-between group ${idx > 0 ? 'border-t border-gray-50' : ''} ${language === lang.code ? 'text-[#0048A0] font-semibold' : 'text-gray-500 hover:bg-[#0048A0]/5 hover:text-[#0048A0]'}`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && <i className="fas fa-check text-[9px] text-[#FBBF24]"></i>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-4 w-px bg-white/20"></div>

              {/* Socials */}
              <div className="flex items-center space-x-3">
                <span className="text-white/50 me-1 hidden xl:inline-block">{t('header.topbar.follow')}</span>
                {[
                  { icon: 'fab fa-instagram', href: `https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}` },
                  { icon: 'fab fa-youtube', href: 'https://youtube.com/@pesantrenwibs' },
                  { icon: 'fab fa-facebook-f', href: `https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}` }
                ].map((social, i) => (
                  <a key={i}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-7 h-7 flex items-center justify-center rounded-sm text-white/70 hover:text-white transition-all duration-300 hover:bg-white/10 hover:scale-110">
                    <i className={`${social.icon} text-[11px]`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ MAIN HEADER — Minimalist Glass ============ */}
      <div
        className={`relative z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,72,160,0.08)] py-2.5'
            : 'bg-white py-3 md:py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50" onClick={() => setIsMenuOpen(false)}>
              <div className="relative">
                {data?.images?.logo ? (
                  <img
                    src={data.images.logo}
                    alt="Al Wafi Logo"
                    className="w-9 h-9 md:w-11 md:h-11 object-contain transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-9 h-9 md:w-11 md:h-11 text-white flex items-center justify-center rounded-md shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                      boxShadow: `0 6px 20px ${primary}40`
                    }}
                  >
                    <i className="fas fa-mosque text-sm md:text-base"></i>
                  </div>
                )}
                {/* Accent dot */}
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full animate-pulse"
                     style={{ background: accent }}></div>
              </div>

              <div className="ms-3 md:ms-4 flex flex-col justify-center">
                <h1 className="text-[13px] md:text-[15px] font-bold tracking-[0.15em] uppercase leading-tight"
                    style={{ color: primary }}>
                  {t('header.brand.title')}
                </h1>
                <p className="text-[7px] md:text-[8px] font-medium tracking-[0.3em] uppercase mt-0.5"
                   style={{ color: secondary }}>
                  {t('header.brand.subtitle')}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group dropdown-container h-full flex items-center"
                  onMouseEnter={() => item.submenu && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.submenu && handleDropdownLeave()}
                >
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className="relative text-[11px] font-semibold text-gray-700 uppercase tracking-[0.12em] hover:text-[#0048A0] transition-colors duration-300 px-4 py-2.5 flex items-center gap-1.5 group"
                    >
                      <span className="relative">
                        {item.name}
                        {/* Animated underline */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                              style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}></span>
                      </span>
                      {item.submenu && <i className="fas fa-chevron-down text-[7px] opacity-60 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#FBBF24]"></i>}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="relative text-[11px] font-semibold text-gray-700 uppercase tracking-[0.12em] hover:text-[#0048A0] transition-colors duration-300 px-4 py-2.5 flex items-center gap-1.5"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                              style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}></span>
                      </span>
                      {item.submenu && <i className="fas fa-chevron-down text-[7px] opacity-60 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#FBBF24]"></i>}
                    </button>
                  )}

                  {/* Dropdown Menu Desktop */}
                  {item.submenu && (
                    <div
                      className={`absolute top-[100%] start-0 min-w-[260px] bg-white/95 backdrop-blur-xl border border-gray-100/80 shadow-[0_20px_50px_-12px_rgba(0,72,160,0.25)] transition-all duration-300 origin-top ${
                        activeDropdown === item.name
                          ? 'opacity-100 translate-y-2 visible pointer-events-auto'
                          : 'opacity-0 translate-y-4 invisible pointer-events-none'
                      }`}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Top accent line */}
                      <div className="h-[2px] w-full"
                           style={{ background: `linear-gradient(90deg, ${primary}, ${accent}, transparent)` }}></div>
                      <div className="py-2">
                        {item.submenu.map((subItem, idx) => (
                          subItem.type === 'link' ? (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="group flex items-center justify-between px-5 py-3 text-[11px] font-medium text-gray-600 uppercase tracking-[0.08em] hover:text-[#0048A0] transition-all duration-300 border-l-2 border-transparent hover:border-[#FBBF24] hover:bg-[#0048A0]/[0.03] hover:ps-7"
                              style={{ animationDelay: `${idx * 30}ms` }}
                            >
                              <span className="flex items-center">
                                <span className="w-1 h-1 rounded-full bg-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity me-2"></span>
                                {subItem.name}
                              </span>
                              <i className="fas fa-arrow-right text-[8px] opacity-0 group-hover:opacity-60 group-hover:translate-x-1 transition-all duration-300"></i>
                            </Link>
                          ) : (
                            <button
                              key={subItem.name}
                              onClick={() => handleNavigation(subItem)}
                              className="group flex items-center justify-between w-full text-start px-5 py-3 text-[11px] font-medium text-gray-600 uppercase tracking-[0.08em] hover:text-[#0048A0] transition-all duration-300 border-l-2 border-transparent hover:border-[#FBBF24] hover:bg-[#0048A0]/[0.03] hover:ps-7"
                            >
                              <span className="flex items-center">
                                <span className="w-1 h-1 rounded-full bg-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity me-2"></span>
                                {subItem.name}
                              </span>
                              <i className="fas fa-external-link-alt text-[8px] opacity-0 group-hover:opacity-60 transition-all duration-300"></i>
                            </button>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Hamburger Mobile */}
            <div className="flex items-center space-x-3 relative z-50">
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 group relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                  boxShadow: `0 6px 20px ${primary}30`,
                  borderRadius: '4px'
                }}
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}></span>
                <span className="relative flex items-center">
                  {t('header.cta')}
                  <i className="fas fa-arrow-right ms-2.5 text-[10px] group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </a>

              {/* Hamburger Menu — Futuristic */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none rounded-md transition-all duration-300 hover:bg-[#0048A0]/5"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                <div className="relative w-6 h-5 flex flex-col justify-center">
                  <span className={`absolute left-0 h-[2px] transition-all duration-400 ease-in-out ${isMenuOpen ? 'w-6 top-1/2 rotate-45' : 'w-6 top-0'}`}
                        style={{ background: primary }}></span>
                  <span className={`absolute left-0 top-1/2 h-[2px] -translate-y-1/2 transition-all duration-400 ease-in-out ${isMenuOpen ? 'w-0 opacity-0' : 'w-4'}`}
                        style={{ background: accent }}></span>
                  <span className={`absolute left-0 h-[2px] transition-all duration-400 ease-in-out ${isMenuOpen ? 'w-6 top-1/2 -rotate-45' : 'w-3 bottom-0'}`}
                        style={{ background: primary }}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============ MOBILE NAVIGATION — Futuristic Overlay ============ */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out flex flex-col ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Animated backdrop */}
        <div className="absolute inset-0"
             style={{
               background: `linear-gradient(160deg, ${primary} 0%, ${secondary} 60%, #0f172a 100%)`
             }}>
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(30, 64, 175, 0.3) 0%, transparent 50%)'
               }}></div>
        </div>

        {/* Content wrapper */}
        <div className="relative flex-1 bg-white pt-[80px] md:pt-[92px] flex flex-col transition-transform duration-500"
             style={{ transform: isMenuOpen ? 'translateY(0)' : 'translateY(-8px)' }}>

          {/* Scrollable Menu Items */}
          <div className="flex-1 overflow-y-auto px-5 py-6 pb-32">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 dropdown-container">
                  <div
                    className="flex justify-between items-center py-3.5 cursor-pointer group"
                    onClick={() => {
                      if (item.submenu) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                  >
                    {item.submenu ? (
                      <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 transition-colors text-start flex-1 flex items-center gap-2 group-hover:text-[#0048A0]">
                        <span className="w-1 h-1 rounded-full" style={{ background: accent }}></span>
                        {item.name}
                      </div>
                    ) : item.type === 'link' ? (
                      <Link
                        to={item.href}
                        className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 transition-colors flex-1 flex items-center gap-2 hover:text-[#0048A0]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="w-1 h-1 rounded-full" style={{ background: accent }}></span>
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavigation(item);
                          setIsMenuOpen(false);
                        }}
                        className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 transition-colors text-start flex-1 flex items-center gap-2 hover:text-[#0048A0]"
                      >
                        <span className="w-1 h-1 rounded-full" style={{ background: accent }}></span>
                        {item.name}
                      </button>
                    )}

                    {item.submenu && (
                      <div className="w-8 h-8 flex items-center justify-end transition-all duration-300 group-hover:text-[#0048A0]">
                        <i className={`fas fa-chevron-down text-[9px] transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-[#FBBF24]' : ''}`}></i>
                      </div>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div
                      className={`overflow-hidden transition-all duration-400 ease-in-out ${
                        activeDropdown === item.name ? 'max-h-[500px] opacity-100 mb-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-col space-y-1 ps-5 border-l-2 py-1"
                           style={{ borderColor: `${primary}20` }}>
                        {item.submenu.map((subItem) => (
                          subItem.type === 'link' ? (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center gap-2 py-2 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 hover:text-[#0048A0] transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="w-0.5 h-3 rounded-full bg-[#FBBF24] opacity-60"></span>
                              {subItem.name}
                            </Link>
                          ) : (
                            <button
                              key={subItem.name}
                              onClick={() => {
                                handleNavigation(subItem);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-center gap-2 py-2 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 hover:text-[#0048A0] transition-colors text-start"
                            >
                              <span className="w-0.5 h-3 rounded-full bg-[#FBBF24] opacity-60"></span>
                              {subItem.name}
                            </button>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Fixed Bottom CTA & Utilities in Mobile Menu */}
          <div className="absolute bottom-0 start-0 w-full bg-white border-t border-gray-100 p-5 flex flex-col gap-4">
            {/* Mobile Language Switcher */}
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">Pilih Bahasa</span>
              <div className="flex space-x-1.5">
                {[
                  { code: 'id', label: 'ID' },
                  { code: 'en', label: 'EN' },
                  { code: 'ar', label: 'AR' }
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-10 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-sm ${
                      language === lang.code
                        ? 'text-white shadow-md'
                        : 'bg-white border border-gray-200 text-gray-500 hover:border-[#0048A0]/30'
                    }`}
                    style={language === lang.code ? {
                      background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                      boxShadow: `0 4px 12px ${primary}30`
                    } : {}}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Socials & CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {[
                  { icon: 'fab fa-instagram', href: `https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}` },
                  { icon: 'fab fa-youtube', href: 'https://youtube.com/@pesantrenwibs' },
                  { icon: 'fab fa-facebook-f', href: `https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}` }
                ].map((social, i) => (
                  <a key={i}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-9 h-9 flex items-center justify-center rounded-sm text-gray-500 hover:text-white transition-all duration-300 border border-gray-200 hover:border-transparent hover:scale-105"
                     style={{ background: 'white' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.background = `linear-gradient(135deg, ${primary}, ${secondary})`;
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.background = 'white';
                     }}
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>

              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                  boxShadow: `0 6px 20px ${primary}30`,
                  borderRadius: '4px'
                }}
              >
                <span className="relative flex items-center">
                  {t('header.cta')}
                  <i className="fas fa-arrow-right ms-2 text-[9px] group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;