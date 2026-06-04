import React from 'react';
import { motion } from "framer-motion";

const RyuProjectCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
    >
      {/* Image — does NOT animate on hover (impeccable rule) */}
      <div className="project-card__img-wrap">
        <img
          src={data.img}
          alt={data.name}
          draggable="false"
        />
        <div className="project-card__overlay">
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ryu btn-ryu--primary"
              aria-label={`View ${data.name}`}
              style={{ fontSize: '0.85rem' }}
            >
              <i className="fas fa-external-link-alt" style={{ fontSize: '0.8em' }} />
              View project
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{data.name}</h3>
        <p className="project-card__desc">{data.info}</p>
      </div>
    </motion.div>
  );
}

export default RyuProjectCard;
