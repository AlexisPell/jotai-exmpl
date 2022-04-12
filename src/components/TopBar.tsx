import * as React from 'react';
import { Button, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useAtom } from 'jotai';
import { Todo, todosAtom } from '../store';

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const onLoad = () => {
    fetch('https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json')
      .then((r) => r.json())
      .then((d: Todo[]) => setTodos(d));
  };
  const [, setTodos] = useAtom(todosAtom);

  return (
    <Grid pt={2} templateColumns='1fr 1fr' columnGap='3'>
      <ColorModeSwitcher />
      <Button onClick={() => onLoad()}>Load</Button>
    </Grid>
  );
}

export default TopBar;
