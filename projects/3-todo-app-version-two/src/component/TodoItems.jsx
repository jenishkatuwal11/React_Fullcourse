import PropTypes from "prop-types";
import TodoItem from "./TodoItem"; // Ensure this is properly imported

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TodoItems;
