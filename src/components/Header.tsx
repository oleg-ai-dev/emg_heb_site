import { Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header with Logo and CTA */}
      <header className="bg-medblue sticky top-0 z-50 shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
              MEDASSIST
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white text-lg font-medium hover:text-gray-200 transition-colors">
                עמוד הבית
              </Link>
              <Link to="/blog" className="text-white text-lg font-medium hover:text-gray-200 transition-colors">
                בלוג
              </Link>
            </div>
            
            {/* Primary CTA */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  className="text-white focus:outline-none" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  )}
                </button>
              </div>
              
              <a 
                href="tel:03-301-5458"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md flex items-center gap-2 shadow-md"
              >
                <span>03-301-5458</span>
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-medblue-dark bg-opacity-95 z-40 flex flex-col items-center justify-center">
          <div className="text-center">
            <nav className="flex flex-col gap-8 text-xl">
              <Link 
                to="/" 
                className="text-white font-medium hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                עמוד הבית
              </Link>
              <Link 
                to="/blog" 
                className="text-white font-medium hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                בלוג
              </Link>
              <a 
                href="tel:03-301-5458"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md mt-4 flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>03-301-5458</span>
                <Phone size={16} />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
