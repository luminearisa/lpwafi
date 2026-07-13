import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const KutubDetail = () => {
  const { bookId } = useParams();
  
  const [bookInfo, setBookInfo] = useState(null);
  const [pageContent, setPageContent] = useState(null);
  const [fihrisList, setFihrisList] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [fihrisLoading, setFihrisLoading] = useState(false);
  
  // Pagination State
  const [page, setPage] = useState(1);
  const [goToPage, setGoToPage] = useState('');

  // View Preferences
  const [arabicFontSize, setArabicFontSize] = useState(() => parseInt(localStorage.getItem('kutub_font_size')) || 32);

  // Tabs for Mobile (Content vs Fihris)
  const [activeTab, setActiveTab] = useState('content'); // 'content' or 'fihris'

  useEffect(() => {
    localStorage.setItem('kutub_font_size', arabicFontSize);
  }, [arabicFontSize]);

  // Fetch Book Info
  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const res = await fetch(`https://api.mufassir.web.id/api/book.php?id=${bookId}`);
        const data = await res.json();
        if (data.status === 'success' && data.data) {
          setBookInfo(data.data);
        }
      } catch (error) {
        console.error("Error fetching book info", error);
      }
    };
    fetchBookInfo();
  }, [bookId]);

  // Fetch Fihris List
  useEffect(() => {
    const fetchFihris = async () => {
      try {
        setFihrisLoading(true);
        const res = await fetch(`https://api.mufassir.web.id/api/fihris.php?book_id=${bookId}`);
        const data = await res.json();
        if (data.status === 'success' && data.data) {
          setFihrisList(data.data);
        }
      } catch (error) {
        console.error("Error fetching fihris", error);
      } finally {
        setFihrisLoading(false);
      }
    };
    fetchFihris();
  }, [bookId]);

  // Fetch Page Content
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPage = async () => {
      try {
        setPageLoading(true);
        if (!bookInfo) setLoading(true);
        
        const res = await fetch(`https://api.mufassir.web.id/api/pages.php?book_id=${bookId}&page=${page}`);
        const data = await res.json();
        
        if (data.status === 'success' && data.data) {
          setPageContent(data.data);
        } else {
          setPageContent(null);
        }
      } catch (error) {
        console.error("Error fetching page content", error);
        setPageContent(null);
      } finally {
        setLoading(false);
        setPageLoading(false);
      }
    };

    fetchPage();
  }, [bookId, page, bookInfo]);

  const handleGoToPage = (e) => {
    e.preventDefault();
    const targetPage = parseInt(goToPage);
    if (bookInfo && targetPage >= 1 && targetPage <= bookInfo.max_pages) {
      setPage(targetPage);
      setGoToPage('');
      setActiveTab('content'); // switch back to content on mobile
    }
  };

  const handleFihrisClick = (targetPage) => {
    setPage(targetPage);
    setActiveTab('content'); // auto-switch back to content tab on mobile
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
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Link to="/kutub" className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#29A6B6] hover:bg-[#f0f9fa] transition-all">
              <i className="fas fa-arrow-left"></i>
            </Link>
            <div className="min-w-0" dir="rtl">
              <h2 className="font-bold text-gray-900 leading-tight truncate font-arabic">{bookInfo?.title}</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest truncate" dir="ltr">Total {bookInfo?.max_pages.toLocaleString('id-ID')} Halaman</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Mobile Tab Toggles */}
            <div className="flex lg:hidden bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => setActiveTab('content')}
                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeTab === 'content' ? 'bg-white text-[#29A6B6] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Isi
              </button>
              <button 
                onClick={() => setActiveTab('fihris')}
                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeTab === 'fihris' ? 'bg-white text-[#29A6B6] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Fihris
              </button>
            </div>

            {/* Font Size Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 items-center shrink-0">
              <button 
                onClick={() => setArabicFontSize(prev => Math.max(16, prev - 2))}
                className="px-2 py-1.5 rounded-md text-xs font-bold text-gray-500 hover:text-gray-700 transition-all"
                title="Perkecil Teks"
              >
                A-
              </button>
              <button 
                onClick={() => setArabicFontSize(prev => Math.min(64, prev + 2))}
                className="px-2 py-1.5 rounded-md text-xs font-bold text-gray-500 hover:text-gray-700 transition-all"
                title="Perbesar Teks"
              >
                A+
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 mt-4 md:mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Page Content */}
          <div className={`flex-1 ${activeTab === 'content' ? 'block' : 'hidden lg:block'}`}>
            
            {/* Pagination Top */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1 || pageLoading}
                  className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg font-semibold text-sm hover:bg-[#e8f6f7] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <i className="fas fa-chevron-left mr-2"></i> Prev
                </button>
                <div className="text-sm font-bold text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                  Hal {page} / {bookInfo?.max_pages}
                </div>
                <button 
                  onClick={() => setPage(p => Math.min(bookInfo?.max_pages || p, p + 1))}
                  disabled={page === bookInfo?.max_pages || pageLoading}
                  className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg font-semibold text-sm hover:bg-[#e8f6f7] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next <i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>

              <form onSubmit={handleGoToPage} className="flex items-center gap-2">
                <input 
                  type="number" 
                  min="1" 
                  max={bookInfo?.max_pages}
                  value={goToPage}
                  onChange={(e) => setGoToPage(e.target.value)}
                  placeholder="Ke Halaman"
                  className="w-28 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#29A6B6] focus:bg-white transition-all"
                />
                <button type="submit" className="px-3 py-2 bg-[#29A6B6] text-white rounded-lg text-sm font-bold hover:bg-[#238c9a] transition-colors disabled:opacity-50" disabled={pageLoading}>
                  Go
                </button>
              </form>
            </div>

            {/* Content Loading Indicator */}
            {pageLoading ? (
              <div className="flex justify-center py-32">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#29A6B6]"></div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 min-h-[500px]">
                {pageContent ? (
                  <>
                    {pageContent.page_title && (
                      <h3 className="font-arabic font-bold text-2xl md:text-3xl text-[#29A6B6] text-center mb-8 pb-6 border-b border-gray-100" dir="rtl">
                        {pageContent.page_title}
                      </h3>
                    )}
                    
                    <div 
                      className="font-arabic text-gray-900 leading-[2.5] text-justify" 
                      style={{ fontSize: `${arabicFontSize}px` }} 
                      dir="rtl"
                      dangerouslySetInnerHTML={{ __html: pageContent.content.replace(/\n/g, '<br/>') }}
                    />
                  </>
                ) : (
                  <div className="text-center py-20 text-gray-500">
                    <i className="fas fa-file-excel text-4xl mb-4 text-gray-300"></i>
                    <p>Konten tidak tersedia untuk halaman ini.</p>
                  </div>
                )}
              </div>
            )}

            {/* Pagination Bottom */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1 || pageLoading}
                  className="px-5 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-[#e8f6f7] hover:border-[#29A6B6] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <i className="fas fa-chevron-left mr-2"></i> Halaman Sebelumnya
                </button>
                <button 
                  onClick={() => setPage(p => Math.min(bookInfo?.max_pages || p, p + 1))}
                  disabled={page === bookInfo?.max_pages || pageLoading}
                  className="px-5 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-[#e8f6f7] hover:border-[#29A6B6] hover:text-[#29A6B6] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  Halaman Berikutnya <i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Fihris (Daftar Isi) */}
          <div className={`w-full lg:w-[350px] shrink-0 ${activeTab === 'fihris' ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 lg:sticky lg:top-[190px] max-h-[75vh] flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100 flex items-center justify-between">
                <span>Daftar Isi (Fihris)</span>
                <i className="fas fa-list text-[#29A6B6]"></i>
              </h3>
              
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {fihrisLoading ? (
                  <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#29A6B6]"></div>
                  </div>
                ) : fihrisList.length > 0 ? (
                  <ul className="space-y-2">
                    {fihrisList.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleFihrisClick(item.page)}
                          className={`w-full text-right block p-3 rounded-xl transition-all duration-200 border border-transparent hover:border-[#29A6B6]/30 hover:bg-[#f0f9fa] ${page === item.page ? 'bg-[#29A6B6]/10 border-[#29A6B6]/50' : 'bg-gray-50'}`}
                          dir="rtl"
                        >
                          <div className={`font-arabic text-base leading-relaxed ${page === item.page ? 'font-bold text-[#29A6B6]' : 'text-gray-700'}`}>
                            {item.page_title}
                          </div>
                          <div className={`text-xs mt-1 ${page === item.page ? 'text-[#29A6B6]' : 'text-gray-400'}`} dir="ltr">
                            Hal: {item.page}
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-10 text-gray-400">
                    <i className="fas fa-folder-open text-3xl mb-3 text-gray-200"></i>
                    <p className="text-sm">Tidak ada daftar isi untuk kitab ini.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KutubDetail;
