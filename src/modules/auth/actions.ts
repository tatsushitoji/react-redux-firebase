import { ActionCreator } from 'redux';
import { FBAction } from '../../types';

export interface BaseAuth {
  email: string;
  password: string;
}

export interface ISignup extends BaseAuth {
  username: string;
}

export const signUp: ActionCreator<FBAction<void>> = ({
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

export const logIn: ActionCreator<FBAction<void>> = (payload: ILogin) => (
  _,
  __,
  { getFirebase },
) => {
  const firebase = getFirebase();
  firebase.login(payload).catch((err: Error) => {
    console.log(err);
  });
};

export const logOut: ActionCreator<FBAction<void>> = () => (
  _,
  __,
  { getFirebase },
) => {
  const firebase = getFirebase();
  console.log('looooooooog out');
  firebase.logout().catch((err: Error) => {
    console.log(err);
  });
};
