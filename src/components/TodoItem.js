import React from "react";

import classes from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  return (
    <li className={classes.item}>
      {props.text}
      <div className={classes.actions}>
        {/* <input className={classes.checkbox} type="checkbox" name="checked" /> */}
        <FontAwesomeIcon
          icon={faTrashAlt}
          className={classes.icon}
          size="lg"
          onClick={props.onRemoveTodo}
        />
      </div>
    </li>
  );
};

export default TodoItem;
