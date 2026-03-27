import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Star, ArrowRight } from "lucide-react";

// The complete menu data transcribed from menu.jpg
const menuData = {
  coffee: {
    title: "Coffee",
    image: "/conten_centro/minuman.jpg",
    categories: [
      {
        name: "Coffee Based",
        items: [
          { name: "Americano (Black)", price: "22K/26K" },
          { name: "Espresso (Black)", price: "17K/20K" },
          { name: "Long Black (Black)", price: "22K/26K" },
          { name: "Latte (White)", price: "27K/30K" },
          { name: "Cappucino (White)", price: "26K/28K" },
          { name: "Magic (White)", price: "30K/32K", bestSeller: true },
          { name: "Creme Brulee (White)", price: "30K" },
        ]
      },
      {
        name: "Signature Coffee",
        items: [
          { name: "Dirty Latte", price: "28K", signature: true },
          { name: "Tiramisu Buttercream", price: "33K", bestSeller: true, signature: true },
          { name: "Creamy Bold CENTRO", price: "28K", signature: true },
          { name: "Mont Blanc", price: "28K" },
          { name: "Amer De'blossom", price: "27K" },
          { name: "Kopi Lemon", price: "26K" },
        ]
      },
      {
        name: "Signature Beverage",
        items: [
          { name: "Like At Club", price: "28K", signature: true },
          { name: "Sunset On Space", price: "33K" },
          { name: "Creamy Bold CENTRO", price: "28K" },
          { name: "Butter Fizz", price: "27K" },
        ]
      },
      {
        name: "Milk Based",
        items: [
          { name: "Strawberry Cheesecake", price: "30K", bestSeller: true },
          { name: "Blueberry Cloud", price: "30K", signature: true },
          { name: "Choco Berry-pop", price: "28K", signature: true },
          { name: "Houjicha", price: "30K" },
          { name: "Gen Maicha", price: "30K", signature: true },
        ]
      }
    ]
  },
  slowbar: {
    title: "Slow Bar",
    image: "/conten_centro/minuman (3).jpg",
    categories: [
      {
        name: "Matcha Seremonial - Yabukita",
        items: [
          { name: "Matcha Latte", price: "28K" },
          { name: "Usucha", price: "22K" },
          { name: "CENTRO Pasionate", price: "31K", signature: true },
        ]
      },
      {
        name: "Matcha Seremonial - Saemidori",
        items: [
          { name: "Matcha Latte", price: "35K", bestSeller: true },
          { name: "Usucha", price: "28K" },
          { name: "CENTRO Pasionate", price: "35K", signature: true },
        ]
      },
      {
        name: "Matcha Seremonial - Okumidori",
        items: [
          { name: "Matcha Latte", price: "28K" },
          { name: "Usucha", price: "32K" },
          { name: "CENTRO Pasionate", price: "40K", signature: true },
        ]
      },
      {
        name: "Artisan Tea",
        items: [
          { name: "Inner Peace", price: "25K", bestSeller: true },
          { name: "Chamomile", price: "25K" },
          { name: "Earl Grey", price: "25K" },
        ]
      }
    ]
  },
  food: {
    title: "Food",
    image: "/conten_centro/makanan3.jpg",
    categories: [
      {
        name: "Snack Meals",
        items: [
          { name: "Rempugan 1", price: "38K", bestSeller: true },
          { name: "Rempugan 2", price: "36K" },
          { name: "Bakwan CENTRO", price: "23K" },
          { name: "Bull Tofu", price: "23K", signature: true },
          { name: "Spicy Crispy Tofu", price: "21K" },
          { name: "Crispy Cheese Banana", price: "23K", bestSeller: true },
          { name: "Crunchy Chicken Skin", price: "23K", signature: true },
          { name: "Cireng Ting-Ting", price: "23K" },
        ]
      },
      {
        name: "Rice Dishes & Pasta",
        items: [
          { name: "CENTRO Fried Rice", price: "38K", signature: true, bestSeller: true },
          { name: "Vege Marga Rice", price: "38K" },
          { name: "Crispy And Crust Chicken", price: "37K", signature: true },
          { name: "Spaghetti CENTRO", price: "38K", signature: true },
          { name: "Truffle Creamy Pasta", price: "35K" },
        ]
      },
      {
        name: "K-Bowl & Dessert",
        items: [
          { name: "Black Galbi-Bap", price: "33K" },
          { name: "Sweet Nyeom-Bap", price: "32K", signature: true },
          { name: "Classic New York Strawberry", price: "35K", bestSeller: true },
          { name: "Classic New York Lotus Biscoff", price: "37K", signature: true },
          { name: "Burnt Cheesecake Matcha", price: "38K" },
        ]
      }
    ]
  }
};

