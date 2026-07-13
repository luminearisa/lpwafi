import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

const QuranCTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 bg-[#29A6B6] rounded-full filter blur-[80px] top-0 left-0"></div>
        <div className="absolute w-64 h-64 bg-[#349B48] rounded-full filter blur-[80px] bottom-0 right-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#111111] to-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl">
          
          {/* Decorative elements */}
          <i className="fas fa-book-quran absolute -right-10 -bottom-10 text-[180px] text-white/5 transform -rotate-12"></i>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#29A6B6]/20 text-[#29A6B6] text-xs font-bold tracking-widest uppercase mb-6 border border-[#29A6B6]/30">
                <i className="fas fa-star me-2"></i>
                Fitur Baru
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {t('quran.title') || 'Al-Quran Digital'}
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                Nikmati kemudahan membaca Al-Quran, mendengarkan murottal dari berbagai Qori pilihan, dan memahami terjemahan dalam berbagai bahasa. Didesain khusus untuk memberikan pengalaman spiritual terbaik di mana saja.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/quran" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#29A6B6] hover:bg-[#218997] text-white text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(41,166,182,0.3)]"
                >
                  <i className="fas fa-book-open me-3 text-lg"></i>
                  Mulai Membaca
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#29A6B6] to-[#349B48] rounded-2xl transform rotate-3 opacity-30 blur-lg"></div>
                <div className="bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl relative shadow-2xl">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                    <span className="text-white font-semibold">Al-Fatihah</span>
                    <span className="text-[#29A6B6] font-bold">١</span>
                  </div>
                  <div className="text-right text-white font-arabic text-3xl leading-[2.5] mb-4" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </div>
                  <div className="text-gray-400 text-sm border-t border-white/10 pt-4">
                    Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default QuranCTA;
