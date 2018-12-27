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
