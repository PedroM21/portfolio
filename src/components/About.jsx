import "../css/About.css";

function About() {
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
    <>
      <div className="about-me-container">
        <div className="about-me">
          <h2>Get to Know Me</h2>
          <p>
            I am a UTSA graduate. I have a Bachelor's in Computer Science and I
            have a growing interest in web development and game development. A
            few notable courses I have taken so far include software
            engineering, web technologies, cloud computing, user interfaces, and
            game development.
          </p>
          <a href="#contact">
            <button>Contact </button>
          </a>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="button-container">
            {mySkills.map((skill, index) => (
              <button key="index">{skill}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
