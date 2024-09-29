import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import Errormessage from "./components/Errormessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let textStateArr =  useState("Food Item enter by User ")
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState(["Pulses", "Green-Vegies", "Milk"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <h1 style={{ background: "cornflowerblue" }}>Healthy Food List</h1>
      <FoodInput handleKeyDown={onKeyDown} />
      <FoodItems food={foodItems} />
      <Errormessage food={foodItems} />
    </Container>
  );
}

export default App;
