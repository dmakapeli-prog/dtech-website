"use client";

import { useState, useRef, useEffect } from "react";

const getAutoReply = (message) => {
  const msg = message.toLowerCase();
  
  if (msg.includes("harga") || msg.includes("biaya") || 
      msg.includes("tarif") || msg.includes("berapa")) {
    return "Harga layanan DiCode mulai dari:\n\n" +
      "🌐 Website Bisnis: mulai Rp 300.000\n" +
      "💌 Undangan Digital: mulai Rp 299.000\n\n" +
      "Untuk info harga lengkap dan paket detail, " +
      "kunjungi halaman Harga kami atau hubungi " +
      "kami langsung! 😊";
  }
  
  if (msg.includes("template") || msg.includes("desain") || 
      msg.includes("contoh")) {
    return "DiCode punya 10+ template siap pakai:\n\n" +
      "🍽️ Kuliner & Resto\n" +
      "🏢 Company Profile\n" +
      "🛒 E-Commerce\n" +
      "🏠 Properti\n" +
      "📋 Jasa & Layanan\n" +
      "🎓 Instansi & Edukasi\n" +
      "💌 Undangan Minimalist Elegance\n" +
      "👑 Undangan Royal Blossom\n\n" +
      "Kunjungi halaman Template untuk lihat " +
      "demo langsung! 🚀";
  }
  
  if (msg.includes("pesan") || msg.includes("order") || 
      msg.includes("beli") || msg.includes("cara")) {
    return "Cara pesan di DiCode sangat mudah:\n\n" +
      "1️⃣ Pilih template yang kamu suka\n" +
      "2️⃣ Klik tombol 'Pesan Sekarang'\n" +
      "3️⃣ Chat langsung dengan tim kami\n" +
      "4️⃣ Diskusikan kebutuhan & detail\n" +
      "5️⃣ DP 50% untuk mulai pengerjaan\n\n" +
      "Atau langsung hubungi kami via WhatsApp! 📱";
  }
  
  if (msg.includes("lama") || msg.includes("waktu") || 
      msg.includes("selesai") || msg.includes("berapa hari")) {
    return "Estimasi waktu pengerjaan DiCode:\n\n" +
      "⚡ Landing Page: 3-5 hari kerja\n" +
      "🌐 Web Multi-halaman: 1-2 minggu\n" +
      "🎨 Custom Website: 2-4 minggu\n" +
      "💌 Undangan Digital: 1-2 hari kerja\n\n" +
      "Garansi revisi 30 hari setelah selesai! ✅";
  }
  
  if (msg.includes("revisi") || msg.includes("garansi") || 
      msg.includes("ubah")) {
    return "DiCode memberikan garansi revisi 30 hari " +
      "setelah website selesai! 🎉\n\n" +
      "Selama masa garansi, kamu bisa minta " +
      "perubahan teks, gambar, warna, dan konten " +
      "tanpa biaya tambahan.\n\n" +
      "Setelah 30 hari, tersedia layanan " +
      "pasca-garansi dengan harga terjangkau. 💪";
  }
  
  if (msg.includes("undangan") || msg.includes("pernikahan") || 
      msg.includes("nikah") || msg.includes("wedding")) {
    return "DiCode punya layanan Undangan Digital " +
      "premium! 💌\n\n" +
      "✨ Tersedia 2 template:\n" +
      "• Minimalist Elegance (Paket Basic)\n" +
      "• Royal Blossom (Paket Premium)\n\n" +
      "Fitur: countdown timer, RSVP form, " +
      "galeri foto, music player & amplop digital.\n\n" +
      "Harga mulai Rp 299.000. Mau lihat demo? 😊";
  }
  
  if (msg.includes("kontak") || msg.includes("hubungi") || 
      msg.includes("whatsapp") || msg.includes("wa")) {
    return "Hubungi tim DiCode:\n\n" +
      "📱 WhatsApp: +62 819-9652-2114\n" +
      "📧 Email: dicode.indonesia@gmail.com\n" +
      "📍 Lokasi: Sukabumi, Jawa Barat\n\n" +
      "Kami siap membantu 24/7! Klik tombol " +
      "di bawah untuk chat langsung 👇";
  }
  
  if (msg.includes("bayar") || msg.includes("payment") || 
      msg.includes("transfer") || msg.includes("dp")) {
    return "Sistem pembayaran DiCode:\n\n" +
      "💳 DP 50% di awal pengerjaan\n" +
      "💳 Pelunasan 50% setelah selesai\n\n" +
      "Metode pembayaran:\n" +
      "• Transfer Bank (BCA, Mandiri, BRI)\n" +
      "• QRIS\n" +
      "• Dompet Digital (GoPay, OVO, Dana)\n\n" +
      "Mudah dan aman! 🔒";
  }

  if (msg.includes("portofolio") || msg.includes("hasil") || 
      msg.includes("karya") || msg.includes("project")) {
    return "Lihat hasil karya DiCode di halaman " +
      "Portofolio kami! 🎨\n\n" +
      "DiCode telah mengerjakan berbagai project " +
      "mulai dari website kuliner, company profile, " +
      "e-commerce, hingga undangan digital premium.\n\n" +
      "Kunjungi halaman Portofolio untuk " +
      "melihat demo langsung! 🚀";
  }
  
  if (msg.includes("halo") || msg.includes("hai") || 
      msg.includes("hello") || msg.includes("hi") ||
      msg.includes("selamat")) {
    return "Halo! 👋 Selamat datang di DiCode!\n\n" +
      "Saya DiCode AI, asisten virtual yang siap " +
      "membantu Anda. Anda bisa tanya tentang:\n\n" +
      "💰 Harga & paket layanan\n" +
      "🎨 Template yang tersedia\n" +
      "📋 Cara pemesanan\n" +
      "⏱️ Estimasi waktu pengerjaan\n" +
      "💌 Undangan digital\n\n" +
      "Ada yang bisa saya bantu? 😊";
  }
  
  // Default reply
  return "Terima kasih sudah menghubungi DiCode! 😊\n\n" +
    "Untuk pertanyaan lebih detail, tim kami " +
    "siap membantu via WhatsApp:\n\n" +
    "📱 +62 819-9652-2114\n\n" +
    "Atau klik tombol di bawah untuk chat " +
    "langsung dengan tim kami! 👇";
};

