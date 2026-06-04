import React from "react";
import { motion } from "framer-motion";
import { Jumbotron } from "./migration";

const easeOut = [0.16, 1, 0.3, 1];

const MainBody = React.forwardRef(({ gradient, title, message, icons }, ref) => {
  return (
    <Jumbotron
      fluid
      id="home"
      className="hero-section unselectable"
    >
      {/* Grid overlay texture */}
      <div className="hero-grid-overlay" aria-hidden="true" />

      {/* Ambient glows */}
      <div className="hero-glow hero-glow--primary" aria-hidden="true" />
      <div className="hero-glow hero-glow--accent" aria-hidden="true" />

      <div className="hero-content">
        {/* Pre-title prompt */}
        <motion.p
          className="hero-pre"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          Hello, world
        </motion.p>

        {/* Name */}
        <motion.h1
          ref={ref}
          className="hero-name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
        >
          I'm{" "}
          <span className="hero-name-teal">Supawich</span>
          <br />
          <span style={{ color: 'var(--color-ink)', opacity: 0.55, fontSize: '0.55em', letterSpacing: '-0.02em', fontWeight: 600 }}>
            Sriviboonruttana
          </span>
        </motion.h1>

        {/* Message — no all-caps body copy */}
        <motion.p
          className="hero-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Front-end developer. ECT graduate. Building precise, product-grade interfaces — one keystroke at a time.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: easeOut }}
        >
          <a href="#aboutme" className="btn-ryu btn-ryu--primary" aria-label="About me section">
            About me
          </a>
          <a href="#contact" className="btn-ryu btn-ryu--ghost" aria-label="Contact section">
            Get in touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="hero-social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          {icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split("-")[1]}`}
              className="hero-icon"
            >
              <i className={`fab ${icon.image}`} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--color-muted)',
          fontSize: '0.7rem',
          fontFamily: "'Fira Code', monospace",
          letterSpacing: '0.04em',
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, var(--color-primary))',
          }}
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
        scroll
      </motion.div>
    </Jumbotron>
  );
});

export default MainBody;
