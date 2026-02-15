import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Portfolio() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Desktop Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const beholdUrl = "https://feeds.behold.so/vmbR8wdd8bDCVz1z5SDe"; 

  useEffect(() => {
    fetch(beholdUrl)
      .then(res => res.json())
      .then(data => {
        const actualPosts = Array.isArray(data) ? data : (data.posts || data.data || []);
        setPosts(actualPosts);
        setLoading(false);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  // Pagination Logic (Desktop)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-brand-black">Portfolio</h2>
          <p className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">@cb_colour</p>
        </div>

        {loading ? (
          <div className="flex gap-4 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="min-w-[80%] md:min-w-0 md:flex-1 aspect-[4/5] bg-brand-beige rounded-sm" />
            ))}
          </div>
        ) : (
          <>
            {/* MOBILE: Horizontal Slider */}
            <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-8">
              {posts.map((post) => (
                <div key={post.id} className="min-w-[85%] snap-center">
                  <PortfolioCard post={post} />
                </div>
              ))}
            </div>

            {/* DESKTOP: Paginated Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <PortfolioCard key={post.id} post={post} />
              ))}
            </div>

            {/* DESKTOP: Pagination Controls */}
            <div className="hidden md:flex justify-center items-center gap-8 mt-16">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="disabled:opacity-20 transition-all hover:text-brand-gold"
              >
                <ChevronLeft size={30} strokeWidth={1} />
              </button>
              
              <span className="text-[10px] uppercase tracking-widest font-bold">
                {currentPage} / {totalPages}
              </span>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="disabled:opacity-20 transition-all hover:text-brand-gold"
              >
                <ChevronRight size={30} strokeWidth={1} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Sub-component for the Individual Cards
function PortfolioCard({ post }) {
  const isVideo = post.mediaType === 'VIDEO' || post.media_type === 'VIDEO';
  
  return (
    <a 
      href={post.permalink} 
      target="_blank" 
      rel="noreferrer"
      className="group relative block aspect-[4/5] overflow-hidden bg-brand-beige rounded-sm shadow-sm"
    >
      <img 
        src={post.thumbnailUrl || post.mediaUrl || post.media_url} 
        alt="Hair Transformation" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        loading="lazy"
      />
      {isVideo && (
        <div className="absolute top-4 right-4 text-white/90 bg-black/10 backdrop-blur-sm p-1.5 rounded-full">
          <svg fill="currentColor" viewBox="0 0 16 16" width="12" height="12">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>
        </div>
      )}
    </a>
  );
}