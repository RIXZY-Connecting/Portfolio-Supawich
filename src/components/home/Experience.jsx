import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const Experience = ({ experiences }) => {
  return (
    <section
      id="experiences"
      className="section-py"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '800px' }}>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="section-heading">
            {experiences.heading}
          </h2>
          <p className="section-meta">
            // where I've worked
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.data.map((data, index) => (
            <ExperienceCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;