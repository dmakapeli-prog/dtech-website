"use client";
import Link from "next/link";

const produk = [
  { name: "Sneakers Urban Pro", harga: "Rp 450.000", diskon: "Rp 599.000", kat: "Sepatu", rating: 4.8 },
  { name: "Kemeja Linen Premium", harga: "Rp 285.000", diskon: "Rp 350.000", kat: "Pakaian", rating: 4.9 },
  { name: "Tas Ransel Traveler", harga: "Rp 320.000", diskon: null, kat: "Aksesoris", rating: 4.7 },
  { name: "Smartwatch Fit Band", harga: "Rp 650.000", diskon: "Rp 899.000", kat: "Elektronik", rating: 4.6 },
  { name: "Jaket Denim Classic", harga: "Rp 380.000", diskon: null, kat: "Pakaian", rating: 4.8 },
  { name: "Earbuds Wireless X1", harga: "Rp 275.000", diskon: "Rp 400.000", kat: "Elektronik", rating: 4.5 },
  { name: "Sandal Kulit Asli", harga: "Rp 195.000", diskon: null, kat: "Sepatu", rating: 4.7 },
  { name: "Topi Bucket Hat", harga: "Rp 89.000", diskon: "Rp 120.000", kat: "Aksesoris", rating: 4.4 },
];

const kategori = [
  { icon: "👕", name: "Pakaian", jumlah: "120+ Produk" },
  { icon: "👟", name: "Sepatu", jumlah: "85+ Produk" },
  { icon: "👜", name: "Aksesoris", jumlah: "60+ Produk" },
  { icon: "📱", name: "Elektronik", jumlah: "45+ Produk" },
];

const keunggulan = [
  { icon: "🚚", title: "Gratis Ongkir", desc: "Pengiriman gratis ke seluruh Indonesia tanpa minimum pembelian." },
  { icon: "🔄", title: "Garansi Retur", desc: "Kembalikan produk dalam 30 hari jika tidak sesuai harapan." },
  { icon: "🔒", title: "Pembayaran Aman", desc: "Transaksi terenkripsi dengan berbagai metode pembayaran." },
  { icon: "⭐", title: "Produk Original", desc: "Semua produk 100% original dengan garansi resmi." },
];

export default function EcommerceDemo() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all border border-gray-200">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20E-Commerce." target="_blank" rel="noreferrer" className="bg-[#0066FF] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold text-[#0066FF]">TokoKu</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#produk" className="hover:text-[#0066FF] transition">Produk</a>
            <a href="#kategori" className="hover:text-[#0066FF] transition">Kategori</a>
            <a href="#keunggulan" className="hover:text-[#0066FF] transition">Keunggulan</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-[#0066FF] transition text-sm">🔍</button>
            <button className="text-gray-500 hover:text-[#0066FF] transition text-sm">🛒</button>
            <a href="#produk" className="bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition hidden md:block">Belanja</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0066FF] to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">🛍️ Diskon Hingga 50%</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Pamerkan Produk Anda Dengan Lebih Elegan
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Temukan ribuan produk berkualitas dengan harga terbaik. Belanja mudah, aman, dan cepat sampai ke tangan Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#produk" className="bg-white text-[#0066FF] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
                Lihat Koleksi
              </a>
              <a href="#kategori" className="border-2 border-white/40 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                Jelajahi Kategori
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section id="kategori" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Belanja Berdasarkan Kategori</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kategori.map((k, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#0066FF]/5 hover:border-[#0066FF]/20 border-2 border-transparent transition-all cursor-pointer group">
                <div className="text-4xl mb-3">{k.icon}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#0066FF] transition">{k.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{k.jumlah}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk */}
      <section id="produk" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0066FF] font-bold text-sm uppercase tracking-widest">Produk Unggulan</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Produk Terlaris Minggu Ini</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produk.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative">
                  <span className="text-5xl">🛍️</span>
                  {p.diskon && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">SALE</span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-[10px] text-gray-400 font-medium">{p.kat}</span>
                  <h3 className="font-bold text-gray-900 text-sm mt-1 group-hover:text-[#0066FF] transition">{p.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs text-gray-500">{p.rating}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="font-extrabold text-[#0066FF]">{p.harga}</span>
                    {p.diskon && <span className="text-xs text-gray-400 line-through">{p.diskon}</span>}
                  </div>
                  <button className="mt-3 w-full bg-[#0066FF]/10 text-[#0066FF] font-bold py-2 rounded-lg text-xs hover:bg-[#0066FF] hover:text-white transition-all">
                    + Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="keunggulan" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keunggulan.map((k, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-3">{k.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{k.title}</h3>
                <p className="text-gray-500 text-sm">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0066FF] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Mulai Belanja Sekarang</h2>
          <p className="text-blue-200 mb-8">Dapatkan diskon spesial untuk pembelian pertama Anda!</p>
          <a href="#produk" className="inline-flex items-center gap-3 bg-white text-[#0066FF] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
            Lihat Koleksi
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-white text-lg mb-2">TokoKu</p>
          <p className="text-sm">© 2025 TokoKu. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs mt-3 text-gray-600">Demo template oleh <span className="text-[#0066FF]">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
