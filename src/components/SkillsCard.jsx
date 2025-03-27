import "../css/SkillsCard.css";

function SkillsCard({ skills, images }) {
  const categorized = {
    Frontend: skills.filter((skill) => skill.type === "Frontend"),
    Backend: skills.filter((skill) => skill.type === "Backend"),
    Other: skills.filter((skill) => skill.type === "Other"),
  };

  return (
    <div className="skills-container">
      {/* Frontend */}

      <div className="skills-card">
        <div className="skills-image">
          <img src={images[0]} alt="Frontend" />
        </div>
        <div className="card-content">
          <h2>Frontend</h2>
          <ul>
            {categorized.Frontend.map((skill) => (
              <li key={skill.id}>{skill.technology}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backend */}

      <div className="skills-card">
        <div className="skills-image">
          <img src={images[1]} alt="Frontend" />
        </div>
        <div className="card-content">
          <h2>Backend</h2>
          <ul>
            {categorized.Backend.map((skill) => (
              <li key={skill.id}>{skill.technology}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Other */}

      <div className="skills-card">
        <div className="skills-image">
          <img src={images[2]} alt="Frontend" />
        </div>
        <div className="card-content">
          <h2>Other</h2>
          <ul>
            {categorized.Other.map((skill) => (
              <li key={skill.id}>{skill.technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
