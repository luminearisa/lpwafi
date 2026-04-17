import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const News = ({ data }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { t, language } = useLanguage();

  // Warna brand dari logo
  const brandTeal = "#29A6B6";
  const brandGreen = "#349B48";

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

    // re-format tanggal buat bahasa
    const locale = language === 'en' ? 'en-US' : 'id-ID';
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncateText = (text, maxLength = 130) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <section
      id="news"
      className="py-32 relative overflow-hidden bg-white"
    >
      {/* --- SUBTLE EDITORIAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="news-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#000000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#news-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="text-center mb-24">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#29A6B6] mb-6 border border-[#29A6B6]/20 px-4 py-2 bg-[#f0f9fa]/50">
            {t('news.header.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
            {t('news.header.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('news.header.desc')}
          </p>
          <div className="w-16 h-1 bg-[#349B48] mx-auto mt-10"></div>
        </div>

        {/* --- NEWS CONTENT --- */}
        {loading ? (
          <div className="text-center py-32 flex flex-col items-center">
            <div className="w-12 h-12 border-2 border-gray-100 border-t-[#29A6B6] rounded-full animate-spin mb-6"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
              {t('news.status.loading')}
            </span>
          </div>
        ) : error ? (
          <div className="text-center py-20 max-w-lg mx-auto">
            <div className="border border-red-100 bg-red-50 p-8 flex items-start text-start">
              <i className="fas fa-exclamation-circle text-red-500 text-xl mt-1 me-4"></i>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {t('news.status.error_title')}
                </h3>
                <p className="text-gray-600 font-light text-sm">
                  {t('news.status.error_desc')}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {news.map((article, index) => {
              // Alternating accents between Teal and Green
              const isTeal = index % 2 === 0;
              const themeColor = isTeal ? brandTeal : brandGreen;
              const themeBg = isTeal ? '#f0f9fa' : '#f2fbf4';

              return (
                <article
                  key={article.id}
                  className="group bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col hover:-translate-y-1"
                >
                  {/* Featured Image - Editorial Style */}
                  <div className="relative h-60 overflow-hidden bg-gray-50 border-b border-gray-100 p-2">
                    {article.featured_media_url ? (
                      <img
                        src={article.featured_media_url}
                        alt={stripHtml(article.title.rendered)}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=Al+Wafi+News";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <i className="fas fa-newspaper text-3xl text-gray-300"></i>
                      </div>
                    )}
                    {/* Inner overlay frame */}
                    <div className="absolute inset-2 border border-white/40 pointer-events-none mix-blend-overlay"></div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-grow">

                    {/* Meta Data (Tag & Date) */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-[9px] font-bold uppercase tracking-widest px-3 py-1"
                        style={{ color: themeColor, backgroundColor: themeBg }}
                      >
                        {t('news.card.tag')}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                        {formatDate(article.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#29A6B6] transition-colors duration-300 line-clamp-2">
                      {stripHtml(article.title.rendered)}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm leading-relaxed font-light mb-8 flex-grow">
                      {truncateText(stripHtml(article.excerpt.rendered))}
                    </p>

                    {/* Read More Link */}
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 mt-auto w-fit"
                      style={{ color: themeColor }}
                    >
                      {t('news.card.read_more')}
                      <i className="fas fa-arrow-right ms-3 text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </a>

                    {/* Animated bottom line */}
                    <div
                      className="h-0.5 w-0 group-hover:w-full mt-6 transition-all duration-700 ease-out"
                      style={{ backgroundColor: themeColor }}
                    ></div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* --- MORE NEWS CTA --- */}
        {!loading && !error && news.length > 0 && (
          <div className="text-center mt-24 border-t border-gray-100 pt-16">
            <a
              href="https://al-wafi.sch.id/news"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#111827] text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#29A6B6] hover:-translate-y-1 hover:shadow-xl"
            >
              <span>{t('news.cta')}</span>
              <i className="fas fa-external-link-alt ms-4 text-[10px]"></i>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;