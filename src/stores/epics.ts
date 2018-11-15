import { combineEpics } from 'redux-observable';
import { getFirestore } from 'redux-firestore';
import { asyncIncrementEpic } from '../modules/counter';

export const rootEpic = (...args: any) =>
  combineEpics(asyncIncrementEpic as any)(...args, getFirestore);
