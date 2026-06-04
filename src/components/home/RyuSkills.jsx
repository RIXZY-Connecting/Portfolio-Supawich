import React from 'react';
import RyuSkillsCard from "./RyuSkillsCard";
import { motion } from "framer-motion";

const RyuSkills = ({ ryuskills }) => {
  return (
    <section id="ryuskills" className="section-py" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
      <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '1100px' }}>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="section-heading">
            {ryuskills.heading}
          </h2>
          <p className="section-meta">
            // tools I work with
          </p>
        </motion.div>

        <div className="skills-grid">
          {ryuskills.data.map((data, index) => (
            <RyuSkillsCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RyuSkills;