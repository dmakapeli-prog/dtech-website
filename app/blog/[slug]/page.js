import Link from "next/link";
import { articles } from "../data";
import { notFound } from "next/navigation";

// Generate metadata dynamically
export function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return { title: "Not Found" };
  
  return {
    title: `${article.title} | Blog DiCode`,
    description: article.excerpt,
  };
}

// Full content data
const getArticleContent = (slug) => {
  const contentMap = {
    "alasan-bisnis-butuh-website": `## Pendahuluan
Di era digital yang serba cepat ini, cara konsumen mencari informasi dan berbelanja telah berubah secara drastis. Jika dulu orang mencari rekomendasi dari mulut ke mulut atau brosur, kini lebih dari 80% konsumen mencari produk atau layanan melalui mesin pencari seperti Google sebelum melakukan pembelian. 

Bagi Usaha Mikro, Kecil, dan Menengah (UMKM) serta bisnis lokal, beradaptasi dengan perubahan ini bukanlah sebuah pilihan, melainkan keharusan untuk bertahan. Memiliki website profesional adalah langkah pertama dan paling krusial dalam membangun pondasi digital yang kuat. Berikut adalah 5 alasan utama mengapa bisnis Anda wajib memiliki website di tahun 2025.

## 1. Meningkatkan Kredibilitas dan Kepercayaan Profesional
Kesan pertama sangatlah penting. Di mata konsumen modern, bisnis yang tidak memiliki website seringkali dianggap kurang profesional atau bahkan tidak kredibel. Website bertindak sebagai kantor atau etalase digital Anda yang buka 24/7. Dengan desain yang menarik, informasi yang jelas, dan alamat domain resmi (seperti www.namabisnis.com), Anda langsung memancarkan aura profesionalisme. Hal ini membuat calon pelanggan merasa lebih aman dan percaya untuk bertransaksi dengan Anda.

## 2. Visibilitas 24/7 Tanpa Batas Geografis
Toko fisik memiliki jam operasional terbatas dan hanya dapat menjangkau orang-orang yang berada di sekitarnya. Sebaliknya, sebuah website bekerja untuk Anda tanpa henti. Kapanpun calon pelanggan mencari produk Anda, siang atau malam, website Anda selalu siap memberikan informasi. Selain itu, jangkauan pasar Anda tidak lagi dibatasi oleh jarak. Anda bisa mendapatkan pelanggan dari kota lain, pulau lain, bahkan negara lain, membuka peluang pertumbuhan eksponensial yang mustahil dicapai hanya dengan toko offline.

## 3. Strategi Pemasaran yang Jauh Lebih Efisien dan Murah
Dibandingkan dengan metode periklanan tradisional seperti cetak brosur, pasang iklan di koran, atau billboard, website adalah investasi pemasaran yang jauh lebih efektif dan murah dalam jangka panjang. Anda dapat memperbarui informasi, meluncurkan promosi baru, atau menambah katalog produk kapan saja tanpa biaya tambahan. Digabungkan dengan teknik SEO (Search Engine Optimization), website Anda dapat mendatangkan trafik organik secara gratis dari orang-orang yang memang sedang mencari apa yang Anda tawarkan.

## 4. Memenangkan Persaingan dari Kompetitor
Coba perhatikan kompetitor di industri Anda. Kemungkinan besar, mereka yang sukses telah memiliki kehadiran online yang solid. Jika kompetitor Anda memiliki website sementara Anda hanya mengandalkan media sosial atau offline, Anda telah tertinggal satu langkah. Pelanggan cenderung memilih bisnis yang informasinya paling mudah diakses. Memiliki website dengan performa cepat dan responsif akan menempatkan Anda di depan pesaing yang belum menyadari pentingnya transformasi digital.

## 5. Pusat Kendali Utama untuk Brand Anda
Banyak bisnis merasa cukup dengan memiliki akun Instagram atau TikTok. Namun, perlu diingat bahwa Anda tidak memiliki kontrol penuh atas platform media sosial tersebut. Algoritma bisa berubah kapan saja, atau terburuknya, akun Anda bisa ditutup tanpa peringatan. Website adalah properti digital yang Anda miliki sepenuhnya (100% control). Anda bebas menentukan desain, mengatur struktur informasi, dan mengumpulkan data pelanggan secara langsung tanpa terikat pada aturan platform pihak ketiga.

## Kesimpulan
Memiliki website bukan lagi sekadar tren, melainkan infrastruktur dasar bagi bisnis yang ingin tumbuh dan relevan. Jangan biarkan bisnis Anda tertinggal di era digital ini. Berinvestasilah pada website profesional dan lihat bagaimana hal tersebut dapat mentransformasi cara Anda menjangkau dan melayani pelanggan.`,

    "undangan-digital-vs-fisik": `## Era Baru Berbagi Kabar Bahagia
Pernikahan adalah momen sakral yang perayaannya selalu disiapkan dengan matang, termasuk dalam hal mengundang tamu. Selama berpuluh-puluh tahun, undangan fisik berupa kertas bercetak indah telah menjadi standar. Namun, dengan kemajuan teknologi dan pergeseran gaya hidup ke arah serba digital, undangan digital kini muncul sebagai alternatif yang sangat populer. 

Banyak calon pengantin yang bingung memilih: apakah harus tetap menggunakan undangan fisik yang tradisional, atau beralih sepenuhnya ke undangan digital yang modern? Mari kita bedah perbandingan antara keduanya dari berbagai sisi untuk membantu Anda mengambil keputusan yang paling tepat.

## 1. Segi Biaya: Ekonomis vs Premium
**Undangan Digital:** Jelas merupakan pemenang dalam hal efisiensi biaya. Anda hanya perlu membayar satu kali pembuatan template (biasanya mulai dari Rp 100.000 hingga Rp 500.000) dan dapat disebarkan ke ribuan orang tanpa tambahan biaya cetak, amplop, atau ongkos kirim.
**Undangan Fisik:** Biayanya dihitung per *piece*. Semakin banyak tamu, semakin besar biaya yang dikeluarkan. Belum lagi jika Anda memilih material kertas premium, foil emas, atau embos, harganya bisa melonjak tajam hingga puluhan ribu rupiah per lembarnya.

## 2. Kecepatan dan Kepraktisan Distribusi
**Undangan Digital:** Sangat praktis! Hanya dengan satu klik, undangan Anda bisa sampai ke kerabat yang berada di luar kota atau bahkan luar negeri dalam hitungan detik via WhatsApp atau Email. Anda juga bisa mengedit kesalahan penulisan gelar atau tanggal acara secara *real-time* tanpa perlu mencetak ulang.
**Undangan Fisik:** Membutuhkan waktu ekstra untuk menulis nama satu per satu, menempel label, dan mengantarkannya secara langsung atau melalui jasa ekspedisi. Proses ini sangat menyita waktu dan tenaga di tengah sibuknya persiapan pernikahan.

## 3. Fitur Interaktif dan Manajemen Tamu
**Undangan Digital:** Menawarkan pengalaman interaktif yang tidak bisa diberikan oleh kertas. Fitur seperti peta lokasi dengan integrasi Google Maps, galeri foto pre-wedding, penghitung waktu mundur (countdown), *backsound* musik romantis, hingga fitur RSVP otomatis dan amplop digital (QRIS) membuat undangan digital sangat fungsional.
**Undangan Fisik:** Sifatnya statis. Peta lokasi seringkali sulit dibaca jika salah desain, dan konfirmasi kehadiran (RSVP) harus dilakukan secara manual melalui pesan teks yang terkadang membuat repot pencatatan tamu.

## 4. Kesan, Sentuhan Personal, dan Kenang-kenangan
**Undangan Fisik:** Di sinilah undangan fisik unggul. Ada nilai emosional dan sentuhan personal saat seseorang menerima undangan berwujud fisik. Bau kertas, tekstur embos, dan pita yang menghiasinya memberikan kesan elegan dan eksklusif. Bagi orang tua atau kerabat yang lebih sepuh, menerima undangan fisik dianggap lebih sopan dan menghargai.
**Undangan Digital:** Terkadang dianggap kurang formal atau terlalu kasual oleh sebagian kalangan konservatif. Meskipun desainnya elegan, pengalaman *unboxing* secara digital tidak bisa menggantikan sensasi membuka amplop fisik.

## 5. Dampak Lingkungan (Eco-Friendly)
**Undangan Digital:** 100% ramah lingkungan. Tidak ada pohon yang ditebang untuk kertas, tidak ada tinta kimia, dan tidak ada jejak karbon dari proses pengiriman barang. Ini adalah pilihan tepat bagi pasangan yang peduli pada isu kelestarian alam (Go Green).
**Undangan Fisik:** Membutuhkan banyak kertas yang pada akhirnya sebagian besar akan berujung di tempat sampah setelah acara selesai, menghasilkan limbah yang tidak sedikit.

## Kesimpulan: Mana yang Lebih Baik?
Tidak ada jawaban tunggal karena semuanya bergantung pada kebutuhan, anggaran, dan budaya keluarga Anda. Banyak pasangan modern saat ini mengambil **jalan tengah (Hybrid)**: mencetak undangan fisik dalam jumlah terbatas (misal 50-100 lembar) khusus untuk keluarga inti, atasan kerja, dan kolega VIP sebagai bentuk penghormatan, sementara sisa ratusan teman, sahabat, dan kerabat jauh dikirimkan undangan digital. Dengan cara ini, Anda bisa menghemat anggaran namun tetap menjaga kesopanan dan memanfaatkan fitur canggih dari undangan digital!`,

    "tingkatkan-penjualan-umkm-digital": `## Potensi Besar di Ujung Jari
Banyak pemilik UMKM (Usaha Mikro, Kecil, dan Menengah) yang masih ragu untuk membawa bisnis mereka ke ranah digital. Alasan yang sering muncul adalah "bisnis saya masih kecil", "gaptek (gagap teknologi)", atau "takut biayanya mahal". Padahal, di Indonesia sendiri, terdapat lebih dari 200 juta pengguna internet aktif yang menghabiskan rata-rata 7 jam sehari di dunia maya. Ini adalah pasar yang sangat masif!

Kehadiran digital bukan lagi monopoli perusahaan besar. Justru, teknologi digital memberikan "senjata" bagi UMKM untuk bersaing di level yang sama. Jika Anda ingin meningkatkan omzet dan mengembangkan skala bisnis, berikut adalah strategi jitu yang bisa langsung Anda terapkan.

## 1. Miliki "Rumah" Digital Anda Sendiri (Website)
Media sosial memang penting, tapi itu ibarat Anda menyewa lapak di tanah orang lain. Anda butuh "rumah" milik sendiri, yaitu Website. Memiliki website UMKM memberikan Anda kontrol penuh atas branding, katalog produk, dan data pelanggan.
- **Tampilkan Katalog Jelas:** Buat halaman produk atau layanan yang informatif dengan foto berkualitas dan harga yang transparan.
- **Permudah Cara Beli:** Sediakan tombol "Beli Sekarang" yang langsung mengarah ke WhatsApp atau sistem checkout terintegrasi agar pelanggan tidak perlu bingung.
- **Manfaatkan SEO Lokal:** Optimasi website Anda untuk pencarian lokal (misal: "Katering enak di Bandung") agar ketika orang sekitar mencari jasa tersebut di Google, website Anda muncul di urutan atas.

## 2. Maksimalkan Google Profil Bisnis (Google My Business)
Ini adalah langkah gratis dengan dampak luar biasa bagi bisnis lokal. Jika Anda punya toko fisik, restoran, atau jasa layanan di area tertentu, mendaftar di Google Profil Bisnis adalah kewajiban.
- **Tampil di Google Maps:** Pastikan titik lokasi, jam buka, dan nomor kontak akurat.
- **Kumpulkan Review Bintang 5:** Minta pelanggan yang puas untuk meninggalkan ulasan. Review positif di Google sangat mempengaruhi keputusan calon pembeli baru.
- **Update Berkala:** Unggah foto produk terbaru atau promo ke profil Google Anda seperti halnya update status di media sosial.

## 3. Strategi Konten Media Sosial yang Relevan
Pilih 1 atau 2 platform media sosial yang paling sesuai dengan target pasar Anda (misalnya Instagram untuk visual/makanan, TikTok untuk menjangkau Gen Z, atau Facebook untuk demografi lebih dewasa).
- **Edukasi, Bukan Sekadar Jualan (Hard Selling):** Konsumen cepat bosan jika timeline Anda isinya hanya "Beli produk saya!". Buat konten edukasi, *behind the scene* (proses pembuatan produk), atau tips yang berkaitan dengan bisnis Anda.
- **Konsistensi:** Posting secara teratur (misalnya 3 kali seminggu) lebih baik daripada posting 10 kali dalam sehari lalu menghilang sebulan.

## 4. Beriklan Cerdas dengan Target yang Tepat (Ads)
Jika ada sedikit anggaran pemasaran, cobalah gunakan Facebook/Instagram Ads atau Google Ads. Keunggulan iklan digital adalah Anda bisa membidik audiens dengan sangat spesifik.
- **Targeting Spesifik:** Anda bisa mengatur agar iklan hanya muncul pada "Wanita usia 25-35 tahun, tinggal di Jakarta Selatan, yang tertarik pada kosmetik organik".
- **Mulai dari Budget Kecil:** Anda bisa mulai beriklan hanya dengan Rp 50.000 per hari, mengukur hasilnya, lalu menaikkan budget jika iklan tersebut terbukti mendatangkan penjualan.

## 5. Bangun Database Pelanggan dan Lakukan Retargeting
Seringkali, biaya untuk mendapatkan pelanggan baru lebih mahal daripada membuat pelanggan lama kembali membeli.
- **Kumpulkan Kontak:** Tawarkan diskon 10% untuk pembelian pertama jika pelanggan mau meninggalkan nomor WhatsApp atau Email.
- **Follow-Up (Remarketing):** Kirimkan pesan *broadcast* secara berkala (jangan terlalu sering agar tidak menjadi spam) tentang produk baru, promo khusus member, atau ucapan selamat ulang tahun.

## Langkah Selanjutnya
Meningkatkan penjualan melalui jalur digital tidak terjadi dalam semalam. Butuh konsistensi, *trial and error*, dan kemauan untuk terus belajar. Mulailah dari langkah paling dasar: buat profil bisnis yang jelas, bangun website sederhana namun profesional, dan mulai berinteraksi dengan audiens Anda. Kehadiran digital yang konsisten pasti akan membuahkan hasil berupa peningkatan omzet yang signifikan.`,

    "panduan-memilih-template-website": `## Membangun Website Tanpa Ribet
Membuat website dari nol (custom code) memang memberikan fleksibilitas maksimal, namun prosesnya memakan waktu lama dan biaya yang sangat besar, seringkali tidak efisien bagi UMKM atau pemula. Solusi terbaik dan terpopuler saat ini adalah menggunakan *Template* atau tema website siap pakai.

Namun, di luar sana ada ribuan template yang tersedia. Salah memilih template bisa berakibat pada website yang lambat, sulit dikustomisasi, atau tidak sesuai dengan identitas bisnis Anda. Agar tidak salah langkah, berikut adalah panduan komprehensif dalam memilih template website yang sempurna untuk bisnis Anda.

## 1. Pahami Tujuan Utama Website Anda
Sebelum melihat-lihat desain, tentukan dulu apa fungsi utama website Anda:
- **Toko Online (E-Commerce):** Anda butuh template yang berfokus pada katalog produk, keranjang belanja, integrasi *payment gateway*, dan fitur pencarian yang kuat.
- **Company Profile / Jasa:** Pilih template yang menonjolkan halaman "Tentang Kami", "Layanan", testimoni klien, dan formulir kontak yang jelas.
- **Portofolio:** Untuk desainer, fotografer, atau agensi, pilih template dengan layout *grid* atau *masonry* yang menonjolkan visual/gambar beresolusi tinggi.
- **Blog / Media:** Fokus pada *readability* (keterbacaan teks), struktur navigasi kategori, dan ruang untuk menampilkan iklan.

## 2. Responsivitas (Mobile-Friendly) adalah Harga Mati
Saat ini, lebih dari 60% trafik internet berasal dari perangkat seluler (HP). Jika template Anda terlihat cantik di laptop namun berantakan saat dibuka di HP, Anda akan kehilangan lebih dari separuh potensi pelanggan.
- **Cara Cek:** Sebelum membeli atau mengunduh template, buka halaman *Live Demo*-nya di HP Anda. Pastikan tombol mudah ditekan, teks dapat dibaca tanpa perlu di-zoom, dan menu navigasi berfungsi dengan baik di layar kecil.

## 3. Kecepatan Loading (Performa)
Template dengan banyak animasi rumit, *slider* raksasa, dan elemen mencolok memang terlihat keren, tapi seringkali ukurannya sangat berat. Website yang *loading*-nya lebih dari 3 detik akan ditinggalkan oleh 53% pengunjungnya.
- **Prioritaskan Kesederhanaan:** Pilih template dengan desain yang *clean* dan minimalis.
- **Uji Kecepatan:** Gunakan *tools* gratis seperti Google PageSpeed Insights atau GTmetrix. Masukkan URL demo template ke sana dan lihat skor performanya. Pilih template yang mendapat skor hijau (di atas 80).

## 4. Kemudahan Kustomisasi (Fleksibilitas)
Anda tentu tidak ingin website Anda terlihat persis 100% sama dengan ribuan orang lain yang membeli template tersebut. Anda perlu menyesuaikan warna, font, dan logo dengan *brand identity* (identitas merek) Anda.
- Pastikan template mendukung fitur *Theme Options* atau *Customizer* yang intuitif, sehingga Anda bisa mengubah warna tombol atau jenis huruf tanpa harus mengerti bahasa pemrograman (koding).

## 5. Dukungan Pengembang (Support) dan Pembaruan
Dunia teknologi web terus berkembang. Browser di-update, standar keamanan berubah. Template yang sudah tidak di-update oleh pembuatnya selama bertahun-tahun sangat rentan terhadap *error* dan serangan *hacker*.
- **Cek Tanggal Update Terakhir:** Pastikan template tersebut di-update setidaknya dalam 6 bulan terakhir.
- **Cek Reputasi Developer:** Baca ulasan/review dari pembeli lain. Apakah pembuat template (developer) responsif menjawab pertanyaan atau keluhan saat ada *bug*?

## 6. Kompatibilitas dengan Plugin Penting (Untuk WordPress/CMS)
Jika Anda menggunakan CMS seperti WordPress, pastikan template tersebut kompatibel dengan plugin-plugin esensial yang akan Anda gunakan.
- Misalnya, jika Anda ingin membuat toko online, pastikan template tersebut memiliki keterangan "WooCommerce Ready".
- Jika Anda ingin membangun halaman dengan mudah dengan metode *drag-and-drop*, pastikan template tersebut kompatibel dengan *Page Builder* populer seperti Elementor atau Divi.

## Kesimpulan
Memilih template website sama seperti memilih lokasi toko fisik; butuh pertimbangan matang. Jangan hanya tergiur oleh tampilan luar yang cantik di halaman demo. Pertimbangkan fungsionalitas, kecepatan, dan dukungan teknisnya. Dengan meluangkan waktu ekstra di awal untuk riset, Anda akan menyelamatkan diri dari pusing kepala dan biaya tambahan di masa depan.`,

    "pentingnya-website-responsif": `## Pergeseran Perilaku Pengguna Internet
Coba ingat-ingat, perangkat apa yang paling sering Anda gunakan untuk mencari informasi di Google, berbelanja *online*, atau membaca berita setiap harinya? Kemungkinan besar jawabannya adalah *smartphone* atau ponsel pintar yang sedang Anda genggam saat ini.

Faktanya, menurut data global terbaru, lebih dari 60% hingga 70% lalu lintas (*traffic*) website dunia kini berasal dari perangkat *mobile*. Era di mana orang harus duduk di depan komputer meja untuk berselancar di internet sudah lama lewat. Pergeseran perilaku ini melahirkan satu standar tak tertulis namun mutlak dalam dunia web development: Website Anda HARUS responsif. Apa itu, dan mengapa sangat krusial bagi bisnis Anda? Mari kita bahas.

## Apa itu Website Responsif?
Website responsif (*Responsive Web Design* / RWD) adalah pendekatan desain di mana tampilan halaman web akan secara otomatis beradaptasi (menyesuaikan diri) dengan ukuran layar perangkat yang digunakan oleh pengunjung. 

Baik dibuka melalui monitor PC ukuran 27 inci, layar laptop 14 inci, tablet, hingga layar HP berukuran 5 inci, website akan tetap terlihat rapi, mudah dibaca, dan berfungsi dengan sempurna tanpa mengharuskan pengguna melakukan *zoom-in* (mencubit layar) atau menggeser layar ke kanan-kiri (*horizontal scrolling*).

## 1. Memberikan Pengalaman Pengguna (UX) yang Prima
Pengalaman pengguna adalah segalanya. Jika calon pelanggan membuka website bisnis Anda lewat HP dan menemukan teks yang sangat kecil, tombol yang sulit ditekan, atau gambar yang terpotong, mereka akan merasa frustrasi. Akibatnya? Mereka akan langsung menekan tombol "Back" dan beralih ke website kompetitor Anda yang lebih rapi. Website yang responsif memastikan pengunjung merasa nyaman membaca informasi dan mudah melakukan tindakan (seperti menekan tombol "Beli" atau mengisi formulir kontak) di perangkat apa pun.

## 2. Sangat Disukai oleh Algoritma Google (SEO Friendly)
Sejak beberapa tahun lalu, Google telah menerapkan kebijakan **Mobile-First Indexing**. Artinya, Google kini menggunakan versi *mobile* (HP) dari sebuah website sebagai patokan utama untuk menentukan peringkat di hasil pencarian. 

Jika website Anda tidak responsif dan buruk saat diakses via HP, Google akan memberikan penalti dengan menurunkan peringkat website Anda. Sebaliknya, website yang sangat *mobile-friendly* akan mendapatkan dorongan peringkat (*ranking boost*), membuatnya lebih mudah ditemukan oleh calon pelanggan di halaman pertama pencarian.

## 3. Meningkatkan Konversi Penjualan secara Signifikan
Desain yang responsif menghilangkan hambatan atau *friction* dalam proses transaksi. Bayangkan seseorang sedang di dalam kereta, melihat iklan produk Anda di Instagram, lalu mengkliknya. Jika website Anda responsif, mereka bisa langsung membaca deskripsi produk, memilih ukuran, dan menyelesaikan pembayaran dengan mudah hanya menggunakan satu jempol. Kemudahan navigasi ini berbanding lurus dengan peningkatan persentase konversi (*Conversion Rate*) — dari pengunjung biasa menjadi pembeli.

## 4. Hemat Biaya dan Waktu Perawatan (Maintenance)
Dulu, sebelum teknologi responsif populer, banyak perusahaan harus membuat dua website terpisah: satu versi Desktop (www.namabisnis.com) dan satu versi khusus HP (m.namabisnis.com). Pendekatan ini sangat merepotkan dan mahal karena Anda harus membayar dua kali lipat untuk pengembangan, dan setiap kali ingin meng-update artikel atau produk, Anda harus melakukannya di dua sistem yang berbeda.

Dengan desain responsif, Anda hanya memiliki SATU website, satu sistem pengelolaan konten (CMS), dan satu alamat domain. Setiap perubahan yang Anda buat akan langsung teraplikasi di semua perangkat secara otomatis. Jauh lebih hemat waktu, biaya *maintenance*, dan sangat efisien!

## Kesimpulan
Di tahun 2025 ini, memiliki website yang tidak responsif sama halnya dengan memiliki toko fisik namun pintunya hanya bisa dimasuki oleh sebagian orang saja. Desain responsif bukan lagi fitur mewah atau "nilai tambah", melainkan standar wajib yang tidak bisa ditawar. Pastikan pondasi digital bisnis Anda dibangun di atas desain yang adaptif dan siap menyambut pelanggan dari layar manapun mereka berasal.`,

    "kesalahan-membuat-website-bisnis": `## Langkah Awal yang Krusial
Memutuskan untuk membuat website bagi bisnis Anda adalah langkah maju yang sangat tepat. Namun, antusiasme yang tinggi seringkali membuat pemilik bisnis—terutama yang baru pertama kali merambah dunia digital—terburu-buru dan melewatkan detail-detail penting.

Alih-alih menjadi mesin pendatang profit, website yang salah konsep malah bisa merugikan kredibilitas bisnis dan membuang-buang anggaran pemasaran. Untuk memastikan investasi Anda memberikan hasil maksimal, mari kita bedah 7 kesalahan fatal yang paling sering dilakukan saat membangun website bisnis pertama, dan bagaimana cara Anda menghindarinya.

## 1. Tidak Memiliki Tujuan yang Jelas
Kesalahan paling mendasar adalah membuat website hanya karena "ikut-ikutan" atau karena merasa "semua bisnis harus punya". Jika Anda tidak tahu apa tujuan spesifik website tersebut, pengunjung pun akan kebingungan.
- **Solusi:** Tetapkan *goal* utama sebelum mulai mendesain. Apakah untuk menjual produk langsung (E-commerce)? Mengumpulkan *leads* atau daftar kontak? Atau sekadar sebagai brosur digital untuk *branding*? Desain dan struktur halaman harus berpusat pada satu tujuan utama tersebut.

## 2. Desain yang Terlalu Ramai dan Rumit
Banyak pemula ingin memasukkan semua elemen ke dalam halaman depan: teks berjalan (*marquee*), animasi yang berlebihan, musik latar (*background music*), hingga warna-warni yang mencolok mata. Ini bukan tahun 2005. Desain yang terlalu "berisik" terlihat tidak profesional dan membuat pengunjung pusing.
- **Solusi:** Terapkan prinsip *Minimalism*. Gunakan *whitespace* (ruang kosong) agar konten bisa "bernapas". Pilih palet warna yang harmonis (maksimal 3-4 warna) yang sesuai dengan logo Anda, dan gunakan font yang bersih dan mudah dibaca seperti Sans-Serif.

## 3. Pesan Utama yang Tidak Jelas (Value Proposition Buruk)
Pengunjung internet sangat tidak sabar. Jika dalam 5 detik pertama mereka tidak paham apa yang Anda jual dan mengapa mereka harus peduli, mereka akan pergi. Seringkali, website dipenuhi dengan jargon industri yang rumit namun gagal menjelaskan manfaat nyata bagi pelanggan.
- **Solusi:** Di bagian paling atas (*Header/Hero Section*), tulis satu kalimat headline yang kuat, jelas, dan langsung menohok ke permasalahan (*pain point*) audiens, diikuti dengan sub-headline yang menjelaskan solusi yang Anda tawarkan. Gunakan bahasa sehari-hari yang mudah dicerna.

## 4. Mengabaikan Kecepatan Loading (Performa Lambat)
Anda mengunggah foto produk beresolusi 4K dengan ukuran 5MB per gambar? Bersiaplah kehilangan pelanggan. Website yang memuat lebih dari 3 detik akan ditinggalkan oleh mayoritas pengunjung. Mesin pencari seperti Google juga sangat membenci website lambat.
- **Solusi:** Selalu kompres ukuran gambar sebelum diunggah (idealnya di bawah 200KB per gambar). Gunakan format modern seperti WebP. Hindari penggunaan plugin atau *script* pihak ketiga yang tidak perlu.

## 5. Navigasi Berantakan seperti Labirin
Menu navigasi yang terlalu banyak, tersembunyi, atau memiliki nama yang aneh (misal menggunakan kata "Portal Rahasia" alih-alih "Tentang Kami") membuat pengunjung tersesat dan kesulitan mencari informasi penting seperti kontak atau harga.
- **Solusi:** Buat navigasi yang sederhana dan logis. Menu standar seperti "Beranda, Layanan/Produk, Portofolio, Tentang Kami, dan Kontak" sudah sangat cukup. Pastikan struktur informasinya mengalir secara natural.

## 6. Lupa Menyertakan Call-to-Action (CTA) yang Kuat
Website Anda sudah cantik dan cepat, pengunjung sudah membaca semua penawaran Anda, tapi lalu... apa? Kesalahan besar adalah tidak memberi tahu pengunjung langkah apa yang harus mereka ambil selanjutnya. Jangan biarkan mereka menebak.
- **Solusi:** Letakkan tombol Call-to-Action (CTA) yang mencolok di setiap halaman strategis. Gunakan kata kerja yang mengajak, seperti "Beli Sekarang", "Konsultasi Gratis via WhatsApp", atau "Unduh Katalog". Pastikan tombol CTA menggunakan warna yang kontras dengan latar belakang.

## 7. Menganggap Website Selesai Begitu Saja ("Set It and Forget It")
Banyak pemilik bisnis merasa tugasnya selesai ketika website sudah *live*, lalu membiarkannya terbengkalai berbulan-bulan tanpa pembaruan. Website ibarat tanaman, ia perlu disiram dan dirawat agar terus menghasilkan buah (trafik dan penjualan).
- **Solusi:** Lakukan *maintenance* rutin. Perbarui artikel blog, tambah portofolio baru, update harga jika ada perubahan, dan pastikan sistem keamanan (SSL dan versi CMS) selalu yang terbaru. Gunakan Google Analytics untuk memantau perilaku pengunjung dan terus lakukan perbaikan (*A/B Testing*) berdasarkan data tersebut.

Menghindari ketujuh kesalahan di atas akan menempatkan website Anda di posisi yang jauh lebih kuat dibandingkan mayoritas bisnis kecil di luar sana. Ingat, website adalah aset digital berharga; bangunlah dengan strategi yang matang!`
  };
  return contentMap[slug] || "Konten artikel belum tersedia.";
};

