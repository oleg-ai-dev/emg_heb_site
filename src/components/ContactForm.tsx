
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { LockIcon, Clock, Shield, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "פנייתך התקבלה בהצלחה",
        description: "נציג יחזור אליך בהקדם, בדרך כלל תוך 30 דקות",
      });
      setName('');
      setPhone('');
      setEmail('');
      setDetails('');
    }, 1000);
  };

  return (
    <div className="rounded-lg p-6 bg-white shadow-lg w-full max-w-md mx-auto opacity-0 animate-fadeIn animate-delay-200">
      <div className="bg-medblue-dark text-white text-center py-3 px-4 rounded-t-lg -mt-6 -mx-6 mb-6">
        <h3 className="text-xl font-bold">
          השאירו פרטים וקבלו שיחה תוך 30 דקות
        </h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            dir="rtl"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="שם מלא"
            className="form-input"
            required
          />
        </div>
        <div className="relative">
          <Input
            dir="rtl"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="טלפון"
            className="form-input"
            required
          />
        </div>
        <div className="relative">
          <Input
            dir="rtl"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="דוא״ל"
            className="form-input"
          />
        </div>
        <div className="relative">
          <Textarea
            dir="rtl"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="פרטי בדיקה"
            className="form-input resize-none h-24"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full pulseAnimation bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md transition-all duration-300 text-lg font-semibold shadow-lg"
        >
          {isLoading ? "שולח..." : "קבל שיחה מיידית"}
        </Button>
        
        <div className="text-center text-gray-500 text-sm mt-2">
          לחיצה על הכפתור מהווה הסכמה <a href="#" className="text-medblue">לתנאי השימוש</a>
        </div>
      </form>
      
      <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-right">
        <div className="flex items-center gap-2 text-gray-600">
          <LockIcon size={14} className="text-medblue" />
          <span>מאובטח 100%</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Shield size={14} className="text-medblue" />
          <span>פרטיות מלאה</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={14} className="text-medblue" />
          <span>מענה מהיר</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <CheckCircle size={14} className="text-medblue" />
          <span>ללא התחייבות</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
