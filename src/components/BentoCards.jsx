import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  User,
  Layers,
  Briefcase,
  GraduationCap,
  Laptop,
  Send,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Calendar,
  Clock,
  Building2,
  Code,
  Palette,
  Camera,
  Film,
  Github,
  Linkedin,
  Terminal,
  Wrench,
  Brain,
  Zap,
  GitBranch,
  PenTool,
  Rocket,
} from "lucide-react";

/** Lucide icon lookup for skill items that use icon names */
const skillIconMap = {
  code: Code,
  robot: Rocket,
  brain: Brain,
  terminal: Terminal,
  "code-branch": GitBranch,
  bolt: Zap,
  "paper-plane": Send,
  "pen-nib": PenTool,
  tools: Wrench,
};

/** Lucide icon lookup for social cards */
const socialIconMap = {
  "fab fa-linkedin": Linkedin,
  "fab fa-github": Github,
};

/**
 * About Card — now renders inside a WinWindow (no more bento-card wrapper)
 */
export const AboutCard = ({ about }) => {
  const { strings } = useLanguage();
  const tAbout = strings.about;

  return (
    <div className="win-card-content">
      <p className="win-about-text">{tAbout.message || about.message}</p>

      <div className="win-about-tags">
        <span className="win-tag">
          <GraduationCap size={14} />
          {tAbout.tags?.kmutnb || "KMUTNB '26"}
        </span>
        <span className="win-tag">
          <MapPin size={14} />
          {tAbout.tags?.location || "Bangkok, Thailand"}
        </span>
        <span className="win-tag">
          <Code size={14} />
          {tAbout.tags?.frontendDev || "Frontend Dev"}
        </span>
        <span className="win-tag">
          <Palette size={14} />
          {tAbout.tags?.uiUx || "UI / UX Design"}
        </span>
        <span className="win-tag">
          <Camera size={14} />
          {tAbout.tags?.photography || "Photography"}
        </span>
        {tAbout.tags?.mediaEditing && (
          <span className="win-tag">
            <Film size={14} />
            {tAbout.tags.mediaEditing}
          </span>
        )}
      </div>
    </div>
  );
};

/**
 * Skills Card — Tabbed Categories
 */
