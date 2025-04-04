import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, Share2 } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Import the new Footer component

// Define blog post data structure
interface BlogPostData {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
  keywords: string[];
  content: React.ReactNode;
}

// Blog posts data - Applying improved styling within content JSX to ALL posts
const blogPosts: Record<string, BlogPostData> = {
  'guillain-barre-syndrome': {
    id: 'guillain-barre-syndrome',
    title: 'תסמונת גיאן-בארה: כל מה שחשוב לדעת על אבחון, טיפול והחלמה',
    date: '18 במרץ, 2025',
    readTime: '12 דקות',
    image: '/articles/images/תסמונת גיאן-בארה.jpg',
    description: 'מדריך מקיף על תסמונת גיאן-בארה, מחלה אוטואימונית של מערכת העצבים ההיקפית. למדו על אבחון באמצעות בדיקת EMG, טיפולים אפשריים ותהליך ההחלמה.',
    keywords: [
      'תסמונת גיאן-בארה', 'GBS אבחון', 'שיתוק עולה', 'מחלה אוטואימונית עצבים', 'בדיקת EMG לתסמונת גיאן-בארה', 'טיפול בתסמונת גיאן-בארה', 'סימפטומים של גיאן-בארה', 'החלפת פלסמה גיאן-בארה', 'אימונוגלובולינים ורידיים', 'שיקום לאחר גיאן-בארה', 'חולשת שרירים סימטרית', 'מוליכות עצבית בגיאן-בארה', 'תסמונת גיאן-בארה לאחר זיהום', 'אבחנה מבדלת תסמונת גיאן-בארה', 'בעיות נשימה בגיאן-בארה', 'זמן החלמה מגיאן-בארה', 'סיבוכים של תסמונת גיאן-בארה', 'ניטור תסמונת גיאן-בארה', 'תחזית החלמה מתסמונת גיאן-בארה', 'סוגים של תסמונת גיאן-בארה'
    ],
    content: (
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

        {/* Inserted Banner */}
        <div className="my-12 bg-medblue-dark text-white p-8 rounded-lg shadow-md text-right">
          <h2 className="text-2xl font-bold mb-4">חוששים מתסמיני תסמונת גיאן-בארה?</h2>
          <p className="mb-6">צוות המומחים שלנו מתמחה באבחון וטיפול בתסמונת גיאן-בארה באמצעות בדיקות EMG מתקדמות ותוכניות טיפול מותאמות אישית.</p>
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

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">בדיקת EMG באבחון תסמונת גיאן-בארה</h2>
        <p className="leading-relaxed">
          בדיקת אלקטרומיוגרפיה (EMG) היא כלי אבחוני חיוני בהערכת תסמונת גיאן-בארה. הבדיקה כוללת שני מרכיבים עיקריים:
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
    )
  },
  'carpal-tunnel-syndrome': {
    id: 'carpal-tunnel-syndrome',
    title: 'תסמונת התעלה הקרפלית: המדריך המקיף לאבחון באמצעות בדיקת EMG',
    date: '18 במרץ, 2025',
    readTime: '10 דקות',
    image: '/articles/images/carpal-tunnel-syndrome.jpg',
    description: 'מדריך מקיף על תסמונת התעלה הקרפלית, כולל סימפטומים, אבחון באמצעות בדיקת EMG, טיפולים אפשריים ודרכי מניעה. למידע מקצועי על בדיקת מוליכות עצבית לכף יד והקלה על כאבי כף יד.',
    keywords: [
      'תסמונת התעלה הקרפלית', 'בדיקת EMG לכף יד', 'כאבים בשורש כף היד', 'נימול באצבעות', 'טיפול בתסמונת התעלה הקרפלית', 'ניתוח שחרור תעלה קרפלית', 'העצב המדיאני', 'סד לכף יד', 'אבחון תסמונת התעלה הקרפלית', 'תרגילים לתעלה קרפלית', 'סיבות לתסמונת התעלה הקרפלית', 'חולשה בכף היד', 'הקלה על כאבי כף יד', 'לחץ על העצב המדיאני', 'אלקטרומיוגרפיה לכף יד', 'סימפטומים של תעלה קרפלית', 'מניעת תסמונת התעלה הקרפלית', 'הזרקות קורטיזון לכף יד', 'שיקום לאחר ניתוח תעלה קרפלית', 'בדיקת מוליכות עצבית לכף יד'
    ],
    content: (
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
    )
  },
  'תסמונות-לחץ-עצבים': {
    id: 'תסמונות-לחץ-עצבים',
    title: 'תסמונות לחץ על עצבים פריפריים: מדריך מקיף לאבחון וטיפול',
    date: '18 במרץ, 2025',
    readTime: '15 דקות',
    image: '/images/תסמונות-לחץ-עצבים.jpg',
    description: 'מדריך מקיף על תסמונות לחץ על עצבים פריפריים, כולל סוגים שונים, אבחון באמצעות בדיקת EMG, טיפולים אפשריים ודרכי מניעה. למידע מקצועי על אבחון וטיפול בלחץ על עצבים פריפריים.',
    keywords: [
      'תסמונות לחץ על עצבים', 'אבחון לחץ על עצבים פריפריים', 'בדיקת EMG לעצבים לחוצים', 'תסמונת התעלה האולנרית', 'לחץ על עצב פרונאלי', 'תסמונת מנהרת הטרסוס', 'לחץ על עצב רדיאלי', 'נוירופתיה דחיסתית', 'כאבים בעצבים פריפריים', 'נימול בגפיים', 'חולשת שרירים בגפיים', 'טיפול בלחץ על עצבים', 'ניתוח לשחרור עצב', 'פיזיותרפיה לעצבים לחוצים', 'מניעת תסמונות לחץ עצבי', 'אלקטרומיוגרפיה לעצבים פריפריים', 'תסמונת פירמידליס', 'לחץ על עצב סופרסקפולרי', 'תסמונת מוצא החזה', 'שיקום לאחר פגיעה עצבית'
    ],
    content: (
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
    )
  },
  'inflammatory-myopathies': {
    id: 'inflammatory-myopathies',
    title: 'מיופתיות דלקתיות: כיצד בדיקת EMG מסייעת באבחון מוקדם ומעקב',
    date: '4 באפריל, 2025',
    readTime: '14 דקות',
    image: '/articles/images/יופתיות דלקתיות.jpg',
    description: 'מדריך מקיף על מיופתיות דלקתיות (פולימיוזיטיס, דרמטומיוזיטיס, IBM), מחלות אוטואימוניות הפוגעות בשרירים. למדו על חשיבות בדיקת EMG באבחון מוקדם, טיפולים וניהול המחלה.',
    keywords: [
      'מיופתיות דלקתיות', 'פולימיוזיטיס', 'דרמטומיוזיטיס', 'בדיקת EMG למיופתיה', 'חולשת שרירים דלקתית', 'מחלות אוטואימוניות בשרירים', 'אבחון מיופתיה דלקתית', 'טיפול בדלקת שרירים', 'CK שריר מוגבר', 'ביופסיית שריר', 'סטרואידים למיופתיה', 'קשיי בליעה במיופתיה', 'פריחה בדרמטומיוזיטיס', 'שיקום מיופתיה דלקתית', 'סימנים למיופתיה דלקתית', 'מיוזיטיס עם גופיפי הכללה', 'מיופתיה מעורבת רקמת חיבור', 'תרופות אימונוסופרסיביות למיופתיה', 'אנזימי שריר מוגברים', 'אבחנה מבדלת מיופתיה'
    ],
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מבוא: מה הן מיופתיות דלקתיות?</h2>
        <p className="leading-relaxed">
          מיופתיות דלקתיות הן קבוצה של מחלות אוטואימוניות נדירות יחסית, שבהן מערכת החיסון של הגוף תוקפת בטעות את רקמות השריר, גורמת לדלקת ולנזק לסיבי השריר. השכיחות של מחלות אלה מוערכת בכ-2-10 מקרים ל-100,000 אנשים, כשהן נפוצות יותר בקרב נשים ובגילאי 40-60, אם כי יכולות להופיע בכל גיל.
        </p>
        <p className="leading-relaxed">
          מחלות אלו שייכות לקבוצה הרחבה יותר של מחלות ראומטיות, ויכולות להופיע כמחלה עצמאית או כחלק ממחלת רקמת חיבור מעורבת. האבחון המוקדם חיוני להתחלת טיפול מתאים ולמניעת נזק בלתי הפיך לשרירים.
        </p>
        <p className="leading-relaxed">
          המאפיין העיקרי של מחלות אלה הוא חולשת שרירים הדרגתית, שמתפתחת לאורך שבועות או חודשים ומשפיעה על איכות החיים של המטופלים. במאמר זה נסקור את המחלות הללו, מאפייניהן, ואת התפקיד המהותי של בדיקת EMG באבחונן ובמעקב אחריהן.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סוגים עיקריים של מיופתיות דלקתיות</h2>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">פולימיוזיטיס</h3>
        <p className="leading-relaxed">
          פולימיוזיטיס היא מחלה דלקתית של השרירים, המתאפיינת בדלקת של שרירי הגוף, בעיקר באזורי האגן, הכתפיים והצוואר. המחלה מתפתחת בדרך כלל באופן הדרגתי על פני תקופה של שבועות או חודשים, וגורמת לתסמינים הבאים:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>חולשת שרירים סימטרית פרוקסימלית</strong> (קרובה לגוף)</li>
          <li><strong>קושי בביצוע פעולות יומיומיות</strong> כמו קימה מכיסא, עלייה במדרגות והרמת ידיים מעל הראש</li>
          <li><strong>כאבי שרירים</strong>, אם כי פחות בולטים מהחולשה</li>
          <li>לעתים <strong>קשיי בליעה (דיספגיה)</strong> וקשיי נשימה במקרים חמורים</li>
        </ul>
        <p className="leading-relaxed">
          מחקרים מראים שפולימיוזיטיס נפוצה יותר בנשים ביחס של 2:1 בהשוואה לגברים, ושיא ההופעה הוא בגילאי 40-60.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">דרמטומיוזיטיס</h3>
        <p className="leading-relaxed">
          דרמטומיוזיטיס דומה לפולימיוזיטיס בהיותה גורמת לחולשת שרירים, אך נבדלת ממנה בכך שהיא מלווה גם בפריחה אופיינית. מאפייני המחלה כוללים:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>פריחה אדמדמה-סגלגלה על העפעפיים</strong> ("פריחת הליוטרופ")</li>
          <li><strong>פריחה על הפנים, הצוואר, החזה, הכתפיים והידיים</strong></li>
          <li><strong>סימן גוטרון</strong>: פריחה אדומה ומחוספסת על פרקי האצבעות</li>
          <li><strong>חולשת שרירים</strong> דומה לזו שבפולימיוזיטיס</li>
          <li><strong>קשר מוגבר לסיכון למחלות ממאירות</strong>, במיוחד בקרב מבוגרים</li>
        </ul>
        <p className="leading-relaxed">
          חשוב לציין שמטופלים עם דרמטומיוזיטיס נמצאים בסיכון מוגבר לפתח סרטן, במיוחד בשנתיים הראשונות לאחר האבחון, ולכן מומלץ על בדיקות סקר לגילוי מוקדם של סרטן.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">מיוזיטיס עם גופיפי הכללה (IBM)</h3>
        <p className="leading-relaxed">
          מיוזיטיס עם גופיפי הכללה היא הצורה השכיחה ביותר של מיופתיה דלקתית בקרב אנשים מעל גיל 50. בניגוד לתצורות האחרות, היא שכיחה יותר בגברים ומתאפיינת ב:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>חולשת שרירים איטית והדרגתית</strong>, שלעתים אינה סימטרית</li>
          <li><strong>מעורבות ייחודית של שרירים דיסטליים</strong> (רחוקים מהגוף) כמו שרירי כף היד והרגל</li>
          <li><strong>חולשה אופיינית בשרירי קדמת הירך ושרירי האמה</strong></li>
          <li><strong>הפרעה בבליעה</strong> בכ-40% מהמקרים</li>
          <li><strong>תגובה מוגבלת לטיפול אימונוסופרסיבי</strong></li>
        </ul>
        <p className="leading-relaxed">
          זוהי המחלה העמידה ביותר לטיפול מבין המיופתיות הדלקתיות, והטיפול בה מתמקד בעיקר בשיקום ובשמירה על תפקוד.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">תסמינים וסימנים של מיופתיות דלקתיות</h2>
        <p className="leading-relaxed">
          התסמינים של מיופתיות דלקתיות יכולים להשתנות בהתאם לסוג הספציפי של המחלה, אך כוללים בדרך כלל:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>חולשת שרירים</strong>: בדרך כלל חולשה סימטרית המתחילה בשרירים הקרובים לגוף (ירכיים, אגן, כתפיים)</li>
          <li><strong>קשיים בתפקוד יומיומי</strong>: קושי בקימה מכיסא, עלייה במדרגות, או הרמת חפצים</li>
          <li><strong>כאבי שרירים</strong>: מופיעים בכשליש מהחולים, אך פחות בולטים מהחולשה</li>
          <li><strong>קשיי בליעה</strong>: בכ-30% מהחולים, גורמים לקושי בבליעה ולסיכון לשאיפה</li>
          <li><strong>קשיי נשימה</strong>: במקרים חמורים, כאשר שרירי הנשימה מעורבים</li>
          <li><strong>תסמינים עוריים</strong>: בדרמטומיוזיטיס, פריחה אופיינית על הפנים, הידיים, ובמקומות אחרים</li>
          <li><strong>תסמינים מערכתיים</strong>: עייפות, חום נמוך, אובדן משקל, כאבי מפרקים</li>
        </ul>
        <p className="leading-relaxed">
          חשוב לציין שתסמיני המחלה עלולים להתפתח בהדרגה על פני שבועות או חודשים, ולכן האבחון עלול להתעכב.
        </p>

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

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">תפקיד בדיקת EMG באבחון מיופתיות דלקתיות</h2>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">מהי בדיקת EMG?</h3>
        <p className="leading-relaxed">
          בדיקת אלקטרומיוגרפיה (EMG) היא כלי חשוב באבחון מיופתיות דלקתיות. הבדיקה כוללת שני חלקים:
        </p>
        <ol className="list-decimal pr-8 space-y-3 mt-4">
          <li><strong>בדיקת מוליכות עצבית (NCS)</strong>: בדיקה זו בודקת את תפקוד העצבים הפריפריים ובדרך כלל תקינה במיופתיות טהורות, מה שעוזר להבדיל בינן לבין בעיות בעצבים.</li>
          <li><strong>בדיקת EMG של השרירים</strong>: החלק העיקרי באבחון מיופתיות, שבו מחט דקה עם אלקטרודה מוחדרת לשרירים שונים כדי לרשום את הפעילות החשמלית שלהם.</li>
        </ol>
        <p className="leading-relaxed">
          הבדיקה אינה כואבת במיוחד, אך יכולה לגרום לאי-נוחות מסוימת. היא נמשכת בין 30 ל-60 דקות, תלוי במספר השרירים הנבדקים.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">ממצאים אופייניים ב-EMG במיופתיות דלקתיות</h3>
        <p className="leading-relaxed">
          בבדיקת EMG של השרירים במיופתיות דלקתיות ניתן לזהות מספר ממצאים אופייניים:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>פוטנציאלים קצרים, נמוכים ורב-פאזיים</strong>: מאפיינים של סיבי שריר קטנים וחלשים</li>
          <li><strong>דה-סינכרוניזציה של יחידות מוטוריות</strong>: שינויים בדפוס הפעילות החשמלית של היחידות המוטוריות</li>
          <li><strong>פוטנציאלים ספונטניים חיוביים חדים וגלי פיברילציה</strong>: סימנים לתהליך פעיל של נזק לסיבי שריר</li>
          <li><strong>פריקות מיוטוניות</strong>: שינויים באות החשמלי אופייניים לפגיעה ביציבות ממברנת תא השריר</li>
          <li><strong>דפוס גיוס מוקדם</strong>: גיוס מוגבר של יחידות מוטוריות בהשוואה לעוצמת הכיווץ</li>
        </ul>
        <p className="leading-relaxed">
          ממצאים אלו מספקים תמונה אופיינית של "דפוס מיופתי", שהוא שונה מ"דפוס נוירוגני" הנראה בפגיעות עצביות. הבחנה זו חיונית לקביעת האבחנה המדויקת.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">יתרונות בדיקת EMG באבחון וניטור</h3>
        <p className="leading-relaxed">
          בדיקת EMG מציעה מספר יתרונות משמעותיים באבחון וניטור מיופתיות דלקתיות:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>אבחון מוקדם</strong>: יכולה לזהות שינויים חשמליים עוד לפני הופעת סימנים קליניים ברורים</li>
          <li><strong>הערכת היקף המחלה</strong>: מאפשרת להעריך כמה שרירים מעורבים וחומרת המעורבות</li>
          <li><strong>הבחנה בין תת-סוגים</strong>: מסייעת להבדיל בין סוגים שונים של מיופתיות דלקתיות</li>
          <li><strong>הנחיית ביופסיה</strong>: עוזרת לזהות אזורים מתאימים לביופסית שריר</li>
          <li><strong>מעקב אחר התקדמות</strong>: מאפשרת הערכה אובייקטיבית של תגובה לטיפול</li>
          <li><strong>אבחנה מבדלת</strong>: עוזרת להבחין בין מיופתיות דלקתיות למחלות אחרות עם תסמינים דומים</li>
        </ul>
        <p className="leading-relaxed">
          מחקרים הראו שבדיקת EMG יכולה לזהות שינויים מיופתיים ב-70% עד 90% מהחולים עם מיופתיות דלקתיות, מה שהופך אותה לכלי רגיש יחסית באבחון.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">בדיקות נוספות המשלימות את ה-EMG באבחון</h2>
        <p className="leading-relaxed">
          לצד בדיקת EMG, מספר בדיקות נוספות חשובות לאבחון מיופתיות דלקתיות:
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">בדיקות דם</h3>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>רמות אנזימי שריר בדם</strong>: עלייה ברמות קריאטין קינאז (CK), אלדולאז, אמינוטרנספראזות (AST, ALT) ולקטט דהידרוגנאז (LDH)</li>
          <li><strong>בדיקות נוגדנים</strong>: נוגדנים מיוזיטיס-ספציפיים (MSA) ונוגדנים מיוזיטיס-משויכים (MAA)</li>
        </ul>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">בדיקות הדמיה ורקמה</h3>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>ביופסיית שריר</strong>: הנחשבת ל"סטנדרט הזהב" באבחון, מראה תמונה היסטופתולוגית אופיינית של דלקת ונזק לסיבי שריר</li>
          <li><strong>בדיקות הדמיה</strong>: MRI של שרירים מראה דפוסים אופייניים של בצקת ודלקת</li>
          <li><strong>קפיץ תפקודי</strong>: הערכה אובייקטיבית של חולשת שרירים</li>
        </ul>
        <p className="leading-relaxed">
          השילוב של בדיקת EMG עם בדיקות אלו מאפשר אבחון מדויק ומוקדם יותר, וכן תכנון טיפול מותאם אישית. מחקרים מראים ששילוב של EMG, בדיקות נוגדנים וביופסיית שריר מגיע לרגישות של מעל 90% באבחון מיופתיות דלקתיות.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">גישות טיפוליות במיופתיות דלקתיות</h2>
        <p className="leading-relaxed">
          הטיפול במיופתיות דלקתיות מתמקד בדיכוי התגובה האוטואימונית והדלקת בשרירים. הגישה הטיפולית מותאמת לסוג המחלה, חומרתה, ומאפייני המטופל.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">טיפול תרופתי</h3>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>קורטיקוסטרואידים</strong>: קו טיפול ראשון, בדרך כלל פרדניזון במינון גבוה בתחילה (בדרך כלל 1 מ"ג לק"ג משקל גוף), עם הורדה הדרגתית</li>
          <li><strong>תרופות אימונוסופרסיביות</strong>: מטוטרקסט, אזתיופרין, מיקופנולט מופטיל לחולים שאינם מגיבים מספיק לסטרואידים</li>
          <li><strong>אימונוגלובולינים תוך-ורידיים (IVIG)</strong>: בעיקר במקרים חמורים או עמידים לטיפול</li>
          <li><strong>טיפולים ביולוגיים</strong>: ריטוקסימאב, אנטי-TNF ותרופות חדשניות אחרות במקרים עמידים</li>
        </ul>
        <p className="leading-relaxed">
          מחקרים קליניים הראו ש-60% עד 80% מהחולים בפולימיוזיטיס ודרמטומיוזיטיס מגיבים היטב לטיפול קו ראשון בסטרואידים, בעוד שתגובה לטיפול במיוזיטיס עם גופיפי הכללה היא נמוכה יותר.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">טיפולים משלימים</h3>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>פיזיותרפיה</strong>: תרגילי טווח תנועה, חיזוק שרירים והדרכה לפעילויות יומיומיות</li>
          <li><strong>תזונה מותאמת</strong>: תמיכה תזונתית למטופלים עם קשיי בליעה</li>
          <li><strong>ריפוי בעיסוק</strong>: התאמת אביזרי עזר ושיטות לביצוע פעולות יומיומיות</li>
          <li><strong>טיפול בקשיי בליעה</strong>: הערכה וטיפול על ידי קלינאי תקשורת</li>
        </ul>
        <p className="leading-relaxed">
          במיוזיטיס עם גופיפי הכללה (IBM), התגובה לטיפולים אימונוסופרסיביים ירודה, והטיפול מתמקד בעיקר בשיקום ובשמירה על תפקוד.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">אתגרים ותחזית במיופתיות דלקתיות</h2>
        <p className="leading-relaxed">
          הטיפול והתחזית במיופתיות דלקתיות משתנים בהתאם לסוג הספציפי של המחלה:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>פולימיוזיטיס ודרמטומיוזיטיס</strong>: ברוב המקרים, תגובה טובה לטיפול אימונוסופרסיבי, במיוחד אם מתחילים טיפול מוקדם. כ-50% מהחולים משיגים הפוגה משמעותית עם תפקוד שריר תקין או כמעט תקין.</li>
          <li><strong>מיוזיטיס עם גופיפי הכללה</strong>: תחזית פחות טובה, עם התקדמות הדרגתית של חולשת שרירים למרות טיפול.</li>
          <li><strong>אתגרים טיפוליים</strong>: איזון בין יעילות הטיפול האימונוסופרסיבי לתופעות הלוואי, סיכון מוגבר לזיהומים, וההשפעה של טיפול ממושך בסטרואידים.</li>
        </ul>
        <p className="leading-relaxed">
          גורמים המשפיעים על התחזית כוללים:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li>גיל בעת האבחון</li>
          <li>חומרת המחלה בתחילתה</li>
          <li>נוכחות מעורבות ריאתית</li>
          <li>קיום מחלה ממארת נלווית</li>
          <li>עיכוב באבחון ובטיפול</li>
        </ul>
        <p className="leading-relaxed">
          מחקרי מעקב ארוכי טווח הראו ששיעור ההישרדות לחמש שנים בחולים עם פולימיוזיטיס ודרמטומיוזיטיס הוא כ-95%, כאשר הסיבות העיקריות לתמותה הן זיהומים, מחלות לב וריאה, ומחלות ממאירות.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סיכום: חשיבות האבחון המוקדם באמצעות EMG</h2>
        <p className="leading-relaxed">
          מיופתיות דלקתיות הן מחלות מורכבות שדורשות אבחון מדויק ומוקדם ככל האפשר. בדיקת EMG, בשילוב עם בדיקות ייחודיות אחרות, מספקת מידע חיוני שמאפשר להבדיל בין סוגים שונים של מיופתיות, להעריך את חומרת המחלה, ולנטר את התגובה לטיפול.
        </p>
        <p className="leading-relaxed">
          התחלת טיפול מוקדם משפרת את התחזית ומפחיתה את הסיכון לנזק בלתי הפיך לשרירים. לכן, מטופלים עם חולשת שרירים הדרגתית או עם תסמינים אופייניים אחרים, במיוחד אם הם מלווים בעלייה ברמות אנזימי שריר בדם, צריכים לעבור הערכה מקיפה הכוללת בדיקת EMG.
        </p>
        <p className="leading-relaxed">
          גישה רב-תחומית, הכוללת ראומטולוגים, נוירולוגים, פיזיותרפיסטים ומומחים אחרים, היא המפתח לניהול מיטבי של מיופתיות דלקתיות ולשיפור איכות החיים של המטופלים.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">שאלות נפוצות</h2>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">מהו ההבדל העיקרי בין פולימיוזיטיס לדרמטומיוזיטיס?</h3>
        <p className="leading-relaxed">
          ההבדל העיקרי הוא נוכחות פריחה אופיינית בדרמטומיוזיטיס, במיוחד על העפעפיים (פריחת הליוטרופ) ועל פרקי האצבעות (סימן גוטרון). מבחינת מעורבות השרירים, שתי המחלות דומות למדי.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם בדיקת EMG כואבת?</h3>
        <p className="leading-relaxed">
          בדיקת EMG יכולה לגרום לאי-נוחות מסוימת, במיוחד כאשר מחדירים את מחט האלקטרודה לשרירים, אך בדרך כלל אינה כואבת במיוחד. תחושת אי-הנוחות דומה לזו של זריקה שגרתית.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">כמה זמן לוקח להחלים ממיופתיה דלקתית?</h3>
        <p className="leading-relaxed">
          זמן ההחלמה משתנה בהתאם לסוג המחלה, חומרתה ולתגובה לטיפול. בפולימיוזיטיס ודרמטומיוזיטיס, שיפור בחוזק השרירים יכול להתחיל תוך מספר שבועות מתחילת הטיפול, אך החלמה מלאה עשויה לקחת חודשים עד שנים. במיוזיטיס עם גופיפי הכללה, המחלה בדרך כלל מתקדמת למרות הטיפול.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם יש קשר בין מיופתיות דלקתיות וסרטן?</h3>
        <p className="leading-relaxed">
          כן, במיוחד בדרמטומיוזיטיס יש קשר מוגבר לסיכון למחלות ממאירות, במיוחד בקרב מבוגרים. הסיכון גבוה במיוחד בשנתיים הראשונות לאחר האבחון, ולכן מומלץ על בדיקות סקר לגילוי מוקדם של סרטן.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם מיופתיות דלקתיות הן מחלות תורשתיות?</h3>
        <p className="leading-relaxed">
          לא, מיופתיות דלקתיות אינן מחלות תורשתיות ישירות, אלא מחלות אוטואימוניות. עם זאת, יש נטייה גנטית מסוימת לפתח מחלות אוטואימוניות, כולל מיופתיות דלקתיות, במשפחות מסוימות.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם ניתן להחלים לחלוטין ממיופתיה דלקתית?</h3>
        <p className="leading-relaxed">
          בפולימיוזיטיס ודרמטומיוזיטיס, חלק מהחולים משיגים הפוגה מלאה עם טיפול מתאים, במיוחד אם האבחון והטיפול מתחילים מוקדם. עם זאת, רבים יזדקקו לטיפול תחזוקתי ארוך טווח. במיוזיטיס עם גופיפי הכללה, החלמה מלאה אינה צפויה, והמטרה היא להאט את התקדמות המחלה ולשמור על תפקוד.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">מהי תדירות המעקב הרפואי הנדרשת לאחר אבחון מיופתיה דלקתית?</h3>
        <p className="leading-relaxed">
          תדירות המעקב תלויה בחומרת המחלה, בתגובה לטיפול ובנוכחות תופעות לוואי של הטיפול. בתחילה, ייתכן שיהיה צורך במעקב כל שבועיים עד חודש. לאחר השגת יציבות, המעקב עשוי להיות כל 3-6 חודשים.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם ניתן להמשיך בפעילות גופנית עם מיופתיה דלקתית?</h3>
        <p className="leading-relaxed">
          כן, אך סוג ועצימות הפעילות צריכים להיות מותאמים אישית בהתאם למצב המטופל. בשלב החריף של המחלה, מנוחה היא חשובה. לאחר התייצבות, פעילות גופנית מתונה ופיזיותרפיה מומלצות לשיפור הכוח והתפקוד.
        </p>
      </div>
    )
  },
  'muscular-dystrophy': {
    id: 'muscular-dystrophy',
    title: 'ניוון שרירים (Muscular Dystrophy): תפקיד בדיקת EMG באבחון מוקדם ומעקב',
    date: '4 באפריל, 2025',
    readTime: '17 דקות',
    image: '/articles/images/ניוון שרירים.jpeg',
    description: 'מדריך מקיף על ניוון שרירים (דיסטרופיה שרירית), קבוצת מחלות גנטיות הגורמות לחולשת שרירים. למדו על סוגים שונים (דושן, בקר), תסמינים, וחשיבות בדיקת EMG באבחון.',
    keywords: [
      'ניוון שרירים', 'דושן דיסטרופיה', 'בקר דיסטרופיה', 'בדיקת EMG לניוון שרירים', 'אבחון מוקדם דיסטרופיה', 'חולשת שרירים תורשתית', 'מחלות שריר גנטיות', 'דלדול שרירים תורשתי', 'טיפול בניוון שרירים', 'גנטיקה של ניוון שרירים', 'דיסטרופין חלבון', 'רמות CK מוגברות', 'אבחון גנטי דיסטרופיה', 'ניוון שרירים חגורה', 'פיזיותרפיה לניוון שרירים', 'תסמינים של ניוון שרירים', 'איכות חיים עם דיסטרופיה', 'ייעוץ גנטי לדיסטרופיה', 'שיקום דיסטרופיה שרירים', 'טיפולים חדשניים לניוון שרירים'
    ],
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מה זה בכלל ניוון שרירים ולמה האבחון המוקדם כל כך חשוב?</h2>
        <p className="leading-relaxed">
          אז בואו נדבר רגע על ניוון שרירים (או בשם הרפואי, דיסטרופיה שרירית). ת'אמת, זו לא מחלה אחת, אלא קבוצה שלמה של מחלות. המשותף לכולן זה שהן תורשתיות, כלומר, נגרמות בגלל פגם גנטי, והן גורמות לשרירים להיחלש ולהתדלדל בהדרגה. הפגם הגנטי הזה, הוא משפיע על ייצור חלבונים שחיוניים לתפקוד התקין של השרירים שלנו. כשאין מספיק מהחלבון הזה, או שהוא לא עובד כמו שצריך, תאי השריר מתחילים למות ומוחלפים ברקמת שומן וחיבור (מה שנקרא פיברוזיס). התוצאה? חולשה שהולכת ומחמירה עם הזמן. למה זה קורה? טוב, הגנטיקה מאחורי זה יכולה להיות מסובכת, יש כל מיני דפוסי תורשה – חלק עוברות מהורים לילדים בצורה דומיננטית (מספיק הורה אחד עם הגן הפגום), אחרות רצסיביות (שני ההורים צריכים להיות נשאים), ויש כאלה, כמו דושן למשל, שקשורות לכרומוזום X ופוגעות בעיקר בבנים.
        </p>
        <p className="leading-relaxed">
          עכשיו, למה כל כך קריטי לתפוס את זה מוקדם? אבחון מוקדם דיסטרופיה הוא לא סתם סיסמה. ככל שמזהים את הבעיה מהר יותר, אפשר להתחיל טיפול תומך מוקדם יותר. זה אולי לא ירפא את המחלה, לצערנו עדיין אין ריפוי מלא לרוב הסוגים, אבל זה בהחלט יכול לעזור לשמור על תפקוד, למנוע סיבוכים כמו עיוותים במפרקים (קונטרקטורות) או בעיות נשימה, ולשפר משמעותית את איכות החיים של הילד או המבוגר. מניסיוני במרפאה, ראיתי המון מקרים שבהם אבחון מהיר עשה הבדל של שמיים וארץ. זה גם נותן למשפחה זמן להתארגן, להבין מה צפוי, ולקבל ייעוץ גנטי – שזה קריטי אם יש עוד ילדים במשפחה או אם מתכננים עוד ילדים. זה גם פותח דלת להשתתפות במחקרים קליניים ובטיפולים חדשניים שאולי יכולים לעזור. אי אפשר להדגיש מספיק כמה זמן הוא פקטור משמעותי כאן. הורים ששמים לב שהילד מתקשה לקום מהרצפה, או שההליכה שלו קצת מוזרה – אל תחכו, תלכו לבדוק. זה יכול להיות כלום, אבל אם זה כן משהו, עדיף לדעת מוקדם.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">סוגים שונים של ניוון שרירים: לא הכל אותו דבר</h2>
        <p className="leading-relaxed">
          כשמדברים על מחלות שריר גנטיות, חשוב להבין שניוון שרירים זה לא מקשה אחת. יש המון סוגים, והם שונים מאוד זה מזה. ההבדלים יכולים להיות בגן הספציפי שפגוע, בגיל שבו מופיעים התסמינים הראשונים, בקצב ההתקדמות של המחלה, ובקבוצות השרירים העיקריות שנפגעות. בואו נעיף מבט על כמה מהסוגים הנפוצים יותר, כדי שתבינו את השונות:
        </p>
        <ol className="list-decimal pr-8 space-y-3 mt-4">
          <li><strong>דיסטרופיית דושן (DMD):</strong> זו הצורה הכי שכיחה והכי קשה אצל ילדים, בעיקר בנים (בערך 1 ל-3,500-5,000 לידות זכר). נגרמת ממוטציה בגן שמייצר חלבון חשוב בשם דיסטרופין. התסמינים מתחילים בדרך כלל בגיל צעיר, בין שנתיים לחמש. רואים קושי בריצה, קפיצה, עליית מדרגות, ולעתים קרובות יש את "סימן גאוורס" – הילד צריך להיעזר בידיים כדי לקום מהרצפה. לצערי, ההתקדמות בדושן דיסטרופיה היא יחסית מהירה, ורוב הילדים יזדקקו לכיסא גלגלים לפני גיל 13. יש גם סיכון גבוה לבעיות לב ונשימה בשלבים מתקדמים.</li>
          <li><strong>דיסטרופיית בקר (BMD):</strong> גם היא נגרמת מבעיה בגן הדיסטרופין, אבל הפגיעה בחלבון פחות חמורה מאשר בדושן. לכן, בקר דיסטרופיה היא מחלה מתונה יותר. התסמינים מופיעים בדרך כלל בגיל מאוחר יותר, לפעמים רק בגיל ההתבגרות או אפילו בבגרות המוקדמת. ההתקדמות איטית יותר, ורבים מהחולים שומרים על יכולת הליכה עד גיל 40, 50 ואף יותר. אבל חשוב לזכור שגם ב-BMD יש שונות גדולה בחומרה בין חולה לחולה, וגם כאן יכולות להיות בעיות לב.</li>
          <li><strong>דיסטרופיית חגורת הגפיים (LGMD):</strong> זו בעצם קבוצה הטרוגנית של מחלות (יותר מ-30 תתי-סוגים!) שפוגעות בעיקר בשרירים הקרובים למרכז הגוף – חגורת הכתפיים וחגורת האגן. לכן קוראים לזה ניוון שרירים חגורה. הגיל שבו זה מתחיל והקצב שבו זה מתקדם משתנים מאוד בין הסוגים השונים, מילדות מאוחרת ועד בגרות. חלק מהסוגים מתקדמים לאט, אחרים מהר יותר. גם כאן, בחלק מהסוגים יש מעורבות של שרירי הלב והנשימה.</li>
          <li><strong>דיסטרופיה פציוסקפולוהומרלית (FSHD):</strong> השם הארוך הזה מתאר מחלה שפוגעת בעיקר בשרירי הפנים (פציו), שכמות (סקפולה) והזרוע העליונה (הומרוס). החולשה היא לעתים קרובות א-סימטרית (צד אחד חלש יותר מהשני). אנשים עם FSHD מתקשים לעצום עיניים חזק, לשרוק, או להרים ידיים מעל הראש. ההתקדמות בדרך כלל איטית, ורוב האנשים נשארים ניידים לאורך חייהם, אם כי איכות החיים יכולה להיפגע.</li>
          <li><strong>דיסטרופיה מיוטונית (DM):</strong> זו הצורה השכיחה ביותר של ניוון שרירים אצל מבוגרים. היא מיוחדת כי בנוסף לחולשת שרירים (בעיקר בפנים, בצוואר ובקצוות הגפיים), יש לה תופעה שנקראת מיוטוניה – קושי להרפות שריר אחרי כיווץ (למשל, קושי לפתוח את היד אחרי שלחצו אותה). מחלה זו היא רב-מערכתית ויכולה לפגוע גם בלב, בעיניים (קטרקט), במערכת הנשימה ובמערכת ההורמונלית. יש שני סוגים עיקריים (DM1 ו-DM2) עם מאפיינים קצת שונים.</li>
        </ol>
        <p className="leading-relaxed">
          אז כמו שאתם רואים, ניוון שרירים זה עולם ומלואו. ההבנה של הסוג הספציפי היא קריטית לא רק לאבחנה, אלא גם לניהול המחלה ולייעוץ למשפחה.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">התסמינים שמדליקים נורה אדומה</h2>
        <p className="leading-relaxed">
          איך בעצם חושדים שיש ניוון שרירים? מהם הסימנים שצריכים לגרום להורים, או לאדם עצמו, לפנות לרופא? חשוב להכיר את תסמינים של ניוון שרירים, כי זיהוי מוקדם, כמו שאמרנו, הוא המפתח. כמובן, התסמינים משתנים בהתאם לסוג הדיסטרופיה הספציפי ולגיל ההופעה, אבל יש כמה דברים שחוזרים על עצמם ושווה לשים לב אליהם:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>חולשת שרירים מתקדמת:</strong> זה הלב של העניין. החולשה מתחילה בדרך כלל בקבוצות שרירים מסוימות (למשל, אגן וירכיים בדושן ובקר, כתפיים ואגן ב-LGMD, פנים וכתפיים ב-FSHD) ומתפשטת בהדרגה. זה לא משהו שקורה בבום, אלא תהליך איטי. הילד אולי מתקשה לרוץ כמו חבריו, נופל הרבה, מתקשה לעלות מדרגות או לקום מהרצפה. אצל מבוגרים, זה יכול להתבטא בקושי להרים חפצים, עייפות מהירה בפעילות גופנית, או שינוי בהליכה. חולשת שרירים תורשתית היא משהו שצריך לקחת ברצינות.</li>
          <li><strong>שינויים בהליכה:</strong> הליכה "מתנדנדת" כמו ברווז (Waddling gait) היא די אופיינית כשיש חולשה של שרירי האגן. לפעמים רואים גם הליכה על קצות האצבעות, בניסיון לפצות על חולשה במקומות אחרים.</li>
          <li><strong>קושי בקימה מהרצפה (סימן גאוורס - Gowers' sign):</strong> זה סימן קלאסי שרואים בעיקר בדושן ובקר. בגלל החולשה ברגליים ובגב התחתון, הילד "מטפס" על עצמו עם הידיים כדי לעבור מישיבה לעמידה. אם אתם רואים את זה אצל הילד שלכם, זה בהחלט דורש בירור.</li>
          <li><strong>דלדול שרירים (אטרופיה):</strong> עם הזמן, השרירים החלשים גם מאבדים מהנפח שלהם. אפשר לראות שהשרירים נראים קטנים יותר. באופן פרדוקסלי, לפעמים שרירי השוקיים דווקא נראים מוגדלים (פסאודו-היפרטרופיה), אבל זה לא בגלל שהם חזקים יותר, אלא בגלל שהם מוחלפים ברקמת שומן וחיבור. דלדול שרירים תורשתי הוא סימן מאוחר יותר בדרך כלל.</li>
          <li><strong>התכווצויות מפרקים (קונטרקטורות):</strong> בגלל חוסר האיזון בין קבוצות שרירים שונות וחוסר תנועה מספקת, המפרקים עלולים להתקבע במנח מסוים ולא לאפשר טווח תנועה מלא. זה נפוץ בקרסוליים, בברכיים, בירכיים ובמרפקים. פיזיותרפיה קבועה חשובה מאוד כדי למנוע או לעכב את זה.</li>
          <li><strong>כאבים ועייפות:</strong> אלו תלונות מאוד שכיחות, במיוחד ככל שהמחלה מתקדמת. העייפות יכולה להיות קשורה למאמץ המוגבר שנדרש לכל פעולה, והכאבים יכולים לנבוע מהשרירים עצמם או מבעיות משניות במפרקים ובעמוד השדרה.</li>
          <li><strong>בעיות נשימה ו/או לב:</strong> בחלק מהסוגים (בעיקר דושן, בקר, LGMD מסוימים ודיסטרופיה מיוטונית), יש פגיעה גם בשרירי הנשימה ובשריר הלב. זה יכול להתבטא בקוצר נשימה, זיהומים נשימתיים חוזרים, עייפות, הפרעות קצב, ואי ספיקת לב. זה סיבוך רציני שדורש מעקב וטיפול צמוד.</li>
        </ul>
        <p className="leading-relaxed">
          כמובן, לא כל מי שיש לו אחד מהתסמינים האלה בהכרח סובל מניוון שרירים. אבל אם יש שילוב של כמה מהם, או אם החולשה מחמירה עם הזמן, או אם יש היסטוריה משפחתית – זה בהחלט מצדיק בדיקה יסודית אצל נוירולוג או מומחה למחלות שריר.
        </p>

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

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">בדיקת EMG: איך היא עוזרת לפענח את התעלומה?</h2>
        <p className="leading-relaxed">
          אוקיי, אז יש חשד לניוון שרירים בגלל התסמינים או ההיסטוריה. אחד הכלים המרכזיים שהנוירולוג ישתמש בו כדי להתקדם באבחנה היא בדיקת EMG, או בשמה המלא אלקטרומיוגרפיה. מה זה בעצם ולמה היא כל כך שימושית? בדיקת EMG לניוון שרירים היא בעצם דרך להקשיב לפעילות החשמלית של השרירים והעצבים שמפעילים אותם. זה קצת כמו אק"ג ללב, רק לשרירים ולעצבים. הבדיקה עוזרת לנו להבין אם הבעיה היא בשריר עצמו (מה שנקרא בעיה מיופתית, כמו בניוון שרירים), בעצב שמעצבב את השריר (בעיה נוירופתית), או אולי בצומת שבין העצב לשריר.
        </p>
        <p className="leading-relaxed">
          הבדיקה מורכבת בדרך כלל משני חלקים:
        </p>
        <ol className="list-decimal pr-8 space-y-3 mt-4">
          <li><strong>בדיקת הולכה עצבית (NCS - Nerve Conduction Studies):</strong> בחלק הזה, שמים מדבקות קטנות (אלקטרודות) על העור מעל עצבים מסוימים. נותנים גירוי חשמלי קטן ועדין לעצב במקום אחד, וקולטים את התגובה שלו במקום אחר. זה מאפשר למדוד כמה מהר ובאיזו עוצמה האות החשמלי עובר לאורך העצב. בניוון שרירים קלאסי, הבעיה היא בשריר ולא בעצב, ולכן בדיקת ההולכה העצבית תהיה בדרך כלל תקינה. זה ממצא חשוב, כי הוא עוזר לשלול מחלות עצב פריפריות שיכולות גם הן לגרום לחולשה. לפעמים אנשים קצת נלחצים מהגירוי החשמלי, אבל זה ממש לא נורא, מרגישים עקצוץ קל וזהו.</li>
          <li><strong>בדיקת EMG עם מחט:</strong> זה החלק שיותר "מפחיד" אנשים, אבל הוא סופר חשוב. כאן, מחדירים מחט דקה מאוד (דקיקה כמו מחט של דיקור סיני) עם אלקטרודה זעירה בקצה, ישירות לתוך שרירים שונים. קודם כל בודקים את הפעילות החשמלית של השריר כשהוא במנוחה. בשריר בריא, אין כמעט פעילות במנוחה. אבל בשריר חולה, כמו בניוון שרירים, אפשר לראות פעילות ספונטנית לא תקינה, כמו "פיברילציות" או "גלים חדים חיוביים", שמעידים על כך שתאי שריר בודדים מתים או לא יציבים. אחר כך, מבקשים מהנבדק לכווץ קצת את השריר, ואז חזק יותר. כאן מסתכלים על הצורה והגודל של היחידות המוטוריות (קבוצה של סיבי שריר שמעוצבבים על ידי אותו עצב). בניוון שרירים, הבעיה היא בסיבי השריר עצמם. הרבה מהם מתים או מתכווצים, ולכן היחידות המוטוריות נראות קטנות יותר מהרגיל (פוטנציאלים קצרים, נמוכים ולפעמים מפוצלים - פוליפאזיים). בנוסף, כדי להשיג כוח מסוים, הגוף צריך "לגייס" יותר יחידות מוטוריות מהרגיל, ובשלב מוקדם יותר של הכיווץ. התופעה הזו נקראת "גיוס מוקדם" (early recruitment) והיא מאוד אופיינית למחלה מיופתית.</li>
        </ol>
        <p className="leading-relaxed">
          אז לסיכום, בדיקת ה-EMG עוזרת לנו לאשר שהבעיה היא אכן בשריר (מיופתיה), להעריך את הפיזור של הפגיעה (אילו שרירים מעורבים יותר ואילו פחות), ולפעמים גם לתת רמזים לגבי סוג המחלה הספציפי (למשל, פריקות מיוטוניות בדיסטרופיה מיוטונית). זה כלי אבחנתי חזק מאוד בידיים מנוסות.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">היתרונות של EMG בתהליך האבחון והמעקב</h2>
        <p className="leading-relaxed">
          דיברנו על איך EMG עובד, אבל בואו נסכם למה הוא כל כך יעיל ומה היתרונות שלו כשמתמודדים עם חשד לניוון שרירים. אני רואה במרפאה כל יום איך הבדיקה הזו עוזרת לנו להתקדם:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>אישור שהבעיה היא בשריר:</strong> זה אולי היתרון הכי גדול. הרבה מצבים יכולים לגרום לחולשה, לא רק מחלות שריר. בעיות בעצבים, בחוט השדרה, במוח, או בצומת עצב-שריר – כולן יכולות להתבטא בחולשה. ה-EMG, ובמיוחד השילוב של NCS תקין עם ממצאים מיופתיים במחט, עוזר לנו לכוון באופן די ודאי לכך שהמקור לבעיה הוא השריר עצמו. זה חוסך הרבה זמן ובירורים מיותרים בכיוונים אחרים.</li>
          <li><strong>אבחנה מבדלת בין סוגי מחלות שריר:</strong> ה-EMG יכול לעזור להבדיל בין סוגים שונים של מחלות שריר. למשל, הוא עוזר להבדיל בין דיסטרופיות שריר (כמו דושן, בקר, LGMD) לבין מיופתיות אחרות כמו מיופתיות דלקתיות (מיוזיטיס), מיופתיות מולדות, או מיופתיות מטבוליות. לכל קבוצה יש מאפיינים אופייניים ב-EMG שיכולים לרמוז על האבחנה. לדוגמה, בדיסטרופיה מיוטונית נראה את ה"פריקות המיוטוניות" האופייניות.</li>
          <li><strong>הערכת חומרה ופיזור:</strong> הבדיקה מאפשרת לנו להעריך עד כמה הפגיעה בשרירים חמורה ואילו קבוצות שרירים מעורבות. בודקים שרירים שונים בגפיים העליונות, התחתונות, ולפעמים גם בפנים או בגב. זה נותן תמונה טובה על הפיזור של המחלה, מה שגם עוזר באבחנה (לכל סוג יש דפוס פיזור אופייני) וגם חשוב למעקב.</li>
          <li><strong>מעקב אחר התקדמות המחלה:</strong> מכיוון שניוון שרירים הוא מחלה מתקדמת, אפשר להשתמש ב-EMG כדי לעקוב אחרי ההתקדמות לאורך זמן. ביצוע בדיקות חוזרות יכול להראות אם יש החמרה בממצאים המיופתיים, ובאיזה קצב. זה יכול להיות חשוב בהערכת יעילות של טיפול בניוון שרירים או במחקרים קליניים.</li>
          <li><strong>הנחיית ביופסיית שריר:</strong> אם מחליטים שצריך לקחת ביופסיית שריר (דגימת רקמה קטנה מהשריר לבדיקה מיקרוסקופית), ה-EMG יכול לעזור לבחור את השריר המתאים ביותר לביופסיה. אנחנו מחפשים שריר שמעורב במחלה, אבל לא פגוע מדי (כי אז לא נראה את השינויים האופייניים) ולא תקין לגמרי. ה-EMG יכול לכוון אותנו לשריר ה"נכון".</li>
          <li><strong>שימוש במחקרים קליניים:</strong> בניסויים קליניים שבודקים טיפולים חדשניים לניוון שרירים, EMG משמש לעתים קרובות כמדד תוצאה אובייקטיבי להערכת יעילות הטיפול. שינויים לטובה בממצאי ה-EMG יכולים להצביע על כך שהטיפול אכן עוזר לשרירים.</li>
        </ul>
        <p className="leading-relaxed">
          חשוב לי להדגיש משהו מניסיון אישי: הבדיקה היא כלי עזר חשוב, אבל היא לא נעימה במיוחד, במיוחד חלק המחט. חשוב להסביר למטופל, ובמיוחד לילד, בדיוק מה הולך לקרות, למה זה חשוב, ולהיות סבלניים. הסחת דעת, משחה מאלחשת, ולפעמים אפילו טשטוש קל יכולים לעזור. התוצאות שמתקבלות שוות את האי-נוחות הזמנית.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">האבחון המלא: EMG הוא רק חלק מהפאזל</h2>
        <p className="leading-relaxed">
          למרות כל היתרונות של ה-EMG שפירטנו, חשוב מאוד לזכור: EMG לבד כמעט אף פעם לא מספיק כדי לתת אבחנה סופית של סוג ניוון השרירים הספציפי. האבחון של ניוון שרירים הוא תהליך מורכב, כמו הרכבת פאזל, וה-EMG הוא רק חתיכה אחת, אם כי חשובה, בפאזל הזה. כדי להגיע לאבחנה מדויקת, אנחנו משתמשים בגישה רב-שלבית שמשלבת מידע ממספר מקורות:
        </p>
        <ol className="list-decimal pr-8 space-y-3 mt-4">
          <li><strong>הערכה קלינית:</strong> זה הבסיס להכל. מתחילים בשיחה מפורטת עם המטופל והמשפחה על התסמינים, מתי התחילו, איך התקדמו, והאם יש עוד מקרים במשפחה (היסטוריה משפחתית). אחר כך עושים בדיקה גופנית ונוירולוגית יסודית, שבה מעריכים את הכוח של קבוצות שרירים שונות, מחפשים דלדול שרירים, בודקים רפלקסים, טווחי תנועה במפרקים, את ההליכה, ומחפשים סימנים ספציפיים כמו סימן גאוורס או חולשה בפנים.</li>
          <li><strong>בדיקות דם:</strong> הבדיקה הכי חשובה בהקשר הזה היא רמת האנזים קריאטין קינאז (CK או CPK) בדם. זהו אנזים שנמצא בריכוז גבוה בתוך תאי שריר. כשתאי שריר נפגעים או מתים, כמו בניוון שרירים, ה-CK דולף מהם לזרם הדם והרמה שלו עולה משמעותית. רמות CK מוגברות מאוד, לפעמים פי עשרות או מאות מהנורמה, הן סימן חזק מאוד למחלת שריר פעילה, במיוחד בדיסטרופיות כמו דושן ובקר. עם זאת, רמת CK תקינה לא שוללת לגמרי ניוון שרירים, ובמחלות שריר אחרות העלייה יכולה להיות מתונה יותר.</li>
          <li><strong>בדיקת EMG:</strong> כמו שדיברנו בהרחבה, ה-EMG עוזר לאשר שהבעיה היא מיופתית ולשלול בעיות עצביות.</li>
          <li><strong>ביופסיית שריר:</strong> בעבר, זו הייתה בדיקת מפתח. לוקחים חתיכה קטנה משריר (בדרך כלל מהירך או מהזרוע) בהרדמה מקומית, ושולחים אותה למעבדה לבדיקה תחת מיקרוסקופ. בבדיקה ההיסטולוגית אפשר לראות שינויים אופייניים לניוון שרירים, כמו שוני בגודל סיבי השריר, סיבים מנוונים ומתחדשים, תהליך דלקתי קל, והחלפה של רקמת שריר ברקמת שומן וחיבור. בנוסף, אפשר לבצע צביעות מיוחדות (אימונוהיסטוכימיה) כדי לבדוק נוכחות או היעדר של חלבונים ספציפיים, כמו הדיסטרופין חלבון בדושן ובקר. כיום, עם ההתקדמות בבדיקות הגנטיות, הצורך בביופסיה פחת, אבל היא עדיין חשובה במקרים שבהם האבחנה לא ברורה או שהבדיקה הגנטית לא מצאה את הפגם.</li>
          <li><strong>בדיקות גנטיות:</strong> זה הפך להיות ה"גולד סטנדרד" לאבחון סופי של רוב סוגי ניוון השרירים. אבחון גנטי דיסטרופיה מאפשר לזהות את המוטציה הספציפית בגן שגורמת למחלה. פעם היו בודקים גן אחר גן, מה שהיה יקר ומסורבל. היום, עם טכנולוגיות ריצוף מתקדמות כמו ריצוף הדור הבא (NGS) או ריצוף אקסום/גנום מלא, אפשר לבדוק פאנלים של עשרות או מאות גנים הקשורים למחלות שריר בבדיקה אחת. זיהוי המוטציה הספציפית מאשר את האבחנה, מאפשר לסווג במדויק את סוג הדיסטרופיה, חשוב לייעוץ גנטי לדיסטרופיה למשפחה, ולפעמים גם מכוון לטיפולים ספציפיים שמותאמים למוטציה. הגנטיקה של ניוון שרירים היא תחום שמתפתח כל הזמן.</li>
          <li><strong>בדיקות הדמיה:</strong> לפעמים משתמשים גם ב-MRI של השרירים. הבדיקה הזו יכולה להראות דפוסים אופייניים של מעורבות שרירים (אילו שרירים מוחלפים בשומן ואילו נשמרים יחסית), מה שיכול לעזור באבחנה המבדלת בין סוגי LGMD שונים, למשל.</li>
        </ol>
        <p className="leading-relaxed">
          רק השילוב של כל הנתונים האלה – הסיפור הקליני, הבדיקה הגופנית, רמות ה-CK, ממצאי ה-EMG, תוצאות הביופסיה (אם בוצעה) והבדיקה הגנטית – מאפשר לנו להגיע לאבחנה המדויקת ביותר ולתכנן את הטיפול והמעקב המתאימים.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מבט לעתיד: טיפולים חדשים ומחקרים</h2>
        <p className="leading-relaxed">
          אז איבחנו ניוון שרירים, ודיברנו על חשיבות ה-EMG בתהליך. אבל מה הלאה? איך מטפלים ומה צופן העתיד? נכון להיום, לרוב סוגי ניוון השרירים עדיין אין ריפוי מלא. הטיפול מתמקד בעיקר בניהול התסמינים, האטת התקדמות המחלה ככל האפשר, מניעת סיבוכים ושיפור איכות חיים עם דיסטרופיה. הגישה הטיפולית היא רב-תחומית, וכוללת צוות שלם של מומחים: נוירולוגים, רופאי ילדים, גנטיקאים, אורתופדים, קרדיולוגים, רופאי ריאות, פיזיותרפיסטים, מרפאים בעיסוק, תזונאים ועובדים סוציאליים.
        </p>
        <p className="leading-relaxed">
          הטיפולים הקיימים כוללים:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>טיפול תרופתי:</strong>
            <ul className="list-circle pr-6 space-y-2 mt-2">
              <li><strong>סטרואידים (קורטיקוסטרואידים):</strong> בעיקר בדושן, הוכח שהם מאטים את איבוד הכוח ושומרים על יכולת ההליכה למשך זמן רב יותר, אם כי יש להם תופעות לוואי שצריך לנהל.</li>
              <li><strong>תרופות ממוקדות מוטציה:</strong> בשנים האחרונות פותחו תרופות ספציפיות לסוגי מוטציות מסוימים בדושן, כמו אטלורן (למוטציות פסק - nonsense) ואטפלירסן (לדילוג על אקסון 51). אלו טיפולים חדשניים לניוון שרירים שמראים הבטחה מסוימת.</li>
              <li><strong>תרופות ללב:</strong> מעכבי ACE או חוסמי בטא משמשים לטיפול ומניעה של בעיות לב הנלוות לחלק מהדיסטרופיות.</li>
              <li><strong>תרופות סימפטומטיות:</strong> לטיפול בכאב, עייפות, התכווצויות שרירים וכו'.</li>
            </ul>
          </li>
          <li><strong>טיפולים לא תרופתיים:</strong>
            <ul className="list-circle pr-6 space-y-2 mt-2">
              <li><strong>פיזיותרפיה:</strong> זה אולי המרכיב הכי חשוב בטיפול התומך. פיזיותרפיה לניוון שרירים כוללת תרגילי מתיחה לשמירה על טווחי תנועה ומניעת קונטרקטורות, תרגילים לחיזוק עדין (ללא גרימת נזק נוסף), ושמירה על סיבולת לב-ריאה. זה חלק מרכזי גם בשיקום דיסטרופיה שרירים.</li>
              <li><strong>ריפוי בעיסוק:</strong> עוזר להתאים את הסביבה ואת הפעילויות היומיומיות ליכולות המטופל, וממליץ על אביזרי עזר.</li>
              <li><strong>תמיכה נשימתית:</strong> החל מתרגילים לחיזוק שרירי הנשימה, דרך שימוש במכשירי הנשמה לא פולשניים (כמו BiPAP) בלילה, ועד טרכאוסטומיה במקרים מתקדמים.</li>
              <li><strong>ניתוחים אורתופדיים:</strong> לתיקון עקמת (סקוליוזיס) או לשחרור קונטרקטורות קשות במפרקים.</li>
              <li><strong>אביזרי עזר:</strong> סדים, הליכונים, קביים, כיסאות גלגלים (ידניים או ממונעים) – כל מה שעוזר לשמור על ניידות ועצמאות.</li>
            </ul>
          </li>
        </ul>
        <p className="leading-relaxed">
          ומה לגבי העתיד? המחקר בתחום ניוון שרירים מתקדם בקצב מסחרר, ויש כמה כיוונים מאוד מבטיחים:
        </p>
        <ul className="list-disc pr-8 space-y-3 mt-4">
          <li><strong>טיפול גנטי:</strong> החלום הגדול הוא לתקן את הגן הפגום. טכנולוגיות כמו CRISPR-Cas9 מאפשרות עריכה גנטית מדויקת ונבדקות כעת במודלים של מחלות. גישה אחרת היא להחדיר עותק תקין של הגן לתוך תאי השריר באמצעות נשאים ויראליים. יש כבר ניסויים קליניים ראשונים בתחום הזה.</li>
          <li><strong>דילוג על אקסונים (Exon Skipping):</strong> זו הגישה שמאחורי תרופות כמו אטפלירסן. הרעיון הוא "לדלג" על קטע פגום (אקסון) בקוד הגנטי בזמן יצירת החלבון, כדי לאפשר יצירה של חלבון מקוצר אך מתפקד חלקית (כמו ב-BMD במקום DMD). מפתחים תרופות דומות לעוד אקסונים.</li>
          <li><strong>טיפול בתאי גזע:</strong> הרעיון הוא להשתמש בתאי גזע שיכולים להתמיין לתאי שריר בריאים ולהחליף את התאים הפגועים. המחקר עדיין בשלבים מוקדמים יחסית.</li>
          <li><strong>פיתוח תרופות חדשות:</strong> מחפשים תרופות שיכולות להפחית דלקת ונזק לשריר, לשפר את תהליך התיקון וההתחדשות של השריר, או להגביר את המנגנונים הטבעיים של התא לסילוק חלבונים פגומים (אוטופגיה).</li>
        </ul>
        <p className="leading-relaxed">
          בדיקת ה-EMG ממשיכה להיות כלי חשוב גם בהקשר הזה, היא משמשת להערכת יעילות הטיפולים החדשים הללו בניסויים קליניים. יש בהחלט סיבה לאופטימיות זהירה, והתקווה היא שבשנים הקרובות נראה עוד ועוד פריצות דרך שישנו את הטיפול במחלות הקשות האלה.
        </p>

        <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">שאלות נפוצות (FAQ)</h2>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם בדיקת EMG כואבת?</h3>
        <p className="leading-relaxed">
          <strong>תשובה:</strong> בדיקת ה-EMG מורכבת משני חלקים. חלק ההולכה העצבית (NCS) כולל גירויים חשמליים קלים שמרגישים כמו עקצוצים או הקשות קטנות, זה בדרך כלל לא כואב אבל יכול להיות קצת לא נעים. חלק המחט כולל החדרת מחט דקה לשריר, וזה יכול לגרום לאי נוחות או כאב קל וחולף, בדומה לזריקה. אצל ילדים או אנשים רגישים במיוחד אפשר להשתמש במשחה מאלחשת או בטכניקות הסחת דעת. בסך הכל, רוב האנשים עוברים את הבדיקה ללא קושי מיוחד.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: כמה זמן אורכת בדיקת EMG?</h3>
        <p className="leading-relaxed">
          <strong>תשובה:</strong> משך הבדיקה תלוי במספר העצבים והשרירים שצריך לבדוק. בדרך כלל, בדיקה מקיפה לחשד לניוון שרירים אורכת בין 45 דקות לשעה וחצי.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם EMG יכול לאבחן בוודאות איזה סוג ניוון שרירים יש לי?</h3>
        <p className="leading-relaxed">
          <strong>תשובה:</strong> EMG הוא כלי מצוין לאשר שהבעיה היא בשריר (מיופתיה) ולתת רמזים לגבי סוג המחלה, אבל הוא לא יכול לקבוע בוודאות את האבחנה הספציפית של סוג הדיסטרופיה. לשם כך נדרש שילוב של הממצאים הקליניים, בדיקות דם (CK), ולרוב גם בדיקה גנטית שמזהה את המוטציה המדויקת.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם צריך לעשות EMG אם הבדיקה הגנטית כבר אישרה את האבחנה?</h3>
        <p className="leading-relaxed">
          <strong>תשובה:</strong> לא תמיד. אם האבחנה הגנטית ברורה ומתאימה לתמונה הקלינית, ייתכן שניתן לוותר על EMG. עם זאת, לפעמים ה-EMG עדיין יכול לתת מידע נוסף על חומרת הפגיעה בשרירים השונים ועל הפיזור שלה, מה שיכול להיות שימושי לתכנון הטיפול והמעקב, או אם שוקלים ביופסיית שריר. ההחלטה היא אינדיבידואלית ותלויה במקרה הספציפי.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: האם יש סיכונים בבדיקת EMG?</h3>
        <p className="leading-relaxed">
          <strong>תשובה:</strong> בדיקת EMG נחשבת לבטוחה מאוד. הסיכון העיקרי בחלק המחט הוא דימום קל או זיהום באזור ההחדרה, אבל זה נדיר מאוד מכיוון שמשתמשים במחטים סטריליות ודקות. אצל אנשים עם הפרעות קרישה קשות או נוטלי מדללי דם במינון גבוה, יש לנקוט משנה זהירות. חשוב ליידע את הבודק על כל מצב רפואי רלוונטי לפני הבדיקה.
        </p>

        <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">שאלה: מה ההבדל בין EMG ל-MRI שרירים?</h3>
        <p className="leading-relaxed">
          <strong>תשובה:</strong> EMG בודק את הפעילות החשמלית של השרירים והעצבים, כלומר את התפקוד שלהם. MRI, לעומת זאת, הוא בדיקת הדמיה שנותנת תמונה מפורטת של המבנה של השרירים. MRI יכול להראות אם יש דלדול שרירים, בצקת, או החלפה של רקמת שריר בשומן. שתי הבדיקות נותנות מידע שונה ומשלים, ולפעמים משתמשים בשתיהן בתהליך האבחון.
        </p>
      </div>
    )
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  
  useEffect(() => {
    // Set RTL direction for Hebrew content
    document.documentElement.setAttribute('dir', 'rtl');
    
    // Get post data based on ID
    if (id && blogPosts[id]) {
      setPost(blogPosts[id]);
    }
    
    return () => {
      document.documentElement.removeAttribute('dir');
    };
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">המאמר לא נמצא</h1>
          <Link to="/blog" className="text-medblue hover:underline">חזרה לבלוג</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {post && (
        <Helmet>
          <title>{post.title} | MEDASSIST</title>
          <meta name="description" content={post.description} />
          <meta name="keywords" content={post.keywords.join(', ')} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={post.image} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.description} />
          <meta name="twitter:image" content={post.image} />
          <link rel="canonical" href={`https://medassist.co.il/blog/${post.id}`} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "headline": post.title,
              "image": post.image,
              "datePublished": "2025-03-18T08:00:00+02:00",
              "dateModified": "2025-03-18T08:00:00+02:00",
              "author": {
                "@type": "Organization",
                "name": "MEDASSIST"
              },
              "publisher": {
                "@type": "Organization",
                "name": "MEDASSIST",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://medassist.co.il/logo.png"
                }
              },
              "description": post.description,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://medassist.co.il/blog/${post.id}`
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["article", "h1", "h2"]
              }
            })}
          </script>
        </Helmet>
      )}
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-medblue transition-colors">בית</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link to="/blog" className="hover:text-medblue transition-colors">בלוג</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-800">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Post Header */}
            <div className="mb-8 text-right">
              <h1 className="text-3xl md:text-4xl font-bold text-medblue-dark mb-4">{post.title}</h1>
              {/* Grouped metadata */}
              <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-gray-600 mb-4"> {/* Added mb-4 */}
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <span className="text-gray-400">|</span> {/* Separator */}
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <span className="text-gray-400">|</span> {/* Separator */}
                <button className="flex items-center gap-1 hover:text-medblue transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>שיתוף</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Post Content */}
            {/* Removed prose class, applying styles directly or via parent div */}
            <article className="text-right text-gray-700"> 
              {post.content}
            </article>

            {/* Call to Action */}
            <div className="mt-12 bg-medblue-dark text-white p-8 rounded-lg shadow-md text-right">
              <h2 className="text-2xl font-bold mb-4">
                {post.id === 'carpal-tunnel-syndrome' ? 'סובלים מתסמיני תעלה קרפלית?' : 
                 post.id === 'guillain-barre-syndrome' ? 'חוששים מתסמיני תסמונת גיאן-בארה?' : 
                 'זקוקים לאבחון מקצועי?'}
              </h2>
              <p className="mb-6">
                {post.id === 'carpal-tunnel-syndrome' ? 
                  'צוות המומחים שלנו יכול לעזור לכם באבחון מדויק באמצעות בדיקת EMG ובהתאמת תכנית טיפול אישית.' : 
                 post.id === 'guillain-barre-syndrome' ? 
                  'צוות המומחים שלנו מתמחה באבחון וטיפול בתסמונת גיאן-בארה באמצעות בדיקות EMG מתקדמות ותוכניות טיפול מותאמות אישית.' : 
                  'צוות המומחים שלנו יכול לעזור לכם באבחון מדויק באמצעות בדיקת EMG ובהתאמת תכנית טיפול אישית.'}
              </p>
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
          </div>
        </div>
      </main>

      {/* Use the new Footer component */}
      <Footer />
    </div>
  );
};

export default BlogPost;
