import React, { useState } from "react";
import "./App.css";

function App() {
  const todo = [
    { id: 1, text: "리액트 공부하기", completed: true },
    { id: 2, text: "독서하기", completed: false },
  ];

  return (
    <div className="App">
      <h2>to-do list</h2>
      {todo.map((i) => (
        <div key={i.id}>
          <div>ID: {i.id}</div>
          <div>Text: {i.text}</div>
          <div>Completed: {i.completed.toString()}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
