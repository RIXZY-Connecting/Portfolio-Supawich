import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Globe, Sun, Moon } from "lucide-react";

const Navbar = ({ theme, toggleTheme, resumeUrl }) => {
  const { language, toggleLanguage, strings } = useLanguage();
  const nav = strings.nav;

  return (
    <motion.header 
      className="navbar-wrapper"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="navbar-pill">
        {/* Brand */}
        <a href="#hero" className="nav-brand" aria-label="Home">
          <span className="nav-brand-dot"></span>
          <span>Supawich S.</span>
        </a>

        {/* Navigation links */}
        <ul className="nav-links">
          <li className="nav-link-item"><a href="#about">{nav.about}</a></li>
          <li className="nav-link-item"><a href="#skills">{nav.skills}</a></li>
          <li className="nav-link-item"><a href="#experience">{nav.experience}</a></li>
          <li className="nav-link-item"><a href="#education">{nav.education}</a></li>
          <li className="nav-link-item"><a href="#projects">{nav.projects}</a></li>
          <li className="nav-link-item"><a href="#contact">{nav.contact}</a></li>
        </ul>

        {/* Right actions: Language Switcher + Theme Toggle */}
        <div className="nav-actions">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="lang-toggle-btn"
            aria-label={`Switch to ${language === "en" ? "Thai" : "English"}`}
            title={`Switch to ${language === "en" ? "ภาษาไทย" : "English"}`}
          >
            <Globe size={13} style={{ opacity: 0.8 }} />
            <span className={`lang-pill-item ${language === "en" ? "active" : ""}`}>EN</span>
            <span className="lang-pill-sep">/</span>
            <span className={`lang-pill-item ${language === "th" ? "active" : ""}`}>TH</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;

