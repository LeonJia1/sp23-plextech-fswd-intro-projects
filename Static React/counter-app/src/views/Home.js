import React from 'react';
import './Home.css';
import Button from '../components/Button.js';
import { useState } from "react";

import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
    </div>
  );
}

export default Home;
