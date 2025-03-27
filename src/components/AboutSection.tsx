
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Award, Shield, Star, Diamond, HeartHandshake, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Premium corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-medgold-light to-transparent opacity-30"></div>
      
      {/* Left side diamond pattern (subtle background) */}
      <div className="absolute left-0 top-0 bottom-0 w-16 opacity-5">
        <div className="h-full bg-medblue pattern-diamonds"></div>
      </div>

      <div className="relative">
        <h2 className="section-heading text-right mb-8">
          <span className="bg-gradient-to-r from-medblue to-medblue-dark bg-clip-text text-transparent font-bold">MEDASSIST</span>
          <span className="text-medblue-dark"> אודות</span>
        </h2>

        <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100">
          <div className="space-y-4 text-gray-700 text-right">
            <p className="leading-relaxed">
              <span className="font-bold text-medblue-dark text-lg">Medassist</span>{" "}
              היא חברת הרפואה הפרטית המובילה בישראל, אשר מתמחה במתן שירותי רפואה דחופים ובדיקות רפואיות .
            </p>
            
            {/* Features with icons */}
            <div className="grid grid-cols-2 gap-4 my-6">
              {[
                { icon: <Award size={20} />, text: "צוות רפואי מהשורה הראשונה" },
                { icon: <Shield size={20} />, text: "בטיחות ואמינות מירבית" },
                { icon: <Diamond size={20} />, text: "טכנולוגיה מתקדמת" },
                { icon: <HeartHandshake size={20} />, text: "ליווי אישי מלא" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-end gap-2 text-medblue-dark">
                  <span className="text-sm font-medium">{item.text}</span>
                  <div className="p-1.5 rounded-full bg-medblue/10 text-medblue-dark">{item.icon}</div>
                </div>
              ))}
            </div>

            <p className="leading-relaxed font-medium">
              הרופאים הטובים ביותר בתחומם, טכנולוגיה חדשה ומתקדמת, שירות מקצועי וליווי מלא.
            </p>
            
            <p className="leading-relaxed">
              לכן, אם אתם זקוקים לבדיקה דחופה, פנו אלינו בהקדם, כדי שנוכל לסייע בגילוי מוקדם ולהביא לשיפור משמעותי באיכות חייכם.
            </p>

            {/* Premium accreditation section */}
            <div className="mt-6 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center justify-end gap-2 mb-2">
                <h4 className="font-semibold text-medblue-dark">הסמכות ואקרדיטציה</h4>
                <Trophy size={18} className="text-medgold" />
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                {["ISO 9001", "JCI", "תו תקן"].map((cert, i) => (
                  <span key={i} className="px-2 py-0.5 bg-medblue/5 text-xs font-medium text-medblue-dark rounded border border-medblue/10">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust indicators with improved design */}
            <Card className="mt-6 bg-gradient-to-br from-white via-white to-gray-50 border border-gray-100 shadow-md overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-medgold text-medgold" />
                      ))}
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-medblue-dark text-xl">4.9</span>
                      <span className="text-sm text-gray-500 mx-1">מתוך 5</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-medblue-dark font-medium mb-1">מספר מטופלים</div>
                    <div className="flex items-center gap-1">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i} 
                            className="h-2 w-8 rounded-full" 
                            style={{ 
                              background: i === 0 
                                ? 'linear-gradient(90deg, #0078B1, #00B4E6)' 
                                : i === 1 
                                  ? 'linear-gradient(90deg, #00B4E6, #D4B776)' 
                                  : 'linear-gradient(90deg, #D4B776, #EBD8A9)' 
                            }}
                          />
                        ))}
                      </div>
                      <div className="text-lg font-bold text-medblue-dark">450+</div>
                    </div>
                    <span className="text-xs text-gray-500">מטופלים בחודש</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced CTA button */}
          <div className="mt-8">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white flex items-center gap-2 px-7 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
              <span className="font-medium">צור קשר עכשיו</span>
              <Phone size={16} />
            </Button>
          </div>

          {/* Image with improved presentation */}
            
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
