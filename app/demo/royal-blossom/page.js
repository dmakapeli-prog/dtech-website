"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
          jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
          menit: Math.floor((diff / (1000 * 60)) % 60),
          detik: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

export default function RoyalBlossomDemo() {
  const countdown = useCountdown("2025-07-20T09:00:00");
  const [rsvpData, setRsvpData] = useState({ nama: "", kehadiran: "hadir", jumlah: "1", pesan: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/template" className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-white/20 transition-all border border-white/20" style={{ fontFamily: "system-ui" }}>
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Royal%20Blossom." target="_blank" rel="noreferrer" className="bg-[#7C3AED] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-purple-700 transition-all" style={{ fontFamily: "system-ui" }}>
          Pesan Template Ini
        </a>
      </div>

      {/* Music Player */}
      <button onClick={() => setIsPlaying(!isPlaying)} className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/30 transition-all backdrop-blur-md">
        {isPlaying ? "⏸" : "🎵"}
      </button>

      {/* Hero / Cover */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-10 text-[#D4AF37]">✿</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 text-[#D4AF37] transform rotate-180">✿</div>
        <div className="absolute top-1/4 right-10 text-4xl opacity-10 text-[#D4AF37]">❀</div>
        <div className="absolute bottom-1/4 left-10 text-4xl opacity-10 text-[#D4AF37]">❀</div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px]"></div>

        <div className="text-center relative z-10">
          <p className="text-sm tracking-[0.3em] text-[#D4AF37]/60 uppercase mb-8">The Wedding Of</p>
          <h1 className="text-5xl md:text-7xl font-normal text-white mb-2">
            Bagas
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-px bg-[#D4AF37]/30"></div>
            <p className="text-3xl text-[#D4AF37]">&</p>
            <div className="w-16 h-px bg-[#D4AF37]/30"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-normal text-white mb-10">
            Cantika
          </h1>
          <p className="text-[#D4AF37]/60 text-sm tracking-widest">Minggu, 20 Juli 2025</p>
          <a href="#detail" className="inline-block mt-12 border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all">
            Buka Undangan
          </a>
        </div>
      </section>

      {/* Ayat */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-4xl text-[#D4AF37] mb-6">❀</p>
          <p className="text-gray-400 italic leading-relaxed text-lg">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
          </p>
          <p className="text-[#D4AF37]/50 text-sm mt-4">— QS. Ar-Rum: 21</p>
        </div>
      </section>

      {/* Mempelai */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[#D4AF37]/20 to-[#0D0D0D] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border-2 border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/10">
                🤵
              </div>
              <h3 className="text-2xl text-white mb-2">Bagas Aditya Pratama</h3>
              <p className="text-gray-500 text-sm">Putra kedua dari<br/>Bpk. Drs. Surya Atmaja & Ibu Yuni Kartini</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[#D4AF37]/20 to-[#0D0D0D] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border-2 border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/10">
                👰
              </div>
              <h3 className="text-2xl text-white mb-2">Cantika Maharani</h3>
              <p className="text-gray-500 text-sm">Putri pertama dari<br/>Bpk. Ir. Rahmat Hidayat & Ibu Sri Mulyani</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Acara */}
      <section id="detail" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-center text-3xl text-white mb-16">Detail Acara</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-8 backdrop-blur-md">
              <p className="text-3xl mb-4">💍</p>
              <h3 className="text-xl text-[#D4AF37] mb-4">Akad Nikah</h3>
              <p className="text-gray-400 text-sm mb-1">Minggu, 20 Juli 2025</p>
              <p className="text-[#D4AF37] font-bold mb-4">09.00 - 11.00 WIB</p>
              <p className="text-gray-500 text-sm">Villa Bunga Indah<br/>Jl. Raya Puncak KM 85<br/>Bogor, Jawa Barat</p>
            </div>
            <div className="text-center bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-8 backdrop-blur-md">
              <p className="text-3xl mb-4">🎉</p>
              <h3 className="text-xl text-[#D4AF37] mb-4">Resepsi</h3>
              <p className="text-gray-400 text-sm mb-1">Minggu, 20 Juli 2025</p>
              <p className="text-[#D4AF37] font-bold mb-4">12.00 - 16.00 WIB</p>
              <p className="text-gray-500 text-sm">Villa Bunga Indah<br/>Jl. Raya Puncak KM 85<br/>Bogor, Jawa Barat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-white mb-10">Menghitung Hari</h2>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(countdown).map(([label, val]) => (
              <div key={label} className="bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-4 backdrop-blur-md">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">{val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 capitalize">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-center text-3xl text-white mb-10">Galeri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["💐", "🌹", "🌺", "🌻", "💮", "🌷"].map((emoji, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-[#D4AF37]/10 to-[#0D0D0D] rounded-2xl border border-[#D4AF37]/10 flex items-center justify-center text-5xl hover:scale-105 transition-transform cursor-pointer">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-white mb-4">Lokasi Acara</h2>
          <p className="text-gray-500 mb-8">Villa Bunga Indah, Bogor, Jawa Barat</p>
          <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 h-64 bg-gradient-to-br from-[#D4AF37]/5 to-[#0D0D0D] flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl mb-3">📍</p>
              <p className="text-gray-400 text-sm">Villa Bunga Indah</p>
              <p className="text-gray-500 text-xs">Jl. Raya Puncak KM 85, Bogor</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm text-[#D4AF37] border border-[#D4AF37] px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all">
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent"></div>
        <div className="max-w-lg mx-auto relative z-10">
          <h2 className="text-center text-3xl text-white mb-4">Konfirmasi Kehadiran</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Mohon konfirmasi kehadiran Anda sebelum 13 Juli 2025</p>
          {submitted ? (
            <div className="text-center bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-10 backdrop-blur-md">
              <p className="text-4xl mb-4">💌</p>
              <h3 className="text-xl text-white mb-2">Terima Kasih!</h3>
              <p className="text-gray-500 text-sm">Konfirmasi kehadiran Anda telah kami terima.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-8 space-y-5 backdrop-blur-md" style={{ fontFamily: "system-ui" }}>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Nama Lengkap</label>
                <input type="text" required value={rsvpData.nama} onChange={(e) => setRsvpData({ ...rsvpData, nama: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition placeholder-gray-600" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Konfirmasi Kehadiran</label>
                <select value={rsvpData.kehadiran} onChange={(e) => setRsvpData({ ...rsvpData, kehadiran: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition">
                  <option value="hadir" className="bg-[#1a1a1a]">Ya, Saya Akan Hadir</option>
                  <option value="tidak" className="bg-[#1a1a1a]">Maaf, Saya Tidak Bisa Hadir</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Jumlah Tamu</label>
                <select value={rsvpData.jumlah} onChange={(e) => setRsvpData({ ...rsvpData, jumlah: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition">
                  <option value="1" className="bg-[#1a1a1a]">1 Orang</option>
                  <option value="2" className="bg-[#1a1a1a]">2 Orang</option>
                  <option value="3" className="bg-[#1a1a1a]">3 Orang</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Ucapan & Doa</label>
                <textarea value={rsvpData.pesan} onChange={(e) => setRsvpData({ ...rsvpData, pesan: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition h-24 resize-none placeholder-gray-600" placeholder="Tulis ucapan untuk kedua mempelai..." />
              </div>
              <button type="submit" className="w-full bg-[#D4AF37] text-[#0D0D0D] font-bold py-3 rounded-xl hover:bg-[#C5A028] transition-all">
                Kirim Konfirmasi
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center px-4 border-t border-white/5">
        <p className="text-gray-600 text-sm mb-2">Merupakan suatu kehormatan dan kebahagiaan apabila</p>
        <p className="text-gray-600 text-sm mb-6">Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.</p>
        <h3 className="text-2xl text-white mb-2">Bagas & Cantika</h3>
        <p className="text-[#D4AF37] text-sm">20 Juli 2025</p>
        <div className="w-20 h-px bg-[#D4AF37]/30 mx-auto my-6"></div>
        <p className="text-xs text-gray-700">Demo template oleh <span className="text-[#D4AF37]">DTech</span></p>
      </footer>
    </div>
  );
}
