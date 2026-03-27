import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-24 pb-16 sm:py-32 overflow-hidden bg-base-dark text-white">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/conten_centro/tempat.webp"
          alt="Centro Roast Space"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-base-dark/70 sm:bg-base-dark/60 backdrop-blur-[2px]" />
        {/* Left dominant gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-base-dark via-base-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 sm:gap-8 lg:pt-8"
          >
            {/* Typography */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-[-1px] leading-[1.1] mb-4">
                Space <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand/70">Isn't</span> Empty.
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 font-accent font-medium italic underline decoration-brand decoration-2 underline-offset-4">
                It's where ideas collide.
              </p>
              <p className="mt-6 text-white/70 max-w-md leading-relaxed text-sm sm:text-base">
                Centro Roast Space bukan sekadar tempat ngopi. Ini adalah pusat komunitas kreatif di mana inspirasi, kolaborasi, dan cita rasa kopi premium menyatu.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Centro%20Roast%20Space,%20saya%20ingin%20reservasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-brand/90 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(184,160,122,0.4)] transition-all duration-300"
              >
                Reservasi Tempat
              </a>
              <Link
                to="/menu"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-base-dark hover:-translate-y-1 transition-all duration-300"
              >
                Lihat Menu <ArrowRight size={18} />
              </Link>
            </div>
            
            <p className="text-xs text-white/50 flex items-center gap-2 mt-2">
              <Clock size={12} /> Buka Setiap Hari: 10:00 s/d 23:00 WIB
            </p>

          </motion.div>

          {/* Right Column: Minimalist Elegant Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex relative justify-center items-center w-full"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-80 rounded-full group"
            >
              {/* Extremely subtle, elegant backdrop glow */}
              <div className="absolute inset-8 bg-brand rounded-full blur-[50px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none" />
              
              {/* Clean, luxury minimalist container */}
              <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-base-dark group-hover:shadow-[0_40px_80px_rgba(184,160,122,0.15)] transition-all duration-1000">
                <img 
                  src="/conten_centro/logo.jpg" 
                  alt="Centro Roast Space Logo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}