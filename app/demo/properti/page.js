import React from 'react';

export const metadata = {
  title: 'LuxuryStay - Properti & Wisata Premium',
  description: 'Temukan properti eksklusif dan destinasi wisata terbaik di Jawa Barat.',
};

export default function PropertiDemo() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans overflow-x-hidden selection:bg-[#D97706] selection:text-white">
      {/* 1. TOP BAR */}
      <div className="bg-[#D97706] text-white px-4 py-2 flex justify-between items-center text-sm font-medium">
        <a href="/template" className="hover:underline flex items-center gap-1">
          &larr; Kembali ke Template
        </a>
        <a 
          href="https://wa.me/6281996522114?text=Halo MakDev, saya tertarik template Properti & Pariwisata"
          target="_blank"
          rel="noopener noreferrer" 
          className="hover:underline flex items-center gap-1"
        >
          Pesan Template Ini &rarr;
        </a>
      </div>

      {/* 2. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-lg border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#D97706] to-amber-500 p-2 rounded-xl">
              <span className="text-white text-xl leading-none block">🏠</span>
            </div>
            <div>
              <h1 className="text-[#D97706] font-bold text-xl leading-none">LuxuryStay</h1>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Properti & Wisata Premium</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {['Beranda', 'Properti', 'Vila & Hotel', 'Wisata', 'Tentang', 'Kontak'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-[#D97706] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a 
            href="https://wa.me/6281996522114"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D97706] text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/20 flex items-center gap-2"
          >
            <span>📞</span> Hubungi Kami
          </a>
        </div>
      </nav>

      {/* 3. HERO */}
      <div className="relative min-h-[90vh] flex items-center pt-10 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80" 
            alt="Hero Villa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D97706]/50 text-[#D97706] text-sm font-bold mb-8 backdrop-blur-md bg-[#0F172A]/50">
              ✨ Properti & Wisata Premium
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Temukan Properti <br />
              Impian Anda di <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-amber-300">Jawa Barat</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Kami menghadirkan koleksi properti eksklusif dan destinasi wisata terbaik di Jawa Barat. Dari vila mewah hingga resort tepi pantai.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <button className="bg-[#D97706] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:-translate-y-1">
                Jelajahi Properti
              </button>
              <button className="border border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0F172A] transition-all">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>

        {/* Floating Search Box */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-20">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-gray-500 text-sm font-bold mb-2">Tipe Properti</label>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 text-[#0F172A] font-semibold px-4 py-3.5 rounded-xl outline-none focus:border-[#D97706] appearance-none">
                  <option>Semua Tipe</option>
                  <option>Vila</option>
                  <option>Hotel</option>
                  <option>Rumah</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-gray-500 text-sm font-bold mb-2">Lokasi</label>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 text-[#0F172A] font-semibold px-4 py-3.5 rounded-xl outline-none focus:border-[#D97706] appearance-none">
                  <option>Semua Lokasi</option>
                  <option>Puncak, Bogor</option>
                  <option>Sukabumi</option>
                  <option>Cianjur</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-gray-500 text-sm font-bold mb-2">Harga</label>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 text-[#0F172A] font-semibold px-4 py-3.5 rounded-xl outline-none focus:border-[#D97706] appearance-none">
                  <option>Semua Harga</option>
                  <option>&lt; Rp 1 Miliar</option>
                  <option>Rp 1 - 3 Miliar</option>
                  <option>&gt; Rp 3 Miliar</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
              </div>
            </div>
            <button className="w-full md:w-auto bg-[#0F172A] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors h-[54px] shadow-lg">
              Cari Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* 4. STATS BAR */}
      <div className="bg-[#0F172A] pt-32 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <span className="text-4xl mb-4 bg-white/5 p-4 rounded-full">🏠</span>
            <h3 className="text-4xl font-extrabold text-white mb-2">500<span className="text-[#D97706]">+</span></h3>
            <p className="text-gray-400 font-medium">Properti Listed</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <span className="text-4xl mb-4 bg-white/5 p-4 rounded-full">✅</span>
            <h3 className="text-4xl font-extrabold text-white mb-2">1.000<span className="text-[#D97706]">+</span></h3>
            <p className="text-gray-400 font-medium">Transaksi Sukses</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <span className="text-4xl mb-4 bg-white/5 p-4 rounded-full">⭐</span>
            <h3 className="text-4xl font-extrabold text-white mb-2">4.9</h3>
            <p className="text-gray-400 font-medium">Rating Kepuasan</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <span className="text-4xl mb-4 bg-white/5 p-4 rounded-full">🤝</span>
            <h3 className="text-4xl font-extrabold text-white mb-2">10<span className="text-[#D97706]">+</span></h3>
            <p className="text-gray-400 font-medium">Tahun Pengalaman</p>
          </div>
        </div>
      </div>

      {/* 5. PROPERTI UNGGULAN */}
      <div className="bg-white text-[#0F172A] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">🏆 Properti Unggulan</h2>
            <p className="text-gray-500 text-lg font-medium">Pilihan terbaik untuk investasi & hunian</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-2 group border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" alt="Villa 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute top-5 left-5 bg-[#D97706] text-white text-xs font-black tracking-wider px-4 py-2 rounded-full shadow-lg">EKSKLUSIF</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D97706] transition-colors">Villa Mewah Puncak View</h3>
                <p className="text-gray-500 font-medium mb-6 flex items-center gap-2"><span>📍</span> Puncak, Bogor</p>
                <div className="flex justify-between items-center text-sm font-semibold text-gray-600 mb-8 pb-8 border-b border-gray-100">
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">🛏 4 KT</span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">🚿 3 KM</span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">📐 350m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#D97706] font-black text-2xl">Rp 2,5 Miliar</span>
                  <button className="bg-[#0F172A] text-white font-bold hover:bg-[#D97706] px-5 py-2.5 rounded-xl transition-colors">Detail</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-2 group border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80" alt="Villa 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute top-5 left-5 bg-[#059669] text-white text-xs font-black tracking-wider px-4 py-2 rounded-full shadow-lg">BEST SELLER</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D97706] transition-colors">Vila Private Pool</h3>
                <p className="text-gray-500 font-medium mb-6 flex items-center gap-2"><span>📍</span> Sukabumi, Jawa Barat</p>
                <div className="flex justify-between items-center text-sm font-semibold text-gray-600 mb-8 pb-8 border-b border-gray-100">
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">🛏 3 KT</span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">🚿 2 KM</span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">📐 280m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#D97706] font-black text-2xl">Rp 1,8 Miliar</span>
                  <button className="bg-[#0F172A] text-white font-bold hover:bg-[#D97706] px-5 py-2.5 rounded-xl transition-colors">Detail</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:-translate-y-2 group border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" alt="Villa 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute top-5 left-5 bg-blue-600 text-white text-xs font-black tracking-wider px-4 py-2 rounded-full shadow-lg">NEW</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D97706] transition-colors">Resort Tepi Danau</h3>
                <p className="text-gray-500 font-medium mb-6 flex items-center gap-2"><span>📍</span> Cianjur, Jawa Barat</p>
                <div className="flex justify-between items-center text-sm font-semibold text-gray-600 mb-8 pb-8 border-b border-gray-100">
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">🛏 5 KT</span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">🚿 4 KM</span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">📐 450m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#D97706] font-black text-2xl">Rp 3,2 Miliar</span>
                  <button className="bg-[#0F172A] text-white font-bold hover:bg-[#D97706] px-5 py-2.5 rounded-xl transition-colors">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. VILA & HOTEL SEWA */}
      <div className="bg-gray-50 py-24 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">🏨 Vila & Hotel untuk Disewa</h2>
            <p className="text-gray-500 text-lg font-medium">Liburan mewah dengan harga terjangkau</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Vila */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col md:flex-row group border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow">
              <div className="md:w-[45%] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" alt="Hotel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[300px]"/>
              </div>
              <div className="p-8 md:w-[55%] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Vila Grand Puncak</h3>
                  <p className="text-[#D97706] text-sm mb-6 font-bold bg-orange-50 inline-block px-3 py-1.5 rounded-lg">⭐⭐⭐⭐⭐ 4.9 (128 ulasan)</p>
                  <ul className="text-gray-600 space-y-3 mb-8 font-medium">
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> Private Pool</li>
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> BBQ Area</li>
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> Pemandangan Gunung</li>
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> WiFi & Netflix</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-[#0F172A] font-black text-xl">Rp 2.500.000</span>
                    <span className="text-sm font-semibold text-gray-400">/malam</span>
                  </div>
                  <button className="w-full sm:w-auto bg-[#D97706] text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/20">Pesan Sekarang</button>
                </div>
              </div>
            </div>

            {/* Hotel */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col md:flex-row group border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow">
              <div className="md:w-[45%] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" alt="Interior" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[300px]"/>
              </div>
              <div className="p-8 md:w-[55%] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Hotel Bintang 5 Sukabumi</h3>
                  <p className="text-[#D97706] text-sm mb-6 font-bold bg-orange-50 inline-block px-3 py-1.5 rounded-lg">⭐⭐⭐⭐⭐ 4.8 (256 ulasan)</p>
                  <ul className="text-gray-600 space-y-3 mb-8 font-medium">
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> Kolam Renang Infinity</li>
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> Spa & Wellness</li>
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> Restaurant Fine Dining</li>
                    <li className="flex items-center gap-3"><span className="text-[#D97706]">✓</span> Shuttle Airport</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-[#0F172A] font-black text-xl">Rp 1.800.000</span>
                    <span className="text-sm font-semibold text-gray-400">/malam</span>
                  </div>
                  <button className="w-full sm:w-auto bg-[#D97706] text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/20">Pesan Sekarang</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. DESTINASI WISATA */}
      <div className="bg-[#0F172A] py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-slate-900/50 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">🌴 Destinasi Wisata Terbaik</h2>
            <p className="text-gray-400 text-lg font-medium">Jelajahi keindahan Jawa Barat bersama kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative rounded-[2.5rem] overflow-hidden h-[450px] group cursor-pointer shadow-2xl">
              <img src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80" alt="Pantai Pelabuhan Ratu" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
              <div className="absolute top-8 left-8 bg-[#D97706] text-white text-xs font-black tracking-wider px-5 py-2.5 rounded-full shadow-lg">POPULER</div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-gray-300 font-medium mb-2 flex items-center gap-2"><span>📍</span> Sukabumi</p>
                <h3 className="text-4xl font-bold mb-4">Pantai Pelabuhan Ratu</h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/20">
                  <p className="text-white font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">Paket mulai Rp 350.000/orang</p>
                  <button className="bg-white text-[#0F172A] px-6 py-3 rounded-xl font-bold hover:bg-[#D97706] hover:text-white transition-colors">Lihat Paket</button>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden h-[450px] group cursor-pointer shadow-2xl">
              <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80" alt="Gunung Gede" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
              <div className="absolute top-8 left-8 bg-[#059669] text-white text-xs font-black tracking-wider px-5 py-2.5 rounded-full shadow-lg">TRENDING</div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-gray-300 font-medium mb-2 flex items-center gap-2"><span>📍</span> Cianjur - Bogor</p>
                <h3 className="text-4xl font-bold mb-4">Taman Nasional Gunung Gede</h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/20">
                  <p className="text-white font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">Paket mulai Rp 250.000/orang</p>
                  <button className="bg-white text-[#0F172A] px-6 py-3 rounded-xl font-bold hover:bg-[#059669] hover:text-white transition-colors">Lihat Paket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. KEUNGGULAN */}
      <div className="bg-gradient-to-br from-[#D97706] via-amber-600 to-[#b46205] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:30px_30px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Mengapa Memilih LuxuryStay?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0F172A] p-10 rounded-[2rem] hover:-translate-y-3 transition-all duration-300 shadow-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner">🏆</div>
              <h3 className="text-xl font-bold text-white mb-4">Properti Terverifikasi</h3>
              <p className="text-gray-400 font-medium leading-relaxed">Semua properti telah melalui proses verifikasi ketat kami.</p>
            </div>
            <div className="bg-[#0F172A] p-10 rounded-[2rem] hover:-translate-y-3 transition-all duration-300 shadow-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner">💰</div>
              <h3 className="text-xl font-bold text-white mb-4">Harga Transparan</h3>
              <p className="text-gray-400 font-medium leading-relaxed">Tidak ada biaya tersembunyi. Harga yang tertera adalah final.</p>
            </div>
            <div className="bg-[#0F172A] p-10 rounded-[2rem] hover:-translate-y-3 transition-all duration-300 shadow-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner">🤝</div>
              <h3 className="text-xl font-bold text-white mb-4">Agen Terpercaya</h3>
              <p className="text-gray-400 font-medium leading-relaxed">Tim agen profesional berpengalaman siap membantu 24/7.</p>
            </div>
            <div className="bg-[#0F172A] p-10 rounded-[2rem] hover:-translate-y-3 transition-all duration-300 shadow-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner">📋</div>
              <h3 className="text-xl font-bold text-white mb-4">Proses Mudah</h3>
              <p className="text-gray-400 font-medium leading-relaxed">Dari pencarian hingga serah terima kunci, kami dampingi sepenuhnya.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 9. TESTIMONI */}
      <div className="bg-white text-[#0F172A] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">⭐ Kata Klien Kami</h2>
            <p className="text-gray-500 text-lg font-medium">Pengalaman mereka bersama LuxuryStay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow">
              <div className="absolute top-8 right-8 text-5xl text-gray-100 font-serif">&quot;</div>
              <div className="text-[#D97706] mb-6 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-10 font-medium leading-relaxed relative z-10">&quot;Proses pembelian sangat mudah dan transparan. Vila yang saya dapat melebihi ekspektasi. Tim LuxuryStay sangat profesional!&quot;</p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100" alt="Bapak Hendra" className="w-14 h-14 rounded-full object-cover shadow-md"/>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">Bapak Hendra</h4>
                  <p className="text-sm font-semibold text-[#D97706]">Pembeli Villa</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow">
              <div className="absolute top-8 right-8 text-5xl text-gray-100 font-serif">&quot;</div>
              <div className="text-[#D97706] mb-6 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-10 font-medium leading-relaxed relative z-10">&quot;Liburan keluarga kami jadi sangat berkesan. Vianya bersih, fasilitas lengkap, dan pemandangannya luar biasa indah!&quot;</p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100" alt="Ibu Dewi" className="w-14 h-14 rounded-full object-cover shadow-md"/>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">Ibu Dewi</h4>
                  <p className="text-sm font-semibold text-[#D97706]">Penyewa Vila</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow">
              <div className="absolute top-8 right-8 text-5xl text-gray-100 font-serif">&quot;</div>
              <div className="text-[#D97706] mb-6 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-10 font-medium leading-relaxed relative z-10">&quot;Sudah 3 kali bertransaksi dengan LuxuryStay. Selalu puas dengan pelayanan dan kualitas propertinya. Highly recommended!&quot;</p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="Bapak Rizky" className="w-14 h-14 rounded-full object-cover shadow-md"/>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">Bapak Rizky</h4>
                  <p className="text-sm font-semibold text-[#D97706]">Investor Properti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 10. CTA SECTION */}
      <div className="relative py-40 px-6 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80" alt="Luxury Background" className="w-full h-full object-cover scale-105"/>
          <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto bg-white/5 border border-white/10 p-12 md:p-16 rounded-[3rem] backdrop-blur-md shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Wujudkan Impian <br/>Properti Anda</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">Konsultasikan kebutuhan properti Anda bersama tim ahli kami secara gratis!</p>
          <a href="https://wa.me/6281996522114" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#D97706] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-600 transition-all hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] hover:-translate-y-1">
            Konsultasi Gratis Sekarang <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* 11. FOOTER */}
      <footer className="bg-[#0F172A] pt-24 pb-10 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#D97706] to-amber-500 p-2.5 rounded-xl">
                <span className="text-white text-xl leading-none block">🏠</span>
              </div>
              <span className="text-white font-bold text-2xl">LuxuryStay</span>
            </div>
            <p className="text-gray-400 mb-8 font-medium leading-relaxed">Mitra terpercaya Anda untuk menemukan properti premium dan destinasi wisata eksklusif di Jawa Barat.</p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D97706] cursor-pointer transition-all hover:-translate-y-1 text-white font-bold">f</div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D97706] cursor-pointer transition-all hover:-translate-y-1 text-white font-bold">ig</div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D97706] cursor-pointer transition-all hover:-translate-y-1 text-white font-bold">in</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xl mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-12 after:h-1 after:bg-[#D97706] after:rounded-full">Properti</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Vila</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Hotel</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Rumah</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Kavling</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Ruko</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xl mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-12 after:h-1 after:bg-[#D97706] after:rounded-full">Wisata</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Pantai</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Gunung</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Danau</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Kota</a></li>
              <li><a href="#" className="hover:text-[#D97706] transition-colors flex items-center gap-2"><span className="text-white/20">&rarr;</span> Budaya</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xl mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-12 after:h-1 after:bg-[#D97706] after:rounded-full">Kontak</h4>
            <ul className="space-y-5 text-gray-400 font-medium">
              <li className="flex items-start gap-4">
                <span className="mt-1 bg-white/5 p-2 rounded-lg text-lg">📍</span>
                <span>Jl. Ahmad Yani No. 10, Sukabumi</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-white/5 p-2 rounded-lg text-lg">📞</span>
                <span>(0266) 123-456</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-white/5 p-2 rounded-lg text-lg">✉</span>
                <span>info@luxurystay.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p className="text-gray-500">© 2026 LuxuryStay. All rights reserved.</p>
          <p className="text-gray-500">
            <span className="text-[#D97706]">Website dibuat oleh MakDev</span>
            <span className="mx-2 text-white/20">|</span>
            <a href="https://makdev-website-pied.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              makdev-website-pied.vercel.app
            </a>
          </p>
        </div>
      </footer>

      {/* 12. FLOATING WA BUTTON */}
      <a 
        href="https://wa.me/6281996522114" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#D97706] to-amber-500 text-white px-6 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(217,119,6,0.4)] hover:-translate-y-2 transition-all flex items-center gap-3 group"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">💬</span> 
        <span className="hidden md:inline">Hubungi Kami</span>
      </a>
    </div>
  );
}
