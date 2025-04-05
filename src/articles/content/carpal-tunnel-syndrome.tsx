import React from 'react';
import { Phone } from 'lucide-react';

const CarpalTunnelSyndromeContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מהי תסמונת התעלה הקרפלית?</h2>
      <p className="leading-relaxed">
        תסמונת התעלה הקרפלית מתרחשת כאשר העצב המדיאני נלחץ או נדחס בתעלה הקרפלית בשורש כף היד. 
        זוהי אחת מתסמונות הלחץ השכיחות ביותר במערכת העצבים ההיקפית, המשפיעה על מיליוני אנשים ברחבי העולם.
      </p>
      <p className="leading-relaxed">
        התעלה הקרפלית היא מעבר צר המוקף בעצמות ורצועות. הרצועה הרוחבית של כף היד מהווה את הגבול העליון של התעלה. 
        דרך מעבר זה עוברים העצב המדיאני וגידי הכיפוף של האצבעות.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סימפטומים של תעלה קרפלית</h2>
      <p className="leading-relaxed">אנשים עם תסמונת התעלה הקרפלית חווים מגוון סימפטומים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>נימול באצבעות</strong>: בעיקר באגודל, אצבע מורה, אמה וחלק מהאצבע הטבעת</li>
        <li><strong>כאבים בשורש כף היד</strong>: הכאב מתפשט לעתים לזרוע ומחמיר בלילה</li>
        <li><strong>חולשה בכף היד</strong>: קושי באחיזת חפצים קטנים וביצוע תנועות עדינות</li>
        <li><strong>ירידה בתחושה</strong>: קושי בהבחנה בין חום וקור</li>
        <li><strong>אטרופיה של שרירי האגודל</strong>: במקרים מתקדמים, ניתן לראות הידלדלות שרירים</li>
      </ul>
      <p className="leading-relaxed">הסימפטומים מתחילים בהדרגה ומחמירים עם הזמן. רבים מתעוררים בלילה בשל תחושת נימול וכאב.</p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">גורמי סיכון לתסמונת התעלה הקרפלית</h2>
      <p className="leading-relaxed">מספר גורמים מגבירים את הסיכון לפתח את המצב:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>תנועות חוזרניות</strong>: עבודה עם מקלדת, עכבר מחשב או כלים רוטטים</li>
        <li><strong>גורמים אנטומיים</strong>: שבר או פציעה בכף היד, או מבנה מולד צר יותר של התעלה</li>
        <li><strong>מצבים רפואיים</strong>: סוכרת, בעיות בבלוטת התריס, דלקת מפרקים כרונית</li>
        <li><strong>הריון</strong>: שינויים הורמונליים ונפיחות מגבירים את הסיכון</li>
        <li><strong>גורמים נוספים</strong>: השמנת יתר, עישון, ונטייה גנטית</li>
      </ul>

      {/* Inserted Banner */}
      <div className="my-12 bg-medblue-dark text-white p-8 rounded-lg shadow-md text-right">
        <h2 className="text-2xl font-bold mb-4">סובלים מתסמיני תעלה קרפלית?</h2>
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

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">בדיקת EMG לאבחון תסמונת התעלה הקרפלית</h2>
      <p className="leading-relaxed">
        בדיקת אלקטרומיוגרפיה (EMG) היא כלי אבחוני מרכזי בהערכת תסמונת התעלה הקרפלית. 
        הבדיקה כוללת שני חלקים עיקריים:
      </p>
      
      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">1. בדיקת מוליכות עצבית לכף יד (NCS)</h3>
      <p className="leading-relaxed">
        בבדיקה זו, אלקטרודות קטנות מוצמדות לעור מעל העצב המדיאני ומועברים גירויים חשמליים קלים. 
        הבדיקה מודדת את מהירות ואיכות העברת האותות בעצב. בתסמונת התעלה הקרפלית, 
        מהירות ההולכה של העצב המדיאני תהיה איטית יותר באזור התעלה הקרפלית.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">2. בדיקת EMG של השרירים</h3>
      <p className="leading-relaxed">
        בחלק זה, מחט דקה עם אלקטרודה מוחדרת לשרירים המעוצבבים על ידי העצב המדיאני. 
        הבדיקה מודדת את הפעילות החשמלית של השריר במנוחה ובמאמץ. ממצאים חריגים מעידים על פגיעה עצבית.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">יתרונות בדיקת EMG באבחון</h2>
      <p className="leading-relaxed">בדיקת EMG מספקת מידע חיוני ומציעה יתרונות משמעותיים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>אבחון אובייקטיבי</strong>: מספקת נתונים מדידים על תפקוד העצב</li>
        <li><strong>הערכת חומרה</strong>: מאפשרת לקבוע את רמת הפגיעה בעצב</li>
        <li><strong>אבחנה מבדלת</strong>: מסייעת להבדיל בין תסמונת התעלה הקרפלית לבין מצבים אחרים עם סימפטומים דומים</li>
        <li><strong>הנחיית טיפול</strong>: תוצאות הבדיקה עוזרות לקבוע אם טיפול שמרני מספיק או שיש צורך בניתוח</li>
        <li><strong>בסיס למעקב</strong>: מספקת נקודת התייחסות למעקב אחר התקדמות המחלה או השפעת הטיפול</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">אפשרויות טיפול בתסמונת התעלה הקרפלית</h2>
      <p className="leading-relaxed">הטיפול תלוי בחומרת המצב ומידת השפעתו על חיי היומיום:</p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">טיפולים שמרניים</h3>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>סד לכף יד</strong>: שמירה על תנוחה ניטרלית של כף היד, בעיקר בלילה</li>
        <li><strong>תרופות</strong>: נוגדי דלקת לא סטרואידליים להפחתת כאב ודלקת</li>
        <li><strong>הזרקות קורטיזון לכף יד</strong>: להפחתת דלקת ונפיחות סביב העצב</li>
        <li><strong>תרגילים לתעלה קרפלית</strong>: משפרים את גמישות כף היד והאצבעות</li>
        <li><strong>שינויים ארגונומיים</strong>: התאמת סביבת העבודה להפחתת עומס על הידיים</li>
      </ul>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">ניתוח שחרור תעלה קרפלית</h3>
      <p className="leading-relaxed">
        כאשר הטיפולים השמרניים אינם יעילים או כאשר יש סימנים של נזק עצבי משמעותי, ניתוח עשוי להיות מומלץ. 
        הניתוח כולל חיתוך הרצועה הרוחבית של כף היד כדי להקטין את הלחץ על העצב המדיאני. 
        הניתוח יכול להתבצע בשיטה פתוחה מסורתית או בשיטה אנדוסקופית פחות פולשנית.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מניעת תסמונת התעלה הקרפלית</h2>
      <p className="leading-relaxed">צעדים מניעתיים יכולים לסייע בהפחתת הסיכון להתפתחות המצב:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>הפסקות תכופות</strong>: בעת ביצוע פעילויות חוזרניות</li>
        <li><strong>ארגונומיה נכונה</strong>: התאמת סביבת העבודה להפחתת מתח על כפות הידיים</li>
        <li><strong>תרגול</strong>: חיזוק שרירי כף היד והאמה</li>
        <li><strong>שמירה על תנוחות טבעיות</strong>: הימנעות מכיפוף קיצוני של כף היד</li>
        <li><strong>טיפול במצבים רפואיים בסיסיים</strong>: איזון סוכרת והפרעות בבלוטת התריס</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">שיקום לאחר ניתוח תעלה קרפלית</h2>
      <p className="leading-relaxed">תהליך השיקום לאחר ניתוח כולל מספר שלבים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>מנוחה ראשונית</strong>: הגבלת פעילות כף היד בימים הראשונים</li>
        <li><strong>תרגילי תנועה עדינים</strong>: מתחילים בהדרגה כדי להחזיר את הגמישות</li>
        <li><strong>חיזוק הדרגתי</strong>: תרגילים ממוקדים לחיזוק שרירי כף היד והאמה</li>
        <li><strong>חזרה לפעילות</strong>: הדרכה מקצועית לחזרה בטוחה לפעילויות יומיומיות</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">חידושים בתחום הטיפול בתסמונת התעלה הקרפלית</h2>
      <p className="leading-relaxed">מחקרים עדכניים מתמקדים במספר כיוונים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>טכניקות ניתוחיות חדשות</strong>: שיטות מינימליות פולשניות</li>
        <li><strong>טיפולים ביולוגיים</strong>: שימוש בפלזמה עשירת טסיות (PRP) ותאי גזע</li>
        <li><strong>אביזרים ארגונומיים מתקדמים</strong>: ציוד מותאם למניעת פציעות</li>
        <li><strong>טכנולוגיות שיקום חדשניות</strong>: משחקי מחשב ומציאות מדומה לשיקום תפקודי</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סיכום</h2>
      <p className="leading-relaxed">
        תסמונת התעלה הקרפלית היא מצב נפוץ שיכול לפגוע משמעותית באיכות החיים. 
        אבחון מדויק באמצעות בדיקת EMG הוא צעד קריטי בניהול המצב, המאפשר התאמה אישית של הטיפול וסיכויי החלמה טובים יותר.
      </p>
      <p className="leading-relaxed">
        אם אתם חווים סימפטומים של תסמונת התעלה הקרפלית, פנו לרופא לביצוע בדיקת EMG לכף יד 
        כדי לקבל אבחנה מדויקת ותכנית טיפול מותאמת אישית.
      </p>
    </div>
  );
};

export default CarpalTunnelSyndromeContent;
