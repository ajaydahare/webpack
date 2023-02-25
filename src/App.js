import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1 className="title">Counter : {counter}</h1>
      <button className="addButton" onClick={handleAdd}>
        +Add
      </button>
    </>
  );
};

export default App;
