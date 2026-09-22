import { useState, useEffect, useCallback } from 'react';

/**
 * useTheme — Manages light/dark theme with localStorage persistence.
 * Applies a `data-theme` attribute on <html> to drive CSS custom properties.
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    // Default to light (Windows XP theme)
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
