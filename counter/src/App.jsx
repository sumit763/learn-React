import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <div style={{ fontSize: "30px", marginBottom: "10px" }}>{counter}</div>
      <button
        onClick={increase}
        style={{
          backgroundColor: "gray",
          borderRadius: "10px",
          marginBottom: "10px",
          padding: "10px 20px",
        }}
      >
        Increase
      </button>
      <button
        onClick={decrease}
        style={{
          backgroundColor: "gray",
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
