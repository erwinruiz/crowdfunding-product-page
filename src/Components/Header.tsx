import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img
        className={classes.brandLogo}
        src="./images/logo.svg"
        alt="brand logo"
      />
      <img
        className={classes.menuIcon}
        src="./images/icon-hamburger.svg"
        alt="hamburger icon"
      />
      <nav className={classes.navMenu}>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
