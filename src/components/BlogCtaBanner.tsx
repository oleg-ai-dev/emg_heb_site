import React from 'react';
import { Phone } from 'lucide-react';

interface BlogCtaBannerProps {
  title?: string;
  description?: string;
}

const BlogCtaBanner: React.FC<BlogCtaBannerProps> = ({
  title = "זקוקים לאבחון מקצועי?",
  description = "צוות המומחים שלנו יכול לעזור לכם באבחון מדויק באמצעות בדיקת EMG ובהתאמת תכנית טיפול אישית."
}) => {
  return (
    <div className="my-12 bg-medblue-dark text-white p-8 rounded-lg shadow-md text-right">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
      <div className="flex justify-end">
        <a
          href="tel:03-330-2006"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md inline-flex items-center gap-2 shadow-md"
        >
          <span>התקשרו עכשיו: 03-330-2006</span>
          <Phone size={18} />
        </a>
      </div>
    </div>
  );
};

export default BlogCtaBanner;
