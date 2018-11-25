import { connect } from 'react-redux';
import { compose } from 'recompose';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../stores/store';
import {
  SideNavi as SideNaviComponent,
  Props,
  State,
} from '../../components/organisms/SideNavi';
import { withFirebase } from 'react-redux-firebase';

const mapStateToProps = (state: RootState) => ({
  auth: state.firebase.auth,
});

export const SideNavi = compose<Props & State, Props & { store?: unknown }>(
  withFirebase,
  connect(
    mapStateToProps,
    {},
  ),
)(SideNaviComponent);
