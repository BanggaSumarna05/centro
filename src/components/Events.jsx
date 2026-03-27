import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const events = [
  {
    img: "/conten_centro/tempat.webp",
    title: "Live Akustik Sabtu",
    date: "Sabtu, 20:00 WIB",
    type: "Musik",
  },
  {
    img: "/conten_centro/makanan1.jpg",
    title: "Creative Meetup",
    date: "Minggu Pertama",
    type: "Komunitas",
  },
  {
    img: "/conten_centro/minuman (2).jpg",
    title: "Sesi Diskusi & Ngopi",
    date: "Rabu, 16:00 WIB",
    type: "Talkshow",
  },
];

export default function Events({ hideHeader = false }) {
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
              key={i}
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
                
                <h3 className="text-xl sm:text-2xl font-bold text-base-dark mb-3 group-hover:text-brand transition-colors">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-text-muted text-xs sm:text-sm mb-5">
                  <MapPin size={14} className="shrink-0" />
                  <span>Centro Roast Space, Tasikmalaya</span>
                </div>

                <button className="w-full bg-surface-secondary text-base-dark font-semibold py-3 rounded-xl hover:bg-brand hover:text-white transition-all duration-300 text-sm">
                  Ikut Serta
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
