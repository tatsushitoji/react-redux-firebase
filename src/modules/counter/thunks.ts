import { ActionCreator } from 'redux';
import {
  counterLoadingStart,
  counterLoadingFinish,
  counterLoadingReset,
} from '.';
import { FirebaseAction } from '../shared/types';

export const incrementAmount: ActionCreator<FirebaseAction<void>> = (
  amount: number,
) => (dispatch, getState, { getFirestore }) => {
  dispatch(counterLoadingStart());
  const firestore = getFirestore();
  const state = getState();
  const stateCount: number = state.firestore.data.counter.counter1.count;
  firestore
    .update('counter/counter1', { count: stateCount + amount })
    .then(() => {
      dispatch(counterLoadingFinish());
    })
    .catch((err: Error) => {
      console.log(err);
      dispatch(counterLoadingFinish());
    })
    .finally(() => {
      dispatch(counterLoadingReset());
    });
};

export const decrementAmount: ActionCreator<FirebaseAction<void>> = (
  amount: number,
) => (dispatch, getState, { getFirestore }) => {
  dispatch(counterLoadingStart());
  const firestore = getFirestore();
  const state = getState();
  const stateCount: number = state.firestore.data.counter.counter1.count;
  firestore
    .update('counter/counter1', { count: stateCount - amount })
    .then(() => {
      dispatch(counterLoadingFinish());
    })
    .catch((err: Error) => {
      console.log(err);
      dispatch(counterLoadingFinish());
    })
    .finally(() => {
      dispatch(counterLoadingReset());
    });
};
