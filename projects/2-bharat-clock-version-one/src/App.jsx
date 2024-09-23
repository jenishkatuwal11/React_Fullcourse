import "./App.css";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import ClockMoto from "./components/ClockMoto";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <h1>
        <ClockHeading />
        <ClockMoto />
        <CurrentTime />
      </h1>
    </center>
  );
}

export default App;
