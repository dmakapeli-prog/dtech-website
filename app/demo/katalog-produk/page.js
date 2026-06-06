"use client";
import Link from "next/link";

const produk = [
  { name: "Kemeja Batik Premium", harga: "Rp 185.000", kat: "Pakaian Pria", stok: true },
  { name: "Dress Brokat Elegan", harga: "Rp 275.000", kat: "Pakaian Wanita", stok: true },
  { name: "Sepatu Kulit Asli", harga: "Rp 450.000", kat: "Sepatu", stok: true },
  { name: "Tas Selempang Kanvas", harga: "Rp 120.000", kat: "Aksesoris", stok: true },
  { name: "Kopi Arabika Gayo 250g", harga: "Rp 85.000", kat: "Makanan & Minuman", stok: true },
  { name: "Madu Hutan Murni 500ml", harga: "Rp 135.000", kat: "Makanan & Minuman", stok: true },
  { name: "Jaket Hoodie Unisex", harga: "Rp 195.000", kat: "Pakaian Unisex", stok: false },
  { name: "Gelang Perak Bali", harga: "Rp 250.000", kat: "Aksesoris", stok: true },
  { name: "Sambal Roa Premium", harga: "Rp 45.000", kat: "Makanan & Minuman", stok: true },
];

const kategoriList = [
  { icon: "👔", name: "Pakaian", count: 45 },
  { icon: "👟", name: "Sepatu", count: 28 },
  { icon: "💍", name: "Aksesoris", count: 32 },
  { icon: "☕", name: "Makanan & Minuman", count: 20 },
  { icon: "🎁", name: "Lainnya", count: 15 },
];

export default function KatalogProdukDemo() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all border border-gray-200">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Katalog%20Produk." target="_blank" rel="noreferrer" className="bg-[#0066FF] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold text-[#0066FF]">📦 KatalogKu</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#katalog" className="hover:text-[#0066FF] transition">Katalog</a>
            <a href="#kategori" className="hover:text-[#0066FF] transition">Kategori</a>
            <a href="#kontak" className="hover:text-[#0066FF] transition">Kontak</a>
          </div>
          <a href="#kontak" className="bg-[#0066FF] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">Mulai Sekarang</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0066FF] to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">📦 Katalog Digital</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Pamerkan Produk Anda Dengan Lebih Elegan
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Tampilkan seluruh produk dalam satu halaman katalog yang rapi, profesional, dan mudah dibagikan ke pelanggan Anda.
            </p>
            <a href="#katalog" className="bg-white text-[#0066FF] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
              Mulai Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section id="kategori" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Jelajahi Kategori</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {kategoriList.map((k, i) => (
              <button key={i} className="flex items-center gap-2 bg-gray-50 hover:bg-[#0066FF]/5 border border-gray-200 hover:border-[#0066FF]/20 rounded-full px-6 py-3 transition-all group">
                <span className="text-xl">{k.icon}</span>
                <span className="font-semibold text-gray-700 group-hover:text-[#0066FF] text-sm">{k.name}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{k.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Katalog */}
      <section id="katalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Katalog Produk</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Semua Produk</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produk.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center relative">
                  <span className="text-5xl">📦</span>
                  {!p.stok && <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">Habis</span>}
                </div>
                <div className="p-5">
                  <span className="text-[10px] text-[#0066FF] font-bold bg-[#0066FF]/10 px-3 py-1 rounded-full">{p.kat}</span>
                  <h3 className="font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0066FF] transition">{p.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-extrabold text-[#0066FF]">{p.harga}</span>
                    <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20pesan%20produk%20ini." target="_blank" rel="noreferrer" className={`text-xs font-bold px-4 py-2 rounded-lg transition-all ${p.stok ? "bg-[#0066FF] text-white hover:bg-blue-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                      {p.stok ? "Pesan" : "Habis"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="py-16 bg-[#0066FF] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Tertarik Dengan Produk Kami?</h2>
          <p className="text-blue-200 mb-8">Hubungi kami untuk pemesanan, informasi stok, atau pertanyaan lainnya.</p>
          <a href="https://wa.me/6281996522114?text=Halo,%20saya%20tertarik%20dengan%20produk%20Anda." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-[#0066FF] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
            Mulai Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-white text-lg mb-2">📦 KatalogKu</p>
          <p className="text-sm">© 2025 KatalogKu. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs mt-3 text-gray-600">Demo template oleh <span className="text-[#0066FF]">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
