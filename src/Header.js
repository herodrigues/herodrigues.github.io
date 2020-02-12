import React from "react";

const Header = props => (
  <header
    id="home"
    style={{
      background: `#161415 url(${props.backgroundImage}) no-repeat top center`,
      backgroundSize: "cover !important"
    }}
  >
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li className="current">
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume">
            Education
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#research">
            Research
          </a>
        </li>
      </ul>
    </nav>

    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">I'm {props.name}.</h1>
        <h3>
          I'm a <span>{props.occupation}</span> currently living in {props.city}
          , {props.country} {props.description}.
        </h3>
        <hr />
        <ul className="social">
          {props.social.map(network => (
            <li key={network.name}>
              <a href={network.url}>
                <i className={network.className}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p className="scrolldown">
      <a className="smoothscroll" href="#about">
        <i className="icon-down-circle"></i>
      </a>
    </p>
  </header>
);

export default Header;
