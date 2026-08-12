import React, { useState, useEffect, useRef } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  Graticule
} from 'react-simple-maps';
import { createPortal } from 'react-dom';

const geoUrl = '/features.json';

const alumniData = [
  { name: "ROYYAN FARHATIN", acceptances: [
      { university: "Universitas Indonesia", major: "Hubungan Internasional", path: "SNBP" },
      { university: "Long Island University", major: "Finance", path: "Beasiswa" },
      { university: "Singapore Management University", major: "Political Science", path: "Beasiswa" }
  ]},
  { name: "KEISYALANA RAMADHANI", acceptances: [ { university: "Universitas Indonesia", major: "Ilmu Ekonomi Islam", path: "Talent Scouting" } ]},
  { name: "KAMILIA NADIN KRISNAHADI", acceptances: [ { university: "Universitas Indonesia", major: "Sastra Inggris", path: "SNBP" } ]},
  { name: "ZUHRAH WINY FATAH", acceptances: [ { university: "Universitas Indonesia", major: "Bisnis Kreatif", path: "PPKB" } ]},
  { name: "NUR AZIZAH", acceptances: [ { university: "Universitas Indonesia", major: "Sastra Arab", path: "PPKB" } ]},
  { name: "HANIF MUBAROK", acceptances: [ { university: "Universitas Indonesia", major: "Teknik Elektro", path: "SNBT" } ]},
  { name: "MUHAMMAD FAUZAN SIDDIQ", acceptances: [
      { university: "Universitas Indonesia", major: "Teknik Bioproses", path: "SIMAK KKI" },
      { university: "University Technology Malaysia", major: "Teknik Bioproses", path: "Mandiri" }
  ]},
  { name: "ZHAFIRA RAHMANIA KANATA", acceptances: [ { university: "Institut Teknologi Bandung", major: "FSRD", path: "SNBT" } ]},
  { name: "JESSICA CHANDRA SURAWAN", acceptances: [ { university: "Institut Teknologi Bandung", major: "STEI-K", path: "IUP" } ]},
  { name: "KENZIE PRAMATYA AUFA", acceptances: [
      { university: "Institut Teknologi Bandung", major: "FMIPA Fisika", path: "Mandiri" },
      { university: "Universitas Padjadjaran", major: "Fisika", path: "SNBT" }
  ]},
  { name: "IKMAL BAIZAN RASULLI", acceptances: [ { university: "Universitas Padjadjaran", major: "Ekonomi Islam", path: "SNBP" } ]},
  { name: "R. MUHAMMAD RAFI ZIDANE", acceptances: [ { university: "Universitas Padjadjaran", major: "Ilmu Peternakan", path: "SNBP" } ]},
  { name: "DIANDRA HAZEL ATHAYA", acceptances: [ { university: "Universitas Gadjah Mada", major: "Teknologi Industri Pertanian", path: "SNBT" } ]},
  { name: "FADLAN AZMI SUSILO", acceptances: [ { university: "Institut Pertanian Bogor", major: "Ilmu Ekonomi Syariah", path: "SNBP" } ]},
  { name: "LIYANA PUTRI PRASTIAWAN", acceptances: [ { university: "Institut Pertanian Bogor", major: "Ilmu Ekonomi Syariah", path: "SNBP" } ]},
  { name: "LANA MALIKA HEYSSA", acceptances: [ { university: "Institut Pertanian Bogor", major: "Teknologi Pangan", path: "IUP" } ]},
  { name: "MUHAMMAD FARREL KAYZAN", acceptances: [ { university: "Institut Pertanian Bogor", major: "Bisnis", path: "IUP" } ]},
  { name: "AURUNNISA MARTHA UTAMI", acceptances: [
      { university: "Institut Teknologi Sepuluh Nopember", major: "Teknologi Kedokteran", path: "Mandiri" },
      { university: "Universitas Jendral Achmad Yani", major: "Pendidikan Dokter", path: "Mandiri" }
  ]},
  { name: "MUHAMMAD DAVAN RAQILL BASTIAN", acceptances: [ { university: "Institut Teknologi Sepuluh Nopember", major: "Teknik Industri", path: "IUP" } ]},
  { name: "MUHAMMAD AZAM AL-FAUZI", acceptances: [
      { university: "Institut Teknologi Sepuluh Nopember", major: "Teknik Sipil", path: "Mandiri" },
      { university: "Universitas Padjadjaran", major: "Teknologi Industri Kimia", path: "Mandiri Rapor" },
      { university: "Universitas Trisakti", major: "Teknik Sipil", path: "Mandiri Prestasi" }
  ]},
  { name: "DRAJA MULYOMUKTI DAWEAN", acceptances: [ { university: "Universitas Airlangga", major: "Ilmu Ekonomi", path: "Mandiri Prestasi" } ]},
  { name: "FATIH DHIYAULHAQ", acceptances: [ { university: "Universitas Brawijaya", major: "Teknik Industri", path: "IUP" } ]},
  { name: "DINAN IMAMUL KHAIR", acceptances: [ { university: "Universitas Brawijaya", major: "Agroekoteknologi", path: "Mandiri Rapor" } ]},
  { name: "MUHAMMAD FARRELL ALVARES", acceptances: [ { university: "Universitas Brawijaya", major: "Hukum", path: "Mandiri Rapor" } ]},
  { name: "RAHMAT DINO", acceptances: [ { university: "Universitas Brawijaya", major: "Ekonomi Islam", path: "Mandiri Rapor" } ]},
  { name: "FATHIR AZFI AHMAD", acceptances: [
      { university: "Universitas Brawijaya", major: "Teknik Mesin", path: "Mandiri Rapor" },
      { university: "Universitas Airlangga", major: "Teknologi Sains Data", path: "Mandiri" },
      { university: "Universitas Padjadjaran", major: "Perikanan", path: "Mandiri Rapor" }
  ]},
  { name: "KEMAS SHIDQI ARIZTA KAMIL", acceptances: [
      { university: "Universitas Brawijaya", major: "Biologi", path: "Mandiri Rapor" },
      { university: "Universitas Negeri Malang", major: "Akuntansi", path: "Mandiri" },
      { university: "Univesitas Sebelas Maret", major: "Biologi", path: "Mandiri" }
  ]},
  { name: "MUHAMMAD ARVILLA NUR IHSAN", acceptances: [
      { university: "Universitas Brawijaya", major: "Arsitektur", path: "Mandiri Rapor" },
      { university: "Universitas Muhammadiyah Jakarta", major: "Kedokteran", path: "Rapor" }
  ]},
  { name: "EMIR ZAKI AL KAMIL", acceptances: [ { university: "Universitas Negeri Sebelas Maret", major: "Teknologi Pangan", path: "Mandiri" } ]},
  { name: "MUHAMMAD KHALIF ARKAN", acceptances: [ { university: "Universitas Negeri Semarang", major: "Pendidikan Bahasa Arab", path: "Mandiri" } ]},
  { name: "RASYID NUR RIDHA", acceptances: [ { university: "Universitas Andalas", major: "Teknik Industri", path: "Mandiri" } ]},
  { name: "DANISH FATHY ORLINDRA NUGROHO", acceptances: [ { university: "UPN Veteran Jakarta", major: "Biologi", path: "SNBT" } ]},
  { name: "ARDIFTA MUHAMMAD THAURA SUSILO", acceptances: [ { university: "Universitas Jendral Soedirman", major: "Teknologi Pangan", path: "SNBT" } ]},
  { name: "FARHAN AZFA AHMAD", acceptances: [ { university: "UIN Syarif Hidayatullah Jakarta", major: "Kedokteran", path: "SNBP" } ]},
  { name: "A. ANNA SYAHIDAH MUTHMAINNAH", acceptances: [ { university: "Universitas Sultan Ageng Tirtayasa", major: "Gizi", path: "Mandiri" } ]},
  { name: "FIRSYA KELANA ALFARIZY", acceptances: [ { university: "Universitas Jambi", major: "Ekonomi Islam", path: "SNBT" } ]},
  { name: "MUHAMAD GHALY AL FAWWAZ", acceptances: [
      { university: "Universitas Pendidikan Indonesia", major: "Ilmu Ekonomi", path: "IUP" },
      { university: "Binus University", major: "Creative Preneurship", path: "Beasiswa" }
  ]},
  { name: "WARINDO'A DHIYA ULHAQ", acceptances: [ { university: "Binus University", major: "Manajemen", path: "Beasiswa" } ]},
  { name: "FAHRI HADIAN", acceptances: [ { university: "Binus University", major: "Teknik Informatika", path: "Rapor" } ]},
  { name: "MUHAMMAD ATHAR ATAYA RAMADHAN", acceptances: [ { university: "Telkom University", major: "DKV", path: "Tes" } ]},
  { name: "CALLISTA FAIRUZ QUEENA", acceptances: [
      { university: "Telkom University", major: "Sistem Informasi", path: "Beasiswa" },
      { university: "University of Massachusetts Lowell", major: "Sistem Informasi", path: "Beasiswa" },
      { university: "Clark University", major: "Computer Science", path: "Beasiswa" },
      { university: "Loyola Marymount University", major: "Computer Science", path: "Beasiswa" },
      { university: "Colorado State University", major: "Info Systems", path: "Beasiswa" },
      { university: "Cleveland State University", major: "Computer Science", path: "Beasiswa" },
      { university: "Oregon State University", major: "Information Systems", path: "Beasiswa" },
      { university: "Florida Institute of Technology", major: "Information Systems", path: "Beasiswa" },
      { university: "University of Albany", major: "Information Systems", path: "Beasiswa" },
      { university: "Queensland University of Technology", major: "Cybersecurity", path: "Beasiswa" },
      { university: "University of Technology Sydney", major: "Info Tech", path: "Beasiswa" },
      { university: "University of Greenwich", major: "Info Tech", path: "Beasiswa" },
      { university: "Colorado University Boulder", major: "Computing", path: "Beasiswa" },
      { university: "SUNY Polytechnic Institute", major: "Information Systems", path: "Beasiswa" }
  ]},
  { name: "ABDULLAH NAEL MANAF AJJAJ", acceptances: [ { university: "Universitas Pelita Harapan", major: "Kedokteran", path: "Mandiri" } ]},
  { name: "MUHAMMAD NAQYTO LHENDRY", acceptances: [ { university: "Universitas Prasetya Mulya", major: "Bisnis", path: "Star Track" } ]},
  { name: "ABDULLAH AL FAUZAN", acceptances: [ { university: "LIPIA Jakarta", major: "I'dad Lughowi", path: "Beasiswa" } ]},
  { name: "MUHAMMAD MALIK IBRAHIM", acceptances: [ { university: "LIPIA Jakarta", major: "I'dad Lughowi", path: "Beasiswa" } ]},
  { name: "MUHAMMAD MIKHAIL HAKEEM", acceptances: [ { university: "LIPIA Jakarta", major: "Syariah", path: "Beasiswa" } ]},
  { name: "RASYA ARYA DARMANSYAH", acceptances: [ { university: "STDI Imam Syafi'i Jember", major: "Hadits", path: "Tes" } ]}
];

