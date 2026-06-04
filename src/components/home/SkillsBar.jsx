import React from "react";
import { motion } from "framer-motion";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium tracking-wide">{skill}</span>
        <span className="text-[#ff7f7f] font-semibold">{value}%</span>
      </div>
      <div className="w-full h-3 bg-[#1B1A55]/50 border border-white/5 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#9290C3] to-[#ff7f7f] rounded-full shadow-[0_0_10px_rgba(255,127,127,0.5)]"
        />
      </div>
    </div>
  );
}

export default SkillsBar;
