import AddToDo from "./component/AddToDo";
import AppName from "./component/AppName";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
