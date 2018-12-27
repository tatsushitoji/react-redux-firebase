export const LOADINGSTART = 'auth/loading_start';
export const LOADINGFINISH = 'auth/loading_finish';
export const LOADINGRESET = 'auth/loading_reset';

export const authLoadingStart = () => ({
  type: LOADINGSTART as typeof LOADINGSTART,
});

export const authLoadingFinish = () => ({
  type: LOADINGFINISH as typeof LOADINGFINISH,
});

export const authLoadingReset = () => ({
  type: LOADINGRESET as typeof LOADINGRESET,
});

export type Actions = ReturnType<
  typeof authLoadingStart | typeof authLoadingFinish | typeof authLoadingReset
>;
