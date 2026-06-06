"use client";
import Link from "next/link";

const layanan = [
  { icon: "🌐", title: "Transformasi Digital", desc: "Membantu perusahaan Anda bertransisi ke era digital dengan solusi teknologi terdepan." },
  { icon: "📊", title: "Konsultasi Bisnis", desc: "Strategi bisnis berbasis data untuk meningkatkan efisiensi dan profitabilitas perusahaan." },
  { icon: "🏗️", title: "Manajemen Proyek", desc: "Pengelolaan proyek profesional dari perencanaan hingga implementasi sukses." },
  { icon: "📈", title: "Riset & Analisis Pasar", desc: "Analisis mendalam tentang tren pasar dan peluang bisnis di industri Anda." },
  { icon: "🤝", title: "Kemitraan Strategis", desc: "Membangun jaringan kemitraan yang kuat untuk pertumbuhan bisnis berkelanjutan." },
  { icon: "🔒", title: "Keamanan Siber", desc: "Proteksi data dan sistem digital perusahaan dari ancaman keamanan terkini." },
];

const tim = [
  { name: "Drs. Hendra Wijaya, M.M.", role: "CEO & Founder", desc: "20+ tahun pengalaman di bidang konsultasi bisnis." },
  { name: "Ir. Ratna Permata, S.T.", role: "CTO", desc: "Pakar transformasi digital dan arsitektur sistem." },
  { name: "Ahmad Rizki, S.E., M.B.A.", role: "CFO", desc: "Spesialis perencanaan keuangan dan investasi." },
  { name: "Dr. Maya Sari, M.Sc.", role: "Head of R&D", desc: "Peneliti senior di bidang teknologi informasi." },
];

const klien = ["PT. Maju Bersama", "CV. Karya Mandiri", "PT. Sejahtera Group", "Koperasi Bumi Makmur", "PT. Global Teknik", "CV. Cipta Kreasi"];

export default function CompanyProfileDemo() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-white/20 transition-all border border-white/20">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Company%20Profile." target="_blank" rel="noreferrer" className="bg-[#0066FF] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold text-white">PT. <span className="text-[#0066FF]">GlobalTech</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#tentang" className="hover:text-white transition">Tentang</a>
            <a href="#layanan" className="hover:text-white transition">Layanan</a>
            <a href="#tim" className="hover:text-white transition">Tim</a>
            <a href="#klien" className="hover:text-white transition">Klien</a>
          </div>
          <a href="#kontak" className="bg-[#0066FF] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">Konsultasi Gratis</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#0066FF]/20 text-[#0066FF] text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-[#0066FF]/30">🏢 Didirikan Sejak 2005</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Membangun Bisnis Digital yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-cyan-400">Profesional</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              PT. GlobalTech adalah perusahaan konsultasi dan teknologi yang membantu bisnis Anda berkembang melalui transformasi digital dan strategi inovatif.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#kontak" className="bg-[#0066FF] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-[#0066FF]/25">
                Konsultasi Gratis
              </a>
              <a href="#tentang" className="border-2 border-white/20 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all">
                Pelajari Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-6">Lebih dari 18 Tahun Pengalaman</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                PT. GlobalTech didirikan pada tahun 2005 dengan visi menjadi mitra terpercaya dalam transformasi digital untuk bisnis di Indonesia. Dengan lebih dari 18 tahun pengalaman, kami telah melayani ratusan perusahaan dari berbagai sektor industri.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Tim profesional kami terdiri dari konsultan bisnis berpengalaman, insinyur teknologi, dan analis data yang siap membantu perusahaan Anda mencapai tujuan bisnis dengan solusi berbasis teknologi.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-[#0066FF]">300+</div>
                  <div className="text-sm text-gray-500">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-[#0066FF]">150+</div>
                  <div className="text-sm text-gray-500">Klien Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-[#0066FF]">50+</div>
                  <div className="text-sm text-gray-500">Tim Ahli</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0066FF]/10 to-[#0A0F1E] rounded-3xl p-8 border border-white/10 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏢</div>
                <p className="text-[#0066FF] font-bold text-2xl">PT. GlobalTech</p>
                <p className="text-gray-500">Membangun Masa Depan Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Layanan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Layanan Unggulan Kami</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Solusi komprehensif untuk mendukung pertumbuhan bisnis Anda di era digital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layanan.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0066FF] transition">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim */}
      <section id="tim" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Tim Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Profesional Berpengalaman</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tim.map((t, i) => (
              <div key={i} className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0066FF] to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <h3 className="font-bold text-white text-sm">{t.name}</h3>
                <p className="text-[#0066FF] text-xs font-bold mt-1 mb-3">{t.role}</p>
                <p className="text-gray-500 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klien */}
      <section id="klien" className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Klien Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Dipercaya Oleh Banyak Perusahaan</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {klien.map((k, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <p className="text-white font-bold text-sm">{k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-cyan-500/20"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Siap Bertransformasi?</h2>
          <p className="text-gray-400 text-lg mb-10">Jadwalkan sesi konsultasi gratis bersama tim ahli kami untuk membahas kebutuhan bisnis Anda.</p>
          <a href="https://wa.me/6281996522114?text=Halo,%20saya%20tertarik%20konsultasi%20gratis." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#0066FF] text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl shadow-[#0066FF]/25">
            Konsultasi Gratis
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 text-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-white text-lg mb-2">PT. GlobalTech</p>
          <p className="text-sm">© 2025 PT. GlobalTech. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs mt-3 text-gray-700">Demo template oleh <span className="text-[#0066FF]">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
