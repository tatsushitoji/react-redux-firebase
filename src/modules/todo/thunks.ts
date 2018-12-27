import { ActionCreator } from 'redux';
import { todoLoadingStart, todoLoadingFinish, todoLoadingReset } from '.';
import { FirebaseAction } from '../shared/types';

export const addTodo: ActionCreator<FirebaseAction<void>> = (text: string) => (
  dispatch,
  __,
  { getFirestore },
) => {
  dispatch(todoLoadingStart());
  const firestore = getFirestore();
  firestore
    .add('todos', { text, completed: false })
    .then(() => {
      dispatch(todoLoadingFinish());
    })
    .catch((err: Error) => {
      console.log(err);
      dispatch(todoLoadingFinish());
    })
    .finally(() => {
      dispatch(todoLoadingReset());
    });
};

export const toggleTodo: ActionCreator<FirebaseAction<void>> = (id: string) => (
  dispatch,
  getState,
  { getFirestore },
) => {
  dispatch(todoLoadingStart());
  const firestore = getFirestore();
  const state = getState();
  const todo = state.firestore.data.todos[id];
  firestore
    .update(`todos/${id}`, { completed: !todo.completed })
    .then(() => {
      dispatch(todoLoadingFinish());
    })
    .catch((err: Error) => {
      console.log(err);
      dispatch(todoLoadingFinish());
    })
    .finally(() => {
      dispatch(todoLoadingReset());
    });
};
