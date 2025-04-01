import "../css/Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="text-content">
        <h1>Pedro Moreno</h1>
        <p>Graduate from The University of Texas at San Antonio</p>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Landing;
