import React, { useEffect, useState } from 'react';
import { Phone, ChevronDown, Award, CheckCircle, ThumbsUp, ChevronUp, Clock, Book, Home, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import AccordionSection from '@/components/AccordionSection';
import TestimonialSection from '@/components/TestimonialSection';
import EmgBenefitsSection from '@/components/EmgBenefitsSection';
import AboutSection from '@/components/AboutSection';
import { useToast } from "@/components/ui/use-toast"; // Import useToast
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { toast } = useToast(); // Initialize toast
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // State for the second contact form
  const [secondFormName, setSecondFormName] = useState('');
  const [secondFormPhone, setSecondFormPhone] = useState('');
  const [secondFormEmail, setSecondFormEmail] = useState('');
  const [secondFormDetails, setSecondFormDetails] = useState('');
  const [isSecondFormLoading, setIsSecondFormLoading] = useState(false);
  const webhookUrl = 'https://hook.eu1.make.com/swaxpwhct47j7fh37ix2pqhmtkh69r5e'; // Same webhook

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        if (window.scrollY > 600) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      } else {
        setIsScrolled(false);
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.removeAttribute('dir');
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submission handler for the second form (copied and adapted from ContactForm)
  const handleSecondFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default refresh
    setIsSecondFormLoading(true);

    const formData = {
      name: secondFormName,
      phone: secondFormPhone,
      email: secondFormEmail,
      details: secondFormDetails,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "פנייתך התקבלה בהצלחה",
          description: "נציג יחזור אליך בהקדם.",
          variant: "default",
        });
        // Reset second form fields
        setSecondFormName('');
        setSecondFormPhone('');
        setSecondFormEmail('');
        setSecondFormDetails('');
      } else {
        console.error('Second form webhook submission failed:', response.status, response.statusText);
        toast({
          title: "שגיאה בשליחת הפנייה",
          description: "אירעה שגיאה. אנא נסה שנית או צור קשר טלפוני.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting second form:', error);
      toast({
        title: "שגיאת רשת",
        description: "לא ניתן היה לשלוח את הפנייה. אנא בדוק את חיבור האינטרנט ונסה שנית.",
        variant: "destructive",
      });
    } finally {
      setIsSecondFormLoading(false);
    }
  };


  return (
    // Removed redundant <header> and mobile menu logic from this page component
    <div className="min-h-screen bg-gray-50"> 
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8"> {/* Added padding-top since header is removed */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <div className="max-w-lg opacity-0 animate-fadeIn">
                <div className="text-white inline-block px-3 py-1 rounded-full bg-medblue-dark text-sm font-medium mb-4">
                  בדיקות EMG - מחירים מיוחדים לחודש זה בלבד
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-medblue-dark leading-tight mb-4 text-right">
                  פתרונות מתקדמים לאבחון וטיפול
                </h1>
                <p className="text-lg text-gray-600 mb-6 text-right">
                  מרכז מומחים לבדיקות EMG מתקדמות עם צוות רפואי מנוסה ומסור, המעניק שירות מקצועי ואישי לכל מטופל.
                </p>
                
                {/* Trust badges */}
                <div className="flex flex-wrap justify-end gap-4 mb-6">
                  <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                    <span className="text-sm text-gray-600">תור מהיר</span>
                    <Clock size={14} className="text-medblue" />
                  </div>
                  <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                    <span className="text-sm text-gray-600">+450 בדיקות בחודש</span>
                    <CheckCircle size={14} className="text-medblue" />
                  </div>
                </div>
                
                <div className="text-right">
                  <a 
                    href="tel:03-330-2006" // Updated number
                    className="pulseAnimation bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg inline-flex items-center gap-2"
                  >
                    <span>03-330-2006</span> {/* Updated number */}
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="w-full max-w-md relative opacity-0 animate-fadeIn animate-delay-100">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-orange-500">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="EMG Treatment" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">היתרונות שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "צוות מומחים מנוסה",
                description: "צוות הרופאים והמטפלים שלנו בעל ניסיון רב בביצוע בדיקות EMG ופירוש התוצאות.",
                delay: "animate-delay-100",
                icon: <Award className="h-10 w-10 text-white" />
              },
              {
                title: "ציוד מתקדם",
                description: "אנו משתמשים בטכנולוגיה המתקדמת ביותר לביצוע בדיקות EMG, המבטיחה תוצאות מדויקות.",
                delay: "animate-delay-200",
                icon: <CheckCircle className="h-10 w-10 text-white" />
              },
              {
                title: "טיפול אישי",
                description: "כל מטופל מקבל התייחסות אישית.",
                delay: "animate-delay-300",
                icon: <ThumbsUp className="h-10 w-10 text-white" />
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md text-right opacity-0 animate-fadeIn ${feature.delay} border-2 border-medblue`}
              >
                <div className="bg-medblue p-3 rounded-full w-18 h-18 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-medblue-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMG Benefits Section */}
      <EmgBenefitsSection />

      {/* About and Testimonials Section Side by Side */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            {/* About Section */}
            <div className="flex-1">
              <AboutSection />
            </div>
            
            {/* Testimonials Section */}
            <div className="flex-1">
              <h2 className="section-heading text-center mb-8">המטופלים ממליצים</h2>
              <TestimonialSection />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with parallax effect */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">תהליך הטיפול</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-right opacity-0 animate-fadeIn">
              <div className="space-y-8">
                {[
                  { 
                    number: "01",
                    title: "יצירת קשר וקביעת תור",
                    description: "השאירו פרטים או התקשרו אלינו כדי לקבוע תור לייעוץ ראשוני או לבדיקת EMG."
                  },
                  { 
                    number: "02",
                    title: "אבחון ראשוני",
                    description: "במעמד הבדיקה, הרופא יבצע סקירה של המצב הרפואי של המטופל, יאמת את הצורך בביצוע סוג ספציפי של בדיקת EMG, ייתן הסבר על הבדיקה ועל התוצאות הצפויות"
                  },
                  { 
                    number: "03",
                    title: "ביצוע בדיקת EMG",
                    description: "הבדיקה מתבצעת על ידי מומחה תוך הקפדה על נוחות המטופל לאורך כל התהליך."
                  },
                  { 
                    number: "04",
                    title: "פירוש התוצאות וטיפול",
                    description: "לאחר ביצוע בדיקה, הרופא (נוירולוג) יכין את פענוח תוצאות הבדיקה, יסביר על הממצאים וימליץ על המשך בירור או טיפול לפי הצורך"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-medgold opacity-70">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-medblue-dark mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] opacity-0 animate-fadeIn animate-delay-200">
              <div className="absolute inset-0 bg-medblue rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Medical Procedure" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medblue-dark/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-semibold">טיפול מקצועי</p>
                  <p>בסביבה נעימה ומרגיעה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">שאלות נפוצות</h2>
          <AccordionSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-medblue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">צרו קשר עוד היום</h2>
            <p className="text-medblue-light max-w-2xl mx-auto">
              השאירו פרטים ונחזור אליכם תוך 30 דקות, או התקשרו ישירות למספר שלנו לקביעת תור
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-8 opacity-0 animate-fadeIn relative border-t-4 border-orange-500">
            {/* Limited time offer banner */}
            <div className="absolute -top-5 right-0 left-0 mx-auto w-max bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
              מבצע מיוחד - 20% הנחה לנרשמים עכשיו
            </div>
            
            {/* Attach the new submit handler */}
            <form className="space-y-6" onSubmit={handleSecondFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  {/* Connect input to state */}
                  <input 
                    type="text" 
                    placeholder="שם מלא" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medblue focus:border-transparent" 
                    value={secondFormName}
                    onChange={(e) => setSecondFormName(e.target.value)}
                    required 
                  />
                </div>
                <div>
                   {/* Connect input to state */}
                  <input 
                    type="tel" 
                    placeholder="טלפון" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medblue focus:border-transparent" 
                    value={secondFormPhone}
                    onChange={(e) => setSecondFormPhone(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <div>
                 {/* Connect input to state */}
                <input 
                  type="email" 
                  placeholder="דוא״ל" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medblue focus:border-transparent" 
                  value={secondFormEmail}
                  onChange={(e) => setSecondFormEmail(e.target.value)}
                />
              </div>
              <div>
                 {/* Connect input to state */}
                <Textarea 
                  placeholder="פרטי בדיקה" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medblue focus:border-transparent resize-none" 
                  value={secondFormDetails}
                  onChange={(e) => setSecondFormDetails(e.target.value)}
                />
              </div>
              <div className="text-right">
                 {/* Removed onClick, added disabled state and conditional text */}
                <button 
                  type="submit" 
                  disabled={isSecondFormLoading}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 pulseAnimation shadow-lg disabled:opacity-70"
                >
                  {isSecondFormLoading ? "שולח..." : "שליחה"}
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <div className="text-gray-500 mb-2">או התקשרו ישירות</div>
              <a href="tel:03-330-2006" className="text-xl font-bold text-medblue hover:text-medblue-dark transition-colors"> {/* Updated number */}
                03-330-2006 {/* Updated number */}
              </a>
            </div>
            
            {/* Social proof */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-center text-sm text-gray-500 mb-3">לקוחות מרוצים משתפים:</div>
              <div className="flex justify-center items-center gap-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="מטופל" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="מטופלת" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/68.jpg" 
                  alt="מטופל" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
                <span className="text-xs text-gray-500">+134 נוספים</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Removed Footer component instance, handled by MainLayout */}
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-medblue-dark text-white p-3 rounded-full shadow-lg z-50 hover:bg-medblue transition-colors"
        >
          <ChevronUp size={24} />
        </button>
      )}
      
      {/* Sticky CTA on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3 px-4 z-50">
        <div className="flex justify-center items-center">
          <a 
            href="tel:03-330-2006" // Updated number
            className="pulseAnimation bg-orange-500 text-white px-6 py-2 rounded-md font-medium w-full flex items-center justify-center gap-2"
          >
            <span>03-330-2006</span> {/* Updated number */}
            <Phone size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
