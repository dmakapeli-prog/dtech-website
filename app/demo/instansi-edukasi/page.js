"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function EdukasiDemoLight() {
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
        <div className={styles.topBarLeft}>
          <span>📞 (0266) 123-456</span>
          <span className={styles.topBarDivider}>|</span>
          <span>✉ info@sman1sukabumi.sch.id</span>
        </div>
        <div className={styles.topBarRight}>
          <Link href="/template" className={styles.topBarLink}>&larr; Kembali ke Template</Link>
          <span className={styles.topBarDivider}>|</span>
          <a href="https://wa.me/6281996522114?text=Halo%20MakDev,%20saya%20tertarik%20template%20Instansi%20Publik%20&%20Edukasi" target="_blank" rel="noreferrer" className={styles.topBarLink}>
            Pesan Template Ini &rarr;
          </a>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoCircle}>
              <span className="material-symbols-outlined">school</span>
            </div>
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoTitle}>SMAN 1 Sukabumi</div>
              <div className={styles.logoSub}>Sekolah Unggulan Kota Sukabumi</div>
            </div>
          </div>
          <div className={styles.navMenu}>
            <a href="#beranda">Beranda</a>
            <a href="#profil">Profil</a>
            <a href="#akademik">Akademik</a>
            <a href="#kesiswaan">Kesiswaan</a>
            <a href="#ppdb">PPDB</a>
            <a href="#galeri">Galeri</a>
            <a href="#kontak">Kontak</a>
          </div>
          <a href="#ppdb" className={styles.btnNav}>PPDB 2026</a>
        </div>
      </nav>

      {/* 3. HERO - SLIDER STYLE */}
      <section id="beranda" className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContainer} ${styles.reveal}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>🏆 Akreditasi A</div>
            <h1 className={styles.heroTitle}>Mencetak Generasi<br/>Unggul &amp; Berkarakter</h1>
            <p className={styles.heroSub}>
              Bersama SMAN 1 Sukabumi, kami membangun fondasi pendidikan terbaik untuk masa depan cerah putra-putri Anda.
            </p>
            <div className={styles.heroBtns}>
              <a href="#ppdb" className={styles.btnGreenLg}>Daftar PPDB 2026</a>
              <a href="#profil" className={styles.btnOutlineWhite}>Lihat Profil Sekolah</a>
            </div>
          </div>
          <div className={styles.heroFloatingCard}>
            <h3 className={styles.fcTitle}>Tahun Ajaran 2026/2027</h3>
            <p className={styles.fcSub}>PPDB Dibuka: 1 Juni - 30 Juni 2026</p>
            <a href="#ppdb" className={styles.btnGreenFull}>Daftar Sekarang</a>
            <div className={styles.fcCountdown}>
              ⏳ Sisa waktu: 14 Hari Lagi
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS - COLORFUL BOXES */}
      <section className={styles.statsSection}>
        <div className={`${styles.statsGrid} ${styles.reveal}`}>
          <div className={`${styles.statBox} ${styles.statBlue}`}>
            <span className="material-symbols-outlined">groups</span>
            <div className={styles.statValue}>1.200+</div>
            <div className={styles.statLabel}>Siswa Aktif</div>
          </div>
          <div className={`${styles.statBox} ${styles.statGreen}`}>
            <span className="material-symbols-outlined">local_library</span>
            <div className={styles.statValue}>80+</div>
            <div className={styles.statLabel}>Tenaga Pengajar</div>
          </div>
          <div className={`${styles.statBox} ${styles.statGold}`}>
            <span className="material-symbols-outlined">history_edu</span>
            <div className={styles.statValue}>45+</div>
            <div className={styles.statLabel}>Tahun Berdiri</div>
          </div>
          <div className={`${styles.statBox} ${styles.statPurple}`}>
            <span className="material-symbols-outlined">workspace_premium</span>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Tingkat Kelulusan</div>
          </div>
        </div>
      </section>

      {/* 5. PENGUMUMAN & BERITA - MAGAZINE LAYOUT */}
      <section id="berita" className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.sectionHeaderFlex}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Berita &amp; Pengumuman</h2>
          <a href="#berita" className={`${styles.linkAll} ${styles.reveal}`}>Lihat Semua &rarr;</a>
        </div>
        <div className={styles.magazineGrid}>
          {/* LEFT LARGE */}
          <div className={`${styles.magLarge} ${styles.reveal}`}>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="News" className={styles.magImgLarge}/>
            <div className={styles.magLargeContent}>
              <div className={`${styles.badge} ${styles.badgeGreen}`}>Prestasi</div>
              <h3 className={styles.magLargeTitle}>SMAN 1 Sukabumi Raih Juara 1 OSN Tingkat Provinsi Jawa Barat 2026</h3>
              <div className={styles.magDate}>5 Juni 2026</div>
              <p className={styles.magDesc}>Siswa kami berhasil meraih juara pertama dalam Olimpiade Sains Nasional bidang Matematika setelah bersaing dengan ratusan peserta lainnya.</p>
              <a href="#berita" className={styles.readMore}>Baca Selengkapnya &rarr;</a>
            </div>
          </div>
          {/* RIGHT SMALL STACKED */}
          <div className={`${styles.magSmallList} ${styles.reveal}`} style={{transitionDelay: '100ms'}}>
            {[
              { badge: "Pengumuman", color: "Blue", title: "Jadwal PPDB 2026/2027 Resmi Dibuka", date: "1 Juni 2026" },
              { badge: "Kegiatan", color: "Orange", title: "Peringatan Hardiknas 2026", date: "2 Mei 2026" },
              { badge: "Prestasi", color: "Purple", title: "Tim Robotik Juara 2 Tingkat Nasional", date: "15 April 2026" },
            ].map((news, i) => (
              <div key={i} className={styles.magSmallCard}>
                <div className={`${styles.badgeSm} ${styles[`badge${news.color}`]}`}>{news.badge}</div>
                <h4 className={styles.magSmallTitle}>{news.title}</h4>
                <div className={styles.magDate}>{news.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PPDB BANNER - FULL WIDTH */}
      <section id="ppdb" className={`${styles.ppdbBanner} ${styles.reveal}`}>
        <div className={styles.ppdbContainer}>
          <div className={styles.ppdbLeft}>
            <div className={styles.ppdbYear}>PPDB 2026/2027</div>
            <h2 className={styles.ppdbBannerTitle}>Penerimaan Peserta Didik Baru</h2>
            <p className={styles.ppdbDeadline}>Ditutup: 30 Juni 2026</p>
            <a href="#ppdb" className={styles.btnGreenLg}>Daftar Online Sekarang</a>
          </div>
          <div className={styles.ppdbRight}>
            <div className={styles.stepBox}>
              <div className={styles.stepIcon}><span className="material-symbols-outlined">how_to_reg</span></div>
              <div className={styles.stepText}>Registrasi Online</div>
            </div>
            <div className={styles.stepLine}></div>
            <div className={styles.stepBox}>
              <div className={styles.stepIcon}><span className="material-symbols-outlined">fact_check</span></div>
              <div className={styles.stepText}>Verifikasi Berkas</div>
            </div>
            <div className={styles.stepLine}></div>
            <div className={styles.stepBox}>
              <div className={styles.stepIcon}><span className="material-symbols-outlined">campaign</span></div>
              <div className={styles.stepText}>Pengumuman</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FASILITAS - PHOTO GRID */}
      <section className={`${styles.section} ${styles.bgLightGray}`}>
        <h2 className={`${styles.sectionTitleCenter} ${styles.reveal}`}>Fasilitas Unggulan</h2>
        <div className={`${styles.masonryGrid} ${styles.reveal}`}>
          <div className={`${styles.masonryItem} ${styles.m1}`}>
            <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800" alt="Lab"/>
            <div className={styles.masonryOverlay}>Laboratorium IPA Modern</div>
          </div>
          <div className={`${styles.masonryItem} ${styles.m2}`}>
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80" alt="Lib"/>
            <div className={styles.masonryOverlay}>Perpustakaan Digital</div>
          </div>
          <div className={`${styles.masonryItem} ${styles.m3}`}>
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80" alt="Sports"/>
            <div className={styles.masonryOverlay}>Lapangan Olahraga</div>
          </div>
          <div className={`${styles.masonryItem} ${styles.m4}`}>
            <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80" alt="Comp"/>
            <div className={styles.masonryOverlay}>Lab Komputer</div>
          </div>
        </div>
      </section>

      {/* 8. GALERI PRESTASI */}
      <section id="akademik" className={`${styles.section} ${styles.bgWhite}`}>
        <h2 className={`${styles.sectionTitleCenter} ${styles.reveal}`}>Prestasi Membanggakan</h2>
        <div className={styles.achieveGrid}>
          {[
            { icon: "🥇", title: "Juara 1 OSN Matematika", sub: "Tingkat Provinsi 2025" },
            { icon: "🥇", title: "Juara 1 LCC", sub: "Tingkat Kabupaten 2025" },
            { icon: "🥈", title: "Juara 2 Robotik", sub: "Tingkat Nasional 2025" },
            { icon: "🥇", title: "Juara 1 Debat Bhs Inggris", sub: "Tingkat Provinsi 2024" },
            { icon: "🥇", title: "Sekolah Adiwiyata", sub: "Tingkat Nasional 2024" },
            { icon: "🥈", title: "Juara 2 Paskibraka", sub: "Tingkat Provinsi 2024" },
          ].map((achieve, i) => (
            <div key={i} className={`${styles.achieveCard} ${styles.reveal}`} style={{transitionDelay: `${i*50}ms`}}>
              <div className={styles.achieveIcon}>{achieve.icon}</div>
              <div>
                <h4 className={styles.achieveTitle}>{achieve.title}</h4>
                <p className={styles.achieveSub}>{achieve.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONI - CAROUSEL STYLE */}
      <section className={`${styles.section} ${styles.bgLightBlue}`}>
        <h2 className={`${styles.sectionTitleCenter} ${styles.reveal}`}>Kata Mereka Tentang Kami</h2>
        <div className={styles.testiGrid}>
          {[
            {
              quote: "Bersekolah di SMAN 1 Sukabumi adalah keputusan terbaik. Saya berhasil masuk Fakultas Kedokteran UI berkat bimbingan luar biasa dari para guru!",
              name: "Budi Santoso", role: "Alumni 2022, Mahasiswa FK UI", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            },
            {
              quote: "Anak saya berkembang sangat pesat di sini. Tidak hanya akademik, tapi juga karakter dan kepemimpinannya.",
              name: "Ibu Sari Rahayu", role: "Orang Tua Siswa Kelas XII", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            },
            {
              quote: "Fasilitas lengkap, guru profesional, dan lingkungan belajar yang kondusif. SMAN 1 Sukabumi layak jadi pilihan utama!",
              name: "Ahmad Fauzi", role: "Alumni 2023, Mahasiswa ITB", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
            }
          ].map((testi, i) => (
            <div key={i} className={`${styles.testiCard} ${styles.reveal}`} style={{transitionDelay: `${i*100}ms`}}>
              <span className="material-symbols-outlined" style={{color: '#1E40AF', fontSize: '48px', opacity: 0.2, marginBottom: '16px', display: 'block'}}>format_quote</span>
              <p className={styles.testiQuote}>&quot;{testi.quote}&quot;</p>
              <div className={styles.testiAuthorBox}>
                <img src={testi.img} alt={testi.name} className={styles.testiAvatar}/>
                <div>
                  <div className={styles.testiName}>{testi.name}</div>
                  <div className={styles.testiRole}>{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FOOTER - MULTI COLUMN */}
      <footer id="kontak" className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerRow1}>
            <div className={styles.footerCol}>
              <div className={styles.footerLogoWrap}>
                <span className="material-symbols-outlined" style={{fontSize: '32px', color: '#F59E0B'}}>school</span>
                <span style={{fontSize: '1.5rem', fontWeight: 800, color: '#fff'}}>SMAN 1 Sukabumi</span>
              </div>
              <p className={styles.footerDesc}>Mencetak generasi unggul & berkarakter untuk masa depan cerah bangsa Indonesia.</p>
              <div className={styles.socialBox}>
                <span className="material-symbols-outlined">thumb_up</span>
                <span className="material-symbols-outlined">photo_camera</span>
                <span className="material-symbols-outlined">smart_display</span>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#beranda">Beranda</a></li>
                <li><a href="#profil">Profil Sekolah</a></li>
                <li><a href="#berita">Berita</a></li>
                <li><a href="#galeri">Galeri</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Akademik</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#akademik">Kurikulum</a></li>
                <li><a href="#kesiswaan">Ekstrakurikuler</a></li>
                <li><a href="#akademik">Prestasi Siswa</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Kontak Kami</h4>
              <ul className={styles.footerContact}>
                <li><span className="material-symbols-outlined">location_on</span> Jl. R.A. Kartini No. 1, Sukabumi</li>
                <li><span className="material-symbols-outlined">call</span> (0266) 123-456</li>
                <li><span className="material-symbols-outlined">mail</span> info@sman1sukabumi.sch.id</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRow2}>
            <p>&copy; 2026 SMAN 1 Sukabumi. All rights reserved.</p>
            <p>Website dibuat oleh <a href="https://makdev-website-pied.vercel.app" target="_blank" rel="noreferrer" className={styles.footerDtechLink}>MakDev</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
