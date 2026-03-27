import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-dark text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-20 lg:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black uppercase tracking-widest mb-6">
              CENTRO <br/>
              <span className="text-brand">Roast Space.</span>
            </h3>
            <p className="text-white/70 leading-relaxed text-sm mb-8 font-medium">
              Space isn't empty — it's where ideas collide. Lebih dari sekadar kedai kopi, kami adalah simpul kreativitas di pusat kota Tasikmalaya.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/centro.roastspace"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:-translate-y-1 transition-all duration-300"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white tracking-[0.2em] uppercase text-sm mb-6 border-b border-white/10 pb-4 inline-block">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 text-white/70 font-medium">
              <li><Link to="/" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 transition-all h-px bg-brand overflow-hidden block"></span> Beranda</Link></li>
              <li><Link to="/tentang" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 transition-all h-px bg-brand overflow-hidden block"></span> Tentang Kami</Link></li>
              <li><Link to="/menu" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 transition-all h-px bg-brand overflow-hidden block"></span> Buku Menu</Link></li>
              <li><Link to="/event" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 transition-all h-px bg-brand overflow-hidden block"></span> Agenda Event</Link></li>
              <li><Link to="/galeri" className="hover:text-brand transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 transition-all h-px bg-brand overflow-hidden block"></span> Galeri Visual</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white tracking-[0.2em] uppercase text-sm mb-6 border-b border-white/10 pb-4 inline-block">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-5 text-white/70 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <span className="leading-relaxed">Jl. Mohamad Hatta No.119, Sukamanah, Kec. Cipedes, Kota Tasikmalaya.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand shrink-0" />
                <a href="https://wa.me/6281234567890" className="hover:text-brand transition-colors">+62 812 3456 7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand shrink-0" />
                <a href="mailto:hello@centroroast.com" className="hover:text-brand transition-colors">hello@centroroast.com</a>
              </li>
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="font-bold text-white tracking-[0.2em] uppercase text-sm mb-6 border-b border-white/10 pb-4 inline-block">
              Jam Operasional
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 text-brand mb-4">
                <Clock size={20} />
                <span className="font-bold uppercase tracking-widest text-sm">Buka Setiap Hari</span>
              </div>
              <div className="flex flex-col gap-2 font-mono text-sm text-white/90">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span>Senin - Jumat</span>
                  <span>10:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span>Sabtu - Minggu</span>
                  <span>10:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center text-brand">
                  <span>Libur Nasional</span>
                  <span>Buka Normal</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-white/50">
            &copy; {currentYear} Centro Roast Space. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
