"use client";

import React, { useEffect, useState } from 'react';

export default function KatalogProdukDemo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans selection:bg-[#C8963E] selection:text-white">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --cream-bg: #FAFAF8;
          --dark: #1A1A1A;
          --gold: #C8963E;
          --gray: #6B7280;
          --highlight: #FFF8EE;
        }
        
        .font-editorial {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          letter-spacing: -0.02em;
        }

        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        
        .marquee-content {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .image-zoom-hover img {
          transition: transform 0.8s ease;
        }
        .image-zoom-hover:hover img {
          transform: scale(1.05);
        }

        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* 1. TOP BAR */}
      <div className="bg-[#1A1A1A] text-white px-6 py-2.5 flex justify-between items-center text-xs md:text-sm font-medium tracking-wide">
        <a href="/template" className="hover:text-[#C8963E] transition-colors flex items-center gap-2">
          <span>&larr;</span> Kembali ke Template
        </a>
        <a 
          href="https://wa.me/6281996522114?text=Halo DTech, saya tertarik template Katalog Produk"
          target="_blank"
          rel="noopener noreferrer" 
          className="text-[#C8963E] hover:text-white transition-colors flex items-center gap-2"
        >
          Pesan Template Ini <span>&rarr;</span>
        </a>
      </div>

      {/* 2. NAVBAR - ELEGANT MINIMAL */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'py-4 shadow-sm' : 'py-6 border-b border-[#E5E7EB]'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8963E]">
              <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor"/>
            </svg>
            <div>
              <div className="font-editorial text-2xl font-bold tracking-widest leading-none">LUXE</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#6B7280] mt-1">Premium Collection</div>
            </div>
          </div>

          {/* Center Menu */}
          <div className="hidden lg:flex items-center gap-12 text-[13px] font-semibold uppercase tracking-widest text-[#1A1A1A]">
            <a href="#" className="hover:text-[#C8963E] transition-colors">Beranda</a>
            <a href="#" className="hover:text-[#C8963E] transition-colors">Koleksi</a>
            <a href="#" className="hover:text-[#C8963E] transition-colors">Tentang</a>
            <a href="#" className="hover:text-[#C8963E] transition-colors">Kontak</a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button className="text-[#1A1A1A] hover:text-[#C8963E] transition-colors" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button className="text-[#1A1A1A] hover:text-[#C8963E] transition-colors hidden sm:block" aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="text-[#1A1A1A] hover:text-[#C8963E] transition-colors relative" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="absolute -top-1.5 -right-2 bg-[#C8963E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">3</span>
            </button>
            <a href="#" className="hidden md:block text-[13px] font-semibold uppercase tracking-widest hover:text-[#C8963E] transition-colors ml-4 border-l border-[#E5E7EB] pl-6">
              Masuk
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO - EDITORIAL MAGAZINE STYLE */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-120px)] w-full">
        {/* Left Half - Content */}
        <div className="lg:w-1/2 bg-[#FFF8EE] px-8 md:px-16 py-20 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:ml-auto lg:mr-16 w-full">
            <p className="text-[#C8963E] text-xs font-bold tracking-[0.3em] uppercase mb-8">Koleksi Terbaru 2026</p>
            
            <h1 className="font-editorial text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-[1.1] mb-10">
              Tampil Elegan,<br/>
              Tampil Percaya Diri.
            </h1>
            
            <div className="w-16 h-px bg-[#C8963E] mb-8"></div>
            
            <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed mb-12 max-w-md">
              Temukan koleksi fashion dan aksesori premium pilihan kami. Setiap produk dirancang untuk menonjolkan keanggunan dan kepercayaan diri Anda.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-[#C8963E] transition-colors duration-300">
                Jelajahi Koleksi
              </button>
              <button className="bg-transparent text-[#C8963E] border-2 border-[#C8963E] px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-[#C8963E] hover:text-white transition-colors duration-300">
                Lihat Katalog
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-[#6B7280] text-sm">
              <span className="flex items-center gap-2"><span className="text-[#C8963E]">✦</span> 500+ Produk Premium</span>
              <span className="flex items-center gap-2"><span className="text-[#C8963E]">✦</span> Pengiriman Gratis</span>
              <span className="flex items-center gap-2"><span className="text-[#C8963E]">✦</span> Return 30 Hari</span>
            </div>
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="lg:w-1/2 relative h-[60vh] lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&fit=crop&auto=format" 
            alt="Editorial Fashion Lifestyle" 
            className="absolute inset-0 w-full h-full object-cover object-top"
            crossOrigin="anonymous"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 md:bottom-16 md:-left-16 bg-white p-6 md:p-8 shadow-2xl max-w-[280px]">
            <p className="font-editorial text-2xl font-bold text-[#1A1A1A] mb-2">Koleksi Musim Ini</p>
            <p className="text-[#C8963E] font-medium tracking-wide mb-6">Diskon hingga 40%</p>
            <button className="bg-[#C8963E] text-white w-full py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#1A1A1A] transition-colors">
              Lihat Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* 4. MARQUEE/TICKER */}
      <div className="bg-[#1A1A1A] py-4 marquee-container border-y border-[#333]">
        <div className="marquee-content text-[#C8963E] text-xs font-bold tracking-[0.2em] uppercase">
          {/* Repeat content twice for smooth infinite scroll */}
          FASHION ✦ AKSESORI ✦ KECANTIKAN ✦ GAYA HIDUP ✦ PENGIRIMAN GRATIS ✦ KOLEKSI TERBARU 2026 ✦ FASHION ✦ AKSESORI ✦ KECANTIKAN ✦ GAYA HIDUP ✦ PENGIRIMAN GRATIS ✦ KOLEKSI TERBARU 2026 ✦ FASHION ✦ AKSESORI ✦ KECANTIKAN ✦ GAYA HIDUP ✦ PENGIRIMAN GRATIS ✦ KOLEKSI TERBARU 2026 ✦
        </div>
      </div>

      {/* 5. KATEGORI - EDITORIAL GRID */}
      <div className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-[#C8963E] text-xs font-bold tracking-[0.2em] uppercase mb-4">Jelajahi</p>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-[#1A1A1A]">Kategori Pilihan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Left Large Card (40% roughly, 2 of 5 columns) */}
            <div className="md:col-span-2 relative h-[400px] md:h-[600px] rounded-xl overflow-hidden image-zoom-hover group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80&fit=crop&auto=format" 
                alt="Fashion & Pakaian" 
                className="absolute inset-0 w-full h-full object-cover"
                crossOrigin="anonymous"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-editorial font-bold mb-2">Fashion & Pakaian</h3>
                <span className="text-white/80 text-sm tracking-wider uppercase font-medium group-hover:text-[#C8963E] transition-colors">Lihat Koleksi &rarr;</span>
              </div>
            </div>

            {/* Right Side Stack (60% roughly, 3 of 5 columns) */}
            <div className="md:col-span-3 flex flex-col gap-6 h-auto md:h-[600px]">
              {/* Top Right */}
              <div className="relative flex-1 rounded-xl overflow-hidden image-zoom-hover group cursor-pointer min-h-[250px]">
                <img 
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80&fit=crop&auto=format" 
                  alt="Tas & Aksesoris" 
                  className="absolute inset-0 w-full h-full object-cover"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-2xl font-editorial font-bold mb-2">Tas & Aksesoris</h3>
                  <span className="text-white/80 text-sm tracking-wider uppercase font-medium group-hover:text-[#C8963E] transition-colors">Lihat Koleksi &rarr;</span>
                </div>
              </div>
              
              {/* Bottom Right */}
              <div className="relative flex-1 rounded-xl overflow-hidden image-zoom-hover group cursor-pointer min-h-[250px]">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&fit=crop&auto=format" 
                  alt="Jam & Perhiasan" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-2xl font-editorial font-bold mb-2">Jam & Perhiasan</h3>
                  <span className="text-white/80 text-sm tracking-wider uppercase font-medium group-hover:text-[#C8963E] transition-colors">Lihat Koleksi &rarr;</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Equal Cards Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="relative h-[300px] rounded-xl overflow-hidden image-zoom-hover group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80&fit=crop&auto=format" 
                alt="Kecantikan" 
                className="absolute inset-0 w-full h-full object-cover"
                crossOrigin="anonymous"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-editorial font-bold mb-2">Kecantikan</h3>
                <span className="text-white/80 text-xs tracking-wider uppercase font-medium group-hover:text-[#C8963E] transition-colors">Lihat Koleksi &rarr;</span>
              </div>
            </div>
            
            <div className="relative h-[300px] rounded-xl overflow-hidden image-zoom-hover group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&fit=crop&auto=format" 
                alt="Sepatu" 
                className="absolute inset-0 w-full h-full object-cover object-bottom"
                crossOrigin="anonymous"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-editorial font-bold mb-2">Sepatu</h3>
                <span className="text-white/80 text-xs tracking-wider uppercase font-medium group-hover:text-[#C8963E] transition-colors">Lihat Koleksi &rarr;</span>
              </div>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden image-zoom-hover group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80&fit=crop&auto=format" 
                alt="Parfum & Wewangian" 
                className="absolute inset-0 w-full h-full object-cover"
                crossOrigin="anonymous"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-editorial font-bold mb-2">Parfum & Wewangian</h3>
                <span className="text-white/80 text-xs tracking-wider uppercase font-medium group-hover:text-[#C8963E] transition-colors">Lihat Koleksi &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. PRODUK UNGGULAN - LUXURY GRID */}
      <div className="bg-[#FFF8EE] py-24 px-6 md:px-12 border-y border-[#E5E7EB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[#C8963E] text-xs font-bold tracking-[0.2em] uppercase mb-4">Pilihan Editor</p>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold text-[#1A1A1A]">Produk Terlaris Minggu Ini</h2>
            </div>
            <a href="#" className="text-[#C8963E] font-bold tracking-wider uppercase text-sm border-b-2 border-[#C8963E] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors">
              Lihat Semua &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="product-card group cursor-pointer bg-white">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80&fit=crop&auto=format" 
                  alt="Fashion" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="p-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Fashion</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Kemeja Linen Premium Pria</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#1A1A1A] font-medium">Rp 385.000</span>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <span className="text-[#C8963E]">★</span> 4.9 <span className="text-xs">(128)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="product-card group cursor-pointer bg-white">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80&fit=crop&auto=format" 
                  alt="Bag" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1">SALE 30%</div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="p-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Tas & Aksesoris</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Tas Tote Kulit Genuine</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6B7280] line-through text-sm">Rp 650.000</span>
                    <span className="text-[#1A1A1A] font-bold">Rp 455.000</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <span className="text-[#C8963E]">★</span> 4.8 <span className="text-xs">(96)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="product-card group cursor-pointer bg-white">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&fit=crop&auto=format" 
                  alt="Watch" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="p-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Jam Tangan</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Jam Tangan Analog Klasik</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#1A1A1A] font-medium">Rp 299.000</span>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <span className="text-[#C8963E]">★</span> 4.9 <span className="text-xs">(214)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="product-card group cursor-pointer bg-white">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&fit=crop&auto=format" 
                  alt="Shoes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1">SALE 30%</div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="p-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Sepatu</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Sepatu Loafer Formal Pria</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6B7280] line-through text-sm">Rp 520.000</span>
                    <span className="text-[#1A1A1A] font-bold">Rp 364.000</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <span className="text-[#C8963E]">★</span> 4.7 <span className="text-xs">(87)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. LIFESTYLE BANNER - FULL WIDTH */}
      <div className="relative w-full h-[500px] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80&fit=crop&auto=format" 
          alt="Lifestyle Banner" 
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <span className="inline-block bg-[#C8963E] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-6">KOLEKSI EKSKLUSIF</span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Gaya Hidup Premium untuk Setiap Momen
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-md">
              Dari pagi hingga malam, tampil memukau dengan koleksi pilihan kami.
            </p>
            <button className="bg-[#C8963E] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300">
              Belanja Sekarang &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* 8. PRODUK BARU - HORIZONTAL SCROLL STYLE */}
      <div className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="text-[#C8963E] text-xs font-bold tracking-[0.2em] uppercase mb-4">Baru Masuk</p>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Koleksi Terkini</h2>
            <p className="text-[#6B7280]">Update setiap minggu</p>
          </div>

          {/* Horizontal scroll container on mobile, grid on desktop */}
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
            {/* Card 5 */}
            <div className="product-card group cursor-pointer bg-white min-w-[280px] md:min-w-0 snap-center">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80&fit=crop&auto=format" 
                  alt="Skincare" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 shadow-sm">NEW</div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="py-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Kecantikan</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Serum Vitamin C Brightening</h3>
                <div className="text-[#1A1A1A] font-medium">Rp 185.000</div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="product-card group cursor-pointer bg-white min-w-[280px] md:min-w-0 snap-center">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&fit=crop&auto=format" 
                  alt="Accessories" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 shadow-sm">NEW</div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="py-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Aksesori</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Kalung Emas 24K Lapis</h3>
                <div className="text-[#1A1A1A] font-medium">Rp 245.000</div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="product-card group cursor-pointer bg-white min-w-[280px] md:min-w-0 snap-center">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1623609163859-ca93c959b98a?w=600&q=80&fit=crop&auto=format" 
                  alt="Clothing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 shadow-sm">NEW</div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="py-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Fashion</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Dress Midi Floral Premium</h3>
                <div className="text-[#1A1A1A] font-medium">Rp 425.000</div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="product-card group cursor-pointer bg-white min-w-[280px] md:min-w-0 snap-center">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80&fit=crop&auto=format" 
                  alt="Perfume" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  crossOrigin="anonymous"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-4 left-4 bg-white text-[#1A1A1A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 shadow-sm">NEW</div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C8963E] hover:shadow-md transition-all shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="py-6">
                <p className="text-[#C8963E] text-[10px] font-bold tracking-widest uppercase mb-2">Parfum</p>
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">Parfum Eau de Parfum Oriental</h3>
                <div className="text-[#1A1A1A] font-medium">Rp 320.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. BRAND PROMISE - MINIMAL DARK SECTION */}
      <div className="bg-[#1A1A1A] text-white py-20 px-6 md:px-12 border-b border-[#333]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-editorial text-3xl font-bold text-center mb-16 text-white">Mengapa Memilih LUXE?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            <div>
              <div className="text-[#C8963E] text-3xl mb-4 flex justify-center lg:justify-start">✦</div>
              <h3 className="font-bold text-lg mb-3">Produk 100% Original</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Semua produk bergaransi keaslian dari brand resmi.</p>
            </div>
            <div>
              <div className="text-[#C8963E] text-3xl mb-4 flex justify-center lg:justify-start">✦</div>
              <h3 className="font-bold text-lg mb-3">Pengiriman Gratis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Gratis ongkir untuk semua pembelian di atas Rp 200.000.</p>
            </div>
            <div>
              <div className="text-[#C8963E] text-3xl mb-4 flex justify-center lg:justify-start">✦</div>
              <h3 className="font-bold text-lg mb-3">Return 30 Hari</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Tidak puas? Kembalikan dalam 30 hari, uang kembali penuh.</p>
            </div>
            <div>
              <div className="text-[#C8963E] text-3xl mb-4 flex justify-center lg:justify-start">✦</div>
              <h3 className="font-bold text-lg mb-3">CS Responsif</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Tim customer service kami siap membantu 7 hari seminggu.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 10. TESTIMONI - EDITORIAL STYLE */}
      <div className="bg-[#FAFAF8] py-24 px-6 md:px-12 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C8963E] text-xs font-bold tracking-[0.2em] uppercase mb-4">Ulasan Pelanggan</p>
          <h2 className="font-editorial text-4xl font-bold text-[#1A1A1A] mb-16">Mereka Sudah Merasakan</h2>
          
          {/* Featured Quote */}
          <div className="mb-20">
            <p className="font-editorial text-2xl md:text-3xl italic text-[#1A1A1A] leading-relaxed mb-8">
              "Kualitasnya benar-benar premium! Saya sudah berbelanja 3 kali dan selalu puas. Packaging-nya juga sangat elegan dan rapi."
            </p>
            <div className="text-[#C8963E] mb-2 tracking-widest text-sm">★★★★★</div>
            <p className="text-[#6B7280] font-medium">— Rina Susanti, Jakarta</p>
          </div>

          {/* 3 Smaller Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left pt-12 border-t border-[#E5E7EB]">
            <div>
              <div className="text-[#C8963E] mb-3 text-xs tracking-widest">★★★★★</div>
              <p className="text-[#1A1A1A] font-bold mb-2">Budi W.</p>
              <p className="text-[#6B7280] text-sm italic">"Jam tangannya persis seperti di foto, kualitas sangat baik untuk harganya!"</p>
            </div>
            <div>
              <div className="text-[#C8963E] mb-3 text-xs tracking-widest">★★★★★</div>
              <p className="text-[#1A1A1A] font-bold mb-2">Sari A.</p>
              <p className="text-[#6B7280] text-sm italic">"Pengiriman super cepat, produk original. Pasti akan beli lagi!"</p>
            </div>
            <div>
              <div className="text-[#C8963E] mb-3 text-xs tracking-widest">★★★★★</div>
              <p className="text-[#1A1A1A] font-bold mb-2">Ahmad R.</p>
              <p className="text-[#6B7280] text-sm italic">"Tas kulitnya premium banget. Sudah dapat banyak pujian di kantor!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* 11. NEWSLETTER SECTION */}
      <div className="bg-gradient-to-br from-[#C8963E] to-[#E8B86D] py-24 px-6 md:px-12 text-[#1A1A1A]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-editorial text-4xl font-bold mb-6">Dapatkan Penawaran Eksklusif</h2>
          <p className="text-lg font-medium mb-10 max-w-md mx-auto">
            Daftarkan email Anda dan dapatkan diskon 15% untuk pembelian pertama!
          </p>
          
          <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="flex-1 bg-white border-0 px-6 py-4 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] font-medium"
              required
            />
            <button className="bg-[#1A1A1A] text-white px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-black transition-colors">
              Daftar Sekarang
            </button>
          </form>
          <p className="text-sm font-medium opacity-80">Tidak ada spam. Berhenti kapan saja.</p>
        </div>
      </div>

      {/* 12. FOOTER - ELEGANT */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Logo Top Center */}
          <div className="flex flex-col items-center mb-16">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8963E] mb-4">
              <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor"/>
            </svg>
            <div className="font-editorial text-3xl font-bold tracking-widest text-[#C8963E]">LUXE</div>
          </div>
          
          <div className="w-full h-px bg-[#333] mb-16"></div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <p className="text-gray-400 leading-relaxed text-sm mb-8 pr-4">
                Destinasi belanja fashion dan gaya hidup premium Anda. Mewujudkan gaya elegan dengan koleksi produk berkualitas tinggi.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder styling */}
                {['fb', 'ig', 'tw', 'pt'].map(icon => (
                  <a key={icon} href="#" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#C8963E] hover:bg-[#C8963E] hover:text-white transition-colors text-xs font-bold uppercase">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Belanja</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">Koleksi Baru</a></li>
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">Terlaris</a></li>
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">Sale</a></li>
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">Semua Produk</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Bantuan</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">Cara Belanja</a></li>
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">Pengiriman</a></li>
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">Return & Refund</a></li>
                <li><a href="#" className="hover:text-[#C8963E] transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Kontak</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex gap-3">
                  <span className="text-[#C8963E]">📧</span> hello@luxe.id
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C8963E]">📱</span> +62 819 9652 2114
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C8963E]">📍</span> Sukabumi, Jawa Barat
                </li>
                <li className="text-gray-500 mt-2">
                  Jam: Senin-Sabtu 09.00-21.00
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-[#C8963E] text-xs font-bold tracking-wider uppercase opacity-80">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>BCA</span>
            <span>GoPay</span>
            <span>OVO</span>
            <span>Dana</span>
          </div>

          <div className="w-full h-px bg-[#333] mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
            <p>© 2026 LUXE Premium Collection. All rights reserved.</p>
            <p>
              Website dibuat oleh <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#C8963E] hover:text-white transition-colors">DTech</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
