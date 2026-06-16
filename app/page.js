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
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center py-20 md:py-32" style={{ perspective: '1200px' }}>
      <style>{`
        @keyframes float-mockup {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes ray-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-float-mockup {
          animation: float-mockup 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        .animate-float-badge {
          animation: float-badge 5s ease-in-out infinite;
        }
        .animate-float-badge-delayed {
          animation: float-badge 7s ease-in-out infinite 1s;
        }
        .animate-float-badge-delayed-2 {
          animation: float-badge 6s ease-in-out infinite 2s;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .animate-ray-spin {
          animation: ray-spin 20s linear infinite;
        }
      `}</style>

      {/* Spotlight and Rays behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[60%] h-[60%] bg-[#00D9FF] blur-[100px] md:blur-[120px] rounded-full opacity-60 animate-pulse-glow"></div>
        <div className="absolute w-[80%] h-[80%] bg-[#00D9FF] blur-[150px] rounded-full opacity-30"></div>
        <div className="absolute w-[150%] h-[150%] opacity-20 animate-ray-spin rounded-full" style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(0,217,255,0.8) 15deg, transparent 30deg, transparent 60deg, rgba(0,217,255,0.8) 75deg, transparent 90deg, transparent 120deg, rgba(0,217,255,0.8) 135deg, transparent 150deg, transparent 180deg, rgba(0,217,255,0.8) 195deg, transparent 210deg, transparent 240deg, rgba(0,217,255,0.8) 255deg, transparent 270deg, transparent 300deg, rgba(0,217,255,0.8) 315deg, transparent 330deg, transparent 360deg)'
        }}></div>
      </div>

      {/* Main Group with 3D Perspective */}
      <div className="relative w-full flex items-center justify-center z-10 animate-float-mockup">

        {/* FLOATING BADGES (Independent of devices) */}
        {/* Top Left: Web Company */}
        <div className="absolute -top-10 left-[5%] md:left-[10%] z-50 animate-float-badge">
          <div className="bg-white/10 backdrop-blur-md border border-[#00D9FF]/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.3)]">
            <span className="material-symbols-outlined text-[#00D9FF] text-sm md:text-base">public</span>
            <span className="text-white font-bold text-xs md:text-sm">Web Company</span>
          </div>
        </div>

        {/* Top Right: Undangan Digital */}
        <div className="absolute top-[10%] right-[0%] md:-right-[5%] z-50 animate-float-badge-delayed">
          <div className="bg-white/10 backdrop-blur-md border border-[#00D9FF]/30 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.2)]">
            <span className="material-symbols-outlined text-[#00D9FF] text-sm md:text-base">favorite</span>
            <span className="text-white font-bold text-xs md:text-sm">Undangan Digital</span>
          </div>
        </div>

        {/* Bottom Center: Sistem Bisnis */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-50 animate-float-badge-delayed-2">
          <div className="bg-white/10 backdrop-blur-md border border-[#00D9FF]/40 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,217,255,0.2)]">
            <span className="material-symbols-outlined text-[#00D9FF] text-sm md:text-base">analytics</span>
            <span className="text-white font-bold text-xs md:text-sm">Sistem Bisnis</span>
          </div>
        </div>

        {/* LAPTOP (CENTER) */}
        <div 
          className="relative w-[90%] md:w-[70%] max-w-[800px] z-30 drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
          style={{ transform: 'rotateY(-5deg) rotateX(5deg) translateZ(0px)' }}
        >
          {/* Laptop Screen Frame */}
          <div className="w-full aspect-[16/10] bg-[#1a1c23] rounded-t-2xl md:rounded-t-3xl border-[4px] md:border-[8px] border-[#2d313a] relative flex flex-col p-1 md:p-1.5 overflow-hidden shadow-[0_0_30px_rgba(0,217,255,0.2)]">
            {/* Webcam */}
            <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full z-40"></div>
            
            {/* Screen Content */}
            <div className="flex-1 bg-[#0a0f1d] rounded-t-xl md:rounded-t-2xl relative overflow-hidden flex flex-col border border-white/5">
              {/* Screen Glow Effect */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00D9FF]/20 blur-[80px] rounded-full"></div>
              
              {/* Navbar */}
              <div className="w-full h-8 md:h-14 border-b border-white/10 flex items-center px-4 md:px-6 relative z-10 bg-white/5 backdrop-blur-sm justify-between">
                <span className="text-xs md:text-base font-extrabold text-white tracking-wider">DiCode</span>
                <div className="hidden md:flex gap-6">
                  <div className="w-10 h-1.5 bg-white/20 rounded-full"></div>
                  <div className="w-10 h-1.5 bg-white/20 rounded-full"></div>
                  <div className="w-10 h-1.5 bg-[#00D9FF]/50 rounded-full"></div>
                </div>
              </div>

              {/* Hero Content on Screen */}
              <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 text-center relative z-10">
                <h2 className="text-[14px] md:text-[32px] lg:text-[36px] font-black text-white leading-tight mb-2 md:mb-4">
                  WUJUDKAN IDE DIGITAL <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-blue-500">LEBIH NYATA</span>
                </h2>
                <p className="text-[7px] md:text-[12px] lg:text-[14px] text-gray-400 max-w-[80%] md:max-w-[70%] mb-4 md:mb-8 leading-relaxed">
                  Kami membantu UMKM, Instansi, dan Perusahaan bertransformasi secara digital melalui pembuatan website responsif dan sistem kustom.
                </p>
                <div className="px-4 py-1.5 md:px-8 md:py-3 bg-gradient-to-r from-[#00D9FF] to-blue-600 rounded-full text-white text-[8px] md:text-[14px] font-bold shadow-[0_0_20px_rgba(0,217,255,0.4)]">
                  Eksplorasi Layanan
                </div>

                {/* Decorative UI elements on screen */}
                <div className="absolute bottom-4 left-4 w-20 md:w-24 h-12 md:h-16 bg-white/5 border border-white/10 rounded-lg p-2 hidden sm:flex flex-col gap-2">
                  <div className="w-full h-1.5 md:h-2 bg-white/10 rounded-sm"></div>
                  <div className="w-3/4 h-1.5 md:h-2 bg-white/10 rounded-sm"></div>
                  <div className="w-1/2 h-1.5 md:h-2 bg-[#00D9FF]/30 rounded-sm mt-auto"></div>
                </div>
                <div className="absolute top-16 right-4 w-24 md:w-32 h-16 md:h-24 bg-white/5 border border-white/10 rounded-lg p-2 md:p-3 hidden sm:flex flex-col gap-1 md:gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mb-1 md:mb-2">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00D9FF]"></div>
                  </div>
                  <div className="w-full h-1.5 md:h-2 bg-white/10 rounded-sm"></div>
                  <div className="w-4/5 h-1.5 md:h-2 bg-white/10 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Laptop Base Body */}
          <div className="w-[114%] -ml-[7%] h-4 md:h-10 bg-gradient-to-b from-[#5a5f6a] via-[#2d313a] to-[#15171b] rounded-b-lg md:rounded-b-2xl relative z-20 shadow-[0_20px_30px_rgba(0,0,0,0.8)] border-t border-gray-400/30 flex justify-center perspective-[500px]">
             {/* Keyboard indent illusion */}
             <div className="absolute top-0 w-[70%] h-2 md:h-4 bg-[#1a1c23] rounded-b-md shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)]"></div>
             {/* Touchpad Indent */}
             <div className="absolute bottom-0.5 md:bottom-2 w-1/4 h-1 md:h-2.5 bg-[#202329] rounded-sm shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]"></div>
          </div>
        </div>

        {/* HP KIRI (UNDANGAN DIGITAL) */}
        <div 
          className="absolute left-[0%] md:left-[5%] bottom-[5%] md:bottom-[-5%] w-[32%] md:w-[25%] max-w-[180px] z-40 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group"
          style={{ transform: 'rotate(-12deg) rotateY(15deg) translateZ(50px)' }}
        >
          {/* Phone Frame */}
          <div className="w-full aspect-[9/19] bg-[#111] rounded-[1.5rem] md:rounded-[2rem] border-[3px] md:border-[6px] border-[#222] relative flex flex-col p-1 md:p-1.5 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            {/* Notch */}
            <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-[40%] h-3 md:h-4 bg-[#111] rounded-b-xl z-50"></div>
            
            {/* Screen Content - Undangan Pernikahan */}
            <div className="flex-1 bg-[#0f0c05] rounded-[1.2rem] md:rounded-[1.5rem] relative overflow-hidden flex flex-col border border-white/5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600/20 via-[#0f0c05] to-[#0f0c05]"></div>
              
              <div className="flex-1 flex flex-col items-center justify-center p-2 md:p-4 text-center relative z-10">
                <div className="w-10 h-10 md:w-16 md:h-16 border border-yellow-500/30 rounded-full flex items-center justify-center mb-2 md:mb-4 relative">
                   <div className="absolute w-8 h-8 md:w-12 md:h-12 border border-yellow-500/50 rounded-full rotate-45"></div>
                   <span className="material-symbols-outlined text-yellow-500 text-lg md:text-2xl">local_florist</span>
                </div>
                
                <h3 className="text-[7px] md:text-[12px] lg:text-[14px] font-serif text-yellow-500 mb-1">The Wedding of</h3>
                <h2 className="text-[11px] md:text-[18px] lg:text-[22px] font-serif text-white mb-2 md:mb-4 leading-tight">Sarah & Daniel</h2>
                
                <div className="w-8 md:w-12 h-px bg-yellow-500/50 mb-2 md:mb-4"></div>
                
                <p className="text-[5px] md:text-[8px] lg:text-[10px] text-gray-300 font-sans tracking-widest">14 DESEMBER 2024</p>
                
                <div className="mt-3 md:mt-6 px-3 py-1 md:px-4 md:py-1.5 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-500 text-[6px] md:text-[10px]">
                  Buka Undangan
                </div>
              </div>
            </div>
          </div>
          
          {/* Badge under HP KIRI */}
          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-full md:w-[110%] flex justify-center z-50">
            <div className="bg-white/10 backdrop-blur-md border border-[#00D9FF]/50 px-2 md:px-3 py-1 md:py-1.5 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.3)] whitespace-nowrap">
               <span className="text-white font-bold text-[7px] md:text-[10px] lg:text-xs">Undangan Digital</span>
            </div>
          </div>
        </div>


        {/* HP KANAN (WEBSITE BISNIS) */}
        <div 
          className="absolute right-[0%] md:right-[5%] bottom-[10%] md:bottom-[0%] w-[32%] md:w-[25%] max-w-[180px] z-40 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group"
          style={{ transform: 'rotate(12deg) rotateY(-15deg) translateZ(60px)' }}
        >
          {/* Phone Frame */}
          <div className="w-full aspect-[9/19] bg-[#111] rounded-[1.5rem] md:rounded-[2rem] border-[3px] md:border-[6px] border-[#222] relative flex flex-col p-1 md:p-1.5 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            {/* Notch */}
            <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-[40%] h-3 md:h-4 bg-[#111] rounded-b-xl z-50"></div>
            
            {/* Screen Content - Website Bisnis */}
            <div className="flex-1 bg-[#0a0f1d] rounded-[1.2rem] md:rounded-[1.5rem] relative overflow-hidden flex flex-col border border-white/5">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-500/20 blur-2xl rounded-full"></div>
              
              {/* Header */}
              <div className="pt-4 pb-1 md:pt-6 md:pb-2 px-3 md:px-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                <span className="text-[7px] md:text-[10px] font-bold text-[#00D9FF]">DiCode</span>
                <span className="material-symbols-outlined text-[10px] md:text-[14px] text-white">menu</span>
              </div>
              
              {/* Body */}
              <div className="flex-1 p-2 md:p-3 space-y-2 md:space-y-3">
                {/* Hero */}
                <div className="w-full h-16 md:h-24 bg-gradient-to-br from-[#00D9FF]/20 to-blue-600/20 rounded-lg md:rounded-xl border border-white/10 flex flex-col justify-center items-center p-2 text-center">
                   <div className="w-3/4 h-1.5 md:h-2 bg-white/80 rounded-full mb-1"></div>
                   <div className="w-1/2 h-1.5 md:h-2 bg-white/60 rounded-full mb-2 md:mb-3"></div>
                   <div className="w-1/3 h-2 md:h-4 bg-[#00D9FF] rounded-full"></div>
                </div>
                {/* Cards */}
                <div className="flex gap-1.5 md:gap-2">
                  <div className="flex-1 h-12 md:h-16 bg-white/5 rounded-md md:rounded-lg border border-white/10 p-1.5 md:p-2">
                     <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-500/20 mb-1.5 md:mb-2"></div>
                     <div className="w-full h-1 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex-1 h-12 md:h-16 bg-white/5 rounded-md md:rounded-lg border border-white/10 p-1.5 md:p-2">
                     <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-purple-500/20 mb-1.5 md:mb-2"></div>
                     <div className="w-full h-1 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Badge under HP KANAN */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-[120%] flex justify-center z-50">
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 backdrop-blur-md border border-amber-500/50 px-2 md:px-3 py-1 md:py-1.5 rounded-full flex flex-col items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)] whitespace-nowrap">
               <span className="text-amber-300 font-semibold text-[5px] md:text-[7px]">Undangan Digital</span>
               <span className="text-white font-bold text-[6px] md:text-[9px] lg:text-[11px]">Sarah & Daniel</span>
               <span className="text-amber-200 text-[4px] md:text-[6px] lg:text-[8px]">14 Desember 2024</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Floor glow / reflection for entire composition */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-8 md:h-12 bg-[#00D9FF]/10 blur-[30px] md:blur-[40px] rounded-[100%] z-0 pointer-events-none"></div>
    </div>
  );
};
