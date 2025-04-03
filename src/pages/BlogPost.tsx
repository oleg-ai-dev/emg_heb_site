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
