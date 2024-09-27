import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import Errormessage from "./components/Errormessage";
import Container from "./components/Container";
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
    <Container>
      <h1 style={{ background: "cornflowerblue" }}>Healthy Food List</h1>
      <Errormessage food={foodItems} />
      <FoodItems food={foodItems} />
    </Container>
  );
}

export default App;
