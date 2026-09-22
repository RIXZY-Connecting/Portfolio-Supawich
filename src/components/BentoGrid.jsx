import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  AboutCard,
  SkillsCard,
  ExperienceCard,
  EducationCard,
  FeaturedProjectsCard,
  ContactCard,
} from "./BentoCards";
import GitHubRepos from "./GitHubRepos";
import WinWindow from "./WinWindow";

const BentoGrid = ({
  about,
  skills,
  experiences,
  education,
  ryuprojects,
  repos,
  getInTouch,
  windowManager,
}) => {
  const { language, strings } = useLanguage();
  const {
    openWindows,
    minimizedWindows,
    activeWindow,
    focusWindow,
    minimizeWindow,
    closeWindow,
    getZIndex,
  } = windowManager;

  const isOpen = (id) => openWindows.includes(id);
  const isMin = (id) => minimizedWindows.includes(id);
  const isAct = (id) => activeWindow === id;
  const isVis = (id) => isOpen(id) && !isMin(id);

  return (
    <section className="win-content-area">
      {/* ============================================================
          ROW 1: About Me & Technical Skills (50% / 50% split)
          ============================================================ */}
      {(isOpen("about") || isOpen("skills")) && (
        <div className="win-grid-row win-grid-2col">
          {/* About Window */}
          {about?.show && isOpen("about") && (
            <WinWindow
              id="about"
              title={strings.about?.title || (language === "th" ? "เกี่ยวกับฉัน" : "About Me")}
              icon="👤"
              isActive={isAct("about")}
              isMinimized={isMin("about")}
              onFocus={focusWindow}
              onMinimize={minimizeWindow}
              onClose={closeWindow}
              zIndex={getZIndex("about")}
            >
              <AboutCard about={about} />
            </WinWindow>
          )}

          {/* Skills Window */}
          {skills?.show && isOpen("skills") && (
            <WinWindow
              id="skills"
              title={strings.skills?.title || (language === "th" ? "ทักษะและความสามารถ" : "Technical Skills")}
              icon="⚙️"
              isActive={isAct("skills")}
              isMinimized={isMin("skills")}
              onFocus={focusWindow}
              onMinimize={minimizeWindow}
              onClose={closeWindow}
              zIndex={getZIndex("skills")}
            >
              <SkillsCard skills={skills} />
            </WinWindow>
          )}
        </div>
      )}

      {/* ============================================================
          ROW 2: Work Experience & Education (50% / 50% split)
          ============================================================ */}
      {(isOpen("experience") || isOpen("education")) && (
        <div className="win-grid-row win-grid-2col">
          {/* Experience Window */}
          {experiences?.show && isOpen("experience") && (
            <WinWindow
              id="experience"
              title={strings.experience?.title || (language === "th" ? "ประสบการณ์การทำงาน" : "Work Experience")}
              icon="💼"
              isActive={isAct("experience")}
              isMinimized={isMin("experience")}
              onFocus={focusWindow}
              onMinimize={minimizeWindow}
              onClose={closeWindow}
              zIndex={getZIndex("experience")}
            >
              <ExperienceCard experiences={experiences} />
            </WinWindow>
          )}

          {/* Education Window */}
          {education?.show && isOpen("education") && (
            <WinWindow
              id="education"
              title={strings.education?.title || (language === "th" ? "ประวัติการศึกษา" : "Education")}
              icon="🎓"
              isActive={isAct("education")}
              isMinimized={isMin("education")}
              onFocus={focusWindow}
              onMinimize={minimizeWindow}
              onClose={closeWindow}
              zIndex={getZIndex("education")}
            >
              <EducationCard education={education} />
            </WinWindow>
          )}
        </div>
      )}

      {/* ============================================================
          ROW 3: Featured Projects Window (Full-width showcase)
          ============================================================ */}
      {ryuprojects?.show && isOpen("projects") && (
        <WinWindow
          id="projects"
          title={language === "th" ? "ผลงานเด่น (Featured Projects)" : "Featured Projects"}
          icon="📁"
          isActive={isAct("projects")}
          isMinimized={isMin("projects")}
          onFocus={focusWindow}
          onMinimize={minimizeWindow}
          onClose={closeWindow}
          zIndex={getZIndex("projects")}
        >
          <FeaturedProjectsCard ryuprojects={ryuprojects} />
        </WinWindow>
      )}

      {/* ============================================================
          ROW 4: GitHub Repositories Window (Full-width showcase)
          ============================================================ */}
      {repos?.show && isOpen("repos") && (
        <WinWindow
          id="repos"
          title={language === "th" ? "คลังโค้ด GitHub (Repositories)" : "GitHub Repositories"}
          icon="🌐"
          isActive={isAct("repos")}
          isMinimized={isMin("repos")}
          onFocus={focusWindow}
          onMinimize={minimizeWindow}
          onClose={closeWindow}
          zIndex={getZIndex("repos")}
        >
          <GitHubRepos reposConfig={repos} />
        </WinWindow>
      )}

      {/* ============================================================
          ROW 5: Contact Window (Full-width showcase)
          ============================================================ */}
      {getInTouch?.show && isOpen("contact") && (
        <WinWindow
          id="contact"
          title={language === "th" ? "ติดต่อฉัน (Contact)" : "Contact Me"}
          icon="📧"
          isActive={isAct("contact")}
          isMinimized={isMin("contact")}
          onFocus={focusWindow}
          onMinimize={minimizeWindow}
          onClose={closeWindow}
          zIndex={getZIndex("contact")}
        >
          <ContactCard getInTouch={getInTouch} />
        </WinWindow>
      )}
    </section>
  );
};

export default BentoGrid;

