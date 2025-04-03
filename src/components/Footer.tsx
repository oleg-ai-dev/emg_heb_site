import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-medblue-dark text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center"> {/* Center align content */}
        {/* Links & Copyright - Centered */}
        <div className="inline-block text-center"> {/* Use inline-block for centering */}
          {/* Vertical Links */}
          <nav className="mb-4">
            <ul className="flex flex-col items-center space-y-2 text-gray-300"> {/* Center items */}
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
                  {/* Assuming this still links to terms for now, update if a privacy page is created */}
                  <Link to="/terms-conditions" className="hover:text-white transition-colors text-sm">מדיניות הפרטיות והביטולים</Link>
                </li>
              </ul>
            </nav>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">© 2023 MedAssist כל הזכויות שמורות</p>
          </div>
        </div>
      {/* Removed extra closing div and footer tag from previous incorrect edit */}
    </footer>
  );
};

export default Footer;
