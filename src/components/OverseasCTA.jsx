import React from 'react';
import { Link } from 'react-router-dom';

const OverseasCTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gray-900 border-y border-white/10">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images_overseas/umroh-study-overseas-2.jpg" 
          alt="Umroh Study Overseas" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-white/20">
            <i className="fas fa-plane-departure me-2 text-[#29A6B6]"></i>
            Program Unggulan Al Wafi
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Umroh Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29A6B6] to-[#349B48]">Overseas</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
            Melaksanakan ibadah umroh sembari menimba ilmu di kampus-kampus terkemuka di Timur Tengah. Sebuah pengalaman komprehensif yang secara khusus memadukan perjalanan spiritual mendalam dengan pengayaan akademik bertaraf internasional di Makkah dan Madinah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/program-overseas" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#29A6B6] hover:bg-[#218997] text-white text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(41,166,182,0.3)]"
            >
              <i className="fas fa-compass me-3 text-lg"></i>
              Eksplorasi Program
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#29A6B6] rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-[#349B48] rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default OverseasCTA;
