import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, ease: "easeOut", duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] flex items-center justify-center gap-0 group hover:gap-3 transition-all duration-500 overflow-hidden"
      aria-label="Reservasi via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 shrink-0"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.441-1.273.605-1.446c.143-.153.348-.19.528-.19.058 0 .107.005.152.008.167.01.252.024.364.283.14.333.473 1.154.516 1.24.043.087.087.163.043.26-.042.1-.058.145-.128.232-.07.087-.13.139-.187.218-.087.116-.17.218-.07.394.1.176.44.736.945 1.167.65.549 1.191.731 1.365.816.176.088.271.074.384-.043.116-.116.48-.565.613-.757.13-.193.268-.163.43-.102.162.06 1.033.488 1.21.574.177.086.292.13.336.203.044.072.044.418-.1.823z" />
      </svg>
      <span className="font-sans font-bold text-sm tracking-wide whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out">
        Reservasi via WhatsApp
      </span>
    </motion.a>
  );
}
