function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "21/10/2024";
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

export default TodoItem1;
