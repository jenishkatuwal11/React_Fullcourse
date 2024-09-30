import PropTypes from "prop-types";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((name, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

ButtonsContainer.propTypes = {
  onButtonClick: PropTypes.string.isRequired, // Expect displayValue to be a string
};

export default ButtonsContainer;
