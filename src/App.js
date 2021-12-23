import React, { useState, useEffect } from 'react';

import {getRandomColor} from './helpers.js'
import './style.css';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function onClick1() {
    setTimeout(() => setNum1(num1 + 1), 1000);
  }
  function onClick2() {
    setTimeout(() => setNum2(num2 + 1), 1000);
  }

  return (
    <div>
      <h1>Hello!</h1>
      <h3>{num1}</h3>
      <button onClick={onClick1}>Click</button>
      <Child number={num2} callback={onClick2} />
    </div>
  );
}

function Child({ number, callback }) {

  return (
    <div style={{ backgroundColor: getRandomColor() }}>
      <h3>{number}</h3>
      <button onClick={callback}>Click</button>
    </div>
  );
}
