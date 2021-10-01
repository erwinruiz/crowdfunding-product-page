import classes from "./Intro.module.css";
import { useState } from "react";

function Intro() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkHandler = () => {
    setIsBookmarked((state) => !state);
  };

  let bookmark;
  if (isBookmarked) {
    bookmark = (
      <div
        className={`${classes.bookmark} ${classes.bookmarkedContainer}`}
        onClick={bookmarkHandler}
      >
        <img src="./images/icon-bookmarked.svg" alt="bookmark icon" />
        <p className={classes.bookmarkedText}>Bookmarked</p>
      </div>
    );
  } else {
    bookmark = (
      <div className={classes.bookmark} onClick={bookmarkHandler}>
        <img src="./images/icon-bookmark.svg" alt="bookmark icon" />
        <p>Bookmark</p>
      </div>
    );
  }

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
          {bookmark}
        </div>
      </div>
    </article>
  );
}

export default Intro;
