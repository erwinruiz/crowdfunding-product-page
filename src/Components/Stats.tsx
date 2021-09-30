import classes from "./Stats.module.css";

function Stats() {
  return (
    <article className={classes.article}>
      <div className={classes.stats}>
        <p>
          $89,914 <span>of $100,000 backed</span>
        </p>
        <div className={classes.separatorLine} />
        <p>
          5,007 <span>total backers</span>
        </p>
        <div className={classes.separatorLine} />
        <p>
          56 <span>days left</span>
        </p>
      </div>
      <div className={classes.progressBar}>
        <div className={classes.actualProgress} />
      </div>
    </article>
  );
}

export default Stats;
