import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Github, Linkedin, Download, Send, Globe } from "lucide-react";

const iconMap = {
  "fa-github": Github,
  "fa-linkedin": Linkedin,
};

const HeroHeader = ({ mainBody, about }) => {
  const { language, setLanguage, strings } = useLanguage();
  const hero = strings.hero;

  return (
    <section className="win-hero-section">
      <motion.div
        className="win-hero-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* XP/Win7 Title Bar */}
        <div className="win-hero-titlebar">
          <div className="win-titlebar-left">
            <span className="win-titlebar-icon">🖥️</span>
            <span className="win-titlebar-text">
              {language === "th" ? "ยินดีต้อนรับ — Supawich's Portfolio" : "Welcome — Supawich's Portfolio"}
            </span>
          </div>

          <div className="win-hero-titlebar-right">
            {/* Quick Language Segmented Toggle */}
            <div className="win-hero-lang-btn" role="group" aria-label="Language selector">
              <span className="win-hero-lang-icon" aria-hidden="true">
                <Globe size={12} />
              </span>
              <button
                type="button"
                className={`win-hero-lang-opt ${language === "th" ? "active" : ""}`}
                onClick={() => setLanguage("th")}
                aria-pressed={language === "th"}
                title="เปลี่ยนเป็นภาษาไทย"
              >
                TH
              </button>
              <button
                type="button"
                className={`win-hero-lang-opt ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Window Body */}
        <div className="win-hero-body">
          <div className="win-hero-left">
            {/* Avatar */}
            <div className="win-hero-avatar">
              <img
                src={about.imageLink}
                alt={`${mainBody.firstName} ${mainBody.lastName}`}
                className="win-hero-avatar-img"
                width="125"
                height="155"
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Identity info */}
            <div className="win-hero-info">
              <h1 className="win-hero-name">
                {mainBody.firstName}{" "}
                <span className="win-hero-name-accent">{mainBody.lastName || mainBody.nickname}</span>
              </h1>

              <p className="win-hero-title">{hero.title || mainBody.title}</p>
              <p className="win-hero-tagline">{hero.bio || mainBody.bio}</p>
            </div>
          </div>

          {/* Action buttons & Social links */}
          <div className="win-hero-actions">
            <div className="win-hero-socials">
              {mainBody.icons.map((icon, idx) => {
                const IconComponent = iconMap[icon.image] || Github;
                return (
                  <a
                    key={idx}
                    href={icon.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="win-social-btn"
                    title={icon.name || "Social Link"}
                    aria-label={icon.name || "Social Link"}
                  >
                    <IconComponent size={19} />
                  </a>
                );
              })}
            </div>

            <div className="win-hero-cta">
              {about.resume && (
                <a
                  href={about.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="win-btn-primary"
                >
                  <Download size={15} />
                  <span>{hero.downloadCv}</span>
                </a>
              )}
              <a
                href="#contact"
                className={about.resume ? "win-btn-secondary" : "win-btn-primary"}
              >
                <Send size={15} />
                <span>{hero.contactMe}</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroHeader;
