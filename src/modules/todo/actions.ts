import { ActionCreator } from 'redux';
import { FBAction } from '../../types';

export const ADD_TODO = 'todo/add_todo';
export const TOGGLE_TODO = 'todo/toggle_todo';

export const addTodo: ActionCreator<FBAction<void>> = (text: string) => (
  _,
  __,
  getFirestore,
) => {
  const firestore = getFirestore();
  firestore.add('todos', { text, completed: false }).catch((err: Error) => {
    console.log(err);
  });
};

export const toggleTodo: ActionCreator<FBAction<void>> = (id: string) => (
  _,
  getState,
  getFirestore,
) => {
  const firestore = getFirestore();
  const state = getState();
  const todo = state.firestore.data.todos[id];
  firestore
    .update(`todos/${id}`, { completed: !todo.completed })
    .catch((err: Error) => {
      console.log(err);
    });
};
