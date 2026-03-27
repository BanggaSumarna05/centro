import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Coffee, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToTentang = () => {
    const el = document.getElementById("tentang");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end bg-base-dark text-white overflow-hidden"
    >
      {/* ── Background (untouched) ── */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src="/conten_centro/tempat.webp"
          alt="Centro Roast Space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/92 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 15% 85%, rgba(140,98,57,0.16) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 pt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 items-end">

          {/* LEFT — headline block */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full border border-brand/40 bg-brand/10 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/80">
                  Buka Setiap Hari &nbsp;·&nbsp; 10:00 – 24:00
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-black leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
              >
                <span className="block text-white">Space</span>
                <span className="block text-white">Isn't Empty</span>
                <span
                  className="block text-nowrap"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(255,255,255,0.22)",
                  }}
                >
                  It's Where
                </span>
              </motion.h1>
            </div>

            {/* Accented last word */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 sm:-mt-2 -mt-4 text-nowrap"
            >
              <div
                className="h-[3px] flex-shrink-0 rounded-full hidden sm:block"
                style={{
                  width: "clamp(2rem, 4vw, 4rem)",
                  background: "linear-gradient(90deg, #8c6239, transparent)",
                }}
              />
              <span
                className="font-black leading-none tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)",
                  color: "#c28a52",
                  textShadow: "0 0 80px rgba(194,138,82,0.35)",
                }}
              >
                Idea Collide.
              </span>
            </motion.div>

            {/* ── Tagline ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mt-2"
            >
              <div className="w-px h-5 bg-brand/50 flex-shrink-0" />
              <p className="text-sm sm:text-base tracking-[0.06em] text-white/38">
                <span className="italic font-light">Titik temu</span>
                <span className="text-white/25 mx-2">—</span>
                <span className="font-medium text-white/60">inspirasi, komunitas, & kopi.</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT — copy + CTA */}
          <div className="lg:col-span-4 flex flex-col gap-7 lg:pb-3 lg:pl-8">

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-sm sm:text-base text-white/55 leading-relaxed max-w-xs"
            >
              Centro Roast Space memadukan kopi premium dengan atmosfer dinamis
              untuk kamu bekerja, bersantai, dan terhubung.
            </motion.p>

            {/* Thin divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ transformOrigin: "left" }}
              className="h-px bg-white/12 w-full"
            />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3"
            >
              <Link
                to="/menu"
                className="group relative overflow-hidden flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #a0723a 0%, #7a5129 100%)",
                  boxShadow:
                    "0 8px 32px rgba(140,98,57,0.4), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <Coffee size={16} />
                Lihat Menu
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />
              </Link>

              <Link
                to="/tentang"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white/70 border border-white/18 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/35 transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                Jelajahi Ruang
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Vertical label — right side ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10"
      >
        <span
          className="text-[9px] font-semibold tracking-[0.3em] uppercase text-white/25"
          style={{ writingMode: "vertical-rl" }}
        >
          Centro Roast Space
        </span>
        <div className="w-px h-16 bg-white/12 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 absolute top-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #c28a52, transparent)",
            }}
          />
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        onClick={scrollToTentang}
        aria-label="Scroll ke bawah"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-90 transition-opacity z-10 cursor-pointer bg-transparent border-0 p-0"
      >
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 absolute top-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #c28a52, transparent)",
            }}
          />
        </div>
        <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-white/50">
          Scroll
        </span>
      </motion.button>
    </section>
  );
}