"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function EdukasiDemo() {
  const waOrderLink = "https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Instansi%20Publik%20&%20Edukasi";
  const contactPhone = "(0266) 123-456";

  useEffect(() => {
    const reveals = document.querySelectorAll(`.${styles.reveal}`);
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add(styles.active);
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className={styles.container}>
      {/* 1. TOP BAR */}
      <div className={styles.topBar}>
        <Link href="/template" className={styles.topBarLink}>
          &larr; Kembali ke Template
        </Link>
        <a href={waOrderLink} target="_blank" rel="noreferrer" className={styles.topBarOrder}>
          Pesan Template Ini &rarr;
        </a>
      </div>

      {/* 2. TOP INFO BAR */}
      <div className={styles.infoBar}>
        <div className={styles.infoContainer}>
          <div className={styles.infoLeft}>Selamat Datang di Website Resmi SMAN 1 Sukabumi</div>
          <div className={styles.infoRight}>
            <span className="material-symbols-outlined">call</span>
            {contactPhone}
          </div>
        </div>
      </div>

      {/* 3. NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className="material-symbols-outlined" style={{color: '#0066FF', fontSize: '32px'}}>local_police</span>
            <span className={styles.logoText}>SMAN 1 Sukabumi</span>
          </div>
          <div className={styles.navMenu}>
            <a href="#beranda">Beranda</a>
            <a href="#profil">Profil</a>
            <a href="#berita">Berita</a>
            <a href="#pengumuman">Pengumuman</a>
            <a href="#ppdb">PPDB</a>
            <a href="#kontak">Kontak</a>
          </div>
          <a href="#ppdb" className={styles.btnGreen}>
            PPDB 2025
          </a>
        </div>
      </nav>

      {/* 4. HERO */}
      <section id="beranda" className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContent} ${styles.reveal}`}>
          <div className={styles.heroBadge}>
            🏫 Sekolah Unggulan Kota Sukabumi
          </div>
          <h1 className={styles.heroTitle}>Mencetak Generasi Unggul &amp; Berkarakter</h1>
          <p className={styles.heroSub}>
            SMAN 1 Sukabumi berkomitmen memberikan pendidikan berkualitas tinggi dengan fasilitas modern dan tenaga pengajar berpengalaman.
          </p>
          <div className={styles.heroBtns}>
            <a href="#ppdb" className={styles.btnGreenLg}>
              Daftar PPDB 2025
            </a>
            <a href="#profil" className={styles.btnOutlineWhite}>
              Profil Sekolah
            </a>
          </div>
        </div>
      </section>

      {/* 5. STATS BAR */}
      <div className={styles.statsWrapper}>
        <div className={`${styles.statsContainer} ${styles.reveal}`}>
          {[
            { value: "1.200+", label: "Siswa Aktif", icon: "school" },
            { value: "80+", label: "Tenaga Pengajar", icon: "group" },
            { value: "45+", label: "Tahun Berdiri", icon: "history_edu" },
            { value: "98%", label: "Tingkat Kelulusan", icon: "workspace_premium" },
          ].map((stat, i) => (
            <div key={i} className={styles.statBox}>
              <span className="material-symbols-outlined" style={{color: '#0066FF', fontSize: '40px', marginBottom: '16px'}}>{stat.icon}</span>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. BERITA TERBARU */}
      <section id="berita" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Berita &amp; Pengumuman Terbaru</h2>
        </div>
        <div className={styles.newsGrid}>
          {[
            {
              badge: "Prestasi", badgeColor: "#10B981", date: "5 Juni 2026",
              title: "SMAN 1 Sukabumi Raih Juara 1 OSN Tingkat Provinsi",
              desc: "Siswa kami berhasil meraih juara pertama dalam Olimpiade Sains Nasional...",
              img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
            },
            {
              badge: "Pengumuman", badgeColor: "#0066FF", date: "1 Juni 2026",
              title: "Jadwal PPDB Tahun Ajaran 2026/2027 Telah Dibuka",
              desc: "Pendaftaran Peserta Didik Baru resmi dibuka mulai tanggal 1 Juni 2026...",
              img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
            },
            {
              badge: "Kegiatan", badgeColor: "#F59E0B", date: "2 Mei 2026",
              title: "Peringatan Hari Pendidikan Nasional 2026",
              desc: "Seluruh civitas akademika SMAN 1 Sukabumi mengikuti upacara Hardiknas...",
              img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80"
            }
          ].map((news, i) => (
            <div key={i} className={`${styles.newsCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.newsImgWrapper}>
                <img src={news.img} alt={news.title} className={styles.newsImg} />
                <div className={styles.newsBadge} style={{backgroundColor: news.badgeColor}}>{news.badge}</div>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <span className="material-symbols-outlined" style={{fontSize: '16px'}}>calendar_today</span>
                  {news.date}
                </div>
                <h3 className={styles.newsTitle}>{news.title}</h3>
                <p className={styles.newsDesc}>{news.desc}</p>
                <a href="#berita" className={styles.newsLink}>Baca Selengkapnya &rarr;</a>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.centerBtn} ${styles.reveal}`}>
          <a href="#berita" className={styles.btnOutlineBlue}>Lihat Semua Berita</a>
        </div>
      </section>

      {/* 7. PPDB SECTION */}
      <section id="ppdb" className={`${styles.ppdbSection} ${styles.reveal}`}>
        <div className={styles.ppdbContainer}>
          <div className={styles.ppdbHeader}>
            <h2 className={styles.ppdbTitle}>Penerimaan Peserta Didik Baru 2026/2027</h2>
            <p className={styles.ppdbSub}>Daftarkan putra-putri Anda sekarang!</p>
          </div>
          <div className={styles.ppdbGrid}>
            {[
              { step: "Step 1", title: "Pendaftaran Online", date: "1-30 Juni 2026", icon: "how_to_reg" },
              { step: "Step 2", title: "Seleksi & Verifikasi", date: "1-10 Juli 2026", icon: "fact_check" },
              { step: "Step 3", title: "Pengumuman Hasil", date: "15 Juli 2026", icon: "campaign" },
            ].map((step, i) => (
              <div key={i} className={styles.ppdbCard}>
                <div className={styles.ppdbIcon}>
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                <div className={styles.ppdbStepLabel}>{step.step}</div>
                <h3 className={styles.ppdbCardTitle}>{step.title}</h3>
                <p className={styles.ppdbCardDate}>{step.date}</p>
              </div>
            ))}
          </div>
          <div className={styles.centerBtn} style={{marginTop: '40px'}}>
            <a href="#ppdb" className={styles.btnWhiteBlue}>Daftar Sekarang</a>
          </div>
        </div>
      </section>

      {/* 8. FASILITAS */}
      <section id="fasilitas" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Fasilitas Unggulan Kami</h2>
        </div>
        <div className={styles.facilityGrid}>
          {[
            { title: "Laboratorium IPA", desc: "Peralatan modern & lengkap", icon: "science" },
            { title: "Perpustakaan Digital", desc: "10.000+ koleksi buku", icon: "local_library" },
            { title: "Lapangan Olahraga", desc: "Standar nasional", icon: "sports_basketball" },
            { title: "Studio Seni & Musik", desc: "Ruang kreatif siswa", icon: "palette" },
            { title: "Lab Komputer", desc: "60 unit PC terbaru", icon: "computer" },
            { title: "Kantin Sehat", desc: "Makanan bergizi & terjangkau", icon: "restaurant" },
          ].map((fac, i) => (
            <div key={i} className={`${styles.facilityCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className={styles.facilityIcon}>
                <span className="material-symbols-outlined">{fac.icon}</span>
              </div>
              <div className={styles.facilityInfo}>
                <h3 className={styles.facilityTitle}>{fac.title}</h3>
                <p className={styles.facilityDesc}>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONI */}
      <section className={`${styles.section} ${styles.bgLightGray}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Kata Alumni &amp; Orang Tua Siswa</h2>
        </div>
        <div className={styles.testimonialGrid}>
          {[
            {
              name: "Budi Santoso", role: "Alumni 2020",
              text: "SMAN 1 Sukabumi membentuk karakter saya. Kini saya berhasil masuk UI berkat bimbingan guru-guru terbaik di sini!"
            },
            {
              name: "Ibu Sari Dewi", role: "Orang Tua Siswa",
              text: "Sekolah yang sangat baik. Anak saya berkembang pesat secara akademik maupun karakter selama belajar di sini."
            },
            {
              name: "Ahmad Rizki", role: "Alumni 2022",
              text: "Ekstrakurikuler yang beragam membantu saya menemukan passion di bidang sains. Terima kasih SMAN 1 Sukabumi!"
            }
          ].map((testi, i) => (
            <div key={i} className={`${styles.testiCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.stars}>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className={styles.testiText}>&quot;{testi.text}&quot;</p>
              <div className={styles.testiAuthorInfo}>
                <div className={styles.testiAvatarPlaceholder}>
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <div className={styles.testiName}>{testi.name}</div>
                  <div className={styles.testiRole}>{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer id="kontak" className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <span className="material-symbols-outlined" style={{fontSize: '32px'}}>local_police</span>
              SMAN 1 Sukabumi
            </div>
            <p className={styles.footerDesc}>Mencetak generasi unggul, berprestasi, dan berkarakter mulia untuk masa depan bangsa yang lebih baik.</p>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Tautan Cepat</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#profil">Tentang Kami</a></li>
              <li><a href="#layanan">Layanan Akademik</a></li>
              <li><a href="#ppdb">Info PPDB</a></li>
              <li><a href="#berita">Berita &amp; Artikel</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Kontak Kami</h4>
            <ul className={styles.footerContactInfo}>
              <li>
                <span className="material-symbols-outlined">location_on</span>
                Jl. R.A. Kartini No. 1, Sukabumi
              </li>
              <li>
                <span className="material-symbols-outlined">call</span>
                (0266) 123-456
              </li>
              <li>
                <span className="material-symbols-outlined">mail</span>
                info@sman1sukabumi.sch.id
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Copyright 2026 SMAN 1 Sukabumi. All rights reserved.</p>
          <p>Website dibuat oleh <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noreferrer" className={styles.footerDtech}>DTech</a></p>
        </div>
      </footer>

      {/* 11. FLOATING WA BUTTON */}
      <a href="https://wa.me/6281996522114" target="_blank" rel="noreferrer" className={styles.floatingWA}>
        <span className="material-symbols-outlined" style={{fontSize: '32px'}}>chat</span>
      </a>
    </div>
  );
}
