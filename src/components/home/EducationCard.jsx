import React from 'react';
import { motion } from "framer-motion";

const EducationCard = ({ data, index }) => {
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
            alt={`${data.role} logo`}
            draggable="false"
          />

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="timeline-role">{data.role}</p>
            <p className="timeline-org">
              {data.level} · {data.department}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <span className="timeline-meta">
                <i className="far fa-calendar-alt" style={{ marginRight: '0.375rem' }} />
                {data.date}
              </span>
              {data.gpa && (
                <span className="pill pill--teal">
                  GPA {data.gpa}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EducationCard;
