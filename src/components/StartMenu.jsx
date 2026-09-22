import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  User,
  Layers,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Github,
  Mail,
  LogOut,
  ArrowUp,
  Settings,
} from "lucide-react";

const MENU_ITEMS = [
  { id: "about", icon: User, label: "About Me", labelTh: "เกี่ยวกับฉัน" },
  { id: "skills", icon: Layers, label: "Skills", labelTh: "ทักษะ" },
  { id: "experience", icon: Briefcase, label: "Experience", labelTh: "ประสบการณ์" },
  { id: "education", icon: GraduationCap, label: "Education", labelTh: "การศึกษา" },
  { id: "projects", icon: FolderOpen, label: "Projects", labelTh: "โปรเจกต์" },
  { id: "repos", icon: Github, label: "GitHub Repos", labelTh: "GitHub Repos" },
  { id: "contact", icon: Mail, label: "Contact", labelTh: "ติดต่อ" },
];

const StartMenu = ({ isOpen, onClose, onOpenWindow, profileImage, profileName }) => {
  const { language } = useLanguage();

  const handleItemClick = (id) => {
    onOpenWindow?.(id);
    onClose?.();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="start-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Start Menu Panel */}
          <motion.div
            className="start-menu"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* User Banner */}
            <div className="start-menu-user">
              {profileImage && (
                <img
                  src={profileImage}
                  alt={profileName || "User"}
                  className="start-menu-avatar"
                  width="40"
                  height="40"
                />
              )}
              <span className="start-menu-username">{profileName || "User"}</span>
            </div>

            {/* Menu Items */}
            <div className="start-menu-body">
              <div className="start-menu-left">
                {MENU_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      className="start-menu-item"
                      onClick={() => handleItemClick(item.id)}
                    >
                      <Icon size={18} />
                      <span>{language === "th" ? item.labelTh : item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="start-menu-right">
                <a
                  href="https://github.com/RIXZY-Connecting"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="start-menu-item start-menu-link"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/supawich-contact/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="start-menu-item start-menu-link"
                >
                  <Settings size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Footer / Shutdown */}
            <div className="start-menu-footer">
              <button
                className="start-menu-shutdown"
                onClick={() => {
                  onClose?.();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <ArrowUp size={14} />
                <span>{language === "th" ? "กลับด้านบน" : "Back to Top"}</span>
              </button>
              <button
                className="start-menu-shutdown start-menu-logoff"
                onClick={() => {
                  onClose?.();
                }}
              >
                <LogOut size={14} />
                <span>{language === "th" ? "ปิดเมนู" : "Log Off"}</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StartMenu;
