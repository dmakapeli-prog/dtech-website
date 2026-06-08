"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function CompanyProfileDemo() {
  const waOrderLink = "https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20Company%20Profile";
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
          <span className="material-symbols-outlined" style={{color: '#0066FF', fontSize: '28px', marginRight: '8px'}}>domain</span>
          PT. GlobalTech
        </div>
        <div className={styles.navMenu}>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#klien">Klien</a>
          <a href="#kontak">Kontak</a>
        </div>
        <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
          Hubungi Kami
        </a>
      </nav>

      {/* 3. HERO */}
      <section id="beranda" className={styles.hero}>
        <div className={styles.heroGridOverlay}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContainer} ${styles.reveal}`}>
          
          <div className={styles.heroContent}>
            <div className={styles.pulseBadge}>
              🏢 Perusahaan Terpercaya Sejak 2010
            </div>
            <h1 className={styles.heroTitle}>Membangun Bisnis yang Profesional &amp; Terpercaya</h1>
            <p className={styles.heroSub}>
              PT. Maju Bersama hadir sebagai mitra strategis bisnis Anda. Kami menyediakan solusi komprehensif untuk pertumbuhan bisnis yang berkelanjutan.
            </p>
            <div className={styles.heroBtns}>
              <a href="#tentang" className={styles.btnPrimaryAnimated}>
                Tentang Kami
              </a>
              <a href="#layanan" className={styles.btnSecondary}>
                Lihat Layanan
              </a>
            </div>
          </div>

          <div className={styles.heroDashboardWrapper}>
            <div className={styles.dashboardGlow}></div>
            <div className={styles.particleDots}></div>
            
            <div className={styles.dashboardCard}>
              <div className={styles.dashboardHeader}>
                <div className={styles.dashboardDots}>
                  <span></span><span></span><span></span>
                </div>
                <div className={styles.dashboardTitle}>Revenue Overview</div>
              </div>
              <div className={styles.dashboardBody}>
                <div className={styles.chartBarWrapper}>
                  <div className={styles.chartBar} style={{ height: '40%' }}></div>
                  <div className={styles.chartBar} style={{ height: '70%' }}></div>
                  <div className={styles.chartBar} style={{ height: '50%' }}></div>
                  <div className={styles.chartBar} style={{ height: '90%' }}></div>
                  <div className={styles.chartBar} style={{ height: '60%' }}></div>
                  <div className={styles.chartBar} style={{ height: '100%', background: '#0066FF', boxShadow: '0 0 15px rgba(0,102,255,0.6)' }}></div>
                </div>
                <div className={styles.dashboardStatsRow}>
                  <div>
                    <div className={styles.statLabelSm}>Active Clients</div>
                    <div className={styles.statValueSm}>342</div>
                  </div>
                  <div>
                    <div className={styles.statLabelSm}>Growth</div>
                    <div className={styles.statValueSm} style={{color: '#00E5FF'}}>+28%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
              <div className={styles.badgeIconBlue}><span className="material-symbols-outlined">groups</span></div>
              <div className={styles.badgeText}>
                <strong>300+</strong> Klien
              </div>
            </div>

            <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
              <div className={styles.badgeIconGold}><span className="material-symbols-outlined">verified</span></div>
              <div className={styles.badgeText}>
                <strong>98%</strong> Satisfied
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS BAR */}
      <div className={styles.statsWrapper}>
        <div className={`${styles.statsContainer} ${styles.reveal}`}>
          <div className={styles.statBox}>
            <div className={styles.statValue}>15+</div>
            <div className={styles.statLabel}>Tahun Pengalaman</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>500+</div>
            <div className={styles.statLabel}>Proyek Selesai</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>50+</div>
            <div className={styles.statLabel}>Klien Aktif</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Tingkat Kepuasan</div>
          </div>
        </div>
      </div>

      {/* 5. TENTANG KAMI */}
      <section id="tentang" className={styles.section}>
        <div className={styles.aboutContainer}>
          <div className={`${styles.aboutImageWrapper} ${styles.reveal}`}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
              alt="Office Professional" 
              className={styles.aboutImage}
            />
            <div className={styles.aboutImageOverlay}></div>
            <div className={styles.aboutImageAccent}></div>
          </div>
          <div className={`${styles.aboutContent} ${styles.reveal}`} style={{ transitionDelay: '200ms' }}>
            <div className={styles.sectionBadge}>Tentang Kami</div>
            <h2 className={styles.sectionTitleLeft}>Mitra Strategis untuk Pertumbuhan Bisnis Anda</h2>
            <p className={styles.aboutText}>
              Didirikan pada tahun 2010, PT. Maju Bersama telah berkembang menjadi salah satu perusahaan konsultan bisnis terkemuka di Jawa Barat. Dengan tim profesional berpengalaman, kami berkomitmen memberikan solusi terbaik.
            </p>
            <ul className={styles.aboutList}>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                Tim profesional bersertifikat
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                Solusi berbasis data &amp; teknologi
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                Dukungan purna jual 24/7
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5.5 TIM SECTION */}
      <section id="tim" className={`${styles.section} ${styles.bgDark}`}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleWhite} ${styles.reveal}`}>Tim Profesional Kami</h2>
        <div className={styles.teamGrid}>
          {[
            { name: "Andi Saputra", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" },
            { name: "Siti Rahma", role: "Head of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
            { name: "Budi Santoso", role: "Lead Consultant", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
            { name: "Maya Indah", role: "Client Relations Manager", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" },
          ].map((member, i) => (
            <div key={i} className={`${styles.teamCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.teamImgWrapper}>
                <img src={member.img} alt={member.name} className={styles.teamImg} />
              </div>
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LAYANAN */}
      <section id="layanan" className={`${styles.section} ${styles.bgWhite}`}>
        <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Layanan Unggulan Kami</h2>
        <div className={styles.servicesGrid}>
          {[
            { title: "Konsultasi Bisnis", desc: "Analisis mendalam untuk strategi bisnis yang tepat sasaran", icon: "lightbulb" },
            { title: "Manajemen Proyek", desc: "Pengelolaan proyek profesional dari awal hingga selesai", icon: "account_tree" },
            { title: "Pengembangan SDM", desc: "Pelatihan dan pengembangan sumber daya manusia berkualitas", icon: "school" },
            { title: "Riset & Analisis", desc: "Data-driven insights untuk keputusan bisnis yang tepat", icon: "analytics" },
            { title: "Teknologi Informasi", desc: "Solusi IT modern untuk efisiensi operasional bisnis", icon: "computer" },
            { title: "Audit & Compliance", desc: "Memastikan bisnis berjalan sesuai regulasi yang berlaku", icon: "fact_check" },
          ].map((srv, i) => (
            <div key={i} className={`${styles.serviceCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.serviceIcon}>
                <span className="material-symbols-outlined">{srv.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{srv.title}</h3>
              <p className={styles.serviceDesc}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. KEUNGGULAN */}
      <section className={`${styles.section} ${styles.bgDark}`}>
        <h2 className={`${styles.sectionTitle} ${styles.sectionTitleWhite} ${styles.reveal}`}>Mengapa Memilih Kami?</h2>
        <div className={styles.featuresGrid}>
          {[
            { title: "Berpengalaman 15+ Tahun", icon: "history", color: "#0066FF" },
            { title: "Tim Bersertifikat Internasional", icon: "verified", color: "#F59E0B" },
            { title: "Solusi Berbasis Teknologi", icon: "memory", color: "#00E5FF" },
            { title: "Garansi Kepuasan Klien", icon: "thumb_up", color: "#FF3366" },
          ].map((ft, i) => (
            <div key={i} className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.featureIconWrapper} style={{ background: `linear-gradient(135deg, ${ft.color}22, ${ft.color}11)` }}>
                <span className="material-symbols-outlined" style={{ color: ft.color }}>{ft.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{ft.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 8. KLIEN SECTION */}
      <section id="klien" className={`${styles.section} ${styles.bgWhite}`}>
        <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Klien yang Mempercayai Kami</h2>
        <div className={styles.clientsGrid}>
          {[
            "PT. Sukabumi Maju",
            "CV. Karya Nusantara",
            "PT. Digital Indonesia",
            "Yayasan Pendidikan Baru",
            "PT. Konstruksi Jaya",
            "CV. Teknologi Mandiri"
          ].map((client, i) => (
            <div key={i} className={`${styles.clientBox} ${styles.reveal}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <span className="material-symbols-outlined" style={{fontSize: '36px', color: '#cbd5e1', marginBottom: '8px'}}>business</span>
              <div className={styles.clientName}>{client}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONI */}
      <section className={`${styles.section} ${styles.bgGray}`}>
        <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Kata Klien Kami</h2>
        <div className={styles.testimonialGrid}>
          {[
            { name: "Bapak Hendra S.", role: "Direktur PT. Sukabumi Maju", text: "PT. Maju Bersama sangat profesional. Solusi yang diberikan benar-benar membantu bisnis kami berkembang pesat!", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
            { name: "Ibu Dewi R.", role: "CEO CV. Karya Nusantara", text: "Tim yang responsif dan hasil kerja yang memuaskan. Sangat recommended untuk perusahaan yang ingin maju!", avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d" },
            { name: "Bapak Rizky A.", role: "Manager PT. Digital Indonesia", text: "Konsultasi yang diberikan sangat tepat sasaran. ROI bisnis kami meningkat 40% dalam 6 bulan!", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
          ].map((testi, i) => (
            <div key={i} className={`${styles.testiCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testiText}>&quot;{testi.text}&quot;</p>
              <div className={styles.testiAuthorBox}>
                <img src={testi.avatar} alt={testi.name} className={styles.testiAvatar} />
                <div>
                  <div className={styles.testiAuthor}>{testi.name}</div>
                  <div className={styles.testiRole}>{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section id="kontak" className={`${styles.ctaSection} ${styles.reveal}`}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Siap Membawa Bisnis Anda ke Level Berikutnya?</h2>
          <p className={styles.ctaSub}>Konsultasikan kebutuhan bisnis Anda bersama tim ahli kami sekarang juga.</p>
          <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.btnWhiteAnimated}>
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <span className="material-symbols-outlined" style={{color: '#0066FF', fontSize: '32px'}}>domain</span>
              PT. GlobalTech
            </div>
            <p className={styles.footerDesc}>Mitra strategis terpercaya untuk pertumbuhan dan inovasi bisnis Anda.</p>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Layanan</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#layanan">Konsultasi Bisnis</a></li>
              <li><a href="#layanan">Manajemen Proyek</a></li>
              <li><a href="#layanan">Riset & Analisis</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerHeading}>Perusahaan</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#klien">Klien</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Copyright 2026 PT. GlobalTech. All rights reserved.</p>
          <p>
            Website dibuat oleh{" "}
            <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noreferrer" className={styles.footerDtechLink}>
              DTech
            </a>
          </p>
        </div>
      </footer>

      {/* 12. FLOATING WA BUTTON */}
      <a href={waConsultLink} target="_blank" rel="noreferrer" className={styles.floatingWA}>
        <span className="material-symbols-outlined" style={{fontSize: '32px'}}>chat</span>
      </a>
    </div>
  );
}
