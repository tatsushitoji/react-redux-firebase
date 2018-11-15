import { ActionCreator } from 'redux';
import { FBAction } from '../../types';

export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const ASYNC_INCREMENT = 'counter/async_increment';

export const incrementAmount: ActionCreator<FBAction<void>> = (
  amount: number,
) => (_, getState, getFirestore) => {
  const firestore = getFirestore();
  const state = getState();
  const stateCount: number = state.firestore.data.counter.counter1.count;
  firestore
    .update('counter/counter1', { count: stateCount + amount })
    .catch((err: Error) => {
      console.log(err);
    });
};

export const decrementAmount: ActionCreator<FBAction<void>> = (
  amount: number,
) => (_, getState, getFirestore) => {
  const firestore = getFirestore();
  const state = getState();
  const stateCount: number = state.firestore.data.counter.counter1.count;
  firestore
    .update('counter/counter1', { count: stateCount - amount })
    .catch((err: Error) => {
      console.log(err);
    });
};

export const asyncIncrementAmount = (amount: number) => ({
  type: ASYNC_INCREMENT as typeof ASYNC_INCREMENT,
  payload: {
    amount,
  },
});

export type Actions = ReturnType<typeof asyncIncrementAmount>;
