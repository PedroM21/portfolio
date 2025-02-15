import "../css/Footer.css";
import github from "../images/icons8-github.svg";
import indeed from "../images/icons8-indeed.svg";
import linkedin from "../images/icons8-linkedin.svg";

function Footer() {
  const openGithub = () => {
    window.open("https://github.com/PedroM21");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/pedro-moreno-4167541a1");
  };

  return (
    <footer>
      <div class="footer-container">
        <div className="socials">
          <h4>Socials</h4>
          <div className="icons">
            <img src={github} alt="Github" onClick={openGithub}></img>
            <img src={linkedin} alt="LinkedIn" onClick={openLinkedIn}></img>
          </div>
        </div>

        <div className="credits">
          <p>© 2025 Pedro Moreno</p>
          Icons by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
