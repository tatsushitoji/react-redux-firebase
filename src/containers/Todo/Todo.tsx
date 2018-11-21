import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose } from 'recompose';
import { RootState } from '../../stores/store';
import { RootActions } from '../../stores/actions';
import { addTodo, toggleTodo } from '../../modules/todo';
import { head } from '../../components/hocs/head';
import { TodoComponent, Props } from '../../components/pages/Todo';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.firestore.ordered.todos,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootActions>,
) => ({
  add: (text: string) => dispatch(addTodo(text)),
  toggle: (event: React.ChangeEvent) => dispatch(toggleTodo(event.target.id)),
});

export const Todo = compose<Props, { store?: unknown }>(
  head('Todo'),
  firestoreConnect(['todos']),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TodoComponent);
