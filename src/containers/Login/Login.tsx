import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose, mapProps } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import { RootState, history } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { logIn, LoginPayload, Auth } from '../../modules/auth';
import { head } from '../../hocs/head';
import { getDerivedStateFromProps } from '../../hocs/getDerivedStateFromProps';
import {
  LoginComponent,
  Props as LoginProps,
} from '../../components/pages/Login';

const mapStateToProps = (state: RootState) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  login: (payload: LoginPayload) => dispatch(logIn(payload)),
});

interface Props extends LoginProps {
  auth: Auth;
}

export const Login = compose<LoginProps, { store?: unknown }>(
  head('Login'),
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  getDerivedStateFromProps<Props>((nextProps, _) => {
    if (nextProps.auth.isLoaded && !nextProps.auth.isEmpty) {
      history.push('/home');
    }
    return nextProps;
  }),
  mapProps<LoginProps, Props>(({ login }) => ({
    login,
  })),
)(LoginComponent);
