import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="py-5 px-12">
      <h1 className="title">Counter : {counter}</h1>
      <button className="addButton" onClick={handleAdd}>
        +Add
      </button>
      <button
        className="rounded-sm text-sm bg-teal-700 ml-2 px-6 py-2"
        onClick={handleAdd}
      >
        - Minus
      </button>
    </div>
  );
};

export default App;
