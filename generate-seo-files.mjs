import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://emg.org.il';
const PUBLIC_DIR = path.join(__dirname, 'public');

// Define static routes
const staticRoutes = [
  '/',
  '/about-us',
  '/blog',
  '/terms-conditions',
  '/הצהרת-נגישות', // Ensure this is URL-encoded if needed, but seems fine as is for path
];

// Define blog post slugs (IDs) - Manually extracted or could be read dynamically
const blogPostSlugs = [
  'guillain-barre-syndrome',
  'carpal-tunnel-syndrome',
  'תסמונות-לחץ-עצבים',
  'inflammatory-myopathies',
  'muscular-dystrophy',
  'myasthenia-gravis',
  'als',
  'polio-post-polio',
  'radiculopathy',
  'what-is-emg', // Added new slug
];

const today = new Date().toISOString().split('T')[0]; // Get date in YYYY-MM-DD format

// --- Generate sitemap.xml ---

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static routes
staticRoutes.forEach(route => {
  // Ensure leading slash for consistency, handle root path
  const pagePath = route === '/' ? '' : route;
  // Basic URL encoding for paths with Hebrew characters
  const encodedPath = encodeURI(pagePath); 
  sitemapContent += `  <url>\n`;
  sitemapContent += `    <loc>${BASE_URL}${encodedPath}</loc>\n`;
  sitemapContent += `    <lastmod>${today}</lastmod>\n`;
  // Adjust priority/changefreq as needed
  sitemapContent += `    <changefreq>weekly</changefreq>\n`; 
  sitemapContent += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`; 
  sitemapContent += `  </url>\n`;
});

// Add blog post routes
blogPostSlugs.forEach(slug => {
  const encodedSlug = encodeURI(slug); // Encode slug if it contains special chars
  sitemapContent += `  <url>\n`;
  sitemapContent += `    <loc>${BASE_URL}/blog/${encodedSlug}</loc>\n`;
  sitemapContent += `    <lastmod>${today}</lastmod>\n`; // Use actual post date if available
  sitemapContent += `    <changefreq>monthly</changefreq>\n`; 
  sitemapContent += `    <priority>0.7</priority>\n`; 
  sitemapContent += `  </url>\n`;
});

sitemapContent += `</urlset>`;

// --- Generate robots.txt ---

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

// --- Write files ---

try {
  // Ensure public directory exists (optional, fs.writeFileSync creates dirs)
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`✅ Successfully generated ${sitemapPath}`);

  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  console.log(`✅ Successfully generated ${robotsPath}`);

} catch (error) {
  console.error('❌ Error generating SEO files:', error);
  process.exit(1); // Exit with error code
}
