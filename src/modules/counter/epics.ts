import 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { incrementAmount, ASYNC_INCREMENT } from '.';

// TODO: more strict type
export const asyncIncrementEpic: Epic = action$ =>
  action$.pipe(
    ofType(ASYNC_INCREMENT),
    delay(1000),
    map(action => incrementAmount(action.payload.amount)),
  );
