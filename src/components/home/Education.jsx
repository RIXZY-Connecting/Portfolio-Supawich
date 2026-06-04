import React from 'react';
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

const Education = ({ education }) => {
  return (
    <section id="education" className="section-py">
      <div className="container mx-auto px-4 md:px-8" style={{ maxWidth: '800px' }}>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="section-heading">
            {education.heading}
          </h2>
          <p className="section-meta">
            // academic background
          </p>
        </motion.div>

        <div className="timeline">
          {education.data.map((data, index) => (
            <EducationCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;