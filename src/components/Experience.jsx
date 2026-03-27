import { motion } from "framer-motion";
import { Coffee, Mic, Laptop } from "lucide-react";

const values = [
  {
    icon: <Coffee size={36} />,
    title: "Premium Beans",
    description: "Biji kopi pilihan yang di-roast sendiri untuk memastikan setiap cangkir memiliki karakter rasa yang konsisten dan luar biasa.",
  },
  {
    icon: <Mic size={36} />,
    title: "Event Space",
    description: "Area yang dirancang fleksibel untuk mendukung live music, talkshow, workshop, hingga private gathering komunitas Anda.",
  },
  {
    icon: <Laptop size={36} />,
    title: "Work Friendly",
    description: "Wifi stabil, stopkontak berlimpah, dan suasana nyaman yang sangat ideal bagi remote worker maupun pertemuan bisnis.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-surface-secondary text-base-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (optional if we want to add one, but let's keep it clean since it's a feature grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase block mb-3">
            Ekspektasi Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-base-dark">
            Fasilitas & <span className="text-brand">Layanan.</span>
          </h2>
        </motion.div>

        {/* 3 Value Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group bg-white rounded-3xl p-8 sm:p-10 border border-border-stroke/10 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-surface-secondary text-brand flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">{value.icon}</span>
              </div>
              
              {/* Text */}
              <h3 className="text-2xl font-black text-base-dark mb-4 group-hover:text-brand transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-text-muted leading-relaxed line-clamp-3">
                {value.description}
              </p>

              {/* Decorative Line */}
              <div className="w-12 h-1 bg-brand/20 mt-8 rounded-full group-hover:w-full group-hover:bg-brand transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
