import PropTypes from "prop-types";
const Item = ({ foodItem }) => {
  return (
    <>
      <li className="list-group-item">{foodItem}</li>
    </>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
};

export default Item;
