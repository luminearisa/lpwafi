import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

const QuranDashboard = () => {
  const { t, language } = useLanguage();
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Local storage logic for global reciter
  const [reciter, setReciter] = useState(() => {
    return localStorage.getItem('quran_reciter') || '7'; // Default Mishary Rashid Alafasy
  });

  const reciters = [
    { id: '7', name: 'Mishary Rashid Alafasy' },
    { id: '2', name: 'AbdulBaset AbdulSamad' },
    { id: '10', name: 'Saud Al-Shuraim' },
    { id: '4', name: 'Abu Bakr Al-Shatri' },
    { id: '3', name: 'Abdur-Rahman as-Sudais' }
  ];

  useEffect(() => {
    localStorage.setItem('quran_reciter', reciter);
  }, [reciter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSurahs = async () => {
      try {
        setLoading(true);
        // Language mapping for quran.com api
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

  const filteredSurahs = surahs.filter(surah => 
    surah.name_simple.toLowerCase().includes(searchQuery.toLowerCase()) || 
    surah.translated_name.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-[75px] lg:pt-[115px] pb-20 font-sans">
      
      {/* Page Header */}
      <div className="bg-[#29A6B6] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <i className="fas fa-book-quran absolute -right-20 -bottom-20 text-[200px] text-white"></i>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('quran.title') || 'Al-Quran Digital'}</h1>
          <p className="text-white/80 max-w-2xl text-lg">
            "Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya." (HR. Bukhari)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-30px] relative z-20">
        
        {/* Control Bar */}
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-4 md:p-6 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
          
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder={t('quran.search') || 'Cari surah...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29A6B6]/50 focus:border-[#29A6B6] transition-all"
            />
          </div>

          <div className="w-full md:w-auto flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest hidden lg:block">
              {t('quran.reciter') || 'Qori'}:
            </span>
            <div className="relative w-full md:w-64">
              <select
                value={reciter}
                onChange={(e) => setReciter(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#29A6B6]/50 focus:border-[#29A6B6] transition-all font-medium text-gray-700"
              >
                {reciters.map(r => (
                  <option key={r.id} value={r.id}>{r.name}</option>
                ))}
              </select>
              <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-sm"></i>
            </div>
          </div>
          
        </div>

        {/* Surah List */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#29A6B6]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredSurahs.map((surah) => (
              <Link 
                to={`/quran/${surah.id}`} 
                key={surah.id}
                className="group bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-[0_20px_40px_rgba(41,166,182,0.1)] border border-gray-100 hover:border-[#29A6B6]/30 transition-all duration-300 flex items-center gap-5"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#f0f9fa] text-[#29A6B6] flex items-center justify-center font-bold text-lg relative overflow-hidden group-hover:bg-[#29A6B6] group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <span className="relative z-10">{surah.id}</span>
                  <div className="absolute inset-0 opacity-20 border-2 border-current rounded-xl transform rotate-45 scale-110"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#29A6B6] transition-colors truncate">
                    {surah.name_simple}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 truncate">
                    {surah.translated_name.name}
                  </p>
                </div>
                
                <div className="text-right flex flex-col items-end justify-center">
                  <span className="font-arabic text-2xl md:text-3xl text-[#349B48] group-hover:text-[#29A6B6] transition-colors leading-none pb-2">
                    {surah.name_arabic}
                  </span>
                  <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded uppercase tracking-wider font-semibold border border-gray-100">
                    {surah.verses_count} Ayat
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {!loading && filteredSurahs.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <i className="fas fa-search text-4xl mb-4 opacity-50"></i>
            <p className="text-lg">Surah tidak ditemukan</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default QuranDashboard;
