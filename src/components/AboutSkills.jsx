import "../css/AboutSkills.css";

function AboutSkills() {
  const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Go",
    "React",
    "C",
    "Bootstrap",
    "Teamwork",
    "Organization",
    "Communication",
  ];

  return (
    <div className="skills-container">
      <div className="skills">
        {mySkills.map((skills, index) => (
          <h1 key={index}>{skills}</h1>
        ))}
      </div>
    </div>
  );
}

export default AboutSkills;
