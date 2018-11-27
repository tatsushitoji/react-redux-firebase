import { ActionCreator } from 'redux';
import { FBAction } from '../../types';

export const LOADINGSTART = 'todo/loading_start';
export const LOADINGFINISH = 'todo/loading_finish';
export const LOADINGRESET = 'todo/loading_reset';

export const todoLoadingStart = () => ({
  type: LOADINGSTART as typeof LOADINGSTART,
});

export const todoLoadingFinish = () => ({
  type: LOADINGFINISH as typeof LOADINGFINISH,
});

export const todoLoadingReset = () => ({
  type: LOADINGRESET as typeof LOADINGRESET,
});

export type Actions = ReturnType<
  typeof todoLoadingStart | typeof todoLoadingFinish | typeof todoLoadingReset
>;

export const addTodo: ActionCreator<FBAction<void>> = (text: string) => (
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

export const toggleTodo: ActionCreator<FBAction<void>> = (id: string) => (
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
