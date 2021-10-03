import classes from "./RadioButton.module.css";
import { useState } from "react";

// type Props = {
//   onClick: () => void;
// };

function RadioButton() {
  const [isActive, setIsActive] = useState(false);

  const buttonHandler = () => {
    setIsActive((state) => !state);
  };

  return (
    <div className={classes.buttonContainer} onClick={buttonHandler}>
      <div className={`${isActive ? classes.buttonInside : ""}`}></div>
    </div>
  );
}

export default RadioButton;
