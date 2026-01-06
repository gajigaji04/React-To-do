import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("내용은 공백으로 비워둘 수 없습니다.");
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div className="App">
      <div className="list-map">
        <h2>to-do list</h2>
        {todos.map((i) => (
          <div key={i.id}>
            <div>ID: {i.id}</div>
            <div>Text: {i.text}</div>
            <div>Completed: {i.completed.toString()}</div>
            <hr />
          </div>
        ))}
      </div>
      <div className="input">
        <form onSubmit={addTodo}>
          <div>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></input>
            <button type="submit">작성하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
