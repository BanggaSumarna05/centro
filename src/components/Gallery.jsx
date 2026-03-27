import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const galleryImages = [
  { img: "/conten_centro/tempat.webp", alt: "Creative Space Setup", title: "Creative Space", colSpan: "col-span-12 sm:col-span-8", height: "h-[400px] sm:h-[500px]" },
  { img: "/conten_centro/minuman.jpg", alt: "Signature Coffee", title: "Premium Roast", colSpan: "col-span-12 sm:col-span-4", height: "h-[300px] sm:h-[500px]" },
  { img: "/conten_centro/makanan1.jpg", alt: "Gathering Event", title: "Community Hub", colSpan: "col-span-12 sm:col-span-4", height: "h-[400px] sm:h-[450px]" },
  { img: "/conten_centro/minuman (2).jpg", alt: "Latte Art", title: "Latte Art", colSpan: "col-span-12 sm:col-span-4", height: "h-[300px] sm:h-[450px]" },
  { img: "/conten_centro/makanan3.jpg", alt: "Delicious Snacks", title: "Snack & Meals", colSpan: "col-span-12 sm:col-span-4", height: "h-[400px] sm:h-[450px]" },
];

export default function Gallery({ hideHeader = false }) {
  return (
    <section id="galeri" className="py-24 sm:py-32 bg-surface-primary text-base-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase block mb-3">Atmosfer Visual</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-base-dark leading-tight">
                Galeri <span className="text-brand">Centro.</span>
              </h2>
            </motion.div>
            <motion.a
              href="https://instagram.com/centroroast"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 border border-border-stroke/20 bg-white px-5 py-3 rounded-full hover:shadow-lg hover:-translate-y-1 hover:border-brand/30 transition-all font-bold text-sm sm:text-base text-base-dark group"
            >
              <InstagramIcon size={18} className="text-[#E1306C]" />
              Follow Instagram Kami <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        )}

        {/* Pinterest-style Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-3xl ${item.colSpan} ${item.height} group shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-base-dark/0 group-hover:bg-base-dark/40 backdrop-blur-[0px] group-hover:backdrop-blur-[2px] transition-all duration-500 ease-out" />

              {/* Text Overlay on Hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-white font-black text-2xl sm:text-3xl tracking-tight leading-tight">
                  {item.title}
                </span>
                <span className="text-white/80 font-medium text-sm mt-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                  Lihat Momen <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
