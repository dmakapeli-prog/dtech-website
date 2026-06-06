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

export default function MinimalistEleganceDemo() {
  const countdown = useCountdown("2025-06-14T08:00:00");
  const [rsvpData, setRsvpData] = useState({ nama: "", kehadiran: "hadir", jumlah: "1", pesan: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FEFCF8] text-gray-800" style={{ fontFamily: "'Georgia', serif" }}>
      {/* Floating Buttons */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/template" className="bg-white/90 backdrop-blur-md text-gray-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all border border-gray-200" style={{ fontFamily: "system-ui" }}>
          ← Kembali ke Template
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Minimalist%20Elegance." target="_blank" rel="noreferrer" className="bg-[#7C3AED] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-purple-700 transition-all" style={{ fontFamily: "system-ui" }}>
          Pesan Template Ini
        </a>
      </div>

      {/* Hero / Cover */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute top-10 left-10 text-6xl opacity-20">🌿</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 transform rotate-180">🌿</div>
        <div className="absolute top-20 right-20 text-4xl opacity-15">🌸</div>
        <div className="absolute bottom-20 left-20 text-4xl opacity-15">🌸</div>

        <div className="text-center relative z-10">
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-6">The Wedding Of</p>
          <h1 className="text-5xl md:text-7xl font-normal text-gray-800 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
            Rizky
          </h1>
          <p className="text-3xl md:text-4xl text-[#C9A96E] my-4">&</p>
          <h1 className="text-5xl md:text-7xl font-normal text-gray-800 mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            Amanda
          </h1>
          <div className="w-20 h-px bg-[#C9A96E] mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg">Sabtu, 14 Juni 2025</p>
          <a href="#detail" className="inline-block mt-10 border border-[#C9A96E] text-[#C9A96E] px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-[#C9A96E] hover:text-white transition-all">
            Buka Undangan
          </a>
        </div>
      </section>

      {/* Ayat */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-4xl text-[#C9A96E] mb-6">🕊️</p>
          <p className="text-gray-600 italic leading-relaxed text-lg">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
          </p>
          <p className="text-gray-400 text-sm mt-4">— QS. Ar-Rum: 21</p>
        </div>
      </section>

      {/* Mempelai */}
      <section className="py-20 bg-[#FEFCF8] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[#C9A96E]/20 to-[#FEFCF8] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border-2 border-[#C9A96E]/20">
                🤵
              </div>
              <h3 className="text-2xl text-gray-800 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Rizky Ramadhan</h3>
              <p className="text-gray-500 text-sm">Putra pertama dari<br/>Bpk. Ahmad Fauzi & Ibu Siti Nurhaliza</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[#C9A96E]/20 to-[#FEFCF8] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border-2 border-[#C9A96E]/20">
                👰
              </div>
              <h3 className="text-2xl text-gray-800 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Amanda Putri</h3>
              <p className="text-gray-500 text-sm">Putri kedua dari<br/>Bpk. Hendra Wijaya & Ibu Ratna Dewi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Acara */}
      <section id="detail" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl text-gray-800 mb-16" style={{ fontFamily: "'Georgia', serif" }}>Detail Acara</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center border border-[#C9A96E]/20 rounded-2xl p-8 bg-[#FEFCF8]">
              <p className="text-3xl mb-4">💍</p>
              <h3 className="text-xl text-gray-800 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Akad Nikah</h3>
              <p className="text-gray-600 text-sm mb-1">Sabtu, 14 Juni 2025</p>
              <p className="text-[#C9A96E] font-bold mb-4">08.00 - 10.00 WIB</p>
              <p className="text-gray-500 text-sm">Gedung Serbaguna<br/>Jl. Pelabuhan Ratu No. 45<br/>Sukabumi, Jawa Barat</p>
            </div>
            <div className="text-center border border-[#C9A96E]/20 rounded-2xl p-8 bg-[#FEFCF8]">
              <p className="text-3xl mb-4">🎉</p>
              <h3 className="text-xl text-gray-800 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Resepsi</h3>
              <p className="text-gray-600 text-sm mb-1">Sabtu, 14 Juni 2025</p>
              <p className="text-[#C9A96E] font-bold mb-4">11.00 - 14.00 WIB</p>
              <p className="text-gray-500 text-sm">Gedung Serbaguna<br/>Jl. Pelabuhan Ratu No. 45<br/>Sukabumi, Jawa Barat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-20 bg-[#FEFCF8] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-gray-800 mb-10" style={{ fontFamily: "'Georgia', serif" }}>Menghitung Hari</h2>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(countdown).map(([label, val]) => (
              <div key={label} className="bg-white border border-[#C9A96E]/20 rounded-2xl p-4">
                <div className="text-3xl md:text-4xl font-bold text-[#C9A96E]">{val}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1 capitalize">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-gray-800 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Lokasi Acara</h2>
          <p className="text-gray-500 mb-8">Gedung Serbaguna, Sukabumi, Jawa Barat</p>
          <div className="rounded-2xl overflow-hidden border border-[#C9A96E]/20 h-64 bg-gradient-to-br from-[#C9A96E]/5 to-[#FEFCF8] flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl mb-3">📍</p>
              <p className="text-gray-500 text-sm">Gedung Serbaguna</p>
              <p className="text-gray-400 text-xs">Jl. Pelabuhan Ratu No. 45, Sukabumi</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm text-[#C9A96E] border border-[#C9A96E] px-4 py-2 rounded-full hover:bg-[#C9A96E] hover:text-white transition-all">
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-20 bg-[#FEFCF8] px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-center text-3xl text-gray-800 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Konfirmasi Kehadiran</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Mohon konfirmasi kehadiran Anda sebelum 7 Juni 2025</p>
          {submitted ? (
            <div className="text-center bg-white border border-[#C9A96E]/20 rounded-2xl p-10">
              <p className="text-4xl mb-4">💌</p>
              <h3 className="text-xl text-gray-800 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Terima Kasih!</h3>
              <p className="text-gray-500 text-sm">Konfirmasi kehadiran Anda telah kami terima.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-[#C9A96E]/20 rounded-2xl p-8 space-y-5" style={{ fontFamily: "system-ui" }}>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Nama Lengkap</label>
                <input type="text" required value={rsvpData.nama} onChange={(e) => setRsvpData({ ...rsvpData, nama: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Konfirmasi Kehadiran</label>
                <select value={rsvpData.kehadiran} onChange={(e) => setRsvpData({ ...rsvpData, kehadiran: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white">
                  <option value="hadir">Ya, Saya Akan Hadir</option>
                  <option value="tidak">Maaf, Saya Tidak Bisa Hadir</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Jumlah Tamu</label>
                <select value={rsvpData.jumlah} onChange={(e) => setRsvpData({ ...rsvpData, jumlah: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white">
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Ucapan & Doa</label>
                <textarea value={rsvpData.pesan} onChange={(e) => setRsvpData({ ...rsvpData, pesan: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition h-24 resize-none" placeholder="Tulis ucapan untuk kedua mempelai..." />
              </div>
              <button type="submit" className="w-full bg-[#C9A96E] text-white font-bold py-3 rounded-xl hover:bg-[#B89A5D] transition-all">
                Kirim Konfirmasi
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white text-center px-4">
        <p className="text-gray-400 text-sm mb-2">Merupakan suatu kehormatan dan kebahagiaan apabila</p>
        <p className="text-gray-400 text-sm mb-6">Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.</p>
        <h3 className="text-2xl text-gray-800 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Rizky & Amanda</h3>
        <p className="text-[#C9A96E] text-sm">14 Juni 2025</p>
        <div className="w-20 h-px bg-[#C9A96E]/30 mx-auto my-6"></div>
        <p className="text-xs text-gray-300">Demo template oleh <span className="text-[#C9A96E]">DTech</span></p>
      </footer>
    </div>
  );
}
