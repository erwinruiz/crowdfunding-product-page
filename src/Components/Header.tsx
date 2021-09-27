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
    </header>
  );
}

export default Header;
