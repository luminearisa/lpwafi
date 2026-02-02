import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Header = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  // Untuk menu bahasa
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, setLanguage, language } = useLanguage();

  // Get color scheme from data or use defaults
  const colors = data?.colorScheme || {
    primary: { blue: "#1e3a8a", purple: "#7c3aed", indigo: "#4338ca" },
    secondary: { emerald: "#059669", cyan: "#0891b2", teal: "#0d9488" },
    accent: { lightBlue: "#3b82f6", lightPurple: "#9333ea", lightIndigo: "#6366f1" },
    gold: { primary: "#f59e0b", light: "#fbbf24", dark: "#d97706" }
  };

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
    }
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

  const handleDropdownMenuEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMenuLeave = () => {
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: t('header.menu.home'), href: '/', icon: 'fas fa-home', type: 'link' },
    {
      name: t('header.menu.about.main'),
      href: '#about',
      icon: 'fas fa-info-circle',
      submenu: [
        { name: t('header.menu.about.yayasan'), href: '/yayasan', icon: 'fas fa-building', type: 'link' },
        { name: t('header.menu.about.dakwah'), href: '/dakwah-sosial', icon: 'fas fa-mosque', type: 'link' },
        { name: t('header.menu.about.upz'), href: '/upz', icon: 'fas fa-hand-holding-heart', type: 'link' },
        { name: t('header.menu.about.profil'), href: '#about', icon: 'fas fa-school', type: 'scroll' }
      ]
    },
    {
      name: t('header.menu.program.main'),
      href: '#programs',
      icon: 'fas fa-graduation-cap',
      submenu: [
        { name: t('header.menu.program.sdtq'), href: '/sdtq', icon: 'fas fa-book-open', type: 'link' },
        { name: t('header.menu.program.smp'), href: '/smp', icon: 'fas fa-school', type: 'link' },
        { name: t('header.menu.program.sma'), href: '/sma', icon: 'fas fa-graduation-cap', type: 'link' },
        { name: t('header.menu.program.overseas'), href: '/program-overseas', icon: 'fas fa-globe', type: 'link' },
        { name: t('header.menu.program.lainnya'), href: '#programs', icon: 'fas fa-list', type: 'scroll' }
      ]
    },
    { name: t('header.menu.alumni'), href: '#alumni', icon: 'fas fa-users', type: 'scroll' },
    { name: t('header.menu.bekal'), href: '/biro-bekal', icon: 'fas fa-briefcase', type: 'link' },
    { name: t('header.menu.contact'), href: '#contact', icon: 'fas fa-envelope', type: 'scroll' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
      // nutup dropdown kalo klik scrim
      if (!event.target.closest('.lang-dropdown-wrapper')) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-200/30'
        : 'bg-white/90 backdrop-blur-lg shadow-xl'
      }`}>
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="headerPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="url(#headerGradient)" strokeWidth="0.3">
                <g transform="translate(30, 30)">
                  <path d="M0,-15 L8,-8 L15,0 L8,8 L0,15 L-8,8 L-15,0 L-8,-8 Z" fill="rgba(59,130,246,0.05)" />
                  <circle cx="0" cy="0" r="8" strokeWidth="0.2" />
                  <circle cx="0" cy="0" r="3" fill="rgba(147,51,234,0.1)" />
                </g>
                <circle cx="10" cy="10" r="1" fill="rgba(59,130,246,0.15)" />
                <circle cx="50" cy="10" r="1" fill="rgba(147,51,234,0.15)" />
                <circle cx="10" cy="50" r="1" fill="rgba(99,102,241,0.15)" />
                <circle cx="50" cy="50" r="1" fill="rgba(59,130,246,0.15)" />
              </g>
              <defs>
                <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.accent.lightBlue} />
                  <stop offset="50%" stopColor={colors.accent.lightPurple} />
                  <stop offset="100%" stopColor={colors.accent.lightIndigo} />
                </linearGradient>
              </defs>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#headerPattern)" />
        </svg>
      </div>

      {/* --- TOP BAR - Enhanced --- */}
      <div
        className="text-white relative z-50"
        style={{
          background: data?.colorScheme?.gradient?.header ||
            `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <defs>
                <pattern id="topPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                  <circle cx="5" cy="5" r="0.5" fill="white" opacity="0.2" />
                  <circle cx="15" cy="15" r="0.5" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topPattern)" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-emerald-400/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-emerald-400/30 transition-colors">
                  <i className="fas fa-map-marker-alt text-emerald-300 text-xs"></i>
                </div>
                <span className="text-blue-100 group-hover:text-white transition-colors text-xs">
                  {/* === bagian top bar lokasi === */}
                  {t('header.topbar.location')}
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-purple-400/20 rounded-full flex items-center justify-center mr-2 group-hover:bg-purple-400/30 transition-colors">
                  <i className="fas fa-envelope text-purple-300 text-xs"></i>
                </div>
                <span className="text-purple-100 group-hover:text-white transition-colors text-xs">info@al-wafi.sch.id</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-1 md:mt-0">
              {/* === dropdown bahasa === */}
              <div className="relative lang-dropdown-wrapper">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangOpen(!isLangOpen);
                  }}
                  className="flex items-center space-x-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition-all text-xs font-bold border border-white/20 cursor-pointer"
                >
                  <span>{language.toUpperCase()}</span>
                  <i className={`fas fa-chevron-down text-[10px] ml-1 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 w-20 bg-white rounded shadow-xl border border-gray-200 overflow-hidden z-[60]">
                    <button
                      onClick={() => { setLanguage('id'); setIsLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-blue-50 transition-colors ${language === 'id' ? 'font-bold text-blue-600' : 'text-gray-600'}`}
                    >
                      ID
                    </button>
                    <button
                      onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-blue-50 transition-colors ${language === 'en' ? 'font-bold text-blue-600' : 'text-gray-600'}`}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
              {/* === end dropdown bahasa === */}

              <div className="flex items-center space-x-2">
                <span className="text-blue-200 text-xs font-medium mr-1">
                  {/* === text: ikuti kami === */}
                  {t('header.topbar.follow')}
                </span>
                <a
                  href={`https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-emerald-300 hover:text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-instagram text-xs"></i>
                </a>
                <a
                  href="https://youtube.com/@pesantrenwibs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-red-300 hover:text-white hover:bg-red-500 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-youtube text-xs"></i>
                </a>
                <a
                  href={`https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <i className="fab fa-facebook text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Completely Redesigned */}
      <div className="relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Enhanced */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                  }}
                ></div>
                <div
                  className="relative bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  style={{ borderColor: `${colors.accent.lightBlue}30` }}
                >
                  {data?.images?.logo ? (
                    <img
                      src={data.images.logo}
                      alt="Al Wafi Logo"
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <i className="fas fa-mosque text-2xl text-blue-600 hidden"></i>
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="15" fill="none" stroke="url(#logoGradient)" strokeWidth="0.5" />
                      <circle cx="25" cy="25" r="8" fill="none" stroke="url(#logoGradient)" strokeWidth="0.3" />
                      <circle cx="25" cy="25" r="3" fill="url(#logoGradient)" opacity="0.3" />
                      <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={colors.accent.lightBlue} />
                          <stop offset="100%" stopColor={colors.accent.lightPurple} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <h1
                  className="text-2xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
                  }}
                >
                  {/* === bagian logo title === */}
                  {t('header.brand.title')}
                </h1>
                <p
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: colors.accent.lightBlue }}
                >
                  {/* === bagian logo subtitle === */}
                  {t('header.brand.subtitle')}
                </p>
                <div
                  className="w-12 h-0.5 mt-1 group-hover:w-20 transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 50%, ${colors.accent.lightIndigo} 100%)`
                  }}
                ></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group dropdown-container"
                  onMouseEnter={() => item.submenu && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.submenu && handleDropdownLeave()}
                >
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className="group relative px-4 py-2 text-gray-700 font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg flex items-center space-x-2"
                      style={{
                        '--hover-color': colors.accent.lightBlue,
                        '--hover-bg': `${colors.accent.lightBlue}10`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = colors.accent.lightBlue;
                        e.target.style.backgroundColor = `${colors.accent.lightBlue}10`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#374151';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      <i className={`${item.icon} text-xs group-hover:scale-110 transition-transform`}></i>
                      <span>{item.name}</span>
                      {item.submenu && (
                        <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                      )}
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-6 transition-all duration-300"
                        style={{
                          background: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 50%, ${colors.accent.lightIndigo} 100%)`
                        }}
                      ></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                        <svg className="w-full h-full" viewBox="0 0 40 20">
                          <circle cx="20" cy="10" r="1" fill="currentColor" />
                          <circle cx="15" cy="8" r="0.5" fill="currentColor" />
                          <circle cx="25" cy="12" r="0.5" fill="currentColor" />
                        </svg>
                      </div>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="group relative px-4 py-2 text-gray-700 font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg flex items-center space-x-2"
                      style={{
                        '--hover-color': colors.accent.lightBlue,
                        '--hover-bg': `${colors.accent.lightBlue}10`
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = colors.accent.lightBlue;
                        e.target.style.backgroundColor = `${colors.accent.lightBlue}10`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#374151';
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      <i className={`${item.icon} text-xs group-hover:scale-110 transition-transform`}></i>
                      <span>{item.name}</span>
                      {item.submenu && (
                        <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                      )}
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-6 transition-all duration-300"
                        style={{
                          background: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 50%, ${colors.accent.lightIndigo} 100%)`
                        }}
                      ></div>
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl border border-white/20 backdrop-blur-sm z-50 overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)`
                      }}
                      onMouseEnter={handleDropdownMenuEnter}
                      onMouseLeave={handleDropdownMenuLeave}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        subItem.type === 'link' ? (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 border-b border-gray-100 last:border-b-0"
                            onMouseEnter={(e) => {
                              e.target.style.background = `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`;
                              e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'transparent';
                              e.target.style.color = '#374151';
                            }}
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{
                                background: `linear-gradient(135deg, ${colors.accent.lightBlue}20 0%, ${colors.accent.lightPurple}20 100%)`
                              }}
                            >
                              <i
                                className={`${subItem.icon} text-sm`}
                                style={{ color: colors.accent.lightBlue }}
                              ></i>
                            </div>
                            <span className="font-medium">{subItem.name}</span>
                          </Link>
                        ) : (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem)}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white transition-all duration-300 border-b border-gray-100 last:border-b-0 w-full text-left"
                            onMouseEnter={(e) => {
                              e.target.style.background = `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`;
                              e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'transparent';
                              e.target.style.color = '#374151';
                            }}
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{
                                background: `linear-gradient(135deg, ${colors.accent.lightBlue}20 0%, ${colors.accent.lightPurple}20 100%)`
                              }}
                            >
                              <i
                                className={`${subItem.icon} text-sm`}
                                style={{ color: colors.accent.lightBlue }}
                              ></i>
                            </div>
                            <span className="font-medium">{subItem.name}</span>
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex group relative text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 items-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'} 0%, ${colors.gold?.light || '#fbbf24'} 50%, ${colors.gold?.dark || '#d97706'} 100%)`,
                  '--hover-shadow': `0 20px 25px -5px ${colors.gold?.primary || '#f59e0b'}30`
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold?.dark || '#d97706'} 0%, ${colors.gold?.primary || '#f59e0b'} 50%, ${colors.gold?.light || '#fbbf24'} 100%)`;
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'} 0%, ${colors.gold?.light || '#fbbf24'} 50%, ${colors.gold?.dark || '#d97706'} 100%)`;
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <circle cx="20" cy="20" r="2" fill="white" opacity="0.3" />
                    <circle cx="80" cy="20" r="2" fill="white" opacity="0.3" />
                    <circle cx="50" cy="10" r="1" fill="white" opacity="0.2" />
                    <circle cx="50" cy="30" r="1" fill="white" opacity="0.2" />
                  </svg>
                </div>
                <i className="fas fa-user-plus mr-2 group-hover:scale-110 transition-transform relative z-10"></i>
                {/* === label button header === */}
                <span className="relative z-10">{t('header.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              <button
                className="lg:hidden relative w-10 h-10 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-sm transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}></i>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="6" fill="none" stroke="white" strokeWidth="0.5" />
                    <circle cx="20" cy="20" r="2" fill="white" opacity="0.3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden relative">
              <div
                className="absolute inset-0 rounded-xl opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${colors.accent.lightBlue}15 0%, ${colors.accent.lightPurple}15 50%, ${colors.accent.lightIndigo}15 100%)`
                }}
              ></div>
              <div
                className="relative px-4 pt-4 pb-6 space-y-1 rounded-xl mb-4 shadow-lg backdrop-blur-sm"
                style={{
                  borderColor: `${colors.accent.lightBlue}50`
                }}
              >
                {menuItems.map((item, index) => (
                  <div key={item.name}>
                    {item.type === 'link' ? (
                      <Link
                        to={item.href}
                        className="group flex items-center justify-between px-4 py-3 text-gray-700 font-semibold rounded-lg transition-all duration-300 border border-transparent"
                        style={{
                          '--hover-color': colors.accent.lightBlue,
                          '--hover-bg': 'white70',
                          '--hover-border': `${colors.accent.lightBlue}50`,
                          animationDelay: `${index * 100}ms`
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.accent.lightBlue;
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                          e.target.style.borderColor = `${colors.accent.lightBlue}80`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#374151';
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.borderColor = 'transparent';
                        }}
                        onClick={() => {
                          if (!item.submenu) {
                            setIsMenuOpen(false);
                          }
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all"
                            style={{
                              background: `linear-gradient(135deg, ${colors.accent.lightBlue}20 0%, ${colors.accent.lightPurple}20 100%)`
                            }}
                          >
                            <i
                              className={`${item.icon} text-sm group-hover:scale-110 transition-transform`}
                              style={{ color: colors.accent.lightBlue }}
                            ></i>
                          </div>
                          <span>{item.name}</span>
                        </div>
                        {item.submenu && (
                          <i
                            className={`fas fa-chevron-down text-sm transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(activeDropdown === item.name ? null : item.name);
                            }}
                          ></i>
                        )}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavigation(item);
                          if (!item.submenu) {
                            setIsMenuOpen(false);
                          }
                        }}
                        className="group flex items-center justify-between px-4 py-3 text-gray-700 font-semibold rounded-lg transition-all duration-300 border border-transparent w-full text-left"
                        style={{
                          '--hover-color': colors.accent.lightBlue,
                          '--hover-bg': 'white70',
                          '--hover-border': `${colors.accent.lightBlue}50`,
                          animationDelay: `${index * 100}ms`
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = colors.accent.lightBlue;
                          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                          e.target.style.borderColor = `${colors.accent.lightBlue}80`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#374151';
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.borderColor = 'transparent';
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all"
                            style={{
                              background: `linear-gradient(135deg, ${colors.accent.lightBlue}20 0%, ${colors.accent.lightPurple}20 100%)`
                            }}
                          >
                            <i
                              className={`${item.icon} text-sm group-hover:scale-110 transition-transform`}
                              style={{ color: colors.accent.lightBlue }}
                            ></i>
                          </div>
                          <span>{item.name}</span>
                        </div>
                        {item.submenu && (
                          <i
                            className={`fas fa-chevron-down text-sm transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(activeDropdown === item.name ? null : item.name);
                            }}
                          ></i>
                        )}
                      </button>
                    )}

                    {item.submenu && activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          subItem.type === 'link' ? (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg transition-all duration-300"
                              style={{
                                background: `${colors.accent.lightBlue}05`
                              }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <i className={`${subItem.icon} text-xs`}></i>
                              <span className="text-sm">{subItem.name}</span>
                            </Link>
                          ) : (
                            <button
                              key={subItem.name}
                              onClick={() => {
                                handleNavigation(subItem);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-600 rounded-lg transition-all duration-300 w-full text-left"
                              style={{
                                background: `${colors.accent.lightBlue}05`
                              }}
                            >
                              <i className={`${subItem.icon} text-xs`}></i>
                              <span className="text-sm">{subItem.name}</span>
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href={data?.contact?.registration?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-3 text-white rounded-lg font-bold text-center mt-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gold?.primary || '#f59e0b'} 0%, ${colors.gold?.light || '#fbbf24'} 50%, ${colors.gold?.dark || '#d97706'} 100%)`
                  }}
                >
                  <i className="fas fa-user-plus"></i>
                  {/* === label button header - mobile === */}
                  <span>{t('header.cta')}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;