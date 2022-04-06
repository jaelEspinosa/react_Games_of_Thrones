import "./App.css";
import HomePage from "./Pages/HomePage";
import Menu from "./Components/Menu";
import TestSergi from "./Components/TestSergi";
function App() {
  return (
    <div className="App">
      <h1>GAME OF THRONES!!!</h1>
      <HomePage></HomePage>
      <TestSergi></TestSergi>
      <Menu />
    </div>
  );
}

export default App;
