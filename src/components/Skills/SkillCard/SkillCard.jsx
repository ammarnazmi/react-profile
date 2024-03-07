import "./SkillCard.css";

export default function SkillCard({ title, icon, isActive, onClick }) {
  return (
    <div
      className={`skills-card ${isActive ? "active" : undefined}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <i className={icon}></i>
      </div>

      <span>{title}</span>
    </div>
  );
}