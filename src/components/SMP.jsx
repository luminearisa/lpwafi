import React from 'react';

const SMP = ({ data }) => {
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

  const characteristics = [
    "Religiusitas berdasarkan Al Quran dan As Sunnah",
    "Kejujuran dan integritas dalam setiap tindakan",
    "Toleransi dan sikap menghargai perbedaan",
    "Disiplin dan tanggung jawab",
    "Kerja keras dan dedikasi",
    "Kemandirian dan kepercayaan diri",
    "Kreativitas dan inovasi",
    "Sikap demokratis dan musyawarah",
    "Cinta tanah air dan patriotisme",
    "Kemampuan komunikatif yang efektif",
    "Kepedulian terhadap lingkungan",
    "Literasi dan pemahaman yang mendalam"
  ];

  const missionPoints = [
    "Menyelenggarakan pendidikan yang berkualitas dan berstandar internasional (world class) dengan berdasarkan Al-Qur'an dan Sunnah sesuai dengan pemahaman salafusshalih",
    "Menyelenggarakan pendidikan berbasis akhlaqul karimah yang terintegrasi dalam kehidupan sehari-hari",
    "Mencetak peserta didik dalam bermuamalah mulia dengan lingkungan dengan prinsip leaderpreneuship",
    "Membentuk karakter peserta didik yang unggul dalam menyikapi perubahan global yang terjadi berdasarkan Al-Qur'an dan As-Sunnah sesuai dengan pemahaman Salafusshalih",
    "Memiliki wawasan yang luas, peka terhadap perubahan yang terjadi",
    "Membangun jiwa kepemimpinan yang bertanggung jawab, amanah serta peduli terhadap alam dan lingkungan hidup",
    "Kemahiran menyelesaikan masalah, mandiri, kreatif dan mengembangkan teknologi",
    "Menciptakan komunikasi yang baik dengan stakeholder di dalam maupun luar negeri",
    "Memiliki lulusan yang berkualitas dan berintegritas sesuai dengan tuntutan abad 21"
  ];

  return (
    <section 
      id="smp" 
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
            <linearGradient id="smpPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary.blue}/>
              <stop offset="50%" stopColor={colors.accent.lightBlue}/>
              <stop offset="100%" stopColor={colors.primary.indigo}/>
            </linearGradient>
          </defs>
          <pattern id="smpPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Islamic geometric pattern for education */}
            <g transform="translate(20, 20)" stroke={colors.primary.blue} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* Hexagonal pattern representing unity and strength */}
              <path d="M0,-10 L8.66,-5 L8.66,5 L0,10 L-8.66,5 L-8.66,-5 Z"/>
              {/* Inner hexagon */}
              <path d="M0,-5 L4.33,-2.5 L4.33,2.5 L0,5 L-4.33,2.5 L-4.33,-2.5 Z"/>
              {/* Center point */}
              <circle cx="0" cy="0" r="0.8" fill={colors.primary.blue} opacity="0.4"/>
            </g>
            
            {/* Connecting lines */}
            <g stroke={colors.accent.lightBlue} strokeWidth="0.05" opacity="0.2">
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#smpPattern)"/>
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
              Program Pendidikan
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.primary.blue }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.accent.lightBlue} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            SMP Al Wafi
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Islamic Boarding School - Membentuk generasi muslim yang unggul dengan karakter islami dan wawasan global
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.accent.lightBlue} 50%, ${colors.primary.indigo} 100%)`
            }}
          ></div>
        </div>

        {/* Characteristics Section */}
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
              <div className="flex items-center mb-8">
                <div 
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.accent.lightBlue} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-users text-white text-2xl"></i>
                  <div 
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.primary.blue }}
                  ></div>
                </div>
                <div className="ml-4">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-semibold mb-2">
                    <i className="fas fa-star mr-2" style={{ color: colors.primary.blue }}></i>
                    Characteristics
                  </div>
                  <h2 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.accent.lightBlue} 100%)`
                    }}
                  >
                    Karakteristik SMP
                  </h2>
                  <div 
                    className="w-12 h-0.5 mt-2 rounded-full"
                    style={{ background: colors.primary.blue }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Untuk membentuk karakter yang ideal, seseorang harus mengintegrasikan berbagai nilai penting. Religiusitas berdasarkan Al Quran dan As Sunnah menjadi dasar moral yang kuat, sementara kejujuran, toleransi, dan disiplin mendukung hubungan yang harmonis.
                  </p>
                  <p>
                    Kerja keras, kemandirian, dan kreativitas diperlukan untuk mencapai tujuan, sementara sikap demokratis dan cinta tanah air mencerminkan rasa kebersamaan dan patriotisme. Kemampuan komunikatif memfasilitasi interaksi efektif, dan kepedulian terhadap lingkungan serta sosial menunjukkan tanggung jawab terhadap masyarakat.
                  </p>
                  <p>
                    Literasi yang baik memperkuat pemahaman, dan pendekatan <strong>SMART (Specific, Measurable, Achievable, Relevant, Time-bound)</strong> memastikan pencapaian tujuan yang jelas dan terukur.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_sma.webp"
                      alt="Gedung SMP Al Wafi"
                      className="w-full h-64 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/e2e8f0/64748b?text=SMP+Al+Wafi";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Character Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {characteristics.map((char, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-200 hover:-translate-y-1"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? `${colors.primary.blue}05` : 'rgba(255,255,255,0.9)' 
                    }}
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform"
                        style={{ background: colors.primary.blue }}
                      >
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">{char}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div 
            className="group relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm"
            style={{
              background: data?.colorScheme?.gradient?.aboutCard || 
                         `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
              opacity: opacity.aboutCard / 100
            }}
          >
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-sm font-semibold mb-6">
                  <i className="fas fa-eye mr-2" style={{ color: colors.secondary.emerald }}></i>
                  Vision
                </div>
                <h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.secondary.teal} 100%)`
                  }}
                >
                  Visi SMP Al Wafi Islamic Boarding School
                </h2>
              </div>
              
              <div 
                className="p-8 rounded-2xl border-l-4 text-center"
                style={{ 
                  backgroundColor: `${colors.secondary.emerald}10`,
                  borderColor: colors.secondary.emerald
                }}
              >
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  "Membentuk generasi muslim yang memiliki kesadaran agama yang tinggi dan memiliki sikap positif terhadap globalisasi dengan mengikuti Nabi Muhammad Shallallahu Alaihi Wa'sallam, sahabat, & Ulama Ahlusunnah"
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
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold mb-6">
                  <i className="fas fa-bullseye mr-2" style={{ color: colors.accent.lightBlue }}></i>
                  Mission
                </div>
                <h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.accent.lightBlue} 0%, ${colors.accent.lightPurple} 100%)`
                  }}
                >
                  Misi SMP Al Wafi Islamic Boarding School
                </h2>
              </div>

              <div className="space-y-4">
                {missionPoints.map((mission, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-200 hover:-translate-y-1 flex items-start"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform flex-shrink-0"
                      style={{ background: colors.accent.lightBlue }}
                    >
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.gold.primary} 0%, ${colors.gold.light} 50%, ${colors.gold.dark} 100%)`
          }}
        >
          {/* Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="curriculumPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    {/* Book pattern representing curriculum */}
                    <rect x="-12" y="-8" width="24" height="16" rx="2" stroke="white" strokeWidth="0.2"/>
                    <line x1="-8" y1="-4" x2="8" y2="-4" stroke="white" strokeWidth="0.15"/>
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="white" strokeWidth="0.15"/>
                    <line x1="-8" y1="4" x2="8" y2="4" stroke="white" strokeWidth="0.15"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.3"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#curriculumPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-graduation-cap mr-2"></i>
                Curriculum
              </div>
              <h2 className="text-4xl font-bold mb-6">Kurikulum Merdeka</h2>
            </div>
            
            <div 
              className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <p className="text-lg opacity-90 leading-relaxed text-center max-w-4xl mx-auto">
                Kurikulum Merdeka adalah kurikulum dengan pembelajaran intrakurikuler yang beragam di mana konten akan lebih optimal agar peserta didik memiliki cukup waktu untuk mendalami konsep dan menguatkan kompetensi. Guru memiliki keleluasaan untuk memilih berbagai perangkat ajar sehingga pembelajaran dapat disesuaikan dengan kebutuhan belajar dan minat peserta didik.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-book text-2xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">Pembelajaran Optimal</h4>
                  <p className="text-sm opacity-90">Konten pembelajaran yang beragam dan mendalam</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-2xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">Fleksibilitas Guru</h4>
                  <p className="text-sm opacity-90">Kebebasan memilih perangkat ajar</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-target text-2xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">Sesuai Kebutuhan</h4>
                  <p className="text-sm opacity-90">Disesuaikan dengan minat peserta didik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMP;
