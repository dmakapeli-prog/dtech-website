"use client";

import { useState } from "react";

/* ───────── DATA PAKET UTAMA ───────── */

const webPakets = [
  {
    name: "Paket Hemat",
    subtitle: "Landing Page",
    price: "Rp 300.000",
    popular: false,
    features: [
      "1 Halaman (Landing Page)",
      "Desain Responsif (Mobile & Desktop)",
      "Hosting Gratis (Vercel)",
      "Subdomain gratis (nama.vercel.app)",
      "Form Kontak / WhatsApp Link",
      "Optimasi SEO Dasar",
      "Revisi 2x",
      "Waktu Pengerjaan: 3-5 Hari Kerja",
    ],
  },
  {
    name: "Paket Populer",
    subtitle: "Web Multi-halaman",
    price: "Rp 750.000",
    popular: true,
    features: [
      "3-5 Halaman",
      "Desain Premium Custom",
      "Domain .com GRATIS 1 Tahun",
      "Hosting Gratis (Vercel)",
      "SSL Certificate (HTTPS)",
      "Optimasi SEO Lanjutan",
      "Integrasi Google Analytics",
      "Integrasi WhatsApp Chat",
      "Revisi 3x",
      "Waktu Pengerjaan: 1-2 Minggu",
    ],
  },
  {
    name: "Paket Eksklusif",
    subtitle: "Custom Web Development",
    price: "Rp 1.500.000+",
    popular: false,
    features: [
      "Halaman Tak Terbatas",
      "Desain Eksklusif Full Custom",
      "Domain .com GRATIS 1 Tahun",
      "Hosting Premium",
      "Admin Panel / CMS",
      "Integrasi Sistem (API, Database)",
      "Optimasi SEO Profesional",
      "Maintenance 1 Bulan",
      "Revisi Sampai Puas",
      "Waktu Pengerjaan: 2-4 Minggu",
    ],
  },
];

const undanganPakets = [
  {
    name: "Paket Basic",
    subtitle: "Undangan Sederhana",
    price: "Rp 50.000",
    popular: false,
    features: [
      "1 Template Pilihan",
      "Custom Nama Tamu (Link)",
      "Informasi Acara Lengkap",
      "Peta Lokasi (Google Maps)",
      "Countdown Timer",
      "Background Musik",
      "Link Shareable via WhatsApp",
      "Waktu Pengerjaan: 1-2 Hari Kerja",
    ],
  },
  {
    name: "Paket Premium",
    subtitle: "Undangan Lengkap",
    price: "Rp 100.000",
    popular: true,
    features: [
      "Semua Fitur Paket Basic",
      "Kustomisasi Warna & Font",
      "Galeri Foto (hingga 10 foto)",
      "RSVP Online",
      "Love Story Timeline",
      "Amplop Digital (Gift)",
      "Animasi Premium",
      "Subdomain Custom",
      "Waktu Pengerjaan: 1-2 Hari Kerja",
    ],
  },
  {
    name: "Paket Eksklusif",
    subtitle: "Custom Design",
    price: "Rp 200.000+",
    popular: false,
    features: [
      "Semua Fitur Paket Premium",
      "Desain 100% Custom",
      "Video Opening",
      "Live Streaming Integration",
      "Guest Book Digital",
      "Multi-Bahasa",
      "Domain .com GRATIS",
      "Revisi Desain Tak Terbatas",
      "Waktu Pengerjaan: 3-7 Hari Kerja",
    ],
  },
];

/* ───────── DATA SECTIONS BARU ───────── */

