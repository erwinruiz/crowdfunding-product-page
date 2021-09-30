import classes from "./Product.module.css";
import { product } from "../../Helpers/types";

function Product(props: product) {
  const articleClasses = `${classes.article} ${
    props.units > 0 ? "" : classes.productOutOfStock
  }`;

  return (
    <article className={articleClasses}>
      <h3>{props.title}</h3>
      <h4>Pledge ${props.pledge} or more</h4>
      <p>{props.text}</p>
      <div className={classes.unitsLeft}>
        <p>{props.units}</p>
        <p>left</p>
      </div>
      <button
        className={`${props.units > 0 ? "" : classes.productOutOfStockBtn}`}
      >
        {props.units > 0 ? "Select Reward" : "Out of Stock"}
      </button>
    </article>
  );
}

export default Product;