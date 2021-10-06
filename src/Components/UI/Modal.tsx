import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { products } from "../../db";
import Product from "../About/Products/Product";
import RadioButton from "./RadioButton";
import { useState } from "react";

type Props = {
  onCloseModal: () => void;
};

function Modal(props: Props) {
  const [isActive, setIsActive] = useState(0);

  const selectProductHandler = (id: number) => {
    setIsActive(id);
  };

  const Backdrop = () => {
    return (
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
    );
  };

  const Modal = () => {
    return (
      <article className={classes.modal}>
        <header className={classes.modalHeader}>
          <h2>Back this project</h2>
          <img
            onClick={props.onCloseModal}
            src="./images/icon-close-modal.svg"
            alt="close icon"
          />
        </header>
        <p className={classes.modalTextContent}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className={classes.products}>
          <article
            onClick={() => selectProductHandler(4)}
            className={`${isActive === 4 ? classes.selectedProduct : ""}`}
          >
            <header>
              <RadioButton isActive={isActive === 4 ? true : false} />
              <h3>Pledge with no reward</h3>
            </header>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
            {isActive === 4 && <div className={classes.hr} />}
            {isActive === 4 && (
              <div className={classes.enterYourPledge}>
                <p>Enter your pledge</p>
                <div className={classes.actions}>
                  <div className={classes.inputContainer}>
                    <i className="fas fa-dollar-sign"></i>
                    <input type="number" />
                  </div>
                  <button>Continue</button>
                </div>
              </div>
            )}
          </article>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              pledge={product.pledge}
              text={product.text}
              units={product.units}
              isModal={true}
              onSelectProduct={selectProductHandler}
              isActive={isActive === product.id ? true : false}
            />
          ))}
        </div>
      </article>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
}

export default Modal;
