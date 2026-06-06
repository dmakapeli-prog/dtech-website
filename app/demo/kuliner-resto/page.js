"use client";
import Link from "next/link";

const menuItems = [
  { name: "Nasi Goreng Spesial", desc: "Nasi goreng dengan telur, ayam suwir, dan bumbu rempah khas.", harga: "Rp 25.000", kategori: "Makanan Utama" },
  { name: "Mie Ayam Bakso", desc: "Mie ayam lembut dengan bakso sapi homemade dan kuah kaldu gurih.", harga: "Rp 20.000", kategori: "Makanan Utama" },
  { name: "Soto Ayam Kampung", desc: "Soto ayam kampung dengan kuah bening rempah dan pelengkap lengkap.", harga: "Rp 22.000", kategori: "Makanan Utama" },
  { name: "Es Teh Manis", desc: "Teh pilihan diseduh sempurna dengan es batu segar.", harga: "Rp 5.000", kategori: "Minuman" },
  { name: "Jus Alpukat", desc: "Jus alpukat segar dengan susu cokelat dan topping kental manis.", harga: "Rp 15.000", kategori: "Minuman" },
  { name: "Es Jeruk Peras", desc: "Jeruk segar diperas langsung, manis dan menyegarkan.", harga: "Rp 8.000", kategori: "Minuman" },
];

const keunggulan = [
  { icon: "🍳", title: "Bahan Segar", desc: "Semua bahan makanan dipilih langsung setiap pagi dari pasar tradisional." },
  { icon: "👨‍🍳", title: "Chef Berpengalaman", desc: "Dimasak oleh koki berpengalaman lebih dari 15 tahun di bidang kuliner." },
  { icon: "🌿", title: "Tanpa MSG", desc: "Kami berkomitmen menyajikan makanan sehat tanpa bahan pengawet buatan." },
  { icon: "⚡", title: "Penyajian Cepat", desc: "Pesanan Anda siap dalam waktu maksimal 15 menit setelah pemesanan." },
];

export default function KulinerRestoDemo() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-gray-800">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all border border-gray-200">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Kuliner%20%26%20Resto." target="_blank" rel="noreferrer" className="bg-[#D2691E] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-[#B8560E] transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-[#FFF8F0]/95 backdrop-blur-md border-b border-orange-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-extrabold text-[#D2691E]">🍽️ RestoKita</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#menu" className="hover:text-[#D2691E] transition">Menu</a>
            <a href="#tentang" className="hover:text-[#D2691E] transition">Tentang</a>
            <a href="#lokasi" className="hover:text-[#D2691E] transition">Lokasi</a>
          </div>
          <a href="#pesan" className="bg-[#D2691E] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#B8560E] transition">Pesan Sekarang</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D2691E] to-[#8B4513]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-orange-300 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-yellow-300 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">🔥 Rasa Autentik Nusantara</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Cita Rasa Sejati di Pusat Sukabumi
            </h1>
            <p className="text-lg text-orange-100 leading-relaxed mb-8 max-w-xl">
              Nikmati kelezatan masakan tradisional yang dipadukan dengan sentuhan modern. Setiap hidangan diracik dengan cinta dan bahan-bahan pilihan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pesan" className="bg-white text-[#D2691E] font-bold px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-all transform hover:scale-105 shadow-xl">
                Pesan Sekarang
              </a>
              <a href="#menu" className="border-2 border-white/40 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                Lihat Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Pilihan */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D2691E] font-bold text-sm uppercase tracking-widest">Menu Pilihan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Hidangan Andalan Kami</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Diracik dengan bumbu rempah pilihan dan bahan segar setiap hari.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100 hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-[#D2691E] bg-[#D2691E]/10 px-3 py-1 rounded-full">{item.kategori}</span>
                  <span className="text-lg font-extrabold text-[#D2691E]">{item.harga}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D2691E] transition">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D2691E] font-bold text-sm uppercase tracking-widest">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6">Tradisi Rasa Sejak 2010</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                RestoKita hadir di Sukabumi sebagai tempat makan yang menyajikan cita rasa autentik masakan Nusantara. Dengan pengalaman lebih dari satu dekade, kami berkomitmen menghadirkan hidangan berkualitas dengan harga yang terjangkau.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Setiap bumbu diracik dengan resep turun-temurun dan bahan-bahan segar pilihan yang kami dapatkan langsung dari petani lokal setiap pagi.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {keunggulan.map((k, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-2xl">{k.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{k.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{k.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#D2691E]/10 to-orange-50 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🍲</div>
                <p className="text-[#D2691E] font-bold text-2xl">15+ Tahun</p>
                <p className="text-gray-500">Melayani Pelanggan Setia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="py-20 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D2691E] font-bold text-sm uppercase tracking-widest">Kunjungi Kami</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Lokasi & Jam Operasional</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-orange-100">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Alamat</h3>
              <p className="text-gray-500 text-sm">Jl. Ahmad Yani No. 123, Sukabumi, Jawa Barat 43111</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-orange-100">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="font-bold text-gray-900 mb-2">Jam Buka</h3>
              <p className="text-gray-500 text-sm">Senin - Minggu<br />08.00 - 22.00 WIB</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-orange-100">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-500 text-sm">(0266) 123-4567<br />081234567890</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pesan" className="py-20 bg-gradient-to-br from-[#D2691E] to-[#8B4513] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Pesan Makanan Favorit Anda</h2>
          <p className="text-orange-200 text-lg mb-10">Hubungi kami via WhatsApp untuk pemesanan, reservasi meja, atau catering harian.</p>
          <a href="https://wa.me/6281996522114?text=Halo,%20saya%20ingin%20pesan%20makanan." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-[#D2691E] font-bold px-10 py-4 rounded-xl text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-2xl">
            Pesan Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-white text-lg mb-2">🍽️ RestoKita</p>
          <p className="text-sm">© 2025 RestoKita. Seluruh hak cipta dilindungi.</p>
          <p className="text-xs mt-3 text-gray-600">Demo template oleh <span className="text-[#D2691E]">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
