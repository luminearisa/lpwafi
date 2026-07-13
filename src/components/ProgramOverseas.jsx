import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProgramOverseas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfdfd] pt-24 pb-32 font-sans selection:bg-[#29A6B6]/20">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images_overseas/umroh-study-overseas-1.jpg" 
            alt="Umroh Study Overseas Al Wafi" 
            className="w-full h-full object-cover opacity-60 scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#29A6B6]/90 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm mb-6 w-max backdrop-blur-sm">
            Program Unggulan
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl tracking-tight drop-shadow-lg">
            Umroh Study Overseas
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-3xl font-light leading-relaxed">
            Perjalanan spiritual mendalam yang dipadukan dengan pengayaan akademik bertaraf internasional di Makkah dan Madinah.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Text Article */}
        <div className="lg:col-span-8 space-y-12">
          
          <div className="prose prose-lg max-w-none text-gray-600 leading-[2.2]">
            <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed mb-10 border-l-4 border-[#29A6B6] pl-6">
              Melaksanakan ibadah umroh sembari menimba ilmu di kampus-kampus terkemuka di Timur Tengah kini menjadi sebuah pengalaman komprehensif yang ditawarkan melalui program <strong className="text-[#29A6B6]">"Umroh Study Overseas Universitas Islam Madinah"</strong>. Bersama Al Wafi, program ini hadir sebagai terobosan edukasi yang secara khusus memadukan perjalanan spiritual mendalam dengan pengayaan akademik bertaraf internasional di dua kota suci, yakni Makkah dan Madinah.
            </p>

            <p>
              Secara garis besar, program overseas ini dirancang bukan sekadar sebagai perjalanan wisata religi biasa, melainkan sebuah orientasi pendidikan dan sejarah yang intensif. Inisiatif ini menitikberatkan pada tiga pilar utama: <strong>optimalisasi ibadah, literasi sejarah peradaban Islam, dan orientasi langsung ke ekosistem pendidikan tinggi di Arab Saudi.</strong>
            </p>

            <div className="my-12 relative">
              <img src="/images_overseas/umroh-study-overseas-2.jpg" alt="Dauroh Bahasa Arab UIM" className="w-full rounded-2xl shadow-xl object-cover h-[400px]" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#349B48]/10 rounded-full blur-2xl -z-10"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
              <i className="fas fa-graduation-cap text-[#29A6B6] mr-4 text-3xl"></i> Aspek Akademik
            </h3>
            <p>
              Dari segi akademik, program ini memfasilitasi para pesertanya untuk merasakan langsung perkuliahan di Timur Tengah. Peserta tidak hanya bertindak sebagai pengamat, tetapi akan terlibat aktif menjadi pelajar melalui program <strong>Dauroh Bahasa Arab</strong> yang diselenggarakan secara intensif di Learning Arabic Universitas Islam Madinah (UIM). 
            </p>
            <p>
              Rangkaian pendidikan singkat ini bahkan ditutup secara formal melalui prosesi wisuda kelulusan dauroh. Guna memperluas wawasan pendidikan, program ini juga membekali peserta dengan agenda study tour ke kampus-kampus prestisius lainnya, seperti Universitas Ummul Quro di Makkah dan Universitas Islam Madinah serta Universitas Taibah di Madinah, SAUDI ARABIA.
            </p>

            <div className="my-12 relative">
              <img src="/images_overseas/umroh-study-overseas-3.jpg" alt="Ziarah dan Sejarah" className="w-full rounded-2xl shadow-xl object-cover h-[400px]" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#29A6B6]/10 rounded-full blur-2xl -z-10"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
              <i className="fas fa-kaaba text-[#29A6B6] mr-4 text-3xl"></i> Aspek Spiritual & Historis
            </h3>
            <p>
              Sementara itu, pada aspek spiritual dan historis, gambaran program ini menawarkan agenda yang sangat terstruktur. Selain pelaksanaan umroh, ibadah harian di Masjidil Haram, dan rutinitas <strong>Halaqah Al-Qur'an di Masjid Nabawi</strong>, program ini memadukan napak tilas sejarah secara langsung ke berbagai situs penting peradaban Islam. 
            </p>
            <p>
              Peserta akan diajak mengeksplorasi Museum Wahyu, Museum Al Quran, mengenal sejarah di Kota Thaif, menyusuri jejak sejarah seperti di Saqifah Bani Saidah, Masjid Quba, Quba street hingga menikmati keajaiban arkeologi peninggalan masa lalu di kota kuno Al Ula.
            </p>

            <div className="p-8 bg-[#f0f9fa] rounded-2xl my-10 border border-[#29A6B6]/20">
              <p className="text-[#0a0a0a] font-medium m-0">
                Melalui kolaborasi kegiatan yang padat selama kurang lebih tiga pekan ini, program Umroh Study Overseas diproyeksikan mampu memberikan wawasan global serta pemahaman lintas budaya bagi pesertanya, sekaligus memperkuat nilai-nilai spiritualitas di Tanah Suci.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Konsistensi Sejak 2018</h3>
            <p>
              Sebagai informasi, program Umroh Study Overseas ini bukanlah agenda baru, melainkan sebuah program yang memiliki rekam jejak panjang karena telah sukses dilaksanakan semenjak tahun 2018. Sepanjang perjalanannya selama bertahun-tahun, program ini terbukti konsisten menjembatani para peserta untuk merasakan langsung ekosistem pendidikan di Timur Tengah sekaligus mengoptimalkan ibadah di Tanah Suci.
            </p>
            <p>
              Melanjutkan kesuksesan dari tahun-tahun sebelumnya, pelaksanaan program di tahun lalu diawali dengan rangkaian kegiatan latihan manasik umroh yang dilaksanakan di Masjid Nidaul Islam, Pesantren Al Wafi.
            </p>

            <hr className="my-12 border-gray-200" />

            {/* Agenda Makkah */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 mb-10 hover:border-[#29A6B6]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#29A6B6]/10 to-transparent rounded-bl-full"></div>
              <h2 className="text-3xl font-bold text-[#29A6B6] mb-8 relative z-10">Kegiatan dan Agenda di Makkah</h2>
              <p className="mb-8 relative z-10">
                Di Kota Makkah, aktivitas berfokus pada pelaksanaan ibadah inti umroh yang dipadukan dengan pengenalan sejarah Islam serta kunjungan akademik awal:
              </p>
              
              <ul className="space-y-6 relative z-10 list-none p-0">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0f9fa] flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-check text-[#29A6B6]"></i>
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">Ibadah Inti Umroh:</strong>
                    Setibanya Mekkah pada hari Jumat, peserta langsung melaksanakan salat Jumat di Masjidil Haram dan menunaikan ibadah inti Umroh. Setelah itu, peserta diberikan waktu khusus untuk beristirahat pada hari Sabtu.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0f9fa] flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-landmark text-[#29A6B6]"></i>
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">Eksplorasi Sejarah dan Edukasi:</strong>
                    Rangkaian dilanjutkan dengan Tour Kota Makkah serta kunjungan ke Museum Wahyu pada hari Ahad. Peserta juga melakukan perjalanan sejarah melalui Tour Thaif pada hari Senin.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0f9fa] flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-university text-[#29A6B6]"></i>
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">Kunjungan Akademik:</strong>
                    Fase di Makkah ditutup dengan kegiatan akademik berupa Study Tour ke Universitas Umm Al-Qura pada hari Selasa.
                  </div>
                </li>
              </ul>
            </div>

            {/* Agenda Madinah */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#349B48]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#349B48]/10 to-transparent rounded-bl-full"></div>
              <h2 className="text-3xl font-bold text-[#349B48] mb-8 relative z-10">Kegiatan dan Agenda di Madinah</h2>
              <p className="mb-8 relative z-10">
                Setelah berpindah ke Madinah, fokus utama kegiatan rombongan bergeser pada pendalaman materi keagamaan, penguatan kompetensi berbahasa, dan agenda akademik intensif.
              </p>
              
              <ul className="space-y-6 relative z-10 list-none p-0">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f2fbf4] flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-book-open text-[#349B48]"></i>
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">Pembelajaran Bahasa Arab dan Al-Qur'an:</strong>
                    Peserta mengikuti program Dauroh Bahasa Arab secara intensif di Learning Arabic UIM (Universitas Islam Madinah) serta Halaqah Al-Qur'an di Masjid Nabawi. Pembelajaran ini terjadwal pada tanggal 30 Oktober, 1 November, serta periode 9 dan 11 November.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f2fbf4] flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-map-marked-alt text-[#349B48]"></i>
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">Aktivitas Spiritual dan Ziarah Pembelajaran:</strong>
                    Selain pembelajaran di kelas, peserta melakukan ziarah ke makam Baqi, Saqifah Bani Saidah, dan mengikuti program Quba Safari Night. Agenda ziarah ke Raudhah di Masjid Nabawi juga dilakukan dengan pengaturan khusus yang terpisah antara jamaah Ikhwan dan Akhwat.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f2fbf4] flex items-center justify-center shrink-0 mt-1">
                    <i className="fas fa-award text-[#349B48]"></i>
                  </div>
                  <div>
                    <strong className="block text-gray-900 text-lg mb-1">Puncak Prosesi Akademik:</strong>
                    Seluruh rangkaian pembelajaran bahasa tersebut diakhiri dengan prosesi resmi Wisuda Dauroh Bahasa Arab yang dilaksanakan bersamaan dengan Study Tour ke Universitas Taiba.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-gray-900 text-white rounded-3xl text-center shadow-xl">
              <i className="fas fa-quote-left text-4xl text-[#29A6B6] mb-6 opacity-50"></i>
              <p className="text-xl font-light leading-relaxed">
                Menutup lembaran kesan dari para peserta, program Umroh Study Overseas Universitas Islam Madinah bersama Al Wafi, membuktikan bahwa lebih dari sekadar perjalanan biasa. Melalui konsistensi yang terjaga sejak tahun 2018, program ini terus berkomitmen menjadi jembatan tepercaya bagi generasi muda dalam memadukan ibadah di Tanah Suci dan keluasan ilmu di Timur Tengah. Semoga pembelajaran dan pengalaman yang telah didapatkan senantiasa membekas dan menjadi bekal berharga bagi masa depan para peserta.
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Sticky Gallery Grid */}
        <div className="lg:col-span-4">
          <div className="sticky top-[120px] space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-camera text-[#29A6B6]"></i> Galeri Kegiatan
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                <div key={num} className="group overflow-hidden rounded-xl bg-gray-100 aspect-square cursor-pointer relative shadow-sm hover:shadow-xl transition-all duration-300">
                  <img 
                    src={`/images_overseas/umroh-study-overseas-${num}.jpg`} 
                    alt={`Galeri Overseas ${num}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#29A6B6]/0 group-hover:bg-[#29A6B6]/20 transition-all duration-300 mix-blend-overlay"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#f8fcfc] p-6 border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#29A6B6] text-2xl">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tertarik Mengikuti Program Ini?</h4>
              <p className="text-sm text-gray-500 mb-6">Dapatkan informasi pendaftaran dan jadwal keberangkatan berikutnya.</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-3 bg-[#29A6B6] text-white rounded-xl font-bold hover:bg-[#238c9a] transition-colors shadow-md">
                Hubungi Kami
              </a>
            </div>
            
          </div>
        </div>

      </div>

      {/* Full Width Gallery Bottom */}
      <div className="mt-20 overflow-hidden relative">
        <div className="flex w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
            <div key={num} className="w-64 md:w-80 h-48 md:h-64 mx-2 rounded-2xl overflow-hidden shrink-0 shadow-md">
              <img 
                src={`/images_overseas/umroh-study-overseas-${num}.jpg`} 
                alt={`Kegiatan ${num}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {[12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
            <div key={`dup-${num}`} className="w-64 md:w-80 h-48 md:h-64 mx-2 rounded-2xl overflow-hidden shrink-0 shadow-md">
              <img 
                src={`/images_overseas/umroh-study-overseas-${num}.jpg`} 
                alt={`Kegiatan ${num}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Keyframes for the scrolling animation - inline style block */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </div>
  );
};

export default ProgramOverseas;