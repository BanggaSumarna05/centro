import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PageHeader({ title, subtitle, bgImage }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div ref={ref} className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-base-dark/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-transparent z-10" />
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-brand/50" />
            <span className="text-brand font-bold tracking-[0.2em] text-xs sm:text-sm uppercase">
              Centro <span className="text-white">Roast Space</span>
            </span>
            <div className="h-px w-12 bg-brand/50" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            {title}
          </h1>
          
          <p className="text-white/80 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
