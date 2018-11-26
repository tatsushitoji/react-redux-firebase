import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose } from 'recompose';
import { RootState } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { signUp, ISignup } from '../../modules/auth';
import { head } from '../../hocs/head';
import { SignupComponent, Props } from '../../components/pages/Signup';
import { withFirebase } from 'react-redux-firebase';

const mapStateToProps = (state: RootState) => ({
  firebase: state.firebase,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  signup: (payload: ISignup) => dispatch(signUp(payload)),
});
export const Signup = compose<Props, { store?: unknown }>(
  head('Sginup'),
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SignupComponent);