const uniCoords = {
  "Universitas Indonesia": [106.8271, -6.3621],
  "Long Island University": [-73.5932, 40.8252],
  "Singapore Management University": [103.8502, 1.2963],
  "University Technology Malaysia": [103.6366, 1.5583],
  "Institut Teknologi Bandung": [107.6098, -6.8915],
  "Universitas Padjadjaran": [107.7738, -6.9261],
  "Universitas Gadjah Mada": [110.3776, -7.7713],
  "Institut Pertanian Bogor": [106.7266, -6.5606],
  "Institut Teknologi Sepuluh Nopember": [112.7944, -7.2824],
  "Universitas Jendral Achmad Yani": [107.5375, -6.8872],
  "Universitas Trisakti": [106.7891, -6.1674],
  "Universitas Airlangga": [112.7584, -7.2687],
  "Universitas Brawijaya": [112.6144, -7.9525],
  "Universitas Negeri Malang": [112.6174, -7.9628],
  "Univesitas Sebelas Maret": [110.8573, -7.5590],
  "Universitas Negeri Sebelas Maret": [110.8573, -7.5590],
  "Universitas Muhammadiyah Jakarta": [106.7725, -6.3051],
  "Universitas Negeri Semarang": [110.3929, -7.0505],
  "Universitas Andalas": [100.4632, -0.9142],
  "UPN Veteran Jakarta": [106.7955, -6.3150],
  "Universitas Jendral Soedirman": [109.2514, -7.4027],
  "UIN Syarif Hidayatullah Jakarta": [106.7583, -6.3060],
  "Universitas Sultan Ageng Tirtayasa": [106.1501, -6.1215],
  "Universitas Jambi": [103.5230, -1.6111],
  "Universitas Pendidikan Indonesia": [107.5946, -6.8611],
  "Binus University": [106.7818, -6.2021],
  "Telkom University": [107.6316, -6.9738],
  "University of Massachusetts Lowell": [-71.3218, 42.6425],
  "Clark University": [-71.8229, 42.2511],
  "Loyola Marymount University": [-118.4180, 33.9689],
  "Colorado State University": [-105.0844, 40.5734],
  "Cleveland State University": [-81.6750, 41.5034],
  "Oregon State University": [-123.2790, 44.5638],
  "Florida Institute of Technology": [-80.6229, 28.0658],
  "University of Albany": [-73.8247, 42.6860],
  "Queensland University of Technology": [153.0286, -27.4772],
  "University of Technology Sydney": [151.2006, -33.8840],
  "University of Greenwich": [0.0055, 51.4828],
  "Colorado University Boulder": [-105.2705, 40.0150],
  "SUNY Polytechnic Institute": [-75.1950, 43.1256],
  "Universitas Pelita Harapan": [106.6119, -6.2269],
  "Universitas Prasetya Mulya": [106.6499, -6.3015],
  "LIPIA Jakarta": [106.8284, -6.2750],
  "STDI Imam Syafi'i Jember": [113.7228, -8.1728]
};

