import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Removed Header import
import { Helmet } from 'react-helmet';
// Removed Footer import

const AboutUs = () => {
  useEffect(() => {
    // Set RTL direction for Hebrew content
    document.documentElement.setAttribute('dir', 'rtl');
    
    return () => {
      // Optionally remove the attribute when the component unmounts
      // document.documentElement.removeAttribute('dir'); 
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
          <title>אודות MEDASSIST - מומחים בבדיקות EMG ושירותי רפואה</title>
          <meta name="description" content="למדו על MEDASSIST, חברת בת של Medex, המתמחה בבדיקות EMG מתקדמות ומתן סיוע רפואי מהיר ושירותים רפואיים ברמה הגבוהה ביותר בישראל." />
          <meta name="keywords" content="אודות MEDASSIST, רפואה פרטית, בדיקות EMG, שירות רפואי מהיר, Medex, נוירולוגיה, אבחון רפואי" />
          <link rel="canonical" href="https://emg.org.il/about-us" />
          <meta property="og:title" content="אודות MEDASSIST - מומחים בבדיקות EMG ושירותי רפואה" />
          <meta property="og:description" content="למדו על MEDASSIST, המתמחה בבדיקות EMG מתקדמות ומתן סיוע רפואי מהיר ושירותים רפואיים ברמה הגבוהה ביותר בישראל." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://emg.org.il/about-us" />
          <meta property="og:image" content="https://emg.org.il/images/about-us-banner.jpg" /> {/* Using the banner image */}
      </Helmet>
      {/* Header removed */}

      {/* Banner Section */}
      <section className="py-8 bg-gray-50"> 
        <div className="max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg"> 
          <img 
            src="/images/about-us-banner.jpg" 
            alt="אודות Medassist" 
            className="w-full h-auto block" 
          />
        </div>
      </section>

      {/* Main Content Area */}
      <main className="pb-16 bg-gray-50"> {/* Changed py-16 to pb-16 */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg"> 
            <article className="text-right space-y-6 text-gray-700"> 
              
              {/* Removed the first image below the banner */}

              {/* Removed H1 as title is in banner */}
              <h2 className="text-2xl font-semibold text-medblue-dark mt-2 mb-6 border-b pb-3">מובילים את הרפואה הפרטית בישראל</h2>

              <h3 className="text-xl font-semibold text-medblue-dark mt-8 mb-4">מי אנחנו</h3>
              <p className="leading-relaxed">
                חברת MEDASSIST הינה חברת בת של חברת MEDEX שמתמחה במתן סיוע רפואי בארץ ובעולם. במסגרת פעילותה יצרה החברה קשרים הדוקים עם טובי המומחים.
              </p>
              <p className="leading-relaxed">
                חברת MEDASSIST הינה חברת בת של חברת MEDEX שמתמחה במתן סיוע רפואי בארץ ובעולם. במסגרת פעילותה יצרה החברה קשרים הדוקים עם טובי המומחים במגזר הרפואי בארץ, וזאת על מנת להבטיח ללקוחותיה שירותים רפואיים ברמה הגבוהה ביותר, ע"י הרופאים הטובים ביותר בתחום ובאמצעות הטכנולוגיות הטובות ביותר בשוק.
              </p>
              <p className="leading-relaxed">
                חברת MEDASSIST נולדה מתוך הצורך המובהק של המטופלים הישראליים לקבלת שירותים רפואיים בפרק זמן קצר והגיוני. ההמתנה המתישה ומורטת עצבים לתור לבדיקה, לפיענוח ולתחילת הטיפול אינה מוצדקת, וחולים רבים משלמים עליה ביוקר: בכאבים, בסיבוכים, בהחמרת המחלה וכו'. חברת MEDASSIST משנה את המציאות העגומה בתחום הסיוע הרפואי ומספקת ללקוחותיה מגוון רחב של בדיקות בתוך 24-72 שעות מרגע הפניה. החברה דואגת לספק ללקוחותיה ליווי מלא, יעוץ בכל הנושאים האדמיניסטרטיביים הקשורים בהסדרת התשלומים עבור הבדיקות ובעיקר דואגת להגברה משמעותית של יעילות הטיפול הרפואי בזכות החיסכון הניכר בזמן ההמתנה.
              </p>
              <p className="leading-relaxed">
                תהליך העבודה מול החברה פשוט ומאפשר לחולים ובני משפחותיהם להתרכז בטיפול והחלמה ולא בניירת. המטופל שולח לנו הודעה או מתקשר ומתאר את הצורך הרפואי שלו. אנו דואגים לקבוע לו תור במכון הקרוב ביותר לביתו תוך 72 שעות מרגע הפניה. אנו דואגים לבדיקות משלימות, פיענוח וייעוץ רפואי מטובי המומחים בארץ. במידת הצורך אנו גם מדריכים את המטופל בתהליך קבלת ההחזר מחברת הביטוח הפרטי.
              </p>
              <p className="leading-relaxed">
                המוקד המקצועי שלנו זמין 24/7 ומאויש ע"י האנשים המיומנים שיודעים להעניק ליווי צמוד ויחס אישי לכל מטופל ולספק לו את המענה הרפואי המהיר ביותר. אנו מאמינים כי טיפול רפואי מידי הינו זכות בסיסית של כל חולה בארץ, ואנו חרטנו על דגלינו לספק אותו במקצועיות ובאמינות.
              </p>

              <img 
                src="/articles/images/what-is-emg.jpg" 
                alt="MedAssist Neurologist EMG" 
                className="w-full h-auto rounded-lg my-8 shadow" 
              />

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t">
                <h2 className="text-2xl font-semibold text-medblue-dark mb-3">קבע את התור שלך במהירות ב־72 השעות הקרובות</h2>
                <h3 className="text-xl text-gray-600 mb-4">קבע את התור הקרוב ביותר לרופא שלך</h3>
                <p>
                  <a 
                    href="tel:03-330-2006" // Updated number
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md"
                  >
                    03-330-2006 {/* Updated number */}
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Footer removed */}
    </div>
  );
};

export default AboutUs;
