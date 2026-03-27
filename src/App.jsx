import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Placeholder imports for pages we are about to create
import TentangPage from "./pages/TentangPage";
import MenuPage from "./pages/MenuPage";
import GaleriPage from "./pages/GaleriPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tentang" element={<TentangPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="galeri" element={<GaleriPage />} />
          <Route path="event" element={<EventPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
