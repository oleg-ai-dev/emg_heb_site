import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header'; // Assuming Header component exists and is appropriate
import { Helmet } from 'react-helmet';

const AccessibilityStatement = () => {
  useEffect(() => {
    // Set RTL direction for Hebrew content
    document.documentElement.setAttribute('dir', 'rtl');
    
    return () => {
      // Optionally remove the attribute when the component unmounts
      // document.documentElement.removeAttribute('dir'); 
      // Keep it if the whole site is RTL or manage globally
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
          <title>הצהרת נגישות | MEDASSIST</title>
          <meta name="description" content="הצהרת הנגישות של מרפאת MEDASSIST. אנו מחויבים לספק שירות נגיש לכלל לקוחותינו." />
          <link rel="canonical" href="https://medassist.co.il/הצהרת-נגישות" />
          {/* Add other relevant meta tags if needed */}
      </Helmet>
      <Header />

      {/* Single Image Banner Section - Final */}
      <section className="py-8 bg-gray-50"> {/* Kept padding */}
        {/* Constrained width and centered */}
        <div className="max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg"> 
          <img 
            src="/images/הצהרת נגישות.jpg" /* Using .jpg as specified */
            alt="הצהרת נגישות - Medassist" 
            className="w-full h-auto block" /* Ensure image displays correctly */
          />
        </div>
      </section>

      {/* Main Content Area */}
      <main className="pb-16 bg-gray-50"> {/* Removed py-16, added pb-16 */}
        <div className="container mx-auto px-4">
          {/* Removed negative margin, relative, z-10 */}
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg"> 
            <article className="text-right space-y-6 text-gray-700"> 
              {/* H1 should not be here as it's visually represented in the banner image */}
              <h2 className="text-2xl font-semibold text-medblue-dark mt-8 mb-4">הצהרת נגישות</h2> 
              <p className="leading-relaxed">
                מרפאתנו ומשרדינו נוקטים את מירב המאמצים ומשקיעה משאבים רבים על
                מנת לספק לכל לקוחותינו שירות שוויוני, מכובד, נגיש ומקצועי. בהתאם לחוק
                שוויון זכויות לאנשים עם מוגבלויות תשנ"ח-1998 ולתקנות שהותקנו מכוחו,
                מושקעים מאמצים ומשאבים רבים בביצוע התאמות הנגישות הנדרשות שיביאו
                לכך שאדם בעל מוגבלות יוכל לקבל את השירותים הניתנים לכלל הלקוחות,
                באופן עצמאי ושוויוני.
              </p> 

              <h2 className="text-2xl font-semibold text-medblue-dark mt-8 mb-4">הסדרי נגישות מבנים</h2>
              <p className="leading-relaxed">
                להלן הסדרי הנגישות הקיימים במרפאתנו, אשר ממוקמת בברזל 11, בית
                הרופאים, תל אביב:&nbsp;
              </p>
              <ul className="list-disc pr-6 space-y-2 mt-4">
                <li>קיימות חניות נכים ברחוב הברזל</li>
                <li>קיים רצף גישה מהחניה דרך הכניסה ועד למרפאתנו</li>
                <li>קיימים שירותי נכים נגישים. קיימים שלטי זיהוי והכוונה</li>
                <li>מותרת כניסה למשרדנו ולמרפאתנו לחיית שירות המיועדת לסייע לאדם עם מוגבלות</li>
              </ul>

              <h2 className="text-2xl font-semibold text-medblue-dark mt-8 mb-4">נגישות אתר האינטרנט</h2>
              <p className="leading-relaxed">
                אתר אינטרנט נגיש הוא אתר המאפשר לאנשים עם מוגבלות ולאנשים מבוגרים
                לגלוש באותה רמה של יעילות והנאה ככל הגולשים.
                אנחנו מאמינים ופועלים למען שוויון הזדמנויות במרחב האינטרנטי לבעלי לקויות
                מגוונות ואנשים הנעזרים בטכנולוגיה מסייעת לשימוש במחשב.
              </p>

              <h2 className="text-2xl font-semibold text-medblue-dark mt-8 mb-4">מידע על נגישות האתר:</h2>
              <ul className="list-disc pr-6 space-y-2 mt-4">
                <li>אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013.</li>
                <li>התאמות הנגישות בוצעו עפ"י התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.</li>
                <li>הבדיקות נבחנו לתאימות הגבוהה ביותר עבור דפדפן כרום.</li>
                <li>האתר מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם מקלדת בעזרת מקשי החיצים, Enter ו- Esc ליציאה מתפריטים וחלונות.</li>
                <li>מותאם לתצוגה בדפדפנים הנפוצים ולשימוש בטלפון הסלולרי.</li>
                <li>לשם קבלת חווית גלישה מיטבית עם תוכנת הקראת מסך, אנו ממליצים לשימוש בתוכנת NVDA העדכנית ביותר.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-medblue-dark mt-8 mb-4">אמצעים נוספים ליצירת קשר</h2>
              <p className="leading-relaxed">קיימים מספר אמצעים נוספים ליצירת קשר:</p>
              <ul className="list-disc pr-6 space-y-2 mt-4">
                <li>טלפון: <a href="tel:03-301-5458" className="text-medblue hover:text-medblue-dark hover:underline">03-301-5458</a></li>
                <li>מייל:&nbsp;<a href="mailto:contact@medassist.co.il" className="text-medblue hover:text-medblue-dark hover:underline">contact@medassist.co.il</a></li>
              </ul>

              <h2 className="text-2xl font-semibold text-medblue-dark mt-8 mb-4">דרכי פנייה לבקשות והצעות לשיפור בנושא נגישות</h2>
              <p className="leading-relaxed">
                יש לציין כי אנו ממשיכים במאמצים לשפר את נגישות מרפאתנו כחלק
                ממחויבותנו לאפשר לכלל האוכלוסייה, כולל אנשים עם מוגבלויות, לקבל את
                השרות הנגיש ביותר. אם נתקלת בבעיה או בתקלה כלשהי בנושא הנגישות,
                נשמח שתעדכן אותנו בכך ואנו נעשה כל מאמץ למצוא עבורך פתרון מתאים
                ולטפל בתקלה בהקדם ככל שניתן.
              </p>

              <h2 className="text-2xl font-semibold text-medblue-dark mt-8 mb-4">פרטי רכז הנגישות במשרדנו:</h2>
              <ul className="list-disc pr-6 space-y-2 mt-4">
                <li>שם: חנה קיה פרץ</li>
                <li>דוא"ל: <a href="mailto:hanna_p@medassist.co.il" className="text-medblue hover:text-medblue-dark hover:underline">hanna_p@medassist.co.il</a></li>
              </ul>

              {/* This section seems like a CTA, keeping structure but styling */}
              <div className="mt-12 pt-8 border-t">
                <h2 className="text-2xl font-semibold text-medblue-dark mb-3">קבע את התור שלך במהירות ב־72 השעות הקרובות</h2>
                <h3 className="text-xl text-gray-600 mb-4">קבע את התור הקרוב ביותר לרופא שלך</h3>
                <p>
                  <a 
                    href="tel:03-301-5458" 
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md"
                  >
                    03-301-5458
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Footer - Mirroring structure from other pages */}
      <footer className="bg-gray-900 text-white py-8 mt-16"> {/* Added margin top */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-right"> {/* Centered on mobile */}
              <div className="text-xl font-bold">MEDASSIST</div>
              <div className="text-gray-400 text-sm mt-1">בדיקות EMG מתקדמות</div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">© 2023 MedAssist כל הזכויות שמורות</p> {/* Added margin bottom */}
              <div className="text-gray-500 text-xs flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1"> {/* Adjusted gap */}
                <Link to="/blog/guillain-barre-syndrome" className="hover:text-white transition-colors">תסמונת גיאן-בארה</Link>
                <Link to="/blog/carpal-tunnel-syndrome" className="hover:text-white transition-colors">תסמונת התעלה הקרפלית</Link>
                <Link to="/blog/תסמונות-לחץ-עצבים" className="hover:text-white transition-colors">תסמונות לחץ על עצבים</Link>
                <Link to="/הצהרת-נגישות" className="hover:text-white transition-colors">הצהרת נגישות</Link> 
                <Link to="/about-us" className="hover:text-white transition-colors">אודות</Link>
                <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
                <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
                <a href="#" className="hover:text-white transition-colors">צור קשר</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccessibilityStatement;
