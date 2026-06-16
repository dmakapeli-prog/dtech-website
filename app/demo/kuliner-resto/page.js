"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ───────── INTERSECTION OBSERVER HOOK ───────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.unobserve(entry.target); }
    }, { threshold: 0.15, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ───────── DATA ───────── */
const menuItems = [
  { name: "Nasi Gudeg Spesial", harga: "Rp 35.000", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop&q=80", desc: "Gudeg khas Jogja dengan ayam kampung, telur, dan sambal krecek." },
  { name: "Soto Betawi", harga: "Rp 30.000", image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&h=400&fit=crop&q=80", desc: "Kuah santan gurih dengan daging sapi empuk dan kentang." },
  { name: "Rendang Padang", harga: "Rp 45.000", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&q=80", desc: "Rendang sapi otentik dengan bumbu rempah kaya rasa." },
  { name: "Es Teh Manis", harga: "Rp 8.000", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop&q=80", desc: "Teh pilihan diseduh sempurna, disajikan dingin menyegarkan." },
  { name: "Gado-Gado", harga: "Rp 25.000", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80", desc: "Sayuran segar dengan bumbu kacang dan kerupuk renyah." },
  { name: "Bakso Spesial", harga: "Rp 28.000", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80", desc: "Bakso jumbo urat sapi dengan kuah kaldu kaya rasa." },
];

const keunggulan = [
  { icon: "🌿", title: "Bahan Segar Pilihan", desc: "Dipilih langsung dari petani lokal setiap pagi untuk menjamin kesegaran dan kualitas terbaik." },
  { icon: "📜", title: "Resep Turun Temurun", desc: "Warisan kuliner Nusantara yang terjaga keasliannya selama tiga generasi." },
  { icon: "💰", title: "Harga Terjangkau", desc: "Porsi besar dengan harga yang bersahabat untuk semua kalangan masyarakat." },
  { icon: "😊", title: "Pelayanan Ramah", desc: "Tim kami siap melayani dengan senyum tulus setiap saat demi kenyamanan Anda." },
];

const testimoni = [
  { name: "Budi Santoso", rating: 5, text: "Rasanya autentik banget! Soto Betawinya bikin nagih, porsinya juga besar. Pasti balik lagi!", avatar: "B" },
  { name: "Siti Rahayu", rating: 5, text: "Tempat makan favorit keluarga kami. Rendangnya juara, pelayanannya ramah. Harga sangat terjangkau!", avatar: "S" },
  { name: "Ahmad Fauzi", rating: 5, text: "Sudah langganan 3 tahun. Konsisten enak dan bersih. Recommended banget buat acara keluarga!", avatar: "A" },
];

const stats = [
  { num: "500+", label: "Menu Tersedia" },
  { num: "10+", label: "Tahun Pengalaman" },
  { num: "1000+", label: "Pelanggan Puas" },
  { num: "4.9★", label: "Rating Google" },
];

/* ───────── MAIN PAGE ───────── */
export default function KulinerRestoDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1A0A00]" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

      {/* ══════ TOP BAR (DiCode) ══════ */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-3 sm:px-4 py-2 bg-[#1A0A00]/90 backdrop-blur-xl border-b border-white/5">
        <Link href="/template" className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-all group">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span className="hidden sm:inline">Kembali ke Template</span>
          <span className="sm:hidden">Kembali</span>
        </Link>
        <a href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20tertarik%20dengan%20template%20Kuliner%20%26%20Resto" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-[#E8820C] hover:bg-[#D4740A] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#E8820C]/30">
          Pesan Template Ini <span className="hidden sm:inline">→</span>
        </a>
      </div>

      {/* ══════ NAVBAR ══════ */}
      <nav className={`fixed top-[36px] sm:top-[40px] left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#1A0A00]/95 backdrop-blur-xl shadow-2xl shadow-black/20" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E8820C] to-[#D4740A] rounded-xl flex items-center justify-center text-white text-lg shadow-lg shadow-[#E8820C]/30 group-hover:scale-110 transition-transform">
              🍽️
            </div>
            <div>
              <span className="text-white font-extrabold text-lg leading-none tracking-tight">D</span>
              <span className="text-[#E8820C] font-extrabold text-lg leading-none tracking-tight">Tech</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {["Beranda", "Menu", "Tentang", "Lokasi"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20reservasi%20meja." target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 bg-[#E8820C] hover:bg-[#D4740A] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#E8820C]/30">
              Reservasi
            </a>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenu ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-[#1A0A00]/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
            {["Beranda", "Menu", "Tentang", "Lokasi"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenu(false)} className="block text-white/80 hover:text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/5 transition-all">
                {item}
              </a>
            ))}
            <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20reservasi%20meja." target="_blank" rel="noreferrer" className="block text-center bg-[#E8820C] text-white font-bold text-sm px-6 py-3 rounded-full mt-2">
              Reservasi
            </a>
          </div>
        </div>
      </nav>

      {/* ══════ HERO ══════ */}
      <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop&q=80" alt="Makanan Indonesia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A00]/95 via-[#1A0A00]/70 to-[#1A0A00]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00] via-transparent to-[#1A0A00]/30"></div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#E8820C]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[#E8820C]/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10 w-full">
          <div className="max-w-2xl">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 bg-[#E8820C]/20 backdrop-blur-md text-[#E8820C] text-xs sm:text-sm font-bold px-5 py-2 rounded-full border border-[#E8820C]/20 mb-8">
                🍜 Rasa Autentik Nusantara
              </span>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Cita Rasa Sejati<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8820C] to-[#FFB347]">di Pusat Sukabumi</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
                Nikmati kelezatan masakan tradisional yang dipadukan dengan sentuhan modern. Setiap hidangan diracik dengan cinta dan bahan-bahan pilihan.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20pesan%20makanan." target="_blank" rel="noreferrer" className="group flex items-center gap-2 bg-gradient-to-r from-[#E8820C] to-[#D4740A] text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-[#E8820C]/40 transition-all hover:scale-105 text-sm sm:text-base">
                  Pesan Sekarang
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#menu" className="flex items-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/30 transition-all text-sm sm:text-base backdrop-blur-sm">
                  Lihat Menu
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* ══════ STATS BAR ══════ */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/5 border border-[#E8820C]/10 p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((s, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E8820C] mb-1 group-hover:scale-110 transition-transform">{s.num}</div>
                    <div className="text-xs sm:text-sm text-[#1A0A00]/50 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════ MENU UNGGULAN ══════ */}
      <section id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-[#E8820C] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">MENU PILIHAN</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A0A00] mb-4">Menu Unggulan Kami</h2>
              <p className="text-[#1A0A00]/50 text-base sm:text-lg max-w-xl mx-auto">Pilihan terbaik yang wajib Anda coba, diracik dengan bumbu rempah pilihan.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menuItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-[#E8820C]/10 hover:-translate-y-2 transition-all duration-500 group border border-black/5">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-[#E8820C] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg">
                      {item.harga}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-bold text-[#1A0A00] text-lg mb-2 group-hover:text-[#E8820C] transition-colors">{item.name}</h3>
                    <p className="text-[#1A0A00]/50 text-sm leading-relaxed mb-5">{item.desc}</p>
                    <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20pesan%20makanan." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#E8820C]/10 text-[#E8820C] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#E8820C] hover:text-white transition-all duration-300 group/btn">
                      Pesan
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ KEUNGGULAN ══════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1A0A00] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8820C]/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8820C]/5 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E8820C]/5 rounded-full blur-[150px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-[#E8820C] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">KEUNGGULAN</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Mengapa Memilih Kami?</h2>
              <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto">Dedikasi kami dalam menghadirkan pengalaman kuliner terbaik.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {keunggulan.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-[#E8820C]/20 transition-all duration-500 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E8820C]/20 to-[#E8820C]/5 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 group-hover:bg-[#E8820C]/30 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#E8820C] transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TENTANG KAMI ══════ */}
      <section id="tentang" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#E8820C]/10">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80" alt="Interior Warung Nusantara" className="w-full h-72 sm:h-96 object-cover" />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/10 border border-[#E8820C]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E8820C] to-[#D4740A] rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-[#E8820C]/30">
                      ⭐
                    </div>
                    <div>
                      <p className="text-[#1A0A00] font-extrabold text-lg leading-none">4.9/5.0</p>
                      <p className="text-[#1A0A00]/40 text-xs font-medium">1000+ Ulasan</p>
                    </div>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[#E8820C]/20 rounded-2xl -z-10"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <span className="inline-block text-[#E8820C] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">TENTANG KAMI</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A0A00] mb-6 leading-tight">
                  Warung Nusantara,<br />
                  <span className="text-[#E8820C]">Sejak 2015</span>
                </h2>
                <p className="text-[#1A0A00]/60 leading-relaxed mb-6 text-base sm:text-lg">
                  Warung Nusantara hadir untuk melestarikan cita rasa masakan Indonesia yang autentik. Berlokasi di jantung kota Sukabumi, kami telah melayani ribuan pelanggan setia selama lebih dari satu dekade.
                </p>
                <p className="text-[#1A0A00]/60 leading-relaxed mb-8 text-base sm:text-lg">
                  Setiap hidangan kami diracik dari resep turun-temurun menggunakan bahan-bahan segar yang dipilih langsung dari petani lokal, menjadikan setiap suapan penuh kenangan dan kehangatan.
                </p>
                <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                  <div className="text-center bg-[#E8820C]/5 rounded-2xl p-4 border border-[#E8820C]/10">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#E8820C]">10+</div>
                    <div className="text-[10px] sm:text-xs text-[#1A0A00]/40 font-medium mt-1">Tahun</div>
                  </div>
                  <div className="text-center bg-[#E8820C]/5 rounded-2xl p-4 border border-[#E8820C]/10">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#E8820C]">500+</div>
                    <div className="text-[10px] sm:text-xs text-[#1A0A00]/40 font-medium mt-1">Menu</div>
                  </div>
                  <div className="text-center bg-[#E8820C]/5 rounded-2xl p-4 border border-[#E8820C]/10">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#E8820C]">25+</div>
                    <div className="text-[10px] sm:text-xs text-[#1A0A00]/40 font-medium mt-1">Karyawan</div>
                  </div>
                </div>
                <a href="#menu" className="inline-flex items-center gap-2 bg-[#E8820C] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#D4740A] hover:shadow-xl hover:shadow-[#E8820C]/30 transition-all hover:scale-105 text-sm sm:text-base">
                  Jelajahi Menu Kami →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONI ══════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF3E6]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-[#E8820C] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">TESTIMONI</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A0A00] mb-4">Kata Pelanggan Kami</h2>
              <p className="text-[#1A0A00]/50 text-base sm:text-lg max-w-xl mx-auto">Kepuasan pelanggan adalah prioritas utama kami.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimoni.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-[#E8820C]/10 hover:-translate-y-1 transition-all duration-500 border border-[#E8820C]/5 h-full flex flex-col">
                  <div className="flex gap-1 text-[#E8820C] mb-4 text-lg">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-[#1A0A00]/70 leading-relaxed mb-6 flex-1 italic text-sm sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#1A0A00]/5">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E8820C] to-[#D4740A] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[#1A0A00] text-sm">{t.name}</p>
                      <p className="text-[#1A0A00]/40 text-xs">Pelanggan Setia</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ LOKASI & JAM BUKA ══════ */}
      <section id="lokasi" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block text-[#E8820C] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">KUNJUNGI KAMI</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A0A00] mb-4">Lokasi & Jam Buka</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/10 h-72 sm:h-96 border border-[#E8820C]/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63349.87392283014!2d106.891!3d-6.918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6822e24dbbcc99%3A0x6f48aaa90e3e0bf0!2sSukabumi!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Warung Nusantara"
                ></iframe>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="flex flex-col justify-center h-full space-y-6">
                {[
                  { icon: "📍", label: "Alamat", value: "Jl. Ahmad Yani No. 45, Sukabumi, Jawa Barat 43111" },
                  { icon: "🕐", label: "Jam Buka", value: "Senin - Minggu\n07.00 - 22.00 WIB" },
                  { icon: "📞", label: "Telepon", value: "(0266) 123-456" },
                  { icon: "💬", label: "WhatsApp", value: "0819-9652-2114", link: "https://wa.me/6281996522114" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-[#E8820C]/10 shadow-sm hover:shadow-lg hover:border-[#E8820C]/20 transition-all group">
                    <div className="w-12 h-12 bg-[#E8820C]/10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-[#E8820C]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#1A0A00]/40 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer" className="text-[#E8820C] font-semibold text-sm sm:text-base hover:underline">{item.value}</a>
                      ) : (
                        <p className="text-[#1A0A00] font-semibold text-sm sm:text-base whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1A0A00] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8820C]/10 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#E8820C]/10 rounded-full blur-[100px]"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p className="text-5xl mb-6">🍽️</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">Lapar? Pesan Sekarang!</h2>
            <p className="text-white/40 text-base sm:text-lg mb-10 max-w-lg mx-auto">Hubungi kami via WhatsApp untuk pemesanan makanan, reservasi meja, atau layanan catering harian.</p>
            <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20pesan%20makanan%20dari%20Warung%20Nusantara." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E8820C] to-[#D4740A] text-white font-bold px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg hover:shadow-2xl hover:shadow-[#E8820C]/40 transition-all hover:scale-105">
              Pesan via WhatsApp
              <span>→</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="bg-[#120700] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E8820C] to-[#D4740A] rounded-xl flex items-center justify-center text-white text-lg">🍽️</div>
              <span className="text-white font-extrabold text-lg">D<span className="text-[#E8820C]">Tech</span></span>
            </div>
            <div className="flex gap-6">
              {["Beranda", "Menu", "Tentang", "Lokasi"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white/30 hover:text-white/60 text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-white/20 text-sm">© 2026 DiCode. Seluruh hak cipta dilindungi.</p>
            <p className="text-white/30 text-xs">
              Template Demo by{" "}
              <a href="https://dicode-website-pied.vercel.app" target="_blank" rel="noreferrer" className="text-[#E8820C]/80 hover:text-[#E8820C] transition-colors font-semibold">
                DiCode
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ══════ FLOATING WHATSAPP ══════ */}
      <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20pesan%20makanan%20dari%20Warung%20Nusantara." target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-[#E8820C] to-[#D4740A] text-white font-bold pl-5 pr-6 py-3.5 rounded-full shadow-2xl shadow-[#E8820C]/40 hover:scale-110 transition-all group">
        <svg className="w-5 h-5 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.52 5.853L.057 23.764l6.063-1.592A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.94 0-3.79-.508-5.407-1.472l-.388-.23-3.598.944.96-3.508-.253-.402A9.777 9.777 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z"/></svg>
        <span className="text-sm hidden sm:inline">Pesan via WA</span>
      </a>
    </div>
  );
}
