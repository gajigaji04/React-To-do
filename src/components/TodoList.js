import React, { useState } from "react";

export default function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    editTodo(id, editText);
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="list-map">
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "todo-done" : ""}>{todo.text}</span>

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

          <button onClick={() => deleteTodo(todo.id)}>삭제</button>

          <hr />
        </div>
      ))}
    </div>
  );
}