// Group universities
const universityMap = {};
alumniData.forEach(student => {
  student.acceptances.forEach(acc => {
    const uniName = acc.university;
    if (!universityMap[uniName]) {
      let coords = uniCoords[uniName] || [106.8, -6.2];
      const jitterX = (Math.random() - 0.5) * 1.5;
      const jitterY = (Math.random() - 0.5) * 1.5;
      coords = [coords[0] + jitterX, coords[1] + jitterY];
      universityMap[uniName] = {
        name: uniName,
        coords: coords,
        students: []
      };
    }
    universityMap[uniName].students.push({
      name: student.name,
      major: acc.major,
      path: acc.path
    });
  });
});

const groupedUniversities = Object.values(universityMap);

// Calculate stats
const uniqueStudents = new Set(alumniData.map(s => s.name)).size;
const totalAcceptances = alumniData.reduce((sum, s) => sum + s.acceptances.length, 0);
const totalUniversities = groupedUniversities.length;

// Pathway color mapping
const getPathStyle = (path) => {
  const p = (path || '').toLowerCase();
  if (p.includes('snbp')) return { bg: '#FBBF24', text: '#050810', label: 'SNBP' };
  if (p.includes('snbt')) return { bg: '#0048A0', text: '#fff', label: 'SNBT' };
  if (p.includes('beasiswa')) return { bg: '#1E40AF', text: '#fff', label: 'BEASISWA' };
  if (p.includes('mandiri')) return { bg: '#7c3aed', text: '#fff', label: 'MANDIRI' };
  if (p.includes('iup')) return { bg: '#0891b2', text: '#fff', label: 'IUP' };
  if (p.includes('talent') || p.includes('star') || p.includes('ppkb') || p.includes('simak')) return { bg: '#ec4899', text: '#fff', label: path.toUpperCase() };
  if (p.includes('rapor') || p.includes('prestasi')) return { bg: '#475569', text: '#fff', label: path.toUpperCase() };
  return { bg: '#64748b', text: '#fff', label: path.toUpperCase() };
};

