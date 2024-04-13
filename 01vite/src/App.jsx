import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');
  const [statusValue, setStatusValue] = useState('');

  function increaseValue() {
    if (value <= 20) {
      setValue(value + 1);
      setStatusValue('Increase');
    }
  }

  function decreaseValue() {
    if (value !== 0) {
      setValue(value - 1);
      setStatusValue('Decrease');
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <h1>Counter: {value}</h1>
      <h1>{name} has clicked {statusValue.toLowerCase()} {value} times !!</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  );
}

export default App;
 