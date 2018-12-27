import { ActionCreator } from 'redux';
import {
  authLoadingStart,
  authLoadingFinish,
  authLoadingReset,
  SignupPayload,
  LoginPayload,
} from '.';
import { FirebaseAction } from '../shared/types';

export const signUp: ActionCreator<FirebaseAction<void>> = ({
  email,
  password,
  username,
}: SignupPayload) => (_, __, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .createUser({ email, password }, { username, email })
    .catch((err: Error) => {
      console.log(err);
    });
};

export const logIn: ActionCreator<FirebaseAction<void>> = (
  payload: LoginPayload,
) => (dispatch, __, { getFirebase }) => {
  dispatch(authLoadingStart());
  const firebase = getFirebase();
  firebase
    .login(payload)
    .then(() => {
      dispatch(authLoadingFinish());
    })
    .catch((err: Error) => {
      console.log(err);
      dispatch(authLoadingFinish());
    })
    .finally(() => {
      dispatch(authLoadingReset());
    });
};

export const logOut: ActionCreator<FirebaseAction<void>> = () => (
  _,
  __,
  { getFirebase },
) => {
  const firebase = getFirebase();
  firebase.logout().catch((err: Error) => {
    console.log(err);
  });
};
