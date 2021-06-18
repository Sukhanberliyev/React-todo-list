import React from 'react'

import classes from "./NewTodo.module.css"

const NewTodo = () => {
  return (
    <form className={classes.form}>
      {/* <label htmlFor="">Todo text</label> */}
      <input placeholder="Add new task" type="text" />
      <button>Add</button>
    </form>
  )
}

export default NewTodo