export default function Menu({ hideHeader = false }) {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section id="menu" className="py-24 sm:py-32 bg-surface-primary text-base-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase block mb-3">Daftar Sajian</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-base-dark leading-tight">
              Eksplorasi <span className="text-brand">Rasa.</span>
            </h2>
          </motion.div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 bg-surface-secondary rounded-full border border-border-stroke/20 shadow-sm">
            {Object.keys(menuData).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-6 py-3 sm:px-10 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                    isActive ? "text-white" : "text-text-muted hover:text-base-dark"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="menuTab"
                      className="absolute inset-0 bg-brand rounded-full shadow-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 tracking-wide uppercase">{menuData[key].title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Split Layout (Image + Menu List) */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-border-stroke/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row"
            >
              {/* Left Column: Image Area (Sticky visually on desktop) */}
              <div className="lg:w-5/12 h-64 sm:h-80 lg:h-auto relative shrink-0">
                <img
                  src={menuData[activeTab].image}
                  alt={menuData[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 sm:p-12">
                  <h3 className="text-4xl sm:text-5xl font-black text-white capitalize">{menuData[activeTab].title}</h3>
                  <p className="text-white/80 mt-3 font-medium">Pilihan terbaik untuk menemani momen spesialmu di Centro.</p>
                </div>
              </div>

              {/* Right Column: Menu Items */}
              <div className="lg:w-7/12 p-6 sm:p-10 lg:p-14 h-auto lg:h-[750px] overflow-y-auto custom-scrollbar bg-surface-primary/30">
                <div className="space-y-12">
                  {menuData[activeTab].categories.map((category, idx) => (
                    <div key={idx}>
                      <h4 className="font-black text-2xl text-base-dark mb-6 flex items-center gap-3">
                        {category.name}
                        <div className="flex-1 h-px bg-border-stroke/20"></div>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {category.items.map((item, itemIdx) => (
                          <li 
                            key={itemIdx} 
                            className="group flex flex-col p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-border-stroke/10"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-bold text-base-dark text-lg group-hover:text-brand transition-colors">
                                {item.name}
                              </span>
                              <span className="font-bold text-brand bg-brand/10 px-3 py-1 rounded-full text-sm">
                                {item.price}
                              </span>
                            </div>
                            
                            {/* Badges Layout */}
                            <div className="flex flex-wrap gap-2 mt-2">
                              {item.bestSeller && (
                                <span className="inline-flex items-center gap-1.5 bg-[#FFD700]/20 text-[#B8860B] text-xs font-bold px-2.5 py-1 rounded-md">
                                  <Flame size={12} fill="currentColor" /> Best Seller
                                </span>
                              )}
                              {item.signature && (
                                <span className="inline-flex items-center gap-1.5 bg-brand/10 text-brand text-xs font-bold px-2.5 py-1 rounded-md">
                                  <Star size={12} fill="currentColor" /> Signature
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global CTA for Menu */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Centro%20Roast%20Space,%20saya%20ingin%20memesan%20tempat%20dan%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_8px_30px_rgba(184,160,122,0.4)] hover:-translate-y-2 transition-all duration-300"
          >
            Pesan Menu Sekaranag <ArrowRight size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
