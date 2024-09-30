import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
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
        <button key={index} className={styles.button}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
