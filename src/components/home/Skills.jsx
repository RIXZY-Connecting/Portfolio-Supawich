import React, { useState } from "react";
import SkillsTab from "./SkillsTab";
import { motion } from "framer-motion";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const [activeTab, setActiveTab] = useState("hard");

  return (
    <section ref={ref} id="skills" className="py-20 relative z-10 bg-[#070F2B]/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9290C3] to-[#ff7f7f]">
            {heading}
          </h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto bg-[#1B1A55]/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="flex justify-center mb-8 border-b border-white/10 pb-4">
            <div className="flex space-x-4 bg-black/20 p-1 rounded-full">
              <button
                onClick={() => setActiveTab("hard")}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "hard" 
                    ? "bg-gradient-to-r from-[#9290C3] to-[#ff7f7f] text-white shadow-lg" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab("soft")}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "soft" 
                    ? "bg-gradient-to-r from-[#9290C3] to-[#ff7f7f] text-white shadow-lg" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Soft Skills
              </button>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === "hard" ? (
              <motion.div
                key="hard"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SkillsTab skills={hardSkills} isScrolled={true} />
              </motion.div>
            ) : (
              <motion.div
                key="soft"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SkillsTab skills={softSkills} isScrolled={true} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