export const SkillsCard = ({ skills }) => {
  const { strings } = useLanguage();
  const tSkills = strings.skills;

  const categories = skills.categories
    ? skills.categories.map((cat) => ({
        ...cat,
        label:
          cat.id === "techStack"
            ? (tSkills.tabTech || cat.label)
            : cat.id === "creativeMedia"
            ? (tSkills.tabCreative || cat.label)
            : (tSkills.tabTools || cat.label),
      }))
    : [{ label: tSkills.tabTools, icon: "tools", data: skills.data }];

  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab] || categories[0];

  const tabIconMap = {
    "fas fa-tools": Wrench,
    "fas fa-layer-group": Layers,
    "fas fa-film": Film,
  };

  return (
    <div className="win-card-content">
      {/* Category Tabs — styled as XP/Win7 tab bar */}
      {categories.length > 1 && (
        <div className="win-tab-bar">
          {categories.map((cat, idx) => {
            const TabIcon = tabIconMap[cat.icon] || Layers;
            return (
              <button
                key={idx}
                className={`win-tab-btn ${activeTab === idx ? "active" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                <TabIcon size={13} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="win-tab-counter">
        {activeCategory.data.length} {tSkills.toolsSuffix}
      </div>

      <div className="win-skills-grid">
        {activeCategory.data.map((skill, idx) => (
          <div key={`${activeTab}-${idx}`} className="win-skill-item">
            {skill.img ? (
              <img src={skill.img} alt={skill.text} className="win-skill-icon" loading="lazy" decoding="async" width="28" height="28" />
            ) : (() => {
              const SkillIcon = skillIconMap[skill.icon] || Code;
              return (
                <span className="win-skill-icon-svg" style={{ color: skill.color || "var(--win-accent)" }}>
                  <SkillIcon size={26} />
                </span>
              );
            })()}
            <span className="win-skill-name">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Experience Card
 */
export const ExperienceCard = ({ experiences }) => {
  const { strings } = useLanguage();
  const tExp = strings.experience;

  const entries = (tExp.items || experiences.data).map((item, idx) => ({
    ...experiences.data[idx],
    ...item,
  }));

  return (
    <div className="win-card-content">
      <div className="win-timeline">
        {entries.map((exp, idx) => {
          let displayDate = exp.date;
          let displayDuration = exp.duration || exp.hours;

          if (!displayDuration && displayDate && displayDate.includes("·")) {
            const parts = displayDate.split("·").map((s) => s.trim());
            displayDate = parts[0];
            displayDuration = parts.slice(1).join(" · ");
          }

          return (
            <div key={idx} className="win-timeline-entry">
              {exp.companylogo && (
                <img src={exp.companylogo} alt={exp.company} className="win-timeline-logo" loading="lazy" decoding="async" width="40" height="40" />
              )}
              <div className="win-timeline-body">
                <div className="win-timeline-header">
                  <span className="win-timeline-role">{exp.role}</span>
                  <div className="win-timeline-badges">
                    {displayDate && (
                      <span className="win-badge">
                        <Calendar size={11} />
                        {displayDate}
                      </span>
                    )}
                    {displayDuration && (
                      <span className="win-badge win-badge-accent">
                        <Clock size={11} />
                        {displayDuration}
                      </span>
                    )}
                  </div>
                </div>
                <span className="win-timeline-company">{exp.company}</span>
                {(exp.type || exp.location) && (
                  <div className="win-timeline-meta">
                    {exp.type && (
                      <span className="win-meta-pill">
                        <Building2 size={12} />
                        {exp.type}
                      </span>
                    )}
                    {exp.location && (
                      <span className="win-meta-pill">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    )}
                  </div>
                )}
                {exp.description && (
                  <p className="win-timeline-desc">{exp.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Education Card
 */
export const EducationCard = ({ education }) => {
  const { strings } = useLanguage();
  const tEdu = strings.education;

  const entries = (tEdu.items || education.data).map((item, idx) => ({
    ...education.data[idx],
    ...item,
  }));

  return (
    <div className="win-card-content">
      <div className="win-timeline">
        {entries.map((edu, idx) => (
          <div key={idx} className="win-timeline-entry">
            {edu.companylogo && (
              <img src={edu.companylogo} alt={edu.institution} className="win-timeline-logo" loading="lazy" decoding="async" width="40" height="40" />
            )}
            <div className="win-timeline-body">
              <div className="win-timeline-header">
                <span className="win-timeline-role">{edu.institution}</span>
                {edu.gpa && (
                  <span className="win-badge win-badge-accent">
                    {tEdu.gpaLabel || "GPA"} {edu.gpa}
                  </span>
                )}
              </div>
              <span className="win-timeline-company">
                {edu.role} · {edu.department}
              </span>
              <span className="win-timeline-desc" style={{ marginTop: '0.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={13} style={{ color: 'var(--win-accent)' }} />
                {edu.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Featured Projects Card
 */
export const FeaturedProjectsCard = ({ ryuprojects }) => {
  const { strings } = useLanguage();
  const tProj = strings.projects;

  const entries = (tProj.items || ryuprojects.data).map((item, idx) => ({
    ...ryuprojects.data[idx],
    ...item,
  }));

  return (
    <div className="win-card-content">
      <div className="win-projects-grid">
        {entries.map((proj, idx) => {
          const isPortrait = proj.orientation === "portrait" || proj.featured;
          return (
            <div
              key={idx}
              className={`win-project-card ${isPortrait ? "win-project-card--portrait" : "win-project-card--landscape"} ${proj.featured ? "win-project-card--featured" : ""}`}
            >
              <div className="win-project-img-wrap">
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="win-project-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="win-project-body">
                <div className="win-project-meta-row">
                  {proj.badge && (
                    <span className="win-project-badge-highlight">
                      🎓 {proj.badge}
                    </span>
                  )}
                  {proj.tag && <span className="win-project-tag">{proj.tag}</span>}
                </div>

                <h3 className="win-project-name">{proj.name}</h3>
                <p className="win-project-info">{proj.info}</p>

                {proj.highlights && proj.highlights.length > 0 && (
                  <div className="win-project-highlights">
                    {proj.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="win-project-highlight-item">
                        <span className="win-highlight-bullet">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}


              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Contact Card
 */
export const ContactCard = ({ getInTouch }) => {
  const { strings } = useLanguage();
  const tContact = strings.contact;

  const [copied, setCopied] = useState(false);
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
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(getInTouch.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="win-card-content win-contact-content">
      {/* Contact Header */}
      <div className="win-contact-header">
        <h3 className="win-contact-headline">
          {tContact.headline}{" "}
          <span className="win-contact-accent">{tContact.headlineAccent}</span>{" "}
          {tContact.headlineEnd}
        </h3>
        <p className="win-contact-subtitle">{tContact.message || getInTouch.message}</p>

        {/* Live Bangkok Time */}
        <div className="win-contact-time">
          <span className="win-status-dot" />
          <span>{tContact.timeLabel}</span>
          <span className="win-time-sep">·</span>
          <span className="win-time-value">{currentTime}</span>
          <span className="win-time-tz">GMT+7</span>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="win-contact-grid">
        {/* Email */}
        <div className="win-contact-item win-contact-primary">
          <div className="win-contact-icon-wrap">
            <Mail size={20} />
          </div>
          <div className="win-contact-body">
            <span className="win-contact-label">{tContact.emailLabel}</span>
            <span className="win-contact-value">{getInTouch.email}</span>
          </div>
          <div className="win-contact-actions">
            <button
              onClick={handleCopyEmail}
              className={`win-action-btn ${copied ? "copied" : ""}`}
              title="Copy email"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? tContact.copiedBtn : tContact.copyBtn}</span>
            </button>
            <a
              href={`mailto:${getInTouch.email}`}
              className="win-action-btn win-action-primary"
            >
              <ExternalLink size={13} />
              <span>{tContact.sendBtn}</span>
            </a>
          </div>
        </div>

        {/* Phone */}
        {getInTouch.phone && (
          <div className="win-contact-item">
            <div className="win-contact-icon-wrap">
              <Phone size={20} />
            </div>
            <div className="win-contact-body">
              <span className="win-contact-label">{tContact.phoneLabel}</span>
              <span className="win-contact-value">{getInTouch.phone}</span>
            </div>
            <a href={`tel:${getInTouch.phone}`} className="win-action-btn">
              <Phone size={13} />
              <span>{tContact.callBtn}</span>
            </a>
          </div>
        )}

        {/* Location */}
        {getInTouch.location && (
          <div className="win-contact-item">
            <div className="win-contact-icon-wrap">
              <MapPin size={20} />
            </div>
            <div className="win-contact-body">
              <span className="win-contact-label">{tContact.locationLabel}</span>
              <span className="win-contact-value">{tContact.timeLabel || getInTouch.location}</span>
            </div>
          </div>
        )}

        {/* Socials */}
        {getInTouch.socials && getInTouch.socials.map((social, idx) => {
          const SocialIcon = socialIconMap[social.icon] || Github;
          return (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              className="win-contact-item win-contact-social"
            >
              <div className="win-contact-icon-wrap">
                <SocialIcon size={20} />
              </div>
              <div className="win-contact-body">
                <span className="win-contact-label">{social.name}</span>
                <span className="win-contact-value">{social.handle}</span>
              </div>
              <span className="win-contact-arrow">
                <ArrowRight size={16} />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
