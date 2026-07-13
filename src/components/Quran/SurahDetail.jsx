import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';
import AudioPlayer from './AudioPlayer';

const SurahDetail = () => {
  const { surahId } = useParams();
  const { t, language } = useLanguage();
  
  const [surahInfo, setSurahInfo] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Preferences
  const [viewMode, setViewMode] = useState(() => localStorage.getItem('quran_view_mode') || 'list');
  const [reciter, setReciter] = useState(() => localStorage.getItem('quran_reciter') || '7');
  const [translationLang, setTranslationLang] = useState(() => localStorage.getItem('quran_trans_lang') || '33'); // 33=ID, 131=EN
  const [arabicFontSize, setArabicFontSize] = useState(() => parseInt(localStorage.getItem('quran_font_size')) || 36);
  const [tafsirSource, setTafsirSource] = useState(() => localStorage.getItem('quran_tafsir_src') || '169');
  const [tafsirData, setTafsirData] = useState({});
  const [expandedTafsir, setExpandedTafsir] = useState(null);
  const [loadingTafsir, setLoadingTafsir] = useState(false);
  const [tafsirOptions, setTafsirOptions] = useState([
    { id: '169', name: 'Ibn Kathir (Abridged)', language_name: 'english' },
    { id: '14', name: 'Tafsir Ibn Kathir', language_name: 'arabic' },
    { id: 'kemenag', name: 'Tafsir Kemenag', language_name: 'indonesian' }
  ]);
  
  // Audio State
  const [playingIndex, setPlayingIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoNext, setAutoNext] = useState(true);

  // References for scrolling
  const verseRefs = useRef({});

  // Fetch Tafsir Options
  useEffect(() => {
    const fetchTafsirOptions = async () => {
      try {
        const res = await fetch('https://api.quran.com/api/v4/resources/tafsirs');
        const data = await res.json();
        if (data.tafsirs) {
          // Filter out Quraish Shihab just in case, per user request
          const filtered = data.tafsirs.filter(t => !t.name.toLowerCase().includes('quraish shihab') && !t.name.toLowerCase().includes('shihab'));
          setTafsirOptions([
            { id: 'kemenag', name: 'Tafsir Kemenag', language_name: 'indonesian' },
            ...filtered
          ]);
        }
      } catch (err) {
        console.error("Error fetching tafsir options", err);
      }
    };
    fetchTafsirOptions();
  }, []);

  useEffect(() => {
    localStorage.setItem('quran_view_mode', viewMode);
    localStorage.setItem('quran_reciter', reciter);
    localStorage.setItem('quran_trans_lang', translationLang);
    localStorage.setItem('quran_font_size', arabicFontSize);
    localStorage.setItem('quran_tafsir_src', tafsirSource);
  }, [viewMode, reciter, translationLang, arabicFontSize, tafsirSource]);

  useEffect(() => {
    const fetchTafsir = async () => {
      try {
        setLoadingTafsir(true);
        setTafsirData({});
        
        if (tafsirSource === 'kemenag') {
          const res = await fetch(`https://equran.id/api/v2/tafsir/${surahId}`);
          const data = await res.json();
          const tafsirMap = {};
          if (data.data && data.data.tafsir) {
            data.data.tafsir.forEach(t => {
              tafsirMap[t.ayat] = t.teks;
            });
          }
          setTafsirData(tafsirMap);
        } else {
          const res = await fetch(`https://api.quran.com/api/v4/tafsirs/${tafsirSource}/by_chapter/${surahId}`);
          const data = await res.json();
          const tafsirMap = {};
          if (data.tafsirs) {
            data.tafsirs.forEach(t => {
              const ayahNum = t.verse_key.split(':')[1];
              tafsirMap[ayahNum] = t.text;
            });
          }
          setTafsirData(tafsirMap);
        }
      } catch (error) {
        console.error("Error fetching tafsir", error);
      } finally {
        setLoadingTafsir(false);
      }
    };
    
    if (surahId) {
      fetchTafsir();
    }
  }, [surahId, tafsirSource]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSurah = async () => {
      try {
        setLoading(true);
        
        // Fetch Surah Info
        const infoRes = await fetch(`https://api.quran.com/api/v4/chapters/${surahId}?language=id`);
        const infoData = await infoRes.json();
        setSurahInfo(infoData.chapter);

        // Fetch Verses with text, translation, and audio
        // Using translationLang and reciter
        const versesRes = await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surahId}?language=id&words=false&translations=${translationLang}&audio=${reciter}&fields=text_uthmani&per_page=300`);
        const versesData = await versesRes.json();
        setVerses(versesData.verses);
        
      } catch (error) {
        console.error("Error fetching surah details", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSurah();
  }, [surahId, translationLang, reciter]);

  // Sync translationLang with global language if it makes sense
  useEffect(() => {
    if (language === 'id') setTranslationLang('33');
    if (language === 'en') setTranslationLang('131');
  }, [language]);

  const handlePlayAyah = (index) => {
    if (playingIndex === index) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingIndex(index);
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    if (autoNext && playingIndex < verses.length - 1) {
      setPlayingIndex(prev => prev + 1);
      // Scroll to next ayah
      const nextRef = verseRefs.current[playingIndex + 1];
      if (nextRef) {
        nextRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setIsPlaying(false);
      setPlayingIndex(-1);
    }
  };

  const getAudioUrl = (verse) => {
    if (!verse || !verse.audio || !verse.audio.url) return null;
    return verse.audio.url.startsWith('http') ? verse.audio.url : `https://verses.quran.com/${verse.audio.url}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-[100px] flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#29A6B6]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fcfc] pt-[90px] lg:pt-[130px] pb-32 font-sans selection:bg-[#29A6B6]/20">
      
      {/* Sticky Header */}
      <div className="sticky top-[65px] lg:top-[115px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link to="/quran" className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#29A6B6] hover:bg-[#f0f9fa] transition-all">
              <i className="fas fa-arrow-left"></i>
            </Link>
            <div className="min-w-0">
              <h2 className="font-bold text-gray-900 leading-tight truncate">{surahInfo?.name_simple}</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest truncate">{surahInfo?.translated_name?.name} • {surahInfo?.verses_count} Ayat</p>
            </div>
          </div>

          <div className="flex flex-nowrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end overflow-x-auto pb-2 sm:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Translations Select */}
            <select 
              value={translationLang}
              onChange={(e) => setTranslationLang(e.target.value)}
              className="text-xs font-semibold uppercase tracking-widest bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 text-gray-600 focus:outline-none focus:border-[#29A6B6] max-w-[120px] sm:max-w-none shrink-0"
            >
              <option value="33">ID (Kemenag)</option>
              <option value="131">EN (Clear Quran)</option>
            </select>

            {/* Tafsir Select */}
            <select 
              value={tafsirSource}
              onChange={(e) => setTafsirSource(e.target.value)}
              className="text-xs font-semibold uppercase tracking-widest bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 text-gray-600 focus:outline-none focus:border-[#29A6B6] max-w-[150px] sm:max-w-[200px] shrink-0"
            >
              {tafsirOptions.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {opt.name} ({opt.language_name.substring(0,2).toUpperCase()})
                </option>
              ))}
            </select>

            {/* Font Size Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 items-center shrink-0">
              <button 
                onClick={() => setArabicFontSize(prev => Math.max(20, prev - 4))}
                className="px-2 py-1.5 rounded-md text-xs font-bold text-gray-500 hover:text-gray-700 transition-all"
                title="Perkecil Teks"
              >
                A-
              </button>
              <button 
                onClick={() => setArabicFontSize(prev => Math.min(72, prev + 4))}
                className="px-2 py-1.5 rounded-md text-xs font-bold text-gray-500 hover:text-gray-700 transition-all"
                title="Perbesar Teks"
              >
                A+
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 shrink-0">
              <button 
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[#29A6B6]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <i className="fas fa-list sm:me-1.5"></i> <span className="hidden sm:inline">List</span>
              </button>
              <button 
                onClick={() => setViewMode('mushaf')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewMode === 'mushaf' ? 'bg-white shadow-sm text-[#29A6B6]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <i className="fas fa-book-open sm:me-1.5"></i> <span className="hidden sm:inline">Mushaf</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 mt-4 md:mt-8">
        
        {/* Bismillah */}
        {surahInfo?.bismillah_pre && (
          <div className="text-center mb-12">
            <h1 className="font-arabic text-4xl md:text-5xl text-gray-800">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </h1>
          </div>
        )}

        {/* MUSHAF MODE */}
        {viewMode === 'mushaf' && (
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 text-center leading-[3.5] md:leading-[4]">
            {verses.map((verse, index) => (
              <span 
                key={verse.id} 
                ref={el => verseRefs.current[index] = el}
                className={`font-arabic inline transition-colors duration-300 ${playingIndex === index ? 'text-[#29A6B6] bg-[#f0f9fa] rounded-lg' : 'text-gray-800'}`}
                style={{ fontSize: `${arabicFontSize}px`, lineHeight: 2.5 }}
                onClick={() => handlePlayAyah(index)}
              >
                {verse.text_uthmani}
                <span className="inline-flex items-center justify-center w-10 h-10 mx-2 text-sm text-[#29A6B6] bg-[url('https://api.quran.com/images/ayah-end.svg')] bg-center bg-no-repeat bg-contain">
                  {verse.verse_number}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* LIST MODE */}
        {viewMode === 'list' && (
          <div className="space-y-6">
            {verses.map((verse, index) => (
              <div 
                key={verse.id}
                ref={el => verseRefs.current[index] = el}
                className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border transition-all duration-300 ${playingIndex === index ? 'border-[#29A6B6] shadow-[0_10px_30px_rgba(41,166,182,0.1)]' : 'border-gray-100'}`}
              >
                {/* Ayah Number Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f0f9fa] text-[#29A6B6] font-bold text-sm">
                    {verse.verse_number}
                  </span>
                </div>

                {/* Arabic Text */}
                <div className="text-right w-full mb-6">
                  <p className="font-arabic text-gray-900" style={{ fontSize: `${arabicFontSize}px`, lineHeight: 2.2 }} dir="rtl">
                    {verse.text_uthmani}
                  </p>
                </div>

                {/* Translation & Actions */}
                <div className="border-t border-gray-100 pt-5 mt-5">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5" dangerouslySetInnerHTML={{ __html: verse.translations?.[0]?.text || '' }}></p>
                  
                  {/* Play & Tafsir Button Below Translation */}
                  <div className="flex justify-end gap-3">
                    <button 
                      onClick={() => setExpandedTafsir(expandedTafsir === index ? null : index)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition-all ${expandedTafsir === index ? 'bg-[#349B48] text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:text-[#349B48] hover:bg-[#f0f9fa] border border-gray-200'}`}
                    >
                      <i className={`fas ${expandedTafsir === index ? 'fa-chevron-up' : 'fa-book-open'}`}></i>
                      Tafsir
                    </button>
                    <button 
                      onClick={() => handlePlayAyah(index)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition-all ${playingIndex === index ? 'bg-[#29A6B6] text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:text-[#29A6B6] hover:bg-[#f0f9fa] border border-gray-200'}`}
                    >
                      <i className={`fas ${playingIndex === index && isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                      {playingIndex === index && isPlaying ? 'Jeda Ayat' : 'Putar Ayat'}
                    </button>
                  </div>
                </div>

                {/* Tafsir Content Accordion */}
                {expandedTafsir === index && (
                  <div className="mt-4 p-5 md:p-6 bg-[#f8fcfc] rounded-xl border border-gray-100 text-sm md:text-base text-gray-700 leading-relaxed shadow-inner">
                    {loadingTafsir ? (
                      <div className="flex justify-center py-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#349B48]"></div>
                      </div>
                    ) : (
                      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: tafsirData[verse.verse_number] || '<em>Tafsir tidak tersedia untuk ayat ini.</em>' }} />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Audio Player Component */}
      <AudioPlayer 
        audioUrl={playingIndex >= 0 ? getAudioUrl(verses[playingIndex]) : null}
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onEnded={handleAudioEnded}
        currentAyahIndex={playingIndex}
        totalAyahs={verses.length}
        onNext={() => {
          if (playingIndex < verses.length - 1) {
            setPlayingIndex(playingIndex + 1);
            setIsPlaying(true);
            const nextRef = verseRefs.current[playingIndex + 1];
            if (nextRef) nextRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
        onPrev={() => {
          if (playingIndex > 0) {
            setPlayingIndex(playingIndex - 1);
            setIsPlaying(true);
            const prevRef = verseRefs.current[playingIndex - 1];
            if (prevRef) prevRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
      />

    </div>
  );
};

export default SurahDetail;
