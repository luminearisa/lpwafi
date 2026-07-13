import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KutubDashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBooks = async () => {
      try {
        const res = await fetch('https://api.mufassir.web.id/api/books.php');
        const data = await res.json();
        if (data.status === 'success' && data.data) {
          setBooks(data.data);
        }
      } catch (error) {
        console.error("Error fetching kutub books", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fcfc] pt-[90px] lg:pt-[130px] pb-32 font-sans selection:bg-[#29A6B6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-[#e8f6f7] rounded-full mb-6">
            <i className="fas fa-book text-2xl text-[#29A6B6]"></i>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Perpustakaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29A6B6] to-[#349B48]">Kutub</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Eksplorasi ribuan kitab klasik Islam berbahasa Arab dengan mudah.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative z-20">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400 group-focus-within:text-[#29A6B6] transition-colors"></i>
            </div>
            <input
              type="text"
              placeholder="Cari Judul Kitab (Bahasa Arab)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              dir="rtl"
              className="block w-full px-12 py-4 md:py-5 border-2 border-transparent bg-white rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-[#29A6B6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all text-base md:text-lg font-arabic"
            />
          </div>
        </div>

        {/* Books Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#29A6B6]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <Link
                  key={book.book_id}
                  to={`/kutub/${book.book_id}`}
                  className="group bg-white rounded-3xl p-6 md:p-8 hover:shadow-[0_20px_40px_rgba(41,166,182,0.1)] transition-all duration-300 border border-gray-100 flex flex-col justify-between text-right"
                >
                  <div className="flex items-start justify-between mb-6 flex-row-reverse">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#29A6B6]/10 to-[#349B48]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-book-open text-[#29A6B6] text-xl"></i>
                    </div>
                    <div className="bg-[#f0f9fa] text-[#29A6B6] text-xs font-bold px-3 py-1.5 rounded-lg" dir="ltr">
                      {book.max_pages.toLocaleString('id-ID')} Halaman
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#29A6B6] transition-colors font-arabic leading-relaxed" dir="rtl">
                      {book.title}
                    </h3>
                    <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-[#349B48] transition-colors mt-6 flex-row-reverse">
                      <span>Mulai Membaca</span>
                      <i className="fas fa-arrow-left ml-2 group-hover:-translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500 font-medium text-lg">Kitab tidak ditemukan</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default KutubDashboard;
