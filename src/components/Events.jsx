import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X, Clock, Timer, ArrowRight } from "lucide-react";

// Urgency-focused event data
const events = [
  {
    id: 1,
    img: "/conten_centro/perunngu.jpg",
    title: "Opening Centro Roast Space",
    date: "Sabtu, 20:00 WIB",
    type: "Musik",
    urgency: "Starts in 2 days",
    readTime: "3 min read",
    content: "Centro Roast Space proudly presents the talents who will color our Grand Opening night: PERUNGGU,RAFAEL MARIO,SOBAT MEJIKOM at Sunday, 5 April 2026 A celebration of music, atmosphere, and curated experience in one space. Mark your calendar. Be there for the beginning of something special..",
  },
  {
    id: 2,
    img: "/conten_centro/makanan1.jpg",
    title: "Creative Meetup",
    date: "Minggu, 14:00 WIB",
    type: "Komunitas",
    urgency: "Starts in 3 days",
    readTime: "5 min read",
    content: "Sesi kumpul santai membahas strategi personal brand di era digital. Acara gratis, kapasitas terbatas.",
  },
  {
    id: 3,
    img: "/conten_centro/minuman (2).jpg",
    title: "Latte Art Workshop",
    date: "Rabu, 15:00 WIB",
    type: "Edukasi",
    urgency: "Only 5 seats left",
    readTime: "4 min read",
    content: "Pelajari teknik dasar hingga lanjutan membuat latte art yang indah bersama head barista kami. Sangat cocok bagi Anda pecinta kopi dan barista pemula.",
  },
];

export default function Events({ hideHeader = false }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedEvent]);

  return (
    <section id="events" className="py-24 sm:py-32 bg-surface-secondary text-base-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="text-[#FF416C] font-bold tracking-widest text-xs sm:text-sm uppercase block mb-3">Agenda Terdekat</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-base-dark leading-none">
              Jangan Sampai <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]">Terlewat.</span>
            </h2>
          </motion.div>
        )}

        {/* Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer flex flex-col h-full border border-border-stroke/20"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Type Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-brand shadow-sm">
                  {event.type}
                </span>

                {/* Urgency Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-end">
                  <span className="flex items-center gap-1.5 bg-[#FF416C] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse shadow-[#FF416C]/30">
                    <Timer size={14} /> {event.urgency}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-base-dark mb-4 group-hover:text-brand transition-colors line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="flex flex-col gap-3 text-text-muted text-sm font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-brand shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-brand shrink-0" />
                    <span className="truncate">Centro Roast Space</span>
                  </div>
                </div>

                <div className="mt-auto w-full bg-surface-secondary text-center py-3.5 rounded-xl font-bold text-base-dark group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  Lihat Detail Event
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Centro%20Roast%20Space,%20saya%20ingin%20info%20event%20selanjutnya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-base-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_8px_30px_rgba(28,26,23,0.4)] hover:-translate-y-2 transition-all duration-300"
          >
            Hubungi Kami Untuk Acara <ArrowRight size={20} />
          </a>
        </motion.div>

      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-base-dark/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-surface-primary rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-base-dark/50 hover:bg-[#FF416C] text-white p-2.5 rounded-full backdrop-blur-sm transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 sm:h-80 shrink-0">
                <img src={selectedEvent.img} alt={selectedEvent.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#FF416C] text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                      <Timer size={12}/> {selectedEvent.urgency}
                    </span>
                    <span className="text-white/90 text-sm font-medium flex items-center gap-1.5">
                      <Clock size={14} /> {selectedEvent.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                    {selectedEvent.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 pb-8 border-b border-border-stroke/20">
                  <div className="flex items-center gap-2 text-base-dark/80 font-bold">
                    <Calendar size={18} className="text-brand" /> {selectedEvent.date}
                  </div>
                  <div className="flex items-center gap-2 text-base-dark/80 font-bold">
                    <MapPin size={18} className="text-brand" /> Centro Roast Space
                  </div>
                </div>
                <div className="prose prose-lg prose-p:text-base-dark/80 leading-relaxed max-w-none">
                  <p>{selectedEvent.content}</p>
                </div>
                <div className="mt-10 flex justify-end">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20reservasi%20untuk%20event%20terbaru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF416C] text-white px-8 py-3.5 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    Daftar Sekarang
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
