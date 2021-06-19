import TodoContextProvider from "./store/todo-context";
import NavigationBar from "./components/NavigationBar";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoContextProvider>
      <NavigationBar />
      <NewTodo />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
