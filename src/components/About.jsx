import { motion } from "framer-motion";
import { Coffee, Users, Briefcase } from "lucide-react";

const highlights = [
  { icon: Briefcase, text: "Nyaman untuk kerja remote" },
  { icon: Users, text: "Cocok untuk meeting santai" },
  { icon: Coffee, text: "Komunitas kreatif Tasikmalaya" },
];

export default function About({ hideHeader = false }) {
  return (
    <section id="tentang" className="py-20 sm:py-28 lg:py-32 bg-surface-primary text-base-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[3/4]">
              <img
                src="/conten_centro/tempat.webp"
                alt="Suasana Centro Roast Space"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 lg:-right-8 bg-brand text-white px-5 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-xl"
            >
              <p className="text-2xl sm:text-3xl font-black">10:00</p>
              <p className="text-xs sm:text-sm font-light opacity-80">s/d Tengah Malam</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!hideHeader && (
              <>
                <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">
                  Tentang Kami
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 sm:mb-6 leading-tight text-base-dark">
                  Lebih dari Sekadar
                  <br />
                  <span className="text-brand">Coffee Shop.</span>
                </h2>
              </>
            )}
            <p className="text-text-muted text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              Centro Roast Space adalah ruang kreatif di Tasikmalaya tempat bertemunya ide, komunitas, dan kreativitas. Sebuah titik temu di mana inspirasi mengalir di setiap cangkir kopi dan setiap sudut ruangan.
            </p>
            
            <div className="space-y-4 sm:space-y-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-dark/15 flex items-center justify-center text-accent-dark shrink-0">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium text-sm sm:text-base text-base-dark">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
