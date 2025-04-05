import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, Share2, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define blog post metadata structure (content removed)
interface BlogPostMetadata {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
  keywords: string[];
}

// Blog posts metadata (content removed, will be dynamically imported)
// NOTE: The actual content JSX is now expected to be in separate files
// located at `../articles/content/${id}.tsx`
const blogMetadata: Record<string, BlogPostMetadata> = {
  'guillain-barre-syndrome': {
    id: 'guillain-barre-syndrome',
    title: 'תסמונת גיאן-בארה: כל מה שחשוב לדעת על אבחון, טיפול והחלמה',
    date: '18 במרץ, 2025',
    readTime: '12 דקות',
    image: '/articles/images/תסמונת גיאן-בארה.jpg',
    description: 'מדריך מקיף על תסמונת גיאן-בארה, מחלה אוטואימונית של מערכת העצבים ההיקפית. למדו על אבחון באמצעות בדיקת EMG, טיפולים אפשריים ותהליך ההחלמה.',
    keywords: [
      'תסמונת גיאן-בארה', 'GBS אבחון', 'שיתוק עולה', 'מחלה אוטואימונית עצבים', 'בדיקת EMG לתסמונת גיאן-בארה', 'טיפול בתסמונת גיאן-בארה', 'סימפטומים של גיאן-בארה', 'החלפת פלסמה גיאן-בארה', 'אימונוגלובולינים ורידיים', 'שיקום לאחר גיאן-בארה', 'חולשת שרירים סימטרית', 'מוליכות עצבית בגיאן-בארה', 'תסמונת גיאן-בארה לאחר זיהום', 'אבחנה מבדלת תסמונת גיאן-בארה', 'בעיות נשימה בגיאן-בארה', 'זמן החלמה מגיאן-בארה', 'סיבוכים של תסמונת גיאן-בארה', 'ניטור תסמונת גיאן-בארה', 'תחזית החלמה מתסמונת גיאן-בארה', 'סוגים של תסמונת גיאן-בארה'
    ],
  },
  'carpal-tunnel-syndrome': {
    id: 'carpal-tunnel-syndrome',
    title: 'תסמונת התעלה הקרפלית: המדריך המקיף לאבחון באמצעות בדיקת EMG',
    date: '18 במרץ, 2025',
    readTime: '10 דקות',
    image: '/articles/images/carpal-tunnel-syndrome.jpg',
    description: 'מדריך מקיף על תסמונת התעלה הקרפלית, כולל סימפטומים, אבחון באמצעות בדיקת EMG, טיפולים אפשריים ודרכי מניעה. למידע מקצועי על בדיקת מוליכות עצבית לכף יד והקלה על כאבי כף יד.',
    keywords: [
      'תסמונת התעלה הקרפלית', 'בדיקת EMG לכף יד', 'כאבים בשורש כף היד', 'נימול באצבעות', 'טיפול בתסמונת התעלה הקרפלית', 'ניתוח שחרור תעלה קרפלית', 'העצב המדיאני', 'סד לכף יד', 'אבחון תסמונת התעלה הקרפלית', 'תרגילים לתעלה קרפלית', 'סיבות לתסמונת התעלה הקרפלית', 'חולשה בכף היד', 'הקלה על כאבי כף יד', 'לחץ על העצב המדיאני', 'אלקטרומיוגרפיה לכף יד', 'סימפטומים של תעלה קרפלית', 'מניעת תסמונת התעלה הקרפלית', 'הזרקות קורטיזון לכף יד', 'שיקום לאחר ניתוח תעלה קרפלית', 'בדיקת מוליכות עצבית לכף יד'
    ],
  },
  'תסמונות-לחץ-עצבים': {
    id: 'תסמונות-לחץ-עצבים',
    title: 'תסמונות לחץ על עצבים פריפריים: מדריך מקיף לאבחון וטיפול',
    date: '18 במרץ, 2025',
    readTime: '15 דקות',
    image: '/images/תסמונות-לחץ-עצבים.jpg',
    description: 'מדריך מקיף על תסמונות לחץ על עצבים פריפריים, כולל סוגים שונים, אבחון באמצעות בדיקת EMG, טיפולים אפשריים ודרכי מניעה. למידע מקצועי על אבחון וטיפול בלחץ על עצבים פריפריים.',
    keywords: [
      'תסמונות לחץ על עצבים', 'אבחון לחץ על עצבים פריפריים', 'בדיקת EMG לעצבים לחוצים', 'תסמונת התעלה האולנרית', 'לחץ על עצב פרונאלי', 'תסמונת מנהרת הטרסוס', 'לחץ על עצב רדיאלי', 'נוירופתיה דחיסתית', 'כאבים בעצבים פריפריים', 'נימול בגפיים', 'חולשת שרירים בגפיים', 'טיפול בלחץ על עצבים', 'ניתוח לשחרור עצב', 'פיזיותרפיה לעצבים לחוצים', 'מניעת תסמונות לחץ עצבי', 'אלקטרומיוגרפיה לעצבים פריפריים', 'תסמונת פירמידליס', 'לחץ על עצב סופרסקפולרי', 'תסמונת מוצא החזה', 'שיקום לאחר פגיעה עצבית'
    ],
  },
  'inflammatory-myopathies': {
    id: 'inflammatory-myopathies',
    title: 'מיופתיות דלקתיות: כיצד בדיקת EMG מסייעת באבחון מוקדם ומעקב',
    date: '4 באפריל, 2025',
    readTime: '14 דקות',
    image: '/articles/images/יופתיות דלקתיות.jpg',
    description: 'מדריך מקיף על מיופתיות דלקתיות (פולימיוזיטיס, דרמטומיוזיטיס, IBM), מחלות אוטואימוניות הפוגעות בשרירים. למדו על חשיבות בדיקת EMG באבחון מוקדם, טיפולים וניהול המחלה.',
    keywords: [
      'מיופתיות דלקתיות', 'פולימיוזיטיס', 'דרמטומיוזיטיס', 'בדיקת EMG למיופתיה', 'חולשת שרירים דלקתית', 'מחלות אוטואימוניות בשרירים', 'אבחון מיופתיה דלקתית', 'טיפול בדלקת שרירים', 'CK שריר מוגבר', 'ביופסיית שריר', 'סטרואידים למיופתיה', 'קשיי בליעה במיופתיה', 'פריחה בדרמטומיוזיטיס', 'שיקום מיופתיה דלקתית', 'סימנים למיופתיה דלקתית', 'מיוזיטיס עם גופיפי הכללה', 'מיופתיה מעורבת רקמת חיבור', 'תרופות אימונוסופרסיביות למיופתיה', 'אנזימי שריר מוגברים', 'אבחנה מבדלת מיופתיה'
    ],
  },
  'muscular-dystrophy': {
    id: 'muscular-dystrophy',
    title: 'ניוון שרירים (Muscular Dystrophy): תפקיד בדיקת EMG באבחון מוקדם ומעקב',
    date: '4 באפריל, 2025',
    readTime: '17 דקות',
    image: '/articles/images/ניוון שרירים.jpeg',
    description: 'מדריך מקיף על ניוון שרירים (דיסטרופיה שרירית), קבוצת מחלות גנטיות הגורמות לחולשת שרירים. למדו על סוגים שונים (דושן, בקר), תסמינים, וחשיבות בדיקת EMG באבחון.',
    keywords: [
      'ניוון שרירים', 'דושן דיסטרופיה', 'בקר דיסטרופיה', 'בדיקת EMG לניוון שרירים', 'אבחון מוקדם דיסטרופיה', 'חולשת שרירים תורשתית', 'מחלות שריר גנטיות', 'דלדול שרירים תורשתי', 'טיפול בניוון שרירים', 'גנטיקה של ניוון שרירים', 'דיסטרופין חלבון', 'רמות CK מוגברות', 'אבחון גנטי דיסטרופיה', 'ניוון שרירים חגורה', 'פיזיותרפיה לניוון שרירים', 'תסמינים של ניוון שרירים', 'איכות חיים עם דיסטרופיה', 'ייעוץ גנטי לדיסטרופיה', 'שיקום דיסטרופיה שרירים', 'טיפולים חדשניים לניוון שרירים'
    ],
  },
  'myasthenia-gravis': {
    id: 'myasthenia-gravis',
    title: 'מיאסטניה גרביס – המחלה שגורמת לשרירים \'להתעייף\' מהר',
    date: '4 באפריל, 2025',
    readTime: '16 דקות',
    image: '/articles/images/מיאסטניה גרביס.jpeg',
    description: 'מדריך מקיף על מיאסטניה גרביס, מחלה אוטואימונית הפוגעת בצומת העצב-שריר וגורמת לחולשת שרירים משתנה. למדו על אבחון באמצעות EMG, טיפולים וניהול המחלה.',
    keywords: [
      'מיאסטניה גרביס', 'צומת נוירומוסקולרי', 'בדיקת EMG למיאסטניה', 'חולשת שרירים משתנה', 'נוגדני אצטילכולין', 'אבחון מיאסטניה גרביס', 'טיפול במיאסטניה גרביס', 'פטוזיס מיאסטניה', 'בדיקת דעיכה חוזרת', 'אימונוגלובולינים למיאסטניה', 'מעכבי כולינסטראז', 'משבר מיאסטני', 'תימקטומיה', 'תסמינים של מיאסטניה', 'אבחנה מבדלת מיאסטניה', 'נוגדני MuSK', 'פלסמפרזיס למיאסטניה', 'אזאתיופרין למיאסטניה', 'דיספגיה במיאסטניה', 'ניהול יומיומי של מיאסטניה'
    ],
  },
  'als': {
    id: 'als',
    title: 'ALS (טרשת צידית אמיוטרופית): תפקיד בדיקת EMG באבחון',
    date: '4 באפריל, 2025',
    readTime: '18 דקות',
    image: '/articles/images/ALS.jpeg',
    description: 'מדריך מקיף על ALS (מחלת לו גריג), מחלה הפוגעת בעצבים המוטוריים. למדו על תסמינים, סוגים שונים, וחשיבות בדיקת EMG בתהליך האבחון המורכב.',
    keywords: [
      'ALS אבחון', 'טרשת צידית אמיוטרופית', 'ניוון עצבים מוטוריים', 'בדיקת EMG ל-ALS', 'מחלת לו גריג', 'פסיקולציות בשרירים', 'אבחון מוקדם ALS', 'סימנים ראשוניים ל-ALS', 'טיפול ב-ALS', 'תוחלת חיים עם ALS', 'פסיקולציות ודנרבציה', 'חולשת שרירים ב-ALS', 'אבחנה מבדלת ALS', 'תא עצב מוטורי עליון', 'תא עצב מוטורי תחתון', 'רילוזול טיפול', 'שיקום חולי ALS', 'ניוון שרירים בגפיים', 'ALS בולברי', 'תמיכה נשימתית ALS'
    ],
  },
  'polio-post-polio': {
    id: 'polio-post-polio',
    title: 'פוליו ופוסט-פוליו: תפקיד בדיקת EMG באבחון ומעקב',
    date: '4 באפריל, 2025',
    readTime: '15 דקות',
    image: '/articles/images/פוליו.jpeg',
    description: 'מדריך מקיף על פוליו (שיתוק ילדים) ותסמונת פוסט-פוליו (PPS). למדו על התסמינים, האבחון באמצעות EMG, והטיפול בהשלכות ארוכות הטווח של פוליו.',
    keywords: [
      'פוליו', 'תסמונת פוסט-פוליו', 'בדיקת EMG לפוליו', 'שיתוק ילדים', 'חיסון נגד פוליו', 'תסמיני פוסט-פוליו', 'אבחון פוסט-פוליו', 'שיקום פוליו', 'חולשת שרירים מאוחרת', 'נגיף הפוליו', 'יחידות מוטוריות מורחבות', 'עייפות בפוסט-פוליו', 'כאבי שרירים ומפרקים', 'ניהול תסמונת פוסט-פוליו', 'היסטוריה של פוליו', 'אלקטרומיוגרפיה בפוסט-פוליו', 'טיפול תומך בפוסט-פוליו', 'מוליכות עצבית בפוליו', 'שינויים נוירופיזיולוגיים בפוסט-פוליו', 'איכות חיים עם פוסט-פוליו'
    ],
  },
  'radiculopathy': {
    id: 'radiculopathy',
    title: 'רדיקולופתיה (לחץ על שורש עצב): תפקיד בדיקת EMG באבחון',
    date: '4 באפריל, 2025',
    readTime: '16 דקות',
    image: '/articles/images/רדיקולופתיה.jpeg',
    description: 'מדריך מקיף על רדיקולופתיה, מצב של לחץ על שורש עצב בעמוד השדרה. למדו על הגורמים (פריצת דיסק, היצרות), התסמינים (כאב מוקרן, סיאטיקה), וחשיבות בדיקת EMG לאבחון מדויק.',
    keywords: [
      'רדיקולופתיה', 'פריצת דיסק', 'בדיקת EMG לעמוד השדרה', 'לחץ על שורש עצב', 'כאב מוקרן לרגל', 'היצרות תעלת השדרה', 'אבחון רדיקולופתיה', 'סיאטיקה', 'כאבי גב תחתון', 'צווארי רדיקולופתיה', 'מותני רדיקולופתיה', 'טיפול ברדיקולופתיה', 'דנרבציה בבדיקת EMG', 'פיברילציות ברדיקולופתיה', 'מוליכות עצבית ברדיקולופתיה', 'ניתוח לשחרור לחץ על עצב', 'פיזיותרפיה לרדיקולופתיה', 'הזרקות אפידורליות', 'תסמינים של רדיקולופתיה', 'שיקום לאחר רדיקולופתיה'
    ],
  }
};

