import { useEffect } from 'react';

/**
 * Direct hash navigation on initial load happens before React mounts
 * the sections, so the browser has no target element to scroll to and
 * the viewport stays at the top. This hook scrolls to the hash target
 * exactly once, after the app has rendered and the DOM target exists.
 *
 * - Runs once on mount (no repeated scrolling on re-renders).
 * - Uses `behavior: 'instant'` for correctness on first load; the CSS
 *   scroll-padding-top / scroll-margin-top offset system still applies,
 *   so the target clears the sticky navbar.
 * - Under `prefers-reduced-motion` the instant behavior is already
 *   motion-free.
 */
export function useInitialHashScroll(): void {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === '#') {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);
}
