import { motion } from "framer-motion";

const images = [
  { src: "/conten_centro/tempat.webp", text: "Suasana Hangat", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/conten_centro/minuman.jpg", text: "Kopi Pilihan", span: "" },
  { src: "/conten_centro/makanan1.jpg", text: "Sajian Spesial", span: "" },
  { src: "/conten_centro/minuman (2).jpg", text: "Minuman Segar", span: "" },
  { src: "/conten_centro/makanan2.jpg", text: "Cemilan Favorit", span: "" },
];

export default function Gallery({ hideHeader = false }) {
  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-surface-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase">Galeri Kami</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 text-base-dark">
              Ruang yang Menginspirasi<span className="text-brand">.</span>
            </h2>
          </motion.div>
        )}

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px]">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-base-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-4 sm:p-5">
                <span className="text-white text-base sm:text-lg font-bold translate-y-3 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                  {item.text}
                </span>
              </div>
              <img
                src={item.src}
                alt={item.text}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
