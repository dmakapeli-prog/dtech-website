import React from 'react';

export const metadata = {
  title: 'Arif Pratama - UI/UX Designer & Frontend Developer',
  description: 'Portfolio personal Arif Pratama. Spesialis desain web modern dan pengembangan frontend.',
};

export default function ProfilPortofolioDemo() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans overflow-x-hidden selection:bg-[#00D4FF] selection:text-[#0D0D0D]">
      {/* CSS Animations & Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .glass-card {
          background: rgba(26, 26, 46, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .gradient-border-card {
          position: relative;
          background: #1A1A2E;
          border-radius: 1rem;
          z-index: 1;
        }
        .gradient-border-card::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 1.1rem;
          background: linear-gradient(45deg, #00D4FF, #8B5CF6);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gradient-border-card:hover::before {
          opacity: 1;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out 2s infinite;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #00D4FF;
          animation: typing 4s steps(40, end) infinite, blink .75s step-end infinite;
        }
        @keyframes typing {
          0%, 100% { width: 0 }
          50%, 80% { width: 100% }
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #00D4FF }
        }
        
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          grid-auto-flow: dense;
        }
        @media (min-width: 768px) {
          .masonry-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .col-span-2-md {
            grid-column: span 2;
          }
          .row-span-2-md {
            grid-row: span 2;
          }
        }
        
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
      `}} />

      {/* 1. TOP BAR */}
      <div className="bg-[#0D0D0D] border-b border-white/5 border-l-4 border-l-[#00D4FF] px-4 py-2 flex justify-between items-center text-sm font-medium relative z-50">
        <a href="/template" className="text-[#00D4FF] hover:text-white transition-colors flex items-center gap-2">
          <span>&larr;</span> Kembali ke Template
        </a>
        <a 
          href="https://wa.me/6281996522114?text=Halo DTech, saya tertarik template Profil & Portofolio"
          target="_blank"
          rel="noopener noreferrer" 
          className="text-[#00D4FF] hover:text-white transition-colors flex items-center gap-2"
        >
          Pesan Template Ini <span>&rarr;</span>
        </a>
      </div>

      {/* 2. NAVBAR */}
      <nav className="sticky top-0 z-40 bg-[#0D0D0D]/60 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-[#00D4FF] tracking-tighter">
            &lt; Arif /&gt;
          </div>
          
          <div className="hidden md:flex items-center gap-1 bg-[#1A1A2E]/80 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
            {['Beranda', 'Tentang', 'Skill', 'Portofolio', 'Kontak'].map((item, idx) => (
              <a 
                key={item} 
                href="#" 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white ${idx === 0 ? 'bg-white/10 text-white' : 'text-gray-400'}`}
              >
                {item}
              </a>
            ))}
          </div>
          
          <a 
            href="#kontak"
            className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
          >
            Hire Me 🚀
          </a>
        </div>
      </nav>

      {/* 3. HERO - CREATIVE SPLIT */}
      <div className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Side 55% */}
          <div className="lg:w-[55%] flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium mb-6 animate-float">
              👋 <span className="text-gray-300">Halo, Saya</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00D4FF] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Arif Pratama
              </span>
            </h1>
            
            <div className="h-12 mb-6">
              <span className="text-2xl md:text-3xl font-semibold text-white typewriter">
                UI/UX Designer & Developer
              </span>
            </div>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Saya membantu bisnis & personal brand tampil profesional di dunia digital. Spesialis dalam desain web modern dan pengembangan frontend yang memukau.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all hover:-translate-y-1">
                Lihat Portofolio &darr;
              </button>
              <button className="border-2 border-[#00D4FF] text-[#00D4FF] px-8 py-4 rounded-full font-bold hover:bg-[#00D4FF]/10 transition-colors">
                Download CV
              </button>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Instagram', 'Behance'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0D0D0D] transition-colors font-bold text-xs" title={social}>
                    {social[0]}
                  </a>
                ))}
              </div>
              <div className="h-8 w-px bg-white/20 hidden md:block"></div>
              <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                <div className="flex flex-col"><span className="text-white font-bold text-lg">50+</span> Proyek</div>
                <div className="flex flex-col"><span className="text-white font-bold text-lg">3 Thn</span> Pengalaman</div>
                <div className="flex flex-col"><span className="text-white font-bold text-lg">98%</span> Puas</div>
              </div>
            </div>
          </div>

          {/* Right Side 45% */}
          <div className="lg:w-[45%] relative flex justify-center items-center">
            {/* Glowing effect behind photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] rounded-full blur-[80px] opacity-30 animate-pulse"></div>
            
            {/* Profile Photo */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-[#00D4FF] to-[#8B5CF6] shadow-[0_0_50px_rgba(139,92,246,0.3)] z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0D0D0D] p-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" 
                  alt="Arif Pratama Profile" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-10 left-0 md:-left-10 glass-card px-4 py-3 rounded-2xl animate-float z-20 flex items-center gap-3 border-t border-[#00D4FF]/30">
              <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]">🎨</div>
              <span className="font-bold text-sm">UI/UX Design</span>
            </div>
            
            <div className="absolute bottom-20 left-0 md:-left-4 glass-card px-4 py-3 rounded-2xl animate-float-delayed z-20 flex items-center gap-3 border-l border-[#8B5CF6]/30">
              <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">💻</div>
              <span className="font-bold text-sm">Web Dev</span>
            </div>
            
            <div className="absolute top-1/2 right-0 md:-right-12 glass-card px-4 py-3 rounded-2xl animate-float z-20 flex items-center gap-3 border-r border-[#00D4FF]/30" style={{animationDelay: '1s'}}>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">📱</div>
              <span className="font-bold text-sm">Mobile Ready</span>
            </div>

            <div className="absolute -bottom-6 right-10 glass-card px-4 py-3 rounded-2xl animate-float-delayed z-20 flex items-center gap-3 border-b border-[#8B5CF6]/30" style={{animationDelay: '2.5s'}}>
              <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">⚡</div>
              <span className="font-bold text-sm">Fast Delivery</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* 4. ABOUT ME - CREATIVE LAYOUT */}
      <div className="py-24 bg-[#0A0A0A] relative border-y border-white/5" id="tentang">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold mb-8 relative inline-block">
              Tentang Saya
              <div className="absolute -bottom-2 left-0 w-2/3 h-1.5 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-full"></div>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Saya adalah seorang kreator digital dengan passion di bidang desain UI/UX dan pengembangan web. Dengan pengalaman 3+ tahun, saya telah membantu lebih dari 50 klien dari berbagai industri untuk membangun presence digital yang kuat.
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-6">Apa yang membuat saya berbeda?</h3>
            <ul className="space-y-4">
              {[
                'Desain yang berfokus pada konversi',
                'Kode bersih & performa tinggi',
                'Revisi unlimited hingga puas'
              ].map(point => (
                <li key={point} className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A2E]/50 border border-white/5 hover:border-[#00D4FF]/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] shrink-0 font-bold">✓</div>
                  <span className="text-gray-200 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Side */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-[#8B5CF6]">💼</span> Pengalaman
            </h3>
            <div className="relative border-l-2 border-white/10 ml-4 space-y-10">
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#0D0D0D] border-4 border-[#00D4FF]"></div>
                <div className="text-sm text-[#00D4FF] font-bold mb-1">2024 - Sekarang</div>
                <h4 className="text-xl font-bold text-white mb-2">Senior UI/UX Designer</h4>
                <p className="text-gray-400 text-sm">Freelance & Remote - Memimpin desain produk digital untuk startup.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#0D0D0D] border-4 border-[#8B5CF6]"></div>
                <div className="text-sm text-[#8B5CF6] font-bold mb-1">2022 - 2024</div>
                <h4 className="text-xl font-bold text-white mb-2">Frontend Developer</h4>
                <p className="text-gray-400 text-sm">Digital Agency - Membangun website responsif dengan React & Next.js.</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#0D0D0D] border-4 border-gray-600"></div>
                <div className="text-sm text-gray-500 font-bold mb-1">2021 - 2022</div>
                <h4 className="text-xl font-bold text-white mb-2">Web Designer Junior</h4>
                <p className="text-gray-400 text-sm">Mendesain landing page dan aset visual company profile.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
              <span className="text-[#00D4FF]">🎓</span> Pendidikan
            </h3>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1A1A2E] to-transparent border-l-4 border-[#00D4FF]">
              <h4 className="text-xl font-bold text-white mb-1">S1 Teknik Informatika</h4>
              <p className="text-[#00D4FF] text-sm font-semibold mb-2">2017 - 2021</p>
              <p className="text-gray-400">Universitas Nusa Putra Sukabumi</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. SKILL SECTION - VISUAL BARS */}
      <div className="py-24 bg-[#0D0D0D]" id="skill">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Keahlian & Teknologi</h2>
            <p className="text-gray-400">Tools dan bahasa yang saya gunakan sehari-hari</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {/* Design Skills */}
            <div className="space-y-8 p-8 rounded-3xl glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/10 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#00D4FF]/20 text-[#00D4FF]">🎨</span> Design Skills
              </h3>
              
              {[
                { name: 'Figma / Adobe XD', val: '95%' },
                { name: 'UI/UX Design', val: '90%' },
                { name: 'Graphic Design', val: '85%' },
                { name: 'Prototyping', val: '88%' }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-[#00D4FF] font-bold">{skill.val}</span>
                  </div>
                  <div className="w-full bg-[#1A1A2E] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00D4FF] to-[#0099FF] h-2.5 rounded-full" style={{width: skill.val}}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dev Skills */}
            <div className="space-y-8 p-8 rounded-3xl glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#8B5CF6]/20 text-[#8B5CF6]">💻</span> Dev Skills
              </h3>
              
              {[
                { name: 'HTML/CSS', val: '95%' },
                { name: 'JavaScript/React', val: '85%' },
                { name: 'Next.js', val: '80%' },
                { name: 'Tailwind CSS', val: '92%' }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-[#8B5CF6] font-bold">{skill.val}</span>
                  </div>
                  <div className="w-full bg-[#1A1A2E] rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] h-2.5 rounded-full" style={{width: skill.val}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech stack icons row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">
            {['Figma', 'React', 'Next.js', 'Tailwind', 'VS Code', 'GitHub', 'Vercel', 'Firebase'].map(tech => (
              <div key={tech} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-medium hover:text-white hover:bg-white/10 hover:border-white/30 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. PORTOFOLIO - MASONRY GRID */}
      <div className="py-24 bg-[#0A0A0A] bg-grid-pattern relative" id="portofolio">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[1px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Hasil Karya Terbaik</h2>
              <p className="text-gray-400">Proyek-proyek pilihan yang pernah saya kerjakan</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Semua', 'Website', 'UI/UX', 'Branding'].map((tab, i) => (
                <button key={tab} className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${i === 0 ? 'bg-[#00D4FF] text-[#0D0D0D]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry-grid">
            {/* Card 1 (LARGE) */}
            <div className="group relative rounded-3xl overflow-hidden glass-card col-span-2-md row-span-2-md h-[400px] md:h-auto border border-white/10">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                Website
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-3">Dashboard Analytics App</h3>
                <p className="text-[#00D4FF] font-medium mb-6">React · Tailwind · Chart.js</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#00D4FF] transition-colors">
                    Lihat Project <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 (LARGE) */}
            <div className="group relative rounded-3xl overflow-hidden glass-card col-span-2-md h-[300px] border border-white/10">
              <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&q=80" alt="E-Commerce" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                UI/UX
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Mobile App Design</h3>
                <p className="text-[#8B5CF6] font-medium mb-4">Figma · Prototyping</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#8B5CF6] transition-colors">
                    Lihat Project <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 (MEDIUM) */}
            <div className="group relative rounded-3xl overflow-hidden glass-card h-[300px] border border-white/10">
              <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80" alt="Company Profile" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-90"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase">Website</div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">Company Profile Website</h3>
                <p className="text-gray-400 text-sm">Next.js · Framer Motion</p>
              </div>
            </div>

            {/* Card 4 (MEDIUM) */}
            <div className="group relative rounded-3xl overflow-hidden glass-card h-[300px] border border-white/10">
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80" alt="UI Kit" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-90"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase">UI/UX</div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">SaaS Dashboard UI Kit</h3>
                <p className="text-gray-400 text-sm">Figma · Auto Layout</p>
              </div>
            </div>

            {/* Card 5 (MEDIUM) */}
            <div className="group relative rounded-3xl overflow-hidden glass-card h-[300px] border border-white/10">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80" alt="Landing Page" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-90"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase">Website</div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">Landing Page Startup</h3>
                <p className="text-gray-400 text-sm">HTML · CSS · GSAP</p>
              </div>
            </div>

            {/* Card 6 (MEDIUM) */}
            <div className="group relative rounded-3xl overflow-hidden glass-card h-[300px] border border-white/10">
              <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&q=80" alt="Personal Branding" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-90"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase">Website</div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">Personal Branding Website</h3>
                <p className="text-gray-400 text-sm">Next.js · Tailwind</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 rounded-full border border-white/20 hover:border-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all font-bold text-white">
              Lihat Lebih Banyak Karya di Dribbble / GitHub
            </button>
          </div>
        </div>
      </div>

      {/* 7. SERVICES */}
      <div className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00D4FF]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Layanan yang Saya Tawarkan</h2>
            <p className="text-gray-400">Solusi digital end-to-end untuk kebutuhan Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-3xl border-t border-[#00D4FF]/30 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/20 blur-3xl rounded-full group-hover:bg-[#00D4FF]/40 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-3xl mb-6 border border-[#00D4FF]/20 text-[#00D4FF]">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
              <p className="text-gray-400 mb-8 leading-relaxed min-h-[100px]">Desain antarmuka yang indah, intuitif, dan berfokus pada pengalaman pengguna terbaik untuk web & mobile.</p>
              <div className="space-y-3 mb-8">
                {['Wireframe', 'Prototype', 'User Research', 'Design System'].map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-[#00D4FF]">✓</span> {feat}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-1">Mulai dari</p>
                <p className="text-2xl font-bold text-[#00D4FF]">Rp 500.000</p>
              </div>
            </div>

            {/* Card 2 - MOST POPULAR */}
            <div className="glass-card p-8 rounded-3xl border border-[#8B5CF6]/50 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider">MOST POPULAR</div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/20 blur-3xl rounded-full group-hover:bg-[#8B5CF6]/40 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center text-3xl mb-6 border border-[#8B5CF6]/20 text-[#8B5CF6]">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
              <p className="text-gray-400 mb-8 leading-relaxed min-h-[100px]">Pengembangan website responsif dengan teknologi modern. Clean code, fast loading, dan SEO-friendly.</p>
              <div className="space-y-3 mb-8">
                {['Landing Page', 'Company Profile', 'E-Commerce', 'Custom Web'].map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-[#8B5CF6]">✓</span> {feat}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Mulai dari</p>
                  <p className="text-2xl font-bold text-[#8B5CF6]">Rp 300.000</p>
                </div>
                <button className="bg-[#8B5CF6] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-[#7C3AED] transition-colors">Pilih</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 rounded-3xl border-t border-amber-500/30 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full group-hover:bg-amber-500/40 transition-colors"></div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-3xl mb-6 border border-amber-500/20 text-amber-500">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Full Package</h3>
              <p className="text-gray-400 mb-8 leading-relaxed min-h-[100px]">Paket lengkap desain + development. Dari konsep hingga launch, semuanya saya tangani untuk Anda.</p>
              <div className="space-y-3 mb-8">
                {['Design + Dev', 'Revisi Unlimited', 'Domain & Hosting', 'Support 3 Bulan'].map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-amber-500">✓</span> {feat}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-1">Mulai dari</p>
                <p className="text-2xl font-bold text-amber-500">Rp 750.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. TESTIMONI - CREATIVE CARDS */}
      <div className="py-24 bg-[#0A0A0A] bg-grid-pattern relative">
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[1px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Klien Bicara 💬</h2>
            <p className="text-gray-400">Feedback jujur dari mereka yang pernah bekerja sama</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00D4FF] to-[#8B5CF6]"></div>
              <div className="text-4xl text-[#00D4FF]/20 font-serif absolute top-6 right-6">"</div>
              <div className="text-[#00D4FF] mb-6 tracking-widest text-sm">★★★★★</div>
              <p className="text-gray-300 italic mb-8 relative z-10 min-h-[100px]">
                "Arif benar-benar memahami visi saya. Hasil desainnya jauh melampaui ekspektasi. Website kami sekarang konversinya naik 200%!"
              </p>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-white text-lg">Ahmad Rizki</h4>
                <p className="text-[#00D4FF] text-sm">CEO Startup</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8B5CF6] to-[#00D4FF]"></div>
              <div className="text-4xl text-[#8B5CF6]/20 font-serif absolute top-6 right-6">"</div>
              <div className="text-[#8B5CF6] mb-6 tracking-widest text-sm">★★★★★</div>
              <p className="text-gray-300 italic mb-8 relative z-10 min-h-[100px]">
                "Proses pengerjaan cepat dan hasilnya profesional banget. Pelanggan saya sering memuji tampilan websitenya!"
              </p>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-white text-lg">Siti Rahayu</h4>
                <p className="text-[#8B5CF6] text-sm">UMKM Owner</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00D4FF] to-amber-500"></div>
              <div className="text-4xl text-amber-500/20 font-serif absolute top-6 right-6">"</div>
              <div className="text-amber-500 mb-6 tracking-widest text-sm">★★★★★</div>
              <p className="text-gray-300 italic mb-8 relative z-10 min-h-[100px]">
                "Portfolio website yang dibuat Arif membuat saya dapat 5 klien baru dalam sebulan pertama!"
              </p>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-white text-lg">Budi Santoso</h4>
                <p className="text-amber-500 text-sm">Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. CONTACT - CREATIVE SPLIT */}
      <div className="py-24 bg-[#0D0D0D]" id="kontak">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 text-green-400 text-xs font-bold mb-8 bg-green-500/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Tersedia untuk project baru
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari Berkolaborasi! 🤝</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-md">
              Punya project menarik? Saya selalu terbuka untuk peluang dan kolaborasi baru. Jangan ragu untuk menghubungi saya.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-xl border border-white/10 group-hover:border-[#00D4FF] group-hover:text-[#00D4FF] transition-all">📧</div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Email</p>
                  <p className="text-white font-bold text-lg">arif.pratama@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-xl border border-white/10 group-hover:border-[#8B5CF6] group-hover:text-[#8B5CF6] transition-all">📱</div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">WhatsApp</p>
                  <p className="text-white font-bold text-lg">+62 819 9652 2114</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-xl border border-white/10 group-hover:border-amber-500 group-hover:text-amber-500 transition-all">📍</div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Lokasi</p>
                  <p className="text-white font-bold text-lg">Sukabumi, Jawa Barat</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {['IN', 'GH', 'IG', 'BE'].map((social, i) => (
                <a key={social} href="#" className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all hover:-translate-y-1 ${i % 2 === 0 ? 'bg-[#00D4FF]/10 text-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0D0D0D]' : 'bg-[#8B5CF6]/10 text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white'}`}>
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="gradient-border-card p-1">
            <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-[0.9rem] h-full w-full relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00D4FF]/10 blur-[80px] rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-white relative z-10">Kirim Pesan</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full bg-[#1A1A2E] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full bg-[#1A1A2E] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#8B5CF6] transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Subjek</label>
                  <input type="text" className="w-full bg-[#1A1A2E] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" placeholder="Project Web Design" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Pesan</label>
                  <textarea className="w-full bg-[#1A1A2E] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#8B5CF6] transition-colors h-32 resize-none" placeholder="Ceritakan tentang project Anda..."></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-1">
                  Kirim Pesan 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 10. FOOTER */}
      <footer className="bg-[#080808] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="text-2xl font-bold text-[#00D4FF] tracking-tighter mb-4">
            &lt; Arif Pratama /&gt;
          </div>
          <p className="text-gray-400 font-medium mb-8">UI/UX Designer & Frontend Developer</p>
          
          <div className="flex gap-6 mb-8">
            {['Twitter', 'Dribbble', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">
                {social}
              </a>
            ))}
          </div>
          
          <div className="w-full h-px bg-white/5 mb-8 max-w-md mx-auto"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm font-medium text-gray-500 gap-4">
            <p>© 2026 Arif Pratama. All rights reserved.</p>
            <p>
              Website dibuat oleh <span className="text-[#00D4FF]">DTech</span> 
              <span className="mx-2">|</span> 
              <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                dtech-website-pied.vercel.app
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
