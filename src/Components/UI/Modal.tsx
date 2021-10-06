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
  const [acceptPledge, setAcceptPledge] = useState(false);

  const selectProductHandler = (id: number) => {
    setIsActive(id);
  };

  const enterPledgeHandler = () => {
    setAcceptPledge(true);
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
            <p className={classes.productText}>
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
                  <button onClick={enterPledgeHandler}>Continue</button>
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
              onEnterPledge={enterPledgeHandler}
            />
          ))}
        </div>
      </article>
    );
  };

  const ThankYouMessage = () => {
    return (
      <article className={`${classes.modal} ${classes.thankYouMessage}`}>
        <img src="./images/icon-check.svg" alt="check icon" />
        <h2>Thanks for your support!</h2>
        <p className={classes.modalTextContent}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={props.onCloseModal}>Got it!</button>
      </article>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {!acceptPledge &&
        ReactDOM.createPortal(
          <Modal />,
          document.getElementById("overlay-root")!
        )}
      {acceptPledge &&
        ReactDOM.createPortal(
          <ThankYouMessage />,
          document.getElementById("overlay-root")!
        )}
    </Fragment>
  );
}

export default Modal;