const addOns = [
  { icon: "🌐", title: "Upgrade Domain .com/.id", type: "mayor", price: "Mulai Rp 150.000/tahun", desc: "Tingkatkan kredibilitas bisnis Anda dengan domain profesional." },
  { icon: "🔧", title: "Maintenance Bulanan", type: "mayor", price: "Mulai Rp 99.000/bulan", desc: "Monitoring, keamanan, backup, dan revisi minor bulanan. Gratis bulan pertama." },
  { icon: "🤖", title: "Integrasi AI Chatbot", type: "mayor", price: "Rp 300.000", desc: "Asisten virtual yang menjawab pertanyaan pelanggan Anda otomatis 24/7." },
  { icon: "🌍", title: "Fitur Multi-Bahasa (ID/EN)", type: "mayor", price: "Rp 250.000", desc: "Raih audiens lebih luas dengan website dua bahasa." },
  { icon: "🌙", title: "Fitur Dark Mode", type: "minor", price: "Rp 150.000", desc: "Tampilan mode gelap yang elegan dan nyaman di mata." },
  { icon: "📝", title: "Pembuatan Artikel SEO", type: "minor", price: "Rp 100.000/artikel", desc: "Tingkatkan trafik dari Google dengan artikel berkualitas." },
  { icon: "✍️", title: "Jasa Copywriting", type: "minor", price: "Rp 200.000", desc: "Rangkaian kata penjualan yang menarik untuk website Anda." },
  { icon: "✨", title: "Animasi Custom", type: "mayor", price: "Mulai Rp 150.000", desc: "Efek visual khusus dan unik sesuai spesifikasi Anda." },
  { icon: "📄", title: "Tambah Halaman Ekstra", type: "minor", price: "Rp 100.000/halaman", desc: "Penambahan halaman di luar batas paket awal." },
  { icon: "💳", title: "Integrasi Payment Gateway", type: "mayor", price: "Rp 350.000", desc: "Terima pembayaran QRIS dan Virtual Account otomatis." },
  { icon: "🎨", title: "Desain Logo Basic", type: "minor", price: "Rp 250.000", desc: "Logo profesional sederhana untuk bisnis yang belum memilikinya." },
];

const pascaGaransi = [
  { icon: "📝", title: "Ubah/Ganti Teks Konten", type: "minor", price: "Mulai Rp 50.000", desc: "Perubahan teks pada bagian tertentu (per halaman)." },
  { icon: "🖼️", title: "Ganti Gambar/Aset", type: "minor", price: "Rp 25.000/gambar", desc: "Penggantian gambar atau foto produk." },
  { icon: "🎨", title: "Ganti Tema Warna", type: "minor", price: "Rp 150.000", desc: "Perubahan skema warna utama website." },
  { icon: "📄", title: "Tambah Halaman Mendadak", type: "mayor", price: "Rp 150.000/halaman", desc: "Halaman baru di luar kesepakatan awal." },
  { icon: "🔧", title: "Perbaikan Bug/Error", type: "minor", price: "Rp 100.000/kasus", desc: "Penanganan masalah teknis setelah masa garansi habis." },
  { icon: "🗂️", title: "Rombak Layout Penuh", type: "mayor", price: "Mulai Rp 200.000", desc: "Perubahan total struktur satu halaman." },
];

const calculatorBasePackages = [
  { id: "hemat", name: "Paket Hemat", price: 300000 },
  { id: "populer", name: "Paket Populer", price: 800000 },
  { id: "eksklusif", name: "Paket Eksklusif", price: 2000000 },
  { id: "undangan_basic", name: "Undangan Basic", price: 299000 },
  { id: "undangan_premium", name: "Undangan Premium", price: 499000 },
];

const calculatorAddOns = [
  { id: "domain", name: "Domain .com/.id", price: 150000, suffix: "/tahun" },
  { id: "maintenance", name: "Maintenance", price: 99000, suffix: "/bulan" },
  { id: "ai_chatbot", name: "AI Chatbot", price: 300000, suffix: "" },
  { id: "multilang", name: "Multi-Bahasa", price: 250000, suffix: "" },
  { id: "darkmode", name: "Dark Mode", price: 150000, suffix: "" },
  { id: "extra_page", name: "Halaman Ekstra", price: 100000, suffix: "/halaman" },
  { id: "copywriting", name: "Copywriting", price: 200000, suffix: "" },
  { id: "seo_article", name: "Artikel SEO", price: 100000, suffix: "/artikel" },
  { id: "custom_anim", name: "Animasi Custom", price: 150000, suffix: "" },
  { id: "logo", name: "Desain Logo", price: 250000, suffix: "" },
];

