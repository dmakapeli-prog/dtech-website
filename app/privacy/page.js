export default function PrivacyPage() {
  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8 text-sm">Terakhir Diperbarui: Juni 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Pendahuluan</h2>
              <p>
                MakDev ("kami", "milik kami", atau "kita") menghormati privasi Anda dan berkomitmen
                untuk melindungi data pribadi Anda. Kebijakan privasi ini akan memberi tahu Anda
                bagaimana kami menjaga data pribadi Anda ketika Anda mengunjungi website kami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Data yang Kami Kumpulkan</h2>
              <p className="mb-2">Kami dapat mengumpulkan, menggunakan, dan menyimpan berbagai jenis data pribadi tentang Anda sebagai berikut:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Data Identitas: nama depan, nama belakang.</li>
                <li>Data Kontak: alamat email, nomor telepon (WhatsApp).</li>
                <li>Data Transaksi: rincian tentang pembayaran dan proyek dari Anda.</li>
                <li>Data Proyek: materi, foto, teks yang Anda berikan untuk pembuatan website atau undangan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Bagaimana Kami Menggunakan Data Anda</h2>
              <p className="mb-2">Kami hanya akan menggunakan data pribadi Anda ketika hukum mengizinkan. Biasanya, kami menggunakan data pribadi Anda dalam keadaan berikut:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ketika kami perlu melakukan kontrak proyek yang akan atau telah kami buat dengan Anda.</li>
                <li>Ketika kami perlu membalas pesan dan pertanyaan konsultasi Anda.</li>
                <li>Untuk memenuhi kebutuhan penyelesaian pembuatan website dan undangan digital Anda.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Keamanan Data</h2>
              <p>
                Kami telah menerapkan langkah-langkah keamanan yang tepat untuk mencegah data pribadi Anda 
                hilang secara tidak sengaja, digunakan, atau diakses dengan cara yang tidak sah, diubah atau diungkapkan. 
                Data proyek Anda hanya akan diakses oleh tim internal yang bertugas menyelesaikannya.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau praktik privasi kami, silakan hubungi kami di:
                <br />
                <br />
                Email: makdev.indonesia@gmail.com
                <br />
                WhatsApp: +62 819-9652-2114
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
