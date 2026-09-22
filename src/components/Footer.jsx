import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Clock } from "lucide-react";

const Footer = () => {
  const { strings } = useLanguage();
  const footer = strings.footer;

  return (
    <footer className="footer-editorial">
      <div className="footer-left">
        <span className="footer-dot"></span>
        <span>
          © {new Date().getFullYear()} Supawich Sriviboonruttana. {footer.rights}
        </span>
      </div>

      <div className="footer-right">
        <span className="footer-time-badge">
          <Clock size={13} />
          <span>{footer.timeBadge}</span>
        </span>
        <a href="#hero" style={{ color: "var(--accent)", fontWeight: 500 }}>
          {footer.backToTop}
        </a>
      </div>
    </footer>
  );
};

export default Footer;

