"use client";

import { useState, useRef, useEffect } from "react";

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

  async function sendMessage(e) {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.content,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi gangguan. Silakan hubungi kami langsung via WhatsApp.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

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
