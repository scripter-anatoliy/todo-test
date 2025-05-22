import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import "./TodoInput.scss";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (input === "" && newValue.startsWith(" ")) {
      return;
    }
    setInput(newValue);
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done? Press Enter after typing"
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;
