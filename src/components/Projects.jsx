import "../css/Projects.css";
import github from "../images/github.png";

function Projects({
  projImage1,
  projImage2,
  proj1Title,
  proj2Title,
  proj1Desc,
  proj2Desc,
  proj1Tech,
  proj2Tech,
  proj1Link,
  proj2Link,
}) {
  const openProj1 = () => {
    window.open(`${proj1Link}`);
  };

  const openProj2 = () => {
    window.open(`${proj2Link}`);
  };

  return (
    <div className="projects-page-container">
      <div className="style-one-container">
        <div className="project-one-portrait">
          <img src={projImage1} alt={proj1Title}></img>
        </div>
        <div className="project-one-container">
          <h2>{proj1Title}</h2>
          <div className="card-one">
            <p>{proj1Desc}</p>
          </div>
          <h4>{proj1Tech}</h4>
          <img src={github} alt="Github" onClick={openProj1} />
        </div>
      </div>

      <div className="style-two-container">
        <div className="project-two-container">
          <h2>{proj2Title}</h2>
          <div className="card-two">
            <p>{proj2Desc}</p>
          </div>
          <h4>{proj2Tech}</h4>
          <img src={github} alt="Github" onClick={openProj2} />
        </div>
        <div className="project-two-portrait">
          <img src={projImage2} alt={proj2Title}></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
