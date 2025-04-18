
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const AccordionSection = () => {
  const faqItems: FAQItem[] = [
    {
      question: "כיצד מתבצעת בדיקת EMG?",
      answer: "בדיקת EMG (אלקטרומיוגרפיה) היא בדיקה שמודדת את הפעילות החשמלית של השרירים ומאפשרת לרופא לבדוק את התפקוד העצבי והשרירי. הבדיקה עוזרת לאבחן מגוון רחב של בעיות עצביות ושריריות."
    },
    {
      question: "כמה זמן נמשכת הבדיקה?",
      answer: "משך הבדיקה הממוצע הוא בין 30 ל-60 דקות, תלוי בסוג הבדיקה ובמספר האזורים הנבדקים. המטופל יקבל הנחיות מדויקות לפני הבדיקה."
    },
    {
      question: "האם בדיקה כרוכה בכאב?",
      answer: "הבדיקה עשויה לגרום לאי נוחות קלה אך בדרך כלל אינה כרוכה בכאב משמעותי. צוות המרפאה עושה כל מאמץ להבטיח שהחוויה תהיה נוחה ככל האפשר."
    },
    {
      question: "מה ההכנות הנדרשות לפני הבדיקה?",
      answer: "יש להימנע ממריחת קרמים או שמנים על העור ביום הבדיקה. מומלץ ללבוש בגדים נוחים שמאפשרים גישה קלה לאזור הנבדק. יתכן שתתבקשו להפסיק נטילת תרופות מסוימות - הרופא ייתן הנחיות מדויקות."
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto opacity-0 animate-fadeIn animate-delay-300">
      <Accordion type="single" collapsible dir="rtl" className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-medblue-light/30">
            <AccordionTrigger className="text-right font-medium text-medblue-dark hover:text-medblue transition-colors py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-right text-gray-600 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSection;
