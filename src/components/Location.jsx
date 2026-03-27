import { motion } from "framer-motion";
import { Copy, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Location() {
  const [copied, setCopied] = useState(false);
  const mapLink = "https://maps.app.goo.gl/RBcYjact6fLHbpqd6";
  const address = "Jl. Mohamad Hatta No.119, Sukamanah, Kec. Cipedes, Kota Tasikmalaya, Jawa Barat 46131";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-surface-primary text-base-dark border-t border-border-stroke/20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Split Layout: Map + Massive CTA */}
        <div className="flex flex-col lg:flex-row bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-border-stroke/10">
          
          {/* Left Side: Map */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative order-2 lg:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.475487779774!2d108.21639399432822!3d-7.312384799002931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f51006e8b4e77%3A0x6296dfc82d46e10f!2sCentro%20Roast%20Space!5e0!3m2!1sen!2sid!4v1709405432135!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centro Roast Space Map Location"
              className="absolute inset-0 grayscale-[50%] contrast-125 hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Right Side: Massive CTA */}
          <div className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-20 flex flex-col justify-center order-1 lg:order-2 bg-base-dark text-white relative overflow-hidden group">
            
            {/* Background design element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand/20 blur-[100px] rounded-full group-hover:bg-brand/40 transition-colors duration-1000" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Visit <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand/60">Centro</span> <br/>
                Today.
              </h2>
              
              <p className="text-white/80 text-lg sm:text-xl font-medium mb-12 max-w-md">
                Jangan biarkan ide besar hanya berakhir di kepala. Mari bertukar pikiran dan nikmati secangkir inspirasi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Centro%20Roast%20Space,%20saya%20ingin%20reservasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg hover:bg-brand/90 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(184,160,122,0.4)] transition-all duration-300"
                >
                  Book Your Space Now <ArrowRight size={20}/>
                </a>
              </div>

              {/* Address Quick Actions */}
              <div className="mt-12 flex flex-col gap-4">
                <p className="font-mono text-sm text-brand tracking-widest uppercase">Location</p>
                <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <MapPin size={24} className="text-brand shrink-0 mt-1" />
                  <div>
                    <p className="text-white/90 leading-relaxed font-medium mb-4">{address}</p>
                    <div className="flex gap-4">
                      <a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-brand hover:text-white transition-colors uppercase tracking-wider"
                      >
                        <ExternalLink size={16} /> Open Map
                      </a>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 text-sm font-bold text-brand hover:text-white transition-colors uppercase tracking-wider"
                      >
                        {copied ? <span className="text-green-400">Copied!</span> : <><Copy size={16} /> Copy Text</>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
