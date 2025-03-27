
import React from 'react';

const EmgBenefitsSection = () => {
  return (
    <section className="py-16 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/images/c0fa94d4-b48d-4e2c-adf3-2e7adc130901.png" 
              alt="EMG Testing" 
              className="rounded-lg shadow-lg w-full h-auto object-cover opacity-0 animate-fadeIn"
              style={{ height: '600px', objectPosition: 'center' }}
            />
          </div>
          <div className="order-1 md:order-2 opacity-0 animate-fadeIn animate-delay-200">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 h-full">
              <h2 className="section-heading text-right text-medblue-dark mb-8">היתרונות של בדיקת EMG</h2>
              <div className="space-y-6 text-right">
                <p className="text-gray-600">
                  <span className="font-bold text-medblue-dark">השלב הראשון והקריטי בטיפול</span> במגוון מחלות הפוגעות במערכת הפיזימוטורית הוא אבחנה הבדלתית בין מחלת עצבים שפוגעת בתפקוד השרירים או מחלת שרירים ראשונית.
                </p>
                <p className="text-gray-600">
                  המטופלים יכולים להיות זהים, אך ללא הבנת שורש הבעיה לא ניתן להתחיל בטיפול ראוי שירפא את המחלה ולא רק יקל את הסימפטומים.
                </p>
                <p className="text-gray-600">
                  ישנה שורה ארוכה של מחלות כמו הפגיעה בעצבים היא מכשלה למחלת העצבים שדורשות התערבות מהירה וטיפול בתהליכים הייעודיים, כמו למשל פגיעה כתוצאה מפריצת דיסק בעמוד השדרה. 
                </p>
                <p className="text-gray-600">
                  זיהוי מוקדם הוא מרכיב קריטי בתהליך האבחון שיעזור לרופא המטפל להבדיל בין המצבים הרפואיים שונים ומחלות שרירים, עצבים או השלד.
                </p>
                <p className="text-gray-600">
                  זיהוי מוקדם ואבחון מהימן וטיפול רפואי מהיר במקרים רבים עושה את ההבדל בין חיים בריאים ופעילים לבין כאבים כרוניים.
                </p>
                <p className="text-gray-600 font-bold text-medblue">
                  אל תהססו וזמנו תור, אבחון מוקדם יכול להציל חיים!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmgBenefitsSection;
