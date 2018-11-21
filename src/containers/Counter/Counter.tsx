import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { compose } from 'recompose';
import { RootState } from '../../stores/store';
import {
  incrementAmount,
  decrementAmount,
  asyncIncrementAmount,
} from '../../modules/counter';
import { head } from '../../components/hocs/head';
import {
  Counter as CounterComponent,
  Props,
} from '../../components/pages/Counter';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps = (state: RootState) => {
  return {
    count:
      state.firestore.data.counter &&
      state.firestore.data.counter.counter1.count,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, any>,
) => ({
  increment: (_: React.SyntheticEvent) => dispatch(incrementAmount(3)),
  decrement: (_: React.SyntheticEvent) => dispatch(decrementAmount(2)),
  asyncIncrement: (_: React.SyntheticEvent) =>
    dispatch(asyncIncrementAmount(5)),
});

export const Counter = compose<Props, { store?: unknown }>(
  head('counter'),
  firestoreConnect(['counter']),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CounterComponent);
