import { Card, CardContent, Container, IconButton, Typography } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import React from 'react'

const Todo = () => {
  return (
    <div>
      <Container>
        <Card variant='outlined' style={{ marginTop: 35, background: 'lightgray' }}>
          <CardContent>
            <Typography variant='h5' component='h2'>
              <IconButton><Check style={{ color: 'green' }} /></IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>

    </div>
  )
}

export default Todo
