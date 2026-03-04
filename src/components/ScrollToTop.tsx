import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      requestAnimationFrame(() => {
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
        } catch (e) {
          window.scrollTo(0, 0);
        }
        
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        if (document.body) {
          document.body.scrollTop = 0;
        }
      });
    };

    scrollToTop();
    
    // Also try with a small delay for cases where content height changes
    const timeout = setTimeout(scrollToTop, 0);
    const timeout2 = setTimeout(scrollToTop, 50);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [pathname]);

  return null;
}
