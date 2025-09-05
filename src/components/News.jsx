import React, { useState, useEffect } from 'react';

const News = ({ data }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get color scheme from data or use defaults
  const colors = data?.colorScheme || {
    primary: { blue: "#1e3a8a", purple: "#7c3aed", indigo: "#4338ca" },
    secondary: { emerald: "#059669", cyan: "#0891b2", teal: "#0d9488" },
    accent: { lightBlue: "#3b82f6", lightPurple: "#9333ea", lightIndigo: "#6366f1" },
    gold: { primary: "#f59e0b", light: "#fbbf24", dark: "#d97706" }
  };

  const opacity = data?.colorScheme?.opacity || {
    aboutPattern: 4,
    aboutCard: 95,
    aboutIcon: 80
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Fetch posts dengan featured media
        const response = await fetch('https://al-wafi.sch.id/news/wp-json/wp/v2/posts?per_page=6&_embed=wp:featuredmedia');
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const newsData = await response.json();
        
        // Process news data untuk include featured image URL
        const processedNews = await Promise.all(
          newsData.map(async (post) => {
            let featuredImageUrl = null;
            
            // Coba ambil dari _embedded dulu
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
              featuredImageUrl = post._embedded['wp:featuredmedia'][0].source_url;
            }
            // Jika tidak ada di _embedded, fetch manual
            else if (post.featured_media) {
              try {
                const mediaResponse = await fetch(`https://al-wafi.sch.id/news/wp-json/wp/v2/media/${post.featured_media}`);
                if (mediaResponse.ok) {
                  const mediaData = await mediaResponse.json();
                  featuredImageUrl = mediaData.source_url;
                }
              } catch (error) {
                console.log('Error fetching media:', error);
              }
            }
            
            return {
              ...post,
              featured_media_url: featuredImageUrl
            };
          })
        );
        
        console.log('Processed news with images:', processedNews.map(n => ({ 
          id: n.id, 
          title: n.title.rendered, 
          featured_media: n.featured_media,
          featured_media_url: n.featured_media_url 
        })));
        
        setNews(processedNews);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'Asia/Jakarta'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <section 
      id="news" 
      className="py-24 relative overflow-hidden"
      style={{
        background: data?.colorScheme?.gradient?.about || 
                   `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)`
      }}
    >
      {/* Circuit Tech Pattern - halus */}
      <div className="absolute inset-0" style={{ opacity: 4 }}>
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <pattern id="newsPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Circuit lines dan nodes */}
            <g stroke={colors.primary.blue} strokeWidth="0.08" fill="none" opacity="0.25">
              {/* Horizontal circuit lines */}
              <line x1="0" y1="10" x2="15" y2="10"/>
              <line x1="25" y1="10" x2="40" y2="10"/>
              <line x1="0" y1="30" x2="10" y2="30"/>
              <line x1="20" y1="30" x2="40" y2="30"/>
              
              {/* Vertical circuit lines */}
              <line x1="10" y1="0" x2="10" y2="15"/>
              <line x1="10" y1="25" x2="10" y2="40"/>
              <line x1="30" y1="0" x2="30" y2="10"/>
              <line x1="30" y1="20" x2="30" y2="40"/>
              
              {/* Diagonal connections */}
              <line x1="15" y1="10" x2="20" y2="15"/>
              <line x1="20" y1="25" x2="25" y2="30"/>
            </g>
            
            {/* Circuit nodes/dots */}
            <g fill={colors.primary.blue} opacity="0.3">
              <circle cx="10" cy="10" r="0.6"/>
              <circle cx="30" cy="10" r="0.6"/>
              <circle cx="10" cy="30" r="0.6"/>
              <circle cx="30" cy="30" r="0.6"/>
            </g>
            
            {/* Secondary circuit pattern */}
            <g stroke={colors.primary.purple} strokeWidth="0.06" fill="none" opacity="0.2">
              {/* L-shaped circuits */}
              <path d="M5,5 L5,15 L15,15"/>
              <path d="M25,25 L35,25 L35,35"/>
              <path d="M35,5 L35,15 L25,15"/>
              <path d="M15,25 L5,25 L5,35"/>
            </g>
            
            {/* Small connector nodes */}
            <g fill={colors.primary.purple} opacity="0.2">
              <circle cx="5" cy="5" r="0.3"/>
              <circle cx="35" cy="35" r="0.3"/>
              <circle cx="35" cy="5" r="0.3"/>
              <circle cx="5" cy="35" r="0.3"/>
              <circle cx="15" cy="15" r="0.3"/>
              <circle cx="25" cy="25" r="0.3"/>
            </g>
          </pattern>
          <rect width="100%" height="100%" fill="url(#newsPattern)"/>
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
              Berita Terbaru
            </span>
            <div 
              className="w-1 h-8 rounded-full ml-4"
              style={{ background: colors.primary.blue }}
            ></div>
          </div>
          <h2 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          >
            6 Berita Terbaru Al Wafi
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru kegiatan dan prestasi siswa Al Wafi Islamic Boarding School
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`
            }}
          ></div>
        </div>

        {/* News Content */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center">
              <div 
                className="animate-spin rounded-full h-12 w-12 border-b-2"
                style={{ borderColor: colors.primary.blue }}
              ></div>
              <span className="ml-4 text-lg text-gray-600">Memuat berita terbaru...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div 
              className="inline-flex items-center justify-center p-6 rounded-2xl shadow-lg"
              style={{ background: `${colors.accent.lightBlue}10` }}
            >
              <i className="fas fa-exclamation-triangle text-yellow-500 text-2xl mr-4"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Gagal Memuat Berita</h3>
                <p className="text-gray-600">Silakan coba lagi nanti atau kunjungi website resmi kami</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => {
              const newsColor = {
                primary: index % 2 === 0 ? colors.secondary.emerald : colors.accent.lightBlue,
                secondary: index % 2 === 0 ? colors.secondary.cyan : colors.accent.lightPurple
              };

              return (
                <article 
                  key={article.id} 
                  className="group relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-sm overflow-hidden"
                  style={{
                    background: data?.colorScheme?.gradient?.aboutCard || 
                               `linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)`,
                    opacity: opacity.aboutCard / 100
                  }}
                >
                  {/* Circuit Card Pattern - halus */}
                  <div className="absolute inset-0 opacity-3 rounded-3xl overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 120 120">
                      {/* Mini circuit pattern */}
                      <g stroke={newsColor.primary} strokeWidth="0.06" fill="none" opacity="0.2">
                        {/* Corner circuit lines */}
                        <path d="M15,15 L25,15 L25,25"/>
                        <path d="M95,95 L105,95 L105,105"/>
                        <path d="M105,15 L95,15 L95,25"/>
                        <path d="M25,95 L15,95 L15,105"/>
                      </g>
                      {/* Circuit nodes */}
                      <g fill={newsColor.primary} opacity="0.25">
                        <circle cx="15" cy="15" r="1"/>
                        <circle cx="105" cy="105" r="1"/>
                        <circle cx="105" cy="15" r="0.7"/>
                        <circle cx="15" cy="105" r="0.7"/>
                      </g>
                      {/* Connecting lines */}
                      <g stroke={newsColor.secondary} strokeWidth="0.04" opacity="0.15">
                        <line x1="25" y1="15" x2="95" y2="15"/>
                        <line x1="15" y1="25" x2="15" y2="95"/>
                      </g>
                    </svg>
                  </div>

                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    {article.featured_media_url ? (
                      <img
                        src={article.featured_media_url}
                        alt={stripHtml(article.title.rendered)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x200/e2e8f0/64748b?text=Al+Wafi+News";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="text-center">
                          <i className="fas fa-newspaper text-4xl text-gray-400 mb-2"></i>
                          <p className="text-sm text-gray-500">Al Wafi News</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-6">
                    {/* Date and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                        style={{ 
                          background: `linear-gradient(90deg, ${newsColor.primary} 0%, ${newsColor.secondary} 100%)`
                        }}
                      >
                        Berita
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(article.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg font-bold mb-3 bg-clip-text text-transparent leading-tight"
                      style={{ 
                        backgroundImage: `linear-gradient(90deg, ${newsColor.primary} 0%, ${newsColor.secondary} 100%)`
                      }}
                    >
                      {stripHtml(article.title.rendered)}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {truncateText(stripHtml(article.excerpt.rendered))}
                    </p>

                    {/* Read More Button */}
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: newsColor.primary }}
                    >
                      Baca Selengkapnya
                      <i className="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>

                    {/* Accent line */}
                    <div 
                      className="w-16 h-1 mt-4 rounded-full group-hover:w-24 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(90deg, ${newsColor.primary} 0%, ${newsColor.secondary} 100%)`
                      }}
                    ></div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* More News CTA */}
        {!loading && !error && news.length > 0 && (
          <div className="text-center mt-16">
            <a
              href="https://al-wafi.sch.id/news"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${colors.primary.blue} 0%, ${colors.primary.purple} 50%, ${colors.primary.indigo} 100%)`,
                color: 'white'
              }}
            >
              <i className="fas fa-newspaper mr-3"></i>
              Lihat Semua Berita
              <i className="fas fa-external-link-alt ml-3 text-sm"></i>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