export default function DiCodeAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Halo! 👋 Saya DiCode AI, asisten virtual DiCode. Saya siap membantu Anda mengetahui lebih lanjut tentang layanan kami.\n\nAnda bisa tanya tentang:\n- Layanan & harga website\n- Template yang tersedia\n- Proses pemesanan\n- Undangan digital\n\nAda yang bisa saya bantu? 😊",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const sendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMsg = { 
      role: "user", 
      content: input,
      time: new Date().toLocaleTimeString('id-ID', 
        {hour: '2-digit', minute: '2-digit'})
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const reply = getAutoReply(userMsg.content);
    
    setMessages(prev => [...prev, {
      role: "assistant",
      content: reply,
      time: new Date().toLocaleTimeString('id-ID', 
        {hour: '2-digit', minute: '2-digit'})
    }]);
    
    setIsLoading(false);
  };

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300 animate-[pulse_2s_ease-in-out_3]"
        title="Tanya DiCode AI"
      >
        <span className="text-2xl">🤖</span>
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-gray-900"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[90vw] md:w-[350px] h-[70vh] md:h-[500px] bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-[0_0_15px_rgba(0,217,255,0.15)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                  🤖
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-transparent animate-pulse"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">DiCode AI</h3>
                <p className="text-white/80 text-xs">Online & Siap Membantu</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div className="flex items-end gap-2 max-w-[85%]">
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      🤖
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                      msg.role === "user"
                        ? "bg-cyan-600 text-white rounded-br-none"
                        : "bg-gray-800 text-white border border-white/5 rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 mt-1 mx-8">
                  {formatTime()}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-end gap-2 max-w-[85%]">
                <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                  🤖
                </div>
                <div className="p-3 bg-gray-800 text-white border border-white/5 rounded-2xl rounded-bl-none flex gap-1 items-center h-10">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-gray-900 border-t border-white/10">
            <div className="mb-3">
              <a
                href="https://wa.me/6281996522114"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full py-2.5 flex items-center justify-center text-sm font-medium transition-colors"
              >
                💬 Chat Langsung via WhatsApp
              </a>
            </div>
            <form onSubmit={sendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pesan Anda..."
                className="flex-1 bg-gray-800 text-white text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/5"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white flex-shrink-0 disabled:opacity-50 transition-opacity"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
