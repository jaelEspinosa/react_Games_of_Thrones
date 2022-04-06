import "./App.css";
import HomePage from "./Pages/HomePage";
import Menu from './Components/Menu'
import TestPrueba from "./Components/TestPrueba";
function App() {
  return (
    <div className="App">
      <h1>GAME OF THRONES!!!</h1>
      <HomePage></HomePage>
      <Menu />
      <TestPrueba />
    </div>
  );
}

export default App;
