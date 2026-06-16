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
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center py-16 md:py-24">
      <style>{`
        @keyframes float-group {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-badge-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -10px); }
        }
        @keyframes float-badge-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes ray-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float-group {
          animation: float-group 8s ease-in-out infinite;
        }
        .animate-float-b1 {
          animation: float-badge-1 5s ease-in-out infinite;
        }
        .animate-float-b2 {
          animation: float-badge-2 7s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .animate-ray-spin {
          animation: ray-spin 20s linear infinite;
        }
        
        .glass-badge {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 229, 255, 0.2);
        }
      `}</style>

      {/* Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cyan-500/30 blur-[100px] md:blur-[150px] rounded-full z-0 pointer-events-none animate-pulse-glow"></div>
      
      {/* Light Rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-30">
         <div className="w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(6,182,212,0.2)_10deg,transparent_20deg,rgba(6,182,212,0.1)_40deg,transparent_50deg,rgba(6,182,212,0.2)_70deg,transparent_80deg,rgba(6,182,212,0.1)_100deg,transparent_120deg,rgba(6,182,212,0.2)_140deg,transparent_160deg,rgba(6,182,212,0.1)_190deg,transparent_220deg,rgba(6,182,212,0.2)_250deg,transparent_280deg,rgba(6,182,212,0.1)_310deg,transparent_340deg,rgba(6,182,212,0.2)_350deg,transparent_360deg)] animate-ray-spin rounded-full"></div>
      </div>

      <div className="relative w-full flex items-center justify-center z-10 animate-float-group" style={{ perspective: "1200px" }}>
        
        {/* Floating Badges */}
        <div className="absolute -top-4 sm:top-4 left-4 sm:left-[10%] z-40 glass-badge px-4 py-2 rounded-2xl flex items-center gap-2 animate-float-b1 hidden sm:flex">
          <span className="material-symbols-outlined text-cyan-400 text-lg">public</span>
          <span className="text-white text-xs sm:text-sm font-bold">Web Company</span>
        </div>
        <div className="absolute top-1/4 sm:top-1/3 -right-2 sm:right-[5%] z-40 glass-badge px-4 py-2 rounded-2xl flex items-center gap-2 animate-float-b2 hidden sm:flex">
          <span className="material-symbols-outlined text-cyan-400 text-lg">favorite</span>
          <span className="text-white text-xs sm:text-sm font-bold">Undangan Digital</span>
        </div>

        {/* LAPTOP MOCKUP */}
        <div 
          className="relative w-[90%] sm:w-[75%] max-w-[700px] z-20 group drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)] transition-transform duration-700"
          style={{ transform: "rotateY(-5deg) rotateX(2deg)" }}
        >
          {/* Laptop Screen Frame */}
          <div className="w-full aspect-[16/10] bg-[#2a2d34] rounded-t-2xl sm:rounded-t-3xl border-[4px] sm:border-[8px] border-[#1e1e24] shadow-2xl overflow-hidden relative flex flex-col p-1 sm:p-1.5">
            {/* Webcam */}
            <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-black rounded-full z-30 shadow-[0_0_2px_rgba(0,0,0,0.5)_inset]"></div>
            
            {/* Screen Inner (The Website) */}
            <div className="flex-1 bg-[#060612] rounded-t-xl sm:rounded-t-2xl flex flex-col overflow-hidden relative border border-white/5">
              {/* Inner Glow */}
              <div className="absolute -top-10 -right-10 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/20 blur-[50px] rounded-full"></div>
              
              {/* Navbar */}
              <div className="w-full h-8 sm:h-12 border-b border-white/10 flex items-center justify-between px-4 sm:px-6 relative z-10 bg-white/[0.02] backdrop-blur-md">
                <span className="text-[10px] sm:text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">DiCode</span>
                <div className="flex gap-3 sm:gap-5 hidden sm:flex">
                  <div className="text-[6px] sm:text-[8px] text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Layanan</div>
                  <div className="text-[6px] sm:text-[8px] text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Portofolio</div>
                  <div className="text-[6px] sm:text-[8px] text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Kontak</div>
                </div>
                <div className="sm:hidden flex gap-2">
                  <div className="w-3 h-0.5 bg-white/20 rounded-full"></div>
                  <div className="w-3 h-0.5 bg-white/20 rounded-full"></div>
                </div>
              </div>
              
              {/* Hero Section of Laptop Screen */}
              <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 text-center relative z-10">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[6px] sm:text-[9px] text-cyan-400 font-semibold mb-4 sm:mb-6 shadow-[0_0_10px_rgba(6,182,212,0.2)_inset]">
                  Transformasi Digital Bisnis Anda
                </div>
                <h2 className="text-[14px] sm:text-[24px] md:text-[28px] font-black text-white leading-[1.1] mb-3 sm:mb-5 tracking-tight">
                  WUJUDKAN IDE DIGITAL <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">LEBIH NYATA</span>
                </h2>
                <p className="text-[7px] sm:text-[11px] md:text-[13px] text-gray-400 max-w-[80%] sm:max-w-[70%] mb-5 sm:mb-8 leading-relaxed">
                  Solusi digital modern, elegan, dan profesional. Dari website company profile hingga undangan digital premium, percayakan pada DiCode.
                </p>
                <div className="px-5 py-2 sm:px-7 sm:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all rounded-full text-[8px] sm:text-[11px] font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer">
                  Mulai Kolaborasi
                </div>
              </div>
            </div>
          </div>
          
          {/* Laptop Base Body */}
          <div className="w-[110%] -ml-[5%] h-4 sm:h-7 bg-gradient-to-b from-[#4a4e59] via-[#2a2d34] to-[#1a1c20] rounded-b-xl sm:rounded-b-2xl relative z-20 shadow-[0_10px_20px_rgba(0,0,0,0.8)] flex justify-center border-t border-gray-500/30">
            {/* Touchpad Indent */}
            <div className="w-1/4 h-1.5 sm:h-2.5 bg-[#1e1e24] rounded-b-md shadow-[0_1px_1px_rgba(255,255,255,0.1)_inset]"></div>
          </div>
          {/* Laptop Bottom Lip / Shadow */}
          <div className="w-[108%] -ml-[4%] h-1 sm:h-2 bg-[#111] rounded-b-full blur-[2px] opacity-70"></div>
          {/* Blue Shadow on floor */}
          <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-6 sm:h-10 bg-cyan-500/30 blur-[20px] rounded-full z-0"></div>
        </div>

        {/* LEFT MOBILE MOCKUP */}
        <div 
          className="absolute left-0 sm:left-[2%] md:-left-[5%] bottom-[5%] sm:bottom-[10%] w-[28%] max-w-[150px] z-30 drop-shadow-[0_15px_30px_rgba(6,182,212,0.4)] hidden sm:block"
          style={{ transform: "rotate(-8deg) rotateY(10deg) translateZ(50px)" }}
        >
          <div className="w-full aspect-[9/19] bg-[#1e1e24] rounded-[1.5rem] sm:rounded-[2rem] border-[3px] sm:border-[4px] border-[#3a3d45] shadow-[0_0_15px_rgba(0,0,0,0.8)_inset] overflow-hidden relative flex flex-col p-1 sm:p-1.5">
            {/* Notch */}
            <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1/3 h-3 sm:h-4 bg-[#1e1e24] rounded-b-lg z-40"></div>
            {/* Screen */}
            <div className="flex-1 bg-[#060612] rounded-[1.2rem] sm:rounded-[1.6rem] flex flex-col pt-6 sm:pt-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
               <div className="px-3 mb-4 text-center">
                 <span className="text-[8px] sm:text-[10px] font-bold text-cyan-400 block mb-1">DiCode</span>
                 <span className="text-[5px] sm:text-[7px] text-white">Layanan Kami</span>
               </div>
               <div className="px-2 space-y-2">
                 <div className="w-full h-10 sm:h-14 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col justify-center">
                    <div className="w-8 h-1 bg-cyan-400/50 rounded mb-1"></div>
                    <div className="w-12 h-1 bg-white/20 rounded"></div>
                 </div>
                 <div className="w-full h-10 sm:h-14 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col justify-center">
                    <div className="w-8 h-1 bg-blue-400/50 rounded mb-1"></div>
                    <div className="w-10 h-1 bg-white/20 rounded"></div>
                 </div>
               </div>
               {/* Badge Bottom */}
               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] bg-blue-600/80 backdrop-blur-md rounded-full py-1.5 sm:py-2 flex justify-center items-center gap-1 border border-blue-400/50 shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                 <span className="material-symbols-outlined text-[8px] sm:text-[10px] text-white">analytics</span>
                 <span className="text-[5px] sm:text-[7px] font-bold text-white">Sistem Bisnis</span>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT MOBILE MOCKUP */}
        <div 
          className="absolute right-0 sm:right-[2%] md:-right-[5%] bottom-[10%] sm:bottom-[15%] w-[28%] max-w-[150px] z-30 drop-shadow-[0_15px_30px_rgba(6,182,212,0.4)] hidden sm:block"
          style={{ transform: "rotate(10deg) rotateY(-15deg) translateZ(60px)" }}
        >
          <div className="w-full aspect-[9/19] bg-[#1e1e24] rounded-[1.5rem] sm:rounded-[2rem] border-[3px] sm:border-[4px] border-[#3a3d45] shadow-[0_0_15px_rgba(0,0,0,0.8)_inset] overflow-hidden relative flex flex-col p-1 sm:p-1.5">
            {/* Notch */}
            <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1/3 h-3 sm:h-4 bg-[#1e1e24] rounded-b-lg z-40"></div>
            {/* Screen */}
            <div className="flex-1 bg-[#060612] rounded-[1.2rem] sm:rounded-[1.6rem] flex flex-col pt-6 sm:pt-8 relative overflow-hidden">
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none"></div>
               <div className="px-3 mb-4 text-center">
                 <span className="text-[8px] sm:text-[10px] font-bold text-cyan-400 block mb-1">DiCode</span>
               </div>
               <div className="px-2 flex-1 flex flex-col">
                 <div className="w-full aspect-[4/3] bg-white/5 border border-white/10 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400/30 flex items-center justify-center">
                       <span className="material-symbols-outlined text-[12px] text-cyan-400">favorite</span>
                    </div>
                 </div>
                 <div className="w-full h-1.5 bg-white/20 rounded-full mb-1"></div>
                 <div className="w-3/4 h-1.5 bg-white/10 rounded-full"></div>
               </div>
               {/* Badge Bottom */}
               <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] bg-cyan-600/80 backdrop-blur-md rounded-full py-1.5 sm:py-2 flex justify-center items-center gap-1 border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                 <span className="material-symbols-outlined text-[8px] sm:text-[10px] text-white">favorite</span>
                 <span className="text-[5px] sm:text-[7px] font-bold text-white">Undangan Digital</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
