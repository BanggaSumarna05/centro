import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section id="video" className="relative w-full h-[60vh] sm:h-[80vh] min-h-[500px] overflow-hidden bg-base-dark">
      
      {/* The Actual Video Element */}
      <video
        ref={videoRef}
        src="/conten_centro/video tempat centro.mp4"
        className="absolute inset-0 w-full h-full object-cover object-center"
        controls={isPlaying}
        playsInline
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Cinematic Overlay (Hidden when playing) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center group"
          >
            {/* Dark Cinematic Cover */}
            <div className="absolute inset-0 bg-base-dark/60 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-primary/20 via-transparent to-surface-primary/20 pointer-events-none" />

            <div className="relative z-20 flex flex-col items-center">
              {/* Massive Play Button */}
              <motion.button
                onClick={handlePlay}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                className="relative group/play mb-8"
              >
                {/* Glowing aura */}
                <div className="absolute inset-0 bg-brand rounded-full blur-xl opacity-40 group-hover/play:opacity-80 group-hover/play:scale-150 transition-all duration-500" />
                
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/play:bg-brand group-hover/play:border-brand transition-colors duration-500">
                  <Play size={40} className="text-white fill-white translate-x-1" />
                </div>
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-brand font-bold tracking-[0.3em] text-xs sm:text-sm uppercase block mb-3">
                  Simfoni Visual
                </span>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                  Feel The <br className="sm:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Atmosphere.</span>
                </h2>
                <p className="text-white/80 max-w-lg mx-auto text-sm sm:text-base font-medium">
                  Tonton cuplikan singkat tentang hiruk-pikuk hangatnya kebersamaan, aroma kopi yang menguar, dan energi kreatif di Centro Roast Space.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
