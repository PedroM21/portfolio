import "../css/RecentProjects.css";
import subTracker from "../assets/subscription-tracker.jpg";
import arkPlanner from "../assets/arknights-planner.png";
import nuzTracker from "../assets/NuzLockeTracker.png";

function RecentProjects() {
  const recentProjects = [
    {
      id: 1,
      title: "Pokemon NuzLocke Tracker",
      date: "April 2025",
      desc: "The application assists users in managing their Pokémon Nuzlocke challenges by tracking their various runs and the Pokémon they catch during each playthrough.",
      image: nuzTracker,
      link: "https://github.com/PedroM21/Nuzlocke-Tracker",
    },
    {
      id: 2,
      title: "Subscription Tracker",
      date: "March 2025",
      desc: "A subscription tracker that manages users and sends email reminders about renewal payments. Features JWT authentication, database modeling, secure API architecture, and automated workflows",
      image: subTracker,
      link: "https://github.com/PedroM21/subscription-tracker",
    },
    {
      id: 3,
      title: "Arknights Planner",
      date: "February 2025",
      desc: "A planner for the mobile game Arknights. Allows the user to search up a unit and add them to their planner and view what materials they need to upgrade them.",
      image: arkPlanner,
      link: "https://github.com/PedroM21/arknights-planner",
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
