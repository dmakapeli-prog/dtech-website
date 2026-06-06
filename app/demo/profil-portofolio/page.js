"use client";
import Link from "next/link";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Web Development", level: 90 },
  { name: "React & Next.js", level: 88 },
  { name: "Node.js & API", level: 85 },
  { name: "Branding & Graphic Design", level: 82 },
  { name: "Mobile App (Flutter)", level: 78 },
];

const portofolio = [
  { title: "E-Commerce Fashion App", kat: "Web Development", desc: "Toko online modern dengan fitur keranjang belanja dan pembayaran terintegrasi." },
  { title: "Dashboard Analytics", kat: "UI/UX Design", desc: "Desain dashboard data analitik untuk startup fintech." },
  { title: "Brand Identity – KopiKu", kat: "Branding", desc: "Identitas visual lengkap termasuk logo, kemasan, dan panduan brand." },
  { title: "Website Company Profile", kat: "Web Development", desc: "Website profil perusahaan manufaktur dengan multi-bahasa." },
  { title: "Mobile App Kesehatan", kat: "Mobile App", desc: "Aplikasi tracking kesehatan harian dengan integrasi wearable device." },
  { title: "Landing Page SaaS", kat: "UI/UX Design", desc: "Landing page konversi tinggi untuk produk SaaS B2B." },
];

export default function ProfilPortofolioDemo() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-white/20 transition-all border border-white/20">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Profil%20Portofolio." target="_blank" rel="noreferrer" className="bg-[#0066FF] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold">Andi<span className="text-[#0066FF]">Dev</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#tentang" className="hover:text-white transition">Tentang</a>
            <a href="#skill" className="hover:text-white transition">Skill</a>
            <a href="#portofolio" className="hover:text-white transition">Portofolio</a>
            <a href="#kontak" className="hover:text-white transition">Kontak</a>
          </div>
          <a href="#kontak" className="bg-[#0066FF] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">Hubungi Saya</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/15 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#0066FF]/20 text-[#0066FF] text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-[#0066FF]/30">👋 Halo, Saya Andi</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Membangun Solusi Digital yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-cyan-400">Kreatif & Inovatif</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Seorang Full-Stack Developer & UI/UX Designer dengan pengalaman 5+ tahun menciptakan produk digital berkualitas tinggi.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#kontak" className="bg-[#0066FF] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-[#0066FF]/25">
                  Hubungi Saya
                </a>
                <a href="#portofolio" className="border-2 border-white/20 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-all">
                  Lihat Portofolio
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-72 bg-gradient-to-br from-[#0066FF] to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-[#0066FF]/20">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Tentang Saya</span>
              <h2 className="text-3xl font-extrabold text-white mt-3 mb-6">Passionate Digital Creator</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Saya adalah seorang pengembang web dan desainer UI/UX yang berbasis di Sukabumi, Jawa Barat. Dengan pengalaman lebih dari 5 tahun, saya telah membantu berbagai klien dari startup hingga perusahaan besar dalam mewujudkan visi digital mereka.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Keahlian utama saya meliputi pengembangan website modern menggunakan React & Next.js, desain antarmuka pengguna yang intuitif, serta pembuatan branding visual yang kuat dan berkesan.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-[#0066FF]">50+</div>
                  <div className="text-xs text-gray-500">Proyek</div>
                </div>
                <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-[#0066FF]">30+</div>
                  <div className="text-xs text-gray-500">Klien</div>
                </div>
                <div className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-[#0066FF]">5+</div>
                  <div className="text-xs text-gray-500">Tahun</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="font-bold text-white mb-6">Informasi Pribadi</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Nama</span><span className="text-white font-medium">Andi Pratama</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Usia</span><span className="text-white font-medium">28 Tahun</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Lokasi</span><span className="text-white font-medium">Sukabumi, Jawa Barat</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="text-[#0066FF] font-medium">andi@email.com</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Status</span><span className="text-green-400 font-medium">Tersedia untuk Proyek</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill */}
      <section id="skill" className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Keahlian</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Tech Stack & Skill</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-white">{s.name}</span>
                  <span className="text-sm text-[#0066FF] font-bold">{s.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[#0066FF] to-cyan-400 h-2.5 rounded-full transition-all" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section id="portofolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Portofolio</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Proyek Terbaru</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portofolio.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-44 bg-gradient-to-br from-[#0066FF]/20 to-[#0A0F1E] flex items-center justify-center">
                  <span className="text-5xl">💻</span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-[#0066FF] font-bold bg-[#0066FF]/10 px-3 py-1 rounded-full">{p.kat}</span>
                  <h3 className="font-bold text-white mt-3 mb-2 group-hover:text-[#0066FF] transition">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-cyan-500/10"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ada Proyek yang Ingin Diwujudkan?</h2>
          <p className="text-gray-400 text-lg mb-10">Mari diskusikan ide Anda dan wujudkan bersama menjadi produk digital yang luar biasa.</p>
          <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20diskusi%20proyek%20bersama." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#0066FF] text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl shadow-[#0066FF]/25">
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 text-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-white text-lg mb-2">AndiDev</p>
          <p className="text-sm">© 2025 Andi Pratama. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs mt-3 text-gray-700">Demo template oleh <span className="text-[#0066FF]">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
