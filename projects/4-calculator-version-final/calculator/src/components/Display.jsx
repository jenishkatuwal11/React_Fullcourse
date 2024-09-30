import PropTypes from "prop-types";
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <>
      <input
        className={styles.display}
        type="text"
        value={displayValue}
        readOnly
      />
    </>
  );
};

Display.propTypes = {
  displayValue: PropTypes.string.isRequired, // Expect displayValue to be a string
};

export default Display;