const AlumniMap2026 = () => {
  const primary = "#0048A0";
  const secondary = "#1E40AF";
  const accent = "#FBBF24";

  const [hoveredUni, setHoveredUni] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const linkId = 'alumni-map-futuristic-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Track mouse globally for tooltip positioning
  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const filteredUniversities = groupedUniversities.filter(uni =>
    uni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="w-full relative overflow-hidden mb-20"
      style={{
        background: '#050810',
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        borderRadius: '4px',
        boxShadow: `0 30px 80px -20px ${primary}50`
      }}
      ref={containerRef}
    >
      {/* ============ BACKGROUND ============ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit Grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(${primary}40 1px, transparent 1px), linear-gradient(90deg, ${primary}40 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Radial glows */}
        <div
          className="absolute top-0 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
          style={{ background: primary }}
        ></div>
        <div
          className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
          style={{ background: secondary }}
        ></div>

        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)'
          }}
        ></div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
      <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

      {/* ============ TOP HUD BAR ============ */}
      <div
        className="relative z-20 flex items-center justify-between px-5 py-3 backdrop-blur-xl border-b"
        style={{
          background: `linear-gradient(90deg, ${primary}40, ${secondary}30)`,
          borderColor: `${primary}50`
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          </div>
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/90 font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ALUMNI.TRACKING / 2026.COHORT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: accent }}
          ></span>
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/90 hidden sm:inline"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            LIVE.DATABASE
          </span>
        </div>
      </div>

      {/* ============ HEADER SECTION ============ */}
      <div className="relative z-10 p-6 md:p-8 border-b"
           style={{ borderColor: `${primary}20` }}>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: accent,
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                [MODULE.ALUMNI]
              </span>
              <div className="h-px w-6" style={{ background: `${accent}60` }}></div>
            </div>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Peta Sebaran <span style={{ color: accent }}>2026</span>
            </h3>
            <p
              className="text-sm text-white/60 font-light max-w-xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hover pada titik radar untuk melihat detail alumni yang diterima di seluruh dunia.
            </p>
          </div>

          {/* Search bar */}
          <div
            className="relative max-w-xs w-full"
          >
            <i
              className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-[10px]"
              style={{ color: accent }}
            ></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari universitas..."
              className="w-full bg-white/5 backdrop-blur-sm border text-white placeholder-white/40 text-xs px-4 py-2.5 pl-9 outline-none focus:border-[#FBBF24] transition-colors"
              style={{
                borderColor: `${primary}40`,
                borderRadius: '2px',
                fontFamily: "'JetBrains Mono', monospace"
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <i className="fas fa-times text-[10px]"></i>
              </button>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {[
            { value: uniqueStudents, label: 'TOTAL ALUMNI', icon: 'fa-users' },
            { value: totalUniversities, label: 'UNIVERSITAS', icon: 'fa-graduation-cap' },
            { value: totalAcceptances, label: 'ACCEPTANCES', icon: 'fa-check-circle' }
          ].map((stat, i) => (
            <div
              key={i}
              className="relative backdrop-blur-sm border p-3 md:p-4 overflow-hidden group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: `${primary}30`,
                borderRadius: '2px'
              }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${accent}10, transparent)`
                }}
              ></div>

              {/* Corner tick */}
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r" style={{ borderColor: accent }}></div>

              <div className="relative flex items-center justify-between">
                <div>
                  <div
                    className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-2xl md:text-3xl font-bold leading-none"
                    style={{
                      color: accent,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {String(stat.value).padStart(2, '0')}
                  </div>
                </div>
                <i
                  className={`fas ${stat.icon} text-lg opacity-40`}
                  style={{ color: primary }}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ MAP ============ */}
      <div className="relative" style={{ width: "100%", height: "520px" }}>

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 250,
            center: [30, 20]
          }}
          style={{ width: "100%", height: "100%", background: '#050810' }}
        >
          <ZoomableGroup zoom={1} maxZoom={6} center={[50, 20]}>

            {/* Graticule - radar lines */}
            <Graticule
              stroke={secondary}
              strokeWidth={0.3}
              strokeOpacity={0.3}
            />

            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#0c1a33"
                    stroke={secondary}
                    strokeWidth={0.4}
                    strokeOpacity={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: "#16305e",
                        outline: "none",
                        cursor: "grab",
                        transition: "fill 300ms"
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Markers - pulsing radar nodes */}
            {filteredUniversities.map((uni, idx) => {
              const isHovered = hoveredUni?.name === uni.name;
              const hasMultiple = uni.students.length > 1;

              return (
                <Marker
                  key={idx}
                  coordinates={uni.coords}
                  onMouseEnter={() => setHoveredUni(uni)}
                  onMouseLeave={() => setHoveredUni(null)}
                >
                  <g style={{ cursor: 'pointer' }}>
                    {/* Pulse rings (only on hover or for multi-student) */}
                    <circle
                      r={isHovered ? "6" : hasMultiple ? "4" : "3"}
                      fill="none"
                      stroke={accent}
                      strokeWidth="1"
                      className="alumni-pulse-ring"
                      style={{ opacity: isHovered ? 0.8 : hasMultiple ? 0.5 : 0.3 }}
                    />
                    <circle
                      r={isHovered ? "6" : hasMultiple ? "4" : "3"}
                      fill="none"
                      stroke={accent}
                      strokeWidth="1"
                      className="alumni-pulse-ring"
                      style={{
                        animationDelay: '1s',
                        opacity: isHovered ? 0.8 : hasMultiple ? 0.5 : 0.3
                      }}
                    />

                    {/* Core dot */}
                    <circle
                      r={isHovered ? "4.5" : "3.5"}
                      fill={accent}
                      stroke="#050810"
                      strokeWidth="1.5"
                      style={{
                        transition: 'r 300ms ease',
                        filter: isHovered ? `drop-shadow(0 0 6px ${accent})` : 'none'
                      }}
                    />

                    {/* Crosshair ticks */}
                    {(isHovered || hasMultiple) && (
                      <g style={{ opacity: isHovered ? 1 : 0.6 }}>
                        <line x1="-7" y1="0" x2="-5" y2="0" stroke={accent} strokeWidth="1" />
                        <line x1="5" y1="0" x2="7" y2="0" stroke={accent} strokeWidth="1" />
                        <line x1="0" y1="-7" x2="0" y2="-5" stroke={accent} strokeWidth="1" />
                        <line x1="0" y1="5" x2="0" y2="7" stroke={accent} strokeWidth="1" />
                      </g>
                    )}

                    {/* Count badge for multi-student */}
                    {hasMultiple && (
                      <g transform="translate(6, -6)">
                        <rect
                          x="-7" y="-7" width="14" height="14"
                          fill={accent}
                          rx="2"
                          stroke="#050810"
                          strokeWidth="1"
                        />
                        <text
                          x="0" y="1"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="8px"
                          fontWeight="bold"
                          fill="#050810"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {uni.students.length}
                        </text>
                      </g>
                    )}

                    {/* Invisible hover area */}
                    <circle r="14" fill="transparent" />
                  </g>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Bottom controls hint */}
        <div
          className="absolute bottom-3 right-3 z-20 px-3 py-1.5 backdrop-blur-xl border hidden md:flex items-center gap-3"
          style={{
            background: 'rgba(5,8,16,0.8)',
            borderColor: `${primary}40`,
            borderRadius: '2px'
          }}
        >
          <div className="flex items-center gap-1.5">
            <i className="fas fa-search-plus text-[9px]" style={{ color: accent }}></i>
            <span
              className="text-[8px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              SCROLL
            </span>
          </div>
          <div className="w-px h-3 bg-white/20"></div>
          <div className="flex items-center gap-1.5">
            <i className="fas fa-arrows-alt text-[9px]" style={{ color: accent }}></i>
            <span
              className="text-[8px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              DRAG
            </span>
          </div>
        </div>

        {/* Active node indicator (bottom left) */}
        <div
          className="absolute bottom-3 left-3 z-20 px-4 py-2 backdrop-blur-xl border"
          style={{
            background: 'rgba(5,8,16,0.8)',
            borderColor: `${primary}40`,
            borderRadius: '2px'
          }}
        >
          <div
            className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // TARGET
          </div>
          {hoveredUni ? (
            <div
              className="text-[11px] font-bold text-white truncate max-w-[200px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {hoveredUni.name}
            </div>
          ) : (
            <div
              className="text-[10px] uppercase tracking-widest text-white/60"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              HOVER.NODE
            </div>
          )}
        </div>
      </div>

      {/* ============ LEGEND FOOTER ============ */}
      <div
        className="relative z-10 flex flex-wrap items-center gap-3 md:gap-5 px-5 py-3 border-t backdrop-blur-xl"
        style={{
          background: 'rgba(0,72,160,0.1)',
          borderColor: `${primary}30`
        }}
      >
        <span
          className="text-[8px] uppercase tracking-[0.25em] text-white/50 font-bold"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          JALUR.MASUK
        </span>

        {[
          { label: 'SNBP', color: '#FBBF24', textColor: '#050810' },
          { label: 'SNBT', color: '#0048A0', textColor: '#fff' },
          { label: 'BEASISWA', color: '#1E40AF', textColor: '#fff' },
          { label: 'MANDIRI', color: '#7c3aed', textColor: '#fff' },
          { label: 'IUP', color: '#0891b2', textColor: '#fff' }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-sm"
              style={{ background: item.color }}
            ></div>
            <span
              className="text-[9px] uppercase tracking-widest text-white/70"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ============ PORTAL TOOLTIP ============ */}
      {hoveredUni && createPortal(
        <div
          style={{
            position: 'fixed',
            top: mousePos.y + 16,
            left: mousePos.x + 16,
            zIndex: 9999,
            pointerEvents: 'none',
            transform: 'translate(0, 0)',
            maxWidth: '340px',
            fontFamily: "'Space Grotesk', 'Inter', sans-serif"
          }}
          className="animate-fadeIn"
        >
          <div
            className="relative overflow-hidden"
            style={{
              background: 'rgba(5,8,16,0.95)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${primary}50`,
              borderRadius: '4px',
              boxShadow: `0 25px 60px -15px rgba(0,72,160,0.6), 0 0 0 1px rgba(251,191,36,0.1)`,
              minWidth: '300px'
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute top-1.5 right-1.5 w-3 h-3 border-r-2 border-t-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-l-2 border-b-2 z-20" style={{ borderColor: accent }}></div>
            <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 z-20" style={{ borderColor: accent }}></div>

            {/* Header */}
            <div
              className="px-4 py-3 border-b"
              style={{
                background: `linear-gradient(90deg, ${primary}50, ${secondary}40)`,
                borderColor: `${primary}30`
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[8px] uppercase tracking-[0.25em] text-white/50 mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    // UNIVERSITY.NODE
                  </div>
                  <h4
                    className="font-bold text-white text-sm leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {hoveredUni.name}
                  </h4>
                </div>
                <div
                  className="px-2 py-1 flex items-center gap-1 shrink-0"
                  style={{
                    background: `${accent}20`,
                    border: `1px solid ${accent}50`,
                    borderRadius: '2px'
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: accent }}
                  ></span>
                  <span
                    className="text-[10px] font-bold"
                    style={{
                      color: accent,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {hoveredUni.students.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Students list */}
            <div
              className="p-3 overflow-y-auto"
              style={{ maxHeight: '280px' }}
            >
              <ul className="space-y-2.5">
                {hoveredUni.students.map((stu, i) => {
                  const pathStyle = getPathStyle(stu.path);
                  return (
                    <li
                      key={i}
                      className="border-b pb-2.5 last:border-0 last:pb-0"
                      style={{ borderColor: `${primary}20` }}
                    >
                      <div className="flex items-start gap-2">
                        {/* Index */}
                        <span
                          className="text-[9px] font-mono opacity-50 shrink-0 mt-0.5"
                          style={{
                            color: accent,
                            fontFamily: "'JetBrains Mono', monospace"
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div
                            className="font-bold text-xs text-white leading-tight mb-1 truncate"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {stu.name}
                          </div>
                          <div className="flex items-center text-[10px] text-white/70 mb-1.5 gap-1.5">
                            <i
                              className="fas fa-book-open text-[8px] shrink-0"
                              style={{ color: accent }}
                            ></i>
                            <span
                              className="truncate"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {stu.major}
                            </span>
                          </div>
                          <span
                            className="inline-block px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider"
                            style={{
                              background: pathStyle.bg,
                              color: pathStyle.textColor,
                              borderRadius: '2px',
                              fontFamily: "'JetBrains Mono', monospace"
                            }}
                          >
                            {pathStyle.label}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between px-4 py-2 border-t"
              style={{
                background: 'rgba(0,72,160,0.2)',
                borderColor: `${primary}30`
              }}
            >
              <span
                className="text-[8px] uppercase tracking-widest text-white/50"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                // {hoveredUni.students.length} RECORDS
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full" style={{ background: accent }}></div>
                <span
                  className="text-[8px] uppercase tracking-widest text-white/60"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ============ ANIMATIONS ============ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes alumniPulse {
          0% { r: 4; opacity: 0.9; }
          100% { r: 18; opacity: 0; }
        }
        .alumni-pulse-ring {
          animation: alumniPulse 2s ease-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 150ms ease-out;
        }
        /* Custom scrollbar for tooltip */
        .alumni-tooltip-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .alumni-tooltip-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .alumni-tooltip-scroll::-webkit-scrollbar-thumb {
          background: #FBBF24;
          border-radius: 2px;
        }
      `}} />
    </div>
  );
};

export default AlumniMap2026;