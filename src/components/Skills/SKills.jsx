import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import { useState } from "react";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  function handleSelectSkill(data) {
    setSelectedSkill(data);
  }

  return (
    <section id="#skills" className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}
