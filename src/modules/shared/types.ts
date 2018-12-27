import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../stores/store';

// export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type TAction<R> = ThunkAction<R, RootState, undefined, any>;

export type FirebaseAction<R> = ThunkAction<R, RootState, any, any>;
