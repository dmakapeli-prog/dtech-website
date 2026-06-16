"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ───────── DATA ───────── */

const hematTemplates = [
  {
    title: "Jasa & Layanan",
    desc: "Desain profesional untuk menawarkan keahlian Anda. Cocok untuk berbagai bidang jasa seperti bengkel, klinik, kontraktor, salon, hingga agensi lokal.",
    image: "/assets/tpl-jasa.png",
    demoLink: "/demo/jasa-layanan",
  },
  {
    title: "Kuliner & Resto",
    desc: "Tampilan visual yang menggugah selera untuk menu andalan Anda. Ideal untuk kafe, rumah makan, warung tenda, franchise minuman, hingga bisnis katering harian.",
    image: "/assets/tpl-kuliner.png",
    demoLink: "/demo/kuliner-resto",
  },
];

const populerTemplates = [
  {
    title: "Company Profile",
    desc: "Desain eksklusif multi-halaman untuk membangun citra profesional bisnis Anda. Dilengkapi halaman Tentang Kami, Galeri Fasilitas, Layanan, dan Klien. Sangat ideal untuk perusahaan manufaktur, pabrik, kontraktor besar, hingga firma hukum.",
    image: "/assets/tpl-company.png",
    demoLink: "/demo/company-profile",
  },
  {
    title: "Instansi Publik & Edukasi",
    desc: "Portal informasi resmi yang terstruktur, transparan, dan mudah diakses publik. Dilengkapi fitur Berita, Pengumuman, Profil Institusi, hingga Layanan Masyarakat/PPDB. Pilihan utama untuk website Desa, Dinas Pemerintahan, Sekolah, dan Yayasan.",
    image: "/assets/tpl-edukasi.png",
    demoLink: "/demo/instansi-edukasi",
  },
  {
    title: "E-Commerce & Retail",
    desc: "Toko online berskala besar dengan sistem navigasi belanja yang terintegrasi. Dilengkapi fitur keranjang belanja, filter produk, dan halaman detail barang. Cocok untuk distributor, toko grosir, brand fashion, dan bisnis retail.",
    image: "/assets/tpl-ecommerce.png",
    demoLink: "/demo/ecommerce",
  },
  {
    title: "Properti & Pariwisata",
    desc: "Tampilan visual memukau dan elegan dengan dukungan galeri beresolusi tinggi. Sempurna untuk developer perumahan, penyewaan villa/hotel, agen perjalanan, atau promosi destinasi wisata lokal.",
    image: "/assets/tpl-properti.png",
    demoLink: "/demo/properti",
  },
  {
    title: "Profil & Portofolio",
    desc: "Bangun kredibilitas digital yang elegan. Sangat pas digunakan sebagai kartu nama digital untuk sales, agen properti, freelancer, atau tokoh publik.",
    image: "/assets/tpl-portfolio.png",
    demoLink: "/demo/profil-portofolio",
  },
  {
    title: "Katalog Produk",
    desc: "Fokus menonjolkan keunggulan barang jualan Anda. Didesain khusus untuk jualan produk fisik, mulai dari pakaian, kosmetik, hasil bumi, hingga penjualan hewan ternak.",
    image: "/assets/tpl-katalog.png",
    demoLink: "/demo/katalog-produk",
  },
];

/* ───────── TEMPLATE CARD COMPONENT ───────── */

function TemplateCard({ item, color = "blue" }) {
  const btnClass =
    color === "blue"
      ? "border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white"
      : "border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white";
  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0066FF]/10 transition-all duration-500 flex flex-col">
      <div className="relative h-52 overflow-hidden border-b border-white/10">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/70 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {item.desc}
        </p>
        <Link
          href={item.demoLink || "#"}
          className={`inline-flex items-center justify-center gap-2 border-2 ${btnClass} font-bold px-5 py-2.5 rounded-xl text-sm transform hover:scale-105 transition-all duration-300`}
        >
          Lihat Demo
        </Link>
      </div>
    </div>
  );
}

/* ───────── TERMINAL MOCKUP COMPONENT ───────── */

