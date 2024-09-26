import AddToDo from "./component/AddToDo";
import AppName from "./component/AppName";
import TodoItems from "./component/TodoItems"; // Make sure the path is correct
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "21/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "26/10/2024",
    },
    {
      name: "Meet Friend",
      dueDate: "26/10/2024",
    },
    {
      name: "Take FYP notes",
      dueDate: "26/10/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      {/* Pass the todoItems array as props */}
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
