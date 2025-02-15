import "../css/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="name">
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

export default Home;
