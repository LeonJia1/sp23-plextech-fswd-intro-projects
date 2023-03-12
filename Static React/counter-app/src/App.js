import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <a>Count: {count}</a>
      <Button title = "-" task = {() => decrementCount()}/>
      <Button title = "+" task = {() => incrementCount()}/>
    </div>
  );
}

export default App;