// Function to dynamically import the content component
const loadPostContent = (id: string) => {
  // Ensure the id is valid before attempting import
  if (!id || !blogMetadata[id]) {
    // Return a component that renders null or an error message
    return () => null; 
  }
  return lazy(() => import(`../articles/content/${id}.tsx`));
};

// Simple fallback component for Suspense
const LoadingFallback = () => (
  <div className="text-center py-10">טוען תוכן...</div> // "Loading content..." in Hebrew
);

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [postMeta, setPostMeta] = useState<BlogPostMetadata | null>(null);
  const [ContentComponent, setContentComponent] = useState<React.LazyExoticComponent<React.ComponentType<any>> | null>(null);

  useEffect(() => {
    // Set RTL direction for Hebrew content
    document.documentElement.setAttribute('dir', 'rtl');

    if (id && blogMetadata[id]) {
      setPostMeta(blogMetadata[id]);
      // Dynamically set the component to load
      setContentComponent(loadPostContent(id));
    } else {
      setPostMeta(null);
      setContentComponent(null);
    }

    // Cleanup function to remove dir attribute
    return () => {
      document.documentElement.removeAttribute('dir');
    };
  }, [id]);

  if (!postMeta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">המאמר לא נמצא</h1>
          <Link to="/blog" className="text-medblue hover:underline">חזרה לבלוג</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {postMeta && (
        <Helmet>
          <title>{postMeta.title} | MEDASSIST</title>
          <meta name="description" content={postMeta.description} />
          <meta name="keywords" content={postMeta.keywords.join(', ')} />
          <meta property="og:title" content={postMeta.title} />
          <meta property="og:description" content={postMeta.description} />
          <meta property="og:image" content={postMeta.image} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={postMeta.title} />
          <meta name="twitter:description" content={postMeta.description} />
          <meta name="twitter:image" content={postMeta.image} />
          <link rel="canonical" href={`https://medassist.co.il/blog/${postMeta.id}`} />
          {/* Keep JSON-LD script as is, using postMeta */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage", // Changed from BlogPosting for broader applicability
              "headline": postMeta.title,
              "image": postMeta.image,
              "datePublished": "2025-03-18T08:00:00+02:00", // Consider making this dynamic if possible
              "dateModified": "2025-04-04T21:00:00+03:00", // Update modification date
              "author": {
                "@type": "Organization",
                "name": "MEDASSIST"
              },
              "publisher": {
                "@type": "Organization",
                "name": "MEDASSIST",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://medassist.co.il/logo.png" // Assuming logo exists
                }
              },
              "description": postMeta.description,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://medassist.co.il/blog/${postMeta.id}`
              },
              // Removed speakable as it might not be relevant for all content types
            })}
          </script>
        </Helmet>
      )}
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-medblue transition-colors">בית</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link to="/blog" className="hover:text-medblue transition-colors">בלוג</Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-800">{postMeta.title}</span>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Post Header */}
            <div className="mb-8 text-right">
              <h1 className="text-3xl md:text-4xl font-bold text-medblue-dark mb-4">{postMeta.title}</h1>
              <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{postMeta.date}</span>
                </div>
                <span className="text-gray-400">|</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{postMeta.readTime}</span>
                </div>
                <span className="text-gray-400">|</span>
                <button className="flex items-center gap-1 hover:text-medblue transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>שיתוף</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={postMeta.image} 
                alt={postMeta.title} 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Dynamically Loaded Post Content */}
            <article className="text-right text-gray-700">
              <Suspense fallback={<LoadingFallback />}>
                {ContentComponent && <ContentComponent />}
              </Suspense>
            </article>

            {/* Call to Action */}
            <div className="mt-12 bg-medblue-dark text-white p-8 rounded-lg shadow-md text-right">
              <h2 className="text-2xl font-bold mb-4">
                {postMeta.id === 'carpal-tunnel-syndrome' ? 'סובלים מתסמיני תעלה קרפלית?' : 
                 postMeta.id === 'guillain-barre-syndrome' ? 'חוששים מתסמיני תסמונת גיאן-בארה?' : 
                 'זקוקים לאבחון מקצועי?'}
              </h2>
              <p className="mb-6">
                {postMeta.id === 'carpal-tunnel-syndrome' ? 
                  'צוות המומחים שלנו יכול לעזור לכם באבחון מדויק באמצעות בדיקת EMG ובהתאמת תכנית טיפול אישית.' : 
                 postMeta.id === 'guillain-barre-syndrome' ? 
                  'צוות המומחים שלנו מתמחה באבחון וטיפול בתסמונת גיאן-בארה באמצעות בדיקות EMG מתקדמות ותוכניות טיפול מותאמות אישית.' : 
                  'צוות המומחים שלנו יכול לעזור לכם באבחון מדויק באמצעות בדיקת EMG ובהתאמת תכנית טיפול אישית.'}
              </p>
              <div className="flex justify-end">
                <a 
                  href="tel:03-301-5458"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md inline-flex items-center gap-2 shadow-md"
                >
                  <span>התקשרו עכשיו: 03-301-5458</span>
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
