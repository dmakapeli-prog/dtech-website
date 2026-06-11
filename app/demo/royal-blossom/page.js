"use client";

import React, { useState, useEffect, useRef } from "react";

// Hook for scroll animation
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
}

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default function RoyalBlossomDemo() {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Timer effect
  useEffect(() => {
    const targetDate = new Date("2025-09-21T08:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
        return;
      }

      setTimeLeft({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        detik: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call

    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin!");
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
    // Smooth scroll to the next section
    document.getElementById("greeting-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen flex justify-center selection:bg-[#6B1F2A] selection:text-[#D4AF37]">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --maroon: #6B1F2A;
          --gold: #D4AF37;
          --ivory: #FDF6F0;
          --dark: #2D2D2D;
          --white: #FFFFFF;
        }

        .font-serif-ornate {
          font-family: 'Playfair Display', 'Cinzel', Georgia, serif;
        }

        .font-sans-elegant {
          font-family: 'Montserrat', 'Inter', system-ui, -apple-system, sans-serif;
        }

        .shimmer-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .float-anim {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        .gold-border-double {
          border: 4px double #D4AF37;
        }

        .gold-border-solid {
          border: 2px solid #D4AF37;
        }

        .glow-effect {
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .ornament-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: #D4AF37;
          opacity: 0.7;
        }
        .tl { top: 15px; left: 15px; border-top: 2px solid; border-left: 2px solid; }
        .tr { top: 15px; right: 15px; border-top: 2px solid; border-right: 2px solid; }
        .bl { bottom: 15px; left: 15px; border-bottom: 2px solid; border-left: 2px solid; }
        .br { bottom: 15px; right: 15px; border-bottom: 2px solid; border-right: 2px solid; }
      `}} />

      {/* Main Container - Mobile Width */}
      <div className="w-full max-w-[500px] bg-[#FDF6F0] relative shadow-2xl overflow-x-hidden font-sans-elegant text-[#2D2D2D]">
        
        {/* 1. TOP BAR */}
        <div className="bg-[#6B1F2A] text-[#D4AF37] px-4 py-3 flex justify-between items-center text-xs font-semibold tracking-wide z-50 sticky top-0 border-b border-[#D4AF37]/30">
          <a href="/template" className="hover:opacity-80 transition-opacity">
            &larr; Kembali ke Template
          </a>
          <a 
            href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Royal%20Blossom"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
          >
            Pesan Template Ini &rarr;
          </a>
        </div>

        {/* 2. OPENING / COVER SCREEN */}
        <div className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop&auto=format&q=80" 
            alt="Royal Cover" 
            className="absolute inset-0 w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B1F2A]/90 via-[#6B1F2A]/60 to-black/40"></div>
          
          <div className="absolute inset-4 sm:inset-6 gold-border-double pointer-events-none z-10 flex items-center justify-center">
            <div className="ornament-corner tl"></div>
            <div className="ornament-corner tr"></div>
            <div className="ornament-corner bl"></div>
            <div className="ornament-corner br"></div>
          </div>

          <div className="relative z-20 text-center text-[#FDF6F0] px-8 w-full flex flex-col items-center h-full justify-between py-24">
            <div className="float-anim mt-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
                <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold">The Wedding Of</p>
                <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              </div>
              
              <h1 className="font-serif-ornate text-5xl md:text-6xl mb-2 text-white drop-shadow-md">Reza</h1>
              <p className="font-serif-ornate text-4xl text-[#D4AF37] my-4 drop-shadow-md">&</p>
              <h1 className="font-serif-ornate text-5xl md:text-6xl mt-2 text-white drop-shadow-md">Salsabila</h1>
              
              <div className="mt-12 bg-[#D4AF37]/20 border border-[#D4AF37] px-6 py-2 inline-block backdrop-blur-sm">
                <p className="tracking-[0.3em] font-medium text-sm text-[#D4AF37]">21 . 09 . 2025</p>
              </div>
            </div>

            <button 
              onClick={handleOpenInvitation}
              className={`shimmer-btn text-[#6B1F2A] px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-all duration-300 shadow-xl ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              Buka Undangan 👑
            </button>
          </div>
        </div>

        {/* The rest of the invitation wrapper */}
        <div id="greeting-section" className="bg-[#FDF6F0] w-full relative">
          
          {/* 3. GREETING SECTION */}
          <div className="py-24 px-8 text-center relative overflow-hidden">
            <div className="ornament-corner tl opacity-30"></div>
            <div className="ornament-corner tr opacity-30"></div>
            
            <FadeIn>
              <div className="text-[#D4AF37] mb-6">
                <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" fillOpacity="0.2"/>
                </svg>
              </div>
              <h2 className="font-serif-ornate text-2xl mb-5 font-semibold text-[#6B1F2A]">Bismillahirrahmanirrahim</h2>
              <p className="text-sm font-semibold mb-8 text-[#2D2D2D] tracking-wide">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
              <p className="text-sm leading-relaxed text-[#2D2D2D]/80 font-medium">
                Dengan memohon rahmat dan ridho Allah SWT,<br/>
                kami bermaksud menyelenggarakan resepsi<br/>
                pernikahan putra-putri kami:
              </p>
              <div className="w-32 h-1 border-t-2 border-b-2 border-[#D4AF37] mx-auto mt-10"></div>
            </FadeIn>
          </div>

          {/* 4. COUPLE INTRODUCTION */}
          <div className="py-20 px-6 bg-white border-y border-[#6B1F2A]/10 text-center relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
            
            {/* Groom */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full p-2 gold-border-double mb-6 relative bg-[#FDF6F0] glow-effect">
                  <div className="w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/50">
                    <img 
                      src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&auto=format&q=80" 
                      alt="Reza" 
                      className="w-full h-full object-cover object-top"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
                <h3 className="font-serif-ornate text-3xl font-bold mb-3 text-[#6B1F2A]">Reza Maulana, S.T</h3>
                <p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-medium">
                  Putra dari Bapak Hendra Gunawan<br/>& Ibu Ratna Sari
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="font-serif-ornate text-6xl text-[#D4AF37] my-14 italic drop-shadow-sm">&</div>
            </FadeIn>

            {/* Bride */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full p-2 gold-border-double mb-6 relative bg-[#FDF6F0] glow-effect">
                  <div className="w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/50">
                    <img 
                      src="https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=600&h=800&fit=crop&auto=format&q=80" 
                      alt="Salsabila" 
                      className="w-full h-full object-cover object-top"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
                <h3 className="font-serif-ornate text-3xl font-bold mb-3 text-[#6B1F2A]">Salsabila Azzahra, S.Pd</h3>
                <p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-medium">
                  Putri dari Bapak Wahyu Pratama<br/>& Ibu Indah Permata
                </p>
              </div>
            </FadeIn>
            
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          </div>

          {/* 5. COUNTDOWN SECTION */}
          <div className="py-24 px-6 bg-[#6B1F2A] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <FadeIn>
              <h2 className="font-serif-ornate text-3xl font-bold mb-12 text-[#D4AF37] tracking-wide">Menuju Hari Bahagia</h2>
              <div className="flex justify-center gap-3 md:gap-4 relative z-10">
                {[
                  { value: timeLeft.hari, label: 'Hari' },
                  { value: timeLeft.jam, label: 'Jam' },
                  { value: timeLeft.menit, label: 'Menit' },
                  { value: timeLeft.detik, label: 'Detik' }
                ].map((item, index) => (
                  <div key={index} className="bg-[#4A151D] gold-border-solid rounded-lg w-16 md:w-20 h-24 flex flex-col items-center justify-center shadow-lg glow-effect">
                    <span className="font-serif-ornate text-3xl text-[#D4AF37] font-bold">{String(item.value).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#FDF6F0] mt-2 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 6. EVENT DETAILS */}
          <div className="py-24 px-6 bg-[#FDF6F0] relative">
            <div className="w-full max-w-[250px] mx-auto mb-16">
              <img 
                src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=200&fit=crop&auto=format&q=80" 
                alt="Floral Ornament" 
                className="w-full h-auto rounded-full gold-border-solid opacity-90 shadow-md"
                crossOrigin="anonymous"
              />
            </div>
            
            <FadeIn>
              <h2 className="font-serif-ornate text-4xl font-bold text-center mb-16 text-[#6B1F2A]">Save The Date</h2>
            </FadeIn>

            {/* Akad Card */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-8 mb-10 gold-border-solid shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>
                <div className="absolute -right-4 -top-4 text-7xl opacity-[0.03]">💍</div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-4">💍</div>
                  <h3 className="font-serif-ornate text-2xl font-bold mb-6 text-[#6B1F2A] uppercase tracking-widest">Akad Nikah</h3>
                  <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
                  
                  <div className="space-y-4 text-sm text-[#2D2D2D] font-medium">
                    <p className="font-bold text-[#6B1F2A] text-base">Minggu, 21 September 2025</p>
                    <p>08.00 - 10.00 WIB</p>
                    <div className="pt-2">
                      <strong className="block text-[#6B1F2A] font-bold mb-1">Kediaman Mempelai Wanita</strong>
                      <span className="opacity-80">Jl. Melati No. 27, Sukabumi</span>
                    </div>
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-[#6B1F2A] text-[#D4AF37] border border-[#D4AF37] px-6 py-2.5 rounded text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#6B1F2A] transition-colors">
                    Lihat Lokasi 📍
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Resepsi Card */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-8 gold-border-solid shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>
                <div className="absolute -right-4 -top-4 text-7xl opacity-[0.03]">👑</div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-4">👑</div>
                  <h3 className="font-serif-ornate text-2xl font-bold mb-6 text-[#6B1F2A] uppercase tracking-widest">Resepsi</h3>
                  <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-6"></div>
                  
                  <div className="space-y-4 text-sm text-[#2D2D2D] font-medium">
                    <p className="font-bold text-[#6B1F2A] text-base">Minggu, 21 September 2025</p>
                    <p>12.00 - 15.00 WIB</p>
                    <div className="pt-2">
                      <strong className="block text-[#6B1F2A] font-bold mb-1">Grand Ballroom Hotel Augusta</strong>
                      <span className="opacity-80">Jl. Diponegoro No. 88, Sukabumi</span>
                    </div>
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-[#6B1F2A] text-[#D4AF37] border border-[#D4AF37] px-6 py-2.5 rounded text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#6B1F2A] transition-colors">
                    Lihat Lokasi 📍
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 7. LOCATION MAP */}
          <div className="pb-24 px-6 bg-[#FDF6F0]">
            <FadeIn>
              <div className="w-full h-[350px] bg-white p-2 gold-border-solid shadow-lg mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56400418386!2d106.8415598!3d-6.9205562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68482f0567a505%3A0xc3f8e5d0a64e2940!2sSukabumi%2C%20Sukabumi%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1717654321000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Pernikahan"
                ></iframe>
              </div>
              <div className="text-center">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#6B1F2A] text-[#D4AF37] px-8 py-3 rounded text-sm font-bold tracking-widest uppercase shadow-md hover:bg-[#D4AF37] hover:text-[#6B1F2A] transition-colors border border-[#D4AF37]">
                  Buka di Google Maps
                </a>
              </div>
            </FadeIn>
          </div>

          {/* 8. GALERI FOTO */}
          <div className="py-24 px-6 bg-[#6B1F2A] text-center border-y-4 border-[#D4AF37]">
            <FadeIn>
              <h2 className="font-serif-ornate text-4xl font-bold mb-4 text-[#D4AF37]">Our Story</h2>
              <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-12"></div>
            </FadeIn>

            <div className="flex flex-col gap-10">
              <FadeIn delay={0.1}>
                <div className="relative p-2 bg-[#FDF6F0] gold-border-solid shadow-2xl mx-auto w-full max-w-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Pertemuan Pertama" 
                    className="w-full h-auto object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="bg-[#6B1F2A] py-3 border-t border-[#D4AF37]">
                    <p className="text-[#D4AF37] text-sm font-serif-ornate italic tracking-wider">Pertemuan Pertama</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="relative p-2 bg-[#FDF6F0] gold-border-solid shadow-2xl mx-auto w-full max-w-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Lamaran" 
                    className="w-full h-auto object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="bg-[#6B1F2A] py-3 border-t border-[#D4AF37]">
                    <p className="text-[#D4AF37] text-sm font-serif-ornate italic tracking-wider">Lamaran</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="relative p-2 bg-[#FDF6F0] gold-border-solid shadow-2xl mx-auto w-full max-w-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Pre-Wedding" 
                    className="w-full h-auto object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="bg-[#6B1F2A] py-3 border-t border-[#D4AF37]">
                    <p className="text-[#D4AF37] text-sm font-serif-ornate italic tracking-wider">Pre-Wedding</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* 9. UCAPAN & DOA / RSVP FORM */}
          <div className="py-24 px-6 bg-white relative border-b border-[#6B1F2A]/10">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#6B1F2A]"></div>
            
            <FadeIn>
              <h2 className="font-serif-ornate text-3xl font-bold text-center mb-10 text-[#6B1F2A]">Kirim Ucapan & Doa</h2>
              
              <form className="bg-[#FDF6F0] p-8 rounded-lg shadow-md mb-12 border border-[#D4AF37]/40" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-5">
                  <label className="block text-xs font-bold text-[#6B1F2A] mb-2 uppercase tracking-widest">Nama Anda</label>
                  <input type="text" placeholder="Masukkan nama" className="w-full px-4 py-3 border border-[#D4AF37]/50 focus:border-[#6B1F2A] focus:ring-1 focus:ring-[#6B1F2A] outline-none text-sm transition-all bg-white font-medium" required />
                </div>
                <div className="mb-5">
                  <label className="block text-xs font-bold text-[#6B1F2A] mb-2 uppercase tracking-widest">Konfirmasi Kehadiran</label>
                  <select className="w-full px-4 py-3 border border-[#D4AF37]/50 focus:border-[#6B1F2A] focus:ring-1 focus:ring-[#6B1F2A] outline-none text-sm transition-all bg-white text-[#2D2D2D] font-medium">
                    <option value="hadir">Hadir</option>
                    <option value="tidak_hadir">Tidak Hadir</option>
                    <option value="ragu">Ragu-ragu</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block text-xs font-bold text-[#6B1F2A] mb-2 uppercase tracking-widest">Ucapan & Doa</label>
                  <textarea rows="4" placeholder="Tulis ucapan dan doa untuk kedua mempelai" className="w-full px-4 py-3 border border-[#D4AF37]/50 focus:border-[#6B1F2A] focus:ring-1 focus:ring-[#6B1F2A] outline-none text-sm transition-all bg-white resize-none font-medium" required></textarea>
                </div>
                <button type="submit" className="w-full bg-[#6B1F2A] text-[#D4AF37] py-3.5 rounded text-sm font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#6B1F2A] transition-colors border border-[#D4AF37]">
                  Kirim Ucapan 👑
                </button>
              </form>

              <div className="space-y-5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-white border-l-4 border-[#D4AF37] p-5 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-[#6B1F2A]">Keluarga Besar Gunawan</h4>
                    <span className="text-[10px] font-bold tracking-wider text-[#D4AF37] border border-[#D4AF37] px-2 py-0.5 rounded-full">HADIR</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#2D2D2D]/80 italic">"Selamat menempuh hidup baru! Semoga menjadi keluarga sakinah, mawaddah, warahmah."</p>
                </div>
                
                <div className="bg-white border-l-4 border-[#D4AF37] p-5 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-[#6B1F2A]">Sahabat Kuliah</h4>
                    <span className="text-[10px] font-bold tracking-wider text-[#D4AF37] border border-[#D4AF37] px-2 py-0.5 rounded-full">HADIR</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#2D2D2D]/80 italic">"Barakallahu lakuma! Semoga menjadi pasangan yang langgeng. Bahagia selalu ya Bro!"</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 10. AMPLOP DIGITAL (GIFT) */}
          <div className="py-24 px-6 bg-[#6B1F2A] text-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            
            <FadeIn>
              <div className="mb-6 inline-block text-4xl">
                🎁
              </div>
              <h2 className="font-serif-ornate text-3xl font-bold mb-6 text-[#D4AF37]">Wedding Gift</h2>
              <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-8"></div>
              <p className="text-sm text-[#FDF6F0]/90 mb-12 leading-relaxed max-w-sm mx-auto font-medium">
                Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
              </p>

              <div className="flex flex-col gap-6 max-w-sm mx-auto relative z-10">
                {/* BCA Card */}
                <div className="bg-[#4A151D] p-6 gold-border-solid relative overflow-hidden text-left shadow-2xl">
                  <div className="absolute -right-10 -top-10 text-9xl opacity-5">🏦</div>
                  <div className="relative z-10">
                    <p className="font-serif-ornate font-bold text-[#D4AF37] text-2xl mb-2">BCA</p>
                    <p className="text-3xl font-bold tracking-widest text-white mb-2 font-mono">2345678901</p>
                    <p className="text-xs text-[#D4AF37] uppercase tracking-widest mb-6 font-medium">a.n. Reza Maulana</p>
                    <button onClick={() => handleCopy('2345678901')} className="bg-[#D4AF37] text-[#6B1F2A] px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 w-full">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Salin Rekening
                    </button>
                  </div>
                </div>

                {/* Mandiri Card */}
                <div className="bg-[#4A151D] p-6 gold-border-solid relative overflow-hidden text-left shadow-2xl">
                  <div className="absolute -right-10 -top-10 text-9xl opacity-5">🏦</div>
                  <div className="relative z-10">
                    <p className="font-serif-ornate font-bold text-[#D4AF37] text-2xl mb-2">Mandiri</p>
                    <p className="text-3xl font-bold tracking-widest text-white mb-2 font-mono">9876543210</p>
                    <p className="text-xs text-[#D4AF37] uppercase tracking-widest mb-6 font-medium">a.n. Salsabila Azzahra</p>
                    <button onClick={() => handleCopy('9876543210')} className="bg-[#D4AF37] text-[#6B1F2A] px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 w-full">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Salin Rekening
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 11. CLOSING */}
          <div className="relative py-32 px-6 text-center text-[#FDF6F0]">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&auto=format&q=80" 
              alt="Venue Ballroom" 
              className="absolute inset-0 w-full h-full object-cover"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#6B1F2A]/90 via-[#6B1F2A]/80 to-[#6B1F2A]/90"></div>
            
            <div className="absolute inset-4 sm:inset-6 gold-border-solid pointer-events-none z-10"></div>
            
            <div className="relative z-20">
              <FadeIn>
                <div className="text-[#D4AF37] mb-8">
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" fillOpacity="0.4"/>
                  </svg>
                </div>
                <p className="text-sm leading-relaxed mb-10 max-w-sm mx-auto font-medium">
                  Merupakan suatu kehormatan dan kebahagiaan<br/>
                  bagi kami apabila Bapak/Ibu/Saudara/i<br/>
                  berkenan hadir dan memberikan doa restu.
                </p>
                <p className="text-sm mb-12 font-bold tracking-wide">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                
                <p className="text-xs tracking-widest uppercase mb-6 text-[#D4AF37]">Kami yang berbahagia,</p>
                <h2 className="font-serif-ornate text-5xl font-bold text-[#D4AF37] drop-shadow-md">Reza & Salsabila</h2>
              </FadeIn>
            </div>
          </div>

          {/* 12. FOOTER & MUSIC PLAYER */}
          <div className="bg-[#1A1A1A] text-[#FDF6F0] py-10 text-center text-xs border-t-2 border-[#D4AF37]">
            <p className="mb-3 opacity-60 font-medium tracking-wide">Dibuat dengan ❤️ oleh DTech</p>
            <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-bold tracking-widest uppercase hover:text-white transition-colors">
              Pesan Undangan Digital Anda
            </a>
          </div>

          {/* FLOATING MUSIC BUTTON */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#D4AF37] text-[#6B1F2A] flex items-center justify-center shadow-2xl transition-all border-2 border-[#6B1F2A]/20 ${isPlaying ? 'animate-spin-slow' : ''} hover:scale-105`}
            style={{ animationDuration: '4s' }}
            title={isPlaying ? "Jeda Musik" : "Putar Musik"}
          >
            {isPlaying ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
