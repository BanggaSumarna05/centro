import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-surface-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase">Video Tour</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 text-base-dark">
            Rasakan Suasana Centro<span className="text-brand">.</span>
          </h2>
        </motion.div>

        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer aspect-video"
          onClick={() => setIsPlaying(true)}
        >
          {/* Poster Image */}
          <img
            src="/conten_centro/tempat.webp"
            alt="Suasana Centro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-base-dark/30 flex flex-col items-center justify-center hover:bg-base-dark/40 transition-colors">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-brand text-white rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(140,98,57,0.5)]"
            >
              <Play size={28} fill="currentColor" className="ml-1" />
            </motion.div>
            <p className="text-white/80 text-sm font-medium mt-4 tracking-wider uppercase">Tonton Video</p>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/conten_centro/video tempat centro.mp4"
                autoPlay
                controls
                className="w-full h-full object-cover rounded-2xl"
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-brand transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
