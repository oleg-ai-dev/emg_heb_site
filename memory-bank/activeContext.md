# Active Context: MEDASSIST EMG Website

## 1. Current Focus
*   **Task Completion:** Finalizing the creation of the Terms & Conditions page and updating documentation.
*   **Awaiting Next Task:** Ready for the next user request or to suggest potential improvements (e.g., refactoring the duplicated footer).

## 2. Recent Changes (Current Session)
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
1.  Update `memory-bank/progress.md` to reflect the blog post content splitting.
2.  Run `npm run build` to verify the reduction in the `BlogPost` chunk size.
3.  Present the completed task to the user using `attempt_completion`.
4.  Await further instructions from the user.

## 4. Active Decisions & Considerations
*   **Footer Refactoring:** Completed. Addressed the previous duplication issue.
*   **Footer Color Scheme:** Updated footer background from `bg-gray-900` to `bg-medblue-dark` to align with header and project palette.
*   **Placeholder Links:** The footer still contains placeholder links (`#`) for "מדיניות פרטיות" and "צור קשר". These will need actual pages or valid links eventually.
