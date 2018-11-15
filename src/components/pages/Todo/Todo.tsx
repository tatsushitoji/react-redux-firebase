import * as React from 'react';
import { PaperContainer } from '../../atoms/PaperContainer';
import { TodoList, TodoForm } from '../../organisms';
import { ITodo } from '../../../modules/todo';

export interface Props {
  todos: ITodo[];
  add: (_: string) => void;
  toggle: (_: React.ChangeEvent) => void;
}

export const TodoComponent: React.SFC<Props> = ({ todos, add, toggle }) => (
  <PaperContainer>
    {todos && todos.length > 0 && <TodoList todos={todos} toggle={toggle} />}
    <TodoForm add={add} />
  </PaperContainer>
);
