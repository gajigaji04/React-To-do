import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

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

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditingId(null);
    setEditText("");
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <div className="list-map">
        <h2>to-do list</h2>
        {todos.map((i) => (
          <div key={i.id}>
            <div>ID: {i.id}</div>

            {editingId === i.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="수정할 내용 입력하기"
                />
                <button onClick={() => saveEdit(i.id)}>저장</button>
              </>
            ) : (
              <>
                <div>Text: {i.text}</div>
                <div>Completed: {i.completed.toString()}</div>
                <button onClick={() => startEditing(i)}>수정하기</button>
              </>
            )}

            <button
              onClick={() => setTodos(todos.filter((todo) => todo.id !== i.id))}
            >
              삭제하기
            </button>

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
