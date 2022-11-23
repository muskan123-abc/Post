import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import "./App.css";
import Question from "./components/Question";

function App() {
  return (
    <div className="h-100vh">
      {" "}
      {/* <Router /> */}
      <Question />
    </div>
  );
}

export default App;
