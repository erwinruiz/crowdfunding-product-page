import classes from "./Stats.module.css";
import { useContext } from "react";
import { Context } from "../store/context";

function Stats() {
  const ctx = useContext(Context);

  const totalMoney = ctx.totalMoney.toLocaleString();
  const totalBackers = ctx.totalBackers.toLocaleString();
  let currentProgressBar = (ctx.totalMoney * 100) / 100000;

  if (currentProgressBar > 100) {
    currentProgressBar = 100;
  }

  return (
    <article className={classes.article}>
      <div className={classes.stats}>
        <p>
          ${totalMoney} <span>of $100,000 backed</span>
        </p>
        <div className={classes.separatorLine} />
        <p>
          {totalBackers} <span>total backers</span>
        </p>
        <div className={classes.separatorLine} />
        <p>
          56 <span>days left</span>
        </p>
      </div>
      <div className={classes.progressBar}>
        <div
          className={classes.actualProgress}
          style={{ width: `${currentProgressBar}%` }}
        />
      </div>
    </article>
  );
}

export default Stats;
