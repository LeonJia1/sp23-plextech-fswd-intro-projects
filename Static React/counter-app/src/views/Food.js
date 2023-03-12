import React from 'react';
import './Food.css';
import Button from '../components/Button.js';
import { useState } from "react";
import Category from '../components/Category.js';

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

function Food() {

  return (
    <Stack>
      <Navbar/>
      <div className="App-header">
        <Stack spacing = "1px" justify="center" align="center">
          <br></br>
          <br></br>
          <Heading>Categories Available</Heading>
          <SimpleGrid columns={{ base: "1", md: "3" }} spacing="10px">
            <Category name = "pizza" price = "5"/>
            <Category name = "apples" price = "3"/>
            <Category name = "bananas" price = "2"/>
          </SimpleGrid>
        </Stack>
      </div>
    </Stack>
    
  );
}

export default Food;
