import { ActionCreator } from 'redux';
import { FBAction } from '../../types';

export const LOADINGSTART = 'counter/loading_start';
export const LOADINGFINISH = 'counter/loading_finish';
export const LOADINGRESET = 'counter/loading_reset';

export const counterLoadingStart = () => ({
  type: LOADINGSTART as typeof LOADINGSTART,
});

export const counterLoadingFinish = () => ({
  type: LOADINGFINISH as typeof LOADINGFINISH,
});

export const counterLoadingReset = () => ({
  type: LOADINGRESET as typeof LOADINGRESET,
});

export const incrementAmount: ActionCreator<FBAction<void>> = (
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

export const decrementAmount: ActionCreator<FBAction<void>> = (
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

// for epic
export const ASYNC_INCREMENT = 'counter/async_increment';
export const asyncIncrementAmount = (amount: number) => ({
  type: ASYNC_INCREMENT as typeof ASYNC_INCREMENT,
  payload: {
    amount,
  },
});

export type Actions = ReturnType<
  | typeof counterLoadingStart
  | typeof counterLoadingFinish
  | typeof counterLoadingReset
  | typeof asyncIncrementAmount
>;
