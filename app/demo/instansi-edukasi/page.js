"use client";
import Link from "next/link";

const berita = [
  { judul: "Peluncuran Program Beasiswa 2025", tgl: "5 Juni 2025", kat: "Pendidikan", desc: "Pemerintah daerah meluncurkan program beasiswa untuk 500 siswa berprestasi dari keluarga kurang mampu." },
  { judul: "Pembangunan Infrastruktur Jalan Desa", tgl: "2 Juni 2025", kat: "Pembangunan", desc: "Proyek pembangunan jalan desa sepanjang 15 km di wilayah selatan telah memasuki tahap akhir." },
  { judul: "Pelatihan UMKM Digital", tgl: "28 Mei 2025", kat: "Ekonomi", desc: "Sebanyak 200 pelaku UMKM mengikuti pelatihan pemasaran digital yang diselenggarakan dinas terkait." },
];

const pengumuman = [
  { judul: "Jadwal PPDB Tahun Ajaran 2025/2026", tgl: "10 Juni 2025", penting: true },
  { judul: "Penerimaan CPNS Formasi 2025", tgl: "8 Juni 2025", penting: true },
  { judul: "Jadwal Pelayanan Administrasi Kependudukan", tgl: "5 Juni 2025", penting: false },
  { judul: "Pengumuman Hasil Seleksi Bantuan Sosial", tgl: "1 Juni 2025", penting: false },
];

const layananPublik = [
  { icon: "📋", title: "Administrasi Kependudukan", desc: "Pengurusan KTP, KK, akta kelahiran, dan dokumen lainnya." },
  { icon: "🏫", title: "PPDB Online", desc: "Pendaftaran Peserta Didik Baru secara daring untuk semua jenjang." },
  { icon: "💰", title: "Bantuan Sosial", desc: "Informasi dan pendaftaran program bantuan sosial pemerintah." },
  { icon: "📊", title: "Transparansi Anggaran", desc: "Data realisasi anggaran daerah yang terbuka untuk publik." },
  { icon: "🏥", title: "Layanan Kesehatan", desc: "Informasi fasilitas kesehatan dan program kesehatan masyarakat." },
  { icon: "📝", title: "Pengaduan Masyarakat", desc: "Sampaikan aspirasi dan keluhan Anda melalui kanal resmi." },
];

export default function InstansiEdukasiDemo() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Link href="/template" className="bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all border border-gray-200">
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Instansi%20Publik." target="_blank" rel="noreferrer" className="bg-[#1E40AF] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-800 transition-all">
          Pesan Template Ini
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-[#1E40AF] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">🏛️</div>
            <span className="font-bold text-sm">PORTAL RESMI INSTANSI</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#berita" className="hover:text-blue-200 transition">Berita</a>
            <a href="#pengumuman" className="hover:text-blue-200 transition">Pengumuman</a>
            <a href="#profil" className="hover:text-blue-200 transition">Profil</a>
            <a href="#layanan" className="hover:text-blue-200 transition">Layanan</a>
          </div>
          <a href="#layanan" className="bg-white text-[#1E40AF] px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-blue-50 transition">Lihat Informasi</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1E40AF] to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">🏛️ Portal Informasi Resmi</span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Portal Informasi Resmi Instansi
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-xl">
              Menyediakan informasi terkini, layanan publik, dan transparansi pengelolaan untuk masyarakat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#layanan" className="bg-white text-[#1E40AF] font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105">
                Lihat Informasi
              </a>
              <a href="#pengumuman" className="border-2 border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-all">
                Pengumuman Terbaru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Running Text */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shrink-0">TERBARU</span>
          <p className="text-sm text-gray-700 font-medium truncate">Pendaftaran PPDB 2025/2026 telah dibuka. Silakan kunjungi menu layanan untuk informasi lebih lanjut.</p>
        </div>
      </div>

      {/* Berita */}
      <section id="berita" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#1E40AF] font-bold text-sm uppercase tracking-widest">Berita Terbaru</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Kabar & Informasi</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {berita.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                <div className="h-48 bg-gradient-to-br from-[#1E40AF]/10 to-blue-50 flex items-center justify-center">
                  <span className="text-6xl">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#1E40AF] bg-blue-50 px-3 py-1 rounded-full">{item.kat}</span>
                    <span className="text-xs text-gray-400">{item.tgl}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1E40AF] transition">{item.judul}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pengumuman */}
      <section id="pengumuman" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[#1E40AF] font-bold text-sm uppercase tracking-widest">Pengumuman</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Pengumuman Resmi</h2>
          </div>
          <div className="space-y-4">
            {pengumuman.map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  {item.penting && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">PENTING</span>}
                  <h4 className="font-semibold text-gray-900 text-sm">{item.judul}</h4>
                </div>
                <span className="text-xs text-gray-400 shrink-0 ml-4">{item.tgl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profil */}
      <section id="profil" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1E40AF] font-bold text-sm uppercase tracking-widest">Profil Institusi</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-6">Visi & Misi</h2>
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Visi</h3>
                <p className="text-gray-600 leading-relaxed">Mewujudkan tata kelola pemerintahan yang transparan, akuntabel, dan berorientasi pada pelayanan masyarakat.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Misi</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2"><span className="text-[#1E40AF]">1.</span> Meningkatkan kualitas pelayanan publik berbasis teknologi.</li>
                  <li className="flex gap-2"><span className="text-[#1E40AF]">2.</span> Mendorong partisipasi aktif masyarakat dalam pembangunan.</li>
                  <li className="flex gap-2"><span className="text-[#1E40AF]">3.</span> Mewujudkan transparansi pengelolaan anggaran daerah.</li>
                  <li className="flex gap-2"><span className="text-[#1E40AF]">4.</span> Meningkatkan akses pendidikan berkualitas untuk semua.</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1E40AF]/10 to-blue-50 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏛️</div>
                <p className="text-[#1E40AF] font-bold text-xl">Portal Resmi</p>
                <p className="text-gray-500 text-sm">Melayani Masyarakat Sejak 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Publik */}
      <section id="layanan" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1E40AF] font-bold text-sm uppercase tracking-widest">Layanan Publik</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Layanan Masyarakat</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layananPublik.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all group cursor-pointer">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-[#1E40AF] transition">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E40AF] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">🏛️ Portal Resmi Instansi</p>
          <p className="text-blue-200 text-sm">© 2025 Portal Resmi Instansi. Seluruh informasi bersifat resmi.</p>
          <p className="text-xs mt-3 text-blue-300/50">Demo template oleh <span className="text-white">DTech</span></p>
        </div>
      </footer>
    </div>
  );
}
