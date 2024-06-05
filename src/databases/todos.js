let todos =
  JSON.parse(localStorage.getItem("todos")) ||
  [
    // { id: 1, text: "Learn React", disabled: false },
    // { id: 2, text: "Build a Todo App", disabled: false },
  ];

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodos = () => {
  return todos;
};

export const addTodo = (text) => {
  const newTodo = { id: Date.now(), text, disabled: false };
  todos.push(newTodo);
  saveTodosToLocalStorage(todos);
  return newTodo;
};

export const editTodo = (id, newText) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.text = newText;
    saveTodosToLocalStorage(todos);
  }
  return todo;
};

export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodosToLocalStorage(todos);
};

export const toggleTodoDisable = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.disabled = !todo.disabled;
    saveTodosToLocalStorage(todos);
  }
  return todo;
};
