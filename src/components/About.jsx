import "../css/About.css";
import frontendImage from "../assets/web-development.svg";
import backendImage from "../assets/database.svg";
import codeImage from "../assets/code.svg";
import SkillsCard from "./SkillsCard";

function About() {
  const skills = [
    {
      id: 1,
      type: "Frontend",
      technology: "HTML",
    },
    {
      id: 2,
      type: "Frontend",
      technology: "CSS",
    },
    {
      id: 3,
      type: "Frontend",
      technology: "JavaScript",
    },
    {
      id: 4,
      type: "Frontend",
      technology: "React",
    },
    {
      id: 5,
      type: "Frontend",
      technology: "Bootstrap",
    },
    {
      id: 6,
      type: "Backend",
      technology: "NodeJS",
    },
    {
      id: 7,
      type: "Backend",
      technology: "ExpressJS",
    },
    {
      id: 8,
      type: "Backend",
      technology: "REST APIs",
    },
    {
      id: 9,
      type: "Backend",
      technology: "MongoDB",
    },
    {
      id: 10,
      type: "Backend",
      technology: "PostgreSQL",
    },
    {
      id: 11,
      type: "Other",
      technology: "C",
    },
    {
      id: 12,
      type: "Other",
      technology: "Go",
    },
    {
      id: 13,
      type: "Other",
      technology: "C#",
    },
  ];

  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];
  const backendSkills = [
    "NodeJS",
    "ExpressJS",
    "REST APIs",
    "MongoDB",
    "PostgresSQL",
  ];
  const otherSkills = ["C", "Go", "C#"];

  const images = [frontendImage, backendImage, codeImage];

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hi, my name is Pedro Moreno and I am a full-stack web developer. I
          have a Bachelor's in Computer Science and I have a growing interest in
          web development. I am self-motivated, proactive in my learning
          journey, and open to new ideas and criticism for improvement.
        </p>
      </div>
      <SkillsCard skills={skills} images={images} />
    </div>
  );
}

export default About;
