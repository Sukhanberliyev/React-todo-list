import React, { useRef } from "react";

// import { TodoContext } from "../store/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo = (props) => {
  // const todosCtx = useContext(TodoContext);
  const todoTextInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    props.onAddTodo(enteredText);

    todoTextInputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {/* <label htmlFor="">Todo text</label> */}
      <input placeholder="Add new task" type="text" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
