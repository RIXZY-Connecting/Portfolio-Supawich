import React from 'react';
import RyuProjectCard from "./RyuProjectCard";
import { motion } from "framer-motion";

const RyuProject = ({ ryuprojects }) => {
  return (
    <section id="ryuprojects" className="section-py">
      <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '1100px' }}>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="section-heading">
            {ryuprojects.heading}
          </h2>
          <p className="section-meta">
            // {ryuprojects.data.length} selected projects
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {ryuprojects.data.map((data, index) => (
            <RyuProjectCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RyuProject;
