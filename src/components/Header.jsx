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

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

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
    // Tutup menu mobile setelah navigasi
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
        { name: t('header.menu.about.profil'), href: '#about', type: 'scroll' }
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

  // Efek Scroll & Klik di luar area
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

  // Efek Lock Body Scroll saat Mobile Menu Terbuka
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

      {/* --- TOP BAR: Deep Dark, Minimalist --- */}
      {/* Diubah menjadi z-[60] agar overlay dropdown aman di atas navigasi utama */}
      <div className="hidden lg:block bg-[#0a0a0a] text-[#a1a1aa] relative z-[60] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-1.5 text-[9px] tracking-widest uppercase font-medium">

            {/* Left: Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center group cursor-default">
                <i className="fas fa-map-marker-alt me-2 text-white/40 group-hover:text-[#29A6B6] transition-colors duration-300"></i>
                <span className="group-hover:text-white transition-colors duration-300">
                  {t('header.topbar.location')}
                </span>
              </div>
              <div className="flex items-center group cursor-default">
                <i className="fas fa-envelope me-2 text-white/40 group-hover:text-[#29A6B6] transition-colors duration-300"></i>
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
                  className="flex items-center space-x-2 text-[#a1a1aa] hover:text-[#29A6B6] transition-colors duration-300 cursor-pointer py-1"
                >
                  <span>{language === 'id' ? 'ID' : language === 'en' ? 'EN' : 'AR'}</span>
                  <i className={`fas fa-chevron-down text-[8px] transition-transform duration-500 ${isLangOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {/* Dropdown Bahasa */}
                <div className={`absolute top-full end-0 mt-2 w-24 bg-white border border-gray-100 shadow-2xl transition-all duration-300 origin-top-right ${isLangOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <button
                    onClick={() => { setLanguage('id'); setIsLangOpen(false); }}
                    className={`w-full text-start px-4 py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 ${language === 'id' ? 'bg-[#f0f9fa] text-[#29A6B6] font-semibold' : 'text-gray-500 hover:bg-[#f0f9fa] hover:text-[#29A6B6]'}`}
                  >
                    Bahasa
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                    className={`w-full text-start px-4 py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 border-t border-gray-50 ${language === 'en' ? 'bg-[#f0f9fa] text-[#29A6B6] font-semibold' : 'text-gray-500 hover:bg-[#f0f9fa] hover:text-[#29A6B6]'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLanguage('ar'); setIsLangOpen(false); }}
                    className={`w-full text-start px-4 py-3 text-[10px] tracking-widest uppercase transition-colors duration-300 border-t border-gray-50 ${language === 'ar' ? 'bg-[#f0f9fa] text-[#29A6B6] font-semibold' : 'text-gray-500 hover:bg-[#f0f9fa] hover:text-[#29A6B6]'}`}
                  >
                    العربية
                  </button>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center space-x-4">
                <span className="text-white/40 me-1 hidden lg:inline-block">{t('header.topbar.follow')}</span>
                <a href={`https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#29A6B6] transition-colors duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com/@pesantrenwibs" target="_blank" rel="noopener noreferrer" className="hover:text-[#29A6B6] transition-colors duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href={`https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#29A6B6] transition-colors duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      {/* Diubah menjadi z-50 agar tombol hamburger selalu ada di atas overlay menu mobile yang z-40 */}
      <div
        className={`relative z-50 transition-all duration-500 bg-white ${isScrolled || isMenuOpen
          ? 'shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3'
          : 'shadow-none py-4 md:py-5 border-b border-gray-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50" onClick={() => setIsMenuOpen(false)}>
              {data?.images?.logo ? (
                <img
                  src={data.images.logo}
                  alt="Al Wafi Logo"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#29A6B6] text-white flex items-center justify-center rounded-sm">
                  <i className="fas fa-mosque"></i>
                </div>
              )}
              <div className="ms-3 md:ms-4 flex flex-col justify-center">
                <h1 className="text-base md:text-lg font-bold text-[#29A6B6] tracking-widest uppercase leading-tight">
                  {t('header.brand.title')}
                </h1>
                <p className="text-[7px] md:text-[8px] text-[#349B48] font-medium tracking-[0.2em] uppercase mt-0.5">
                  {t('header.brand.subtitle')}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
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
                      className="text-[11px] font-semibold text-gray-600 uppercase tracking-[0.15em] hover:text-[#29A6B6] transition-colors duration-300 py-4 flex items-center gap-1.5"
                    >
                      <span>{item.name}</span>
                      {item.submenu && <i className="fas fa-chevron-down text-[8px] opacity-50"></i>}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="text-[11px] font-semibold text-gray-600 uppercase tracking-[0.15em] hover:text-[#29A6B6] transition-colors duration-300 py-4 flex items-center gap-1.5"
                    >
                      <span>{item.name}</span>
                      {item.submenu && <i className="fas fa-chevron-down text-[8px] opacity-50"></i>}
                    </button>
                  )}

                  {/* Dropdown Menu Desktop */}
                  {item.submenu && (
                    <div
                      className={`absolute top-[100%] start-0 min-w-[240px] bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 origin-top ${activeDropdown === item.name
                        ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                        : 'opacity-0 translate-y-4 invisible pointer-events-none'
                        }`}
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          subItem.type === 'link' ? (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-6 py-3.5 text-[11px] font-medium text-gray-500 uppercase tracking-[0.1em] hover:text-[#29A6B6] hover:bg-[#f0f9fa] hover:ps-8 transition-all duration-300"
                            >
                              {subItem.name}
                            </Link>
                          ) : (
                            <button
                              key={subItem.name}
                              onClick={() => handleNavigation(subItem)}
                              className="block w-full text-start px-6 py-3.5 text-[11px] font-medium text-gray-500 uppercase tracking-[0.1em] hover:text-[#29A6B6] hover:bg-[#f0f9fa] hover:ps-8 transition-all duration-300"
                            >
                              {subItem.name}
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
            <div className="flex items-center space-x-5 relative z-50">
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center justify-center px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-[#29A6B6] border border-[#29A6B6] hover:bg-transparent hover:text-[#29A6B6] transition-all duration-500"
              >
                <span>{t('header.cta')}</span>
                <i className="fas fa-arrow-right ms-3 text-[10px]"></i>
              </a>

              {/* Hamburger Menu - Brand Colors */}
              <button
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                <span className={`block h-[2px] bg-[#29A6B6] transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-6'}`}></span>
                <span className={`block h-[2px] bg-[#29A6B6] transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-5'}`}></span>
                <span className={`block h-[2px] bg-[#29A6B6] transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-4'}`}></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION (FULL SCREEN OVERLAY) --- */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out flex flex-col pt-[72px] md:pt-[84px] ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
      >
        {/* Scrollable Menu Items */}
        <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 dropdown-container">
                <div 
                  className="flex justify-between items-center py-4 cursor-pointer"
                  onClick={() => {
                    if (item.submenu) {
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    }
                  }}
                >
                  {item.submenu ? (
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-[#29A6B6] transition-colors text-start flex-1">
                      {item.name}
                    </div>
                  ) : item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className="text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-[#29A6B6] transition-colors flex-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        handleNavigation(item);
                        setIsMenuOpen(false);
                      }}
                      className="text-xs font-bold tracking-widest uppercase text-gray-900 hover:text-[#29A6B6] transition-colors text-start flex-1"
                    >
                      {item.name}
                    </button>
                  )}

                  {item.submenu && (
                    <div className="w-10 h-10 flex items-center justify-end text-[#29A6B6]">
                      <i className={`fas fa-chevron-down transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`}></i>
                    </div>
                  )}
                </div>

                {/* Mobile Submenu (Accordion) */}
                {item.submenu && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.name ? 'max-h-[400px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="flex flex-col space-y-4 ps-4 border-l border-[#29A6B6]/30 py-2">
                      {item.submenu.map((subItem) => (
                        subItem.type === 'link' ? (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="text-[10px] font-bold tracking-widest uppercase text-gray-500 hover:text-[#29A6B6]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ) : (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              handleNavigation(subItem);
                              setIsMenuOpen(false);
                            }}
                            className="text-start text-[10px] font-bold tracking-widest uppercase text-gray-500 hover:text-[#29A6B6]"
                          >
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
        <div className="absolute bottom-0 start-0 w-full bg-gray-50 border-t border-gray-200 p-6 flex flex-col gap-5">
          {/* Mobile Language Switcher */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Pilih Bahasa</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold transition-colors ${language === 'id' ? 'bg-[#29A6B6] text-white' : 'bg-white border border-gray-200 text-gray-500'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold transition-colors ${language === 'en' ? 'bg-[#29A6B6] text-white' : 'bg-white border border-gray-200 text-gray-500'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold transition-colors ${language === 'ar' ? 'bg-[#29A6B6] text-white' : 'bg-white border border-gray-200 text-gray-500'}`}
              >
                AR
              </button>
            </div>
          </div>

          {/* Socials & CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href={`https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`} className="text-gray-400 hover:text-[#29A6B6] text-lg"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/@pesantrenwibs" className="text-gray-400 hover:text-[#29A6B6] text-lg"><i className="fab fa-youtube"></i></a>
              <a href={`https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}`} className="text-gray-400 hover:text-[#29A6B6] text-lg"><i className="fab fa-facebook-f"></i></a>
            </div>

            <a
              href={data?.contact?.registration?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-[#29A6B6]"
            >
              <span>{t('header.cta')}</span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;