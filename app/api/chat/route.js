import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(request) {
  try {
    const { messages } = await request.json();
    
    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      system: `Kamu adalah DiCode AI, asisten virtual dari DiCode - agensi digital yang menyediakan jasa pembuatan website profesional dan undangan digital premium.
      
      Informasi DiCode:
      - Layanan: Website Bisnis, Undangan Digital
      - Harga Website: mulai Rp 300.000
      - Harga Undangan Digital: mulai Rp 299.000
      - Garansi revisi: 30 hari
      - WhatsApp: 6281996522114
      - Lokasi: Sukabumi, Jawa Barat
      - Template tersedia: Kuliner, E-Commerce, Company Profile, Jasa, Properti, Portofolio, Katalog, Instansi, Undangan Minimalist Elegance, Undangan Royal Blossom
      
      Selalu jawab dalam Bahasa Indonesia yang ramah dan profesional. Jawaban singkat dan jelas, maksimal 3-4 kalimat. Jika pertanyaan di luar layanan DiCode, arahkan ke WhatsApp.
      Jangan pernah sebut nama AI lain.`,
      messages: messages
    });
    
    return Response.json({ 
      content: response.content[0].text 
    });
  } catch (error) {
    console.error("Error from Anthropic API:", error);
    return Response.json({ content: "Maaf, terjadi gangguan pada server kami. Silakan hubungi via WhatsApp." }, { status: 500 });
  }
}
