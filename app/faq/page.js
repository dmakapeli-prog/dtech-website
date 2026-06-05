"use client";

import { useState } from "react";

const faqData = [
  {
    category: "Seputar Jasa Website",
    icon: "web",
    color: "text-primary",
    faqs: [
      {
        q: "Berapa lama proses pembuatan website?",
        a: "Waktu pengerjaan sangat bergantung pada paket yang Anda pilih. Untuk Paket Hemat biasanya memakan waktu 3-5 hari kerja. Paket Populer sekitar 1-2 minggu, dan Paket Eksklusif bisa memakan waktu 3 minggu atau lebih tergantung kompleksitas fitur yang diminta.",
      },
      {
        q: "Apakah saya perlu menyiapkan teks dan foto sendiri?",
        a: "Ya, kami sangat menyarankan Anda menyiapkan copywriting (materi teks) dan aset visual (logo, foto produk, dll) agar website lebih sesuai dengan brand Anda. Namun, jika Anda kesulitan, kami bisa membantu memberikan rekomendasi gambar stock berkualitas gratis.",
      },
      {
        q: "Apakah saya akan mendapatkan domain .com gratis?",
        a: "Ya! Khusus untuk klien Paket Populer dan Paket Eksklusif, Anda otomatis mendapatkan gratis pendaftaran domain profesional (.com / .net / .id) untuk 1 tahun pertama. Sedangkan untuk Paket Hemat, website Anda akan di-hosting menggunakan subdomain gratis berkinerja tinggi dari Vercel (contoh: namabisnis.vercel.app), atau Anda juga bisa menghubungkannya dengan domain yang sudah Anda beli sendiri.",
      },
    ],
  },
  {
    category: "Seputar Undangan Digital",
    icon: "favorite",
    color: "text-accent",
    faqs: [
      {
        q: "Apakah tema undangannya bisa diubah warnanya?",
        a: "Tentu saja! Anda bisa memilih template yang ada, lalu kami akan menyesuaikan color palette (warna dasar) agar senada dengan warna gaun pengantin atau tema acara pernikahan Anda.",
      },
      {
        q: "Bagaimana sistem pembuatan custom nama tamu?",
        a: "Kami menggunakan sistem parameter link (contoh: domain.com/?to=Nama+Tamu). Anda cukup membagikan link tersebut via WhatsApp, dan nama tamu akan otomatis tercetak di cover depan undangan digital Anda. Kami juga bisa membuatkan generator link khusus jika diperlukan.",
      },
      {
        q: "Berapa lama pengerjaan undangan digital ini?",
        a: "Proses pengerjaan Undangan Digital sangat cepat. Untuk Paket Basic dan Premium, undangan Anda akan selesai dalam 1-2 hari kerja setelah seluruh data (teks & foto) kami terima. Sedangkan untuk Paket Eksklusif (Custom Design), waktu pengerjaannya berkisar antara 3-7 hari kerja tergantung tingkat kustomisasi desain yang diminta.",
      },
    ],
  },
  {
    category: "Kebijakan & Pembayaran",
    icon: "payments",
    color: "text-green-500",
    faqs: [
      {
        q: "Bagaimana tahapan pembayarannya?",
        a: "Kami menerapkan sistem yang aman dan transparan: DP 50% di awal sebagai tanda jadi proyek. Sisa pelunasan 50% ditransfer hanya setelah website/undangan selesai Anda review dan siap dipublikasikan.",
      },
      {
        q: "Apakah ada layanan revisi jika desainnya kurang cocok?",
        a: "Tentu. Kami memberikan maksimal 3 kali revisi minor (perubahan warna, penggantian font, tata letak teks/gambar) sebelum web diluncurkan. Untuk revisi mayor (perombakan total desain dari nol), akan didiskusikan lebih lanjut.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Pusat Bantuan & <span className="text-gradient">FAQ</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang paling sering ditanyakan oleh klien kami sebelum memulai proyek.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12 mb-16">
          {faqData.map((section, sIndex) => (
            <div key={sIndex} className="mb-12">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                <span className={`material-symbols-outlined ${section.color}`}>{section.icon}</span>
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.faqs.map((faq, fIndex) => {
                  const index = `${sIndex}-${fIndex}`;
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="glass-card rounded-2xl overflow-hidden transition-all duration-300 border border-white/5"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                      >
                        <span className="font-bold text-white pr-4">{faq.q}</span>
                        <span
                          className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      <div
                        className={`accordion-content px-6 ${
                          isOpen ? "open pb-5" : ""
                        }`}
                      >
                        <div className="text-gray-400 text-sm leading-relaxed font-normal">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-10 md:p-12 text-center shadow-xl shadow-primary/20 text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-4 relative z-10">Masih punya pertanyaan kustom?</h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto font-normal relative z-10">
            Kami mengerti setiap proyek itu unik. Jangan ragu untuk berdiskusi santai dengan tim kami secara gratis.
          </p>
          <a
            href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20punya%20pertanyaan%20kustom%20terkait%20jasa%20Anda."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative z-10"
          >
            <span className="material-symbols-outlined">chat</span>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
