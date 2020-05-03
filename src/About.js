import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

library.add(faDownload);

const About = (props) => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img
          className="profile-pic"
          src={props.profileImage}
          alt="Tim Baker Profile Pic"
        />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>

        <p>{props.bio}</p>
        <div className="row">
          <div className="columns download">
            <p>
              <a href={props.resumeDownload} className="button" target="_blank">
                <FontAwesomeIcon icon={faDownload} />
                &nbsp; Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
