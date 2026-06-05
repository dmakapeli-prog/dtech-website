import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060612] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col space-y-6">
            <div className="relative w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
              <div className="relative bg-background px-4 py-2 rounded-lg border border-white/10">
                <span className="text-3xl font-extrabold text-gradient">DTech</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Agensi digital modern untuk kebutuhan website dan undangan digital.
              Wujudkan ide digital lebih nyata bersama DTech.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/dtech.id"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com/@dtech.id"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281996522114"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#25D366] hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Layanan</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/layanan?tab=web" className="text-gray-500 hover:text-accent text-sm transition-colors">
                  Website Bisnis
                </Link>
              </li>
              <li>
                <Link href="/layanan?tab=undangan" className="text-gray-500 hover:text-accent text-sm transition-colors">
                  Undangan Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              <li><Link href="/template" className="text-gray-500 hover:text-accent text-sm transition-colors">Template</Link></li>
              <li><Link href="/portofolio" className="text-gray-500 hover:text-accent text-sm transition-colors">Portofolio</Link></li>
              <li><Link href="/harga" className="text-gray-500 hover:text-accent text-sm transition-colors">Harga</Link></li>
              <li><Link href="/faq" className="text-gray-500 hover:text-accent text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:dtech.indonesia@gmail.com" className="flex items-start space-x-3 text-gray-500 hover:text-accent text-sm transition-colors">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  <span>dtech.indonesia@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-500 text-sm">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  <span>Sukabumi, Jawa Barat</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 DTech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-accent text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-accent text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
