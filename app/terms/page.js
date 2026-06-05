export default function TermsPage() {
  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8 text-sm">Terakhir Diperbarui: Juni 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Persetujuan Layanan</h2>
              <p>
                Dengan mengakses website DTech dan menggunakan jasa kami, Anda setuju untuk terikat 
                oleh Syarat dan Ketentuan Layanan ini, serta semua hukum dan peraturan yang berlaku. 
                Jika Anda tidak setuju dengan salah satu ketentuan ini, Anda dilarang menggunakan atau mengakses situs ini atau layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Layanan Pembuatan Website dan Undangan</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>DTech menyediakan layanan pembuatan website untuk UMKM/Perusahaan dan Undangan Digital.</li>
                <li>Klien bertanggung jawab untuk menyediakan materi (teks, gambar, logo) yang sah dan tidak melanggar hak cipta pihak ketiga.</li>
                <li>Estimasi waktu pengerjaan dimulai setelah klien menyerahkan seluruh materi yang dibutuhkan dan membayar Down Payment (DP).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Pembayaran dan Kebijakan Refund</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pembayaran dilakukan dengan skema DP 50% di awal dan pelunasan 50% setelah proyek selesai.</li>
                <li>Proyek akan diserahkan/dionlinekan kepada klien HANYA setelah pelunasan 100% dibayarkan.</li>
                <li>DP tidak dapat dikembalikan (non-refundable) apabila pembatalan proyek dilakukan oleh pihak Klien setelah proses desain berjalan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Revisi</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kami menyediakan maksimal 2-3 kali revisi minor tergantung paket yang dipilih.</li>
                <li>Revisi minor mencakup perubahan teks, warna minor, dan penggantian gambar.</li>
                <li>Revisi yang mengubah struktur desain (mayor) akan dikenakan biaya tambahan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Batasan Tanggung Jawab</h2>
              <p>
                Dalam keadaan apa pun DTech tidak bertanggung jawab atas kerugian (termasuk, tanpa batasan, 
                kerugian atas hilangnya data atau keuntungan, atau karena gangguan bisnis) yang timbul dari 
                penggunaan atau ketidakmampuan untuk menggunakan layanan dari DTech.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
