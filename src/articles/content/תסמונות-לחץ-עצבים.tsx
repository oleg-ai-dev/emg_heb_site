import React from 'react';
import { Phone } from 'lucide-react';

const NerveCompressionSyndromesContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מבוא לתסמונות לחץ על עצבים פריפריים</h2>
      <p className="leading-relaxed">
        תסמונות לחץ על עצבים פריפריים (Peripheral Nerve Entrapment Syndromes) מתרחשות כאשר עצב נלחץ או נדחס בנקודה מסוימת במסלולו. 
        לחץ זה מפריע להעברת האותות העצביים ומוביל למגוון סימפטומים, כולל כאב, נימול, חולשה ושינויים בתחושה.
      </p>
      <p className="leading-relaxed">
        תסמונות אלו נפוצות יחסית ומשפיעות על מיליוני אנשים ברחבי העולם. הן יכולות להתפתח בכל מקום בגוף שבו עצב עובר דרך מרווח צר או ליד רקמות קשיחות.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סוגים עיקריים של תסמונות לחץ על עצבים</h2>
      <p className="leading-relaxed">קיימים מספר סוגים נפוצים של תסמונות לחץ על עצבים פריפריים:</p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">1. תסמונת התעלה הקרפלית (Carpal Tunnel Syndrome)</h3>
      <p className="leading-relaxed">
        הנפוצה ביותר מבין תסמונות הלחץ, מתרחשת כאשר העצב המדיאני נלחץ בתעלה הקרפלית בשורש כף היד. 
        הסימפטומים כוללים נימול, כאב וחולשה באגודל, באצבע המורה, באמה ובחלק מהאצבע הטבעת.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">2. תסמונת התעלה האולנרית (Cubital Tunnel Syndrome)</h3>
      <p className="leading-relaxed">
        מתרחשת כאשר העצב האולנרי נלחץ באזור המרפק. הסימפטומים כוללים נימול וכאב בזרת ובאצבע הטבעת, 
        חולשה בשרירי כף היד וקושי בתנועות עדינות של האצבעות.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">3. לחץ על העצב הפרונאלי (Peroneal Nerve Compression)</h3>
      <p className="leading-relaxed">
        מתרחש כאשר העצב הפרונאלי נלחץ ליד ראש הפיבולה (עצם השוקה החיצונית). 
        הסימפטומים כוללים חולשה בשרירי כף הרגל והשוק, קושי בהרמת כף הרגל ("צניחת כף רגל") ונימול בגב כף הרגל.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">4. תסמונת מנהרת הטרסוס (Tarsal Tunnel Syndrome)</h3>
      <p className="leading-relaxed">
        מתרחשת כאשר העצב הטיביאלי נלחץ בתעלה הטרסלית בקרסול. 
        הסימפטומים כוללים כאב שורף, נימול ותחושת עקצוץ בכף הרגל, במיוחד בעקב ובאצבעות.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">5. לחץ על העצב הרדיאלי (Radial Nerve Compression)</h3>
      <p className="leading-relaxed">
        מתרחש בדרך כלל באזור הזרוע העליונה. הסימפטומים כוללים חולשה בשרירי היד והאמה, 
        קושי בהרמת כף היד ("צניחת כף יד") ונימול בגב כף היד והאצבעות.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">6. תסמונת מוצא החזה (Thoracic Outlet Syndrome)</h3>
      <p className="leading-relaxed">
        מתרחשת כאשר כלי דם ועצבים נלחצים באזור המעבר בין הצוואר לבית השחי. 
        הסימפטומים כוללים כאב, נימול וחולשה בזרוע וביד, ולעתים גם בעיות בזרימת הדם.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">7. תסמונת פירמידליס (Piriformis Syndrome)</h3>
      <p className="leading-relaxed">
        מתרחשת כאשר שריר הפירמידליס בישבן לוחץ על העצב הסיאטי. 
        הסימפטומים כוללים כאב בישבן המקרין לרגל, נימול ותחושת עקצוץ לאורך מסלול העצב הסיאטי.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">גורמי סיכון לתסמונות לחץ על עצבים</h2>
      <p className="leading-relaxed">מספר גורמים עלולים להגביר את הסיכון להתפתחות תסמונות לחץ על עצבים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>פעילויות חוזרניות</strong>: תנועות חוזרות ונשנות המפעילות לחץ על אזורים ספציפיים</li>
        <li><strong>תנוחות לא נכונות</strong>: ישיבה או עמידה ממושכת בתנוחות לא ארגונומיות</li>
        <li><strong>פציעות</strong>: שברים, נקעים או חבלות באזורים הסמוכים לעצבים</li>
        <li><strong>מצבים רפואיים</strong>: סוכרת, מחלות אוטואימוניות, בעיות בבלוטת התריס</li>
        <li><strong>הריון</strong>: שינויים הורמונליים ונפיחות</li>
        <li><strong>השמנת יתר</strong>: עומס מוגבר על המפרקים והרקמות</li>
        <li><strong>גורמים תורשתיים</strong>: מבנה אנטומי מולד המגביר את הסיכון ללחץ על עצבים</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סימפטומים אופייניים לתסמונות לחץ על עצבים</h2>
      <p className="leading-relaxed">למרות שהסימפטומים משתנים בהתאם לעצב הנפגע, קיימים מספר סימנים אופייניים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>כאב</strong>: יכול להיות חד, שורף, או עמום, ולעתים מקרין לאזורים אחרים</li>
        <li><strong>נימול ועקצוץ</strong>: תחושות לא נעימות באזור העיצוב של העצב</li>
        <li><strong>חולשת שרירים</strong>: קושי בהפעלת שרירים מסוימים</li>
        <li><strong>אטרופיה</strong>: הידלדלות שרירים במקרים מתקדמים</li>
        <li><strong>שינויים בתחושה</strong>: ירידה ביכולת לחוש מגע, חום או קור</li>
        <li><strong>החמרה בלילה</strong>: סימפטומים שמתגברים בשעות הלילה או בזמן מנוחה</li>
        <li><strong>תלות בתנוחה</strong>: סימפטומים שמשתנים בהתאם לתנוחת הגוף</li>
      </ul>

      {/* Inserted Banner */}
      <div className="my-12 bg-medblue-dark text-white p-8 rounded-lg shadow-md text-right">
        <h2 className="text-2xl font-bold mb-4">זקוקים לאבחון מקצועי?</h2>
        <p className="mb-6">צוות המומחים שלנו יכול לעזור לכם באבחון מדויק באמצעות בדיקת EMG ובהתאמת תכנית טיפול אישית.</p>
        <div className="flex justify-end">
          <a 
            href="tel:03-301-5458"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md inline-flex items-center gap-2 shadow-md"
          >
            <span>התקשרו עכשיו: 03-301-5458</span>
            <Phone size={18} />
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">בדיקת EMG באבחון תסמונות לחץ על עצבים</h2>
      <p className="leading-relaxed">
        בדיקת אלקטרומיוגרפיה (EMG) היא כלי אבחוני מרכזי בהערכת תסמונות לחץ על עצבים פריפריים. 
        הבדיקה מספקת מידע אובייקטיבי על תפקוד העצבים והשרירים ומסייעת באבחון מדויק.
      </p>
      
      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">1. בדיקת מוליכות עצבית (NCS)</h3>
      <p className="leading-relaxed">
        בבדיקה זו, אלקטרודות מוצמדות לעור ומועברים גירויים חשמליים קלים לאורך מסלול העצב. 
        הבדיקה מודדת את:
      </p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>מהירות ההולכה העצבית</strong>: האטה במהירות מעידה על פגיעה במעטפת המיאלין</li>
        <li><strong>אמפליטודת האות</strong>: ירידה באמפליטודה מעידה על אובדן סיבי עצב</li>
        <li><strong>לטנציה דיסטלית</strong>: הזמן שלוקח לאות להגיע מנקודת הגירוי לשריר</li>
        <li><strong>גושי הולכה</strong>: האטה מקומית במהירות ההולכה באזור הלחץ</li>
      </ul>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">2. בדיקת EMG של השרירים</h3>
      <p className="leading-relaxed">
        בחלק זה של הבדיקה, מחט דקה עם אלקטרודה מוחדרת לשרירים המעוצבבים על ידי העצב הנבדק. 
        הבדיקה מודדת את הפעילות החשמלית של השריר ומספקת מידע על:
      </p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>פעילות ספונטנית</strong>: פעילות חשמלית לא תקינה במנוחה</li>
        <li><strong>פוטנציאלים של יחידות מוטוריות</strong>: שינויים בצורה, משך ואמפליטודה</li>
        <li><strong>דפוסי גיוס</strong>: האופן שבו השריר מגייס יחידות מוטוריות במאמץ</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">יתרונות בדיקת EMG באבחון תסמונות לחץ</h2>
      <p className="leading-relaxed">בדיקת EMG מציעה מספר יתרונות משמעותיים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>אבחון מדויק</strong>: מאפשרת לאתר את המיקום המדויק של הלחץ על העצב</li>
        <li><strong>הערכת חומרה</strong>: מספקת מידע על מידת הפגיעה בעצב</li>
        <li><strong>אבחנה מבדלת</strong>: מסייעת להבדיל בין תסמונות לחץ לבין בעיות אחרות עם סימפטומים דומים</li>
        <li><strong>הנחיית טיפול</strong>: עוזרת לקבוע את הטיפול המתאים ביותר</li>
        <li><strong>ניטור התקדמות</strong>: מאפשרת לעקוב אחר השיפור או ההחמרה במצב</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">אפשרויות טיפול בתסמונות לחץ על עצבים</h2>
      <p className="leading-relaxed">הטיפול בתסמונות לחץ על עצבים תלוי בסוג התסמונת, חומרתה ומשך הסימפטומים:</p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">טיפולים שמרניים</h3>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>מנוחה והימנעות מפעילויות מחמירות</strong>: הפחתת העומס על האזור הפגוע</li>
        <li><strong>סדים וחבישות</strong>: שמירה על תנוחה אופטימלית של המפרק</li>
        <li><strong>תרופות</strong>: נוגדי דלקת, משככי כאב ותרופות לטיפול בכאב נוירופתי</li>
        <li><strong>פיזיותרפיה</strong>: תרגילים לשיפור טווח התנועה, חיזוק שרירים ושיפור יציבה</li>
        <li><strong>הזרקות סטרואידים</strong>: להפחתת דלקת ונפיחות סביב העצב</li>
        <li><strong>שינויים ארגונומיים</strong>: התאמת סביבת העבודה והפעילויות היומיומיות</li>
      </ul>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">טיפולים ניתוחיים</h3>
      <p className="leading-relaxed">
        כאשר הטיפולים השמרניים אינם יעילים או כאשר יש סימנים של נזק עצבי משמעותי, ניתוח עשוי להיות מומלץ:
      </p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>שחרור העצב</strong>: חיתוך הרקמות הלוחצות על העצב</li>
        <li><strong>הסרת גורמים מבניים</strong>: כגון ציסטות, גידולים או רקמות צלקתיות</li>
        <li><strong>העברת העצב</strong>: שינוי מסלול העצב למניעת לחץ חוזר</li>
        <li><strong>טכניקות מינימליות פולשניות</strong>: ניתוחים אנדוסקופיים עם חתכים קטנים יותר</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">שיקום לאחר טיפול בתסמונות לחץ על עצבים</h2>
      <p className="leading-relaxed">תהליך השיקום הוא חלק חיוני מההחלמה וכולל:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>תרגילי טווח תנועה</strong>: לשמירה על גמישות המפרקים</li>
        <li><strong>תרגילי חיזוק</strong>: לשיקום כוח השרירים</li>
        <li><strong>אימון תפקודי</strong>: לשיפור היכולת לבצע פעילויות יומיומיות</li>
        <li><strong>טיפול בצלקות</strong>: במקרה של ניתוח, לשיפור הריפוי ומניעת הידבקויות</li>
        <li><strong>חינוך למניעה</strong>: לימוד טכניקות למניעת הישנות הבעיה</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מניעת תסמונות לחץ על עצבים</h2>
      <p className="leading-relaxed">צעדים מניעתיים יכולים לסייע בהפחתת הסיכון להתפתחות תסמונות לחץ:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>הפסקות תכופות</strong>: בעת ביצוע פעילויות חוזרניות</li>
        <li><strong>ארגונומיה נכונה</strong>: התאמת סביבת העבודה והכלים</li>
        <li><strong>תרגול</strong>: חיזוק ומתיחה של שרירים רלוונטיים</li>
        <li><strong>שמירה על תנוחות טבעיות</strong>: הימנעות מתנוחות קיצוניות לאורך זמן</li>
        <li><strong>טיפול במצבים רפואיים בסיסיים</strong>: איזון מחלות כמו סוכרת</li>
        <li><strong>שמירה על משקל תקין</strong>: הפחתת עומס על המפרקים והרקמות</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">חידושים בתחום האבחון והטיפול</h2>
      <p className="leading-relaxed">מחקרים עדכניים מתמקדים במספר כיוונים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>טכניקות הדמיה מתקדמות</strong>: שימוש ב-MRI עצבי ואולטרסאונד בתדר גבוה</li>
        <li><strong>טיפולים ביולוגיים</strong>: שימוש בפלזמה עשירת טסיות (PRP) ותאי גזע</li>
        <li><strong>נוירומודולציה</strong>: גירוי חשמלי של עצבים לשיפור תפקוד ולהפחתת כאב</li>
        <li><strong>טכניקות ניתוחיות חדשניות</strong>: שיטות מינימליות פולשניות עם זמן החלמה קצר יותר</li>
        <li><strong>טכנולוגיות שיקום מתקדמות</strong>: שימוש במציאות מדומה ומשוב ביולוגי</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סיכום</h2>
      <p className="leading-relaxed">
        תסמונות לחץ על עצבים פריפריים הן מצבים נפוצים שיכולים לפגוע משמעותית באיכות החיים. 
        אבחון מדויק באמצעות בדיקת EMG הוא צעד קריטי בניהול מצבים אלו, המאפשר התאמה אישית של הטיפול וסיכויי החלמה טובים יותר.
      </p>
      <p className="leading-relaxed">
        הטיפול המוקדם והמתאים, יחד עם תכנית שיקום מקיפה, יכולים למנוע נזק עצבי קבוע ולשפר את התוצאות ארוכות הטווח. 
        אם אתם חווים סימפטומים של לחץ על עצב, פנו לרופא לביצוע בדיקת EMG כדי לקבל אבחנה מדויקת ותכנית טיפול מותאמת אישית.
      </p>
    </div>
  );
};

export default NerveCompressionSyndromesContent;
