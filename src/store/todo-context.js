import React, { useState } from "react";

import Todo from "../models/todo";

export const TodoContext = React.createContext({
  items: [],
  addTodo: () => {},
  removeTodo: (id) => {},
});

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
