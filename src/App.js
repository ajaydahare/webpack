import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={handleAdd}>+Add</button>
    </>
  );
};

export default App;
