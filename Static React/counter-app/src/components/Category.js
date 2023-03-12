import React from 'react';
import Button from './Button.js';
import { useState } from 'react';

function Category({name, price}) {
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
            <a>Name: {name}</a>
            <a>Price: {price}</a>
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

export default Category;