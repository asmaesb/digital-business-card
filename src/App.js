import me from "./images/hh.jpg";
import twit from "./images/TwitterIcon.png";
import fb from "./images/FacebookIcon.png";
import ig from "./images/InstagramIcon.png";
import git from "./images/GitHubIcon.png";
import lin from "./images/linkedin.png";
import mail from "./images/Mail.png";

export default function App() {
  return (
    <div className="MainBody">
      <img src={me} className="personal-Photo" />
      <h1 className="MyName">Asmae Sabab</h1>
      <p className="JobTitile">Software Engineer</p>
      <a className="Website" href="#">
        website
      </a>
      <br />

      <div className="Buttons">
        <button className="eml">
          <img src={mail} />
          Email
        </button>
        <button className="lnkd">
          <img src={lin} />
          LinkedIn
        </button>
      </div>

      <div>
        <h3 className="titles">About</h3>
        <p className="texts">
          A student in my fourth year of a software engineering degree, looking
          for an internship in software development. Quite adaptable, curious
          and passionate about problem solving and technology. Enthusiastic
          about cloud and virtualization.
        </p>
      </div>

      <div>
        <h3 className="titles">Interests</h3>
        <p className="texts">
          I like to draw, Hang out with friends, Listen to music and go for long
          walks alone.
        </p>
      </div>

      <div className="socials">
        <a className="icons" href="#">
          <img src={twit} />
        </a>
        <a className="icons" href="#">
          <img src={fb} />
        </a>
        <a className="icons" href="#">
          <img src={ig} />
        </a>
        <a className="icons" href="#">
          <img src={git} />
        </a>
      </div>
    </div>
  );
}
