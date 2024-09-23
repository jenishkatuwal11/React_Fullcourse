import "./App.css";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import ClockMoto from "./components/ClockMoto";

function App() {
  return (
    <div>
      <h1>
        <ClockHeading />
        <ClockMoto />
        <CurrentTime />
      </h1>
    </div>
  );
}

export default App;
