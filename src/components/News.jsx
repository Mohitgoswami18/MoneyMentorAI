import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const News = ({ onClose }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        className="bg-[#1f2937] w-[95%] h-[90%] rounded-2xl p-8 relative overflow-hidden flex flex-col border border-gray-600 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold z-10"
        >
          ✕
        </button>
        <h2 className="text-4xl text-[#E6EDF3] font-bold mb-8 text-center">
          Market News
        </h2>

        {loading && <div className="text-center text-white py-8">Loading News...</div>}
        {error && <div className="text-center text-red-500 py-8">Error: {error}</div>}
        {!loading && !error && newsArticles.length === 0 && (
          <div className="text-center text-white py-8">No news available.</div>
        )}

        {!loading && !error && newsArticles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto pr-2 custom-scrollbar">
            {newsArticles.map((article, index) => {
              const imageSrc =
                article.urlToImage ||
                'https://via.placeholder.com/400x250/1f2937/FFFFFF?text=No+Image';

              return (
                <div
                  key={index}
                  className="bg-[#374151] border border-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col gap-4 h-full"
                >
                  <div className="w-full h-48 rounded-lg overflow-hidden bg-[#1f2937] border border-gray-700 flex items-center justify-center">
                    <img
                      src={imageSrc}
                      alt={article.title || 'market news'}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col flex-1 gap-4">
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-3">
                      {article.description || 'Tap in to read the full story.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-300 font-medium">
                      {article.source?.name || 'Unknown source'}
                    </span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default News;
