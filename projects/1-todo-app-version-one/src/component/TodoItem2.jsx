function TodoItem2() {
  let todoName = "Go To College";
  let todoDate = "22/09/2024";
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

export default TodoItem2;
