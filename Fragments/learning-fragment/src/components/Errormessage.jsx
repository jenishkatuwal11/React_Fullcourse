import PropTypes from "prop-types";
const Errormessage = ({ food }) => {
  return <>{food.length === 0 && <h3>Sorry Food is out of stock</h3>}</>;
};
Errormessage.propTypes = {
  food: PropTypes.array.isRequired, // Ensuring `food` is an array and required
};

export default Errormessage;
