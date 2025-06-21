import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Reviews from './pages/Reviews';

import "./pages/Home.css";

function App() {
  return (
    <>
      {/* Keep shared layout like Navbar here if needed */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;