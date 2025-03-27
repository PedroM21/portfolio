import "../css/Footer.css";
import github from "../assets/icons8-github.svg";
import linkedin from "../assets/icons8-linkedin.svg";

function Footer() {
  const openGithub = () => {
    window.open("https://github.com/PedroM21");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/pedro-moreno-4167541a1");
  };

  return (
    <div className="footer">
      <div className="socials">
        <p>Socials</p>
        <img src={github} alt="Github" onClick={openGithub}></img>
        <img src={linkedin} alt="Github" onClick={openLinkedIn}></img>
      </div>

      <p>Developed by Pedro Moreno</p>
    </div>
  );
}

export default Footer;
