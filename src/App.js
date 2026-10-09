import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import { useTodos } from "./hooks/useTodos";
import { FILTERS } from "./constants/filters";

function App() {
  const { todos, addTodo, editTodo, deleteTodo, toggleTodo } = useTodos();
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredTodos = todos.filter((t) => {
    if (filter === FILTERS.COMPLETED) return t.completed;
    if (filter === FILTERS.ACTIVE) return !t.completed;
    return true;
  });

  return (
    <div className="App">
      <h2 className="todo-logo">to-do list</h2>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
      <TodoInput addTodo={addTodo} />
    </div>
  );
}

export default App;
