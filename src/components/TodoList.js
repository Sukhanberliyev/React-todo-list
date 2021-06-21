import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todosCtx = useContext(TodoContext);
  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
