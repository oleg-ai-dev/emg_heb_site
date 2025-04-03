import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Clock, ChevronLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Import the new Footer component

// Blog post data with keywords for SEO
const blogPosts = [
  {
    id: 'guillain-barre-syndrome',
    title: 'תסמונת גיאן-בארה: כל מה שחשוב לדעת על אבחון, טיפול והחלמה',
    excerpt: 'תסמונת גיאן-בארה היא מחלה אוטואימונית של מערכת העצבים ההיקפית. למדו על הסימפטומים, האבחון באמצעות בדיקת EMG, ואפשרויות הטיפול והשיקום.',
    date: '18 במרץ, 2025',
    readTime: '12 דקות',
    image: '/articles/images/תסמונת גיאן-בארה.jpg',
    category: 'בדיקות EMG',
    keywords: [
      'תסמונת גיאן-בארה',
      'GBS אבחון',
      'שיתוק עולה',
      'מחלה אוטואימונית עצבים',
      'בדיקת EMG לתסמונת גיאן-בארה'
    ]
  },
  {
    id: 'carpal-tunnel-syndrome',
    title: 'תסמונת התעלה הקרפלית: המדריך המקיף לאבחון באמצעות בדיקת EMG',
    excerpt: 'תסמונת התעלה הקרפלית היא מצב נפוץ המשפיע על מיליוני אנשים. למדו על הסימפטומים, האבחון באמצעות בדיקת EMG, ואפשרויות הטיפול.',
    date: '18 במרץ, 2025',
    readTime: '10 דקות',
    image: '/articles/images/carpal-tunnel-syndrome.jpg',
    category: 'בדיקות EMG',
    keywords: [
      'תסמונת התעלה הקרפלית',
      'בדיקת EMG לכף יד',
      'כאבים בשורש כף היד',
      'נימול באצבעות',
      'טיפול בתסמונת התעלה הקרפלית'
    ]
  },
  {
    id: 'תסמונות-לחץ-עצבים',
    title: 'תסמונות לחץ על עצבים פריפריים: מדריך מקיף לאבחון וטיפול',
    excerpt: 'תסמונות לחץ על עצבים פריפריים מתרחשות כאשר עצב נלחץ או נדחס בנקודה מסוימת במסלולו. למדו על הסוגים השונים, האבחון באמצעות בדיקת EMG, ואפשרויות הטיפול.',
    date: '18 במרץ, 2025',
    readTime: '15 דקות',
    image: '/images/תסמונות-לחץ-עצבים.jpg',
    category: 'בדיקות EMG',
    keywords: [
      'תסמונות לחץ על עצבים',
      'אבחון לחץ על עצבים פריפריים',
      'בדיקת EMG לעצבים לחוצים',
      'תסמונת התעלה האולנרית',
      'לחץ על עצב פרונאלי'
    ]
  }
];

const Blog = () => {
  useEffect(() => {
    // Set RTL direction for Hebrew content
    document.documentElement.setAttribute('dir', 'rtl');
    
    return () => {
      document.documentElement.removeAttribute('dir');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Helmet>
        <title>בלוג MEDASSIST - מאמרים מקצועיים על בדיקות EMG ותסמונת התעלה הקרפלית</title>
        <meta name="description" content="בלוג MEDASSIST מציע מאמרים מקצועיים בנושא בדיקות EMG, תסמונת התעלה הקרפלית, וטיפולים מתקדמים. מידע מקצועי ועדכני מצוות המומחים שלנו." />
        <meta name="keywords" content="בדיקות EMG, תסמונת התעלה הקרפלית, אלקטרומיוגרפיה, כאבים בכף היד, נימול באצבעות, טיפול בתעלה קרפלית" />
        <meta property="og:title" content="בלוג MEDASSIST - מאמרים מקצועיים על בדיקות EMG ותסמונת התעלה הקרפלית" />
        <meta property="og:description" content="בלוג MEDASSIST מציע מאמרים מקצועיים בנושא בדיקות EMG, תסמונת התעלה הקרפלית, וטיפולים מתקדמים. מידע מקצועי ועדכני מצוות המומחים שלנו." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medassist.co.il/blog" />
        <meta property="og:image" content="https://medassist.co.il/og-image.png" />
        <link rel="canonical" href="https://medassist.co.il/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "בלוג MEDASSIST - מאמרים מקצועיים על בדיקות EMG ותסמונת התעלה הקרפלית",
            "description": "בלוג MEDASSIST מציע מאמרים מקצועיים בנושא בדיקות EMG, תסמונת התעלה הקרפלית, וטיפולים מתקדמים.",
            "publisher": {
              "@type": "Organization",
              "name": "MEDASSIST",
              "logo": {
                "@type": "ImageObject",
                "url": "https://medassist.co.il/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "image": post.image,
              "datePublished": "2025-03-18T08:00:00+02:00",
              "dateModified": "2025-03-18T08:00:00+02:00",
              "author": {
                "@type": "Organization",
                "name": "MEDASSIST"
              },
              "url": `https://medassist.co.il/blog/${post.id}`
            }))
          })}
        </script>
      </Helmet>
      {/* Blog Header - Adjusted padding and alignment */}
      <div className="bg-medblue-dark text-white py-12"> {/* Reduced padding */}
        <div className="container mx-auto px-4 text-right"> {/* Changed to text-right */}
          <h1 className="text-4xl font-bold mb-4">הבלוג שלנו</h1>
          <p className="text-xl text-medblue-light max-w-2xl ml-auto"> {/* Added ml-auto for right alignment */}
            מאמרים מקצועיים בנושא בדיקות EMG, תסמונת התעלה הקרפלית, וטיפולים מתקדמים
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/blog/${post.id}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                </Link>
                <div className="p-8"> {/* Increased padding */}
                  <div className="text-xs text-medblue font-semibold mb-2 text-right">{post.category}</div> {/* Ensure right alignment */}
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-medblue-dark mb-3 hover:text-medblue transition-colors text-right">{post.title}</h2> {/* Ensure right alignment */}
                  </Link>
                  <p className="text-gray-600 mb-4 text-right leading-relaxed">{post.excerpt}</p> {/* Added leading-relaxed */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-4"> {/* Added margin-top */}
                    {/* Grouped metadata */}
                    <div className="flex items-center gap-2"> 
                      <div className="flex items-center gap-1">
                        <span>{post.date}</span>
                        <Calendar className="h-4 w-4" />
                      </div>
                      <span className="text-gray-300">|</span>
                      <div className="flex items-center gap-1">
                        <span>{post.readTime}</span>
                        <Clock className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-right"> {/* Changed text-left to text-right and added margin-top */}
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-medblue hover:text-medblue-dark transition-colors inline-flex items-center gap-1 font-medium" /* Added font-medium */
                    >
                      <span>קרא עוד</span>
                      <ChevronLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-medblue-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">צריכים עזרה מקצועית?</h2>
            <p className="text-xl text-medblue-light mb-8">
              צוות המומחים שלנו זמין לענות על כל שאלה ולעזור לכם בתהליך האבחון והטיפול
            </p>
            <a 
              href="tel:03-301-5458"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md inline-flex items-center gap-2 shadow-md"
            >
              <span>התקשרו עכשיו: 03-301-5458</span>
              <Phone size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Use the new Footer component */}
      <Footer />
    </div>
  );
};

export default Blog;
