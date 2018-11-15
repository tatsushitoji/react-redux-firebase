// import { ADD_TODO, TOGGLE_TODO } from '.';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface State {
  todos: ITodo[];
}

const initialState: State = {
  todos: [],
};

export const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    default:
      return state;
  }
};
