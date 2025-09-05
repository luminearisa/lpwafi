import React from 'react';

const Contact = ({ data }) => {
  // Get color scheme from data or use defaults
  const colors = data?.colorScheme || {
    primary: { blue: "#1e3a8a", purple: "#7c3aed", indigo: "#4338ca" },
    secondary: { emerald: "#059669", cyan: "#0891b2", teal: "#0d9488" },
    accent: { lightBlue: "#3b82f6", lightPurple: "#9333ea", lightIndigo: "#6366f1" },
    gold: { primary: "#f59e0b", light: "#fbbf24", dark: "#d97706" }
  };

  const opacity = data?.colorScheme?.opacity || {
    aboutPattern: 15,
    aboutCard: 95,
    aboutIcon: 80
  };

  const getContactColor = (index) => {
    const contactColors = [
      { primary: colors.secondary.emerald, secondary: colors.secondary.cyan },
      { primary: colors.accent.lightBlue, secondary: colors.accent.lightPurple },
      { primary: colors.primary.purple, secondary: colors.primary.indigo },
      { primary: colors.gold.primary, secondary: colors.gold.light }
    ];
    return contactColors[index % contactColors.length];
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about || 
                   `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Authentic Islamic Geometric Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity.aboutPattern / 100 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contactPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary.blue}/>
              <stop offset="50%" stopColor={colors.primary.purple}/>
              <stop offset="100%" stopColor={colors.primary.indigo}/>
            </linearGradient>
          </defs>
          <pattern id="contactPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Main Islamic star motif - very subtle */}
            <g transform="translate(20, 20)" stroke={colors.primary.blue} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* 8-pointed star (Khatam) */}
              <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z"/>
              {/* Inner diamond */}
              <path d="M0,-6 L6,0 L0,6 L-6,0 Z"/>
              {/* Center dot */}
              <circle cx="0" cy="0" r="0.5" fill={colors.primary.blue} opacity="0.4"/>
            </g>
            
            {/* Connecting geometric lines - very thin */}
            <g stroke={colors.primary.purple} strokeWidth="0.05" opacity="0.2">
              {/* Horizontal connectors */}
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              {/* Vertical connectors */}
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
              {/* Diagonal small elements - tiny */}
              <circle cx="10" cy="10" r="0.2" fill={colors.primary.indigo} opacity="0.2"/>
              <circle cx="30" cy="30" r="0.2" fill={colors.primary.indigo} opacity="0.2"/>
              <circle cx="10" cy="30" r="0.2" fill={colors.primary.indigo} opacity="0.2"/>
              <circle cx="30" cy="10" r="0.2" fill={colors.primary.indigo} opacity="0.2"/>
            </g>
            
            {/* Corner ornaments - barely visible */}
            <g transform="translate(10, 10)" stroke={colors.primary.blue} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z"/>
            </g>
            <g transform="translate(30, 30)" stroke={colors.primary.blue} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#contactPattern)"/>
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary.emerald}20, ${colors.secondary.cyan}20)` 
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-16 h-16 rotate-45 blur-lg"
          style={{ 
            background: `linear-gradient(135deg, ${colors.accent.lightBlue}15, ${colors.accent.lightPurple}15)` 
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/3 w-12 h-12 rounded-full blur-lg"
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary.teal}20, ${colors.secondary.emerald}20)` 
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full mr-4"
              style={{ background: colors.primary.blue }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.primary.blue }}
            >
              Hubungi Kami
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.primary.blue }}
            ></div>
          </div>
          <h2 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            Mari Bergabung Bersama Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Siap bergabung dengan Al Wafi Islamic Boarding School? Hubungi kami untuk informasi lebih lanjut 
            dan mulai perjalanan pendidikan yang berkualitas
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          ></div>
        </div>

        {/* Registration CTA - Premium Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden mb-20"
          style={{
            background: `linear-gradient(135deg, ${colors.gold.primary} 0%, ${colors.gold.light} 50%, ${colors.gold.dark} 100%)`
          }}
        >
          {/* Authentic Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="registrationPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  {/* Islamic star pattern in white */}
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <path d="M0,-15 L4,-4 L15,0 L4,4 L0,15 L-4,4 L-15,0 L-4,-4 Z"/>
                    <circle cx="0" cy="0" r="6" stroke="white" strokeWidth="0.2" opacity="0.3"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.4"/>
                  </g>
                  {/* Corner decorative elements */}
                  <circle cx="12" cy="12" r="1" fill="white" opacity="0.2"/>
                  <circle cx="38" cy="38" r="1" fill="white" opacity="0.2"/>
                  <circle cx="12" cy="38" r="1" fill="white" opacity="0.2"/>
                  <circle cx="38" cy="12" r="1" fill="white" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#registrationPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                <i className="fas fa-bullhorn mr-2"></i>
                Pendaftaran Dibuka
              </div>
              <h3 className="text-4xl font-bold mb-4">
                Pendaftaran Tahun Ajaran {data?.yearInfo?.academicYear} Sudah Dibuka!
              </h3>
              <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Daftarkan putra-putri kesayangan Anda sekarang juga dan berikan mereka pendidikan terbaik 
                yang mengintegrasikan nilai-nilai Islam dengan standar internasional
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-white/95 backdrop-blur-sm text-gray-800 font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center text-lg border border-white/30"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.02)';
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1)';
                  e.target.style.boxShadow = '';
                }}
              >
                <i className="fas fa-user-plus mr-3 group-hover:scale-110 transition-transform"></i>
                <span>Daftar Online Sekarang</span>
              </a>
              
              <a
                href={data?.contact?.registration?.psbUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 backdrop-blur-sm border-2 border-white/50 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center text-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.gold.primary}20 0%, ${colors.gold.light}15 50%, ${colors.gold.dark}20 100%)`
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold.primary}30 0%, ${colors.gold.light}25 50%, ${colors.gold.dark}30 100%)`;
                  e.target.style.borderColor = 'rgba(255,255,255,0.8)';
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.gold.primary}20 0%, ${colors.gold.light}15 50%, ${colors.gold.dark}20 100%)`;
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <i className="fas fa-info-circle mr-3 group-hover:scale-110 transition-transform"></i>
                <span>Info Pendaftaran</span>
              </a>
            </div>
          </div>
        </div>

        {/* Campus Locations - Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {data?.contact?.campuses?.map((campus, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
              style={{
                background: data?.colorScheme?.gradient?.aboutCard || 
                           `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                opacity: opacity.aboutCard / 100
              }}
            >
              {/* Authentic Islamic Card Pattern */}
              <div className="absolute inset-0 opacity-2 rounded-3xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  {/* Corner Islamic geometric motifs - very subtle */}
                  <g transform="translate(15, 15)" stroke={colors.secondary.emerald} strokeWidth="0.08" fill="none" opacity="0.3">
                    <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z"/>
                    <circle cx="0" cy="0" r="3" stroke={colors.secondary.emerald} strokeWidth="0.05" opacity="0.2"/>
                  </g>
                  <g transform="translate(105, 105)" stroke={colors.secondary.cyan} strokeWidth="0.08" fill="none" opacity="0.3">
                    <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z"/>
                    <circle cx="0" cy="0" r="3" stroke={colors.secondary.cyan} strokeWidth="0.05" opacity="0.2"/>
                  </g>
                  {/* Connecting ornamental lines - barely visible */}
                  <path d="M25,15 Q60,30 95,15" stroke={colors.secondary.emerald} strokeWidth="0.05" opacity="0.15" fill="none"/>
                  <path d="M15,95 Q30,60 15,25" stroke={colors.secondary.cyan} strokeWidth="0.05" opacity="0.15" fill="none"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div 
                    className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`,
                      opacity: opacity.aboutIcon / 100
                    }}
                  >
                    <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                    {/* Icon glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{ background: colors.secondary.emerald }}
                    ></div>
                  </div>
                  <div className="ml-4">
                    <h3 
                      className="text-2xl font-bold bg-clip-text text-transparent"
                      style={{ 
                        backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                      }}
                    >
                      {campus.name}
                    </h3>
                    <div 
                      className="w-12 h-0.5 mt-1 rounded-full"
                      style={{ background: colors.secondary.emerald }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">{campus.address}</p>
                <a
                  href={campus.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    background: `linear-gradient(90deg, ${colors.secondary.emerald}15 0%, ${colors.secondary.cyan}15 100%)`,
                    color: colors.secondary.emerald,
                    border: `1px solid ${colors.secondary.emerald}30`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `linear-gradient(90deg, ${colors.secondary.emerald}25 0%, ${colors.secondary.cyan}25 100%)`;
                    e.target.style.borderColor = `${colors.secondary.emerald}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = `linear-gradient(90deg, ${colors.secondary.emerald}15 0%, ${colors.secondary.cyan}15 100%)`;
                    e.target.style.borderColor = `${colors.secondary.emerald}30`;
                  }}
                >
                  <i className="fas fa-external-link-alt mr-2 group-hover:scale-110 transition-transform"></i>
                  <span>Lihat di Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Methods - Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: 'fa-phone', title: 'Telepon', info: '+62 21 xxxx xxxx', index: 0 },
            { icon: 'fa-envelope', title: 'Email', info: 'info@al-wafi.sch.id', index: 1 },
            { icon: 'fab fa-whatsapp', title: 'WhatsApp', info: '+62 8xx xxxx xxxx', index: 2 },
            { icon: 'fa-globe', title: 'Website', info: 'al-wafi.sch.id', index: 3 }
          ].map((contact) => {
            const contactColor = getContactColor(contact.index);
            return (
              <div 
                key={contact.index}
                className="group relative p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm text-center"
                style={{
                  background: data?.colorScheme?.gradient?.aboutCard || 
                             `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                  opacity: opacity.aboutCard / 100
                }}
              >
                <div className="relative z-10">
                  <div 
                    className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-16 h-16 flex items-center justify-center mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${contactColor.primary} 0%, ${contactColor.secondary} 100%)`,
                      opacity: opacity.aboutIcon / 100
                    }}
                  >
                    <i className={`${contact.icon} text-white text-xl`}></i>
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                      style={{ background: contactColor.primary }}
                    ></div>
                  </div>
                  <h4 
                    className="text-lg font-bold mb-2 bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${contactColor.primary} 0%, ${contactColor.secondary} 100%)`
                    }}
                  >
                    {contact.title}
                  </h4>
                  <p className="text-gray-600 font-medium">{contact.info}</p>
                  <div 
                    className="w-12 h-1 mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, ${contactColor.primary} 0%, ${contactColor.secondary} 100%)`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Media - Modern Design */}
        <div className="text-center">
          <div className="mb-12">
            <h3 
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
              }}
            >
              Ikuti Media Sosial Kami
            </h3>
            <p className="text-lg text-gray-600">Dapatkan update terbaru dan informasi menarik dari Al Wafi</p>
            <div 
              className="w-16 h-1 mx-auto mt-4 rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
              }}
            ></div>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { 
                icon: 'fab fa-instagram', 
                url: `https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`,
                color: 'linear-gradient(135deg, #E4405F 0%, #C13584 50%, #833AB4 100%)',
                name: 'Instagram'
              },
              { 
                icon: 'fab fa-youtube', 
                url: 'https://youtube.com/@pesantrenwibs',
                color: '#FF0000',
                name: 'YouTube'
              },
              { 
                icon: 'fab fa-facebook', 
                url: `https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}`,
                color: '#1877F2',
                name: 'Facebook'
              },
              { 
                icon: 'fab fa-tiktok', 
                url: '#',
                color: '#000000',
                name: 'TikTok'
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                style={{ background: social.color }}
                title={social.name}
              >
                <i className={`${social.icon} text-2xl group-hover:scale-110 transition-transform`}></i>
                <div 
                  className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ background: social.color }}
                ></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
