import "../css/HomePage.css";
import Landing from "../components/Landing";
import About from "../components/About";
import RecentProjects from "../components/RecentProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home-page">
      <div className="landing-section">
        <Landing />
      </div>

      <div id="about" className="about-section">
        <About />
      </div>

      <div id="projects" className="project-section">
        <RecentProjects />
      </div>

      <div id="contact" className="contact-section">
        <Contact />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
