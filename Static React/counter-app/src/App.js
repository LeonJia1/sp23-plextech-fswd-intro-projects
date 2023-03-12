import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <a>Count: {count}</a>
        <a>
          <Button title = "-" task = {() => decrement()}/>
          <Button title = "+" task = {() => increment()}/>
        </a>
        
      </header>
    </div>
  );
}

export default App;
