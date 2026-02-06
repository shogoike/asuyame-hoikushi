import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingLineButton from './components/FloatingLineButton';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Community from './pages/Community';
import Company from './pages/Company';

function App() {
  return (
    <Router basename="/asuyame-hoikushi">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/community" element={<Community />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>
        <Footer />
        <FloatingLineButton />
      </div>
    </Router>
  );
}

export default App;