export default function BlogPostDetail({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  const content = getArticleContent(article.slug);

  const getGradientAndEmoji = (category) => {
    switch (category) {
      case "Website": return { gradient: "from-blue-900 to-blue-600", emoji: "🌐", badgeClass: "bg-blue-500/10 text-blue-400 border-blue-500/20" };
      case "Undangan Digital": return { gradient: "from-pink-900 to-rose-600", emoji: "💌", badgeClass: "bg-pink-500/10 text-pink-400 border-pink-500/20" };
      case "Tips Bisnis": return { gradient: "from-green-900 to-emerald-600", emoji: "💼", badgeClass: "bg-green-500/10 text-green-400 border-green-500/20" };
      case "Tutorial": return { gradient: "from-purple-900 to-fuchsia-600", emoji: "📚", badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20" };
      default: return { gradient: "from-gray-900 to-gray-600", emoji: "📄", badgeClass: "bg-gray-500/10 text-gray-400 border-gray-500/20" };
    }
  };

  const { gradient, emoji, badgeClass } = getGradientAndEmoji(article.category);
  
  // Related articles
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const parsedContent = content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold mt-10 mb-4 text-white">${line.replace('## ', '')}</h2>`;
      } else if (line.trim() === '') {
        return '<br/>';
      } else if (line.startsWith('- ')) {
        return `<li class="ml-4 mb-2 text-gray-300">${line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</li>`;
      } else {
        return `<p class="text-gray-300 leading-relaxed mb-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</p>`;
      }
    })
    .join('');

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 text-sm font-medium">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Kembali ke Blog
        </Link>

        {/* Article Header */}
        <div className="mb-8 text-center md:text-left">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${badgeClass}`}>
            {article.badge}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              {article.date}
            </div>
            <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              {article.readTime}
            </div>
            <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">person</span>
              Tim DiCode
            </div>
          </div>
        </div>

        {/* Hero Image / Placeholder */}
        <div className={`w-full h-[300px] md:h-[400px] rounded-3xl mb-12 flex items-center justify-center shadow-2xl bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <span className="text-8xl md:text-9xl filter drop-shadow-2xl animate-[pulse_3s_ease-in-out_infinite]">{emoji}</span>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        {/* Article Content - Prose */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-img:rounded-2xl prose-hr:border-white/10 mb-16">
          <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_30px_rgba(6,182,212,0.1)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Butuh Website Profesional?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Tingkatkan kredibilitas bisnis Anda dan raih lebih banyak pelanggan dengan website profesional. Hubungi DiCode sekarang dan dapatkan konsultasi gratis!
            </p>
            <a 
              href="https://wa.me/6281996522114?text=Halo%20DiCode,%20saya%20sudah%20membaca%20artikel%20blog%20dan%20ingin%20berkonsultasi%20pembuatan%20website" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-1"
            >
              Konsultasi Gratis 
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl font-bold text-white mb-8">Artikel Terkait</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((relArticle) => {
                const relStyle = getGradientAndEmoji(relArticle.category);
                return (
                  <Link href={`/blog/${relArticle.slug}`} key={relArticle.id} className="group flex flex-col sm:flex-row gap-4 bg-gray-900/50 p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                    <div className={`w-full sm:w-32 h-32 rounded-xl flex-shrink-0 bg-gradient-to-br ${relStyle.gradient} flex items-center justify-center`}>
                      <span className="text-4xl group-hover:scale-110 transition-transform">{relStyle.emoji}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${relStyle.badgeClass.replace('bg-', 'text-').split(' ')[1]}`}>
                        {relArticle.category}
                      </span>
                      <h4 className="text-white font-bold text-md mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                        {relArticle.title}
                      </h4>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        {relArticle.date}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
