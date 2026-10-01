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
import {
  User,
  Cpu,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Github,
  Mail,
} from "lucide-react";

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
    activeWindow,
    focusWindow,
    getZIndex,
  } = windowManager;

  return (
    <section className="win-content-area">
      {/* ============================================================
          ROW 1: About Me & Technical Skills (50% / 50% split)
          ============================================================ */}
      <div className="win-grid-row win-grid-2col">
        {/* About Window */}
        {about?.show && (
          <WinWindow
            id="about"
            title={strings.about?.title || (language === "th" ? "เกี่ยวกับฉัน" : "About Me")}
            icon={<User size={14} />}
            isActive={activeWindow === "about"}
            onFocus={focusWindow}
            zIndex={getZIndex("about")}
            revealDelay={0}
          >
            <AboutCard about={about} />
          </WinWindow>
        )}

        {/* Skills Window */}
        {skills?.show && (
          <WinWindow
            id="skills"
            title={strings.skills?.title || (language === "th" ? "ทักษะและความสามารถ" : "Technical Skills")}
            icon={<Cpu size={14} />}
            isActive={activeWindow === "skills"}
            onFocus={focusWindow}
            zIndex={getZIndex("skills")}
            revealDelay={120}
          >
            <SkillsCard skills={skills} />
          </WinWindow>
        )}
      </div>

      {/* ============================================================
          ROW 2: Work Experience & Education (50% / 50% split)
          ============================================================ */}
      <div className="win-grid-row win-grid-2col">
        {/* Experience Window */}
        {experiences?.show && (
          <WinWindow
            id="experience"
            title={strings.experience?.title || (language === "th" ? "ประสบการณ์การทำงาน" : "Work Experience")}
            icon={<Briefcase size={14} />}
            isActive={activeWindow === "experience"}
            onFocus={focusWindow}
            zIndex={getZIndex("experience")}
            revealDelay={0}
          >
            <ExperienceCard experiences={experiences} />
          </WinWindow>
        )}

        {/* Education Window */}
        {education?.show && (
          <WinWindow
            id="education"
            title={strings.education?.title || (language === "th" ? "ประวัติการศึกษา" : "Education")}
            icon={<GraduationCap size={14} />}
            isActive={activeWindow === "education"}
            onFocus={focusWindow}
            zIndex={getZIndex("education")}
            revealDelay={120}
          >
            <EducationCard education={education} />
          </WinWindow>
        )}
      </div>

      {/* ============================================================
          ROW 3: Featured Projects Window (Full-width showcase)
          ============================================================ */}
      {ryuprojects?.show && (
        <WinWindow
          id="projects"
          title={strings.projects?.title || (language === "th" ? "ผลงานเด่น" : "Featured Projects")}
          icon={<FolderGit2 size={14} />}
          isActive={activeWindow === "projects"}
          onFocus={focusWindow}
          zIndex={getZIndex("projects")}
        >
          <FeaturedProjectsCard ryuprojects={ryuprojects} />
        </WinWindow>
      )}

      {/* ============================================================
          ROW 4: GitHub Repositories Window (Full-width showcase)
          ============================================================ */}
      {repos?.show && (
        <WinWindow
          id="repos"
          title={language === "th" ? "คลังโค้ด GitHub (Repositories)" : "GitHub Repositories"}
          icon={<Github size={14} />}
          isActive={activeWindow === "repos"}
          onFocus={focusWindow}
          zIndex={getZIndex("repos")}
        >
          <GitHubRepos reposConfig={repos} />
        </WinWindow>
      )}

      {/* ============================================================
          ROW 5: Contact Window (Full-width showcase)
          ============================================================ */}
      {getInTouch?.show && (
        <WinWindow
          id="contact"
          title={language === "th" ? "ติดต่อฉัน (Contact)" : "Contact Me"}
          icon={<Mail size={14} />}
          isActive={activeWindow === "contact"}
          onFocus={focusWindow}
          zIndex={getZIndex("contact")}
        >
          <ContactCard getInTouch={getInTouch} />
        </WinWindow>
      )}
    </section>
  );
};

export default BentoGrid;
