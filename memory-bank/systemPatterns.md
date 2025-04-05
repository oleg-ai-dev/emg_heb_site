# System Patterns: MEDASSIST EMG Website

## 1. Architecture
*   **Type:** Single Page Application (SPA).
*   **Framework:** React.
*   **Build Tool:** Vite.
*   **Language:** TypeScript.
*   **Performance:** Code-splitting implemented for page-level components using `React.lazy` and `Suspense` in `src/App.tsx` to improve initial load times.

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
*   **Blog Content:**
    *   Metadata (title, date, image, etc.) is stored in `src/pages/BlogPost.tsx`.
    *   Actual post content (JSX) is stored in individual component files within `src/articles/content/`.
    *   `BlogPost.tsx` dynamically imports the relevant content component using `React.lazy` based on the URL parameter.
*   **Contact Form:** Logic resides within `src/components/ContactForm.tsx`. Submission uses the `fetch` API to send data to a Make.com webhook.

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
*   Blog content is split: Metadata in `BlogPost.tsx`, content JSX in separate files (`src/articles/content/`), loaded dynamically via `React.lazy`. This improves performance by avoiding bundling all content together.
*   RTL support is explicitly handled.
*   Code-splitting applied to page routes in `src/App.tsx` and blog post content in `src/pages/BlogPost.tsx`.
