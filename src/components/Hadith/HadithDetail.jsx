import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const HadithDetail = () => {
  const { bookId } = useParams();
  
  const [bookInfo, setBookInfo] = useState(null);
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination State
  const [page, setPage] = useState(1);
  const itemsPerPage = 50;
  const [goToPage, setGoToPage] = useState('');

  // View Preferences
  const [arabicFontSize, setArabicFontSize] = useState(() => parseInt(localStorage.getItem('hadith_font_size')) || 36);

  useEffect(() => {
    localStorage.setItem('hadith_font_size', arabicFontSize);
  }, [arabicFontSize]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchHadiths = async () => {
      try {
        setLoading(true);
        const start = (page - 1) * itemsPerPage + 1;
        const end = page * itemsPerPage;
        
        const res = await fetch(`https://api.hadith.gading.dev/books/${bookId}?range=${start}-${end}`);
        const data = await res.json();
        
        if (data.data) {
          setBookInfo({
            name: data.data.name,
            id: data.data.id,
            available: data.data.available
          });
          setHadiths(data.data.hadiths);
        }
      } catch (error) {
        console.error("Error fetching hadiths", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHadiths();
  }, [bookId, page]);

  const totalPages = bookInfo ? Math.ceil(bookInfo.available / itemsPerPage) : 0;

  const handleGoToPage = (e) => {
    e.preventDefault();
    const targetPage = parseInt(goToPage);
    if (targetPage >= 1 && targetPage <= totalPages) {
      setPage(targetPage);
      setGoToPage('');
    }
  };

  if (loading && !bookInfo) {
    return (
      <div className="min-h-screen bg-[#f8fcfc] pt-[100px] flex justify-center items-center">
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
            <Link to="/hadith" className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#29A6B6] hover:bg-[#f0f9fa] transition-all">
              <i className="fas fa-arrow-left"></i>
            </Link>
            <div className="min-w-0">
              <h2 className="font-bold text-gray-900 leading-tight truncate">{bookInfo?.name}</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest truncate">Total {bookInfo?.available.toLocaleString('id-ID')} Hadits</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
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
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 mt-4 md:mt-8">
        
        {/* Pagination Top */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg font-semibold text-sm hover:bg-[#e8f6f7] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <i className="fas fa-chevron-left mr-2"></i> Prev
            </button>
            <div className="text-sm font-bold text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              Halaman {page} / {totalPages}
            </div>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg font-semibold text-sm hover:bg-[#e8f6f7] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </div>

          <form onSubmit={handleGoToPage} className="flex items-center gap-2">
            <input 
              type="number" 
              min="1" 
              max={totalPages}
              value={goToPage}
              onChange={(e) => setGoToPage(e.target.value)}
              placeholder="Ke Halaman"
              className="w-28 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#29A6B6] focus:bg-white transition-all"
            />
            <button type="submit" className="px-3 py-2 bg-[#29A6B6] text-white rounded-lg text-sm font-bold hover:bg-[#238c9a] transition-colors">
              Go
            </button>
          </form>
        </div>

        {/* Loading Indicator for Data */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#29A6B6]"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {hadiths.map((hadith) => (
              <div 
                key={hadith.number}
                className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100"
              >
                {/* Number Badge */}
                <div className="mb-8 flex">
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#29A6B6]/10 to-[#349B48]/10 text-[#29A6B6] font-bold text-sm border border-[#29A6B6]/20 shadow-sm">
                    Hadits No. {hadith.number}
                  </span>
                </div>

                {/* Arabic Text */}
                <div className="text-right w-full mb-8">
                  <p className="font-arabic text-gray-900 leading-[2.5]" style={{ fontSize: `${arabicFontSize}px` }} dir="rtl">
                    {hadith.arab}
                  </p>
                </div>

                {/* Translation */}
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {hadith.id}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Bottom */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-5 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-[#e8f6f7] hover:border-[#29A6B6] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <i className="fas fa-chevron-left mr-2"></i> Halaman Sebelumnya
            </button>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-5 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-[#e8f6f7] hover:border-[#29A6B6] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              Halaman Berikutnya <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HadithDetail;
