import PropTypes from "prop-types";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Items"
        className={styles.foodInput}
        onChange={handleOnChange}
      />
    </div>
  );
};

FoodInput.propTypes = {
  handleOnChange: PropTypes.string.isRequired,
};
export default FoodInput;
