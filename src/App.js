import './App.css';

import NavigationBar from './components/NavigationBar';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <NavigationBar  />
    <NewTodo />
    <TodoList />
    </div>
  );
}

export default App;
