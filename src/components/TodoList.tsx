import * as React from 'react';
import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { todosAtom, toggleTodoAtom, updateTodoAtom, removeTodoAtom } from '../store';

function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);

  return (
    <>
      {todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done} onClick={() => toggleTodo(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(e) => updateTodo({ id: todo.id, text: e.target.value })}
          />
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
