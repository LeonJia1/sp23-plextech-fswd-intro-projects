import logo from './logo.svg';
import React from 'react';
import './App.css';
import Button from './components/Button.js';
import { useState } from "react";

import Navbar from './components/Navbar';

function Home() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (

    <div className="App">
      <Navbar></Navbar>
      <a>HOME</a>
    </div>
  );
}

export default Home;
