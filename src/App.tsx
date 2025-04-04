import { Toaster } from "@/components/ui/toaster";
import { lazy, Suspense } from 'react';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load page components
const LazyIndex = lazy(() => import("./pages/Index"));
const LazyNotFound = lazy(() => import("./pages/NotFound"));
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazyBlogPost = lazy(() => import("./pages/BlogPost"));
const LazyAccessibilityStatement = lazy(() => import("./pages/AccessibilityStatement"));
const LazyAboutUs = lazy(() => import("./pages/AboutUs"));
const LazyTermsConditions = lazy(() => import("./pages/TermsConditions"));


const queryClient = new QueryClient();

// Simple fallback component
const LoadingFallback = () => <div>טוען...</div>; // "Loading..." in Hebrew

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LazyIndex />} />
            <Route path="/blog" element={<LazyBlog />} />
            <Route path="/blog/:id" element={<LazyBlogPost />} />
            <Route path="/הצהרת-נגישות" element={<LazyAccessibilityStatement />} />
            <Route path="/about-us" element={<LazyAboutUs />} />
            <Route path="/terms-conditions" element={<LazyTermsConditions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<LazyNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
