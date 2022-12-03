import logo from './logo.svg';
import './App.css';
import { GoodButton } from "./good-button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoodButton articleID="6pEnn8YjQyGriJcdxUAhx3" />
      </header>
    </div>
  );
}

export default App;
