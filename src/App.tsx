import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Stay from "./pages/Stay";
import Dining from "./pages/Dining";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
