import React from 'react';
import { Link } from 'react-router-dom';
import BlogCtaBanner from '@/components/BlogCtaBanner';
import BlogShortForm from '@/components/BlogShortForm';

const EmgDiabeticNeuropathyContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מהי נוירופתיה סוכרתית?</h2>
    <p className="leading-relaxed">
      נוירופתיה סוכרתית היא פגיעה בעצבים ההיקפיים הנגרמת כתוצאה מסוכרת ממושכת או לא מאוזנת. מדובר בסיבוך נפוץ שעלול לגרום לכאבים, נימול, חולשה, ירידה בתחושה ואף פצעים כרוניים, בעיקר בכפות הרגליים. אבחון מוקדם מאפשר טיפול יעיל ומניעת סיבוכים חמורים.
    </p>

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">מתי מומלץ לבצע בדיקת EMG?</h2>
    <ul className="list-disc pr-8 space-y-3 mt-4">
      <li>נימול, עקצוצים או כאבים בכפות הרגליים/הידיים</li>
      <li>ירידה בתחושה או חולשה בשרירים</li>
      <li>קושי בהליכה או חוסר יציבות</li>
      <li>פצעים שאינם מחלימים</li>
      <li>תסמינים נוירולוגיים לא מוסברים</li>
    </ul>

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">כיצד מתבצעת בדיקת EMG לנוירופתיה סוכרתית?</h2>
    <ol className="list-decimal pr-8 space-y-3 mt-4">
      <li>
        <strong>בדיקת הולכה עצבית (NCS):</strong> בודקת את מהירות ההולכה והתגובה של העצבים. מאפשרת לזהות פגיעה בעצבים סנסוריים ומוטוריים.
      </li>
      <li>
        <strong>בדיקת מחט (EMG):</strong> בודקת את הפעילות החשמלית בשרירים עצמם, ומסייעת להבחין בין פגיעה עצבית לשרירית.
      </li>
    </ol>
    <p className="leading-relaxed">
      הבדיקה מתבצעת על ידי נוירולוג מומחה, אורכת כ-30-60 דקות, ואינה דורשת הכנה מיוחדת. ייתכן אי-נוחות קלה, אך לרוב אינה כואבת.
    </p>

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">תסמינים אופייניים לנוירופתיה סוכרתית</h2>
    <ul className="list-disc pr-8 space-y-3 mt-4">
      <li>נימול, שריפה, עקצוצים או כאבים בכפות הרגליים/הידיים</li>
      <li>ירידה בתחושה (חום, קור, מגע)</li>
      <li>חולשת שרירים, קושי בהרמת כף הרגל ("foot drop")</li>
      <li>פצעים כרוניים, זיהומים חוזרים</li>
      <li>חוסר יציבות, נפילות חוזרות</li>
    </ul>

    <BlogCtaBanner />

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">חשיבות האבחון המוקדם</h2>
    <ul className="list-disc pr-8 space-y-3 mt-4">
      <li>התאמת טיפול תרופתי/פיזיותרפי</li>
      <li>מניעת החמרה וסיבוכים (פצעים, קטיעות)</li>
      <li>שיפור איכות החיים</li>
      <li>מעקב אחר התקדמות המחלה</li>
    </ul>

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">תוצאות בדיקת EMG – מה המשמעות?</h2>
    <ul className="list-disc pr-8 space-y-3 mt-4">
      <li><strong>פגיעה סנסורית:</strong> ירידה במהירות ההולכה בעצבים התחושתיים</li>
      <li><strong>פגיעה מוטורית:</strong> ירידה בתפקוד העצבים המוטוריים, חולשת שרירים</li>
      <li><strong>פגיעה מעורבת:</strong> שילוב של פגיעה סנסורית ומוטורית, אופיינית לנוירופתיה סוכרתית מתקדמת</li>
    </ul>

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">אפשרויות טיפול בנוירופתיה סוכרתית</h2>
    <ul className="list-disc pr-8 space-y-3 mt-4">
      <li>איזון קפדני של רמות הסוכר בדם</li>
      <li>תרופות להקלה על כאבים נוירופתיים (ליריקה, דולוקסיטין, גאבפנטין)</li>
      <li>פיזיותרפיה ופעילות גופנית מותאמת</li>
      <li>טיפול בפצעים כרוניים</li>
      <li>שימוש בנעליים/אביזרים אורטופדיים</li>
      <li>מעקב נוירולוגי סדיר</li>
    </ul>

    <BlogShortForm />

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">שאלות נפוצות</h2>
    <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם בדיקת EMG כואבת?</h3>
    <p className="leading-relaxed">
      הבדיקה אינה כואבת, אך ייתכן אי-נוחות קלה בעת החדרת המחט לשריר.
    </p>
    <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם ניתן למנוע נוירופתיה סוכרתית?</h3>
    <p className="leading-relaxed">
      איזון סוכר מוקפד, פעילות גופנית, תזונה בריאה ומעקב רפואי סדיר מפחיתים משמעותית את הסיכון.
    </p>
    <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם נוירופתיה סוכרתית הפיכה?</h3>
    <p className="leading-relaxed">
      בשלבים מוקדמים ניתן לעיתים לשפר את התסמינים, אך פגיעה עצבית מתקדמת לרוב אינה הפיכה – לכן חשוב לאבחן ולטפל מוקדם.
    </p>
    <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם יש טיפול יעיל לכאבים נוירופתיים?</h3>
    <p className="leading-relaxed">
      כן, קיימות תרופות ייעודיות, פיזיותרפיה וטיפולים משלימים. יש להתייעץ עם נוירולוג.
    </p>
    <h3 className="text-xl font-semibold text-medblue-dark mt-4 mb-2">האם ילדים עם סוכרת חשופים לנוירופתיה?</h3>
    <p className="leading-relaxed">
      כן, אך הסיכון עולה עם משך המחלה ורמות סוכר לא מאוזנות. מומלץ מעקב סדיר.
    </p>

    <h2 className="text-2xl font-semibold text-medblue-dark mt-6 mb-3">קישורים פנימיים מומלצים</h2>
    <ul className="list-disc pr-8 space-y-3 mt-4">
      <li>
        <Link to="/blog/what-is-emg" className="text-medblue hover:underline">
          מהי בדיקת EMG? מדריך מלא
        </Link>
      </li>
      <li>
        <Link to="/blog/פענוח-תוצאות-emg" className="text-medblue hover:underline">
          פענוח תוצאות EMG
        </Link>
      </li>
      <li>
        <Link to="/blog/muscular-dystrophy" className="text-medblue hover:underline">
          ניוון שרירים
        </Link>
      </li>
      <li>
        <Link to="/blog/תסמונות-לחץ-עצבים" className="text-medblue hover:underline">
          תסמונות לחץ על עצבים פריפריים
        </Link>
      </li>
    </ul>

    <p className="text-xs text-gray-500 mt-8">
      *התוכן נכתב בלשון זכר אך פונה לכל המגדרים. המידע אינו מהווה תחליף לייעוץ רפואי.*
    </p>
  </div>
);

export default EmgDiabeticNeuropathyContent;
