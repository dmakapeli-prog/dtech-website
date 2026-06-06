"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Template", href: "/template" },
  { name: "Portofolio", href: "/portofolio" },
  { name: "Harga", href: "/harga" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (pathname?.startsWith("/demo")) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative bg-background px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-2xl font-extrabold text-gradient">
                DTech
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "font-semibold text-accent bg-accent/10"
                    : "font-medium text-gray-400 hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20ingin%20berkonsultasi."
            target="_blank"
            rel="noreferrer"
            className="relative group inline-flex items-center justify-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
            <button className="relative bg-primary text-white font-bold text-sm px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Hubungi Kami
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#0d0d24]/95 backdrop-blur-xl shadow-2xl border-t border-white/5 transition-all duration-300 origin-top ${
          mobileOpen
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-accent/10 text-accent font-bold"
                    : "text-gray-300 hover:bg-white/5 font-medium"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 mt-2 border-t border-white/10">
            <a
              href="https://wa.me/6281996522114?text=Halo%20DTech,%20saya%20ingin%20berkonsultasi."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-accent text-white font-bold px-4 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              Hubungi Kami
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
