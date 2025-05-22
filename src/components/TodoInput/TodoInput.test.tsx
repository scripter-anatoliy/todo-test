import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "./TodoInput";

describe("TodoInput", () => {
  const placeholderText = "What needs to be done? Press Enter after typing";
  let mockOnAdd: jest.Mock;

  beforeEach(() => {
    mockOnAdd = jest.fn();
  });

  const setup = (props = {}) => {
    const utils = render(<TodoInput onAdd={mockOnAdd} {...props} />);
    const input = screen.getByPlaceholderText(placeholderText);
    return {
      input,
      ...utils,
    };
  };

  test("Провереям поле ввода и плейсхолдер", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  test("Проверяем добавление", async () => {
    const { input } = setup();
    
    await userEvent.type(input, "Новая задача{enter}");
    
    expect(mockOnAdd).toHaveBeenCalledWith("Новая задача");
  });

  test("проверяем на корректность, пробел в начале", async () => {
    const { input } = setup();
    
    await userEvent.type(input, "   {enter}");
    
    expect(mockOnAdd).not.toHaveBeenCalled();
  });

  test("Проверяем, что после добавление, поле пустое", async () => {
    const { input } = setup();
    
    await userEvent.type(input, "Новая задача{enter}");
    
    expect(input).toHaveValue("");
  });
});