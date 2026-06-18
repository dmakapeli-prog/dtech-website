import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiCodeAI from "./components/DiCodeAI";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "DiCode - Mitra Digital Terpercaya untuk Bisnis Anda",
  description: "DiCode adalah agensi digital modern yang menyediakan jasa pembuatan website profesional dan undangan digital premium. Melayani UMKM, instansi, dan perusahaan di seluruh Indonesia.",
  keywords: [
    "DiCode",
    "jasa pembuatan website",
    "website bisnis",
    "undangan digital",
    "web agency Sukabumi",
    "website UMKM",
    "landing page murah",
    "undangan pernikahan digital",
    "jasa website profesional",
    "agensi digital Indonesia"
  ],
  authors: [{ name: "DiCode" }],
  creator: "DiCode",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://dicode-website.vercel.app",
    siteName: "DiCode",
    title: "DiCode - Mitra Digital Terpercaya untuk Bisnis Anda",
    description: "Jasa pembuatan website profesional dan undangan digital premium untuk bisnis Anda.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "DiCode - Mitra Digital Terpercaya"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DiCode - Mitra Digital Terpercaya",
    description: "Jasa pembuatan website profesional dan undangan digital premium.",
    images: ["/assets/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col pt-20 overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <DiCodeAI />
      </body>
    </html>
  );
}
