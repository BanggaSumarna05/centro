import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, ease: "backOut", duration: 0.5 }}
      whileHover={{ scale: 1.1, y: -3 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 group"
      aria-label="Reservasi via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.441-1.273.605-1.446c.143-.153.348-.19.528-.19.058 0 .107.005.152.008.167.01.252.024.364.283.14.333.473 1.154.516 1.24.043.087.087.163.043.26-.042.1-.058.145-.128.232-.07.087-.13.139-.187.218-.087.116-.17.218-.07.394.1.176.44.736.945 1.167.65.549 1.191.731 1.365.816.176.088.271.074.384-.043.116-.116.48-.565.613-.757.13-.193.268-.163.43-.102.162.06 1.033.488 1.21.574.177.086.292.13.336.203.044.072.044.418-.1.823z" />
      </svg>
      <span className="font-semibold text-xs sm:text-sm tracking-[0.02em] whitespace-nowrap hidden lg:block">
        Reservasi via WhatsApp
      </span>
      <span className="font-semibold text-xs tracking-[0.02em] whitespace-nowrap lg:hidden">
        Reservasi
      </span>
    </motion.a>
  );
}
