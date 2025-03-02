import "../css/ProjectDisplay.css";
import proj1 from "../images/arknights-planner.png";
import proj2 from "../gifs/pkmgg.gif";
import proj3 from "../gifs/e-com-site.gif";
import { useState } from "react";

function ProjectDisplay() {
  const [currentProject, setCurrentProject] = useState(1);

  const projectShown = [
    {
      id: 1,
      title: "Arknights Planner",
      desc: "A planner for the mobile game Arknights. Allows the user to search up a unit and add them to their planner and view what materials they need to upgrade them.",
      image: proj1,
      link: "https://github.com/PedroM21/arknights-planner",
    },
    {
      id: 2,
      title: "Pokemon Guessing Game",
      desc: "A simple guessing game for fans of the pokemon franchise. This project helped me learn how to get specific data from an API. I implemented features to make the game more engaging such as a score and life tracker. The player is able to reset the game upon losing.",
      image: proj2,
      link: "https://github.com/PedroM21/Pokemon-Guessing-Game",
    },
    {
      id: 3,
      title: "E-Commerce-Site",
      desc: "I wanted to challenge myself by designing and developing a front-end e-commerce website. My main goals were to have a consistent design, incorporate interactive features, and create my own validated forms. This project helped strengthen my knowledge of HTML and CSS, while giving me a deeper understanding of JavaScript.",
      image: proj3,
      link: "https://github.com/PedroM21/E-Commerce-Site",
    },
  ].filter(Boolean);

  const activeProject = projectShown.find(
    (project) => project.id === currentProject
  );

  return (
    <div className="project-display-container">
      <div className="proj-display-title">
        {projectShown.map((project) => (
          <h1
            key={project.id}
            onClick={() => setCurrentProject(project.id)}
            className={currentProject === project.id ? "active" : ""}
          >
            {project.title}
          </h1>
        ))}
      </div>
      <div className="proj-display-content">
        {activeProject && (
          <>
            <img src={activeProject.image} alt={activeProject.title} />
            <p className="active">{activeProject.desc}</p>
            <a href={activeProject.link} target="_blank">
              <button className="project-link-btn">Github</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
