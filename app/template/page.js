"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ───────── DATA ───────── */

const templates = [
  {
    title: "Jasa & Layanan",
    category: "Website Bisnis",
    desc: "Desain profesional untuk menawarkan keahlian Anda. Cocok untuk berbagai bidang jasa seperti bengkel, klinik, kontraktor, salon, hingga agensi lokal.",
    image: "/assets/tpl-jasa.png",
    demoLink: "/demo/jasa-layanan",
    badge: "POPULER",
    price: "Rp 499.000",
  },
  {
    title: "Kuliner & Resto",
    category: "Website Bisnis",
    desc: "Tampilan visual yang menggugah selera untuk menu andalan Anda. Ideal untuk kafe, rumah makan, warung tenda, franchise minuman, hingga bisnis katering harian.",
    image: "/assets/tpl-kuliner.png",
    demoLink: "/demo/kuliner-resto",
    price: "Rp 499.000",
  },
  {
    title: "Company Profile",
    category: "Company Profile",
    desc: "Desain eksklusif multi-halaman untuk membangun citra profesional bisnis Anda. Dilengkapi halaman Tentang Kami, Galeri Fasilitas, Layanan, dan Klien. Sangat ideal untuk perusahaan manufaktur, pabrik, kontraktor besar, hingga firma hukum.",
    image: "/assets/tpl-company.png",
    demoLink: "/demo/company-profile",
    badge: "POPULER",
    price: "Rp 799.000",
  },
  {
    title: "Instansi Publik & Edukasi",
    category: "Company Profile",
    desc: "Portal informasi resmi yang terstruktur, transparan, dan mudah diakses publik. Dilengkapi fitur Berita, Pengumuman, Profil Institusi, hingga Layanan Masyarakat/PPDB. Pilihan utama untuk website Desa, Dinas Pemerintahan, Sekolah, dan Yayasan.",
    image: "/assets/tpl-edukasi.png",
    demoLink: "/demo/instansi-edukasi",
    price: "Rp 799.000",
  },
  {
    title: "E-Commerce & Retail",
    category: "E-Commerce",
    desc: "Toko online berskala besar dengan sistem navigasi belanja yang terintegrasi. Dilengkapi fitur keranjang belanja, filter produk, dan halaman detail barang. Cocok untuk distributor, toko grosir, brand fashion, dan bisnis retail.",
    image: "/assets/tpl-ecommerce.png",
    demoLink: "/demo/ecommerce",
    badge: "BARU",
    price: "Rp 999.000",
  },
  {
    title: "Properti & Pariwisata",
    category: "Website Bisnis",
    desc: "Tampilan visual memukau dan elegan dengan dukungan galeri beresolusi tinggi. Sempurna untuk developer perumahan, penyewaan villa/hotel, agen perjalanan, atau promosi destinasi wisata lokal.",
    image: "/assets/tpl-properti.png",
    demoLink: "/demo/properti",
    price: "Rp 499.000",
  },
  {
    title: "Profil & Portofolio",
    category: "Website Bisnis",
    desc: "Bangun kredibilitas digital yang elegan. Sangat pas digunakan sebagai kartu nama digital untuk sales, agen properti, freelancer, atau tokoh publik.",
    image: "/assets/tpl-portfolio.png",
    demoLink: "/demo/profil-portofolio",
    price: "Rp 499.000",
  },
  {
    title: "Katalog Produk",
    category: "E-Commerce",
    desc: "Fokus menonjolkan keunggulan barang jualan Anda. Didesain khusus untuk jualan produk fisik, mulai dari pakaian, kosmetik, hasil bumi, hingga penjualan hewan ternak.",
    image: "/assets/tpl-katalog.png",
    demoLink: "/demo/katalog-produk",
    price: "Rp 999.000",
  },
  {
    title: "Minimalist Elegance",
    category: "Undangan Digital",
    desc: "Desain bersih berlatar putih dengan tipografi klasik yang romantis.",
    image: "/assets/tpl-inv-basic.png",
    demoLink: "/demo/minimalist-elegance",
    price: "Rp 299.000",
  },
  {
    title: "Royal Blossom",
    category: "Undangan Digital",
    desc: "Sentuhan mewah dengan animasi elemen bunga dan galeri interaktif.",
    image: "/assets/tpl-inv-premium.png",
    demoLink: "/demo/royal-blossom",
    badge: "POPULER",
    price: "Rp 499.000",
  },
];

