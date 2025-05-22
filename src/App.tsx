import React, { useState, useCallback, useMemo } from "react";
import "./App.scss";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import {
  FilterType,
  Todo,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
  FILTER_ALL,
} from "./types";
import { v4 } from "uuid";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>(FILTER_ALL);

  const addTodo = useCallback((text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: v4(), text: text, completed: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === FILTER_ACTIVE) return !todo.completed;
      if (filter === FILTER_COMPLETED) return todo.completed;
      return true;
    });
  }, [todos, filter]);

  const activeTodoCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  const hasCompletedTodos = useMemo(() => {
    return todos.some((todo) => todo.completed);
  }, [todos]);

  return (
    <div className="App">
      <h1>todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      <TodoFooter
        activeTodoCount={activeTodoCount}
        filter={filter}
        onSetFilter={setFilter}
        onClearCompleted={clearCompleted}
        hasCompletedTodos={hasCompletedTodos}
      />
    </div>
  );
}

export default App;
