import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react'; // Import icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Example data - replace with actual clinic details
  const contactDetails = {
    phone: '03-330-2006', // Updated number
    address: 'רחוב הברזל 11, רמת החייל, תל אביב', // Example Address
    hours: 'א\'-ה\' 09:00 - 17:00', // Example Hours
    email: 'info@medassist.co.il', // Example Email
  };

  const commonConditions = [
    { title: 'תסמונת התעלה הקרפלית', href: '/blog/carpal-tunnel-syndrome' },
    { title: 'תסמונת גיאן-בארה', href: '/blog/guillain-barre-syndrome' },
    { title: 'תסמונות לחץ על עצבים', href: '/blog/תסמונות-לחץ-עצבים' },
    { title: 'מיאסטניה גרביס', href: '/blog/myasthenia-gravis' },
    { title: 'ALS', href: '/blog/als' },
  ];

  return (
    <footer className="bg-medblue-dark text-white pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 text-right"> {/* RTL: text-right */}

          {/* Quick Nav */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medgold">ניווט מהיר</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors text-sm">עמוד הבית</Link></li>
              <li><Link to="/about-us" className="hover:text-white transition-colors text-sm">אודות</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors text-sm">בלוג</Link></li>
              {/* Updated to Link and added onClick for smooth scroll */}
              <li>
                <Link 
                  to="/#contact" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors text-sm"
                >
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* EMG Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medgold">מידע על EMG</h3>
            <ul className="space-y-2 text-gray-300">
              {/* Updated link to new blog post */}
              <li><Link to="/blog/what-is-emg" className="hover:text-white transition-colors text-sm">מהי בדיקת EMG?</Link></li> 
              {/* Link to future preparation page (placeholder) */}
              <li><Link to="/emg-info/preparation" className="hover:text-white transition-colors text-sm">הכנה לבדיקה</Link></li> 
              <li><Link to="/blog" className="hover:text-white transition-colors text-sm">מצבים שאנו מאבחנים</Link></li>
            </ul>
          </div>

          {/* Common Conditions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medgold">מצבים רפואיים נפוצים</h3>
            <ul className="space-y-2 text-gray-300">
              {commonConditions.map(condition => (
                <li key={condition.title}>
                  <Link to={condition.href} className="hover:text-white transition-colors text-sm">{condition.title}</Link>
                </li>
              ))}
              <li><Link to="/blog" className="hover:text-white transition-colors text-sm font-medium mt-1 inline-block">כל המאמרים...</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medgold">יצירת קשר</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-medgold flex-shrink-0" />
                <a href={`tel:${contactDetails.phone}`} className="hover:text-white transition-colors text-sm">{contactDetails.phone}</a>
              </li>
              <li className="flex items-start gap-2"> {/* Use items-start for multi-line address */}
                <MapPin size={16} className="text-medgold flex-shrink-0 mt-1" />
                <span className="text-sm">{contactDetails.address}</span> {/* Add address link if needed */}
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-medgold flex-shrink-0" />
                <span className="text-sm">{contactDetails.hours}</span>
              </li>
               <li className="flex items-center gap-2">
                <Mail size={16} className="text-medgold flex-shrink-0" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-white transition-colors text-sm">{contactDetails.email}</a>
              </li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medgold">מידע נוסף</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/הצהרת-נגישות" className="hover:text-white transition-colors text-sm">הצהרת נגישות</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors text-sm">תנאי שימוש</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors text-sm">מדיניות פרטיות</Link></li> {/* Still points to terms */}
            </ul>
          </div>

        </div>

        {/* Copyright - Centered */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">© {currentYear} MedAssist כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
