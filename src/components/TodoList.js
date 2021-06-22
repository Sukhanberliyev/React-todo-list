import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
  
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
