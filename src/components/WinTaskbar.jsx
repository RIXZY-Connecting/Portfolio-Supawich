import React, { useState, useEffect } from "react";
import { Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import StartMenu from "./StartMenu";

/**
 * WinTaskbar — Windows XP/7 style taskbar at the bottom of the screen.
 * Contains Start button, task buttons for open windows, and a system tray.
 */
const WinTaskbar = ({
  theme,
  toggleTheme,
  windowManager,
  profileImage,
  profileName,
}) => {
  const { language, toggleLanguage } = useLanguage();
  const [startOpen, setStartOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const bangkokTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setCurrentTime(bangkokTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const {
    windows,
    openWindows,
    minimizedWindows,
    activeWindow,
    focusWindow,
    toggleMinimize,
    openWindow,
  } = windowManager;

  const handleTaskClick = (id) => {
    if (activeWindow === id && !minimizedWindows.includes(id)) {
      toggleMinimize(id);
    } else {
      if (!openWindows.includes(id)) {
        openWindow(id);
      } else {
        focusWindow(id);
      }
      // Scroll to window
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  return (
    <>
      {/* Start Menu */}
      <StartMenu
        isOpen={startOpen}
        onClose={() => setStartOpen(false)}
        onOpenWindow={(id) => {
          openWindow(id);
          setStartOpen(false);
        }}
        profileImage={profileImage}
        profileName={profileName}
      />

      {/* Taskbar */}
      <div className="win-taskbar">
        {/* Start Button */}
        <button
          className={`taskbar-start-btn ${startOpen ? "active" : ""}`}
          onClick={() => setStartOpen(!startOpen)}
          aria-label="Start Menu"
        >
          <span className="start-btn-icon">⊞</span>
          <span className="start-btn-text">Start</span>
        </button>

        {/* Separator */}
        <div className="taskbar-separator" />

        {/* Task Buttons */}
        <div className="taskbar-tasks">
          {windows.map((win) => {
            const isOpen = openWindows.includes(win.id);
            const isMinimized = minimizedWindows.includes(win.id);
            const isActiveWin = activeWindow === win.id && !isMinimized;

            if (!isOpen) return null;

            return (
              <button
                key={win.id}
                className={`taskbar-task-btn ${isActiveWin ? "active" : ""} ${isMinimized ? "minimized" : ""}`}
                onClick={() => handleTaskClick(win.id)}
                title={win.title}
              >
                <span className="taskbar-task-icon">{win.icon}</span>
                <span className="taskbar-task-label">{win.title}</span>
              </button>
            );
          })}
        </div>

        {/* System Tray */}
        <div className="taskbar-systray">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="systray-btn systray-lang"
            aria-label={`Switch to ${language === "en" ? "Thai" : "English"}`}
            title={`Switch to ${language === "en" ? "ภาษาไทย" : "English"}`}
          >
            <Globe size={12} />
            <span className="systray-lang-code">{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="systray-btn systray-theme"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={theme === "dark" ? "Switch to XP Mode" : "Switch to Win7 Aero"}
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Separator */}
          <div className="systray-divider" />

          {/* Clock */}
          <div className="systray-clock">
            <span className="systray-clock-time">{currentTime}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WinTaskbar;
