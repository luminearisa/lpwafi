import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

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
      { university: "Universitas Jendral Achmad Yani", major: "Pendidiktan Dokter", path: "Mandiri" }
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

// Dictionary of University Coordinates
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

// Group students by university
const universityMap = {};
alumniData.forEach(student => {
  student.acceptances.forEach(acc => {
    const uniName = acc.university;
    if (!universityMap[uniName]) {
      // Create slight jitter for overlapping coordinates so dots aren't perfectly on top of each other
      let coords = uniCoords[uniName] || [106.8, -6.2]; // Default to Jakarta if missing
      
      // Jitter for popular regions (e.g. Jakarta/Bandung) to prevent total occlusion
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

const AlumniMap2026 = () => {
  const brandTeal = '#29A6B6';
  const brandGreen = '#349B48';
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipData, setTooltipData] = useState(null);

  return (
    <div className="w-full relative bg-[#F8FAFC] rounded-3xl border border-gray-100 shadow-inner overflow-hidden flex flex-col items-center mb-20">
      
      <div className="p-8 w-full border-b border-gray-200 bg-white z-10 relative shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900">Peta Sebaran 2026</h3>
        <p className="text-sm text-gray-500 font-light mt-1">Arahkan kursor (hover) pada titik-titik di peta untuk melihat detail siswa yang diterima di seluruh dunia.</p>
      </div>

      <div style={{ width: "100%", height: "500px" }} data-tooltip-id="map-tooltip">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 250,
            center: [30, 20] 
          }}
          style={{ width: "100%", height: "100%", backgroundColor: '#e2f0f9' }}
        >
          <ZoomableGroup zoom={1} maxZoom={5} center={[50, 20]}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#d1d9e6"
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#c1cad9", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {groupedUniversities.map((uni, idx) => (
              <Marker 
                key={idx} 
                coordinates={uni.coords}
                onMouseEnter={() => {
                  setTooltipData(uni);
                }}
                onMouseLeave={() => {
                  setTooltipData(null);
                }}
              >
                <circle 
                  r={5} 
                  fill={brandTeal} 
                  stroke="#FFFFFF" 
                  strokeWidth={1.5} 
                  className="cursor-pointer transition-all duration-300 hover:fill-[#349B48]"
                  style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" }}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <Tooltip 
        id="map-tooltip" 
        isOpen={!!tooltipData}
        className="z-50 !p-0 !bg-transparent !opacity-100"
      >
        {tooltipData && (
          <div className="flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden w-[280px] border border-gray-100">
            <div className="bg-[#29A6B6] text-white px-4 py-3">
              <h4 className="font-bold text-sm leading-tight text-white">{tooltipData.name}</h4>
              <p className="text-[10px] uppercase tracking-wider text-white/80 mt-1">{tooltipData.students.length} Siswa Diterima</p>
            </div>
            <div className="p-4 max-h-[200px] overflow-y-auto custom-scrollbar bg-white">
              <ul className="space-y-4">
                {tooltipData.students.map((stu, i) => (
                  <li key={i} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <p className="font-bold text-xs text-gray-800">{stu.name}</p>
                    <div className="flex items-center text-[10px] text-gray-500 mt-1">
                      <i className="fas fa-graduation-cap mr-1.5 text-[#349B48]"></i>
                      {stu.major}
                    </div>
                    <span className="inline-block mt-1.5 px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px] font-bold uppercase tracking-wider">
                      {stu.path}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Tooltip>
    </div>
  );
};

export default AlumniMap2026;
