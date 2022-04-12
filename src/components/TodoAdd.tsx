import * as React from 'react';
import { Button, Input, Grid } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { addTodoAtom, newTodoAtom } from '../store';

function TodoAdd() {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);

  return (
    <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
      <Input placeholder='New todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button onClick={() => addTodo('hyi')}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
