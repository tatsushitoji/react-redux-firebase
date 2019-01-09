import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose, mapProps } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import { RootState } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { normalizeAnonymousUser, LoginPayload, Auth } from '../../modules/auth';
import { head } from '../../hocs/head';
import { HomeComponent, Props as HomeProps } from '../../components/pages/Home';

const mapStateToProps = (state: RootState) => ({
  auth: state.firebase.auth,
  firebase: state.firebase,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  normalizeAnonymousUser: (payload: LoginPayload) => (
    _: React.SyntheticEvent,
  ) => dispatch(normalizeAnonymousUser(payload)),
});

interface Props extends HomeProps {
  auth: Auth;
}

export const Home = compose<HomeProps, { store?: unknown }>(
  head('Home'),
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  mapProps<HomeProps, Props>(({ normalizeAnonymousUser }) => ({
    normalizeAnonymousUser,
  })),
)(HomeComponent);
