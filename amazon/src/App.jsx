import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    // Check if the input is not empty (ignoring whitespace)
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="app-container">
      <h1>Dynamic List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="item-input"
        />
        <button onClick={addItem} className="add-button">
          Add Item
        </button>
      </div>
      <div className="list-container">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
