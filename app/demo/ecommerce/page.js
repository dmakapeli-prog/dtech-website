"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function EcommerceDemo() {
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
        <a href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20tertarik%20template%20E-Commerce" target="_blank" rel="noreferrer" className={styles.topBarOrder}>
          Pesan Template Ini &rarr;
        </a>
      </div>

      {/* 2. PROMO BAR MARQUEE */}
      <div className={styles.promoBar}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            🎉 GRATIS ONGKIR untuk pembelian di atas Rp 100.000! Berlaku hari ini saja! &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
            🎉 GRATIS ONGKIR untuk pembelian di atas Rp 100.000! Berlaku hari ini saja! &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
            🎉 GRATIS ONGKIR untuk pembelian di atas Rp 100.000! Berlaku hari ini saja!
          </div>
        </div>
      </div>

      {/* 3. NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className="material-symbols-outlined" style={{color: '#7C3AED', fontSize: '32px'}}>local_mall</span>
            <span className={styles.logoText}>TokoKita</span>
          </div>
          <div className={styles.searchWrapper}>
            <input type="text" className={styles.searchInput} placeholder="Cari produk..." />
            <button className={styles.searchBtn}>
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <div className={styles.navIcons}>
            <div className={styles.iconBtn}>
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <div className={styles.iconBtn}>
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className={styles.cartBadge}>3</span>
            </div>
            <div className={styles.navDivider}></div>
            <button className={styles.btnLogin}>Masuk</button>
          </div>
        </div>
      </nav>

      {/* 4. HERO BANNER */}
      <section className={styles.hero}>
        <div className={`${styles.heroContainer} ${styles.reveal}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>✨ Koleksi Terbaru 2026</div>
            <h1 className={styles.heroTitle}>Pamerkan Produk Anda Dengan Lebih Elegan</h1>
            <p className={styles.heroSub}>
              Temukan ribuan produk pilihan berkualitas dengan harga terbaik. Belanja mudah, cepat, dan aman!
            </p>
            <div className={styles.heroBtns}>
              <a href="#belanja" className={styles.btnOrangeLg}>Belanja Sekarang</a>
              <a href="#katalog" className={styles.btnOutlineWhite}>Lihat Katalog</a>
            </div>
          </div>
          <div className={styles.heroMockups}>
            <div className={styles.heroBadgeFloating}>DISKON 50%</div>
            <div className={`${styles.mockupCard} ${styles.m1}`}>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80" alt="Sepatu" />
              <div className={styles.mcInfo}>
                <div className={styles.mcName}>Nike Air Max</div>
                <div className={styles.mcPrice}>Rp 1.299.000</div>
              </div>
            </div>
            <div className={`${styles.mockupCard} ${styles.m2}`}>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80" alt="Jam" />
              <div className={styles.mcInfo}>
                <div className={styles.mcName}>Jam Premium</div>
                <div className={styles.mcPrice}>Rp 450.000</div>
              </div>
            </div>
            <div className={`${styles.mockupCard} ${styles.m3}`}>
              <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=300&q=80" alt="Skincare" />
              <div className={styles.mcInfo}>
                <div className={styles.mcName}>Skincare Set</div>
                <div className={styles.mcPrice}>Rp 210.000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KATEGORI PRODUK */}
      <section className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Kategori Pilihan</h2>
          <div className={`${styles.categoryScroll} ${styles.reveal}`}>
            {[
              { icon: "👗", name: "Fashion & Pakaian" },
              { icon: "💄", name: "Kecantikan & Perawatan" },
              { icon: "🏠", name: "Rumah & Dekorasi" },
              { icon: "📱", name: "Elektronik & Gadget" },
              { icon: "🌿", name: "Makanan & Minuman" },
              { icon: "🎒", name: "Tas & Aksesoris" },
            ].map((cat, i) => (
              <div key={i} className={styles.categoryPill}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catName}>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUK UNGGULAN */}
      <section id="belanja" className={`${styles.section} ${styles.bgLightGray}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeaderFlex}>
            <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Produk Terlaris</h2>
            <a href="#semua" className={`${styles.linkAll} ${styles.reveal}`}>Lihat Semua &rarr;</a>
          </div>
          <div className={styles.productGrid}>
            {[
              {
                img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
                badge: "TERLARIS", badgeColor: "#F97316",
                name: "Jam Tangan Premium Pria", price: "Rp 299.000", oldPrice: "Rp 450.000", rating: "4.9", sold: "128"
              },
              {
                img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80",
                badge: "DISKON 40%", badgeColor: "#ef4444",
                name: "Skincare Set Premium", price: "Rp 210.000", oldPrice: "Rp 350.000", rating: "4.8", sold: "256"
              },
              {
                img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=500&q=80",
                badge: "NEW", badgeColor: "#10B981",
                name: "Sepatu Sneakers Casual", price: "Rp 389.000", oldPrice: null, rating: "4.7", sold: "89"
              },
              {
                img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
                badge: "TERLARIS", badgeColor: "#F97316",
                name: "Tas Ransel Laptop Premium", price: "Rp 349.000", oldPrice: "Rp 500.000", rating: "4.9", sold: "312"
              }
            ].map((prod, i) => (
              <div key={i} className={`${styles.productCard} ${styles.reveal}`} style={{transitionDelay: `${i*100}ms`}}>
                <div className={styles.prodImgWrapper}>
                  <img src={prod.img} alt={prod.name} className={styles.prodImg} />
                  <div className={styles.prodBadge} style={{backgroundColor: prod.badgeColor}}>{prod.badge}</div>
                </div>
                <div className={styles.prodInfo}>
                  <h3 className={styles.prodName}>{prod.name}</h3>
                  <div className={styles.prodPriceRow}>
                    <span className={styles.prodPrice}>{prod.price}</span>
                    {prod.oldPrice && <span className={styles.prodOldPrice}>{prod.oldPrice}</span>}
                  </div>
                  <div className={styles.prodRating}>
                    <span style={{color: '#F59E0B'}}>⭐</span> {prod.rating} <span>({prod.sold} terjual)</span>
                  </div>
                  <button className={styles.btnAddCart}>Tambah ke Keranjang</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROMO BANNER SPLIT */}
      <section className={`${styles.promoSplit} ${styles.reveal}`}>
        <div className={styles.promoLeft}>
          <div className={styles.promoBadge}>Flash Sale Hari Ini! ⚡</div>
          <h2 className={styles.promoTitle}>Diskon hingga 70%</h2>
          <div className={styles.promoTimer}>
            <div className={styles.timeBox}>08<span>Jam</span></div>:
            <div className={styles.timeBox}>45<span>Menit</span></div>:
            <div className={styles.timeBox}>12<span>Detik</span></div>
          </div>
          <button className={styles.btnWhiteOrange}>Lihat Flash Sale</button>
        </div>
        <div className={styles.promoRight}>
          <div className={styles.promoBadge}>Member Baru? 🎁</div>
          <h2 className={styles.promoTitle}>Dapatkan voucher<br/>Rp 50.000</h2>
          <p className={styles.promoText}>Daftar sekarang dan nikmati keuntungannya!</p>
          <button className={styles.btnWhitePurple}>Daftar Sekarang</button>
        </div>
      </section>

      {/* 8. PRODUK BARU */}
      <section className={`${styles.section} ${styles.bgWhite}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeaderFlex}>
            <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Baru Masuk</h2>
            <a href="#semua" className={`${styles.linkAll} ${styles.reveal}`}>Lihat Semua &rarr;</a>
          </div>
          <div className={styles.productGrid}>
            {[
              { img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80", name: "Kemeja Batik Modern", price: "Rp 185.000", rating: "5.0", sold: "20" },
              { img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=500&q=80", name: "Kopi Premium Nusantara", price: "Rp 125.000", rating: "4.8", sold: "45" },
              { img: "https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&w=500&q=80", name: "Lampu Dekorasi LED", price: "Rp 89.000", rating: "4.6", sold: "112" },
              { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80", name: "Earphone Wireless", price: "Rp 259.000", rating: "4.9", sold: "67" }
            ].map((prod, i) => (
              <div key={i} className={`${styles.productCard} ${styles.reveal}`} style={{transitionDelay: `${i*100}ms`}}>
                <div className={styles.prodImgWrapper}>
                  <img src={prod.img} alt={prod.name} className={styles.prodImg} />
                  <div className={styles.prodBadge} style={{backgroundColor: '#10B981'}}>NEW</div>
                </div>
                <div className={styles.prodInfo}>
                  <h3 className={styles.prodName}>{prod.name}</h3>
                  <div className={styles.prodPriceRow}>
                    <span className={styles.prodPrice}>{prod.price}</span>
                  </div>
                  <div className={styles.prodRating}>
                    <span style={{color: '#F59E0B'}}>⭐</span> {prod.rating} <span>({prod.sold} terjual)</span>
                  </div>
                  <button className={styles.btnAddCart}>Tambah ke Keranjang</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. KEUNGGULAN BELANJA */}
      <section className={`${styles.section} ${styles.bgLightPurple}`}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.benefitGrid} ${styles.reveal}`}>
            {[
              { icon: "local_shipping", title: "Gratis Ongkir", sub: "Min. pembelian Rp 100rb" },
              { icon: "assignment_return", title: "Mudah Return", sub: "7 hari garansi return" },
              { icon: "lock", title: "Transaksi Aman", sub: "SSL & payment gateway" },
              { icon: "headset_mic", title: "CS 24/7", sub: "Siap membantu Anda" }
            ].map((ben, i) => (
              <div key={i} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <span className="material-symbols-outlined">{ben.icon}</span>
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>{ben.title}</h4>
                  <p className={styles.benefitSub}>{ben.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <div className={styles.footerLogo}>
                <span className="material-symbols-outlined" style={{fontSize: '32px', color: '#7C3AED'}}>local_mall</span>
                TokoKita
              </div>
              <p className={styles.footerDesc}>Destinasi belanja online terpercaya dengan ribuan produk berkualitas dan harga terbaik di Indonesia.</p>
              <div className={styles.socialBox}>
                <span className="material-symbols-outlined">thumb_up</span>
                <span className="material-symbols-outlined">photo_camera</span>
                <span className="material-symbols-outlined">smart_display</span>
              </div>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Layanan Pelanggan</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">Bantuan</a></li>
                <li><a href="#">Cara Pembelian</a></li>
                <li><a href="#">Pengiriman</a></li>
                <li><a href="#">Cara Pengembalian</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Jelajahi</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Kebijakan Privasi</a></li>
                <li><a href="#">Syarat &amp; Ketentuan</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Metode Pembayaran</h4>
              <div className={styles.paymentBox}>
                <div className={styles.payIcon}>BCA</div>
                <div className={styles.payIcon}>BNI</div>
                <div className={styles.payIcon}>BRI</div>
                <div className={styles.payIcon}>OVO</div>
                <div className={styles.payIcon}>GOPAY</div>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2026 TokoKita E-Commerce. All rights reserved.</p>
            <p>Website dibuat oleh <a href="https://dtech-website-pied.vercel.app" target="_blank" rel="noreferrer" className={styles.footerDtech}>DTech</a></p>
          </div>
        </div>
      </footer>

      {/* 11. FLOATING WA */}
      <a href="https://wa.me/6281996522114" target="_blank" rel="noreferrer" className={styles.floatingWA}>
        <span className="material-symbols-outlined" style={{fontSize: '32px'}}>chat</span>
      </a>
    </div>
  );
}
