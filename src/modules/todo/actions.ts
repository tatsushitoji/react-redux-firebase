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
