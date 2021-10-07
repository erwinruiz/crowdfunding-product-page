import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from "./MobileMenu.module.css";

type Props = {
  onCloseModal: () => void;
};

function MobileMenu(props: Props) {
  const Backdrop = () => {
    return (
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
    );
  };

  const Menu = () => {
    return (
      <nav className={classes.mobileMenu}>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <Menu />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
}

export default MobileMenu;
