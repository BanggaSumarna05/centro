import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base-dark text-white/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/conten_centro/logo.jpg"
                alt="Centro Logo"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10"
              />
              <span className="text-xl font-extrabold text-white tracking-tight">
                CENTRO<span className="text-brand">.</span>
              </span>
            </div>
            <p className="max-w-sm mb-6 leading-relaxed text-sm sm:text-base">
              Ngopi, Berkarya, Terhubung. Ruang kreatif di Tasikmalaya untuk ide-ide brilian.
            </p>
            <div className="flex gap-3">
              {[
                <svg key="ig" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
                <svg key="tw" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-5 text-sm tracking-wider uppercase">Pintasan</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Tentang", href: "/tentang" },
                { label: "Menu", href: "/menu" },
                { label: "Event", href: "/event" },
                { label: "Galeri", href: "/galeri" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-brand transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-5 text-sm tracking-wider uppercase">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-accent-dark mt-0.5 shrink-0" />
                <span>Jl. KH. Lukmanul Hakim No.01, Tasikmalaya</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-accent-dark shrink-0" />
                <span>hello@centroroast.space</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-accent-dark shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Centro Roast Space. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
