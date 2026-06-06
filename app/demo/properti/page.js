"use client";
import Link from "next/link";

const listing = [
  { name: "Villa Puncak Indah", lokasi: "Puncak, Bogor", harga: "Rp 2.5 M", tipe: "Villa", kamar: 4, luas: "350 m²", status: "Dijual" },
  { name: "Apartemen City View", lokasi: "Sukabumi Kota", harga: "Rp 850 Jt", tipe: "Apartemen", kamar: 2, luas: "75 m²", status: "Dijual" },
  { name: "Rumah Cluster Harmony", lokasi: "Cibadak, Sukabumi", harga: "Rp 450 Jt", tipe: "Rumah", kamar: 3, luas: "120 m²", status: "Dijual" },
  { name: "Hotel Bintang Laut", lokasi: "Pelabuhan Ratu", harga: "Rp 750Rb/malam", tipe: "Hotel", kamar: 25, luas: "2000 m²", status: "Disewakan" },
  { name: "Tanah Kavling Strategis", lokasi: "Cisaat, Sukabumi", harga: "Rp 1.2 M", tipe: "Tanah", kamar: 0, luas: "500 m²", status: "Dijual" },
  { name: "Guest House Panorama", lokasi: "Cianjur", harga: "Rp 500Rb/malam", tipe: "Penginapan", kamar: 8, luas: "400 m²", status: "Disewakan" },
];

const keunggulan = [
  { icon: "🏆", title: "Terpercaya", desc: "Lebih dari 1000 properti berhasil terjual melalui platform kami." },
  { icon: "📍", title: "Lokasi Strategis", desc: "Koleksi properti di lokasi-lokasi terbaik dan paling strategis." },
  { icon: "💰", title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi, semua harga jelas dan transparan." },
  { icon: "🤝", title: "Pendampingan Penuh", desc: "Tim kami mendampingi dari survei lokasi hingga proses serah terima." },
];

export default function PropertiDemo() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-white/20 transition-all border border-white/20">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Properti." target="_blank" rel="noreferrer" className="bg-[#D4AF37] text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-[#C5A028] transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold"><span className="text-[#D4AF37]">Prima</span>Properti</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#listing" className="hover:text-[#D4AF37] transition">Listing</a>
            <a href="#keunggulan" className="hover:text-[#D4AF37] transition">Keunggulan</a>
            <a href="#kontak" className="hover:text-[#D4AF37] transition">Kontak</a>
          </div>
          <a href="#kontak" className="bg-[#D4AF37] text-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#C5A028] transition">Lihat Properti</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/30">🏠 Agen Properti Terpercaya</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Temukan Properti <span className="text-[#D4AF37]">Impian</span> Anda
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
              Koleksi properti eksklusif dengan lokasi strategis dan harga kompetitif. Dipandu oleh tim profesional berpengalaman.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#listing" className="bg-[#D4AF37] text-black font-bold px-8 py-3.5 rounded-xl hover:bg-[#C5A028] transition-all transform hover:scale-105 shadow-xl shadow-[#D4AF37]/20">
                Lihat Properti
              </a>
              <a href="#kontak" className="border-2 border-[#D4AF37]/30 text-[#D4AF37] font-bold px-8 py-3.5 rounded-xl hover:bg-[#D4AF37]/10 transition-all">
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl font-extrabold text-[#D4AF37]">1000+</div><div className="text-sm text-gray-500">Properti Terjual</div></div>
            <div><div className="text-3xl font-extrabold text-[#D4AF37]">500+</div><div className="text-sm text-gray-500">Klien Puas</div></div>
            <div><div className="text-3xl font-extrabold text-[#D4AF37]">15+</div><div className="text-sm text-gray-500">Tahun Pengalaman</div></div>
            <div><div className="text-3xl font-extrabold text-[#D4AF37]">50+</div><div className="text-sm text-gray-500">Lokasi Area</div></div>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section id="listing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest">Listing Properti</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Properti Unggulan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listing.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-[#D4AF37]/10 to-[#0D0D0D] flex items-center justify-center relative">
                  <span className="text-5xl">🏠</span>
                  <span className={`absolute top-3 right-3 text-[10px] font-bold px-3 py-1 rounded-full ${p.status === "Dijual" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"}`}>
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-1">📍 {p.lokasi}</p>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#D4AF37] transition">{p.name}</h3>
                  <div className="flex gap-4 text-xs text-gray-500 mb-4">
                    <span>{p.tipe}</span>
                    {p.kamar > 0 && <span>{p.kamar} Kamar</span>}
                    <span>{p.luas}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold text-[#D4AF37]">{p.harga}</span>
                    <button className="text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white">Kenapa Pilih Kami?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keunggulan.map((k, i) => (
              <div key={i} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-4xl mb-4">{k.icon}</div>
                <h3 className="font-bold text-white mb-2">{k.title}</h3>
                <p className="text-gray-500 text-sm">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Temukan Properti Sempurna Anda</h2>
          <p className="text-gray-400 text-lg mb-10">Hubungi kami untuk konsultasi gratis dan survey lokasi bersama tim ahli kami.</p>
          <a href="https://wa.me/6281996522114?text=Halo,%20saya%20tertarik%20mencari%20properti." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#C5A028] transition-all transform hover:scale-105 shadow-2xl shadow-[#D4AF37]/20">
            Lihat Properti
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 text-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-white text-lg mb-2">PrimaProperti</p>
          <p className="text-sm">© 2025 PrimaProperti. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs mt-3 text-gray-700">Demo template oleh <span className="text-[#D4AF37]">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
