import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
  handleBuyButton: PropTypes.string.isRequired,
};

export default Item;
