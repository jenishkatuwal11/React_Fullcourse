import PropTypes from "prop-types";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Items"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

FoodInput.propTypes = {
  handleKeyDown: PropTypes.func.isRequired,
};
export default FoodInput;
