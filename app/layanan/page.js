"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const webFeatures = [
  {
    icon: "devices",
    title: "100% Responsif",
    desc: "Tampil sempurna di HP, Tablet, maupun Desktop.",
  },
  {
    icon: "bolt",
    title: "Fast Loading",
    desc: "Akses super cepat tanpa loading lama berkat teknologi modern.",
  },
  {
    icon: "chat",
    title: "Integrasi WhatsApp",
    desc: "Tombol obrolan langsung terhubung ke nomor WA bisnis Anda.",
  },
  {
    icon: "search",
    title: "Struktur Web SEO-Friendly",
    desc: "Optimasi kata kunci agar mudah ditemukan di pencarian Google.",
  },
];

const undanganFeatures = [
  {
    icon: "music_note",
    title: "Auto-Play Backsound Musik",
  },
  {
    icon: "photo_camera",
    title: "Galeri Foto & Video Pre-Wedding",
  },
  {
    icon: "map",
    title: "Integrasi Google Maps Interaktif",
  },
  {
    icon: "menu_book",
    title: "Buku Tamu Digital & Form RSVP",
  },
  {
    icon: "person",
    title: "Custom Nama Tamu Undangan",
  },
];

const steps = [
  {
    num: 1,
    title: "Konsultasi",
    desc: "Diskusikan kebutuhan, referensi desain, dan target Anda via WhatsApp.",
  },
  {
    num: 2,
    title: "Kirim Data",
    desc: "Kirimkan materi (teks, foto, desain) dan lakukan pembayaran DP 50% untuk memulai antrean.",
  },
  {
    num: 3,
    title: "Proses Development",
    desc: "Kami menulis kode dan merakit website Anda sesuai spesifikasi yang disepakati.",
  },
  {
    num: 4,
    title: "Review & Online",
    desc: "Tahap revisi minor, pelunasan sisa pembayaran, dan website Anda siap mengudara di server!",
  },
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
      <section className="pt-12 pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Layanan <span className="text-gradient">MakDev</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Kami menyediakan solusi digital berkualitas tinggi untuk
              memastikan bisnis dan acara Anda tampil maksimal di dunia
              digital.
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

        {/* Tab Content */}
        <div className="pb-20">
          {/* ===== WEB DEVELOPMENT TAB ===== */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "web"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 hidden"
            }`}
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066FF] to-blue-700"></div>
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#0066FF]/10 rounded-full blur-3xl"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#0066FF]/10 group">
                  <Image
                    src="/assets/layanan-web.png"
                    alt="Web Development Mockup"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent"></div>
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Website Kustom Premium
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Website tidak hanya sekadar online, tetapi harus bisa
                    mendatangkan konversi. Kami merancang arsitektur website yang
                    super cepat, SEO-friendly, dan memukau di semua perangkat.
                  </p>

                  {/* Feature List */}
                  <div className="space-y-5 mb-10">
                    {webFeatures.map((f, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#0066FF]/10 rounded-xl flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF]/20 group-hover:scale-110 transition-all duration-300">
                          <span className="material-symbols-outlined text-xl">
                            {f.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm mb-0.5">
                            {f.title}
                          </h4>
                          <p className="text-gray-500 text-sm">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/harga"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] to-blue-700 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#0066FF]/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Lihat Harga Paket Web
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ===== UNDANGAN DIGITAL TAB ===== */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "undangan"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 hidden"
            }`}
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] to-purple-700"></div>
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Image */}
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#7C3AED]/10 group">
                    <Image
                      src="/assets/layanan-undangan.png"
                      alt="Undangan Digital Mockup"
                      width={700}
                      height={500}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent"></div>
                  </div>
                  <p className="text-center text-gray-500 text-sm mt-4 italic">
                    Desain Elegan untuk Momen Spesial Anda
                  </p>
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Undangan Interaktif & Elegan
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Berikan kesan pertama yang tak terlupakan kepada tamu
                    undangan Anda. Lebih praktis, hemat, dan ramah lingkungan
                    dengan beragam pilihan fitur canggih yang dapat disesuaikan
                    dengan paket pilihan Anda.
                  </p>

                  {/* Feature List */}
                  <div className="space-y-4 mb-10">
                    {undanganFeatures.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED]/20 group-hover:scale-110 transition-all duration-300">
                          <span className="material-symbols-outlined text-xl">
                            {f.icon}
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm">
                          {f.title}
                        </h4>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/harga"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7C3AED] to-purple-700 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#7C3AED]/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Lihat Harga Undangan
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CARA KERJA KAMI SECTION ===== */}
      <section className="py-20 lg:py-28 bg-[#f8f9fc] relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Cara Kerja Kami
            </h2>
            <p className="text-gray-500 text-lg">
              Proses simpel, transparan, dan anti-ribet.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gray-200"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Circle */}
                  <div
                    className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                      i === 0
                        ? "bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30"
                        : "bg-white border-2 border-gray-300 text-gray-500 group-hover:border-[#0066FF] group-hover:text-[#0066FF] group-hover:shadow-[#0066FF]/20"
                    }`}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function LayananPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-white">
          <span className="animate-pulse">Loading...</span>
        </div>
      }
    >
      <LayananContent />
    </Suspense>
  );
}
