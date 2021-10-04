import classes from "./RadioButton.module.css";

type Props = {
  isActive?: boolean;
};

function RadioButton(props: Props) {
  const { isActive } = props;
  return (
    <div className={classes.buttonContainer}>
      <div className={`${isActive ? classes.buttonInside : ""}`}></div>
    </div>
  );
}

export default RadioButton;
