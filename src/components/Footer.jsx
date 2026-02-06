import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-3">アスヤメ</h3>
            <p className="text-sm text-gray-400">
              保育士専門の退職代行サービス。<br />
              あなたの新しい一歩を応援します。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">メニュー</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">ホーム</Link></li>
              <li><Link to="/guide" className="hover:text-orange-400 transition-colors">退職ガイド</Link></li>
              <li><Link to="/community" className="hover:text-orange-400 transition-colors">みんなの声</Link></li>
              <li><Link to="/company" className="hover:text-orange-400 transition-colors">会社概要</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">お問い合わせ</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={14} />
                <a href="mailto:info@8seals.com" className="hover:text-orange-400 transition-colors">
                  info@8seals.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} />
                <a href="tel:080-2501-0289" className="hover:text-orange-400 transition-colors">
                  080-2501-0289
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 株式会社8seAls. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
