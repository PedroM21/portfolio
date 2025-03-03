import Home from "../components/Home";
import AboutSkills from "../components/AboutSkills";
import ProjectDisplay from "../components/ProjectDisplay";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

function HomePage() {
  return (
    <>
      <div id="home" className="home-section">
        <Home />
        <a href="#about">
          <div className="scroll-down"></div>
        </a>
      </div>

      <div id="about" className="about-section">
        <div className="about-content">
          <h1 className="section-header">About</h1>
          <p className="summary-text">
            Hi, my name is Pedro Moreno and I am a new front-end web developer.
            I have a Bachelor's in Computer Science and I have a growing
            interest in web development. I am self-motivated, proactive in my
            learning journey, and open to new ideas and criticism for
            improvement. A few notable courses I have taken so far include
            software engineering, web technologies, cloud computing, user
            interfaces, and game development.
          </p>
        </div>

        <div className="about-skills-container">
          <h1>Skills</h1>
          <AboutSkills />
        </div>
        <a href="#projects">
          <div className="scroll-down"></div>
        </a>
      </div>

      <div className="projects-section">
        <h1 id="projects" className="section-header">
          Projects
        </h1>
        <ProjectDisplay />
        <Link to="/portfolio/ProjectsPage">
          <button className="more-projects">View All</button>
        </Link>
        <a href="#contact">
          <div className="scroll-down"></div>
        </a>
      </div>

      <div className="contact-section">
        <h1 id="contact" className="section-header">
          Contact Me
        </h1>
        <Contact id="contact" />
        <a href="#home">
          <div className="scroll-down"></div>
        </a>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
