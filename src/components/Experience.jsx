import { motion } from "framer-motion";
import { Coffee, Monitor, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Kopi Berkualitas",
    desc: "Biji kopi pilihan yang diroasting dengan presisi untuk cita rasa terbaik di setiap hirupan.",
    color: "bg-brand/10 text-brand",
  },
  {
    icon: Monitor,
    title: "Ruang Produktif",
    desc: "Lingkungan tenang dan nyaman, didesain khusus untuk mendukung fokus dan produktivitasmu.",
    color: "bg-accent-dark/10 text-accent-dark",
  },
  {
    icon: Users,
    title: "Komunitas Kreatif",
    desc: "Titik temu para kreator, pekerja lepas, dan wirausahawan lokal Tasikmalaya.",
    color: "bg-brand/10 text-brand",
  },
  {
    icon: Heart,
    title: "Suasana Nyaman",
    desc: "Interior bernuansa hangat dan earthy yang membuatmu seketika merasa seperti di rumah.",
    color: "bg-accent-dark/10 text-accent-dark",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-32 bg-surface-secondary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase">
            Kenapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 text-base-dark">
            Nilai yang Kami Bawa<span className="text-brand">.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-surface-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-stroke/30 hover:border-brand/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={24} />
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-base-dark mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
