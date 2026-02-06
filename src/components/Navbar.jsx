import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'ホーム' },
    { path: '/guide', label: '退職ガイド' },
    { path: '/community', label: 'みんなの声' },
    { path: '/company', label: '会社概要' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLineClick = (loc) => {
    trackEvent('line_click', {
      variant_id: localStorage.getItem('ab_variant') || 'unknown',
      location: loc,
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-500">アスヤメ</span>
            <span className="text-sm text-gray-500 hidden sm:inline">保育士専門の退職代行</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://lin.ee/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLineClick('nav_desktop')}
              className="px-4 py-2 bg-[#06C755] text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              LINE相談
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-orange-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-orange-500'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://lin.ee/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLineClick('nav_mobile')}
              className="block text-center py-3 bg-[#06C755] text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              LINE相談する
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
