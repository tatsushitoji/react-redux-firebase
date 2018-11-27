import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { reducer as authReducer } from '../modules/auth';
import { reducer as counterReducer } from '../modules/counter';
import { reducer as todoReducer } from '../modules/todo';

export const rootReducer = (history: History) =>
  combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    counter: counterReducer,
    todo: todoReducer,
    router: connectRouter(history),
  });
