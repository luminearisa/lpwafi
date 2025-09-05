import React from 'react';

const UPZ = ({ data }) => {
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

  const pilarPrograms = [
    {
      title: "Al Wafi Ta'awun",
      description: "(Pembangunan - Wakaf)",
      icon: "fas fa-hands-helping",
      color: colors.secondary.emerald
    },
    {
      title: "Al Wafi Tasqif",
      description: "(Program Pendidikan)",
      icon: "fas fa-graduation-cap",
      color: colors.primary.blue
    },
    {
      title: "Al Wafi Tafaquh",
      description: "(Program Dakwah)",
      icon: "fas fa-mosque",
      color: colors.primary.purple
    },
    {
      title: "Al Wafi Tabarru'",
      description: "(Program Kemanusiaan)",
      icon: "fas fa-heart",
      color: colors.accent.lightBlue
    },
    {
      title: "Al Wafi Ta'atuf",
      description: "(Program Sosial)",
      icon: "fas fa-users",
      color: colors.secondary.cyan
    },
    {
      title: "Al Wafi Tadawul",
      description: "(Program Ekonomi)",
      icon: "fas fa-chart-line",
      color: colors.gold.primary
    }
  ];

  return (
    <section 
      id="upz" 
      className="pt-40 pb-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about || 
                   `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Islamic Geometric Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity.aboutPattern / 100 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="upzPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.gold.primary}/>
              <stop offset="50%" stopColor={colors.secondary.emerald}/>
              <stop offset="100%" stopColor={colors.primary.blue}/>
            </linearGradient>
          </defs>
          <pattern id="upzPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Islamic crescent and star pattern */}
            <g transform="translate(20, 20)" stroke={colors.gold.primary} strokeWidth="0.1" fill="none" opacity="0.3">
              <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10 Z"/>
              <circle cx="3" cy="-8" r="2" stroke={colors.gold.primary} strokeWidth="0.08" opacity="0.4"/>
              <circle cx="0" cy="0" r="0.5" fill={colors.gold.primary} opacity="0.4"/>
            </g>
            
            {/* Connecting geometric elements */}
            <g stroke={colors.secondary.emerald} strokeWidth="0.05" opacity="0.2">
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#upzPattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full mr-4"
              style={{ background: colors.gold.primary }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.gold.primary }}
            >
              Tentang Kami
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.gold.primary }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.gold.primary} 0%, ${colors.secondary.emerald} 50%, ${colors.primary.blue} 100%)`
            }}
          >
            Unit Pelayanan Zakat
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            UPZ Al Wafi - Lembaga filantropi Islam yang mengemban tanggung jawab sebagai pengelola zakat di bawah pengawasan BAZNAS Kota Depok
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.gold.primary} 0%, ${colors.secondary.emerald} 50%, ${colors.primary.blue} 100%)`
            }}
          ></div>
        </div>

        {/* History Section */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-history text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.cyan} 100%)`
                    }}
                  >
                    Sejarah Singkat
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Unit Pelayanan Zakat Al Wafi</strong> adalah lembaga yang mengemban tanggung jawab sebagai pengelola zakat dibawah pengawasan BAZNAS Kota Depok yang dirintis pada bulan Muharram 1446 H / Agustus 2024.
                  </p>
                  <p>
                    UPZ Al Wafi lahir dari kesadaran akan besarnya potensi ZISWAF yang dimiliki oleh keluarga besar Yayasan Al Wafi beserta mitranya. Melihat potensi itu, K.H. Dr. Ali Saman Hasan, Lc., LL.B., MA., selaku direktur Yayasan memprakarsai berdirinya UPZ Al Wafi sebagai wujud komitmen dalam mengelola dan memberdayakan potensi zakat, infak, sedekah, dan wakaf untuk kemaslahatan umat.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                      alt="Gedung Al Wafi"
                      className="w-full h-64 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/e2e8f0/64748b?text=Al+Wafi+Building";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pilar Program Section */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                  }}
                >
                  Pilar Program
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  UPZ Al Wafi bernaung dibawah Yayasan Al-Sudais Indonesia, berkomitmen serta berfokus pada enam pilar program yang dirancang untuk membangun kemandirian umat. Ke-enam pilar program ini diantaranya:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pilarPrograms.map((program, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                        style={{ background: `${program.color}15` }}
                      >
                        <i 
                          className={`${program.icon} text-2xl`}
                          style={{ color: program.color }}
                        ></i>
                      </div>
                      <h3 
                        className="font-bold text-lg mb-2"
                        style={{ color: program.color }}
                      >
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.gold.primary} 0%, ${colors.gold.light} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-eye text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.gold.primary }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h3 
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.gold.primary} 0%, ${colors.gold.light} 100%)`
                    }}
                  >
                    Visi Unit Pelayanan Zakat
                  </h3>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.gold.primary }}
                  ></div>
                </div>
              </div>
              <div 
                className="p-6 rounded-2xl border-l-4"
                style={{ 
                  backgroundColor: `${colors.gold.primary}10`,
                  borderColor: colors.gold.primary
                }}
              >
                <p className="text-gray-700 leading-relaxed font-medium">
                  Mewujudkan lembaga filantropi Islam internasional yang profesional dan terpercaya dalam mengelola dana sosial Islam untuk pemberdayaan masyarakat.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-bullseye text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h3 
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                    }}
                  >
                    Misi Unit Pelayanan Zakat
                  </h3>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Mengembangkan potensi manfaat ZIS dan CSR secara maksimal dengan program strategis",
                  "Berkolaborasi bersama mitra dalam negri maupun luar negri dan berperan aktif dalam peningkatan kualitas lembaga pengelola zakat",
                  "Melaksanakan kebijakan tata kelola zakat, infak, sedekah, dan CSR sesuai kaidah Syariah dan Regulasi NKRI"
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover:scale-110 transition-transform"
                      style={{ background: colors.accent.lightBlue }}
                    >
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden text-center"
          style={{
            background: `linear-gradient(135deg, ${colors.gold.primary} 0%, ${colors.secondary.emerald} 50%, ${colors.primary.blue} 100%)`
          }}
        >
          {/* Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="ctaPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10 Z"/>
                    <circle cx="3" cy="-8" r="2" stroke="white" strokeWidth="0.2" opacity="0.3"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.4"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
              <i className="fas fa-hand-holding-heart mr-2"></i>
              Unit Pelayanan Zakat
            </div>
            <h2 className="text-4xl font-bold mb-4">Bersama Membangun Kemandirian Umat</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              UPZ Al Wafi berkomitmen mengelola dan memberdayakan potensi zakat, infak, sedekah, dan wakaf untuk kemaslahatan umat dengan transparansi dan profesionalisme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPZ;
