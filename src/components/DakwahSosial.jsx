import React from 'react';

const DakwahSosial = ({ data }) => {
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

  return (
    <section 
      id="dakwah-sosial" 
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
            <linearGradient id="dakwahPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary.blue}/>
              <stop offset="50%" stopColor={colors.primary.purple}/>
              <stop offset="100%" stopColor={colors.primary.indigo}/>
            </linearGradient>
          </defs>
          <pattern id="dakwahPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Main Islamic star motif */}
            <g transform="translate(20, 20)" stroke={colors.primary.blue} strokeWidth="0.1" fill="none" opacity="0.3">
              <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z"/>
              <path d="M0,-6 L6,0 L0,6 L-6,0 Z"/>
              <circle cx="0" cy="0" r="0.5" fill={colors.primary.blue} opacity="0.4"/>
            </g>
            
            {/* Connecting lines */}
            <g stroke={colors.primary.purple} strokeWidth="0.05" opacity="0.2">
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dakwahPattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
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
              Tentang Kami
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.primary.blue }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            Dakwah & Sosial
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lembaga Dakwah Al Wafi - Penyebaran dan pengajaran ajaran Islam untuk meningkatkan pemahaman dan praktik agama di masyarakat
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          ></div>
        </div>

        {/* Introduction Section */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Lembaga Dakwah Al Wafi adalah organisasi yang berfokus pada penyebaran dan pengajaran ajaran Islam, serta pelaksanaan kegiatan dakwah untuk meningkatkan pemahaman dan praktik agama di kalangan masyarakat. Lembaga ini bertujuan untuk memperkenalkan dan menguatkan ajaran Islam sesuai dengan prinsip-prinsip Al-Qur'an dan Sunnah, serta menjawab berbagai pertanyaan dan tantangan yang dihadapi oleh umat Islam dan masyarakat umum.
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

        {/* Vision Section */}
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
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.gold.primary} 0%, ${colors.gold.light} 100%)`
                    }}
                  >
                    Visi Dakwah Al Wafi IBS
                  </h2>
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
                <p className="text-gray-700 leading-relaxed font-medium text-lg">
                  Mewujudkan masyarakat yang berpengetahuan, dan berkomitmen terhadap ajaran Islam yang murni serta berbekal dalam menghadapi globalisasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
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
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                    }}
                  >
                    Misi Dakwah Al Wafi IBS
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Menyelenggarakan pendalaman ilmu da'i dan keterampilan dakwah melalui pelatihan, studi lanjutan, dan konsultasi dengan ulama",
                  "Membuat kurikulum dalam dakwah yang mengajak kepada Al Quran dan Sunnah sesuai pemahaman para salafushalih",
                  "Menjadi wadah berhimpunnya da'i",
                  "Memanfaatkan teknologi digital, media sosial, dan platform online untuk menyebarluaskan ajaran Islam secara luas dan efektif",
                  "Mendirikan dan mendukung lembaga-lembaga pendidikan Islam, seperti pesantren, madrasah, dan pusat studi Islam, untuk memastikan akses yang lebih luas terhadap pendidikan agama berkualitas"
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

        {/* Internal Dakwah Section */}
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
                  <i className="fas fa-mosque text-white text-2xl"></i>
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
                    Dakwah Internal Al Wafi
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                <p>
                  Dalam konteks pesantren Al Wafi, peran dakwah memiliki kontribusi signifikan terhadap pengembangan spiritual dan intelektual para santri serta masyarakat sekitar. Salah satu bentuk kegiatan dakwah internal yang dijalankan adalah <strong>kajian rutin Kamis Bada Maghrib</strong> bersama Ustadz Ali. Berikut adalah penjelasan mengenai peran dan manfaat dari kegiatan ini:
                </p>
              </div>

              {/* Penguatan Ilmu Agama */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Penguatan Ilmu Agama</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.primary.blue}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Kajian Rutin</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Kegiatan kajian rutin Kamis Bada Maghrib merupakan waktu khusus untuk membahas topik-topik agama secara mendalam. Ini membantu santri memperdalam pengetahuan mereka tentang ajaran Islam, baik dari segi aqidah, fiqh, akhlak, maupun tafsir.
                    </p>
                  </div>
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.primary.purple}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Pembelajaran Berkelanjutan</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Dengan adanya kajian rutin, santri dan masyarakat dapat terus belajar dan memperbaharui pemahaman mereka tentang ajaran Islam. Ini juga memperkuat fondasi keagamaan mereka.
                    </p>
                  </div>
                </div>
              </div>

              {/* Penanaman Akhlak */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Penanaman Akhlak dan Etika</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.secondary.emerald}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Penyampaian Akhlak</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Kajian ini tidak hanya fokus pada aspek ilmiah tetapi juga pada penanaman akhlak dan etika Islam. Ustadz Ali akan memberikan penjelasan tentang bagaimana menerapkan nilai-nilai Islam dalam kehidupan sehari-hari.
                    </p>
                  </div>
                  <div 
                    className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: `${colors.secondary.cyan}05` }}
                  >
                    <h4 className="font-bold text-lg mb-3 text-gray-800">Contoh Teladan</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Ustadz Ali berperan sebagai teladan dalam pengamalan akhlak dan etika Islam, sehingga santri dapat mencontoh sikap dan perilaku yang baik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kajian Al Wafi Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
          }}
        >
          {/* Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="kajianPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <path d="M0,-15 L4,-4 L15,0 L4,4 L0,15 L-4,4 L-15,0 L-4,-4 Z"/>
                    <circle cx="0" cy="0" r="6" stroke="white" strokeWidth="0.2" opacity="0.3"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.4"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#kajianPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-book-open mr-2"></i>
                Islamic Study
              </div>
              <h2 className="text-4xl font-bold mb-4">Kajian Al Wafi</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <p className="text-lg leading-relaxed opacity-95">
                  Kajian-kajian yang dilaksanakan di pesantren Al Wafi mencakup topik-topik fundamental dalam aqidah, asas beragama, manhaj, dan adab beinteraksi. Pembahasan ini dilakukan dengan menggunakan kitab-kitab yang kredibel dan bermanfaat, seperti <strong>"4 Qaidah Penting dalam Islam"</strong>, <strong>"3 Asas Beragama"</strong>, <strong>"Ushul Sunnah"</strong> oleh Imam Ahmad, dan <strong>"Al-Mandhumah Al-Mimiyyah"</strong>. 
                </p>
                <div className="mt-6 space-y-4">
                  <h4 className="font-bold text-xl mb-4">Tujuan Kajian:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                      <span>Memperkuat pemahaman santri tentang ajaran Islam</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                      <span>Meningkatkan kualitas ibadah dan akhlak santri baik kepada orang tua, guru maupun rekan sebayanya</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                      <span>Memberikan dasar yang kokoh dalam beragama</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DakwahSosial;
