import React from "react";
import { Todo } from "../../types";
import "./TodoItem.scss";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        id={`todo-${todo.id}`}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
    </li>
  );
};

export default TodoItem;
