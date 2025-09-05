import React from 'react';

const SDTQ = ({ data }) => {
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

  const teachingConcepts = [
    {
      title: "Kolaborasi dan Komunikasi",
      approach: "Membangun lingkungan yang mendukung kerja sama antar siswa melalui tugas kelompok, diskusi kelas, dan proyek kolaboratif.",
      activities: "Mengadakan permainan edukatif yang memerlukan kerja sama, seperti puzzle kelompok, dan lomba cerdas cermat. Selain itu, menggunakan teknologi seperti forum diskusi online",
      goals: "Mengembangkan keterampilan sosial dan komunikasi yang efektif, serta mengajarkan pentingnya saling membantu dan mendukung",
      color: colors.secondary.emerald
    },
    {
      title: "Akhlaq dan Kemandirian",
      approach: "Menanamkan nilai-nilai Islami dan etika melalui teladan dan pembelajaran langsung",
      activities: "Melaksanakan kegiatan harian seperti salat berjamaah, membaca hadits, dan kisah teladan Nabi Muhammad Shallallahu 'Alaihi Wasallam. Memberikan tanggung jawab kecil kepada siswa, seperti menjaga kebersihan kelas dan tugas piket",
      goals: "Membentuk karakter siswa yang berakhlak mulia dan mandiri, serta mampu bertanggung jawab atas tindakan mereka",
      color: colors.primary.blue
    },
    {
      title: "Love of Learning",
      approach: "Menciptakan lingkungan belajar yang menyenangkan dan menumbuhkan rasa ingin tahu.",
      activities: "Menggunakan metode pembelajaran berbasis proyek dan eksperimen sains sederhana. Memanfaatkan perpustakaan sekolah dan sumber belajar multimedia",
      goals: "Menanamkan kecintaan pada belajar dan eksplorasi pengetahuan, serta mendorong siswa untuk terus belajar sepanjang hidup",
      color: colors.accent.lightBlue
    },
    {
      title: "Setiap Anak Memiliki Kecerdasan Berbeda dan Unik",
      approach: "Menggunakan pendekatan pembelajaran yang sesuai dengan multiple intelligences (kecerdasan majemuk) Howard Gardner",
      activities: "Mengidentifikasi jenis kecerdasan dominan setiap siswa dan menyusun kegiatan yang bervariasi, seperti musik, olahraga, seni, dan keterampilan motorik. Menyediakan waktu untuk eksplorasi minat dan bakat individual",
      goals: "Menghargai dan mengembangkan potensi unik setiap anak, serta memaksimalkan kemampuan mereka dalam berbagai bidang",
      color: colors.primary.purple
    },
    {
      title: "Pendekatan Metode Belajar ALICI (Active Learning and Islamic Character Integrated)",
      approach: "Menggabungkan pembelajaran aktif dengan penguatan karakter Islami.",
      activities: "Mengimplementasikan pembelajaran berbasis aktivitas (active learning) yang melibatkan siswa secara langsung dalam proses belajar, seperti role-playing, simulasi, dan diskusi interaktif. Menerapkan pembiasaan nilai-nilai Islami melalui aktivitas harian, seperti doa bersama sebelum dan sesudah belajar, serta kajian akhlak setiap pekan",
      goals: "Meningkatkan partisipasi aktif siswa dalam pembelajaran dan membentuk karakter Islami yang kokoh",
      color: colors.gold.primary
    }
  ];

  const tahfidzPrograms = [
    {
      title: "Tasmi'",
      description: "Tasmi' adalah kegiatan di mana siswa menyetorkan hafalan Al-Qur'an mereka di depan guru atau penguji. Kegiatan ini dilakukan secara rutin untuk memantau kemajuan hafalan siswa dan memastikan kualitas hafalan yang baik",
      icon: "fas fa-microphone",
      color: colors.secondary.emerald
    },
    {
      title: "Halaqoh Al-Qur'an",
      description: "Halaqoh Al-Qur'an adalah sesi belajar kelompok di mana siswa dibimbing oleh ustadz atau ustadzah dalam membaca dan menghafal Al-Qur'an",
      icon: "fas fa-users",
      color: colors.primary.blue
    },
    {
      title: "Ujian Bersama Masayikh",
      description: "Ujian ini merupakan evaluasi tahfidz yang dilakukan bersama para Masayikh (ulama atau guru besar) untuk menilai sejauh mana kemampuan hafalan dan pemahaman siswa terhadap Al-Qur'an",
      icon: "fas fa-certificate",
      color: colors.accent.lightBlue
    },
    {
      title: "Murojaah Bulanan",
      description: "Murojaah bulanan adalah kegiatan revisi hafalan Al-Qur'an yang dilakukan setiap bulan. Tujuannya adalah untuk memastikan hafalan yang sudah dipelajari tetap kuat dan tidak terlupakan",
      icon: "fas fa-calendar-alt",
      color: colors.primary.purple
    },
    {
      title: "Tahfidz Camp",
      description: "Tahfidz Camp adalah program intensif yang diadakan dalam bentuk perkemahan atau kegiatan luar sekolah yang berfokus pada peningkatan hafalan Al-Qur'an",
      icon: "fas fa-campground",
      color: colors.gold.primary
    }
  ];

  return (
    <section 
      id="sdtq" 
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
            <linearGradient id="sdtqPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.secondary.emerald}/>
              <stop offset="50%" stopColor={colors.primary.blue}/>
              <stop offset="100%" stopColor={colors.gold.primary}/>
            </linearGradient>
          </defs>
          <pattern id="sdtqPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Islamic book and knowledge pattern */}
            <g transform="translate(20, 20)" stroke={colors.secondary.emerald} strokeWidth="0.1" fill="none" opacity="0.3">
              <rect x="-8" y="-6" width="16" height="12" rx="1" stroke={colors.secondary.emerald} strokeWidth="0.08"/>
              <line x1="-6" y1="-3" x2="6" y2="-3" stroke={colors.secondary.emerald} strokeWidth="0.06"/>
              <line x1="-6" y1="0" x2="6" y2="0" stroke={colors.secondary.emerald} strokeWidth="0.06"/>
              <line x1="-6" y1="3" x2="6" y2="3" stroke={colors.secondary.emerald} strokeWidth="0.06"/>
              <circle cx="0" cy="0" r="0.5" fill={colors.secondary.emerald} opacity="0.4"/>
            </g>
            
            {/* Connecting lines */}
            <g stroke={colors.primary.blue} strokeWidth="0.05" opacity="0.2">
              <line x1="32" y1="20" x2="40" y2="20"/>
              <line x1="0" y1="20" x2="8" y2="20"/>
              <line x1="20" y1="0" x2="20" y2="8"/>
              <line x1="20" y1="32" x2="20" y2="40"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#sdtqPattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-1 h-8 rounded-full mr-4"
              style={{ background: colors.secondary.emerald }}
            ></div>
            <span 
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: colors.secondary.emerald }}
            >
              Program Pendidikan
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.secondary.emerald }}
            ></div>
          </div>
          <h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 50%, ${colors.gold.primary} 100%)`
            }}
          >
            SDTQ Al Wafi
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sekolah Dasar Tahfidz Qur'an Al Wafi - Sekolah dasar sunnah terakreditasi A dengan kurikulum holistik dan penguatan nilai-nilai Islam
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 50%, ${colors.gold.primary} 100%)`
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
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    SDTQ AL Wafi (Sekolah Dasar Tahfidz Qur'an Al Wafi) adalah sekolah dasar sunnah yang berada di bawah naungan Yayasan Bina Wafi Indonesia. Terletak di Depok, sekolah ini telah terakreditasi A oleh Dinas Pendidikan Kota Depok.
                  </p>
                  <p>
                    SDTQ AL Wafi menggunakan kurikulum Dinas Pendidikan, Diniyah, dan Al Qur'an, serta memberikan penguatan dalam bahasa Arab dan Inggris. Sekolah ini juga menanamkan nilai-nilai Islam sesuai dengan ajaran Salafus Sholih, menciptakan lingkungan belajar yang holistik dan berorientasi pada nilai-nilai Islami.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=gedung_default.png"
                      alt="Gedung SDTQ Al Wafi"
                      className="w-full h-64 object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400/e2e8f0/64748b?text=SDTQ+Al+Wafi";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Excellence Program Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-sm font-semibold mb-6">
              <i className="fas fa-star mr-2" style={{ color: colors.gold.primary }}></i>
              Excellence Program
            </div>
            <h2 
              className="text-3xl font-bold bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(90deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 100%)`
              }}
            >
              Program Unggulan
            </h2>
          </div>
        </div>

        {/* Teaching Concepts Section */}
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
                  <i className="fas fa-lightbulb mr-2" style={{ color: colors.primary.blue }}></i>
                  Learning Concept
                </div>
                <h2 
                  className="text-3xl font-bold mb-6 bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                  }}
                >
                  Konsep Pengajaran
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachingConcepts.map((concept, index) => (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:-translate-y-2"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? `${concept.color}05` : 'rgba(255,255,255,0.9)' 
                    }}
                  >
                    <div className="mb-4">
                      <h3 
                        className="font-bold text-lg mb-4"
                        style={{ color: concept.color }}
                      >
                        {concept.title}
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold text-gray-800">Pendekatan:</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{concept.approach}</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-800">Aktivitas:</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{concept.activities}</p>
                        </div>
                        
                        <div>
                          <span className="font-semibold text-gray-800">Tujuan:</span>
                          <p className="text-gray-700 leading-relaxed mt-1">{concept.goals}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tahfidz Program Section */}
        <div 
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.secondary.emerald} 0%, ${colors.primary.blue} 50%, ${colors.gold.primary} 100%)`
          }}
        >
          {/* Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="tahfidzPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <rect x="-12" y="-8" width="24" height="16" rx="2" stroke="white" strokeWidth="0.2"/>
                    <line x1="-8" y1="-4" x2="8" y2="-4" stroke="white" strokeWidth="0.15"/>
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="white" strokeWidth="0.15"/>
                    <line x1="-8" y1="4" x2="8" y2="4" stroke="white" strokeWidth="0.15"/>
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.3"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tahfidzPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-book-open mr-2"></i>
                Tahfidz
              </div>
              <h2 className="text-4xl font-bold mb-6">Tahfidz Quran</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
                Program ini adalah inti dari pendidikan di SDTQ AL Wafi, yang bertujuan untuk mengembangkan kemampuan siswa dalam membaca, menghafal, dan memahami Al-Qur'an dengan baik dan benar. Program ini mencakup berbagai kegiatan yang terstruktur untuk memastikan perkembangan tahfidz siswa secara optimal. Metode yang digunakan Iqro' Ustmani
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tahfidzPrograms.map((program, index) => (
                <div 
                  key={index}
                  className="group bg-white/15 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/25 transition-all duration-300 border border-white/20"
                >
                  <div className="text-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <i 
                        className={`${program.icon} text-2xl text-white`}
                      ></i>
                    </div>
                    <h3 className="font-bold text-lg mb-3">{program.title}</h3>
                  </div>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDTQ;
