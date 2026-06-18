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
              <div className="flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                  Tersedia & Siap Membantu
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Mitra Digital Terpercaya untuk Bisnis Anda
                </div>
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

              {/* Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 pt-4">
                <div className="flex flex-col items-center justify-center px-2 border-r border-white/10">
                  <span className="text-2xl md:text-3xl font-bold text-[#00D9FF]">100%</span>
                  <span className="text-sm text-[#9CA3AF] text-center mt-1">Kepuasan Klien</span>
                </div>
                <div className="flex flex-col items-center justify-center px-2 lg:border-r lg:border-white/10">
                  <span className="text-2xl md:text-3xl font-bold text-[#00D9FF]">30 Hari</span>
                  <span className="text-sm text-[#9CA3AF] text-center mt-1">Garansi Revisi</span>
                </div>
                <div className="flex flex-col items-center justify-center px-2 border-r border-white/10">
                  <span className="text-2xl md:text-3xl font-bold text-[#00D9FF]">24/7</span>
                  <span className="text-sm text-[#9CA3AF] text-center mt-1">Dukungan & Konsultasi</span>
                </div>
                <div className="flex flex-col items-center justify-center px-2">
                  <span className="text-2xl md:text-3xl font-bold text-[#00D9FF]">10+</span>
                  <span className="text-sm text-[#9CA3AF] text-center mt-1">Template Siap Pakai</span>
                </div>
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
                <Image 
                  src="/assets/hero-mockup.png"
                  alt="DiCode Hero Mockup"
                  width={600}
                  height={500}
                  priority
                />

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


