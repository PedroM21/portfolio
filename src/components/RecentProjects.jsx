import "../css/RecentProjects.css";
import subTracker from "../assets/subscription-tracker.jpg";
import arkPlanner from "../assets/arknights-planner.png";
import pkmGame from "../assets/pkmgg.gif";

function RecentProjects() {
  const recentProjects = [
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
      title: "Pokemon Guessing Game",
      date: "January 2025",
      desc: "A simple guessing game for fans of the pokemon franchise. Players can guess the name of the pokemon and lose life upon wrong guess.",
      image: pkmGame,
      link: "https://github.com/PedroM21/Pokemon-Guessing-Game",
    },
  ];

  return (
    <div className="recent-container">
      <h1>Recent Projects</h1>
      {recentProjects.map((project) => (
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
    </div>
  );
}

export default RecentProjects;
