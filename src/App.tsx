import { Fragment } from "react";
import classes from "./App.module.css";
import About from "./Components/About/About";
// Components
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Stats from "./Components/Stats";

function App() {
  return (
    <Fragment>
      <Header />
      <section className={classes.section}>
        <Intro />
        <Stats />
        <About />
      </section>
    </Fragment>
  );
}

export default App;
