import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import Errormessage from "./components/Errormessage";
function App() {
  let foodItems = [
    "Daal",
    "Green-Vegies",
    "Milk",
    "Egg",
    "Bread",
    "Ghee",
    "Chiken",
    "Mutton",
    "Saag",
    "Kalo Daal",
  ];
  return (
    <>
      <h1>Healthy Food List</h1>
      <Errormessage food={foodItems} />
      <FoodItems food={foodItems} />
    </>
  );
}

export default App;
