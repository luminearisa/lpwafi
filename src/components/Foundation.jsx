import React from 'react';

const Foundation = ({ data }) => {
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
      id="foundation"
      className="pt-40 pb-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about ||
          `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Authentic Islamic Geometric Pattern */}
      <div className="absolute inset-0" style={{ opacity: opacity.aboutPattern / 100 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="foundationPatternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary.blue} />
              <stop offset="50%" stopColor={colors.primary.purple} />
              <stop offset="100%" stopColor={colors.primary.indigo} />
            </linearGradient>
          </defs>
          <pattern id="foundationPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Main Islamic star motif - very subtle */}
            <g transform="translate(20, 20)" stroke={colors.primary.blue} strokeWidth="0.1" fill="none" opacity="0.3">
              {/* 8-pointed star (Khatam) */}
              <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z" />
              {/* Inner diamond */}
              <path d="M0,-6 L6,0 L0,6 L-6,0 Z" />
              {/* Center dot */}
              <circle cx="0" cy="0" r="0.5" fill={colors.primary.blue} opacity="0.4" />
            </g>

            {/* Connecting geometric lines - very thin */}
            <g stroke={colors.primary.purple} strokeWidth="0.05" opacity="0.2">
              {/* Horizontal connectors */}
              <line x1="32" y1="20" x2="40" y2="20" />
              <line x1="0" y1="20" x2="8" y2="20" />
              {/* Vertical connectors */}
              <line x1="20" y1="0" x2="20" y2="8" />
              <line x1="20" y1="32" x2="20" y2="40" />
              {/* Diagonal small elements - tiny */}
              <circle cx="10" cy="10" r="0.2" fill={colors.primary.indigo} opacity="0.2" />
              <circle cx="30" cy="30" r="0.2" fill={colors.primary.indigo} opacity="0.2" />
              <circle cx="10" cy="30" r="0.2" fill={colors.primary.indigo} opacity="0.2" />
              <circle cx="30" cy="10" r="0.2" fill={colors.primary.indigo} opacity="0.2" />
            </g>

            {/* Corner ornaments - barely visible */}
            <g transform="translate(10, 10)" stroke={colors.primary.blue} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z" />
            </g>
            <g transform="translate(30, 30)" stroke={colors.primary.blue} strokeWidth="0.05" fill="none" opacity="0.15">
              <path d="M0,-3 L2,0 L0,3 L-2,0 Z" />
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#foundationPattern)" />
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
              Tentang Yayasan
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
            Yayasan Al Sudais Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Al Wafi Islamic Boarding School - Pesantren Sunnah Internasional dengan konsep Holistik, Harmoni, dan Exemplary
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
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-home text-white text-2xl"></i>
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.primary.blue }}
                  ></div>
                </div>
                <div className="ml-4">
                  <h2
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 100%)`
                    }}
                  >
                    Pendahuluan
                  </h2>
                  <div
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.primary.blue }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p><strong>Assalamu'alaikum Wr Wb.</strong></p>
                  <p>
                    Setiap anak adalah pandai dan memiliki potensi kecerdasan berbeda beda tergantung bagaimana lingkungan pendidikan bisa memunculkan kecerdasan setiap anak. Pesantren Al Wafi Islamic Boarding School didirikan untuk memberikan pendampingan kepada santri sesuai dengan minat, bakat dan kecerdasan santri yang dilandasi nilai nilai Al-Quran dan Sunnah.
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

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Orang tua menginginkan pendidikan yang terbaik bagi putra-putrinya dan kami di Pesantren Al Wafi Islamic Boarding School merupakan pesantren sunnah bertaraf internasional siap untuk membentuk generasi yang memiliki akhlaqul karimah.
                </p>
                <p>
                  Pesantren Al Wafi hadir dengan harapan dapat memberikan pendidikan secara menyeluruh (holistic) dan selaras (harmoni) dan memberikan model atau contoh dengan mengintegrasikan berbagai kurikulum baik kurikulum diniah, kurikulum nasional Al Quran dan sunnah, sains dan teknologi serta muatan lifeskill.
                </p>
                <p>
                  Dengan sistem pesantren (islamic boarding) dan didukung staf pengajar yang professional, berdedikasi tinggi, pengajar asing (native), alumni dari Timur Tengah dan pengajar dari lulusan PTN akan mengantarkan santri santri untuk mendapatkan pendidikan di kampus yang diinginkan.
                </p>
                <p>
                  Kami di Pesantren Al Wafi IBS menyakini bahwa pendidikan terbaik tidak akan bisa terwujud tanpa dukungan orang tua dan keluarga santri. Oleh karena itu, jaringan komunikasi dan layanan informasi santri menjadi salah satu prioritas kami.
                </p>
                <p><strong>Wassalamu'alaikum Wr Wb.</strong></p>
              </div>
            </div>
          </div>
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
                    Sejarah Pesantren Al Wafi
                  </h2>
                  <div
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.secondary.emerald }}
                  ></div>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Pesantren Al Wafi hadir untuk memenuhi kebutuhan masyarakat yang menginginkan pendidikan islam modern bertaraf internasional. Pesantren Al Wafi dibangun di atas tanah seluas 3.405 M² dengan persil nomer 23.D.I Kohir No. 964, surat ukur tanah Gs. No. 1186/1977.
                </p>

                <div
                  className="p-6 rounded-2xl border-l-4"
                  style={{
                    backgroundColor: `${colors.accent.lightBlue}10`,
                    borderColor: colors.accent.lightBlue
                  }}
                >
                  <p className="font-semibold text-gray-800">
                    Peletakan batu pertama pembangunan SMP dan SMA Al Wafi Islamic Boarding School dilakukan oleh Gubernur Jawa Barat Bapak Ahmad Heryawan pada Hari Jumat tanggal <strong>03 Februari tahun 2017</strong>.
                  </p>
                </div>

                <p>
                  Tanah tempat didirikannya Al Wafi ini adalah merupakan tanah wakaf yang diserahkan oleh Ibu Lusmiati Loebis yang lahir di Solo. 06 Januari 1939 dengan akta ikrar wakaf nomer KK.10.01/39/BA.03/82/XI/2011 di depan Kepala Kantor Urusan Agama Kecamatan Tajurhalang.
                </p>

                <p>
                  SMP Al Wafi adalah lembaga pendidikan yang berada dibawah naungan <strong>Yayasan Al-Sudais Indonesia</strong> yang didirikan pada tanggal <strong>21 Desember tahun 2016</strong> dengan akta pendirian no.12 di depan Notaris Eva Junaida, Sarjana Hukum.
                </p>

                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary.blue}10 0%, ${colors.primary.purple}10 100%)`
                  }}
                >
                  <h4 className="font-bold text-gray-800 mb-4">Tujuan Pendirian:</h4>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>Mencerdaskan anak bangsa, menguatkan jiwa nasionalis dan patriotisme, dan dapat mengokohkan pondasi agama generasi muda sesuai dengan Al Qur'an dan Sunnah</li>
                    <li>Mengembangkan pendidikan bertaraf internasional dari segi kurikulum, tenaga pendidik professional dari dalam dan luar negeri & sarana prasarana modern</li>
                    <li>Memberikan dan berkontribusi kepada masyarakat sekitar, baik dalam kesejahteraan ekonomi maupun peningkatan kerohanian</li>
                  </ol>
                </div>

                <p>
                  Sambutan baik masyarakat dengan meningkatnya jumlah santri dan kebutuhan masyarakat tentang pendidikan berbasis pesantren modern, Yayasan Al Sudais Indonesia sampai saat ini menyelenggarakan pendidikan dari <strong>SDTQ, SMP Al Wafi IBS, SMA Al Wafi IBS dan Sekolah Tinggi Ilmu Tarbiah Al Wafi</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Modern Cards */}
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
                    Visi Al Wafi
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
                  "Membentuk generasi muslim yang memiliki kesadaran agama yang tinggi dan memiliki sikap positif terhadap globalisasi dengan mengikuti Nabi Muhammad Shallallahu alaihi wasallam, sahabat, dan Ulama ahlusunnah"
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
                    Misi Al Wafi
                  </h3>
                  <div
                    className="w-12 h-0.5 mt-1 rounded-full"
                    style={{ background: colors.accent.lightBlue }}
                  ></div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Menyelenggarakan pendidikan yang berkualitas dan berstandar internasional (world class) dengan berdasarkan Alquran dan sunnah sesuai dengan pemahaman ulama ahlu sunnah.",
                  "Menyelenggarakan pendidikan berbasis akhlaqul karimah yang terintegrasi dalam kehidupan sehari hari.",
                  "Mencetak peserta didik dalam bermuamalah mulia dengan lingkungan dengan prinsip leaderpreneurship",
                  "Membentuk karakter peserta didik yang unggul dalam menyikapi perubahan global yang terjadi berdasarkan Al Quran dan Assunnah sesuai pemahaman ulama ahlu sunnah"
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

        {/* Structure Section */}
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
              <div className="flex items-center justify-center mb-8">
                <div
                  className="relative p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary.purple} 0%, ${colors.primary.indigo} 100%)`,
                    opacity: opacity.aboutIcon / 100
                  }}
                >
                  <i className="fas fa-sitemap text-white text-2xl"></i>
                  <div
                    className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: colors.primary.purple }}
                  ></div>
                </div>
                <h2
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${colors.primary.purple} 0%, ${colors.primary.indigo} 100%)`
                  }}
                >
                  Struktur Organisasi Yayasan
                </h2>
              </div>

              <div className="text-center">
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 shadow-2xl">
                  <img
                    src="https://al-wafi.sch.id/src/images/wp/wafi-img-data=struktur_yayasan.png"
                    alt="Struktur Organisasi Yayasan Al Sudais Indonesia"
                    className="w-full max-w-4xl mx-auto rounded-2xl"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x600/e2e8f0/64748b?text=Struktur+Organisasi+Yayasan";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className="relative p-12 rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
          }}
        >
          {/* Authentic Islamic Background Pattern */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="valuesPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  {/* Islamic star pattern in white */}
                  <g transform="translate(25, 25)" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4">
                    <path d="M0,-15 L4,-4 L15,0 L4,4 L0,15 L-4,4 L-15,0 L-4,-4 Z" />
                    <circle cx="0" cy="0" r="6" stroke="white" strokeWidth="0.2" opacity="0.3" />
                    <circle cx="0" cy="0" r="2" fill="white" opacity="0.4" />
                  </g>
                  {/* Corner decorative elements */}
                  <circle cx="12" cy="12" r="1" fill="white" opacity="0.2" />
                  <circle cx="38" cy="38" r="1" fill="white" opacity="0.2" />
                  <circle cx="12" cy="38" r="1" fill="white" opacity="0.2" />
                  <circle cx="38" cy="12" r="1" fill="white" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#valuesPattern)" />
            </svg>
          </div>

          <div className="relative z-10 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-star mr-2"></i>
                Nilai-Nilai Al Wafi
              </div>
              <h2 className="text-4xl font-bold mb-4">Value Al Wafi</h2>
              <p className="text-xl opacity-90">Nilai-nilai fundamental yang menjadi landasan pendidikan di Al Wafi</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { letter: 'A', word: 'Amanah', description: 'Dapat dipercaya dalam menjalankan tugas' },
                { letter: 'L', word: 'Lilah', description: 'Mengharap ridha Allah dalam setiap amal' },
                { letter: 'W', word: 'Wafi', description: 'Menepati janji dan komitmen' },
                { letter: 'A', word: 'Akhlaq', description: 'Berakhlak mulia dalam kehidupan' },
                { letter: 'F', word: 'Fathonah', description: 'Cerdas dan bijaksana dalam bertindak' },
                { letter: 'I', word: 'International mindset', description: 'Berwawasan global dengan akar Islam' }
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/15 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/25 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      {value.letter}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{value.word}</h4>
                      <p className="text-sm opacity-80">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
