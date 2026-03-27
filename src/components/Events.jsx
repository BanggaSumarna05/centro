import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, X, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    img: "/conten_centro/tempat.webp",
    title: "Live Akustik Sabtu & Kolaborasi Kreatif",
    date: "Sabtu, 20:00 WIB",
    type: "Musik",
    readTime: "3 min read",
    content: "Malam minggu tidak harus dihabiskan dengan keramaian yang memekakkan telinga. Bergabunglah bersama kami di Centro Roast Space untuk sesi live akustik intim bersama talenta-talenta lokal Tasikmalaya. Sambil menikmati signature coffee kami, rasakan suasana hangat di mana inspirasi bisa datang dari petikan gitar. Jangan lupa melakukan reservasi tempat lebih awal!",
  },
  {
    id: 2,
    img: "/conten_centro/makanan1.jpg",
    title: "Creative Meetup: Membangun Personal Brand",
    date: "Sabtu, 14:00 WIB",
    type: "Komunitas",
    readTime: "5 min read",
    content: "Calling all content creators, freelancer, dan creative minds! Bulan ini kami mengadakan sesi kumpul santai membahas tuntas strategi membangun personal brand di era digital. Dihadiri oleh praktisi lokal yang sudah berpengalaman. Acara ini gratis, namun kapasitas terbatas untuk menjaga kualitas diskusi.",
  },
  {
    id: 3,
    img: "/conten_centro/minuman (2).jpg",
    title: "Sesi Cupping Kopi Spesial Bulanan",
    date: "Minggu, 09:00 WIB",
    type: "Edukasi",
    readTime: "4 min read",
    content: "Penasaran dengan perjalanan rasa dari biji kopi hingga berakhir di cangkirmu? Ikuti sesi cupping kopi eksklusif di mana head roaster kami akan memandu kamu mengenali berbagai profil rasa (tasting notes) dari beans terbaru kami. Sesi ini sangat cocok untuk pemula maupun pencinta kopi tingkat lanjut.",
  },
];

export default function Events({ hideHeader = false }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Mencegah scroll saat modal terbuka
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedEvent]);
  return (
    <section id="events" className="py-20 sm:py-28 lg:py-32 bg-surface-secondary text-base-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase">Agenda</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 leading-tight text-base-dark">
                Tempat Berkumpulnya
                <br className="hidden sm:block" />
                Ide & Komunitas<span className="text-brand">.</span>
              </h2>
            </motion.div>
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-brand hover:text-base-dark transition-colors text-sm font-semibold tracking-wider uppercase group shrink-0"
            >
              Lihat Semua Event
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        )}

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-surface-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border-stroke/30 hover:border-brand/30 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Type Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-surface-card/90 backdrop-blur-sm border border-border-stroke/30 px-3 py-1 rounded-full text-xs font-semibold text-brand">
                  {event.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-text-muted text-xs sm:text-sm mb-3">
                  <Calendar size={14} className="text-brand shrink-0" />
                  <span>{event.date}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-base-dark mb-3 group-hover:text-brand transition-colors line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-text-muted text-sm line-clamp-2 mb-5 leading-relaxed">
                  {event.content}
                </p>

                <div className="flex items-center gap-2 text-brand font-semibold text-sm group-hover:underline underline-offset-4">
                  Baca Selengkapnya
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay / Detail Blog */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-base-dark/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-surface-primary rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-base-dark/50 hover:bg-brand text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label="Tutup detail event"
              >
                <X size={20} />
              </button>

              {/* Modal Banner */}
              <div className="relative h-64 sm:h-80 lg:h-96 shrink-0">
                <img
                  src={selectedEvent.img}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-dark/90 via-base-dark/30 to-transparent" />
                
                {/* Banner Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                      {selectedEvent.type}
                    </span>
                    <span className="text-white/80 text-sm font-medium flex items-center gap-1.5">
                      <Clock size={14} /> {selectedEvent.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                    {selectedEvent.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto bg-surface-primary">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 pb-8 border-b border-border-stroke/20">
                  <div className="flex items-center gap-2 text-base-dark/70 font-medium">
                    <Calendar size={18} className="text-brand" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-base-dark/70 font-medium">
                    <MapPin size={18} className="text-brand" />
                    <span>Centro Roast Space</span>
                  </div>
                </div>

                <div className="prose prose-lg prose-p:text-base-dark/80 prose-p:leading-relaxed max-w-none">
                  <p className="text-lg">{selectedEvent.content}</p>
                </div>

                <div className="mt-10 pt-8 border-t border-border-stroke/20 flex justify-end">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Centro%20Roast%20Space,%20saya%20ingin%20info%20lebih%20lanjut%20tentang%20event%20terbaru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand text-white px-8 py-3.5 rounded-xl font-bold hover:bg-brand/90 hover:shadow-lg transition-all"
                  >
                    Tanya Tentang Event Ini
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
