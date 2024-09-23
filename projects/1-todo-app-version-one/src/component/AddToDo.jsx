function AddToDo() {
  return (
    <div className="container text-center">
      <div className="row new-row">
        <div className="col-6">
          <input type="text" placeholder="Write your notes" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success new-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
