import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingLineButton from './components/FloatingLineButton';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Pricing from './pages/Pricing';
import Community from './pages/Community';
import Company from './pages/Company';
import Landing1 from './pages/landing/Landing1';
import Landing2 from './pages/landing/Landing2';
import Landing3 from './pages/landing/Landing3';
import Landing4 from './pages/landing/Landing4';
import Landing5 from './pages/landing/Landing5';
import Landing6 from './pages/landing/Landing6';
import Landing7 from './pages/landing/Landing7';
import Landing8 from './pages/landing/Landing8';
import Landing9 from './pages/landing/Landing9';
import Landing10 from './pages/landing/Landing10';
import Landing11 from './pages/landing/Landing11';

// Landing pages don't show Navbar/Footer
const landingPaths = ['/lp1', '/lp2', '/lp3', '/lp4', '/lp5', '/lp6', '/lp7', '/lp8', '/lp9', '/lp10', '/lp11'];

function AppContent() {
  const location = useLocation();
  const isLandingPage = landingPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isLandingPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/company" element={<Company />} />
          <Route path="/lp1" element={<Landing1 />} />
          <Route path="/lp2" element={<Landing2 />} />
          <Route path="/lp3" element={<Landing3 />} />
          <Route path="/lp4" element={<Landing4 />} />
          <Route path="/lp5" element={<Landing5 />} />
          <Route path="/lp6" element={<Landing6 />} />
          <Route path="/lp7" element={<Landing7 />} />
          <Route path="/lp8" element={<Landing8 />} />
          <Route path="/lp9" element={<Landing9 />} />
          <Route path="/lp10" element={<Landing10 />} />
          <Route path="/lp11" element={<Landing11 />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}
      {!isLandingPage && <FloatingLineButton />}
    </div>
  );
}

function App() {
  return (
    <Router basename="/asuyame-hoikushi">
      <AppContent />
    </Router>
  );
}

export default App;
