import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

// Define navigation structure (Conditions)
const conditions = [
  { title: 'תסמונת התעלה הקרפלית', href: '/blog/carpal-tunnel-syndrome' },
  { title: 'תסמונת גיאן-בארה', href: '/blog/guillain-barre-syndrome' },
  { title: 'תסמונות לחץ על עצבים פריפריים', href: '/blog/תסמונות-לחץ-עצבים' },
  { title: 'מיופתיות דלקתיות', href: '/blog/inflammatory-myopathies' },
  { title: 'ניוון שרירים', href: '/blog/muscular-dystrophy' },
  { title: 'מיאסטניה גרביס', href: '/blog/myasthenia-gravis' },
  { title: 'ALS', href: '/blog/als' },
  { title: 'פוליו / פוסט-פוליו', href: '/blog/polio-post-polio' },
  { title: 'רדיקולופתיה', href: '/blog/radiculopathy' },
];

// Reusable ListItem component for NavigationMenu - Refined for type safety
const ListItem = React.forwardRef<
  HTMLAnchorElement, // Use HTMLAnchorElement for ref type
  React.ComponentPropsWithoutRef<'a'> & { to?: string } 
>(({ className, title, children, href, to, ...props }, ref) => {
  const commonClasses = cn(
    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    className
  );

  return (
    <li>
      <NavigationMenuLink asChild>
        {to ? (
          <Link
            to={to}
            ref={ref as React.Ref<HTMLAnchorElement>} // Cast ref for Link
            className={commonClasses}
            {...props} // Spread other props
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </Link>
        ) : (
          <a
            href={href || '#'}
            ref={ref} // Standard ref for 'a' tag
            className={commonClasses}
            {...props} // Spread other props
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </a>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile navigation items
  const mobileNavItems = [
    { title: 'עמוד הבית', href: '/' },
    { title: 'אודות', href: '/about-us' },
    { title: 'מידע ובלוג', href: '/blog' }, // Simplified link for mobile
    { title: 'צור קשר', href: '/#contact', isContact: true }, // Updated href and added flag
  ];

  // Function for smooth scroll logic
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false); // Close menu on click
    // Prevent default jump if already on homepage
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    // If on another page, Link component handles navigation
  };

  return (
    <>
      {/* Header */}
      <header className="bg-medblue sticky top-0 z-50 shadow-md py-4">
        <div className="container mx-auto px-4">
          {/* Main flex container - Restore justify-between */}
          <div className="flex items-center justify-between"> 
            
            {/* Logo - Add order for mobile, reset for desktop */}
            <Link to="/" className="text-white text-xl font-bold order-first md:order-none">
              MEDASSIST
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-grow justify-center">
              {/* Re-added dir="rtl" */}
              <NavigationMenu dir="rtl"> 
                {/* Removed dir="rtl" from the list */}
                <NavigationMenuList> 
                  {/* Standard Links */}
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-medblue text-white hover:bg-medblue-dark"}>
                        עמוד הבית
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/about-us">
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-medblue text-white hover:bg-medblue-dark"}>
                        אודות
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  {/* Mega Menu Trigger */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-medblue text-white hover:bg-medblue-dark data-[state=open]:bg-medblue-dark">מידע על EMG</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[450px] lg:w-[550px] lg:grid-cols-[1fr_1fr] text-right" dir="rtl"> {/* Adjusted width and cols */}
                        
                        {/* Right Column (Conditions List) */}
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-semibold text-medblue-dark px-3 mb-2">מצבים שאנו מאבחנים:</p>
                          {conditions.slice(0, 6).map((condition) => ( // Show more conditions
                            <ListItem
                              key={condition.title}
                              title={condition.title}
                              to={condition.href} // Use 'to' for internal links
                              className="text-right"
                            />
                          ))}
                          <ListItem to="/blog" title="כל המאמרים..." className="text-right font-medium pt-2">
                             עיין בכל המאמרים והמצבים.
                          </ListItem>
                        </div>

                        {/* Left Column (General Info & Links) */}
                        <div className="flex flex-col space-y-2 row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md text-right"
                              to="/blog" // Link main block to blog index
                            >
                              <div className="mb-2 mt-4 text-lg font-medium text-medblue-dark">
                                מאמרים ומידע
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                קראו על בדיקות EMG, מצבים רפואיים נפוצים, והכנה לבדיקה.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                          {/* Updated link to new blog post */}
                          <ListItem to="/blog/what-is-emg" title="מהי בדיקת EMG?" className="text-right">
                            כל מה שצריך לדעת על הבדיקה.
                          </ListItem>
                          {/* Link to future preparation page (placeholder) */}
                          <ListItem to="/emg-info/preparation" title="הכנה לבדיקה" className="text-right"> 
                            כיצד להתכונן לבדיקת EMG.
                          </ListItem>
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* More Standard Links */}
                  <NavigationMenuItem>
                    <Link to="/blog">
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-medblue text-white hover:bg-medblue-dark"}>
                        בלוג
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    {/* Updated to Link and added onClick for smooth scroll */}
                    <Link 
                      to="/#contact" 
                      onClick={(e) => {
                        // Prevent default jump if already on homepage
                        if (window.location.pathname === '/') {
                          e.preventDefault();
                          const element = document.getElementById('contact');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }
                        // If on another page, Link component handles navigation, 
                        // browser might handle scroll (or further logic could be added)
                      }}
                    >
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-medblue text-white hover:bg-medblue-dark"}>
                        צור קשר
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA and Mobile Menu Button Group - Add order for mobile, reset for desktop */}
            <div className="flex items-center gap-4 order-last md:order-none">
              {/* Phone CTA */}
              <a
                href="tel:03-330-2006" // Updated number
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 sm:px-6 rounded-md flex items-center gap-2 shadow-md text-sm sm:text-base"
              >
                <span className="hidden sm:inline">03-330-2006</span> {/* Updated number */}
                <Phone size={16} />
              </a>
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        /* Removed dir="rtl" from overlay div, should inherit */
        <div className="fixed inset-0 bg-medblue-dark bg-opacity-95 z-40 flex flex-col items-center justify-center md:hidden"> 
          {/* Close Button */}
          <button
            className="absolute top-6 left-6 text-white focus:outline-none" // Positioned left for RTL
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          {/* Navigation */}
          <div className="text-center">
            <nav className="flex flex-col gap-8 text-xl">
              {mobileNavItems.map((item) => (
                 <Link
                    key={item.title}
                    to={item.href}
                    className="text-white font-medium hover:text-gray-200 transition-colors"
                    // Use specific handler for contact link, general handler otherwise
                    onClick={item.isContact ? handleContactClick : () => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
              ))}
              {/* Phone CTA in Mobile Menu */}
              <a
                href="tel:03-330-2006" // Updated number
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md mt-4 flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>03-330-2006</span> {/* Updated number */}
                <Phone size={16} />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
