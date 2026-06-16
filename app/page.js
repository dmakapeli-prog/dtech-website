import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Background Effect */}
      <div className="fixed inset-0 z-[-2] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Agensi Digital Terpercaya
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Wujudkan <br />
                Ide Digital <br />
                <span className="text-gradient">Lebih Nyata.</span>
              </h1>

              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Kami membantu UMKM, Instansi, dan Perusahaan bertransformasi
                secara digital melalui pembuatan website responsif dan sistem
                kustom. Tersedia juga layanan Undangan Digital premium untuk
                momen spesial Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/layanan"
                  className="bg-gradient-to-r from-primary to-blue-700 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Jelajahi Layanan
                  <span className="material-symbols-outlined">explore</span>
                </Link>
                <a
                  href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20tertarik%20untuk%20konsultasi%20gratis."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/5 text-gray-200 border border-white/10 font-bold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/20 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            {/* Right - Hero Visual */}
            <div className="relative flex items-center justify-center pt-8 lg:pt-0">
              <div className="w-full max-w-4xl mx-auto relative pt-8 pb-12 flex flex-col items-center group" style={{ perspective: "2000px" }}>
                {/* Glow behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/20 via-accent/10 to-blue-400/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

                {/* Floating Badges */}
                <div className="absolute top-4 left-0 md:top-12 md:-left-12 glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-xl font-bold text-primary text-xs md:text-sm flex items-center gap-1 md:gap-2 animate-bounce-slow z-30 scale-90 md:scale-100 origin-top-left" style={{ animationDelay: "0ms" }}>
                  <span className="material-symbols-outlined text-base md:text-lg">public</span>
                  Web Company
                </div>
                <div className="absolute top-1/4 right-0 md:top-1/3 md:-right-10 glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-xl font-bold text-accent text-xs md:text-sm flex items-center gap-1 md:gap-2 animate-bounce-slow z-30 scale-90 md:scale-100 origin-top-right" style={{ animationDelay: "400ms" }}>
                  <span className="material-symbols-outlined text-base md:text-lg">favorite</span>
                  Undangan Digital
                </div>
                <div className="absolute bottom-16 left-2 md:bottom-28 md:-left-8 bg-gradient-to-r from-primary/80 to-accent/80 backdrop-blur-md text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-xl border border-white/20 font-bold text-xs md:text-sm flex items-center gap-1 md:gap-2 animate-bounce-slow z-30 scale-90 md:scale-100 origin-bottom-left" style={{ animationDelay: "800ms" }}>
                  <span className="material-symbols-outlined text-base md:text-lg">analytics</span>
                  Sistem Bisnis
                </div>

                {/* Hero Mockup */}
                <HeroMockup />

                {/* Shadow */}
                <div className="w-[85%] h-8 bg-primary/10 blur-[25px] rounded-[100%] mx-auto mt-2 pointer-events-none transform -translate-y-4 -z-10 transition-all duration-700 group-hover:bg-accent/10 group-hover:w-[70%] group-hover:blur-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN SECTION */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
              Layanan Kami
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Solusi Digital DiCode
            </h3>
            <p className="text-lg text-gray-400">
              Pendekatan komprehensif untuk kebutuhan digital Anda, dirancang
              dengan fokus pada performa dan estetika.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Web */}
            <div className="glass-card rounded-[2rem] p-8 lg:p-12 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-primary/15"></div>
              <div className="relative z-10 flex-1">
                <div className="w-full h-48 md:h-56 mb-8 rounded-2xl overflow-hidden relative border border-white/10 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <Image src="/assets/web-dev-service.png" alt="Web Development Service" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Pengembangan Web</h4>
                <p className="text-gray-400 mb-8 font-normal leading-relaxed">
                  Situs web kustom yang responsif, cepat, dan dioptimalkan untuk
                  SEO. Kami membangun platform profesional yang mendorong
                  konversi.
                </p>
              </div>
              <div className="relative z-10 mt-auto pt-4">
                <Link
                  href="/layanan?tab=web"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 w-full justify-center"
                >
                  Pesan Jasa Web
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Undangan */}
            <div className="glass-card rounded-[2rem] p-8 lg:p-12 group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-accent/15"></div>
              <div className="relative z-10 flex-1">
                <div className="w-full h-48 md:h-56 mb-8 rounded-2xl overflow-hidden relative border border-white/10 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                  <Image src="/assets/inv-service.png" alt="Undangan Digital Service" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Undangan Digital</h4>
                <p className="text-gray-400 mb-8 font-normal leading-relaxed">
                  Undangan digital modern, elegan, dan interaktif. Ramah
                  lingkungan dengan fitur RSVP terintegrasi dan desain yang
                  disesuaikan sepenuhnya.
                </p>
              </div>
              <div className="relative z-10 mt-auto pt-4">
                <Link
                  href="/layanan?tab=undangan"
                  className="inline-flex items-center gap-2 border-2 border-accent text-accent font-bold px-6 py-3 rounded-xl hover:bg-accent hover:text-[#0a0a1a] hover:shadow-lg hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300 w-full justify-center"
                >
                  Pesan Undangan
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARGA PREVIEW SECTION */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-primary/[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
              Paket Harga
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Investasi Transparan
            </h3>
            <p className="text-lg text-gray-400">
              Pilihan paket fleksibel mulai dari undangan digital hingga website
              bisnis kompleks.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-8 border-b border-white/10 pb-8">
              <div>
                <p className="text-gray-400 font-medium mb-2">Jasa Web Development</p>
                <p className="text-3xl font-extrabold text-white">
                  Mulai <span className="text-primary">Rp 300.000</span>
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10"></div>
              <div>
                <p className="text-gray-400 font-medium mb-2">Jasa Undangan Digital</p>
                <p className="text-3xl font-extrabold text-white">
                  Mulai <span className="text-accent">Rp 50.000</span>
                </p>
              </div>
            </div>
            <Link
              href="/harga"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-700 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
            >
              Lihat Paket Lengkap
              <span className="material-symbols-outlined">visibility</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW SECTION */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Paling Sering Ditanyakan
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {[
              {
                q: "Berapa lama proses pembuatan website?",
                a: "Waktu pengerjaan bervariasi menyesuaikan skala proyek Anda. Untuk Paket Hemat (Landing Page), pengerjaan sangat cepat yakni 3-5 hari kerja. Paket Populer (Web Multi-halaman) membutuhkan waktu sekitar 1-2 minggu. Sedangkan untuk Paket Eksklusif (Custom Web Development), estimasi pengerjaan mulai dari 2 hingga 4 minggu.",
              },
              {
                q: "Apakah saya bisa mengubah desain undangan digital?",
                a: "Ya! Tema, warna, foto, font, dan musik bisa disesuaikan sepenuhnya sesuai dengan selera Anda.",
              },
              {
                q: "Berapa lama pengerjaan undangan digital?",
                a: "Proses pengerjaan Undangan Digital sangat cepat. Untuk Paket Basic dan Premium, undangan Anda akan selesai dalam 1-2 hari kerja setelah seluruh data (teks & foto) kami terima. Sedangkan untuk Paket Eksklusif (Custom Design), waktu pengerjaannya berkisar antara 3-7 hari kerja.",
              },
              {
                q: "Bagaimana sistem pembayarannya?",
                a: "Pembayaran dilakukan dengan sistem DP 50% di awal dan pelunasan 50% setelah proyek selesai.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
              >
                <h4 className="font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm font-normal">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline transition-all"
            >
              Lihat Semua FAQ
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
              Jangan biarkan ide Anda hanya menjadi rencana. Mari berkolaborasi
              dan bangun ekosistem digital yang memukau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20ingin%20berdiskusi%20tentang%20proyek%20digital%20saya."
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">chat</span>
                Diskusikan Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const HeroMockup = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center py-20 md:py-32 overflow-visible" style={{ perspective: '1500px' }}>
      <style>{`
        @keyframes float-mockup {
          0%, 100% { transform: translateY(0px) translateZ(0px); }
          50% { transform: translateY(-15px) translateZ(10px); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.8; transform: translateY(-20px) scale(1.5); }
          100% { transform: translateY(-40px) scale(0.5); opacity: 0; }
        }

        .animate-float-mockup {
          animation: float-mockup 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        .animate-float-badge {
          animation: float-badge 4s ease-in-out infinite;
        }
        .animate-float-badge-delayed {
          animation: float-badge 5s ease-in-out infinite 1s;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .hex-bg {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      {/* Main Spotlight & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[70%] h-[70%] bg-[#00D9FF] blur-[150px] rounded-full opacity-60 animate-pulse-glow"></div>
        <div className="absolute w-[90%] h-[90%] bg-blue-600 blur-[200px] rounded-full opacity-30"></div>
        
        {/* Rays */}
        <div className="absolute w-[120%] h-[120%] opacity-20" style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(0,217,255,0.5) 20deg, transparent 40deg, transparent 60deg, rgba(0,217,255,0.5) 80deg, transparent 100deg, transparent 150deg, rgba(0,217,255,0.5) 170deg, transparent 190deg, transparent 240deg, rgba(0,217,255,0.5) 260deg, transparent 280deg, transparent 330deg, rgba(0,217,255,0.5) 350deg, transparent 360deg)'
        }}></div>

        {/* Particles */}
        <div className="absolute w-full h-full">
           {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute rounded-full bg-[#00D9FF] blur-[1px]" style={{
                 width: Math.random() * 6 + 2 + 'px',
                 height: Math.random() * 6 + 2 + 'px',
                 top: Math.random() * 100 + '%',
                 left: Math.random() * 100 + '%',
                 opacity: 0,
                 animation: `float-particle ${Math.random() * 3 + 3}s ease-in-out infinite ${Math.random() * 5}s`,
                 boxShadow: '0 0 10px 2px rgba(0,217,255,0.8)'
              }}></div>
           ))}
        </div>
      </div>

      {/* Main 3D Composition Group */}
      <div className="relative w-full max-w-[1000px] flex items-center justify-center z-10 animate-float-mockup" style={{ transformStyle: 'preserve-3d' }}>

        {/* OUTER BADGES (Outer UI elements matching the screenshot) */}
        <div className="absolute -top-16 left-[0%] md:-left-[10%] z-50">
          <div className="bg-[#050B18]/80 backdrop-blur-md border border-gray-700/50 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="material-symbols-outlined text-blue-500 text-xl">public</span>
            <span className="text-blue-500 font-bold text-sm">Web Company</span>
          </div>
        </div>
        <div className="absolute top-[20%] right-[0%] md:-right-[10%] z-50">
          <div className="bg-[#050B18]/80 backdrop-blur-md border border-gray-700/50 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="material-symbols-outlined text-[#00D9FF] text-xl">favorite</span>
            <span className="text-[#00D9FF] font-bold text-sm">Undangan Digital</span>
          </div>
        </div>
        <div className="absolute -bottom-16 left-[5%] md:-left-[5%] z-50">
          <div className="bg-[#00D9FF] px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(0,217,255,0.4)]">
            <span className="material-symbols-outlined text-white text-xl">grid_view</span>
            <span className="text-white font-bold text-sm">Sistem Bisnis</span>
          </div>
        </div>

        {/* TABLET KIRI */}
        <div 
          className="absolute left-[0%] md:left-[5%] top-[10%] w-[35%] md:w-[26%] max-w-[260px] z-20 drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] group"
          style={{ transform: 'rotateY(25deg) rotateX(10deg) rotateZ(-5deg) translateZ(40px)', transformStyle: 'preserve-3d' }}
        >
          {/* Tablet Frame */}
          <div className="w-full aspect-[3/4] bg-[#151518] rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[8px] border-[#2a2a30] relative flex flex-col p-1.5 md:p-2 overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
            {/* Screen */}
            <div className="flex-1 bg-[#0a0805] rounded-[1rem] md:rounded-[1.5rem] relative overflow-hidden flex flex-col border border-yellow-900/30">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-800/20 via-[#0a0805] to-[#0a0805]"></div>
              
              {/* Floral Ornaments using borders and basic shapes */}
              <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 border border-yellow-500/30 rounded-full opacity-50"></div>
              <div className="absolute -top-8 -left-8 w-24 md:w-32 h-24 md:h-32 border border-yellow-500/20 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 border border-yellow-500/30 rounded-full opacity-50"></div>
              
              <div className="flex-1 flex flex-col items-center justify-center p-4 text-center relative z-10">
                <span className="text-yellow-500 text-xs md:text-sm italic mb-1 font-serif">The Wedding of</span>
                <h2 className="text-xl md:text-3xl font-serif text-yellow-400 mb-2 italic drop-shadow-[0_2px_5px_rgba(0,0,0,1)]">Sarah<br/>&<br/>Daniel</h2>
                <div className="w-16 md:w-24 h-px bg-yellow-500/40 my-2"></div>
                <span className="text-[6px] md:text-[8px] text-yellow-300 tracking-[0.2em] mb-4">14 DESEMBER 2024</span>
                <div className="px-3 py-1 text-[5px] md:text-[8px] text-yellow-900 bg-yellow-500 rounded font-bold uppercase">Save The Date</div>
              </div>
            </div>
          </div>
          
          {/* Hexagon Badge Tablet */}
          <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 z-50 w-16 h-16 md:w-20 md:h-20 animate-float-badge flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="absolute w-full h-full drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]">
               <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="rgba(0,217,255,0.15)" stroke="#00D9FF" strokeWidth="3" />
             </svg>
             <span className="relative text-[#00D9FF] font-bold text-[6px] md:text-[8px] text-center leading-tight">Undangan<br/>Digital</span>
          </div>
        </div>

        {/* LAPTOP TENGAH */}
        <div 
          className="relative w-[75%] md:w-[55%] max-w-[650px] z-30 drop-shadow-[0_40px_60px_rgba(0,0,0,0.9)] flex flex-col items-center justify-end"
          style={{ transform: 'rotateY(-5deg) rotateX(2deg) translateZ(20px)', transformStyle: 'preserve-3d' }}
        >
          {/* Screen Frame */}
          <div className="w-full aspect-[16/10] bg-[#1a1c23] rounded-t-2xl md:rounded-t-3xl border-[4px] md:border-[8px] border-[#22242a] relative flex flex-col p-1 md:p-1.5 overflow-hidden shadow-[0_0_30px_rgba(0,217,255,0.15)] z-20 origin-bottom" style={{ transform: 'rotateX(5deg)' }}>
            <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full z-40"></div>
            
            {/* Screen Viewport */}
            <div className="flex-1 bg-[#050b14] rounded-t-xl md:rounded-t-2xl relative overflow-hidden flex flex-col">
              
              {/* Navbar inside screen */}
              <div className="w-full h-6 md:h-10 px-4 md:px-6 flex items-center justify-between border-b border-white/10 z-10">
                <div className="flex items-center gap-1">
                   <div className="w-3 h-3 bg-[#00D9FF] rounded-sm"></div>
                   <span className="text-[8px] md:text-[12px] font-bold text-white">DTech</span>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <div className="w-8 h-1 bg-white/30 rounded"></div>
                  <div className="w-8 h-1 bg-white/30 rounded"></div>
                  <div className="w-8 h-1 bg-white/30 rounded"></div>
                </div>
                <div className="w-12 h-3 md:h-5 bg-blue-600 rounded flex items-center justify-center">
                   <div className="w-6 h-1 bg-white/50 rounded"></div>
                </div>
              </div>

              {/* Body inside screen */}
              <div className="flex-1 flex p-4 md:p-6 relative z-10">
                {/* Left side text */}
                <div className="w-1/2 flex flex-col justify-center">
                   <h2 className="text-[12px] md:text-[22px] font-bold text-white leading-[1.2] mb-2 md:mb-4">
                     WUJUDKAN IDE <br/>
                     <span className="text-[#00D9FF]">DIGITAL</span> <br/>
                     LEBIH NYATA
                   </h2>
                   <p className="text-[6px] md:text-[9px] text-gray-400 mb-4 md:mb-6">
                     Solusi profesional untuk bisnis Anda. Transformasi digital menjadi kenyataan.
                   </p>
                   <div className="flex gap-2">
                      <div className="px-3 py-1.5 md:px-4 md:py-2 bg-[#00D9FF] rounded text-[5px] md:text-[8px] font-bold text-[#050b14]">HUBUNGI KAMI</div>
                      <div className="px-3 py-1.5 md:px-4 md:py-2 border border-white/20 rounded text-[5px] md:text-[8px] font-bold text-white">PELAJARI LAYANAN</div>
                   </div>
                </div>
                
                {/* Right side floating UI cards mockups */}
                <div className="w-1/2 relative flex items-center justify-center">
                   <div className="absolute w-[80%] h-[70%] bg-blue-900/30 blur-[40px] rounded-full"></div>
                   
                   {/* Main card */}
                   <div className="w-[60%] aspect-video bg-[#0d1526] border border-white/10 rounded-lg shadow-2xl relative z-20 p-2 flex flex-col transform translate-y-[-10px]">
                      <div className="w-full h-1/2 bg-blue-500/20 rounded mb-2"></div>
                      <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
                      <div className="w-2/3 h-1 bg-white/20 rounded"></div>
                   </div>
                   
                   {/* Smaller card 1 */}
                   <div className="w-[30%] aspect-[3/4] bg-[#0d1526] border border-white/10 rounded shadow-lg absolute -left-4 bottom-4 z-30 p-1 flex flex-col">
                      <div className="w-4 h-4 rounded-full bg-blue-400/30 mb-2"></div>
                      <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
                      <div className="w-full h-1 bg-white/20 rounded"></div>
                   </div>
                   
                   {/* Smaller card 2 */}
                   <div className="w-[25%] aspect-[9/16] bg-[#0d1526] border border-[#00D9FF]/30 rounded shadow-lg absolute -right-2 top-0 z-30 p-1 flex flex-col">
                      <div className="w-full h-[40%] bg-[#00D9FF]/20 rounded-sm mb-1"></div>
                      <div className="w-full h-0.5 bg-[#00D9FF]/50 rounded mb-1"></div>
                      <div className="w-full h-4 bg-blue-600/50 rounded-sm mt-auto"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Laptop Base (Keyboard) - Realistic 3D Projection */}
          <div className="w-[114%] aspect-[16/6] bg-[#3a3e47] rounded-b-2xl relative z-10 origin-top flex flex-col items-center border-t border-gray-600/50 shadow-[0_20px_40px_rgba(0,0,0,1)]" style={{ transform: 'rotateX(70deg) translateY(-1px)' }}>
             {/* Keyboard Indent */}
             <div className="w-[85%] h-[55%] mt-[2%] bg-[#1c1e23] rounded-md shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] border-b border-gray-500/20 p-1 md:p-2 grid grid-cols-12 gap-[1px] md:gap-[2px]">
                {/* Fake keys */}
                {[...Array(60)].map((_, i) => (
                  <div key={i} className="bg-[#2a2c33] rounded-[1px] md:rounded-sm"></div>
                ))}
             </div>
             {/* Trackpad Indent */}
             <div className="w-[25%] h-[25%] mt-[2%] bg-[#2a2d35] rounded-sm shadow-[inset_0_1px_5px_rgba(0,0,0,0.5)]"></div>
             {/* Front Lip */}
             <div className="absolute -bottom-1 w-full h-1 md:h-2 bg-[#111] rounded-b-3xl"></div>
          </div>

          {/* Hexagon Badge Laptop */}
          <div className="absolute top-[20%] -left-8 md:-left-12 z-50 w-12 h-12 md:w-16 md:h-16 animate-float-badge-delayed flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="absolute w-full h-full drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]">
               <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="rgba(0,217,255,0.15)" stroke="#00D9FF" strokeWidth="3" />
             </svg>
             <span className="relative text-[#00D9FF] font-bold text-[5px] md:text-[6px] text-center leading-tight">Web<br/>Company</span>
          </div>
        </div>

        {/* HP KANAN */}
        <div 
          className="absolute right-[0%] md:right-[5%] top-[25%] w-[25%] md:w-[18%] max-w-[160px] z-20 drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] group"
          style={{ transform: 'rotateY(-25deg) rotateX(10deg) rotateZ(5deg) translateZ(60px)', transformStyle: 'preserve-3d' }}
        >
          {/* Phone Frame */}
          <div className="w-full aspect-[9/19] bg-[#111] rounded-[1.5rem] md:rounded-[2rem] border-[3px] md:border-[6px] border-[#222] relative flex flex-col p-1 md:p-1.5 overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
            <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-[40%] h-3 md:h-4 bg-[#111] rounded-b-xl z-50"></div>
            
            {/* Screen Content - Wedding Invitation (Matches image) */}
            <div className="flex-1 bg-[#0f0c05] rounded-[1.2rem] md:rounded-[1.5rem] relative overflow-hidden flex flex-col border border-yellow-900/30">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-800/20 via-[#0f0c05] to-[#0f0c05]"></div>
              
              <div className="flex-1 flex flex-col items-center justify-center p-3 text-center relative z-10">
                <span className="text-yellow-500 text-[6px] md:text-[10px] italic mb-1 font-serif">The Wedding of</span>
                <h2 className="text-[12px] md:text-[20px] font-serif text-yellow-400 mb-2 italic drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">Sarah<br/>&<br/>Daniel</h2>
                <div className="w-8 md:w-12 h-px bg-yellow-500/40 my-1"></div>
                <span className="text-[5px] md:text-[6px] text-yellow-500 mb-2">Undangan Digital</span>
                <span className="text-[4px] md:text-[5px] text-yellow-300 tracking-[0.2em] mb-4">14 . 12 . 2024</span>
                <div className="px-3 py-1.5 text-[4px] md:text-[6px] text-[#0f0c05] bg-yellow-500 rounded-full font-bold uppercase w-3/4">Save The Date</div>
              </div>
            </div>
          </div>
          
          {/* Hexagon Badge Phone */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 z-50 w-12 h-12 md:w-16 md:h-16 animate-float-badge-delayed-2 flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="absolute w-full h-full drop-shadow-[0_0_15px_rgba(0,217,255,0.8)]">
               <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="rgba(0,217,255,0.15)" stroke="#00D9FF" strokeWidth="3" />
             </svg>
             <span className="relative text-[#00D9FF] font-bold text-[5px] md:text-[6px] text-center leading-tight">Undangan<br/>Digital</span>
          </div>
        </div>

      </div>
      
      {/* Floor Floor reflection */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-24 bg-[#00D9FF]/10 blur-[50px] md:blur-[80px] rounded-[100%] z-0 pointer-events-none transform scale-y-50"></div>
    </div>
  );
};
