import { Actions as AuthActions } from '../modules/auth/actions';
import { Actions as CounterActions } from '../modules/counter/actions';
import { Actions as TodoActions } from '../modules/todo/actions';

export type RootActions = AuthActions | CounterActions | TodoActions;
