import classes from "./Intro.module.css";
import { Fragment, useState } from "react";
import Modal from "./UI/Modal";

function Intro() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bookmarkHandler = () => {
    setIsBookmarked((state) => !state);
  };

  const modalHandler = () => {
    setIsModalOpen((state) => !state);
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
    <Fragment>
      <article className={classes.article}>
        <img
          className={classes.logo}
          src="./images/logo-mastercraft.svg"
          alt="mastercraft logo"
        />
        <div className={classes.content}>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className={classes.actions}>
            <button onClick={modalHandler}>Back this project</button>
            {bookmark}
          </div>
        </div>
      </article>
      {isModalOpen && <Modal onCloseModal={modalHandler} />}
    </Fragment>
  );
}

export default Intro;
