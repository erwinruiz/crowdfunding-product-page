import classes from "./Header.module.css";
import { useState } from "react";
import MobileMenu from "./UI/MobileMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMobileMenuOpen((state) => !state);
  };

  return (
    <header
      className={`${classes.header} ${
        isMobileMenuOpen ? classes.mobileMenuActive : ""
      }`}
    >
      <img
        className={classes.brandLogo}
        src="./images/logo.svg"
        alt="brand logo"
      />
      {!isMobileMenuOpen && (
        <img
          className={classes.menuIcon}
          src="./images/icon-hamburger.svg"
          alt="hamburger icon"
          onClick={menuHandler}
        />
      )}
      {isMobileMenuOpen && (
        <img
          className={classes.menuIcon}
          src="./images/icon-close-menu.svg"
          alt="hamburger icon"
          onClick={menuHandler}
        />
      )}
      <nav className={classes.navMenu}>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
      {isMobileMenuOpen && <MobileMenu onCloseModal={menuHandler} />}
    </header>
  );
}

export default Header;
