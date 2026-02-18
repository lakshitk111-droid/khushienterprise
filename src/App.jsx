import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomeOld';
import Services from './pages/Services';
import SpareParts from './pages/SpareParts';
import BookRepair from './pages/BookRepair';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTopButton from './components/ScrollToTopButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      <FloatingWhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/spare-parts" element={<SpareParts />} />
        <Route path="/book-repair" element={<BookRepair />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
