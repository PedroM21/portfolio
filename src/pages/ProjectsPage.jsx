import ProjectCard from "../components/ProjectCard";
import "../css/ProjectsPage.css";
import { Link } from "react-router-dom";

function ProjectsPage() {
  const projectData = [
    {
      id: 1,
      title: "Arknights Planner",
      desc: "A planner for the mobile game Arknights. Allows the user to search up a unit and add them to their planner and view what materials they need to upgrade them.",
      technologies: "#HTML #CSS #REACT",
      projLink: "https://github.com/PedroM21/arknights-planner",
    },
    {
      id: 2,
      title: "Pokemon Guessing Game",
      desc: "A guessing game utilizing the sprites from the Pokemon API. The game tracks the user's life and their current score.",
      technologies: "#HTML #CSS #JAVASCRIPT",
      projLink: "https://github.com/PedroM21/Pokemon-Guessing-Game",
    },
    {
      id: 3,
      title: "Go Games",
      desc: "A collection of small games I created using go and raylib.",
      technologies: "#GO #RAYLIB",
      projLink: "https://github.com/PedroM21/Go-Games",
    },
    {
      id: 4,
      title: "E-Commerce-Site",
      desc: "An e-commerce-site with the theme being trading card products. Was built and designed for front-end only. A future update will populate the site with data.",
      technologies: "#HTML #CSS #JAVASCRIPT",
      projLink: "https://github.com/PedroM21/E-Commerce-Site",
    },
    {
      id: 5,
      title: "Form Validation",
      desc: "A class project that had us create form validation so the user can create an account. I also had to implement encryption methods to keep sensitive data secure.",
      technologies: "#HTML #CSS #PHP #JAVASCRIPT ",
      projLink: "https://github.com/PedroM21/FormValidation",
    },
  ];

  return (
    <div className="project-page">
      <h1>Projects</h1>
      <div className="project-content">
        {projectData.map((data) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </div>
      <Link to="/portfolio">
        <button className="return-btn">Return</button>
      </Link>
    </div>
  );
}

export default ProjectsPage;
