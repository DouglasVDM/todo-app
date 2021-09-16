import React, { useState } from 'react';
import { Button, Container, FormControl, TextField } from '@material-ui/core';


const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <Container maxWidth='sm'>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth={true}>
            <TextField
              label='What still needs to be done?'
              required={true}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <Button variant='contained' color='primary' type='submit' style={{ marginTop: 5 }}>
              Add
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  )
}

export default TodoForm
