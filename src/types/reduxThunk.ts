import { ThunkAction } from 'redux-thunk';
import { RootState } from '../stores/store';

export type TAction<R> = ThunkAction<R, RootState, undefined, any>;

export type FBAction<R> = ThunkAction<R, RootState, any, any>;
