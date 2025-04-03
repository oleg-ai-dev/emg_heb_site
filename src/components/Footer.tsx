import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16"> 
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Logo & Brand */}
          <div className="mb-6 md:mb-0 text-center md:text-right"> 
            <div className="text-xl font-bold">MEDASSIST</div>
            <div className="text-gray-400 text-sm mt-1">בדיקות EMG מתקדמות</div>
          </div>
          
          {/* Right Side: Links & Copyright */}
          <div className="text-center md:text-right">
            {/* Vertical Links */}
            <nav className="mb-4 md:mb-2">
              <ul className="flex flex-col items-center md:items-end space-y-2 text-gray-300">
                <li>
                  <Link to="/הצהרת-נגישות" className="hover:text-white transition-colors text-sm">הצהרת נגישות</Link> 
                </li>
                <li>
                  <Link to="/about-us" className="hover:text-white transition-colors text-sm">עלינו</Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-white transition-colors text-sm">תנאי שימוש</Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-white transition-colors text-sm">מדיניות הפרטיות והביטולים</Link>
                </li>
              </ul>
            </nav>
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">© 2023 MedAssist כל הזכויות שמורות</p> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
