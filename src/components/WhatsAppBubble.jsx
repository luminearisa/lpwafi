import React, { useState, useEffect } from 'react';

const WhatsAppBubble = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  // Get color scheme from data or use defaults
  const colors = data?.colorScheme || {
    primary: { blue: "#1e3a8a", purple: "#7c3aed", indigo: "#4338ca" },
    secondary: { emerald: "#059669", cyan: "#0891b2", teal: "#0d9488" },
    accent: { lightBlue: "#3b82f6", lightPurple: "#9333ea", lightIndigo: "#6366f1" },
    gold: { primary: "#f59e0b", light: "#fbbf24", dark: "#d97706" }
  };

  const whatsappNumber = "628119391444";
  const defaultMessage = "Assalamualaikum, saya ingin bertanya tentang Al Wafi Islamic Boarding School.";

  useEffect(() => {
    // Show bubble after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="relative">
          {/* Pulse Animation Rings */}
          <div className="absolute inset-0 animate-ping">
            <div 
              className="w-16 h-16 rounded-full opacity-75"
              style={{ background: '#25D366' }}
            ></div>
          </div>
          <div className="absolute inset-0 animate-pulse">
            <div 
              className="w-16 h-16 rounded-full opacity-50"
              style={{ background: '#25D366' }}
            ></div>
          </div>

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 ${
              isHovered ? 'scale-110 shadow-3xl' : 'scale-100'
            }`}
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: isHovered 
                ? '0 20px 25px -5px rgba(37, 211, 102, 0.4), 0 10px 10px -5px rgba(37, 211, 102, 0.3)'
                : '0 10px 15px -3px rgba(37, 211, 102, 0.3), 0 4px 6px -2px rgba(37, 211, 102, 0.2)'
            }}
            aria-label="Hubungi via WhatsApp"
          >
            {/* WhatsApp Icon */}
            <svg 
              className={`w-8 h-8 text-white transition-transform duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
            </svg>

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </button>

          {/* Tooltip */}
          <div 
            className={`absolute bottom-full right-0 mb-3 transform transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-0 scale-95'
            }`}
          >
            <div 
              className="bg-white rounded-lg shadow-xl border border-gray-200 px-4 py-2 whitespace-nowrap relative"
              style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="flex items-center space-x-2">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#25D366' }}
                ></div>
                <span className="text-gray-800 font-medium text-sm">Chat via WhatsApp</span>
              </div>
              
              {/* Tooltip Arrow */}
              <div 
                className="absolute top-full right-4 transform -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: '6px solid white'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message Popup */}
      <div 
        className={`fixed bottom-24 right-6 z-40 transition-all duration-700 transform ${
          isVisible && !isHovered && showWelcomeMessage ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
        }`}
        style={{ maxWidth: '300px' }}
      >
        <div 
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 relative"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowWelcomeMessage(false)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <i className="fas fa-times text-gray-500 text-xs"></i>
          </button>

          {/* Header */}
          <div className="flex items-center space-x-3 mb-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
            >
              <i className="fab fa-whatsapp text-white text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Al Wafi IBS</h4>
              <div className="flex items-center space-x-1">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#25D366' }}
                ></div>
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div 
            className="p-3 rounded-lg mb-3"
            style={{ background: colors.accent.lightBlue + '10' }}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              Assalamualaikum! 👋<br/>
              <strong>Butuh informasi tentang Al Wafi Islamic Boarding School?</strong><br/>
              Chat dengan kami sekarang!
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
            }}
          >
            <i className="fab fa-whatsapp text-lg"></i>
            <span>Mulai Chat</span>
          </button>

          {/* Speech Bubble Arrow */}
          <div 
            className="absolute bottom-0 right-8 transform translate-y-full"
            style={{
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '12px solid white'
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppBubble;
