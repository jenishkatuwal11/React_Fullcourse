import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton} // Function passed here
      >
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
  handleBuyButton: PropTypes.func.isRequired, // Should be 'func' instead of 'string'
};

export default Item;
