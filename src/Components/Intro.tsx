import classes from "./Intro.module.css";

function Intro() {
  return (
    <article className={classes.article}>
      <img
        className={classes.logo}
        src="./images/logo-mastercraft.svg"
        alt="mastercraft logo"
      />
      <div className={classes.content}>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className={classes.actions}>
          <button>Back this project</button>
          <div className={classes.bookmark}>
            <img src="./images/icon-bookmark.svg" alt="bookmark icon" />
            <p>Bookmark</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Intro;
