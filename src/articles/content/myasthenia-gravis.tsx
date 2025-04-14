import React from "react";
import { Link } from "react-router-dom";
import BlogCtaBanner from "@/components/BlogCtaBanner";
import BlogShortForm from "@/components/BlogShortForm";

const MyastheniaGravisContent = () => {
  return (
    <article dir="rtl" lang="he" className="prose prose-lg prose-sky max-w-none mx-auto">
      <h1 className="!text-4xl !font-extrabold text-medblue-dark mb-6">
        מיאסטניה גרביס – המחלה שגורמת לשרירים 'להתעייף' מהר
      </h1>
      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">מהי מיאסטניה גרביס? הבסיס</h2>
      <p className="text-lg leading-relaxed mb-6">
        מיאסטניה גרביס (Myasthenia Gravis, או MG) היא מחלה אוטואימונית כרונית. במחלה זו, מערכת החיסון של הגוף תוקפת בטעות את נקודות התקשורת בין העצבים לשרירים, הנקראות <strong>צומת נוירומוסקולרי</strong>.
      </p>
      <blockquote className="border-r-4 border-medblue-dark bg-medblue/10 p-4 rounded-lg mb-8">
        התוצאה היא הפרעה בתקשורת עצב-שריר, המובילה לתסמין המרכזי: <strong>חולשת שרירים משתנה</strong>. החולשה מחמירה ככל שמשתמשים בשריר יותר ("התעייפות") ומשתפרת לאחר מנוחה.
      </blockquote>
      <p>
        המחלה יכולה להופיע בכל גיל, אך נפוצה יותר בנשים צעירות (שנות ה-20-30) ובגברים מבוגרים (שנות ה-60-80). שכיחותה מוערכת בכ-1-2 מקרים לכל 10,000 איש.
      </p>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        סוגי מיאסטניה גרביס: לא הכל אותו דבר
      </h2>
      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">סיווג לפי נוגדנים</h3>
      <ul className="my-4">
        <li><strong>מיאסטניה עם נוגדני AChR חיוביים:</strong> הסוג הנפוץ ביותר (כ-80-85%).</li>
        <li><strong>מיאסטניה עם נוגדני MuSK חיוביים:</strong> כ-5-10% מהמקרים. מתבטא לעיתים קרובות בחולשה בולטת יותר של שרירי הפנים, הלשון והלעיסה.</li>
        <li><strong>מיאסטניה עם נוגדני LRP4 חיוביים:</strong> סוג נדיר יותר.</li>
        <li><strong>מיאסטניה סרונגטיבית:</strong> כ-5-10% מהמקרים. למרות תסמינים קליניים ובדיקת EMG מתאימה, לא מוצאים בדם את הנוגדנים המוכרים.</li>
      </ul>
      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">סיווג לפי פיזור המחלה</h3>
      <ul className="my-4">
        <li><strong>מיאסטניה אוקולרית:</strong> המחלה מוגבלת לשרירי העיניים והעפעפיים בלבד.</li>
        <li><strong>מיאסטניה מוכללת:</strong> המחלה פוגעת בשרירים באזורים רבים בגוף (עיניים, פנים, גפיים, נשימה).</li>
      </ul>
      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">קשר לבלוטת התימוס</h3>
      <ul className="my-4">
        <li><strong>מיאסטניה הקשורה לתימומה:</strong> בכ-10-15% מהחולים, המחלה קשורה לגידול (לרוב שפיר) בבלוטת התימוס.</li>
      </ul>
      <blockquote className="bg-orange-100 border-r-4 border-orange-400 p-4 rounded-lg my-6">
        חשוב להבדיל מסוג נדיר נוסף, מיאסטניה מולדת, שאינה אוטואימונית אלא גנטית.
      </blockquote>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        איך מרגישה מיאסטניה גרביס? סימנים ותסמינים שכדאי להכיר
      </h2>
      <ul className="my-4">
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
      <blockquote className="bg-sky-50 border-r-4 border-sky-400 p-4 rounded-lg my-6">
        התסמין המרכזי הוא <strong>חולשת שרירים משתנה</strong> המחמירה במאמץ ומשתפרת במנוחה. הפיזור וחומרת התסמינים משתנים מאדם לאדם ויכולים להשתנות גם אצל אותו אדם לאורך זמן.
      </blockquote>

      <BlogCtaBanner />

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        EMG למיאסטניה גרביס – הבדיקה שמראה את הבעיה בצומת העצב-שריר
      </h2>
      <p>
        כאשר עולה חשד קליני למיאסטניה גרביס, <Link to="/blog/what-is-emg" className="text-medblue hover:underline"><strong>בדיקת EMG למיאסטניה</strong></Link> היא כלי אבחוני מרכזי המספק הוכחה אובייקטיבית לפגיעה בתפקוד ה<strong>צומת הנוירומוסקולרי</strong>.
      </p>
      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">1. בדיקת גירוי חוזר (RNS - Repetitive Nerve Stimulation)</h3>
      <p>
        מגרים עצב בסדרה של פולסים חשמליים מהירים (2-3 הרץ) ורושמים את תגובת השריר. במיאסטניה, נצפית ירידה הדרגתית בגודל התגובה ("דקרמנט" של מעל 10%) עקב התעייפות הצומת.
      </p>
      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">2. בדיקת סיב בודד (SFEMG - Single Fiber EMG)</h3>
      <p>
        הבדיקה הרגישה ביותר (מעל 90-95%), המשתמשת במחט מיוחדת למדידת השונות בזמן התגובה ("jitter") בין שני סיבי שריר סמוכים המופעלים מאותו עצב. במיאסטניה, ה-jitter עולה משמעותית עקב חוסר היציבות בצומת. הבדיקה שימושית במקרים קלים או כשה-RNS תקין, אך דורשת מיומנות גבוהה.
      </p>
      <blockquote className="bg-orange-100 border-r-4 border-orange-400 p-4 rounded-lg my-6">
        ה-EMG המיוחד הזה מספק הוכחה אובייקטיבית לבעיה בתפקוד הצומת הנוירומוסקולרי, שהיא לב המחלה.
      </blockquote>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        אבחון מיאסטניה גרביס – הפאזל המלא מעבר ל-EMG
      </h2>
      <ul className="my-4">
        <li><strong>תמונה קלינית מתאימה:</strong> סיפור של חולשת שרירים משתנה, פטוזיס, ראייה כפולה וכו'.</li>
        <li><strong>בדיקה נוירולוגית:</strong> הדגמת החולשה והתעייפות השרירים.</li>
        <li><strong>בדיקות דם לנוגדנים:</strong> חיפוש <strong>נוגדני AChR</strong> ו-<strong>MuSK</strong>.</li>
        <li><strong>בדיקות אלקטרופיזיולוגיות (EMG):</strong> RNS ו/או SFEMG להוכחת פגיעה בצומת הנוירומוסקולרי.</li>
        <li><strong>מבחן טנסילון (אדרופוניום):</strong> פחות נפוץ כיום, אך יכול לתמוך באבחנה.</li>
        <li><strong>הדמיית בית חזה (CT/MRI):</strong> לשלילת תימומה.</li>
        <li><strong>שלילת אבחנות אחרות (אבחנה מבדלת).</strong></li>
      </ul>

      <BlogShortForm />

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        איך מטפלים במיאסטניה גרביס? מטיפול בתסמינים ועד טיפולים מתקדמים
      </h2>
      <ul className="my-4">
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

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        לחיות עם מיאסטניה – אתגרים יומיומיים ודברים שחשוב להיזהר מהם
      </h2>
      <ul className="my-4">
        <li><strong>ניהול אנרגיה:</strong> תכנון פעילויות ומנוחה מתוכננת.</li>
        <li><strong>מודעות לתרופות מחמירות:</strong> הימנעות או זהירות עם תרופות מסוימות (ליידע כל רופא מטפל).</li>
        <li><strong>זיהוי סימני אזהרה למשבר:</strong> קוצר נשימה, קשיי בליעה חמורים – פנייה דחופה למיון.</li>
        <li><strong>היריון ולידה:</strong> דורשים תכנון וליווי צמוד.</li>
        <li><strong>התמודדות רגשית:</strong> חשיבות התמיכה.</li>
      </ul>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        מבט לעתיד: מחקר וחידושים בטיפול במיאסטניה גרביס
      </h2>
      <blockquote className="bg-sky-50 border-r-4 border-sky-400 p-4 rounded-lg my-6">
        המחקר ממשיך להתמקד בפיתוח טיפולים יעילים וממוקדים יותר, כולל טיפולים ביולוגיים חדשים, תרופות המשפרות את תפקוד הצומת הנוירומוסקולרי, וגישות של אימונותרפיה שמטרתן ליצור סבילות חיסונית.
      </blockquote>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">
        שאלות נפוצות (FAQ)
      </h2>

      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">האם מיאסטניה גרביס היא מחלה תורשתית?</h3>
      <p>
        <strong>תשובה:</strong> לא באופן ישיר. מיאסטניה גרביס (הסוג הנפוץ, האוטואימוני) אינה מועברת ישירות מהורים לילדים. עם זאת, יש נטייה גנטית מסוימת לפתח מחלות אוטואימוניות באופן כללי. מיאסטניה גרביס מולדת היא סוג נפרד ונדיר הנגרם ממוטציות גנטיות.
      </p>

      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">האם אפשר להירפא לגמרי ממיאסטניה גרביס?</h3>
      <p>
        <strong>תשובה:</strong> נכון להיום, אין "ריפוי" מוחלט. המטרה היא להביא את המחלה להפוגה (רמיסיה), כלומר שליטה טובה בתסמינים, לעיתים עם מינימום תרופות. חלק מהחולים, במיוחד לאחר <strong>תימקטומיה</strong>, יכולים להגיע להפוגה ממושכת.
      </p>

      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">האם בדיקת EMG כואבת?</h3>
      <p>
        <strong>תשובה:</strong> הבדיקה יכולה לגרום לאי נוחות מסוימת, במיוחד החדרת המחט, אך לרוב נסבלת. אי הנוחות זמנית.
      </p>

      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">האם מותר לעשות ספורט עם מיאסטניה גרביס?</h3>
      <p>
        <strong>תשובה:</strong> כן, פעילות גופנית מתונה מומלצת, אך חשוב להקשיב לגוף, להימנע ממאמצים קיצוניים ולנוח. התייעצו עם רופא או פיזיותרפיסט.
      </p>

      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">מה ההבדל בין מיאסטניה גרביס לתסמונת למברט-איטון (LEMS)?</h3>
      <p>
        <strong>תשובה:</strong> שתיהן פוגעות בצומת עצב-שריר, אך במיאסטניה הבעיה בקולטנים בשריר, וב-LEMS הבעיה בשחרור האצטילכולין מהעצב. קלינית, ב-LEMS החולשה לעיתים משתפרת במאמץ קצר. LEMS קשור לעיתים קרובות לסרטן.
      </p>

      <h3 className="!text-xl !font-bold text-medblue-dark mt-6 mb-3">האם צריך דיאטה מיוחדת למיאסטניה גרביס?</h3>
      <p>
        <strong>תשובה:</strong> אין דיאטה ספציפית, אך תזונה בריאה חשובה. אם יש <strong>דיספגיה</strong> (קשיי בליעה), ייתכן שיהיה צורך בהתאמת מרקם המזון.
      </p>
    </article>
  );
};

export default MyastheniaGravisContent;
