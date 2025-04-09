import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming Input is used

const BlogShortForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Use the same webhook URL as the main form
  const webhookUrl = 'https://hook.eu1.make.com/swaxpwhct47j7fh37ix2pqhmtkh69r5e'; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name: name,
      phone: phone,
      // Add a source field to distinguish from the main form
      source: "emg", // Updated source field to "emg"
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
          title: "פנייתך התקבלה",
          description: "נציג יחזור אליך בהקדם.",
          variant: "default", // Use success variant if available/defined
        });
        setName('');
        setPhone('');
      } else {
        console.error('Blog short form webhook submission failed:', response.status, response.statusText);
        toast({
          title: "שגיאה בשליחת הפנייה",
          description: "אירעה שגיאה. אנא נסה שנית או צור קשר טלפוני.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting blog short form:', error);
      toast({
        title: "שגיאת רשת",
        description: "לא ניתן היה לשלוח את הפנייה. אנא בדוק את חיבור האינטרנט ונסה שנית.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-12 bg-gray-100 p-6 rounded-lg shadow-md text-right border border-gray-200">
      <h3 className="text-xl font-semibold text-medblue-dark mb-4">רוצים שנקבע לכם תור מהיר לבדיקה?</h3>
      <p className="text-gray-600 mb-4">השאירו שם וטלפון ונחזור אליכם בהקדם:</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input 
            type="text" 
            placeholder="שם מלא" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medblue focus:border-transparent" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div>
          <Input 
            type="tel" 
            placeholder="טלפון" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medblue focus:border-transparent" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
          />
        </div>
        <div className="text-right">
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition-all duration-300 shadow-md disabled:opacity-70"
          >
            {isLoading ? "שולח..." : "שליחה"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogShortForm;
