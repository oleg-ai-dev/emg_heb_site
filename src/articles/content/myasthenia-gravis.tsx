import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Phone } from 'lucide-react';

const MyastheniaGravisContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מיאסטניה גרביס – המחלה שגורמת לשרירים 'להתעייף' מהר</h2>
      
      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">מהי מיאסטניה גרביס? הבסיס</h3>
      <p className="leading-relaxed">
        מיאסטניה גרביס (Myasthenia Gravis, או MG) היא מחלה אוטואימונית כרונית. במחלה זו, מערכת החיסון של הגוף תוקפת בטעות את נקודות התקשורת בין העצבים לשרירים, הנקראות <strong>צומת נוירומוסקולרי</strong>.
      </p>
      <p className="leading-relaxed">
        באופן תקין, עצבים משחררים חומר כימי (נוירוטרנסמיטר) בשם אצטילכולין. חומר זה נקשר לקולטנים מיוחדים על פני השריר ומורה לו להתכווץ. במיאסטניה, נוגדנים עצמיים חוסמים או הורסים את הקולטנים הללו (בעיקר קולטני אצטילכולין - AChR) או חלבונים אחרים החיוניים לתפקוד הצומת.
      </p>
      <p className="leading-relaxed">
        התוצאה היא הפרעה בתקשורת עצב-שריר, המובילה לתסמין המרכזי: <strong>חולשת שרירים משתנה</strong>. החולשה מחמירה ככל שמשתמשים בשריר יותר ("התעייפות") ומשתפרת לאחר מנוחה.
      </p>
      <p className="leading-relaxed">
        המחלה יכולה להופיע בכל גיל, אך נפוצה יותר בנשים צעירות (שנות ה-20-30) ובגברים מבוגרים (שנות ה-60-80). שכיחותה מוערכת בכ-1-2 מקרים לכל 10,000 איש.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סוגי מיאסטניה גרביס: לא הכל אותו דבר</h2>
      <p className="leading-relaxed">
        מיאסטניה גרביס אינה מחלה אחידה. היא מסווגת למספר סוגים, בעיקר על פי הנוגדנים המעורבים והפיזור הקליני של החולשה:
      </p>
      
      <h4 className="text-lg font-semibold text-medblue-dark mt-4 mb-2">סיווג לפי נוגדנים:</h4>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li>
          <strong>מיאסטניה עם נוגדני AChR חיוביים:</strong> הסוג הנפוץ ביותר (כ-80-85%). הנוגדנים תוקפים ישירות את הקולטנים לאצטילכולין.
        </li>
        <li>
          <strong>מיאסטניה עם נוגדני MuSK חיוביים:</strong> כ-5-10% מהמקרים. הנוגדנים תוקפים חלבון בשם Muscle-Specific Kinase. סוג זה מתבטא לעיתים קרובות בחולשה בולטת יותר של שרירי הפנים, הלשון והלעיסה.
        </li>
        <li>
          <strong>מיאסטניה עם נוגדני LRP4 חיוביים:</strong> סוג נדיר יותר.
        </li>
        <li>
          <strong>מיאסטניה סרונגטיבית:</strong> כ-5-10% מהמקרים. למרות תסמינים קליניים ובדיקת EMG מתאימה, לא מוצאים בדם את הנוגדנים המוכרים.
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-medblue-dark mt-4 mb-2">סיווג לפי פיזור המחלה:</h4>
       <ul className="list-disc pr-8 space-y-3 mt-4">
        <li>
          <strong>מיאסטניה אוקולרית:</strong> המחלה מוגבלת לשרירי העיניים והעפעפיים בלבד.
        </li>
        <li>
          <strong>מיאסטניה מוכללת:</strong> המחלה פוגעת בשרירים באזורים רבים בגוף (עיניים, פנים, גפיים, נשימה).
        </li>
      </ul>
      
      <h4 className="text-lg font-semibold text-medblue-dark mt-4 mb-2">קשר לבלוטת התימוס:</h4>
       <ul className="list-disc pr-8 space-y-3 mt-4">
        <li>
          <strong>מיאסטניה הקשורה לתימומה:</strong> בכ-10-15% מהחולים, המחלה קשורה לגידול (לרוב שפיר) בבלוטת התימוס.
        </li>
      </ul>
      <p className="leading-relaxed mt-2">
        (חשוב להבדיל מסוג נדיר נוסף, מיאסטניה מולדת, שאינה אוטואימונית אלא גנטית).
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">איך מרגישה מיאסטניה גרביס? סימנים ותסמינים שכדאי להכיר</h2>
      <p className="leading-relaxed">
        התסמין המרכזי הוא <strong>חולשת שרירים משתנה</strong> המחמירה במאמץ ומשתפרת במנוחה. הפיזור וחומרת התסמינים משתנים מאדם לאדם ויכולים להשתנות גם אצל אותו אדם לאורך זמן (תקופות החמרה והקלה).
      </p>
      <p className="leading-relaxed">תסמינים נפוצים כוללים:</p>
      <ul className="list-disc pr-8 space-y-4 mt-4"> {/* Increased spacing */}
        <li>
          <strong>תסמינים עיניים (נפוצים מאוד בתחילת המחלה):</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li><strong>פטוזיס:</strong> צניחה של עפעף אחד או שניהם.</li>
            <li><strong>ראייה כפולה (דיפלופיה):</strong> מחולשת השרירים המניעים את העיניים.</li>
          </ul>
        </li>
        <li>
          <strong>תסמינים בפנים ובלוע (בולבריים):</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li>ביטוי פנים חלש, קושי בחיוך.</li>
            <li><strong>דיסארתריה:</strong> דיבור לא ברור, "אפי".</li>
            <li><strong>דיספגיה במיאסטניה:</strong> קושי בלעיסה ובבליעה.</li>
          </ul>
        </li>
        <li>
          <strong>חולשה בגפיים ובצוואר:</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li>קושי בהרמת ידיים, עליית מדרגות, קימה מכיסא.</li>
            <li>חולשה באחיזה.</li>
            <li>קושי בהחזקת הראש ישר.</li>
          </ul>
        </li>
        <li>
          <strong>מעורבות נשימתית:</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li>קוצר נשימה, במיוחד במאמץ או בשכיבה.</li>
            <li><strong>משבר מיאסטני:</strong> החמרה נשימתית חריפה ומסכנת חיים.</li>
          </ul>
        </li>
      </ul>

      {/* Inserted Banner */}
      <div className="my-12 bg-medblue-dark text-white p-8 rounded-lg shadow-md text-right">
        <h2 className="text-2xl font-bold mb-4">זקוקים לאבחון מקצועי?</h2>
        <p className="mb-6">צוות המומחים שלנו יכול לעזור לכם באבחון מדויק באמצעות בדיקת EMG ובהתאמת תכנית טיפול אישית.</p>
        <div className="flex justify-end">
          <a 
            href="tel:03-330-2006" // Updated number
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md inline-flex items-center gap-2 shadow-md"
          >
            <span>התקשרו עכשיו: 03-330-2006</span> {/* Updated number */}
            <Phone size={18} />
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">EMG למיאסטניה גרביס – הבדיקה שמראה את הבעיה בצומת העצב-שריר</h2>
      <p className="leading-relaxed">
        כאשר עולה חשד קליני למיאסטניה גרביס, <Link to="/blog/what-is-emg" className="text-medblue hover:underline"><strong>בדיקת EMG למיאסטניה</strong></Link> היא כלי אבחוני מרכזי המספק הוכחה אובייקטיבית לפגיעה בתפקוד ה<strong>צומת הנוירומוסקולרי</strong>. הבדיקה כוללת טכניקות ספציפיות:
      </p>
      
      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">1. בדיקת גירוי חוזר (RNS - Repetitive Nerve Stimulation)</h3>
      <p className="leading-relaxed">
        בטכניקה זו, מגרים עצב בסדרה של פולסים חשמליים מהירים (2-3 הרץ) ורושמים את תגובת השריר. במיאסטניה, נצפית ירידה הדרגתית בגודל התגובה ("דקרמנט" של מעל 10%) עקב התעייפות הצומת. רגישות הבדיקה היא כ-60-70% במיאסטניה מוכללת ופחות מ-50% במיאסטניה אוקולרית.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">2. בדיקת סיב בודד (SFEMG - Single Fiber EMG)</h3>
      <p className="leading-relaxed">
        הבדיקה הרגישה ביותר (מעל 90-95%), המשתמשת במחט מיוחדת למדידת השונות בזמן התגובה ("jitter") בין שני סיבי שריר סמוכים המופעלים מאותו עצב. במיאסטניה, ה-jitter עולה משמעותית עקב חוסר היציבות בצומת. הבדיקה שימושית במקרים קלים או כשה-RNS תקין, אך דורשת מיומנות גבוהה.
      </p>
      <p className="leading-relaxed">
        ה-EMG המיוחד הזה מספק הוכחה אובייקטיבית לבעיה בתפקוד הצומת הנוירומוסקולרי, שהיא לב המחלה.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">אבחון מיאסטניה גרביס – הפאזל המלא מעבר ל-EMG</h2>
      <p className="leading-relaxed">
        האבחנה הסופית של מיאסטניה גרביס מתבססת על שילוב של מספר גורמים:
      </p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>תמונה קלינית מתאימה:</strong> סיפור של חולשת שרירים משתנה, פטוזיס, ראייה כפולה וכו'.</li>
        <li><strong>בדיקה נוירולוגית:</strong> הדגמת החולשה והתעייפות השרירים.</li>
        <li><strong>בדיקות דם לנוגדנים:</strong> חיפוש <strong>נוגדני AChR</strong> ו-<strong>MuSK</strong>.</li>
        <li><strong>בדיקות אלקטרופיזיולוגיות (EMG):</strong> RNS ו/או SFEMG להוכחת פגיעה בצומת הנוירומוסקולרי.</li>
        <li><strong>מבחן טנסילון (אדרופוניום):</strong> פחות נפוץ כיום, אך יכול לתמוך באבחנה.</li>
        <li><strong>הדמיית בית חזה (CT/MRI):</strong> לשלילת תימומה.</li>
        <li><strong>שלילת אבחנות אחרות (אבחנה מבדלת).</strong></li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">איך מטפלים במיאסטניה גרביס? מטיפול בתסמינים ועד טיפולים מתקדמים</h2>
      <p className="leading-relaxed">
        קיימות מספר גישות ל<strong>טיפול במיאסטניה גרביס</strong>, המותאמות אישית למטופל:
      </p>
      <ul className="list-disc pr-8 space-y-4 mt-4"> {/* Increased spacing */}
        <li>
          <strong>טיפול סימפטומטי:</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li><strong>מעכבי כולינסטראז (פירידוסטיגמין/מסטינון):</strong> מגבירים את כמות האצטילכולין הזמין בצומת.</li>
          </ul>
        </li>
        <li>
          <strong>טיפולים אימונוסופרסיביים (מדכאי חיסון):</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li><strong>קורטיקוסטרואידים (פרדניזון):</strong> יעילים אך עם תופעות לוואי בשימוש ממושך.</li>
            <li><strong>תרופות "חוסכות סטרואידים":</strong> כמו <strong>אזאתיופרין (אימורן)</strong> או מיקופנולט מופטיל (סלספט).</li>
            <li><strong>טיפולים ביולוגיים:</strong> כמו ריטוקסימאב או <strong>מעכבי משלים</strong>, למקרים עמידים.</li>
          </ul>
        </li>
        <li>
          <strong>טיפולים למצבים חריפים (משבר מיאסטני):</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li><strong>פלסמפרזיס:</strong> סינון נוגדנים מהדם.</li>
            <li><strong>אימונוגלובולינים תוך-ורידיים (IVIG):</strong> עירוי נוגדנים הממתן את התגובה החיסונית.</li>
          </ul>
        </li>
        <li>
          <strong>טיפול כירורגי:</strong>
          <ul className="list-circle pr-6 space-y-2 mt-2">
            <li><strong>תימקטומיה:</strong> הסרת בלוטת התימוס, מומלצת במקרה של תימומה ויכולה לעזור גם במקרים אחרים.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">לחיות עם מיאסטניה – אתגרים יומיומיים ודברים שחשוב להיזהר מהם</h2>
      <p className="leading-relaxed">
        החיים עם מיאסטניה דורשים <strong>ניהול יומיומי</strong> והתאמות:
      </p>
      <ul className="list-disc pr-8 space-y-3 mt-4">
        <li><strong>ניהול אנרגיה:</strong> תכנון פעילויות ומנוחה מתוכננת.</li>
        <li><strong>מודעות לתרופות מחמירות:</strong> הימנעות או זהירות עם תרופות מסוימות (ליידע כל רופא מטפל).</li>
        <li><strong>זיהוי סימני אזהרה למשבר:</strong> קוצר נשימה, קשיי בליעה חמורים – פנייה דחופה למיון.</li>
        <li><strong>היריון ולידה:</strong> דורשים תכנון וליווי צמוד.</li>
        <li><strong>התמודדות רגשית:</strong> חשיבות התמיכה.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מבט לעתיד: מחקר וחידושים בטיפול במיאסטניה גרביס</h2>
      <p className="leading-relaxed">
        המחקר ממשיך להתמקד בפיתוח טיפולים יעילים וממוקדים יותר, כולל <strong>טיפולים ביולוגיים</strong> חדשים, תרופות המשפרות את תפקוד הצומת הנוירומוסקולרי, וגישות של אימונותרפיה שמטרתן ליצור סבילות חיסונית. ההבנה המעמיקה של מנגנוני המחלה פותחת פתח לתקווה לטיפולים טובים יותר בעתיד.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">שאלות נפוצות (FAQ)</h2>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם מיאסטניה גרביס היא מחלה תורשתית?</h3>
      <p className="leading-relaxed">
        <strong>תשובה:</strong> לא באופן ישיר. מיאסטניה גרביס (הסוג הנפוץ, האוטואימוני) אינה מועברת ישירות מהורים לילדים. עם זאת, יש נטייה גנטית מסוימת לפתח מחלות אוטואימוניות באופן כללי. מיאסטניה גרביס מולדת היא סוג נפרד ונדיר הנגרם ממוטציות גנטיות.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם אפשר להירפא לגמרי ממיאסטניה גרביס?</h3>
      <p className="leading-relaxed">
        <strong>תשובה:</strong> נכון להיום, אין "ריפוי" מוחלט. המטרה היא להביא את המחלה להפוגה (רמיסיה), כלומר שליטה טובה בתסמינים, לעיתים עם מינימום תרופות. חלק מהחולים, במיוחד לאחר <strong>תימקטומיה</strong>, יכולים להגיע להפוגה ממושכת.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם בדיקת EMG כואבת?</h3>
      <p className="leading-relaxed">
        <strong>תשובה:</strong> הבדיקה יכולה לגרום לאי נוחות מסוימת, במיוחד החדרת המחט, אך לרוב נסבלת. אי הנוחות זמנית.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם מותר לעשות ספורט עם מיאסטניה גרביס?</h3>
      <p className="leading-relaxed">
        <strong>תשובה:</strong> כן, פעילות גופנית מתונה מומלצת, אך חשוב להקשיב לגוף, להימנע ממאמצים קיצוניים ולנוח. התייעצו עם רופא או פיזיותרפיסט.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: מה ההבדל בין מיאסטניה גרביס לתסמונת למברט-איטון (LEMS)?</h3>
      <p className="leading-relaxed">
        <strong>תשובה:</strong> שתיהן פוגעות בצומת עצב-שריר, אך במיאסטניה הבעיה בקולטנים בשריר, וב-LEMS הבעיה בשחרור האצטילכולין מהעצב. קלינית, ב-LEMS החולשה לעיתים משתפרת במאמץ קצר. LEMS קשור לעיתים קרובות לסרטן.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם צריך דיאטה מיוחדת למיאסטניה גרביס?</h3>
      <p className="leading-relaxed">
        <strong>תשובה:</strong> אין דיאטה ספציפית, אך תזונה בריאה חשובה. אם יש <strong>דיספגיה</strong> (קשיי בליעה), ייתכן שיהיה צורך בהתאמת מרקם המזון.
      </p>
    </div>
  );
};

export default MyastheniaGravisContent;
