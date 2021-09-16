import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    }));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: 10,
      title: text,
      isComplete: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