function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
}

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl overflow-hidden mb-3 border border-white/5 transition-all duration-300 hover:border-white/10 bg-white/[0.02]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-4 flex-1">
          <span className="text-2xl flex-shrink-0">{item.icon}</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-white text-base">{item.title}</h4>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                item.type === "mayor" 
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                  : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
              }`}>
                {item.type}
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-400 mt-1">{item.price}</p>
          </div>
        </div>
        <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      <div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-gray-300 text-sm ml-10 pl-1 border-t border-white/10 pt-3">{item.desc}</p>
      </div>
    </div>
  );
}

export default function HargaPage() {
  const [activeTab, setActiveTab] = useState("web");
  
  // States for Calculator
  const [calcBaseId, setCalcBaseId] = useState(calculatorBasePackages[0].id);
  const [calcSelectedAddOns, setCalcSelectedAddOns] = useState([]);

  const pakets = activeTab === "web" ? webPakets : undanganPakets;

  // Calculator Logic
  const toggleAddOn = (id) => {
    setCalcSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const basePrice = calculatorBasePackages.find(p => p.id === calcBaseId)?.price || 0;
  const addOnsPrice = calcSelectedAddOns.reduce((total, id) => {
    const addon = calculatorAddOns.find(a => a.id === id);
    return total + (addon?.price || 0);
  }, 0);
  const totalPrice = basePrice + addOnsPrice;
  const whatsappCalcMessage = `Halo DiCode, saya ingin pesan paket dengan estimasi total ${formatRupiah(totalPrice)}`;

  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ───────── BAGIAN PAKET HARGA (EXISTING) ───────── */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Paket <span className="text-gradient">Harga</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Investasi transparan tanpa biaya tersembunyi. Pilih paket yang sesuai kebutuhan Anda.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-full p-1.5 inline-flex gap-1">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "web"
                  ? "bg-gradient-to-r from-primary to-blue-700 text-white shadow-lg shadow-primary/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined text-lg">web</span>
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("undangan")}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "undangan"
                  ? "bg-gradient-to-r from-accent to-cyan-600 text-[#0a0a1a] shadow-lg shadow-accent/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined text-lg">favorite</span>
              Undangan Digital
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pakets.map((paket, i) => (
            <div
              key={i}
              className={`relative glass-card rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${
                paket.popular
                  ? "border-primary/50 shadow-xl shadow-primary/10 scale-[1.02]"
                  : "hover:shadow-lg hover:shadow-primary/5 border border-white/5"
              }`}
            >
              {paket.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/25">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{paket.name}</h3>
                <p className="text-gray-500 text-sm">{paket.subtitle}</p>
              </div>

              <div className="mb-8">
                <span className={`text-4xl font-extrabold ${
                  activeTab === "web" ? "text-primary" : "text-accent"
                }`}>
                  {paket.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {paket.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className={`material-symbols-outlined text-base mt-0.5 ${
                      activeTab === "web" ? "text-primary" : "text-accent"
                    }`}>
                      check_circle
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20tertarik%20dengan%20${encodeURIComponent(paket.name)}%20(${encodeURIComponent(paket.subtitle)}).`}
                target="_blank"
                rel="noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  paket.popular
                    ? activeTab === "web"
                      ? "bg-gradient-to-r from-primary to-blue-700 text-white hover:shadow-xl hover:shadow-primary/25"
                      : "bg-gradient-to-r from-accent to-cyan-600 text-[#0a0a1a] hover:shadow-xl hover:shadow-accent/25"
                    : activeTab === "web"
                      ? "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      : "border-2 border-accent text-accent hover:bg-accent hover:text-[#0a0a1a]"
                }`}
              >
                Pesan Sekarang
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mb-24">
          <p className="text-gray-500 text-sm">
            * Harga dapat berubah sesuai tingkat kompleksitas proyek. Hubungi kami untuk konsultasi gratis.
          </p>
        </div>

        {/* ───────── 1. MENU ADD-ONS & 2. LAYANAN PASCA-GARANSI ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* SECTION 1: MENU ADD-ONS */}
          <div>
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full border border-primary/20 mb-3">
                Upgrade Opsional
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Menu Add-Ons
              </h2>
              <p className="text-gray-400">
                Layanan tambahan yang bisa ditambahkan kapan saja untuk melengkapi website Anda.
              </p>
            </div>
            
            <div className="space-y-3">
              {addOns.map((item, index) => (
                <AccordionItem key={`addon-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* SECTION 2: LAYANAN PASCA-GARANSI */}
          <div>
            <div className="mb-8">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full border border-accent/20 mb-3">
                Layanan Pasca-Garansi
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Biaya Modifikasi & Revisi Ekstra
              </h2>
              <p className="text-gray-400">
                Transparansi harga untuk perubahan setelah masa revisi gratis 30 hari berakhir.
              </p>
            </div>
            
            <div className="space-y-3">
              {pascaGaransi.map((item, index) => (
                <AccordionItem key={`pasca-${index}`} item={item} />
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
              <p className="text-amber-400 text-sm">
                Catatan: Harga di atas adalah estimasi dasar. Harga final menyesuaikan tingkat kerumitan.
              </p>
            </div>
          </div>
        </div>

        {/* ───────── 3. KEUNTUNGAN MAINTENANCE BULANAN ───────── */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Butuh Maintenance Bulanan?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Miliki ketenangan pikiran. Serahkan urusan teknis pada kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-white/5 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform">
                🔒
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Keamanan Terjamin</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Pembaruan rutin melindungi website dari celah keamanan dan serangan siber.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/5 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                🔄
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Bebas Revisi Minor</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Setelah garansi habis, tetap bebas minta pergantian teks, gambar, atau warna tanpa biaya ekstra.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/5 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performa & Backup</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Optimalisasi kecepatan dan backup data rutin agar bisnis Anda selalu aman.
              </p>
            </div>
          </div>
        </section>

        {/* ───────── 4. KALKULATOR ESTIMASI BIAYA ───────── */}
        <section className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent rounded-[2.5rem] blur-xl opacity-50 pointer-events-none"></div>
          <div className="glass-card rounded-[2rem] p-8 md:p-12 relative border border-white/10 shadow-2xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20 mb-3">
                Simulasi Harga
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">
                Kalkulator Estimasi Biaya
              </h2>
              <p className="text-gray-400">
                Hitung perkiraan biaya sebelum berdiskusi dengan tim kami.
              </p>
            </div>

            <div className="space-y-10">
              {/* STEP 1 */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                  Pilih Paket Dasar
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {calculatorBasePackages.map((pkg) => (
                    <label 
                      key={pkg.id} 
                      className={`cursor-pointer border rounded-xl p-4 transition-all duration-300 flex flex-col ${
                        calcBaseId === pkg.id 
                          ? "border-primary bg-primary/10 shadow-lg shadow-primary/10" 
                          : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="base_package" 
                        className="hidden" 
                        checked={calcBaseId === pkg.id}
                        onChange={() => setCalcBaseId(pkg.id)}
                      />
                      <span className="font-bold text-white mb-1">{pkg.name}</span>
                      <span className="text-primary font-semibold text-sm">{formatRupiah(pkg.price)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* STEP 2 */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                  Pilih Add-Ons Tambahan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {calculatorAddOns.map((addon) => {
                    const isSelected = calcSelectedAddOns.includes(addon.id);
                    return (
                      <label 
                        key={addon.id} 
                        className={`cursor-pointer border rounded-xl p-4 transition-all duration-300 flex items-center gap-3 ${
                          isSelected 
                            ? "border-accent bg-accent/10 shadow-lg shadow-accent/10" 
                            : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected ? "bg-accent border-accent" : "border-gray-500 bg-transparent"
                        }`}>
                          {isSelected && <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>}
                        </div>
                        <input 
                          type="checkbox" 
                          className="hidden"
                          checked={isSelected}
                          onChange={() => toggleAddOn(addon.id)}
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-white text-sm">{addon.name}</span>
                          <span className="text-accent font-semibold text-xs">+{formatRupiah(addon.price)}{addon.suffix}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* HASIL */}
              <div className="bg-gradient-to-r from-primary/20 to-blue-800/20 rounded-2xl p-6 border border-primary/30 mt-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay"></div>
                <p className="text-gray-300 mb-2 font-medium relative z-10">Estimasi Total:</p>
                <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2 relative z-10">
                  {formatRupiah(totalPrice)}
                </h4>
                <p className="text-gray-400 text-xs mb-6 relative z-10">
                  * Harga estimasi standar. Final menyesuaikan kompleksitas.
                </p>
                
                <a
                  href={`https://wa.me/6281996522114?text=${encodeURIComponent(whatsappCalcMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300 relative z-10"
                >
                  Pesan Sekarang
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
