import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Play',
      isComplete: false
    },
    {
      id: 2,
      title: 'Come and Play',
      isComplete: true
    },
    {
      id: 3,
      title: 'Come and Cry',
      isComplete: true
    },
    {
      id: 4,
      title: 'Hello world!',
      isComplete: true
    }
  ])
  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
