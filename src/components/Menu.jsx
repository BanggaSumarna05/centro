import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, UtensilsCrossed, Leaf, Star } from "lucide-react";

// The complete menu data transcribed from menu.jpg
const menuData = {
  coffee: {
    icon: <Coffee size={20} />,
    title: "Coffee",
    image: "/conten_centro/minuman.jpg",
    categories: [
      {
        name: "Coffee Based",
        items: [
          { name: "Americano (Black)", price: "22K", seasonal: "26K" },
          { name: "Espresso (Black)", price: "17K", seasonal: "20K" },
          { name: "Long Black (Black)", price: "22K", seasonal: "26K" },
          { name: "Latte (White)", price: "27K", seasonal: "30K" },
          { name: "Cappucino (White)", price: "26K", seasonal: "28K" },
          { name: "Magic (White)", price: "30K", seasonal: "32K" },
          { name: "Creme Brulee (White)", price: "30K" },
          { name: "Split Shot (White)", price: "28K", seasonal: "32K" },
        ]
      },
      {
        name: "Signature Coffee",
        items: [
          { name: "Dirty Latte", price: "28K", star: true },
          { name: "Tiramisu Buttercream", price: "33K", star: true },
          { name: "Creamy Bold CENTRO", price: "28K", star: true },
          { name: "Mont Blanc", price: "28K" },
          { name: "Amer De'blossom", price: "27K" },
          { name: "Kopi Lemon", price: "26K" },
        ]
      },
      {
        name: "Signature Beverage",
        items: [
          { name: "Like At Club", price: "28K", star: true },
          { name: "Sunset On Space", price: "33K" },
          { name: "Creamy Bold CENTRO", price: "28K" },
          { name: "Delicious Nutmeg", price: "28K" },
          { name: "Butter Fizz", price: "27K" },
        ]
      },
      {
        name: "Milk Based",
        items: [
          { name: "Strawberry Cheesecake", price: "30K", star: true },
          { name: "Blueberry Cloud", price: "30K", star: true },
          { name: "Choco Berry-pop", price: "28K", star: true },
          { name: "Houjicha", price: "30K" },
          { name: "Gen Maicha", price: "30K", star: true },
          { name: "Breads Banana", price: "28K" },
        ]
      },
      {
        name: "Others",
        items: [
          { name: "Cheese/Machiato", price: "9K/8K" },
          { name: "Whipping Cream", price: "8K" },
          { name: "Extra Shot", price: "12K" },
          { name: "Mineral Water (400/700ml)", price: "9K/13K" },
          { name: "Ice Cube", price: "2K" },
        ]
      }
    ]
  },
  slowbar: {
    icon: <Leaf size={20} />,
    title: "Slow Bar",
    image: "/conten_centro/minuman (3).jpg",
    categories: [
      {
        name: "Matcha Seremonial - Yabukita",
        items: [
          { name: "Matcha Latte", price: "28K" },
          { name: "Usucha", price: "22K" },
          { name: "CENTRO Pasionate", price: "31K", star: true },
        ]
      },
      {
        name: "Matcha Seremonial - Saemidori",
        items: [
          { name: "Matcha Latte", price: "35K" },
          { name: "Usucha", price: "28K" },
          { name: "CENTRO Pasionate", price: "35K", star: true },
        ]
      },
      {
        name: "Matcha Seremonial - Okumidori",
        items: [
          { name: "Matcha Latte", price: "28K" },
          { name: "Usucha", price: "32K" },
          { name: "CENTRO Pasionate", price: "40K", star: true },
        ]
      },
      {
        name: "Artisan Tea",
        items: [
          { name: "Inner Peace", price: "25K", star: true },
          { name: "Chamomile", price: "25K" },
          { name: "Earl Grey", price: "25K" },
        ]
      },
      {
        name: "Filter Coffee",
        items: [
          { name: "Reguler Beans", price: "28K" },
          { name: "Exotic Beans", price: "40K" },
        ]
      }
    ]
  },
  food: {
    icon: <UtensilsCrossed size={20} />,
    title: "Food",
    image: "/conten_centro/makanan3.jpg",
    categories: [
      {
        name: "Snack Meals",
        items: [
          { name: "Rempugan 1", price: "38K" },
          { name: "Rempugan 2", price: "36K" },
          { name: "Rempugan 3", price: "38K" },
          { name: "Bakwan CENTRO", price: "23K" },
          { name: "Bull Tofu", price: "23K", star: true },
          { name: "Spicy Crispy Tofu", price: "21K" },
          { name: "Churro-licious", price: "20K" },
          { name: "Crispy Cheese Banana", price: "23K", star: true },
          { name: "Crunchy Chicken Skin", price: "23K", star: true },
          { name: "Crispy Mushroom", price: "18K" },
          { name: "Cireng Ting-Ting", price: "23K" },
          { name: "Pudding CENTRO", price: "16K" },
          { name: "Tahu Walik Bangkok", price: "20K" },
          { name: "French Fries", price: "18K" },
          { name: "Mini Wonton", price: "18K" },
        ]
      },
      {
        name: "Rice Dishes",
        items: [
          { name: "CENTRO Fried Rice", price: "38K", star: true },
          { name: "Vege Marga Rice", price: "38K" },
          { name: "Rice Aromantic Fufu", price: "35K" },
        ]
      },
      {
        name: "Pasta & Pota Pro",
        items: [
          { name: "Chick And Grill With Sauce", price: "37K" },
          { name: "Crispy And Crust Chicken", price: "37K", star: true },
          { name: "Moza Melt Patty", price: "42K" },
          { name: "Spaghetti CENTRO", price: "38K", star: true },
          { name: "Indonesian Pasta Fufu", price: "35K" },
          { name: "Truffle Creamy Pasta", price: "35K" },
          { name: "Creamy Mac-caron", price: "28K" },
        ]
      },
      {
        name: "K-Bowl",
        items: [
          { name: "Black Galbi-Bap", price: "33K" },
          { name: "Gogi-Bap", price: "33K" },
          { name: "Sweet Nyeom-Bap", price: "32K", star: true },
          { name: "Katsu-Bap", price: "32K", star: true },
        ]
      },
      {
        name: "Dessert",
        items: [
          { name: "Classic New York Strawberry", price: "35K" },
          { name: "Classic New York Bluberry", price: "35K" },
          { name: "Classic New York Lotus Biscoff", price: "37K", star: true },
          { name: "Burnt Cheesecake Vanilla", price: "35K" },
          { name: "Burnt Cheesecake Belgian Chocolate", price: "35K" },
          { name: "Burnt Cheesecake Matcha", price: "38K" },
          { name: "Fudy Brownies", price: "23K" },
          { name: "Tom & Jerry", price: "37K" },
          { name: "Classic Espresso Tiramisu", price: "28K" },
          { name: "Brownie Burnt Cheesecake Vanilla", price: "37K" },
          { name: "Brownie Burnt Cheesecake Matcha", price: "39K" },
        ]
      }
    ]
  }
};

