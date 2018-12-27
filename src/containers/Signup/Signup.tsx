import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose, mapProps } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import { RootState, history } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { signUp, SignupPayload, Auth } from '../../modules/auth';
import { head } from '../../hocs/head';
import { getDerivedStateFromProps } from '../../hocs/getDerivedStateFromProps';
import {
  SignupComponent,
  Props as SignupProps,
} from '../../components/pages/Signup';

const mapStateToProps = (state: RootState) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  signup: (payload: SignupPayload) => dispatch(signUp(payload)),
});

interface Props extends SignupProps {
  auth: Auth;
}

export const Signup = compose<SignupProps, { store?: unknown }>(
  head('Signup'),
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
  mapProps<SignupProps, Props>(({ signup }) => ({
    signup,
  })),
)(SignupComponent);
