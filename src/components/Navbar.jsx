import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import { motion, AnimatePresence } from "framer-motion";
import { mainBody, repos, about, ryuskills, experiences, education, ryuprojects, getInTouch } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + (ref.current?.offsetTop || 0) - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= (ref.current?.offsetTop || 0)
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    about.show && { name: "About", href: "/#aboutme" },
    ryuskills.show && { name: "Skills", href: "/#ryuskills" },
    education.show && { name: "Education", href: "/#education" },
    experiences.show && { name: "Experience", href: "/#experiences" },
    ryuprojects.show && { name: "Projects", href: "/#ryuprojects" },
    repos.show && { name: "GitHub", href: "/#projects" },
    getInTouch.show && { name: "Contact", href: "/#contact" },
  ].filter(Boolean);

  return (
    <motion.nav
      ref={navbarMenuRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar-ryu ${!isTop ? "scrolled" : ""}`}
    >
      {/* Brand */}
      <a
        href={import.meta.env.BASE_URL + "/#home"}
        className="navbar-ryu__brand"
        aria-label="Back to top"
      >
        {`<ryu />`}
      </a>

      {/* Desktop links */}
      <ul className="navbar-ryu__links" style={{ display: 'flex' }} aria-label="Site navigation">
        {links.map((link, i) => (
          <li key={i} style={{ listStyle: 'none' }}>
            <a
              href={import.meta.env.BASE_URL + link.href}
              className="navbar-ryu__link"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-muted)',
          fontSize: '1.25rem',
          padding: '0.25rem',
          display: 'none',
        }}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'oklch(0.10 0.008 188 / 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--color-border-subtle)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {links.map((link, i) => (
                <a
                  key={i}
                  href={import.meta.env.BASE_URL + link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: 'var(--color-muted)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

export default Navigation;
