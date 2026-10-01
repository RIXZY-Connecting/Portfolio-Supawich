import React, { useState, useEffect } from "react";
import {
  Globe,
  Sun,
  Moon,
  User,
  Cpu,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Github,
  Mail,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import StartMenu from "./StartMenu";

const TASKBAR_ICONS = {
  about: User,
  skills: Cpu,
  experience: Briefcase,
  education: GraduationCap,
  projects: FolderGit2,
  repos: Github,
  contact: Mail,
};

/**
 * WinTaskbar — Windows XP/7 style taskbar header.
 * Clicking a task button smoothly scrolls to the corresponding window section.
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
  const [activeSection, setActiveSection] = useState(null);

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

  // Track which section is in view using IntersectionObserver
  useEffect(() => {
    const ids = ['about', 'skills', 'experience', 'education', 'projects', 'repos', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const { windows } = windowManager;

  const handleTaskClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      {/* Start Menu */}
      <StartMenu
        isOpen={startOpen}
        onClose={() => setStartOpen(false)}
        onOpenWindow={(id) => {
          handleTaskClick(id);
          setStartOpen(false);
        }}
        profileImage={profileImage}
        profileName={profileName}
      />

      {/* Taskbar Header */}
      <header className="win-taskbar" role="banner">
        {/* Start Button */}
        <button
          className={`taskbar-start-btn ${startOpen ? "active" : ""}`}
          onClick={() => setStartOpen(!startOpen)}
          aria-label="Start Menu"
        >
          <span className="start-btn-icon" aria-hidden="true">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1.5" y="1.5" width="5.8" height="5.8" rx="1.2" />
              <rect x="8.7" y="1.5" width="5.8" height="5.8" rx="1.2" />
              <rect x="1.5" y="8.7" width="5.8" height="5.8" rx="1.2" />
              <rect x="8.7" y="8.7" width="5.8" height="5.8" rx="1.2" />
            </svg>
          </span>
          <span className="start-btn-text">Start</span>
        </button>

        {/* Separator */}
        <div className="taskbar-separator" />

        {/* Task Buttons */}
        <div className="taskbar-tasks">
          {windows.map((win) => {
            const TaskIcon = TASKBAR_ICONS[win.id] || User;
            const label = language === "th" && win.titleTh ? win.titleTh : win.title;
            const isActiveWin = activeSection === win.id;

            return (
              <button
                key={win.id}
                className={`taskbar-task-btn ${isActiveWin ? "active" : ""}`}
                onClick={() => handleTaskClick(win.id)}
                title={label}
              >
                <span className="taskbar-task-icon">
                  <TaskIcon size={13} />
                </span>
                <span className="taskbar-task-label">{label}</span>
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
      </header>
    </>
  );
};

export default WinTaskbar;
