import Item from "./item";
import PropTypes from "prop-types";

const FoodItems = ({ food }) => {
  return (
    <ul className="list-group">
      {food.map((item, index) => (
        <Item key={index} foodItem={item} />
      ))}
    </ul>
  );
};
FoodItems.propTypes = {
  food: PropTypes.array.isRequired, // Ensuring `food` is an array and required
};

export default FoodItems;
