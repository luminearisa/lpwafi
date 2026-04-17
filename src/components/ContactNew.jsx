import React from 'react';

const Contact = ({ data }) => {
  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-[#f4f8f9]"
    >
      {/* --- SUBTLE ARCHITECTURAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#29A6B6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#349B48] mb-6 bg-white px-4 py-2 border border-[#349B48]/10 shadow-sm">
            Hubungi Kami
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Mari Bergabung Bersama Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            Siap bergabung dengan Al Wafi Islamic Boarding School? Hubungi kami untuk informasi lebih lanjut
            dan mulai perjalanan pendidikan yang berkualitas.
          </p>
          <div className="w-16 h-1 bg-[#29A6B6] mx-auto mt-10"></div>
        </div>

        {/* --- REGISTRATION CTA BANNER --- */}
        <div className="relative bg-[#29A6B6] shadow-[0_30px_60px_rgba(41,166,182,0.2)] overflow-hidden mb-32 flex flex-col md:flex-row border border-[#29A6B6]">

          {/* Subtle Geometric Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 L100,0" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M0,50 L50,0 M50,100 L100,50" stroke="white" strokeWidth="0.2" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 p-12 md:p-20 text-center w-full">
            <div className="mb-10">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 text-[9px] uppercase tracking-[0.2em] font-bold text-white mb-8">
                <div className="w-2 h-2 bg-[#349B48] me-3 animate-pulse"></div>
                Pendaftaran Dibuka
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Pendaftaran Tahun Ajaran {data?.yearInfo?.academicYear}
              </h3>
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                Daftarkan putra-putri kesayangan Anda sekarang juga dan berikan mereka pendidikan terbaik
                yang mengintegrasikan nilai-nilai Islam dengan standar internasional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href={data?.contact?.registration?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-10 py-4 bg-white text-[#29A6B6] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#f0f9fa] shadow-xl hover:-translate-y-1 flex items-center justify-center border border-white"
              >
                <span>Daftar Online</span>
                <i className="fas fa-arrow-right ms-4 transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>

              <a
                href={data?.contact?.registration?.psbUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-10 py-4 bg-transparent text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center"
              >
                <i className="fas fa-info-circle me-3"></i>
                <span>Info PSB</span>
              </a>
            </div>
          </div>
        </div>

        {/* --- CAMPUS LOCATIONS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {data?.contact?.campuses?.map((campus, index) => (
            <div
              key={index}
              className="group bg-white p-10 md:p-14 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start mb-8">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-[#f0f9fa] border border-[#29A6B6]/20 group-hover:bg-[#29A6B6] transition-colors duration-500">
                  <i className="fas fa-map-marker-alt text-[#29A6B6] text-xl group-hover:text-white transition-colors duration-500"></i>
                </div>
                <div className="ms-6 mt-2">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-wide">
                    {campus.name}
                  </h3>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed font-light mb-10 flex-grow">
                {campus.address}
              </p>

              <a
                href={campus.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#29A6B6] mt-auto w-fit transition-colors duration-300"
              >
                Lihat di Google Maps
                <i className="fas fa-external-link-alt ms-3 text-[10px] group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>

              {/* Subtle bottom accent */}
              <div className="h-0.5 w-0 group-hover:w-full mt-6 transition-all duration-700 ease-out bg-[#29A6B6]"></div>
            </div>
          ))}
        </div>

        {/* --- CONTACT METHODS: Minimalist Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: 'fa-phone', title: 'Telepon', info: '+62 21 xxxx xxxx' },
            { icon: 'fa-envelope', title: 'Email', info: 'info@al-wafi.sch.id' },
            { icon: 'fab fa-whatsapp', title: 'WhatsApp', info: '+62 8xx xxxx xxxx' },
            { icon: 'fa-globe', title: 'Website', info: 'al-wafi.sch.id' }
          ].map((contact, index) => (
            <div
              key={index}
              className="group bg-white p-10 border border-gray-100 flex flex-col items-center text-center hover:border-[#349B48]/30 transition-colors duration-500 shadow-sm hover:shadow-xl"
            >
              <i className={`fas ${contact.icon} text-2xl text-[#349B48] mb-6 group-hover:scale-110 transition-transform duration-500`}></i>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-3">
                {contact.title}
              </h4>
              <p className="text-sm text-gray-500 font-light">
                {contact.info}
              </p>
            </div>
          ))}
        </div>

        {/* --- SOCIAL MEDIA: Clean & Monochrome to Brand Color --- */}
        <div className="text-center border-t border-gray-200 pt-20">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900 mb-4">
            Ikuti Media Sosial Kami
          </h3>
          <p className="text-gray-500 font-light mb-10 text-sm">
            Dapatkan update terbaru dan informasi menarik dari Al Wafi
          </p>

          <div className="flex justify-center space-x-4 md:space-x-6">
            {[
              {
                icon: 'fab fa-instagram',
                url: `https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`,
                color: '#E4405F',
                name: 'Instagram'
              },
              {
                icon: 'fab fa-youtube',
                url: 'https://youtube.com/@pesantrenwibs',
                color: '#FF0000',
                name: 'YouTube'
              },
              {
                icon: 'fab fa-facebook-f',
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
                className="w-14 h-14 flex items-center justify-center bg-white border border-gray-200 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white"
                style={{
                  '--hover-bg': social.color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color;
                  e.currentTarget.style.borderColor = social.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#e5e7eb'; // border-gray-200
                }}
                title={social.name}
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;