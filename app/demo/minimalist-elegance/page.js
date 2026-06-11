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

export default function MinimalistEleganceDemo() {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // To handle cover opening
  
  // Timer effect
  useEffect(() => {
    const targetDate = new Date("2025-06-14T08:00:00").getTime();

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
    <div className="bg-[#1a1a1a] min-h-screen flex justify-center selection:bg-[#C9A961] selection:text-white">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --primary: #C9A961;
          --secondary: #2D2D2D;
          --accent: #F5F0E8;
          --white: #FFFFFF;
        }

        .font-serif-elegant {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .font-sans-clean {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .pulse-btn {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(201, 169, 97, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(201, 169, 97, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 169, 97, 0); }
        }

        .float-anim {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Main Container - Mobile Width */}
      <div className="w-full max-w-[500px] bg-white relative shadow-2xl overflow-x-hidden font-sans-clean text-[#2D2D2D]">
        
        {/* 1. TOP BAR */}
        <div className="bg-[#C9A961] text-white px-4 py-3 flex justify-between items-center text-xs font-medium z-50 sticky top-0">
          <a href="/template" className="hover:opacity-80 transition-opacity">
            &larr; Kembali ke Template
          </a>
          <a 
            href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Minimalist%20Elegance"
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
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop&auto=format&q=80" 
            alt="Wedding Cover" 
            className="absolute inset-0 w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          
          <div className="relative z-10 text-center text-white px-6 w-full flex flex-col items-center h-full justify-between py-24">
            <div className="float-anim mt-12">
              <p className="text-xs tracking-[0.3em] mb-4 opacity-90 uppercase">The Wedding Of</p>
              <h1 className="font-serif-elegant text-5xl font-medium mb-2">Rizky</h1>
              <p className="font-serif-elegant text-4xl italic text-[#C9A961] my-2">&</p>
              <h1 className="font-serif-elegant text-5xl font-medium mt-2">Amanda</h1>
              <div className="mt-8 pt-6 border-t border-white/30 w-16 mx-auto"></div>
              <p className="mt-6 tracking-[0.2em] font-light text-sm">14 . 06 . 2025</p>
            </div>

            <button 
              onClick={handleOpenInvitation}
              className={`bg-[#C9A961] text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide pulse-btn hover:bg-white hover:text-[#C9A961] transition-colors duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              Buka Undangan 💌
            </button>
          </div>
        </div>

        {/* The rest of the invitation wrapper */}
        <div id="greeting-section" className="bg-[#F5F0E8] w-full">
          {/* 3. GREETING SECTION */}
          <div className="py-20 px-8 text-center bg-[#F5F0E8]">
            <FadeIn>
              <div className="text-[#C9A961] text-2xl mb-6">✿</div>
              <h2 className="font-serif-elegant text-xl mb-4 font-medium">Bismillahirrahmanirrahim</h2>
              <p className="text-sm font-medium mb-8">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
              <p className="text-sm leading-relaxed text-[#2D2D2D]/80">
                Dengan memohon rahmat dan ridho Allah SWT,<br/>
                kami bermaksud menyelenggarakan resepsi<br/>
                pernikahan putra-putri kami:
              </p>
            </FadeIn>
          </div>

          {/* 4. COUPLE INTRODUCTION */}
          <div className="py-20 px-6 bg-white text-center">
            {/* Groom */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full p-1 border-2 border-[#C9A961] mb-6 relative">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=800&fit=crop&auto=format&q=80" 
                      alt="Rizky" 
                      className="w-full h-full object-cover object-top"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
                <h3 className="font-serif-elegant text-2xl font-semibold mb-3">Rizky Pratama, S.Kom</h3>
                <p className="text-sm text-[#2D2D2D]/70 leading-relaxed">
                  Putra dari Bapak Ahmad Wijaya<br/>& Ibu Siti Nurhaliza
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="font-serif-elegant text-5xl text-[#C9A961] my-12 italic">&</div>
            </FadeIn>

            {/* Bride */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full p-1 border-2 border-[#C9A961] mb-6 relative">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=600&h=800&fit=crop&auto=format&q=80" 
                      alt="Amanda" 
                      className="w-full h-full object-cover object-top"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
                <h3 className="font-serif-elegant text-2xl font-semibold mb-3">Amanda Putri, S.E</h3>
                <p className="text-sm text-[#2D2D2D]/70 leading-relaxed">
                  Putri dari Bapak Budi Santoso<br/>& Ibu Dewi Lestari
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 5. COUNTDOWN SECTION */}
          <div className="py-20 px-6 bg-[#F5F0E8] text-center">
            <FadeIn>
              <h2 className="font-serif-elegant text-2xl font-semibold mb-10">Menuju Hari Bahagia</h2>
              <div className="flex justify-center gap-3">
                {[
                  { value: timeLeft.hari, label: 'Hari' },
                  { value: timeLeft.jam, label: 'Jam' },
                  { value: timeLeft.menit, label: 'Menit' },
                  { value: timeLeft.detik, label: 'Detik' }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-[#C9A961]/30 rounded-xl w-16 h-20 flex flex-col items-center justify-center shadow-sm">
                    <span className="font-serif-elegant text-2xl text-[#C9A961] font-semibold">{String(item.value).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#2D2D2D]/60 mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 6. EVENT DETAILS */}
          <div className="py-20 px-6 bg-white relative">
            <div className="w-full max-w-[200px] mx-auto mb-16 opacity-80">
              <img 
                src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=400&h=200&fit=crop&auto=format&q=80" 
                alt="Flower Divider" 
                className="w-full h-auto"
                crossOrigin="anonymous"
              />
            </div>
            
            <FadeIn>
              <h2 className="font-serif-elegant text-3xl font-semibold text-center mb-12">Save The Date</h2>
            </FadeIn>

            {/* Akad Card */}
            <FadeIn delay={0.1}>
              <div className="bg-[#F5F0E8] rounded-2xl p-8 mb-8 border-l-4 border-[#C9A961] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl">💍</div>
                <div className="relative z-10">
                  <h3 className="font-serif-elegant text-2xl font-semibold mb-4 text-[#C9A961]">Akad Nikah</h3>
                  <div className="space-y-3 text-sm text-[#2D2D2D]/80">
                    <p className="flex items-center gap-3">
                      <span className="w-5 text-center">📅</span> Sabtu, 14 Juni 2025
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-5 text-center">⏰</span> 08.00 - 10.00 WIB
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-5 text-center mt-0.5">📍</span>
                      <span>
                        <strong className="block text-[#2D2D2D] font-medium mb-1">Kediaman Mempelai Wanita</strong>
                        Jl. Mawar No. 15, Sukabumi
                      </span>
                    </p>
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-white text-[#C9A961] border border-[#C9A961] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-[#C9A961] hover:text-white transition-colors">
                    Lihat Lokasi 📍
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Resepsi Card */}
            <FadeIn delay={0.2}>
              <div className="bg-[#F5F0E8] rounded-2xl p-8 border-l-4 border-[#C9A961] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl">🎉</div>
                <div className="relative z-10">
                  <h3 className="font-serif-elegant text-2xl font-semibold mb-4 text-[#C9A961]">Resepsi</h3>
                  <div className="space-y-3 text-sm text-[#2D2D2D]/80">
                    <p className="flex items-center gap-3">
                      <span className="w-5 text-center">📅</span> Sabtu, 14 Juni 2025
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-5 text-center">⏰</span> 11.00 - 14.00 WIB
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="w-5 text-center mt-0.5">📍</span>
                      <span>
                        <strong className="block text-[#2D2D2D] font-medium mb-1">Gedung Serbaguna Graha Pratama</strong>
                        Jl. Ahmad Yani No. 45, Sukabumi
                      </span>
                    </p>
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-white text-[#C9A961] border border-[#C9A961] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-[#C9A961] hover:text-white transition-colors">
                    Lihat Lokasi 📍
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 7. LOCATION MAP */}
          <div className="pb-20 px-6 bg-white">
            <FadeIn>
              <div className="w-full h-[300px] rounded-xl overflow-hidden mb-6 border border-[#E5E7EB]">
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
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2D2D2D] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#C9A961] transition-colors">
                  Buka di Google Maps
                </a>
              </div>
            </FadeIn>
          </div>

          {/* 8. GALERI FOTO */}
          <div className="py-20 px-6 bg-[#F5F0E8] text-center">
            <FadeIn>
              <h2 className="font-serif-elegant text-3xl font-semibold mb-2">Our Story</h2>
              <p className="text-sm text-[#2D2D2D]/60 mb-10">Momen indah perjalanan cinta kami</p>
            </FadeIn>

            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <div className="relative rounded-xl overflow-hidden shadow-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Pertemuan Pertama" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                    <p className="text-white text-sm font-serif-elegant italic tracking-wide">Pertemuan Pertama</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="relative rounded-xl overflow-hidden shadow-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1606490194859-07c18c9f0968?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Lamaran" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                    <p className="text-white text-sm font-serif-elegant italic tracking-wide">Lamaran</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="relative rounded-xl overflow-hidden shadow-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&auto=format&q=80" 
                    alt="Pre-Wedding" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                    <p className="text-white text-sm font-serif-elegant italic tracking-wide">Pre-Wedding</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* 9. UCAPAN & DOA / RSVP FORM */}
          <div className="py-20 px-6 bg-white">
            <FadeIn>
              <h2 className="font-serif-elegant text-2xl font-semibold text-center mb-10 text-[#C9A961]">Kirim Ucapan & Doa</h2>
              
              <form className="bg-[#F5F0E8] p-6 rounded-2xl shadow-sm mb-10" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#2D2D2D] mb-2 uppercase tracking-wide">Nama Anda</label>
                  <input type="text" placeholder="Masukkan nama" className="w-full px-4 py-3 rounded-lg border border-transparent focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none text-sm transition-all bg-white" required />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#2D2D2D] mb-2 uppercase tracking-wide">Konfirmasi Kehadiran</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-transparent focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none text-sm transition-all bg-white text-[#2D2D2D]">
                    <option value="hadir">Hadir</option>
                    <option value="tidak_hadir">Tidak Hadir</option>
                    <option value="ragu">Ragu-ragu</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-[#2D2D2D] mb-2 uppercase tracking-wide">Ucapan & Doa</label>
                  <textarea rows="4" placeholder="Tulis ucapan dan doa untuk kedua mempelai" className="w-full px-4 py-3 rounded-lg border border-transparent focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] outline-none text-sm transition-all bg-white resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full bg-[#C9A961] text-white py-3 rounded-lg text-sm font-medium tracking-wide hover:bg-[#b09252] transition-colors">
                  Kirim Ucapan 💌
                </button>
              </form>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#F5F0E8] text-[#C9A961] flex items-center justify-center font-semibold text-xs">KW</div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2D2D2D]">Keluarga Besar Wijaya</h4>
                      <p className="text-[10px] text-[#2D2D2D]/50 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Hadir</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-[#2D2D2D]/80">"Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah."</p>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#F5F0E8] text-[#C9A961] flex items-center justify-center font-semibold text-xs">SS</div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2D2D2D]">Sahabat SMA</h4>
                      <p className="text-[10px] text-[#2D2D2D]/50 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Hadir</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-[#2D2D2D]/80">"Barakallahu lakuma! Selamat ya, semoga langgeng selalu. Bahagia terus buat kalian berdua."</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 10. AMPLOP DIGITAL (GIFT) */}
          <div className="py-20 px-6 bg-[#F5F0E8] text-center">
            <FadeIn>
              <div className="mb-6 inline-block p-4 rounded-full bg-white shadow-sm text-[#C9A961] text-2xl">
                🎁
              </div>
              <h2 className="font-serif-elegant text-2xl font-semibold mb-4 text-[#C9A961]">Wedding Gift</h2>
              <p className="text-sm text-[#2D2D2D]/70 mb-10 leading-relaxed max-w-sm mx-auto">
                Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
              </p>

              <div className="flex flex-col gap-5 max-w-sm mx-auto">
                {/* BCA Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E7EB] relative overflow-hidden text-left">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#C9A961]/10 rounded-full"></div>
                  <div className="relative z-10">
                    <p className="font-bold text-[#1a539e] italic text-xl mb-1">BCA</p>
                    <p className="text-2xl font-medium tracking-widest text-[#2D2D2D] mb-1">1234567890</p>
                    <p className="text-xs text-[#2D2D2D]/60 uppercase tracking-wide mb-6">a.n. Rizky Pratama</p>
                    <button onClick={() => handleCopy('1234567890')} className="bg-[#F5F0E8] text-[#C9A961] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#C9A961] hover:text-white transition-colors flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Salin Rekening
                    </button>
                  </div>
                </div>

                {/* Mandiri Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5E7EB] relative overflow-hidden text-left">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#C9A961]/10 rounded-full"></div>
                  <div className="relative z-10">
                    <p className="font-bold text-[#f5a816] italic text-xl mb-1">Mandiri</p>
                    <p className="text-2xl font-medium tracking-widest text-[#2D2D2D] mb-1">0987654321</p>
                    <p className="text-xs text-[#2D2D2D]/60 uppercase tracking-wide mb-6">a.n. Amanda Putri</p>
                    <button onClick={() => handleCopy('0987654321')} className="bg-[#F5F0E8] text-[#C9A961] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#C9A961] hover:text-white transition-colors flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Salin Rekening
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 11. CLOSING */}
          <div className="relative py-32 px-6 text-center text-white">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&auto=format&q=80" 
              alt="Venue" 
              className="absolute inset-0 w-full h-full object-cover"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            
            <div className="relative z-10">
              <FadeIn>
                <div className="text-[#C9A961] text-2xl mb-6">✿</div>
                <p className="text-sm leading-relaxed mb-8 max-w-sm mx-auto font-light">
                  Merupakan suatu kehormatan dan kebahagiaan<br/>
                  bagi kami apabila Bapak/Ibu/Saudara/i<br/>
                  berkenan hadir dan memberikan doa restu.
                </p>
                <p className="text-sm mb-12 font-medium">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                
                <p className="text-xs tracking-widest uppercase mb-4 opacity-80">Kami yang berbahagia,</p>
                <h2 className="font-serif-elegant text-4xl font-medium text-[#C9A961]">Rizky & Amanda</h2>
              </FadeIn>
            </div>
          </div>

          {/* 12. FOOTER & MUSIC PLAYER */}
          <div className="bg-[#2D2D2D] text-[#F5F0E8] py-8 text-center text-xs">
            <p className="mb-2 opacity-80">Dibuat dengan ❤️ oleh DTech</p>
            <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#C9A961] font-semibold tracking-wide hover:text-white transition-colors">
              Pesan Undangan Digital Anda
            </a>
          </div>

          {/* FLOATING MUSIC BUTTON */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#C9A961] text-white flex items-center justify-center shadow-lg transition-transform ${isPlaying ? 'animate-spin-slow' : ''} hover:scale-110`}
            style={{ animationDuration: '4s' }}
            title={isPlaying ? "Jeda Musik" : "Putar Musik"}
          >
            {isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
