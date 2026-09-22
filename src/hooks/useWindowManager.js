import { useState, useCallback } from 'react';

/**
 * useWindowManager — Manages window states for the Desktop simulation.
 * Tracks which windows are open, minimized, and which is focused (z-index).
 */

const DEFAULT_WINDOWS = [
  { id: 'about', title: 'About Me', icon: '👤' },
  { id: 'skills', title: 'Skills', icon: '⚙️' },
  { id: 'experience', title: 'Experience', icon: '💼' },
  { id: 'education', title: 'Education', icon: '🎓' },
  { id: 'projects', title: 'Projects', icon: '📁' },
  { id: 'repos', title: 'GitHub Repos', icon: '🌐' },
  { id: 'contact', title: 'Contact', icon: '📧' },
];

export function useWindowManager() {
  // All windows start open
  const [openWindows, setOpenWindows] = useState(() =>
    DEFAULT_WINDOWS.map((w) => w.id)
  );
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState('about');
  const [zStack, setZStack] = useState(() =>
    DEFAULT_WINDOWS.map((w) => w.id)
  );

  const focusWindow = useCallback((id) => {
    setActiveWindow(id);
    setZStack((prev) => {
      const filtered = prev.filter((w) => w !== id);
      return [...filtered, id];
    });
    // If it was minimized, restore it
    setMinimizedWindows((prev) => prev.filter((w) => w !== id));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setMinimizedWindows((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
    // Focus the next window in the stack
    setActiveWindow((prevActive) => {
      if (prevActive !== id) return prevActive;
      const remaining = zStack.filter(
        (w) => w !== id && !minimizedWindows.includes(w) && openWindows.includes(w)
      );
      return remaining.length > 0 ? remaining[remaining.length - 1] : null;
    });
  }, [zStack, minimizedWindows, openWindows]);

  const restoreWindow = useCallback((id) => {
    setMinimizedWindows((prev) => prev.filter((w) => w !== id));
    focusWindow(id);
  }, [focusWindow]);

  const closeWindow = useCallback((id) => {
    setOpenWindows((prev) => prev.filter((w) => w !== id));
    setMinimizedWindows((prev) => prev.filter((w) => w !== id));
    setZStack((prev) => prev.filter((w) => w !== id));
    setActiveWindow((prevActive) => {
      if (prevActive !== id) return prevActive;
      const remaining = zStack.filter(
        (w) => w !== id && openWindows.includes(w)
      );
      return remaining.length > 0 ? remaining[remaining.length - 1] : null;
    });
  }, [zStack, openWindows]);

  const openWindow = useCallback((id) => {
    setOpenWindows((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
    setMinimizedWindows((prev) => prev.filter((w) => w !== id));
    focusWindow(id);
  }, [focusWindow]);

  const toggleMinimize = useCallback((id) => {
    if (minimizedWindows.includes(id)) {
      restoreWindow(id);
    } else {
      minimizeWindow(id);
    }
  }, [minimizedWindows, restoreWindow, minimizeWindow]);

  const getZIndex = useCallback((id) => {
    const idx = zStack.indexOf(id);
    return idx === -1 ? 10 : 10 + idx;
  }, [zStack]);

  return {
    windows: DEFAULT_WINDOWS,
    openWindows,
    minimizedWindows,
    activeWindow,
    focusWindow,
    minimizeWindow,
    restoreWindow,
    closeWindow,
    openWindow,
    toggleMinimize,
    getZIndex,
  };
}
