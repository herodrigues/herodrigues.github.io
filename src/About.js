import React from "react";

const About = props => (
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
              <a href={props.resumeDownload} className="button">
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
