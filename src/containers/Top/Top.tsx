import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose } from 'recompose';
import { RootState } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { addTodo, toggleTodo } from '../../modules/todo';
import { head } from '../../hocs/head';
import { TopComponent } from '../../components/pages/Top';
import { withFirebase } from 'react-redux-firebase';

const mapStateToProps = (state: RootState) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  add: (text: string) => dispatch(addTodo(text)),
  toggle: (event: React.ChangeEvent) => dispatch(toggleTodo(event.target.id)),
});

export const Top = compose<any, { store?: unknown }>(
  head('Top'),
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TopComponent);
