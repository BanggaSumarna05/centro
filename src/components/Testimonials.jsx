import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ahmad Rizky",
    role: "Freelancer",
    text: "Tempat paling nyaman buat remote working di Tasik. Kopinya nendang, colokan banyak, dan playlist lagunya pas banget buat fokus.",
    rating: 5,
  },
  {
    name: "Sarah Wijaya",
    role: "Kreator Konten",
    text: "Vibe interiornya estetik parah! Cocok buat ngonten. Menu pastry dan signature coffee-nya bener-bener recommended. Pelayanan juga super ramah.",
    rating: 5,
  },
  {
    name: "Bimo Anggara",
    role: "Mahasiswa",
    text: "Sering banget ke sini buat nugas atau sekadar nongkrong bareng temen. Ruangannya luas dan harganya masih masuk akal buat kualitas se-premium ini.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="ulasan" className="py-20 sm:py-28 lg:py-32 bg-surface-primary text-base-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Social Proof Badge */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left max-w-2xl"
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase block mb-3">Kepercayaan Pelanggan</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-base-dark leading-tight">
              Dipercaya oleh Komunitas <span className="text-brand">Kreatif.</span>
            </h2>
          </motion.div>

          {/* Followers Badge */}
          <motion.a
            href="https://instagram.com/centroroast"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center justify-center sm:flex-row gap-4 sm:gap-6 bg-white p-6 sm:px-8 sm:py-6 rounded-3xl shadow-xl border border-border-stroke/10 hover:-translate-y-1 hover:shadow-2xl hover:border-brand/30 transition-all duration-300 shrink-0"
          >
            <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-500 delay-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-black text-3xl sm:text-2xl text-base-dark tracking-tight">5.9K+</p>
              <p className="text-text-muted text-sm font-semibold uppercase tracking-widest mt-1">Pengikut IG</p>
            </div>
          </motion.a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-surface-secondary rounded-3xl p-8 sm:p-10 border border-border-stroke/10 hover:border-brand/30 transition-colors group"
            >
              <Quote size={40} className="absolute top-8 right-8 text-brand/10 group-hover:text-brand/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              
              <p className="text-base-dark/80 font-medium text-lg leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 text-brand font-black text-xl flex items-center justify-center shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-base-dark">{review.name}</h4>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
