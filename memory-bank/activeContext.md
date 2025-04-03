# Active Context: MEDASSIST EMG Website

## 1. Current Focus
*   **Task Completion:** Finalizing the creation of the About Us page and updating documentation.
*   **Awaiting Next Task:** Ready for the next user request or to suggest potential improvements (e.g., refactoring the duplicated footer).

## 2. Recent Changes (Current Session)
*   **Memory Bank Creation:** Established all core Memory Bank files.
*   **Accessibility Page:** Created component, added route, refined styling, implemented banner via `write_to_file`, added footer links.
*   **About Us Page Creation:**
    *   Created page component `src/pages/AboutUs.tsx` with provided content, header, footer, styling, and RTL support.
    *   Added image banner using `/images/about-us-banner.jpg`.
    *   Removed redundant image from main content area.
    *   Added route `/about-us` in `src/App.tsx`.
    *   Added footer links to the new page in `src/pages/Index.tsx`, `src/pages/Blog.tsx`, `src/pages/BlogPost.tsx`, and `src/pages/AccessibilityStatement.tsx`.
*   **Documentation Update:** Updating `activeContext.md` (this file) and `progress.md`.

## 3. Next Steps
1.  Update `memory-bank/progress.md` to reflect the creation and refinement of the About Us page.
2.  Present the completed task to the user using `attempt_completion`.
3.  Await further instructions from the user.

## 4. Active Decisions & Considerations
*   **Footer Duplication:** Noted that the footer code is duplicated across multiple page components. This could be refactored into a single reusable `Footer` component in the future for better maintainability.
*   **Placeholder Links:** The footer still contains placeholder links (`#`) for "תנאי שימוש", "מדיניות פרטיות", and "צור קשר". These will need actual pages or valid links eventually.
