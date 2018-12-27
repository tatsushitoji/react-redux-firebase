import { ActionCreator } from 'redux';
import { FirebaseAction } from '../shared/types';

export const LOADINGSTART = 'auth/loading_start';
export const LOADINGFINISH = 'auth/loading_finish';
export const LOADINGRESET = 'auth/loading_reset';

export const authLoadingStart = () => ({
  type: LOADINGSTART as typeof LOADINGSTART,
});

export const authLoadingFinish = () => ({
  type: LOADINGFINISH as typeof LOADINGFINISH,
});

export const authLoadingReset = () => ({
  type: LOADINGRESET as typeof LOADINGRESET,
});

export type Actions = ReturnType<
  typeof authLoadingStart | typeof authLoadingFinish | typeof authLoadingReset
>;

export interface BaseAuth {
  email: string;
  password: string;
}

export interface ISignup extends BaseAuth {
  username: string;
}

export const signUp: ActionCreator<FirebaseAction<void>> = ({
  email,
  password,
  username,
}: ISignup) => (_, __, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .createUser({ email, password }, { username, email })
    .catch((err: Error) => {
      console.log(err);
    });
};

export interface ILogin extends BaseAuth {}

export const logIn: ActionCreator<FirebaseAction<void>> = (payload: ILogin) => (
  dispatch,
  __,
  { getFirebase },
) => {
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
