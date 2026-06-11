"use client";

import React, { useState, useEffect, useRef } from "react";

// CSS Styles injected via styled block
const customStyles = `
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

  .bounce-anim {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-15px); }
    60% { transform: translateY(-7px); }
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .gold-border-double {
    border: 4px double #D4AF37;
  }

  .ornament-corner {
    position: absolute;
    width: 40px;
    height: 40px;
    border-color: #D4AF37;
    opacity: 0.8;
  }
  .tl { top: 15px; left: 15px; border-top: 2px solid; border-left: 2px solid; }
  .tr { top: 15px; right: 15px; border-top: 2px solid; border-right: 2px solid; }
  .bl { bottom: 15px; left: 15px; border-bottom: 2px solid; border-left: 2px solid; }
  .br { bottom: 15px; right: 15px; border-bottom: 2px solid; border-right: 2px solid; }

  @keyframes floatUpDrift {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    20% { opacity: var(--max-opacity, 0.2); }
    50% { transform: translateY(-50vh) translateX(20px); opacity: var(--max-opacity, 0.3); }
    80% { opacity: var(--max-opacity, 0.2); }
    100% { transform: translateY(-100vh) translateX(-20px); opacity: 0; }
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    background-color: #D4AF37;
    pointer-events: none;
    animation: floatUpDrift linear infinite;
    box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
  }
`;

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

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  
  let initialTransform = "translateY(30px)";
  if (direction === "left") initialTransform = "translateX(-50px)";
  if (direction === "right") initialTransform = "translateX(50px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translate(0, 0)" : initialTransform,
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

const GoldParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 4, // 4-8px
      left: Math.random() * 100,
      top: Math.random() * 100 + 50, // Start lower or randomly
      duration: Math.random() * 7 + 8, // 8-15s
      delay: Math.random() * 10,
      opacity: Math.random() * 0.1 + 0.2 // 0.2-0.3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden max-w-[500px] mx-auto">
      {particles.map(p => (
        <div 
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
            '--max-opacity': p.opacity
          }}
        />
      ))}
    </div>
  );
};

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0, jam: 0, menit: 0, detik: 0,
  });

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetTime - now;
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
    updateTimer();
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default function RoyalBlossomDemo() {
  const timeLeft = useCountdown("2025-09-21T08:00:00");
  const [gateOpened, setGateOpened] = useState(false);
  const [gateRemoved, setGateRemoved] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  
  const [rsvpData, setRsvpData] = useState({ nama: "", kehadiran: "", ucapan: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState("");

  const handleCopy = (text, bank) => {
    navigator.clipboard.writeText(text);
    setCopied(bank);
    setTimeout(() => setCopied(""), 2000);
  };

  const galleryPhotos = [
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&auto=format&q=80", caption: "Pertemuan Pertama" },
    { src: "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=600&h=800&fit=crop&auto=format&q=80", caption: "Lamaran" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop&auto=format&q=80", caption: "Pre-Wedding" }
  ];

  const handleNextPhoto = () => setActivePhoto((prev) => (prev + 1) % galleryPhotos.length);
  const handlePrevPhoto = () => setActivePhoto((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenGate = () => {
    setGateOpened(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio autoplay prevented"));
    }
    setTimeout(() => {
      setGateRemoved(true);
    }, 1200); // Wait for transition
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen flex justify-center selection:bg-[#6B1F2A] selection:text-[#D4AF37]">
      <style dangerouslySetInnerHTML={{__html: customStyles}} />
      
      {/* Audio element (placeholder src) */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* Main Container - Mobile Width */}
      <div className="w-full max-w-[500px] bg-[#FDF6F0] relative shadow-2xl overflow-x-hidden font-sans-elegant text-[#2D2D2D] min-h-screen">
        
        {/* TOP BAR */}
        <div className="bg-[#6B1F2A] text-[#D4AF37] px-4 py-3 flex justify-between items-center text-xs font-semibold tracking-wide z-[60] sticky top-0 border-b border-[#D4AF37]/30">
          <a href="/template" className="hover:opacity-80 transition-opacity">
            &larr; Kembali
          </a>
          <a 
            href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Royal%20Blossom"
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
          >
            Pesan Template &rarr;
          </a>
        </div>

        {/* B. GERBANG ISTANA (Palace Gates) */}
        {!gateRemoved && (
          <div className="fixed top-[44px] bottom-0 left-0 right-0 z-50 flex overflow-hidden max-w-[500px] mx-auto bg-[#1a1a1a]">
            {/* LEFT GATE */}
            <div className={`w-1/2 h-full bg-[#6B1F2A] relative transition-transform duration-[1200ms] ease-in-out ${gateOpened ? '-translate-x-full' : 'translate-x-0'}`}>
              <div className="absolute right-0 top-0 bottom-0 w-8 border-r-2 border-[#D4AF37] bg-[#4A151D] flex items-center justify-center overflow-hidden">
                <div className="h-full w-[2px] bg-[#D4AF37]/50 border-r border-dashed border-[#D4AF37]/30"></div>
              </div>
              <div className="absolute top-1/2 right-0 w-[60px] h-[120px] -translate-y-1/2 overflow-hidden">
                <div className="w-[120px] h-[120px] rounded-full border-4 border-[#D4AF37] bg-[#4A151D] absolute right-0 flex items-center justify-center shadow-inner">
                  <div className="w-[100px] h-[100px] rounded-full border border-[#D4AF37]/50 absolute right-[10px]"></div>
                </div>
              </div>
            </div>

            {/* RIGHT GATE */}
            <div className={`w-1/2 h-full bg-[#6B1F2A] relative transition-transform duration-[1200ms] ease-in-out ${gateOpened ? 'translate-x-full' : 'translate-x-0'}`}>
              <div className="absolute left-0 top-0 bottom-0 w-8 border-l-2 border-[#D4AF37] bg-[#4A151D] flex items-center justify-center overflow-hidden">
                <div className="h-full w-[2px] bg-[#D4AF37]/50 border-l border-dashed border-[#D4AF37]/30"></div>
              </div>
              <div className="absolute top-1/2 left-0 w-[60px] h-[120px] -translate-y-1/2 overflow-hidden">
                <div className="w-[120px] h-[120px] rounded-full border-4 border-[#D4AF37] bg-[#4A151D] absolute left-0 flex items-center justify-center shadow-inner">
                  <div className="w-[100px] h-[100px] rounded-full border border-[#D4AF37]/50 absolute left-[10px]"></div>
                </div>
              </div>
            </div>

            {/* GATE CENTER CONTENT */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-[800ms] ${gateOpened ? 'opacity-0' : 'opacity-100'} px-6 pointer-events-none`}>
              <div className="pointer-events-auto flex flex-col items-center">
                <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold mb-6 text-center shadow-sm">The Wedding Of</p>
                <h1 className="font-serif-ornate text-5xl text-white mb-2 text-center drop-shadow-lg leading-tight">Reza</h1>
                <p className="font-serif-ornate text-3xl text-[#D4AF37] my-2 drop-shadow-md">&</p>
                <h1 className="font-serif-ornate text-5xl text-white mt-2 text-center drop-shadow-lg leading-tight">Salsabila</h1>
                
                <div className="mt-10 bg-[#D4AF37]/20 border border-[#D4AF37] px-6 py-2 backdrop-blur-sm mb-16 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <p className="tracking-[0.3em] font-bold text-sm text-[#D4AF37]">21 . 09 . 2025</p>
                </div>

                <button 
                  onClick={handleOpenGate}
                  className="shimmer-btn text-[#6B1F2A] px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_25px_rgba(212,175,55,0.5)] glow-effect cursor-pointer"
                >
                  Buka Undangan 👑
                </button>
              </div>
            </div>
          </div>
        )}

        {/* A. FLOATING GOLD PARTICLES */}
        <GoldParticles />

        {/* C. HERO SECTION (PARALLAX) */}
        <div 
          className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop&auto=format&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B1F2A] to-transparent"></div>
          
          {/* Inset Gold Border (16px = inset-4) */}
          <div className="absolute inset-4 gold-border-double pointer-events-none z-10 opacity-80">
            <div className="ornament-corner tl"></div>
            <div className="ornament-corner tr"></div>
            <div className="ornament-corner bl"></div>
            <div className="ornament-corner br"></div>
          </div>

          <div className="relative z-20 text-center text-white px-6 w-full flex flex-col items-center h-full justify-center">
            <FadeIn delay={0.5}>
              <p className="text-[12px] tracking-[0.5em] text-[#D4AF37] uppercase font-bold mb-6">The Wedding Of</p>
              <h1 className="font-serif-ornate text-6xl text-white mb-2 drop-shadow-md leading-tight">Reza<br/><span className="text-4xl text-[#D4AF37] my-2 drop-shadow-md">&</span><br/>Salsabila</h1>
              <div className="mt-8 border border-[#D4AF37] px-6 py-2 inline-block shadow-sm">
                <p className="tracking-[0.3em] font-medium text-sm text-[#D4AF37]">21 . 09 . 2025</p>
              </div>
            </FadeIn>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 bounce-anim">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        {/* D. GREETING SECTION */}
        <div className="py-24 px-8 text-center bg-[#FDF6F0] relative z-10 overflow-hidden">
          {/* Corner Flourishes */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-3xl opacity-60"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-3xl opacity-60"></div>
          
          <FadeIn>
            <div className="text-[#D4AF37] mb-8">
              <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L15 8L21 9L16 14L18 20L12 17L6 20L8 14L3 9L9 8L12 2Z" fill="currentColor" fillOpacity="0.1"/>
              </svg>
            </div>
            <h2 className="font-serif-ornate text-2xl mb-4 font-bold text-[#6B1F2A]">Bismillahirrahmanirrahim</h2>
            <p className="text-sm font-bold mb-8 text-[#2D2D2D] tracking-wide">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
            <p className="text-sm leading-relaxed text-[#2D2D2D]/80 font-medium max-w-sm mx-auto">
              Dengan memohon rahmat dan ridho Allah SWT, 
              kami bermaksud menyelenggarakan resepsi pernikahan putra-putri kami:
            </p>
            
            {/* Gold double-line divider with center diamond */}
            <div className="flex items-center justify-center mt-12 mb-4">
              <div className="w-16 h-[1px] border-t-2 border-b-2 border-[#D4AF37] h-1"></div>
              <div className="w-3 h-3 bg-[#D4AF37] rotate-45 mx-3"></div>
              <div className="w-16 h-[1px] border-t-2 border-b-2 border-[#D4AF37] h-1"></div>
            </div>
          </FadeIn>
        </div>

        {/* E. COUPLE INTRODUCTION */}
        <div className="py-20 px-6 bg-white border-y border-[#6B1F2A]/20 text-center relative z-10 shadow-sm">
          
          {/* Groom */}
          <FadeIn delay={0.1} direction="left">
            <div className="flex flex-col items-center">
              <div className="w-48 h-60 rounded-t-full rounded-b-full p-2 border-2 border-[#D4AF37] mb-6 relative bg-[#FDF6F0] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full rounded-t-full rounded-b-full overflow-hidden border border-[#D4AF37]/50">
                  <img 
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Reza" 
                    className="w-full h-full object-cover object-top"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
              <h3 className="font-serif-ornate text-3xl font-bold mb-2 text-[#6B1F2A]">Reza Maulana, S.T</h3>
              <p className="text-sm text-[#2D2D2D]/90 font-medium">Putra dari Bapak Hendra Gunawan<br/>& Ibu Ratna Sari</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="font-serif-ornate text-6xl text-[#D4AF37] my-12 italic drop-shadow-sm font-bold">&</div>
          </FadeIn>

          {/* Bride */}
          <FadeIn delay={0.3} direction="right">
            <div className="flex flex-col items-center">
              <div className="w-48 h-60 rounded-t-full rounded-b-full p-2 border-2 border-[#D4AF37] mb-6 relative bg-[#FDF6F0] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full rounded-t-full rounded-b-full overflow-hidden border border-[#D4AF37]/50">
                  <img 
                    src="https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Salsabila" 
                    className="w-full h-full object-cover object-top"
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
              <h3 className="font-serif-ornate text-3xl font-bold mb-2 text-[#6B1F2A]">Salsabila Azzahra, S.Pd</h3>
              <p className="text-sm text-[#2D2D2D]/90 font-medium">Putri dari Bapak Wahyu Pratama<br/>& Ibu Indah Permata</p>
            </div>
          </FadeIn>
        </div>

        {/* F. COUNTDOWN SECTION */}
        <div className="py-24 px-6 bg-[#6B1F2A] text-center relative overflow-hidden z-10 shadow-inner border-y-4 border-[#D4AF37]">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <FadeIn>
            <h2 className="font-serif-ornate text-3xl font-bold mb-12 text-[#D4AF37] tracking-wider drop-shadow-md">Menuju Hari Bahagia</h2>
            <div className="flex justify-center gap-3 md:gap-4 relative z-10 max-w-sm mx-auto">
              {[
                { value: timeLeft.hari, label: 'Hari' },
                { value: timeLeft.jam, label: 'Jam' },
                { value: timeLeft.menit, label: 'Menit' },
                { value: timeLeft.detik, label: 'Detik' }
              ].map((item, index) => (
                <div key={index} className="flex-1 bg-[#4A151D] border-2 border-[#D4AF37] rounded-lg py-5 flex flex-col items-center justify-center shadow-lg glow-effect">
                  <span className="font-serif-ornate text-3xl text-[#D4AF37] font-bold">{String(item.value).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#FDF6F0] mt-2 font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* G. EVENT DETAILS SECTION (Save The Date) */}
        <div className="py-24 px-6 bg-[#FDF6F0] relative z-10 text-center">
          <FadeIn>
            <div className="w-full max-w-[200px] mx-auto mb-10">
              <img 
                src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=200&fit=crop&auto=format&q=80" 
                alt="Floral Ornament" 
                className="w-full h-auto rounded-full border-2 border-[#D4AF37] shadow-sm"
                crossOrigin="anonymous"
              />
            </div>
            <h2 className="font-serif-ornate text-4xl font-bold mb-16 text-[#6B1F2A]">Save The Date</h2>
          </FadeIn>

          <div className="flex flex-col gap-10 max-w-md mx-auto">
            {/* Akad Nikah */}
            <FadeIn>
              <div className="bg-white p-8 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-8xl opacity-[0.03] pointer-events-none">💍</div>
                <div className="text-4xl mb-4">💍</div>
                <h3 className="font-serif-ornate text-2xl font-bold mb-4 text-[#6B1F2A] uppercase tracking-widest">Akad Nikah</h3>
                <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-6"></div>
                <div className="space-y-3 text-sm text-[#2D2D2D] font-medium mb-8">
                  <p className="font-bold text-base text-[#6B1F2A]">Minggu, 21 September 2025</p>
                  <p>08.00 - 10.00 WIB</p>
                  <div className="pt-2">
                    <strong className="block text-[#6B1F2A] mb-1">Kediaman Mempelai Wanita</strong>
                    <span className="opacity-80">Jl. Melati No. 27, Sukabumi</span>
                  </div>
                </div>
                <a href="https://www.google.com/maps/search/Sukabumi" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#6B1F2A] text-[#D4AF37] px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">
                  Lihat Lokasi 📍
                </a>
              </div>
            </FadeIn>

            {/* Resepsi */}
            <FadeIn>
              <div className="bg-white p-8 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-8xl opacity-[0.03] pointer-events-none">👑</div>
                <div className="text-4xl mb-4">👑</div>
                <h3 className="font-serif-ornate text-2xl font-bold mb-4 text-[#6B1F2A] uppercase tracking-widest">Resepsi</h3>
                <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-6"></div>
                <div className="space-y-3 text-sm text-[#2D2D2D] font-medium mb-8">
                  <p className="font-bold text-base text-[#6B1F2A]">Minggu, 21 September 2025</p>
                  <p>12.00 - 15.00 WIB</p>
                  <div className="pt-2">
                    <strong className="block text-[#6B1F2A] mb-1">Grand Ballroom Hotel Augusta</strong>
                    <span className="opacity-80">Jl. Diponegoro No. 88, Sukabumi</span>
                  </div>
                </div>
                <a href="https://www.google.com/maps/search/Sukabumi" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#6B1F2A] text-[#D4AF37] px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity">
                  Lihat Lokasi 📍
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* H. GALERI FOTO (Our Story) */}
        <div className="py-24 px-6 bg-[#FDF6F0] relative z-10 text-center border-t border-[#6B1F2A]/10">
          <FadeIn>
            <h2 className="font-serif-ornate text-4xl font-bold mb-10 text-[#6B1F2A]">Our Story</h2>
            
            <div className="max-w-sm mx-auto relative group">
              <div className="relative w-full h-[400px] border-4 border-[#D4AF37] p-1 bg-white shadow-lg overflow-hidden">
                <div className="w-full h-full relative overflow-hidden bg-gray-100">
                  {galleryPhotos.map((photo, idx) => (
                    <img 
                      key={idx}
                      src={photo.src}
                      alt={photo.caption}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activePhoto === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      crossOrigin="anonymous"
                    />
                  ))}
                </div>
              </div>
              
              {/* Image Navigation Arrows */}
              <button onClick={handlePrevPhoto} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full text-[#6B1F2A] border border-[#D4AF37] shadow-md hover:bg-[#D4AF37] hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button onClick={handleNextPhoto} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full text-[#6B1F2A] border border-[#D4AF37] shadow-md hover:bg-[#D4AF37] hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            {/* Caption */}
            <div className="h-10 mt-6 flex items-center justify-center">
              {galleryPhotos.map((photo, idx) => (
                <p 
                  key={idx} 
                  className={`font-serif-ornate text-xl text-[#6B1F2A] italic transition-all duration-500 absolute ${activePhoto === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                >
                  "{photo.caption}"
                </p>
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-8">
              {galleryPhotos.map((photo, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  className={`w-[60px] h-[60px] rounded-lg overflow-hidden transition-all duration-300 ${activePhoto === idx ? 'border-2 border-[#D4AF37] scale-110 opacity-100' : 'border border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={photo.src} alt="thumbnail" className="w-full h-full object-cover" crossOrigin="anonymous"/>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* I. LOKASI MAP SECTION */}
        <div className="py-24 px-6 bg-[#6B1F2A] text-center relative z-10 border-y-4 border-[#D4AF37] shadow-inner">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <FadeIn>
            <h2 className="font-serif-ornate text-3xl font-bold mb-10 text-[#D4AF37] tracking-widest drop-shadow-md">Lokasi Acara</h2>
            
            <div className="max-w-md mx-auto bg-[#4A151D] p-2 border-2 border-[#D4AF37] rounded-xl shadow-lg glow-effect mb-10">
              <div className="w-full h-[250px] rounded-lg overflow-hidden border border-[#D4AF37]/50">
                <iframe 
                  src="https://www.google.com/maps?q=Sukabumi,+Jawa+Barat&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Acara"
                ></iframe>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Sukabumi,+Jawa+Barat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#6B1F2A] px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              Buka di Google Maps 📍
            </a>
          </FadeIn>
        </div>

        {/* J. RSVP / UCAPAN & DOA SECTION */}
        <div className="py-24 px-6 bg-white border-x-4 border-[#6B1F2A] relative z-10 text-center">
          <FadeIn>
            <h2 className="font-serif-ornate text-4xl font-bold mb-10 text-[#6B1F2A]">Kirim Ucapan & Doa</h2>
            
            <div className="max-w-md mx-auto bg-[#FDF6F0] p-8 rounded-2xl shadow-lg border border-[#D4AF37]/30 mb-12">
              {!submitted ? (
                <div className="flex flex-col gap-5 text-left">
                  <div>
                    <label className="block text-xs font-bold text-[#6B1F2A] uppercase tracking-widest mb-2">Nama Anda</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border-2 border-[#D4AF37] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B1F2A] transition-all"
                      placeholder="Masukkan nama"
                      value={rsvpData.nama}
                      onChange={(e) => setRsvpData({...rsvpData, nama: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#6B1F2A] uppercase tracking-widest mb-2">Konfirmasi Kehadiran</label>
                    <select 
                      className="w-full bg-white border-2 border-[#D4AF37] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B1F2A] transition-all appearance-none"
                      value={rsvpData.kehadiran}
                      onChange={(e) => setRsvpData({...rsvpData, kehadiran: e.target.value})}
                    >
                      <option value="" disabled>Pilih Kehadiran</option>
                      <option value="Hadir">Hadir</option>
                      <option value="Tidak Hadir">Tidak Hadir</option>
                      <option value="Ragu-ragu">Ragu-ragu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#6B1F2A] uppercase tracking-widest mb-2">Ucapan & Doa</label>
                    <textarea 
                      className="w-full bg-white border-2 border-[#D4AF37] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B1F2A] transition-all"
                      rows="4"
                      placeholder="Tuliskan ucapan dan doa"
                      value={rsvpData.ucapan}
                      onChange={(e) => setRsvpData({...rsvpData, ucapan: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    onClick={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="w-full bg-[#6B1F2A] text-[#D4AF37] py-4 rounded-lg font-bold tracking-widest uppercase mt-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Kirim Ucapan 👑
                  </button>
                </div>
              ) : (
                <div className="py-12 animate-fade-in text-center">
                  <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#6B1F2A] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🙏</div>
                  <h3 className="font-serif-ornate text-2xl font-bold text-[#6B1F2A]">Terima kasih atas ucapan dan doanya!</h3>
                </div>
              )}
            </div>

            {/* Contoh Ucapan */}
            <div className="max-w-md mx-auto flex flex-col gap-4 text-left">
              <div className="bg-[#FDF6F0] p-5 rounded-r-lg border-l-4 border-[#D4AF37] shadow-sm">
                <p className="text-sm text-[#2D2D2D] italic mb-3">"Selamat menempuh hidup baru! Semoga menjadi keluarga sakinah, mawaddah, warahmah."</p>
                <p className="text-xs font-bold text-[#6B1F2A] uppercase tracking-widest">- Keluarga Besar Gunawan</p>
              </div>
              <div className="bg-[#FDF6F0] p-5 rounded-r-lg border-l-4 border-[#D4AF37] shadow-sm">
                <p className="text-sm text-[#2D2D2D] italic mb-3">"Barakallahu lakuma! Semoga menjadi pasangan yang langgeng."</p>
                <p className="text-xs font-bold text-[#6B1F2A] uppercase tracking-widest">- Sahabat Kuliah</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* K. AMPLOP DIGITAL (WEDDING GIFT) */}
        <div className="py-24 px-6 bg-[#6B1F2A] relative z-10 text-center border-y-4 border-[#D4AF37] shadow-inner">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <FadeIn>
            <div className="text-4xl mb-6 drop-shadow-md">🎁</div>
            <h2 className="font-serif-ornate text-4xl font-bold mb-6 text-[#D4AF37] drop-shadow-md">Wedding Gift</h2>
            <p className="text-sm text-[#FDF6F0]/90 leading-relaxed max-w-md mx-auto mb-12 font-medium">
              Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
            </p>

            <div className="max-w-sm mx-auto flex flex-col gap-6">
              {/* BCA */}
              <div className="bg-[#4A151D] p-6 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)] flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]"></div>
                <h3 className="font-bold text-xl text-[#FDF6F0] mb-2 tracking-widest">BCA</h3>
                <p className="font-serif-ornate text-3xl text-[#D4AF37] mb-1 font-bold tracking-wider">2345678901</p>
                <p className="text-xs text-[#FDF6F0]/70 uppercase tracking-widest mb-6">a.n. Reza Maulana</p>
                <button 
                  onClick={() => handleCopy("2345678901", "bca")}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#6B1F2A] px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform"
                >
                  {copied === "bca" ? "Tersalin! ✓" : "Salin Rekening"}
                </button>
              </div>

              {/* Mandiri */}
              <div className="bg-[#4A151D] p-6 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)] flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]"></div>
                <h3 className="font-bold text-xl text-[#FDF6F0] mb-2 tracking-widest">Mandiri</h3>
                <p className="font-serif-ornate text-3xl text-[#D4AF37] mb-1 font-bold tracking-wider">9876543210</p>
                <p className="text-xs text-[#FDF6F0]/70 uppercase tracking-widest mb-6">a.n. Salsabila Azzahra</p>
                <button 
                  onClick={() => handleCopy("9876543210", "mandiri")}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#6B1F2A] px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform"
                >
                  {copied === "mandiri" ? "Tersalin! ✓" : "Salin Rekening"}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* L. CLOSING SECTION */}
        <div 
          className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&auto=format&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#6B1F2A] via-[#6B1F2A]/80 to-[#6B1F2A]/60"></div>
          
          <div className="absolute inset-6 gold-border-double pointer-events-none z-10 opacity-80">
            <div className="ornament-corner tl"></div>
            <div className="ornament-corner tr"></div>
            <div className="ornament-corner bl"></div>
            <div className="ornament-corner br"></div>
          </div>

          <div className="relative z-20 text-center text-[#FDF6F0] px-8 w-full">
            <FadeIn>
              <p className="text-sm font-medium leading-relaxed mb-10 text-[#D4AF37]/90 italic max-w-sm mx-auto">
                "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu."
              </p>
              <p className="text-sm font-bold mb-10 text-[#D4AF37] tracking-wider">
                Wassalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
              <p className="text-xs uppercase tracking-widest mb-4 opacity-80">Kami yang berbahagia,</p>
              <h2 className="font-serif-ornate text-5xl text-[#D4AF37] drop-shadow-lg leading-tight">Reza<br/>&<br/>Salsabila</h2>
            </FadeIn>
          </div>
        </div>

        {/* FOOTER */}
        <div className="py-6 bg-[#FDF6F0] text-center relative z-20 border-t border-[#D4AF37]/30">
          <p className="text-xs text-[#2D2D2D] font-medium tracking-wide">
            Dibuat dengan ❤️ oleh <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#6B1F2A] font-bold hover:underline">DTech</a>
          </p>
        </div>

        {/* Floating Music Button (always visible after gate removed) */}
        {gateRemoved && (
          <button 
            onClick={toggleAudio}
            className={`fixed bottom-[24px] right-[24px] z-[999] w-12 h-12 rounded-full bg-[#D4AF37] text-[#6B1F2A] flex items-center justify-center shadow-2xl border-2 border-[#6B1F2A]/10 hover:scale-110 transition-transform ${isPlaying ? 'animate-pulse' : ''}`}
            title={isPlaying ? "Mute Music" : "Play Music"}
          >
            {isPlaying ? (
              <span className="text-xl font-bold animate-spin" style={{ animationDuration: '4s' }}>⏸</span>
            ) : (
              <span className="text-xl">🎵</span>
            )}
          </button>
        )}

      </div>
    </div>
  );
}
