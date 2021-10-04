import classes from "./Product.module.css";
import { product } from "../../Helpers/types";
import RadioButton from "../../UI/RadioButton";

function Product(props: product) {
  const selectProductHandler = () => {
    if (props.units > 0) {
      props.onSelectProduct!(props.id!);
    }
  };

  const articleClasses = `${classes.article} ${
    props.units > 0 ? "" : classes.productOutOfStock
  } ${props.isActive ? classes.selectedProduct : ""}`;

  return (
    <article className={articleClasses} onClick={selectProductHandler}>
      <header className={classes.header}>
        {props.isModal && <RadioButton isActive={props.isActive} />}
        {props.isModal && (
          <div>
            <h3>{props.title}</h3>
            <h4>Pledge ${props.pledge} or more</h4>
          </div>
        )}
        {!props.isModal && <h3>{props.title}</h3>}
        {!props.isModal && <h4>Pledge ${props.pledge} or more</h4>}
      </header>
      <p>{props.text}</p>
      <div className={classes.footer}>
        <div className={classes.unitsLeft}>
          {!props.isModal && <p>{props.units}</p>}
          {props.isModal && <p className={classes.unitsModal}>{props.units}</p>}
          <p>left</p>
        </div>
        {!props.isModal && (
          <button
            className={`${props.units > 0 ? "" : classes.productOutOfStockBtn}`}
          >
            {props.units > 0 ? "Select Reward" : "Out of Stock"}
          </button>
        )}
      </div>
    </article>
  );
}

export default Product;
