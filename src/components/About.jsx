import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About({ hideHeader = false }) {
  const features = [
    "Creative Space",
    "Community Hub",
    "Premium Coffee Experience"
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-surface-primary text-base-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 70/30 Split Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
          
          {/* Left Column: 70% Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[65%] relative h-[400px] sm:h-[500px] lg:h-auto rounded-[2rem] overflow-hidden group shadow-2xl"
          >
            <img
              src="/conten_centro/tempat.webp"
              alt="Suasana Centro Roast Space"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-base-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            
            {/* Dynamic floating element to make it feel alive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                <span className="text-xl font-black text-brand">☕</span>
              </div>
              <div>
                <p className="font-bold text-base-dark text-lg leading-tight">Roast Space</p>
                <p className="text-sm text-text-muted font-medium">Est. Tasikmalaya</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 30% Text Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[35%] flex flex-col justify-center"
          >
            {!hideHeader && (
              <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase block mb-4">
                Filosofi Kami
              </span>
            )}
            
            <h2 className="text-4xl sm:text-5xl font-black text-base-dark leading-tight mb-8">
              Lebih Dari <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#d3b482]">Sekadar Kopi.</span>
            </h2>
            
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Kami membangun ruang di mana ide-ide besar lahir dari secangkir kopi yang diseduh dengan penuh presisi. Tempat di mana kenyamanan, produktivitas, dan rasa bersatu.
            </p>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-5 mb-10">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:-translate-y-1 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-base-dark text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Centro%20Roast%20Space,%20saya%20tertarik%20mengadakan%20acara%20komunitas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-base-dark text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-brand hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-fit"
            >
              Bergabung Bersama Kami
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
