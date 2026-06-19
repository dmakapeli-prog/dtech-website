"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "./data";

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  const categories = ["Semua", "Website", "Undangan Digital", "Tips Bisnis", "Tutorial"];
  
  const filteredArticles = activeCategory === "Semua" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const getGradientAndEmoji = (category) => {
    switch (category) {
      case "Website": return { gradient: "from-blue-900 to-blue-600", emoji: "🌐", badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20" };
      case "Undangan Digital": return { gradient: "from-pink-900 to-rose-600", emoji: "💌", badgeClass: "bg-pink-500/10 text-pink-400 border-pink-500/20" };
      case "Tips Bisnis": return { gradient: "from-green-900 to-emerald-600", emoji: "💼", badgeClass: "bg-green-500/10 text-green-400 border-green-500/20" };
      case "Tutorial": return { gradient: "from-purple-900 to-fuchsia-600", emoji: "📚", badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20" };
      default: return { gradient: "from-gray-900 to-gray-600", emoji: "📄", badgeClass: "bg-gray-500/10 text-gray-400 border-gray-500/20" };
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm mb-6">
            ARTIKEL & TIPS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">DiCode</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Tips, trik, dan insight seputar dunia digital untuk membantu bisnis Anda berkembang.
          </p>
        </div>

        {/* FILTER KATEGORI */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID ARTIKEL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            const { gradient, emoji, badgeClass } = getGradientAndEmoji(article.category);
            return (
              <Link href={`/blog/${article.slug}`} key={article.id} className="group flex flex-col h-full bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-cyan-500/30">
                {/* Image Placeholder */}
                <div className={`h-[200px] w-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{emoji}</span>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${badgeClass}`}>
                      {article.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  {/* Footer Card */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>{article.readTime}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
