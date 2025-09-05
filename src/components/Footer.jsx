import React from 'react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src={data?.images?.logo || "https://al-wafi.sch.id/src/images/logo/wafi-logo-data=normal.svg"}
                  alt="Al Wafi Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Al Wafi</h3>
                <p className="text-gray-300">Islamic Boarding School</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {data?.school?.type} dengan konsep holistik, harmoni, dan exemplary. 
              Mendampingi santri berdasarkan nilai Al Quran dan Sunnah untuk bersaing di dunia internasional.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${data?.contact?.socialMedia?.instagram?.[0]?.replace('@', '') || 'alwafiwibs.official'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://youtube.com/@pesantrenwibs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a
                href={`https://facebook.com/${data?.contact?.socialMedia?.facebook || 'alwafiwibs'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="#alumni" className="text-gray-300 hover:text-white transition-colors">
                  Alumni
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a
                  href={data?.contact?.registration?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors font-semibold"
                >
                  Pendaftaran
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-green-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300 text-sm">Kampus A:</p>
                  <p className="text-gray-300 text-sm">
                    {data?.contact?.campuses?.[0]?.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-green-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300 text-sm">Kampus B:</p>
                  <p className="text-gray-300 text-sm">
                    {data?.contact?.campuses?.[1]?.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-green-400 mr-3"></i>
                <span className="text-gray-300 text-sm">info@al-wafi.sch.id</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-globe text-green-400 mr-3"></i>
                <span className="text-gray-300 text-sm">al-wafi.sch.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Al Wafi Islamic Boarding School. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
