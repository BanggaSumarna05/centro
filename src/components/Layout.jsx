import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="bg-surface-primary text-base-dark min-h-screen font-sans selection:bg-brand selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
