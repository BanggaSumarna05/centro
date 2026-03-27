import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const location = useLocation();

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/tentang" },
    { label: "Menu", href: "/menu" },
    { label: "Galeri", href: "/galeri" },
    { label: "Event", href: "/event" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface-primary/95 backdrop-blur-xl py-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-b border-border-stroke/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
  
  {/* Logo */}
  <Link to="/" className="flex items-center gap-3 group shrink-0">
    <img
      src="/conten_centro/logo.jpg"
      alt="Centro Roast Space Logo"
      className="w-10 h-10 rounded-full object-cover ring-2 ring-brand/20 group-hover:ring-brand/60 transition-all duration-300"
    />
    <span className="text-lg sm:text-xl font-extrabold tracking-tight text-base-dark leading-none">
      CENTRO <span className="text-brand">ROAST SPACE</span>
    </span>
  </Link>

  {/* Desktop Navigation */}
  <nav className="hidden lg:flex items-center gap-2">
    {navLinks.map((link) => {
      const isActive =
        location.pathname === link.href ||
        (link.href === "/" && location.pathname === "/");

      return (
        <Link
          key={link.label}
          to={link.href}
          className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group
            ${
              isActive
                ? "text-brand"
                : "text-text-muted hover:text-base-dark"
            }`}
        >
          {link.label}

          {/* Hover underline */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand rounded-full transition-all duration-300 group-hover:w-6" />

          {/* Active dot */}
          {isActive && (
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand rounded-full" />
          )}
        </Link>
      );
    })}

    {/* CTA */}
    <a
      href="#kontak"
      className="ml-4 inline-flex items-center justify-center bg-brand text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-base-dark hover:shadow-lg hover:shadow-brand/20 active:scale-95"
    >
      Kunjungi Kami
    </a>
  </nav>

  {/* Mobile Toggle */}
  <button
    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-base-dark hover:text-brand hover:bg-brand/5 transition-all duration-300"
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Toggle menu"
  >
    {isOpen ? <X size={22} /> : <Menu size={22} />}
  </button>

</div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-surface-primary/98 backdrop-blur-2xl border-t border-border-stroke/10"
          >
            <div className="flex flex-col items-center py-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3 text-lg font-medium text-text-muted hover:text-brand hover:bg-brand/5 transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="#kontak"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-brand text-white px-10 py-3.5 rounded-full font-semibold text-base hover:bg-base-dark transition-all"
              >
                Kunjungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
