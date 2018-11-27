import { LOADINGSTART, LOADINGFINISH, LOADINGRESET, Actions } from '.';

export interface State {
  isLoading: number;
}

const initialState: State = {
  isLoading: 0,
};

export const reducer = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    case LOADINGSTART:
      return { ...state, isLoading: state.isLoading + 1 };
    case LOADINGFINISH:
      return { ...state, isLoading: state.isLoading - 1 };
    case LOADINGRESET:
      return initialState;
    default:
      return state;
  }
};
