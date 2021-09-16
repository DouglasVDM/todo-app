import { Card, CardContent, Container, IconButton, Typography } from '@material-ui/core'
import { Check, Delete } from '@material-ui/icons'
import React from 'react'

const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo }) => {
  const markComplete = () => checkTodo(id);
  const delTodo = () => deleteTodo(id);
  const todoStyle = isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
  const iconStyle = isCompleted ? { color: 'green' } : { color: 'red' };

  return (
    <div>
      <Container>
        <Card variant='outlined' style={{ marginTop: 35, background: 'lightgray' }}>
          <CardContent>
            <Typography
              variant='h5'
              component='h2'
              style={todoStyle}
            >
              <IconButton onClick={markComplete}>
                <Check style={iconStyle} />
              </IconButton>
              {title}
              <IconButton
                style={{ float: 'right' }}
                onClick={delTodo}
              >
                <Delete style={{ color: 'red' }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default Todo
