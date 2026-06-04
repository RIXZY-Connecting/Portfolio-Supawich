import React from "react";
import { motion } from "framer-motion";

const GetInTouch = ({ heading, message, email, phone }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
    >
      <div className="contact-card">
        {/* Heading */}
        <h2 className="section-heading" id="contact" style={{ marginBottom: '1rem' }}>
          {heading}
        </h2>
        <div className="section-divider" style={{ margin: '0 auto 1.75rem' }} />

        {/* Message */}
        <p style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
          color: 'var(--color-muted)',
          lineHeight: 1.75,
          maxWidth: '48ch',
          margin: '0 auto 2rem',
        }}>
          {message}
        </p>

        {/* Contact links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <a
            href={`mailto:${email}`}
            className="contact-email-link"
            aria-label={`Send email to ${email}`}
          >
            <i className="fas fa-envelope" aria-hidden="true" />
            {email}
          </a>

          <div className="contact-phone" aria-label="Phone number">
            <i className="fas fa-phone" aria-hidden="true" />
            +66 930355882
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
