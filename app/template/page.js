"use client";

import { useState } from "react";

const templates = [
  { id: 1, name: "Elegant Rose", category: "Pernikahan", color: "from-pink-500 to-rose-600", icon: "spa" },
  { id: 2, name: "Modern Minimalis", category: "Pernikahan", color: "from-amber-500 to-orange-600", icon: "grid_view" },
  { id: 3, name: "Royal Blue", category: "Pernikahan", color: "from-blue-500 to-indigo-600", icon: "diamond" },
  { id: 4, name: "Garden Party", category: "Pernikahan", color: "from-green-500 to-emerald-600", icon: "park" },
  { id: 5, name: "Aqiqah Ceria", category: "Khitanan/Aqiqah", color: "from-cyan-500 to-teal-600", icon: "celebration" },
  { id: 6, name: "Sunatan Berkah", category: "Khitanan/Aqiqah", color: "from-violet-500 to-purple-600", icon: "auto_awesome" },
  { id: 7, name: "Corporate Gala", category: "Acara Formal", color: "from-gray-600 to-gray-800", icon: "business_center" },
  { id: 8, name: "Birthday Bash", category: "Ulang Tahun", color: "from-yellow-500 to-amber-600", icon: "cake" },
  { id: 9, name: "Rustic Charm", category: "Pernikahan", color: "from-amber-700 to-yellow-800", icon: "forest" },
];

const categories = ["Semua", "Pernikahan", "Khitanan/Aqiqah", "Acara Formal", "Ulang Tahun"];

export default function TemplatePage() {
  const [filter, setFilter] = useState("Semua");

  const filtered = filter === "Semua" ? templates : templates.filter((t) => t.category === filter);

  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Template <span className="text-gradient">Undangan</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pilih template yang sesuai dengan tema acara Anda. Semua template bisa dikustomisasi warna, font, foto, dan musik.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                  : "glass-card text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((template) => (
            <div
              key={template.id}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Preview Area */}
              <div className={`relative h-56 bg-gradient-to-br ${template.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <span className="material-symbols-outlined text-7xl text-white/80 group-hover:scale-110 transition-transform duration-500">
                  {template.icon}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20undangan."
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/90 text-gray-900 font-bold px-6 py-3 rounded-full text-sm hover:bg-white transition-colors transform hover:scale-105"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
              {/* Info */}
              <div className="p-6">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {template.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-3">{template.name}</h3>
                <p className="text-gray-500 text-sm mt-1">Template kustomisasi penuh</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-10 md:p-12 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Tidak menemukan yang cocok?</h3>
            <p className="text-gray-400 mb-8">Kami bisa membuat desain custom sesuai keinginan Anda.</p>
            <a
              href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20ingin%20desain%20undangan%20custom."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-cyan-600 text-[#0a0a1a] font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined">chat</span>
              Request Custom Design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
