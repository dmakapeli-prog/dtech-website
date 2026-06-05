"use client";

import { useState } from "react";

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

export default function HargaPage() {
  const [activeTab, setActiveTab] = useState("web");

  const pakets = activeTab === "web" ? webPakets : undanganPakets;

  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Paket <span className="text-gradient">Harga</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Investasi transparan tanpa biaya tersembunyi. Pilih paket yang sesuai kebutuhan Anda.
          </p>
        </div>

        {/* Tab Switcher */}
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pakets.map((paket, i) => (
            <div
              key={i}
              className={`relative glass-card rounded-3xl p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${
                paket.popular
                  ? "border-primary/50 shadow-xl shadow-primary/10 scale-[1.02]"
                  : "hover:shadow-lg hover:shadow-primary/5"
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
                href={`https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20dengan%20${encodeURIComponent(paket.name)}%20(${encodeURIComponent(paket.subtitle)}).`}
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

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Harga dapat berubah sesuai tingkat kompleksitas proyek. Hubungi kami untuk konsultasi gratis.
          </p>
        </div>
      </div>
    </div>
  );
}
