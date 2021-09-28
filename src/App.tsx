import { Fragment } from "react";
import classes from "./App.module.css";
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
      </section>
    </Fragment>
  );
}

export default App;
