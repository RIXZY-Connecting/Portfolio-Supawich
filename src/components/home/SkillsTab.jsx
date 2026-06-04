import React from "react";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill.name}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </div>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 w-full mt-8">
      <SkillsSection
        skills={skills.slice(0, Math.ceil(skills.length / 2))}
        isScrolled={isScrolled}
      />
      <SkillsSection
        skills={skills.slice(Math.ceil(skills.length / 2), skills.length)}
        isScrolled={isScrolled}
      />
    </div>
  );
}

export default SkillsTab;
