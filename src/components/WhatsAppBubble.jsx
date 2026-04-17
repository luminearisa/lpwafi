import React, { useState, useEffect } from 'react';

const WhatsAppBubble = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  // Warna brand dari logo Al Wafi
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  // Warna khas WhatsApp
  const waGreen = "#25D366";

  const whatsappNumber = "628119391444";
  const defaultMessage = "Assalamu'alaikum, saya ingin bertanya tentang Al Wafi Islamic Boarding School.";

  useEffect(() => {
    // Tampilkan bubble setelah sedikit jeda (2 detik)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Fungsi klik dengan parameter pesan dinamis
  const handleWhatsAppClick = (customMessage = defaultMessage) => {
    const encodedMessage = encodeURIComponent(customMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <div
        className={`fixed bottom-6 end-6 z-50 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
      >
        <div className="relative">
          {/* Subtle Pulse Animation Ring */}
          <div className="absolute inset-0 animate-ping opacity-30">
            <div
              className="w-14 h-14 rounded-full"
              style={{ backgroundColor: waGreen }}
            ></div>
          </div>

          {/* Main Button */}
          <button
            onClick={() => handleWhatsAppClick(defaultMessage)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_10px_25px_rgba(37,211,102,0.3)] ${isHovered ? 'scale-105 shadow-[0_15px_35px_rgba(37,211,102,0.4)]' : 'scale-100'
              }`}
            style={{ backgroundColor: waGreen }}
            aria-label="Hubungi via WhatsApp"
          >
            {/* WhatsApp Icon SVG */}
            <svg
              className={`w-7 h-7 text-white transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'
                }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>

            {/* Notification Dot - Minimalist */}
            <div className="absolute top-0 end-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
          </button>

          {/* Simple Tooltip (Hover) */}
          <div
            className={`absolute bottom-full end-0 mb-4 pointer-events-none transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
          >
            <div className="bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 whitespace-nowrap shadow-lg">
              Layanan CS
            </div>
          </div>
        </div>
      </div>

      {/* --- WELCOME MESSAGE & INFO POPUP (Editorial Style) --- */}
      <div
        className={`fixed bottom-24 end-6 z-40 transition-all duration-700 ease-out transform ${isVisible && !isHovered && showWelcomeMessage ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
          }`}
        style={{ width: '340px', maxWidth: 'calc(100vw - 3rem)' }}
      >
        <div className="bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">

          {/* Header Profile - Solid Background */}
          <div className="bg-[#f0f9fa] p-5 flex items-center space-x-4 border-b border-[#29A6B6]/10 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowWelcomeMessage(false)}
              className="absolute top-3 end-3 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors"
              aria-label="Tutup pesan"
            >
              <i className="fas fa-times text-xs"></i>
            </button>

            <div className="w-10 h-10 flex items-center justify-center bg-white border border-[#29A6B6]/20">
              <i className="fas fa-headset text-[#29A6B6] text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                Al Wafi IBS
              </h4>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 bg-[#349B48] rounded-full animate-pulse"></div>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest">Layanan Informasi</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Chat Bubble Message */}
            <div className="bg-gray-50 border border-gray-100 p-4 mb-6 relative">
              {/* Small speech triangle pointing up */}
              <div className="absolute -top-2 start-6 w-3 h-3 bg-gray-50 border-t border-l border-gray-100 transform rotate-45"></div>
              <p className="text-gray-600 text-sm font-light leading-relaxed relative z-10">
                Assalamu'alaikum.<br />
                Selamat datang di layanan informasi <strong className="text-gray-900 font-medium">Al Wafi Islamic Boarding School</strong>. Ada yang bisa kami bantu?
              </p>
            </div>

            {/* Quick Topics / Keterangan Informasi */}
            <div className="mb-6">
              <h5 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#29A6B6] mb-3">
                Topik Populer:
              </h5>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleWhatsAppClick("Assalamu'alaikum, saya ingin mendapat informasi lengkap mengenai Pendaftaran Santri Baru.")}
                  className="px-3 py-1.5 border border-gray-200 text-[10px] text-gray-600 hover:border-[#29A6B6] hover:text-[#29A6B6] hover:bg-[#f0f9fa] transition-all"
                >
                  Info Pendaftaran
                </button>
                <button
                  onClick={() => handleWhatsAppClick("Assalamu'alaikum, saya ingin mengetahui rincian Biaya Pendidikan di Al Wafi.")}
                  className="px-3 py-1.5 border border-gray-200 text-[10px] text-gray-600 hover:border-[#29A6B6] hover:text-[#29A6B6] hover:bg-[#f0f9fa] transition-all"
                >
                  Biaya Pendidikan
                </button>
                <button
                  onClick={() => handleWhatsAppClick("Assalamu'alaikum, saya ingin bertanya mengenai Program Kampus Overseas.")}
                  className="px-3 py-1.5 border border-gray-200 text-[10px] text-gray-600 hover:border-[#29A6B6] hover:text-[#29A6B6] hover:bg-[#f0f9fa] transition-all"
                >
                  Program Overseas
                </button>
              </div>
            </div>

            {/* Operational Hours Info */}
            <div className="flex items-center text-[9px] text-gray-400 uppercase tracking-widest mb-6 bg-gray-50 p-2 border border-gray-100">
              <i className="far fa-clock me-2 text-gray-500"></i>
              Senin - Sabtu | 08:00 - 16:00 WIB
            </div>

            {/* CTA Button - Sharp & Minimalist */}
            <button
              onClick={() => handleWhatsAppClick(defaultMessage)}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 flex items-center justify-center space-x-3"
            >
              <i className="fab fa-whatsapp text-sm"></i>
              <span>Hubungi Admin</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default WhatsAppBubble;