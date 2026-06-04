import React from 'react';
import { motion } from "framer-motion";

const ExperienceCard = ({ data, index }) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="timeline-card">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          {/* Logo */}
          <img
            className="timeline-logo"
            src={data.companylogo}
            alt={`${data.role} company logo`}
            draggable="false"
          />

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <span className="pill pill--amber" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
              Internship
            </span>
            <p className="timeline-role" style={{ marginTop: '0.375rem' }}>{data.role}</p>
            <p className="timeline-org">{data.location}</p>

            <span className="timeline-meta" style={{ display: 'block', marginTop: '0.625rem' }}>
              <i className="far fa-calendar-alt" style={{ marginRight: '0.375rem' }} />
              {data.date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;