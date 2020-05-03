import React from "react";

const Education = (props) => (
  <section className="resume">
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {props.education.map((education) => (
              <div key={education.school}>
                <h3>{education.school}</h3>
                <p className="info">
                  {education.degree} <span>&bull;</span>
                  <em className="date">{education.graduated}</em>
                </p>
                <p>{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
