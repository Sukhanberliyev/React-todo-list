class Todo {
  constructor(todoText) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
