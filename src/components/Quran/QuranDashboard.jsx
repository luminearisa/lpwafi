import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

// Juz sections for navigation
const JUZ_INFO = [
  { id: 1, name: 'Juz 1', range: '1-2', color: 'from-emerald-500 to-teal-600' },
  { id: 2, name: 'Juz 2', range: '3-4', color: 'from-teal-500 to-cyan-600' },
  { id: 3, name: 'Juz 3', range: '5-7', color: 'from-cyan-500 to-blue-600' },
  { id: 4, name: 'Juz 4', range: '8-11', color: 'from-blue-500 to-indigo-600' },
  { id: 5, name: 'Juz 5', range: '12-15', color: 'from-indigo-500 to-purple-600' },
  { id: 6, name: 'Juz 6', range: '16-20', color: 'from-purple-500 to-violet-600' },
  { id: 7, name: 'Juz 7', range: '21-24', color: 'from-violet-500 to-pink-600' },
  { id: 8, name: 'Juz 8', range: '25-27', color: 'from-pink-500 to-rose-600' },
  { id: 9, name: 'Juz 9', range: '28-30', color: 'from-rose-500 to-red-600' },
];

// Makkiyah/Madaniyah surahs
const MAKKIYAH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
const MADANIYAH = [2, 3, 4, 5, 8, 9, 13, 22, 24, 33, 47, 48, 49, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 76, 98, 99, 110, 112];

