import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import proj1 from "./gifs/pkmgg.gif";
import proj2 from "./gifs/e-com-site.gif";
import proj3 from "./images/FormValid.png";
import proj4 from "./gifs/go-games.gif";

function App() {
  return (
    <>
      <Home />
      <h1 id="about" className="section-header">
        About
      </h1>
      <p class="summary-text">
        Hi, my name is Pedro Moreno and I am looking to be a front-end web
        developer.
      </p>
      <About />
      <h1 id="projects" className="section-header">
        Projects
      </h1>
      <Projects
        id="projects"
        projImage1={proj1}
        projImage2={proj2}
        proj1Title="Pokemon Guessing Game"
        proj2Title="E-Commerce-Site"
        proj1Desc="A simple guessing game for fans of the pokemon franchise. This
                    project helped me learn how to get specific data from an API. I
                    implemented features to make the game more engaging such as a
                    score and life tracker and a button the player can press to
                    receive a hint. The player can also reset the game upon losing to
                    try again."
        proj2Desc="I wanted to challenge myself by designing and devloping a
                    front-end e-commerce website. My main goals were to have a
                    consistent design, incorporate interactive features, and create my
                    own validated forms. This project helped strengthen my
                    knowledge of HTML and CSS, while giving me a deeper understanding
                    of JavaScript."
        proj1Tech="Technologies: HTML, CSS, JavaScript"
        proj2Tech="Technologies: HTML, CSS, JavaScript"
        proj1Link="https://github.com/PedroM21/Pokemon-Guessing-Game"
        proj2Link="https://github.com/PedroM21/E-Commerce-Site"
      />

      <Projects
        projImage1={proj3}
        projImage2={proj4}
        proj1Title="Form Validation"
        proj2Title="Go Games"
        proj1Desc="This was a project for my web technologies class. 
                    We developed a dynamic, user-friendly web page with smooth navigation. 
                    We also implemented secure login/register functionality, allowing users to create accounts. 
                    To ensure data security we integrated encryption protocols for sensitive data."
        proj2Desc="A collection of small game projects I have worked on using Go and Raylib.
                    Although the games are simple, they helped me learn go faster and deepened my understanding
                    of certain key coding concepts like pointers, as well as the importance of clean, modular, and reusable code."
        proj1Tech="Technologies: HTML, CSS, JavaScript"
        proj2Tech="Technologies: Go, Raylib"
        proj1Link="https://github.com/PedroM21/FormValidation"
        proj2Link="https://github.com/PedroM21/Go-Games"
      />
      <h1 id="contact" className="section-header">
        Contact Me
      </h1>
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
