# System Patterns: MEDASSIST EMG Website

## 1. Architecture
*   **Type:** Single Page Application (SPA).
*   **Framework:** React.
*   **Build Tool:** Vite.
*   **Language:** TypeScript.

## 2. Routing
*   **Library:** `react-router-dom`.
*   **Strategy:** Client-side routing.
*   **Known Routes:**
    *   `/`: Main landing page (`src/pages/Index.tsx`).
    *   `/blog`: Blog index page (`src/pages/Blog.tsx`).
    *   `/blog/:id`: Individual blog post page (`src/pages/BlogPost.tsx`).
    *   Likely a 404/Not Found route (`src/pages/NotFound.tsx` exists).

## 3. State Management
*   **Primary Method:** React's built-in hooks (`useState`, `useEffect`). Observed in `Index.tsx` for UI state (scroll position, mobile menu).
*   **Global State:** No dedicated global state management library (like Redux, Zustand, Context API) is apparent in the core page components reviewed so far. State seems localized to components or passed down via props.

## 4. UI & Styling
*   **UI Library:** `shadcn/ui` (indicated by `components.json` and `src/components/ui`). Provides foundational UI primitives.
*   **Styling Framework:** Tailwind CSS (configured in `tailwind.config.ts`, `postcss.config.js`). Utility-first approach.
*   **Customization:**
    *   Tailwind theme extended with custom colors (`medblue`, `medblue-dark`, `medgold`, `orange-500`).
    *   Custom components built upon `shadcn/ui` primitives reside in `src/components`.
*   **Layout:** Responsive design using Tailwind breakpoints. Supports Right-to-Left (RTL) layout for Hebrew content (dynamically set via `useEffect` in page components).
*   **Global Styles:** Likely defined in `src/index.css` and potentially `src/App.css`.

## 5. Component Structure
*   **Organization:** Components are organized into `src/components` (reusable application components) and `src/components/ui` (likely `shadcn/ui` base components).
*   **Pages:** Page-level components reside in `src/pages`.
*   **Reusability:** Components like `Header`, `ContactForm`, `AccordionSection`, `TestimonialSection`, `EmgBenefitsSection`, `AboutSection` are designed for reuse, primarily on the Index page but potentially elsewhere. `Header` is reused in `Blog.tsx` and `BlogPost.tsx`.

## 6. Data Handling
*   **Blog Content:** Currently hardcoded as JavaScript objects/arrays within the `Blog.tsx` and `BlogPost.tsx` components. No external data fetching (e.g., from a CMS or API) is evident for blog posts in the reviewed files.
*   **Contact Form:** Logic likely resides within `src/components/ContactForm.tsx` (not yet reviewed). Submission might involve an API call, email service, or other backend integration.

## 7. SEO
*   **Implementation:** Uses `react-helmet` to manage `<head>` tags dynamically (title, meta description, keywords, canonical URLs, Open Graph tags, structured data JSON-LD). This is actively used in `Blog.tsx` and `BlogPost.tsx`.

## 8. Development Environment
*   **Package Manager:** npm (indicated by `package-lock.json`).
*   **Build/Dev Server:** Vite (`vite.config.ts`).
*   **Linting/Formatting:** ESLint (`eslint.config.js`) is present. Formatting rules might be enforced (e.g., via Prettier, often integrated with ESLint).

## 9. Key Technical Decisions Summary
*   React + Vite + TypeScript stack provides a modern, efficient development experience.
*   Tailwind CSS + shadcn/ui offers a balance of rapid UI development and customization.
*   Client-side routing with `react-router-dom` for SPA navigation.
*   Focus on SEO using `react-helmet`.
*   Hardcoded blog content suggests either a simple initial setup or a future plan to integrate a CMS/API.
*   RTL support is explicitly handled.
