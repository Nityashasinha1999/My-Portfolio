import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Zignuts() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hey there, I am
          <span> Nityasha Sinha.</span>
        </h1>
        <p className="h-sub-text">
          An IT graduate from the class of 2020 who is passionate about web
          technologies. I've experience working through HTML5, CSS3, Bootstrap,
          JavaScript, React &amp; MongoDB. I have also basic knowledge in
          Socket.io, Express.js &amp; JWT.
        </p>
        <div className="icons">
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Zignuts;
