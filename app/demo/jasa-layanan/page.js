"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function JasaLayananDemo() {
  const waOrderLink = "https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Jasa%20&%20Layanan";
  const waConsultLink = "https://wa.me/6281996522114";

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
    revealOnScroll(); // Trigger initially
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

      {/* 2. NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          DTech
        </div>
        <div className={styles.navMenu}>
          <a href="#beranda">Beranda</a>
          <a href="#layanan">Layanan</a>
          <a href="#keunggulan">Keunggulan</a>
          <a href="#harga">Harga</a>
          <a href="#testimoni">Testimoni</a>
        </div>
        <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
          Hubungi Kami
        </a>
      </nav>

      {/* 3. HERO */}
      <section id="beranda" className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContainer} ${styles.reveal}`}>
          <div className={styles.heroContent}>
            <div className={styles.pulseBadge}>
              <span className={styles.pulseDot}></span> Jasa Profesional Terpercaya
            </div>
            <h1 className={styles.heroTitle}>Solusi Terbaik &amp; Terpercaya untuk Kebutuhan Anda</h1>
            <p className={styles.heroSub}>
              Kami hadir memberikan layanan profesional berkualitas tinggi dengan pengalaman lebih dari 5 tahun di bidangnya.
            </p>
            <div className={styles.heroBtns}>
              <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.btnPrimaryAnimated}>
                Konsultasi Gratis <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#layanan" className={styles.btnSecondary}>
                Lihat Layanan
              </a>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
              alt="Professional Team" 
              className={styles.heroImage}
            />
            <div className={styles.heroImageGlow}></div>
          </div>
        </div>
      </section>

      {/* 4. LAYANAN SECTION */}
      <section id="layanan" className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Layanan Kami</h2>
        <div className={styles.servicesGrid}>
          {[
            { title: "Instalasi & Perbaikan", desc: "Pemasangan dan perbaikan perangkat secara profesional dan aman.", price: "Rp 150.000/kunjungan", icon: "home_repair_service" },
            { title: "Perawatan Rutin", desc: "Pemeliharaan berkala untuk menjaga performa tetap optimal.", price: "Rp 200.000/bulan", icon: "engineering" },
            { title: "Konsultasi Teknis", desc: "Saran dan panduan teknis dari pakar berpengalaman.", price: "Rp 100.000/jam", icon: "support_agent" },
            { title: "Renovasi & Modifikasi", desc: "Pembaruan sistem sesuai dengan kebutuhan terkini.", price: "Mulai Rp 500.000", icon: "architecture" },
            { title: "Emergency Service", desc: "Layanan darurat siap sedia 24/7 kapanpun dibutuhkan.", price: "Rp 250.000/kunjungan", icon: "emergency" },
            { title: "Garansi Pekerjaan", desc: "Jaminan kualitas pengerjaan selama periode tertentu.", price: "Gratis 30 hari", icon: "verified" },
          ].map((srv, i) => (
            <div key={i} className={`${styles.serviceCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.serviceIconWrapper}>
                <span className="material-symbols-outlined">{srv.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{srv.title}</h3>
              <p className={styles.serviceDesc}>{srv.desc}</p>
              <p className={styles.servicePrice}>{srv.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. KEUNGGULAN & STATS */}
      <section id="keunggulan" className={`${styles.section} ${styles.featuresSection}`}>
        <div className={styles.featuresOverlay}></div>
        
        <div className={`${styles.statsContainer} ${styles.reveal}`}>
          <div className={styles.statBox}>
            <div className={styles.statIcon}><span className="material-symbols-outlined">task_alt</span></div>
            <div className={styles.statValue}>500+</div>
            <div className={styles.statLabel}>Proyek Selesai</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statIcon}><span className="material-symbols-outlined">workspace_premium</span></div>
            <div className={styles.statValue}>5+</div>
            <div className={styles.statLabel}>Tahun Pengalaman</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statIcon}><span className="material-symbols-outlined">groups</span></div>
            <div className={styles.statValue}>200+</div>
            <div className={styles.statLabel}>Klien Puas</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statIcon}><span className="material-symbols-outlined">star</span></div>
            <div className={styles.statValue}>4.9★</div>
            <div className={styles.statLabel}>Rating</div>
          </div>
        </div>

        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark} ${styles.reveal}`}>Mengapa Memilih Kami?</h2>
        <div className={styles.featuresGrid}>
          {[
            { title: "Berpengalaman", desc: "5+ tahun melayani pelanggan dengan hasil terbaik.", icon: "military_tech", color: "#FF3366" },
            { title: "Bergaransi", desc: "Semua pekerjaan bergaransi 30 hari.", icon: "shield", color: "#00E676" },
            { title: "Respon Cepat", desc: "Datang dalam 2 jam setelah pesan.", icon: "bolt", color: "#FFD500" },
            { title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi.", icon: "payments", color: "#00E5FF" },
          ].map((ft, i) => (
            <div key={i} className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.featureIconGradient} style={{ background: `linear-gradient(135deg, ${ft.color} 0%, transparent 150%)` }}>
                <span className="material-symbols-outlined" style={{ color: ft.color }}>{ft.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{ft.title}</h3>
              <p className={styles.featureDesc}>{ft.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HARGA */}
      <section id="harga" className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Paket Layanan Kami</h2>
        <div className={styles.pricingGrid}>
          {/* Basic */}
          <div className={`${styles.pricingCard} ${styles.reveal}`}>
            <div className={styles.pricingName}>Basic</div>
            <div className={styles.pricingPrice}>Rp 150.000</div>
            <ul className={styles.pricingFeatures}>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> 1x Kunjungan</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Pengecekan Standar</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Garansi 7 Hari</li>
            </ul>
            <a href={waConsultLink} target="_blank" rel="noreferrer" className={`${styles.btnSecondaryPricing}`}>
              Mulai Sekarang
            </a>
          </div>

          {/* Standar - Popular */}
          <div className={`${styles.pricingCard} ${styles.pricingCardPopular} ${styles.reveal}`} style={{ transitionDelay: '100ms' }}>
            <div className={styles.popularBadge}>Terpopuler</div>
            <div className={styles.pricingName}>Standar</div>
            <div className={styles.pricingPrice}>Rp 350.000</div>
            <ul className={styles.pricingFeatures}>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> 3x Kunjungan</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Perawatan Berkala</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Garansi 14 Hari</li>
            </ul>
            <a href={waConsultLink} target="_blank" rel="noreferrer" className={`${styles.btnPrimaryPricing}`}>
              Mulai Sekarang
            </a>
          </div>

          {/* Premium */}
          <div className={`${styles.pricingCard} ${styles.reveal}`} style={{ transitionDelay: '200ms' }}>
            <div className={styles.pricingName}>Premium</div>
            <div className={styles.pricingPrice}>Rp 600.000</div>
            <ul className={styles.pricingFeatures}>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Unlimited Kunjungan*</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Prioritas Layanan</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Garansi 30 Hari</li>
            </ul>
            <a href={waConsultLink} target="_blank" rel="noreferrer" className={`${styles.btnSecondaryPricing}`}>
              Mulai Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONI */}
      <section id="testimoni" className={`${styles.section} ${styles.testiSection}`}>
        <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Apa Kata Mereka?</h2>
        <div className={styles.testimonialGrid}>
          {[
            { name: "Rina W.", text: "Pelayanan cepat dan profesional! Sangat membantu ketika ada masalah mendadak di rumah.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
            { name: "Budi S.", text: "Harga terjangkau, hasil memuaskan! Teknisi datang tepat waktu dan ramah.", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d" },
            { name: "Sari A.", text: "Sudah 2 tahun langganan, selalu puas dengan layanannya. Recommended banget!", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
          ].map((testi, i) => (
            <div key={i} className={`${styles.testiCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <span className={`material-symbols-outlined ${styles.quoteIconBig}`}>format_quote</span>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testiText}>&quot;{testi.text}&quot;</p>
              <div className={styles.testiAuthorBox}>
                <img src={testi.avatar} alt={testi.name} className={styles.testiAvatar} />
                <div className={styles.testiAuthor}>{testi.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className={`${styles.ctaSection} ${styles.reveal}`}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Siap Memulai? Hubungi Kami Sekarang!</h2>
          <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.btnWhiteAnimated}>
            <span className="material-symbols-outlined">forum</span>
            Chat via WhatsApp
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          DTech
        </div>
        <p style={{marginBottom: '10px'}}>Copyright 2026</p>
        <p>
          Website dibuat oleh{" "}
          <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noreferrer" className={styles.footerLink}>
            DTech
          </a>
        </p>
      </footer>

      {/* 10. FLOATING WA BUTTON */}
      <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.floatingWA}>
        <span className="material-symbols-outlined" style={{fontSize: '32px'}}>chat</span>
      </a>
    </div>
  );
}
