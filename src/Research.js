import React from "react";

const handleBibClick = function (el) {
  var id = el.getAttribute("aria-controls");
  var target = document.getElementById(id);
  target.classList.toggle("collapse");
};

const Research = (props) => (
  <section className="resume">
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Research</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <div className="content-grid">
              <h1 data-i18n="__MSG_RESEARCH__"></h1>
              <div className="bibtex_structure">
                <div className="group year" extra="DESC number">
                  <div style={{ paddingBottom: 10 }}></div>
                  <div className="sort journal" extra="DESC string">
                    <div className="templates"></div>
                  </div>
                </div>
              </div>
              <div id="bibtex_display">
                <div className="bibtex_template" style={{ display: "none" }}>
                  <ul>
                    <li>
                      <span className="if title">
                        <a
                          className="bibtexVar"
                          href="pdf/+BIBTEXKEY+.pdf"
                          extra="BIBTEXKEY"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            style={{ textDecoration: "underline" }}
                            className="title"
                          ></span>
                        </a>
                      </span>
                      <div className="if author">
                        <span className="author"></span>
                      </div>
                      <div>
                        <span className="if journal">
                          <em>
                            <span className="journal"></span>
                          </em>
                          ,
                        </span>
                        <span className="if publisher">
                          <em>
                            <span className="publisher"></span>
                          </em>
                          ,
                        </span>
                        <span className="if booktitle">
                          In{" "}
                          <em>
                            <span className="booktitle"></span>
                          </em>
                          ,
                        </span>
                        <span className="if address">
                          <span className="address"></span>,
                        </span>
                        <span className="if city">
                          <span className="city"></span>,
                        </span>
                        <span className="if month">
                          <span className="month"></span>,
                        </span>
                        <span className="if year">
                          <span className="year"></span>.
                        </span>
                        <span className="if note">
                          <span className="note"></span>
                        </span>
                        <a
                          onClick={handleBibClick}
                          className="bibtexVar"
                          role="button"
                          data-toggle="collapse"
                          href="javascript:undefined"
                          aria-expanded="false"
                          aria-controls="bib+BIBTEXKEY+"
                          extra="BIBTEXKEY"
                        >
                          <i
                            className="fac fa-tex fa-fw"
                            title="Open BibTeX format"
                          ></i>
                        </a>
                      </div>
                      <div
                        className="bibtexVar collapse"
                        id="bib+BIBTEXKEY+"
                        extra="BIBTEXKEY"
                      >
                        <div className="well">
                          <pre>
                            <span className="bibtexraw noread"></span>
                          </pre>
                        </div>
                      </div>
                      <div style={{ display: "none" }}>
                        <span className="bibtextype"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Research;