const categories = ["Semua", "Website Bisnis", "Undangan Digital", "Company Profile", "E-Commerce"];

const categoryStyles = {
  "Website Bisnis": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Undangan Digital": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "Company Profile": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "E-Commerce": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

/* ───────── TEMPLATE CARD COMPONENT ───────── */

function TemplateCard({ item }) {
  const badgeStyle = categoryStyles[item.category] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
  const waLink = `https://wa.me/6281996522114?text=Halo DiCode, saya tertarik memesan template ${item.title}`;

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 flex flex-col relative border border-white/5">
      {item.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0F1E] text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
            {item.badge}
          </span>
        </div>
      )}
      <div className="relative h-52 overflow-hidden border-b border-white/10">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${badgeStyle}`}>
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-bold text-white text-xl mb-1">{item.title}</h4>
        
        <div className="space-y-1.5 mt-3 mb-5">
          <p className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> Responsive Mobile
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> Revisi 30 Hari
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> Siap dalam 3-7 Hari
          </p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {item.desc}
        </p>

        <div className="border-t border-white/10 pt-4 mb-6">
          <p className="text-xs text-gray-500 mb-1">Mulai dari</p>
          <p className="text-2xl font-extrabold text-white">{item.price}</p>
        </div>

        <div className="flex gap-3">
          <Link
            href={item.demoLink || "#"}
            className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-cyan-500/50 text-cyan-400 font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
          >
            Lihat Demo
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-4 py-2.5 rounded-xl text-sm hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Pesan Sekarang →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ───────── MAIN PAGE ───────── */

export default function TemplatePage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredTemplates =
    activeTab === "Semua"
      ? templates
      : templates.filter((t) => t.category === activeTab);

  return (
    <div className="min-h-screen pb-20">
      {/* 1. HEADER SECTION */}
      <section className="pt-20 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-bold px-4 py-1.5 rounded-full border border-cyan-500/20 mb-6">
            TEMPLATE & KATALOG
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Pilih Template Terbaik untuk Bisnis Anda
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Setiap template dirancang profesional, responsif, dan siap pakai. Pesan sekarang dan website Anda siap dalam hitungan hari.
          </p>
        </div>
      </section>

      {/* 2. FILTER/TAB KATEGORI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                activeTab === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GRID TEMPLATE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((t, i) => (
            <TemplateCard key={i} item={t} />
          ))}
        </div>
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Belum ada template di kategori ini.</p>
          </div>
        )}
      </section>

      {/* 4. SECTION KEUNGGULAN DI BAWAH GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kenapa Pilih Template DiCode?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl border border-white/5 text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-lg shadow-rose-500/25 group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Desain Premium</h3>
            <p className="text-gray-400 leading-relaxed">
              Tampilan modern dan elegan yang dirancang khusus untuk bisnis Anda.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl border border-white/5 text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cepat & Responsif</h3>
            <p className="text-gray-400 leading-relaxed">
              Dioptimalkan untuk semua perangkat dan loading super cepat.
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl border border-white/5 text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform">
              🔧
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Mudah Dikustomisasi</h3>
            <p className="text-gray-400 leading-relaxed">
              Warna, teks, dan konten bisa disesuaikan sepenuhnya.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION DI PALING BAWAH */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-purple-900 opacity-90"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Tidak Menemukan yang Cocok?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Kami juga menerima pesanan custom sesuai kebutuhan spesifik bisnis Anda.
            </p>
            <a
              href="https://wa.me/6281996522114?text=Halo DiCode, saya ingin konsultasi template custom"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Konsultasi Gratis →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
