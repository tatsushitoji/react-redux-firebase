import { connect } from 'react-redux';
import { compose } from 'recompose';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../stores/store';
import {
  Header as HeaderComponent,
  Props,
  State,
} from '../../components/organisms/Header';
import { withFirebase } from 'react-redux-firebase';
import { logOut } from '../../modules/auth';

const mapStateToProps = (state: RootState) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, any>,
) => ({
  logout: () => dispatch(logOut()),
});

export const Header = compose<Props & State, Props & { store?: unknown }>(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(HeaderComponent);
