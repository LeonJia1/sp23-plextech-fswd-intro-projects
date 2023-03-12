import logo from './logo.svg';
import React from 'react';
import './App.css';
import Button from './components/Button.js';
import { useState } from "react";

import Navbar from './components/Navbar';

function Food() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (

    <div className="App">
      <Navbar/>
      <header className="App-header">
        <a>Count: {count}</a>
        <a>
          <Button title = "-" task = {() => decrement()}/>
          <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <Button title = "+" task = {() => increment()}/>
        </a>
        
      </header>
    </div>
  );
}

export default Food;
