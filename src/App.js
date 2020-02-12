import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Education from "./Education";
import Research from "./Research";

import data from "./resume.json";

const App = props => (
  <div className="App">
    <Header {...data} />
    <About {...data} />
    <Education {...data} />
    <Research {...data} />
    <Footer {...data} />
  </div>
);

export default App;
