import { motion } from "framer-motion";
import { Star, MessageCircleHeart } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Andi R.",
      role: "Freelancer",
      text: "Tempat paling pewe buat nugas di Tasik! Kopinya serius enak, wifi kenceng, plus banyak colokan. Playlist lagunya juga nggak berisik. 10/10.",
      rating: 5,
    },
    {
      name: "Siska M.",
      role: "Event Organizer",
      text: "Sempat ngadain mini workshop di sini, kru Centro sangat kooperatif. Ruangnya luas dan sangat proper buat acara komunitas.",
      rating: 5,
    },
    {
      name: "Rizky D.",
      role: "Coffee Enthusiast",
      text: "Signature coffee mereka 'Like At Club' beneran mind-blowing. Jarang nemu profil rasa kompleks gini. Definitly my go-to coffee shop sekarang.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-base-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-16 gap-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-[#FFD700] font-bold tracking-widest text-xs sm:text-sm uppercase block mb-3 flex items-center justify-center lg:justify-start gap-2">
              <MessageCircleHeart size={16}/> Komunitas Bicara
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Kisah & <span className="text-brand">Pengalaman.</span>
            </h2>
          </motion.div>

          {/* Core Rating Badge (Requested Feature) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex items-center gap-6 shadow-2xl"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#FFD700]/20 rounded-full">
              <Star size={32} className="text-[#FFD700] fill-[#FFD700]" />
            </div>
            <div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-black text-white leading-none">4.9</span>
                <span className="text-white/60 font-bold mb-1">/ 5</span>
              </div>
              <p className="text-white/80 text-sm font-medium">Dari <span className="text-[#FFD700] font-bold">200+</span> pengunjung setia</p>
            </div>
          </motion.div>
          
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-10 rounded-3xl hover:-translate-y-3 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,215,0,0.05)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand/40 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white tracking-wide">{review.name}</p>
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
