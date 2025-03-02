import { Link } from "react-router-dom";
import "../css/ProjectCard.css";

function ProjectCard({ data }) {
  return (
    <div className="project-card">
      <div className="project-title">
        <h4>{data.title}</h4>
      </div>
      <div className="project-desc">
        <p>{data.desc}</p>
      </div>
      <div className="project-links">
        <p>{data.technologies}</p>
        <a href={data.projLink} target="_blank">
          <button>Github</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
