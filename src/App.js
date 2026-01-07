import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  // 필터링 조건
  const filterTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
  });

  // localStorage에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 토글 버튼
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todos) =>
        todos.id === id ? { ...todos, completed: !todos.completed } : todos
      )
    );
  };

  // 글 작성
  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("내용은 공백으로 비워둘 수 없습니다.");
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
    setText("");
  };

  // 글 수정
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

  return (
    <div className="App">
      <h2 className="todo-logo">to-do list</h2>
      <div className="filter-btn">
        <button
          onClick={() => {
            setFilter("all");
          }}
        >
          전체
        </button>
        <button
          onClick={() => {
            setFilter("completed");
          }}
        >
          완료
        </button>
        <button
          onClick={() => {
            setFilter("active");
          }}
        >
          미완료
        </button>
      </div>

      <div className="list-map">
        {filterTodos.map((todo) => (
          <div key={todo.id}>
            {/* 체크 토글 */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            {/* 완료 시 회색 + 취소선 */}
            <span className={todo.completed ? "todo-done" : ""}>
              {todo.text}
            </span>

            {/* 수정 */}
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>저장</button>
              </>
            ) : (
              <button onClick={() => startEditing(todo)}>수정</button>
            )}

            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
            >
              삭제
            </button>

            <hr />
          </div>
        ))}
      </div>

      <form onSubmit={addTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}

export default App;
