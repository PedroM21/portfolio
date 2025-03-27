import "../css/ProjectsPage.css";
import { Link } from "react-router-dom";
import subTracker from "../assets/subscription-tracker.jpg";
import arkPlanner from "../assets/arknights-planner.png";
import pkmGame from "../assets/pkmgg.gif";
import Footer from "../components/Footer";
import eComSite from "../assets/e-com-site.gif";
import goGames from "../assets/go-games.gif";
import formValid from "../assets/FormValid.png";
import roguesRiches from "../assets/RoguesRiches.png";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Subscription Tracker",
      date: "March 2025",
      desc: "A subscription tracker that manages users and sends email reminders about renewal payments. Features JWT authentication, database modeling, secure API architecture, and automated workflows",
      image: subTracker,
      link: "https://github.com/PedroM21/subscription-tracker",
    },
    {
      id: 2,
      title: "Arknights Planner",
      date: "February 2025",
      desc: "A planner for the mobile game Arknights. Allows the user to search up a unit and add them to their planner and view what materials they need to upgrade them.",
      image: arkPlanner,
      link: "https://github.com/PedroM21/arknights-planner",
    },
    {
      id: 3,
      title: "Frontend E-commerce Site",
      date: "February 2025",
      desc: "An e-commerce site developed with basic HTML, CSS, and JavaScript. Features a price calculator at checkout, ability to add items to the shopping cart, and form validation.",
      image: eComSite,
      link: "https://github.com/PedroM21/E-Commerce-Site",
    },
    {
      id: 4,
      title: "Pokemon Guessing Game",
      date: "January 2025",
      desc: "A simple guessing game for fans of the pokemon franchise. Players can guess the name of the pokemon and lose life upon wrong guess.",
      image: pkmGame,
      link: "https://github.com/PedroM21/Pokemon-Guessing-Game",
    },
    {
      id: 5,
      title: "Games Create with Go",
      date: "September 2024 - December 2024",
      desc: "Simple games created using go and raylib. Features games such as breakout, an asteroid game, 2 player fighting game, and Whisteker's Adeventure",
      image: goGames,
      link: "https://github.com/PedroM21/Go-Games",
    },
    {
      id: 6,
      title: "Form Validation",
      date: "February 2024 – May 2024",
      desc: "A dynamic web page with form validation. Features secure login/register functionality and data security by using ecryption protocols.",
      image: formValid,
      link: "https://github.com/PedroM21/FormValidation",
    },
    {
      id: 7,
      title: "Rogue's Riches",
      date: "November 2023",
      desc: "A game developed with C# in the game engine Unity. Features a gameloop where the player defeats waves of enemies, selects an item, and fights a boss. The player can choose to continue their run or end it.",
      image: roguesRiches,
      link: "https://github.com/PedroM21/RoguesRiches",
    },
  ];
  return (
    <div className="project-container">
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="recent-projects">
          <div className="recent-details">
            <div className="recent-title">
              <h5>{project.title}</h5>
              <h5>{project.date}</h5>
            </div>
            <div className="recent-content">
              <p>{project.desc}</p>
              <a href={project.link} target="_blank">
                <button className="project-link-btn">Github</button>
              </a>
            </div>
            <hr className="separator"></hr>
          </div>
          <div className="showcase">
            <img src={project.image} />
          </div>
        </div>
      ))}
      <Link to="/portfolio">
        <button>Return</button>
      </Link>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
