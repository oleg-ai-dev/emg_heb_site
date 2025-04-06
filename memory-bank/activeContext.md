# Active Context: MEDASSIST EMG Website

## 1. Current Focus
*   **SEO Improvement:** Implementing SEO enhancements based on the analysis performed. Starting with adding meta tags (`react-helmet`) to core pages.

## 2. Recent Changes (Current Session)
*   **SEO Analysis:** Researched current SEO best practices (2025). Analyzed site structure, technical files (`robots.txt`, `sitemap.xml`), core pages (`Index.tsx`, `BlogPost.tsx`), blog content (`carpal-tunnel-syndrome.tsx`), and image usage (`AboutSection.tsx`, `Index.tsx`) to identify SEO strengths and weaknesses.
*   **Memory Bank Creation:** Established all core Memory Bank files.
*   **Accessibility Page:** Created component, added route, refined styling, implemented banner via `write_to_file`, added footer links.
*   **About Us Page:** Created component, added banner, refined content, added route, added footer links.
*   **Terms & Conditions Page:** Created component, added route.
*   **Footer Refactoring:** Created reusable `Footer.tsx`, updated layout/alignment, and replaced in all pages.
*   **Blog Styling:** Improved layout and readability on `Blog.tsx` (index page) and `BlogPost.tsx` (individual post page).
*   **Documentation Update:** Updating `activeContext.md` (this file) and `progress.md`.
*   **Blog Post Updates:** Added a call-to-action banner mid-content to all three blog posts (`guillain-barre-syndrome`, `carpal-tunnel-syndrome`, `תסמונות-לחץ-עצבים`) as requested.
*   **Contact Form Submission:** Implemented webhook submission logic in `ContactForm.tsx` using `fetch` API to send data to the specified Make.com URL. Added success/error handling and toast notifications.
*   **Footer Layout:** Updated footer layout to remove logo and center links/copyright as per user image. Corrected syntax errors from previous attempt.
*   **New Blog Post (Inflammatory Myopathies):** Added article `inflammatory-myopathies` to `BlogPost.tsx` and `Blog.tsx`.
*   **New Blog Post (Muscular Dystrophy):** Added article `muscular-dystrophy` to `BlogPost.tsx` and `Blog.tsx`.
*   **New Blog Post (Myasthenia Gravis):** Added article `myasthenia-gravis` to `BlogPost.tsx` and `Blog.tsx`.
*   **New Blog Post (ALS):** Added article `als` to `BlogPost.tsx` and `Blog.tsx`.
*   **New Blog Post (Polio/Post-Polio):** Added article `polio-post-polio` to `BlogPost.tsx` and `Blog.tsx`.
*   **New Blog Post (Radiculopathy):** Added article `radiculopathy` to `BlogPost.tsx` and `Blog.tsx` using provided content, keywords, and image. Included mid-content banner.
*   **Performance Optimization (Pages):** Implemented code-splitting for page components in `src/App.tsx` using `React.lazy` and `Suspense` to address build warnings about large chunks.
    *   **Performance Optimization (Blog Posts):** Refactored `BlogPost.tsx` to dynamically load post content using `React.lazy`. Extracted JSX content for each post into separate files under `src/articles/content/`.

## 3. Next Steps
1.  **Implement Meta Tags:** Add `react-helmet` with appropriate titles, descriptions, and keywords to core pages (`Index.tsx`, `AboutUs.tsx`, `Blog.tsx`, `AccessibilityStatement.tsx`, `TermsConditions.tsx`).
2.  **Implement Structured Data:** Add `MedicalClinic`/`LocalBusiness` and `FAQPage` schema using `react-helmet`.
3.  **Add Internal Links:** Review blog content and add relevant internal links.
4.  **Optimize Alt Text:** Review and improve image alt text where necessary.
5.  **Update Documentation:** Update `progress.md` to reflect SEO analysis and implementation start.

## 4. Active Decisions & Considerations
*   **Footer Refactoring:** Completed. Addressed the previous duplication issue.
*   **Footer Color Scheme:** Updated footer background from `bg-gray-900` to `bg-medblue-dark` to align with header and project palette.
*   **Placeholder Links:** The footer still contains placeholder links (`#`) for "מדיניות פרטיות" and "צור קשר". These will need actual pages or valid links eventually.
