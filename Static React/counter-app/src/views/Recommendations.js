import React from 'react';
import './Recommendations.css';
import Button from '../components/Button.js';
import { useState } from "react";

import Navbar from '../components/Navbar';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function Recommendations() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <Stack>
      <Navbar/>
      <div className="App-header">
        
        <header>
          <a> RECOMMENDATIONS HERE </a>
        </header>
      </div>
    </Stack>
  );
}

export default Recommendations;