export default function Menu({ hideHeader = false }) {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section id="menu" className="py-20 sm:py-28 lg:py-32 bg-surface-primary text-base-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Only shown on Home, visually hidden if we want but leaving for completeness) */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="text-brand font-bold tracking-widest text-xs sm:text-sm uppercase">Daftar Sajian</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 text-base-dark">
              Menu <span className="text-brand">Lengkap.</span>
            </h2>
          </motion.div>
        )}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-surface-secondary rounded-2xl sm:rounded-full border border-border-stroke/20 shadow-sm">
            {Object.keys(menuData).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-3.5 rounded-xl sm:rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                    isActive ? "text-white" : "text-text-muted hover:text-base-dark"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMapTab"
                      className="absolute inset-0 bg-brand rounded-xl sm:rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {menuData[key].icon}
                    {menuData[key].title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="bg-white rounded-3xl shadow-xl border border-border-stroke/20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row"
            >
              {/* Image Banner for Section */}
              <div className="lg:w-2/5 h-64 lg:h-auto relative shrink-0">
                <img
                  src={menuData[activeTab].image}
                  alt={menuData[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent flex items-end lg:items-center p-8">
                  <h3 className="text-3xl sm:text-5xl font-black text-white drop-shadow-lg">
                    {menuData[activeTab].title}
                  </h3>
                </div>
              </div>

              {/* Menu Categories Grid */}
              <div className="lg:w-3/5 p-6 sm:p-10 lg:p-12 h-screen max-h-[700px] overflow-y-auto custom-scrollbar">
                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                  {menuData[activeTab].categories.map((category, idx) => (
                    <div key={idx} className="break-inside-avoid shadow-sm bg-surface-primary/50 p-5 rounded-2xl border border-border-stroke/10">
                      <h4 className="font-black text-brand mb-4 text-base tracking-widest uppercase border-b border-border-stroke/20 pb-2">
                        {category.name}
                      </h4>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex justify-between items-start text-sm sm:text-base">
                            <div className="flex-1 pr-4">
                              <span className="font-semibold text-base-dark inline-flex items-center gap-1.5">
                                {item.name}
                                {item.star && <Star size={14} className="fill-brand text-brand" />}
                              </span>
                              {item.seasonal && (
                                <p className="text-xs text-text-muted mt-0.5">
                                  Reguler {item.price} / Seasonal {item.seasonal}
                                </p>
                              )}
                            </div>
                            <span className="font-bold text-accent-dark shrink-0">
                              {!item.seasonal && item.price}
                            </span>
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

      </div>
    </section>
  );
}
