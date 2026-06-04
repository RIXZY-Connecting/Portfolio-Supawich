import React from 'react';
import { motion } from "framer-motion";

const RyuSkillsCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="skill-card"
    >
      <img src={data.img} alt={data.text} draggable="false" />
      <span>{data.text}</span>
    </motion.div>
  );
}

export default RyuSkillsCard;
