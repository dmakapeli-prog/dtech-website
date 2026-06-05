"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const webFeatures = [
  { icon: "devices", title: "Responsif", desc: "Tampil sempurna di semua perangkat, dari desktop hingga smartphone." },
  { icon: "speed", title: "Performa Tinggi", desc: "Loading cepat dengan optimasi gambar, code splitting, dan caching." },
  { icon: "search", title: "SEO Optimized", desc: "Struktur SEO-friendly agar mudah ditemukan di mesin pencari Google." },
  { icon: "palette", title: "Desain Custom", desc: "Desain unik sesuai brand Anda, bukan template pasaran." },
  { icon: "security", title: "SSL & Keamanan", desc: "Sertifikat SSL gratis dan perlindungan keamanan standar industri." },
  { icon: "support_agent", title: "Support Pasca-Launch", desc: "Bantuan teknis setelah website live untuk kelancaran operasional." },
];

const undanganFeatures = [
  { icon: "music_note", title: "Background Musik", desc: "Tambahkan lagu favorit sebagai pengiring undangan digital Anda." },
  { icon: "photo_camera", title: "Galeri Foto", desc: "Tampilkan momen indah dengan galeri foto yang elegan dan interaktif." },
  { icon: "how_to_reg", title: "RSVP Online", desc: "Tamu bisa konfirmasi kehadiran langsung dari undangan digital." },
  { icon: "map", title: "Peta Lokasi", desc: "Integrasi Google Maps untuk memudahkan tamu menemukan lokasi acara." },
  { icon: "schedule", title: "Hitung Mundur", desc: "Countdown timer yang membuat momen semakin dinantikan." },
  { icon: "person", title: "Custom Nama Tamu", desc: "Setiap tamu mendapat link personal dengan nama mereka di cover." },
];

function LayananContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("web");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "undangan") setActiveTab("undangan");
    else setActiveTab("web");
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Layanan <span className="text-gradient">DTech</span>
            </h1>
            <p className="text-lg text-gray-400">
              Solusi digital komprehensif untuk kebutuhan bisnis dan momen spesial Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Content */}
        <div className="pb-24">
          {activeTab === "web" ? (
            <div className="space-y-16">
              {/* Intro */}
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-700"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">Pengembangan Website Profesional</h2>
                  <p className="text-gray-400 leading-relaxed max-w-3xl">
                    Kami membangun website modern, responsif, dan berkinerja tinggi menggunakan teknologi terkini seperti 
                    Next.js, React, dan Tailwind CSS. Setiap proyek dirancang khusus sesuai kebutuhan dan identitas brand Anda, 
                    bukan template yang digunakan berulang-ulang.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Apa yang Anda Dapatkan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {webFeatures.map((f, i) => (
                    <div key={i} className="glass-card rounded-2xl p-6 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">{f.icon}</span>
                      </div>
                      <h4 className="font-bold text-white mb-2">{f.title}</h4>
                      <p className="text-gray-400 text-sm">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-700 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Konsultasi Jasa Web
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Intro */}
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-cyan-600"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">Undangan Digital Premium</h2>
                  <p className="text-gray-400 leading-relaxed max-w-3xl">
                    Buat momen spesial Anda semakin berkesan dengan undangan digital yang elegan dan interaktif. 
                    Hemat biaya cetak, ramah lingkungan, dan mudah dibagikan melalui WhatsApp. Setiap undangan 
                    dikustomisasi sepenuhnya sesuai tema acara Anda.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Fitur Unggulan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {undanganFeatures.map((f, i) => (
                    <div key={i} className="glass-card rounded-2xl p-6 group hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">{f.icon}</span>
                      </div>
                      <h4 className="font-bold text-white mb-2">{f.title}</h4>
                      <p className="text-gray-400 text-sm">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20dengan%20undangan%20digital."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-cyan-600 text-[#0a0a1a] font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Pesan Undangan Digital
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LayananPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white"><span className="animate-pulse">Loading...</span></div>}>
      <LayananContent />
    </Suspense>
  );
}
