import { Card, CardContent, Container, IconButton, Typography } from '@material-ui/core'
import { Check, Delete } from '@material-ui/icons'
import React from 'react'

const Todo = () => {
  return (
    <div>
      <Container>
        <Card variant='outlined' style={{ marginTop: 35, background: 'lightgray' }}>
          <CardContent>
            <Typography variant='h5' component='h2'>
              <IconButton>
                <Check style={{ color: 'green' }} />
              </IconButton>
              Todo 1
              <IconButton style={{ float: 'right' }}>
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
