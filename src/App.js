import { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("Some API goes here");
      const responseData = await response.json();

      const loadedTodos = [];

      for (const key in responseData) {
        loadedTodos.push({
          id: key,
          text: responseData[key].text,
        });
      }

      setTodos(loadedTodos);
    };

    fetchTodos();
  }, []);

  const addTodoHandler = async (todoText) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
    const response = await fetch("Some API goes here", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const removeTodoHandler = async (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });

    fetch("Some API goes here", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoId),
    });
  };

  return (
    <div>
      <NavigationBar />
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
