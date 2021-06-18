import React from 'react'

import TodoItem from './TodoItem';
import classes from "./TodoList.module.css";

const TodoList = () => {
  return (
    <ul>
      <TodoItem />
    </ul>
  )
}

export default TodoList
