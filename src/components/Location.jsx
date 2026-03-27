import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="kontak" className="py-20 sm:py-28 lg:py-32 bg-surface-primary text-base-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase">Lokasi Kami</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 text-base-dark">
            Mampir ke Tempat Kami<span className="text-brand">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] lg:h-full min-h-[300px] border border-border-stroke/20 order-2 lg:order-1"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.418703417743!2d108.204561!3d-7.3204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f50b2a59a7fdb%3A0x6b4f7e1b6f50a8a0!2sTasikmalaya%2C%20Tasikmalaya%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Centro Roast Space"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-5 order-1 lg:order-2"
          >
            {/* Address Card */}
            <div className="bg-surface-card rounded-2xl p-5 sm:p-7 border border-border-stroke/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1">Alamat</h4>
                  <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                    Jl. KH. Lukmanul Hakim No.01<br/>Tasikmalaya, Jawa Barat
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-surface-card rounded-2xl p-5 sm:p-7 border border-border-stroke/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent-dark/10 text-accent-dark flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1">Jam Buka</h4>
                  <p className="text-text-muted text-sm sm:text-base">
                    Buka setiap hari<br/>10:00 – 24:00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-surface-card rounded-2xl p-5 sm:p-7 border border-border-stroke/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-1">Hubungi Kami</h4>
                  <p className="text-text-muted text-sm sm:text-base">+62 812-3456-7890</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-brand text-white px-8 py-3.5 sm:py-4 rounded-full font-bold text-base shadow-lg hover:shadow-brand/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 sm:self-start"
            >
              <MapPin size={18} />
              Dapatkan Arah
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
