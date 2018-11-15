import { Actions } from '.';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

export const reducer = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    default:
      return state;
  }
};
