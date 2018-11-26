import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose } from 'recompose';
import { RootState } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { logIn, ILogin } from '../../modules/auth';
import { head } from '../../hocs/head';
import { LoginComponent, Props } from '../../components/pages/Login';
import { withFirebase } from 'react-redux-firebase';

const mapStateToProps = (state: RootState) => ({
  firebase: state.firebase,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  login: (payload: ILogin) => dispatch(logIn(payload)),
});
export const Login = compose<Props, { store?: unknown }>(
  head('Login'),
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginComponent);
