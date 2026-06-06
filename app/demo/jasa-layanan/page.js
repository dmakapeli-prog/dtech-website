"use client";
import Link from "next/link";

const layanan = [
  { icon: "🔧", title: "Perbaikan & Perawatan", desc: "Layanan perbaikan profesional dengan garansi resmi untuk semua jenis kebutuhan teknis Anda." },
  { icon: "🏗️", title: "Konstruksi & Renovasi", desc: "Jasa konstruksi dan renovasi bangunan berkualitas tinggi dengan tenaga ahli bersertifikat." },
  { icon: "🎨", title: "Desain Interior", desc: "Konsultasi dan implementasi desain interior modern yang sesuai dengan gaya dan kebutuhan Anda." },
  { icon: "📋", title: "Konsultasi Bisnis", desc: "Pendampingan strategis untuk mengembangkan bisnis Anda ke level berikutnya." },
  { icon: "🛡️", title: "Keamanan & CCTV", desc: "Instalasi sistem keamanan terpadu untuk rumah dan gedung komersial Anda." },
  { icon: "💡", title: "Instalasi Listrik", desc: "Jasa instalasi dan perbaikan listrik oleh teknisi berpengalaman dan tersertifikasi." },
];

const keunggulan = [
  { num: "500+", label: "Proyek Selesai" },
  { num: "98%", label: "Klien Puas" },
  { num: "10+", label: "Tahun Pengalaman" },
  { num: "24/7", label: "Dukungan Teknis" },
];

const testimoni = [
  { name: "Budi Santoso", role: "Pemilik Bengkel", text: "Pelayanan sangat profesional dan hasilnya memuaskan. Sangat direkomendasikan untuk kebutuhan jasa terpercaya." },
  { name: "Siti Rahayu", role: "Owner Klinik Kecantikan", text: "Tim yang sangat responsif dan hasil pekerjaan rapi. Kami sangat puas dengan layanan yang diberikan." },
  { name: "Ahmad Fauzi", role: "Kontraktor", text: "Kerjasama yang sangat baik, tepat waktu dan sesuai budget. Pasti akan menggunakan jasa ini lagi." },
];

const paketHarga = [
  { name: "Basic", harga: "Rp 500.000", fitur: ["Konsultasi Awal", "1x Kunjungan", "Laporan Hasil", "Garansi 1 Bulan"] },
  { name: "Profesional", harga: "Rp 1.500.000", fitur: ["Konsultasi Mendalam", "3x Kunjungan", "Laporan Lengkap", "Garansi 3 Bulan", "Dukungan Prioritas"], popular: true },
  { name: "Premium", harga: "Rp 3.000.000", fitur: ["Konsultasi Tanpa Batas", "Kunjungan Tak Terbatas", "Laporan Komprehensif", "Garansi 6 Bulan", "Dukungan 24/7", "Diskon Proyek Lanjutan"] },
];

export default function JasaLayananDemo() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all border border-gray-200">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Jasa%20%26%20Layanan." target="_blank" rel="noreferrer" className="bg-[#0066FF] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold text-[#0066FF]">JasaPro</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#layanan" className="hover:text-[#0066FF] transition">Layanan</a>
            <a href="#keunggulan" className="hover:text-[#0066FF] transition">Keunggulan</a>
            <a href="#harga" className="hover:text-[#0066FF] transition">Harga</a>
            <a href="#testimoni" className="hover:text-[#0066FF] transition">Testimoni</a>
          </div>
          <a href="#kontak" className="bg-[#0066FF] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">Hubungi Kami</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0066FF] to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">🏆 Terpercaya Sejak 2015</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Solusi Terbaik & Terpercaya untuk Kebutuhan Anda
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Kami menyediakan layanan profesional berkualitas tinggi dengan harga terjangkau. Dipercaya oleh ratusan klien di seluruh Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#kontak" className="bg-white text-[#0066FF] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
                Hubungi Kami via WhatsApp
              </a>
              <a href="#layanan" className="border-2 border-white/40 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Layanan Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Layanan Profesional Terbaik</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Kami menyediakan berbagai layanan unggulan yang dirancang untuk memenuhi kebutuhan bisnis dan personal Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {layanan.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066FF] transition">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-20 bg-[#0066FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">Kenapa Memilih Kami?</h2>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">Angka berbicara tentang dedikasi dan komitmen kami dalam memberikan layanan terbaik.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keunggulan.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{item.num}</div>
                <div className="text-blue-200 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harga */}
      <section id="harga" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Paket Harga</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Pilih Paket yang Sesuai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paketHarga.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 ${p.popular ? "border-[#0066FF] bg-[#0066FF]/5 shadow-xl shadow-blue-100 relative" : "border-gray-200 bg-white hover:border-[#0066FF]/30"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-xs font-bold px-4 py-1 rounded-full">Terpopuler</span>}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <div className="text-3xl font-extrabold text-[#0066FF] mb-6">{p.harga}</div>
                <ul className="space-y-3 mb-8">
                  {p.fitur.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-[#0066FF]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#kontak" className={`block text-center font-bold py-3 rounded-xl transition-all ${p.popular ? "bg-[#0066FF] text-white hover:bg-blue-700" : "border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white"}`}>
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Testimoni</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Apa Kata Klien Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimoni.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 text-yellow-400 mb-4">{"★★★★★"}</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Kontak */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-[#0066FF] to-blue-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Siap Untuk Memulai?</h2>
          <p className="text-blue-200 text-lg mb-10">Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik.</p>
          <a href="https://wa.me/6281996522114?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-[#0066FF] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-white text-lg mb-2">JasaPro</p>
          <p className="text-sm">© 2025 JasaPro. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs mt-3 text-gray-600">Demo template oleh <span className="text-[#0066FF]">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
