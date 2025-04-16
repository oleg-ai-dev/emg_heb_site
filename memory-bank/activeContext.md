# Active Context: MEDASSIST EMG Website

## 1. Current Focus
- All articles and blog content now use a visually appealing, highly readable format:
  - <article> with Tailwind prose classes for optimal typography
  - Headings, lists, and blockquotes styled for clarity and accessibility
  - Internal CTAs (BlogCtaBanner, BlogShortForm) spaced and visually distinct
  - **CRITICAL: No duplicate images.** The featured image is handled by the `BlogPost.tsx` template. **DO NOT** include the same image within the article's `.tsx` content file. Only include additional, different images within the content if specifically requested.
  - No redundant CTAs at the end of articles (only the buffer CTA is used)
  - All articles are at least 1300 words, SEO-optimized, and use long-tail keyword research
  - Images are sourced from Unsplash or similar, downloaded and stored locally
  - Sitemap.xml is generated and includes all main pages and blog articles

## 2. Editorial & Technical Directives (for all future articles)
- Use Brave and Fetch to research long-tail keywords with high ranking potential, focusing on medical/EMG topics relevant to the site
- Article length: minimum 1300 words, in-depth, SEO-optimized, and in Hebrew (RTL)
- Article structure:
  - Clear, bold H1 and H2/H3 headings
  - Short, readable paragraphs
  - Bulleted and numbered lists for clarity
  - Blockquotes and colored callouts for tips, notes, or important points
  - Internal links to related articles
  - No duplicate images (featured image only in blog template)
  - No redundant CTA at the end (use only the buffer CTA)
  - Alt text for all images is descriptive and SEO-friendly
- Visual formatting:
  - **CRITICAL: Apply formatting consistently.** Use Tailwind prose classes (`prose prose-lg prose-sky max-w-none mx-auto`) for the main `<article>` tag. Apply specific styles to headings (`h1`, `h2`, `h3`) as seen in reference articles (e.g., `stiff-person-syndrome.tsx`). Ensure proper margins (`mb-6`, `mb-4`) for paragraphs (`<p>`) and lists (`<ul>`, `<ol>`). Use styled blockquotes (`<blockquote>`) for emphasis or tips, matching the reference style.
  - Add spacing between sections, before/after CTAs, and around lists.
  - Use horizontal rules (`<hr className="my-8" />`) to separate major sections.
  - Ensure all lists are visually clear and spaced.
  - Use bold/italic for emphasis on key terms.
  - Style internal links using `className="text-medblue underline"`.
- Image usage:
  - Always use a free, relevant image (preferably Unsplash)
  - Download and store image in both articles/images/ and public/articles/images/
  - Use Invoke-WebRequest for image download
  - Use Unsplash as fallback if no suitable image found elsewhere
- Sitemap:
  - Always update public/sitemap.xml to include all main pages and blog articles

## 3. Next Steps
- All future articles must strictly follow these editorial, SEO, and formatting standards.
- Memory Bank and .clinerules must be kept up to date with any new editorial or technical directives.
  - **Recent Correction (GBS Article):** Needed to remove duplicate image from article content and apply detailed formatting (margins, heading styles) to match reference articles.
  - **New Article Added (April 16, 2025):** Created a comprehensive article on "אלקטרומיוגרפיה (EMG): המדריך המקיף לבדיקה החשובה" (`src/articles/content/electromyography-emg.tsx`). The article adheres to all established editorial, SEO, and formatting standards, including keyword research, length requirements, image handling, and sitemap/metadata updates.

## 4. Active Decisions & Considerations
- All previous articles have been refactored to match the new standards.
- The editorial workflow and formatting rules are now codified in the Memory Bank and .clinerules for future reference.
- **Key Learning:** Strict adherence to formatting rules (margins, headings, blockquotes) and the "no duplicate image" rule is essential. Always refer to a correctly formatted article (e.g., `stiff-person-syndrome.tsx`) before creating new content.
