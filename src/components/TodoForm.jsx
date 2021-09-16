import React from 'react';
import { Button, Container, FormControl, TextField } from '@material-ui/core';


const TodoForm = () => {
  return (
    <div>
      <Container maxWidth='sm'>
        <form>
          <FormControl fullWidth={true}>
            <TextField label='I will do this' required={true} />
            <Button variant='contained' color='primary' type='submit' style={{marginTop:5}}>
              Add todo
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  )
}

export default TodoForm
