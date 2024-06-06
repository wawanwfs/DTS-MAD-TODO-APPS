let todos = JSON.parse(localStorage.getItem("todos")) || [
  { id: 1, text: "Learn React", disabled: false },
  { id: 2, text: "Build a Todo App", disabled: false },
];

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodos = () => {
  return todos.sort((a, b) => b.disabled - a.disabled);
};

export const addTodo = (text) => {
  const newTodo = { id: Date.now(), text, disabled: false };
  todos.push(newTodo);
  saveTodos();
  return newTodo;
};

export const editTodo = (id, newText) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.text = newText;
    saveTodos();
  }
  return todo;
};

export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
};

export const toggleTodoDisable = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.disabled = !todo.disabled;
    saveTodos();
  }
  return todo;
};
