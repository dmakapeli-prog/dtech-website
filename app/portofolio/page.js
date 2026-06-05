"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, name: "TechCorp Modernization", category: "Website", desc: "Redesign website perusahaan teknologi", image: "/assets/port-web-1.png" },
  { id: 2, name: "Rina & Budi", category: "Undangan Digital", desc: "Undangan pernikahan tema rustic premium", image: "/assets/port-inv-1.png" },
  { id: 3, name: "Global Finance", category: "Website", desc: "Company profile untuk firma konsultan", image: "/assets/port-web-2.png" },
  { id: 4, name: "Sarah & Ahmad", category: "Undangan Digital", desc: "Undangan pernikahan minimalis elegan", image: "/assets/port-inv-2.png" }
];

const filters = ["Semua", "Website", "Undangan Digital"];

export default function PortofolioPage() {
  const [filter, setFilter] = useState("Semua");
  const filtered = filter === "Semua" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Portofolio <span className="text-gradient">Kami</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Beberapa proyek terbaik yang telah kami kerjakan untuk klien dari berbagai industri.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                  : "glass-card text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="relative h-60 flex items-center justify-center bg-[#0a0a1a] overflow-hidden border-b border-white/10">
                <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  project.category === "Website" ? "text-primary bg-primary/10" : "text-accent bg-accent/10"
                }`}>
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-3">{project.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-10 md:p-12 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Ingin proyek Anda berikutnya?</h3>
            <p className="text-gray-400 mb-8">Diskusikan kebutuhan digital Anda bersama tim DTech.</p>
            <a
              href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20untuk%20berdiskusi%20tentang%20proyek."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
            >
              <span className="material-symbols-outlined">chat</span>
              Mulai Proyek Baru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
