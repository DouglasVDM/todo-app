import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import { v4 as uuid } from "uuid";
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
      id: uuid(),
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
      <Container maxWidth='sm'>
        <Typography variant="h3" component='h1' >TodoList</Typography>
      </Container>      
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
