import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // 1. Disable browser's automatic scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const forceScrollToTop = () => {
      // Scroll main window
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Scroll document root & body elements
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }

      // Scroll root div container if styled with scroll
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.scrollTop = 0;
      }
    };

    // Execute immediately before browser paint
    forceScrollToTop();

    // Secondary triggers to catch async layout shifts & image loads
    const t1 = setTimeout(forceScrollToTop, 0);
    const t2 = setTimeout(forceScrollToTop, 50);
    const t3 = setTimeout(forceScrollToTop, 150);
    const raf = requestAnimationFrame(forceScrollToTop);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      cancelAnimationFrame(raf);
    };
  }, [location.pathname, location.search, location.key]);

  return null;
}