const QuranDashboard = () => {
  const { t, language } = useLanguage();
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('quran_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [lastRead, setLastRead] = useState(() => {
    return localStorage.getItem('quran_last_read') || null;
  });

  // Reciter state
  const [reciter, setReciter] = useState(() => {
    return localStorage.getItem('quran_reciter') || '7';
  });

  const reciters = [
    { id: '7', name: 'Mishary Rashid Alafasy', flag: '🇰🇼' },
    { id: '2', name: 'AbdulBaset AbdulSamad', flag: '🇪🇬' },
    { id: '10', name: 'Saud Al-Shuraim', flag: '🇸🇦' },
    { id: '4', name: 'Abu Bakr Al-Shatri', flag: '🇦🇪' },
    { id: '3', name: 'Abdur-Rahman as-Sudais', flag: '🇸🇦' },
    { id: '1', name: 'Maher Al Muaiqly', flag: '🇸🇦' },
    { id: '5', name: 'Abdullah Awad Al-Juhani', flag: '🇸🇦' },
  ];

  useEffect(() => {
    localStorage.setItem('quran_reciter', reciter);
  }, [reciter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSurahs = async () => {
      try {
        setLoading(true);
        const apiLang = language === 'id' ? 'id' : language === 'ar' ? 'ar' : 'en';
        const res = await fetch(`https://api.quran.com/api/v4/chapters?language=${apiLang}`);
        const data = await res.json();
        setSurahs(data.chapters);
      } catch (error) {
        console.error("Error fetching surahs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurahs();
  }, [language]);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('quran_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (surahId) => {
    setFavorites(prev => 
      prev.includes(surahId) 
        ? prev.filter(id => id !== surahId)
        : [...prev, surahId]
    );
  };

  const filteredSurahs = useMemo(() => {
    let filtered = [...surahs];

    // Filter by tab
    if (showFavorites) {
      filtered = filtered.filter(s => favorites.includes(s.id));
    } else if (activeTab === 'makkiyah') {
      filtered = filtered.filter(s => MAKKIYAH.includes(s.id));
    } else if (activeTab === 'madaniyah') {
      filtered = filtered.filter(s => MADANIYAH.includes(s.id));
    } else if (activeTab !== 'all') {
      // Filter by juz (simplified)
      const juzIndex = parseInt(activeTab.replace('juz_', '')) - 1;
      if (juzIndex >= 0 && juzIndex < JUZ_INFO.length) {
        const [start, end] = JUZ_INFO[juzIndex].range.split('-').map(n => parseInt(n));
        // Map Juz to approximate surah ranges
        const juzRanges = [
          [1, 2], [3, 4], [5, 7], [8, 11], [12, 15], [16, 20], [21, 24], [25, 27], [28, 30]
        ];
        if (juzRanges[juzIndex]) {
          const [s, e] = juzRanges[juzIndex];
          filtered = filtered.filter(surah => surah.id >= s && surah.id <= e);
        }
      }
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(surah =>
        surah.name_simple.toLowerCase().includes(query) ||
        surah.translated_name.name.toLowerCase().includes(query) ||
        surah.name_arabic.includes(searchQuery)
      );
    }

    return filtered;
  }, [surahs, activeTab, searchQuery, showFavorites, favorites]);

  const tabs = [
    { id: 'all', label: t('quran.tabs.all') || 'Semua', icon: 'fa-book-open' },
    { id: 'makkiyah', label: t('quran.tabs.makkiyah') || 'Makiyah', icon: 'fa-kaaba' },
    { id: 'madaniyah', label: t('quran.tabs.madaniyah') || 'Madaniyah', icon: 'fa-mosque' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-[75px] lg:pt-[115px] pb-20 font-sans">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="currentColor" opacity="0.3"/>
                <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
          </svg>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-[128px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <i className="fas fa-star text-amber-400"></i>
                <span className="text-sm font-medium">{t('quran.badge') || 'Koleksi 114 Surah'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {t('quran.title') || 'Al-Quran Digital'}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-6 leading-relaxed">
                {t('quran.subtitle') || '"Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya."'}
              </p>
              <p className="text-sm text-white/60 italic">
                {t('quran.hadith_source') || 'HR. Bukhari'}
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[140px] text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">114</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">{t('quran.stats.surahs') || 'Surah'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[140px] text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">30</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">{t('quran.stats.juz') || 'Juz'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[140px] text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">6236</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">{t('quran.stats.verses') || 'Ayat'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* Control Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-8 border border-gray-100/50">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            
            {/* Search */}
            <div className="relative flex-1">
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input 
                type="text" 
                placeholder={t('quran.search') || 'Cari surah...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-gray-700 placeholder-gray-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            {/* Reciter Select */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={reciter}
                  onChange={(e) => setReciter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3.5 bg-emerald-50 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-medium text-gray-700 cursor-pointer"
                >
                  {reciters.map(r => (
                    <option key={r.id} value={r.id}>{r.name}</option>
                  ))}
                </select>
                <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-600 pointer-events-none text-sm"></i>
              </div>
              
              {/* Favorites Toggle */}
              <button
                onClick={() => {
                  setShowFavorites(!showFavorites);
                  if (!showFavorites) setActiveTab('all');
                }}
                className={`p-3.5 rounded-xl transition-all ${
                  showFavorites 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' 
                    : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-600'
                }`}
                title={t('quran.favorites') || 'Favorit'}
              >
                <i className={`fas fa-star`}></i>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setShowFavorites(false);
                }}
                className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  activeTab === tab.id && !showFavorites
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-700'
                }`}
              >
                <i className={`fas ${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
            
            {/* Juz Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2.5 rounded-xl font-medium text-sm bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-700 transition-all flex items-center">
                <i className="fas fa-layer-group mr-2"></i>
                {t('quran.tabs.by_juz') || 'Juz'}
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[200px]">
                <div className="grid grid-cols-3 gap-1">
                  {JUZ_INFO.map(juz => (
                    <button
                      key={juz.id}
                      onClick={() => {
                        setActiveTab(`juz_${juz.id}`);
                        setShowFavorites(false);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeTab === `juz_${juz.id}`
                          ? 'bg-gradient-to-r ' + juz.color + ' text-white'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {juz.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Read Banner */}
        {lastRead && !showFavorites && (
          <Link 
            to={`/quran/${lastRead}`}
            className="block mb-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-size-200 animate-gradient rounded-2xl p-4 md:p-6 text-white shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <i className="fas fa-bookmark text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">{t('quran.last_read') || 'Terakhir Dibaca'}</p>
                  <p className="font-bold text-lg">{t('quran.continue_reading') || 'Lanjutkan Membaca'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden md:inline text-sm text-white/80">{t('quran.tap_to_continue') || 'Ketuk untuk melanjutkan'}</span>
                <i className="fas fa-arrow-right text-xl"></i>
              </div>
            </div>
          </Link>
        )}

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            {showFavorites ? (
              <span>{favorites.length} {t('quran.saved_surahs') || 'surah tersimpan'}</span>
            ) : (
              <span>{filteredSurahs.length} {t('quran.of') || 'dari'} 114 {t('quran.surahs') || 'surah'}</span>
            )}
          </p>
          {showFavorites && favorites.length > 0 && (
            <button
              onClick={() => setFavorites([])}
              className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
            >
              <i className="fas fa-trash-alt"></i>
              {t('quran.clear_all') || 'Hapus semua'}
            </button>
          )}
        </div>

        {/* Surah List */}
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-emerald-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-emerald-600 rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-gray-500 font-medium">{t('quran.loading') || 'Memuat...'}</p>
          </div>
        ) : filteredSurahs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {filteredSurahs.map((surah, index) => {
              const isFavorite = favorites.includes(surah.id);
              const isMakkiyah = MAKKIYAH.includes(surah.id);
              
              return (
                <Link 
                  to={`/quran/${surah.id}`} 
                  key={surah.id}
                  onClick={() => localStorage.setItem('quran_last_read', surah.id)}
                  className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 flex items-center gap-4 relative overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Surah Number Badge */}
                  <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110 ${
                    isMakkiyah 
                      ? 'bg-gradient-to-br from-amber-100 to-orange-100 text-amber-700 group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white'
                      : 'bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white'
                  }`}>
                    <span className="relative z-10">{surah.id}</span>
                    <div className="absolute inset-0 opacity-20 border-2 border-current rounded-xl transform rotate-45 scale-110"></div>
                  </div>
                  
                  {/* Surah Info */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors truncate">
                        {surah.name_simple}
                      </h3>
                      {isMakkiyah ? (
                        <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-semibold">M</span>
                      ) : (
                        <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-semibold">Mad</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {surah.translated_name.name}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <i className="fas fa-verse"></i>
                        {surah.verses_count} {t('quran.verses') || 'ayat'}
                      </span>
                      {surah.revelation_place && (
                        <span className="flex items-center gap-1">
                          <i className={`fas ${isMakkiyah ? 'fa-kaaba' : 'fa-mosque'}`}></i>
                          {isMakkiyah ? 'Makkiyah' : 'Madaniyah'}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Arabic Name & Favorite */}
                  <div className="flex flex-col items-end justify-between h-full relative z-10">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(surah.id);
                      }}
                      className={`p-2 rounded-lg transition-all ${
                        isFavorite 
                          ? 'text-amber-500 bg-amber-50' 
                          : 'text-gray-300 hover:text-amber-500 hover:bg-amber-50'
                      }`}
                    >
                      <i className={`fas fa-star ${isFavorite ? 'fas' : 'far'}`}></i>
                    </button>
                    <span className="font-arabic text-2xl md:text-3xl text-gradient bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:from-emerald-700 group-hover:to-teal-700 bg-clip-text text-transparent">
                      {surah.name_arabic}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {showFavorites 
                ? (t('quran.no_favorites') || 'Belum ada surah favorit')
                : (t('quran.not_found') || 'Surah tidak ditemukan')
              }
            </h3>
            <p className="text-gray-500 mb-6">
              {showFavorites 
                ? (t('quran.add_favorites_hint') || 'Tambahkan surah favorit dengan mengklik ikon bintang')
                : (t('quran.try_different') || 'Coba kata kunci pencarian yang berbeda')
              }
            </p>
            {!showFavorites && searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
              >
                {t('quran.clear_search') || 'Hapus Pencarian'}
              </button>
            )}
          </div>
        )}

        {/* Bottom Info */}
        {!loading && filteredSurahs.length > 0 && (
          <div className="mt-10 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-6 md:p-8 border border-emerald-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-lightbulb text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">{t('quran.tip_title') || 'Tips Membaca'}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('quran.tip_text') || 'Klik ikon bintang untuk menyimpan surah favorit. Surah favorit akan tersimpan di browser Anda dan dapat diakses kapan saja tanpa koneksi internet.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-size-200 { background-size: 200% 100%; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default QuranDashboard;