function TerminalMockup({ lines, badges, variant = "blue" }) {
  return (
    <div className="relative">
      <div className="bg-[#0d1117] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
          </div>
          <span className="text-gray-500 text-xs ml-2 font-mono">terminal</span>
        </div>
        {/* Lines */}
        <div className="p-5 font-mono text-xs md:text-sm space-y-2">
          {lines.map((line, i) => (
            <div key={i} className={line.color || "text-gray-400"}>
              {line.prefix && (
                <span className="text-green-400">{line.prefix} </span>
              )}
              {line.text}
            </div>
          ))}
        </div>
      </div>
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {badges.map((b, i) => (
          <span
            key={i}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
              variant === "blue"
                ? "border-[#0066FF]/30 text-[#0066FF] bg-[#0066FF]/10"
                : "border-amber-500/30 text-amber-400 bg-amber-500/10"
            }`}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── MAIN PAGE ───────── */

export default function TemplatePage() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Katalog Pilihan{" "}
              <span className="text-gradient">Template</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Jelajahi berbagai desain template profesional berdasarkan
              pilihan paket harga dan kategori yang sesuai dengan kebutuhan
              dan anggaran Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <div className="glass-card rounded-full p-1.5 inline-flex gap-1">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "web"
                  ? "bg-gradient-to-r from-[#0066FF] to-blue-700 text-white shadow-lg shadow-[#0066FF]/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                desktop_windows
              </span>
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("undangan")}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "undangan"
                  ? "bg-gradient-to-r from-[#7C3AED] to-purple-700 text-white shadow-lg shadow-[#7C3AED]/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                favorite
              </span>
              Undangan Digital
            </button>
          </div>
        </div>

        {/* ═══════════════ TAB WEB ═══════════════ */}
        <div
          className={`transition-all duration-500 ${
            activeTab === "web"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 hidden"
          }`}
        >
          <div className="space-y-20 pb-24">
            {/* ── PAKET HEMAT ── */}
            <section>
              <div className="mb-8">
                <span className="inline-block bg-[#0066FF]/10 text-[#0066FF] text-xs font-bold px-4 py-1.5 rounded-full border border-[#0066FF]/20 mb-4">
                  PAKET HEMAT
                </span>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      Paket Hemat
                    </h2>
                  </div>
                  <p className="text-2xl font-extrabold text-[#0066FF]">
                    Rp 300Rb – 500Rb
                  </p>
                </div>
                <p className="text-gray-400 mt-3 max-w-3xl">
                  Pilihan desain website informatif yang cepat, terjangkau,
                  dan sangat pas untuk merintis identitas digital bisnis
                  Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {hematTemplates.map((t, i) => (
                  <TemplateCard key={i} item={t} color="blue" />
                ))}
              </div>
            </section>

            {/* ── PAKET POPULER ── */}
            <section>
              <div className="mb-8">
                <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-500/20 mb-4">
                  ⭐ REKOMENDASI
                </span>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      Paket Populer
                    </h2>
                  </div>
                  <p className="text-2xl font-extrabold text-[#0066FF]">
                    Rp 700Rb – 1.2Jt
                  </p>
                </div>
                <p className="text-gray-400 mt-3 max-w-3xl">
                  Solusi sistem website dinamis dengan fitur interaktif
                  tingkat lanjut untuk memperluas jangkauan pasar digital
                  Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {populerTemplates.map((t, i) => (
                  <TemplateCard key={i} item={t} color="blue" />
                ))}
              </div>
            </section>

            {/* ── PAKET EKSKLUSIF WEB ── */}
            <section>
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066FF] to-cyan-500"></div>
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#0066FF]/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  {/* Left */}
                  <div>
                    <span className="inline-block bg-[#0066FF]/10 text-[#0066FF] text-xs font-bold px-4 py-1.5 rounded-full border border-[#0066FF]/20 mb-4">
                      PAKET EKSKLUSIF
                    </span>
                    <p className="text-[#0066FF] font-extrabold text-lg mb-2">
                      MULAI Rp 1.5Jt
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Layanan Custom Web Development
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      Paket Eksklusif tidak menggunakan template siap pakai.
                      Ini adalah layanan pembuatan website kustom (Slicing
                      Design to Web) yang dirancang khusus mengikuti
                      referensi desain atau keinginan Anda. Sangat cocok
                      untuk Company Profile premium, Landing Page
                      interaktif, atau portofolio bisnis yang ingin tampil
                      unik dan berbeda dari yang lain.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {[
                        "Arsitektur kode modern & terukur",
                        "Integrasi API & Database khusus",
                        "Optimasi Core Web Vitals tingkat lanjut",
                      ].map((f, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20tertarik%20dengan%20paket%20eksklusif%20web%20development."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-[#0066FF] text-[#0066FF] font-bold px-7 py-3 rounded-xl hover:bg-[#0066FF] hover:text-white transform hover:scale-105 transition-all duration-300"
                    >
                      Konsultasi Spesifikasi Sistem
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>

                  {/* Right – Terminal */}
                  <TerminalMockup
                    variant="blue"
                    lines={[
                      {
                        prefix: "$",
                        text: "npm run build --production",
                        color: "text-white",
                      },
                      {
                        text: "Compiling React components...",
                        color: "text-cyan-400",
                      },
                      {
                        text: "Optimizing Core Web Vitals...",
                        color: "text-cyan-400",
                      },
                      {
                        text: "✓ Build Successful in 1.2s",
                        color: "text-green-400",
                      },
                    ]}
                    badges={[
                      "PERFORMANCE Lighthouse Score 99",
                      "Sertifikat Keamanan HTTPS",
                    ]}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ═══════════════ TAB UNDANGAN ═══════════════ */}
        <div
          className={`transition-all duration-500 ${
            activeTab === "undangan"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 hidden"
          }`}
        >
          <div className="space-y-20 pb-24">
            {/* Subtitle */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-3">
                Template Undangan
              </h2>
              <p className="text-gray-400">
                Pilih template yang sesuai dengan tema acara Anda. Semua
                template bisa dikustomisasi warna, font, foto, dan musik.
              </p>
            </div>

            {/* ── PAKET BASIC ── */}
            <section>
              <div className="mb-6">
                <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full border border-[#7C3AED]/20">
                  PAKET BASIC
                </span>
              </div>
              <div className="glass-card rounded-3xl overflow-hidden group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-72 md:h-auto overflow-hidden">
                    <Image
                      src="/assets/tpl-inv-basic.png"
                      alt="Minimalist Elegance"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Minimalist Elegance
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      Desain bersih berlatar putih dengan tipografi klasik
                      yang romantis.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/demo/minimalist-elegance"
                        className="inline-flex items-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] font-bold px-6 py-3 rounded-xl hover:bg-[#7C3AED]/10 transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Lihat Demo
                      </Link>
                      <a
                        href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20ingin%20pesan%20undangan%20Minimalist%20Elegance."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-purple-700 text-white font-bold px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-[#7C3AED]/25 transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Pesan Desain Ini
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── PAKET PREMIUM ── */}
            <section>
              <div className="mb-6">
                <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-500/20">
                  ⭐ PAKET PREMIUM
                </span>
              </div>
              <div className="glass-card rounded-3xl overflow-hidden group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-72 md:h-auto overflow-hidden">
                    <Image
                      src="/assets/tpl-inv-premium.png"
                      alt="Royal Blossom"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Royal Blossom
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      Sentuhan mewah dengan animasi elemen bunga dan galeri
                      interaktif.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/demo/royal-blossom"
                        className="inline-flex items-center gap-2 border-2 border-[#7C3AED] text-[#7C3AED] font-bold px-6 py-3 rounded-xl hover:bg-[#7C3AED]/10 transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Lihat Demo
                      </Link>
                      <a
                        href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20ingin%20pesan%20undangan%20Royal%20Blossom."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-purple-700 text-white font-bold px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-[#7C3AED]/25 transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Pesan Desain Ini
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── PAKET EKSKLUSIF UNDANGAN ── */}
            <section>
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] to-amber-500"></div>
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  {/* Left */}
                  <div>
                    <span className="inline-block bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold px-4 py-1.5 rounded-full border border-[#7C3AED]/20 mb-4">
                      PAKET EKSKLUSIF
                    </span>
                    <p className="text-amber-400 font-extrabold text-lg mb-2">
                      MULAI Rp 250Rb
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Punya Konsep Pernikahan Impian Sendiri?
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      Pilih Paket Eksklusif untuk pembuatan desain undangan
                      digital kustom dari nol. Bebas tentukan tata letak,
                      animasi transisi, hingga integrasi custom domain
                      (nama-mempelai.com) agar momen spesial Anda tampil
                      beda.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {[
                        "Desain Visual Eksklusif 100% Custom",
                        "Custom Domain nama.com",
                        "Animasi & Fitur Spesial",
                      ].map((f, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20tertarik%20dengan%20paket%20eksklusif%20undangan%20digital."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0F1E] font-bold px-7 py-3 rounded-xl hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                    >
                      Konsultasi Desain Custom
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>

                  {/* Right – Terminal */}
                  <TerminalMockup
                    variant="gold"
                    lines={[
                      {
                        prefix: "$",
                        text: "npx create-wedding-app --premium",
                        color: "text-white",
                      },
                      {
                        text: "Generating custom 3D assets...",
                        color: "text-amber-400",
                      },
                      {
                        text: "Configuring private domain...",
                        color: "text-amber-400",
                      },
                      {
                        text: "✓ Wedding App Deployed!",
                        color: "text-green-400",
                      },
                    ]}
                    badges={["Premium Design", "DOMAIN mempelai.com"]}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
