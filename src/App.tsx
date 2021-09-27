import { Fragment } from "react";
import classes from "./App.module.css";
// Components
import Header from "./Components/Header";
import Intro from "./Components/Intro";

function App() {
  return (
    <Fragment>
      <Header />
      <section className={classes.section}>
        <Intro />
      </section>
    </Fragment>
  );
}

export default App;
