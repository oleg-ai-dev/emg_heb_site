import React from "react";
import BlogCtaBanner from "../../components/BlogCtaBanner";
import BlogShortForm from "../../components/BlogShortForm";
import { Link } from "react-router-dom";

const imageUrl = "/articles/images/stiff-person-syndrome.jpg";
const imageAlt = "בדיקת EMG לאבחון תסמונת האדם הנוקשה (Stiff Person Syndrome) - הדגמה רפואית";

export default function StiffPersonSyndromeArticle() {
  return (
    <article dir="rtl" lang="he" className="prose prose-lg prose-sky max-w-none mx-auto">
      <h1 className="!text-4xl !font-extrabold text-medblue-dark mb-6">
        בדיקת EMG לתסמונת האדם הנוקשה (Stiff Person Syndrome)
      </h1>
      <p className="text-lg leading-relaxed mb-6">
        <strong>תסמונת האדם הנוקשה (SPS)</strong> היא מחלה נוירולוגית נדירה אך משמעותית, המאופיינת בנוקשות שרירים, ספאזמים כואבים, והחמרה הדרגתית של התסמינים.
        <br />
        <span className="font-semibold text-medblue">אבחון מוקדם ומדויק הוא קריטי</span>, ובדיקת EMG (אלקטרומיוגרפיה) מהווה כלי מרכזי בזיהוי התסמונת והבדלתה ממחלות אחרות.
      </p>
      <blockquote className="border-r-4 border-medblue-dark bg-medblue/10 p-4 rounded-lg mb-8">
        במאמר זה תמצאו הסבר מקיף על התסמונת, תפקידה של בדיקת EMG, אפשרויות טיפול, ושאלות נפוצות.
      </blockquote>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">מהי תסמונת האדם הנוקשה (SPS)?</h2>
      <p>
        <span className="font-bold">תסמונת האדם הנוקשה</span> היא הפרעה אוטואימונית נדירה של מערכת העצבים המרכזית, המתבטאת בנוקשות שרירים מתמשכת, ספאזמים (עוויתות) כואבים, ולעיתים גם חרדה או רגישות יתר לרעש, מגע או מתח נפשי.
        <br />
        התסמונת פוגעת בעיקר בשרירי הגב, הגפיים והבטן, ועלולה להוביל לקשיי תנועה, נפילות, ואף נכות.
      </p>
      <blockquote className="bg-orange-100 border-r-4 border-orange-400 p-4 rounded-lg my-6">
        <span className="font-bold text-orange-700">שכיחות:</span> SPS מאובחנת בעיקר אצל מבוגרים, אך יכולה להופיע גם בילדים. שכיחותה מוערכת בפחות מ-1 ל-1,000,000, אך ייתכן שיש חולים שאינם מאובחנים בשל דמיון התסמינים למחלות אחרות.
      </blockquote>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">סימפטומים עיקריים ומתי לפנות לאבחון</h2>
      <ul className="mb-6">
        <li>נוקשות שרירים מתמשכת, בעיקר בגב, ברגליים ובבטן</li>
        <li>ספאזמים כואבים, לעיתים בתגובה לרעש, מגע או מתח</li>
        <li>קשיי הליכה, חוסר יציבות ונפילות</li>
        <li>החמרה הדרגתית של התסמינים</li>
        <li>לעיתים חרדה, דיכאון או רגישות יתר</li>
      </ul>
      <div className="bg-medblue/10 border-r-4 border-medblue p-4 rounded-lg mb-8">
        <span className="font-bold text-medblue-dark">מומלץ לפנות לנוירולוג מומחה</span> אם אתם חווים תסמינים אלו, במיוחד בשילוב עם ספאזמים חוזרים או החמרה בתפקוד.
      </div>

      <BlogCtaBanner />

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">EMG ככלי מרכזי לאבחון SPS</h2>
      <p>
        <strong>בדיקת EMG</strong> בודקת את הפעילות החשמלית של השרירים בתגובה לגירוי עצבי. בבדיקה זו מוחדרות מחטים דקיקות לשרירים שונים, ונמדדת הפעילות החשמלית במנוחה ובמאמץ.
        <br />
        בתסמונת האדם הנוקשה, EMG מזהה <span className="font-semibold text-medblue">פעילות שרירית מתמשכת (continuous muscle activity)</span> גם במנוחה, ולעיתים <span className="font-semibold text-medblue">קו-קונטרקציה (co-contraction)</span> של שרירים מנוגדים.
      </p>
      <ul className="my-4">
        <li>פעילות חשמלית מתמשכת בשרירים גם ללא תנועה</li>
        <li>קו-קונטרקציה של שרירים אגוניסטים ואנטגוניסטים</li>
        <li>תגובה מוגברת לגירויים חיצוניים</li>
      </ul>
      <blockquote className="bg-sky-50 border-r-4 border-sky-400 p-4 rounded-lg my-6">
        <span className="font-bold text-sky-700">טיפ:</span> EMG מסייע להבדיל בין SPS למחלות שריר אחרות (מיופתיות, נוירופתיות) ומחזק את האבחנה יחד עם בדיקות דם (<code>anti-GAD antibodies</code>) והערכה קלינית.
      </blockquote>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">הבדלים בין SPS למחלות שריר/עצבים אחרות</h2>
      <p>
        SPS עלולה להידמות למחלות כמו <Link to="/blog/inflammatory-myopathies" className="text-medblue underline">מיופתיות דלקתיות</Link>, <Link to="/blog/muscular-dystrophy" className="text-medblue underline">ניוון שרירים</Link>, נוירופתיות, פיברומיאלגיה ועוד.
        <br />
        ההבדל המרכזי הוא דפוס הנוקשות והספאזמים, התגובה לגירויים, וממצאי ה-EMG הייחודיים. בעוד שבמחלות שריר אחרות יש חולשה, דלדול או פגיעה בתפקוד, ב-SPS הנוקשות והספאזמים הם הדומיננטיים.
      </p>
      <div className="mt-2 mb-6">
        <Link to="/blog/what-is-emg" className="text-medblue underline">מה זה EMG?</Link>
      </div>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">טיפול וניהול SPS</h2>
      <p>
        הטיפול בתסמונת האדם הנוקשה משלב תרופות המדכאות את מערכת החיסון (כגון סטרואידים, IVIG, פלסמהפרזיס), תרופות להרפיית שרירים (בנזודיאזפינים, באקלופן), ופיזיותרפיה מותאמת. במקרים מסוימים נדרש טיפול פסיכולוגי או תמיכה רגשית.
      </p>
      <ul className="mb-6">
        <li>תרופות נוגדות עווית (בנזודיאזפינים, באקלופן)</li>
        <li>טיפולים אימונולוגיים (IVIG, סטרואידים, פלסמהפרזיס)</li>
        <li>פיזיותרפיה לשיפור תפקוד ותנועה</li>
        <li>מעקב נוירולוגי צמוד</li>
        <li>תמיכה רגשית ופסיכולוגית</li>
      </ul>

      <BlogShortForm />

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">שאלות נפוצות על SPS ו-EMG</h2>
      <ul className="mb-6">
        <li>
          <strong>האם בדיקת EMG כואבת?</strong> הבדיקה כרוכה באי נוחות קלה עקב החדרת מחטים, אך לרוב אינה כואבת במיוחד. ניתן לבקש הפסקות במידת הצורך.
        </li>
        <li>
          <strong>האם יש הכנה מיוחדת לבדיקה?</strong> מומלץ להימנע מקרמים/שמנים על העור, ולהודיע לרופא על תרופות קבועות.
        </li>
        <li>
          <strong>מה המשמעות של תוצאה חיובית?</strong> תוצאה אופיינית ל-SPS מחזקת את האבחנה, אך נדרשת הערכה קלינית ובדיקות נוספות.
        </li>
        <li>
          <strong>האם SPS ניתנת לריפוי?</strong> כיום אין ריפוי מלא, אך טיפול נכון משפר משמעותית את איכות החיים ומפחית תסמינים.
        </li>
      </ul>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">סיכום: חשיבות אבחון מדויק ומעקב רפואי</h2>
      <p>
        תסמונת האדם הנוקשה היא מחלה נדירה אך ניתנת לטיפול. אבחון מוקדם באמצעות EMG, בשילוב הערכה קלינית ובדיקות דם, מאפשר התחלת טיפול מהירה ושיפור משמעותי באיכות החיים. אם אתם חווים נוקשות שרירים, ספאזמים או קשיי תנועה – פנו לנוירולוג מומחה.
      </p>
      <hr className="my-8" />
      <p className="text-xs text-gray-500">
        המידע במאמר זה אינו מהווה תחליף לייעוץ רפואי אישי. בכל מקרה של תסמינים או חשש – יש לפנות לרופא מומחה.
      </p>
    </article>
  );
}
