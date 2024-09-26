import PropTypes from "prop-types";
function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row new-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger new-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
};

export default TodoItem;
