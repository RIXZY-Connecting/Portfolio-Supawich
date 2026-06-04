import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer-ryu">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {props.children}

        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ margin: 0 }}>
            Crafted with{" "}
            <i className="fas fa-heart" style={{ color: 'oklch(0.68 0.130 188)', margin: '0 0.25rem' }} aria-hidden="true" />
            by{" "}
            <a
              href="https://github.com/RIXZY-Connecting"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              RIXZY-Connecting
            </a>
          </p>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-muted)', fontFamily: "'Fira Code', monospace" }}>
            React · Vite ·{" "}
            <span style={{ color: 'oklch(0.68 0.130 188)' }}>@{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
