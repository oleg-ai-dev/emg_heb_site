# Tech Context: MEDASSIST EMG Website

## 1. Core Technologies
*   **Framework:** React (`^18.3.1`)
*   **Language:** TypeScript (`^5.5.3`)
*   **Build Tool / Dev Server:** Vite (`^5.4.1`)
*   **Package Manager:** npm (inferred from `package-lock.json`)
*   **Node.js:** Likely v22.x (inferred from `@types/node: ^22.5.5`)

## 2. UI & Styling
*   **Styling Framework:** Tailwind CSS (`^3.4.11`)
    *   Plugin: `tailwindcss-animate` (`^1.0.7`)
    *   Plugin: `@tailwindcss/typography` (`^0.5.15`) for blog post styling.
*   **UI Primitives:** Radix UI (various `@radix-ui/*` packages, e.g., `^1.2.0`)
*   **UI Component Library:** `shadcn/ui` (inferred from Radix usage, `components.json`, and `src/components/ui` structure)
*   **Utility Libraries:**
    *   `class-variance-authority` (`^0.7.1`)
    *   `clsx` (`^2.1.1`)
    *   `tailwind-merge` (`^2.5.2`)
*   **Icons:** `lucide-react` (`^0.462.0`)

## 3. Routing
*   **Library:** `react-router-dom` (`^6.26.2`)

## 4. State Management
*   Primarily React Hooks (`useState`, `useEffect`). No dedicated global state library identified.

## 5. Forms
*   **Library:** `react-hook-form` (`^7.53.0`)
*   **Validation:** `zod` (`^3.23.8`) via `@hookform/resolvers` (`^3.9.0`)

## 6. SEO
*   **Library:** `react-helmet` (`^6.1.0`)

## 7. Development Tools
*   **Linting:** ESLint (`^9.9.0`) with TypeScript support (`typescript-eslint: ^8.0.1`)
*   **Type Checking:** TypeScript (`^5.5.3`)

## 8. Setup & Build
*   **Installation:** `npm install`
*   **Development Server:** `npm run dev` (starts Vite dev server)
*   **Production Build:** `npm run build` (uses Vite to build static assets)
*   **Build Customization:** A `set-permissions.js` script runs during `build` and `postinstall`. Its exact function requires inspection but likely relates to file permissions needed for deployment or execution.
*   **Configuration Files:**
    *   `vite.config.ts`
    *   `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
    *   `tailwind.config.ts`
    *   `postcss.config.js`
    *   `eslint.config.js`
    *   `components.json` (shadcn/ui config)

## 9. Technical Constraints & Considerations
*   Requires a Node.js environment for development and building.
*   Deployment target seems to be static hosting (e.g., Vercel, Netlify) given the SPA structure and Vite build process. `vercel.json` exists, suggesting Vercel is a likely deployment platform.
*   Must maintain Right-to-Left (RTL) layout support for Hebrew content.
*   Blog content is currently hardcoded in components; requires manual updates or future integration with a CMS/API.
