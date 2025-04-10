import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import BlogCtaBanner from '@/components/BlogCtaBanner'; // Import Banner
import BlogShortForm from '@/components/BlogShortForm'; // Import Short Form

const GuillainBarreSyndromeContent = () => {
  return (
    <div className="space-y-6"> 
      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מהי תסמונת גיאן-בארה?</h2>
      <p className="leading-relaxed">
        תסמונת גיאן-בארה (GBS) היא מחלה אוטואימונית חריפה של מערכת העצבים ההיקפית. המחלה מופיעה כאשר מערכת החיסון של הגוף תוקפת בטעות את העצבים, וגורמת לחולשת שרירים שעלולה להתפתח לשיתוק מלא. אבחון מהיר וטיפול מתאים הם קריטיים להחלמה טובה.
      </p>
      <p className="leading-relaxed">
        תסמונת גיאן-בארה היא מצב נדיר שבו מערכת החיסון תוקפת את מעטפת המיאלין העוטפת את העצבים ההיקפיים, ולעתים גם את האקסונים (סיבי העצב) עצמם. הפגיעה פוגמת ביכולת העצבים להעביר אותות חשמליים כראוי, ומובילה לחולשה, שיתוק ואובדן תחושה.
      </p>
      <p className="leading-relaxed">
        הנתונים מראים כי התסמונת מופיעה בשכיחות של 1-2 מקרים לכל 100,000 אנשים בשנה. המחלה יכולה להופיע בכל גיל, אך שכיחה יותר בקרב מבוגרים וגברים.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">הסוגים העיקריים של תסמונת גיאן-בארה</h2>
      <p className="leading-relaxed">קיימים מספר תתי-סוגים של התסמונת, המתבטאים בדפוסים שונים של פגיעה עצבית:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>פולינוירופתיה דמיאלינטיבית דלקתית חריפה (AIDP)</strong> - הצורה הנפוצה ביותר במדינות המערב, המאופיינת בפגיעה במעטפת המיאלין</li>
        <li><strong>נוירופתיה אקסונלית מוטורית חריפה (AMAN)</strong> - פוגעת באקסונים של עצבי התנועה, שכיחה יותר במזרח אסיה</li>
        <li><strong>נוירופתיה אקסונלית מוטורית-חושית חריפה (AMSAN)</strong> - צורה חמורה הפוגעת באקסונים של עצבי תנועה ותחושה</li>
        <li><strong>תסמונת מילר-פישר</strong> - תת-סוג נדיר המאופיין באטקסיה (חוסר קואורדינציה), אובדן רפלקסים ושיתוק שרירי העיניים</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">גורמים ומחוללים של תסמונת גיאן-בארה</h2>
      <p className="leading-relaxed">
        ברוב המקרים, תסמונת גיאן-בארה מופיעה לאחר זיהום חיידקי או ויראלי. המחלה מתפתחת כאשר מערכת החיסון, שנלחמת בזיהום, בטעות מזהה חלקים מהעצבים ההיקפיים כזרים ותוקפת אותם.
      </p>
      <p className="leading-relaxed">זיהומים שכיחים שקודמים להתפתחות GBS כוללים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>קמפילובקטר ג'ג'וני</strong> - חיידק הגורם לזיהומי מעיים, קשור ל-30% ממקרי GBS</li>
        <li><strong>וירוסים נשימתיים</strong> - כולל שפעת ונגיפי הקורונה</li>
        <li><strong>נגיף ציטומגלו (CMV)</strong> - וירוס הרפס נפוץ</li>
        <li><strong>נגיף בר-אפשטיין (EBV)</strong> - הגורם למונונוקלאוזיס</li>
        <li><strong>נגיף זיקה</strong> - קשור למקרי GBS באזורים מסוימים</li>
      </ul>
      <p className="leading-relaxed">
        גורמים נוספים שזוהו כמעוררים אפשריים של GBS כוללים ניתוחים, חיסונים (אם כי הסיכון נמוך מאוד), והריון.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סימני תסמונת גיאן-בארה</h2>
      <p className="leading-relaxed">הסימנים של תסמונת גיאן-בארה מתפתחים במהירות, תוך ימים או שבועות, וכוללים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>חולשת שרירים סימטרית</strong> - מתחילה בדרך כלל ברגליים ומתקדמת כלפי מעלה (שיתוק עולה)</li>
        <li><strong>תחושות חריגות</strong> - נימול, עקצוץ או צריבה בידיים וברגליים</li>
        <li><strong>כאבים</strong> - כאבי שרירים עמוקים, במיוחד בלילה</li>
        <li><strong>אובדן רפלקסים</strong> - היעלמות של רפלקסים טבעיים</li>
        <li><strong>קשיי נשימה</strong> - במקרים חמורים, כאשר השיתוק מגיע לשרירי הנשימה</li>
        <li><strong>הפרעות אוטונומיות</strong> - שינויים בלחץ דם, דופק לא סדיר, והזעה מוגברת</li>
      </ul>
      <p className="leading-relaxed">
        בכשליש מהמקרים, החולשה עלולה להתפתח לשיתוק מלא המחייב הנשמה מלאכותית. חשוב להדגיש שההידרדרות עלולה להיות מהירה מאוד, ולכן אבחון מהיר והתערבות מיידית הם קריטיים.
      </p>

      {/* CTA Banner - Approx 1/3 point */}
      <BlogCtaBanner 
        title="חוששים מתסמיני תסמונת גיאן-בארה?" 
        description="צוות המומחים שלנו מתמחה באבחון וטיפול בתסמונת גיאן-בארה באמצעות בדיקות EMG מתקדמות ותוכניות טיפול מותאמות אישית." 
      />

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">בדיקת EMG באבחון תסמונת גיאן-בארה</h2>
      <p className="leading-relaxed">
        <Link to="/blog/what-is-emg" className="text-medblue hover:underline">בדיקת אלקטרומיוגרפיה (EMG)</Link> היא כלי אבחוני חיוני בהערכת תסמונת גיאן-בארה. הבדיקה כוללת שני מרכיבים עיקריים:
      </p>
      
      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">1. בדיקת מוליכות עצבית (NCS)</h3>
      <p className="leading-relaxed">
        בבדיקה זו, גירויים חשמליים קלים מיושמים על עצבים שונים, ונמדדת המהירות והאמפליטודה של האותות החשמליים. בתסמונת גיאן-בארה, בהתאם לסוג הספציפי, ניתן לראות:
      </p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li>האטה משמעותית במהירות ההולכה העצבית (בעיקר ב-AIDP)</li>
        <li>ירידה באמפליטודה של הפוטנציאלים (בעיקר ב-AMAN ו-AMSAN)</li>
        <li>הארכת לטנציה דיסטלית (הזמן שלוקח לאות להגיע מנקודת הגירוי לשריר)</li>
        <li>גושי הולכה (מקומות לאורך העצב שבהם האות "נתקע")</li>
      </ul>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">2. בדיקת EMG של השרירים</h3>
      <p className="leading-relaxed">
        בדיקה זו בוחנת את הפעילות החשמלית של השרירים באמצעות מחטים דקות שמוחדרות לתוכם. ממצאים אופייניים ב-GBS כוללים:
      </p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li>סימנים של דנרבציה (פגיעה בעיצוב העצבי)</li>
        <li>פעילות ספונטנית אבנורמלית של השריר</li>
        <li>דפוסי גיוס מוטוריים אבנורמליים</li>
      </ul>
      <p className="leading-relaxed">
        חשוב לציין שממצאי ה-EMG עשויים להיות נורמליים בשלבים המוקדמים מאוד של המחלה (1-2 ימים ראשונים), ולכן לעתים יש צורך לחזור על הבדיקה לאחר מספר ימים אם החשד הקליני גבוה.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">יתרונות בדיקת EMG בניהול תסמונת גיאן-בארה</h2>
      <p className="leading-relaxed">בדיקת EMG מציעה מספר יתרונות משמעותיים בניהול תסמונת גיאן-בארה:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>תמיכה באבחנה</strong> - מספקת עדות אובייקטיבית התומכת באבחנה הקלינית</li>
        <li><strong>סיווג הסוג הספציפי</strong> - מסייעת להבחין בין תתי-הסוגים השונים של GBS</li>
        <li><strong>הערכת חומרה</strong> - מאפשרת להעריך את היקף וחומרת הפגיעה העצבית</li>
        <li><strong>ניטור התקדמות</strong> - משמשת למעקב אחר התקדמות המחלה והשפעת הטיפול</li>
        <li><strong>חיזוי הפרוגנוזה</strong> - ממצאים מסוימים (במיוחד פגיעה אקסונלית נרחבת) מרמזים על פרוגנוזה פחות טובה והחלמה איטית יותר</li>
        <li><strong>אבחנה מבדלת</strong> - מסייעת להבדיל בין GBS למחלות אחרות עם סימנים דומים</li>
      </ul>

      {/* Short Contact Form - Approx 2/3 point */}
      <BlogShortForm />

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">טיפול בתסמונת גיאן-בארה</h2>
      <p className="leading-relaxed">הטיפול בתסמונת גיאן-בארה מתמקד בהאצת תהליך ההחלמה ומניעת סיבוכים:</p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">טיפולים אימונומודולטוריים:</h3>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>החלפת פלסמה (פלזמפרזיס)</strong> - תהליך שבו הפלסמה מוצאת מהדם ומוחלפת בתמיסת אלבומין או פלסמה מתורם</li>
        <li><strong>אימונוגלובולינים תוך-ורידיים (IVIG)</strong> - מתן נוגדנים דרך הווריד לעיכוב תגובת מערכת החיסון</li>
      </ul>
      <p className="leading-relaxed">
        שני הטיפולים הללו נמצאו יעילים באופן דומה, כאשר הבחירה ביניהם נעשית על סמך זמינות, עלות, וגורמים ספציפיים למטופל.
      </p>

      <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">טיפול תומך:</h3>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>טיפול נמרץ</strong> - במקרים של קשיי נשימה או הפרעות אוטונומיות חמורות</li>
        <li><strong>מניעת קרישי דם</strong> - באמצעות תרופות נוגדות קרישה ומכשירים לדחיסה לסירוגין</li>
        <li><strong>ניהול כאב</strong> - תרופות נוגדות כאב ותרופות לטיפול בכאב נוירופתי</li>
        <li><strong>מניעת זיהומים</strong> - במיוחד זיהומי ריאות בחולים המונשמים</li>
        <li><strong>תמיכה רגשית</strong> - התמודדות עם ההשלכות הפסיכולוגיות של מחלה פתאומית ומשתקת</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">שיקום והחלמה מתסמונת גיאן-בארה</h2>
      <p className="leading-relaxed">השיקום הוא מרכיב קריטי בהחלמה מתסמונת גיאן-בארה וכולל:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>פיזיותרפיה</strong> - שמירה על טווח תנועה, מניעת קונטרקטורות, וחיזוק שרירים</li>
        <li><strong>ריפוי בעיסוק</strong> - שיפור פעילויות יומיומיות והתאמת סביבת המגורים</li>
        <li><strong>טיפול בדיבור ובליעה</strong> - במקרים עם מעורבות של שרירי הפנים והגרון</li>
        <li><strong>תמיכה פסיכולוגית</strong> - התמודדות עם ההשפעה הנפשית של המחלה</li>
        <li><strong>תזונה מותאמת</strong> - במיוחד בשלבי החלמה ממושכים</li>
      </ul>
      <p className="leading-relaxed">
        תהליך ההחלמה מ-GBS משתנה מאדם לאדם. כ-80% מהחולים מתחילים להשתפר תוך 2-4 שבועות מתחילת הסימנים, אך ההחלמה המלאה עשויה להימשך חודשים או אף שנים. כ-60-80% מהחולים משיגים החלמה מלאה או כמעט מלאה, אך כ-20% נותרים עם מגבלות משמעותיות.
      </p>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">אתגרים וסיבוכים ארוכי טווח</h2>
      <p className="leading-relaxed">למרות שרוב החולים משתפרים עם הזמן, חלקם עלולים להתמודד עם אתגרים ארוכי טווח:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>חולשת שרירים שיורית</strong> - במיוחד בשרירים הדיסטליים של הרגליים</li>
        <li><strong>כאב כרוני</strong> - כאב נוירופתי שקשה לטיפול בחלק מהמקרים</li>
        <li><strong>עייפות</strong> - תלונה שכיחה גם שנים לאחר ההתקף החריף</li>
        <li><strong>תסמונת פוטס (POTS)</strong> - הפרעה אוטונומית המתבטאת בדופק מהיר בעמידה</li>
        <li><strong>הישנות</strong> - ב-2-5% מהמקרים, המחלה עלולה לחזור</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מחקרים עדכניים וכיוונים עתידיים</h2>
      <p className="leading-relaxed">תחום המחקר בתסמונת גיאן-בארה מתקדם במספר כיוונים מבטיחים:</p>
      <ul className="list-disc pr-8 space-y-3 mt-4"> 
        <li><strong>ביומרקרים</strong> - זיהוי סמנים ביולוגיים לאבחון מוקדם ולחיזוי תגובה לטיפול</li>
        <li><strong>תרפיות חדשניות</strong> - טיפולים ממוקדים יותר במערכת החיסון</li>
        <li><strong>גישות למניעת נזק אקסונלי</strong> - התערבויות המיועדות להגן על האקסונים מפני נזק חמור</li>
        <li><strong>הבנת הגנטיקה</strong> - זיהוי גורמי סיכון גנטיים שעשויים להשפיע על הסיכון ל-GBS</li>
        <li><strong>תוכניות שיקום מותאמות אישית</strong> - פיתוח פרוטוקולים אופטימליים לשיקום</li>
      </ul>

      <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סיכום: חשיבות האבחון המוקדם והמדויק</h2>
      <p className="leading-relaxed">
        תסמונת גיאן-בארה היא מחלה רצינית שדורשת אבחון מהיר וטיפול מיידי. בדיקת EMG משחקת תפקיד קריטי הן באבחון והן בניטור המחלה, ומאפשרת לרופאים להעריך את סוג וחומרת הפגיעה העצבית, ולהתאים את הטיפול בהתאם.
      </p>
      <p className="leading-relaxed">
        בזכות התקדמות בטיפולים ובשיקום, רוב החולים ב-GBS משיגים החלמה משמעותית, אם כי זמן ההחלמה והתוצאות הסופיות משתנים.
      </p>
      <p className="leading-relaxed">
        אם אתם או מישהו שאתם מכירים חווים חולשת שרירים מתקדמת במהירות, במיוחד לאחר מחלה זיהומית, פנו מיד לטיפול רפואי. אבחון מוקדם, כולל ביצוע בדיקת EMG, והתערבות מהירה הם המפתחות לשיפור הפרוגנוזה והפחתת הסיכון לסיבוכים ארוכי טווח.
      </p>
    </div>
  );
};

export default GuillainBarreSyndromeContent;
