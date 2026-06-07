"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function JasaLayananDemo() {
  const waOrderLink = "https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Jasa%20&%20Layanan";
  const waConsultLink = "https://wa.me/6281996522114";

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
          DTech <span className="material-symbols-outlined" style={{color: '#0066FF'}}>build</span>
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
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            ✅ Jasa Profesional Terpercaya
          </div>
          <h1 className={styles.heroTitle}>Solusi Terbaik & Terpercaya untuk Kebutuhan Anda</h1>
          <p className={styles.heroSub}>
            Kami hadir memberikan layanan profesional berkualitas tinggi dengan pengalaman lebih dari 5 tahun di bidangnya.
          </p>
          <div className={styles.heroBtns}>
            <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              Konsultasi Gratis
            </a>
            <a href="#layanan" className={styles.btnSecondary}>
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* 4. STATS BAR */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statValue}>500+</div>
          <div className={styles.statLabel}>Proyek Selesai</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>5+</div>
          <div className={styles.statLabel}>Tahun Pengalaman</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>200+</div>
          <div className={styles.statLabel}>Klien Puas</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statValue}>4.9&starf;</div>
          <div className={styles.statLabel}>Rating</div>
        </div>
      </div>

      {/* 5. LAYANAN SECTION */}
      <section id="layanan" className={styles.section}>
        <h2 className={styles.sectionTitle}>Layanan Kami</h2>
        <div className={styles.servicesGrid}>
          {[
            { title: "Instalasi & Perbaikan", price: "Rp 150.000/kunjungan", icon: "home_repair_service" },
            { title: "Perawatan Rutin", price: "Rp 200.000/bulan", icon: "engineering" },
            { title: "Konsultasi Teknis", price: "Rp 100.000/jam", icon: "support_agent" },
            { title: "Renovasi & Modifikasi", price: "Mulai Rp 500.000", icon: "architecture" },
            { title: "Emergency Service", price: "Rp 250.000/kunjungan", icon: "emergency" },
            { title: "Garansi Pekerjaan", price: "Gratis 30 hari", icon: "verified" },
          ].map((srv, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span className="material-symbols-outlined">{srv.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{srv.title}</h3>
              <p className={styles.servicePrice}>{srv.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. KEUNGGULAN */}
      <section id="keunggulan" className={`${styles.section} ${styles.featuresSection}`}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>Mengapa Memilih Kami?</h2>
        <div className={styles.featuresGrid}>
          {[
            { title: "Berpengalaman", desc: "5+ tahun melayani pelanggan dengan hasil terbaik.", icon: "military_tech" },
            { title: "Bergaransi", desc: "Semua pekerjaan bergaransi 30 hari.", icon: "shield" },
            { title: "Respon Cepat", desc: "Datang dalam 2 jam setelah pesan.", icon: "bolt" },
            { title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi.", icon: "payments" },
          ].map((ft, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">{ft.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{ft.title}</h3>
              <p className={styles.featureDesc}>{ft.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HARGA */}
      <section id="harga" className={styles.section}>
        <h2 className={styles.sectionTitle}>Paket Layanan Kami</h2>
        <div className={styles.pricingGrid}>
          {/* Basic */}
          <div className={styles.pricingCard}>
            <div className={styles.pricingName}>Basic</div>
            <div className={styles.pricingPrice}>Rp 150.000</div>
            <ul className={styles.pricingFeatures}>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> 1x Kunjungan</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Pengecekan Standar</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Garansi 7 Hari</li>
            </ul>
            <a href={waConsultLink} target="_blank" rel="noreferrer" className={`${styles.btnSecondary} ${styles.btnPricing}`} style={{color: '#0066FF', borderColor: '#0066FF'}}>
              Pilih Paket
            </a>
          </div>

          {/* Standar - Popular */}
          <div className={`${styles.pricingCard} ${styles.pricingCardPopular}`}>
            <div className={styles.popularBadge}>Terpopuler</div>
            <div className={styles.pricingName}>Standar</div>
            <div className={styles.pricingPrice}>Rp 350.000</div>
            <ul className={styles.pricingFeatures}>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> 3x Kunjungan</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Perawatan Berkala</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Garansi 14 Hari</li>
            </ul>
            <a href={waConsultLink} target="_blank" rel="noreferrer" className={`${styles.btnPrimary} ${styles.btnPricing}`}>
              Pilih Paket
            </a>
          </div>

          {/* Premium */}
          <div className={styles.pricingCard}>
            <div className={styles.pricingName}>Premium</div>
            <div className={styles.pricingPrice}>Rp 600.000</div>
            <ul className={styles.pricingFeatures}>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Unlimited Kunjungan*</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Prioritas Layanan</li>
              <li><span className={`material-symbols-outlined ${styles.checkIcon}`}>check_circle</span> Garansi 30 Hari</li>
            </ul>
            <a href={waConsultLink} target="_blank" rel="noreferrer" className={`${styles.btnSecondary} ${styles.btnPricing}`} style={{color: '#0066FF', borderColor: '#0066FF'}}>
              Pilih Paket
            </a>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONI */}
      <section id="testimoni" className={styles.section} style={{background: '#fafafa'}}>
        <h2 className={styles.sectionTitle}>Apa Kata Mereka?</h2>
        <div className={styles.testimonialGrid}>
          {[
            { name: "Rina W.", text: "Pelayanan cepat dan profesional! Sangat membantu ketika ada masalah mendadak di rumah." },
            { name: "Budi S.", text: "Harga terjangkau, hasil memuaskan! Teknisi datang tepat waktu dan ramah." },
            { name: "Sari A.", text: "Sudah 2 tahun langganan, selalu puas dengan layanannya. Recommended banget!" },
          ].map((testi, i) => (
            <div key={i} className={styles.testiCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.testiText}>{testi.text}</p>
              <div className={styles.testiAuthor}>{testi.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Siap Memulai? Hubungi Kami Sekarang!</h2>
        <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.btnWhite}>
          <span className="material-symbols-outlined">forum</span>
          Chat via WhatsApp
        </a>
      </section>

      {/* 10. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          DTech <span className="material-symbols-outlined" style={{color: '#0066FF', fontSize: '1.5rem'}}>build</span>
        </div>
        <p style={{marginBottom: '10px'}}>Copyright 2026</p>
        <p>
          Website dibuat oleh{" "}
          <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noreferrer" className={styles.footerLink}>
            DTech
          </a>
        </p>
      </footer>

      {/* 11. FLOATING WA BUTTON */}
      <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.floatingWA}>
        <span className="material-symbols-outlined" style={{fontSize: '32px'}}>chat</span>
      </a>
    </div>
  );
}
