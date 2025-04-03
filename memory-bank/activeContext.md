# Active Context: MEDASSIST EMG Website

## 1. Current Focus
*   **Task Completion:** Finalizing the creation of the Terms & Conditions page and updating documentation.
*   **Awaiting Next Task:** Ready for the next user request or to suggest potential improvements (e.g., refactoring the duplicated footer).

## 2. Recent Changes (Current Session)
*   **Memory Bank Creation:** Established all core Memory Bank files.
*   **Accessibility Page:** Created component, added route, refined styling, implemented banner via `write_to_file`, added footer links.
*   **About Us Page:** Created component, added banner, refined content, added route, added footer links.
*   **Terms & Conditions Page Creation:**
    *   Created page component `src/pages/TermsConditions.tsx` with provided content, header, footer, styling, and RTL support.
    *   Added route `/terms-conditions` in `src/App.tsx`.
    *   Updated footer links on all pages (`Index`, `Blog`, `BlogPost`, `AccessibilityStatement`, `AboutUs`, `TermsConditions`) to point to the new page.
*   **Documentation Update:** Updating `activeContext.md` (this file) and `progress.md`.

## 3. Next Steps
1.  Update `memory-bank/progress.md` to reflect the creation of the Terms & Conditions page.
2.  Present the completed task to the user using `attempt_completion`.
3.  Await further instructions from the user.

## 4. Active Decisions & Considerations
*   **Footer Duplication:** Noted that the footer code is duplicated across multiple page components. This could be refactored into a single reusable `Footer` component in the future for better maintainability.
*   **Placeholder Links:** The footer still contains placeholder links (`#`) for "מדיניות פרטיות" and "צור קשר". These will need actual pages or valid links eventually.
