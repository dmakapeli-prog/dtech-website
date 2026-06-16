"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function ProfilPortofolioDemo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    if (!isMounted) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [isMounted]);

  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans overflow-x-hidden selection:bg-[#00D4FF] selection:text-[#050510]">
      {/* CSS Animations & Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --bg-dark: #050510;
          --cyan: #00D4FF;
          --purple: #8B5CF6;
          --glass: rgba(255, 255, 255, 0.05);
        }
        
        body {
          background-color: var(--bg-dark);
          color: white;
        }

        .glass-card {
          background: var(--glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dot-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* Fade Up Animation */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }

        /* Typewriter Animation */
        .typewriter-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid var(--cyan);
          animation: typing 4s steps(30, end) infinite, blink .75s step-end infinite;
        }
        
        @keyframes typing {
          0%, 100% { width: 0 }
          50%, 80% { width: 100% }
        }
        
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--cyan) }
        }

        /* Blobs */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate ease-in-out;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow {
          animation: spin-slow 8s linear infinite;
        }
          
        /* Custom Progress Bars Animation */
        .progress-bar-fill {
          width: 0;
          transition: width 1.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .animate-in .progress-bar-fill {
          /* The width is set inline, transition will naturally animate it from 0 if we mount it, but using IntersectionObserver we just need to trigger a re-render or class change. For simplicity, we use width in style and transition will happen if it's rendered with 0 then updated. Actually, intersection observer just adds animate-in. We can use CSS variable. */
        }
        .fade-up.animate-in .progress-bar-fill {
          /* Trick to animate progress: */
          animation: fillProgress 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fillProgress {
          from { max-width: 0; }
          to { max-width: 100%; }
        }
      `}} />

      {/* Cursor Glow Effect */}
      {isMounted && (
        <div 
          className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.05), transparent 40%)`
          }}
        />
      )}

      {/* 1. TOP BAR */}
      <div className="bg-[rgba(0,212,255,0.05)] border-b border-[#00D4FF]/20 px-4 py-2 flex justify-between items-center text-sm font-medium relative z-50 backdrop-blur-md">
        <a href="/template" className="text-[#00D4FF] hover:text-white transition-colors flex items-center gap-2">
          <span>&larr;</span> Kembali ke Template
        </a>
        <a 
          href="https://wa.me/6281996522114?text=Halo DiCode, saya tertarik template Profil & Portofolio"
          target="_blank"
          rel="noopener noreferrer" 
          className="text-[#00D4FF] hover:text-white transition-colors flex items-center gap-2"
        >
          Pesan Template Ini <span>&rarr;</span>
        </a>
      </div>

      {/* 2. NAVBAR */}
      <nav className="sticky top-0 z-40 bg-[#050510]/50 backdrop-blur-xl border-b border-white/5 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-[#00D4FF] tracking-tighter">
            &lt;/Arif&gt;
          </div>
          
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
            {['Beranda', 'Tentang', 'Keahlian', 'Karya', 'Kontak'].map((item, idx) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 hover:text-white relative group ${idx === 0 ? 'text-white' : 'text-gray-400'}`}
              >
                {item}
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#00D4FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>
          
          <a 
            href="#kontak"
            className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
          >
            Hire Me 🚀
          </a>
        </div>
      </nav>

      {/* 3. HERO SECTION - FULL CREATIVE */}
      <div className="relative min-h-[90vh] flex flex-col justify-center pt-10 pb-20 overflow-hidden dot-pattern" id="beranda">
        {/* Background Blobs */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#00D4FF] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8 mt-10">
          
          {/* LEFT SIDE 55% */}
          <div className="lg:w-[55%] flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-bold mb-8 fade-up">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
              <span className="text-gray-200">Tersedia untuk Project Baru</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] fade-up delay-100">
              <span className="text-white font-normal block mb-2">Halo, Saya</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] block mb-2">
                Arif Pratama
              </span>
              <span className="text-transparent font-black" style={{WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>
                Digital Creative
              </span>
            </h1>
            
            <div className="h-12 mb-6 text-2xl md:text-3xl font-semibold text-gray-300 fade-up delay-200">
              <span className="typewriter-text">UI/UX Designer ✦</span>
            </div>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed fade-up delay-300">
              Saya menciptakan pengalaman digital yang memukau dan fungsional. Spesialis desain UI/UX & pengembangan web modern untuk startup, UMKM, dan personal brand.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 mb-12 fade-up delay-300">
              <a href="#karya" className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all hover:-translate-y-1">
                Lihat Karya Saya
              </a>
              <button className="bg-transparent border-2 border-[#00D4FF] text-[#00D4FF] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00D4FF]/10 transition-all">
                Download CV
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 fade-up delay-300">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-[#050510] object-cover" alt="Client"/>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-[#050510] object-cover" alt="Client"/>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-[#050510] object-cover" alt="Client"/>
              </div>
              <div>
                <p className="text-white font-bold text-lg">50+ Klien Puas ⭐ 4.9</p>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-gray-500 font-medium text-sm fade-up delay-300">
              {['Figma', 'React', 'Next.js', 'Tailwind', 'Node.js', 'Framer'].map((tech, i) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {i < 5 && <span>·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE 45% */}
          <div className="lg:w-[45%] relative flex justify-center items-center fade-up delay-200">
            {/* Glowing effect behind photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] rounded-full blur-[80px] opacity-40 animate-pulse"></div>
            
            {/* Profile Photo with rotating border */}
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] z-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#8B5CF6]/40 spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-[#00D4FF]/60 spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}></div>
              
              <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-[#050510] shadow-[0_0_50px_rgba(0,212,255,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" 
                  alt="Arif Pratama Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-10 left-0 md:-left-4 glass-card px-5 py-3 rounded-2xl animate-float z-20 flex items-center gap-3 border border-white/10 shadow-xl">
              <span className="font-bold text-sm">🎨 UI/UX</span>
            </div>
            
            <div className="absolute top-20 right-0 md:-right-8 glass-card px-5 py-3 rounded-2xl animate-float z-20 flex items-center gap-3 border border-white/10 shadow-xl" style={{animationDelay: '1s'}}>
              <span className="font-bold text-sm">⚡ Fast</span>
            </div>
            
            <div className="absolute bottom-24 left-0 md:-left-8 glass-card px-5 py-3 rounded-2xl animate-float z-20 flex items-center gap-3 border border-white/10 shadow-xl" style={{animationDelay: '2s'}}>
              <span className="font-bold text-sm">💻 Dev</span>
            </div>

            <div className="absolute bottom-10 right-0 md:-right-4 glass-card px-5 py-3 rounded-2xl animate-float z-20 flex items-center gap-3 border border-white/10 shadow-xl" style={{animationDelay: '3s'}}>
              <span className="font-bold text-sm">🏆 50+ Project</span>
            </div>
          </div>
        </div>

        {/* BOTTOM OF HERO - Stats */}
        <div className="max-w-7xl mx-auto px-6 w-full mt-24 relative z-10 fade-up delay-300">
          <div className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
              <div className="flex flex-col items-center md:items-start px-4 text-center md:text-left">
                <span className="text-4xl font-black text-white mb-2">50<span className="text-[#00D4FF]">+</span></span>
                <span className="text-gray-400 font-medium">Proyek Selesai</span>
              </div>
              <div className="flex flex-col items-center md:items-start px-4 text-center md:text-left">
                <span className="text-4xl font-black text-white mb-2">3<span className="text-[#8B5CF6]">+</span></span>
                <span className="text-gray-400 font-medium">Tahun Pengalaman</span>
              </div>
              <div className="flex flex-col items-center md:items-start px-4 text-center md:text-left">
                <span className="text-4xl font-black text-white mb-2">98<span className="text-[#00D4FF]">%</span></span>
                <span className="text-gray-400 font-medium">Tingkat Kepuasan</span>
              </div>
              <div className="flex flex-col items-center md:items-start px-4 text-center md:text-left">
                <span className="text-4xl font-black text-white mb-2">24<span className="text-[#8B5CF6]">h</span></span>
                <span className="text-gray-400 font-medium">Waktu Respon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ABOUT SECTION */}
      <div className="py-32 bg-[#080812] relative border-t border-white/5" id="tentang">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT - Photo & Decor */}
          <div className="relative fade-up">
            <div className="absolute -inset-4 border-2 border-[#00D4FF]/30 rounded-[2.5rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
            <div className="absolute -inset-4 border-2 border-[#8B5CF6]/30 rounded-[2.5rem] transform rotate-3 transition-transform hover:rotate-0 duration-500"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden bg-[#111] aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                alt="Arif Pratama" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Brackets */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-[#00D4FF] rounded-tl-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-[#8B5CF6] rounded-br-2xl"></div>

            {/* Floating Card */}
            <div className="absolute -right-10 bottom-10 glass-card p-5 rounded-2xl border border-white/10 shadow-2xl animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center text-2xl shadow-inner">🏆</div>
                <div>
                  <p className="text-white font-bold text-lg">Best Designer 2024</p>
                  <p className="text-gray-400 text-xs">Awarded by DesignComm</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="fade-up delay-200">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-bold tracking-widest uppercase mb-6 border border-[#00D4FF]/20">
              Tentang Saya
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Kreator Digital yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]">Passionate</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                Saya adalah seorang UI/UX Designer dan Frontend Developer dengan pengalaman 3+ tahun. Lahir dari passion mendalam terhadap estetika digital dan teknologi web modern.
              </p>
              <p>
                Setiap project saya dekati dengan riset mendalam, desain iteratif, dan pengembangan yang teliti. Tujuan saya: menciptakan produk digital yang tidak hanya indah, tapi juga menghasilkan konversi nyata untuk bisnis Anda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 glass-card p-4 rounded-2xl border border-white/5">
                <span className="text-2xl mt-1">🎓</span>
                <div>
                  <p className="text-white font-bold">S1 Teknik Informatika</p>
                  <p className="text-gray-500 text-sm">Universitas Nusa Putra, 2021</p>
                </div>
              </div>
              <div className="flex items-start gap-4 glass-card p-4 rounded-2xl border border-white/5">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  <p className="text-white font-bold">Sukabumi, Jawa Barat</p>
                  <p className="text-gray-500 text-sm">Indonesia</p>
                </div>
              </div>
              <div className="flex items-start gap-4 glass-card p-4 rounded-2xl border border-white/5">
                <span className="text-2xl mt-1">💼</span>
                <div>
                  <p className="text-white font-bold">Freelancer & Partner</p>
                  <p className="text-gray-500 text-sm">Digital Agency</p>
                </div>
              </div>
              <div className="flex items-start gap-4 glass-card p-4 rounded-2xl border border-white/5">
                <span className="text-2xl mt-1">🌐</span>
                <div>
                  <p className="text-white font-bold">Open for Remote Work</p>
                  <p className="text-gray-500 text-sm">Available Worldwide</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all hover:-translate-y-1">
              Download CV
            </button>
          </div>

        </div>
      </div>

      {/* 5. SKILL SECTION */}
      <div className="py-32 bg-[#050510] relative dot-pattern" id="keahlian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Keahlian & Teknologi</h2>
            <p className="text-gray-400 text-lg">Stack teknologi modern yang saya gunakan untuk menciptakan solusi digital.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Design & Creative */}
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 fade-up delay-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="text-[#00D4FF]">🎨</span> Design & Creative
              </h3>
              
              <div className="space-y-8 relative z-10">
                {[
                  { name: 'Figma / Adobe XD', val: '95%' },
                  { name: 'UI/UX Design', val: '90%' },
                  { name: 'Graphic Design', val: '85%' },
                  { name: 'Motion Design', val: '80%' }
                ].map(skill => (
                  <div key={skill.name} className="fade-up delay-200">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-[#00D4FF] font-bold">{skill.val}</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5">
                      <div className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] h-full rounded-full progress-bar-fill relative" style={{width: skill.val}}>
                        <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Development */}
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 fade-up delay-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/5 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="text-[#8B5CF6]">💻</span> Development
              </h3>
              
              <div className="space-y-8 relative z-10">
                {[
                  { name: 'HTML & CSS', val: '98%' },
                  { name: 'JavaScript / React', val: '85%' },
                  { name: 'Next.js', val: '82%' },
                  { name: 'Tailwind CSS', val: '90%' }
                ].map(skill => (
                  <div key={skill.name} className="fade-up delay-300">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-[#8B5CF6] font-bold">{skill.val}</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5">
                      <div className="bg-gradient-to-r from-[#8B5CF6] to-pink-500 h-full rounded-full progress-bar-fill relative" style={{width: skill.val}}>
                        <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tools Grid */}
          <div className="flex flex-wrap justify-center gap-4 fade-up delay-300">
            {['Figma', 'VS Code', 'GitHub', 'Vercel', 'Notion', 'Framer', 'Webflow', 'ChatGPT'].map(tool => (
              <div key={tool} className="px-6 py-3 rounded-2xl glass-card border border-white/10 text-gray-300 font-semibold hover:border-[#00D4FF]/50 hover:text-white transition-all cursor-default flex items-center gap-2">
                <span className="text-[#00D4FF]">❖</span> {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. PORTFOLIO SECTION - CREATIVE GRID */}
      <div className="py-32 bg-[#080812] relative" id="karya">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Karya Terpilih</h2>
            <p className="text-gray-400 text-lg mb-10">Beberapa project terbaik yang pernah saya kerjakan</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Semua', 'Website', 'UI/UX', 'Branding'].map((tab, i) => (
                <button key={tab} className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-[#00D4FF] text-[#050510] shadow-[0_0_15px_rgba(0,212,255,0.4)]' : 'glass-card text-gray-400 hover:text-white border border-white/10'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* GRID LAYOUT */}
          <div className="flex flex-col gap-6">
            
            {/* ROW 1: Large (60%) + Medium (40%) */}
            <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[450px]">
              {/* Card 1 */}
              <div className="md:w-[60%] group relative rounded-[2rem] overflow-hidden glass-card border border-white/10 fade-up h-[350px] md:h-full cursor-pointer">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80" alt="Work 1" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-90 group-hover:bg-[#050510]/80 transition-all duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#00D4FF] mb-3 border border-white/10">Website</span>
                  <h3 className="text-3xl font-bold text-white mb-2">Analytics Dashboard System</h3>
                  <p className="text-gray-400 font-medium">React · Chart.js · Tailwind</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-[#00D4FF] text-[#050510] font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Lihat Project <span>&rarr;</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="md:w-[40%] group relative rounded-[2rem] overflow-hidden glass-card border border-white/10 fade-up delay-100 h-[350px] md:h-full cursor-pointer">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80" alt="Work 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-90 group-hover:bg-[#050510]/80 transition-all duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#8B5CF6] mb-3 border border-white/10">UI/UX</span>
                  <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Mobile Design</h3>
                  <p className="text-gray-400 font-medium">Figma · Prototyping</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-[#8B5CF6] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Lihat Project <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Medium (40%) + Large (60%) */}
            <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[450px]">
              {/* Card 3 */}
              <div className="md:w-[40%] group relative rounded-[2rem] overflow-hidden glass-card border border-white/10 fade-up h-[350px] md:h-full cursor-pointer">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80" alt="Work 3" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-90 group-hover:bg-[#050510]/80 transition-all duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#00D4FF] mb-3 border border-white/10">Website</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Startup Landing Page</h3>
                  <p className="text-gray-400 font-medium">Next.js · Framer Motion</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-[#00D4FF] text-[#050510] font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Lihat Project <span>&rarr;</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="md:w-[60%] group relative rounded-[2rem] overflow-hidden glass-card border border-white/10 fade-up delay-100 h-[350px] md:h-full cursor-pointer">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80" alt="Work 4" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-90 group-hover:bg-[#050510]/80 transition-all duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-amber-400 mb-3 border border-white/10">Branding</span>
                  <h3 className="text-3xl font-bold text-white mb-2">Brand Identity & Visual System</h3>
                  <p className="text-gray-400 font-medium">Illustrator · Figma</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-amber-400 text-[#050510] font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Lihat Project <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: 2 Equal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[400px]">
              {/* Card 5 */}
              <div className="group relative rounded-[2rem] overflow-hidden glass-card border border-white/10 fade-up h-[350px] md:h-full cursor-pointer">
                <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80" alt="Work 5" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-90 group-hover:bg-[#050510]/80 transition-all duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#00D4FF] mb-3 border border-white/10">Website</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Agency Portfolio Website</h3>
                  <p className="text-gray-400 font-medium">React · GSAP · CSS</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-[#00D4FF] text-[#050510] font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Lihat Project <span>&rarr;</span>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group relative rounded-[2rem] overflow-hidden glass-card border border-white/10 fade-up delay-100 h-[350px] md:h-full cursor-pointer">
                <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=700&q=80" alt="Work 6" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-90 group-hover:bg-[#050510]/80 transition-all duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#00D4FF] mb-3 border border-white/10">Website</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Corporate Profile Website</h3>
                  <p className="text-gray-400 font-medium">Next.js · Tailwind · CMS</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-[#00D4FF] text-[#050510] font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Lihat Project <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 7. SERVICES SECTION */}
      <div className="py-32 bg-[#030308] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Layanan Saya</h2>
            <p className="text-gray-400 text-lg">Solusi digital berkualitas tinggi yang disesuaikan dengan kebutuhan Anda</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1 - CYAN */}
            <div className="glass-card p-10 rounded-[2.5rem] border border-[#00D4FF]/20 relative overflow-hidden group fade-up hover:-translate-y-3 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00D4FF] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                <p className="text-gray-400 mb-8 min-h-[80px] leading-relaxed">
                  Desain yang intuitif dan memukau untuk web & mobile application.
                </p>
                
                <ul className="space-y-4 mb-10 text-gray-300 font-medium">
                  {['User Research & Wireframe', 'UI Design & Prototype', 'Design System', 'Usability Testing'].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#00D4FF] mt-1">✓</span> {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Mulai dari</span>
                    <span className="text-2xl font-black text-[#00D4FF]">Rp 500rb</span>
                  </div>
                  <button className="w-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/30 px-6 py-4 rounded-xl font-bold hover:bg-[#00D4FF] hover:text-[#050510] transition-colors shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    Mulai Project
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - PURPLE (TERPOPULER) */}
            <div className="glass-card p-10 rounded-[2.5rem] border border-[#8B5CF6]/50 relative overflow-hidden group fade-up delay-100 hover:-translate-y-3 transition-transform duration-500 transform scale-105 z-10 shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-[#050510]/80">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]"></div>
              <div className="absolute top-6 right-6 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase">
                TERPOPULER
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8B5CF6] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">💻</div>
                <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-400 mb-8 min-h-[80px] leading-relaxed">
                  Website responsif, cepat, dan SEO-friendly dengan teknologi modern.
                </p>
                
                <ul className="space-y-4 mb-10 text-gray-300 font-medium">
                  {['Landing Page & Company Profile', 'E-Commerce & Katalog', 'Custom Web Application', 'Maintenance & Support'].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#8B5CF6] mt-1">✓</span> {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Mulai dari</span>
                    <span className="text-2xl font-black text-[#8B5CF6]">Rp 300rb</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white border border-transparent px-6 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all">
                    Mulai Project
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - GOLD */}
            <div className="glass-card p-10 rounded-[2.5rem] border border-amber-500/20 relative overflow-hidden group fade-up delay-200 hover:-translate-y-3 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Full Package</h3>
                <p className="text-gray-400 mb-8 min-h-[80px] leading-relaxed">
                  Solusi lengkap desain + development dari konsep hingga go-live.
                </p>
                
                <ul className="space-y-4 mb-10 text-gray-300 font-medium">
                  {['Design + Development', 'Domain & Hosting Setup', 'Revisi Unlimited', 'Support 3 Bulan'].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-amber-500 mt-1">✓</span> {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Mulai dari</span>
                    <span className="text-2xl font-black text-amber-500">Rp 750rb</span>
                  </div>
                  <button className="w-full bg-amber-500/10 text-amber-500 border border-amber-500/30 px-6 py-4 rounded-xl font-bold hover:bg-amber-500 hover:text-[#050510] transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                    Mulai Project
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 8. TESTIMONIALS - CREATIVE LAYOUT */}
      <div className="py-32 bg-[#050510] relative dot-pattern">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Klien Berkata 💬</h2>
          </div>

          {/* Featured Testimonial */}
          <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-white/10 mb-8 text-center relative overflow-hidden fade-up">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-50"></div>
            <div className="text-6xl mb-6 opacity-20">"</div>
            <p className="text-2xl md:text-3xl font-medium italic leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto relative z-10">
              "Arif adalah designer terbaik yang pernah saya hire. Website bisnis saya sekarang mendapat pujian dari semua pelanggan. Penjualan online naik 300% dalam 2 bulan!"
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="text-xl mb-3 tracking-widest">⭐⭐⭐⭐⭐</div>
              <h4 className="font-bold text-white text-lg">Ahmad Rizki</h4>
              <p className="text-[#00D4FF]">CEO TechStart Indonesia</p>
            </div>
          </div>

          {/* Smaller Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-[2rem] border border-white/10 fade-up">
              <div className="text-sm tracking-widest mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-8 min-h-[80px]">
                "Desain yang dibuat Arif sangat profesional dan sesuai brand kami. Proses cepat!"
              </p>
              <div>
                <h4 className="font-bold text-white">Siti Rahayu</h4>
                <p className="text-gray-500 text-sm">UMKM Owner</p>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-[2rem] border border-white/10 fade-up delay-100">
              <div className="text-sm tracking-widest mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-8 min-h-[80px]">
                "Portfolio website-ku jadi magnet klien baru. Dalam sebulan, 5 klien baru masuk!"
              </p>
              <div>
                <h4 className="font-bold text-white">Budi Santoso</h4>
                <p className="text-gray-500 text-sm">Freelance Fotografer</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2rem] border border-white/10 fade-up delay-200">
              <div className="text-sm tracking-widest mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-8 min-h-[80px]">
                "Responsif, detail, dan hasilnya melebihi ekspektasi. Sangat recommended!"
              </p>
              <div>
                <h4 className="font-bold text-white">Dewi Anggraini</h4>
                <p className="text-gray-500 text-sm">Startup Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. CONTACT SECTION */}
      <div className="py-32 bg-[#050510] relative overflow-hidden" id="kontak">
        {/* Glow from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#00D4FF]/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          
          {/* LEFT: Info */}
          <div className="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari Berkolaborasi! 🤝</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Punya project atau pertanyaan? Saya selalu terbuka untuk diskusi.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="glass-card p-5 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-[#00D4FF]/30 transition-colors">
                <span className="text-2xl">📧</span>
                <span className="text-gray-300 font-medium">arif.pratama@gmail.com</span>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-[#00D4FF]/30 transition-colors">
                <span className="text-2xl">📱</span>
                <span className="text-gray-300 font-medium">+62 819 9652 2114</span>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-[#00D4FF]/30 transition-colors">
                <span className="text-2xl">📍</span>
                <span className="text-gray-300 font-medium">Sukabumi, Jawa Barat, Indonesia</span>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/5 flex items-center gap-5 hover:border-[#00D4FF]/30 transition-colors">
                <span className="text-2xl">🕐</span>
                <span className="text-gray-300 font-medium">Senin-Sabtu, 09.00-21.00 WIB</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Tersedia untuk project baru
            </div>
            
            <div className="flex gap-4">
              {['GitHub', 'LinkedIn', 'Instagram', 'Behance', 'Dribbble'].map(social => (
                <a key={social} href="#" className="glass-card px-4 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="fade-up delay-200">
            <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">Nama Lengkap</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all" placeholder="email@contoh.com" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">Jenis Layanan</label>
                  <div className="relative">
                    <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all appearance-none cursor-pointer">
                      <option className="bg-[#050510] text-white">UI/UX Design</option>
                      <option className="bg-[#050510] text-white">Web Dev</option>
                      <option className="bg-[#050510] text-white">Full Package</option>
                      <option className="bg-[#050510] text-white">Lainnya</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2 ml-1">Pesan</label>
                  <textarea className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-none" rows={4} placeholder="Ceritakan detail project Anda..."></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white font-bold text-lg py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1 mt-2">
                  Kirim Pesan 🚀
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      {/* 10. FOOTER */}
      <footer className="bg-[#020208] border-t border-white/5 py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <div className="text-3xl font-bold text-[#00D4FF] tracking-tighter mb-4">
            &lt;/Arif&gt;
          </div>
          <p className="text-white font-medium mb-2 text-lg">UI/UX Designer & Frontend Developer</p>
          <p className="text-gray-500 mb-10">Sukabumi, Jawa Barat</p>
          
          <div className="flex gap-6 mb-12">
            {['In', 'Be', 'Dr', 'Ig'].map(icon => (
              <a key={icon} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D4FF] hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all font-bold">
                {icon}
              </a>
            ))}
          </div>
          
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10"></div>
          
          <p className="text-gray-500 font-medium text-sm mb-3">© 2026 Arif Pratama. All rights reserved.</p>
          <p className="text-gray-600 text-sm font-medium">
            Website ini dibuat oleh <a href="https://dicode-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:text-white transition-colors">DiCode</a> · dicode-website-pied.vercel.app
          </p>
        </div>
      </footer>
    </div>
  );
}
