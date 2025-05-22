import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Todo } from "../../types";
import "./TodoList.scss"

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
